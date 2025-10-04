import { PublicKey, TransactionInstruction } from '../../types';
import {
  TOKEN_PROGRAM_ID,
  TokenInstruction,
  AuthorityType,
  SYSVAR_RENT
} from './constants';
import {
  TransferParams,
  TransferCheckedParams,
  MintToParams,
  MintToCheckedParams,
  BurnParams,
  BurnCheckedParams,
  ApproveParams,
  ApproveCheckedParams
} from './types';

const enum Sizes {
  U64 = 8
}

function writeBigUInt64LE(view: DataView, offset: number, value: bigint): void {
  view.setBigUint64(offset, value, true);
}

function toOptionFlag(hasValue: boolean): number {
  return hasValue ? 1 : 0;
}

export const TokenInstructions = {
  initializeMint(
    mint: PublicKey,
    decimals: number,
    mintAuthority: PublicKey,
    freezeAuthority: PublicKey | null = null,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const data = new Uint8Array(67);
    const view = new DataView(data.buffer);
    let offset = 0;

    data[offset++] = TokenInstruction.InitializeMint;
    data[offset++] = decimals;

    data.set(mintAuthority.toBuffer(), offset);
    offset += 32;

    data[offset++] = toOptionFlag(Boolean(freezeAuthority));
    if (freezeAuthority) {
      data.set(freezeAuthority.toBuffer(), offset);
    }

    return {
      keys: [
        { pubkey: mint, isSigner: false, isWritable: true },
        { pubkey: SYSVAR_RENT, isSigner: false, isWritable: false }
      ],
      programId,
      data
    };
  },

  initializeAccount(
    account: PublicKey,
    mint: PublicKey,
    owner: PublicKey,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const data = new Uint8Array([TokenInstruction.InitializeAccount]);

    return {
      keys: [
        { pubkey: account, isSigner: false, isWritable: true },
        { pubkey: mint, isSigner: false, isWritable: false },
        { pubkey: owner, isSigner: false, isWritable: false },
        { pubkey: SYSVAR_RENT, isSigner: false, isWritable: false }
      ],
      programId,
      data
    };
  },

  transfer(
    params: TransferParams,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const { source, destination, owner, amount, multiSigners = [] } = params;
    const data = new Uint8Array(1 + Sizes.U64);
    const view = new DataView(data.buffer);

    data[0] = TokenInstruction.Transfer;
    writeBigUInt64LE(view, 1, amount);

    const keys = [
      { pubkey: source, isSigner: false, isWritable: true },
      { pubkey: destination, isSigner: false, isWritable: true },
      { pubkey: owner, isSigner: multiSigners.length === 0, isWritable: false }
    ];

    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return { keys, programId, data };
  },

  transferChecked(
    params: TransferCheckedParams,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const { source, destination, owner, amount, mint, decimals, multiSigners = [] } = params;
    const data = new Uint8Array(1 + Sizes.U64 + 1);
    const view = new DataView(data.buffer);

    data[0] = TokenInstruction.TransferChecked;
    writeBigUInt64LE(view, 1, amount);
    data[9] = decimals;

    const keys = [
      { pubkey: source, isSigner: false, isWritable: true },
      { pubkey: mint, isSigner: false, isWritable: true },
      { pubkey: destination, isSigner: false, isWritable: true },
      { pubkey: owner, isSigner: multiSigners.length === 0, isWritable: false }
    ];

    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return { keys, programId, data };
  },

  mintTo(
    params: MintToParams,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const { mint, destination, authority, amount, multiSigners = [] } = params;
    const data = new Uint8Array(1 + Sizes.U64);
    const view = new DataView(data.buffer);

    data[0] = TokenInstruction.MintTo;
    writeBigUInt64LE(view, 1, amount);

    const keys = [
      { pubkey: mint, isSigner: false, isWritable: true },
      { pubkey: destination, isSigner: false, isWritable: true },
      { pubkey: authority, isSigner: multiSigners.length === 0, isWritable: false }
    ];

    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return { keys, programId, data };
  },

  mintToChecked(
    params: MintToCheckedParams,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const { mint, destination, authority, amount, decimals, multiSigners = [] } = params;
    const data = new Uint8Array(1 + Sizes.U64 + 1);
    const view = new DataView(data.buffer);

    data[0] = TokenInstruction.MintToChecked;
    writeBigUInt64LE(view, 1, amount);
    data[9] = decimals;

    const keys = [
      { pubkey: mint, isSigner: false, isWritable: true },
      { pubkey: destination, isSigner: false, isWritable: true },
      { pubkey: authority, isSigner: multiSigners.length === 0, isWritable: false }
    ];

    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return { keys, programId, data };
  },

  burn(
    params: BurnParams,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const { account, mint, owner, amount, multiSigners = [] } = params;
    const data = new Uint8Array(1 + Sizes.U64);
    const view = new DataView(data.buffer);

    data[0] = TokenInstruction.Burn;
    writeBigUInt64LE(view, 1, amount);

    const keys = [
      { pubkey: account, isSigner: false, isWritable: true },
      { pubkey: mint, isSigner: false, isWritable: true },
      { pubkey: owner, isSigner: multiSigners.length === 0, isWritable: false }
    ];

    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return { keys, programId, data };
  },

  burnChecked(
    params: BurnCheckedParams,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const { account, mint, owner, amount, decimals, multiSigners = [] } = params;
    const data = new Uint8Array(1 + Sizes.U64 + 1);
    const view = new DataView(data.buffer);

    data[0] = TokenInstruction.BurnChecked;
    writeBigUInt64LE(view, 1, amount);
    data[9] = decimals;

    const keys = [
      { pubkey: account, isSigner: false, isWritable: true },
      { pubkey: mint, isSigner: false, isWritable: true },
      { pubkey: owner, isSigner: multiSigners.length === 0, isWritable: false }
    ];

    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return { keys, programId, data };
  },

  approve(
    params: ApproveParams,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const { account, delegate, owner, amount, multiSigners = [] } = params;
    const data = new Uint8Array(1 + Sizes.U64);
    const view = new DataView(data.buffer);

    data[0] = TokenInstruction.Approve;
    writeBigUInt64LE(view, 1, amount);

    const keys = [
      { pubkey: account, isSigner: false, isWritable: true },
      { pubkey: delegate, isSigner: false, isWritable: false },
      { pubkey: owner, isSigner: multiSigners.length === 0, isWritable: false }
    ];

    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return { keys, programId, data };
  },

  approveChecked(
    params: ApproveCheckedParams,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const { account, delegate, owner, amount, mint, decimals, multiSigners = [] } = params;
    const data = new Uint8Array(1 + Sizes.U64 + 1);
    const view = new DataView(data.buffer);

    data[0] = TokenInstruction.ApproveChecked;
    writeBigUInt64LE(view, 1, amount);
    data[9] = decimals;

    const keys = [
      { pubkey: account, isSigner: false, isWritable: true },
      { pubkey: mint, isSigner: false, isWritable: false },
      { pubkey: delegate, isSigner: false, isWritable: false },
      { pubkey: owner, isSigner: multiSigners.length === 0, isWritable: false }
    ];

    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return { keys, programId, data };
  },

  revoke(
    account: PublicKey,
    owner: PublicKey,
    multiSigners: PublicKey[] = [],
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const data = new Uint8Array([TokenInstruction.Revoke]);

    const keys = [
      { pubkey: account, isSigner: false, isWritable: true },
      { pubkey: owner, isSigner: multiSigners.length === 0, isWritable: false }
    ];

    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return { keys, programId, data };
  },

  setAuthority(
    account: PublicKey,
    currentAuthority: PublicKey,
    authorityType: AuthorityType,
    newAuthority: PublicKey | null,
    multiSigners: PublicKey[] = [],
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const data = new Uint8Array(newAuthority ? 2 + 1 + 32 : 2 + 1);
    let offset = 0;

    data[offset++] = TokenInstruction.SetAuthority;
    data[offset++] = authorityType;
    data[offset++] = toOptionFlag(Boolean(newAuthority));
    if (newAuthority) {
      data.set(newAuthority.toBuffer(), offset);
    }

    const keys = [
      { pubkey: account, isSigner: false, isWritable: true },
      { pubkey: currentAuthority, isSigner: multiSigners.length === 0, isWritable: false }
    ];

    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return { keys, programId, data };
  },

  closeAccount(
    account: PublicKey,
    destination: PublicKey,
    owner: PublicKey,
    multiSigners: PublicKey[] = [],
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const data = new Uint8Array([TokenInstruction.CloseAccount]);

    const keys = [
      { pubkey: account, isSigner: false, isWritable: true },
      { pubkey: destination, isSigner: false, isWritable: true },
      { pubkey: owner, isSigner: multiSigners.length === 0, isWritable: false }
    ];

    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return { keys, programId, data };
  },

  freezeAccount(
    account: PublicKey,
    mint: PublicKey,
    freezeAuthority: PublicKey,
    multiSigners: PublicKey[] = [],
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const data = new Uint8Array([TokenInstruction.FreezeAccount]);

    const keys = [
      { pubkey: account, isSigner: false, isWritable: true },
      { pubkey: mint, isSigner: false, isWritable: false },
      { pubkey: freezeAuthority, isSigner: multiSigners.length === 0, isWritable: false }
    ];

    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return { keys, programId, data };
  },

  thawAccount(
    account: PublicKey,
    mint: PublicKey,
    freezeAuthority: PublicKey,
    multiSigners: PublicKey[] = [],
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const data = new Uint8Array([TokenInstruction.ThawAccount]);

    const keys = [
      { pubkey: account, isSigner: false, isWritable: true },
      { pubkey: mint, isSigner: false, isWritable: false },
      { pubkey: freezeAuthority, isSigner: multiSigners.length === 0, isWritable: false }
    ];

    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return { keys, programId, data };
  },

  syncNative(
    account: PublicKey,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const data = new Uint8Array([TokenInstruction.SyncNative]);

    return {
      keys: [{ pubkey: account, isSigner: false, isWritable: true }],
      programId,
      data
    };
  }
} as const;

export type TokenInstructionBuilder = typeof TokenInstructions;
