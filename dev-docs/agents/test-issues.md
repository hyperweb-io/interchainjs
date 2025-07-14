# Test Issues After Auth Refactoring

## Issue: Missing Auth Classes in Injective Tests

The following test files reference auth classes that no longer exist:
- `networks/injective/starship/__tests__/gov.test.ts`
- `networks/injective/starship/__tests__/staking.test.ts`
- `networks/injective/starship/__tests__/token.test.ts`

These tests import:
- `EthSecp256k1Auth` from `@interchainjs/auth/ethSecp256k1`
- `EthSecp256k1HDWallet` from `@interchainjs/injective/wallets/ethSecp256k1hd`

## Analysis

1. The `EthSecp256k1Auth` class was likely removed from the auth package during previous refactoring
2. The `EthSecp256k1HDWallet` doesn't exist in the injective package
3. These tests appear to be outdated and need updating

## Recommendation

These tests need to be updated to use the current auth architecture. However, this is beyond the scope of the current auth refactoring task, which was focused on moving chain-specific strategies to their respective packages.

The tests should be updated in a separate task to:
1. Use the appropriate wallet implementations that currently exist
2. Remove references to non-existent auth classes
3. Update to use the new registry-based auth pattern if needed