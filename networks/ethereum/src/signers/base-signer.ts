import { ICryptoBytes, IWallet } from '@interchainjs/types';
import { keccak256 } from 'ethereum-cryptography/keccak';
import { secp256k1 } from '@noble/curves/secp256k1.js';
import { hexToBytes, bytesToHex } from 'ethereum-cryptography/utils';
import {
  EthereumSignerConfig,
  EthereumBroadcastOptions,
  EthereumBroadcastResponse,
  EthereumSignedTransaction,
  EthereumAccountData,
  IEthereumSigner,
  EthereumSignArgs
} from './types';
import { TransactionParams } from '../types/requests';
import { TransactionReceipt } from '../types/responses';
import { createEthereumSignerConfig } from './config';

/**
 * Base implementation for Ethereum signers
 * Provides common functionality for both Legacy and EIP-1559 signers
 */
export abstract class BaseEthereumSigner implements IEthereumSigner {
  protected config: EthereumSignerConfig;
  protected auth: IWallet;

  constructor(auth: IWallet, config: EthereumSignerConfig) {
    this.auth = auth;
    // Store the original queryClient to avoid deepmerge issues
    const originalQueryClient = config.queryClient;
    this.config = createEthereumSignerConfig(config);
    // Restore the original queryClient to preserve its prototype chain
    this.config.queryClient = originalQueryClient;
  }

  get queryClient() {
    return this.config.queryClient;
  }

  // IUniSigner interface methods
  async getAccounts(): Promise<readonly EthereumAccountData[]> {
    const accounts = await this.auth.getAccounts();
    return accounts.map(account => {
      const pubkey = account.getPublicKey();
      return {
        address: account.address!,
        pubkey: pubkey.value.value,
        algo: account.algo,
        getPublicKey: () => {
          return pubkey;
        }
      }
    });
  }

  async signArbitrary(data: Uint8Array, index?: number): Promise<ICryptoBytes> {
    return this.auth.signByIndex(data, index);
  }

  abstract sign(args: EthereumSignArgs): Promise<EthereumSignedTransaction>;

  async broadcast(
    signed: EthereumSignedTransaction,
    options: EthereumBroadcastOptions = {}
  ): Promise<EthereumBroadcastResponse> {
    // Delegate to broadcastArbitrary to avoid duplicate logic
    return this.broadcastArbitrary(signed.txBytes, options);
  }

  async signAndBroadcast(
    args: EthereumSignArgs,
    options?: EthereumBroadcastOptions
  ): Promise<EthereumBroadcastResponse> {
    const signed = await this.sign(args);
    return this.broadcast(signed, options);
  }

  async broadcastArbitrary(
    data: Uint8Array,
    options: EthereumBroadcastOptions = {}
  ): Promise<EthereumBroadcastResponse> {
    const rawTx = '0x' + bytesToHex(data);

    try {
      const txHash = await this.config.queryClient.sendRawTransaction(rawTx);

      const wait = async (timeoutMs?: number, pollIntervalMs?: number): Promise<TransactionReceipt> => {
        const timeout = timeoutMs || options.timeoutMs || 60000; // 60 seconds default
        const pollInterval = pollIntervalMs || options.pollIntervalMs || 1000; // 1 second default
        const startTime = Date.now();

        while (Date.now() - startTime < timeout) {
          try {
            const receipt = await this.config.queryClient.getTransactionReceipt(txHash);
            if (receipt) {
              return receipt;
            }
          } catch (error) {
            // Transaction not yet mined, continue polling
          }

          await new Promise(resolve => setTimeout(resolve, pollInterval));
        }

        throw new Error(`Transaction ${txHash} not confirmed within ${timeout}ms`);
      };

      const response: EthereumBroadcastResponse = {
        transactionHash: txHash,
        rawResponse: txHash,
        broadcastResponse: txHash,
        wait
      };

      // If waitForConfirmation is true, wait for the transaction
      if (options.waitForConfirmation) {
        await wait(options.timeoutMs, options.pollIntervalMs);
      }

      return response;
    } catch (error) {
      throw new Error(`Failed to broadcast transaction: ${error}`);
    }
  }

  // Ethereum-specific methods
  async getAddresses(): Promise<string[]> {
    const accounts = await this.getAccounts();
    return accounts.map(account => account.address);
  }

  // Network/query helpers that delegate to query client
  async getChainId(): Promise<number> {
    return this.config.queryClient.getChainId();
  }

  async getNonce(address: string): Promise<number> {
    return this.config.queryClient.getTransactionCount(address, 'latest');
  }

  protected async getGasPrice(): Promise<bigint> {
    return this.config.queryClient.getGasPrice();
  }

  protected async getMaxPriorityFeePerGas(): Promise<bigint> {
    return this.config.queryClient.getMaxPriorityFeePerGas();
  }

  protected async estimateGas(transaction: TransactionParams): Promise<bigint> {
    const estimatedGas = await this.config.queryClient.estimateGas(transaction);
    const multiplier = this.config.gasMultiplier || 1.5;
    return BigInt(Math.ceil(Number(estimatedGas) * multiplier));
  }

  async signPersonalMessage(message: string, address?: string): Promise<string> {
    const accounts = await this.getAccounts();
    const account = address ? accounts.find(acc => acc.address.toLowerCase() === address.toLowerCase()) : accounts[0];

    if (!account) {
      throw new Error('Account not found');
    }

    // Find the account index
    const accountIndex = accounts.findIndex(acc => acc.address === account.address);

    // Ethereum personal message prefix
    const prefix = '\x19Ethereum Signed Message:\n';
    const messageBytes = new TextEncoder().encode(message);
    const prefixedMessage = new TextEncoder().encode(prefix + messageBytes.length + message);
    const messageHash = keccak256(prefixedMessage);

    // Sign with recovery to get the full 65-byte signature
    const { r, s, recovery } = await this.signWithRecovery(messageHash, accountIndex);

    // Combine into 65-byte signature format
    const signature = new Uint8Array(65);
    signature.set(r, 0);
    signature.set(s, 32);
    signature[64] = recovery;

    return '0x' + bytesToHex(signature);
  }

  async verifyPersonalMessage(message: string, signature: string, address: string): Promise<boolean> {
    try {
      // Remove 0x prefix from signature
      const sigBytes = hexToBytes(signature.replace(/^0x/, ''));
      if (sigBytes.length !== 65) {
        return false;
      }

      // Extract r, s, v from signature
      const r = sigBytes.slice(0, 32);
      const s = sigBytes.slice(32, 64);
      const v = sigBytes[64];

      // Ethereum personal message prefix
      const prefix = '\x19Ethereum Signed Message:\n';
      const messageBytes = new TextEncoder().encode(message);
      const prefixedMessage = new TextEncoder().encode(prefix + messageBytes.length + message);
      const messageHash = keccak256(prefixedMessage);

      // Create signature object - try different recovery values since v might be in different formats
      let signatureObj;
      let recoveryBit = v;

      // Handle different v formats (27/28 for legacy, 0/1 for modern)
      if (v >= 27) {
        recoveryBit = v - 27;
      }

      signatureObj = secp256k1.Signature.fromBytes(new Uint8Array([...r, ...s]), 'compact').addRecoveryBit(recoveryBit);

      // Recover public key
            const recoveredPubkey = signatureObj.recoverPublicKey(messageHash);
            const pubkeyBytes = recoveredPubkey.toBytes(false); // Uncompressed format (65 bytes)

      // Derive address from public key
      const pubNoPrefix = pubkeyBytes.slice(1); // Remove 0x04 prefix
      const hash = keccak256(pubNoPrefix);
      const addressBytes = hash.slice(-20);
      const recoveredAddress = '0x' + bytesToHex(addressBytes);



      // Compare addresses (case-insensitive)
      return recoveredAddress.toLowerCase() === address.toLowerCase();
    } catch (error) {
      return false;
    }
  }

  /**
   * Helper method to convert values to padded hex strings
   */
  protected toHexPadded(value: number | bigint): string {
    const hex = value.toString(16);
    return hex.length % 2 === 0 ? hex : '0' + hex;
  }

  /**
   * Helper method to sign a message hash with recovery
   */
  protected async signWithRecovery(msgHash: Uint8Array, accountIndex?: number): Promise<{ r: Uint8Array; s: Uint8Array; recovery: number }> {
    const signature = await this.signArbitrary(msgHash, accountIndex);
    const sigBytes = signature.value;

    if (sigBytes.length === 65) {
      // Wallet already includes recovery parameter
      const r = sigBytes.slice(0, 32);
      const s = sigBytes.slice(32, 64);
      const recovery = sigBytes[64];
      return { r, s, recovery };
    } else if (sigBytes.length === 64) {
      // Wallet returns only r + s, we need to calculate recovery
      const r = sigBytes.slice(0, 32);
      const s = sigBytes.slice(32, 64);

      // Get the account's public key to calculate recovery
      const accounts = await this.getAccounts();
      const account = accounts[accountIndex || 0];
      const expectedAddress = account.address.toLowerCase();

      // Try recovery values 0, 1, 2, 3 to find the correct one
      for (let recovery = 0; recovery <= 3; recovery++) {
        try {
          // Create signature object with this recovery value
          const signatureObj = secp256k1.Signature.fromBytes(new Uint8Array([...r, ...s]), 'compact').addRecoveryBit(recovery);

          // Recover public key
                    const recoveredPubkey = signatureObj.recoverPublicKey(msgHash);
                    const pubkeyBytes = recoveredPubkey.toBytes(false); // Uncompressed format (65 bytes)

          // Derive address from public key
          const pubNoPrefix = pubkeyBytes.slice(1); // Remove 0x04 prefix
          const hash = keccak256(pubNoPrefix);
          const addressBytes = hash.slice(-20);
          const recoveredAddress = '0x' + bytesToHex(addressBytes);

          // Check if this recovery value gives us the correct address
          if (recoveredAddress.toLowerCase() === expectedAddress) {
            return { r, s, recovery };
          }
        } catch (error) {
          // Continue to next recovery value
          continue;
        }
      }

      throw new Error('Could not determine recovery parameter');
    } else {
      throw new Error(`Invalid signature length: ${sigBytes.length}. Expected 64 or 65 bytes.`);
    }
  }

  /**
   * Helper method to get account by address
   */
  protected async getAccountByAddress(address?: string): Promise<EthereumAccountData> {
    const accounts = await this.getAccounts();
    const account = address ? accounts.find(acc => acc.address.toLowerCase() === address.toLowerCase()) : accounts[0];

    if (!account) {
      throw new Error(address ? `Account with address ${address} not found` : 'No accounts available');
    }

    return account;
  }
}
