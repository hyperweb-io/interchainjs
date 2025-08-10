## Workflow and Plugin Implementation: Specification, Analysis, and Guidelines

This document specifies how to implement signing workflows and plugins for blockchain networks in InterchainJS, compares Cosmos (good patterns) vs. Ethereum (areas to improve), and provides step‑by‑step guidance for implementing new networks. It complements (and does not duplicate) the architectural guide in docs/advanced/workflow-builder-and-plugins.md.

### Scope
- What this covers: Network-specific workflow builders, plugin contracts, staging data conventions, and practical patterns/anti‑patterns.
- What to read first: docs/advanced/workflow-builder-and-plugins.md (core architecture, base classes, generics, dependency handling, and examples).

---

## 1) Workflow and Plugin Specification

Follow these standardized patterns for all networks:

- Builder responsibilities
  - Compose named workflows from ordered plugins
  - Select the workflow via protected selectWorkflow() based on signing mode, transaction type, options, or context
  - Own a network‑specific Context type that implements IWorkflowBuilderContext and exposes helper(s) to access a typed signer

- Plugin responsibilities (single responsibility per plugin)
  - Declare dependency keys via constants imported from other plugins
  - Optionally accept plugin options (typed; avoid any)
  - Read only its declared dependencies; write only its outputs to staging via exported constants
  - Do one thing: input validation, message/transaction encoding, signer/account info, fee/gas, sign doc/preimage, signature, final assembly, etc.

- Staging data conventions
  - Always export and import SCREAMING_SNAKE_CASE key constants
  - Never use string literals for keys
  - Prefer using BaseWorkflowBuilderPlugin.retrieveParams() to build typed params for onBuild; avoid reaching into ctx for the same data again

- Type safety
  - Do not use any; use network‑specific types and Partial<T> where appropriate
  - Do not call methods on the signer via as any; add methods to the signer interface, or use a query client provided via options/context

- Separation of concerns
  - Distinguish orchestration (builder) from business logic (plugins)
  - Keep network querying (chainId, sequence/nonce, account info) in a clearly scoped plugin (e.g., SignerInfo) rather than burying it in unrelated plugins

---

## 2) Best Practices (Cosmos as reference)

Cosmos follows a clean, layered workflow with explicit plugins and strong typing. Highlights:

- Clear workflow composition
  - Separate workflows for direct vs. amino, each with well‑named, single‑purpose plugins.
  - Example (excerpt):
    <augment_code_snippet path="networks/cosmos/src/workflows/cosmos-workflow-builder.ts" mode="EXCERPT">
````ts
return {
  direct: [
    new InputValidationPlugin(signArgs),
    new MessageEncodingPlugin(),
    new SignerInfoPlugin(SignMode.SIGN_MODE_DIRECT),
    new FeeCalculationPlugin(),
  ],
};
````
    </augment_code_snippet>

- Proper abstraction layers
  - CosmosWorkflowBuilderContext exposes a typed getSigner() that throws if unset, avoiding unsafe casts.
    <augment_code_snippet path="networks/cosmos/src/workflows/context.ts" mode="EXCERPT">
````ts
getSigner(): ICosmosSigner {
  if (!this.signer) throw new Error('Cosmos signer not set');
  return this.signer;
}
````
    </augment_code_snippet>

- Single‑purpose plugins with explicit dependencies and outputs
  - InputValidation: validates messages/fee, stages normalized inputs
  - MessageEncoding: encodes messages and stages body bytes
  - SignerInfo: obtains sequence/account number, stages signer info
  - Signature (Direct/Amino): produces signature; TxRawAssembly: produces final TxRaw and sets final result

- Consistent use of key constants and staging
  - Plugins import dependency keys from other plugins and write only their own outputs via exported constants.
  - Example (excerpt):
    <augment_code_snippet path="networks/cosmos/src/workflows/plugins/tx-raw-assembly.ts" mode="EXCERPT">
````ts
super([
  MESSAGE_ENCODING_STAGING_KEYS.TX_BODY_BYTES,
  AUTH_INFO_STAGING_KEYS.AUTH_INFO_BYTES,
  DIRECT_SIGNATURE_STAGING_KEYS.SIGNATURE,
]);
````
    </augment_code_snippet>

- Options and signer lookups are typed
  - Cosmos plugins refer to signer/query methods that are part of the ICosmosSigner contract (no as any).
  - Example (excerpt):
    <augment_code_snippet path="networks/cosmos/src/workflows/plugins/amino-sign-doc.ts" mode="EXCERPT">
````ts
const chainId = options?.chainId ?? await ctx.getSigner().getChainId();
const accountNumber = options?.accountNumber ??
  await ctx.getSigner().getAccountNumber(address);
````
    </augment_code_snippet>

Why this works well
- Predictable data flow via staging keys
- Strong interfaces reduce runtime errors
- Each plugin is easy to test and reuse
- Adding new workflows (e.g., multisig) is a builder concern, not a plugin rewrite

---

## 3) Anti‑patterns (observed in Ethereum) and Improvements

Observed issues to avoid in future implementations. Each item includes a suggested fix.

1) Calling signer methods via as any
- Problem: Methods like getChainId()/getNonce() are called on signer using as any, which breaks type safety and contracts.
  <augment_code_snippet path="networks/ethereum/src/workflows/plugins/transaction-building.ts" mode="EXCERPT">
````ts
const chainId = options?.chainId || await (signer as any).getChainId();
const nonce = tx.nonce ? parseInt(tx.nonce, 16) : await (signer as any).getNonce(addr);
````
  </augment_code_snippet>
- Why problematic: Violates the IEthereumSigner interface; brittle and untestable
- Improve by either:
  - Extending IEthereumSigner to include required queries (getChainId, getNonce), or
  - Passing a typed IEthereumQueryClient via signer options/context and calling it here
  - Alternatively, stage chainId/nonce in a dedicated SignerInfo plugin

2) Loosely typed options (any)
- Problem: Input validation stages options as any and later casts it, losing type safety.
  <augment_code_snippet path="networks/ethereum/src/workflows/plugins/input-validation.ts" mode="EXCERPT">
````ts
export interface InputValidationParams { transaction: TransactionParams; options?: any; }
ctx.setStagingData(INPUT_VALIDATION_STAGING_KEYS.OPTIONS, options);
````
  </augment_code_snippet>
- Improve by:
  - Using Partial<TransactionOptions> in types and staging
  - Validating/normalizing option fields (e.g., chainId, fee settings) before staging

3) Mixing unrelated responsibilities
- Observation: TransactionBuildingPlugin both derives unsigned RLP components and queries account/chain info. This couples network queries with encoding.
- Improve by:
  - Introducing SignerInfoPlugin (paralleling Cosmos) to stage chainId, nonce, and selected account, then consume these in TransactionBuildingPlugin

4) Under‑utilizing BaseWorkflowBuilderPlugin.retrieveParams()
- Observation: Plugins often read from ctx.getStagingData inside onBuild instead of using the typed params passed to onBuild.
- Why sub‑optimal: Duplicates dependency knowledge, makes testing harder, and bypasses the framework’s typed dependency resolution
- Improve by:
  - Leaning on retrieveParams() to construct typed params and then using params in onBuild

5) Hex handling robustness (potential pitfall)
- Observation: hexToBytes is called on fields that may include a 0x prefix (e.g., to, data). Different libraries vary on whether 0x is accepted.
- Improve by:
  - Normalizing hex inputs through a small helper that strips 0x and validates even‑length; add unit tests

6) V handling type divergence
- Observation: v is stored as number | Uint8Array to cover legacy and EIP‑1559 flows.
- Improve by:
  - Encapsulating v/y‑parity handling within the Signature plugin behind a stable output type, so assembly can rely on a single shape

None of the above undermines the overall structure (which follows the same builder/plugin pattern). Addressing them will bring Ethereum to the same standard as Cosmos.

7) Branching inside plugins by variant/sign mode
- Observation: TxAssemblyPlugin contains branching on transaction type (legacy vs. EIP‑1559). This mixes two variants into one plugin.
- Improve by:
  - Splitting into variant‑specific plugins (e.g., LegacyTxAssemblyPlugin and EIP1559TxAssemblyPlugin)
  - Selecting the appropriate plugin at the workflow level (like Cosmos uses separate DirectSignature/AminoSignature plugins)
  - This improves readability, testability, and reduces accidental cross‑variant coupling

- Variant branching in transaction-building
  - Observation: TransactionBuilding logic differed for legacy vs. EIP‑1559 and initially mixed with network queries.
  - Improve by:
    - Splitting TransactionBuilding into LegacyTransactionBuildingPlugin and Eip1559TransactionBuildingPlugin
    - Selecting the appropriate plugin at the workflow level (mirrors Cosmos’ split for Direct/Amino)
    - Keeping all chainId/nonce/account lookups inside a dedicated SignerInfoPlugin

---

## 4) Implementation Guidelines for New Networks (for AI agents and developers)

Step‑by‑step approach

1) Model the signing variants
   - Enumerate signing modes (e.g., direct vs. amino, legacy vs. EIP‑1559)
   - Decide how the builder’s selectWorkflow() will choose among them (config, args, auto‑detect)

2) Define types and interfaces
   - SignArgs/Options types (use Partial where optional)
   - Signer interface additions (e.g., getChainId, getSequence/nonce), or provide typed query clients in context
   - Staging key constants per plugin
3) Design plugins (single responsibility)
   - InputValidation: normalize/validate inputs; stage normalized args and options
   - Message/Tx Encoding: encode messages or transaction preimage
   - SignerInfo: fetch account/chain data; stage account address, pubkey, chainId, sequence/nonce
   - Fee/Gas: compute or validate fees; stage fee info
   - SignDoc/Preimage: construct canonical bytes for signing
   - Signature: produce network‑specific signature and stage it in a single, stable type
   - Final Assembly: produce final Tx object/bytes, set ctx.setFinalResult()
4) Wire the builder
   - Create workflows as ordered plugin arrays per signing mode/variant
   - Use a network‑specific Context exposing a typed getSigner()
   - Keep selectWorkflow() small and deterministic
5) Type safety and dependencies
   - No any; type options and params
   - Use exported constants for all staging keys
   - Prefer retrieveParams() to pass typed params into onBuild
6) Testing strategy
   - Unit test each plugin in isolation with a mocked Context/signer
   - Include tests for edge cases: empty/invalid inputs, large values, hex normalization, v/y‑parity, multiple workflows
   - Smoke test a full builder workflow per signing variant (build() returns a final result; verify key staging keys along the way)

Common pitfalls to avoid

- Calling signer/query methods that aren’t in the interface (avoid as any)
- Conflating multiple responsibilities in one plugin
- Using string literals for staging keys
- Skipping normalization of hex strings and BigInt conversions
- Not setting the final result (ctx.setFinalResult)

---

## 5) Relationship to Advanced Architecture Docs

- This document builds on docs/advanced/workflow-builder-and-plugins.md and focuses on network‑specific implementation quality.
- Use the advanced doc for:
  - Base class behavior and generic typing
  - Dependency resolution and retrieveParams()
  - Naming, file structure, and full examples
- Use this document for:
  - What a high‑quality network implementation looks like (Cosmos)
  - What to avoid and how to improve (Ethereum anti‑patterns)
  - A prescriptive checklist when adding new networks

---

## Quick Reference: What “Good” Looks Like

- Builder: small, typed selectWorkflow(), clear workflows per variant
- Context: network‑specific, exposes typed getSigner()
- Plugins: focused, typed, constants for keys, use retrieveParams(), no any
- Data flow: dependencies in, outputs out; final assembly sets final result
- Tests: unit tests per plugin + smoke tests per workflow
