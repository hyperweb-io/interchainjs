/**
 * Tests for Solana query client
 */

import { SolanaQueryClient } from '../solana-query-client';
import { Solana118Adapter } from '../../adapters/solana-1_18';
import { SolanaRpcMethod } from '../../types/protocol';
import { GetHealthRequest, GetVersionRequest } from '../../types/requests';

// Mock IRpcClient
const mockRpcClient = {
  endpoint: 'https://api.mainnet-beta.solana.com',
  connect: jest.fn(),
  disconnect: jest.fn(),
  isConnected: jest.fn().mockReturnValue(true),
  call: jest.fn()
};

describe('SolanaQueryClient', () => {
  let client: SolanaQueryClient;
  let adapter: Solana118Adapter;

  beforeEach(() => {
    adapter = new Solana118Adapter();
    client = new SolanaQueryClient(mockRpcClient as any, adapter);
    jest.clearAllMocks();
  });

  describe('basic properties', () => {
    it('should have correct endpoint', () => {
      expect(client.endpoint).toBe('https://api.mainnet-beta.solana.com');
    });

    it('should delegate connection methods', async () => {
      await client.connect();
      expect(mockRpcClient.connect).toHaveBeenCalled();

      await client.disconnect();
      expect(mockRpcClient.disconnect).toHaveBeenCalled();

      const connected = client.isConnected();
      expect(connected).toBe(true);
      expect(mockRpcClient.isConnected).toHaveBeenCalled();
    });

    it('should provide protocol info', () => {
      const protocolInfo = client.getProtocolInfo();
      expect(protocolInfo).toBeDefined();
      expect(protocolInfo.version).toBeDefined();
      expect(protocolInfo.supportedMethods).toBeInstanceOf(Set);
      expect(protocolInfo.capabilities).toBeDefined();
    });
  });

  describe('getHealth', () => {
    it('should call RPC with correct parameters', async () => {
      mockRpcClient.call.mockResolvedValue('ok');

      const request: GetHealthRequest = {};
      const result = await client.getHealth(request);

      expect(mockRpcClient.call).toHaveBeenCalledWith(SolanaRpcMethod.GET_HEALTH, []);
      expect(result).toBe('ok');
    });

    it('should work without request parameter', async () => {
      mockRpcClient.call.mockResolvedValue('ok');

      const result = await client.getHealth();

      expect(mockRpcClient.call).toHaveBeenCalledWith(SolanaRpcMethod.GET_HEALTH, []);
      expect(result).toBe('ok');
    });

    it('should handle RPC response correctly', async () => {
      mockRpcClient.call.mockResolvedValue({ result: 'ok' });

      const request: GetHealthRequest = {};
      const result = await client.getHealth(request);

      expect(result).toBe('ok');
    });

    it('should propagate RPC errors', async () => {
      const error = new Error('RPC error');
      mockRpcClient.call.mockRejectedValue(error);

      const request: GetHealthRequest = {};
      await expect(client.getHealth(request)).rejects.toThrow('RPC error');
    });
  });

  describe('getVersion', () => {
    it('should call RPC with correct parameters', async () => {
      const mockResponse = {
        result: {
          'solana-core': '1.18.22',
          'feature-set': 2891131721
        }
      };
      mockRpcClient.call.mockResolvedValue(mockResponse);

      const request: GetVersionRequest = {};
      const result = await client.getVersion(request);

      expect(mockRpcClient.call).toHaveBeenCalledWith(SolanaRpcMethod.GET_VERSION, []);
      expect(result['solana-core']).toBe('1.18.22');
      expect(result['feature-set']).toBe(2891131721);
    });

    it('should work without request parameter', async () => {
      const mockResponse = {
        result: {
          'solana-core': '1.18.22',
          'feature-set': 2891131721
        }
      };
      mockRpcClient.call.mockResolvedValue(mockResponse);

      const result = await client.getVersion();

      expect(mockRpcClient.call).toHaveBeenCalledWith(SolanaRpcMethod.GET_VERSION, []);
      expect(result['solana-core']).toBe('1.18.22');
      expect(result['feature-set']).toBe(2891131721);
    });

    it('should handle direct response format', async () => {
      const mockResponse = {
        'solana-core': '1.18.22',
        'feature-set': 2891131721
      };
      mockRpcClient.call.mockResolvedValue(mockResponse);

      const request: GetVersionRequest = {};
      const result = await client.getVersion(request);

      expect(result['solana-core']).toBe('1.18.22');
      expect(result['feature-set']).toBe(2891131721);
    });

    it('should handle missing feature-set', async () => {
      const mockResponse = {
        result: {
          'solana-core': '1.18.22'
        }
      };
      mockRpcClient.call.mockResolvedValue(mockResponse);

      const request: GetVersionRequest = {};
      const result = await client.getVersion(request);

      expect(result['solana-core']).toBe('1.18.22');
      expect(result['feature-set']).toBeUndefined();
    });

    it('should propagate RPC errors', async () => {
      const error = new Error('RPC error');
      mockRpcClient.call.mockRejectedValue(error);

      const request: GetVersionRequest = {};
      await expect(client.getVersion(request)).rejects.toThrow('RPC error');
    });
  });
});
