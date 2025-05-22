import axios, { AxiosInstance } from 'axios';
import { UTXO, TransactionResponse, TransactionReceipt, PSBT } from '../types/transaction';
import { BitcoinNetwork } from '../types/network';
import { bytesToHex, hexToBytes } from '../utils/common';

export interface JsonRpcRequest {
  jsonrpc: '2.0';
  id: number | string;
  method: string;
  params: any[];
}

export interface JsonRpcResponse {
  jsonrpc: '2.0';
  id: number | string;
  result?: any;
  error?: {
    code: number;
    message: string;
  };
}

export interface RpcClientOptions {
  url: string;
  username?: string;
  password?: string;
  timeout?: number;
}

export class BitcoinRpcClient {
  private axios: AxiosInstance;
  private nextId: number = 1;
  private network: BitcoinNetwork;

  constructor(options: RpcClientOptions, network: BitcoinNetwork) {
    const auth = options.username && options.password 
      ? { username: options.username, password: options.password }
      : undefined;
    
    this.axios = axios.create({
      baseURL: options.url,
      timeout: options.timeout || 30000,
      auth
    });
    
    this.network = network;
  }

  /**
   * Make a JSON-RPC call to the Bitcoin node
   */
  private async call<T>(method: string, params: any[] = []): Promise<T> {
    const request: JsonRpcRequest = {
      jsonrpc: '2.0',
      id: this.nextId++,
      method,
      params
    };
    
    try {
      const response = await this.axios.post<JsonRpcResponse>('', request);
      
      if (response.data.error) {
        throw new Error(`RPC Error: ${response.data.error.message} (${response.data.error.code})`);
      }
      
      return response.data.result;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          throw new Error(`HTTP Error: ${error.response.status} ${error.response.statusText}`);
        } else if (error.request) {
          throw new Error(`Network Error: ${error.message}`);
        }
      }
      throw error;
    }
  }

  /**
   * Get blockchain info
   */
  async getBlockchainInfo(): Promise<any> {
    return this.call('getblockchaininfo');
  }

  /**
   * Get a block by hash or height
   */
  async getBlock(blockHashOrHeight: string | number, verbosity = 1): Promise<any> {
    if (typeof blockHashOrHeight === 'number') {
      const blockHash = await this.call<string>('getblockhash', [blockHashOrHeight]);
      return this.call('getblock', [blockHash, verbosity]);
    }
    
    return this.call('getblock', [blockHashOrHeight, verbosity]);
  }

  /**
   * Get a raw transaction
   */
  async getRawTransaction(txid: string, verbose = false): Promise<any> {
    return this.call('getrawtransaction', [txid, verbose]);
  }

  /**
   * Send a raw transaction
   */
  async sendRawTransaction(txHex: string): Promise<string> {
    return this.call('sendrawtransaction', [txHex]);
  }

  /**
   * Create a raw transaction
   */
  async createRawTransaction(inputs: { txid: string; vout: number }[], outputs: Record<string, number>, locktime = 0): Promise<string> {
    return this.call('createrawtransaction', [inputs, outputs, locktime]);
  }

  /**
   * Sign a raw transaction with keys
   */
  async signRawTransactionWithKey(txHex: string, privateKeys: string[], prevTxs?: any[]): Promise<{ hex: string; complete: boolean }> {
    return this.call('signrawtransactionwithkey', [txHex, privateKeys, prevTxs]);
  }

  /**
   * Get unspent transaction outputs
   */
  async listUnspent(minConf = 1, maxConf = 9999999, addresses: string[] = []): Promise<UTXO[]> {
    const result = await this.call<any[]>('listunspent', [minConf, maxConf, addresses]);
    
    return result.map(utxo => ({
      txid: utxo.txid,
      vout: utxo.vout,
      value: Math.floor(utxo.amount * 100000000), // convert BTC to satoshis
      scriptPubKey: utxo.scriptPubKey,
      address: utxo.address,
      confirmations: utxo.confirmations
    }));
  }

  /**
   * Get a new address
   */
  async getNewAddress(label = '', addressType = 'bech32'): Promise<string> {
    return this.call('getnewaddress', [label, addressType]);
  }

  /**
   * Get address info
   */
  async getAddressInfo(address: string): Promise<any> {
    return this.call('getaddressinfo', [address]);
  }

  /**
   * Estimate smart fee
   */
  async estimateSmartFee(confTarget = 6): Promise<{ feerate: number; blocks: number }> {
    return this.call('estimatesmartfee', [confTarget]);
  }

  /**
   * Create a PSBT
   */
  async createPSBT(inputs: { txid: string; vout: number }[], outputs: Record<string, number>, locktime = 0): Promise<string> {
    return this.call('createpsbt', [inputs, outputs, locktime]);
  }

  /**
   * Fund a PSBT
   */
  async fundRawTransaction(txHex: string, options: any = {}): Promise<{ hex: string; fee: number; changepos: number }> {
    return this.call('fundrawtransaction', [txHex, options]);
  }

  /**
   * Wallet create funded PSBT
   */
  async walletCreateFundedPSBT(
    inputs: { txid: string; vout: number }[],
    outputs: Record<string, number>,
    locktime = 0,
    options: any = {}
  ): Promise<{ psbt: string; fee: number; changepos: number }> {
    return this.call('walletcreatefundedpsbt', [inputs, outputs, locktime, options]);
  }

  /**
   * Finalize PSBT
   */
  async finalizePSBT(psbtBase64: string): Promise<{ psbt: string; hex: string; complete: boolean }> {
    return this.call('finalizepsbt', [psbtBase64]);
  }

  /**
   * Decode PSBT
   */
  async decodePSBT(psbtBase64: string): Promise<any> {
    return this.call('decodepsbt', [psbtBase64]);
  }

  /**
   * Combine PSBTs
   */
  async combinePSBT(psbtBase64Array: string[]): Promise<string> {
    return this.call('combinepsbt', [psbtBase64Array]);
  }

  /**
   * Sign PSBT
   */
  async signPSBT(psbtBase64: string): Promise<{ psbt: string; complete: boolean }> {
    return this.call('walletprocesspsbt', [psbtBase64]);
  }

  /**
   * Create a transaction response from a txid
   */
  createTransactionResponse(txid: string): TransactionResponse {
    return {
      txid,
      wait: async (confirmations = 1) => this.waitForTransaction(txid, confirmations)
    };
  }

  /**
   * Wait for a transaction to be confirmed
   */
  private async waitForTransaction(txid: string, confirmations = 1): Promise<TransactionReceipt> {
    let receipt: TransactionReceipt = {
      txid,
      confirmations: 0,
      status: 'pending'
    };
    
    while (receipt.confirmations < confirmations) {
      try {
        const tx = await this.getRawTransaction(txid, true);
        
        if (tx.confirmations > 0) {
          receipt = {
            txid,
            blockHeight: tx.blockheight,
            confirmations: tx.confirmations,
            status: 'confirmed'
          };
        }
        
        if (receipt.confirmations < confirmations) {
          await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds before polling again
        }
      } catch (error) {
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds before polling again
      }
    }
    
    return receipt;
  }

  /**
   * Create a PSBT instance
   */
  createPSBTInstance(base64?: string): PSBT {
    throw new Error('Not implemented yet');
  }

  /**
   * Get the network
   */
  getNetwork(): BitcoinNetwork {
    return this.network;
  }
}
