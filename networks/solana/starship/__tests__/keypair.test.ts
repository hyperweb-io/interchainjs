import { Keypair } from '../../src/keypair';
import { PublicKey } from '../../src/types';
import { SolanaSigner } from '../../src/signers';
import { SolanaSignerConfig } from '../../src/signers/types';

// Mock RPC endpoint for testing
const mockConfig: SolanaSignerConfig = {
  rpcEndpoint: 'http://localhost:8899',
  commitment: 'processed',
  skipPreflight: true
};

// Mock fetch for RPC calls
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      result: {
        value: {
          blockhash: '11111111111111111111111111111112',
          feeCalculator: { lamportsPerSignature: 5000 }
        }
      }
    })
  })
) as jest.Mock;

describe('Keypair', () => {
  test('should generate a new keypair', () => {
    const keypair = Keypair.generate();
    expect(keypair.publicKey).toBeInstanceOf(PublicKey);
    expect(keypair.secretKey).toBeInstanceOf(Uint8Array);
    expect(keypair.secretKey.length).toBe(64);
  });

  test('should create keypair from secret key', () => {
    const originalKeypair = Keypair.generate();
    const secretKey = originalKeypair.secretKey;

    const restoredKeypair = Keypair.fromSecretKey(secretKey);
    expect(restoredKeypair.publicKey.toString()).toBe(originalKeypair.publicKey.toString());
  });

  test('should create keypair from seed', () => {
    const seed = new Uint8Array(32);
    seed.fill(1);

    const keypair1 = Keypair.fromSeed(seed);
    const keypair2 = Keypair.fromSeed(seed);

    expect(keypair1.publicKey.toString()).toBe(keypair2.publicKey.toString());
  });

  test('should sign and verify messages', () => {
    const keypair = Keypair.generate();
    const message = new Uint8Array([1, 2, 3, 4, 5]);

    const signature = keypair.sign(message);
    const isValid = keypair.verify(message, signature);

    expect(isValid).toBe(true);
  });

  test('should fail verification with wrong message', () => {
    const keypair = Keypair.generate();
    const message = new Uint8Array([1, 2, 3, 4, 5]);
    const wrongMessage = new Uint8Array([1, 2, 3, 4, 6]);

    const signature = keypair.sign(message);
    const isValid = keypair.verify(wrongMessage, signature);

    expect(isValid).toBe(false);
  });

  test('should throw error for invalid secret key length', () => {
    const invalidSecretKey = new Uint8Array(32);
    expect(() => Keypair.fromSecretKey(invalidSecretKey)).toThrow('Secret key must be 64 bytes');
  });

  test('should throw error for invalid seed length', () => {
    const invalidSeed = new Uint8Array(16);
    expect(() => Keypair.fromSeed(invalidSeed)).toThrow('Seed must be 32 bytes');
  });
});

describe('SolanaSigner with IUniSigner interface', () => {
  let keypair: Keypair;
  let signer: SolanaSigner;

  beforeEach(() => {
    keypair = Keypair.generate();
    signer = new SolanaSigner(keypair, mockConfig);
  });

  test('should implement IUniSigner interface', async () => {
    // Test getAccounts
    const accounts = await signer.getAccounts();
    expect(accounts).toHaveLength(1);
    expect(accounts[0].address).toBe(keypair.publicKey.toString());
    expect(accounts[0].publicKey).toEqual(keypair.publicKey);

    // Test getPublicKey
    const publicKey = await signer.getPublicKey();
    expect(publicKey).toEqual(keypair.publicKey);

    // Test getAddresses
    const addresses = await signer.getAddresses();
    expect(addresses).toHaveLength(1);
    expect(addresses[0]).toBe(keypair.publicKey.toString());

    // Test signArbitrary
    const message = new Uint8Array([1, 2, 3, 4, 5]);
    const signature = await signer.signArbitrary(message);
    expect(signature.value).toBeInstanceOf(Uint8Array);
    expect(signature.value.length).toBe(64);
  });

  test('should sign transactions using workflow', async () => {
    // Create a simple instruction
    const instruction = {
      keys: [{
        pubkey: keypair.publicKey,
        isSigner: true,
        isWritable: true
      }],
      programId: new PublicKey('11111111111111111111111111111112'), // System program
      data: new Uint8Array([0, 0, 0, 0]) // Simple data
    };

    const signArgs = {
      instructions: [instruction],
      feePayer: keypair.publicKey,
      recentBlockhash: '11111111111111111111111111111112'
    };

    // Test sign method
    const signedTx = await signer.sign(signArgs);
    expect(signedTx.signature).toBeDefined();
    expect(signedTx.txBytes).toBeInstanceOf(Uint8Array);
    expect(typeof signedTx.broadcast).toBe('function');
  });
});