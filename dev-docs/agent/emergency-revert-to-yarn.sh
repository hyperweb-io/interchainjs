#!/bin/bash

# Emergency Revert to Yarn Script
# This script reverts all pnpm references back to yarn in documentation

set -e

echo "🔄 Starting emergency revert from pnpm to yarn..."
echo "📁 Working directory: $(pwd)"

# Verify we're in the right directory
if [ ! -f "package.json" ] || [ ! -f "pnpm-workspace.yaml" ]; then
    echo "❌ Error: This doesn't appear to be the project root directory"
    echo "   Please run this script from the interchainjs project root"
    exit 1
fi

echo "📝 Reverting documentation files..."

# 1. Revert installation commands
echo "   → Reverting installation commands (pnpm add → yarn add)"
find . -name "*.md" -not -path "./docs/*" -not -path "*/dist/*" -not -path "*/node_modules/*" -exec sed -i '' 's/pnpm add /yarn add /g' {} \;

# 2. Revert development commands
echo "   → Reverting development commands (pnpm install → yarn)"
find . -name "*.md" -not -path "./docs/*" -not -path "*/dist/*" -not -path "*/node_modules/*" -exec sed -i '' 's/pnpm install/yarn/g' {} \;

# 3. Revert script commands (more specific patterns)
echo "   → Reverting script commands (pnpm [script] → yarn [script])"
find . -name "*.md" -not -path "./docs/*" -not -path "*/dist/*" -not -path "*/node_modules/*" -exec sed -i '' 's/pnpm \([a-zA-Z0-9:_-]*\)/yarn \1/g' {} \;

# 4. Revert tool execution
echo "   → Reverting tool execution (pnpm exec → yarn)"
find . -name "*.md" -not -path "./docs/*" -not -path "*/dist/*" -not -path "*/node_modules/*" -exec sed -i '' 's/pnpm exec /yarn /g' {} \;

# 5. Update main README primary installation method
echo "   → Updating main README.md primary installation method"
sed -i '' 's/You can install interchainjs using pnpm:/You can install interchainjs using yarn:/g' README.md

# 6. Update scripts
echo "   → Updating shell scripts"
if [ -f "scripts/docs/generate_meta_json.sh" ]; then
    sed -i '' 's/pnpm exec ts-node/npx ts-node/g' scripts/docs/generate_meta_json.sh
    sed -i '' 's/pnpm not found. Please install pnpm./npx not found. Please install Node.js and npm./g' scripts/docs/generate_meta_json.sh
fi

# 7. Special case: fix watch commands that might have been over-replaced
echo "   → Fixing watch commands"
find . -name "*.md" -not -path "./docs/*" -not -path "*/dist/*" -not -path "*/node_modules/*" -exec sed -i '' 's/watch yarn starship get-pods/watch yarn starship get-pods/g' {} \;

echo "✅ Documentation reversion complete!"

# Verification
echo "🔍 Verifying changes..."
REMAINING_PNPM=$(grep -r "pnpm" --include="*.md" . | grep -v "./docs/" | grep -v "/dist/" | grep -v "/node_modules/" | grep -v "npmjs.com" | wc -l)

if [ "$REMAINING_PNPM" -eq 0 ]; then
    echo "✅ All pnpm references successfully reverted to yarn"
else
    echo "⚠️  Warning: $REMAINING_PNPM pnpm references still found. Manual review may be needed."
    echo "   Run this command to see remaining references:"
    echo "   grep -r \"pnpm\" --include=\"*.md\" . | grep -v \"./docs/\" | grep -v \"/dist/\" | grep -v \"/node_modules/\" | grep -v \"npmjs.com\""
fi

echo ""
echo "📋 Next steps:"
echo "   1. Review the changes: git diff"
echo "   2. Test yarn commands: yarn install && yarn build"
echo "   3. Commit changes if everything works: git add . && git commit -m 'Revert: fallback from pnpm to yarn'"
echo ""
echo "🎉 Reversion script completed!"
