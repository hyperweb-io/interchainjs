# Telescope Regeneration and Publishing Process

This document outlines the step-by-step process for upgrading Telescope, regenerating code, and publishing packages. This process should be executed manually, one step at a time, to ensure proper validation at each stage.

## Overview

The process involves:
1. Creating a feature branch for the changes
2. Upgrading the Telescope dependency
3. Updating configuration files
4. Regenerating code
5. Building and validating
6. Creating a pull request
7. Publishing packages from main branch

## Prerequisites

- Ensure you have the latest version of Node.js and Yarn installed
- Verify you have proper npm registry access for publishing
- Ensure you have write access to the repository
- Have sufficient time allocated (the entire process can take 45+ minutes)

## Step-by-Step Process

### Step 1: Create a Feature Branch

```bash
# Create and checkout a new branch for the telescope upgrade
git checkout -b telescope-upgrade-[version]
```

**Example:**
```bash
git checkout -b telescope-upgrade-1.12.20
```

**Validation:**
- Confirm you're on the new branch: `git branch --show-current`
- Ensure working directory is clean: `git status`

### Step 2: Upgrade Telescope Dependency

```bash
# Update @cosmology/telescope to the latest version in root package.json
# Note: The -W flag is required for workspace projects
yarn add -W @cosmology/telescope@latest
```

**⚠️ Important:** The `-W` flag is necessary because this is a monorepo with workspaces. Without it, yarn will refuse to add the dependency to the workspace root.

**Validation:**
- Check that the version in `package.json` has been updated
- Verify no dependency conflicts exist

### Step 3: Update Telescope Configuration

**File to modify:** `scripts/codegen.ts`

**Before making changes, confirm with the user (maintainer):**
- Are there any telescope configuration options that need updating?
- Are there any deprecated options that should be replaced?
- Are there any new features in this telescope version we should enable?

**Configuration tasks:**
- Verify with the maintainer if telescope configuration options need updating
- Ensure compatibility with the new telescope version
- Update any deprecated configuration options

**Validation:**
- Review the configuration changes
- Ensure all required settings are present
- Confirm changes with maintainer before proceeding

### Step 4: Regenerate Code

```bash
yarn codegen
```

**⏱️ Time estimate:** This process can take approximately 15 minutes to complete.

**What to watch for:**
- Monitor console output for any warnings or errors
- Check that all expected files are generated
- Verify no generation failures occurred
- Note: You may see warnings about `FeatureSet.defaultSymbolVisibility` - these are typically non-critical

### Step 5: Build and Validate

```bash
yarn build
```

**⏱️ Time estimate:** This process can take approximately 20 minutes to complete.

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

### Step 6: Commit Changes and Create Pull Request

After successful build validation:

```bash
# Stage all changes
git add -A

# Commit with descriptive message
git commit -m "chore: upgrade telescope to [version]"

# Push to remote
git push origin telescope-upgrade-[version]
```

**Create a pull request:**
- Go to the repository on GitHub/GitLab
- Create a pull request from your feature branch to main
- Include details about the telescope version upgrade
- Request review from maintainers

**⚠️ Important:** Do NOT publish packages from the feature branch. Wait for PR approval.

### Step 7: Publish Packages

**After PR is approved and merged:**

```bash
# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main

# Verify you have the merged changes
git log --oneline -5
```

**Before publishing, confirm with the user (maintainer):**
- **Version bump type:** Is this a patch or minor update?
- **Packages to publish:** all or specific ones?

```bash
# Use Lerna to publish
npx lerna publish [patch|minor]
```

**⚠️ Important - NPM Two-Factor Authentication:**
- The publish process will likely prompt for an NPM OTP (One-Time Password)
- When prompted "Enter OTP:", the maintainer needs to provide the 6-digit code from their authenticator app
- **For AI Assistants:** If you encounter the OTP prompt, inform the user that they need to either:
  1. Provide the OTP for you to input (you can use `execute_bash` with `is_input=true`)
  2. Complete the publish step manually themselves

**Note:** Always ask the user whether it's a minor or patch version bump. Major version bumps should be rare and require explicit discussion.

**Pre-publish validation:**
- [ ] You are on the main branch
- [ ] You have the latest changes from the merged PR
- [ ] NPM authentication is configured (`npm whoami`)
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

- Always start by creating a feature branch - never work directly on main
- Use the `-W` flag when adding telescope dependency: `yarn add -W @cosmology/telescope@latest`
- Be patient with long-running commands:
  - `yarn codegen` can take ~15 minutes
  - `yarn build` can take ~20 minutes
- Execute each step individually and wait for user confirmation before proceeding
- Always validate the output of each step before moving to the next
- Pay special attention to build output - success exit codes don't guarantee error-free builds
- After successful build, create a PR instead of publishing directly
- Only publish from the main branch after PR is merged
- Always ask the user whether it's a minor or patch version bump before publishing
- During `lerna publish`, watch for NPM OTP prompts:
  - If you see "Enter OTP:", pause and ask the user for their 6-digit code
  - Use `execute_bash` with `is_input=true` to input the OTP
  - Alternatively, let the user know they may need to complete this step manually
- If errors occur, stop and ask for guidance rather than attempting automatic fixes

## Notes for Developers

- This process should not be automated into a single script due to the need for manual validation
- Always review generated code changes before committing
- Consider the impact of telescope updates on downstream consumers
- Test thoroughly in a development environment before publishing