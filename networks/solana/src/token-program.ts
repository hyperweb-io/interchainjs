import { PublicKey, TransactionInstruction } from './types';
import { Keypair } from './keypair';
import { SystemProgram } from './system-program';
import { TokenInstructions } from './token-instructions';
import { AssociatedTokenAccount } from './associated-token-account';
import { 
  TOKEN_PROGRAM_ID, 
  ACCOUNT_SIZE, 
  MINT_SIZE, 
  TokenAccountState,
  AuthorityType,
  NATIVE_MINT,
  RENT_EXEMPT_ACCOUNT_BALANCE,
  RENT_EXEMPT_MINT_BALANCE
} from './token-constants';
import { 
  TransferParams, 
  TransferCheckedParams, 
  MintToParams,
  BurnParams,
  ApproveParams,
  TokenMint,
  TokenAccount 
} from './token-types';

export class TokenProgram {
  static readonly programId = TOKEN_PROGRAM_ID;

  /**
   * Create a new token mint
   */
  static async createMint(
    connection: any, // Connection type
    payer: Keypair,
    mintAuthority: PublicKey,
    freezeAuthority: PublicKey | null,
    decimals: number,
    keypair?: Keypair,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): Promise<{
    mint: PublicKey;
    instructions: TransactionInstruction[];
  }> {
    const mint = keypair || Keypair.generate();

    const instructions: TransactionInstruction[] = [];

    // Create mint account
    instructions.push(
      SystemProgram.createAccount({
        fromPubkey: payer.publicKey,
        newAccountPubkey: mint.publicKey,
        lamports: RENT_EXEMPT_MINT_BALANCE,
        space: MINT_SIZE,
        programId,
      })
    );

    // Initialize mint
    instructions.push(
      TokenInstructions.initializeMint(
        mint.publicKey,
        decimals,
        mintAuthority,
        freezeAuthority,
        programId
      )
    );

    return {
      mint: mint.publicKey,
      instructions,
    };
  }

  /**
   * Create a new token account
   */
  static async createAccount(
    connection: any, // Connection type
    payer: Keypair,
    mint: PublicKey,
    owner: PublicKey,
    keypair?: Keypair,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): Promise<{
    account: PublicKey;
    instructions: TransactionInstruction[];
  }> {
    const account = keypair || Keypair.generate();

    const instructions: TransactionInstruction[] = [];

    // Create account
    instructions.push(
      SystemProgram.createAccount({
        fromPubkey: payer.publicKey,
        newAccountPubkey: account.publicKey,
        lamports: RENT_EXEMPT_ACCOUNT_BALANCE,
        space: ACCOUNT_SIZE,
        programId,
      })
    );

    // Initialize account
    instructions.push(
      TokenInstructions.initializeAccount(
        account.publicKey,
        mint,
        owner,
        programId
      )
    );

    return {
      account: account.publicKey,
      instructions,
    };
  }

  /**
   * Get or create an associated token account
   */
  static async getOrCreateAssociatedTokenAccount(
    connection: any, // Connection type
    payer: Keypair,
    mint: PublicKey,
    owner: PublicKey,
    allowOwnerOffCurve: boolean = false,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): Promise<{
    account: PublicKey;
    instructions: TransactionInstruction[];
  }> {
    const associatedToken = await AssociatedTokenAccount.findAssociatedTokenAddress(
      owner,
      mint,
      programId
    );

    // Check if account already exists
    let accountInfo;
    try {
      accountInfo = await connection.getAccountInfo(associatedToken);
    } catch (error) {
      accountInfo = null;
    }

    const instructions: TransactionInstruction[] = [];

    if (!accountInfo) {
      // Create associated token account
      instructions.push(
        AssociatedTokenAccount.createAssociatedTokenAccountInstruction(
          payer.publicKey,
          associatedToken,
          owner,
          mint,
          programId
        )
      );
    }

    return {
      account: associatedToken,
      instructions,
    };
  }

  /**
   * Transfer tokens
   */
  static transfer(
    params: TransferParams,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    return TokenInstructions.transfer(params, programId);
  }

  /**
   * Transfer tokens with decimals check
   */
  static transferChecked(
    params: TransferCheckedParams,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    return TokenInstructions.transferChecked(params, programId);
  }

  /**
   * Mint new tokens
   */
  static mintTo(
    params: MintToParams,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    return TokenInstructions.mintTo(params, programId);
  }

  /**
   * Burn tokens
   */
  static burn(
    params: BurnParams,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    return TokenInstructions.burn(params, programId);
  }

  /**
   * Approve delegate to spend tokens
   */
  static approve(
    params: ApproveParams,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    return TokenInstructions.approve(params, programId);
  }

  /**
   * Revoke delegate
   */
  static revoke(
    account: PublicKey,
    owner: PublicKey,
    multiSigners: PublicKey[] = [],
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    return TokenInstructions.revoke(account, owner, multiSigners, programId);
  }

  /**
   * Set or unset authority
   */
  static setAuthority(
    account: PublicKey,
    currentAuthority: PublicKey,
    authorityType: AuthorityType,
    newAuthority: PublicKey | null,
    multiSigners: PublicKey[] = [],
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    return TokenInstructions.setAuthority(
      account,
      currentAuthority,
      authorityType,
      newAuthority,
      multiSigners,
      programId
    );
  }

  /**
   * Close token account
   */
  static closeAccount(
    account: PublicKey,
    destination: PublicKey,
    owner: PublicKey,
    multiSigners: PublicKey[] = [],
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    return TokenInstructions.closeAccount(
      account,
      destination,
      owner,
      multiSigners,
      programId
    );
  }

  /**
   * Freeze token account
   */
  static freezeAccount(
    account: PublicKey,
    mint: PublicKey,
    freezeAuthority: PublicKey,
    multiSigners: PublicKey[] = [],
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    return TokenInstructions.freezeAccount(
      account,
      mint,
      freezeAuthority,
      multiSigners,
      programId
    );
  }

  /**
   * Thaw (unfreeze) token account
   */
  static thawAccount(
    account: PublicKey,
    mint: PublicKey,
    freezeAuthority: PublicKey,
    multiSigners: PublicKey[] = [],
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    return TokenInstructions.thawAccount(
      account,
      mint,
      freezeAuthority,
      multiSigners,
      programId
    );
  }

  /**
   * Sync native (wrapped SOL) account
   */
  static syncNative(
    account: PublicKey,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    return TokenInstructions.syncNative(account, programId);
  }

  /**
   * Create wrapped SOL account
   */
  static async createWrappedNativeAccount(
    connection: any, // Connection type
    payer: Keypair,
    owner: PublicKey,
    amount: number,
    keypair?: Keypair,
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): Promise<{
    account: PublicKey;
    instructions: TransactionInstruction[];
  }> {
    const account = keypair || Keypair.generate();

    const instructions: TransactionInstruction[] = [];

    // Create account with enough lamports for rent + wrapped amount
    instructions.push(
      SystemProgram.createAccount({
        fromPubkey: payer.publicKey,
        newAccountPubkey: account.publicKey,
        lamports: RENT_EXEMPT_ACCOUNT_BALANCE + amount,
        space: ACCOUNT_SIZE,
        programId,
      })
    );

    // Initialize account with native mint
    instructions.push(
      TokenInstructions.initializeAccount(
        account.publicKey,
        NATIVE_MINT,
        owner,
        programId
      )
    );

    return {
      account: account.publicKey,
      instructions,
    };
  }

  /**
   * Parse token mint account data
   * Real Solana format: mintAuthorityOption(4) + mintAuthority(32) + supply(8) + decimals(1) + isInitialized(1) + freezeAuthorityOption(4) + freezeAuthority(32)
   */
  static parseMintData(data: Buffer): TokenMint {
    if (data.length !== MINT_SIZE) {
      throw new Error(`Invalid mint data length: expected ${MINT_SIZE}, got ${data.length}`);
    }

    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    let offset = 0;

    // Mint authority option (4 bytes, little endian) - 0 = None, 1 = Some
    const mintAuthorityOption = view.getUint32(offset, true);
    offset += 4;

    let mintAuthority: PublicKey | null = null;
    if (mintAuthorityOption === 1) {
      // Mint authority (32 bytes)
      mintAuthority = new PublicKey(data.subarray(offset, offset + 32));
    }
    offset += 32; // Always skip 32 bytes regardless of option

    // Supply (8 bytes, little endian)
    const supply = view.getBigUint64(offset, true);
    offset += 8;

    // Decimals (1 byte)
    const decimals = data[offset];
    offset += 1;

    // Is initialized (1 byte)
    const isInitialized = data[offset] === 1;
    offset += 1;

    // Freeze authority option (4 bytes, little endian) - 0 = None, 1 = Some
    const freezeAuthorityOption = view.getUint32(offset, true);
    offset += 4;

    let freezeAuthority: PublicKey | null = null;
    if (freezeAuthorityOption === 1) {
      // Freeze authority (32 bytes)
      freezeAuthority = new PublicKey(data.subarray(offset, offset + 32));
    }

    return {
      mintAuthority,
      supply,
      decimals,
      isInitialized,
      freezeAuthority,
    };
  }

  /**
   * Parse token account data
   */
  static parseAccountData(data: Buffer): TokenAccount {
    if (data.length !== ACCOUNT_SIZE) {
      throw new Error(`Invalid account data length: expected ${ACCOUNT_SIZE}, got ${data.length}`);
    }

    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    let offset = 0;

    // Mint (32 bytes)
    const mint = new PublicKey(data.subarray(offset, offset + 32));
    offset += 32;

    // Owner (32 bytes)
    const owner = new PublicKey(data.subarray(offset, offset + 32));
    offset += 32;

    // Amount (8 bytes, little endian)
    const amount = view.getBigUint64(offset, true);
    offset += 8;

    // Delegate COption<Pubkey> (4 bytes discriminator + 32 bytes pubkey = 36 bytes total)
    const delegateOption = view.getUint32(offset, true);
    offset += 4;

    let delegate: PublicKey | null = null;
    if (delegateOption === 1) {
      // Delegate (32 bytes)
      delegate = new PublicKey(data.subarray(offset, offset + 32));
    }
    offset += 32; // Always skip 32 bytes whether delegate exists or not

    // State (1 byte)
    const state: TokenAccountState = data[offset];
    offset += 1;

    // Is native COption<u64> (4 bytes discriminator + 8 bytes u64 = 12 bytes total)
    const isNativeOption = view.getUint32(offset, true);
    offset += 4;

    const isNative = isNativeOption === 1;
    let nativeAmount = 0n;
    if (isNative) {
      nativeAmount = view.getBigUint64(offset, true);
    }
    offset += 8; // Always skip 8 bytes whether native amount exists or not

    // Delegated amount (8 bytes, little endian)
    const delegatedAmount = view.getBigUint64(offset, true);
    offset += 8;

    // Close authority COption<Pubkey> (4 bytes discriminator + 32 bytes pubkey = 36 bytes total)
    const closeAuthorityOption = view.getUint32(offset, true);
    offset += 4;

    let closeAuthority: PublicKey | null = null;
    if (closeAuthorityOption === 1) {
      // Close authority (32 bytes)
      closeAuthority = new PublicKey(data.subarray(offset, offset + 32));
    }
    // Note: always skip 32 bytes for close authority whether it exists or not

    return {
      mint,
      owner,
      amount,
      delegate,
      state,
      isNative,
      delegatedAmount,
      closeAuthority,
    };
  }
}