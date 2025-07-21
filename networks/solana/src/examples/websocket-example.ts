import { WebSocketConnection, PublicKey, DEVNET_ENDPOINT } from '../index';

async function exampleWebSocketUsage() {
  // Create WebSocket connection
  const wsConnection = new WebSocketConnection({
    endpoint: DEVNET_ENDPOINT,
    timeout: 30000,
    reconnectInterval: 5000,
    maxReconnectAttempts: 5,
  });

  try {
    // Connect to WebSocket
    console.log('Connecting to Solana WebSocket...');
    await wsConnection.connect();
    console.log('Connected successfully!');

    // Example 1: Subscribe to account updates
    const accountPubkey = new PublicKey('11111111111111111111111111111112');
    const accountSubscriptionId = await wsConnection.subscribeToAccount(
      accountPubkey,
      (accountData) => {
        console.log('Account update received:', accountData);
      },
      'confirmed'
    );
    console.log('Subscribed to account updates:', accountSubscriptionId);

    // Example 2: Subscribe to program account updates  
    const programId = new PublicKey('11111111111111111111111111111112');
    const programSubscriptionId = await wsConnection.subscribeToProgram(
      programId,
      (programData) => {
        console.log('Program account update received:', programData);
      },
      'confirmed'
    );
    console.log('Subscribed to program updates:', programSubscriptionId);

    // Example 3: Subscribe to transaction logs
    const logsSubscriptionId = await wsConnection.subscribeToLogs(
      { mentions: [programId.toString()] },
      (logsData) => {
        console.log('Transaction logs received:', logsData);
      },
      'confirmed'
    );
    console.log('Subscribed to transaction logs:', logsSubscriptionId);

    // Keep the connection alive for demonstration
    setTimeout(async () => {
      console.log('Unsubscribing and disconnecting...');
      
      // Unsubscribe from all subscriptions
      await wsConnection.unsubscribeFromAccount(accountSubscriptionId);
      await wsConnection.unsubscribeFromProgram(programSubscriptionId);
      await wsConnection.unsubscribeFromLogs(logsSubscriptionId);
      
      // Disconnect
      wsConnection.disconnect();
      console.log('Disconnected from WebSocket');
    }, 30000); // Run for 30 seconds

  } catch (error) {
    console.error('WebSocket error:', error);
    wsConnection.disconnect();
  }
}

// Usage example with connection status monitoring
async function monitorConnectionExample() {
  const wsConnection = new WebSocketConnection({
    endpoint: 'wss://api.devnet.solana.com',
  });

  // Monitor connection status
  const statusInterval = setInterval(() => {
    console.log('Connection status:', {
      isOpen: wsConnection.isConnectionOpen(),
      subscriptionCount: wsConnection.getSubscriptionCount(),
    });
  }, 5000);

  try {
    await wsConnection.connect();
    
    // Your WebSocket logic here
    
  } catch (error) {
    console.error('Connection failed:', error);
  } finally {
    clearInterval(statusInterval);
    wsConnection.disconnect();
  }
}

// Export examples for potential use
export { exampleWebSocketUsage, monitorConnectionExample };

// Run example if this file is executed directly
if (require.main === module) {
  exampleWebSocketUsage().catch(console.error);
}