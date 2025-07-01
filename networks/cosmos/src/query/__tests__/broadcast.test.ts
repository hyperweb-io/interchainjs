import { CosmosQueryClient } from '../cosmos-query-client';
import { HttpRpcClient } from '../../rpc/http-client';
import { Comet38Adapter } from '../../adapters/comet38';
import { RpcMethod } from '../../types/protocol';
import { BroadcastTxParams } from '../../types/requests';

describe('CosmosQueryClient Broadcast Methods', () => {
  let client: CosmosQueryClient;
  let mockRpcClient: jest.Mocked<HttpRpcClient>;
  let adapter: Comet38Adapter;

  beforeEach(() => {
    mockRpcClient = {
      call: jest.fn(),
    } as any;
    adapter = new Comet38Adapter();
    client = new CosmosQueryClient(mockRpcClient, adapter);
  });

  describe('broadcastTxAsync', () => {
    it('should broadcast transaction asynchronously', async () => {
      const mockResponse = {
        result: {
          hash: 'ABCDEF1234567890'
        }
      };
      mockRpcClient.call.mockResolvedValue(mockResponse);

      const params: BroadcastTxParams = {
        tx: new Uint8Array([1, 2, 3, 4, 5])
      };

      const result = await client.broadcastTxAsync(params);

      expect(mockRpcClient.call).toHaveBeenCalledWith(
        RpcMethod.BROADCAST_TX_ASYNC,
        { tx: 'AQIDBAU=' }
      );
      expect(result).toEqual({
        hash: new Uint8Array([171, 205, 239, 18, 52, 86, 120, 144])
      });
    });
  });

  describe('broadcastTxSync', () => {
    it('should broadcast transaction synchronously', async () => {
      const mockResponse = {
        result: {
          code: 0,
          data: 'dGVzdCBkYXRh', // base64 for "test data"
          log: 'success',
          info: 'tx info',
          gas_wanted: '100000',
          gas_used: '50000',
          events: [] as any[],
          codespace: '',
          hash: 'ABCDEF1234567890'
        }
      };
      mockRpcClient.call.mockResolvedValue(mockResponse);

      const params: BroadcastTxParams = {
        tx: new Uint8Array([1, 2, 3, 4, 5])
      };

      const result = await client.broadcastTxSync(params);

      expect(mockRpcClient.call).toHaveBeenCalledWith(
        RpcMethod.BROADCAST_TX_SYNC,
        { tx: 'AQIDBAU=' }
      );
      expect(result.code).toBe(0);
      expect(result.log).toBe('success');
      expect(result.gasWanted).toBe(100000n);
      expect(result.gasUsed).toBe(50000n);
      expect(result.hash).toEqual(new Uint8Array([171, 205, 239, 18, 52, 86, 120, 144]));
    });
  });

  describe('broadcastTxCommit', () => {
    it('should broadcast transaction and wait for commit', async () => {
      const mockResponse = {
        result: {
          height: '12345',
          hash: 'ABCDEF1234567890',
          check_tx: {
            code: 0,
            data: '',
            log: 'check passed',
            info: '',
            gas_wanted: '100000',
            gas_used: '50000',
            events: [] as any[],
            codespace: ''
          },
          tx_result: {
            code: 0,
            data: '',
            log: 'tx executed',
            info: '',
            gas_wanted: '100000',
            gas_used: '50000',
            events: [] as any[],
            codespace: ''
          }
        }
      };
      mockRpcClient.call.mockResolvedValue(mockResponse);

      const params: BroadcastTxParams = {
        tx: new Uint8Array([1, 2, 3, 4, 5])
      };

      const result = await client.broadcastTxCommit(params);

      expect(mockRpcClient.call).toHaveBeenCalledWith(
        RpcMethod.BROADCAST_TX_COMMIT,
        { tx: 'AQIDBAU=' }
      );
      expect(result.height).toBe(12345);
      expect(result.hash).toEqual(new Uint8Array([171, 205, 239, 18, 52, 86, 120, 144]));
      expect(result.checkTx.code).toBe(0);
      expect(result.checkTx.log).toBe('check passed');
      expect(result.txResult?.code).toBe(0);
      expect(result.txResult?.log).toBe('tx executed');
    });

    it('should handle legacy deliverTx response', async () => {
      const mockResponse = {
        result: {
          height: '12345',
          hash: 'ABCDEF1234567890',
          check_tx: {
            code: 0,
            data: '',
            log: 'check passed',
            info: '',
            gas_wanted: '100000',
            gas_used: '50000',
            events: [] as any[],
            codespace: ''
          },
          deliver_tx: {
            code: 0,
            data: '',
            log: 'tx delivered',
            info: '',
            gas_wanted: '100000',
            gas_used: '50000',
            events: [] as any[],
            codespace: ''
          }
        }
      };
      mockRpcClient.call.mockResolvedValue(mockResponse);

      const params: BroadcastTxParams = {
        tx: new Uint8Array([1, 2, 3, 4, 5])
      };

      const result = await client.broadcastTxCommit(params);

      expect(result.deliverTx?.code).toBe(0);
      expect(result.deliverTx?.log).toBe('tx delivered');
    });
  });

  describe('parameter encoding', () => {
    it('should encode tx as base64 for broadcast methods', () => {
      const tx = new Uint8Array([255, 128, 64, 32, 16]);
      
      const syncParams = adapter.encodeParams(RpcMethod.BROADCAST_TX_SYNC, { tx });
      expect(syncParams.tx).toBe('/4BAIBA=');

      const asyncParams = adapter.encodeParams(RpcMethod.BROADCAST_TX_ASYNC, { tx });
      expect(asyncParams.tx).toBe('/4BAIBA=');

      const commitParams = adapter.encodeParams(RpcMethod.BROADCAST_TX_COMMIT, { tx });
      expect(commitParams.tx).toBe('/4BAIBA=');
    });
  });
});