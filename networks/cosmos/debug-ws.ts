import { WebSocketRpcClient } from './src/rpc/websocket-client';
import { CosmosClientFactory } from './src/client-factory';

async function debugWebSocket() {
  try {
    console.log('🔍 Debugging WebSocket connections...');
    
    // Test basic RPC endpoint
    const rpcEndpoint = 'http://localhost:26657';
    const wsEndpoint = 'ws://localhost:26657/websocket';
    
    console.log('📡 Testing RPC endpoint:', rpcEndpoint);
    const { eventClient } = await CosmosClientFactory.createClients(rpcEndpoint, wsEndpoint);
    
    // Access the internal WebSocket client to debug
    const wsClient = (eventClient as any).rpcClient as WebSocketRpcClient;
    
    console.log('🌐 WebSocket endpoint:', wsClient.endpoint);
    console.log('🔌 Connection status:', wsClient.isConnected());
    
    // Try to connect explicitly
    if (!wsClient.isConnected()) {
      console.log('🔄 Attempting to connect...');
      try {
        await wsClient.connect();
        console.log('✅ Connected successfully!');
        console.log('🔌 New connection status:', wsClient.isConnected());
      } catch (error) {
        console.error('❌ Connection failed:', error);
      }
    }
    
    // Test subscription if connected
    if (wsClient.isConnected()) {
      console.log('📡 Testing subscription...');
      const blocks = eventClient.subscribeToNewBlocks();
      
      const timeout = setTimeout(() => {
        console.log('⏰ Subscription timeout, but connection works');
      }, 5000);
      
      for await (const block of blocks) {
        console.log('🎉 Received block:', {
          height: block.block.header.height.toString(),
          chainId: block.block.header.chainId
        });
        clearTimeout(timeout);
        break;
      }
    }
    
  } catch (error) {
    console.error('💥 Debug failed:', error);
  }
}

debugWebSocket();