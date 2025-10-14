/**
 * Tests for Solana client factory
 */

import { SolanaClientFactory, createSolanaQueryClient } from '../client-factory';
import { SolanaProtocolVersion } from '../types/protocol';

// Mock HttpRpcClient
jest.mock('@interchainjs/utils', () => ({
  HttpRpcClient: jest.fn().mockImplementation((endpoint, options) => ({
    endpoint: typeof endpoint === 'string' ? endpoint : endpoint.url,
    connect: jest.fn(),
    disconnect: jest.fn(),
    call: jest.fn().mockResolvedValue({
      'solana-core': '1.18.22',
      'feature-set': 2891131721
    })
  }))
}));

describe('SolanaClientFactory', () => {
  const testEndpoint = 'https://api.mainnet-beta.solana.com';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('createQueryClient', () => {
    it('should create query client with default options', async () => {
      const client = await SolanaClientFactory.createQueryClient(testEndpoint);
      
      expect(client).toBeDefined();
      expect(client.endpoint).toBe(testEndpoint);
      expect(typeof client.getHealth).toBe('function');
      expect(typeof client.getVersion).toBe('function');
    });

    it('should create query client with custom options', async () => {
      const options = {
        protocolVersion: SolanaProtocolVersion.SOLANA_1_18,
        timeout: 10000,
        headers: { 'Custom-Header': 'test' }
      };

      const client = await SolanaClientFactory.createQueryClient(testEndpoint, options);
      
      expect(client).toBeDefined();
      expect(client.endpoint).toBe(testEndpoint);
    });

    it('should create query client with HttpEndpoint object', async () => {
      const endpoint = {
        url: testEndpoint,
        headers: { 'Authorization': 'Bearer token' }
      };

      const client = await SolanaClientFactory.createQueryClient(endpoint);
      
      expect(client).toBeDefined();
      expect(client.endpoint).toBe(testEndpoint);
    });

    it('should handle protocol version detection', async () => {
      const client = await SolanaClientFactory.createQueryClient(testEndpoint, {});
      
      expect(client).toBeDefined();
      const protocolInfo = client.getProtocolInfo();
      expect(protocolInfo.version).toBe(SolanaProtocolVersion.SOLANA_1_18);
    });
  });

  describe('createSolanaQueryClient convenience function', () => {
    it('should create query client', async () => {
      const client = await createSolanaQueryClient(testEndpoint);
      
      expect(client).toBeDefined();
      expect(client.endpoint).toBe(testEndpoint);
    });

    it('should create query client with options', async () => {
      const options = {
        protocolVersion: SolanaProtocolVersion.SOLANA_1_18,
        timeout: 5000
      };

      const client = await createSolanaQueryClient(testEndpoint, options);
      
      expect(client).toBeDefined();
      expect(client.endpoint).toBe(testEndpoint);
    });
  });
});
