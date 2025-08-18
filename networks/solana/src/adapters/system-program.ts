import { PublicKey, TransactionInstruction } from "../types/legacy";

export class SystemProgram {
  static readonly programId = new PublicKey('11111111111111111111111111111111'); // System Program ID

  static transfer(params: {
    fromPubkey: PublicKey;
    toPubkey: PublicKey;
    lamports: number;
  }): TransactionInstruction {
    const { fromPubkey, toPubkey, lamports } = params;

    // Solana system program transfer instruction format:
    // [u32 instruction_type] + [u64 lamports]
    const data = new Uint8Array(4 + 8);
    const view = new DataView(data.buffer);

    // Write instruction type (2 for transfer) as little-endian u32
    view.setUint32(0, 2, true);

    // Write lamports as little-endian u64
    // Since JavaScript can't handle 64-bit integers directly in DataView,
    // we need to split the number into two 32-bit parts
    const lamportsBigInt = BigInt(lamports);
    const low = Number(lamportsBigInt & 0xffffffffn);
    const high = Number(lamportsBigInt >> 32n);

    view.setUint32(4, low, true); // Low 32 bits
    view.setUint32(8, high, true); // High 32 bits

    return {
      keys: [
        { pubkey: fromPubkey, isSigner: true, isWritable: true },
        { pubkey: toPubkey, isSigner: false, isWritable: true },
      ],
      programId: SystemProgram.programId,
      data,
    };
  }

  static createAccount(params: {
    fromPubkey: PublicKey;
    newAccountPubkey: PublicKey;
    lamports: number;
    space: number;
    programId: PublicKey;
  }): TransactionInstruction {
    const { fromPubkey, newAccountPubkey, lamports, space, programId } = params;

    const data = new Uint8Array(4 + 8 + 8 + 32);
    const view = new DataView(data.buffer);
    let offset = 0;

    // Write instruction type (0 for createAccount) as little-endian u32
    view.setUint32(offset, 0, true);
    offset += 4;

    // Write lamports as little-endian u64
    const lamportsBigInt = BigInt(lamports);
    const lamportsLow = Number(lamportsBigInt & 0xffffffffn);
    const lamportsHigh = Number(lamportsBigInt >> 32n);
    view.setUint32(offset, lamportsLow, true);
    view.setUint32(offset + 4, lamportsHigh, true);
    offset += 8;

    // Write space as little-endian u64
    const spaceBigInt = BigInt(space);
    const spaceLow = Number(spaceBigInt & 0xffffffffn);
    const spaceHigh = Number(spaceBigInt >> 32n);
    view.setUint32(offset, spaceLow, true);
    view.setUint32(offset + 4, spaceHigh, true);
    offset += 8;

    // Copy program ID
    const programIdBytes = programId.toBuffer();
    data.set(programIdBytes, offset);

    return {
      keys: [
        { pubkey: fromPubkey, isSigner: true, isWritable: true },
        { pubkey: newAccountPubkey, isSigner: true, isWritable: true },
      ],
      programId: SystemProgram.programId,
      data,
    };
  }
}
