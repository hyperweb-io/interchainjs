import { createCosmosSignerConfig, mergeSignerOptions, DEFAULT_COSMOS_SIGNER_CONFIG } from '../config';
import { CosmosSignerConfig, DocOptions } from '../types';

// Mock query client for testing
const mockQueryClient = {
  getBaseAccount: jest.fn(),
  getAccount: jest.fn(),
  simulate: jest.fn(),
  broadcast: jest.fn(),
} as any;

describe('Cosmos Signer Configuration', () => {
  describe('DEFAULT_COSMOS_SIGNER_CONFIG', () => {
    it('should have correct default values', () => {
      expect(DEFAULT_COSMOS_SIGNER_CONFIG).toEqual({
        multiplier: 1.3,
        gasPrice: 'average',
        addressPrefix: 'cosmos',
        message: {
          hash: 'sha256'
        },
        unordered: false,
        extensionOptions: [],
        nonCriticalExtensionOptions: []
      });
    });
  });

  describe('createCosmosSignerConfig', () => {
    it('should merge user config with defaults', () => {
      const userConfig: CosmosSignerConfig = {
        queryClient: mockQueryClient,
        chainId: 'cosmoshub-4',
        gasPrice: '0.025uatom'
      };

      const result = createCosmosSignerConfig(userConfig);

      expect(result).toEqual({
        queryClient: mockQueryClient,
        chainId: 'cosmoshub-4',
        gasPrice: '0.025uatom', // User override
        multiplier: 1.3, // Default
        addressPrefix: 'cosmos', // Default
        message: {
          hash: 'sha256' // Default
        },
        unordered: false, // Default
        extensionOptions: [], // Default
        nonCriticalExtensionOptions: [] // Default
      });
    });

    it('should throw error if queryClient is missing', () => {
      const userConfig = {
        chainId: 'cosmoshub-4'
      } as CosmosSignerConfig;

      expect(() => createCosmosSignerConfig(userConfig)).toThrow('queryClient is required in signer configuration');
    });

    it('should allow user to override all defaults', () => {
      const userConfig: CosmosSignerConfig = {
        queryClient: mockQueryClient,
        chainId: 'cosmoshub-4',
        multiplier: 2.0,
        gasPrice: '0.1uatom',
        addressPrefix: 'osmo',
        message: {
          hash: 'sha512'
        },
        unordered: true
      };

      const result = createCosmosSignerConfig(userConfig);

      expect(result.multiplier).toBe(2.0);
      expect(result.gasPrice).toBe('0.1uatom');
      expect(result.addressPrefix).toBe('osmo');
      expect(result.message?.hash).toBe('sha512');
      expect(result.unordered).toBe(true);
    });
  });

  describe('mergeSignerOptions', () => {
    it('should merge base config with operation options', () => {
      const baseConfig: CosmosSignerConfig = {
        queryClient: mockQueryClient,
        chainId: 'cosmoshub-4',
        multiplier: 1.3,
        gasPrice: 'average',
        addressPrefix: 'cosmos'
      };

      const operationOptions: Partial<DocOptions> = {
        multiplier: 1.5,
        signerAddress: 'cosmos1abc123'
      };

      const result = mergeSignerOptions(baseConfig, operationOptions);

      expect(result.multiplier).toBe(1.5); // Operation override
      expect(result.gasPrice).toBe('average'); // Base config
      expect(result.addressPrefix).toBe('cosmos'); // Base config
      expect(result.signerAddress).toBe('cosmos1abc123'); // Operation option
    });

    it('should handle empty operation options', () => {
      const baseConfig: CosmosSignerConfig = {
        queryClient: mockQueryClient,
        chainId: 'cosmoshub-4',
        multiplier: 1.3,
        gasPrice: 'average'
      };

      const result = mergeSignerOptions(baseConfig, {});

      expect(result.multiplier).toBe(1.3);
      expect(result.gasPrice).toBe('average');
    });

    it('should handle nested object merging', () => {
      const baseConfig: CosmosSignerConfig = {
        queryClient: mockQueryClient,
        message: {
          hash: 'sha256'
        }
      };

      const operationOptions: Partial<DocOptions> = {
        message: {
          hash: 'sha512'
        }
      };

      const result = mergeSignerOptions(baseConfig, operationOptions);

      expect(result.message?.hash).toBe('sha512');
    });
  });
});
