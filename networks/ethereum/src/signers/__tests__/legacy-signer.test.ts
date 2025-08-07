import { describe, it, expect, beforeEach } from '@jest/globals';
import { LegacyEthereumSigner } from '../legacy-signer';
import { LegacyTransactionSignArgs } from '../types';
import { EthereumQueryClient } from '../../query';
import { Secp256k1HDWallet } from '../../wallets';
import { EthereumAdapter } from '../../adapters';

// Mock implementations
class MockRpcClient {
  async call(method: string, params?: any[]): Promise<any> {
    switch (method) {
      case 'eth_chainId':
        return '0x1'; // Mainnet
      case 'eth_getTransactionCount':
        return '0x5'; // Nonce 5
      case 'eth_gasPrice':
        return '0x4a817c800'; // 20 gwei
      case 'eth_estimateGas':
        return '0x5208'; // 21000 gas
      default:
        throw new Error(`Unsupported method: ${method}`);
    }
  }
}

describe('LegacyEthereumSigner', () => {
  let signer: LegacyEthereumSigner;
  let wallet: Secp256k1HDWallet;
  let queryClient: EthereumQueryClient;

  beforeEach(async () => {
    // Create test wallet
    const testMnemonic = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about';
    wallet = await Secp256k1HDWallet.fromMnemonic(testMnemonic);

    // Create mock query client
    const rpcClient = new MockRpcClient();
    const adapter = new EthereumAdapter();
    queryClient = new EthereumQueryClient(rpcClient as any, adapter);

    // Create signer
    signer = new LegacyEthereumSigner(wallet, { queryClient });
  });

  describe('Basic functionality', () => {
    it('should create signer successfully', () => {
      expect(signer).toBeDefined();
      expect(signer).toBeInstanceOf(LegacyEthereumSigner);
    });

    it('should get accounts', async () => {
      const accounts = await signer.getAccounts();
      expect(accounts).toBeDefined();
      expect(accounts.length).toBeGreaterThan(0);
      expect(accounts[0]).toHaveProperty('address');
      expect(accounts[0]).toHaveProperty('pubkey');
      expect(accounts[0]).toHaveProperty('algo');
      expect(accounts[0].algo).toBe('secp256k1');
    });

    it('should get addresses', async () => {
      const addresses = await signer.getAddresses();
      expect(addresses).toBeDefined();
      expect(addresses.length).toBeGreaterThan(0);
      expect(addresses[0]).toMatch(/^0x[a-fA-F0-9]{40}$/);
    });
  });

  describe('Transaction signing', () => {
    it('should sign a legacy transaction', async () => {
      const txArgs: LegacyTransactionSignArgs = {
        transaction: {
          to: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6',
          value: '0x' + BigInt('1000000000000000000').toString(16), // 1 ETH
          gasPrice: '0x4a817c800', // 20 gwei
          gas: '0x5208', // 21000
          data: '0x'
        }
      };

      const signedTx = await signer.sign(txArgs);

      expect(signedTx).toBeDefined();
      expect(signedTx.txHash).toMatch(/^0x[a-fA-F0-9]{64}$/);
      expect(signedTx.rawTx).toMatch(/^0x[a-fA-F0-9]+$/);
      expect(signedTx.signature).toBeDefined();
      expect(signedTx.signature.value.length).toBe(65);
      expect(signedTx.txBytes).toBeInstanceOf(Uint8Array);
      expect(typeof signedTx.broadcast).toBe('function');
    });

    it('should sign transaction with specific nonce', async () => {
      const txArgs: LegacyTransactionSignArgs = {
        transaction: {
          to: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6',
          value: '0x0',
          gasPrice: '0x4a817c800',
          gas: '0x5208',
          nonce: '0xa', // Nonce 10
          data: '0x'
        }
      };

      const signedTx = await signer.sign(txArgs);
      expect(signedTx).toBeDefined();
      expect(signedTx.txHash).toMatch(/^0x[a-fA-F0-9]{64}$/);
    });

    it('should sign contract interaction transaction', async () => {
      const txArgs: LegacyTransactionSignArgs = {
        transaction: {
          to: '0xA0b86a33E6441e8e421c7D7240c9A0616C6b1c97',
          value: '0x0',
          gasPrice: '0x4a817c800',
          gas: '0x30d40', // 200000 gas
          data: '0xa9059cbb000000000000000000000000742d35cc6634c0532925a3b8d4c9db96c4b4d8b60000000000000000000000000000000000000000000000000de0b6b3a7640000'
        }
      };

      const signedTx = await signer.sign(txArgs);
      expect(signedTx).toBeDefined();
      expect(signedTx.txHash).toMatch(/^0x[a-fA-F0-9]{64}$/);
    });

    it('should throw error for missing gasPrice', async () => {
      const txArgs: any = {
        transaction: {
          to: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6',
          value: '0x0',
          gas: '0x5208',
          data: '0x'
        }
      };

      await expect(signer.sign(txArgs)).rejects.toThrow('gasPrice is required');
    });

    it('should throw error for missing gas limit', async () => {
      const txArgs: any = {
        transaction: {
          to: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6',
          value: '0x0',
          gasPrice: '0x4a817c800',
          data: '0x'
        }
      };

      await expect(signer.sign(txArgs)).rejects.toThrow('gas limit is required');
    });
  });

  describe('Helper methods', () => {
    it('should sign with auto gas price', async () => {
      const transaction = {
        to: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6',
        value: '0x' + BigInt('1000000000000000000').toString(16),
        gas: '0x5208',
        data: '0x'
      };

      const signedTx = await signer.signWithAutoGasPrice(transaction);
      expect(signedTx).toBeDefined();
      expect(signedTx.txHash).toMatch(/^0x[a-fA-F0-9]{64}$/);
    });

    it('should send transfer', async () => {
      const to = '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6';
      const value = BigInt('1000000000000000000'); // 1 ETH

      const signedTx = await signer.sendTransfer(to, value);
      expect(signedTx).toBeDefined();
      expect(signedTx.txHash).toMatch(/^0x[a-fA-F0-9]{64}$/);
    });

    it('should send contract transaction', async () => {
      const to = '0xA0b86a33E6441e8e421c7D7240c9A0616C6b1c97';
      const data = '0xa9059cbb000000000000000000000000742d35cc6634c0532925a3b8d4c9db96c4b4d8b60000000000000000000000000000000000000000000000000de0b6b3a7640000';

      const signedTx = await signer.sendContractTransaction(to, data);
      expect(signedTx).toBeDefined();
      expect(signedTx.txHash).toMatch(/^0x[a-fA-F0-9]{64}$/);
    });
  });

  describe('Personal message signing', () => {
    it('should sign personal message', async () => {
      const message = 'Hello, Ethereum!';
      const signature = await signer.signPersonalMessage(message);

      expect(signature).toBeDefined();
      expect(signature).toMatch(/^0x[a-fA-F0-9]{130}$/); // 65 bytes = 130 hex chars
    });

    it('should verify personal message', async () => {
      const message = 'Hello, Ethereum!';
      const accounts = await signer.getAccounts();
      const address = accounts[0].address;

      const signature = await signer.signPersonalMessage(message);
      const isValid = await signer.verifyPersonalMessage(message, signature, address);

      expect(isValid).toBe(true);
    });

    it('should reject invalid signature', async () => {
      const message = 'Hello, Ethereum!';
      const accounts = await signer.getAccounts();
      const address = accounts[0].address;
      const invalidSignature = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234';

      const isValid = await signer.verifyPersonalMessage(message, invalidSignature, address);
      expect(isValid).toBe(false);
    });
  });

  describe('Broadcast functionality', () => {
    it('should have broadcast method on signed transaction', async () => {
      const txArgs: LegacyTransactionSignArgs = {
        transaction: {
          to: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6',
          value: '0x0',
          gasPrice: '0x4a817c800',
          gas: '0x5208',
          data: '0x'
        }
      };

      const signedTx = await signer.sign(txArgs);
      expect(typeof signedTx.broadcast).toBe('function');
    });
  });
});
