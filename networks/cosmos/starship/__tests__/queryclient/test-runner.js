#!/usr/bin/env node
// networks/cosmos/starship/__tests__/queryclient/test-runner.js

/**
 * Simple test runner to verify our implementation can be imported and basic functionality works
 */

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function runBasicTests() {
  console.log('🧪 Running basic import and functionality tests...\n');

  try {
    // Test 1: Import all main exports
    console.log('📦 Testing imports...');
    
    // Try to import from the source directory
    let cosmosModule;
    try {
      cosmosModule = await import('../../../src/index.js');
    } catch (error) {
      console.log('  ⚠️  Could not import from src/, trying relative imports...');
      
      // Import individual modules for testing
      const [
        cosmosTypesModule,
        rpcModule,
        queryModule,
        eventModule,
        protocolModule,
        factoryModule
      ] = await Promise.all([
        import('../../../src/types/index.js'),
        import('../../../src/rpc/index.js'),
        import('../../../src/query/index.js'),
        import('../../../src/event/index.js'),
        import('../../../src/protocol-adapter.js'),
        import('../../../src/client-factory.js')
      ]);
      
      // Try to import common types separately
      let commonTypesModule = {};
      try {
        commonTypesModule = await import('../../../../../packages/types/src/index.js');
        console.log('  ✅ Common types imported successfully');
      } catch (error) {
        console.log('  ⚠️  Could not import common types, continuing without them');
      }
      
      // Combine all exports
      cosmosModule = {
        ...commonTypesModule,
        ...cosmosTypesModule,
        ...rpcModule,
        ...queryModule,
        ...eventModule,
        ...protocolModule,
        ...factoryModule
      };
    }
    
    const requiredExports = [
      'createCosmosQueryClient',
      'CosmosClientFactory',
      'HttpRpcClient',
      'WebSocketRpcClient',
      'TendermintProtocolAdapter',
      'createProtocolAdapter',
      'CosmosQueryClient',
      'CosmosEventClient',
      'ProtocolVersion',
      'RpcMethod',
      'ErrorCode',
      'NetworkError',
      'TimeoutError'
    ];

    for (const exportName of requiredExports) {
      if (!(exportName in cosmosModule)) {
        throw new Error(`Missing export: ${exportName}`);
      }
      console.log(`  ✅ ${exportName}`);
    }

    // Test 2: Create a query client
    console.log('\n🔧 Testing client creation...');
    const queryClient = cosmosModule.createCosmosQueryClient('https://rpc.osmosis.zone/', {
      timeout: 10000
    });
    
    console.log('  ✅ Query client created');
    console.log(`  ✅ Endpoint: ${queryClient.endpoint}`);
    
    // Test 3: Check protocol info
    const protocolInfo = queryClient.getProtocolInfo();
    console.log(`  ✅ Protocol version: ${protocolInfo.version}`);
    console.log(`  ✅ Supported methods: ${protocolInfo.supportedMethods.size}`);
    console.log(`  ✅ Capabilities: ${JSON.stringify(protocolInfo.capabilities)}`);

    // Test 4: Test protocol adapter
    console.log('\n🔄 Testing protocol adapter...');
    const adapter = cosmosModule.createProtocolAdapter();
    
    const testParams = { blockHeight: 12345, perPage: 10 };
    const encoded = adapter.encodeParams('block', testParams);
    console.log(`  ✅ Encoded params: ${JSON.stringify(encoded)}`);
    
    const testResponse = { node_info: { network: 'test' }, sync_info: { latest_block_height: '12345' } };
    const decoded = adapter.decodeResponse('status', testResponse);
    console.log(`  ✅ Decoded response: ${JSON.stringify(decoded)}`);

    // Test 5: Test factory methods
    console.log('\n🏭 Testing factory methods...');
    const factoryClient = cosmosModule.CosmosClientFactory.createQueryClient('https://rpc.osmosis.zone/');
    console.log('  ✅ Factory query client created');
    
    const eventClient = cosmosModule.CosmosClientFactory.createEventClient('wss://rpc.osmosis.zone/websocket');
    console.log('  ✅ Factory event client created');

    // Test 6: Test error classes
    console.log('\n❌ Testing error classes...');
    const networkError = new cosmosModule.NetworkError('Test network error');
    console.log(`  ✅ NetworkError: ${networkError.message} (${networkError.code})`);
    
    const timeoutError = new cosmosModule.TimeoutError('Test timeout error');
    console.log(`  ✅ TimeoutError: ${timeoutError.message} (${timeoutError.code})`);

    console.log('\n🎉 All basic tests passed!');
    console.log('\n📋 Summary:');
    console.log('  ✅ All required exports available');
    console.log('  ✅ Client creation working');
    console.log('  ✅ Protocol adapter functional');
    console.log('  ✅ Factory methods working');
    console.log('  ✅ Error classes properly defined');
    console.log('\n🚀 Ready to run full test suite with: npm test');

  } catch (error) {
    console.error('\n❌ Basic test failed:');
    console.error(`  Error: ${error.message}`);
    console.error(`  Stack: ${error.stack}`);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runBasicTests();
}

export { runBasicTests };