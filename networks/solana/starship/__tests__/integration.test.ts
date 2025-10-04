import {
  Keypair,
  PublicKey,
  SolanaSigner,
  createSolanaQueryClient,
  SolanaCommitment,
  SolanaProtocolVersion,
  type ISolanaQueryClient,
  type SolanaSignArgs
} from '../../src';
import { loadLocalSolanaConfig } from '../test-utils';

const LAMPORTS_PER_SOL = 1_000_000_000;
const SYSTEM_PROGRAM_ID = '11111111111111111111111111111111';

function solToLamports(sol: number): number {
  return Math.round(sol * LAMPORTS_PER_SOL);
}

function lamportsToSol(lamports: bigint | number): number {
  const value = typeof lamports === 'bigint' ? Number(lamports) : lamports;
  return value / LAMPORTS_PER_SOL;
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getBalanceLamports(
  client: ISolanaQueryClient,
  address: PublicKey | string
): Promise<bigint> {
  const pubkey = typeof address === 'string' ? address : address.toString();
  const response = await client.getBalance({ pubkey });
  return response.value;
}

async function waitForBalanceAtLeast(
  client: ISolanaQueryClient,
  address: PublicKey,
  expectedLamports: bigint,
  attempts = 15,
  delayMs = 1500
): Promise<bigint> {
  let latest = await getBalanceLamports(client, address);
  for (let i = 0; i < attempts; i++) {
    if (latest >= expectedLamports) {
      return latest;
    }
    await sleep(delayMs);
    latest = await getBalanceLamports(client, address);
  }
  return latest;
}

async function waitForSignatureConfirmation(
  client: ISolanaQueryClient,
  signature: string,
  attempts = 15,
  delayMs = 1500
): Promise<boolean> {
  for (let i = 0; i < attempts; i++) {
    try {
      const statusResponse = await client.getSignatureStatuses({
        signatures: [signature],
        options: { searchTransactionHistory: true }
      });
      const status = statusResponse.value?.[0];
      if (status?.confirmationStatus === 'processed' || status?.confirmationStatus === 'confirmed' || status?.confirmationStatus === 'finalized') {
        return true;
      }
    } catch {
      // Ignore transient RPC errors and retry
    }
    await sleep(delayMs);
  }
  return false;
}

function createTransferInstruction(
  from: PublicKey,
  to: PublicKey,
  lamports: bigint
): SolanaSignArgs['instructions'][number] {
  const data = Buffer.alloc(12);
  data.writeUInt32LE(2, 0);
  data.writeBigUInt64LE(lamports, 4);

  return {
    programId: new PublicKey(SYSTEM_PROGRAM_ID),
    keys: [
      { pubkey: from, isSigner: true, isWritable: true },
      { pubkey: to, isSigner: false, isWritable: true }
    ],
    data: new Uint8Array(data)
  };
}

describe('Solana Integration Tests', () => {
  let client: ISolanaQueryClient;
  let signer: SolanaSigner;
  let keypair: Keypair;
  let signerAddress: PublicKey;

  beforeAll(async () => {
    const { rpcEndpoint } = loadLocalSolanaConfig();

    keypair = Keypair.generate();
    signerAddress = keypair.publicKey;

    client = await createSolanaQueryClient(rpcEndpoint, {
      timeout: 60000,
      protocolVersion: SolanaProtocolVersion.SOLANA_1_18
    });
    await client.connect();

    signer = new SolanaSigner(keypair, {
      queryClient: client,
      commitment: SolanaCommitment.PROCESSED,
      skipPreflight: true,
      maxRetries: 3
    });

    const minLamports = BigInt(solToLamports(0.05));
    const currentBalance = await getBalanceLamports(client, signerAddress);
    if (currentBalance < minLamports) {
      try {
        const signature = await client.requestAirdrop({
          pubkey: signerAddress.toString(),
          lamports: solToLamports(2),
          options: { commitment: SolanaCommitment.PROCESSED }
        });
        console.log('Requested airdrop:', signature);
        await waitForSignatureConfirmation(client, signature);
        await waitForBalanceAtLeast(client, signerAddress, minLamports);
      } catch (error) {
        console.warn('Airdrop request failed; tests may skip for low balance:', error);
      }
    }

    console.log(`Testing with address: ${signerAddress.toString()}`);
    console.log(`Network: Local Solana (${rpcEndpoint})`);
  });

  afterAll(async () => {
    if (client) {
      await client.disconnect();
    }
  });

  test('should connect to local node', () => {
    expect(client).toBeDefined();
    expect(signerAddress).toBeInstanceOf(PublicKey);
    expect(client.isConnected()).toBe(true);
  });

  test('should get balance', async () => {
    const balanceLamports = await getBalanceLamports(client, signerAddress);
    const balanceNumber = Number(balanceLamports);
    expect(typeof balanceNumber).toBe('number');
    expect(balanceNumber).toBeGreaterThanOrEqual(0);

    console.log(`Account balance: ${lamportsToSol(balanceLamports)} SOL`);
  });

  test('should request airdrop if balance is low', async () => {
    const initialBalance = await getBalanceLamports(client, signerAddress);
    const thresholdLamports = BigInt(solToLamports(0.1));

    if (initialBalance < thresholdLamports) {
      console.log('Balance is low, requesting airdrop...');

      try {
        const lamports = solToLamports(0.5);
        const signature = await client.requestAirdrop({
          pubkey: signerAddress.toString(),
          lamports,
          options: { commitment: SolanaCommitment.PROCESSED }
        });
        expect(signature).toBeTruthy();
        expect(typeof signature).toBe('string');

        await waitForSignatureConfirmation(client, signature);

        const newBalance = await waitForBalanceAtLeast(
          client,
          signerAddress,
          initialBalance + BigInt(lamports)
        );

        expect(newBalance).toBeGreaterThan(initialBalance);

        console.log(`Airdrop successful! New balance: ${lamportsToSol(newBalance)} SOL`);
      } catch (error) {
        console.warn('Airdrop failed:', error);
      }
    }
  });

  test('should get account info', async () => {
    const accountInfoResponse = await client.getAccountInfo({
      pubkey: signerAddress.toString()
    });

    const accountInfo = accountInfoResponse.value;

    if (accountInfo) {
      expect(accountInfo).toHaveProperty('lamports');
      expect(accountInfo).toHaveProperty('owner');
      expect(accountInfo).toHaveProperty('executable');
      expect(typeof Number(accountInfo.lamports)).toBe('number');
    }
  });

  test('should transfer SOL', async () => {
    const balanceLamports = await getBalanceLamports(client, signerAddress);
    const requiredLamports = BigInt(solToLamports(0.01));

    console.log(`Current balance: ${lamportsToSol(balanceLamports)} SOL`);
    console.log(`Required balance: ${lamportsToSol(requiredLamports)} SOL`);
    console.log(`Address: ${signerAddress.toString()}`);

    if (balanceLamports < requiredLamports) {
      throw new Error(
        `Insufficient balance for transfer test. Current: ${lamportsToSol(balanceLamports)} SOL, Required: ${lamportsToSol(requiredLamports)} SOL. Please fund local faucet for ${signerAddress.toString()}.`
      );
    }

    const recipient = Keypair.generate().publicKey;
    const transferLamportsValue = solToLamports(0.001);
    const transferLamports = BigInt(transferLamportsValue);

    const initialRecipientBalance = await getBalanceLamports(client, recipient);

    const transferInstruction = createTransferInstruction(
      signerAddress,
      recipient,
      transferLamports
    );

    const signArgs: SolanaSignArgs = {
      instructions: [transferInstruction],
      feePayer: signerAddress
    };

    try {
      const broadcastResult = await signer.signAndBroadcast(signArgs, {
        commitment: SolanaCommitment.PROCESSED
      });

      const { signature } = broadcastResult;
      expect(signature).toBeTruthy();
      expect(typeof signature).toBe('string');

      try {
        await broadcastResult.wait();
      } catch (awaitError) {
        console.warn('Wait for confirmation failed:', awaitError);
      }

      const finalRecipientBalance = await waitForBalanceAtLeast(
        client,
        recipient,
        initialRecipientBalance + transferLamports
      );

      expect(finalRecipientBalance).toBe(initialRecipientBalance + transferLamports);

      console.log(`Transfer successful! Signature: ${signature}`);
      console.log(`Recipient balance: ${lamportsToSol(finalRecipientBalance)} SOL`);
    } catch (error) {
      console.error('Transfer failed:', error);
      throw error;
    }
  });
});

jest.setTimeout(120000);
