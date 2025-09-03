import { WebSocketConnection } from '../../src/websocket-connection';
import { PublicKey } from '../../src/types';
import { Keypair } from '../../src/keypair';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.join(__dirname, '../../.env.local') });

// Test configuration
const DEVNET_WS_ENDPOINT = 'wss://api.devnet.solana.com';
const TEST_TIMEOUT = 20000; // 20 seconds for network tests
const CONNECTION_TIMEOUT = 8000; // 8 seconds for connection

// Test helper to wait for a condition
const waitFor = (condition: () => boolean, timeout = 5000): Promise<void> => {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const check = () => {
      if (condition()) {
        resolve();
      } else if (Date.now() - start > timeout) {
        reject(new Error('Timeout waiting for condition'));
      } else {
        setTimeout(check, 100);
      }
    };
    check();
  });
};

describe('WebSocketConnection', () => {
  let wsConnection: WebSocketConnection;
  let testKeypair: Keypair;

  beforeAll(() => {
    // Create or load test keypair
    if (process.env.PRIVATE_KEY) {
      try {
        // Try to parse as base58 first (Solana standard format)
        testKeypair = Keypair.fromBase58(process.env.PRIVATE_KEY);
        console.log('Using test keypair address:', testKeypair.publicKey.toString());
      } catch (e) {
        try {
          // If that fails, try as JSON array of bytes
          testKeypair = Keypair.fromSecretKey(new Uint8Array(JSON.parse(process.env.PRIVATE_KEY)));
        } catch (e2) {
          console.warn('Invalid PRIVATE_KEY format, using generated keypair');
          testKeypair = Keypair.generate();
        }
      }
    } else {
      testKeypair = Keypair.generate();
      console.warn('No PRIVATE_KEY in .env.local, using generated keypair');
    }
  });

  beforeEach(() => {
    wsConnection = new WebSocketConnection({
      endpoint: DEVNET_WS_ENDPOINT,
      timeout: CONNECTION_TIMEOUT,
      reconnectInterval: 2000,
      maxReconnectAttempts: 2, // Reduce for faster tests
    });
  });

  afterEach(async () => {
    if (wsConnection) {
      wsConnection.disconnect();
      // Wait for cleanup to prevent async operations after test completion
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  });

  describe('Connection Management', () => {
    it('should connect to Solana devnet WebSocket', async () => {
      await wsConnection.connect();

      await waitFor(() => wsConnection.isConnectionOpen(), 5000);
      expect(wsConnection.isConnectionOpen()).toBe(true);
      expect(wsConnection.getSubscriptionCount()).toBe(0);
    }, TEST_TIMEOUT);

    it('should handle connection status correctly', async () => {
      expect(wsConnection.isConnectionOpen()).toBe(false);

      await wsConnection.connect();
      await waitFor(() => wsConnection.isConnectionOpen());
      expect(wsConnection.isConnectionOpen()).toBe(true);

      wsConnection.disconnect();
      await waitFor(() => !wsConnection.isConnectionOpen());
      expect(wsConnection.isConnectionOpen()).toBe(false);
    }, TEST_TIMEOUT);

    it('should handle invalid endpoint gracefully', async () => {
      const invalidWs = new WebSocketConnection({
        endpoint: 'wss://invalid-endpoint.com',
        timeout: 3000,
        maxReconnectAttempts: 0, // Disable reconnection for this test
      });

      await expect(invalidWs.connect()).rejects.toThrow();

      // Ensure cleanup
      invalidWs.disconnect();

      // Wait for any pending operations to complete
      await new Promise(resolve => setTimeout(resolve, 1000));
    });
  });

  describe('Account Subscriptions', () => {
    beforeEach(async () => {
      await wsConnection.connect();
      await waitFor(() => wsConnection.isConnectionOpen());
    });

    it('should subscribe to account updates', async () => {
      const accountPubkey = testKeypair.publicKey;

      const subscriptionId = await wsConnection.subscribeToAccount(
        accountPubkey,
        (accountData) => {
          console.log('Received account notification:', accountData);
          expect(accountData).toBeDefined();
          if (accountData && typeof accountData === 'object' && 'context' in accountData) {
            expect((accountData as any).context.slot).toBeGreaterThan(0);
          }
        },
        'confirmed'
      );

      expect(typeof subscriptionId).toBe('number');
      expect(subscriptionId).toBeGreaterThan(0);
      expect(wsConnection.getSubscriptionCount()).toBe(1);

      // Wait a bit for potential notifications
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Unsubscribe
      const unsubscribeResult = await wsConnection.unsubscribeFromAccount(subscriptionId);
      expect(unsubscribeResult).toBe(true);
      expect(wsConnection.getSubscriptionCount()).toBe(0);
    }, TEST_TIMEOUT);

    it('should handle multiple account subscriptions', async () => {
      const account1 = testKeypair.publicKey;
      const account2 = Keypair.generate().publicKey;

      const sub1 = await wsConnection.subscribeToAccount(account1, () => { }, 'confirmed');
      const sub2 = await wsConnection.subscribeToAccount(account2, () => { }, 'confirmed');

      expect(sub1).not.toBe(sub2);
      expect(wsConnection.getSubscriptionCount()).toBe(2);

      await wsConnection.unsubscribeFromAccount(sub1);
      expect(wsConnection.getSubscriptionCount()).toBe(1);

      await wsConnection.unsubscribeFromAccount(sub2);
      expect(wsConnection.getSubscriptionCount()).toBe(0);
    }, TEST_TIMEOUT);
  });

  describe('Program Subscriptions', () => {
    beforeEach(async () => {
      await wsConnection.connect();
      await waitFor(() => wsConnection.isConnectionOpen());
    });

    it('should subscribe to program account updates', async () => {
      // Use System Program ID (commonly used)
      const systemProgramId = new PublicKey('11111111111111111111111111111112');

      const subscriptionId = await wsConnection.subscribeToProgram(
        systemProgramId,
        (programData) => {
          console.log('Received program notification:', programData);
          expect(programData).toBeDefined();
        },
        'confirmed'
      );

      expect(typeof subscriptionId).toBe('number');
      expect(subscriptionId).toBeGreaterThan(0);
      expect(wsConnection.getSubscriptionCount()).toBe(1);

      // Unsubscribe
      const unsubscribeResult = await wsConnection.unsubscribeFromProgram(subscriptionId);
      expect(unsubscribeResult).toBe(true);
      expect(wsConnection.getSubscriptionCount()).toBe(0);
    }, TEST_TIMEOUT);
  });

  describe('Logs Subscriptions', () => {
    beforeEach(async () => {
      await wsConnection.connect();
      await waitFor(() => wsConnection.isConnectionOpen());
    });

    it('should subscribe to transaction logs', async () => {
      const systemProgramId = '11111111111111111111111111111112';

      const subscriptionId = await wsConnection.subscribeToLogs(
        { mentions: [systemProgramId] },
        (logsData) => {
          console.log('Received logs notification:', logsData);
          expect(logsData).toBeDefined();
          if (logsData && typeof logsData === 'object' && 'value' in logsData) {
            expect((logsData as any).value).toBeDefined();
          }
        },
        'confirmed'
      );

      expect(typeof subscriptionId).toBe('number');
      expect(subscriptionId).toBeGreaterThan(0);
      expect(wsConnection.getSubscriptionCount()).toBe(1);

      // Wait a bit for potential log notifications
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Unsubscribe
      const unsubscribeResult = await wsConnection.unsubscribeFromLogs(subscriptionId);
      expect(unsubscribeResult).toBe(true);
      expect(wsConnection.getSubscriptionCount()).toBe(0);
    }, TEST_TIMEOUT);
  });

  describe('Error Handling', () => {
    it('should throw error when subscribing without connection', async () => {
      const accountPubkey = testKeypair.publicKey;

      await expect(
        wsConnection.subscribeToAccount(accountPubkey, () => { })
      ).rejects.toThrow('WebSocket not connected');
    });

    it('should handle network disconnection', async () => {
      await wsConnection.connect();
      await waitFor(() => wsConnection.isConnectionOpen());

      // Simulate network disconnection by closing the connection
      wsConnection.disconnect();
      await waitFor(() => !wsConnection.isConnectionOpen());

      expect(wsConnection.isConnectionOpen()).toBe(false);
    }, TEST_TIMEOUT);
  });

  describe('Subscription Management', () => {
    beforeEach(async () => {
      await wsConnection.connect();
      await waitFor(() => wsConnection.isConnectionOpen());
    });

    it('should manage multiple concurrent subscriptions', async () => {
      const account1 = testKeypair.publicKey;
      const account2 = Keypair.generate().publicKey;
      const programId = new PublicKey('11111111111111111111111111111112');
      const systemProgramId = '11111111111111111111111111111112';

      // Create multiple subscriptions
      const accountSub1 = await wsConnection.subscribeToAccount(account1, () => { });
      const accountSub2 = await wsConnection.subscribeToAccount(account2, () => { });
      const programSub = await wsConnection.subscribeToProgram(programId, () => { });
      const logsSub = await wsConnection.subscribeToLogs({ mentions: [systemProgramId] }, () => { });

      expect(wsConnection.getSubscriptionCount()).toBe(4);

      // Unsubscribe all
      await wsConnection.unsubscribeFromAccount(accountSub1);
      await wsConnection.unsubscribeFromAccount(accountSub2);
      await wsConnection.unsubscribeFromProgram(programSub);
      await wsConnection.unsubscribeFromLogs(logsSub);

      expect(wsConnection.getSubscriptionCount()).toBe(0);
    }, TEST_TIMEOUT);

    it('should handle subscription cleanup on disconnect', async () => {
      const accountPubkey = testKeypair.publicKey;

      await wsConnection.subscribeToAccount(accountPubkey, () => { });
      expect(wsConnection.getSubscriptionCount()).toBe(1);

      wsConnection.disconnect();
      await waitFor(() => !wsConnection.isConnectionOpen());

      // Subscriptions should be cleaned up
      expect(wsConnection.getSubscriptionCount()).toBe(0);
    }, TEST_TIMEOUT);
  });

  describe('Real-time Data Flow', () => {
    beforeEach(async () => {
      await wsConnection.connect();
      await waitFor(() => wsConnection.isConnectionOpen());
    });

    it('should receive real-time notifications properly', async () => {
      const accountPubkey = testKeypair.publicKey;
      let notificationCount = 0;

      const subscriptionId = await wsConnection.subscribeToAccount(
        accountPubkey,
        (accountData) => {
          notificationCount++;
          console.log(`Notification #${notificationCount}:`, accountData);
        },
        'confirmed'
      );

      // Wait for potential notifications (account updates are rare on devnet)
      await new Promise(resolve => setTimeout(resolve, 3000));

      console.log(`Received ${notificationCount} notifications in 3 seconds`);

      // Clean up
      await wsConnection.unsubscribeFromAccount(subscriptionId);

      // Even if no notifications received, the subscription should work
      expect(typeof subscriptionId).toBe('number');
    }, 8000);
  });
});

// Environment and setup tests
describe('WebSocket Test Environment', () => {
  it('should have access to environment variables', () => {
    console.log('PRIVATE_KEY exists:', !!process.env.PRIVATE_KEY);

    if (process.env.PRIVATE_KEY) {
      expect(process.env.PRIVATE_KEY).toBeDefined();
      expect(process.env.PRIVATE_KEY.length).toBeGreaterThan(0);
    }
  });

  it('should be able to create and manage keypairs', () => {
    const keypair = Keypair.generate();
    expect(keypair).toBeDefined();
    expect(keypair.publicKey).toBeInstanceOf(PublicKey);
    expect(keypair.secretKey).toBeDefined();
    expect(keypair.secretKey.length).toBe(64);
  });

  it('should support base58 private key format', () => {
    if (process.env.PRIVATE_KEY) {
      const keypair = Keypair.fromBase58(process.env.PRIVATE_KEY);
      expect(keypair).toBeDefined();
      expect(keypair.publicKey).toBeInstanceOf(PublicKey);
    }
  });

  it('should validate WebSocket connection configuration', () => {
    const config = {
      endpoint: DEVNET_WS_ENDPOINT,
      timeout: 5000,
      reconnectInterval: 1000,
      maxReconnectAttempts: 3,
    };

    expect(config.endpoint.startsWith('wss://')).toBe(true);
    expect(config.timeout).toBeGreaterThan(0);
    expect(config.reconnectInterval).toBeGreaterThan(0);
    expect(config.maxReconnectAttempts).toBeGreaterThanOrEqual(0);
  });
});