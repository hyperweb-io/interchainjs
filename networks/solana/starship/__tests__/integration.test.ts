import {
  Keypair,
  SolanaSigningClient,
  DirectSigner,
  PublicKey,
  lamportsToSol,
  solToLamports
} from '../../src/index';
import { loadLocalSolanaConfig } from './test-utils';

describe('Solana Integration Tests', () => {
  let client: SolanaSigningClient;
  let keypair: Keypair;
  let signer: DirectSigner;

  beforeAll(async () => {
    const { rpcEndpoint } = loadLocalSolanaConfig();

    keypair = Keypair.generate();
    signer = new DirectSigner(keypair);
    client = await SolanaSigningClient.connectWithSigner(
      rpcEndpoint,
      signer,
      {
        commitment: 'confirmed',
        broadcast: { checkTx: true, timeout: 60000 }
      }
    );

    // Fund the fresh keypair on localnet
    const min = solToLamports(0.05);
    const bal = await client.getBalance();
    if (bal < min) {
      try {
        const sig = await client.requestAirdrop(solToLamports(2));
        console.log('Requested airdrop:', sig);
        await new Promise((r) => setTimeout(r, 4000));
      } catch (e) {
        console.warn('Airdrop request failed; tests may skip for low balance:', e);
      }
    }

    console.log(`Testing with address: ${keypair.publicKey.toString()}`);
    console.log(`Network: Local Solana (${rpcEndpoint})`);
  });

  test('should connect to local node', async () => {
    expect(client).toBeDefined();
    expect(client.signerAddress).toBeInstanceOf(PublicKey);
  });

  test('should get balance', async () => {
    const balance = await client.getBalance();
    expect(typeof balance).toBe('number');
    expect(balance).toBeGreaterThanOrEqual(0);

    console.log(`Account balance: ${lamportsToSol(balance)} SOL`);
  });

  test('should request airdrop if balance is low', async () => {
    const initialBalance = await client.getBalance();

    if (initialBalance < solToLamports(0.1)) {
      console.log('Balance is low, requesting airdrop...');

      try {
        const signature = await client.requestAirdrop(solToLamports(0.5));
        expect(signature).toBeTruthy();
        expect(typeof signature).toBe('string');

        // Wait a bit for the airdrop to process
        await new Promise(resolve => setTimeout(resolve, 5000));

        const newBalance = await client.getBalance();
        expect(newBalance).toBeGreaterThan(initialBalance);

        console.log(`Airdrop successful! New balance: ${lamportsToSol(newBalance)} SOL`);
      } catch (error) {
        console.warn('Airdrop failed:', error);
        // Don't fail the test if airdrop fails (rate limiting, etc.)
      }
    }
  });

  test('should get account info', async () => {
    const accountInfo = await client.getAccountInfo(client.signerAddress);

    if (accountInfo) {
      expect(accountInfo).toHaveProperty('lamports');
      expect(accountInfo).toHaveProperty('owner');
      expect(accountInfo).toHaveProperty('executable');
      expect(typeof accountInfo.lamports).toBe('number');
    }
  });

  test('should transfer SOL', async () => {
    const balance = await client.getBalance();
    const requiredBalance = solToLamports(0.01);

    console.log(`Current balance: ${lamportsToSol(balance)} SOL`);
    console.log(`Required balance: ${lamportsToSol(requiredBalance)} SOL`);
    console.log(`Address: ${keypair.publicKey.toString()}`);

    if (balance < requiredBalance) {
      throw new Error(`Insufficient balance for transfer test. Current: ${lamportsToSol(balance)} SOL, Required: ${lamportsToSol(requiredBalance)} SOL. Please fund local faucet for ${keypair.publicKey.toString()}.`);
    }

    const recipient = Keypair.generate().publicKey;
    const transferAmount = solToLamports(0.001); // 0.001 SOL

    const initialRecipientBalance = await client.getBalance(recipient);

    try {
      const signature = await client.transfer({
        recipient,
        amount: transferAmount,
      });

      expect(signature).toBeTruthy();
      expect(typeof signature).toBe('string');

      // Wait for transaction to be processed
      await new Promise(resolve => setTimeout(resolve, 5000));

      const finalRecipientBalance = await client.getBalance(recipient);
      expect(finalRecipientBalance).toBe(initialRecipientBalance + transferAmount);

      console.log(`Transfer successful! Signature: ${signature}`);
      console.log(`Recipient balance: ${lamportsToSol(finalRecipientBalance)} SOL`);
    } catch (error) {
      console.error('Transfer failed:', error);
      throw error;
    }
  });
});

// Set timeout for integration tests
jest.setTimeout(120000);
