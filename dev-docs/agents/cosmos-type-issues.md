# Cosmos Type Issues

## Issue Description

The cosmos package has type compatibility issues with the @interchainjs/types interfaces:

1. **CosmosAccount vs IAccount**: 
   - `CosmosAccount` uses `address: string`
   - `IAccount` expects `address: IAddress` (an object)
   - This causes TypeScript errors when CosmosAccount extends IAccount

2. **Auth Interface Duplication**:
   - Cosmos package defines its own `Auth` interface in `signers/types.ts`
   - This is different from the `IAuth` interface in @interchainjs/types
   - This was why cosmos had a dependency on @interchainjs/auth (circular dependency)

## Current State

These are pre-existing issues in the codebase, not caused by our auth refactoring. The cosmos package appears to have been developed with its own simplified interfaces that don't fully comply with the @interchainjs/types interfaces.

## Temporary Solution

For now, we can:
1. Remove the `extends IAccount` from CosmosAccount interface
2. Keep cosmos's own Auth interface
3. This allows the build to proceed while maintaining backward compatibility

## Long-term Solution

The cosmos package needs to be refactored to:
1. Use IAddress objects instead of string addresses
2. Implement proper IAccount interface
3. Use the standard IAuth interface from @interchainjs/types
4. Update all dependent code to handle the new types

This would be a breaking change and should be done in a separate major version update.