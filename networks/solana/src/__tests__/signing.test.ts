/**
 * Tests for the refactored signing layer
 */

import {
  createSolanaAdapter,
  createDirectSigner,
  createOfflineSigner,
  SolanaWorkflowBuilder,
  createKeypairWallet
} from '../index';
import { Keypair } from '../signing/keypair';
import { SystemProgram } from '../adapters/system-program';
import { SolanaVersion } from '../types/protocol';

describe('Solana Signing Layer Tests', () => {
  let keypair: Keypair;
  let adapter: any;

  beforeEach(async () => {
    keypair = Keypair.generate();
    adapter = await createSolanaAdapter(SolanaVersion.V1);
  });

  describe('DirectSigner', () => {
    it('should create a DirectSigner and get account info', async () => {
      const signer = createDirectSigner(keypair);

      expect(signer.address).toBe(keypair.publicKey.toBase58());
      expect(signer.publicKey.toBase58()).toBe(keypair.publicKey.toBase58());

      const account = await signer.getAccount();
      expect(account.address).toBe(keypair.publicKey.toBase58());
      expect(account.publicKey.toBase58()).toBe(keypair.publicKey.toBase58());
    });

    it('should sign a message', async () => {
      const signer = createDirectSigner(keypair);
      const message = new Uint8Array([1, 2, 3, 4, 5]);

      const signature = await signer.sign(message);
      expect(signature).toBeInstanceOf(Uint8Array);
      expect(signature.length).toBeGreaterThan(0);
    });

    it('should sign and broadcast (offline mode)', async () => {
      const signer = createDirectSigner(keypair);

      // Create a simple transfer instruction
      const instruction = SystemProgram.transfer({
        fromPubkey: keypair.publicKey,
        toPubkey: Keypair.generate().publicKey,
        lamports: 1000000
      });

      const signArgs = {
        messages: [instruction as any],
        fee: 'auto' as const
      };

      const result = await signer.signAndBroadcast(signArgs as any);
      expect(result.transactionHash).toBe('offline-signed-transaction');
      expect(result.rawLog).toContain('Transaction signed offline');
    });
  });

  describe('OfflineSigner', () => {
    it('should create an OfflineSigner and sign offline', async () => {
      const signer = createOfflineSigner(keypair);

      expect(signer.address).toBe(keypair.publicKey.toBase58());
      expect(signer.publicKey.toBase58()).toBe(keypair.publicKey.toBase58());

      // Create a simple transfer instruction
      const instruction = SystemProgram.transfer({
        fromPubkey: keypair.publicKey,
        toPubkey: Keypair.generate().publicKey,
        lamports: 1000000
      });

      const signArgs = {
        messages: [instruction as any],
        fee: 5000
      };

      const result = await signer.signAndBroadcast(signArgs as any);
      expect(result.transactionHash).toBe('offline-signed-transaction');
      expect(result.serializedTransaction).toBeDefined();
      expect(typeof result.serializedTransaction).toBe('string');
    });

    it('should get signed transaction for manual broadcast', async () => {
      const signer = createOfflineSigner(keypair);

      const instruction = SystemProgram.transfer({
        fromPubkey: keypair.publicKey,
        toPubkey: Keypair.generate().publicKey,
        lamports: 1000000
      });

      const signArgs = {
        messages: [instruction as any],
        memo: 'Test transfer'
      };

      const serializedTx = await signer.getSignedTransactionForBroadcast(signArgs as any);
      expect(typeof serializedTx).toBe('string');
      expect(serializedTx.length).toBeGreaterThan(0);
    });

    it('should sign multiple transactions', async () => {
      const signer = createOfflineSigner(keypair);

      const instruction1 = SystemProgram.transfer({
        fromPubkey: keypair.publicKey,
        toPubkey: Keypair.generate().publicKey,
        lamports: 1000000
      });

      const instruction2 = SystemProgram.transfer({
        fromPubkey: keypair.publicKey,
        toPubkey: Keypair.generate().publicKey,
        lamports: 2000000
      });

      const transactions = [
        { messages: [instruction1 as any], fee: 5000 },
        { messages: [instruction2 as any], fee: 5000 }
      ];

      const results = await signer.signMultipleTransactions(transactions as any);
      expect(results).toHaveLength(2);
      expect(results[0].transactionHash).toBe('offline-signed-transaction');
      expect(results[1].transactionHash).toBe('offline-signed-transaction');
    });
  });

  describe('SolanaWorkflowBuilder', () => {
    it('should create a workflow builder and build transaction', async () => {
      const signer = createDirectSigner(keypair);

      const instruction = SystemProgram.transfer({
        fromPubkey: keypair.publicKey,
        toPubkey: Keypair.generate().publicKey,
        lamports: 1000000
      });

      const signArgs = {
        messages: [instruction as any],
        fee: 'auto' as const
      };

      const workflowBuilder = SolanaWorkflowBuilder.create(signer, signArgs as any);
      expect(workflowBuilder).toBeDefined();

      const plugins = workflowBuilder.getPlugins();
      expect(plugins.length).toBeGreaterThan(0);

      // Check that default plugins are loaded
      const pluginNames = plugins.map((p: any) => p.name);
      expect(pluginNames).toContain('input-validation');
      expect(pluginNames).toContain('message-encoding');
      expect(pluginNames).toContain('signature');
      expect(pluginNames).toContain('transaction-assembly');
    });

    it('should build a transaction through the workflow', async () => {
      const signer = createDirectSigner(keypair);

      const instruction = SystemProgram.transfer({
        fromPubkey: keypair.publicKey,
        toPubkey: Keypair.generate().publicKey,
        lamports: 1000000
      });

      const signArgs = {
        messages: [instruction as any],
        fee: 5000
      };

      const workflowBuilder = SolanaWorkflowBuilder.create(signer, signArgs as any);
      const transaction = await workflowBuilder.build();

      expect(transaction).toBeDefined();
      expect(transaction.signatures).toBeDefined();
      expect(transaction.message).toBeDefined();
      expect(transaction.message.instructions).toHaveLength(1);
    });
  });

  describe('KeypairWallet', () => {
    it('should create a keypair wallet and connect', async () => {
      const wallet = createKeypairWallet(keypair);

      expect(wallet.isConnected()).toBe(false);

      await wallet.connect();
      expect(wallet.isConnected()).toBe(true);

      const publicKey = await wallet.getPublicKey();
      expect(publicKey.toBase58()).toBe(keypair.publicKey.toBase58());

      await wallet.disconnect();
      expect(wallet.isConnected()).toBe(false);
    });

    it('should sign a transaction with keypair wallet', async () => {
      const wallet = createKeypairWallet(keypair);
      await wallet.connect();

      const mockTransaction = {
        message: {
          instructions: [] as any[],
          accountKeys: [] as any[],
          recentBlockhash: 'test-blockhash'
        }
      };

      const signedTx = await wallet.signTransaction(mockTransaction);
      expect(signedTx.signatures).toBeDefined();
      expect(signedTx.signatures).toHaveLength(1);
    });

    it('should sign a message with keypair wallet', async () => {
      const wallet = createKeypairWallet(keypair);
      await wallet.connect();

      const message = new Uint8Array([1, 2, 3, 4, 5]);
      const signature = await wallet.signMessage(message);

      expect(signature).toBeInstanceOf(Uint8Array);
      expect(signature.length).toBeGreaterThan(0);
    });
  });
});
