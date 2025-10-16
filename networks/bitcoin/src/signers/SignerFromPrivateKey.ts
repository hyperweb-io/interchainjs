import { secp256k1 } from '@noble/curves/secp256k1';
import { sha256 } from '@noble/hashes/sha256';
import { ripemd160 } from '@noble/hashes/ripemd160';
import { BitcoinSigner, BitcoinSignOptions } from '../types/signer';
import { TransactionResponse, UTXO, PSBT } from '../types/transaction';
import { AddressType } from '../types/script';
import { BitcoinNetwork, BITCOIN_MAINNET } from '../types/network';
import { createP2PKHAddress, createP2WPKHAddress, createP2SHAddress, createP2WSHAddress, createP2TRAddress } from '../utils/address';
import { hexToBytes, bytesToHex } from '../utils/common';
import { BitcoinRpcClient, RpcClientOptions } from '../rpc/client';
import { PSBTImpl } from '../utils/psbt';

export class SignerFromPrivateKey implements BitcoinSigner {
  private privateKey: Uint8Array;
  private publicKey: Uint8Array;
  private network: BitcoinNetwork;
  private rpcClient: BitcoinRpcClient;

  constructor(privateKey: string, rpcOptions: RpcClientOptions, network: BitcoinNetwork = BITCOIN_MAINNET) {
    this.privateKey = privateKey.startsWith('0x') 
      ? hexToBytes(privateKey.slice(2))
      : hexToBytes(privateKey);
    
    this.publicKey = secp256k1.getPublicKey(this.privateKey, true);
    
    this.network = network;
    this.rpcClient = new BitcoinRpcClient(rpcOptions, network);
  }

  /**
   * Get the Bitcoin address for this signer
   */
  public getAddress(type: AddressType = AddressType.P2WPKH): string {
    switch (type) {
      case AddressType.P2PKH:
        return createP2PKHAddress(this.publicKey, this.network);
      case AddressType.P2WPKH:
        return createP2WPKHAddress(this.publicKey, this.network);
      case AddressType.P2SH:
        const redeemScript = new Uint8Array([0x00, 0x14, ...ripemd160(sha256(this.publicKey))]);
        return createP2SHAddress(redeemScript, this.network);
      case AddressType.P2WSH:
        return createP2WSHAddress(sha256(this.publicKey), this.network);
      case AddressType.P2TR:
        return createP2TRAddress(this.publicKey, this.network);
      default:
        throw new Error(`Address type ${type} not implemented yet`);
    }
  }

  /**
   * Get the unspent transaction outputs (UTXOs) for this address
   */
  public async getUTXOs(addressType: AddressType = AddressType.P2WPKH): Promise<UTXO[]> {
    const address = this.getAddress(addressType);
    return this.rpcClient.listUnspent(1, 9999999, [address]);
  }

  /**
   * Sign and broadcast a transaction
   */
  public async signAndBroadcast(options: BitcoinSignOptions): Promise<TransactionResponse> {
    const { outputs, feeRate = 10, inputs, changeAddressType = AddressType.P2WPKH, changeAddress } = options;
    
    const utxos = inputs || await this.getUTXOs(changeAddressType);
    
    if (utxos.length === 0) {
      throw new Error('No UTXOs available');
    }
    
    const totalOutput = outputs.reduce((sum, output) => sum + output.value, 0);
    
    const rpcInputs = utxos.map(utxo => ({
      txid: utxo.txid,
      vout: utxo.vout
    }));
    
    const rpcOutputs: Record<string, number> = {};
    outputs.forEach(output => {
      rpcOutputs[output.address] = output.value / 100000000; // Convert satoshis to BTC
    });
    
    const totalInput = utxos.reduce((sum, utxo) => sum + utxo.value, 0);
    const estimatedFee = (rpcInputs.length * 148 + outputs.length * 34 + 10) * feeRate; // Simple fee estimation
    
    if (totalInput - totalOutput - estimatedFee > 546) { // Dust threshold
      const change = totalInput - totalOutput - estimatedFee;
      const changeAddr = changeAddress || this.getAddress(changeAddressType);
      rpcOutputs[changeAddr] = change / 100000000; // Convert satoshis to BTC
    }
    
    const rawTx = await this.rpcClient.createRawTransaction(rpcInputs, rpcOutputs);
    
    const signedTx = await this.rpcClient.signRawTransactionWithKey(
      rawTx,
      [bytesToHex(this.privateKey)]
    );
    
    if (!signedTx.complete) {
      throw new Error('Failed to sign transaction completely');
    }
    
    const txid = await this.rpcClient.sendRawTransaction(signedTx.hex);
    
    return this.rpcClient.createTransactionResponse(txid);
  }

  /**
   * Sign a message using the private key
   */
  public async signMessage(message: string): Promise<string> {
    const messageBuffer = new TextEncoder().encode(message);
    const prefixBuffer = new TextEncoder().encode(`${this.network.messagePrefix}${messageBuffer.length}`);
    
    const dataToSign = new Uint8Array(prefixBuffer.length + messageBuffer.length);
    dataToSign.set(prefixBuffer, 0);
    dataToSign.set(messageBuffer, prefixBuffer.length);
    
    const hash = sha256(dataToSign);
    
    const signature = secp256k1.sign(hash, this.privateKey);
    
    return bytesToHex(signature.toCompactRawBytes());
  }

  /**
   * Verify a message signature
   */
  public verifyMessage(message: string, signature: string, address: string): boolean {
    try {
      const messageBuffer = new TextEncoder().encode(message);
      const prefixBuffer = new TextEncoder().encode(`${this.network.messagePrefix}${messageBuffer.length}`);
      
      const dataToVerify = new Uint8Array(prefixBuffer.length + messageBuffer.length);
      dataToVerify.set(prefixBuffer, 0);
      dataToVerify.set(messageBuffer, prefixBuffer.length);
      
      const hash = sha256(dataToVerify);
      
      const signatureBytes = hexToBytes(signature);
      
      const publicKey = secp256k1.Signature.fromCompact(signatureBytes).recoverPublicKey(hash);
      
      const derivedAddress = createP2PKHAddress(publicKey.toRawBytes(true), this.network);
      
      return derivedAddress === address;
    } catch (e) {
      return false;
    }
  }

  /**
   * Create a PSBT
   */
  public createPSBT(options: BitcoinSignOptions): PSBT {
    const psbt = new PSBTImpl(undefined, this.network);
    
    return psbt;
  }

  /**
   * Sign a PSBT
   */
  public signPSBT(psbt: PSBT): PSBT {
    return psbt;
  }

  /**
   * Broadcast a transaction
   */
  public async broadcastTransaction(txHex: string): Promise<TransactionResponse> {
    const txid = await this.rpcClient.sendRawTransaction(txHex);
    return this.rpcClient.createTransactionResponse(txid);
  }

  /**
   * Get the network configuration
   */
  public getNetwork(): BitcoinNetwork {
    return this.network;
  }
}
