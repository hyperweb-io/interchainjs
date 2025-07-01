import { fromBase64, fromHex } from '@interchainjs/encoding';
import { RpcMethod, ProtocolVersion, ProtocolInfo, ProtocolCapabilities } from '../types/protocol';

export interface ResponseDecoder {
  decodeAbciInfo(response: any): any;
  decodeAbciQuery(response: any): any;
  decodeBlock(response: any): any;
  decodeBlockResults(response: any): any;
  decodeBlockSearch(response: any): any;
  decodeBlockchain(response: any): any;
  decodeBroadcastTx(response: any): any;
  decodeBroadcastTxSync?(response: any): any;
  decodeBroadcastTxAsync?(response: any): any;
  decodeBroadcastTxCommit?(response: any): any;
  decodeCommit(response: any): any;
  decodeConsensusParams(response: any): any;
  decodeConsensusState(response: any): any;
  decodeDumpConsensusState(response: any): any;
  decodeGenesis(response: any): any;
  decodeGenesisChunked(response: any): any;
  decodeHeader(response: any): any;
  decodeHealth(response: any): any;
  decodeNetInfo(response: any): any;
  decodeNumUnconfirmedTxs(response: any): any;
  decodeStatus(response: any): any;
  decodeTx(response: any): any;
  decodeTxSearch(response: any): any;
  decodeUnconfirmedTxs(response: any): any;
  decodeValidators(response: any): any;
}

export interface IProtocolAdapter {
  getVersion(): ProtocolVersion;
  getSupportedMethods(): Set<RpcMethod>;
  getCapabilities(): ProtocolCapabilities;
  encodeParams(method: RpcMethod, params: any): any;
  decodeResponse(method: RpcMethod, response: any): any;
  encodeBytes(data: string): Uint8Array;
  decodeBytes(data: Uint8Array): string;
}

export abstract class BaseAdapter implements ResponseDecoder, IProtocolAdapter {
  constructor(protected version: ProtocolVersion) {}
  
  // Recursive snake_case to camelCase transformation
  protected toCamelCase(str: string): string {
    return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
  }

  protected transformKeys(obj: any): any {
    if (obj === null || obj === undefined) {
      return obj;
    }
    
    if (Array.isArray(obj)) {
      return obj.map(item => this.transformKeys(item));
    }
    
    if (typeof obj === 'object') {
      const transformed: any = {};
      for (const [key, value] of Object.entries(obj)) {
        const camelKey = this.toCamelCase(key);
        transformed[camelKey] = this.transformKeys(value);
      }
      return transformed;
    }
    
    return obj;
  }
  
  protected apiToNumber(value: string | undefined | null): number {
    if (!value) return 0;
    const num = parseInt(value, 10);
    if (Number.isNaN(num)) return 0;
    return num;
  }

  protected apiToBigInt(value: string | undefined | null): bigint {
    if (!value) return BigInt(0);
    return BigInt(value);
  }

  protected maybeFromBase64(value: string | undefined | null): Uint8Array | undefined {
    if (!value) return undefined;
    return this.safeFromBase64(value);
  }

  protected safeFromBase64(value: string): Uint8Array {
    if (!value) return new Uint8Array(0);
    
    // Fix base64 padding if needed
    let paddedValue = value;
    const remainder = value.length % 4;
    if (remainder > 0) {
      paddedValue = value + '='.repeat(4 - remainder);
    }
    
    try {
      return fromBase64(paddedValue);
    } catch (error) {
      // If base64 decoding fails, return empty array
      console.warn(`Failed to decode base64 value: ${value}`, error);
      return new Uint8Array(0);
    }
  }

  protected maybeFromHex(value: string | undefined | null): Uint8Array | undefined {
    if (!value) return undefined;
    return fromHex(value);
  }

  protected decodeTime(timestamp: string): Date {
    return new Date(timestamp);
  }

  protected decodeEvent(event: any): any {
    return {
      type: event.type || '',
      attributes: (event.attributes || []).map((attr: any) => ({
        key: this.decodeEventAttribute(attr.key || ''),
        value: this.decodeEventAttribute(attr.value || ''),
        index: attr.index || false
      }))
    };
  }

  protected decodeEventAttribute(value: string): Uint8Array {
    if (!value) return new Uint8Array(0);
    
    // Check if the value looks like base64 and has proper length
    const isBase64Like = /^[A-Za-z0-9+/]*={0,2}$/.test(value) && value.length % 4 === 0;
    
    if (isBase64Like) {
      try {
        // Try to decode as base64 first
        const decoded = this.safeFromBase64(value);
        // If it decodes successfully and produces readable text, use it
        const text = new TextDecoder().decode(decoded);
        // If the decoded text contains mostly printable characters, it's likely base64
        if (text.length > 0 && /^[\x20-\x7E\s]*$/.test(text)) {
          return decoded;
        }
      } catch (e) {
        // Fall through to treat as plain text
      }
    }
    
    // Treat as plain text string
    return new TextEncoder().encode(value);
  }

  protected decodeEvents(events: any[]): any[] {
    return (events || []).map(e => this.decodeEvent(e));
  }

  // IProtocolAdapter implementation
  getVersion(): ProtocolVersion {
    return this.version;
  }

  encodeParams(method: RpcMethod, params: any): any {
    // Convert camelCase to snake_case for Tendermint/CometBFT
    if (!params) return {};
    
    // Special handling for blockchain method which expects array parameters
    if (method === RpcMethod.BLOCKCHAIN) {
      if (params.minHeight !== undefined && params.maxHeight !== undefined) {
        return [params.minHeight.toString(), params.maxHeight.toString()];
      }
      return {}; // Return empty object instead of empty array when no params
    }
    
    // Convert height to string for block-related methods
    if ((method === RpcMethod.BLOCK || method === RpcMethod.BLOCK_RESULTS ||
         method === RpcMethod.COMMIT || method === RpcMethod.HEADER) &&
        params.height !== undefined && typeof params.height === "number") {
      params = { ...params, height: params.height.toString() };
    }
    
    // Convert height to string for validator and consensus methods
    if ((method === RpcMethod.VALIDATORS || method === RpcMethod.CONSENSUS_PARAMS) &&
        params.height !== undefined && typeof params.height === "number") {
      params = { ...params, height: params.height.toString() };
    }
    
    // Convert height to string for ABCI query method
    if (method === RpcMethod.ABCI_QUERY &&
        params.height !== undefined && typeof params.height === "number") {
      params = { ...params, height: params.height.toString() };
    }
    
    // Convert limit to string for unconfirmed_txs method
    if (method === RpcMethod.UNCONFIRMED_TXS &&
        params.limit !== undefined && typeof params.limit === "number") {
      params = { ...params, limit: params.limit.toString() };
    }
    
    const encoded: any = {};
    for (const [key, value] of Object.entries(params)) {
      const snakeKey = this.camelToSnake(key);
      
      // Handle hash parameters with 0x prefix
      if (key === 'hash' && typeof value === 'string' && value.startsWith('0x')) {
        // Convert hex to base64 for RPC
        const hexString = value.slice(2); // Remove 0x prefix
        const bytes = Buffer.from(hexString, 'hex');
        encoded[snakeKey] = bytes.toString('base64');
      }
      // Handle Uint8Array data (especially for ABCI queries and broadcast)
      else if (value instanceof Uint8Array) {
        // For broadcast methods, encode as base64
        if ((method === RpcMethod.BROADCAST_TX_SYNC || 
             method === RpcMethod.BROADCAST_TX_ASYNC || 
             method === RpcMethod.BROADCAST_TX_COMMIT) && key === 'tx') {
          encoded[snakeKey] = Buffer.from(value).toString('base64');
        } else {
          // Convert Uint8Array to hex string for RPC
          encoded[snakeKey] = this.decodeBytes(value);
        }
      }
      // Convert numeric parameters to strings for certain methods
      else if ((method === RpcMethod.BLOCK_SEARCH || method === RpcMethod.TX_SEARCH ||
                method === RpcMethod.VALIDATORS) &&
          (key === 'page' || key === 'perPage') && 
          typeof value === 'number') {
        encoded[snakeKey] = value.toString();
      } else {
        encoded[snakeKey] = value;
      }
    }
    return encoded;
  }

  decodeResponse(method: RpcMethod, response: any): any {
    // Use the version-specific decoder
    switch (method) {
      case RpcMethod.ABCI_INFO:
        return this.decodeAbciInfo(response);
      case RpcMethod.ABCI_QUERY:
        return this.decodeAbciQuery(response);
      case RpcMethod.BLOCK:
        return this.decodeBlock(response);
      case RpcMethod.BLOCK_RESULTS:
        return this.decodeBlockResults(response);
      case RpcMethod.BLOCK_SEARCH:
        return this.decodeBlockSearch(response);
      case RpcMethod.BLOCKCHAIN:
        return this.decodeBlockchain(response);
      case RpcMethod.TX:
        return this.decodeTx(response);
      case RpcMethod.TX_SEARCH:
        return this.decodeTxSearch(response);
      case RpcMethod.VALIDATORS:
        return this.decodeValidators(response);
      case RpcMethod.CONSENSUS_PARAMS:
        return this.decodeConsensusParams(response);
      case RpcMethod.CONSENSUS_STATE:
        return this.decodeConsensusState(response);
      case RpcMethod.DUMP_CONSENSUS_STATE:
        return this.decodeDumpConsensusState(response);
      case RpcMethod.HEADER:
      case RpcMethod.HEADER_BY_HASH:
        return this.decodeHeader(response);
      case RpcMethod.STATUS:
        return this.decodeStatus(response);
      case RpcMethod.NET_INFO:
        return this.decodeNetInfo(response);
      case RpcMethod.GENESIS:
        return this.decodeGenesis(response);
      case RpcMethod.GENESIS_CHUNKED:
        return this.decodeGenesisChunked(response);
      case RpcMethod.HEALTH:
        return this.decodeHealth(response);
      case RpcMethod.UNCONFIRMED_TXS:
        return this.decodeUnconfirmedTxs(response);
      case RpcMethod.NUM_UNCONFIRMED_TXS:
        return this.decodeNumUnconfirmedTxs(response);
      case RpcMethod.COMMIT:
        return this.decodeCommit(response);
      case RpcMethod.CHECK_TX:
        return this.decodeBroadcastTx(response);
      case RpcMethod.BROADCAST_TX_SYNC:
        return (this as any).decodeBroadcastTxSync ? (this as any).decodeBroadcastTxSync(response) : this.decodeBroadcastTx(response);
      case RpcMethod.BROADCAST_TX_ASYNC:
        return (this as any).decodeBroadcastTxAsync ? (this as any).decodeBroadcastTxAsync(response) : this.decodeBroadcastTx(response);
      case RpcMethod.BROADCAST_TX_COMMIT:
        return (this as any).decodeBroadcastTxCommit ? (this as any).decodeBroadcastTxCommit(response) : this.decodeBroadcastTx(response);
      default:
        // For unsupported methods, return raw response
        return response;
    }
  }

  encodeBytes(data: string): Uint8Array {
    // Handle hex strings and base64
    if (data.startsWith('0x')) {
      const hex = data.slice(2);
      const bytes = new Uint8Array(hex.length / 2);
      for (let i = 0; i < hex.length; i += 2) {
        bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
      }
      return bytes;
    }
    
    // Assume base64
    const binary = atob(data);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  decodeBytes(data: Uint8Array): string {
    // Convert to hex string
    return Array.from(data)
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')
      .toUpperCase();
  }

  getSupportedMethods(): Set<RpcMethod> {
    return new Set([
      // Basic info
      RpcMethod.STATUS,
      RpcMethod.ABCI_INFO,
      RpcMethod.HEALTH,
      RpcMethod.NET_INFO,
      
      // Block queries
      RpcMethod.BLOCK,
      RpcMethod.BLOCK_BY_HASH,
      RpcMethod.BLOCK_RESULTS,
      RpcMethod.BLOCK_SEARCH,
      RpcMethod.BLOCKCHAIN,
      RpcMethod.HEADER,
      RpcMethod.HEADER_BY_HASH,
      RpcMethod.COMMIT,
      
      // Transaction queries
      RpcMethod.TX,
      RpcMethod.TX_SEARCH,
      RpcMethod.CHECK_TX,
      RpcMethod.UNCONFIRMED_TXS,
      RpcMethod.NUM_UNCONFIRMED_TXS,
      
      // Chain queries
      RpcMethod.VALIDATORS,
      RpcMethod.CONSENSUS_PARAMS,
      RpcMethod.CONSENSUS_STATE,
      RpcMethod.DUMP_CONSENSUS_STATE,
      RpcMethod.GENESIS,
      RpcMethod.GENESIS_CHUNKED,
      
      // ABCI queries
      RpcMethod.ABCI_QUERY,
      
      // Subscription
      RpcMethod.SUBSCRIBE,
      RpcMethod.UNSUBSCRIBE,
      RpcMethod.UNSUBSCRIBE_ALL
    ]);
  }

  getCapabilities(): ProtocolCapabilities {
    return {
      streaming: true,
      subscriptions: true,
      blockByHash: this.supportsBlockByHash(),
      headerQueries: this.supportsHeaderQueries(),
      consensusQueries: this.supportsConsensusQueries()
    };
  }

  private supportsBlockByHash(): boolean {
    return this.version === ProtocolVersion.COMET_38 || this.version === ProtocolVersion.COMET_100;
  }

  private supportsHeaderQueries(): boolean {
    return this.version === ProtocolVersion.COMET_38 || this.version === ProtocolVersion.COMET_100;
  }

  private supportsConsensusQueries(): boolean {
    return true; // All versions support basic consensus queries
  }

  private camelToSnake(str: string): string {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
  }

  private snakeToCamel(str: string): string {
    return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
  }

  private convertKeysToCamelCase(obj: any): any {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(item => this.convertKeysToCamelCase(item));
    }

    const converted: any = {};
    for (const [key, value] of Object.entries(obj)) {
      const camelKey = this.snakeToCamel(key);
      converted[camelKey] = this.convertKeysToCamelCase(value);
    }
    return converted;
  }

  // Abstract methods that must be implemented by version-specific adapters
  abstract decodeAbciInfo(response: any): any;
  abstract decodeAbciQuery(response: any): any;
  abstract decodeBlock(response: any): any;
  abstract decodeBlockResults(response: any): any;
  abstract decodeBlockSearch(response: any): any;
  abstract decodeBlockchain(response: any): any;
  abstract decodeBroadcastTx(response: any): any;
  abstract decodeCommit(response: any): any;
  abstract decodeConsensusParams(response: any): any;
  abstract decodeConsensusState(response: any): any;
  abstract decodeDumpConsensusState(response: any): any;
  abstract decodeGenesis(response: any): any;
  abstract decodeGenesisChunked(response: any): any;
  abstract decodeHeader(response: any): any;
  abstract decodeHealth(response: any): any;
  abstract decodeNetInfo(response: any): any;
  abstract decodeNumUnconfirmedTxs(response: any): any;
  abstract decodeStatus(response: any): any;
  abstract decodeTx(response: any): any;
  abstract decodeTxSearch(response: any): any;
  abstract decodeUnconfirmedTxs(response: any): any;
  abstract decodeValidators(response: any): any;
}