/**
 * Basic usage example for Solana network module
 */

import { createSolanaQueryClient, SolanaProtocolVersion } from '../src/index';
import { GetHealthRequest, GetVersionRequest } from '../src/types/requests';

async function basicExample() {
  console.log('🚀 Solana Network Module - Basic Usage Example');

  // Create a Solana query client
  const client = await createSolanaQueryClient('https://api.mainnet-beta.solana.com', {
    protocolVersion: SolanaProtocolVersion.SOLANA_1_18,
    timeout: 10000
  });

  try {
    // Connect to the network
    await client.connect();
    console.log('✅ Connected to Solana network');
    console.log('📍 Endpoint:', client.endpoint);

    // Get protocol information
    const protocolInfo = client.getProtocolInfo();
    console.log('🔧 Protocol Version:', protocolInfo.version);
    console.log('🛠️ Supported Methods:', protocolInfo.supportedMethods.size);
    console.log('⚡ Capabilities:', protocolInfo.capabilities);

    // Example 1: Check network health (with request object)
    console.log('\n📊 Checking network health...');
    const healthRequest: GetHealthRequest = {};
    const health = await client.getHealth(healthRequest);
    console.log('💚 Network Health:', health);

    // Example 1b: Check network health (without request object - simpler)
    console.log('\n📊 Checking network health (simplified)...');
    const healthSimple = await client.getHealth();
    console.log('💚 Network Health:', healthSimple);

    // Example 2: Get network version (with request object)
    console.log('\n🔍 Getting network version...');
    const versionRequest: GetVersionRequest = {};
    const version = await client.getVersion(versionRequest);
    console.log('📦 Solana Core:', version['solana-core']);
    console.log('🏷️ Feature Set:', version['feature-set']);

    // Example 2b: Get network version (without request object - simpler)
    console.log('\n🔍 Getting network version (simplified)...');
    const versionSimple = await client.getVersion();
    console.log('📦 Solana Core:', versionSimple['solana-core']);
    console.log('🏷️ Feature Set:', versionSimple['feature-set']);

    // Example 3: Using request objects with options
    console.log('\n🎛️ Using request objects with options...');
    const healthWithOptions: GetHealthRequest = {
      options: {} // Empty options object
    };
    const healthResult = await client.getHealth(healthWithOptions);
    console.log('💚 Health with options:', healthResult);

    console.log('\n✨ All examples completed successfully!');

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    // Disconnect from the network
    await client.disconnect();
    console.log('👋 Disconnected from Solana network');
  }
}

// Run the example if this file is executed directly
if (require.main === module) {
  basicExample().catch(console.error);
}

export { basicExample };
