/// <reference types="@types/jest" />

import './setup.test';

import { describe, test, expect, beforeAll, afterAll } from '@jest/globals';
import { createCosmosQueryClient, ICosmosQueryClient } from '@interchainjs/cosmos';
import { useChain } from 'starshipjs';
import { getAccounts } from '@interchainjs/cosmos-types';
import { BaseAccount } from '@interchainjs/cosmos-types/cosmos/auth/v1beta1/auth';

let queryClient: ICosmosQueryClient;
let rpcEndpoint: string;
let testAddress: string;

/**
 * Test suite for getAccountNumber and getSequence methods
 * Tests the getBaseAccount method used by signers
 */
describe('Signer Account Methods', () => {

  beforeAll(async () => {
    const { getRpcEndpoint } = useChain('osmosis');
    rpcEndpoint = await getRpcEndpoint();
    
    queryClient = await createCosmosQueryClient(rpcEndpoint, {
      timeout: 30000,
      headers: {
        'User-Agent': 'InterchainJS-Signer-Test/1.0.0'
      }
    });

    // Get test address from chain accounts
    const accountsResponse = await getAccounts(queryClient, {});
    expect(accountsResponse.accounts.length).toBeGreaterThan(0);
    
    // Find a BaseAccount to extract a valid address
    for (const account of accountsResponse.accounts) {
      if (account.typeUrl === '/cosmos.auth.v1beta1.BaseAccount') {
        const baseAccount = BaseAccount.decode(account.value);
        if (baseAccount.address && baseAccount.address.startsWith('osmo')) {
          testAddress = baseAccount.address;
          break;
        }
      }
    }
    
    // Fallback to wallet address if no BaseAccount found
    if (!testAddress) {
      console.warn('No BaseAccount found, using wallet address');
      testAddress = 'osmo1qypqxpq9qcrsszg2pvxq6rs0zqg3yyc5lzv7xu';
    }
    
    console.log(`Test address: ${testAddress}`);
  });

  describe('getAccountNumber', () => {
    test('should return account number for valid address via getBaseAccount', async () => {
      const baseAccount = await queryClient.getBaseAccount(testAddress);
      expect(baseAccount).not.toBeNull();
      expect(typeof baseAccount!.accountNumber).toBe('bigint');
      expect(baseAccount!.accountNumber).toBeGreaterThanOrEqual(BigInt(0));
    });

    test('should handle invalid address gracefully', async () => {
      const invalidAddress = 'osmo1invalidaddress123456789';
      const baseAccount = await queryClient.getBaseAccount(invalidAddress);
      expect(baseAccount).toBeNull();
    });
  });

  describe('getSequence', () => {
    test('should return sequence for valid address via getBaseAccount', async () => {
      const baseAccount = await queryClient.getBaseAccount(testAddress);
      expect(baseAccount).not.toBeNull();
      expect(typeof baseAccount!.sequence).toBe('bigint');
      expect(baseAccount!.sequence).toBeGreaterThanOrEqual(BigInt(0));
    });

    test('should handle invalid address gracefully', async () => {
      const invalidAddress = 'osmo1invalidaddress123456789';
      const baseAccount = await queryClient.getBaseAccount(invalidAddress);
      expect(baseAccount).toBeNull();
    });
  });
});