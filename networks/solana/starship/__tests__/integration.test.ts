import { Buffer } from 'buffer';
import {
  Keypair,
  SolanaSigner,
  PublicKey,
  createSolanaQueryClient,
  SolanaCommitment,
  SolanaProtocolVersion
} from '../../src/index';
import { SolanaSignerConfig } from '../../src/signers/types';
import { ISolanaQueryClient } from '../../src/types/solana-client-interfaces';
import { GetSignatureStatusesRequest } from '../../src/types/requests/transaction';
import * as fs from 'fs';
import * as path from 'path';
import { parse as parseYaml } from 'yaml';

jest.setTimeout(120000);

const LAMPORTS_PER_SOL = 1_000_000_000;
const SYSTEM_PROGRAM_ID = new PublicKey('11111111111111111111111111111111');

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

function solToLamports(sol: number): number {
  return Math.round(sol * LAMPORTS_PER_SOL);
}

function lamportsToSol(lamports: bigint | number): number {
  return Number(lamports) / LAMPORTS_PER_SOL;
}

function createTransferInstruction(from: PublicKey, to: PublicKey, lamports: number) {
  const data = Buffer.alloc(12);
  data.writeUInt32LE(2, 0);
  data.writeBigUInt64LE(BigInt(lamports), 4);

  return {
    keys: [
      { pubkey: from, isSigner: true, isWritable: true },
      { pubkey: to, isSigner: false, isWritable: true }
    ],
    programId: SYSTEM_PROGRAM_ID,
    data: new Uint8Array(data)
  };
}

describe('Solana Integration Tests', () => {
  let queryClient: ISolanaQueryClient;
  let signer: SolanaSigner;
  let signerConfig: SolanaSignerConfig;
  let keypair: Keypair;

  async function waitForConfirmation(signature: string, timeoutMs = 60000): Promise<boolean> {
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
      const request: GetSignatureStatusesRequest = {
        signatures: [signature],
        options: { searchTransactionHistory: true }
      };
      const statuses = await queryClient.getSignatureStatuses(request);
      const status = statuses.value?.[0];
      if (status) {
        if (status.err) return false;
        if (status.confirmationStatus === 'confirmed' || status.confirmationStatus === 'finalized') {
          return true;
        }
        if (status.confirmations === null) {
          return true;
        }
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    return false;
  }

  const client = {
    get signerAddress(): PublicKey {
      return keypair.publicKey;
    },
    async getBalance(target?: PublicKey): Promise<number> {
      const pubkey = (target ?? keypair.publicKey).toString();
      const response = await queryClient.getBalance({
        pubkey,
        options: { commitment: SolanaCommitment.PROCESSED }
      });
      return Number(response.value);
    },
    async getAccountInfo(target: PublicKey) {
      const response = await queryClient.getAccountInfo({
        pubkey: target.toString(),
        options: { encoding: 'base64', commitment: SolanaCommitment.PROCESSED }
      } as any);
      return response.value;
    },
    async requestAirdrop(amountLamports: number): Promise<string> {
      const signature = await queryClient.requestAirdrop({
        pubkey: keypair.publicKey.toString(),
        lamports: amountLamports,
        options: { commitment: SolanaCommitment.PROCESSED }
      });
      await waitForConfirmation(signature, 45000);
      return signature;
    },
    async transfer({ recipient, amount }: { recipient: PublicKey; amount: number; }): Promise<string> {
      const instruction = createTransferInstruction(keypair.publicKey, recipient, amount);
      const response = await signer.signAndBroadcast({
        instructions: [instruction],
        feePayer: keypair.publicKey
      });
      await response.wait();
      return response.signature;
    }
  };

  beforeAll(async () => {
    const { rpcEndpoint } = loadLocalSolanaConfig();
    await waitForRpcReady(30000);
    queryClient = await createSolanaQueryClient(rpcEndpoint, {
      timeout: 15000,
      protocolVersion: SolanaProtocolVersion.SOLANA_1_18
    });
    keypair = Keypair.generate();
    signerConfig = {
      queryClient,
      commitment: SolanaCommitment.PROCESSED,
      skipPreflight: true
    };
    signer = new SolanaSigner(keypair, signerConfig);

    const minLamports = solToLamports(0.05);
    const currentBalance = await client.getBalance().catch(() => 0);
    if (currentBalance < minLamports) {
      const sig = await client.requestAirdrop(minLamports);
      console.log('Requested airdrop for signer:', sig);
    }

    console.log(`Testing with address: ${keypair.publicKey.toString()}`);
    console.log(`Network: Local Solana (${rpcEndpoint})`);
  }, 120000);

  afterAll(async () => {
    if (queryClient && typeof (queryClient as any).disconnect === 'function') {
      try {
        await (queryClient as any).disconnect();
      } catch (error) {
        console.warn('Failed to disconnect query client:', error);
      }
    }
  });

  test('should connect to local node', async () => {
    const health = await queryClient.getHealth();
    expect(typeof health === 'string' || health === null).toBe(true);
  });

  test('should get balance', async () => {
    const balance = await client.getBalance();
    expect(balance).toBeGreaterThanOrEqual(0);
    console.log(`Account balance: ${lamportsToSol(balance)} SOL`);
  });

  test('should request airdrop if balance is low', async () => {
    const initialBalance = await client.getBalance();

    if (initialBalance < solToLamports(0.1)) {
      console.log('Balance is low, requesting airdrop...');

      try {
        const signature = await client.requestAirdrop(solToLamports(0.5));
        expect(typeof signature).toBe('string');

        const newBalance = await client.getBalance();
        expect(newBalance).toBeGreaterThan(initialBalance);

        console.log(`Airdrop successful! New balance: ${lamportsToSol(newBalance)} SOL`);
      } catch (error) {
        console.warn('Airdrop failed:', error);
      }
    }
  });

  test('should get account info', async () => {
    const accountInfo = await client.getAccountInfo(client.signerAddress);
    if (accountInfo) {
      expect(typeof accountInfo.lamports === 'bigint').toBe(true);
      expect(typeof accountInfo.owner).toBe('string');
      expect(typeof accountInfo.executable).toBe('boolean');
    }
  });

  test('should transfer SOL', async () => {
    const balance = await client.getBalance();
    const requiredBalance = solToLamports(0.01);

    console.log(`Current balance: ${lamportsToSol(balance)} SOL`);
    console.log(`Required balance: ${lamportsToSol(requiredBalance)} SOL`);
    console.log(`Address: ${keypair.publicKey.toString()}`);

    if (balance < requiredBalance) {
      throw new Error(`Insufficient balance for transfer test. Current: ${lamportsToSol(balance)} SOL, Required: ${lamportsToSol(requiredBalance)} SOL.`);
    }

    const recipient = Keypair.generate().publicKey;
    const transferAmount = solToLamports(0.001);

    const initialRecipientBalance = await client.getBalance(recipient);

    const signature = await client.transfer({ recipient, amount: transferAmount });
    expect(typeof signature).toBe('string');

    await waitForConfirmation(signature, 60000);
    const finalRecipientBalance = await client.getBalance(recipient);

    expect(finalRecipientBalance).toBeGreaterThanOrEqual(initialRecipientBalance + transferAmount);
    console.log(`Transfer successful! Signature: ${signature}`);
    console.log(`Recipient balance: ${lamportsToSol(finalRecipientBalance)} SOL`);
  });
});
