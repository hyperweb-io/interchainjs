import * as fs from 'fs';
import * as path from 'path';
import { parse as parseYaml } from 'yaml';
import { Connection, Keypair, PublicKey } from '../../src/index';

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

export async function confirmWithBackoff(connection: Connection, signature: string, maxMs = 30000): Promise<boolean> {
  const start = Date.now();
  let delay = 500;
  while (Date.now() - start < maxMs) {
    try {
      const ok = await connection.confirmTransaction(signature);
      if (ok) return true;
    } catch {}
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

  const sig = await connection.requestAirdrop(publicKey, airdropAmountLamports);
  const confirmed = await confirmWithBackoff(connection, sig, 45000);
  if (!confirmed) {
    // Last chance: wait a bit and recheck balance
    await new Promise((r) => setTimeout(r, 2000));
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
