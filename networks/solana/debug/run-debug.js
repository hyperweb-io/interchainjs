#!/usr/bin/env node

/**
 * Simple runner for the RPC debug script
 * Usage: node debug/run-debug.js [method-group]
 *
 * method-group options:
 * - network: Test network methods only
 * - account: Test account methods only
 * - transaction: Test transaction methods only
 * - token: Test token methods only
 * - program: Test program methods only
 * - block: Test block methods only
 * - all: Test all methods (default)
 */

const { spawn } = require('child_process');
const path = require('path');

const methodGroup = process.argv[2] || 'all';

console.log(`🚀 Running Solana RPC debug for: ${methodGroup}`);
console.log('Building project first...\n');

// First build the project
const buildProcess = spawn('npm', ['run', 'build'], {
  cwd: path.join(__dirname, '..'),
  stdio: 'inherit'
});

buildProcess.on('close', (code) => {
  if (code !== 0) {
    console.error('❌ Build failed');
    process.exit(1);
  }

  console.log('\n✅ Build successful, running debug script...\n');

  // Use ts-node to run the TypeScript debug script directly
  const tsNodeProcess = spawn('npx', ['ts-node', 'debug/rpc-debug.ts'], {
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit',
    env: {
      ...process.env,
      DEBUG_METHOD_GROUP: methodGroup
    }
  });

  tsNodeProcess.on('close', (code) => {
    if (code !== 0) {
      console.error('❌ Debug script failed');
      process.exit(1);
    }
  });
});

buildProcess.on('error', (error) => {
  console.error('❌ Failed to start build process:', error);
  process.exit(1);
});
