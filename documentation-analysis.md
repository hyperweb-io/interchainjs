# Documentation Structure Analysis

## Overview
This document provides a comprehensive analysis of the documentation structure and workflow based on the scripts `scripts/docs/copy_readmes.sh` and `scripts/docs/generate_meta_json.sh`.

## Documentation Scripts

### 1. `scripts/docs/copy_readmes.sh`
**Purpose**: Copies README.md files from source directories and converts them to documentation format.

**Process**:
- Searches for README.md files in `libs/`, `packages/`, and `networks/` directories
- Excludes files in `dist/`, `node_modules/`, and specific excluded directories
- Copies each README.md to the `docs/` directory structure as `index.mdx`
- Copies root-level documentation files

**Excluded Directories**:
- `*/injective-vue/*`
- `*/injective-react/*`
- `*/injectivejs/*`
- `*/interchain-vue/*`

### 2. `scripts/docs/generate_meta_json.sh` + `generate_meta_json.ts`
**Purpose**: Generates `_meta.json` files for documentation navigation and ordering.

**Process**:
- Creates `_meta.json` files in each documentation directory
- Defines priority-based ordering for documentation sections
- Converts directory/file names to readable titles
- Handles special cases like "index" → "Overview"

## Complete Documentation File Mapping

### Root Level Documentation
| Source File | Target File | Description |
|-------------|-------------|-------------|
| `README.md` | `docs/index.mdx` | Main project README |
| `migration-from-cosmjs.md` | `docs/migration-from-cosmjs.mdx` | Migration guide |

### Libraries (`libs/` → `docs/libs/`)

#### Processed Libraries
| Source | Target | Priority | Title |
|--------|--------|----------|-------|
| `libs/cosmos-types/README.md` | `docs/libs/cosmos-types/index.mdx` | 60 | Cosmos Types |
| `libs/interchainjs/README.md` | `docs/libs/interchainjs/index.mdx` | 50 | Interchain JS |
| `libs/interchain-react/README.md` | `docs/libs/interchain-react/index.mdx` | 40 | Interchain React |

#### Excluded Libraries
- `libs/injective-vue/README.md` (excluded by script)
- `libs/injective-react/README.md` (excluded by script)
- `libs/injectivejs/README.md` (excluded by script)
- `libs/interchain-vue/README.md` (excluded by script)

### Packages (`packages/` → `docs/packages/`)
| Source | Target | Description |
|--------|--------|-------------|
| `packages/amino/README.md` | `docs/packages/amino/index.mdx` | Amino encoding package |
| `packages/auth/README.md` | `docs/packages/auth/index.mdx` | Authentication package |
| `packages/crypto/README.md` | `docs/packages/crypto/index.mdx` | Cryptographic utilities |
| `packages/encoding/README.md` | `docs/packages/encoding/index.mdx` | Encoding utilities |
| `packages/math/README.md` | `docs/packages/math/index.mdx` | Mathematical utilities |
| `packages/pubkey/README.md` | `docs/packages/pubkey/index.mdx` | Public key utilities |
| `packages/types/README.md` | `docs/packages/types/index.mdx` | Type definitions |
| `packages/utils/README.md` | `docs/packages/utils/index.mdx` | General utilities |

### Networks (`networks/` → `docs/networks/`)
| Source | Target | Priority | Title |
|--------|--------|----------|-------|
| `networks/cosmos/README.md` | `docs/networks/cosmos/index.mdx` | 60 | Cosmos |
| `networks/ethereum/README.md` | `docs/networks/ethereum/index.mdx` | 50 | Ethereum |
| `networks/injective/README.md` | `docs/networks/injective/index.mdx` | 40 | Injective |

### Manual Documentation Files
These files exist in the docs directory but are not auto-generated:

| File | Location | Description |
|------|----------|-------------|
| `auth-wallet-signer.md` | `docs/advanced/` | Auth, wallet, and signer integration guide |
| `auth.md` | `docs/advanced/` | Authentication documentation |
| `signer.md` | `docs/advanced/` | Signer documentation |
| `tutorial.md` | `docs/advanced/` | Tutorial documentation |
| `wallet.md` | `docs/advanced/` | Wallet documentation |

## Priority System

### Top-Level Priorities
| Section | Priority | Title |
|---------|----------|-------|
| Migration Guide | 110 | Migration from CosmJS |
| Networks | 100 | Networks |
| Libraries | 90 | Libraries |
| Packages | 80 | Packages |
| Index Pages | 9999 | Overview (always last) |

### Library-Specific Priorities
| Library | Priority | Title |
|---------|----------|-------|
| cosmos-types | 60 | Cosmos Types |
| interchainjs | 50 | Interchain JS |
| interchain-react | 40 | Interchain React |

### Network-Specific Priorities
| Network | Priority | Title |
|---------|----------|-------|
| cosmos | 60 | Cosmos |
| ethereum | 50 | Ethereum |
| injective | 40 | Injective |

## Generated Metadata Files
The following `_meta.json` files are automatically generated:
- `docs/_meta.json`
- `docs/libs/_meta.json`
- `docs/packages/_meta.json`
- `docs/networks/_meta.json`
- `docs/advanced/_meta.json`
- And recursively for all subdirectories

## Workflow Summary
1. **Copy Phase**: `copy_readmes.sh` copies README.md files from source directories to docs/ as index.mdx
2. **Metadata Phase**: `generate_meta_json.sh` creates navigation metadata with priorities and titles
3. **Result**: Organized documentation structure with automatic navigation and ordering

## File Processing Rules
- README.md → index.mdx conversion
- Directory names become navigation titles
- Hyphens in names become spaces
- Words are automatically capitalized
- Special handling for "index" → "Overview"
- Priority-based sorting with alphabetical fallback
