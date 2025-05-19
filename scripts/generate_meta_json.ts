import fs from 'fs';
import path from 'path';

// Base directory for docs
const DOCS_DIR = path.resolve(__dirname, '../docs');

/**
 * Format a filename or directory name to a readable title
 */
function formatTitle(name: string): string {
  // Remove file extension for files
  name = name.replace(/\.(mdx?|tsx?|jsx?)$/, '');

  // Special case for 'index'
  if (name === 'index') {
    return 'Overview';
  }

  // Replace hyphens with spaces
  let title = name.replace(/-/g, ' ');

  // Capitalize each word
  title = title.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return title;
}

/**
 * Generate _meta.json content for a directory
 */
function generateMetaContent(dirPath: string): Record<string, string> {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const meta: Record<string, string> = {};

  // Process files first (excluding _meta.json)
  entries
    .filter(entry => entry.isFile() && entry.name !== '_meta.json' && !entry.name.startsWith('.'))
    .forEach(entry => {
      // Extract name without extension
      const baseName = path.basename(entry.name, path.extname(entry.name));
      meta[baseName] = formatTitle(baseName);
    });

  // Then process directories
  entries
    .filter(entry => entry.isDirectory() && !entry.name.startsWith('.'))
    .forEach(entry => {
      meta[entry.name] = formatTitle(entry.name);
    });

  // If we have an index file, make sure it's first
  if (meta.index) {
    const { index, ...rest } = meta;
    return { index, ...rest };
  }

  return meta;
}

/**
 * Create _meta.json file in directory if it doesn't exist
 */
function createMetaFile(dirPath: string): void {
  const metaPath = path.join(dirPath, '_meta.json');

  // If _meta.json already exists, skip
  if (fs.existsSync(metaPath)) {
    console.log(`✓ Exists: ${metaPath}`);
    return;
  }

  // Generate content
  const content = generateMetaContent(dirPath);

  // Write to file
  fs.writeFileSync(metaPath, JSON.stringify(content, null, 2), 'utf8');
  console.log(`✓ Created: ${metaPath}`);
}

/**
 * Recursively process directories and create _meta.json files
 */
function processDirectory(dirPath: string): void {
  // Create _meta.json for current directory
  createMetaFile(dirPath);

  // Process all subdirectories
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  entries
    .filter(entry => entry.isDirectory() && !entry.name.startsWith('.'))
    .forEach(entry => {
      const subdirPath = path.join(dirPath, entry.name);
      processDirectory(subdirPath);
    });
}

// Main function
function main(): void {
  console.log('Generating _meta.json files...');
  processDirectory(DOCS_DIR);
  console.log('Done!');
}

main();