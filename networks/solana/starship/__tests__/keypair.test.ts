import { Keypair } from '../../src/keypair';
import { PublicKey } from '../../src/types';
import { SolanaSigner } from '../../src/signers';
import { SolanaSignerConfig } from '../../src/signers/types';
import { ISolanaQueryClient } from '../../src/types/solana-client-interfaces';
import { createSolanaQueryClient, SolanaCommitment, SolanaProtocolVersion } from '../../src/index';
import * as fs from 'fs';
import * as path from 'path';
import { parse as parseYaml } from 'yaml';

jest.setTimeout(60000);

interface LocalSolanaConfig {
  rpcEndpoint: string;
}

function loadLocalSolanaConfig(): LocalSolanaConfig {
  const configPath = path.join(__dirname, '../configs/config.yaml');
  let rpcEndpoint = process.env.SOLANA_RPC_ENDPOINT;

  if (!rpcEndpoint) {
    const content = fs.readFileSync(configPath, 'utf-8');
    const doc = parseYaml(content) as any;
    const chains: any[] = Array.isArray(doc?.chains) ? doc.chains : [];
    const solana = chains.find((c) => c?.id === 'solana' || c?.name === 'solana') || chains[0] || {};
    const ports = solana?.ports || {};
    const host = process.env.SOLANA_HOST || '127.0.0.1';
    const rpcPort = Number(process.env.SOLANA_RPC_PORT || (ports.rpc ?? 8899));
    rpcEndpoint = `http://${host}:${rpcPort}`;
  }

  return { rpcEndpoint };
}

async function waitForRpcReady(timeoutMs: number = 20000): Promise<void> {
  const { rpcEndpoint } = loadLocalSolanaConfig();
  const start = Date.now();

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const rpcCall = async (method: string, params: any[] = [], reqTimeout = 3000) => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), reqTimeout);
    try {
      const res = await fetch(rpcEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jsonrpc: '2.0', id: 'health', method, params }),
        signal: controller.signal,
      });
      if (!res.ok) return null;
      return await res.json();
    } catch {
      return null;
    } finally {
      clearTimeout(timer);
    }
  };

  while (Date.now() - start < timeoutMs) {
    const health = await rpcCall('getHealth');
    if (typeof health?.result === 'string' && health.result.toLowerCase() === 'ok') {
      return;
    }

    const slotResp = await rpcCall('getSlot');
    const slot = typeof slotResp?.result === 'number' ? slotResp.result : NaN;
    if (!Number.isNaN(slot) && slot > 0) {
      return;
    }

    await sleep(500);
  }

  throw new Error('Solana RPC did not become ready within timeout');
}

let sharedQueryClient: ISolanaQueryClient;

beforeAll(async () => {
  const { rpcEndpoint } = loadLocalSolanaConfig();
  await waitForRpcReady(30000);
  sharedQueryClient = await createSolanaQueryClient(rpcEndpoint, {
    timeout: 15000,
    protocolVersion: SolanaProtocolVersion.SOLANA_1_18
  });
});

afterAll(async () => {
  if (sharedQueryClient && typeof (sharedQueryClient as any).disconnect === 'function') {
    try {
      await (sharedQueryClient as any).disconnect();
    } catch (error) {
      console.warn('Failed to disconnect Solana query client:', error);
    }
  }
});

describe('Keypair', () => {
  test('should generate a new keypair', () => {
    const keypair = Keypair.generate();
    expect(keypair.publicKey).toBeInstanceOf(PublicKey);
    expect(keypair.secretKey).toBeInstanceOf(Uint8Array);
    expect(keypair.secretKey.length).toBe(64);
  });

  test('should create keypair from secret key', () => {
    const originalKeypair = Keypair.generate();
    const secretKey = originalKeypair.secretKey;

    const restoredKeypair = Keypair.fromSecretKey(secretKey);
    expect(restoredKeypair.publicKey.toString()).toBe(originalKeypair.publicKey.toString());
  });

  test('should create keypair from seed', () => {
    const seed = new Uint8Array(32);
    seed.fill(1);

    const keypair1 = Keypair.fromSeed(seed);
    const keypair2 = Keypair.fromSeed(seed);

    expect(keypair1.publicKey.toString()).toBe(keypair2.publicKey.toString());
  });

  test('should sign and verify messages', () => {
    const keypair = Keypair.generate();
    const message = new Uint8Array([1, 2, 3, 4, 5]);

    const signature = keypair.sign(message);
    const isValid = keypair.verify(message, signature);

    expect(isValid).toBe(true);
  });

  test('should fail verification with wrong message', () => {
    const keypair = Keypair.generate();
    const message = new Uint8Array([1, 2, 3, 4, 5]);
    const wrongMessage = new Uint8Array([1, 2, 3, 4, 6]);

    const signature = keypair.sign(message);
    const isValid = keypair.verify(wrongMessage, signature);

    expect(isValid).toBe(false);
  });

  test('should throw error for invalid secret key length', () => {
    const invalidSecretKey = new Uint8Array(32);
    expect(() => Keypair.fromSecretKey(invalidSecretKey)).toThrow('Secret key must be 64 bytes');
  });

  test('should throw error for invalid seed length', () => {
    const invalidSeed = new Uint8Array(16);
    expect(() => Keypair.fromSeed(invalidSeed)).toThrow('Seed must be 32 bytes');
  });
});

describe('SolanaSigner with IUniSigner interface', () => {
  let keypair: Keypair;

  beforeEach(() => {
    keypair = Keypair.generate();
  });

  test('should implement IUniSigner interface', async () => {
    const signerConfig: SolanaSignerConfig = {
      queryClient: sharedQueryClient,
      commitment: SolanaCommitment.PROCESSED,
      skipPreflight: true
    };
    const signer = new SolanaSigner(keypair, signerConfig);

    // Test getAccounts
    const accounts = await signer.getAccounts();
    expect(accounts).toHaveLength(1);
    expect(accounts[0].address).toBe(keypair.publicKey.toString());
    expect(accounts[0].publicKey).toEqual(keypair.publicKey);

    // Test getPublicKey
    const publicKey = await signer.getPublicKey();
    expect(publicKey).toEqual(keypair.publicKey);

    // Test getAddresses
    const addresses = await signer.getAddresses();
    expect(addresses).toHaveLength(1);
    expect(addresses[0]).toBe(keypair.publicKey.toString());

    // Test signArbitrary
    const message = new Uint8Array([1, 2, 3, 4, 5]);
    const signature = await signer.signArbitrary(message);
    expect(signature.value).toBeInstanceOf(Uint8Array);
    expect(signature.value.length).toBe(64);
  });

  test('should sign transactions using workflow', async () => {
    const signerConfig: SolanaSignerConfig = {
      queryClient: sharedQueryClient,
      commitment: SolanaCommitment.PROCESSED,
      skipPreflight: true
    };
    const signer = new SolanaSigner(keypair, signerConfig);

    // Create a simple instruction
    const instruction = {
      keys: [{
        pubkey: keypair.publicKey,
        isSigner: true,
        isWritable: true
      }],
      programId: new PublicKey('11111111111111111111111111111112'), // System program
      data: new Uint8Array([0, 0, 0, 0]) // Simple data
    };

    const signArgs = {
      instructions: [instruction],
      feePayer: keypair.publicKey,
      recentBlockhash: '11111111111111111111111111111112'
    };

    // Test sign method
    const signedTx = await signer.sign(signArgs);
    expect(signedTx.signature).toBeDefined();
    expect(signedTx.txBytes).toBeInstanceOf(Uint8Array);
    expect(typeof signedTx.broadcast).toBe('function');
  });
});
