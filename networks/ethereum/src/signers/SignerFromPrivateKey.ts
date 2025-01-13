// EthereumTransfer.ts
import axios from 'axios';
import { keccak256 } from 'ethereum-cryptography/keccak';
import { secp256k1 } from '@noble/curves/secp256k1';
import { bytesToHex, hexToBytes, equalsBytes } from 'ethereum-cryptography/utils';
import * as rlp from 'rlp'; // Updated import
import { TransactionReceipt } from '../types/transaction';

interface JsonRpcRequest {
  jsonrpc: '2.0';
  method: string;
  params: any[];
  id: number;
}

export class SignerFromPrivateKey {
  private rpcUrl: string;
  private privateKey: Uint8Array;
  private publicKeyUncompressed: Uint8Array; // 65 bytes => 0x04 + 64 bytes (x, y)

  constructor(privateKey: string, rpcUrl: string) {
    // Strip "0x" and convert to bytes
    this.privateKey = hexToBytes(privateKey.replace(/^0x/, ''));
    this.rpcUrl = rpcUrl;

    // Derive uncompressed pubkey (65 bytes, starts with 0x04)
    this.publicKeyUncompressed = secp256k1.getPublicKey(this.privateKey, false);
  }

  private async pollForReceipt(txHash: string): Promise<TransactionReceipt> {
    while (true) {
      const payload = {
        jsonrpc: '2.0',
        method: 'eth_getTransactionReceipt',
        params: [txHash],
        id: 1,
      };
      const resp = await axios.post(this.rpcUrl, payload);
      if (resp.data.result) {
        return resp.data.result as TransactionReceipt;
      }
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  }


  /**
   * Helper to pad hex strings to even length.
   * Accepts string, bigint, or number.
   * Converts number to bigint internally.
   * @param value Hex string, bigint, or number
   * @returns Padded hex string with '0x' prefix
   */
  private toHexPadded(value: string | bigint | number): string {
    let hex: string;
    if (typeof value === 'number') {
      // Convert number to bigint to handle large values and maintain precision
      hex = BigInt(value).toString(16);
    } else if (typeof value === 'bigint') {
      hex = value.toString(16);
    } else { // string
      hex = value.startsWith('0x') ? value.slice(2) : value;
    }
    if (hex.length % 2 !== 0) {
      hex = '0' + hex;
    }
    return '0x' + hex;
  }

  /**
   * Derive Ethereum address from privateKey.
   */
  getAddress(): string {
    const pubNoPrefix = this.publicKeyUncompressed.slice(1); // remove 0x04
    const hash = keccak256(pubNoPrefix);
    const addressBytes = hash.slice(-20);
    return '0x' + bytesToHex(addressBytes);
  }

  /**
   * Query current nonce from the node.
   */
  public async getNonce(): Promise<number> {
    const payload: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'eth_getTransactionCount',
      params: [this.getAddress(), 'latest'],
      id: 1
    };
    const resp = await axios.post(this.rpcUrl, payload);
    return parseInt(resp.data.result, 16);
  }

  /**
   * Query chainId (e.g., 1 = mainnet).
   */
  private async getChainId(): Promise<number> {
    const payload: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'eth_chainId',
      params: [],
      id: 1
    };
    const resp = await axios.post(this.rpcUrl, payload);
    return parseInt(resp.data.result, 16);
  }

  /**
   * Query gasPrice (wei) from the node.
   */
  async getGasPrice(): Promise<bigint> {
    const payload: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'eth_gasPrice',
      params: [],
      id: 1
    };
    const resp = await axios.post(this.rpcUrl, payload);
    return BigInt(resp.data.result);
  }

  public async getBalance(): Promise<bigint> {
    const address = this.getAddress();

    const payload: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'eth_getBalance',
      params: [address, 'latest'],
      id: 1
    };

    try {
      const resp = await axios.post(this.rpcUrl, payload);
      if (resp.data.result) {
        return BigInt(resp.data.result);
      } else if (resp.data.error) {
        throw new Error(JSON.stringify(resp.data.error));
      } else {
        throw new Error('Unknown error from eth_getBalance');
      }
    } catch (error) {
      throw new Error(`Failed to fetch balance: ${error}`);
    }
  }

  /**
   * Sign a given msgHash. 
   * Because @noble/curves@1.2.0 does not allow specifying a recoveryBit,
   * we use `signature.recoverPublicKey(msgHash)` once and compare with our known pubkey.
   * If they match => recBit=0, else => recBit=1.
   */
  private signWithRecovery(msgHash: Uint8Array): { r: Uint8Array; s: Uint8Array; recovery: number } {
    // Sign the message hash
    const signature = secp256k1.sign(msgHash, this.privateKey);

    // Extract r and s values
    const compactSig = signature.toCompactRawBytes();
    const r = compactSig.slice(0, 32);
    const s = compactSig.slice(32, 64);

    // Directly use the recovery parameter from the signature
    const recovery = signature.recovery;

    return { r, s, recovery };
  }

  /**
   * Send a legacy (pre-EIP1559) transaction with gasPrice. 
   */
  public async sendLegacyTransaction(
    to: string,
    valueWei: bigint,
    dataHex = '0x',
    gasPrice: bigint,
    gasLimit: bigint
  ): Promise<{
    txHash: string;
    wait: () => Promise<TransactionReceipt>;
  }> {
    const fromAddr = this.getAddress();
    console.log('from address in sendLegacyTransaction:', fromAddr);
    const nonce = await this.getNonce();
    console.log('Nonce:', nonce);
    const chainId = await this.getChainId();

    // Convert inputs to padded hex strings
    const nonceHex = this.toHexPadded(nonce);
    const gasPriceHex = this.toHexPadded(gasPrice);
    const gasLimitHex = this.toHexPadded(gasLimit);
    const valueHex = this.toHexPadded(valueWei);

    // RLP for signing (chainId in item #7, then 0,0 placeholders)
    const txForSign = [
      hexToBytes(nonceHex),
      hexToBytes(gasPriceHex),
      hexToBytes(gasLimitHex),
      hexToBytes(to),
      hexToBytes(valueHex),
      hexToBytes(dataHex),
      hexToBytes(this.toHexPadded(chainId)),
      new Uint8Array([]),
      new Uint8Array([]),
    ];

    const unsignedTx = rlp.encode(txForSign);
    const msgHash = keccak256(unsignedTx);

    const { r, s, recovery } = this.signWithRecovery(msgHash);

    // EIP-155 => v = chainId*2 + 35 + recovery
    const v = BigInt(chainId) * 2n + 35n + BigInt(recovery);
    const vHex = this.toHexPadded(v);

    const txSigned = [
      hexToBytes(nonceHex),
      hexToBytes(gasPriceHex),
      hexToBytes(gasLimitHex),
      hexToBytes(to),
      hexToBytes(valueHex),
      hexToBytes(dataHex),
      hexToBytes(vHex),
      r,
      s,
    ];
    console.log('txSigned:', txSigned);

    const serializedTx = rlp.encode(txSigned);
    const rawTxHex = '0x' + bytesToHex(serializedTx);

    const sendPayload: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'eth_sendRawTransaction',
      params: [rawTxHex],
      id: 1,
    };
    const resp = await axios.post(this.rpcUrl, sendPayload);
    if (resp.data.result) {
      const txHash = resp.data.result as string;
      return {
        txHash,
        wait: async () => this.pollForReceipt(txHash),
      };
    } else if (resp.data.error) {
      throw new Error(JSON.stringify(resp.data.error));
    } else {
      throw new Error('Unknown error from eth_sendRawTransaction');
    }
  }

  /**
   * Helper to automatically fetch the gasPrice, then send a legacy transaction.
   */
  public async sendLegacyTransactionAutoGas(
    to: string,
    valueWei: bigint,
    dataHex = '0x',
    gasLimit: bigint
  ): Promise<{
    txHash: string;
    wait: () => Promise<TransactionReceipt>;
  }> {
    const autoGasPrice = await this.getGasPrice();
    console.log('Auto gas price:', autoGasPrice.toString());
    return this.sendLegacyTransaction(to, valueWei, dataHex, autoGasPrice, gasLimit);
  }

  /**
   * Send an EIP-1559 typed transaction (0x02).
   * For simplicity, we do not handle access lists. We pass an empty array.
   * @param to                    Recipient address
   * @param valueWei              Amount in wei
   * @param maxPriorityFeePerGas  The tip (in wei)
   * @param maxFeePerGas          The total fee cap (in wei)
   * @param gasLimit              Gas limit
   * @param data                  Optional data for contract calls (default '0x')
   */
  public async sendEIP1559Transaction(
    to: string,
    valueWei: bigint,
    maxPriorityFeePerGas: bigint,
    maxFeePerGas: bigint,
    gasLimit: bigint,
    data: string = '0x'
  ): Promise<{
    txHash: string;
    wait: () => Promise<TransactionReceipt>;
  }> {
    const fromAddr = this.getAddress();
    const nonce = await this.getNonce();
    const chainId = await this.getChainId();

    // Convert fields to padded hex strings
    const chainIdHex = this.toHexPadded(chainId);
    const nonceHex = this.toHexPadded(nonce);
    const maxPriorityHex = this.toHexPadded(maxPriorityFeePerGas);
    const maxFeeHex = this.toHexPadded(maxFeePerGas);
    const gasLimitHex = this.toHexPadded(gasLimit);
    const valueHex = this.toHexPadded(valueWei);

    // EIP-1559 typed transaction (0x02)
    const accessList: any[] = [];
    const txForSign = [
      hexToBytes(chainIdHex),
      hexToBytes(nonceHex),
      hexToBytes(maxPriorityHex),
      hexToBytes(maxFeeHex),
      hexToBytes(gasLimitHex),
      hexToBytes(to),
      hexToBytes(valueHex),
      hexToBytes(data),
      accessList
    ];

    const encodedTxForSign = rlp.encode(txForSign);
    const domainSeparator = new Uint8Array([0x02]);
    const toBeHashed = new Uint8Array(domainSeparator.length + encodedTxForSign.length);
    toBeHashed.set(domainSeparator, 0);
    toBeHashed.set(encodedTxForSign, domainSeparator.length);

    const msgHash = keccak256(toBeHashed);

    const { r, s, recovery } = this.signWithRecovery(msgHash);

    // For typed transactions, v = 27 + recovery
    const v = 27 + recovery;
    const vHex = this.toHexPadded(v);

    // RLP( [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data, accessList, v, r, s] )
    const txSigned = [
      hexToBytes(chainIdHex),
      hexToBytes(nonceHex),
      hexToBytes(maxPriorityHex),
      hexToBytes(maxFeeHex),
      hexToBytes(gasLimitHex),
      hexToBytes(to),
      hexToBytes(valueHex),
      hexToBytes(data),
      accessList,
      hexToBytes(vHex),
      r,
      s
    ];

    const encodedTxSigned = rlp.encode(txSigned);

    // The final raw transaction hex is prefixed by '0x02'
    const typedRawTx = '0x02' + bytesToHex(encodedTxSigned);

    // Broadcast
    const sendPayload: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'eth_sendRawTransaction',
      params: [typedRawTx],
      id: 1
    };
    const resp = await axios.post(this.rpcUrl, sendPayload);

    if (resp.data.result) {
      const txHash = resp.data.result as string;
      return {
        txHash,
        wait: async () => this.pollForReceipt(txHash),
      };
    } else if (resp.data.error) {
      throw new Error(JSON.stringify(resp.data.error));
    } else {
      throw new Error('Unknown error from eth_sendRawTransaction');
    }
  }

  /**
 * Helper to automatically fetch the gasPrice and estimate gasLimit,
 * then send a legacy transaction with calculated gasLimit (1.5x estimated).
 */
  public async sendLegacyTransactionAutoGasLimit(
    to: string,
    valueWei: bigint,
    dataHex = '0x'
  ): Promise<{
    txHash: string;
    wait: () => Promise<TransactionReceipt>;
  }> {
    const gasPrice = await this.getGasPrice();

    // Estimate gas limit from the node
    const estimatedGasLimit = await this.estimateGas(to, valueWei, dataHex);
    const gasLimit = BigInt(Math.ceil(Number(estimatedGasLimit) * 1.5)); // 1.5x estimated
    console.log('Gas Limit:', gasLimit.toString())

    console.log('Value:', valueWei.toString());
    return this.sendLegacyTransaction(to, valueWei, dataHex, gasPrice, gasLimit);
  }

  /**
   * Helper to automatically fetch maxPriorityFeePerGas, maxFeePerGas,
   * estimate gasLimit, and then send an EIP-1559 transaction.
   * Accepts only `to`, `valueWei`, and optional `data`.
   */
  public async sendEIP1559TransactionAutoGasLimit(
    to: string,
    valueWei: bigint,
    data: string = '0x'
  ): Promise<{
    txHash: string;
    wait: () => Promise<TransactionReceipt>;
  }> {
    const maxPriorityFeePerGas = await this.getMaxPriorityFeePerGas();
    const maxFeePerGas = await this.getMaxFeePerGas(maxPriorityFeePerGas);

    // Estimate gas limit from the node
    const estimatedGasLimit = await this.estimateGas(to, valueWei, data);
    const gasLimit = BigInt(Math.ceil(Number(estimatedGasLimit) * 1.5)); // 1.5x estimated

    return this.sendEIP1559Transaction(to, valueWei, maxPriorityFeePerGas, maxFeePerGas, gasLimit, data);
  }

  /**
   * Estimate gas for a transaction.
   * @param to Recipient address
   * @param valueWei Amount in wei
   * @param data Optional data (default is '0x')
   * @returns Estimated gas as bigint
   */
  private async estimateGas(to: string, valueWei: bigint, data: string): Promise<bigint> {
    const fromAddr = this.getAddress();

    const txParams: any = {
      from: fromAddr,
      value: this.toHexPadded(valueWei),
      data: data
    };

    if (to && to !== '') {
      txParams.to = to;
    }

    const payload: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'eth_estimateGas',
      params: [txParams],
      id: 1
    };

    const resp = await axios.post(this.rpcUrl, payload);

    if (resp.data.result) {
      return BigInt(resp.data.result);
    } else if (resp.data.error) {
      throw new Error(JSON.stringify(resp.data.error));
    } else {
      throw new Error('Unknown error from eth_estimateGas');
    }
  }

  /**
   * Get maxPriorityFeePerGas from the node.
   */
  private async getMaxPriorityFeePerGas(): Promise<bigint> {
    const payload: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'eth_maxPriorityFeePerGas',
      params: [],
      id: 1
    };
    const resp = await axios.post(this.rpcUrl, payload);
    return BigInt(resp.data.result);
  }

  /**
   * Calculate maxFeePerGas as maxPriorityFeePerGas + baseFee.
   * This uses eth_feeHistory to determine baseFee.
   */
  private async getMaxFeePerGas(maxPriorityFeePerGas: bigint): Promise<bigint> {
    const payload: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'eth_feeHistory',
      params: [1, 'latest', []],
      id: 1
    };
    const resp = await axios.post(this.rpcUrl, payload);

    const baseFeePerGas = BigInt(resp.data.result.baseFeePerGas);
    return baseFeePerGas + maxPriorityFeePerGas;
  }
}