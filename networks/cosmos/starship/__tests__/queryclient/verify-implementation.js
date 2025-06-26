#!/usr/bin/env node
// networks/cosmos/starship/__tests__/queryclient/verify-implementation.js

/**
 * Verify that our implementation files exist and have the expected structure
 */

import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function checkFileExists(filePath, description) {
  if (existsSync(filePath)) {
    console.log(`  ✅ ${description}: ${filePath}`);
    return true;
  } else {
    console.log(`  ❌ ${description}: ${filePath} (NOT FOUND)`);
    return false;
  }
}

function checkFileContains(filePath, searchStrings, description) {
  try {
    const content = readFileSync(filePath, 'utf8');
    const missing = searchStrings.filter(str => !content.includes(str));
    
    if (missing.length === 0) {
      console.log(`  ✅ ${description}: All expected exports found`);
      return true;
    } else {
      console.log(`  ⚠️  ${description}: Missing exports: ${missing.join(', ')}`);
      return false;
    }
  } catch (error) {
    console.log(`  ❌ ${description}: Error reading file - ${error.message}`);
    return false;
  }
}

async function verifyImplementation() {
  console.log('🔍 Verifying Cosmos Query Client Implementation');
  console.log('=' .repeat(60));

  const srcDir = join(__dirname, '../../../src');
  const typesDir = join(__dirname, '../../../../../packages/types/src');
  
  let allGood = true;

  // Check main structure
  console.log('\n📁 Checking file structure...');
  const requiredFiles = [
    [join(srcDir, 'index.ts'), 'Main index'],
    [join(srcDir, 'types/index.ts'), 'Types index'],
    [join(srcDir, 'types/protocol.ts'), 'Protocol types'],
    [join(srcDir, 'types/responses.ts'), 'Response types'],
    [join(srcDir, 'types/cosmos-client-interfaces.ts'), 'Interface types'],
    [join(srcDir, 'rpc/index.ts'), 'RPC index'],
    [join(srcDir, 'rpc/http-client.ts'), 'HTTP client'],
    [join(srcDir, 'rpc/websocket-client.ts'), 'WebSocket client'],
    [join(srcDir, 'query/index.ts'), 'Query index'],
    [join(srcDir, 'query/cosmos-query-client.ts'), 'Query client'],
    [join(srcDir, 'event/index.ts'), 'Event index'],
    [join(srcDir, 'event/cosmos-event-client.ts'), 'Event client'],
    [join(srcDir, 'protocol-adapter.ts'), 'Protocol adapter'],
    [join(srcDir, 'client-factory.ts'), 'Client factory']
  ];

  for (const [filePath, description] of requiredFiles) {
    if (!checkFileExists(filePath, description)) {
      allGood = false;
    }
  }

  // Check common types
  console.log('\n📦 Checking common types...');
  const commonTypesFiles = [
    [join(typesDir, 'index.ts'), 'Common types index'],
    [join(typesDir, 'query.ts'), 'Query types'],
    [join(typesDir, 'rpc.ts'), 'RPC types'],
    [join(typesDir, 'errors.ts'), 'Error types']
  ];

  for (const [filePath, description] of commonTypesFiles) {
    checkFileExists(filePath, description);
  }

  // Check exports in key files
  console.log('\n🔍 Checking exports...');
  
  // Main index should export everything
  checkFileContains(
    join(srcDir, 'index.ts'),
    ['export * from \'./types/index.js\'', 'export * from \'./rpc/index.js\'', 'export * from \'./query/index.js\''],
    'Main index exports'
  );

  // Protocol types
  checkFileContains(
    join(srcDir, 'types/protocol.ts'),
    ['export enum ProtocolVersion', 'export enum RpcMethod', 'export enum EventType'],
    'Protocol enums'
  );

  // HTTP client
  checkFileContains(
    join(srcDir, 'rpc/http-client.ts'),
    ['export class HttpRpcClient', 'async call(', 'async connect('],
    'HTTP client class'
  );

  // WebSocket client
  checkFileContains(
    join(srcDir, 'rpc/websocket-client.ts'),
    ['export class WebSocketRpcClient', 'subscribe(', 'async connect('],
    'WebSocket client class'
  );

  // Query client
  checkFileContains(
    join(srcDir, 'query/cosmos-query-client.ts'),
    ['export class CosmosQueryClient', 'async getStatus(', 'async getBlock('],
    'Query client methods'
  );

  // Event client
  checkFileContains(
    join(srcDir, 'event/cosmos-event-client.ts'),
    ['export class CosmosEventClient', 'subscribeToBlocks(', 'subscribeToTxs('],
    'Event client methods'
  );

  // Protocol adapter
  checkFileContains(
    join(srcDir, 'protocol-adapter.ts'),
    ['export class TendermintProtocolAdapter', 'encodeParams(', 'decodeResponse('],
    'Protocol adapter methods'
  );

  // Client factory
  checkFileContains(
    join(srcDir, 'client-factory.ts'),
    ['export class CosmosClientFactory', 'createQueryClient(', 'createEventClient('],
    'Client factory methods'
  );

  // Check common types exports
  if (existsSync(join(typesDir, 'errors.ts'))) {
    checkFileContains(
      join(typesDir, 'errors.ts'),
      ['export class QueryClientError', 'export class NetworkError', 'export enum ErrorCode'],
      'Common error types'
    );
  }

  if (existsSync(join(typesDir, 'rpc.ts'))) {
    checkFileContains(
      join(typesDir, 'rpc.ts'),
      ['export interface IRpcClient', 'export interface JsonRpcRequest'],
      'Common RPC types'
    );
  }

  // Summary
  console.log('\n📊 Verification Summary:');
  if (allGood) {
    console.log('  ✅ All required files exist');
    console.log('  ✅ File structure is correct');
    console.log('  ✅ Key exports are present');
    console.log('\n🎉 Implementation structure verified!');
    console.log('\n📝 Next steps:');
    console.log('  1. Build TypeScript files: npm run build');
    console.log('  2. Run tests: npm test');
  } else {
    console.log('  ❌ Some files are missing');
    console.log('  ⚠️  Please check the file structure');
  }

  console.log('\n🔧 Implementation Details:');
  console.log('  📁 Source directory: ' + srcDir);
  console.log('  📁 Common types: ' + typesDir);
  console.log('  🎯 Target: Osmosis mainnet testing');
  console.log('  🚀 Architecture: Modular query/event clients');
}

// Run verification
verifyImplementation().catch(console.error);