#!/usr/bin/env node

/**
 * Debug script to test WebSocket event streaming with starship environment
 * This script connects to the starship environment and tests event subscriptions
 */

const WebSocket = require('ws');
const fetch = require('node-fetch');

// Configuration for starship environment
const STARSHIP_CONFIG = {
  osmosis: {
    chainId: 'osmosis-1',
    rpcPort: 26657,
    restPort: 1317,
    grpcPort: 9090
  }
};

class StarshipEventTester {
  constructor() {
    this.ws = null;
    this.subscriptions = new Set();
  }

  async getStarshipEndpoints() {
    try {
      // Try to get endpoints from starship config
      const configPath = '/workspace/.starship/config.yaml';
      console.log('📡 Connecting to starship environment...');
      
      // Default starship setup for osmosis
      const baseUrl = 'http://localhost';
      const rpcEndpoint = `${baseUrl}:${STARSHIP_CONFIG.osmosis.rpcPort}`;
      const wsEndpoint = rpcEndpoint.replace('http', 'ws');
      
      console.log(`🔗 RPC Endpoint: ${rpcEndpoint}`);
      console.log(`🔗 WS Endpoint: ${wsEndpoint}/websocket`);
      
      return {
        rpc: rpcEndpoint,
        ws: `${wsEndpoint}/websocket`
      };
    } catch (error) {
      console.error('❌ Failed to get starship endpoints:', error);
      return null;
    }
  }

  async testConnection(endpoints) {
    try {
      console.log('🔍 Testing RPC connection...');
      const response = await fetch(`${endpoints.rpc}/status`);
      const status = await response.json();
      
      console.log('✅ RPC connection successful');
      console.log(`📊 Chain ID: ${status.result.node_info.network}`);
      console.log(`📊 Latest Block: ${status.result.sync_info.latest_block_height}`);
      
      return true;
    } catch (error) {
      console.error('❌ RPC connection failed:', error.message);
      return false;
    }
  }

  async subscribeToEvents(wsEndpoint) {
    return new Promise((resolve, reject) => {
      console.log(`🔄 Connecting to WebSocket: ${wsEndpoint}`);
      
      this.ws = new WebSocket(wsEndpoint);
      
      this.ws.on('open', () => {
        console.log('✅ WebSocket connected');
        this.subscribeToNewBlocks();
        this.subscribeToTxs();
        resolve();
      });

      this.ws.on('message', (data) => {
        try {
          const message = JSON.parse(data);
          this.handleMessage(message);
        } catch (error) {
          console.error('❌ Failed to parse message:', error);
        }
      });

      this.ws.on('error', (error) => {
        console.error('❌ WebSocket error:', error);
        reject(error);
      });

      this.ws.on('close', () => {
        console.log('🔌 WebSocket connection closed');
      });
    });
  }

  subscribeToNewBlocks() {
    const subscription = {
      jsonrpc: '2.0',
      method: 'subscribe',
      id: 1,
      params: {
        query: "tm.event='NewBlock'"
      }
    };
    
    console.log('📡 Subscribing to NewBlock events...');
    this.ws.send(JSON.stringify(subscription));
    this.subscriptions.add('NewBlock');
  }

  subscribeToTxs() {
    const subscription = {
      jsonrpc: '2.0',
      method: 'subscribe',
      id: 2,
      params: {
        query: "tm.event='Tx'"
      }
    };
    
    console.log('📡 Subscribing to Tx events...');
    this.ws.send(JSON.stringify(subscription));
    this.subscriptions.add('Tx');
  }

  handleMessage(message) {
    if (message.id !== undefined) {
      // Response to subscription request
      if (message.result) {
        console.log(`✅ Subscription ${message.id} confirmed:`, message.result);
      } else if (message.error) {
        console.error(`❌ Subscription ${message.id} failed:`, message.error);
      }
    } else if (message.method === 'subscribe#event') {
      // Event notification
      const eventType = message.params?.data?.value?.Type;
      const blockHeight = message.params?.data?.value?.Block?.header?.height;
      
      console.log(`📡 Event received: ${eventType} at height ${blockHeight}`);
      
      if (eventType === 'NewBlock') {
        this.handleNewBlock(message.params.data.value);
      } else if (eventType === 'Tx') {
        this.handleTx(message.params.data.value);
      }
    }
  }

  handleNewBlock(blockData) {
    const header = blockData.Block?.header;
    if (header) {
      console.log(`🧱 New Block: #${header.height} | Hash: ${header.data_hash} | Time: ${header.time}`);
    }
  }

  handleTx(txData) {
    const txResult = txData.TxResult;
    if (txResult) {
      console.log(`💸 Transaction: Height: ${txResult.height} | Hash: ${txResult.hash} | Code: ${txResult.result?.code}`);
    }
  }

  async runTest() {
    console.log('🚀 Starting Starship Event Test\n');
    
    try {
      const endpoints = await this.getStarshipEndpoints();
      if (!endpoints) {
        console.log('❌ Could not determine starship endpoints');
        return;
      }

      const rpcConnected = await this.testConnection(endpoints);
      if (!rpcConnected) {
        console.log('❌ RPC connection failed, skipping WebSocket test');
        return;
      }

      await this.subscribeToEvents(endpoints.ws);
      
      // Keep the script running for 30 seconds to receive events
      console.log('⏳ Listening for events for 30 seconds...');
      setTimeout(() => {
        console.log('⏰ Test timeout reached');
        this.cleanup();
      }, 30000);

    } catch (error) {
      console.error('❌ Test failed:', error);
      this.cleanup();
    }
  }

  cleanup() {
    if (this.ws) {
      console.log('🧹 Cleaning up connections...');
      this.ws.close();
    }
    process.exit(0);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

// Run the test
if (require.main === module) {
  const tester = new StarshipEventTester();
  tester.runTest().catch(console.error);
}

module.exports = StarshipEventTester;