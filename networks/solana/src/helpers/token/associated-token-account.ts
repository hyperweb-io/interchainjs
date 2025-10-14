import { PublicKey, TransactionInstruction } from '../../types';
import {
  TOKEN_PROGRAM_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID,
  SYSTEM_PROGRAM_ID,
  SYSVAR_RENT
} from './constants';

/**
 * Pure helper utilities for deriving and constructing associated token accounts.
 */
export const AssociatedTokenAccount = {
  async findAssociatedTokenAddress(
    walletAddress: PublicKey,
    tokenMintAddress: PublicKey,
    programId: PublicKey = TOKEN_PROGRAM_ID,
    associatedProgramId: PublicKey = ASSOCIATED_TOKEN_PROGRAM_ID
  ): Promise<PublicKey> {
    const seeds = [
      walletAddress.toBuffer(),
      programId.toBuffer(),
      tokenMintAddress.toBuffer()
    ];

    const [address] = await PublicKey.findProgramAddress(seeds, associatedProgramId);
    return address;
  },

  createAssociatedTokenAccountInstruction(
    payer: PublicKey,
    associatedToken: PublicKey,
    owner: PublicKey,
    mint: PublicKey,
    programId: PublicKey = TOKEN_PROGRAM_ID,
    associatedProgramId: PublicKey = ASSOCIATED_TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    return {
      keys: [
        { pubkey: payer, isSigner: true, isWritable: true },
        { pubkey: associatedToken, isSigner: false, isWritable: true },
        { pubkey: owner, isSigner: false, isWritable: false },
        { pubkey: mint, isSigner: false, isWritable: false },
        { pubkey: SYSTEM_PROGRAM_ID, isSigner: false, isWritable: false },
        { pubkey: programId, isSigner: false, isWritable: false },
        { pubkey: SYSVAR_RENT, isSigner: false, isWritable: false }
      ],
      programId: associatedProgramId,
      data: new Uint8Array(0)
    };
  },

  createIdempotentAssociatedTokenAccountInstruction(
    payer: PublicKey,
    associatedToken: PublicKey,
    owner: PublicKey,
    mint: PublicKey,
    programId: PublicKey = TOKEN_PROGRAM_ID,
    associatedProgramId: PublicKey = ASSOCIATED_TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const data = new Uint8Array(1);
    data[0] = 1; // Instruction discriminator for idempotent creation

    return {
      keys: [
        { pubkey: payer, isSigner: true, isWritable: true },
        { pubkey: associatedToken, isSigner: false, isWritable: true },
        { pubkey: owner, isSigner: false, isWritable: false },
        { pubkey: mint, isSigner: false, isWritable: false },
        { pubkey: SYSTEM_PROGRAM_ID, isSigner: false, isWritable: false },
        { pubkey: programId, isSigner: false, isWritable: false },
        { pubkey: SYSVAR_RENT, isSigner: false, isWritable: false }
      ],
      programId: associatedProgramId,
      data
    };
  }
} as const;
