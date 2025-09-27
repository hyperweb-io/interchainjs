/**
 * Demo showing optional request parameters for methods that don't need input
 */

import { createSolanaQueryClient, SolanaProtocolVersion } from '../src/index';
import { GetHealthRequest, GetVersionRequest } from '../src/types/requests';

async function optionalParametersDemo() {
  console.log('🎯 Optional Parameters Demo - Solana Query Client');
  
  // Create a Solana query client
  const client = await createSolanaQueryClient('https://api.mainnet-beta.solana.com', {
    protocolVersion: SolanaProtocolVersion.SOLANA_1_18
  });

  try {
    await client.connect();
    console.log('✅ Connected to Solana network\n');

    // ========================================
    // OPTION 1: Simplified API (No Request Objects)
    // ========================================
    console.log('🚀 Option 1: Simplified API (Recommended for parameter-less methods)');
    
    // No request object needed - much cleaner!
    const health = await client.getHealth();
    console.log('💚 Health:', health);
    
    const version = await client.getVersion();
    console.log('📦 Version:', version['solana-core']);
    console.log('🏷️ Feature Set:', version['feature-set']);

    // ========================================
    // OPTION 2: Explicit Request Objects
    // ========================================
    console.log('\n🔧 Option 2: Explicit Request Objects (Maintains consistency)');
    
    // Explicit empty request objects
    const healthRequest: GetHealthRequest = {};
    const healthExplicit = await client.getHealth(healthRequest);
    console.log('💚 Health (explicit):', healthExplicit);
    
    const versionRequest: GetVersionRequest = {};
    const versionExplicit = await client.getVersion(versionRequest);
    console.log('📦 Version (explicit):', versionExplicit['solana-core']);

    // ========================================
    // OPTION 3: Request Objects with Options
    // ========================================
    console.log('\n⚙️ Option 3: Request Objects with Options (Future extensibility)');
    
    // Even though these methods don't currently use options,
    // the pattern allows for future extensibility
    const healthWithOptions: GetHealthRequest = {
      options: {} // Could include future options like timeout, etc.
    };
    const healthWithOpts = await client.getHealth(healthWithOptions);
    console.log('💚 Health (with options):', healthWithOpts);

    // ========================================
    // TYPE SAFETY DEMONSTRATION
    // ========================================
    console.log('\n🛡️ Type Safety Demonstration');
    
    // All of these compile correctly:
    console.log('✅ client.getHealth() - compiles');
    console.log('✅ client.getHealth({}) - compiles');
    console.log('✅ client.getHealth({ options: {} }) - compiles');
    console.log('✅ client.getVersion() - compiles');
    console.log('✅ client.getVersion({}) - compiles');
    console.log('✅ client.getVersion({ options: {} }) - compiles');

    console.log('\n🎉 All patterns work correctly!');
    console.log('\n💡 Recommendation: Use the simplified API (Option 1) for methods that don\'t need parameters');
    console.log('   This makes the code cleaner while maintaining the consistent request object pattern');

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await client.disconnect();
    console.log('\n👋 Disconnected from Solana network');
  }
}

// Run the demo if this file is executed directly
if (require.main === module) {
  optionalParametersDemo().catch(console.error);
}

export { optionalParametersDemo };
