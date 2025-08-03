import { HDPath } from '@interchainjs/types';
import { BaseCryptoBytes } from '@interchainjs/utils';
import { PrivateKey } from './private-key';
import { PublicKey } from './public-key';
import { registerAddressStrategy } from '../strategies';
import { createCosmosConfig } from '../../../../networks/cosmos/src/auth/config';
import { createEthereumConfig } from '../../../../networks/ethereum/src/auth/config';
import { COSMOS_ADDRESS_STRATEGY } from '../../../../networks/cosmos/src/auth/strategy';
import { ETHEREUM_ADDRESS_STRATEGY } from '../../../../networks/ethereum/src/auth/strategy';

describe('PublicKey', () => {
  const testMnemonic = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about';

  // Register address strategies for testing
  beforeAll(() => {
    registerAddressStrategy(COSMOS_ADDRESS_STRATEGY);
    registerAddressStrategy(ETHEREUM_ADDRESS_STRATEGY);
  });

  describe('fromPrivateKey', () => {
    it('should create public key from private key', async () => {
      const hdPath = HDPath.cosmos(0, 0, 0);
      const config = createCosmosConfig().privateKeyConfig;
      const privateKeys = await PrivateKey.fromMnemonic(testMnemonic, [hdPath], config);

      const publicKey = PublicKey.fromPrivateKey(privateKeys[0]);

      expect(publicKey).toBeDefined();
      expect(publicKey.algo).toBe('secp256k1');
      expect(publicKey.compressed).toBe(true);
    });

    it('should create public key with custom compression', async () => {
      const hdPath = HDPath.eth(0, 0, 0);
      const config = createEthereumConfig().privateKeyConfig;
      const privateKeys = await PrivateKey.fromMnemonic(testMnemonic, [hdPath], config);

      const publicKey = PublicKey.fromPrivateKey(privateKeys[0], { compressed: false });

      expect(publicKey.compressed).toBe(false);
    });
  });

  describe('fromHex', () => {
    it('should create public key from hex string', () => {
      // 33-byte compressed secp256k1 public key
      const hexKey = '02' + '0'.repeat(64);
      const publicKey = PublicKey.fromHex(hexKey, 'secp256k1', true);

      expect(publicKey.toHex()).toBe(hexKey);
      expect(publicKey.algo).toBe('secp256k1');
      expect(publicKey.compressed).toBe(true);
    });
  });

  describe('fromBytes', () => {
    it('should create public key from bytes', () => {
      const bytes = new Uint8Array(33).fill(2);
      bytes[0] = 0x02; // compressed public key prefix
      const cryptoBytes = BaseCryptoBytes.from(bytes);

      const publicKey = PublicKey.fromBytes(cryptoBytes, 'secp256k1', true);

      expect(publicKey.value.value).toEqual(bytes);
      expect(publicKey.algo).toBe('secp256k1');
      expect(publicKey.compressed).toBe(true);
    });
  });

  describe('toAddress', () => {
    it('should derive Cosmos address', async () => {
      const hdPath = HDPath.cosmos(0, 0, 0);
      const walletConfig = createCosmosConfig();
      const privateKeys = await PrivateKey.fromMnemonic(testMnemonic, [hdPath], walletConfig.privateKeyConfig);
      const publicKey = privateKeys[0].toPublicKey();

      const address = publicKey.toAddress!(walletConfig.addressConfig, 'cosmos');

      expect(address).toBeDefined();
      expect(address.value).toMatch(/^cosmos1[a-z0-9]{38}$/);
      expect(address.prefix).toBe('cosmos');
    });

    it('should derive Ethereum address', async () => {
      const hdPath = HDPath.eth(0, 0, 0);
      const walletConfig = createEthereumConfig();
      const privateKeys = await PrivateKey.fromMnemonic(testMnemonic, [hdPath], walletConfig.privateKeyConfig);
      const publicKey = privateKeys[0].toPublicKey({ compressed: false });

      const address = publicKey.toAddress!(walletConfig.addressConfig, '0x');

      expect(address).toBeDefined();
      expect(address.value).toMatch(/^0x[a-fA-F0-9]{40}$/);
      expect(address.prefix).toBe('0x');
    });
  });

  describe('verify', () => {
    it('should verify signature', async () => {
      const hdPath = HDPath.cosmos(0, 0, 0);
      const config = createCosmosConfig().privateKeyConfig;
      const privateKeys = await PrivateKey.fromMnemonic(testMnemonic, [hdPath], config);
      const publicKey = privateKeys[0].toPublicKey();

      const message = new TextEncoder().encode('Hello, InterchainJS!');
      const signature = await privateKeys[0].sign(message);

      // If signature has recovery byte (65 bytes), remove it for verification
      let sigBytes = signature.value;
      if (sigBytes.length === 65) {
        sigBytes = sigBytes.slice(0, 64);
      }

      const isValid = await publicKey.verify(message, BaseCryptoBytes.from(sigBytes));

      expect(isValid).toBe(true);
    });

    it('should reject invalid signature', async () => {
      const hdPath = HDPath.cosmos(0, 0, 0);
      const config = createCosmosConfig().privateKeyConfig;
      const privateKeys = await PrivateKey.fromMnemonic(testMnemonic, [hdPath], config);
      const publicKey = privateKeys[0].toPublicKey();

      const message = new TextEncoder().encode('Hello, InterchainJS!');
      // Create a valid-looking but incorrect signature
      const invalidSignature = BaseCryptoBytes.from(new Uint8Array(64).fill(1));

      const isValid = await publicKey.verify(message, invalidSignature);

      // The real implementation should return false for invalid signatures
      expect(isValid).toBe(false);
    });
  });

  describe('serialization', () => {
    it('should convert to hex', async () => {
      const hdPath = HDPath.cosmos(0, 0, 0);
      const config = createCosmosConfig().privateKeyConfig;
      const privateKeys = await PrivateKey.fromMnemonic(testMnemonic, [hdPath], config);
      const publicKey = privateKeys[0].toPublicKey();

      const hex = publicKey.toHex();

      expect(hex).toMatch(/^[0-9a-f]+$/);
    });

    it('should convert to base64', async () => {
      const hdPath = HDPath.cosmos(0, 0, 0);
      const config = createCosmosConfig().privateKeyConfig;
      const privateKeys = await PrivateKey.fromMnemonic(testMnemonic, [hdPath], config);
      const publicKey = privateKeys[0].toPublicKey();

      const base64 = publicKey.toBase64();

      expect(base64).toMatch(/^[A-Za-z0-9+/]+=*$/);
    });
  });
});