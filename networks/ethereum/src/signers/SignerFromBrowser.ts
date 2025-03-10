import { TransactionReceipt } from '../types/transaction';

/**
 * EIP-1193 Provider interface (simplified).
 * Usually, you can use 'any' or refer to the spec:
 * https://eips.ethereum.org/EIPS/eip-1193#request
 */
interface EthereumProvider {
  request: (args: {
    method: string;
    params?: any[];
  }) => Promise<any>;
}

/**
 * SignerFromBrowser is a signer class for environments where window.ethereum is available.
 * It delegates signing and broadcasting to the browser wallet (e.g., MetaMask).
 */
export class SignerFromBrowser {
  private provider: EthereumProvider;

  constructor(ethereum: EthereumProvider) {
    if (!ethereum || typeof ethereum.request !== 'function') {
      throw new Error('No valid window.ethereum provided.');
    }
    this.provider = ethereum;
  }

  /**
   * Poll until the transaction is mined and return the TransactionReceipt.
   */
  private async pollForReceipt(txHash: string): Promise<TransactionReceipt> {
    while (true) {
      const receipt = await this.provider.request({
        method: 'eth_getTransactionReceipt',
        params: [txHash],
      });
      if (receipt) {
        return receipt as TransactionReceipt;
      }
      // Wait for 3 seconds before the next check
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  }

  /**
   * Request the currently connected account. Returns the first address from the wallet.
   */
  public async getAddress(): Promise<string> {
    // Prompt user to connect accounts if not already connected
    const accounts: string[] = await this.provider.request({
      method: 'eth_requestAccounts',
    });
    if (!accounts || accounts.length === 0) {
      throw new Error('No accounts returned by the wallet.');
    }
    return accounts[0];
  }

  /**
   * Fetch the nonce (transaction count) for the current address.
   */
  public async getNonce(): Promise<number> {
    const address = await this.getAddress();
    const nonceHex: string = await this.provider.request({
      method: 'eth_getTransactionCount',
      params: [address, 'latest'],
    });
    return parseInt(nonceHex, 16);
  }

  /**
   * Get the chain ID from the wallet.
   */
  public async getChainId(): Promise<number> {
    const chainIdHex: string = await this.provider.request({
      method: 'eth_chainId',
      params: [],
    });
    return parseInt(chainIdHex, 16);
  }

  /**
   * Get the current gas price (in wei) from the wallet's node.
   */
  public async getGasPrice(): Promise<bigint> {
    const gasPriceHex: string = await this.provider.request({
      method: 'eth_gasPrice',
      params: [],
    });
    return BigInt(gasPriceHex);
  }

  /**
   * Get the balance (in wei) for the current address.
   */
  public async getBalance(): Promise<bigint> {
    const address = await this.getAddress();
    const balanceHex: string = await this.provider.request({
      method: 'eth_getBalance',
      params: [address, 'latest'],
    });
    return BigInt(balanceHex);
  }

  /**
   * Send a legacy (pre-EIP1559) transaction using the browser wallet.
   * The transaction is signed and broadcast by the wallet.
   */
  public async send({
    to,
    value,
    data = '0x' // can be undefined, but wallet will send 0x too
  }: {
    to: string,
    value: bigint,
    data?: string,
  }): Promise<{
    txHash: string;
    wait: () => Promise<TransactionReceipt>;
  }> {
    const from = await this.getAddress();
    const txParams = {
      from,
      to,
      data,
      value: '0x' + value.toString(16),
    };

    // The browser wallet handles user approval, signing, and broadcasting
    const txHash: string = await this.provider.request({
      method: 'eth_sendTransaction',
      params: [txParams],
    });

    return {
      txHash,
      wait: async () => this.pollForReceipt(txHash),
    };
  }

  public async sendEIP1559({
    to,
    value,
    data = '0x'
  }: {
    to: string,
    value: bigint,
    data?: string
  }): Promise<{
    txHash: string;
    wait: () => Promise<TransactionReceipt>;
  }> {
    const from = await this.getAddress();
    const txParams = {
      type: '0x2', // EIP-1559 transaction
      from,
      to,
      data,
      value: '0x' + value.toString(16)
    };

    const txHash: string = await this.provider.request({
      method: 'eth_sendTransaction',
      params: [txParams],
    });

    return {
      txHash,
      wait: async () => this.pollForReceipt(txHash),
    };
  }
}