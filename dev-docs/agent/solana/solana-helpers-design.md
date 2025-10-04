# Solana Helper Modules Design

## Goals
- Keep `SolanaSigner` (`networks/solana/src/signers/solana-signer.ts`) focused on signing and broadcasting while making it easy for callers to compose higher-level actions (transfers, SPL flows) via reusable helpers.
- Bring forward the practical utilities from `networks/solana/srcbak` without re-embedding imperative clients. Helpers should primarily build `TransactionInstruction`s, typed payloads, or deterministic addresses that the workflow layer can consume.
- Co-locate convenience types that are not already represented in `networks/solana/src/types/**` but are still required for helper ergonomics (e.g., SPL account models).

## Reference Sources
- Legacy helper implementations in `networks/solana/srcbak` (e.g., `system-program.ts.bak`, `token-program.ts.bak`, `associated-token-account.ts.bak`, `token-instructions.ts.bak`, `token-types.ts.bak`, `token-math.ts.bak`).
- Refactor overview in `dev-docs/agent/solana/solana-refactor-mapping.md`, especially the "Outstanding Legacy Coverage" section calling out missing helper surfaces.

## Folder Layout
Create a dedicated helper namespace under `networks/solana/src/helpers` with the following structure:

```
helpers/
  index.ts
  conversions/
    lamports.ts
  programs/
    system-program.ts
    token-program.ts
  token/
    constants.ts
    instructions.ts
    associated-token-account.ts
    math.ts
    types.ts
  transactions/
    transfer.ts
    mint.ts
    close-account.ts
```

- `index.ts` re-exports stable helper surfaces so consumers can import from `@interchainjs/solana/helpers` while tree-shaking unused modules.
- Keep modules pure and side-effect free; any network reads should go through injected `ISolanaQueryClient` instances rather than local `fetch` calls.

## Module Responsibilities

### conversions/lamports.ts
- Port `lamportsToSol`, `solToLamports`, `solToLamportsBigInt`, `lamportsToSolString`, `isValidLamports`, `isValidSol` from `srcbak/utils.ts.bak`.
- Expose helper guard rails (max values, precision) via constants so workflows can validate inputs before building transactions.

### programs/system-program.ts
- Wrap `SystemProgram.transfer` and `SystemProgram.createAccount` factories from `srcbak/system-program.ts.bak`.
- Return typed `TransactionInstruction`s based on `PublicKey` from `networks/solana/src/types/solana-types.ts`.
- All helpers should be sync and purely deterministic.

### programs/token-program.ts
- Re-create the higher-level orchestration functions from `srcbak/token-program.ts.bak` but refactored to:
  - Accept an `ISolanaQueryClient` (or a narrow interface) when an RPC read is required (`getAccountInfo` checks, account existence tests).
  - Return `Promise<{ instructions: TransactionInstruction[]; signers?: Keypair[]; metadata?: ... }>` so the caller can plug the instructions directly into the workflow builder.
- Decompose internal instruction creation into the shared `token/instructions.ts` module to prevent duplication.

### token/constants.ts
- Copy SPL program IDs, instruction enums, rent exempt balances, and account sizing constants from `srcbak/token-constants.ts.bak`.
- Export them as frozen objects to avoid accidental mutation.

### token/instructions.ts
- Port the instruction builders (`initializeMint`, `transfer`, `mintTo`, `burn`, etc.) from `srcbak/token-instructions.ts.bak`.
- Ensure every helper returns a vanilla `TransactionInstruction` relying on constants from `token/constants.ts`.
- Keep the functions as pure builders; any validation should rely on helpers in `token/math.ts` or `conversions/lamports.ts`.

### token/associated-token-account.ts
- Port `findAssociatedTokenAddress` and the instruction builders (`createAssociatedTokenAccountInstruction`, `createIdempotentAssociatedTokenAccountInstruction`).
- Surface additional helpers for synchronous PDA derivation (no RPC) and optional wrappers that fetch account info when a query client is provided.

### token/math.ts
- Extend `@interchainjs/math` with Solana-specific decimal bounds (`MAX_DECIMALS`) as in `srcbak/token-math.ts.bak`.
- Provide deterministic helpers (`uiAmountToRaw`, `rawToUiAmount`, `calculateFeeImpact`) that complement lamport conversions.

### token/types.ts
- Reintroduce domain models (`TokenMint`, `TokenAccount`, `TokenBalance`, etc.) that were dropped in the refactor but remain useful for helper return types.
- Define helper-centric parameter types (e.g., `TransferParams`, `MintToParams`) and re-export them so both instruction builders and higher-level helpers stay in sync.
- Avoid duplicating RPC wire types covered by `networks/solana/src/types/responses/**`; focus on runtime models or workflow parameters.

### transactions/*.ts
- Provide ergonomic wrappers that compose lower-level helpers into transaction-ready bundles:
  - `transfer.ts` → builds SPL transfer / transferChecked instructions (optionally deriving ATAs) and returns a `SolanaSignArgs` payload ready for `SolanaSigner.signAndBroadcast`.
  - `mint.ts` → covers mint creation or mint-to flows using `token-program` helpers.
  - `close-account.ts` → standard close account sequence.
- Each helper should return either `SolanaSignArgs` or `{ instructions, partialSigners, metadata }` so consumers can decide whether to go through the workflow builder or craft custom flows.

## Types & Integration Contracts
- Shared helper input/output types should live alongside the helpers (e.g., `token/types.ts`) and re-export through `helpers/index.ts`.
- For values that overlap with existing RPC codecs (e.g., `TokenAccountBalanceResponse`), prefer referencing the concrete types in `networks/solana/src/types/responses` rather than redefining them.
- When helpers need to poll the network (e.g., to check ATA existence), pass an `ISolanaQueryClient` from `networks/solana/src/types/solana-client-interfaces.ts` instead of storing the client globally. This keeps helpers testable and aligns with the workflow builder’s dependency injection.

## Example Flow
1. Caller requests a token transfer:
   - Use `helpers/token/associated-token-account.ts` to derive sender/recipient ATAs.
   - Call `helpers/transactions/transfer.buildSplTransfer()` to produce `SolanaSignArgs`.
   - Pass the args to `SolanaSigner.signAndBroadcast`, which keeps signing/broadcast logic centralised.
2. Helper modules never broadcast; they only construct deterministic data for the signer/workflow stack.

## Implementation Notes
- Maintain TypeScript docstrings explaining assumptions (e.g., instruction discriminators, rent values) since these helpers are the main consumer-facing surface.
- Provide focused unit tests under `networks/solana/src/helpers/__tests__` mirroring the pattern already used in adapters/types.
- When reintroducing complex helpers (e.g., `TokenProgram.createMint`), prefer returning both the instructions and any keypairs that need to be partially signed so workflows can attach signatures without hidden side effects.

## Next Steps
1. Scaffold `networks/solana/src/helpers/index.ts` and stub modules per layout above.
2. Port pure builders (`token/constants.ts`, `token/instructions.ts`, `programs/system-program.ts`) first to unblock workflows.
3. Layer higher-order helpers (`programs/token-program.ts`, `transactions/*.ts`) once foundational pieces are in place.
