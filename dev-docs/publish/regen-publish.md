# Telescope Regeneration and Publishing Process

This document outlines the step-by-step process for upgrading Telescope, regenerating code, and publishing packages. This process should be executed manually, one step at a time, to ensure proper validation at each stage.

## Overview

The process involves:
1. Upgrading the Telescope dependency
2. Updating configuration files
3. Regenerating code
4. Building and validating
5. Publishing packages

## Prerequisites

- Ensure you have the latest version of Node.js and Yarn installed
- Verify you have proper npm registry access for publishing
- Make sure you're on the correct branch for the update
- Backup current state if needed

## Step-by-Step Process

### Step 1: Upgrade Telescope Dependency

```bash
# Update @cosmology/telescope to the latest version in root package.json
yarn add @cosmology/telescope@latest
```

**Validation:**
- Check that the version in `package.json` has been updated
- Verify no dependency conflicts exist

### Step 2: Update Telescope Configuration

**File to modify:** `scripts/codegen.ts`

- Verify with the maintainer if telescope configuration options need updating
- Ensure compatibility with the new telescope version
- Update any deprecated configuration options

**Validation:**
- Review the configuration changes
- Ensure all required settings are present

### Step 3: Regenerate Code

```bash
yarn codegen
```

**What to watch for:**
- Monitor console output for any warnings or errors
- Check that all expected files are generated
- Verify no generation failures occurred

### Step 4: Build and Validate

```bash
yarn build
```

**⚠️ Important:** The build command may exit with success code even if there are compilation errors. You must manually review the output for:
- TypeScript compilation errors
- Missing dependencies
- Type mismatches
- Import/export issues

**Validation checklist:**
- [ ] No TypeScript errors in build output
- [ ] All packages built successfully
- [ ] No missing dependencies reported
- [ ] Generated types are correct

### Step 5: Publish Packages

Before publishing, confirm with the user:
- **Version bump type:** patch, minor, or major?
- **Packages to publish:** all or specific ones?

```bash
# Use Lerna to publish
npx lerna publish [patch|minor|major]
```

**Pre-publish validation:**
- [ ] All tests pass (if applicable)
- [ ] Build artifacts are present
- [ ] Version numbers are correct
- [ ] Changelog is updated (if maintained)

## Troubleshooting

### Common Issues

1. **Telescope upgrade breaks existing code:**
   - Check breaking changes in telescope release notes
   - Update configuration accordingly
   - May need to adjust generated code patterns

2. **Build succeeds but has hidden errors:**
   - Always scroll through build output
   - Look for "error" or "failed" keywords
   - Check for type errors that don't fail the build

3. **Lerna publish fails:**
   - Verify npm registry authentication
   - Check if versions already exist
   - Ensure all dependencies are properly built

### Recovery Steps

If something goes wrong:
1. Stop the process immediately
2. Review error messages carefully
3. Revert changes if necessary: `git checkout -- .`
4. Address the root cause before continuing

## Notes for AI Assistants

- Execute each step individually and wait for user confirmation before proceeding
- Always validate the output of each step before moving to the next
- Pay special attention to build output - success exit codes don't guarantee error-free builds
- Ask the user about version bump type before publishing
- If errors occur, stop and ask for guidance rather than attempting automatic fixes

## Notes for Developers

- This process should not be automated into a single script due to the need for manual validation
- Always review generated code changes before committing
- Consider the impact of telescope updates on downstream consumers
- Test thoroughly in a development environment before publishing