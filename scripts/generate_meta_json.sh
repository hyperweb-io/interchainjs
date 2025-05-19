#!/bin/bash

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Change to the root directory
cd "$SCRIPT_DIR/.."

# Run the TypeScript script using ts-node
# Check if ts-node is installed
if command -v npx &> /dev/null; then
  npx ts-node "$SCRIPT_DIR/generate_meta_json.ts"
else
  echo "Error: npx not found. Please install Node.js and npm."
  exit 1
fi

echo "Meta JSON generation complete!"