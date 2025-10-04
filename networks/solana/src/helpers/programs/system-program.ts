import { PublicKey, TransactionInstruction } from '../../types';
import { PROGRAM_IDS } from '../token/constants';

const { SYSTEM: SYSTEM_PROGRAM_ID } = PROGRAM_IDS;

function writeBigUInt64LE(view: DataView, offset: number, value: bigint): void {
  view.setBigUint64(offset, value, true);
}

export const SystemProgram = {
  programId: SYSTEM_PROGRAM_ID,

  transfer(params: { fromPubkey: PublicKey; toPubkey: PublicKey; lamports: number | bigint }): TransactionInstruction {
    const { fromPubkey, toPubkey, lamports } = params;
    const lamportsBigInt = typeof lamports === 'bigint' ? lamports : BigInt(lamports);

    const data = new Uint8Array(4 + 8);
    const view = new DataView(data.buffer);
    view.setUint32(0, 2, true); // Transfer instruction discriminator
    writeBigUInt64LE(view, 4, lamportsBigInt);

    return {
      keys: [
        { pubkey: fromPubkey, isSigner: true, isWritable: true },
        { pubkey: toPubkey, isSigner: false, isWritable: true }
      ],
      programId: SYSTEM_PROGRAM_ID,
      data
    };
  },

  createAccount(params: {
    fromPubkey: PublicKey;
    newAccountPubkey: PublicKey;
    lamports: number | bigint;
    space: number;
    programId: PublicKey;
  }): TransactionInstruction {
    const { fromPubkey, newAccountPubkey, lamports, space, programId } = params;

    const lamportsBigInt = typeof lamports === 'bigint' ? lamports : BigInt(lamports);
    const spaceBigInt = BigInt(space);

    const data = new Uint8Array(4 + 8 + 8 + 32);
    const view = new DataView(data.buffer);
    let offset = 0;

    view.setUint32(offset, 0, true); // CreateAccount discriminator
    offset += 4;

    writeBigUInt64LE(view, offset, lamportsBigInt);
    offset += 8;
    writeBigUInt64LE(view, offset, spaceBigInt);
    offset += 8;

    data.set(programId.toBuffer(), offset);

    return {
      keys: [
        { pubkey: fromPubkey, isSigner: true, isWritable: true },
        { pubkey: newAccountPubkey, isSigner: true, isWritable: true }
      ],
      programId: SYSTEM_PROGRAM_ID,
      data
    };
  }
} as const;
