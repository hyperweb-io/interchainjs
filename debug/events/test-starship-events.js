#!/usr/bin/env node

/**
 * Debug script to test WebSocket events on Starship environment
 * Connects to osmosis chain and listens for blockchain events
 */

const { WebSocket } = require('ws');
const axios = require('axios');

// Configuration for Starship environment
const CHAIN_NAME = 'osmosis';
const STASHIP_CONFIG_URL = 'http://localhost:8080/config';

class StarshipEventTester {
  constructor() {
    this.ws = null;
    this.chainInfo = null;
  }

  async init() {
    console.log('🔍 Initializing Starship Event Tester...');
    
    try {
      // Use direct RPC endpoint for starship
      console.log('📡 Using starship local RPC endpoint...');
      
      // Hardcode starship endpoints for local development
      this.chainInfo = {
        name: 'osmosis',
        chain_id: 'osmosis-1',
        apis: {
          rpc: [
            {
              address: 'http://localhost:26657'
            }
          ]
        }
      };
      
      console.log('✅ Configured osmosis chain:', {
        name: this.chainInfo.name,
        chainId: this.chainInfo.chain_id,
        rpc: this.chainInfo.apis.rpc[0]?.address
      });

      return true;
    } catch (error) {
      console.error('❌ Failed to initialize:', error.message);
      return false;
    }
  }

  getWebSocketEndpoint() {
    if (!this.chainInfo || !this.chainInfo.apis.rpc[0]) {
      throw new Error('Chain info not initialized');
    }
    
    const rpcAddress = this.chainInfo.apis.rpc[0].address;
    const wsEndpoint = rpcAddress.replace('http', 'ws') + '/websocket';
    console.log('🔗 WebSocket endpoint:', wsEndpoint);
    
    return wsEndpoint;
  }

  async connectWebSocket() {
    const wsEndpoint = this.getWebSocketEndpoint();
    
    console.log('🌐 Connecting to WebSocket...');
    this.ws = new WebSocket(wsEndpoint);

    return new Promise((resolve, reject) => {
      this.ws.on('open', () => {
        console.log('✅ WebSocket connected');
        resolve();
      });

      this.ws.on('error', (error) => {
        console.error('❌ WebSocket error:', error.message);
        reject(error);
      });

      this.ws.on('close', () => {
        console.log('🔌 WebSocket disconnected');
      });

      this.ws.on('message', (data) => {
        try {
          const message = JSON.parse(data.toString());
          this.handleMessage(message);
        } catch (error) {
          console.error('❌ Failed to parse message:', error.message);
        }
      });
    });
  }

  handleMessage(message) {
    if (message.id && message.result) {
      console.log('📤 Subscription response:', message);
    } else if (message.method === 'subscribe') {
      console.log('📥 New event:', {
        type: message.params?.query,
        data: message.params?.data
      });
    } else {
      console.log('📨 Raw message:', JSON.stringify(message, null, 2));
    }
  }

  async subscribeToEvents() {
    console.log('📋 Subscribing to events...');

    // Subscribe to new blocks
    this.subscribe('tm.event = \'NewBlock\'');
    
    // Subscribe to transaction events
    this.subscribe('tm.event = \'Tx\'');
    
    // Subscribe to validator set updates
    this.subscribe('tm.event = \'ValidatorSetUpdates\'');
  }

  subscribe(query) {
    const subscription = {
      jsonrpc: '2.0',
      id: Date.now(),
      method: 'subscribe',
      params: { query }
    };

    console.log('🎯 Subscribing to:', query);
    this.ws.send(JSON.stringify(subscription));
  }

  async run() {
    console.log('🚀 Starting Starship Event Test...\n');

    // Initialize
    const initSuccess = await this.init();
    if (!initSuccess) {
      process.exit(1);
    }

    // Connect WebSocket
    try {
      await this.connectWebSocket();
    } catch (error) {
      console.error('❌ Failed to connect WebSocket:', error.message);
      process.exit(1);
    }

    // Subscribe to events
    await this.subscribeToEvents();

    // Keep running
    console.log('⏳ Listening for events... Press Ctrl+C to stop\n');
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
      console.log('\n🛑 Shutting down...');
      if (this.ws) {
        this.ws.close();
      }
      process.exit(0);
    });
  }

  async testQuery() {
    console.log('🔍 Testing query endpoint...');
    
    try {
      const rpcAddress = this.chainInfo.apis.rpc[0].address;
      const queryUrl = `${rpcAddress}/status`;
      
      console.log('📡 Querying:', queryUrl);
      const response = await axios.get(queryUrl);
      
      console.log('✅ Query successful:', {
        latestBlockHeight: response.data.result?.sync_info?.latest_block_height,
        catchingUp: response.data.result?.sync_info?.catching_up,
        nodeId: response.data.result?.node_info?.id
      });
      
      return response.data;
    } catch (error) {
      console.error('❌ Query failed:', error.message);
      return null;
    }
  }
}

// Run the test
async function main() {
  const tester = new StarshipEventTester();
  
  if (process.argv.includes('--query-only')) {
    await tester.init();
    await tester.testQuery();
  } else {
    await tester.run();
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = StarshipEventTester;