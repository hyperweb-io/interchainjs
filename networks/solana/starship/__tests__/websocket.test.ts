import { WebSocketRpcClient } from '@interchainjs/utils';
import { SubscriptionError } from '@interchainjs/types';
import { SolanaEventClient } from '../../src/events';
import { Keypair } from '../../src/keypair';
import { PublicKey } from '../../src/types';
import { loadLocalSolanaConfig, waitForRpcReady } from '../test-utils';

const { wsEndpoint: LOCAL_WS_ENDPOINT } = loadLocalSolanaConfig();
const TEST_TIMEOUT = 20000;

const waitFor = async (condition: () => boolean, timeout = 5000): Promise<void> => {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    if (condition()) return;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error('Timeout waiting for condition');
};

describe('SolanaEventClient', () => {
  let wsClient: WebSocketRpcClient;
  let eventClient: SolanaEventClient;
  let testKeypair: Keypair;

  beforeAll(async () => {
    testKeypair = Keypair.generate();
    await waitForRpcReady(20000);
  });

  beforeEach(() => {
    wsClient = new WebSocketRpcClient(LOCAL_WS_ENDPOINT, {
      reconnect: {
        maxRetries: 2,
        retryDelay: 500,
        exponentialBackoff: false,
      },
    });
    eventClient = new SolanaEventClient(wsClient);
  });

  afterEach(async () => {
    if (eventClient) {
      await eventClient.disconnect();
    }
  });

  describe('Account subscriptions', () => {
    it('creates and removes account subscription', async () => {
      const subscription = await eventClient.subscribeToAccount(testKeypair.publicKey);
      expect(typeof subscription.id).toBe('string');
      await subscription.unsubscribe();
    }, TEST_TIMEOUT);

    it('prevents duplicate account subscriptions', async () => {
      const subscription = await eventClient.subscribeToAccount(testKeypair.publicKey, {
        commitment: 'confirmed',
      });

      await expect(
        eventClient.subscribeToAccount(testKeypair.publicKey, { commitment: 'confirmed' })
      ).rejects.toThrow(SubscriptionError);

      await subscription.unsubscribe();
    }, TEST_TIMEOUT);
  });

  describe('Program and log subscriptions', () => {
    it('creates program subscription handles cleanup', async () => {
      const systemProgramId = new PublicKey('11111111111111111111111111111112');
      const subscription = await eventClient.subscribeToProgram(systemProgramId);
      expect(subscription.method).toBe('programSubscribe');
      await subscription.unsubscribe();
    }, TEST_TIMEOUT);

    it('creates logs subscription handles cleanup', async () => {
      const subscription = await eventClient.subscribeToLogs('all');
      expect(subscription.method).toBe('logsSubscribe');
      await subscription.unsubscribe();
    }, TEST_TIMEOUT);
  });

  describe('Slot stream', () => {
    it('creates slot subscription and unsubscribes cleanly', async () => {
      const subscription = await eventClient.subscribeToSlot();
      expect(subscription.method).toBe('slotSubscribe');
      await new Promise((resolve) => setTimeout(resolve, 500));
      await subscription.unsubscribe();
    }, TEST_TIMEOUT);
  });

  describe('Subscription management', () => {
    it('unsubscribes from all active subscriptions', async () => {
      const first = await eventClient.subscribeToAccount(testKeypair.publicKey);
      const second = await eventClient.subscribeToLogs('all');

      await eventClient.unsubscribeFromAll();

      await expect(first.unsubscribe()).resolves.toBeUndefined();
      await expect(second.unsubscribe()).resolves.toBeUndefined();
    }, TEST_TIMEOUT);

    it('handles disconnect after subscriptions', async () => {
      const accountSub = await eventClient.subscribeToAccount(testKeypair.publicKey);
      const slotSub = await eventClient.subscribeToSlot();

      await eventClient.disconnect();

      await expect(accountSub.unsubscribe()).resolves.toBeUndefined();
      await expect(slotSub.unsubscribe()).resolves.toBeUndefined();
    }, TEST_TIMEOUT);
  });

  describe('Connection failures', () => {
    it('throws when subscribing with invalid endpoint', async () => {
      const badClient = new SolanaEventClient(new WebSocketRpcClient('ws://127.0.0.1:0'));
      await expect(badClient.subscribeToAccount(testKeypair.publicKey)).rejects.toThrow();
      await badClient.disconnect();
    }, TEST_TIMEOUT);
  });
});
