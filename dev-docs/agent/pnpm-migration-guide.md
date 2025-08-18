## Overview / Summary

This guide documents how we migrated the monorepo from Yarn to pnpm and stabilized CI E2E and unit test workflows. It contains a repeatable step-by-step process, concrete config examples, and a troubleshooting log with root-cause analyses of issues encountered (and how we resolved them).

## Prerequisites

- Node.js 18+ (we use Node 20 in CI)
- pnpm 8+ installed locally
- Basic familiarity with:
  - Workspaces/monorepos
  - TypeScript project references and Jest
  - GitHub Actions

## Step-by-step Migration Process

1) Install pnpm
- Locally: `npm i -g pnpm@^8`
- Verify: `pnpm -v`
- Optionally pin via corepack: `corepack enable` then `corepack use pnpm@8`

2) Set the package manager in the root package.json
- Add a packageManager field so tools/IDEs align on pnpm:

```json
{
  "packageManager": "pnpm@8.15.9"
}
```

3) Import the existing Yarn lockfile
- From the repo root, run:

```bash
pnpm import   # reads yarn.lock and generates pnpm-lock.yaml
```

- After importing, you may remove yarn.lock to avoid confusion and commit pnpm-lock.yaml.

4) Align scripts to pnpm
- Most Yarn commands map 1:1:
  - `yarn install` -> `pnpm install`
  - `yarn build`   -> `pnpm build`
  - `yarn test`    -> `pnpm test`
  - `yarn workspace <pkg> <cmd>` -> `pnpm --filter <pkg> <cmd>`
- Example package.json changes:

```json
{
  "scripts": {
    "install:ci": "pnpm install --frozen-lockfile=false",
    "build": "tsc -b",
    "test": "jest"
  }
}
```

5) Configure pnpm workspaces
- Ensure a pnpm-workspace.yaml exists at the root and includes all packages. Example (adjust to your repo layout):

```yaml
packages:
  - packages/*
  - networks/*
  - libs/*
```

6) TypeScript project tweaks for tests
- If tests reference Node/Jest globals, add types to each affected tsconfig:

```json
{
  "compilerOptions": {
    "types": ["node", "jest"]
  }
}
```

- We applied this to several packages to eliminate TS2688 errors (e.g., packages/encoding, packages/crypto, libs/cosmos-types, packages/amino, packages/auth, packages/pubkey).

7) Jest configuration tweaks for monorepo and pnpm
- Keep dist folders ignored (avoids haste-map collisions):

```js
module.exports = {
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
};
```

- For TypeScript tests:

```js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json', babelConfig: false }],
  },
};
```

- Map problematic subpath imports used at test-time to local sources where necessary (cosmos example below in Troubleshooting Guide).

8) CI/CD pipeline update for pnpm (GitHub Actions)
- Use pnpm/action-setup and cache the pnpm store:

```yaml
- uses: actions/setup-node@v4
  with:
    node-version: 20

- uses: pnpm/action-setup@v2
  with:
    version: 8
    run_install: false

- name: Get pnpm store directory
  run: echo "STORE_PATH=$(pnpm store path --silent)" >> $GITHUB_ENV

- uses: actions/cache@v3
  with:
    path: ${{ env.STORE_PATH }}
    key: Linux-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}
    restore-keys: Linux-pnpm-store-

- name: Install Dependencies
  run: pnpm install --no-frozen-lockfile
```

- Then build and test with pnpm (optionally using filters):

```yaml
- name: Build
  run: pnpm -r run build

- name: Test
  run: pnpm -r run test
```

## Troubleshooting Guide (with Root Causes and Fixes)

This section captures what we hit during migration and how we fixed it. Items are grouped by category and reference concrete fixes we made.

1) Cosmos E2E/Jest circular dependency at test time
- Symptoms
  - Jest error: Cannot find module '@interchainjs/cosmos' from libs/cosmos-types/dist/extern.js
  - Circular relationship: libs/cosmos-types importing @interchainjs/cosmos while networks/cosmos depends on libs/cosmos-types.
- Root Cause
  - In Jest (and without bundling), runtime resolution uses built outputs; importing the published package name inside the same workspace can create a circular resolution path or shadow local sources.
- Fix
  - In networks/cosmos/jest.starship.config.js add moduleNameMapper entries to point package imports to local sources during tests:

```js
moduleNameMapper: {
  '^@interchainjs/cosmos$': '<rootDir>/src/index.ts',
  '^@interchainjs/cosmos/utils$': '<rootDir>/src/utils.ts',
  '^@interchainjs/cosmos/types/signing-client$': '<rootDir>/src/types/signing-client.ts',
}
```

  - Additionally, in networks/cosmos/starship/__tests__/* changed some imports from '@interchainjs/cosmos' to '../../src' (and likewise for wallets) to avoid test-time circularity when directly exercising local sources.
- Outcome
  - Cosmos tests proceeded further without the circular import failure.

2) TypeScript TS2688 errors for Node/Jest types (minimatch types noise)
- Symptoms
  - Errors about missing types (Node, Jest) and deprecation noise around @types/minimatch in the dependency tree.
- Root Cause
  - Several packages compiled tests without the Node/Jest types in scope. pnpm’s stricter resolution made this more obvious.
- Fix
  - Add `"types": ["node", "jest"]` to affected packages’ tsconfig.json compilerOptions.
- Outcome
  - Type checking and test builds stabilized across packages.

3) Jest haste-map naming collision warning
- Symptoms
  - Warning: Haste module naming collision for the package name when both <rootDir>/package.json and <rootDir>/dist/package.json are visible.
- Root Cause
  - Jest’s haste-map picks up two files that both declare the same name field.
- Fix
  - Keep `modulePathIgnorePatterns: ['<rootDir>/dist/']` in Jest configs. This makes it a harmless warning or eliminates it depending on project layout. It did not break the tests but is worth keeping ignored.

4) WebSocket not defined in Node for Ethereum WebSocket tests (log noise only)
- Symptoms
  - Console error: "WebSocket is not defined" while running a test that attempts a real WebSocket connection in Node.
- Root Cause
  - The test is robust (skips if cannot connect); Node test environment lacks a browser WebSocket global.
- Fix
  - No action needed; the test already guards and skips when unavailable. Not a migration blocker.

5) CI cache and lockfile compatibility warnings
- Symptoms
  - pnpm warning: "Ignoring not compatible lockfile" when switching from Yarn to pnpm.
- Root Cause
  - Expected when the repo still contains legacy lockfiles or after lockfile format changes.
- Fix
  - Use `pnpm install --no-frozen-lockfile` on first CI runs post-migration; ensure pnpm-lock.yaml is committed.

### Attempted but not required
- Changing Injective tests’ imports to local sources — not necessary since those tests correctly depend on the cosmos package as a published-style dependency and did not suffer the same circularity.
- Initially mapped `@interchainjs/cosmos/utils` to `src/utils/index.ts`; corrected to `src/utils.ts` after verifying actual file layout.

### Future considerations
- If additional subpath imports are introduced in libraries that also consume each other during tests, proactively extend moduleNameMapper to point to local sources to avoid circularities in Jest.
- Consider a dedicated test-only entrypoint for packages used intra-repo to avoid published-name imports during unit/E2E tests.

## Lessons Learned

- pnpm’s strict and deterministic linking makes previously hidden type/reference issues surface earlier (good!).
- For monorepos with cross-package test execution, avoid importing sibling packages by their published names inside tests unless you’re intentionally validating the built artifacts. Prefer local source imports or add explicit moduleNameMapper rules.
- Keep Jest configs minimal but consistent across packages (ignore dist, set ts-jest transform, set Node environment).
- Ensure tsconfig in each package includes the types its tests rely on to avoid TS2688.

## Future Recommendations

- Adopt a shared Jest base config (e.g., at repo root) and extend per package to reduce drift.
- Add a lightweight script that verifies common tsconfig settings (e.g., required types) across all packages.
- Consider adding persistent pnpm store caching across CI jobs to further speed builds.
- Periodically prune deprecated or unused @types/ dependencies after migration.
- For E2E tests, consider dedicated test entrypoints or explicit mapping rules to reduce circular dependency risk.

