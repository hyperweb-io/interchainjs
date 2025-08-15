/// <reference types="@types/jest" />

import './setup.test';

import { describe, test, expect, beforeAll, afterAll } from '@jest/globals';
import { ICosmosQueryClient, DirectSigner, AminoSigner, createCosmosQueryClient } from '../../src';
import { useChain } from 'starshipjs';
import { Secp256k1HDWallet } from '../../src/wallets/secp256k1hd';
import { HDPath } from '@interchainjs/types';
import { generateMnemonic } from '../src/utils';
import { getSigner, GetSignerOptions } from '../../../../libs/interchainjs/src/interchain/core/getSigner';

let queryClient: ICosmosQueryClient;
let rpcEndpoint: string;
let wallet: Secp256k1HDWallet;
let testAddress: string;

/**
 * Test suite for getSigner utility function
 * Tests the factory function that creates appropriate signer instances based on configuration
 */
describe('getSigner Utility Function', () => {

  beforeAll(async () => {
    const { getRpcEndpoint, chainInfo, creditFromFaucet } = useChain('osmosis');
    rpcEndpoint = await getRpcEndpoint();

    // Create query client using the standardized method
    queryClient = await createCosmosQueryClient(rpcEndpoint);

    // Create a real wallet instead of a mock
    const mnemonic = generateMnemonic();
    const commonPrefix = chainInfo?.chain?.bech32_prefix || 'osmo';

    wallet = await Secp256k1HDWallet.fromMnemonic(
      mnemonic,
      {
        derivations: [{
          prefix: commonPrefix,
          hdPath: HDPath.cosmos(0, 0, 0).toString(),
        }]
      }
    );

    const accounts = await wallet.getAccounts();
    testAddress = accounts[0].address;

    // Fund the test address
    await creditFromFaucet(testAddress);

    // Wait for funding to be processed
    await new Promise(resolve => setTimeout(resolve, 2000));
  }, 60000);

  afterAll(async () => {
    // Clean up any resources if needed
  });

  describe('Cosmos Signers', () => {
    test('should return DirectSigner for direct sign type', async () => {
      const options: GetSignerOptions = {
        preferredSignType: 'direct',
        signerOptions: {
          queryClient,
          chainId: 'osmosis-1',
          addressPrefix: 'osmo',
          gasMultiplier: 1.3
        }
      };

      const signer = getSigner<DirectSigner>(wallet, options);

      // Verify it's a DirectSigner instance by checking its constructor name
      expect(signer.constructor.name).toBe('DirectSigner');

      // Verify it has the expected methods
      expect(typeof signer.sign).toBe('function');
      expect(typeof signer.signAndBroadcast).toBe('function');
      expect(typeof signer.getAccounts).toBe('function');

      // Verify it can get accounts
      const accounts = await signer.getAccounts();
      expect(accounts).toBeDefined();
      expect(Array.isArray(accounts)).toBe(true);
      expect(accounts.length).toBeGreaterThan(0);
      expect(accounts[0].address).toBe(testAddress);
    });

    test('should return AminoSigner for amino sign type', async () => {
      const options: GetSignerOptions = {
        preferredSignType: 'amino',
        signerOptions: {
          queryClient,
          chainId: 'osmosis-1',
          addressPrefix: 'osmo',
          gasMultiplier: 1.3
        }
      };

      const signer = getSigner<AminoSigner>(wallet, options);

      // Verify it's an AminoSigner instance by checking its constructor name
      expect(signer.constructor.name).toBe('AminoSigner');

      // Verify it has the expected methods
      expect(typeof signer.sign).toBe('function');
      expect(typeof signer.signAndBroadcast).toBe('function');
      expect(typeof signer.getAccounts).toBe('function');

      // Verify it can get accounts
      const accounts = await signer.getAccounts();
      expect(accounts).toBeDefined();
      expect(Array.isArray(accounts)).toBe(true);
      expect(accounts.length).toBeGreaterThan(0);
      expect(accounts[0].address).toBe(testAddress);
    });

    test('should pass through additional configuration options', async () => {
      const options: GetSignerOptions = {
        preferredSignType: 'direct',
        signerOptions: {
          queryClient,
          chainId: 'osmosis-1',
          addressPrefix: 'osmo',
          gasMultiplier: 1.5,
          gasPrice: 'high', // Additional option
          customOption: 'test-value' // Custom option
        }
      };

      const signer = getSigner<DirectSigner>(wallet, options);

      // Should not throw and should create a valid signer
      expect(signer.constructor.name).toBe('DirectSigner');

      // Verify basic functionality works
      const accounts = await signer.getAccounts();
      expect(accounts.length).toBeGreaterThan(0);
    });
  });

  describe('Error Handling', () => {
    test('should throw error for unsupported sign type', () => {
      const options = {
        preferredSignType: 'unsupported' as any,
        signerOptions: {
          queryClient,
          chainId: 'osmosis-1'
        }
      };

      expect(() => getSigner(wallet, options)).toThrow('Unsupported sign type: unsupported');
    });

    test('should throw error when required options are missing', () => {
      const options = {
        preferredSignType: 'direct' as const,
        signerOptions: {
          // Missing queryClient
          chainId: 'osmosis-1'
        }
      } as any;

      expect(() => getSigner(wallet, options)).toThrow();
    });

    test('should handle missing wallet gracefully', () => {
      const options = {
        preferredSignType: 'direct' as const,
        signerOptions: {
          queryClient,
          chainId: 'osmosis-1'
        }
      } as any;

      expect(() => getSigner(null as any, options)).toThrow();
    });
  });

  describe('Configuration Validation', () => {
    test('should work with minimal required configuration', async () => {
      const options: GetSignerOptions = {
        preferredSignType: 'direct',
        signerOptions: {
          queryClient
        }
      };

      const signer = getSigner<DirectSigner>(wallet, options);
      expect(signer.constructor.name).toBe('DirectSigner');

      // Should be able to get accounts even with minimal config
      const accounts = await signer.getAccounts();
      expect(accounts.length).toBeGreaterThan(0);
    });

    test('should handle different gas price formats', async () => {
      const testCases = [
        { gasPrice: 'average' },
        { gasPrice: 'high' },
        { gasPrice: 'low' },
        { gasPrice: 0.025 },
        { gasPrice: '0.025uosmo' }
      ];

      for (const testCase of testCases) {
        const options: GetSignerOptions = {
          preferredSignType: 'direct',
          signerOptions: {
            queryClient,
            chainId: 'osmosis-1',
            ...testCase
          }
        };

        const signer = getSigner<DirectSigner>(wallet, options);
        expect(signer.constructor.name).toBe('DirectSigner');

        // Verify basic functionality
        const accounts = await signer.getAccounts();
        expect(accounts.length).toBeGreaterThan(0);
      }
    });
  });

  describe('Signer Functionality', () => {
    test('should create functional signers that can query chain state', async () => {
      const directSigner = getSigner<DirectSigner>(wallet, {
        preferredSignType: 'direct',
        signerOptions: {
          queryClient,
          chainId: 'osmosis-1',
          addressPrefix: 'osmo'
        }
      } as GetSignerOptions);

      const aminoSigner = getSigner<AminoSigner>(wallet, {
        preferredSignType: 'amino',
        signerOptions: {
          queryClient,
          chainId: 'osmosis-1',
          addressPrefix: 'osmo'
        }
      } as GetSignerOptions);

      // Both signers should be able to get account information
      const directAccounts = await directSigner.getAccounts();
      const aminoAccounts = await aminoSigner.getAccounts();

      expect(directAccounts[0].address).toBe(aminoAccounts[0].address);
      expect(directAccounts[0].address).toBe(testAddress);

      // Both signers should have the same functionality
      expect(typeof directSigner.signAndBroadcast).toBe('function');
      expect(typeof aminoSigner.signAndBroadcast).toBe('function');
    });
  });
});
