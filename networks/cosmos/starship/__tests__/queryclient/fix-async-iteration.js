#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const testFiles = [
  'query-client.test.ts',
  'event-client.test.ts', 
  'rpc-clients.test.ts',
  'integration.test.ts'
];

function fixAsyncIteration(content) {
  // Fix .next() calls on AsyncIterable
  content = content.replace(
    /(\w+)\.next\(\)/g,
    '$1[Symbol.asyncIterator]().next()'
  );
  
  // Fix .return() calls on AsyncIterable  
  content = content.replace(
    /(\w+)\.return\?\.\(\)/g,
    '$1[Symbol.asyncIterator]().return?.()'
  );
  
  // Fix Promise.race with .next() calls
  content = content.replace(
    /Promise\.race\(\[\s*(\w+)\[Symbol\.asyncIterator\]\(\)\.next\(\)\[Symbol\.asyncIterator\]\(\)\.next\(\),/g,
    'Promise.race([\n          $1[Symbol.asyncIterator]().next(),'
  );
  
  return content;
}

function fixBlockStructure(content) {
  // Fix block.block.* references to block.*
  content = content.replace(/\.block\.header/g, '.header');
  content = content.replace(/\.block\.data/g, '.data');
  content = content.replace(/\.block\./g, '.');
  
  return content;
}

function fixTypeIssues(content) {
  // Fix unknown type issues
  content = content.replace(/error\.message/g, '(error as Error).message');
  
  // Fix any type issues
  content = content.replace(/height: undefined,/g, 'height: undefined as any,');
  content = content.replace(/data: null,/g, 'data: null as any,');
  content = content.replace(/value: null,/g, 'value: null as any,');
  
  return content;
}

for (const file of testFiles) {
  const filePath = join(process.cwd(), file);
  try {
    let content = readFileSync(filePath, 'utf8');
    
    console.log(`🔧 Fixing ${file}...`);
    
    content = fixAsyncIteration(content);
    content = fixBlockStructure(content);
    content = fixTypeIssues(content);
    
    writeFileSync(filePath, content);
    console.log(`✅ Fixed ${file}`);
  } catch (error) {
    console.log(`⚠️  Could not fix ${file}: ${error.message}`);
  }
}

console.log('🎉 All fixes applied!');