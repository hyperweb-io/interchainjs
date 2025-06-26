// networks/cosmos/starship/__tests__/queryclient/protocol-adapter.test.ts
import { describe, test, expect } from '@jest/globals';
import { 
  TendermintProtocolAdapter,
  createProtocolAdapter,
  ProtocolVersion,
  RpcMethod
} from '@interchainjs/cosmos';

describe('Protocol Adapter', () => {
  describe('TendermintProtocolAdapter', () => {
    let adapter: TendermintProtocolAdapter;

    beforeEach(() => {
      adapter = new TendermintProtocolAdapter(ProtocolVersion.COMET_38);
    });

    test('should initialize with correct version', () => {
      expect(adapter.getVersion()).toBe(ProtocolVersion.COMET_38);
    });

    test('should support all required RPC methods', () => {
      const supportedMethods = adapter.getSupportedMethods();
      
      expect(supportedMethods.has(RpcMethod.STATUS)).toBe(true);
      expect(supportedMethods.has(RpcMethod.BLOCK)).toBe(true);
      expect(supportedMethods.has(RpcMethod.BLOCK_RESULTS)).toBe(true);
      expect(supportedMethods.has(RpcMethod.TX)).toBe(true);
      expect(supportedMethods.has(RpcMethod.VALIDATORS)).toBe(true);
      expect(supportedMethods.has(RpcMethod.ABCI_INFO)).toBe(true);
      expect(supportedMethods.has(RpcMethod.HEALTH)).toBe(true);
      expect(supportedMethods.has(RpcMethod.NET_INFO)).toBe(true);
    });

    test('should have correct capabilities', () => {
      const capabilities = adapter.getCapabilities();
      
      expect(capabilities.streaming).toBe(true);
      expect(capabilities.subscriptions).toBe(true);
      expect(capabilities.blockByHash).toBe(true);
      expect(capabilities.headerQueries).toBe(true);
      expect(capabilities.consensusQueries).toBe(true);
    });

    describe('Parameter Encoding', () => {
      test('should convert camelCase to snake_case', () => {
        const params = {
          blockHeight: 12345,
          perPage: 10,
          orderBy: 'desc',
          includeProof: true
        };
        
        const encoded = adapter.encodeParams(RpcMethod.BLOCK, params);
        
        expect(encoded.block_height).toBe(12345);
        expect(encoded.per_page).toBe(10);
        expect(encoded.order_by).toBe('desc');
        expect(encoded.include_proof).toBe(true);
      });

      test('should handle empty parameters', () => {
        const encoded = adapter.encodeParams(RpcMethod.STATUS, undefined);
        expect(encoded).toEqual({});
        
        const encoded2 = adapter.encodeParams(RpcMethod.STATUS, {});
        expect(encoded2).toEqual({});
      });

      test('should handle nested objects', () => {
        const params = {
          queryParams: {
            maxHeight: 1000,
            minHeight: 500
          },
          includeData: true
        };
        
        const encoded = adapter.encodeParams(RpcMethod.BLOCK, params);
        
        expect(encoded.query_params).toBeDefined();
        expect(encoded.query_params.max_height).toBe(1000);
        expect(encoded.query_params.min_height).toBe(500);
        expect(encoded.include_data).toBe(true);
      });

      test('should preserve non-camelCase keys', () => {
        const params = {
          height: 12345,
          'custom-header': 'value',
          _private: 'data'
        };
        
        const encoded = adapter.encodeParams(RpcMethod.BLOCK, params);
        
        expect(encoded.height).toBe(12345);
        expect(encoded['custom-header']).toBe('value');
        expect(encoded._private).toBe('data');
      });
    });

    describe('Response Decoding', () => {
      test('should convert snake_case to camelCase', () => {
        const response = {
          node_info: {
            network: 'osmosis-1',
            protocol_version: {
              p2p: '8',
              block: '11',
              app: '0'
            }
          },
          sync_info: {
            latest_block_hash: 'ABC123',
            latest_block_height: '12345',
            latest_block_time: '2023-01-01T00:00:00Z',
            catching_up: false
          },
          validator_info: {
            pub_key: {
              type: 'tendermint/PubKeyEd25519',
              value: 'base64data'
            },
            voting_power: '1000000'
          }
        };
        
        const decoded = adapter.decodeResponse(RpcMethod.STATUS, response);
        
        expect(decoded.nodeInfo).toBeDefined();
        expect(decoded.nodeInfo.network).toBe('osmosis-1');
        expect(decoded.nodeInfo.protocolVersion).toBeDefined();
        expect(decoded.nodeInfo.protocolVersion.p2p).toBe('8');
        
        expect(decoded.syncInfo).toBeDefined();
        expect(decoded.syncInfo.latestBlockHash).toBe('ABC123');
        expect(decoded.syncInfo.latestBlockHeight).toBe('12345');
        expect(decoded.syncInfo.catchingUp).toBe(false);
        
        expect(decoded.validatorInfo).toBeDefined();
        expect(decoded.validatorInfo.pubKey).toBeDefined();
        expect(decoded.validatorInfo.votingPower).toBe('1000000');
      });

      test('should handle arrays', () => {
        const response = {
          validators: [
            {
              address: 'ABC123',
              pub_key: { type: 'ed25519', value: 'key1' },
              voting_power: '1000'
            },
            {
              address: 'DEF456',
              pub_key: { type: 'ed25519', value: 'key2' },
              voting_power: '2000'
            }
          ],
          block_height: '12345'
        };
        
        const decoded = adapter.decodeResponse(RpcMethod.VALIDATORS, response);
        
        expect(decoded.validators).toHaveLength(2);
        expect(decoded.validators[0].address).toBe('ABC123');
        expect(decoded.validators[0].pubKey.type).toBe('ed25519');
        expect(decoded.validators[0].votingPower).toBe('1000');
        expect(decoded.validators[1].votingPower).toBe('2000');
        expect(decoded.blockHeight).toBe('12345');
      });

      test('should handle null and primitive values', () => {
        const response = {
          data: null as any,
          count: 42,
          active: true,
          message: 'test',
          nested_null: {
            value: null as any,
            number: 123
          }
        };
        
        const decoded = adapter.decodeResponse(RpcMethod.HEALTH, response);
        
        expect(decoded.data).toBeNull();
        expect(decoded.count).toBe(42);
        expect(decoded.active).toBe(true);
        expect(decoded.message).toBe('test');
        expect(decoded.nestedNull.value).toBeNull();
        expect(decoded.nestedNull.number).toBe(123);
      });

      test('should preserve non-snake_case keys', () => {
        const response = {
          'custom-header': 'value',
          CamelCase: 'preserved',
          _private: 'data',
          normal_key: 'converted'
        };
        
        const decoded = adapter.decodeResponse(RpcMethod.STATUS, response);
        
        expect(decoded['custom-header']).toBe('value');
        expect(decoded.CamelCase).toBe('preserved');
        expect(decoded._private).toBe('data');
        expect(decoded.normalKey).toBe('converted');
      });
    });

    // Note: Key conversion utilities are private methods and tested indirectly through public methods
  });

  describe('Factory Function', () => {
    test('should create adapter with default version', () => {
      const adapter = createProtocolAdapter();
      expect(adapter.getVersion()).toBe(ProtocolVersion.COMET_38);
    });

    test('should create adapter with specified version', () => {
      const adapter = createProtocolAdapter(ProtocolVersion.COMET_38);
      expect(adapter.getVersion()).toBe(ProtocolVersion.COMET_38);
    });

    test('should return TendermintProtocolAdapter instance', () => {
      const adapter = createProtocolAdapter();
      expect(adapter).toBeInstanceOf(TendermintProtocolAdapter);
    });
  });

  describe('Protocol Version Support', () => {
    test('should handle different protocol versions', () => {
      const adapter = new TendermintProtocolAdapter(ProtocolVersion.COMET_38);
      
      expect(adapter.getVersion()).toBe(ProtocolVersion.COMET_38);
      
      // All versions should support the same basic methods for now
      const methods = adapter.getSupportedMethods();
      expect(methods.size).toBeGreaterThan(0);
      
      const capabilities = adapter.getCapabilities();
      expect(capabilities.streaming).toBe(true);
    });
  });

  describe('Real-world Data Handling', () => {
    test('should handle actual Osmosis status response', () => {
      const realResponse = {
        node_info: {
          protocol_version: { p2p: '8', block: '11', app: '0' },
          id: '7c2b9e76be5c2142c76174769d5f0d206d4c21d0',
          listen_addr: 'tcp://0.0.0.0:26656',
          network: 'osmosis-1',
          version: '0.38.12',
          channels: '40202122233038606100',
          moniker: 'node-name',
          other: { tx_index: 'on', rpc_address: 'tcp://0.0.0.0:26657' }
        },
        sync_info: {
          latest_block_hash: '7F6C103B5CFD8ED63CAF19C97DD5911FACEB8E3C8F282FB42015BAF61078CD90',
          latest_app_hash: 'E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855',
          latest_block_height: '38512972',
          latest_block_time: '2025-06-25T23:31:48.157143937Z',
          earliest_block_hash: 'A7F6B1CF6F3D4E2B8C9A5E7F1D3B6C8E4A2F9D7B5C3E1A8F6D4B2E9C7A5F3D1B',
          earliest_app_hash: 'E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855',
          earliest_block_height: '1',
          earliest_block_time: '2021-06-18T17:00:00Z',
          catching_up: false
        },
        validator_info: {
          address: 'CB5A63B91E8F4EE8DB935942CBE25724636479E0',
          pub_key: {
            type: 'tendermint/PubKeyEd25519',
            value: 'base64encodedkey='
          },
          voting_power: '0'
        }
      };
      
      const adapter = createProtocolAdapter();
      const decoded = adapter.decodeResponse(RpcMethod.STATUS, realResponse);
      
      expect(decoded.nodeInfo.network).toBe('osmosis-1');
      expect(decoded.nodeInfo.protocolVersion.block).toBe('11');
      expect(decoded.syncInfo.latestBlockHeight).toBe('38512972');
      expect(decoded.syncInfo.catchingUp).toBe(false);
      expect(decoded.validatorInfo.address).toBe('CB5A63B91E8F4EE8DB935942CBE25724636479E0');
    });
  });
});