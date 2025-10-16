import { TransactionResponse } from './transaction';
import { AddressType } from './script';
import { UTXO, PSBT } from './transaction';
import { BitcoinNetwork } from './network';

export interface BitcoinSigner {
  /**
   * Get the Bitcoin address associated with this signer
   */
  getAddress(type?: AddressType): string;
  
  /**
   * Get the unspent transaction outputs (UTXOs) for this address
   */
  getUTXOs(addressType?: AddressType): Promise<UTXO[]>;
  
  /**
   * Sign a transaction and broadcast it to the network
   */
  signAndBroadcast(options: BitcoinSignOptions): Promise<TransactionResponse>;
  
  /**
   * Sign a message using the private key
   */
  signMessage(message: string): Promise<string>;
  
  /**
   * Verify a message signature
   */
  verifyMessage(message: string, signature: string, address: string): boolean;
  
  /**
   * Create a PSBT (Partially Signed Bitcoin Transaction)
   */
  createPSBT(options: BitcoinSignOptions): PSBT;
  
  /**
   * Sign a PSBT
   */
  signPSBT(psbt: PSBT): PSBT;
  
  /**
   * Broadcast a transaction
   */
  broadcastTransaction(txHex: string): Promise<TransactionResponse>;
  
  /**
   * Get the network configuration
   */
  getNetwork(): BitcoinNetwork;
}

export interface BitcoinSignOptions {
  /**
   * Recipients of the transaction
   */
  outputs: {
    address: string;
    value: number; // in satoshis
  }[];
  
  /**
   * Fee rate in satoshis per byte
   */
  feeRate?: number;
  
  /**
   * Address type to use for change outputs
   */
  changeAddressType?: AddressType;
  
  /**
   * Explicit inputs to use (if not provided, will automatically select UTXOs)
   */
  inputs?: UTXO[];
  
  /**
   * Explicit change address (if not provided, will generate one)
   */
  changeAddress?: string;
}
