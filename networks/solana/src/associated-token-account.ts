import { PublicKey, TransactionInstruction } from './types';
import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } from './token-constants';
import { SystemProgram } from './system-program';

export class AssociatedTokenAccount {
  /**
   * Find the associated token account address for a given wallet and mint
   * @param walletAddress - The wallet public key
   * @param tokenMintAddress - The token mint public key
   * @param programId - Token program ID (default: TOKEN_PROGRAM_ID)
   * @param associatedTokenProgramId - Associated token program ID (default: ASSOCIATED_TOKEN_PROGRAM_ID)
   * @returns Promise resolving to the associated token account address
   */
  static async findAssociatedTokenAddress(
    walletAddress: PublicKey,
    tokenMintAddress: PublicKey,
    programId: PublicKey = TOKEN_PROGRAM_ID,
    associatedTokenProgramId: PublicKey = ASSOCIATED_TOKEN_PROGRAM_ID
  ): Promise<PublicKey> {
    const seeds = [
      walletAddress.toBuffer(),
      programId.toBuffer(),
      tokenMintAddress.toBuffer(),
    ];

    const [address] = await PublicKey.findProgramAddress(seeds, associatedTokenProgramId);
    return address;
  }

  /**
   * Create an instruction to create an associated token account
   * @param payer - The payer of the transaction
   * @param associatedToken - The associated token account address
   * @param owner - The owner of the associated token account
   * @param mint - The token mint
   * @param programId - Token program ID (default: TOKEN_PROGRAM_ID)
   * @param associatedTokenProgramId - Associated token program ID (default: ASSOCIATED_TOKEN_PROGRAM_ID)
   * @returns Transaction instruction to create the associated token account
   */
  static createAssociatedTokenAccountInstruction(
    payer: PublicKey,
    associatedToken: PublicKey,
    owner: PublicKey,
    mint: PublicKey,
    programId: PublicKey = TOKEN_PROGRAM_ID,
    associatedTokenProgramId: PublicKey = ASSOCIATED_TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const systemProgramId = new PublicKey('11111111111111111111111111111111');
    const rentSysvarId = new PublicKey('SysvarRent111111111111111111111111111111111');

    return {
      keys: [
        { pubkey: payer, isSigner: true, isWritable: true },
        { pubkey: associatedToken, isSigner: false, isWritable: true },
        { pubkey: owner, isSigner: false, isWritable: false },
        { pubkey: mint, isSigner: false, isWritable: false },
        { pubkey: systemProgramId, isSigner: false, isWritable: false },
        { pubkey: programId, isSigner: false, isWritable: false },
        { pubkey: rentSysvarId, isSigner: false, isWritable: false },
      ],
      programId: associatedTokenProgramId,
      data: new Uint8Array(0), // Create instruction (no data)
    };
  }

  /**
   * Create an instruction to create an associated token account (idempotent)
   * This instruction will not fail if the account already exists
   * @param payer - The payer of the transaction
   * @param associatedToken - The associated token account address
   * @param owner - The owner of the associated token account
   * @param mint - The token mint
   * @param programId - Token program ID (default: TOKEN_PROGRAM_ID)
   * @param associatedTokenProgramId - Associated token program ID (default: ASSOCIATED_TOKEN_PROGRAM_ID)
   * @returns Transaction instruction to create the associated token account (idempotent)
   */
  static createIdempotentAssociatedTokenAccountInstruction(
    payer: PublicKey,
    associatedToken: PublicKey,
    owner: PublicKey,
    mint: PublicKey,
    programId: PublicKey = TOKEN_PROGRAM_ID,
    associatedTokenProgramId: PublicKey = ASSOCIATED_TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const systemProgramId = SystemProgram.programId;
    const rentSysvarId = new PublicKey('SysvarRent111111111111111111111111111111111');

    // Instruction discriminator for idempotent creation (1 byte)
    const data = new Uint8Array(1);
    data[0] = 1; // Instruction index for CreateIdempotent

    return {
      keys: [
        { pubkey: payer, isSigner: true, isWritable: true },
        { pubkey: associatedToken, isSigner: false, isWritable: true },
        { pubkey: owner, isSigner: false, isWritable: false },
        { pubkey: mint, isSigner: false, isWritable: false },
        { pubkey: systemProgramId, isSigner: false, isWritable: false },
        { pubkey: programId, isSigner: false, isWritable: false },
        { pubkey: rentSysvarId, isSigner: false, isWritable: false },
      ],
      programId: associatedTokenProgramId,
      data,
    };
  }
}

