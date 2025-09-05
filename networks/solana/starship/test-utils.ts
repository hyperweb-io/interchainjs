import * as fs from 'fs';
import * as path from 'path';
import { parse as parseYaml } from 'yaml';
import { Connection, Keypair, PublicKey } from '../src/index';

export interface LocalSolanaConfig {
  rpcEndpoint: string;
  wsEndpoint: string;
  faucetPort?: number;
}

// Read ports from networks/solana/starship/configs/config.yaml without external deps
export function loadLocalSolanaConfig(): LocalSolanaConfig {
  const configPath = path.join(__dirname, '../configs/config.yaml');
  const content = fs.readFileSync(configPath, 'utf-8');
  const doc = parseYaml(content) as any;

  const chains: any[] = Array.isArray(doc?.chains) ? doc.chains : [];
  const solana =
    chains.find((c) => c?.id === 'solana' || c?.name === 'solana') || chains[0] || {};
  const ports = solana?.ports || {};

  const host = process.env.SOLANA_HOST || '127.0.0.1';
  const rpcPort = Number(ports.rpc ?? 8899);
  const wsPort = Number(ports.ws ?? 8900);
  const faucetPort = ports.faucet !== undefined ? Number(ports.faucet) : undefined;

  return {
    rpcEndpoint: `http://${host}:${rpcPort}`,
    wsEndpoint: `ws://${host}:${wsPort}`,
    faucetPort,
  };
}

/**
 * Wait for the local Solana RPC to be ready after a fresh start.
 * This mitigates first-run flakiness where slots/health are not yet available.
 */
export async function waitForRpcReady(timeoutMs: number = 20000): Promise<void> {
  const { rpcEndpoint } = loadLocalSolanaConfig();
  const start = Date.now();

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  // Small helper to make a JSON-RPC call directly
  const rpcCall = async (method: string, params: any[] = [], reqTimeout = 3000): Promise<any> => {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), reqTimeout);
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
      clearTimeout(t);
    }
  };

  // First try getHealth until it returns "ok"
  while (Date.now() - start < timeoutMs) {
    const health = await rpcCall('getHealth');
    if (typeof health?.result === 'string' && health.result.toLowerCase() === 'ok') {
      return; // RPC is healthy
    }

    // Fallback: check if slot has advanced beyond 0
    const slotResp = await rpcCall('getSlot');
    const slot = typeof slotResp?.result === 'number' ? slotResp.result : NaN;
    if (!Number.isNaN(slot) && slot > 0) {
      return;
    }

    await sleep(500);
  }
  // If we timed out, continue anyway — tests will handle errors as needed.
}

export async function confirmWithBackoff(connection: Connection, signature: string, maxMs = 30000): Promise<boolean> {
  const start = Date.now();
  let delay = 500;
  while (Date.now() - start < maxMs) {
    try {
      const ok = await connection.confirmTransaction(signature);
      if (ok) return true;
    } catch { }
    await new Promise((r) => setTimeout(r, delay));
    delay = Math.min(delay * 1.5, 2000);
  }
  return false;
}

export async function ensureAirdrop(
  connection: Connection,
  publicKey: PublicKey,
  minLamports: number,
  airdropAmountLamports: number = minLamports
): Promise<void> {
  const balance = await connection.getBalance(publicKey);
  if (balance >= minLamports) return;

  // Try airdrop, but don't fail tests if local RPC/faucet is unavailable
  try {
    const sig = await connection.requestAirdrop(publicKey, airdropAmountLamports);
    const confirmed = await confirmWithBackoff(connection, sig, 20000);
    if (!confirmed) {
      // Last chance: wait a bit and recheck balance
      await new Promise((r) => setTimeout(r, 1000));
    }
  } catch (e) {
    // Soft-fail for environments without a local faucet
    // Tests that require real chain data already handle absence gracefully
    // eslint-disable-next-line no-console
    console.warn('Airdrop skipped: local RPC/faucet unavailable. Continuing without funding.');
  }
}

export async function createFundedKeypair(
  connection: Connection,
  minLamports: number,
  airdropAmountLamports: number = minLamports
): Promise<Keypair> {
  const kp = Keypair.generate();
  await ensureAirdrop(connection, kp.publicKey, minLamports, airdropAmountLamports);
  return kp;
}
