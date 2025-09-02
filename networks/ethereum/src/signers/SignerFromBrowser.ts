import { keccak256 } from 'ethereum-cryptography/keccak';
import { bytesToHex, hexToBytes, utf8ToBytes } from 'ethereum-cryptography/utils';
import type { TransactionReceipt } from '../types/responses/receipt';
import type { TransactionParams } from '../types/requests/transaction-params';
import type { AbiFunctionItem } from '../utils/ContractEncoder';

/**
 * Minimal EIP-1193 provider interface (MetaMask, etc.)
 */
export interface EIP1193Provider {
  request(args: { method: string; params?: any[] | Record<string, any> }): Promise<any>;
}

/**
 * Browser signer implemented on top of an injected EIP-1193 provider
 * (e.g., window.ethereum from MetaMask).
 *
 * Supports:
 * - ETH transfers via eth_sendTransaction
 * - Contract reads via eth_call (ABI decoding)
 * - Contract writes via eth_sendTransaction (ABI encoding)
 */
export class SignerFromBrowser {
  private provider: EIP1193Provider;

  constructor(provider: EIP1193Provider) {
    if (!provider || typeof provider.request !== 'function') {
      throw new Error('Invalid EIP-1193 provider. Ensure window.ethereum is available.');
    }
    this.provider = provider;
  }

  // ----- Public API -----

  async getAddresses(requestAccess: boolean = true): Promise<string[]> {
    const method = requestAccess ? 'eth_requestAccounts' : 'eth_accounts';
    const accounts: string[] = await this.provider.request({ method });
    return accounts?.map((a) => a.toLowerCase()) ?? [];
  }

  async getChainId(): Promise<number> {
    const chainIdHex: string = await this.provider.request({ method: 'eth_chainId' });
    return Number(chainIdHex);
  }

  /**
   * Send an ETH transaction or arbitrary data transaction.
   * Returns tx hash and a wait() helper that polls for the receipt.
   */
  async send(tx: BrowserTxInput): Promise<{
    transactionHash: string;
    wait: (timeoutMs?: number, pollIntervalMs?: number) => Promise<TransactionReceipt>;
  }> {
    const [fromDefault] = await this.getAddresses();
    const txReq = normalizeTx({ ...tx, from: tx.from || fromDefault });
    const transactionHash: string = await this.provider.request({
      method: 'eth_sendTransaction',
      params: [txReq]
    });

    return {
      transactionHash,
      wait: (timeoutMs?: number, pollIntervalMs?: number) =>
        this.waitForReceipt(transactionHash, timeoutMs, pollIntervalMs)
    };
  }

  /**
   * Call a read-only contract method and decode the result according to ABI.
   */
  async readContract<T = any>(args: {
    address: string;
    abi: AbiFunctionItem[];
    functionName: string;
    params?: any[];
    blockTag?: string;
    from?: string;
  }): Promise<T> {
    const { address, abi, functionName, params = [], from, blockTag } = args;
    const fn = findAbiFunction(abi, functionName);
    const data = encodeFunctionData(fn, params);

    const callParams: any = normalizeTx({ from, to: address, data });
    const callArgs = blockTag ? [callParams, blockTag] : [callParams];
    const raw: string = await this.provider.request({ method: 'eth_call', params: callArgs });
    const decoded = decodeFunctionResult(fn, raw);
    return decoded as T;
  }

  /**
   * Call a state-changing contract method by ABI and args.
   * Returns tx hash and a wait() helper that polls for the receipt.
   */
  async writeContract(args: {
    address: string;
    abi: AbiFunctionItem[];
    functionName: string;
    params?: any[];
    value?: bigint | number | string;
    gas?: bigint | number | string;
    gasPrice?: bigint | number | string;
    maxFeePerGas?: bigint | number | string;
    maxPriorityFeePerGas?: bigint | number | string;
    nonce?: number | string;
    from?: string;
    chainId?: number | string;
  }): Promise<{
    transactionHash: string;
    wait: (timeoutMs?: number, pollIntervalMs?: number) => Promise<TransactionReceipt>;
  }> {
    const { address, abi, functionName, params = [], ...rest } = args;
    const fn = findAbiFunction(abi, functionName);
    const data = encodeFunctionData(fn, params);

    return this.send({ ...rest, to: address, data });
  }

  // ----- Internals -----

  private async waitForReceipt(
    txHash: string,
    timeoutMs: number = 60_000,
    pollIntervalMs: number = 1_000
  ): Promise<TransactionReceipt> {
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
      const receipt: TransactionReceipt | null = await this.provider.request({
        method: 'eth_getTransactionReceipt',
        params: [txHash]
      });
      if (receipt) return receipt;
      await sleep(pollIntervalMs);
    }
    throw new Error(`Transaction ${txHash} not confirmed within ${timeoutMs}ms`);
  }
}

// ----- Helpers: time -----

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ----- Helpers: numbers/hex -----

function toHex(value: bigint | number | string | undefined): string | undefined {
  if (value === undefined || value === null) return undefined;
  if (typeof value === 'string') {
    if (value.startsWith('0x')) return value;
    const n = BigInt(value);
    return '0x' + n.toString(16);
  }
  const n = typeof value === 'bigint' ? value : BigInt(value);
  return '0x' + n.toString(16);
}

function normalizeTx(tx: BrowserTxInput): Required<Pick<TransactionParams, 'from' | 'to' | 'gas' | 'gasPrice' | 'maxFeePerGas' | 'maxPriorityFeePerGas' | 'value' | 'data' | 'nonce' | 'type' | 'accessList' | 'chainId'>> {
  return {
    from: tx.from!,
    to: tx.to,
    gas: toHex(tx.gas as any) as any,
    gasPrice: toHex(tx.gasPrice as any) as any,
    maxFeePerGas: toHex(tx.maxFeePerGas as any) as any,
    maxPriorityFeePerGas: toHex(tx.maxPriorityFeePerGas as any) as any,
    value: toHex(tx.value as any) as any,
    data: tx.data,
    nonce: typeof tx.nonce === 'number' ? toHex(tx.nonce) : (tx.nonce as any),
    type: tx.type,
    accessList: tx.accessList,
    chainId: typeof tx.chainId === 'number' ? toHex(tx.chainId) : (tx.chainId as any)
  };
}

// ----- Helpers: ABI encoding/decoding -----

function findAbiFunction(abi: AbiFunctionItem[], name: string): AbiFunctionItem {
  const fn = abi.find((i) => i.type === 'function' && i.name === name);
  if (!fn) throw new Error(`Function ${name} not found in ABI`);
  return fn;
}

function encodeFunctionData(fn: AbiFunctionItem, params: any[]): string {
  const inputs = (fn.inputs || []).map((i) => i.type);
  const signature = `${fn.name}(${inputs.join(',')})`;
  const selector = bytesToHex(keccak256(utf8ToBytes(signature))).slice(0, 8);
  const encodedArgs = encodeParameters(inputs, params);
  return '0x' + selector + encodedArgs.slice(2);
}

function decodeFunctionResult(fn: AbiFunctionItem, data: string): any {
  const outputs = (fn.outputs || []).map((o) => o.type);
  if (outputs.length === 0) return undefined;
  const decoded = decodeParameters(outputs, data);
  // If single return value, return directly
  return decoded.length === 1 ? decoded[0] : decoded;
}

function isDynamicType(t: string): boolean {
  return t === 'bytes' || t === 'string' || /\[\]$/.test(t);
}

function strip0x(hex: string): string {
  return hex.startsWith('0x') ? hex.slice(2) : hex;
}

function pad32(hex: string): string {
  return hex.padStart(64, '0');
}

function encodeUint(value: bigint | number | string): string {
  const n = typeof value === 'bigint' ? value : BigInt(value);
  return pad32(n.toString(16));
}

function encodeBool(value: boolean): string {
  return pad32(value ? '1' : '0');
}

function encodeAddress(addr: string): string {
  const v = strip0x(addr).toLowerCase();
  return pad32(v);
}

function encodeFixedBytes(hexValue: string, nBytes: number): string {
  const v = strip0x(hexValue);
  const raw = v.slice(0, nBytes * 2);
  return raw.padEnd(64, '0');
}

function encodeDynamicBytes(bytesHex: string): string {
  const raw = strip0x(bytesHex);
  const len = raw.length / 2;
  const lenWord = pad32(len.toString(16));
  const padded = raw.padEnd(Math.ceil(raw.length / 64) * 64, '0');
  return lenWord + padded;
}

function encodeString(str: string): string {
  return encodeDynamicBytes(bytesToHex(utf8ToBytes(str)));
}

function baseTypeOf(t: string): string {
  return t.replace(/\[\]$/, '');
}

function isArrayType(t: string): boolean {
  return /\[\]$/.test(t);
}

function encodeSingle(type: string, value: any): string {
  if (type === 'address') return encodeAddress(value);
  if (type === 'bool') return encodeBool(value);
  if (type === 'bytes') return ''; // handled as dynamic in encodeParameters
  if (type === 'string') return ''; // handled as dynamic in encodeParameters
  const bytesN = type.match(/^bytes(\d+)$/);
  if (bytesN) return encodeFixedBytes(value, Number(bytesN[1]));
  const uintN = type.match(/^u?int(\d+)?$/);
  if (uintN) return encodeUint(value);
  // For arrays, handled in encodeParameters
  return encodeUint(value);
}

function encodeParameters(types: string[], values: any[]): string {
  if (types.length !== values.length) throw new Error('Types/values length mismatch');

  // Head and tail per ABI spec
  const head: string[] = [];
  const tail: string[] = [];

  // Helper to push dynamic segment and return its offset (in bytes)
  const addDynamic = (enc: string) => {
    const offset = 32 * (types.length + tail.join('').length / 64);
    tail.push(enc);
    return pad32(offset.toString(16));
  };

  for (let i = 0; i < types.length; i++) {
    const t = types[i];
    const v = values[i];

    if (isArrayType(t)) {
      // Only support dynamic arrays of simple base types for now
      const base = baseTypeOf(t);
      const arr: any[] = v || [];
      // Encode array length + elements
      const encElems = arr
        .map((elem) => encodeSingle(base, elem))
        .join('');
      const lenWord = pad32(BigInt(arr.length).toString(16));
      const enc = lenWord + encElems;
      const dyn = addDynamic(enc);
      head.push(dyn);
      continue;
    }

    if (isDynamicType(t)) {
      let enc: string;
      if (t === 'bytes') enc = encodeDynamicBytes(v);
      else if (t === 'string') enc = encodeString(v);
      else throw new Error(`Unsupported dynamic type: ${t}`);
      const dyn = addDynamic(enc);
      head.push(dyn);
    } else {
      head.push(encodeSingle(t, v));
    }
  }

  return '0x' + (head.join('') + tail.join(''));
}

function readWord(data: string, index: number): string {
  const off = index * 64;
  return data.slice(off, off + 64);
}

function decodeUint(word: string): bigint {
  return BigInt('0x' + word);
}

function decodeBool(word: string): boolean {
  return BigInt('0x' + word) !== 0n;
}

function decodeAddress(word: string): string {
  const hex = word.slice(24); // last 20 bytes
  return '0x' + hex;
}

function decodeFixedBytes(word: string, nBytes: number): string {
  return '0x' + word.slice(0, nBytes * 2);
}

function decodeDynamicBytes(data: string, offsetWord: string): { value: string; consumed: number } {
  const offset = Number(BigInt('0x' + offsetWord));
  const tail = data.slice(offset * 2);
  const len = Number(BigInt('0x' + tail.slice(0, 64)));
  const bytesHex = tail.slice(64, 64 + len * 2);
  return { value: '0x' + bytesHex, consumed: 32 + Math.ceil(len / 32) * 32 };
}

function decodeString(data: string, offsetWord: string): { value: string; consumed: number } {
  const { value, consumed } = decodeDynamicBytes(data, offsetWord);
  const bytes = hexToBytes(strip0x(value));
  const text = new TextDecoder().decode(bytes);
  return { value: text, consumed };
}

function decodeParameters(types: string[], dataHex: string): any[] {
  const data = strip0x(dataHex);
  const values: any[] = [];

  // First pass reads head words; dynamic types use offsets into tail
  const headWords = Math.max(types.length, 0);
  for (let i = 0; i < types.length; i++) {
    const t = types[i];
    const word = readWord(data, i);

    if (isArrayType(t)) {
      const offset = Number(BigInt('0x' + word));
      const arrHead = data.slice(offset * 2);
      const len = Number(BigInt('0x' + arrHead.slice(0, 64)));
      const base = baseTypeOf(t);
      const arrVals: any[] = [];
      for (let j = 0; j < len; j++) {
        const w = arrHead.slice(64 + j * 64, 64 + (j + 1) * 64);
        arrVals.push(decodeSingleWord(base, w, data));
      }
      values.push(arrVals);
      continue;
    }

    if (isDynamicType(t)) {
      if (t === 'bytes') {
        values.push(decodeDynamicBytes(data, word).value);
      } else if (t === 'string') {
        values.push(decodeString(data, word).value);
      } else {
        throw new Error(`Unsupported dynamic output type: ${t}`);
      }
    } else {
      values.push(decodeSingleWord(t, word, data));
    }
  }

  return values;
}

function decodeSingleWord(type: string, word: string, fullData: string): any {
  if (type === 'address') return decodeAddress(word);
  if (type === 'bool') return decodeBool(word);
  const bytesN = type.match(/^bytes(\d+)$/);
  if (bytesN) return decodeFixedBytes(word, Number(bytesN[1]));
  const uintN = type.match(/^u?int(\d+)?$/);
  if (uintN) return decodeUint(word);
  // Fallback to uint decoding
  return decodeUint(word);
}

// ----- Types -----

type BrowserTxInput = Omit<
  TransactionParams,
  'gas' | 'gasPrice' | 'maxFeePerGas' | 'maxPriorityFeePerGas' | 'value' | 'nonce' | 'chainId'
> & {
  from?: string;
  gas?: bigint | number | string;
  gasPrice?: bigint | number | string;
  maxFeePerGas?: bigint | number | string;
  maxPriorityFeePerGas?: bigint | number | string;
  value?: bigint | number | string;
  nonce?: number | string;
  chainId?: number | string;
};
