# Solana WebSocket Event Client Refactor Spec

## Goals
- Deliver a first-class Solana event client that matches the ergonomics of `CosmosEventClient` (`networks/cosmos/src/event/cosmos-event-client.ts`) while honouring Solana-specific subscription flows preserved in the legacy `WebSocketConnection` (`networks/solana/srcbak/websocket-connection.ts.bak`).
- Reuse shared transport primitives (`WebSocketRpcClient` in `packages/utils/src/clients/websocket-client.ts`) so Solana receives the same reconnection, timeout, and error handling guarantees as Cosmos.
- Provide typed, granular subscription helpers (accounts, programs, logs, slots/signatures) that integrate with the refactored solana adapters/types surfaces under `networks/solana/src`.
- Update Solana factory/exports so consumers can instantiate query + event clients in parallel, mirroring the Cosmos client factory API.

## Reference Implementations

### Cosmos Event Client (`networks/cosmos/src/event/cosmos-event-client.ts`)
- Implements `IEventClient` on top of an injected `IRpcClient`, relying on `subscribe`/`call` primitives only—no transport-specific logic leaks in.
- Tracks active subscriptions and guards against duplicates via a composite key (`eventType + filter`).
- Expresses subscriptions as async generators, providing idiomatic `for await` streaming while transparently decoding payloads.
- Delegates unsubscribe semantics to the RPC layer (`RpcMethod.UNSUBSCRIBE_ALL`), letting the shared WebSocket client own message correlation.

### Legacy Solana WebSocketConnection (`networks/solana/srcbak/websocket-connection.ts.bak`)
- Wraps the `ws` package directly, handling connection lifecycle, reconnection backoff, and listener plumbing itself.
- Exposes coarse helpers (`subscribeToAccount`, `subscribeToProgram`, `subscribeToLogs`) that return numeric subscription IDs and accept callbacks.
- Manages a `Map<number, SubscriptionCallback>` keyed by the Solana-assigned subscription id, manually dispatching on JSON-RPC `accountNotification`, `logsNotification`, and `programNotification` messages.
- Includes stubbed reconnection recovery (`reestablishSubscriptions`) and explicit unsubscribe helpers for each subscription kind.

## Gaps in Current Refactor
- No `ISolanaEventClient` interface or implementation exists; `Solana118Adapter` advertises `subscriptions: true` without concrete support.
- `WebSocketRpcClient.subscribe` provides async iteration but lacks Solana-orientated helpers (e.g. automatic unsubscribe call mapping, reconnection replay, typed payloads).
- Legacy notification type definitions (`AccountNotification`, `ProgramNotification`, `LogsNotification` in `networks/solana/srcbak/types.ts.bak`) were not ported into the new `networks/solana/src/types` tree.
- `SolanaClientFactory` only returns an HTTP query client; there is no parity API with Cosmos' `createEventClient`/`createClients` helpers.

## Design Requirements
1. **Interface Parity**: Introduce `ISolanaEventClient extends IEventClient` under `networks/solana/src/types`, exposing high-level async generators (`subscribeToAccount`, `subscribeToProgram`, `subscribeToLogs`, plus slot/signature streams as needed).
2. **Transport Reuse**: Depend exclusively on `IRpcClient`—defaulting to `WebSocketRpcClient`—so the event client remains framework-agnostic and benefits from shared improvements.
3. **Typed Notifications**: Define response contracts for account/program/log notifications (and any additional Solana channels) under `networks/solana/src/types/responses/events/**`, reusing existing codec utilities where possible.
4. **Subscription Book-keeping**: Track subscriptions by a composite key (e.g. `method + JSON.stringify(params)`), store the Solana-issued subscription id, and enforce single active subscription per key (match Cosmos guardrail).
5. **Unsubscribe Discipline**: Provide both targeted unsubscribe helpers and an `unsubscribeFromAll` implementation that iterates known subscriptions, invoking the appropriate `*_Unsubscribe` RPC method before clearing state.
6. **Resilience**: Detect dropped connections (via `IRpcClient.isConnected()` or new callbacks) and attempt to resubscribe using cached metadata. Honour configurable retry/backoff provided by `WebSocketRpcClient` once its reconnection TODO is addressed.
7. **Factory Integration**: Extend `SolanaClientFactory` with `createEventClient`, `createClients`, and possibly `createUnifiedClient` so downstream usage mirrors Cosmos patterns.
8. **Documentation & Samples**: Update Solana dev docs to show unified query + event usage and delineate environment caveats (Node vs browser WebSocket availability).

## Proposed Architecture

### Core Abstractions
- `SolanaEventClient` lives in `networks/solana/src/event/solana-event-client.ts`, implements `ISolanaEventClient`, and mirrors `CosmosEventClient` structure (constructor accepts `IRpcClient`).
- Shared subscription metadata stored in `Map<string, { subscriptionId: number | string; unsubscribeMethod: string; params: unknown }>` to support unsubscription and replay.
- Async generator helpers wrap a generic `subscribe(method, params, decodeFn)` utility that drives the RPC subscription and yields typed payloads.

### Subscription Methods
- **Accounts**: `subscribeToAccount(publicKey: string, options?)` → yields `AccountNotification` (ported type) with decoded account info (leveraging existing account codec).
- **Programs**: `subscribeToProgram(programId: string, options?)` → yields decoded account + pubkey context.
- **Logs**: `subscribeToLogs(filter, options?)` → yields `LogsNotification` maintaining signature/err/log arrays.
- **Optional Streams**: Provide wrappers for `slotSubscribe`, `rootSubscribe`, `signatureSubscribe`, aligning with Solana RPC spec to future-proof the surface.

### Decoding & Types
- Reintroduce notification types under `networks/solana/src/types/responses/events`, referencing shared models (`AccountInfoRpcResponse`, etc.).
- Consider adapter-aware decoding: when responses include `base64` data, reuse existing codecs to surface structured account info before yielding.

### Reconnection Strategy
- Leverage `WebSocketRpcClient`'s reconnect options (needs TODO follow-up). Until automatic reconnection lands, expose manual `resubscribe()` helper that can be called by factory or consumer once `IRpcClient.connect()` resolves again.
- When reconnecting, iterate cached subscriptions, invoke `subscribe` with original params, and swap stored `subscriptionId` values to the fresh ones.

### Factory Wiring & Exports
- Add `SolanaClientFactory.createEventClient` and `SolanaClientFactory.createClients` (HTTP + WS endpoints) akin to Cosmos factory. Ensure `index.ts` exports these helpers.
- Provide convenience functions (`createSolanaEventClient`, `createSolanaClients`) for parity.

### Telemetry & Error Handling
- Throw `SubscriptionError` (from `@interchainjs/types`) when duplicate subscriptions are attempted, when the transport is disconnected, or when unsubscribe calls fail.
- Bubble underlying RPC errors while enriching context (method, params).

## Implementation Plan
1. **Types & Interfaces**
   - Add `ISolanaEventClient` definition, event response types, and enums for subscription methods/unsubscribe counterparts under `networks/solana/src/types`.
2. **Event Client Module**
   - Implement `SolanaEventClient` with generic subscription utility, typed helpers, and comprehensive unsubscribe logic.
3. **Transport Enhancements (if required)**
   - Validate `WebSocketRpcClient.subscribe` supports Solana notification IDs; adjust to store the server-issued subscription id (result field) if necessary.
   - Ensure reconnection hooks (or document limitations) before wiring automatic replay.
4. **Factory & Exports**
   - Extend `SolanaClientFactory` and `networks/solana/src/index.ts` to expose event client constructors, mirroring Cosmos names.
5. **Legacy Cleanup**
   - Reference `solana-refactor-mapping.md` to mark `websocket-connection.ts.bak` as replaced once implementation lands.
6. **Docs & Examples**
   - Add usage snippet to `dev-docs/agent/solana` (or public docs) showing query + event subscription lifecycle.

## Testing & Validation
- Unit tests for `SolanaEventClient` covering:
  - Duplicate subscription guard.
  - Successful account/program/log subscription yields decoded payloads when fed mocked WebSocket events.
  - Unsubscribe per-channel and `unsubscribeFromAll` paths invoke correct RPC methods.
  - Re-subscription metadata updates after mocked reconnect.
- Integration test (optional) invoking a live devnet via mocked WebSocket transport (use dependency injection to avoid network flakiness).
- Smoke test within workflow to ensure `SolanaClientFactory.createClients` returns connected query + event clients.

## Open Questions & Follow-Ups
- Should reconnection be solved inside `WebSocketRpcClient` (shared) before layering Solana-specific replay logic? If so, schedule a shared utils task.
- Do we expose lower-level `subscribe(method, params)` for advanced consumers, or keep surface limited to typed helpers?
- How should we surface commitment configuration defaults? Legacy code defaulted to `finalized`; document or parameterise this in helpers.
- Consider batching subscription setup alongside query client creation so consumers can opt into a single WebSocket endpoint (unified client mode) once reconnection is robust.
