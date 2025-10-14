import { PublicKey, TransactionInstruction, SolanaCommitment, SolanaEncoding } from '../../types';
import { Keypair } from '../../keypair';
import { SystemProgram } from './system-program';
import { TokenInstructions } from '../token/instructions';
import { AssociatedTokenAccount } from '../token/associated-token-account';
import {
  TOKEN_PROGRAM_ID,
  ACCOUNT_SIZE,
  MINT_SIZE,
  TokenAccountState,
  AuthorityType,
  NATIVE_MINT,
  RENT_EXEMPT_ACCOUNT_BALANCE,
  RENT_EXEMPT_MINT_BALANCE
} from '../token/constants';
import { TokenAccount, TokenMint, TransferParams, TransferCheckedParams, MintToParams, BurnParams, ApproveParams } from '../token/types';
import { ISolanaQueryClient } from '../../types/solana-client-interfaces';

interface RentResolutionOptions {
  queryClient?: ISolanaQueryClient;
  fallbackLamports: number;
  dataLength: number;
}

async function resolveRentExemption({
  queryClient,
  fallbackLamports,
  dataLength
}: RentResolutionOptions): Promise<bigint> {
  if (queryClient) {
    try {
      const rent = await queryClient.getMinimumBalanceForRentExemption({ dataLength });
      if (rent > 0n) {
        return rent;
      }
    } catch {
      // Fall back to static values if RPC probe fails
    }
  }
  return BigInt(fallbackLamports);
}

export interface CreateMintParams {
  payer: Keypair;
  mintAuthority: PublicKey;
  freezeAuthority?: PublicKey | null;
  decimals: number;
  mintKeypair?: Keypair;
  programId?: PublicKey;
  rentExemptionLamports?: bigint | number;
  queryClient?: ISolanaQueryClient;
}

export interface CreateMintResult {
  mint: PublicKey;
  instructions: TransactionInstruction[];
  signers: Keypair[];
  rentLamports: bigint;
}

export interface CreateAccountParams {
  payer: Keypair;
  mint: PublicKey;
  owner: PublicKey;
  accountKeypair?: Keypair;
  programId?: PublicKey;
  rentExemptionLamports?: bigint | number;
  queryClient?: ISolanaQueryClient;
}

export interface CreateAccountResult {
  account: PublicKey;
  instructions: TransactionInstruction[];
  signers: Keypair[];
  rentLamports: bigint;
}

export interface GetOrCreateAssociatedAccountParams {
  payer: Keypair;
  mint: PublicKey;
  owner: PublicKey;
  allowOwnerOffCurve?: boolean;
  programId?: PublicKey;
  associatedProgramId?: PublicKey;
  queryClient?: ISolanaQueryClient;
}

export interface AssociatedAccountResult {
  account: PublicKey;
  instructions: TransactionInstruction[];
  alreadyExists: boolean;
}

export interface CreateWrappedNativeAccountParams {
  payer: Keypair;
  owner: PublicKey;
  amount: number | bigint;
  accountKeypair?: Keypair;
  programId?: PublicKey;
  rentExemptionLamports?: bigint | number;
  queryClient?: ISolanaQueryClient;
}

export interface CreateWrappedNativeAccountResult {
  account: PublicKey;
  instructions: TransactionInstruction[];
  signers: Keypair[];
  rentLamports: bigint;
}

export const TokenProgram = {
  programId: TOKEN_PROGRAM_ID,

  async createMint(params: CreateMintParams): Promise<CreateMintResult> {
    const {
      payer,
      mintAuthority,
      freezeAuthority = null,
      decimals,
      mintKeypair,
      programId = TOKEN_PROGRAM_ID,
      rentExemptionLamports,
      queryClient
    } = params;

    const mint = mintKeypair ?? Keypair.generate();
    const rentLamports = rentExemptionLamports !== undefined
      ? BigInt(rentExemptionLamports)
      : await resolveRentExemption({
          queryClient,
          fallbackLamports: RENT_EXEMPT_MINT_BALANCE,
          dataLength: MINT_SIZE
        });

    const instructions: TransactionInstruction[] = [
      SystemProgram.createAccount({
        fromPubkey: payer.publicKey,
        newAccountPubkey: mint.publicKey,
        lamports: rentLamports,
        space: MINT_SIZE,
        programId
      }),
      TokenInstructions.initializeMint(mint.publicKey, decimals, mintAuthority, freezeAuthority, programId)
    ];

    return {
      mint: mint.publicKey,
      instructions,
      signers: [mint],
      rentLamports
    };
  },

  async createAccount(params: CreateAccountParams): Promise<CreateAccountResult> {
    const {
      payer,
      mint,
      owner,
      accountKeypair,
      programId = TOKEN_PROGRAM_ID,
      rentExemptionLamports,
      queryClient
    } = params;

    const account = accountKeypair ?? Keypair.generate();
    const rentLamports = rentExemptionLamports !== undefined
      ? BigInt(rentExemptionLamports)
      : await resolveRentExemption({
          queryClient,
          fallbackLamports: RENT_EXEMPT_ACCOUNT_BALANCE,
          dataLength: ACCOUNT_SIZE
        });

    const instructions: TransactionInstruction[] = [
      SystemProgram.createAccount({
        fromPubkey: payer.publicKey,
        newAccountPubkey: account.publicKey,
        lamports: rentLamports,
        space: ACCOUNT_SIZE,
        programId
      }),
      TokenInstructions.initializeAccount(account.publicKey, mint, owner, programId)
    ];

    return {
      account: account.publicKey,
      instructions,
      signers: [account],
      rentLamports
    };
  },

  async getOrCreateAssociatedTokenAccount(
    params: GetOrCreateAssociatedAccountParams
  ): Promise<AssociatedAccountResult> {
    const {
      payer,
      mint,
      owner,
      programId = TOKEN_PROGRAM_ID,
      associatedProgramId,
      queryClient
    } = params;

    const associatedToken = await AssociatedTokenAccount.findAssociatedTokenAddress(
      owner,
      mint,
      programId,
      associatedProgramId
    );

    let alreadyExists = false;

    if (queryClient) {
      try {
        const accountInfo = await queryClient.getAccountInfo({
          pubkey: associatedToken.toString(),
          options: { commitment: SolanaCommitment.PROCESSED, encoding: SolanaEncoding.BASE64 }
        });
        alreadyExists = accountInfo.value !== null;
      } catch {
        alreadyExists = false;
      }
    }

    const instructions: TransactionInstruction[] = [];
    if (!alreadyExists) {
      instructions.push(
        AssociatedTokenAccount.createAssociatedTokenAccountInstruction(
          payer.publicKey,
          associatedToken,
          owner,
          mint,
          programId,
          associatedProgramId
        )
      );
    }

    return {
      account: associatedToken,
      instructions,
      alreadyExists
    };
  },

  transfer(params: TransferParams, programId: PublicKey = TOKEN_PROGRAM_ID): TransactionInstruction {
    return TokenInstructions.transfer(params, programId);
  },

  transferChecked(params: TransferCheckedParams, programId: PublicKey = TOKEN_PROGRAM_ID): TransactionInstruction {
    return TokenInstructions.transferChecked(params, programId);
  },

  mintTo(params: MintToParams, programId: PublicKey = TOKEN_PROGRAM_ID): TransactionInstruction {
    return TokenInstructions.mintTo(params, programId);
  },

  burn(params: BurnParams, programId: PublicKey = TOKEN_PROGRAM_ID): TransactionInstruction {
    return TokenInstructions.burn(params, programId);
  },

  approve(params: ApproveParams, programId: PublicKey = TOKEN_PROGRAM_ID): TransactionInstruction {
    return TokenInstructions.approve(params, programId);
  },

  revoke(
    account: PublicKey,
    owner: PublicKey,
    multiSigners: PublicKey[] = [],
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    return TokenInstructions.revoke(account, owner, multiSigners, programId);
  },

  setAuthority(
    account: PublicKey,
    currentAuthority: PublicKey,
    authorityType: AuthorityType,
    newAuthority: PublicKey | null,
    multiSigners: PublicKey[] = [],
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    return TokenInstructions.setAuthority(account, currentAuthority, authorityType, newAuthority, multiSigners, programId);
  },

  closeAccount(
    account: PublicKey,
    destination: PublicKey,
    owner: PublicKey,
    multiSigners: PublicKey[] = [],
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    return TokenInstructions.closeAccount(account, destination, owner, multiSigners, programId);
  },

  freezeAccount(
    account: PublicKey,
    mint: PublicKey,
    freezeAuthority: PublicKey,
    multiSigners: PublicKey[] = [],
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    return TokenInstructions.freezeAccount(account, mint, freezeAuthority, multiSigners, programId);
  },

  thawAccount(
    account: PublicKey,
    mint: PublicKey,
    freezeAuthority: PublicKey,
    multiSigners: PublicKey[] = [],
    programId: PublicKey = TOKEN_PROGRAM_ID
  ): TransactionInstruction {
    return TokenInstructions.thawAccount(account, mint, freezeAuthority, multiSigners, programId);
  },

  syncNative(account: PublicKey, programId: PublicKey = TOKEN_PROGRAM_ID): TransactionInstruction {
    return TokenInstructions.syncNative(account, programId);
  },

  async createWrappedNativeAccount(
    params: CreateWrappedNativeAccountParams
  ): Promise<CreateWrappedNativeAccountResult> {
    const {
      payer,
      owner,
      amount,
      accountKeypair,
      programId = TOKEN_PROGRAM_ID,
      rentExemptionLamports,
      queryClient
    } = params;

    const account = accountKeypair ?? Keypair.generate();
    const rentLamports = rentExemptionLamports !== undefined
      ? BigInt(rentExemptionLamports)
      : await resolveRentExemption({
          queryClient,
          fallbackLamports: RENT_EXEMPT_ACCOUNT_BALANCE,
          dataLength: ACCOUNT_SIZE
        });

    const lamports = BigInt(amount) + rentLamports;

    const instructions: TransactionInstruction[] = [
      SystemProgram.createAccount({
        fromPubkey: payer.publicKey,
        newAccountPubkey: account.publicKey,
        lamports,
        space: ACCOUNT_SIZE,
        programId
      }),
      TokenInstructions.initializeAccount(account.publicKey, NATIVE_MINT, owner, programId)
    ];

    return {
      account: account.publicKey,
      instructions,
      signers: [account],
      rentLamports
    };
  },

  parseMintData(data: Buffer): TokenMint {
    if (data.length !== MINT_SIZE) {
      throw new Error(`Invalid mint data length: expected ${MINT_SIZE}, got ${data.length}`);
    }

    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    let offset = 0;

    const mintAuthorityOption = view.getUint32(offset, true);
    offset += 4;

    let mintAuthority: PublicKey | null = null;
    if (mintAuthorityOption === 1) {
      mintAuthority = new PublicKey(data.subarray(offset, offset + 32));
    }
    offset += 32;

    const supply = view.getBigUint64(offset, true);
    offset += 8;

    const decimals = data[offset];
    offset += 1;

    const isInitialized = data[offset] === 1;
    offset += 1;

    const freezeAuthorityOption = view.getUint32(offset, true);
    offset += 4;

    let freezeAuthority: PublicKey | null = null;
    if (freezeAuthorityOption === 1) {
      freezeAuthority = new PublicKey(data.subarray(offset, offset + 32));
    }

    return {
      mintAuthority,
      supply,
      decimals,
      isInitialized,
      freezeAuthority
    };
  },

  parseAccountData(data: Buffer): TokenAccount {
    if (data.length !== ACCOUNT_SIZE) {
      throw new Error(`Invalid account data length: expected ${ACCOUNT_SIZE}, got ${data.length}`);
    }

    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    let offset = 0;

    const mint = new PublicKey(data.subarray(offset, offset + 32));
    offset += 32;

    const owner = new PublicKey(data.subarray(offset, offset + 32));
    offset += 32;

    const amount = view.getBigUint64(offset, true);
    offset += 8;

    const delegateOption = view.getUint32(offset, true);
    offset += 4;

    let delegate: PublicKey | null = null;
    if (delegateOption === 1) {
      delegate = new PublicKey(data.subarray(offset, offset + 32));
    }
    offset += 32;

    const state = data[offset] as TokenAccountState;
    offset += 1;

    const isNativeOption = view.getUint32(offset, true);
    offset += 4;

    const isNative = isNativeOption === 1;
    if (isNative) {
      offset += 8; // native amount, ignored here
    } else {
      offset += 8;
    }

    const delegatedAmount = view.getBigUint64(offset, true);
    offset += 8;

    const closeAuthorityOption = view.getUint32(offset, true);
    offset += 4;

    let closeAuthority: PublicKey | null = null;
    if (closeAuthorityOption === 1) {
      closeAuthority = new PublicKey(data.subarray(offset, offset + 32));
    }

    return {
      mint,
      owner,
      amount,
      delegate,
      state,
      isNative,
      delegatedAmount,
      closeAuthority
    };
  }
};
