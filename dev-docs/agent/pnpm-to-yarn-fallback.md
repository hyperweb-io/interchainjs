# PNPM to Yarn Fallback Guide

This document provides instructions for reverting from pnpm back to yarn if pnpm doesn't work perfectly in the project.

## Overview

This project was migrated from yarn to pnpm as the primary package manager. If you encounter issues with pnpm and need to fall back to yarn, this guide will help you revert all the changes.

## Quick Fallback Commands

### 1. Global Find and Replace Commands

Use these commands from the project root to revert all documentation:

```bash
# Revert installation commands
find . -name "*.md" -not -path "./docs/*" -not -path "*/dist/*" -not -path "*/node_modules/*" -exec sed -i '' 's/pnpm add /yarn add /g' {} \;

# Revert development commands
find . -name "*.md" -not -path "./docs/*" -not -path "*/dist/*" -not -path "*/node_modules/*" -exec sed -i '' 's/pnpm install/yarn/g' {} \;

# Revert script commands
find . -name "*.md" -not -path "./docs/*" -not -path "*/dist/*" -not -path "*/node_modules/*" -exec sed -i '' 's/pnpm \([a-zA-Z0-9:_-]*\)/yarn \1/g' {} \;

# Revert tool execution
find . -name "*.md" -not -path "./docs/*" -not -path "*/dist/*" -not -path "*/node_modules/*" -exec sed -i '' 's/pnpm exec /yarn /g' {} \;
```

### 2. Specific File Reversions

#### Main README.md
```bash
# Change primary installation method back to yarn
sed -i '' 's/You can install interchainjs using pnpm:/You can install interchainjs using yarn:/g' README.md
sed -i '' 's/pnpm add interchainjs/yarn add interchainjs/g' README.md
sed -i '' 's/pnpm add @interchainjs\/cosmos/yarn add @interchainjs\/cosmos/g' README.md
```

#### Migration Guide
```bash
# Revert migration-from-cosmjs.md
sed -i '' 's/pnpm add @interchainjs\/cosmos @interchainjs\/auth @interchainjs\/cosmos-types/yarn add @interchainjs\/cosmos @interchainjs\/auth @interchainjs\/cosmos-types/g' migration-from-cosmjs.md
```

#### Scripts
```bash
# Revert generate_meta_json.sh
sed -i '' 's/pnpm exec ts-node/npx ts-node/g' scripts/docs/generate_meta_json.sh
sed -i '' 's/pnpm not found. Please install pnpm./npx not found. Please install Node.js and npm./g' scripts/docs/generate_meta_json.sh
```

## Manual Reversion Steps

### 1. Package Installation Commands

Replace these patterns across all markdown files:

| Current (pnpm) | Revert to (yarn) |
|----------------|-------------------|
| `pnpm add [package]` | `yarn add [package]` |
| `pnpm install` | `yarn` |
| `pnpm [script]` | `yarn [script]` |
| `pnpm exec [tool]` | `yarn [tool]` |

### 2. Starship Commands

All starship commands should be reverted:

| Current (pnpm) | Revert to (yarn) |
|----------------|-------------------|
| `pnpm starship setup` | `yarn starship setup` |
| `pnpm starship:all` | `yarn starship:all` |
| `pnpm starship:test` | `yarn starship:test` |
| `pnpm starship:clean` | `yarn starship:clean` |
| `pnpm starship get-pods` | `yarn starship get-pods` |

### 3. Development Commands

| Current (pnpm) | Revert to (yarn) |
|----------------|-------------------|
| `pnpm build:dev` | `yarn build:dev` |
| `pnpm codegen` | `yarn codegen` |
| `pnpm build` | `yarn build` |
| `pnpm publish` | `yarn publish` |

## Files That Need Manual Review

### Primary Documentation Files
- `README.md` - Main installation instructions
- `migration-from-cosmjs.md` - Migration guide
- All `networks/*/README.md` files
- All `packages/*/README.md` files
- All `libs/*/README.md` files

### Starship Documentation
- `networks/cosmos/starship/README.md`
- `networks/injective/starship/README.md`
- `networks/ethereum/starship/README.md`
- `libs/interchainjs/starship/README.md`

### Special Files
- `networks/injective/starship/TestnetGuide.md`
- `networks/cosmos/rpc/README.md`
- `scripts/docs/generate_meta_json.sh`

## Package Manager Setup

### 1. Remove pnpm artifacts
```bash
# Remove pnpm lock file
rm -f pnpm-lock.yaml

# Remove pnpm workspace file (if you want to revert completely)
# rm -f pnpm-workspace.yaml
```

### 2. Reinstall with yarn
```bash
# Install yarn globally if not present
npm install -g yarn

# Install dependencies with yarn
yarn install
```

## Verification Commands

After reverting, verify the changes:

```bash
# Check for any remaining pnpm references
grep -r "pnpm" --include="*.md" . | grep -v "./docs/" | grep -v "/dist/" | grep -v "/node_modules/"

# Verify yarn commands work
yarn build
yarn test
```

## Notes

- The `pnpm-workspace.yaml` file can remain as it's compatible with yarn workspaces
- Package.json scripts don't need changes as they use relative commands
- Only documentation and shell scripts need to be reverted
- Keep the `docs/` and `dist/` folders excluded from changes

## Emergency Revert Script

Create this script for quick reversion:

```bash
#!/bin/bash
# emergency-revert-to-yarn.sh

echo "Reverting documentation from pnpm to yarn..."

# Main installation commands
find . -name "*.md" -not -path "./docs/*" -not -path "*/dist/*" -not -path "*/node_modules/*" -exec sed -i '' 's/pnpm add /yarn add /g' {} \;
find . -name "*.md" -not -path "./docs/*" -not -path "*/dist/*" -not -path "*/node_modules/*" -exec sed -i '' 's/pnpm install/yarn/g' {} \;

# Script commands
find . -name "*.md" -not -path "./docs/*" -not -path "*/dist/*" -not -path "*/node_modules/*" -exec sed -i '' 's/pnpm \([a-zA-Z0-9:_-]*\)/yarn \1/g' {} \;

# Tool execution
find . -name "*.md" -not -path "./docs/*" -not -path "*/dist/*" -not -path "*/node_modules/*" -exec sed -i '' 's/pnpm exec /yarn /g' {} \;

# Update main README
sed -i '' 's/You can install interchainjs using pnpm:/You can install interchainjs using yarn:/g' README.md

# Update scripts
sed -i '' 's/pnpm exec ts-node/npx ts-node/g' scripts/docs/generate_meta_json.sh

echo "Reversion complete. Please review changes and test functionality."
```

Make it executable:
```bash
chmod +x dev-docs/agent/emergency-revert-to-yarn.sh
```
