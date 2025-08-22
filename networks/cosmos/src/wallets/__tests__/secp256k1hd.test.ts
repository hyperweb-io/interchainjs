import { Secp256k1HDWallet } from '../secp256k1hd';
import { HDPath } from '@interchainjs/types';
import { SignDoc } from '@interchainjs/cosmos-types';
import { StdSignDoc } from '@interchainjs/types';

// Test mnemonic for consistent testing
const TEST_MNEMONIC = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon art';

// Expected addresses for validation (deterministic from test mnemonic)
const EXPECTED_ADDRESSES = {
  cosmos: {
    path0: 'cosmos1r5v5srda7xfth3hn2s26txvrcrntldjumt8mhl',
    path1: 'cosmos1vtad8680vhdfqvxx0f2yaxa6agdylelmcwusgk',
    path2: 'cosmos1pdsv0s32065drerxxdyltpk5tq0h8d2vxeaa7w'
  },
  osmosis: {
    path0: 'osmo1r5v5srda7xfth3hn2s26txvrcrntldjuns5tpd',
    path1: 'osmo1vtad8680vhdfqvxx0f2yaxa6agdylelm3w4q0j',
    path2: 'osmo1pdsv0s32065drerxxdyltpk5tq0h8d2v5w8k2c'
  }
};

describe('Secp256k1HDWallet', () => {
  let wallet: Secp256k1HDWallet;

  describe('fromMnemonic', () => {
    it('should create wallet from valid mnemonic with single HD path', async () => {
      const hdPath = HDPath.cosmos(0, 0, 0);
      wallet = await Secp256k1HDWallet.fromMnemonic(TEST_MNEMONIC, { derivations: [{ hdPath: hdPath.toString(), prefix: 'cosmos' }] });

      expect(wallet).toBeInstanceOf(Secp256k1HDWallet);
      const accounts = await wallet.getAccounts();
      expect(accounts).toHaveLength(1);
      expect(accounts[0].address).toBe(EXPECTED_ADDRESSES.cosmos.path0);
      expect(accounts[0].algo).toBe('secp256k1');
      expect(accounts[0].pubkey).toBeInstanceOf(Uint8Array);
    });

    it('should create wallet with multiple HD paths', async () => {
      const hdPaths = [
        HDPath.cosmos(0, 0, 0),
        HDPath.cosmos(0, 0, 1),
        HDPath.cosmos(0, 0, 2)
      ];

      wallet = await Secp256k1HDWallet.fromMnemonic(TEST_MNEMONIC, { derivations: hdPaths.map(path => ({ hdPath: path.toString(), prefix: 'cosmos' })) });

      const accounts = await wallet.getAccounts();
      expect(accounts).toHaveLength(3);
      expect(accounts[0].address).toBe(EXPECTED_ADDRESSES.cosmos.path0);
      expect(accounts[1].address).toBe(EXPECTED_ADDRESSES.cosmos.path1);
    });

    it('should reject invalid mnemonic', async () => {
      const invalidMnemonic = 'invalid mnemonic phrase here';
      const hdPath = HDPath.cosmos(0, 0, 0);

      await expect(
        Secp256k1HDWallet.fromMnemonic(invalidMnemonic, { derivations: [{ hdPath: hdPath.toString(), prefix: 'cosmos' }] })
      ).rejects.toThrow('Invalid mnemonic');
    });

    it('should use custom address prefix', async () => {
      const hdPath = HDPath.cosmos(0, 0, 0);
      wallet = await Secp256k1HDWallet.fromMnemonic(TEST_MNEMONIC, { derivations: [{ hdPath: hdPath.toString(), prefix: 'osmo' }] });

      const accounts = await wallet.getAccounts();
      expect(accounts[0].address).toBe(EXPECTED_ADDRESSES.osmosis.path0);
      expect(accounts[0].address).toMatch(/^osmo/);
    });

    it('should use custom HD paths for different coin types', async () => {
      const cosmosPath = HDPath.cosmos(0, 0, 0);
      const ethPath = HDPath.eth(0, 0, 0);

      wallet = await Secp256k1HDWallet.fromMnemonic(TEST_MNEMONIC, { derivations: [{ hdPath: cosmosPath.toString(), prefix: 'cosmos' }] });

      const ethWallet = await Secp256k1HDWallet.fromMnemonic(TEST_MNEMONIC, { derivations: [{ hdPath: ethPath.toString(), prefix: 'cosmos' }] });

      const cosmosAccounts = await wallet.getAccounts();
      const ethAccounts = await ethWallet.getAccounts();

      expect(cosmosAccounts[0].address).not.toBe(ethAccounts[0].address);
    });
  });

  describe('getAccounts', () => {
    beforeEach(async () => {
      const hdPath = HDPath.cosmos(0, 0, 0);
      wallet = await Secp256k1HDWallet.fromMnemonic(TEST_MNEMONIC, { derivations: [{ hdPath: hdPath.toString(), prefix: 'cosmos' }] });
    });

    it('should return accounts in correct format', async () => {
      const accounts = await wallet.getAccounts();
      expect(Array.isArray(accounts)).toBe(true);

      const account = accounts[0];
      expect(account).toHaveProperty('address');
      expect(account).toHaveProperty('algo');
      expect(account).toHaveProperty('pubkey');
      expect(typeof account.address).toBe('string');
      expect(account.algo).toBe('secp256k1');
      expect(account.pubkey).toBeInstanceOf(Uint8Array);
    });

    it('should return empty array for wallet with no accounts', async () => {
      const emptyWallet = new Secp256k1HDWallet([], { derivations: [] });
      const accounts = await emptyWallet.getAccounts();
      expect(accounts).toEqual([]);
    });
  });

  describe('signDirect', () => {
    beforeEach(async () => {
      const hdPath = HDPath.cosmos(0, 0, 0);
      wallet = await Secp256k1HDWallet.fromMnemonic(TEST_MNEMONIC, { derivations: [{ hdPath: hdPath.toString(), prefix: 'cosmos' }] });
    });

    it('should sign transaction with valid address', async () => {
      const accounts = await wallet.getAccounts();
      const signerAddress = accounts[0].address;

      const signDoc: SignDoc = {
        bodyBytes: new Uint8Array([1, 2, 3, 4]),
        authInfoBytes: new Uint8Array([5, 6, 7, 8]),
        chainId: 'cosmoshub-4',
        accountNumber: BigInt(123)
      };

      const result = await wallet.signDirect(signerAddress, signDoc);

      expect(result).toHaveProperty('signed');
      expect(result).toHaveProperty('signature');
      expect(result.signed).toEqual(signDoc);
      expect(result.signature).toHaveProperty('pub_key');
      expect(result.signature).toHaveProperty('signature');
      expect(result.signature.pub_key).toHaveProperty('type', 'tendermint/PubKeySecp256k1');
      expect(result.signature.pub_key).toHaveProperty('value');
      expect(typeof result.signature.signature).toBe('string');
    });

    it('should throw error for invalid address', async () => {
      const invalidAddress = 'cosmos1invalidaddress';
      const signDoc: SignDoc = {
        bodyBytes: new Uint8Array(),
        authInfoBytes: new Uint8Array(),
        chainId: 'test-chain',
        accountNumber: BigInt(0)
      };

      await expect(wallet.signDirect(invalidAddress, signDoc))
        .rejects.toThrow(`Address ${invalidAddress} not found in wallet`);
    });
  });

  describe('signAmino', () => {
    beforeEach(async () => {
      const hdPath = HDPath.cosmos(0, 0, 0);
      wallet = await Secp256k1HDWallet.fromMnemonic(TEST_MNEMONIC, { derivations: [{ hdPath: hdPath.toString(), prefix: 'cosmos' }] });
    });

    it('should sign amino transaction with valid address', async () => {
      const accounts = await wallet.getAccounts();
      const signerAddress = accounts[0].address;

      const signDoc: StdSignDoc = {
        chain_id: 'test-chain',
        account_number: '0',
        sequence: '0',
        fee: { amount: [], gas: '0' },
        msgs: [],
        memo: 'test'
      };

      const result = await wallet.signAmino(signerAddress, signDoc);

      expect(result).toHaveProperty('signed');
      expect(result).toHaveProperty('signature');
      expect(result.signed).toEqual(signDoc);
      expect(result.signature).toHaveProperty('pub_key');
      expect(result.signature).toHaveProperty('signature');
      expect(result.signature.pub_key).toHaveProperty('type', 'tendermint/PubKeySecp256k1');
      expect(result.signature.pub_key).toHaveProperty('value');
      expect(typeof result.signature.signature).toBe('string');
    });

    it('should throw error for invalid address', async () => {
      const invalidAddress = 'cosmos1invalidaddress';
      const signDoc: StdSignDoc = {
        chain_id: 'test-chain',
        account_number: '0',
        sequence: '0',
        fee: { amount: [], gas: '0' },
        msgs: [],
        memo: ''
      };

      await expect(wallet.signAmino(invalidAddress, signDoc))
        .rejects.toThrow(`Address ${invalidAddress} not found in wallet`);
    });
  });

  describe('getAccountByIndex', () => {
    beforeEach(async () => {
      const hdPaths = [
        HDPath.cosmos(0, 0, 0),
        HDPath.cosmos(0, 0, 1),
        HDPath.cosmos(0, 0, 2)
      ];
      wallet = await Secp256k1HDWallet.fromMnemonic(TEST_MNEMONIC, { derivations: hdPaths.map(path => ({ hdPath: path.toString(), prefix: 'cosmos' })) });
    });

    it('should get account by valid index', async () => {
      const account0 = await wallet.getAccountByIndex(0);
      const account1 = await wallet.getAccountByIndex(1);

      expect(account0.address).toBe(EXPECTED_ADDRESSES.cosmos.path0);
      expect(account1.address).toBe(EXPECTED_ADDRESSES.cosmos.path1);
    });

    it('should return IAccount with getPublicKey method', async () => {
      const account = await wallet.getAccountByIndex(0);

      // Test that getPublicKey method exists and returns IPublicKey
      expect(typeof account.getPublicKey).toBe('function');

      const publicKey = account.getPublicKey();
      expect(publicKey).toBeDefined();
      expect(publicKey.value).toBeDefined();
      expect(publicKey.value.value).toBeInstanceOf(Uint8Array);
      expect(publicKey.algo).toBe('secp256k1');
      expect(typeof publicKey.compressed).toBe('boolean');

      // Test with compression parameter
      const compressedKey = account.getPublicKey(true);
      const uncompressedKey = account.getPublicKey(false);

      expect(compressedKey.compressed).toBe(true);
      expect(uncompressedKey.compressed).toBe(false);
      expect(compressedKey.value.value.length).toBeLessThan(uncompressedKey.value.value.length);
    });

    it('should throw error for invalid index', async () => {
      await expect(wallet.getAccountByIndex(999))
        .rejects.toThrow();
    });
  });

  describe('HD path testing with helper class', () => {
    it('should correctly use HDPath helper methods', async () => {
      // Test cosmos HD path
      const cosmosPath = HDPath.cosmos(0, 0, 0);
      expect(cosmosPath.toString()).toBe("m/44'/118'/0'/0/0");

      // Test eth HD path
      const ethPath = HDPath.eth(0, 0, 0);
      expect(ethPath.toString()).toBe("m/44'/60'/0'/0/0");

      // Test custom path
      const customPath = new HDPath('123', 5, 1, 10);
      expect(customPath.toString()).toBe("m/44'/123'/5'/1/10");

      // Test from string
      const fromString = HDPath.fromString("m/44'/118'/2'/1/3");
      expect(fromString.coinType).toBe('118');
      expect(fromString.accountIndex).toBe(2);
      expect(fromString.change).toBe(1);
      expect(fromString.addressIndex).toBe(3);
    });

    it('should generate different addresses for different HD paths', async () => {
      const mnemonic = 'test test test test test test test test test test test junk';

      const path1 = HDPath.cosmos(0, 0, 0);
      const path2 = HDPath.cosmos(0, 0, 1);
      const path3 = HDPath.cosmos(1, 0, 0);

      const wallet1 = await Secp256k1HDWallet.fromMnemonic(mnemonic, { derivations: [{ hdPath: path1.toString(), prefix: 'cosmos' }] });
      const wallet2 = await Secp256k1HDWallet.fromMnemonic(mnemonic, { derivations: [{ hdPath: path2.toString(), prefix: 'cosmos' }] });
      const wallet3 = await Secp256k1HDWallet.fromMnemonic(mnemonic, { derivations: [{ hdPath: path3.toString(), prefix: 'cosmos' }] });

      const addr1 = (await wallet1.getAccounts())[0].address;
      const addr2 = (await wallet2.getAccounts())[0].address;
      const addr3 = (await wallet3.getAccounts())[0].address;

      expect(addr1).not.toBe(addr2);
      expect(addr1).not.toBe(addr3);
      expect(addr2).not.toBe(addr3);
    });
  });
});