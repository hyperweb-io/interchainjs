// EthereumTransfer.ts
import axios from 'axios';
import { keccak256 } from 'ethereum-cryptography/keccak';
import { secp256k1 } from '@noble/curves/secp256k1';
import { bytesToHex, hexToBytes, equalsBytes } from 'ethereum-cryptography/utils';
import * as rlp from 'rlp'; // Updated import

interface JsonRpcRequest {
  jsonrpc: '2.0';
  method: string;
  params: any[];
  id: number;
}

export class EthereumTransferNoLibV12 {
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
  private getAddressFromPrivateKey(): string {
    const pubNoPrefix = this.publicKeyUncompressed.slice(1); // remove 0x04
    const hash = keccak256(pubNoPrefix);
    const addressBytes = hash.slice(-20);
    return '0x' + bytesToHex(addressBytes);
  }

  /**
   * Query current nonce from the node.
   */
  private async getNonce(address: string): Promise<number> {
    const payload: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'eth_getTransactionCount',
      params: [address, 'latest'],
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

  /**
   * Sign a given msgHash. 
   * Because @noble/curves@1.2.0 does not allow specifying a recoveryBit,
   * we use `signature.recoverPublicKey(msgHash)` once and compare with our known pubkey.
   * If they match => recBit=0, else => recBit=1.
   */
  private signWithRecovery(msgHash: Uint8Array): { r: Uint8Array; s: Uint8Array; recovery: number } {
    // 1) Sign => Signature object
    const signature = secp256k1.sign(msgHash, this.privateKey);

    // 2) 64-byte raw => r(32)+s(32)
    const compactSig = signature.toCompactRawBytes();
    const r = compactSig.slice(0, 32);
    const s = compactSig.slice(32, 64);

    // 3) Recover public key from signature
    const recoveredPoint = signature.recoverPublicKey(msgHash);
    const recoveredPubBytes = recoveredPoint.toRawBytes(false); // uncompressed, 65 bytes

    // 4) Compare
    if (equalsBytes(recoveredPubBytes, this.publicKeyUncompressed)) {
      return { r, s, recovery: 0 };
    } else {
      return { r, s, recovery: 1 };
    }
  }

  /**
   * Send a legacy (pre-EIP1559) transaction with gasPrice. 
   */
  public async sendLegacyTransaction(
    to: string,
    valueWei: bigint,
    gasPrice: bigint,
    gasLimit: bigint
  ): Promise<string> {
    const fromAddr = this.getAddressFromPrivateKey();
    console.log('from address in sendLegacyTransaction:', fromAddr);
    const nonce = await this.getNonce(fromAddr);
    const chainId = await this.getChainId();

    // Convert inputs to padded hex strings
    const nonceHex = this.toHexPadded(nonce);
    const gasPriceHex = this.toHexPadded(gasPrice);
    const gasLimitHex = this.toHexPadded(gasLimit);
    const valueHex = this.toHexPadded(valueWei);
    const dataHex = '0x';

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
      new Uint8Array([])
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
      s
    ];
    console.log('txSigned:', txSigned);

    const serializedTx = rlp.encode(txSigned);
    const rawTxHex = '0x' + bytesToHex(serializedTx);

    const sendPayload: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'eth_sendRawTransaction',
      params: [rawTxHex],
      id: 1
    };
    const resp = await axios.post(this.rpcUrl, sendPayload);
    if (resp.data.result) {
      return resp.data.result;
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
    gasLimit: bigint
  ): Promise<string> {
    const autoGasPrice = await this.getGasPrice();
    return this.sendLegacyTransaction(to, valueWei, autoGasPrice, gasLimit);
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
    valueWei: string,
    maxPriorityFeePerGas: string,
    maxFeePerGas: string,
    gasLimit: string,
    data: string = '0x'
  ): Promise<string> {
    const fromAddr = this.getAddressFromPrivateKey();
    const nonce = await this.getNonce(fromAddr);
    const chainId = await this.getChainId();

    // Convert fields to padded hex strings
    const chainIdHex = this.toHexPadded(chainId);
    const nonceHex = this.toHexPadded(nonce);
    const maxPriorityHex = this.toHexPadded(maxPriorityFeePerGas);
    const maxFeeHex = this.toHexPadded(maxFeePerGas);
    const gasLimitHex = this.toHexPadded(gasLimit);
    const valueHex = this.toHexPadded(valueWei);

    // EIP-1559 typed transaction: 
    // 0x02 + RLP([chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data, accessList, v, r, s])
    //
    // For signing, we omit [v, r, s].
    // The "accessList" can be empty for simple transfers: [].

    const accessList: any[] = []; // or define a real access list if needed
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

    // According to spec, the signed message is keccak256( 0x02 || RLP( txForSign ) )
    const encodedTxForSign = rlp.encode(txForSign);

    // Construct domain separator (type byte 0x02)
    const domainSeparator = new Uint8Array([0x02]);

    // Concatenate domain + RLP-encoded data
    const toBeHashed = new Uint8Array(domainSeparator.length + encodedTxForSign.length);
    toBeHashed.set(domainSeparator, 0);
    toBeHashed.set(encodedTxForSign, domainSeparator.length);

    const msgHash = keccak256(toBeHashed);

    // Sign
    const { r, s, recovery } = this.signWithRecovery(msgHash);

    // For typed transactions, v is commonly 27 + recovery (NOT chainId-based as in EIP-155)
    const v = 27 + recovery;
    const vHex = this.toHexPadded(v);

    // Now the final transaction for broadcast:
    // 0x02 + RLP( [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data, accessList, v, r, s] )
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
      return resp.data.result; // Transaction hash
    } else if (resp.data.error) {
      throw new Error(JSON.stringify(resp.data.error));
    } else {
      throw new Error('Unknown error from eth_sendRawTransaction');
    }
  }
}