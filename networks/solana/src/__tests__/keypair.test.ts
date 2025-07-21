import { Keypair } from '../keypair';
import { PublicKey } from '../types';

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