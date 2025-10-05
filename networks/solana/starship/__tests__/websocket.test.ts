import { WebSocketRpcClient } from '@interchainjs/utils';
import {
  Keypair,
  PublicKey,
  SolanaCommitment,
  SolanaProtocolVersion,
  SolanaSigner,
  createSolanaQueryClient,
  type ISolanaQueryClient,
  type AccountNotification,
  type ProgramNotification,
  type LogsNotification,
  type SignatureNotification,
  type SlotNotification,
  type RootNotification,
  type BlockNotification,
  type SlotsUpdatesNotification,
  type VoteNotification
} from '../../src';
import { SolanaEventClient } from '../../src/events';
import { loadLocalSolanaConfig, waitForRpcReady } from '../test-utils';
import * as bs58 from 'bs58';
import type { SolanaSignedTransaction } from '../../src/signers/types';
import type { SolanaSubscription } from '../../src/types/solana-event-interfaces';

const { wsEndpoint: LOCAL_WS_ENDPOINT, rpcEndpoint: LOCAL_RPC_ENDPOINT } = loadLocalSolanaConfig();
const TEST_TIMEOUT = 60000;
const SUBSCRIPTION_TIMEOUT = 30000;
const LAMPORTS_PER_SOL = 1_000_000_000;
const SYSTEM_PROGRAM_ID = new PublicKey('11111111111111111111111111111111');

function solToLamports(sol: number): number {
  return Math.round(sol * LAMPORTS_PER_SOL);
}

function blockIncludesSignature(block: unknown, signature: string): boolean {
  if (!block || typeof block !== 'object') {
    return false;
  }

  const transactions = Array.isArray((block as any).transactions) ? (block as any).transactions : [];

  return transactions.some((entry: unknown) => {
    if (!entry) {
      return false;
    }

    if (typeof entry === 'string') {
      return entry === signature;
    }

    if (Array.isArray(entry)) {
      return entry.includes(signature);
    }

    if (typeof entry === 'object') {
      const obj = entry as any;
      if (Array.isArray(obj.signatures) && obj.signatures.some((sig: unknown) => String(sig) === signature)) {
        return true;
      }
      if (
        obj.transaction &&
        Array.isArray(obj.transaction.signatures) &&
        obj.transaction.signatures.some((sig: unknown) => String(sig) === signature)
      ) {
        return true;
      }
    }

    return false;
  });
}

describe('SolanaEventClient websocket flows', () => {
  let queryClient: ISolanaQueryClient;
  let signer: SolanaSigner;
  let payer: Keypair;
  let payerPublicKey: PublicKey;
  let wsClient: WebSocketRpcClient;
  let eventClient: SolanaEventClient;

  const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

  function waitForNext<T>(
    subscription: SolanaSubscription<T>,
    label: string,
    timeoutMs: number = SUBSCRIPTION_TIMEOUT
  ): Promise<T> {
    const iterator = subscription[Symbol.asyncIterator]();

    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error(`Timeout waiting for ${label}`));
      }, timeoutMs);

      iterator
        .next()
        .then((result) => {
          clearTimeout(timer);
          if (result.done) {
            reject(new Error(`${label} subscription ended before emitting`));
            return;
          }
          resolve(result.value);
        })
        .catch((error) => {
          clearTimeout(timer);
          reject(error);
        });
    });
  }

  async function waitForMatchingNotification<T>(
    subscription: SolanaSubscription<T>,
    predicate: (event: T) => boolean,
    label: string,
    timeoutMs: number = SUBSCRIPTION_TIMEOUT
  ): Promise<T> {
    const deadline = Date.now() + timeoutMs;

    while (Date.now() < deadline) {
      const remaining = Math.max(50, deadline - Date.now());
      const event = await waitForNext(subscription, label, remaining);
      if (predicate(event)) {
        return event;
      }
    }

    throw new Error(`Timeout waiting for ${label}`);
  }

  async function getBalance(pubkey: PublicKey): Promise<bigint> {
    const response = await queryClient.getBalance({
      pubkey: pubkey.toString(),
      options: { commitment: SolanaCommitment.CONFIRMED }
    });
    return response.value;
  }

  async function waitForSignatureConfirmation(signature: string, timeoutMs = 30000): Promise<void> {
    const start = Date.now();

    while (Date.now() - start < timeoutMs) {
      const statuses = await queryClient.getSignatureStatuses({
        signatures: [signature],
        options: { searchTransactionHistory: true }
      });

      const status = statuses.value[0];
      if (status?.err) {
        throw new Error(`Signature ${signature} failed: ${JSON.stringify(status.err)}`);
      }

      const confirmation = status?.confirmationStatus;
      if (confirmation === 'processed' || confirmation === 'confirmed' || confirmation === 'finalized') {
        return;
      }

      await sleep(1000);
    }

    throw new Error(`Timeout waiting for confirmation of signature ${signature}`);
  }

  async function ensureAccountHasLamports(pubkey: PublicKey, minLamports: bigint): Promise<void> {
    let balance = await getBalance(pubkey);
    if (balance >= minLamports) {
      return;
    }

    const targetLamports = Number(minLamports > balance ? minLamports - balance : 0n);
    const requestLamports = targetLamports > 0 ? Math.max(targetLamports, solToLamports(1)) : solToLamports(1);

    for (let attempt = 0; attempt < 5; attempt++) {
      const signature = await queryClient.requestAirdrop({
        pubkey: pubkey.toString(),
        lamports: requestLamports,
        options: { commitment: SolanaCommitment.PROCESSED }
      });

      await waitForSignatureConfirmation(signature, 40000);
      await sleep(500);

      balance = await getBalance(pubkey);
      if (balance >= minLamports) {
        return;
      }
    }

    throw new Error(`Unable to fund account ${pubkey.toString()} to minimum balance`);
  }

  function createTransferInstruction(from: PublicKey, to: PublicKey, lamports: bigint) {
    const data = Buffer.alloc(12);
    data.writeUInt32LE(2, 0); // SystemProgram.transfer instruction index
    data.writeBigUInt64LE(lamports, 4);

    return {
      programId: SYSTEM_PROGRAM_ID,
      keys: [
        { pubkey: from, isSigner: true, isWritable: true },
        { pubkey: to, isSigner: false, isWritable: true }
      ],
      data: new Uint8Array(data)
    };
  }

  async function signTransfer(to: PublicKey, lamports: bigint): Promise<{ signed: SolanaSignedTransaction; signature: string }> {
    const instruction = createTransferInstruction(payerPublicKey, to, lamports);
    const signed = await signer.sign({ instructions: [instruction] });
    const signatureBytes = signed.signature.value;
    const signature = bs58.encode(signatureBytes);
    return { signed, signature };
  }

  async function broadcastSignedTransfer(signed: SolanaSignedTransaction): Promise<string> {
    const response = await signed.broadcast({ skipPreflight: true });
    return response.signature;
  }

  async function signAndBroadcastTransfer(to: PublicKey, lamports: bigint): Promise<{ signature: string }> {
    const { signed, signature } = await signTransfer(to, lamports);
    const broadcastSignature = await broadcastSignedTransfer(signed);

    if (broadcastSignature !== signature) {
      throw new Error('Broadcast returned a mismatched signature');
    }

    return { signature };
  }

  beforeAll(async () => {
    jest.setTimeout(TEST_TIMEOUT);
    await waitForRpcReady(TEST_TIMEOUT);

    queryClient = await createSolanaQueryClient(LOCAL_RPC_ENDPOINT, {
      timeout: TEST_TIMEOUT,
      protocolVersion: SolanaProtocolVersion.SOLANA_1_18
    });
    await queryClient.connect();

    payer = Keypair.generate();
    payerPublicKey = payer.publicKey;
    signer = new SolanaSigner(payer, {
      queryClient,
      commitment: SolanaCommitment.PROCESSED,
      skipPreflight: true,
      maxRetries: 3
    });

    await ensureAccountHasLamports(payerPublicKey, BigInt(solToLamports(2)));
  });

  beforeEach(() => {
    wsClient = new WebSocketRpcClient(LOCAL_WS_ENDPOINT, {
      reconnect: {
        maxRetries: 2,
        retryDelay: 500,
        exponentialBackoff: false
      }
    });
    eventClient = new SolanaEventClient(wsClient);
  });

  afterEach(async () => {
    if (eventClient) {
      await eventClient.disconnect();
    }
  });

  afterAll(async () => {
    if (queryClient) {
      await queryClient.disconnect();
    }
  });

  it(
    'emits account notifications when balance changes',
    async () => {
      const target = Keypair.generate().publicKey;
      const lamports = solToLamports(1);
      const subscription = await eventClient.subscribeToAccount(target, {
        commitment: 'processed'
      });

      try {
        const notificationPromise = waitForMatchingNotification<AccountNotification>(
          subscription,
          (event) => event.value !== null,
          'account notification'
        );

        const signature = await queryClient.requestAirdrop({
          pubkey: target.toString(),
          lamports,
          options: { commitment: SolanaCommitment.PROCESSED }
        });

        await waitForSignatureConfirmation(signature, 40000);
        const notification = await notificationPromise;

        expect(notification.context.slot).toBeGreaterThan(0);
        expect(notification.value).not.toBeNull();
        expect(notification.value?.owner).toBe(SYSTEM_PROGRAM_ID.toString());
        expect(notification.value?.lamports).toBeGreaterThanOrEqual(BigInt(lamports));
      } finally {
        await subscription.unsubscribe();
      }
    },
    TEST_TIMEOUT
  );

  it(
    'emits program notifications for system program transfers',
    async () => {
      const recipient = Keypair.generate().publicKey;
      const lamports = BigInt(solToLamports(0.5));

      const subscription = await eventClient.subscribeToProgram(SYSTEM_PROGRAM_ID, {
        commitment: 'processed'
      });

      try {
        const notificationPromise = waitForMatchingNotification<ProgramNotification>(
          subscription,
          (event) => event.value.pubkey === recipient.toString(),
          'system program notification',
          45000
        );

        const { signature } = await signAndBroadcastTransfer(recipient, lamports);
        const notification = await notificationPromise;

        expect(notification.context.slot).toBeGreaterThan(0);
        expect(notification.value.pubkey).toBe(recipient.toString());
        expect(notification.value.account.owner).toBe(SYSTEM_PROGRAM_ID.toString());
        expect(notification.value.account.lamports).toBeGreaterThanOrEqual(lamports);

        await waitForSignatureConfirmation(signature, 40000);
      } finally {
        await subscription.unsubscribe();
      }
    },
    TEST_TIMEOUT
  );

  it(
    'captures transaction logs mentioning the payer',
    async () => {
      const recipient = Keypair.generate().publicKey;
      const lamports = BigInt(solToLamports(0.1));

      const subscription = await eventClient.subscribeToLogs(
        { mentions: [payerPublicKey.toString()] },
        { commitment: 'processed' }
      );

      try {
        const logPromise = waitForMatchingNotification<LogsNotification>(
          subscription,
          (event) => event.value.signature !== null,
          'logs notification',
          45000
        );

        const { signature } = await signAndBroadcastTransfer(recipient, lamports);
        const notification = await logPromise;

        expect(notification.value.signature).toBe(signature);
        expect(notification.value.err).toBeNull();
        expect(notification.value.logs.length).toBeGreaterThan(0);
        expect(notification.value.logs.some((entry) => entry.includes(SYSTEM_PROGRAM_ID.toString()))).toBe(true);

        await waitForSignatureConfirmation(signature, 40000);
      } finally {
        await subscription.unsubscribe();
      }
    },
    TEST_TIMEOUT
  );

  it(
    'reports block notifications for transfers mentioning the payer',
    async () => {
      const recipient = Keypair.generate().publicKey;
      const lamports = BigInt(solToLamports(0.05));

      const blockSubscription = await eventClient.subscribeToBlock(
        { mentionsAccountOrProgram: payerPublicKey },
        {
          commitment: 'processed',
          encoding: 'json',
          transactionDetails: 'signatures',
          maxSupportedTransactionVersion: 0
        }
      );

      try {
        const { signature } = await signAndBroadcastTransfer(recipient, lamports);

        const blockNotification = await waitForMatchingNotification<BlockNotification>(
          blockSubscription,
          (event) => event.value.block !== null && blockIncludesSignature(event.value.block, signature),
          'block notification',
          60000
        );

        expect(blockNotification.context.slot).toBeGreaterThan(0);
        expect(blockNotification.value.slot).toBeGreaterThanOrEqual(0);
        expect(blockNotification.value.block).not.toBeNull();

        await waitForSignatureConfirmation(signature, 45000);
      } finally {
        await blockSubscription.unsubscribe();
      }
    },
    TEST_TIMEOUT
  );

  it(
    'delivers signature notifications through confirmation',
    async () => {
      const recipient = Keypair.generate().publicKey;
      const lamports = BigInt(solToLamports(0.2));

      const { signed, signature } = await signTransfer(recipient, lamports);
      const signatureSubscription = await eventClient.subscribeToSignature(signature, {
        commitment: 'processed',
        enableReceivedNotification: true
      });

      try {
        const receivedPromise = waitForNext<SignatureNotification>(
          signatureSubscription,
          'signature received'
        );

        const broadcastSignature = await broadcastSignedTransfer(signed);
        expect(broadcastSignature).toBe(signature);

        const firstNotification = await receivedPromise;
        expect(firstNotification.value.signature).toBe(signature);
        expect(firstNotification.value.err).toBeNull();

        const hasSlot = firstNotification.context.slot !== null;
        const finalNotification = hasSlot
          ? firstNotification
          : await waitForNext<SignatureNotification>(
              signatureSubscription,
              'signature confirmation',
              45000
            );

        expect(finalNotification.value.signature).toBe(signature);
        expect(finalNotification.value.err).toBeNull();
        expect(finalNotification.context.slot).not.toBeNull();

        await waitForSignatureConfirmation(signature, 45000);
      } finally {
        await signatureSubscription.unsubscribe();
      }
    },
    TEST_TIMEOUT
  );

  it(
    'streams slot updates',
    async () => {
      const subscription = await eventClient.subscribeToSlot();

      try {
        const slotNotification = await waitForNext<SlotNotification>(
          subscription,
          'slot notification',
          20000
        );
        expect(slotNotification.slot).toBeGreaterThan(0);
        expect(slotNotification.root).toBeGreaterThanOrEqual(0);
        expect(slotNotification.parent).toBeGreaterThanOrEqual(0);
      } finally {
        await subscription.unsubscribe();
      }
    },
    TEST_TIMEOUT
  );

  it(
    'emits slots update notifications for validator progress',
    async () => {
      const subscription = await eventClient.subscribeToSlotsUpdates();

      try {
        const update = await waitForMatchingNotification<SlotsUpdatesNotification>(
          subscription,
          (event) => event.slot > 0 && typeof event.type === 'string' && event.type.length > 0,
          'slots updates notification',
          30000
        );

        expect(update.slot).toBeGreaterThan(0);
        expect(update.type).not.toHaveLength(0);
        if (update.stats) {
          expect(update.stats.numTransactionEntries).toBeGreaterThanOrEqual(0);
        }
      } finally {
        await subscription.unsubscribe();
      }
    },
    TEST_TIMEOUT
  );

  it(
    'emits root updates after new transactions finalize',
    async () => {
      const recipient = Keypair.generate().publicKey;
      const lamports = BigInt(solToLamports(0.05));
      const subscription = await eventClient.subscribeToRoot();

      try {
        const rootPromise = waitForNext<RootNotification>(
          subscription,
          'root notification',
          60000
        );
        const { signature } = await signAndBroadcastTransfer(recipient, lamports);
        await waitForSignatureConfirmation(signature, 45000);
        const root = await rootPromise;
        expect(typeof root).toBe('number');
        expect(root).toBeGreaterThan(0);
      } finally {
        await subscription.unsubscribe();
      }
    },
    TEST_TIMEOUT
  );

  it(
    'delivers vote notifications as the validator finalizes slots',
    async () => {
      const subscription = await eventClient.subscribeToVote();

      try {
        const initialVote = await waitForNext<VoteNotification>(
          subscription,
          'initial vote notification',
          60000
        );

        const baselineSignature = initialVote.signature;

        const recipient = Keypair.generate().publicKey;
        const lamports = BigInt(solToLamports(0.05));
        const { signature } = await signAndBroadcastTransfer(recipient, lamports);

        const followupVote = await waitForMatchingNotification<VoteNotification>(
          subscription,
          (event) => event.signature !== baselineSignature,
          'follow-up vote notification',
          60000
        );

        expect(followupVote.hash).not.toHaveLength(0);
        expect(followupVote.signature).not.toHaveLength(0);
        expect(followupVote.votePubkey).not.toHaveLength(0);
        expect(followupVote.slots.length).toBeGreaterThan(0);
        await waitForSignatureConfirmation(signature, 45000);
      } finally {
        await subscription.unsubscribe();
      }
    },
    TEST_TIMEOUT
  );
});
