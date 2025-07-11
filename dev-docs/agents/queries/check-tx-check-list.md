# Check Tx Method Refactoring Checklist

## Method: `checkTx(tx: string): Promise<CheckTxResult>`

### Phase 1: Infrastructure Setup
- [x] Analyze current method in `cosmos-query-client.ts` (lines 161-166)
- [x] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [x] Check parameter type: inline object `{ tx }`
- [x] Check response type: `CheckTxResult` in `/types/responses/`
- [x] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [x] Create response type file: `/types/responses/common/tx/check-tx-response.ts`
- [x] Define TypeScript interface for `CheckTxResponse`
- [x] Handle fields:
  - [x] `code` number (0 for success)
  - [x] `data` optional Uint8Array
  - [x] `log` optional string
  - [x] `info` optional string
  - [x] `gasWanted` optional number
  - [x] `gasUsed` optional number
  - [x] `events` optional array
  - [x] `codespace` optional string
- [x] Create codec using `createCodec()` with proper converters:
  - [x] Number conversions for code and gas fields
  - [x] Base64 to Uint8Array for data
  - [x] String conversions for log/info
  - [x] Event array handling
- [x] Implement `createCheckTxResponse()` function
- [x] Add decoder method to `ResponseDecoder` interface: `decodeCheckTx<T extends CheckTxResponse = CheckTxResponse>(response: unknown): T`
- [x] Use generics for flexibility in decoder method (see pattern in completed methods)
- [x] Implement `decodeCheckTx()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [x] Create request type file: `/types/requests/common/tx/check-tx-params.ts`
- [x] Define `CheckTxParams` interface with:
  - [x] `tx` string (base64 encoded transaction)
- [x] Create `EncodedCheckTxParams` interface (likely same structure)
- [x] Create codec for encoding (minimal changes)
- [x] Implement `encodeCheckTxParams()` function
- [x] Add encoder method to `RequestEncoder` interface: `encodeCheckTx(params: CheckTxParams): EncodedCheckTxParams`
- [x] Implement `encodeCheckTx()` in `BaseAdapter`

### Phase 4: Update Query Client
- [x] Update `checkTx()` method to use:
  - [x] Create proper `CheckTxParams` object instead of inline
  - [x] `this.protocolAdapter.encodeCheckTx(params)` instead of `encodeParams`
  - [x] `this.protocolAdapter.decodeCheckTx(result)` instead of `decodeResponse`
- [x] Update imports to use index files

### Phase 5: Testing and Validation
- [x] Run TypeScript compiler for type checking
- [x] Test with valid transaction data
- [x] Test with invalid transaction data
- [x] Verify error codes and messages are properly decoded
- [x] under networks/cosmos, in test:rpc, make sure we create some test cases based on debug scripts and pass them all.

### Phase 6: Cleanup
- [x] Remove `CHECK_TX` case from `decodeResponse` switch statement
- [x] Remove unused imports
- [x] Add JSDoc comments
- [x] Document expected transaction format

## Notes
- Used to validate transactions without broadcasting
- Transaction should be base64 encoded
- Returns validation result with gas estimation

## Improvements Made
- Successfully refactored checkTx method to use the new codec pattern
- Created proper request and response types with appropriate converters
- Fixed import issues by using @interchainjs/encoding for fromBase64
- Fixed codec usage by using .create() method instead of .decode() for encoding
- Removed duplicate implementations from version-specific adapters
- Updated cosmos-client-interfaces.ts to use CheckTxResponse type
- All TypeScript errors resolved and project builds successfully