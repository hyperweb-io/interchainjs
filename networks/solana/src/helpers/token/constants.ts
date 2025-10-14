import { PublicKey } from '../../types';

/**
 * Canonical program identifiers used across helper modules.
 */
export const PROGRAM_IDS = Object.freeze({
  SYSTEM: new PublicKey('11111111111111111111111111111111'),
  TOKEN: new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'),
  TOKEN_2022: new PublicKey('TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb'),
  ASSOCIATED_TOKEN: new PublicKey('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'),
  NATIVE_MINT: new PublicKey('So11111111111111111111111111111111111111112'),
  SYSVAR_RENT: new PublicKey('SysvarRent111111111111111111111111111111111')
});

export const TOKEN_PROGRAM_ID = PROGRAM_IDS.TOKEN;
export const TOKEN_2022_PROGRAM_ID = PROGRAM_IDS.TOKEN_2022;
export const ASSOCIATED_TOKEN_PROGRAM_ID = PROGRAM_IDS.ASSOCIATED_TOKEN;
export const SYSTEM_PROGRAM_ID = PROGRAM_IDS.SYSTEM;
export const NATIVE_MINT = PROGRAM_IDS.NATIVE_MINT;
export const SYSVAR_RENT = PROGRAM_IDS.SYSVAR_RENT;

/** Maximum lamports representable in Solana's u64 ledger fields */
export const MAX_LAMPORTS = 18446744073709551615n;

/**
 * SPL token account lifecycle state values.
 */
export enum TokenAccountState {
  Uninitialized = 0,
  Initialized = 1,
  Frozen = 2
}

/**
 * Canonical instruction discriminators for the SPL Token program.
 */
export enum TokenInstruction {
  InitializeMint = 0,
  InitializeAccount = 1,
  InitializeMultisig = 2,
  Transfer = 3,
  Approve = 4,
  Revoke = 5,
  SetAuthority = 6,
  MintTo = 7,
  Burn = 8,
  CloseAccount = 9,
  FreezeAccount = 10,
  ThawAccount = 11,
  TransferChecked = 12,
  ApproveChecked = 13,
  MintToChecked = 14,
  BurnChecked = 15,
  InitializeAccount2 = 16,
  SyncNative = 17,
  InitializeAccount3 = 18,
  InitializeMultisig2 = 19,
  InitializeMint2 = 20,
  GetAccountDataSize = 21,
  InitializeImmutableOwner = 22,
  AmountToUiAmount = 23,
  UiAmountToAmount = 24,
  InitializeMintCloseAuthority = 25,
  TransferFeeExtension = 26,
  ConfidentialTransferExtension = 27,
  DefaultAccountStateExtension = 28,
  Reallocate = 29,
  MemoTransferExtension = 30,
  CreateNativeMint = 31
}

/**
 * Authority types recognised by `SetAuthority`.
 */
export enum AuthorityType {
  MintTokens = 0,
  FreezeAccount = 1,
  AccountOwner = 2,
  CloseAccount = 3
}

/** Standard account sizes for rent calculations */
export const MINT_SIZE = 82;
export const ACCOUNT_SIZE = 165;
export const MULTISIG_SIZE = 355;

/** Maximum number of decimals supported by the SPL token program */
export const MAX_DECIMALS = 9;

/** Approximated rent-exempt balances for common SPL accounts */
export const RENT_EXEMPT_MINT_BALANCE = 1_461_600;
export const RENT_EXEMPT_ACCOUNT_BALANCE = 2_039_280;
