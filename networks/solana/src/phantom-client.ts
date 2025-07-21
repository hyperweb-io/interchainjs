import { Connection, ConnectionConfig } from './connection';
import { PhantomSigner } from './phantom-signer';
import { PublicKey } from './types';
import { SystemProgram } from './system-program';
import { Transaction } from './transaction';
import * as bs58 from 'bs58';

declare var window: any;

export interface PhantomClientConfig {
  endpoint?: string;
  commitment?: 'processed' | 'confirmed' | 'finalized';
  timeout?: number;
  broadcast?: {
    checkTx?: boolean;
    timeout?: number;
  };
}

export class PhantomSigningClient {
  private connection: Connection;
  private phantomSigner: PhantomSigner;
  private config: PhantomClientConfig;

  constructor(connection: Connection, phantomSigner: PhantomSigner, config: PhantomClientConfig = {}) {
    this.connection = connection;
    this.phantomSigner = phantomSigner;
    this.config = config;
  }

  static async connectWithPhantom(
    endpoint: string,
    config: PhantomClientConfig = {}
  ): Promise<PhantomSigningClient> {
    const connection = new Connection({
      endpoint,
      commitment: config.commitment,
      timeout: config.timeout,
    });

    const phantomSigner = new PhantomSigner();
    
    if (!phantomSigner.isAvailable) {
      throw new Error('Phantom wallet not found. Please install Phantom wallet extension.');
    }

    await phantomSigner.connect();

    return new PhantomSigningClient(connection, phantomSigner, { ...config, endpoint });
  }

  get signerAddress(): PublicKey {
    return this.phantomSigner.publicKey;
  }

  get isConnected(): boolean {
    return this.phantomSigner.isConnected;
  }

  async disconnect(): Promise<void> {
    await this.phantomSigner.disconnect();
  }

  async getBalance(address?: PublicKey): Promise<number> {
    const publicKey = address || this.phantomSigner.publicKey;
    return await this.connection.getBalance(publicKey);
  }

  async getAccountInfo(address: PublicKey) {
    return await this.connection.getAccountInfo(address);
  }

  async transfer(params: {
    recipient: PublicKey;
    amount: number;
    memo?: string;
  }): Promise<string> {
    const { recipient, amount } = params;
    
    if (!this.phantomSigner.isConnected) {
      throw new Error('Phantom wallet not connected');
    }

    try {
      if (typeof window === 'undefined') {
        throw new Error('Phantom wallet only works in browser environment');
      }
      
      const provider = (window as any).solana;
      
      if (!provider) {
        throw new Error('Phantom wallet not found');
      }

      // Build the transaction using our SDK
      const transaction = new Transaction({
        feePayer: this.phantomSigner.publicKey,
        recentBlockhash: await this.connection.getRecentBlockhash(),
      });

      const transferInstruction = SystemProgram.transfer({
        fromPubkey: this.phantomSigner.publicKey,
        toPubkey: recipient,
        lamports: amount,
      });

      transaction.add(transferInstruction);

      console.log('Phantom provider found:', !!provider);
      console.log('Provider methods:', Object.keys(provider || {}));
      
      // Use the most direct approach: signAndSendTransaction with proper Solana Web3.js format
      if (provider.signAndSendTransaction) {
        try {
          console.log('Using Phantom signAndSendTransaction directly');
          
          // Create a transaction object that closely mimics Solana Web3.js Transaction
          const phantomTransaction = {
            // Required serialize method - return the full transaction with empty signatures
            serialize: () => {
              // Create a version without signatures for Phantom to sign
              const messageBytes = transaction.serializeMessage();
              
              // Create full transaction format: [signature_count] + [signatures] + [message]
              const signatureCountBytes = new Uint8Array([1]); // 1 signature
              const emptySignature = new Uint8Array(64); // 64 zero bytes for signature
              
              const fullTx = new Uint8Array(signatureCountBytes.length + emptySignature.length + messageBytes.length);
              fullTx.set(signatureCountBytes, 0);
              fullTx.set(emptySignature, signatureCountBytes.length);
              fullTx.set(messageBytes, signatureCountBytes.length + emptySignature.length);
              
              return fullTx;
            },
            
            // Additional required properties
            recentBlockhash: transaction.recentBlockhash,
            feePayer: this.phantomSigner.publicKey.toString(),
            signatures: [{ signature: null, publicKey: this.phantomSigner.publicKey.toString() }],
            
            // Instructions in expected format
            instructions: [{
              keys: [
                {
                  pubkey: this.phantomSigner.publicKey.toString(),
                  isSigner: true,
                  isWritable: true,
                },
                {
                  pubkey: recipient.toString(),
                  isSigner: false,
                  isWritable: true,
                },
              ],
              programId: SystemProgram.programId.toString(),
              data: bs58.encode(transferInstruction.data),
            }],
          };
          
          console.log('Sending transaction via Phantom signAndSendTransaction');
          const result = await provider.signAndSendTransaction(phantomTransaction);
          console.log('Transfer successful:', result);
          
          return result.signature || result;
        } catch (directError) {
          console.error('Direct signAndSendTransaction failed:', directError);
          console.log('Trying alternative approach...');
        }
      }
      
      // Try using signTransaction + manual send approach
      if (provider.signTransaction) {
        try {
          console.log('Using signTransaction method with manual send');
          
          // Create a simpler transaction object for signing only
          const messageToSign = transaction.serializeMessage();
          
          const transactionForSigning = {
            serialize: () => {
              // For signing, we need to return just the message without signatures
              return messageToSign;
            },
            serializeMessage: () => messageToSign,
            recentBlockhash: transaction.recentBlockhash,
            feePayer: {
              toString: () => this.phantomSigner.publicKey.toString(),
              toBase58: () => this.phantomSigner.publicKey.toString(),
            },
            instructions: transaction.instructions.map(ix => ({
              keys: ix.keys.map(key => ({
                pubkey: {
                  toString: () => key.pubkey.toString(),
                  toBase58: () => key.pubkey.toString(),
                },
                isSigner: key.isSigner,
                isWritable: key.isWritable,
              })),
              programId: {
                toString: () => ix.programId.toString(),
                toBase58: () => ix.programId.toString(),
              },
              data: bs58.encode(ix.data),
            })),
          };
          
          console.log('Requesting signature from Phantom...');
          
          // Get the signed transaction from Phantom
          const signedTransaction = await provider.signTransaction(transactionForSigning);
          console.log('Transaction signed by Phantom');
          
          // Extract the signature and send via our RPC
          let signedTxBytes;
          if (signedTransaction.serialize && typeof signedTransaction.serialize === 'function') {
            signedTxBytes = signedTransaction.serialize();
          } else if (signedTransaction instanceof Uint8Array) {
            signedTxBytes = signedTransaction;
          } else {
            throw new Error('Unable to extract signed transaction bytes');
          }
          
          console.log('Sending signed transaction via RPC...');
          
          // Send the signed transaction via our RPC client
          const signature = await this.connection.sendRawTransaction(signedTxBytes);
          console.log('Transaction sent successfully:', signature);
          
          return signature;
        } catch (signError) {
          console.error('signTransaction approach failed:', signError);
          console.log('Falling back to signAndSendTransaction...');
          // Continue to the next approach
        }
      } else if (provider.signAndSendTransaction) {
        console.log('Falling back to signAndSendTransaction method');
        
        // Create a simplified transaction for signAndSendTransaction
        const messageBuffer = transaction.serializeMessage();
        
        const phantomTransaction = {
          serialize: () => messageBuffer,
          recentBlockhash: transaction.recentBlockhash,
          feePayer: this.phantomSigner.publicKey.toString(),
          instructions: transaction.instructions.map(ix => ({
            keys: ix.keys.map(key => ({
              pubkey: key.pubkey.toString(),
              isSigner: key.isSigner,
              isWritable: key.isWritable,
            })),
            programId: ix.programId.toString(),
            data: bs58.encode(ix.data),
          })),
        };
        
        const result = await provider.signAndSendTransaction(phantomTransaction);
        return result.signature || result;
      }
      
      // If we reach here, no method worked
      throw new Error('Phantom wallet does not support any of the required transaction methods');
    } catch (error) {
      throw new Error(`Transfer failed: ${(error as Error).message}`);
    }
  }

  private convertToSolanaTransaction(transaction: Transaction): any {
    // Create a minimal transaction object that Phantom can understand
    // Since Phantom expects to work with serialized transactions,
    // we'll provide the serialized format
    
    const serializedTransaction = transaction.serialize();
    
    // Create a mock transaction object with the essential methods
    return {
      // Provide the serialized transaction data
      serialize: () => serializedTransaction,
      
      // Transaction properties
      recentBlockhash: transaction.recentBlockhash,
      feePayer: transaction.feePayer?.toString(),
      
      // For compatibility, provide instructions in a simplified format
      instructions: transaction.instructions.map(ix => ({
        keys: ix.keys.map(key => ({
          pubkey: key.pubkey.toString(),
          isSigner: key.isSigner,
          isWritable: key.isWritable,
        })),
        programId: ix.programId.toString(),
        data: Array.from(ix.data),
      })),
    };
  }

  private convertToPhantomTransaction(transaction: Transaction): any {
    // Convert our transaction to a format Phantom expects
    // This is a simplified conversion - in reality you'd need more complex mapping
    return {
      recentBlockhash: transaction.recentBlockhash,
      feePayer: transaction.feePayer?.toString(),
      instructions: transaction.instructions.map(ix => ({
        keys: ix.keys.map(key => ({
          pubkey: key.pubkey.toString(),
          isSigner: key.isSigner,
          isWritable: key.isWritable,
        })),
        programId: ix.programId.toString(),
        data: Array.from(ix.data),
      })),
    };
  }

  async sendTransaction(transaction: Transaction): Promise<string> {
    if (!this.phantomSigner.isConnected) {
      throw new Error('Phantom wallet not connected');
    }

    transaction.recentBlockhash = await this.connection.getRecentBlockhash();
    transaction.feePayer = this.phantomSigner.publicKey;
    
    const solanaWeb3Transaction = this.convertToSolanaTransaction(transaction);
    
    try {
      if (typeof window === 'undefined') {
        throw new Error('Phantom wallet only works in browser environment');
      }
      
      const provider = (window as any).solana;
      const signedTx = await provider.signAndSendTransaction(solanaWeb3Transaction);
      
      return signedTx.signature;
    } catch (error) {
      throw new Error(`Transaction failed: ${(error as Error).message}`);
    }
  }

  async requestAirdrop(lamports: number): Promise<string> {
    return await this.connection.requestAirdrop(this.phantomSigner.publicKey, lamports);
  }
}