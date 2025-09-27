# Solana RPC Debug Tools

This directory contains debugging tools for testing and inspecting Solana RPC method implementations.

## Files

- **`rpc-debug.ts`** - Main debug script with functions to test all RPC methods
- **`run-debug.js`** - Simple runner script for executing debug functions
- **`README.md`** - This documentation file

## Usage

### Running All Debug Tests

```bash
# From the networks/solana directory
node debug/run-debug.js
```

### Running Specific Method Groups

```bash
# Test only network methods (getHealth, getVersion, getSupply, getLargestAccounts)
node debug/run-debug.js network

# Test only account methods (getAccountInfo, getBalance, getMultipleAccounts)
node debug/run-debug.js account

# Test only transaction methods (getTransactionCount, getSignatureStatuses, etc.)
node debug/run-debug.js transaction

# Test only token methods (getTokenSupply, getTokenLargestAccounts, etc.)
node debug/run-debug.js token

# Test only program methods (getProgramAccounts)
node debug/run-debug.js program

# Test only block methods (getLatestBlockhash)
node debug/run-debug.js block
```

### Manual Testing

You can also import and run individual debug functions:

```typescript
import { 
  debugNetworkMethods,
  debugAccountMethods,
  debugTransactionMethods,
  debugTokenMethods,
  debugProgramMethods,
  debugBlockMethods
} from './rpc-debug';

// Run specific debug function
await debugNetworkMethods();
```

## What the Debug Script Tests

### Network Methods
- **getHealth()** - Tests basic connectivity and health status
- **getVersion()** - Tests version information retrieval
- **getSupply()** - Tests supply information with bigint conversion
- **getLargestAccounts()** - Tests largest accounts retrieval and sorting

### Account Methods  
- **getAccountInfo()** - Tests account information retrieval
- **getBalance()** - Tests balance queries with bigint conversion
- **getMultipleAccounts()** - Tests batch account information retrieval

### Transaction Methods
- **getTransactionCount()** - Tests transaction count retrieval
- **getSignatureStatuses()** - Tests signature status queries
- **getTransaction()** - Tests transaction retrieval (with invalid signature)
- **requestAirdrop()** - Tests airdrop requests (may fail due to rate limits)

### Token Methods
- **getTokenSupply()** - Tests token supply information
- **getTokenLargestAccounts()** - Tests largest token holder queries
- **getTokenAccountsByOwner()** - Tests token account queries by owner
- **getTokenAccountBalance()** - Tests token account balance queries

### Program Methods
- **getProgramAccounts()** - Tests program account queries with filters

### Block Methods
- **getLatestBlockhash()** - Tests latest blockhash retrieval with different commitments

## Debug Output

The debug script provides detailed console output including:

- **Raw Response Data** - JSON-formatted responses from RPC calls
- **Type Information** - TypeScript type validation results
- **BigInt Conversion** - Verification of proper bigint handling for large numbers
- **Error Handling** - Expected errors and edge cases
- **Performance Info** - Response times and data sizes

## RPC Endpoints Used

The debug script uses Solana's official public RPC endpoints:

- **Devnet**: `https://api.devnet.solana.com` (primary for testing)
- **Testnet**: `https://api.testnet.solana.com` (backup)
- **Mainnet**: `https://api.mainnet-beta.solana.com` (for production testing)

## Well-Known Test Accounts

The script uses these well-known Solana accounts for testing:

- **System Program**: `11111111111111111111111111111112`
- **Token Program**: `TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`
- **Devnet USDC**: `4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU`
- **Test Pubkey**: `Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS`

## Expected Behaviors

### Successful Cases
- Network methods should return valid data with proper types
- Account methods should handle both existing and non-existent accounts
- Token methods should work with valid token mints
- All bigint conversions should work correctly

### Expected Errors
- **Invalid signatures** - Should return null or throw appropriate errors
- **Invalid pubkeys** - Should handle gracefully
- **Rate limits** - Airdrop requests may fail due to rate limiting
- **Network timeouts** - Should handle network issues gracefully

## Troubleshooting

### Common Issues

1. **Build Errors** - Make sure to run `npm run build` first
2. **Network Errors** - Check internet connection and RPC endpoint availability
3. **Rate Limiting** - Some methods (like requestAirdrop) may be rate limited
4. **Type Errors** - Ensure all codec implementations handle bigint conversion properly

### Debug Tips

1. **Check Console Output** - All responses are logged for inspection
2. **Test Individual Methods** - Use specific method group flags to isolate issues
3. **Compare with Official Docs** - Verify response formats match Solana RPC documentation
4. **Test Different Endpoints** - Try different RPC endpoints if one is having issues

## Integration with Tests

This debug script complements the integration tests in `../rpc/query-client.test.ts`:

- **Debug Script** - For manual testing and response inspection
- **Integration Tests** - For automated testing and CI/CD validation

Both use the same RPC endpoints and test patterns for consistency.
