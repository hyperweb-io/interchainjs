# Solana Refactor Work Items

## Context

The Solana adapter refactor migrated most functionality from `networks/solana/srcbak` into the new modular structure under `networks/solana/src`. Several utility layers were intentionally left behind or only partially moved. The list below captures the outstanding gaps that should be addressed to reach feature parity and improve developer ergonomics.

## Work Items

1. **Token program convenience wrappers**
[done]
   - Re‑introduce high-level helpers for `setAuthority`, `closeAccount`, `syncNative`, and other missing wrappers that existed in `TokenProgram` but were not ported.
   - Ensure they simply delegate to the existing builders in `helpers/token/instructions.ts`.
   - Add unit coverage mirroring the legacy behaviours.

2. **Rent and address utilities**
[done]
   - Added `calculateRentExemption`, `isValidSolanaAddress`, and `formatSolanaAddress` under `utils/account.ts`, exporting them through the utils barrel for package-wide access.
   - The helpers mirror the legacy heuristics (rent estimation defaults to `3_480` lamports per byte-year with a `2x` multiplier) while allowing overrides and defensive validation.
   - Co-located coverage in `utils/__tests__/account.test.ts` to keep the shared helpers verified; prefer RPC-derived minimums when precision is required in production.

3. **Compact length decoding helper**
[done]
   - Added a `decodeSolanaCompactLength` companion alongside `encodeSolanaCompactLength` in `utils/encoding.ts`, re-exported via the barrel.
   - Created `utils/__tests__/encoding.test.ts` to exercise single-, double-, and triple-byte sequences plus round-trip coverage with representative payloads.

4. **Token account RPC helpers**
   - Build thin wrappers for `getTokenMintInfo`, `getTokenAccountInfo`, `getTokenAccountsByMint`, and `getTokenBalances` on top of `SolanaQueryClient`.
   - Reproduce the legacy base64 parsing logic with typed responses.
   - Add integration coverage (or mocked RPC tests) verifying each helper.

5. **Phantom wallet support**
   - Re-assess the removed `PhantomSigner` and `PhantomSigningClient`.
   - Either re-implement them atop the new workflow signer, or document an alternative path for browser wallets.
   - Capture differences in capabilities (e.g., `signAndSendTransaction` vs. workflow signing).

6. **Simple signing façade**
   - Provide a streamlined entry-point that recreates `SolanaSigningClient` ergonomics for basic transfer/airdrop flows.
   - Implement as a convenience wrapper over `SolanaSigner` and workflows, with clear guidance on production usage.

7. **Token program state parsing**
   - Audit `TokenProgram.parseMintData` / `parseAccountData` for completeness against on-chain layouts, filling any missing fields or validation checks noted in the backup.
   - Add fixtures-based tests to prevent regressions.

8. **Documentation updates**
   - Update the existing `solana-refactor-mapping.md` (and related docs) once the above items are addressed, ensuring developers can locate both the new modules and replacement APIs.
   - Highlight any intentional deprecations to avoid reintroducing dead code.

## Tracking

- Assign each item a JIRA/GitHub issue as it enters active work.
- Reference this document from the Solana adapter roadmap to keep refactor parity visible.
