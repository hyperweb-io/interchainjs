import fs from 'fs';
import path from 'path';

// Priority configuration for directory and file sorting
const PRIORITY_CONFIG: Record<string, Record<string, number>> = {
  'libs': {
    'cosmos-types': 60,
    'interchainjs': 50,
    'interchain-react': 40,
  },
  'networks': {
    'cosmos': 60,
    'ethereum': 50,
    'injective': 40,
  },
  // Global defaults can be added here
  '_global': {
  }
};

// Base directory for docs
const DOCS_DIR = path.resolve(__dirname, '../../docs');

/**
 * Get priority for a specific key in a given context
 */
function getPriority(context: string, key: string): number {
  // Check context-specific priority first
  if (context && PRIORITY_CONFIG[context] && PRIORITY_CONFIG[context][key] !== undefined) {
    return PRIORITY_CONFIG[context][key];
  }

  // Check global defaults
  if (PRIORITY_CONFIG['_global'] && PRIORITY_CONFIG['_global'][key] !== undefined) {
    return PRIORITY_CONFIG['_global'][key];
  }

  // Default priority for index is always 9999
  if (key === 'index') {
    return 9999;
  }

  // Default to 0 if no priority is specified
  return 0;
}

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
 * Generate _meta.json content for a directory with custom sorting
 */
function generateMetaContent(dirPath: string): Record<string, string> {
  // Determine context based on whether it's a file or directory
  const context = fs.statSync(dirPath).isDirectory()
    ? path.basename(dirPath)
    : path.basename(path.dirname(dirPath));

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

  // Sort keys based on priority and then alphabetically
  const sortedMeta: Record<string, string> = {};
  Object.keys(meta)
    .sort((a, b) => {
      const priorityA = getPriority(context, a);
      const priorityB = getPriority(context, b);

      // First, compare by priority (descending)
      if (priorityA !== priorityB) {
        return priorityB - priorityA;
      }

      // If priorities are equal, sort alphabetically
      return a.localeCompare(b);
    })
    .forEach(key => {
      sortedMeta[key] = meta[key];
    });


  return sortedMeta;
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