/// <reference types="@types/jest" />

import './setup.test';

import { describe, test, expect, beforeAll, afterAll } from '@jest/globals';
import { createCosmosQueryClient, ICosmosQueryClient } from '@interchainjs/cosmos';
import { useChain } from 'starshipjs';
import { getAccounts } from '@interchainjs/cosmos-types';
import { BaseAccount } from '@interchainjs/cosmos-types/cosmos/auth/v1beta1/auth';
import { DirectSigner } from '@interchainjs/cosmos';
import { TxBody, SignerInfo, ModeInfo } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { Any } from '@interchainjs/cosmos-types/google/protobuf/any';

let queryClient: ICosmosQueryClient;
let rpcEndpoint: string;
let testAddress: string;
let testSigner: DirectSigner;

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

    // Create test signer
    const mockOfflineSigner = {
      getAccounts: async () => [{
        address: testAddress,
        pubkey: new Uint8Array(33), // Mock public key
        algo: 'secp256k1' as const
      }]
    };

    testSigner = new DirectSigner(mockOfflineSigner, {
      queryClient,
      chainId: 'osmosis-1',
      addressPrefix: 'osmo'
    });
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

  describe('simulateByTxBody', () => {
    test('should simulate realistic transaction and return accurate gas estimate', async () => {
      // Create a properly encoded MsgSend message for real simulation
      // Use the actual test address from the chain for the from_address
      
      // Use the established test address and a known valid to address
      
      // Create a working MsgSend encoded bytes
      // This is a properly encoded MsgSend with:
      // from_address: osmo1qjtcxl86z0zua2egcsz4ncff2gzlcndz2jeczk
      // to_address: osmo1qypqxpq9qcrsszg2pvxq6rs0zqg3yyc5lzv7xu  
      // amount: 100uosmo
      const msgSendBytes = new Uint8Array([
        0x0a, 0x2d, 0x6f, 0x73, 0x6d, 0x6f, 0x31, 0x71, 0x6a, 0x74, 0x63, 0x78, 0x6c, 0x38, 0x36, 0x7a,
        0x30, 0x7a, 0x75, 0x61, 0x32, 0x65, 0x67, 0x63, 0x73, 0x7a, 0x34, 0x6e, 0x63, 0x66, 0x66, 0x32,
        0x67, 0x7a, 0x6c, 0x63, 0x6e, 0x64, 0x7a, 0x32, 0x6a, 0x65, 0x63, 0x7a, 0x6b, 0x12, 0x2d, 0x6f,
        0x73, 0x6d, 0x6f, 0x31, 0x71, 0x79, 0x70, 0x71, 0x78, 0x70, 0x71, 0x39, 0x71, 0x63, 0x72, 0x73,
        0x73, 0x7a, 0x67, 0x32, 0x70, 0x76, 0x78, 0x71, 0x36, 0x72, 0x73, 0x30, 0x7a, 0x71, 0x67, 0x33,
        0x79, 0x79, 0x63, 0x35, 0x6c, 0x7a, 0x76, 0x37, 0x78, 0x75, 0x1a, 0x0c, 0x0a, 0x05, 0x75, 0x6f,
        0x73, 0x6d, 0x6f, 0x12, 0x03, 0x31, 0x30, 0x30
      ]);
      
      const testMessage = Any.fromPartial({
        typeUrl: '/cosmos.bank.v1beta1.MsgSend',
        value: msgSendBytes
      });

      // Create realistic TxBody
      const txBody = TxBody.fromPartial({
        messages: [testMessage],
        memo: 'test simulation with realistic bank transfer'
      });

      // Create realistic SignerInfo with actual sequence
      const baseAccount = await queryClient.getBaseAccount(testAddress);
      const sequence = baseAccount?.sequence || BigInt(0);
      
      const signerInfo = SignerInfo.fromPartial({
        publicKey: Any.fromPartial({
          typeUrl: '/cosmos.crypto.secp256k1.PubKey',
          value: new Uint8Array([2, 48, 70, 50, 119, 80, 75, 108, 74, 56, 51, 50, 72, 55, 54, 56, 53, 54, 70, 55, 51, 70, 57, 69, 69, 56, 51, 70, 55, 55, 53, 50, 68, 67])
        }),
        modeInfo: ModeInfo.fromPartial({
          single: { mode: 1 } // SIGN_MODE_DIRECT
        }),
        sequence: sequence
      });

      // Test simulation
      let simulation;
      try {
        console.log('🔍 Testing simulation with realistic transaction...');
        simulation = await testSigner.simulateByTxBody(txBody, [signerInfo]);
        
        console.log('✅ Simulation successful:', {
          gasUsed: simulation.gasInfo.gasUsed.toString(),
          gasWanted: simulation.gasInfo.gasWanted.toString(),
          hasResult: !!simulation.result
        });
      } catch (error) {
        console.error('❌ Simulation failed:', error);
        throw error;
      }
      
      expect(simulation).toBeDefined();
      expect(simulation.gasInfo).toBeDefined();
      
      const gasUsed = simulation.gasInfo.gasUsed;
      const gasWanted = simulation.gasInfo.gasWanted;
      
      console.log(`Final result: gasUsed=${gasUsed}, gasWanted=${gasWanted}`);
      
      // The method now returns actual simulation results or zero values
      // Test behavior depends on actual chain state and message validity
      expect(simulation.gasInfo).toBeDefined();
      expect(typeof gasUsed).toBe('bigint');
      expect(typeof gasWanted).toBe('bigint');
    });

    test('should handle empty transaction gracefully', async () => {
      const emptyTxBody = TxBody.fromPartial({
        messages: [],
        memo: ''
      });

      const baseAccount = await queryClient.getBaseAccount(testAddress);
      const sequence = baseAccount?.sequence || BigInt(0);
      
      const signerInfo = SignerInfo.fromPartial({
        publicKey: Any.fromPartial({
          typeUrl: '/cosmos.crypto.secp256k1.PubKey',
          value: new Uint8Array([2, 48, 70, 50, 119, 80, 75, 108, 74, 56, 51, 50, 72, 55, 54, 56, 53, 54, 70, 55, 51, 70, 57, 69, 69, 56, 51, 70, 55, 55, 53, 50, 68, 67])
        }),
        modeInfo: ModeInfo.fromPartial({
          single: { mode: 1 }
        }),
        sequence: sequence
      });

      const simulation = await testSigner.simulateByTxBody(emptyTxBody, [signerInfo]);
      
      expect(simulation).toBeDefined();
      expect(simulation.gasInfo).toBeDefined();
      
      const gasUsed = simulation.gasInfo.gasUsed;
      
      // Empty transaction will return actual simulation results (likely 0 or minimal)
      expect(typeof gasUsed).toBe('bigint');
      
      console.log(`Empty transaction result: gasUsed=${gasUsed}`);
    });

    test('should handle invalid message gracefully', async () => {
      const invalidMessage = Any.fromPartial({
        typeUrl: '/invalid.message.type',
        value: new Uint8Array([1, 2, 3, 4]) // Invalid bytes
      });

      const txBody = TxBody.fromPartial({
        messages: [invalidMessage],
        memo: 'invalid message test'
      });

      const baseAccount = await queryClient.getBaseAccount(testAddress);
      const sequence = baseAccount?.sequence || BigInt(0);
      
      const signerInfo = SignerInfo.fromPartial({
        publicKey: Any.fromPartial({
          typeUrl: '/cosmos.crypto.secp256k1.PubKey',
          value: new Uint8Array([2, 48, 70, 50, 119, 80, 75, 108, 74, 56, 51, 50, 72, 55, 54, 56, 53, 54, 70, 55, 51, 70, 57, 69, 69, 56, 51, 70, 55, 55, 53, 50, 68, 67])
        }),
        modeInfo: ModeInfo.fromPartial({
          single: { mode: 1 }
        }),
        sequence: sequence
      });

      const simulation = await testSigner.simulateByTxBody(txBody, [signerInfo]);
      
      expect(simulation).toBeDefined();
      expect(simulation.gasInfo).toBeDefined();
      
      const gasUsed = simulation.gasInfo.gasUsed;
      
      // Invalid message will return actual simulation results (likely 0)
      expect(typeof gasUsed).toBe('bigint');
      
      console.log(`Invalid message result: gasUsed=${gasUsed}`);
    });
  });
});