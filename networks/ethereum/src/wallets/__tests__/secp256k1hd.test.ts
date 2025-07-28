import { Secp256k1HDWallet } from '../secp256k1hd';
import { HDPath } from '@interchainjs/types';

describe('Secp256k1HDWallet', () => {
  const testMnemonic = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about';

  describe('fromMnemonic', () => {
    it('should create wallet from valid mnemonic with default config', async () => {
      const wallet = await Secp256k1HDWallet.fromMnemonic(testMnemonic);
      expect(wallet).toBeInstanceOf(Secp256k1HDWallet);

      const accounts = await wallet.getAccounts();
      expect(accounts).toHaveLength(1);
      expect(accounts[0].address).toMatch(/^0x[a-fA-F0-9]{40}$/);
      expect(accounts[0].algo).toBe('secp256k1');
    });

    it('should create wallet with multiple derivation paths', async () => {
      const wallet = await Secp256k1HDWallet.fromMnemonic(testMnemonic, {
        derivations: [
          { hdPath: HDPath.eth(0, 0, 0).toString(), prefix: '0x' },
          { hdPath: HDPath.eth(0, 0, 1).toString(), prefix: '0x' },
          { hdPath: HDPath.eth(0, 0, 2).toString(), prefix: '0x' }
        ]
      });

      const accounts = await wallet.getAccounts();
      expect(accounts).toHaveLength(3);

      // All accounts should have valid Ethereum addresses
      accounts.forEach(account => {
        expect(account.address).toMatch(/^0x[a-fA-F0-9]{40}$/);
        expect(account.algo).toBe('secp256k1');
      });

      // Addresses should be different
      const addresses = accounts.map(acc => acc.address);
      const uniqueAddresses = new Set(addresses);
      expect(uniqueAddresses.size).toBe(3);
    });

    it('should throw error for invalid mnemonic', async () => {
      const invalidMnemonic = 'invalid mnemonic phrase';
      await expect(Secp256k1HDWallet.fromMnemonic(invalidMnemonic))
        .rejects.toThrow('Invalid mnemonic');
    });

    it('should create wallet with custom passphrase', async () => {
      const passphrase = 'test-passphrase';
      const wallet1 = await Secp256k1HDWallet.fromMnemonic(testMnemonic);
      const wallet2 = await Secp256k1HDWallet.fromMnemonic(testMnemonic, {
        derivations: [{ hdPath: HDPath.eth(0, 0, 0).toString(), prefix: '0x' }],
        privateKeyConfig: { algo: 'secp256k1', passphrase }
      });

      const accounts1 = await wallet1.getAccounts();
      const accounts2 = await wallet2.getAccounts();

      // Different passphrases should generate different addresses
      expect(accounts1[0].address).not.toBe(accounts2[0].address);
    });
  });

  describe('getAccounts', () => {
    it('should return readonly array of accounts', async () => {
      const wallet = await Secp256k1HDWallet.fromMnemonic(testMnemonic);
      const accounts = await wallet.getAccounts();

      expect(Array.isArray(accounts)).toBe(true);
      expect(accounts[0]).toHaveProperty('address');
      expect(accounts[0]).toHaveProperty('pubkey');
      expect(accounts[0]).toHaveProperty('algo');
    });
  });

  describe('getAccountByIndex', () => {
    it('should return account at specified index', async () => {
      const wallet = await Secp256k1HDWallet.fromMnemonic(testMnemonic, {
        derivations: [
          { hdPath: HDPath.eth(0, 0, 0).toString(), prefix: '0x' },
          { hdPath: HDPath.eth(0, 0, 1).toString(), prefix: '0x' }
        ]
      });

      const account0 = await wallet.getAccountByIndex(0);
      const account1 = await wallet.getAccountByIndex(1);

      expect(account0.address).toMatch(/^0x[a-fA-F0-9]{40}$/);
      expect(account1.address).toMatch(/^0x[a-fA-F0-9]{40}$/);
      expect(account0.address).not.toBe(account1.address);
    });

    it('should throw error for invalid index', async () => {
      const wallet = await Secp256k1HDWallet.fromMnemonic(testMnemonic);

      await expect(wallet.getAccountByIndex(-1))
        .rejects.toThrow('Invalid key index: -1');
      await expect(wallet.getAccountByIndex(1))
        .rejects.toThrow('Invalid key index: 1');
    });
  });

  describe('signByIndex', () => {
    it('should sign data and return signature', async () => {
      const wallet = await Secp256k1HDWallet.fromMnemonic(testMnemonic);
      const testData = new TextEncoder().encode('Hello, Ethereum!');

      const signature = await wallet.signByIndex(testData);

      expect(signature.value).toBeInstanceOf(Uint8Array);
      expect(signature.value.length).toBeGreaterThan(0);
    });

    it('should sign with different keys for different indices', async () => {
      const wallet = await Secp256k1HDWallet.fromMnemonic(testMnemonic, {
        derivations: [
          { hdPath: HDPath.eth(0, 0, 0).toString(), prefix: '0x' },
          { hdPath: HDPath.eth(0, 0, 1).toString(), prefix: '0x' }
        ]
      });
      const testData = new TextEncoder().encode('Hello, Ethereum!');

      const signature0 = await wallet.signByIndex(testData, 0);
      const signature1 = await wallet.signByIndex(testData, 1);

      expect(signature0.value).not.toEqual(signature1.value);
    });
  });

  describe('getAddress', () => {
    it('should return address for specified index', async () => {
      const wallet = await Secp256k1HDWallet.fromMnemonic(testMnemonic);
      const address = await wallet.getAddress(0);

      expect(address).toMatch(/^0x[a-fA-F0-9]{40}$/);
    });

    it('should return address for default index 0', async () => {
      const wallet = await Secp256k1HDWallet.fromMnemonic(testMnemonic);
      const address = await wallet.getAddress();

      expect(address).toMatch(/^0x[a-fA-F0-9]{40}$/);
    });
  });

  describe('getAddresses', () => {
    it('should return all addresses', async () => {
      const wallet = await Secp256k1HDWallet.fromMnemonic(testMnemonic, {
        derivations: [
          { hdPath: HDPath.eth(0, 0, 0).toString(), prefix: '0x' },
          { hdPath: HDPath.eth(0, 0, 1).toString(), prefix: '0x' },
          { hdPath: HDPath.eth(0, 0, 2).toString(), prefix: '0x' }
        ]
      });

      const addresses = await wallet.getAddresses();

      expect(addresses).toHaveLength(3);
      addresses.forEach(address => {
        expect(address).toMatch(/^0x[a-fA-F0-9]{40}$/);
      });

      // All addresses should be unique
      const uniqueAddresses = new Set(addresses);
      expect(uniqueAddresses.size).toBe(3);
    });
  });

  describe('address format validation', () => {
    it('should generate valid Ethereum addresses', async () => {
      const wallet = await Secp256k1HDWallet.fromMnemonic(testMnemonic);
      const accounts = await wallet.getAccounts();

      accounts.forEach(account => {
        // Should start with 0x
        expect(account.address!.startsWith('0x')).toBe(true);
        // Should be 42 characters total (0x + 40 hex chars)
        expect(account.address!.length).toBe(42);
        // Should only contain valid hex characters
        expect(/^0x[a-fA-F0-9]{40}$/.test(account.address!)).toBe(true);
      });
    });
  });
});
