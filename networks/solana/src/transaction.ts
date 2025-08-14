import { PublicKey, TransactionInstruction, TransactionMessage } from './types';
import { Keypair } from './keypair';
import { encodeSolanaCompactLength, concatUint8Arrays } from './utils';
import * as bs58 from 'bs58';

export class Transaction {
  signatures: Array<{
    signature: Uint8Array | null;
    publicKey: PublicKey;
  }> = [];

  feePayer?: PublicKey;
  instructions: TransactionInstruction[] = [];
  recentBlockhash?: string;

  constructor(opts?: {
    feePayer?: PublicKey;
    recentBlockhash?: string;
  }) {
    this.feePayer = opts?.feePayer;
    this.recentBlockhash = opts?.recentBlockhash;
  }

  add(instruction: TransactionInstruction): Transaction {
    this.instructions.push(instruction);
    return this;
  }

  private compileMessage(): TransactionMessage {
    if (!this.recentBlockhash) {
      throw new Error('Transaction recentBlockhash required');
    }

    if (!this.feePayer) {
      throw new Error('Transaction feePayer required');
    }

    // Collect all accounts from instructions
    const accountMetas: Array<{
      pubkey: PublicKey;
      isSigner: boolean;
      isWritable: boolean;
    }> = [];

    // Add fee payer first (always signer and writable)
    accountMetas.push({
      pubkey: this.feePayer,
      isSigner: true,
      isWritable: true,
    });

    // Add accounts from instructions
    for (const instruction of this.instructions) {
      for (const key of instruction.keys) {
        const existing = accountMetas.find(meta => meta.pubkey.equals(key.pubkey));
        if (existing) {
          // Merge flags
          existing.isSigner = existing.isSigner || key.isSigner;
          existing.isWritable = existing.isWritable || key.isWritable;
        } else {
          accountMetas.push({
            pubkey: key.pubkey,
            isSigner: key.isSigner,
            isWritable: key.isWritable,
          });
        }
      }

      // Add program ID (never signer, never writable)
      const programExists = accountMetas.find(meta => meta.pubkey.equals(instruction.programId));
      if (!programExists) {
        accountMetas.push({
          pubkey: instruction.programId,
          isSigner: false,
          isWritable: false,
        });
      }
    }

    // Sort accounts: signers first, then non-signers
    accountMetas.sort((a, b) => {
      if (a.isSigner && !b.isSigner) return -1;
      if (!a.isSigner && b.isSigner) return 1;
      return 0;
    });

    const accountKeys = accountMetas.map(meta => meta.pubkey);

    return {
      accountKeys,
      recentBlockhash: this.recentBlockhash,
      instructions: this.instructions,
    };
  }

  serializeMessage(): Uint8Array {
    const message = this.compileMessage();
    const buffers: Uint8Array[] = [];

    // Collect account metadata for header calculation
    const accountMetas: Array<{
      pubkey: PublicKey;
      isSigner: boolean;
      isWritable: boolean;
    }> = [];

    // Add fee payer first (always signer and writable)
    accountMetas.push({
      pubkey: this.feePayer!,
      isSigner: true,
      isWritable: true,
    });

    // Add accounts from instructions
    for (const instruction of message.instructions) {
      for (const key of instruction.keys) {
        const existing = accountMetas.find(meta => meta.pubkey.equals(key.pubkey));
        if (existing) {
          // Merge flags
          existing.isSigner = existing.isSigner || key.isSigner;
          existing.isWritable = existing.isWritable || key.isWritable;
        } else {
          accountMetas.push({
            pubkey: key.pubkey,
            isSigner: key.isSigner,
            isWritable: key.isWritable,
          });
        }
      }

      // Add program ID (never signer, never writable)
      const programExists = accountMetas.find(meta => meta.pubkey.equals(instruction.programId));
      if (!programExists) {
        accountMetas.push({
          pubkey: instruction.programId,
          isSigner: false,
          isWritable: false,
        });
      }
    }

    // Sort accounts: signers first, then non-signers
    accountMetas.sort((a, b) => {
      if (a.isSigner && !b.isSigner) return -1;
      if (!a.isSigner && b.isSigner) return 1;
      return 0;
    });

    // Calculate header values
    let numRequiredSignatures = 0;
    let numReadonlySignedAccounts = 0;
    let numReadonlyUnsignedAccounts = 0;

    for (const meta of accountMetas) {
      if (meta.isSigner) {
        numRequiredSignatures++;
        if (!meta.isWritable) {
          numReadonlySignedAccounts++;
        }
      } else {
        if (!meta.isWritable) {
          numReadonlyUnsignedAccounts++;
        }
      }
    }

    // Header: 3 bytes
    const header = new Uint8Array(3);
    header[0] = numRequiredSignatures;
    header[1] = numReadonlySignedAccounts;
    header[2] = numReadonlyUnsignedAccounts;
    buffers.push(header);

    // Account keys length (compact-u16)
    const accountKeysLengthBuffer = this.encodeLength(accountMetas.length);
    buffers.push(accountKeysLengthBuffer);

    // Account keys (32 bytes each)
    for (const meta of accountMetas) {
      buffers.push(meta.pubkey.toBuffer());
    }

    // Recent blockhash (32 bytes)
    const recentBlockhashBuffer = new Uint8Array(bs58.decode(message.recentBlockhash));
    buffers.push(recentBlockhashBuffer);

    // Instructions length (compact-u16)
    const instructionsLengthBuffer = this.encodeLength(message.instructions.length);
    buffers.push(instructionsLengthBuffer);

    // Instructions
    for (const instruction of message.instructions) {
      // Program ID index
      const programIdIndex = accountMetas.findIndex(meta => meta.pubkey.equals(instruction.programId));
      const programIdBuffer = new Uint8Array(1);
      programIdBuffer[0] = programIdIndex;
      buffers.push(programIdBuffer);

      // Accounts length (compact-u16)
      const accountsLengthBuffer = this.encodeLength(instruction.keys.length);
      buffers.push(accountsLengthBuffer);

      // Account indices
      for (const key of instruction.keys) {
        const keyIndex = accountMetas.findIndex(meta => meta.pubkey.equals(key.pubkey));
        const accountBuffer = new Uint8Array(1);
        accountBuffer[0] = keyIndex;
        buffers.push(accountBuffer);
      }

      // Data length (compact-u16)
      const dataLengthBuffer = this.encodeLength(instruction.data.length);
      buffers.push(dataLengthBuffer);

      // Data
      buffers.push(instruction.data);
    }

    return concatUint8Arrays(buffers);
  }

  private encodeLength(length: number): Uint8Array {
    return encodeSolanaCompactLength(length);
  }

  sign(...signers: Keypair[]): void {
    const message = this.serializeMessage();

    this.signatures = [];

    for (const signer of signers) {
      const signature = signer.sign(message);
      this.signatures.push({
        signature,
        publicKey: signer.publicKey,
      });
    }
  }

  serialize(): Uint8Array {
    const message = this.serializeMessage();
    const buffers: Uint8Array[] = [];

    // Signature count (compact-u16)
    const signatureCount = this.signatures.length;
    const signatureCountBuffer = this.encodeLength(signatureCount);
    buffers.push(signatureCountBuffer);

    // Signatures (64 bytes each)
    for (const sig of this.signatures) {
      if (sig.signature) {
        buffers.push(sig.signature);
      } else {
        buffers.push(new Uint8Array(64)); // Empty signature
      }
    }

    // Message
    buffers.push(message);

    return concatUint8Arrays(buffers);
  }

  // concatUint8Arrays method moved to local utils

  static from(buffer: Uint8Array): Transaction {
    const transaction = new Transaction();
    // This is a simplified deserializer - in a real implementation
    // you'd need to parse the full transaction format
    return transaction;
  }
}