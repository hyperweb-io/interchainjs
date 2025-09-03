import { PublicKey } from '../../src/types';

describe('PublicKey', () => {
  test('should create PublicKey from base58 string', () => {
    const base58 = '11111111111111111111111111111112';
    const publicKey = new PublicKey(base58);
    expect(publicKey.toString()).toBe(base58);
  });

  test('should create PublicKey from Uint8Array', () => {
    const bytes = new Uint8Array(32);
    bytes.fill(1);
    const publicKey = new PublicKey(bytes);
    expect(publicKey.toBuffer().length).toBe(32);
  });

  test('should compare PublicKeys for equality', () => {
    const base58 = '11111111111111111111111111111112';
    const publicKey1 = new PublicKey(base58);
    const publicKey2 = new PublicKey(base58);

    expect(publicKey1.equals(publicKey2)).toBe(true);
  });

  test('should generate unique PublicKeys', () => {
    const publicKey1 = PublicKey.unique();
    const publicKey2 = PublicKey.unique();

    expect(publicKey1.equals(publicKey2)).toBe(false);
  });

  test('should convert to base58 string', () => {
    const publicKey = PublicKey.unique();
    const base58 = publicKey.toBase58();

    expect(typeof base58).toBe('string');
    expect(base58.length).toBeGreaterThan(0);
  });

  test('should convert to buffer', () => {
    const publicKey = PublicKey.unique();
    const buffer = publicKey.toBuffer();

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(32);
  });

  test('should throw error for invalid input', () => {
    expect(() => new PublicKey({} as any)).toThrow('Invalid public key input');
  });
});