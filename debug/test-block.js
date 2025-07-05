const axios = require('axios');

async function testBlock() {
  const endpoints = [
    'https://rpc.cosmos.directory/cosmoshub',
    'https://rpc.cosmos.directory/osmosis',
    'https://rpc.cosmos.directory/celestia'
  ];

  for (const endpoint of endpoints) {
    console.log(`\n=== Testing ${endpoint} ===`);
    try {
      // Test block without height (latest)
      const blockResp = await axios.post(endpoint, {
        jsonrpc: '2.0',
        id: 1,
        method: 'block',
        params: {}
      });
      
      console.log('\nFull response:', JSON.stringify(blockResp.data, null, 2));
      console.log('\nBlock response structure:');
      console.log(JSON.stringify(blockResp.data.result, null, 2));
      
      // Check nested structures
      if (blockResp.data.result) {
        const result = blockResp.data.result;
        console.log('\nBlock ID structure:', JSON.stringify(result.block_id, null, 2));
        console.log('\nBlock header structure:', JSON.stringify(result.block?.header, null, 2));
        console.log('\nBlock data structure:', JSON.stringify(result.block?.data, null, 2));
        console.log('\nBlock evidence structure:', JSON.stringify(result.block?.evidence, null, 2));
        console.log('\nBlock last_commit structure:', JSON.stringify(result.block?.last_commit, null, 2));
      }
      
    } catch (error) {
      console.error(`Error testing ${endpoint}:`, error.response?.data || error.message);
    }
  }
}

testBlock().catch(console.error);