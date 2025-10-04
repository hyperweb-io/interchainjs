# Solana Refactor Mapping

## Purpose
- Capture how the refactored Solana adapter in `networks/solana/src` replaces (or omits) pieces of the original implementation preserved under `networks/solana/srcbak`.
- Highlight the runtime relationships between the new classes so future work can plug into the refactor without reverse engineering the diff.
- Call out the legacy surfaces that have not yet been reimplemented so follow-up tasks are easy to prioritize.

## High-Level Structure After the Refactor
- **Protocol adapters (`src/adapters`)** centralise request encoding/response decoding per Solana release. `BaseSolanaAdapter` (`networks/solana/src/adapters/base.ts`) implements the bulk of the codec logic, while version-specific classes such as `Solana118Adapter` (`networks/solana/src/adapters/solana-1_18.ts`) advertise supported RPC methods and capabilities.
- **Query layer (`src/query`)** wraps a shared `IRpcClient` and delegates all JSON-RPC shape handling to the adapter. `SolanaQueryClient` (`networks/solana/src/query/solana-query-client.ts`) exposes a wide surface area of RPC helpers and handles transaction submission helpers like `sendTransactionBase64`.
- **Client construction (`src/client-factory.ts`)** provides `SolanaClientFactory` and `createSolanaQueryClient`, wiring shared infrastructure (`HttpRpcClient`) and adapter selection, including protocol auto-detection.
- **Signing and workflows (`src/signers`, `src/workflows`)** move transaction assembly and signing into a plugin-driven workflow. `BaseSolanaSigner` (`networks/solana/src/signers/base-signer.ts`) abstracts over `Keypair` and `IWallet`, and `SolanaStdWorkflow` plus the `SolanaWorkflowBuilder` pipeline (`networks/solana/src/workflows`) replicate what the old `SolanaSigningClient` and related helpers performed imperatively.
- **Typed data (`src/types`)** is decomposed into protocol enums, request/response definitions, and reusable codecs. `types/solana-types.ts` keeps raw key/transaction primitives, while `types/codec` and `types/responses/**` hold the strongly-typed data builders that `BaseSolanaAdapter` consumes.
- **Utilities (`src/utils.ts`)** were pared back to just serialization helpers that the transaction builder depends on; broader constants remain absent pending re-port.

## Legacy → Refactored Module Map
| Legacy module (`srcbak`) | Refactor status | Primary replacements / notes |
| --- | --- | --- |
| `associated-token-account.ts.bak` | Not yet refactored | Dedicated ATA helpers have no equivalent; `src/token/` is currently empty. |
| `connection.ts.bak` | Replaced | Superseded by `SolanaQueryClient` (`networks/solana/src/query/solana-query-client.ts`), `BaseSolanaAdapter` (`networks/solana/src/adapters/base.ts`), and factory wiring (`networks/solana/src/client-factory.ts`). Direct `fetch` logic was removed in favour of the shared `HttpRpcClient`. |
| `index.ts.bak` | Replaced | New barrel (`networks/solana/src/index.ts`) re-exports adapters, query client, workflows, signers, `transaction`, `keypair`, and utilities. Legacy exports (token helpers, system program, websocket, Phantom) are intentionally absent. |
| `keypair.ts.bak` | Carried forward | Logic now lives in `networks/solana/src/keypair.ts`; only import targets changed to `types/solana-types`. |
| `phantom-client.ts.bak` | Not yet refactored | No Phantom-specific client exists. The new signer stack expects an `IWallet` implementation but does not bundle Phantom wiring. |
| `phantom-signer.ts.bak` | Not yet refactored | Browser provider detection and `signAndSendTransaction` bridges were dropped. Consider reintroducing as a thin `IWallet` adapter if required. |
| `signer.ts.bak` | Replaced | Responsibilities split across `BaseSolanaSigner` (`networks/solana/src/signers/base-signer.ts`), `SolanaSigner` (`networks/solana/src/signers/solana-signer.ts`), and shared interfaces in `networks/solana/src/signers/types.ts`. Direct/Offline signer distinctions are handled by supporting both `Keypair` and `IWallet`. |
| `signing-client.ts.bak` | Replaced | The old imperative client maps to the signer + workflow stack (`networks/solana/src/signers/solana-signer.ts`, `networks/solana/src/workflows/**`) working in tandem with `SolanaQueryClient`. Broadcast confirmation is now in `BaseSolanaSigner.waitForTransaction`. |
| `system-program.ts.bak` | Not yet refactored | No `SystemProgram` helper exists; workflows currently expect instructions to be prebuilt by callers. |
| `token-constants.ts.bak` | Not yet refactored | Program IDs, rent constants, and lamport helpers were dropped; no replacement in `src/utils.ts`. |
| `token-instructions.ts.bak` | Not yet refactored | SPL token instruction builders are missing; callers must supply raw instructions. |
| `token-math.ts.bak` | Not yet refactored | `TokenMath` and supporting calculations have not been reintroduced. |
| `token-program.ts.bak` | Not yet refactored | No new `TokenProgram` wrapper. Token RPC coverage exists only via typed responses. |
| `token-types.ts.bak` | Partially replaced | Basic RPC-facing types moved into `types/responses/token/*` and `types/solana-types.ts`, but complex domain models (`TokenMint`, `TokenAccount`, `Multisig`) are absent. |
| `transaction.ts.bak` | Carried forward | Ported into `networks/solana/src/transaction.ts` with the same serialization logic and updated imports. |
| `types.ts.bak` | Replaced | Decomposed into `types/solana-types.ts`, `types/requests/**`, `types/responses/**`, and `types/codec`. WebSocket notification types were not migrated. |
| `utils.ts.bak` | Partially replaced | Serialization helpers (`encodeSolanaCompactLength`, `concatUint8Arrays`, byte/string utilities) remain in `networks/solana/src/utils.ts`. Network constants, rent utilities, and address helpers were dropped. |
| `websocket-connection.ts.bak` | Not yet refactored | No subscription/websocket client exists; `Solana118Adapter` advertises subscription capability without a concrete transport. |

## Relationships Between Refactored Classes
- **Client creation:** `SolanaClientFactory` (`networks/solana/src/client-factory.ts`) instantiates `HttpRpcClient` and resolves the correct `ISolanaProtocolAdapter` via `createSolanaAdapter`. The resulting pair is injected into `SolanaQueryClient`.
- **Query → Adapter coupling:** Every query method in `SolanaQueryClient` delegates parameter encoding and response decoding to the injected adapter (`BaseSolanaAdapter` subclasses). This cleanly separates transport from protocol-specific data massaging.
- **Signer workflow:** `SolanaSigner` wraps `BaseSolanaSigner` behaviour, forwarding sign requests to `SolanaStdWorkflow`. The workflow builder (`networks/solana/src/workflows/solana-workflow-builder.ts`) chains plugins for validation, transaction assembly, signing, and result packaging.
- **Transaction assembly:** `TransactionBuildingPlugin` pulls account metadata through whatever signer was supplied (`Keypair` or `IWallet`), mirroring how `SolanaSigningClient` previously set fee payer and blockhash via `Connection` helpers.
- **Broadcast & confirmation:** `BaseSolanaSigner.broadcast` and `waitForTransaction` reuse the query client to submit base64 transactions and poll `getSignatureStatuses`, replacing the old `Connection.sendTransaction` + `confirmTransaction` loop.

## Outstanding Legacy Coverage
- SPL token helpers (ATA derivation, program/instruction builders, math utilities).
- System program convenience wrappers and lamport/SOL calculators.
- Phantom wallet integration and browser-provider ergonomics.
- WebSocket subscription management for account/program/log listeners.
- Rent/program constants and validation helpers removed from `utils.ts.bak`.

## Suggested Follow-Ups
1. Reintroduce essential convenience APIs (SystemProgram, token builders, lamport conversions) either as lightweight wrappers or separate utility modules so consumers are not forced to rebuild them.
2. Deliver a concrete subscription client (WebSocket or HTTP streaming) to match the capabilities declared in `Solana118Adapter`.
3. Provide a Phantom (and more general wallet) adapter that implements `IWallet` so browser integrations remain turn-key.
4. Backfill typed models for token mint/account structures if higher-level workflows or tests rely on them.
