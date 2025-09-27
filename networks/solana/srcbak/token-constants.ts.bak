import { PublicKey } from './types';

// SPL Token Program IDs
export const TOKEN_PROGRAM_ID = new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');
export const TOKEN_2022_PROGRAM_ID = new PublicKey('TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb');
export const ASSOCIATED_TOKEN_PROGRAM_ID = new PublicKey('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL');

// Token Account State
export enum TokenAccountState {
  Uninitialized = 0,
  Initialized = 1,
  Frozen = 2,
}

// Token Program Instructions
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
  CreateNativeMint = 31,
}

// Authority Types
export enum AuthorityType {
  MintTokens = 0,
  FreezeAccount = 1,
  AccountOwner = 2,
  CloseAccount = 3,
}

// Native Mint (for wrapped SOL)
export const NATIVE_MINT = new PublicKey('So11111111111111111111111111111111111111112');

// Token Account and Mint sizes
export const MINT_SIZE = 82;
export const ACCOUNT_SIZE = 165;
export const MULTISIG_SIZE = 355;

// Maximum token decimals
export const MAX_DECIMALS = 9;

// Minimum rent exempt balance for accounts
export const RENT_EXEMPT_MINT_BALANCE = 1461600;
export const RENT_EXEMPT_ACCOUNT_BALANCE = 2039280;