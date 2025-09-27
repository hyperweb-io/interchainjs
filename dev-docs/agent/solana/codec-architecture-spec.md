## Solana Codec Architecture Specification

### 1) Purpose and Scope
- Establish the response codec architecture for Solana that is consistent with existing Cosmos and Ethereum patterns.
- Focus specifically on request parameter encoding and response decoding ("codec"), not signing or transaction assembly.
- Provide actionable guidance, type/interface shapes, adapter/query integration points, and a migration plan from current Solana handling.

### 2) Prior Art in This Codebase

#### 2.1 Cosmos patterns (reference)
- Declarative, table‑driven codecs:
  - BaseCodec<T> with `createCodec(config)` maps API fields to typed objects with per‑field converters.
  - Converters handle base64/hex to bytes, string numbers to number/bigint, optional fields, etc.
  - Clear separation of input types vs “Encoded*” RPC shapes; encode functions produce RPC‑ready values.
- Integration pattern:
  - Protocol adapter implements `RequestEncoder` and `ResponseDecoder` and delegates to codecs (e.g., `createAbciQueryResponse`).
  - Query client is thin: `encodeX(params)` → RPC → `decodeX(result)`.
- Examples:
  - networks/cosmos/src/types/codec/{base,converters}.ts
  - Request encoders: networks/cosmos/src/types/requests/... (e.g., BroadcastTxParamsCodec)
  - Response codecs: networks/cosmos/src/types/responses/... (e.g., AbciQueryResponseCodec)

#### 2.2 Ethereum patterns (reference)
- Functional, adapter‑centric encoding/decoding:
  - Utilities in `types/codec/converters.ts` (ensureString/Number/Boolean, hex<->number/bigint, normalizers).
  - Adapter methods build param arrays/objects and assemble typed responses directly using helpers.
- Integration pattern mirrors Cosmos (adapter mediates; query is thin), but without the declarative `BaseCodec` layer.

### 3) Recommended Solana Codec Design
Adopt Cosmos’ declarative codec approach for Solana, with Ethereum‑style utility converters where helpful.

#### 3.1 Module Structure (new)
- networks/solana/src/types/codec/
  - base.ts: copy the minimal `BaseCodec<T>` and `createCodec` pattern used by Cosmos.
  - converters.ts: Solana‑specific converters and normalizers (see 3.2).
  - index.ts: re‑exports.
- Place request/response codecs alongside their types, mirroring Cosmos:
  - networks/solana/src/types/requests/** (define typed requests + small encode helpers)
  - networks/solana/src/types/responses/** (define typed responses + codecs)

This mirrors Cosmos for consistency and discoverability, while letting simple cases remain adapter‑local if desired (like Ethereum’s `ensureString`).

#### 3.2 Converters and Normalizers (Solana)
Provide a focused set of helpers in `types/codec/converters.ts`:
- Basic guards: `ensureString`, `ensureNumber`, `ensureBoolean`.
- Base58/Base64:
  - `base58ToBytes(value: unknown): Uint8Array`
  - `maybeBase58ToBytes(value: unknown): Uint8Array | undefined`
  - `bytesToBase58(bytes: Uint8Array): string`
  - `base64ToBytes(value: unknown): Uint8Array`
  - `bytesToBase64(bytes: Uint8Array): string`
- Public key and hash normalization:
  - `normalizePubkey(pubkey: string): string` (validate base58 and length = 32 bytes)
  - `normalizeSignature(sig: string): string` (base58 validate)
- Numeric conversions:
  - `apiToBigInt(value: unknown): bigint | undefined` (for lamports)
  - `apiToNumber(value: unknown): number` (for slot, block height)

Notes:
- Solana APIs often return `data` as `[string, encoding]` tuples or `{ ... jsonParsed }`. Converters should accept tuple or string and produce either `Uint8Array` (for base64/base58) or `unknown` for JSON‑parsed with a separate typed path when appropriate.

#### 3.3 Response Codecs
Use `createCodec<T>()` to declaratively define response transformations, retaining raw strings when lossless fidelity is preferred and converting to bytes/number/bigint when safe and useful.

Examples to implement first:
- Network/version
  - Type: `VersionResponse` (already exists) can be migrated to a codec for consistency.
- Account info
  - `GetAccountInfo` → `AccountInfoResponse` with:
    - `lamports: bigint`
    - `owner: base58 string`
    - `data: Uint8Array | ParsedAccountData` (union; see below)
    - `executable: boolean`, `rentEpoch: number`
  - Codec converter for `data` handles both tuple (`[string, encoding]`) and `jsonParsed` shapes.
- Balance
  - `GetBalance` → `BalanceResponse` mapping `value` to `bigint` (lamports).
- Transaction
  - `GetTransaction` → `TransactionResponse` with fields for `slot`, `transaction` (base64 bytes), `meta` (possibly jsonParsed), signatures (base58 validation), etc.

Typed unions and jsonParsed:
- Provide two typed response variants where necessary:
  - Binary response: `...Binary` with bytes for `data`
  - Parsed response: `...Parsed` with structured types for `jsonParsed`
- Or model as discriminated union with `encoding: 'base64' | 'base58' | 'jsonParsed'` and field type determined by `encoding`.

#### 3.4 Request Encoders
Follow Cosmos’ pattern of typed vs encoded:
- Define typed request types under `types/requests/...` (already exists for base/options).
- Define encoded param arrays where Solana JSON‑RPC expects positional arrays:
  - Example: `EncodedGetAccountInfoRequest = [pubkey: string, options?: {...}]`
- Provide small helpers per method:
  - `encodeGetAccountInfo(params: GetAccountInfoRequest): EncodedGetAccountInfoRequest`
  - Normalize inputs (`normalizePubkey`, `ensureNumber`) and include options only when present.

#### 3.5 Adapter Integration
- Extend `ISolanaProtocolAdapter` (already present) to delegate encoding/decoding to codecs/helpers:
  - Request side: `encodeX` calls the per‑method encode helper.
  - Response side: `decodeX` uses a corresponding codec (e.g., `AccountInfoResponseCodec.create(result)`), or a tiny adapter function if trivial (e.g., `getHealth`).
- Keep the query client thin (already implemented):
  - `encoded = protocolAdapter.encodeX(params)` → `rpc.call(method, encoded)` → `protocolAdapter.decodeX(result)`.

#### 3.6 Type Safety Patterns
- Strongly typed requests and responses per method; separate `Encoded*` types when array/object shapes differ from typed inputs.
- For optional fields and partial responses, prefer `undefined` over nulls.
- Validate and normalize base58 pubkeys and signatures at the boundary.
- For large numeric domains (lamports), prefer `bigint` in typed outputs; preserve RPC strings where appropriate if exact representation is required, but provide helpers to convert.

### 4) Usage Examples

Basic response codec example (Version):
- Add networks/solana/src/types/codec/{base,converters}.ts
- Then implement in responses:

````ts
// networks/solana/src/types/responses/network/version-response.ts
import { createCodec, ensureString } from '../../codec';
export interface VersionResponse { 'solana-core': string; 'feature-set'?: number; }
export const VersionResponseCodec = createCodec<VersionResponse>({
  'solana-core': ensureString,
  'feature-set': (v) => v === undefined ? undefined : Number(v)
});
export function createVersionResponse(data: unknown): VersionResponse {
  return VersionResponseCodec.create(data);
}
````

AccountInfo (data tuple handling) sketch:

````ts
// networks/solana/src/types/responses/account/account-info.ts
import { createCodec, ensureBoolean, apiToBigInt, normalizePubkey, base58ToBytes, base64ToBytes } from '../../codec';
export type BinaryData = Uint8Array;
export type ParsedData = unknown; // refine per program
function decodeAccountData(v: unknown): BinaryData | ParsedData {
  if (Array.isArray(v) && typeof v[0] === 'string' && typeof v[1] === 'string') {
    const [data, enc] = v as [string, string];
    if (enc === 'base58') return base58ToBytes(data);
    if (enc === 'base64' || enc === 'base64+zstd') return base64ToBytes(data);
  }
  return v as ParsedData;
}
export const AccountInfoCodec = createCodec<any>({
  lamports: apiToBigInt,
  owner: normalizePubkey,
  data: decodeAccountData,
  executable: ensureBoolean,
  rentEpoch: (v) => Number(v)
});
````

Adapter usage in query client remains unchanged:

````ts
// networks/solana/src/query/solana-query-client.ts (pattern)
const encoded = this.protocolAdapter.encodeGetVersion({});
const result = await this.rpcClient.call(SolanaRpcMethod.GET_VERSION, encoded);
return this.protocolAdapter.decodeVersion(result);
````

### 5) Migration Plan (from current Solana handling)
- Phase 0 (baseline present): Minimal encode/decode in `adapters/base.ts` and `solana-1_18.ts`; `VersionResponse` is constructed via ad‑hoc function.
- Phase 1 (introduce codec module):
  - Add `types/codec/{base,converters,index}.ts` for Solana.
  - Convert `VersionResponse` to use `createCodec` (keep `createVersionResponse` signature).
  - Add unit tests for converters and `VersionResponseCodec`.
- Phase 2 (expand coverage):
  - Implement codecs for `getBalance`, `getAccountInfo`, `getLatestBlockhash`, `getTransaction` (binary path first), and one or two jsonParsed variants for reference.
  - Introduce `Encoded*` request arrays and encode helpers under `types/requests/...` and refactor adapter methods to delegate to them.
- Phase 3 (stabilize and document):
  - Extend codecs across the remaining high‑value methods (blocks/slots/fees).
  - Update docs and ensure query + adapter tests are green.

Notes:
- Maintain non‑breaking adapter/query method signatures.
- Prefer gradual delegation to codecs to keep PRs small and testable.

### 6) Consistency & Conventions
- File placement and naming mirrors Cosmos (requests/encoded vs responses/codec).
- Keep Ethereum‑style simple validators for adapter‑local sanity checks where a full codec is overkill.
- Use `create*Response` functions to construct typed outputs, consistent with Cosmos patterns.
- Export `types/codec/index.ts` to re‑export base and converters for easy local imports.

### 7) Implementation Checklist
- [ ] Create `networks/solana/src/types/codec/{base.ts,converters.ts,index.ts}`
- [ ] Port `VersionResponse` to a codec + tests
- [ ] Add converters for base58/base64/pubkey/signature
- [ ] Introduce `Encoded*` request shapes and encode helpers for 3–5 core methods
- [ ] Refactor adapter decodeX/encodeX to delegate to codecs/helpers
- [ ] Extend coverage to transactions/blocks; add jsonParsed handling patterns
- [ ] Document any Solana‑specific edge cases (e.g., zstd, parsed program layouts)

### 8) Appendix: Examples from existing networks
- Cosmos `BaseCodec` and converters: networks/cosmos/src/types/codec
- Cosmos query/adapter delegation: networks/cosmos/src/query/cosmos-query-client.ts, networks/cosmos/src/adapters/*
- Ethereum converters and adapter: networks/ethereum/src/types/codec/converters.ts, networks/ethereum/src/adapters/ethereum-adapter.ts

