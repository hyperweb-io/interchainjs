# Agent Documentation

This directory contains documentation and tools created by AI agents for project maintenance and fallback procedures.

## Contents

### 📄 Documentation Files

- **`pnpm-to-yarn-fallback.md`** - Comprehensive guide for reverting from pnpm back to yarn
- **`README.md`** - This file, explaining the agent documentation structure

### 🔧 Scripts

- **`emergency-revert-to-yarn.sh`** - Automated script to revert all pnpm references back to yarn

## Background

This project underwent a migration from yarn to pnpm as the primary package manager. All documentation was updated to reflect this change, including:

- Installation commands (`npm install` → `pnpm add`)
- Development commands (`yarn` → `pnpm install`)
- Script execution (`yarn [script]` → `pnpm [script]`)
- Tool execution (`npx` → `pnpm exec`)
- Starship commands (`yarn starship:*` → `pnpm starship:*`)

## When to Use Fallback

Consider using the fallback documentation and scripts if:

1. **pnpm compatibility issues** - Some tools or CI/CD systems don't work well with pnpm
2. **Team preference** - The development team prefers to stick with yarn
3. **Performance issues** - pnpm causes unexpected performance problems
4. **Dependency resolution problems** - pnpm's strict dependency resolution causes issues

## Quick Fallback

### Option 1: Automated Script (Recommended)
```bash
# Run the emergency revert script
./dev-docs/agent/emergency-revert-to-yarn.sh
```

### Option 2: Manual Process
Follow the detailed instructions in `pnpm-to-yarn-fallback.md`

## Files Modified During Migration

The following files were updated during the pnpm migration:

### 🏠 Root Files
- `README.md`
- `migration-from-cosmjs.md`

### 📦 Package Documentation
- `packages/auth/README.md`
- `packages/types/README.md`
- `packages/utils/README.md`

### 🌐 Network Documentation
- `networks/cosmos/README.md`
- `networks/injective/README.md`
- `networks/ethereum/README.md`
- `networks/cosmos/rpc/README.md`

### 📚 Library Documentation
- `libs/interchainjs/README.md`
- `libs/injectivejs/README.md`
- `libs/injective-vue/README.md`
- `libs/injective-react/README.md`
- `libs/cosmos-types/README.md`
- `libs/interchain-react/README.md`
- `libs/interchain-vue/README.md`

### 🚀 Starship Documentation
- `networks/cosmos/starship/README.md`
- `networks/injective/starship/README.md`
- `networks/ethereum/starship/README.md`
- `libs/interchainjs/starship/README.md`
- `networks/injective/starship/TestnetGuide.md`

### 🔧 Scripts
- `scripts/docs/generate_meta_json.sh`

## Exclusions

The following directories were intentionally excluded from the migration:
- `docs/` - Documentation build output
- `*/dist/` - Package distribution files
- `*/node_modules/` - Dependencies

## Verification

After any changes, verify with:

```bash
# Check for remaining pnpm references
grep -r "pnpm" --include="*.md" . | grep -v "./docs/" | grep -v "/dist/" | grep -v "/node_modules/" | grep -v "npmjs.com"

# Test package manager commands
yarn install
yarn build
yarn test
```

## Notes

- The `pnpm-workspace.yaml` file is compatible with yarn workspaces and doesn't need to be removed
- Package.json scripts use relative commands and don't need modification
- Only documentation and shell scripts need reversion
- Always test thoroughly after any package manager changes

## Support

If you encounter issues with either the migration or fallback process, refer to:
1. The detailed fallback guide: `pnpm-to-yarn-fallback.md`
2. Project maintainers
3. The original migration commit history
