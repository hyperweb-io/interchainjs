import { HDPath } from '@interchainjs/types';
import { BaseCryptoBytes } from '@interchainjs/utils';
import { PrivateKey } from './private-key';
import { createCosmosConfig } from '../../../../networks/cosmos/src/auth/config';
import { createEthereumConfig } from '../../../../networks/ethereum/src/auth/config';

describe('PrivateKey', () => {
  const testMnemonic = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about';

  describe('fromMnemonic', () => {
    it('should create private keys from mnemonic for Cosmos', async () => {
      const hdPaths = [
        HDPath.cosmos(0, 0, 0),
        HDPath.cosmos(0, 0, 1),
      ];

      const config = createCosmosConfig().privateKeyConfig;
      const privateKeys = await PrivateKey.fromMnemonic(testMnemonic, hdPaths, config);

      expect(privateKeys).toHaveLength(2);
      expect(privateKeys[0].hdPath?.toString()).toBe('m/44\'/118\'/0\'/0/0');
      expect(privateKeys[1].hdPath?.toString()).toBe('m/44\'/118\'/0\'/0/1');
    });

    it('should create private keys from mnemonic for Ethereum', async () => {
      const hdPath = HDPath.eth(0, 0, 0);
      const config = createEthereumConfig().privateKeyConfig;
      const privateKeys = await PrivateKey.fromMnemonic(testMnemonic, [hdPath], config);

      expect(privateKeys).toHaveLength(1);
      expect(privateKeys[0].hdPath?.toString()).toBe('m/44\'/60\'/0\'/0/0');
    });
  });

  describe('fromHex', () => {
    it('should create private key from hex string', () => {
      const hexKey = '0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef';
      const config = createCosmosConfig().privateKeyConfig;

      const privateKey = PrivateKey.fromHex(hexKey, config);

      expect(privateKey.toHex()).toBe(hexKey);
      expect(privateKey.config.algo).toBe('secp256k1');
    });
  });

  describe('fromBytes', () => {
    it('should create private key from bytes', () => {
      const bytes = new Uint8Array(32).fill(42);
      const cryptoBytes = BaseCryptoBytes.from(bytes);
      const config = createCosmosConfig().privateKeyConfig;

      const privateKey = PrivateKey.fromBytes(cryptoBytes, config);

      expect(privateKey.value.value).toEqual(bytes);
      expect(privateKey.config.algo).toBe('secp256k1');
    });
  });

  describe('toPublicKey', () => {
    it('should derive public key with default compression', async () => {
      const hdPath = HDPath.cosmos(0, 0, 0);
      const config = createCosmosConfig().privateKeyConfig;
      const privateKeys = await PrivateKey.fromMnemonic(testMnemonic, [hdPath], config);

      const publicKey = privateKeys[0].toPublicKey();

      expect(publicKey.compressed).toBe(true);
      expect(publicKey.algo).toBe('secp256k1');
    });

    it('should derive public key with custom compression', async () => {
      const hdPath = HDPath.eth(0, 0, 0);
      const config = createEthereumConfig().privateKeyConfig;
      const privateKeys = await PrivateKey.fromMnemonic(testMnemonic, [hdPath], config);

      const publicKey = privateKeys[0].toPublicKey({ compressed: false });

      expect(publicKey.compressed).toBe(false);
      expect(publicKey.algo).toBe('secp256k1');
    });
  });

  describe('sign', () => {
    it('should sign data', async () => {
      const hdPath = HDPath.cosmos(0, 0, 0);
      const config = createCosmosConfig().privateKeyConfig;
      const privateKeys = await PrivateKey.fromMnemonic(testMnemonic, [hdPath], config);

      const message = new TextEncoder().encode('Hello, InterchainJS!');
      const signature = await privateKeys[0].sign(message);

      expect(signature).toBeDefined();
      expect(signature.value).toBeInstanceOf(Uint8Array);
      expect(signature.value.length).toBeGreaterThan(0);
    });
  });

  describe('serialization', () => {
    it('should convert to hex', async () => {
      const hdPath = HDPath.cosmos(0, 0, 0);
      const config = createCosmosConfig().privateKeyConfig;
      const privateKeys = await PrivateKey.fromMnemonic(testMnemonic, [hdPath], config);

      const hex = privateKeys[0].toHex();

      expect(hex).toMatch(/^[0-9a-f]{64}$/);
    });

    it('should convert to base64', async () => {
      const hdPath = HDPath.cosmos(0, 0, 0);
      const config = createCosmosConfig().privateKeyConfig;
      const privateKeys = await PrivateKey.fromMnemonic(testMnemonic, [hdPath], config);

      const base64 = privateKeys[0].toBase64();

      expect(base64).toMatch(/^[A-Za-z0-9+/]+=*$/);
    });
  });
});