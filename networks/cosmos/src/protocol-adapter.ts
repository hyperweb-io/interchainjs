// networks/cosmos/src/protocol-adapter.ts
import { ProtocolVersion, RpcMethod, ProtocolInfo, ProtocolCapabilities } from './types/protocol.js';

export interface IProtocolAdapter {
  getVersion(): ProtocolVersion;
  getSupportedMethods(): Set<RpcMethod>;
  getCapabilities(): ProtocolCapabilities;
  encodeParams(method: RpcMethod, params: any): any;
  decodeResponse(method: RpcMethod, response: any): any;
  encodeBytes(data: string): Uint8Array;
  decodeBytes(data: Uint8Array): string;
}

export class TendermintProtocolAdapter implements IProtocolAdapter {
  constructor(private version: ProtocolVersion = ProtocolVersion.COMET_38) {}

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
      return [];
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
      // Convert numeric parameters to strings for certain methods
      else if ((method === RpcMethod.BLOCK_SEARCH || method === RpcMethod.TX_SEARCH) &&
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
    // Convert snake_case to camelCase for consistency
    return this.convertKeysToCamelCase(response);
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
}

export function createProtocolAdapter(version?: ProtocolVersion): IProtocolAdapter {
  return new TendermintProtocolAdapter(version);
}

export function getProtocolInfo(adapter: IProtocolAdapter): ProtocolInfo {
  return {
    version: adapter.getVersion(),
    supportedMethods: adapter.getSupportedMethods(),
    capabilities: adapter.getCapabilities()
  };
}