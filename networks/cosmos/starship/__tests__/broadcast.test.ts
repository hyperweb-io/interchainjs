/// <reference types="@types/jest" />

import './setup.test';

import { useChain } from 'starshipjs';

import { CosmosQueryClient } from '../../src/query/cosmos-query-client';
import { HttpRpcClient } from '../../src/rpc/http-client';
import { Comet38Adapter } from '../../src/adapters/comet38';
import { BroadcastTxParams } from '../../src/types/requests';

describe('Broadcast Integration Tests', () => {
  let client: CosmosQueryClient;
  let rpcEndpoint: string;

  beforeAll(async () => {
    const { getRpcEndpoint } = useChain('osmosis');
    rpcEndpoint = await getRpcEndpoint();
    const rpcClient = new HttpRpcClient(rpcEndpoint);
    const adapter = new Comet38Adapter();
    client = new CosmosQueryClient(rpcClient, adapter);
  });

  describe('Broadcast Methods', () => {
    // Create a simple test transaction (this is just a placeholder - in real tests you'd create a proper signed tx)
    const createTestTx = () => {
      // This is a dummy transaction for testing - in real scenarios, you'd create a properly signed transaction
      const txBytes = new Uint8Array([
        0x0a, 0x90, 0x01, 0x0a, 0x8d, 0x01, 0x0a, 0x1c, 0x2f, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x73,
        0x2e, 0x62, 0x61, 0x6e, 0x6b, 0x2e, 0x76, 0x31, 0x62, 0x65, 0x74, 0x61, 0x31, 0x2e, 0x4d,
        0x73, 0x67, 0x53, 0x65, 0x6e, 0x64, 0x12, 0x6d, 0x0a, 0x2d, 0x63, 0x6f, 0x73, 0x6d, 0x6f,
        0x73, 0x31, 0x70, 0x6b, 0x70, 0x74, 0x72, 0x65, 0x6a, 0x79, 0x36, 0x78, 0x35, 0x61, 0x74,
        0x77, 0x79, 0x39, 0x30, 0x68, 0x33, 0x7a, 0x6e, 0x77, 0x66, 0x38, 0x66, 0x78, 0x7a, 0x6b,
        0x74, 0x64, 0x7a, 0x67, 0x66, 0x64, 0x73, 0x68, 0x64, 0x73, 0x12, 0x2d, 0x63, 0x6f, 0x73,
        0x6d, 0x6f, 0x73, 0x31, 0x71, 0x79, 0x70, 0x71, 0x78, 0x76, 0x70, 0x71, 0x39, 0x71, 0x63,
        0x72, 0x73, 0x71, 0x71, 0x7a, 0x71, 0x67, 0x70, 0x71, 0x79, 0x6c, 0x77, 0x76, 0x73, 0x70,
        0x71, 0x67, 0x79, 0x79, 0x79, 0x35, 0x7a, 0x73, 0x1a, 0x0d, 0x0a, 0x05, 0x75, 0x61, 0x74,
        0x6f, 0x6d, 0x12, 0x04, 0x31, 0x30, 0x30, 0x30
      ]);
      return txBytes;
    };

    it('should broadcast transaction asynchronously', async () => {
      const tx = createTestTx();
      const params: BroadcastTxParams = { tx };

      try {
        const result = await client.broadcastTxAsync(params);

        // The transaction will likely fail due to invalid signature, but we're testing the RPC call works
        expect(result).toBeDefined();
        expect(result.hash).toBeDefined();
        expect(result.hash).toBeInstanceOf(Uint8Array);
        expect(result.hash.length).toBeGreaterThan(0);
      } catch (error: any) {
        // If the RPC endpoint is not available, log the error and still fail the test
        if (error.message?.includes('ECONNREFUSED') || error.message?.includes('fetch')) {
          console.log('Skipping test - RPC endpoint not available');
          throw error;
        }
        throw error;
      }
    });

    it('should broadcast transaction synchronously', async () => {
      const tx = createTestTx();
      const params: BroadcastTxParams = { tx };

      try {
        const result = await client.broadcastTxSync(params);

        expect(result).toBeDefined();
        expect(result.hash).toBeDefined();
        expect(result.hash).toBeInstanceOf(Uint8Array);
        expect(result.code).toBeDefined();
        expect(typeof result.code).toBe('number');
        expect(result.codespace).toBeDefined();
        expect(typeof result.codespace).toBe('string');

        // The transaction will fail, but we should get proper error info
        if (result.code !== 0) {
          expect(result.log).toBeDefined();
          expect(typeof result.log).toBe('string');
        }
      } catch (error: any) {
        if (error.message?.includes('ECONNREFUSED') || error.message?.includes('fetch')) {
          console.log('Skipping test - RPC endpoint not available');
          throw error;
        }
        throw error;
      }
    });

    it('should broadcast transaction and wait for commit', async () => {
      const tx = createTestTx();
      const params: BroadcastTxParams = { tx };

      try {
        const result = await client.broadcastTxCommit(params);

        expect(result).toBeDefined();
        expect(result.height).toBeDefined();
        expect(typeof result.height).toBe('bigint');
        expect(result.hash).toBeDefined();
        expect(result.hash).toBeInstanceOf(Uint8Array);

        // Check checkTx result
        expect(result.checkTx).toBeDefined();
        expect(result.checkTx.code).toBeDefined();
        expect(typeof result.checkTx.code).toBe('number');

        // Check deliverTx or txResult (depending on version)
        if (result.txResult) {
          expect(result.txResult.code).toBeDefined();
          expect(typeof result.txResult.code).toBe('number');
        } else if (result.deliverTx) {
          expect(result.deliverTx.code).toBeDefined();
          expect(typeof result.deliverTx.code).toBe('number');
        }
      } catch (error: any) {
        if (error.message?.includes('ECONNREFUSED') || error.message?.includes('fetch')) {
          console.log('Skipping test - RPC endpoint not available');
          throw error;
        }
        throw error;
      }
    });

    it('should properly encode transaction data', async () => {
      const tx = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      const params: BroadcastTxParams = { tx };

      try {
        const result = await client.broadcastTxAsync(params);

        // Even with invalid tx, we should get a hash back
        expect(result.hash).toBeDefined();
        expect(result.hash).toBeInstanceOf(Uint8Array);
      } catch (error: any) {
        if (error.message?.includes('ECONNREFUSED') || error.message?.includes('fetch')) {
          console.log('Skipping test - RPC endpoint not available');
          throw error;
        }
        throw error;
      }
    });
  });
});