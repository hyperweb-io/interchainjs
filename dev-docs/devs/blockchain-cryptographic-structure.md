# Blockchain Cryptographic Structure - Implementation Guide

This document provides the detailed TypeScript implementation structure for the blockchain cryptographic components discussed in the [concepts document](./blockchain-cryptographic-concepts.md).

## Table of Contents
1. [Interface Definitions](#interface-definitions)
2. [Configuration System](#configuration-system)
3. [Implementation Examples](#implementation-examples)
4. [Usage Examples](#usage-examples)

## Interface Definitions

### Core Interfaces

#### IPrivateKey
Manages private key operations and signing.

```typescript
interface IPrivateKey {
  // Core properties
  readonly value: ICryptoBytes;  // Using cryptobytes.ts as abstracted key
  readonly hdPath?: IHDPath;     // Using hdpath.ts as abstracted HD path
  readonly config: IPrivateKeyConfig;   // Configuration for crypto operations

  // Methods
  toPublicKey(config?: IPublicKeyConfig): IPublicKey;  // Can override config
  sign(data: Uint8Array): Promise<ICryptoBytes>;
  toHex(): string;
  toBase64(): string;
}

// Static factory methods
interface IPrivateKeyStatic {
  fromMnemonic(
    mnemonic: string,
    hdPaths: IHDPath[],  // Array of HD paths to derive multiple keys
    config: IPrivateKeyConfig
  ): Promise<IPrivateKey[]>;  // passphrase is now in config
  
  fromBytes(bytes: ICryptoBytes, config: IPrivateKeyConfig, hdPath?: IHDPath): IPrivateKey;
  fromHex(hex: string, config: IPrivateKeyConfig, hdPath?: IHDPath): IPrivateKey;
}
```

#### IPublicKey
Handles public key operations and verification.

```typescript
interface IPublicKey {
  // Core properties
  readonly value: ICryptoBytes;
  readonly algo: IAlgo | string;  // Algorithm is inherited from private key
  readonly compressed: boolean;

  // Methods
  toAddress?(config: IAddressConfig, prefix?: string): IAddress;  // Optional - not all chains have addresses
  verify(data: Uint8Array, signature: ICryptoBytes): Promise<boolean>;
  toHex(): string;
  toBase64(): string;
}

// Static factory methods
interface IPublicKeyStatic {
  fromPrivateKey(privateKey: IPrivateKey, config?: IPublicKeyConfig): IPublicKey;
  fromBytes(bytes: ICryptoBytes, algo: IAlgo | string, compressed?: boolean): IPublicKey;
  fromHex(hex: string, algo: IAlgo | string, compressed?: boolean): IPublicKey;
}
```

#### IAddress
Represents blockchain addresses.

```typescript
interface IAddress {
  // Core properties
  readonly value: string;      // The address string
  readonly prefix?: string;    // Address prefix (e.g., 'cosmos', 'osmo', '0x')
  readonly config: IAddressConfig;

  // Methods
  toBytes(): ICryptoBytes;     // Raw bytes without encoding
  isValid(): boolean;          // Validate address format and checksum
}

// Static factory methods
interface IAddressStatic {
  fromPublicKey(publicKey: IPublicKey, config: IAddressConfig, prefix?: string): IAddress;
  fromString(address: string, config: IAddressConfig): IAddress;
}
```

#### IWallet
Container for multiple private keys with account derivation.

```typescript
interface IWallet {
  // Core properties
  readonly privateKeys: IPrivateKey[];
  readonly config: IWalletConfig;

  // Methods
  toAccounts(): IAccount[];              // Get all accounts (public info only)
  getAccount(index: number): IAccount;   // Get specific account
  sign(keyIndex: number, data: Uint8Array): Promise<ICryptoBytes>;
  
  // Key management
  addPrivateKey(privateKey: IPrivateKey): void;
  removePrivateKey(index: number): void;
}

// Static factory methods
interface IWalletStatic {
  fromMnemonic(
    mnemonic: string,
    hdPaths: IHDPath[],
    config: IWalletConfig
  ): Promise<IWallet>;
  
  new(privateKeys: IPrivateKey[], config: IWalletConfig): IWallet;
}
```

#### IAccount
Public information only - no private keys.

```typescript
interface IAccount {
  readonly publicKey: IPublicKey;
  readonly address: IAddress;
  readonly hdPath?: IHDPath;
  readonly algo: string;        // Algorithm name for reference
}
```

## Configuration System

### Configuration Types

```typescript
// Algorithm interface for key operations
interface IAlgo {
  name: string;
  makeKeypair(privateKey: Uint8Array): { privkey: Uint8Array; pubkey: Uint8Array };
  compress(pubkey: Uint8Array): Uint8Array;
  uncompress(pubkey: Uint8Array): Uint8Array;
  sign(message: Uint8Array, privateKey: Uint8Array): Promise<Uint8Array>;
  verify(signature: Uint8Array, message: Uint8Array, pubkey: Uint8Array): Promise<boolean>;
}

// Hash function type
type HashFunction = (data: Uint8Array) => Uint8Array;

// Private key specific configuration
interface IPrivateKeyConfig {
  algo: IAlgo | string;  // Accept both IAlgo instance or preset string
  passphrase?: string;  // BIP39 passphrase
}

// Public key specific configuration
interface IPublicKeyConfig {
  compressed?: boolean;  // Only compression can be configured
}

// Address specific configuration
interface IAddressConfig {
  strategy: IAddressStrategy | string;  // Required: e.g., 'cosmos', 'ethereum', or custom strategy
}

// Wallet configuration combines all configs
interface IWalletConfig {
  privateKeyConfig: IPrivateKeyConfig;
  publicKeyConfig?: IPublicKeyConfig;  // Optional, only for compression setting
  addressConfig: IAddressConfig;
  addressPrefix?: string;
}
```

### Address Generation Strategies

```typescript
// Address generation strategies
interface IAddressStrategy {
  name: string;
  // Process public key bytes before hashing
  preprocessPublicKey?(pubKeyBytes: Uint8Array, compressed: boolean, algo: IAlgo): Uint8Array;
  // Hash the processed bytes
  hash(bytes: Uint8Array): Uint8Array;
  // Encode the hashed bytes
  encode(hashedBytes: Uint8Array, prefix?: string): string;
  // Decode address to bytes
  decode(address: string): { bytes: Uint8Array; prefix?: string };
  // Apply checksum (optional)
  checksum?(address: string): string;
  // Validate checksum (optional)
  validateChecksum?(address: string): boolean;
  // Extract prefix from address
  extractPrefix(address: string): string | undefined;
}
```

### Preset Implementations

```typescript
// Example IAlgo implementation for secp256k1
const Secp256k1Algo: IAlgo = {
  name: 'secp256k1',
  makeKeypair: (privateKey: Uint8Array) => {
    return Secp256k1.makeKeypair(privateKey);
  },
  compress: (pubkey: Uint8Array) => {
    return Secp256k1.compressPubkey(pubkey);
  },
  uncompress: (pubkey: Uint8Array) => {
    return Secp256k1.uncompressPubkey(pubkey);
  },
  sign: async (message: Uint8Array, privateKey: Uint8Array) => {
    const signature = await Secp256k1.createSignature(message, privateKey);
    return signature.toFixedLength();
  },
  verify: async (signature: Uint8Array, message: Uint8Array, pubkey: Uint8Array) => {
    return Secp256k1.verifySignature(signature, message, pubkey);
  }
};

// Example IAlgo implementation for ed25519
const Ed25519Algo: IAlgo = {
  name: 'ed25519',
  makeKeypair: (privateKey: Uint8Array) => {
    return Ed25519.makeKeypair(privateKey);
  },
  compress: (pubkey: Uint8Array) => {
    return pubkey; // Ed25519 keys are always compressed
  },
  uncompress: (pubkey: Uint8Array) => {
    return pubkey; // Ed25519 keys are always compressed
  },
  sign: async (message: Uint8Array, privateKey: Uint8Array) => {
    return Ed25519.createSignature(message, privateKey);
  },
  verify: async (signature: Uint8Array, message: Uint8Array, pubkey: Uint8Array) => {
    return Ed25519.verifySignature(signature, message, pubkey);
  }
};

// Preset algorithms mapping
const PRESET_ALGOS: Record<string, IAlgo> = {
  'secp256k1': Secp256k1Algo,
  'ed25519': Ed25519Algo,
  // ... more algorithms
};

// Preset hash functions mapping
const PRESET_HASHES: Record<string, HashFunction> = {
  'sha256': sha256,
  'sha512': sha512,
  'keccak256': (data) => new Keccak256(data).digest(),
  'ripemd160': ripemd160,
  // ... more hash functions
};

// Preset address strategies
const COSMOS_ADDRESS_STRATEGY: IAddressStrategy = {
  name: 'cosmos',
  hash: (bytes) => ripemd160(sha256(bytes)),
  encode: (bytes, prefix = 'cosmos') => bech32.encode(prefix, bech32.toWords(bytes)),
  decode: (address) => {
    const decoded = bech32.decode(address);
    return {
      bytes: new Uint8Array(bech32.fromWords(decoded.words)),
      prefix: decoded.prefix
    };
  },
  extractPrefix: (address) => {
    const match = address.match(/^([a-z]+)1/);
    return match ? match[1] : undefined;
  }
};

const ETHEREUM_ADDRESS_STRATEGY: IAddressStrategy = {
  name: 'ethereum',
  preprocessPublicKey: (pubKeyBytes, compressed, algo) => {
    // Ethereum needs uncompressed key without 0x04 prefix
    let ethPubKey = compressed ? algo.uncompress(pubKeyBytes) : pubKeyBytes;
    return ethPubKey[0] === 0x04 ? ethPubKey.slice(1) : ethPubKey;
  },
  hash: (bytes) => new Keccak256(bytes).digest().slice(-20),
  encode: (bytes) => '0x' + toHex(bytes),
  decode: (address) => {
    if (!address.startsWith('0x')) {
      throw new Error('Invalid Ethereum address format');
    }
    return {
      bytes: fromHex(address.slice(2)),
      prefix: '0x'
    };
  },
  checksum: (address) => toEIP55Checksum(address),
  validateChecksum: (address) => {
    return address === toEIP55Checksum(address.toLowerCase());
  },
  extractPrefix: (address) => address.startsWith('0x') ? '0x' : undefined
};

const BITCOIN_ADDRESS_STRATEGY: IAddressStrategy = {
  name: 'bitcoin',
  hash: (bytes) => ripemd160(sha256(bytes)),
  encode: (bytes, prefix) => Base58Check.encode(bytes, prefix),
  decode: (address) => {
    const decoded = Base58Check.decode(address);
    // Extract version byte as prefix
    const prefix = decoded.prefix || '1'; // Default to '1' for P2PKH
    return {
      bytes: decoded.data,
      prefix
    };
  },
  extractPrefix: (address) => {
    // Bitcoin addresses start with 1, 3, or bc1
    if (address.startsWith('bc1')) return 'bc1';
    if (address.startsWith('1')) return '1';
    if (address.startsWith('3')) return '3';
    return undefined;
  }
};

// Preset strategies mapping
const PRESET_STRATEGIES: Record<string, IAddressStrategy> = {
  'cosmos': COSMOS_ADDRESS_STRATEGY,
  'ethereum': ETHEREUM_ADDRESS_STRATEGY,
  'bitcoin': BITCOIN_ADDRESS_STRATEGY
};

// Preset address encoders (simplified)
const PRESET_ENCODERS: Record<string, (bytes: Uint8Array, prefix?: string) => string> = {
  'bech32': (bytes, prefix = 'cosmos') => bech32.encode(prefix, bech32.toWords(bytes)),
  'hex': (bytes, prefix = '0x') => prefix + toHex(bytes),
  'base58check': (bytes, prefix) => Base58Check.encode(bytes, prefix),
};

// Internal helper to resolve algorithm (not exposed to users)
function resolveAlgo(algo: IAlgo | string): IAlgo {
  if (typeof algo === 'string') {
    if (!PRESET_ALGOS[algo]) {
      throw new Error(`Unknown algorithm: ${algo}`);
    }
    return PRESET_ALGOS[algo];
  }
  return algo;
}

// Internal helper to resolve hash function (not exposed to users)
function resolveHashFunction(hashFn?: HashFunction | string): HashFunction | undefined {
  if (!hashFn) return undefined;
  if (typeof hashFn === 'string') {
    if (!PRESET_HASHES[hashFn]) {
      throw new Error(`Unknown hash function: ${hashFn}`);
    }
    return PRESET_HASHES[hashFn];
  }
  return hashFn;
}

// Internal helper to resolve encoder (not exposed to users)
function resolveEncoder(encoder?: ((bytes: Uint8Array, prefix?: string) => string) | string): ((bytes: Uint8Array, prefix?: string) => string) | undefined {
  if (!encoder) return undefined;
  if (typeof encoder === 'string') {
    if (!PRESET_ENCODERS[encoder]) {
      throw new Error(`Unknown encoder: ${encoder}`);
    }
    return PRESET_ENCODERS[encoder];
  }
  return encoder;
}

// Internal helper to resolve address strategy
function resolveAddressStrategy(strategy: IAddressStrategy | string): IAddressStrategy {
  if (typeof strategy === 'string') {
    if (!PRESET_STRATEGIES[strategy]) {
      throw new Error(`Unknown address strategy: ${strategy}`);
    }
    return PRESET_STRATEGIES[strategy];
  }
  return strategy;
}
```

## Implementation Examples

### PrivateKey Implementation

```typescript
// packages/auth/src/keys/private-key.ts
import { IPrivateKey, IPrivateKeyConfig, IPublicKeyConfig, IPublicKey, ICryptoBytes, IHDPath } from '@interchainjs/types';
import { BaseCryptoBytes } from '@interchainjs/utils';
import { Bip39, EnglishMnemonic, Slip10, Slip10RawIndex } from '@interchainjs/crypto';

export class PrivateKey implements IPrivateKey {
  private _algo: IAlgo;
  
  constructor(
    public readonly value: ICryptoBytes,
    public readonly config: IPrivateKeyConfig,
    public readonly hdPath?: IHDPath
  ) {
    // Resolve algo once during construction
    this._algo = resolveAlgo(config.algo);
  }

  toPublicKey(config?: IPublicKeyConfig): IPublicKey {
    // Only compression can be configured, algorithm is inherited
    const compressed = config?.compressed ?? true;  // default to compressed
    
    const keyPair = this._algo.makeKeypair(this.value.value);
    const pubKeyBytes = compressed 
      ? this._algo.compress(keyPair.pubkey)
      : keyPair.pubkey;
    
    return new PublicKey(
      BaseCryptoBytes.from(pubKeyBytes),
      this.config.algo,  // Pass the same algorithm
      compressed
    );
  }

  async sign(data: Uint8Array): Promise<ICryptoBytes> {
    // Note: The caller is responsible for hashing the data if needed
    // This allows flexibility for different signing schemes
    const signature = await this._algo.sign(
      data,
      this.value.value
    );
    
    return BaseCryptoBytes.from(signature);
  }

  toHex(): string {
    return this.value.toHex();
  }

  toBase64(): string {
    return this.value.toBase64();
  }

  static async fromMnemonic(
    mnemonic: string,
    hdPaths: IHDPath[],
    config: IPrivateKeyConfig
  ): Promise<IPrivateKey[]> {
    const mnemonicObj = new EnglishMnemonic(mnemonic);
    const seed = await Bip39.mnemonicToSeed(
      mnemonicObj, 
      config.passphrase || ''
    );
    
    return hdPaths.map(hdPath => {
      const slip10Result = Slip10.derivePath(
        Slip10.Curve.Secp256k1,  // TODO: make this configurable
        seed,
        hdPathToSlip10(hdPath.toString())
      );
      
      return new PrivateKey(
        BaseCryptoBytes.from(slip10Result.privkey),
        config,
        hdPath
      );
    });
  }

  static fromBytes(bytes: ICryptoBytes, config: IPrivateKeyConfig, hdPath?: IHDPath): IPrivateKey {
    return new PrivateKey(bytes, config, hdPath);
  }

  static fromHex(hex: string, config: IPrivateKeyConfig, hdPath?: IHDPath): IPrivateKey {
    return PrivateKey.fromBytes(BaseCryptoBytes.fromHex(hex), config, hdPath);
  }
}
```

### PublicKey Implementation

```typescript
// packages/auth/src/keys/public-key.ts
import { IPublicKey, IPublicKeyConfig, IAddress, IAddressConfig, ICryptoBytes } from '@interchainjs/types';
import { BaseCryptoBytes } from '@interchainjs/utils';

export class PublicKey implements IPublicKey {
  private _algo: IAlgo;
  
  constructor(
    public readonly value: ICryptoBytes,
    public readonly algo: IAlgo | string,
    public readonly compressed: boolean
  ) {
    // Resolve algo once during construction
    this._algo = resolveAlgo(algo);
  }

  toAddress(config: IAddressConfig, prefix?: string): IAddress {
    // Note: This method is optional in the interface
    // Some chains (e.g., Solana) don't have separate addresses
    return Address.fromPublicKey(this, config, prefix);
  }

  async verify(data: Uint8Array, signature: ICryptoBytes): Promise<boolean> {
    // Note: The caller is responsible for hashing the data if needed
    // This should match the hashing used during signing
    return this._algo.verify(
      signature.value,
      data,
      this.value.value
    );
  }

  toHex(): string {
    return this.value.toHex();
  }

  toBase64(): string {
    return this.value.toBase64();
  }

  static fromPrivateKey(privateKey: IPrivateKey, config?: IPublicKeyConfig): IPublicKey {
    return privateKey.toPublicKey(config);
  }

  static fromBytes(bytes: ICryptoBytes, algo: IAlgo | string, compressed: boolean = true): IPublicKey {
    return new PublicKey(bytes, algo, compressed);
  }

  static fromHex(hex: string, algo: IAlgo | string, compressed: boolean = true): IPublicKey {
    return PublicKey.fromBytes(BaseCryptoBytes.fromHex(hex), algo, compressed);
  }
}
```

### Address Implementation

```typescript
// packages/auth/src/keys/address.ts
import { IAddress, IAddressConfig, IPublicKey, ICryptoBytes } from '@interchainjs/types';
import { BaseCryptoBytes } from '@interchainjs/utils';
import { sha256, ripemd160, Keccak256 } from '@interchainjs/crypto';
import { bech32 } from 'bech32';

export class Address implements IAddress {
  private _strategy: IAddressStrategy;
  
  constructor(
    public readonly value: string,
    public readonly config: IAddressConfig,
    public readonly prefix?: string
  ) {
    this._strategy = resolveAddressStrategy(config.strategy);
  }

  toBytes(): ICryptoBytes {
    const decoded = this._strategy.decode(this.value);
    return BaseCryptoBytes.from(decoded.bytes);
  }

  isValid(): boolean {
    try {
      this.toBytes();
      // Validate checksum if strategy supports it
      if (this._strategy.validateChecksum) {
        return this._strategy.validateChecksum(this.value);
      }
      return true;
    } catch {
      return false;
    }
  }

  static fromPublicKey(
    publicKey: IPublicKey, 
    config: IAddressConfig, 
    prefix?: string
  ): IAddress {
    const strategy = resolveAddressStrategy(config.strategy);
    
    // Get algorithm from the public key
    const algo = resolveAlgo(publicKey.algo);
    
    // Preprocess public key if needed
    let processedBytes = publicKey.value.value;
    if (strategy.preprocessPublicKey) {
      processedBytes = strategy.preprocessPublicKey(
        publicKey.value.value,
        publicKey.compressed,
        algo
      );
    }
    
    // Hash the bytes
    const hashedBytes = strategy.hash(processedBytes);
    
    // Encode the address
    let addressString = strategy.encode(hashedBytes, prefix);
    
    // Apply checksum if available
    if (strategy.checksum) {
      addressString = strategy.checksum(addressString);
    }
    
    return new Address(addressString, config, prefix);
  }

  static fromString(address: string, config: IAddressConfig): IAddress {
    const strategy = resolveAddressStrategy(config.strategy);
    
    // Extract prefix using strategy
    const prefix = strategy.extractPrefix(address);
    
    // Validate the address format
    try {
      strategy.decode(address);
    } catch (error) {
      throw new Error(`Invalid ${strategy.name} address format: ${error.message}`);
    }
    
    return new Address(address, config, prefix);
  }
}

// Internal helper to resolve address strategy
function resolveAddressStrategy(strategy: IAddressStrategy | string): IAddressStrategy {
  if (typeof strategy === 'string') {
    if (!PRESET_STRATEGIES[strategy]) {
      throw new Error(`Unknown address strategy: ${strategy}`);
    }
    return PRESET_STRATEGIES[strategy];
  }
  return strategy;
}
```

## Usage Examples

### Basic Usage

```typescript
// Example 1: Create a Cosmos wallet using string presets
const mnemonic = "abandon abandon abandon...";
const hdPaths = [
  HDPath.cosmos(0, 0, 0),    // m/44'/118'/0'/0/0
  HDPath.cosmos(0, 0, 1),    // m/44'/118'/0'/0/1
];

// Using string presets - clean and simple
const cosmosConfig: IWalletConfig = {
  privateKeyConfig: {
    algo: 'secp256k1',  // String preset
    passphrase: 'optional-passphrase'
  },
  publicKeyConfig: {
    compressed: true  // Only compression setting needed
  },
  addressConfig: {
    strategy: 'cosmos'  // Just specify the strategy!
  },
  addressPrefix: 'cosmos'
};

const wallet = await Wallet.fromMnemonic(mnemonic, hdPaths, cosmosConfig);

// Example 2: Create Ethereum wallet
const ethConfig: IWalletConfig = {
  privateKeyConfig: {
    algo: 'secp256k1'
  },
  publicKeyConfig: {
    compressed: false  // Ethereum uses uncompressed keys
  },
  addressConfig: {
    strategy: 'ethereum'  // Ethereum strategy handles everything
  },
  addressPrefix: '0x'
};

const ethWallet = await Wallet.fromMnemonic(
  mnemonic, 
  ['m/44\'/60\'/0\'/0/0'], 
  ethConfig
);

// Example 3: Create wallet with custom algorithm implementation
const customAlgo: IAlgo = {
  name: 'custom-algo',
  makeKeypair: (privkey) => { /* custom implementation */ },
  compress: (pubkey) => { /* custom implementation */ },
  uncompress: (pubkey) => { /* custom implementation */ },
  sign: async (msg, privkey) => { /* custom implementation */ },
  verify: async (sig, msg, pubkey) => { /* custom implementation */ }
};

const customConfig: IWalletConfig = {
  privateKeyConfig: {
    algo: customAlgo
  },
  publicKeyConfig: {
    compressed: true
  },
  addressConfig: {
    strategy: customStrategy  // Use custom strategy object
  }
};

// Example 4: Override compression when deriving public key
const privateKey = wallet.privateKeys[0];
const ethStylePublicKey = privateKey.toPublicKey({
  compressed: false  // Override to uncompressed for Ethereum
});

// Example 5: Working with addresses
// Create address from public key
const publicKey = privateKey.toPublicKey();
const cosmosAddress = Address.fromPublicKey(
  publicKey,
  { strategy: 'cosmos' },
  'cosmos'
);

// Parse existing address
const existingAddress = Address.fromString(
  'cosmos1234...', 
  { strategy: 'cosmos' }
);

// Validate address
console.log(existingAddress.isValid()); // true if valid format and checksum

// Get raw bytes
const addressBytes = existingAddress.toBytes();

// Different chain, same public key
const osmoAddress = Address.fromPublicKey(
  publicKey,
  { strategy: 'cosmos' },  // Same strategy
  'osmo'  // Different prefix
);
```

### Configuration Builders

To simplify configuration creation, we can provide builder functions:

```typescript
// Configuration builder helpers
function createCosmosConfig(prefix: string = 'cosmos', passphrase?: string): IWalletConfig {
  return {
    privateKeyConfig: {
      algo: 'secp256k1',
      passphrase
    },
    publicKeyConfig: {
      compressed: true
    },
    addressConfig: {
      strategy: 'cosmos'  // Use preset strategy
    },
    addressPrefix: prefix
  };
}

function createEthereumConfig(passphrase?: string): IWalletConfig {
  return {
    privateKeyConfig: {
      algo: 'secp256k1',
      passphrase
    },
    publicKeyConfig: {
      compressed: false  // Ethereum uses uncompressed keys
    },
    addressConfig: {
      strategy: 'ethereum'  // Use preset strategy
    },
    addressPrefix: '0x'
  };
}

function createBitcoinConfig(network: 'mainnet' | 'testnet' = 'mainnet', passphrase?: string): IWalletConfig {
  return {
    privateKeyConfig: {
      algo: 'secp256k1',
      passphrase
    },
    publicKeyConfig: {
      compressed: true
    },
    addressConfig: {
      strategy: 'bitcoin'  // Use preset strategy
    },
    addressPrefix: network === 'mainnet' ? '1' : 'm'  // or 'bc1' for bech32
  };
}

// Example of custom address strategy
function createCustomAddressConfig(): IWalletConfig {
  const customStrategy: IAddressStrategy = {
    name: 'custom',
    preprocessPublicKey: (bytes, compressed, algo) => {
      // Custom preprocessing
      return compressed ? bytes : algo.compress(bytes);
    },
    hash: (bytes) => {
      // Custom hash: double SHA256
      return sha256(sha256(bytes));
    },
    encode: (bytes, prefix = 'custom') => {
      // Custom encoding
      return prefix + '1' + Base64.encode(bytes);
    },
    decode: (address) => {
      // Custom decoding
      const parts = address.split('1');
      return {
        bytes: Base64.decode(parts[1]),
        prefix: parts[0]
      };
    },
    checksum: (address) => {
      // Custom checksum logic
      return address + calculateCustomChecksum(address);
    },
    extractPrefix: (address) => {
      const parts = address.split('1');
      return parts[0];
    }
  };

  return {
    privateKeyConfig: {
      algo: 'secp256k1'
    },
    publicKeyConfig: {
      compressed: true
    },
    addressConfig: {
      strategy: customStrategy  // Use custom strategy object
    },
    addressPrefix: 'custom'
  };
}

// Usage with builders
const cosmosWallet = await Wallet.fromMnemonic(
  mnemonic,
  hdPaths,
  createCosmosConfig('cosmos', 'my-passphrase')
);

const osmoWallet = await Wallet.fromMnemonic(
  mnemonic,
  hdPaths,
  createCosmosConfig('osmo')  // Same config, different prefix
);

const ethWallet = await Wallet.fromMnemonic(
  mnemonic,
  ethPaths,
  createEthereumConfig()
);
```

### Multi-chain Wallet Example

```typescript
// Example: Multi-chain wallet with same mnemonic
async function createMultiChainWallet(mnemonic: string) {
  // Cosmos wallet
  const cosmosWallet = await Wallet.fromMnemonic(
    mnemonic,
    ['m/44\'/118\'/0\'/0/0', 'm/44\'/118\'/0\'/0/1'],
    createCosmosConfig('cosmos')
  );

  // Ethereum wallet
  const ethWallet = await Wallet.fromMnemonic(
    mnemonic,
    ['m/44\'/60\'/0\'/0/0'],
    createEthereumConfig()
  );

  // Osmosis wallet (same derivation as Cosmos but different prefix)
  const osmoWallet = await Wallet.fromMnemonic(
    mnemonic,
    ['m/44\'/118\'/0\'/0/0'],
    createCosmosConfig('osmo')
  );

  return { cosmosWallet, ethWallet, osmoWallet };
}
```

## API Design Philosophy

The configuration system is designed to be flexible and user-friendly:

1. **Dual Input Support**: Algorithm fields accept both:
   - **Strings**: For common presets (e.g., `'secp256k1'`, `'ed25519'`)
   - **Objects**: For custom implementations (e.g., custom `IAlgo` instance)

2. **Clear Separation of Concerns**:
   - **Private Keys**: Only need algorithm configuration (no hash function)
   - **Public Keys**: Inherit algorithm from private key, only compression is configurable
   - **Addresses**: Use strategies that encapsulate all hashing and encoding logic (optional - not all chains use addresses)
   - **Signing/Verification**: Caller is responsible for hashing data if needed

3. **Algorithm Consistency**: A public key must use the same algorithm as its corresponding private key because:
   - They are mathematically linked pairs
   - The public key is derived from the private key using the algorithm's specific operations
   - Signature verification requires the same algorithm used for signing

4. **Internal Resolution**: The `resolveAlgo` and `resolveAddressStrategy` functions are internal implementation details, not exposed in the public API. Users simply pass strings or objects.

5. **Type Safety**: TypeScript ensures type safety while allowing flexibility through union types.

6. **Optional Address Generation**: The `toAddress` method is optional on `IPublicKey` because:
   - Some chains (e.g., Solana) use public keys directly as addresses
   - This allows chain-specific implementations to omit unnecessary functionality
   - Keeps the interface flexible for different blockchain architectures

Example:
```typescript
// Both of these are valid and equivalent:
const config1: IPrivateKeyConfig = {
  algo: 'secp256k1'  // String preset
};

const config2: IPrivateKeyConfig = {
  algo: Secp256k1Algo  // Direct IAlgo instance
};

// Address strategies encapsulate the hashing logic
const addressConfig1: IAddressConfig = {
  strategy: 'cosmos'  // Uses SHA256 → RIPEMD160 internally
};

const addressConfig2: IAddressConfig = {
  strategy: 'ethereum'  // Uses Keccak256 internally
};
```

## Solana-Style Implementation

For chains that don't use separate addresses, you can implement a simplified public key:

```typescript
export class SolanaPublicKey implements IPublicKey {
  private _algo: IAlgo;
  
  constructor(
    public readonly value: ICryptoBytes,
    public readonly algo: IAlgo | string = 'ed25519',
    public readonly compressed: boolean = false  // Ed25519 doesn't use compression
  ) {
    this._algo = resolveAlgo(algo);
  }

  // toAddress is not implemented - Solana uses public keys directly
  // The interface allows this since toAddress is optional

  async verify(data: Uint8Array, signature: ICryptoBytes): Promise<boolean> {
    return this._algo.verify(
      signature.value,
      data,
      this.value.value
    );
  }

  toHex(): string {
    return this.value.toHex();
  }

  toBase64(): string {
    // Solana typically uses base58, but base64 is also supported
    return this.value.toBase64();
  }

  toBase58(): string {
    // Solana's preferred encoding
    return bs58.encode(this.value.value);
  }
}
```

## Architecture Benefits

1. **Separation of Concerns**:
   - Private keys are isolated in `IPrivateKey` with signing capabilities
   - Public keys handle verification without access to private data
   - Addresses are chain-agnostic with proper validation
   - Wallets manage multiple keys without exposing internals

2. **Configuration-Driven Design**:
   - Each component has its own configuration interface
   - Configurations can be overridden at any level
   - Preset configurations for common use cases

3. **Extensibility**:
   - Easy to add new algorithms by implementing `IAlgo`
   - Easy to add new chains by implementing `IAddressStrategy`
   - Custom hash functions and encoders supported

4. **Type Safety**:
   - Strong TypeScript interfaces throughout
   - Union types allow flexibility while maintaining safety
   - Clear separation between public and private data

5. **Multi-Chain Support**:
   - Same mnemonic can generate keys for multiple chains
   - Address generation is strategy-based
   - Configuration determines chain-specific behavior

## Implementation Strategy

1. **Key Derivation Flow**:
   ```
   Mnemonic → Seed → HD Derivation → Private Keys → Public Keys → Addresses
   ```

2. **Configuration Resolution**:
   - String inputs are resolved to concrete implementations internally
   - Resolution happens once during object construction
   - No runtime overhead for string resolution

3. **Error Handling**:
   - Clear error messages for unknown presets
   - Validation at each step of the process
   - Type-safe error propagation

4. **Testing Strategy**:
   - Unit tests for each component
   - Integration tests with known test vectors
   - Cross-chain compatibility tests