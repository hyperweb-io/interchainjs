# Networks Folder Refactoring Analysis

This document analyzes functions and methods in the `networks/` folder to identify opportunities for consolidation with existing `packages/` utilities, based on the functionality documented in `docs/advanced/package-functionality-guide.md`.

## Executive Summary

After comprehensive scanning of all networks (cosmos, ethereum, injective, solana) and their adapter implementations, several critical patterns emerge:

1. **Extensive duplicate utility functions** across multiple networks and within the same network
2. **Network-specific implementations** that could use shared packages
3. **Missing abstractions** that could be moved to packages
4. **Inconsistent patterns** that could be standardized
5. **Adapter utility methods** with significant duplication and inconsistency

### Key Findings:

- **4 duplicate `generateMnemonic()` implementations** across networks and libs
- **Multiple case conversion utilities** with identical functionality in adapters
- **Duplicate API conversion functions** (`apiToNumber`, `apiToBigInt`)
- **Redundant encoding/decoding utilities** that duplicate existing package functionality
- **Complex adapter transformation methods** that could be generalized
- **Event decoding utilities** that could benefit all networks
- **Safe base64/hex handling** with error recovery that should be shared
- **Solana utility functions** (`lamportsToSol`, `solToLamports`) that could be generalized
- **Contract encoding utilities** (ERC20 function encoding) that could benefit other networks
- **Number conversion utilities** in `packages/utils` that are underutilized

## Detailed Analysis

### 1. Duplicate Functions Across Networks

#### 1.1 Mnemonic Generation
**Current State:** Identical `generateMnemonic()` function duplicated across multiple locations

**Locations:**
- `networks/cosmos/src/utils.ts:6`
- `networks/cosmos/starship/src/utils.ts:4`
- `networks/injective/starship/src/utils.ts:4`
- `libs/interchainjs/starship/src/utils.ts:5`

**Current Implementation:**
```typescript
export function generateMnemonic(): string {
  return Bip39.encode(Random.getBytes(16)).toString();
}
```

**Recommendation:**
- **MOVE TO:** `packages/crypto/src/index.ts`
- **REASON:** Already has `Bip39` and `Random` exports, this is a natural fit
- **IMPACT:** Remove 4 duplicate implementations, centralize mnemonic generation
- NOTE: `@interchainjs/crypto` currently exports `Bip39` and `Random` but does NOT export `generateMnemonic`. This recommendation adds a new `generateMnemonic` helper to `packages/crypto` and removes duplicates across networks.

#### 1.2 Address Validation and Formatting

**Current State:** Each network implements its own address validation

**Ethereum Network:**
```typescript
// networks/ethereum/src/utils/address.ts
export function isValidEthereumAddress(address: string): boolean
export function toChecksumAddress(address: string): string
function toEIP55Checksum(address: string): string
```

**Cosmos Network:**
```typescript
// networks/cosmos/src/auth/strategy.ts
export const COSMOS_ADDRESS_STRATEGY: IAddressStrategy
```

**Injective Network:**
```typescript
// networks/injective/src/auth/strategy.ts
export const INJECTIVE_ETH_ADDRESS_STRATEGY: IAddressStrategy
```

**Recommendation:**
- **ENHANCE:** `packages/auth` already has address strategy pattern
- **ADD TO:** `packages/utils` - generic address validation utilities
- **CONSOLIDATE:** Move EIP-55 checksum logic to `packages/encoding`
- **REASON:** Address validation is a common utility that could benefit all networks

#### 1.3 Encoding/Decoding Utilities

**Current State:** Networks implement their own encoding utilities

**Ethereum Network:**
```typescript
// networks/ethereum/src/utils/encoding.ts
export function utf8ToHex(str: string): string
export function hexToUtf8(hex: string): string
```

**Existing Package Alternative:**
```typescript
// packages/encoding/src/index.ts
export { fromUtf8, toUtf8, fromHex, toHex }
// packages/utils/src/encoding.ts
export { fromUtf8, toUtf8, fromHex, toHex }
```

**Recommendation:**
- **REMOVE:** `networks/ethereum/src/utils/encoding.ts`
- **USE EXISTING:** `packages/encoding` or `packages/utils` functions
- **REASON:** Identical functionality already exists in packages

#### 1.4 Duplicate API Conversion Functions

**Current State:** Multiple implementations of API conversion utilities

**Locations:**
- `networks/cosmos/src/adapters/base.ts:268-277` - `apiToNumber`, `apiToBigInt`
- `networks/cosmos/src/types/codec/converters.ts:10-18` - `apiToNumber` (duplicate)

**Current Implementation:**
```typescript
// In base.ts
protected apiToNumber(value: string | undefined | null): number {
  if (!value) return 0;
  const num = parseInt(value, 10);
  if (Number.isNaN(num)) return 0;
  return num;
}

// In converters.ts (DUPLICATE)
export const apiToNumber = (value: unknown): number | undefined => {
  if (value === null || value === undefined) return undefined;
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const num = parseInt(value, 10);
    return isNaN(num) ? undefined : num;
  }
  return undefined;
};
```

**Recommendation:**
- **CONSOLIDATE:** Move to `packages/encoding` as API conversion utilities
- **STANDARDIZE:** Use consistent return types and error handling
- **REASON:** API conversion is needed across all networks

#### 1.5 Duplicate Case Conversion Functions

**Current State:** Multiple implementations of case conversion

**Locations:**
- `networks/cosmos/src/adapters/base.ts:243-244` - `toCamelCase`
- `networks/cosmos/src/adapters/base.ts:447-453` - `camelToSnake`, `snakeToCamel` (duplicates)
- `networks/cosmos/src/adapters/base.ts:247-266` - `transformKeys`
- `networks/cosmos/src/adapters/base.ts:455-470` - `convertKeysToCamelCase` (duplicate)

**Current Implementation:**
```typescript
// Multiple duplicate implementations of the same functionality
protected toCamelCase(str: string): string {
  return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
}

private snakeToCamel(str: string): string {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}
```

**Recommendation:**
- **CONSOLIDATE:** Move to `packages/utils` as case conversion utilities
- **REMOVE DUPLICATES:** Multiple implementations of the same function
- **REASON:** Case conversion is useful across all networks and applications

#### 1.6 Duplicate Base64/Hex Handling

**Current State:** Custom base64/hex handling with error recovery

**Locations:**
- `networks/cosmos/src/adapters/base.ts:285-302` - `safeFromBase64`
- `networks/cosmos/src/adapters/base.ts:280-283` - `maybeFromBase64`
- `networks/cosmos/src/adapters/base.ts:304-307` - `maybeFromHex`
- `networks/cosmos/src/adapters/base.ts:358-376` - `encodeBytes` (smart encoding)

**Current Implementation:**
```typescript
protected safeFromBase64(value: string): Uint8Array {
  if (!value) return new Uint8Array(0);

  // Fix base64 padding if needed
  let paddedValue = value;
  const remainder = value.length % 4;
  if (remainder > 0) {
    paddedValue = value + '='.repeat(4 - remainder);
  }

  try {
    return fromBase64(paddedValue);
  } catch (error) {
    console.warn(`Failed to decode base64 value: ${value}`, error);
    return new Uint8Array(0);
  }
}
```

**Recommendation:**
- **ENHANCE:** `packages/encoding` with safe decoding utilities
- **ADD:** Error recovery and padding fix functionality
- **REASON:** Safe encoding/decoding is useful across all networks

### 2. Mathematical Operations

#### 2.1 Token Mathematics

**Current State:** Solana implements comprehensive token math

**Solana Network:**
```typescript
// networks/solana/src/token-math.ts
export class TokenMath {
  static uiAmountToRaw(uiAmount: number | string, decimals: number): bigint
  static rawAmountToUi(rawAmount: bigint, decimals: number): string
  static calculatePercentage(amount: bigint, percentage: number): bigint
  static getMaxAmount(decimals: number): bigint
  static calculateFeeImpact(tokenAmount: bigint, feeAmount: bigint, lamportsPerToken: number): number
}
```

**Existing Package Alternative:**
```typescript
// packages/math/src/index.ts
export { Decimal, Uint32, Uint53, Uint64, Int53 }
```

**Recommendation:**
- **ENHANCE:** `packages/math` with token-specific utilities
- **MOVE:** Core mathematical operations from `TokenMath` to `packages/math`
- **KEEP:** Solana-specific constants and conversions in network package
- **REASON:** Token mathematics is useful across all blockchain networks

### 3. Cryptographic Operations

#### 3.1 Address Derivation Strategies

**Current State:** Each network implements address derivation differently

**Analysis:**
- **Cosmos:** Uses RIPEMD160(SHA256(pubkey)) + bech32 encoding
- **Ethereum:** Uses Keccak256(pubkey) + EIP-55 checksum
- **Injective:** Uses Keccak256(pubkey) + bech32 encoding (hybrid approach)

**Existing Package Support:**
```typescript
// packages/auth/src/strategies/index.ts
export function registerAddressStrategy(strategy: IAddressStrategy): void
export function getAddressStrategy(name: string): IAddressStrategy | undefined
```

**Recommendation:**
- **GOOD:** Current strategy pattern in `packages/auth` is well-designed
- **ENHANCE:** Add more built-in strategies to `packages/auth`
- **STANDARDIZE:** Move common hash operations to `packages/crypto`

#### 3.2 Key Management

**Current State:** Networks implement wallet creation with similar patterns

**Common Pattern:**
```typescript
// All networks use similar HD wallet patterns
const wallet = await Secp256k1HDWallet.fromMnemonic(mnemonic, {
  derivations: [{ prefix: "cosmos", hdPath: HDPath.cosmos(0, 0, 0).toString() }]
});
```

**Existing Package Support:**
```typescript
// packages/auth/src/index.ts
export { BaseWallet, IWallet, IAccount, IPrivateKey }
// packages/crypto/src/index.ts
export { HdPath, Slip10, stringToPath, pathToString }
```

**Recommendation:**
- **GOOD:** Current abstractions are working well
- **ENHANCE:** Add more convenience methods to `packages/auth`
- **STANDARDIZE:** Ensure all networks use the same base classes

### 4. Utility Functions

#### 4.1 Wait/Timeout Utilities

**Current State:** Duplicate timeout utilities in test files

**Locations:**
- `networks/cosmos/starship/src/utils.ts:8`
- `libs/interchainjs/starship/src/utils.ts:10`

**Implementation:**
```typescript
export const waitUntil = (date, timeout = 90000) => {
  const delay = date.getTime() - Date.now();
  if (delay > timeout) {
    throw new Error('Timeout to wait until date');
  }
  return new Promise(resolve => setTimeout(resolve, delay + 3000));
};
```

**Recommendation:**
- **MOVE TO:** `packages/utils` as general utility
- **REASON:** Useful for testing and async operations across all networks

#### 4.2 Number Conversion Utilities

**Current State:** Some networks implement their own number conversions

**Existing Package Alternative:**
```typescript
// packages/utils/src/encoding.ts
export function toNumber(bytes: Uint8Array): number
export function fromNumber(i: number): Uint8Array
// packages/encoding/src/utils.ts
export function longify(value: string | number | Uint64): bigint
```

**Recommendation:**
- **USE EXISTING:** Networks should use `packages/utils` and `packages/encoding`
- **CONSOLIDATE:** Move all number conversion utilities to one location

### 5. Network-Specific Implementations That Could Be Generalized

#### 5.1 Query Client Patterns

**Current State:** Each network implements similar query client patterns

**Common Pattern:**
```typescript
// All networks have similar structure
export class CosmosQueryClient { ... }
export class EthereumQueryClient { ... }
export class InjectiveQueryClient { ... }
```

**Recommendation:**
- **ENHANCE:** `packages/types` with more generic query client interfaces
- **ABSTRACT:** Common query client functionality to `packages/utils`
- **KEEP:** Network-specific implementations in networks

#### 5.2 Signer Implementations

**Current State:** Similar signer patterns across networks

**Common Pattern:**
```typescript
// All networks implement similar signers
export class DirectSigner implements IUniSigner { ... }
export class AminoSigner implements IUniSigner { ... }
```

**Existing Package Support:**
```typescript
// packages/types/src/index.ts
export { IUniSigner, SignerConfig }
```

**Recommendation:**
- **GOOD:** Current `IUniSigner` interface provides good abstraction
- **ENHANCE:** Add more shared signer utilities to `packages/auth`

## Prioritized Recommendations

### High Priority (Easy wins with high impact)

#### 1. Remove duplicate `generateMnemonic()` functions
**Impact:** 4 files cleaned up, centralized mnemonic generation

**Specific Implementation Plan:**
```typescript
// Step 1: Enhance packages/crypto/src/index.ts
export function generateMnemonic(entropyLength: number = 16): string {
  return Bip39.encode(Random.getBytes(entropyLength)).toString();
}

// Step 2: Update all network imports
// In networks/cosmos/src/utils.ts - REMOVE lines 6-8, ADD:
import { generateMnemonic } from '@interchainjs/crypto';

// In networks/cosmos/starship/src/utils.ts - REMOVE lines 4-6, ADD:
import { generateMnemonic } from '@interchainjs/crypto';

// In networks/injective/starship/src/utils.ts - REMOVE lines 4-6, ADD:
import { generateMnemonic } from '@interchainjs/crypto';

// In libs/interchainjs/starship/src/utils.ts - REMOVE lines 5-7, ADD:
import { generateMnemonic } from '@interchainjs/crypto';
```

**Files to modify:**
- `packages/crypto/src/index.ts` (add export)
- `networks/cosmos/src/utils.ts` (remove function, add import)
- `networks/cosmos/starship/src/utils.ts` (remove function, add import)
- `networks/injective/starship/src/utils.ts` (remove function, add import)
- `libs/interchainjs/starship/src/utils.ts` (remove function, add import)

**Testing:** Verify all existing tests pass with new import

#### 2. Remove `networks/ethereum/src/utils/encoding.ts`
**Impact:** Eliminate duplicate functionality, use existing packages

**Specific Implementation Plan:**
```typescript
// Step 1: Identify all usages of ethereum encoding utils
// Current functions in networks/ethereum/src/utils/encoding.ts:
// - utf8ToHex(str: string): string
// - hexToUtf8(hex: string): string

// Step 2: Replace with existing package functions
// Preferred: import { fromUtf8, toUtf8, fromHex, toHex } from '@interchainjs/encoding';
// Alternative (currently used by ethereum): import { fromUtf8, toUtf8, fromHex, toHex } from '@interchainjs/utils';

// Step 3: Update function calls
// OLD: utf8ToHex(str)
// NEW: toHex(fromUtf8(str))

// OLD: hexToUtf8(hex)
// NEW: toUtf8(fromHex(hex.startsWith('0x') ? hex.slice(2) : hex))

// Step 4 (optional): Standardize imports to use '@interchainjs/encoding'
```

**Files to modify:**
- Remove: `networks/ethereum/src/utils/encoding.ts`
- Update: `networks/ethereum/src/utils/index.ts` (remove export)
- Update: All files importing from `./utils/encoding`
- Update: `networks/ethereum/starship/__tests__/utils.test.ts`

**Testing:** Update tests to use new import patterns

#### 3. Move `waitUntil` utility to `packages/utils`
**Impact:** Remove 2 duplicate implementations, shared testing utility

**Specific Implementation Plan:**
```typescript
// Step 1: Add to packages/utils/src/index.ts
export async function waitUntil(date: Date, timeout: number = 90000): Promise<void> {
  const delay = date.getTime() - Date.now();
  if (delay > timeout) {
    throw new Error('Timeout to wait until date');
  }
  return new Promise(resolve => setTimeout(resolve, delay + 3000));
}

// Step 2: Update imports in affected files
// In networks/cosmos/starship/src/utils.ts - REMOVE lines 8-15, ADD:
import { waitUntil } from '@interchainjs/utils';

// In libs/interchainjs/starship/src/utils.ts - REMOVE lines 10-17, ADD:
import { waitUntil } from '@interchainjs/utils';
```

**Files to modify:**
- `packages/utils/src/index.ts` (add function)
- `networks/cosmos/starship/src/utils.ts` (remove function, add import)
- `libs/interchainjs/starship/src/utils.ts` (remove function, add import)

**Testing:** Add unit tests for `waitUntil` in `packages/utils`

### Medium Priority (Moderate effort, good impact)

#### 4. Enhance `packages/math` with token utilities
**Impact:** Reusable token math across all networks

**Specific Implementation Plan:**
```typescript
// Step 1: Add to packages/math/src/token.ts
export class TokenMath {
  static uiAmountToRaw(uiAmount: number | string, decimals: number): bigint {
    // Move implementation from networks/solana/src/token-math.ts
  }

  static rawAmountToUi(rawAmount: bigint, decimals: number): string {
    // Move implementation from networks/solana/src/token-math.ts
  }

  static calculatePercentage(amount: bigint, percentage: number): bigint {
    // Move implementation from networks/solana/src/token-math.ts
  }

  static addAmounts(amount1: bigint, amount2: bigint): bigint {
    return amount1 + amount2;
  }

  static subtractAmounts(amount1: bigint, amount2: bigint): bigint {
    if (amount1 < amount2) {
      throw new Error('Insufficient balance');
    }
    return amount1 - amount2;
  }
}

// Step 2: Update packages/math/src/index.ts
export * from './token';

// Step 3: Update Solana network to use shared utilities
// In networks/solana/src/token-math.ts:
import { TokenMath as BaseTokenMath } from '@interchainjs/math';

export class TokenMath extends BaseTokenMath {
  // Keep only Solana-specific methods like:
  // - calculateFeeImpact (Solana-specific)
  // - getMaxAmount (could be generalized)
}
```

**Files to modify:**
- Create: `packages/math/src/token.ts`
- Update: `packages/math/src/index.ts`
- Update: `networks/solana/src/token-math.ts`
- Update: Any files importing Solana's TokenMath

**Testing:** Move relevant tests from Solana to packages/math

#### 5. Add address validation utilities to `packages/utils`
**Impact:** Consistent address validation across networks

**Specific Implementation Plan:**
```typescript
// Step 1: Add to packages/utils/src/address.ts
export interface AddressValidator {
  isValid(address: string): boolean;
  normalize?(address: string): string;
  getPrefix?(address: string): string | undefined;
}

export class EthereumAddressValidator implements AddressValidator {
  isValid(address: string): boolean {
    // Move from networks/ethereum/src/utils/address.ts
  }

  normalize(address: string): string {
    // Move toChecksumAddress logic
  }
}

export class Bech32AddressValidator implements AddressValidator {
  constructor(private expectedPrefix?: string) {}

  isValid(address: string): boolean {
    // Implement bech32 validation
  }

  getPrefix(address: string): string | undefined {
    // Extract bech32 prefix
  }
}

// Step 2: Update packages/utils/src/index.ts
export * from './address';

// Step 3: Update networks to use shared validators
// In networks/ethereum/src/utils/address.ts:
import { EthereumAddressValidator } from '@interchainjs/utils';
const validator = new EthereumAddressValidator();
export const isValidEthereumAddress = validator.isValid.bind(validator);
export const toChecksumAddress = validator.normalize.bind(validator);
```

**Files to modify:**
- Create: `packages/utils/src/address.ts`
- Update: `packages/utils/src/index.ts`
- Update: `networks/ethereum/src/utils/address.ts`
- Update: Any Cosmos/Injective address validation code

**Testing:** Create comprehensive address validation tests

#### 6. Enhance `packages/auth` with more built-in address strategies
**Impact:** Easier network implementation, standardized patterns

**Specific Implementation Plan:**
```typescript
// Step 1: Add to packages/auth/src/strategies/built-in.ts
import { IAddressStrategy } from '@interchainjs/types';
import { sha256 } from '@noble/hashes/sha256';
import { ripemd160 } from '@noble/hashes/ripemd160';
import { keccak_256 } from '@noble/hashes/sha3';

export const COSMOS_ADDRESS_STRATEGY: IAddressStrategy = {
  // Move from networks/cosmos/src/auth/strategy.ts
};

export const ETHEREUM_ADDRESS_STRATEGY: IAddressStrategy = {
  // Move from networks/ethereum/src/auth/strategy.ts
};

export const INJECTIVE_ETH_ADDRESS_STRATEGY: IAddressStrategy = {
  // Move from networks/injective/src/auth/strategy.ts
};

// Step 2: Add to packages/auth/src/strategies/index.ts
export * from './built-in';

// Auto-register common strategies
import { COSMOS_ADDRESS_STRATEGY, ETHEREUM_ADDRESS_STRATEGY, INJECTIVE_ETH_ADDRESS_STRATEGY } from './built-in';
registerAddressStrategy(COSMOS_ADDRESS_STRATEGY);
registerAddressStrategy(ETHEREUM_ADDRESS_STRATEGY);
registerAddressStrategy(INJECTIVE_ETH_ADDRESS_STRATEGY);

// Step 3: Update networks to use pre-registered strategies
// In networks/cosmos/src/auth/strategy.ts:
// REMOVE entire file, strategies are now auto-registered

// In networks/cosmos/src/wallets/secp256k1hd.ts:
// REMOVE: import { COSMOS_ADDRESS_STRATEGY } from '../auth/strategy';
// REMOVE: registerAddressStrategy(COSMOS_ADDRESS_STRATEGY);
// The strategy is now auto-registered by packages/auth
```

**Files to modify:**
- Create: `packages/auth/src/strategies/built-in.ts`
- Update: `packages/auth/src/strategies/index.ts`
- Remove: `networks/cosmos/src/auth/strategy.ts`
- Remove: `networks/ethereum/src/auth/strategy.ts`
- Remove: `networks/injective/src/auth/strategy.ts`
- Update: All files that import these strategies

**Testing:** Ensure all networks still work with auto-registered strategies

#### 7. Move adapter utility methods to packages
**Impact:** Eliminate duplicate transformation utilities, standardize data processing

**Specific Implementation Plan:**

**7a. Case Conversion Utilities to `packages/utils`**
```typescript
// Step 1: Add to packages/utils/src/case.ts
export function toCamelCase(str: string): string {
  return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
}

export function toSnakeCase(str: string): string {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

export function transformKeys(obj: any, transformer: (key: string) => string): any {
  if (obj === null || obj === undefined) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => transformKeys(item, transformer));
  }

  if (typeof obj === 'object') {
    const transformed: any = {};
    for (const [key, value] of Object.entries(obj)) {
      const newKey = transformer(key);
      transformed[newKey] = transformKeys(value, transformer);
    }
    return transformed;
  }

  return obj;
}

export function transformKeysToCamelCase(obj: any): any {
  return transformKeys(obj, toCamelCase);
}

export function transformKeysToSnakeCase(obj: any): any {
  return transformKeys(obj, toSnakeCase);
}
```

**7b. API Conversion Utilities to `packages/encoding`**
```typescript
// Step 1: Add to packages/encoding/src/api.ts
export function apiToNumber(value: string | undefined | null): number {
  if (!value) return 0;
  const num = parseInt(value, 10);
  if (Number.isNaN(num)) return 0;
  return num;
}

export function apiToBigInt(value: string | undefined | null): bigint {
  if (!value) return BigInt(0);
  return BigInt(value);
}

export function safeFromBase64(value: string): Uint8Array {
  if (!value) return new Uint8Array(0);

  // Fix base64 padding if needed
  let paddedValue = value;
  const remainder = value.length % 4;
  if (remainder > 0) {
    paddedValue = value + '='.repeat(4 - remainder);
  }

  try {
    return fromBase64(paddedValue);
  } catch (error) {
    console.warn(`Failed to decode base64 value: ${value}`, error);
    return new Uint8Array(0);
  }
}

export function maybeFromBase64(value: string | undefined | null): Uint8Array | undefined {
  if (!value) return undefined;
  return safeFromBase64(value);
}

export function maybeFromHex(value: string | undefined | null): Uint8Array | undefined {
  if (!value) return undefined;
  return fromHex(value);
}

export function smartEncodeBytes(data: string): Uint8Array {
  // Handle hex strings and base64
  if (data.startsWith('0x')) {
    const hex = data.slice(2);
    const bytes = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
      bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
    }
    return bytes;
  }

  // Assume base64
  const binary = atob(data);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

export function smartDecodeBytes(data: Uint8Array): string {
  // Convert to hex string
  return Array.from(data)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase();
}
```

**7c. Event Decoding Utilities to `packages/utils`**
```typescript
// Step 1: Add to packages/utils/src/events.ts
export function decodeEventAttribute(value: string): Uint8Array {
  if (!value) return new Uint8Array(0);

  // Check if the value looks like base64 and has proper length
  const isBase64Like = /^[A-Za-z0-9+/]*={0,2}$/.test(value) && value.length % 4 === 0;

  if (isBase64Like) {
    try {
      // Try to decode as base64 first
      const decoded = safeFromBase64(value);
      // If it decodes successfully and produces readable text, use it
      const text = new TextDecoder().decode(decoded);
      // If the decoded text contains mostly printable characters, it's likely base64
      if (text.length > 0 && /^[\x20-\x7E\s]*$/.test(text)) {
        return decoded;
      }
    } catch (e) {
      // Fall through to treat as plain text
    }
  }

  // Treat as plain text string
  return new TextEncoder().encode(value);
}

export function decodeEvent(event: any): any {
  return {
    type: event.type || '',
    attributes: (event.attributes || []).map((attr: any) => ({
      key: decodeEventAttribute(attr.key || ''),
      value: decodeEventAttribute(attr.value || ''),
      index: attr.index || false
    }))
  };
}

export function decodeEvents(events: any[]): any[] {
  return (events || []).map(e => decodeEvent(e));
}
```

**Files to modify:**
- Update: `packages/utils/src/case.ts` (reuse existing camel/camelCaseRecursive; add snake/snakeCaseRecursive if needed)
- Create: `packages/encoding/src/api.ts`
- Update: `packages/utils/src/events.ts` (extend with decoding helpers if needed)
- Update: `packages/utils/src/index.ts`
- Update: `packages/encoding/src/index.ts`
- Update: `networks/cosmos/src/adapters/base.ts` (remove methods, add imports)
- Update: `networks/cosmos/src/types/codec/converters.ts` (remove duplicate apiToNumber)
- Update: Any other adapters using these utilities

**Testing:** Create comprehensive tests for all utility functions

#### 8. Move Solana utility functions to packages
**Impact:** Share Solana-specific utilities that could benefit other networks

**Specific Implementation Plan:**

**8a. Solana Constants to `packages/utils`**
```typescript
// Step 1: Add to packages/utils/src/solana-constants.ts
export const LAMPORTS_PER_SOL = 1000000000;

// Step 2: Add to packages/utils/src/conversion.ts
export function lamportsToSol(lamports: number): number {
  return lamports / LAMPORTS_PER_SOL;
}

export function solToLamports(sol: number): number {
  return sol * LAMPORTS_PER_SOL;
}
```

**8b. Contract Encoding Utilities to `packages/utils`**
```typescript
// Step 1: Add to packages/utils/src/contract-encoding.ts
export interface AbiFunction {
  name?: string;
  type: string;
  inputs?: Array<{ name: string; type: string; internalType?: string; }>;
  outputs?: Array<{ name: string; type: string; internalType?: string; }>;
  stateMutability?: string;
}

export class ERC20Encoder {
  static transfer(to: string, amount: bigint): string {
    const functionSignature = '0xa9059cbb';
    const addressParam = to.slice(2).padStart(64, '0');
    const amountParam = amount.toString(16).padStart(64, '0');
    return functionSignature + addressParam + amountParam;
  }

  static balanceOf(address: string): string {
    const functionSignature = '0x70a08231';
    const addressParam = address.slice(2).padStart(64, '0');
    return functionSignature + addressParam;
  }

  static approve(spender: string, amount: bigint): string {
    const functionSignature = '0x095ea7b3';
    const addressParam = spender.slice(2).padStart(64, '0');
    const amountParam = amount.toString(16).padStart(64, '0');
    return functionSignature + addressParam + amountParam;
  }

  static allowance(owner: string, spender: string): string {
    const functionSignature = '0xdd62ed3e';
    const ownerParam = owner.slice(2).padStart(64, '0');
    const spenderParam = spender.slice(2).padStart(64, '0');
    return functionSignature + ownerParam + spenderParam;
  }
}
```

**Files to modify:**
- Create: `packages/utils/src/solana-constants.ts`
- Create: `packages/utils/src/conversion.ts`
- Create: `packages/utils/src/contract-encoding.ts`
- Update: `packages/utils/src/index.ts`
- Update: `networks/solana/src/index.ts` (use package functions)
- Update: `networks/ethereum/src/utils/ContractEncoder.ts` (use package functions)

**Testing:** Move relevant tests to packages and create comprehensive test coverage

### Low Priority (High effort, architectural changes)

7. **Abstract common query client functionality**
   - Create base query client in `packages/utils`
   - Impact: Reduced code duplication, but requires significant refactoring

8. **Standardize signer implementations**
   - Move more shared functionality to `packages/auth`
   - Impact: More consistent signer behavior across networks

## Implementation Guidelines

### For Each Refactoring:

1. **Verify compatibility** - Ensure existing functionality is preserved
2. **Update imports** - Change network imports to use package functions
3. **Add tests** - Ensure package functions work for all network use cases
4. **Update documentation** - Reflect changes in package functionality guide
5. **Deprecate gradually** - Mark old functions as deprecated before removal

### Success Metrics:

- **Reduced code duplication** - Fewer identical functions across networks
- **Improved consistency** - Similar operations work the same way across networks
- **Better testability** - Shared utilities are easier to test comprehensively
- **Easier maintenance** - Bug fixes and improvements benefit all networks

## Conclusion

The networks folder contains several opportunities for consolidation with existing packages. The highest impact changes involve removing duplicate utility functions and leveraging existing package functionality. The current architecture with `IUniSigner` and address strategies is well-designed and should be enhanced rather than replaced.

Focus should be on:
1. Eliminating obvious duplicates (generateMnemonic, encoding utilities)
2. Enhancing existing packages with missing functionality
3. Ensuring all networks use consistent patterns from packages
4. Maintaining network-specific implementations where appropriate
