/**
 * Debug script for testing Solana RPC methods and inspecting responses
 */

import { createSolanaQueryClient } from '../dist/index';

// Configuration
const RPC_ENDPOINTS = {
  devnet: 'https://api.devnet.solana.com',
  testnet: 'https://api.testnet.solana.com',
  mainnet: 'https://api.mainnet-beta.solana.com'
};

const WELL_KNOWN_ACCOUNTS = {
  systemProgram: '11111111111111111111111111111112',
  tokenProgram: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  devnetUSDC: '4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU',
  testPubkey: 'Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS'
};

async function debugNetworkMethods() {
  console.log('\n=== DEBUGGING NETWORK METHODS ===');

  const client = await createSolanaQueryClient(RPC_ENDPOINTS.devnet, {
    timeout: 30000
  });

  try {
    // Test getHealth
    console.log('\n--- getHealth() ---');
    const health = await client.getHealth();
    console.log('Response:', health);
    console.log('Type:', typeof health);

    // Test getVersion
    console.log('\n--- getVersion() ---');
    const version = await client.getVersion();
    console.log('Response:', JSON.stringify(version, null, 2));
    console.log('Solana core version:', version['solana-core']);
    console.log('Feature set:', version['feature-set']);

    // Test getSupply
    console.log('\n--- getSupply() ---');
    const supply = await client.getSupply();
    console.log('Response:', JSON.stringify(supply, (key, value) =>
      typeof value === 'bigint' ? value.toString() + 'n' : value, 2));
    console.log('Total supply (bigint):', supply.value.total);
    console.log('Circulating supply (bigint):', supply.value.circulating);
    console.log('Non-circulating accounts count:', supply.value.nonCirculatingAccounts.length);

    // Test getLargestAccounts
    console.log('\n--- getLargestAccounts() ---');
    const largestAccounts = await client.getLargestAccounts();
    console.log('Response context:', largestAccounts.context);
    console.log('Number of accounts returned:', largestAccounts.value.length);
    console.log('Top 3 accounts:');
    largestAccounts.value.slice(0, 3).forEach((account: any, index: number) => {
      console.log(`  ${index + 1}. ${account.address}: ${account.lamports.toString()} lamports`);
    });

  } catch (error) {
    console.error('Error in network methods:', error);
  }
}

async function debugAccountMethods() {
  console.log('\n=== DEBUGGING ACCOUNT METHODS ===');

  const client = await createSolanaQueryClient(RPC_ENDPOINTS.devnet, {
    timeout: 30000
  });

  try {
    // Test getAccountInfo
    console.log('\n--- getAccountInfo() ---');
    const accountInfo = await client.getAccountInfo({
      pubkey: WELL_KNOWN_ACCOUNTS.systemProgram
    });
    console.log('Response context:', accountInfo.context);
    if (accountInfo.value) {
      console.log('Account lamports (bigint):', accountInfo.value.lamports);
      console.log('Account owner:', accountInfo.value.owner);
      console.log('Account executable:', accountInfo.value.executable);
      console.log('Account rent epoch (bigint):', accountInfo.value.rentEpoch);
      console.log('Account data length:', (accountInfo.value as any).data?.length ?? 0);
    } else {
      console.log('Account value: null');
    }

    // Test getBalance
    console.log('\n--- getBalance() ---');
    const balance = await client.getBalance({
      pubkey: WELL_KNOWN_ACCOUNTS.systemProgram
    });
    console.log('Response context:', balance.context);
    console.log('Balance (bigint):', balance.value);

    // Test getMultipleAccounts
    console.log('\n--- getMultipleAccounts() ---');
    const multipleAccounts = await client.getMultipleAccounts({
      pubkeys: [WELL_KNOWN_ACCOUNTS.systemProgram, WELL_KNOWN_ACCOUNTS.tokenProgram]
    });
    console.log('Response context:', multipleAccounts.context);
    console.log('Number of accounts:', multipleAccounts.value.length);
    multipleAccounts.value.forEach((account, index) => {
      if (account) {
        console.log(`Account ${index}: ${account.lamports.toString()} lamports, owner: ${account.owner}`);
      } else {
        console.log(`Account ${index}: null`);
      }
    });

  } catch (error) {
    console.error('Error in account methods:', error);
  }
}

async function debugTransactionMethods() {
  console.log('\n=== DEBUGGING TRANSACTION METHODS ===');

  const client = await createSolanaQueryClient(RPC_ENDPOINTS.devnet, {
    timeout: 30000
  });

  try {
    // Test getTransactionCount
    console.log('\n--- getTransactionCount() ---');
    const txCount = await client.getTransactionCount();
    console.log('Transaction count:', txCount);
    console.log('Type:', typeof txCount);

    // Test getSignatureStatuses with empty array
    console.log('\n--- getSignatureStatuses() (empty) ---');
    const sigStatuses = await client.getSignatureStatuses({
      signatures: []
    });
    console.log('Response context:', sigStatuses.context);
    console.log('Value length:', sigStatuses.value.length);

    // Test getTransaction with invalid signature
    console.log('\n--- getTransaction() (invalid signature) ---');
    try {
      const transaction = await client.getTransaction({
        signature: '1'.repeat(88)
      });
      console.log('Response context:', transaction.context);
      console.log('Value:', transaction.value);
    } catch (error: any) {
      console.log('Expected error:', error.message);
    }

    // Test requestAirdrop (may fail due to rate limits)
    console.log('\n--- requestAirdrop() ---');
    try {
      const airdrop = await client.requestAirdrop({
        pubkey: WELL_KNOWN_ACCOUNTS.testPubkey,
        lamports: 1000000000n // 1 SOL
      });
      console.log('Airdrop signature:', airdrop);
      console.log('Type:', typeof airdrop);
    } catch (error: any) {
      console.log('Airdrop error (expected):', error.message);
    }

  } catch (error) {
    console.error('Error in transaction methods:', error);
  }
}

async function debugTokenMethods() {
  console.log('\n=== DEBUGGING TOKEN METHODS ===');

  const client = await createSolanaQueryClient(RPC_ENDPOINTS.devnet, {
    timeout: 30000
  });

  try {
    // Test getTokenSupply
    console.log('\n--- getTokenSupply() ---');
    const tokenSupply = await client.getTokenSupply({
      mint: WELL_KNOWN_ACCOUNTS.devnetUSDC
    });
    console.log('Response context:', tokenSupply.context);
    console.log('Token supply value:', JSON.stringify(tokenSupply.value, null, 2));

    // Test getTokenLargestAccounts
    console.log('\n--- getTokenLargestAccounts() ---');
    const tokenLargest = await client.getTokenLargestAccounts({
      mint: WELL_KNOWN_ACCOUNTS.devnetUSDC
    });
    console.log('Response context:', tokenLargest.context);
    console.log('Number of largest accounts:', tokenLargest.value.length);
    tokenLargest.value.slice(0, 3).forEach((account: any, index: number) => {
      console.log(`  ${index + 1}. ${account.address}: ${account.uiAmountString} USDC`);
    });

    // Test getTokenAccountsByOwner
    console.log('\n--- getTokenAccountsByOwner() ---');
    const tokenAccounts = await client.getTokenAccountsByOwner({
      owner: WELL_KNOWN_ACCOUNTS.testPubkey,
      filter: { mint: WELL_KNOWN_ACCOUNTS.devnetUSDC }
    });
    console.log('Response context:', tokenAccounts.context);
    console.log('Number of token accounts:', tokenAccounts.value.length);

    // Test getTokenAccountBalance (may fail for invalid account)
    console.log('\n--- getTokenAccountBalance() ---');
    try {
      const tokenBalance = await client.getTokenAccountBalance({
        account: WELL_KNOWN_ACCOUNTS.testPubkey
      });
      console.log('Token balance response:', JSON.stringify(tokenBalance, null, 2));
    } catch (error: any) {
      console.log('Expected error for invalid token account:', error.message);
    }

  } catch (error) {
    console.error('Error in token methods:', error);
  }
}

async function debugProgramMethods() {
  console.log('\n=== DEBUGGING PROGRAM METHODS ===');

  const client = await createSolanaQueryClient(RPC_ENDPOINTS.devnet, {
    timeout: 30000
  });

  try {
    // Test getProgramAccounts with limited results
    console.log('\n--- getProgramAccounts() ---');
    const programAccounts = await client.getProgramAccounts({
      programId: WELL_KNOWN_ACCOUNTS.tokenProgram,
      options: {
        commitment: 'finalized',
        dataSlice: { offset: 0, length: 32 },
        filters: [
          { dataSize: 165 } // Standard token account size
        ]
      }
    });
    console.log('Number of program accounts:', programAccounts.length);
    console.log('First 3 accounts:');
    programAccounts.slice(0, 3).forEach((account, index) => {
      console.log(`  ${index + 1}. ${account.pubkey}: ${account.account.lamports.toString()} lamports`);
      console.log(`     Owner: ${account.account.owner}`);
      console.log(`     Executable: ${account.account.executable}`);
      console.log(`     Data length: ${account.account.data.length}`);
    });

  } catch (error) {
    console.error('Error in program methods:', error);
  }
}

async function debugBlockMethods() {
  console.log('\n=== DEBUGGING BLOCK METHODS ===');

  const client = await createSolanaQueryClient(RPC_ENDPOINTS.devnet, {
    timeout: 30000
  });

  try {
    // Test getLatestBlockhash
    console.log('\n--- getLatestBlockhash() ---');
    const latestBlockhash = await client.getLatestBlockhash();
    console.log('Response context:', latestBlockhash.context);
    console.log('Blockhash:', latestBlockhash.value.blockhash);
    console.log('Last valid block height (bigint):', latestBlockhash.value.lastValidBlockHeight);

    // Skipping commitment variants in debug to avoid TS literal type issues

  } catch (error) {
    console.error('Error in block methods:', error);
  }
}

async function main() {
  console.log('🔍 Solana RPC Debug Script');
  console.log('==========================');

  const methodGroup = process.env.DEBUG_METHOD_GROUP || 'all';
  console.log(`Running method group: ${methodGroup}\n`);

  try {
    switch (methodGroup) {
      case 'network':
        await debugNetworkMethods();
        break;
      case 'account':
        await debugAccountMethods();
        break;
      case 'transaction':
        await debugTransactionMethods();
        break;
      case 'token':
        await debugTokenMethods();
        break;
      case 'program':
        await debugProgramMethods();
        break;
      case 'block':
        await debugBlockMethods();
        break;
      case 'all':
      default:
        await debugNetworkMethods();
        await debugAccountMethods();
        await debugTransactionMethods();
        await debugTokenMethods();
        await debugProgramMethods();
        await debugBlockMethods();
        break;
    }

    console.log('\n✅ Debug script completed successfully!');
  } catch (error) {
    console.error('\n❌ Debug script failed:', error);
    process.exit(1);
  }
}

// Run the debug script
if (require.main === module) {
  main().catch(console.error);
}

export {
  debugNetworkMethods,
  debugAccountMethods,
  debugTransactionMethods,
  debugTokenMethods,
  debugProgramMethods,
  debugBlockMethods
};
