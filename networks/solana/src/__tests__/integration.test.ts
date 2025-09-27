/**
 * Integration tests for Solana module
 */

import { createSolanaQueryClient } from '../client-factory';
import { GetHealthRequest, GetVersionRequest } from '../types/requests';
import { SolanaProtocolVersion } from '../types/protocol';

// Mock HttpRpcClient for integration tests
jest.mock('@interchainjs/utils', () => ({
  HttpRpcClient: jest.fn().mockImplementation((endpoint, _options) => ({
    endpoint: typeof endpoint === 'string' ? endpoint : endpoint.url,
    connect: jest.fn(),
    disconnect: jest.fn(),
    isConnected: jest.fn().mockReturnValue(true),
    call: jest.fn().mockImplementation((method, _params) => {
      switch (method) {
        case 'getHealth':
          return Promise.resolve('ok');
        case 'getVersion':
          return Promise.resolve({
            'solana-core': '1.18.22',
            'feature-set': 2891131721
          });
        default:
          return Promise.reject(new Error(`Unknown method: ${method}`));
      }
    })
  }))
}));

describe('Solana Integration Tests', () => {
  const testEndpoint = 'https://api.mainnet-beta.solana.com';

  describe('End-to-end workflow', () => {
    it('should create client and perform basic operations', async () => {
      // Create client
      const client = await createSolanaQueryClient(testEndpoint);
      expect(client).toBeDefined();

      // Connect
      await client.connect();
      expect(client.isConnected()).toBe(true);

      // Get health (with request object)
      const healthRequest: GetHealthRequest = {};
      const health = await client.getHealth(healthRequest);
      expect(health).toBe('ok');

      // Get health (without request object)
      const healthDirect = await client.getHealth();
      expect(healthDirect).toBe('ok');

      // Get version (with request object)
      const versionRequest: GetVersionRequest = {};
      const version = await client.getVersion(versionRequest);
      expect(version['solana-core']).toBe('1.18.22');
      expect(version['feature-set']).toBe(2891131721);

      // Get version (without request object)
      const versionDirect = await client.getVersion();
      expect(versionDirect['solana-core']).toBe('1.18.22');
      expect(versionDirect['feature-set']).toBe(2891131721);

      // Get protocol info
      const protocolInfo = client.getProtocolInfo();
      expect(protocolInfo).toBeDefined();
      expect(protocolInfo.version).toBeDefined();
      expect(protocolInfo.supportedMethods).toBeInstanceOf(Set);
      expect(protocolInfo.capabilities).toBeDefined();

      // Disconnect
      await client.disconnect();
    });

    it('should handle request objects with options', async () => {
      const client = await createSolanaQueryClient(testEndpoint);

      // Test with empty options
      const healthRequest: GetHealthRequest = {
        options: {}
      };
      const health = await client.getHealth(healthRequest);
      expect(health).toBe('ok');

      // Test with undefined options
      const versionRequest: GetVersionRequest = {
        options: undefined
      };
      const version = await client.getVersion(versionRequest);
      expect(version['solana-core']).toBe('1.18.22');
    });

    it('should handle errors gracefully', async () => {
      // Mock error response
      const { HttpRpcClient } = require('@interchainjs/utils');
      HttpRpcClient.mockImplementation((endpoint: any, _options: any) => ({
        endpoint: typeof endpoint === 'string' ? endpoint : endpoint.url,
        connect: jest.fn().mockResolvedValue(undefined),
        disconnect: jest.fn().mockResolvedValue(undefined),
        isConnected: jest.fn().mockReturnValue(true),
        call: jest.fn().mockRejectedValue(new Error('Network error'))
      }));

      const client = await createSolanaQueryClient(testEndpoint, {
        protocolVersion: SolanaProtocolVersion.SOLANA_1_18
      });

      const healthRequest: GetHealthRequest = {};
      await expect(client.getHealth(healthRequest)).rejects.toThrow('Network error');
    });
  });

  describe('Request object pattern validation', () => {
    it('should enforce request object pattern', async () => {
      const client = await createSolanaQueryClient(testEndpoint, {
        protocolVersion: SolanaProtocolVersion.SOLANA_1_18
      });

      // These should compile and work (TypeScript validation)
      const healthRequest: GetHealthRequest = {};
      const versionRequest: GetVersionRequest = {};

      expect(() => client.getHealth(healthRequest)).not.toThrow();
      expect(() => client.getVersion(versionRequest)).not.toThrow();
    });

    it('should work with optional request parameters', async () => {
      const client = await createSolanaQueryClient(testEndpoint, {
        protocolVersion: SolanaProtocolVersion.SOLANA_1_18
      });

      // These should compile and work without request parameters
      expect(() => client.getHealth()).not.toThrow();
      expect(() => client.getVersion()).not.toThrow();

      // Verify they actually work
      const health = await client.getHealth();
      const version = await client.getVersion();

      expect(health).toBe('ok');
      expect(version['solana-core']).toBe('1.18.22');
    });

    it('should support BaseSolanaRequest pattern', async () => {
      const client = await createSolanaQueryClient(testEndpoint, {
        protocolVersion: SolanaProtocolVersion.SOLANA_1_18
      });

      // Test that requests follow the BaseSolanaRequest<TOpt> pattern
      const healthRequest: GetHealthRequest = {
        options: {}
      };

      const versionRequest: GetVersionRequest = {
        options: {}
      };

      const health = await client.getHealth(healthRequest);
      const version = await client.getVersion(versionRequest);

      expect(health).toBe('ok');
      expect(version['solana-core']).toBe('1.18.22');
    });
  });
});
