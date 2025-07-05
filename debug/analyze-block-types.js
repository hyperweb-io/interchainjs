const axios = require('axios');

async function analyzeBlockTypes() {
  const endpoint = 'https://rpc.cosmos.directory/cosmoshub';
  
  try {
    // Get latest block
    const blockResp = await axios.post(endpoint, {
      jsonrpc: '2.0',
      id: 1,
      method: 'block',
      params: {}
    });
    
    const result = blockResp.data.result;
    
    console.log('=== Block Response Analysis ===\n');
    
    // Check block_id at top level
    console.log('Top-level block_id:');
    console.log('- has hash:', !!result.block_id?.hash);
    console.log('- has parts:', !!result.block_id?.parts);
    console.log('- parts.total type:', typeof result.block_id?.parts?.total);
    console.log('- parts.hash exists:', !!result.block_id?.parts?.hash);
    
    // Check header.last_block_id
    console.log('\nheader.last_block_id:');
    console.log('- has hash:', !!result.block?.header?.last_block_id?.hash);
    console.log('- has parts:', !!result.block?.header?.last_block_id?.parts);
    console.log('- parts.total type:', typeof result.block?.header?.last_block_id?.parts?.total);
    
    // Check last_commit.block_id
    console.log('\nlast_commit.block_id:');
    console.log('- has hash:', !!result.block?.last_commit?.block_id?.hash);
    console.log('- has parts:', !!result.block?.last_commit?.block_id?.parts);
    console.log('- parts.total type:', typeof result.block?.last_commit?.block_id?.parts?.total);
    
    // Check if any block_id has missing parts
    console.log('\n=== Checking for missing parts ===');
    
    // Get header response to compare
    const headerResp = await axios.post(endpoint, {
      jsonrpc: '2.0',
      id: 2,
      method: 'header',
      params: {}
    });
    
    console.log('\nHeader response last_block_id:');
    console.log('- has parts:', !!headerResp.data.result?.header?.last_block_id?.parts);
    
    // Get commit response
    const commitResp = await axios.post(endpoint, {
      jsonrpc: '2.0',
      id: 3,
      method: 'commit',
      params: {}
    });
    
    console.log('\nCommit response block_id:');
    console.log('- has parts:', !!commitResp.data.result?.signed_header?.commit?.block_id?.parts);
    
    // Check evidence field structure
    console.log('\n=== Evidence field ===');
    console.log('- evidence field type:', typeof result.block?.evidence);
    console.log('- evidence.evidence type:', typeof result.block?.evidence?.evidence);
    console.log('- evidence.evidence is array:', Array.isArray(result.block?.evidence?.evidence));
    
    // Check data field structure
    console.log('\n=== Data field ===');
    console.log('- data field type:', typeof result.block?.data);
    console.log('- data.txs type:', typeof result.block?.data?.txs);
    console.log('- data.txs is array:', Array.isArray(result.block?.data?.txs));
    console.log('- data.txs[0] type:', typeof result.block?.data?.txs?.[0]);
    
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

analyzeBlockTypes().catch(console.error);