import { PublicKey, TransactionInstruction } from './types';
import { 
  TOKEN_PROGRAM_ID, 
  TokenInstruction, 
  AuthorityType, 
  ACCOUNT_SIZE, 
  MINT_SIZE 
} from './token-constants';
import { 
  TransferParams, 
  TransferCheckedParams, 
  MintToParams, 
  MintToCheckedParams,
  BurnParams,
  BurnCheckedParams,
  ApproveParams,
  ApproveCheckedParams 
} from './token-types';

export class TokenInstructions {
  /**
   * Create InitializeMint instruction
   */
  static initializeMint(
    mint: PublicKey,
    decimals: number,
    mintAuthority: PublicKey,
    freezeAuthority: PublicKey | null = null,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const data = new Uint8Array(67);
    const view = new DataView(data.buffer);
    let offset = 0;

    // Instruction discriminator
    data[offset] = TokenInstruction.InitializeMint;
    offset += 1;

    // Decimals
    data[offset] = decimals;
    offset += 1;

    // Mint authority
    data.set(mintAuthority.toBuffer(), offset);
    offset += 32;

    // Freeze authority option
    if (freezeAuthority) {
      data[offset] = 1; // Some
      offset += 1;
      data.set(freezeAuthority.toBuffer(), offset);
    } else {
      data[offset] = 0; // None
    }

    const rentSysvarId = new PublicKey('SysvarRent111111111111111111111111111111111');

    return {
      keys: [
        { pubkey: mint, isSigner: false, isWritable: true },
        { pubkey: rentSysvarId, isSigner: false, isWritable: false },
      ],
      programId,
      data,
    };
  }

  /**
   * Create InitializeAccount instruction
   */
  static initializeAccount(
    account: PublicKey,
    mint: PublicKey,
    owner: PublicKey,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const data = new Uint8Array(1);
    data[0] = TokenInstruction.InitializeAccount;

    const rentSysvarId = new PublicKey('SysvarRent111111111111111111111111111111111');

    return {
      keys: [
        { pubkey: account, isSigner: false, isWritable: true },
        { pubkey: mint, isSigner: false, isWritable: false },
        { pubkey: owner, isSigner: false, isWritable: false },
        { pubkey: rentSysvarId, isSigner: false, isWritable: false },
      ],
      programId,
      data,
    };
  }

  /**
   * Create Transfer instruction
   */
  static transfer(
    params: TransferParams,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const { source, destination, owner, amount, multiSigners = [] } = params;
    
    const data = new Uint8Array(9);
    const view = new DataView(data.buffer);
    
    // Instruction discriminator
    data[0] = TokenInstruction.Transfer;
    
    // Amount (8 bytes, little endian)
    view.setBigUint64(1, amount, true);

    const keys = [
      { pubkey: source, isSigner: false, isWritable: true },
      { pubkey: destination, isSigner: false, isWritable: true },
      { pubkey: owner, isSigner: multiSigners.length === 0, isWritable: false },
    ];

    // Add multisig signers
    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return {
      keys,
      programId,
      data,
    };
  }

  /**
   * Create TransferChecked instruction
   */
  static transferChecked(
    params: TransferCheckedParams,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const { source, destination, owner, amount, mint, decimals, multiSigners = [] } = params;
    
    const data = new Uint8Array(10);
    const view = new DataView(data.buffer);
    
    // Instruction discriminator
    data[0] = TokenInstruction.TransferChecked;
    
    // Amount (8 bytes, little endian)
    view.setBigUint64(1, amount, true);
    
    // Decimals (1 byte)
    data[9] = decimals;

    const keys = [
      { pubkey: source, isSigner: false, isWritable: true },
      { pubkey: mint, isSigner: false, isWritable: true },
      { pubkey: destination, isSigner: false, isWritable: true },
      { pubkey: owner, isSigner: multiSigners.length === 0, isWritable: false },
    ];

    // Add multisig signers
    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return {
      keys,
      programId,
      data,
    };
  }

  /**
   * Create MintTo instruction
   */
  static mintTo(
    params: MintToParams,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const { mint, destination, authority, amount, multiSigners = [] } = params;
    
    const data = new Uint8Array(9);
    const view = new DataView(data.buffer);
    
    // Instruction discriminator
    data[0] = TokenInstruction.MintTo;
    
    // Amount (8 bytes, little endian)
    view.setBigUint64(1, amount, true);

    const keys = [
      { pubkey: mint, isSigner: false, isWritable: true },
      { pubkey: destination, isSigner: false, isWritable: true },
      { pubkey: authority, isSigner: multiSigners.length === 0, isWritable: false },
    ];

    // Add multisig signers
    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return {
      keys,
      programId,
      data,
    };
  }

  /**
   * Create MintToChecked instruction
   */
  static mintToChecked(
    params: MintToCheckedParams,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const { mint, destination, authority, amount, decimals, multiSigners = [] } = params;
    
    const data = new Uint8Array(10);
    const view = new DataView(data.buffer);
    
    // Instruction discriminator
    data[0] = TokenInstruction.MintToChecked;
    
    // Amount (8 bytes, little endian)
    view.setBigUint64(1, amount, true);
    
    // Decimals (1 byte)
    data[9] = decimals;

    const keys = [
      { pubkey: mint, isSigner: false, isWritable: true },
      { pubkey: destination, isSigner: false, isWritable: true },
      { pubkey: authority, isSigner: multiSigners.length === 0, isWritable: false },
    ];

    // Add multisig signers
    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return {
      keys,
      programId,
      data,
    };
  }

  /**
   * Create Burn instruction
   */
  static burn(
    params: BurnParams,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const { account, mint, owner, amount, multiSigners = [] } = params;
    
    const data = new Uint8Array(9);
    const view = new DataView(data.buffer);
    
    // Instruction discriminator
    data[0] = TokenInstruction.Burn;
    
    // Amount (8 bytes, little endian)
    view.setBigUint64(1, amount, true);

    const keys = [
      { pubkey: account, isSigner: false, isWritable: true },
      { pubkey: mint, isSigner: false, isWritable: true },
      { pubkey: owner, isSigner: multiSigners.length === 0, isWritable: false },
    ];

    // Add multisig signers
    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return {
      keys,
      programId,
      data,
    };
  }

  /**
   * Create BurnChecked instruction
   */
  static burnChecked(
    params: BurnCheckedParams,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const { account, mint, owner, amount, decimals, multiSigners = [] } = params;
    
    const data = new Uint8Array(10);
    const view = new DataView(data.buffer);
    
    // Instruction discriminator
    data[0] = TokenInstruction.BurnChecked;
    
    // Amount (8 bytes, little endian)
    view.setBigUint64(1, amount, true);
    
    // Decimals (1 byte)
    data[9] = decimals;

    const keys = [
      { pubkey: account, isSigner: false, isWritable: true },
      { pubkey: mint, isSigner: false, isWritable: true },
      { pubkey: owner, isSigner: multiSigners.length === 0, isWritable: false },
    ];

    // Add multisig signers
    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return {
      keys,
      programId,
      data,
    };
  }

  /**
   * Create Approve instruction
   */
  static approve(
    params: ApproveParams,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const { account, delegate, owner, amount, multiSigners = [] } = params;
    
    const data = new Uint8Array(9);
    const view = new DataView(data.buffer);
    
    // Instruction discriminator
    data[0] = TokenInstruction.Approve;
    
    // Amount (8 bytes, little endian)
    view.setBigUint64(1, amount, true);

    const keys = [
      { pubkey: account, isSigner: false, isWritable: true },
      { pubkey: delegate, isSigner: false, isWritable: false },
      { pubkey: owner, isSigner: multiSigners.length === 0, isWritable: false },
    ];

    // Add multisig signers
    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return {
      keys,
      programId,
      data,
    };
  }

  /**
   * Create ApproveChecked instruction
   */
  static approveChecked(
    params: ApproveCheckedParams,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const { account, delegate, owner, amount, mint, decimals, multiSigners = [] } = params;
    
    const data = new Uint8Array(10);
    const view = new DataView(data.buffer);
    
    // Instruction discriminator
    data[0] = TokenInstruction.ApproveChecked;
    
    // Amount (8 bytes, little endian)
    view.setBigUint64(1, amount, true);
    
    // Decimals (1 byte)
    data[9] = decimals;

    const keys = [
      { pubkey: account, isSigner: false, isWritable: true },
      { pubkey: mint, isSigner: false, isWritable: false },
      { pubkey: delegate, isSigner: false, isWritable: false },
      { pubkey: owner, isSigner: multiSigners.length === 0, isWritable: false },
    ];

    // Add multisig signers
    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return {
      keys,
      programId,
      data,
    };
  }

  /**
   * Create Revoke instruction
   */
  static revoke(
    account: PublicKey,
    owner: PublicKey,
    multiSigners: PublicKey[] = [],
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const data = new Uint8Array(1);
    data[0] = TokenInstruction.Revoke;

    const keys = [
      { pubkey: account, isSigner: false, isWritable: true },
      { pubkey: owner, isSigner: multiSigners.length === 0, isWritable: false },
    ];

    // Add multisig signers
    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return {
      keys,
      programId,
      data,
    };
  }

  /**
   * Create SetAuthority instruction
   */
  static setAuthority(
    account: PublicKey,
    currentAuthority: PublicKey,
    authorityType: AuthorityType,
    newAuthority: PublicKey | null,
    multiSigners: PublicKey[] = [],
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const data = new Uint8Array(2 + (newAuthority ? 1 + 32 : 1));
    let offset = 0;

    // Instruction discriminator
    data[offset] = TokenInstruction.SetAuthority;
    offset += 1;

    // Authority type
    data[offset] = authorityType;
    offset += 1;

    // New authority option
    if (newAuthority) {
      data[offset] = 1; // Some
      offset += 1;
      data.set(newAuthority.toBuffer(), offset);
    } else {
      data[offset] = 0; // None
    }

    const keys = [
      { pubkey: account, isSigner: false, isWritable: true },
      { pubkey: currentAuthority, isSigner: multiSigners.length === 0, isWritable: false },
    ];

    // Add multisig signers
    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return {
      keys,
      programId,
      data,
    };
  }

  /**
   * Create CloseAccount instruction
   */
  static closeAccount(
    account: PublicKey,
    destination: PublicKey,
    owner: PublicKey,
    multiSigners: PublicKey[] = [],
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const data = new Uint8Array(1);
    data[0] = TokenInstruction.CloseAccount;

    const keys = [
      { pubkey: account, isSigner: false, isWritable: true },
      { pubkey: destination, isSigner: false, isWritable: true },
      { pubkey: owner, isSigner: multiSigners.length === 0, isWritable: false },
    ];

    // Add multisig signers
    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return {
      keys,
      programId,
      data,
    };
  }

  /**
   * Create FreezeAccount instruction
   */
  static freezeAccount(
    account: PublicKey,
    mint: PublicKey,
    freezeAuthority: PublicKey,
    multiSigners: PublicKey[] = [],
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const data = new Uint8Array(1);
    data[0] = TokenInstruction.FreezeAccount;

    const keys = [
      { pubkey: account, isSigner: false, isWritable: true },
      { pubkey: mint, isSigner: false, isWritable: false },
      { pubkey: freezeAuthority, isSigner: multiSigners.length === 0, isWritable: false },
    ];

    // Add multisig signers
    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return {
      keys,
      programId,
      data,
    };
  }

  /**
   * Create ThawAccount instruction
   */
  static thawAccount(
    account: PublicKey,
    mint: PublicKey,
    freezeAuthority: PublicKey,
    multiSigners: PublicKey[] = [],
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const data = new Uint8Array(1);
    data[0] = TokenInstruction.ThawAccount;

    const keys = [
      { pubkey: account, isSigner: false, isWritable: true },
      { pubkey: mint, isSigner: false, isWritable: false },
      { pubkey: freezeAuthority, isSigner: multiSigners.length === 0, isWritable: false },
    ];

    // Add multisig signers
    for (const signer of multiSigners) {
      keys.push({ pubkey: signer, isSigner: true, isWritable: false });
    }

    return {
      keys,
      programId,
      data,
    };
  }

  /**
   * Create SyncNative instruction (for wrapped SOL)
   */
  static syncNative(
    account: PublicKey,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    const data = new Uint8Array(1);
    data[0] = TokenInstruction.SyncNative;

    return {
      keys: [
        { pubkey: account, isSigner: false, isWritable: true },
      ],
      programId,
      data,
    };
  }
}