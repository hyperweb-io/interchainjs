# Fast Debug Script Creation Guide - Refined

## Overview
Streamlined process for creating debug scripts across three different input scenarios, eliminating common setup delays.

## Three Debug Scenarios

### Scenario 1: Working Test File Available
**Approach**: Direct adaptation
- Copy test file content as-is
- Remove jest wrappers (`describe`, `it`, `expect`)
- Add Starship config initialization
- Use exact same imports and patterns

### Scenario 2: Function Description Only
**Approach**: Build from specification
- Use standard Cosmos/Starship patterns
- Include comprehensive logging
- Follow documented API signatures
- Build minimal working example

### Scenario 3: Reference File Provided (⚠️ May Not Work)
**Approach**: Pattern extraction only
- **Important**: "This file is just as your reference - may not work"
- Extract structural patterns only
- Verify each step independently
- Don't copy potentially broken implementation
- Build from scratch using patterns as guide

## Universal Setup Steps

### 1. Debug Folder Structure
```
/workspace/debug/debug[NUMBER]/
├── index.ts          # Main debug script
├── package.json      # Dependencies configuration
├── logs/            # Error logs and outputs
└── DEBUG_REPORT.md  # Results summary
```

### 2. Essential Package.json
```json
{
  "name": "debug-script",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "ts-node index.ts"
  },
  "dependencies": {
    "@interchainjs/cosmos": "file:../../networks/cosmos/dist",
    "@interchainjs/ethereum": "file:../../networks/ethereum/dist",
    "@interchainjs/injective": "file:../../networks/injective/dist",
    "@interchainjs/cosmos-types": "file:../../libs/cosmos-types/dist",
    "@interchainjs/injective-react": "file:../../libs/injective-react/dist",
    "@interchainjs/injective-vue": "file:../../libs/injective-vue/dist",
    "@interchainjs/injectivejs": "file:../../libs/injectivejs/dist",
    "@interchainjs/interchain-react": "file:../../libs/interchain-react/dist",
    "@interchainjs/interchain-vue": "file:../../libs/interchain-vue/dist",
    "@interchainjs/interchainjs": "file:../../libs/interchainjs/dist",
    "@interchainjs/amino": "file:../../packages/amino/dist",
    "@interchainjs/auth": "file:../../packages/auth/dist",
    "@interchainjs/crypto": "file:../../packages/crypto/dist",
    "@interchainjs/encoding": "file:../../packages/encoding/dist",
    "@interchainjs/math": "file:../../packages/math/dist",
    "@interchainjs/pubkey": "file:../../packages/pubkey/dist",
    "@interchainjs/types": "file:../../packages/types/dist",
    "@interchainjs/utils": "file:../../packages/utils/dist",
    "starshipjs": "^3.13.0",
    "ts-node": "^10.9.1",
    "typescript": "^5.0.0"
  }
}
```

### 3. Starship Configuration (Always Required)
```typescript
import path from 'path';
import { ConfigContext, useRegistry } from 'starshipjs';

// Always initialize first, regardless of scenario
const configFile = path.join(__dirname, '..', '..', 'networks', 'cosmos', 'starship', 'configs', 'config.yaml');
ConfigContext.setConfigFile(configFile);
ConfigContext.setRegistry(await useRegistry(configFile));
```

### 4. Scenario-Specific Templates

#### Scenario 1: Working Test File
```typescript
// Copy entire test file
// Remove: describe(), it(), expect()
// Add: Starship config initialization
```

#### Scenario 2: Function Description
```typescript
// Build based on description
// Use standard patterns:
// - useChain('osmosis') for chain access
// - CosmosQueryClient for queries
// - DirectSigner/AminoSigner for signing
// - creditFromFaucet for funding
```

#### Scenario 3: Reference File (Use Cautiously)
```typescript
// Extract only:
// - Import patterns
// - Function signatures
// - Error handling structure
// Build implementation from scratch
```

### 5. Pre-Flight Checklist

**Before starting debug script**:
- [ ] Starship redirects are active (`./networks/cosmos/starship-redirect.sh`)
- [ ] Build completed successfully (`yarn build`)
- [ ] Dependencies installed (`yarn install`)
- [ ] Required modules exist in dist folders

### 6. Quick Setup Commands

```bash
# Create debug folder
mkdir -p /workspace/debug/debug0001 && cd /workspace/debug/debug0001

# Install and run
yarn install && yarn start
```

## Scenario Decision Tree

```
Input source?
├── Working test file → Copy + adapt
├── Function description → Build from spec
└── Reference file → Extract patterns only
```

## Common Issues & Fixes

| Issue | Quick Fix |
|-------|-----------|
| `Config's not initialized` | Add Starship config initialization |
| Module resolution errors | Use `file:../../path/to/dist` dependencies |
| Missing utils | Create `src/utils.ts` and rebuild |

## Time-Saving Rules

1. **Always initialize Starship config first**
2. **Use dist dependencies** - Never .tgz files
3. **Scenario-aware approach** - Don't over-engineer
4. **Build once, run many** - Avoid repeated builds
5. **Verify before trusting** - Especially with reference files

This reduces setup time from 20+ minutes to under 5 minutes across all scenarios.