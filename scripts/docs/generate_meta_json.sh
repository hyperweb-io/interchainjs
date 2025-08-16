#!/bin/bash

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Change to the root directory
cd "$SCRIPT_DIR/../.."

# Run the TypeScript script using ts-node
# Check if pnpm is installed
if command -v pnpm &> /dev/null; then
  pnpm exec ts-node "$SCRIPT_DIR/generate_meta_json.ts"
else
  echo "Error: pnpm not found. Please install pnpm."
  exit 1
fi

echo "Meta JSON generation complete!"