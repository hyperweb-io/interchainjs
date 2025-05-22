export interface TransactionResponse {
  /**
   * Transaction hash
   */
  txid: string;
  
  /**
   * Wait for the transaction to be confirmed
   */
  wait(confirmations?: number): Promise<TransactionReceipt>;
}

export interface TransactionReceipt {
  /**
   * Transaction hash
   */
  txid: string;
  
  /**
   * Block height where the transaction was included
   */
  blockHeight?: number;
  
  /**
   * Number of confirmations
   */
  confirmations: number;
  
  /**
   * Transaction status
   */
  status: 'confirmed' | 'pending' | 'failed';
}

export interface UTXO {
  txid: string;
  vout: number;
  value: number; // in satoshis
  scriptPubKey: string;
  address: string;
  confirmations?: number;
}

export interface BitcoinTransaction {
  version: number;
  inputs: BitcoinInput[];
  outputs: BitcoinOutput[];
  locktime: number;
  witness?: Uint8Array[][]; // For segwit transactions
}

export interface BitcoinInput {
  txid: string;
  vout: number;
  scriptSig: Uint8Array;
  sequence: number;
}

export interface BitcoinOutput {
  value: number; // in satoshis
  scriptPubKey: Uint8Array;
}

export interface PSBT {
  /**
   * Convert to PSBT format as base64 string
   */
  toBase64(): string;
  
  /**
   * Convert to PSBT format as Uint8Array
   */
  toBytes(): Uint8Array;
  
  /**
   * Add input to the PSBT
   */
  addInput(input: PSBTInput): PSBT;
  
  /**
   * Add output to the PSBT
   */
  addOutput(output: PSBTOutput): PSBT;
  
  /**
   * Sign the PSBT with a private key
   */
  signInput(inputIndex: number, privateKey: Uint8Array): boolean;
  
  /**
   * Finalize the PSBT
   */
  finalize(): PSBT;
  
  /**
   * Extract transaction from the PSBT
   */
  extractTransaction(): BitcoinTransaction;
}

export interface PSBTInput {
  txid: string;
  vout: number;
  sequence?: number;
  witnessUtxo?: {
    script: Uint8Array;
    value: number;
  };
  nonWitnessUtxo?: Uint8Array;
  sighashType?: number;
  redeemScript?: Uint8Array;
  witnessScript?: Uint8Array;
  bip32Derivation?: Array<{
    masterFingerprint: Uint8Array;
    path: string;
    pubkey: Uint8Array;
  }>;
}

export interface PSBTOutput {
  address?: string;
  script?: Uint8Array;
  value: number;
}
