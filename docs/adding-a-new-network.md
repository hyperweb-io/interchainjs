# Adding a New Network to InterchainJS

This guide explains how to add a new blockchain network to the InterchainJS project.

## Overview

InterchainJS is designed to be a universal signing interface for various blockchain networks. Adding a new network involves implementing the necessary components to interact with that blockchain, including:

1. Transaction signing
2. Account management
3. RPC communication
4. Testing infrastructure

## Directory Structure

When adding a new network, follow this directory structure:

```
networks/
└── your-network/
    ├── package.json
    ├── tsconfig.json
    ├── tsconfig.esm.json
    ├── README.md
    ├── src/
    │   ├── index.ts
    │   ├── signers/
    │   │   └── [Signer implementations]
    │   ├── utils/
    │   │   └── [Utility functions]
    │   ├── types/
    │   │   └── [Type definitions]
    │   └── rpc/
    │       └── [RPC client implementation]
    └── starship/
        ├── configs/
        │   └── [Starship configuration files]
        └── __tests__/
            └── [Test files]
```

## Implementation Steps

### 1. Create the Basic Structure

Start by creating the directory structure and basic configuration files:

```bash
mkdir -p networks/your-network/src/{signers,utils,types,rpc}
mkdir -p networks/your-network/starship/{configs,__tests__}
```

### 2. Configure package.json

Create a `package.json` file with the necessary dependencies and scripts:

```json
{
  "name": "@interchainjs/your-network",
  "version": "1.11.11",
  "description": "Transaction codec and client to communicate with your-network blockchain",
  "main": "index.js",
  "module": "esm/index.js",
  "types": "index.d.ts",
  "author": "Hyperweb <developers@hyperweb.io>",
  "homepage": "https://github.com/hyperweb-io/interchainjs",
  "repository": {
    "type": "git",
    "url": "https://github.com/hyperweb-io/interchainjs"
  },
  "license": "MIT",
  "publishConfig": {
    "access": "public",
    "directory": "dist"
  },
  "scripts": {
    "copy": "copyfiles -f ../../LICENSE-MIT ../../LICENSE-Apache README.md package.json dist",
    "clean": "rimraf dist/**",
    "prepare": "npm run build",
    "build": "npm run clean; tsc; tsc -p tsconfig.esm.json; npm run copy",
    "build:dev": "npm run clean; tsc --declarationMap; tsc -p tsconfig.esm.json; npm run copy",
    "lint": "eslint . --fix",
    "starship": "starship --config ./starship/configs/your-network.yaml",
    "starship:stop": "starship stop",
    "starship:test": "npx jest --preset ts-jest starship/__tests__/token.test.ts"
  },
  "dependencies": {
    "@interchainjs/types": "1.11.11",
    "@interchainjs/utils": "1.11.11",
    // Add network-specific dependencies here
  },
  "keywords": [
    "your-network",
    "blockchain",
    "transaction"
  ]
}
```

### 3. Define Types

Create type definitions for your network in the `src/types/` directory:

- `signer.ts`: Define interfaces for signers
- `transaction.ts`: Define transaction-related types
- `network.ts`: Define network configuration
- `index.ts`: Export all types

### 4. Implement Signers

Create signer implementations in the `src/signers/` directory. Typically, you'll want to implement:

- A signer that works with private keys
- A signer that works with browser wallets (if applicable)

### 5. Implement RPC Client

Create an RPC client in the `src/rpc/` directory to communicate with the blockchain:

- Define methods for interacting with the blockchain
- Handle authentication and error handling
- Implement transaction broadcasting

### 6. Implement Utilities

Create utility functions in the `src/utils/` directory:

- Address validation and formatting
- Denomination conversions
- Common helper functions

### 7. Create Main Exports

Create an `index.ts` file to export all the components:

```typescript
// Main exports
export * from './signers/YourSigner';

// Types
export * from './types';

// Utils
export * from './utils/address';
export * from './utils/common';

// RPC
export * from './rpc/client';
```

### 8. Configure Starship for Testing

Create a Starship configuration file in `starship/configs/` to set up a test environment for your network.

### 9. Write Tests

Create test files in `starship/__tests__/` to test your implementation.

### 10. Create Documentation

Write a comprehensive README.md file explaining how to use your network implementation.

### 11. Update GitHub Workflows

Add your network to the GitHub workflows for testing.

## Starship Integration

To add support for a new chain in Starship, follow these steps:

1. Build a Docker image for the chain – ensure it includes the chain binary and standard utilities.
2. Add chain defaults in the Helm chart – insert a new entry under defaultChains in starship/charts/defaults.yaml.
3. Update the schema – include the chain name in the enum at .properties.chains.items.properties.name.enum within starship/charts/devnet/values.schema.json.
4. Create an end‑to‑end test configuration in starship/tests/e2e/configs.
5. Open a PR with the Docker image configuration, Helm changes, and tests once everything works.

## Phased Implementation Approach

When implementing a new network, consider using a phased approach:

### Phase 1: Essential Core

- RPC client for basic blockchain interaction
- Transaction signing and broadcasting
- Address generation and validation
- Basic wallet functionality
- Network configuration (mainnet, testnet, etc.)

### Phase 2: Advanced Transactions

- Support for complex transaction types
- Multi-signature support
- Advanced scripting capabilities
- Enhanced security features

### Phase 3: Wallet Integrations & Light Clients

- Hardware wallet support
- Browser wallet integrations
- Light client implementations
- Advanced features specific to the network

## Best Practices

1. **Follow Existing Patterns**: Look at existing network implementations (Cosmos, Ethereum, Injective, Bitcoin) for guidance.
2. **Type Safety**: Ensure all functions and interfaces are properly typed.
3. **Error Handling**: Implement proper error handling for RPC calls and other operations.
4. **Documentation**: Document all public APIs and provide usage examples.
5. **Testing**: Write comprehensive tests for all functionality.
6. **Modular Design**: Design your implementation to be modular and extensible.
7. **Minimal Dependencies**: Use minimal dependencies to keep the package lightweight.
