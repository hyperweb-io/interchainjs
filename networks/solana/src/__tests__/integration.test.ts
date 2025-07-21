import { 
  Keypair, 
  SolanaSigningClient, 
  DirectSigner, 
  PublicKey, 
  DEVNET_ENDPOINT, 
  lamportsToSol, 
  solToLamports 
} from '../index';

describe('Solana Integration Tests', () => {
  let client: SolanaSigningClient;
  let keypair: Keypair;
  let signer: DirectSigner;

  beforeAll(async () => {
    // Check if private key is provided in environment
    const privateKeyEnv = process.env.PRIVATE_KEY;
    
    if (!privateKeyEnv) {
      throw new Error('PRIVATE_KEY is required in .env.local file. Please provide a private key for testing.');
    }
    
    try {
      let privateKeyBytes: Buffer;
      
      // Try to parse as Base58 first (common Solana format)
      try {
        const bs58 = require('bs58');
        privateKeyBytes = Buffer.from(bs58.decode(privateKeyEnv));
      } catch {
        // Fall back to hex parsing
        privateKeyBytes = Buffer.from(privateKeyEnv, 'hex');
      }
      
      if (privateKeyBytes.length === 32) {
        keypair = Keypair.fromSeed(privateKeyBytes);
      } else if (privateKeyBytes.length === 64) {
        keypair = Keypair.fromSecretKey(privateKeyBytes);
      } else {
        throw new Error(`Invalid private key length: ${privateKeyBytes.length} bytes. Expected 32 bytes (seed) or 64 bytes (secret key).`);
      }
    } catch (error) {
      throw new Error(`Failed to parse private key from environment: ${(error as Error).message}. Please check your PRIVATE_KEY in .env.local file. Private key can be in Base58 or hex format.`);
    }
    
    signer = new DirectSigner(keypair);
    client = await SolanaSigningClient.connectWithSigner(
      DEVNET_ENDPOINT,
      signer,
      {
        commitment: 'confirmed',
        broadcast: { checkTx: true, timeout: 60000 }
      }
    );
    
    console.log(`Testing with address: ${keypair.publicKey.toString()}`);
    console.log(`Network: Solana Devnet (${DEVNET_ENDPOINT})`);
  });

  test('should connect to devnet', async () => {
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
    console.log(`Network: Solana Devnet (${DEVNET_ENDPOINT})`);
    
    if (balance < requiredBalance) {
      throw new Error(`Insufficient balance for transfer test. Current: ${lamportsToSol(balance)} SOL, Required: ${lamportsToSol(requiredBalance)} SOL. Please add funds to address ${keypair.publicKey.toString()} on Solana Devnet.`);
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

  test('should handle multiple transfers', async () => {
    const balance = await client.getBalance();
    const requiredBalance = solToLamports(0.01);
    
    console.log(`Current balance: ${lamportsToSol(balance)} SOL`);
    console.log(`Required balance: ${lamportsToSol(requiredBalance)} SOL`);
    console.log(`Address: ${keypair.publicKey.toString()}`);
    console.log(`Network: Solana Devnet (${DEVNET_ENDPOINT})`);
    
    const totalRequiredBalance = solToLamports(0.005); // Need more for 2 x 0.001 SOL transfers + fees
    
    if (balance < totalRequiredBalance) {
      throw new Error(`Insufficient balance for multiple transfer test. Current: ${lamportsToSol(balance)} SOL, Required: ${lamportsToSol(totalRequiredBalance)} SOL. Please add funds to address ${keypair.publicKey.toString()} on Solana Devnet.`);
    }

    const recipients = [
      Keypair.generate().publicKey,
      Keypair.generate().publicKey,
    ];
    
    const transferAmount = solToLamports(0.001); // 0.001 SOL each (minimum for rent exemption)
    
    const signatures = [];
    
    for (const recipient of recipients) {
      try {
        const signature = await client.transfer({
          recipient,
          amount: transferAmount,
        });
        signatures.push(signature);
        
        // Small delay between transfers
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error('Transfer failed:', error);
        throw error;
      }
    }
    
    expect(signatures.length).toBe(2);
    signatures.forEach(sig => {
      expect(typeof sig).toBe('string');
      expect(sig.length).toBeGreaterThan(0);
    });
    
    console.log(`Multiple transfers successful! Signatures: ${signatures.join(', ')}`);
  });

  test('should handle transfer to invalid recipient gracefully', async () => {
    const balance = await client.getBalance();
    const requiredBalance = solToLamports(0.001);
    
    console.log(`Current balance: ${lamportsToSol(balance)} SOL`);
    console.log(`Required balance: ${lamportsToSol(requiredBalance)} SOL`);
    console.log(`Address: ${keypair.publicKey.toString()}`);
    console.log(`Network: Solana Devnet (${DEVNET_ENDPOINT})`);
    
    if (balance < requiredBalance) {
      throw new Error(`Insufficient balance for invalid transfer test. Current: ${lamportsToSol(balance)} SOL, Required: ${lamportsToSol(requiredBalance)} SOL. Please add funds to address ${keypair.publicKey.toString()} on Solana Devnet.`);
    }

    // Create an invalid recipient (all zeros)
    const invalidRecipient = new PublicKey(new Uint8Array(32));
    
    try {
      await client.transfer({
        recipient: invalidRecipient,
        amount: solToLamports(0.001), // Use minimum rent-exempt amount
      });
      
      // If we get here, the transfer somehow succeeded, which is unexpected
      console.warn('Transfer to invalid recipient succeeded unexpectedly');
    } catch (error) {
      // Expected to fail
      expect(error).toBeDefined();
      console.log('Transfer to invalid recipient failed as expected:', (error as Error).message);
    }
  });
});

// Set timeout for integration tests
jest.setTimeout(120000);