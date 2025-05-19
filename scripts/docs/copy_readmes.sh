#!/bin/bash

# Set the project root directory
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
DOCS_DIR="${PROJECT_ROOT}/docs"

# Create docs directory if it doesn't exist
mkdir -p "${DOCS_DIR}"

# Copy README.md files from libs, packages, and networks, excluding dist and node_modules
find "${PROJECT_ROOT}/libs" "${PROJECT_ROOT}/packages" "${PROJECT_ROOT}/networks" -type f -name "README.md" ! -path "*/dist/*" ! -path "*/node_modules/*" ! -path "*/injective-vue/*" ! -path "*/injective-react/*" ! -path "*/injectivejs/*" ! -path "*/interchain-vue/*" | while read file; do
    target_dir="${DOCS_DIR}/$(dirname "${file#${PROJECT_ROOT}/}")"
    mkdir -p "${target_dir}"
    cp "${file}" "${target_dir}/index.mdx"
    echo "README.md file copied to docs/$(dirname "${file#${PROJECT_ROOT}/}")/index.mdx"
done

# Copy root README.md
cp "${PROJECT_ROOT}/README.md" "${DOCS_DIR}/index.mdx"

echo "README.md files copied and renamed to index.mdx successfully!"