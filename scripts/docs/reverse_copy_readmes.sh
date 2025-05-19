#!/bin/bash

# Set the project root directory
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
DOCS_DIR="${PROJECT_ROOT}/docs"

# Copy index.mdx files from docs/libs, docs/packages, and docs/networks back to their source locations
find "${DOCS_DIR}/libs" "${DOCS_DIR}/packages" "${DOCS_DIR}/networks" -type f -name "index.mdx" 2>/dev/null | while read file; do
    # Extract the relative path from the docs directory
    rel_path="${file#${DOCS_DIR}/}"
    # Get the directory part
    dir_path="$(dirname "$rel_path")"
    # Construct the target path
    target_path="${PROJECT_ROOT}/${dir_path}/README.md"

    # Create the target directory if it doesn't exist
    mkdir -p "$(dirname "${target_path}")"

    # Copy the file back to its original location as README.md
    cp "${file}" "${target_path}"
    echo "index.mdx copied back to ${target_path}"
done

# Copy root docs/index.mdx back to root README.md
if [ -f "${DOCS_DIR}/index.mdx" ]; then
    cp "${DOCS_DIR}/index.mdx" "${PROJECT_ROOT}/README.md"
    echo "docs/index.mdx copied back to README.md in project root"
fi

echo "All index.mdx files copied back to their source locations as README.md successfully!"