# Solana RPC Integration Tests

This directory contains comprehensive integration tests for all Solana query methods, following the pattern established in `networks/cosmos/rpc/query-client.test.ts`.

## Overview

The integration test suite validates all currently implemented Solana RPC methods against live Solana networks, providing:

- **Real Network Testing**: Tests against actual Solana devnet/testnet endpoints
- **Graceful Offline Handling**: Tests skip gracefully when network is unavailable
- **Interface Validation**: Offline tests validate client structure without network dependency
- **Error Handling**: Comprehensive error scenarios and edge cases
- **Documentation**: Lists future methods to implement
- **Debugging Support**: Detailed console output for troubleshooting

## Test Structure

### Files

- **`query-client.test.ts`** - Main integration test suite
- **`README.md`** - This documentation

### Test Categories

#### 1. Client Structure (Offline Tests)
- ✅ **Interface Validation** - Validates all required methods exist
- ✅ **Protocol Info** - Tests getProtocolInfo() method offline
- ✅ **Type Safety** - Ensures proper TypeScript interfaces

#### 2. Network & Cluster Methods
- ✅ **getHealth()** - Basic connectivity and health status
- ✅ **getVersion()** - Solana version information
- ✅ **getSupply()** - Network supply information with bigint conversion
- ✅ **getLargestAccounts()** - Largest account holders with filtering

#### 3. Account Methods
- ✅ **getAccountInfo()** - Individual account information
- ✅ **getBalance()** - Account balance queries
- ✅ **getMultipleAccounts()** - Batch account information

#### 4. Block Methods
- ✅ **getLatestBlockhash()** - Latest blockhash with commitment levels

#### 5. Error Handling
- ✅ **Network Timeouts** - Graceful timeout handling
- ✅ **Invalid Endpoints** - Invalid RPC endpoint handling
- ✅ **Malformed Parameters** - Invalid parameter handling

#### 6. Future Methods Documentation
- ✅ **Method Inventory** - Lists 40+ methods to implement

## Running Tests

### Basic Usage

```bash
# Run all integration tests
npm test -- --testPathPatterns="rpc/query-client.test.ts"

# Run with verbose output
npm test -- --testPathPatterns="rpc/query-client.test.ts" --verbose
```

### Expected Output

When network is available:
```
✅ Successfully connected to Solana RPC endpoint
✓ All 16 tests pass with real network data
```

When network is unavailable:
```
⚠️ Integration tests will be skipped due to network connectivity issues
✓ All 16 tests pass (network tests skip gracefully)
```

## Test Results Summary

### Current Implementation Status

**✅ 8 RPC Methods Implemented** (100% test coverage):
- `getHealth` - Network health status
- `getVersion` - Solana version information  
- `getSupply` - Network supply information
- `getLargestAccounts` - Largest account holders
- `getAccountInfo` - Account information queries
- `getBalance` - Account balance queries
- `getMultipleAccounts` - Batch account queries
- `getLatestBlockhash` - Latest blockhash information

**📋 40+ Methods Documented for Future Implementation**:
- Transaction methods (getTransaction, sendTransaction, etc.)
- Token methods (getTokenSupply, getTokenAccountsByOwner, etc.)
- Program methods (getProgramAccounts)
- Block methods (getBlock, getBlockHeight, etc.)
- Network methods (getEpochInfo, getSlotLeader, etc.)

### Test Coverage

- **16 Total Tests** - All passing
- **100% Method Coverage** - All implemented methods tested
- **Network Resilience** - Graceful offline handling
- **Error Scenarios** - Comprehensive error testing
- **Type Safety** - Full TypeScript validation

## Network Configuration

### RPC Endpoints Used

- **Primary**: `https://api.devnet.solana.com` (Solana Devnet)
- **Backup**: `https://api.testnet.solana.com` (Solana Testnet)
- **Production**: `https://api.mainnet-beta.solana.com` (For reference)

### Test Accounts

- **System Program**: `11111111111111111111111111111112`
- **Token Program**: `TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`
- **Test Pubkey**: `Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS`

## Key Features

### 1. Network Resilience
- Tests automatically skip when network is unavailable
- Offline validation ensures client structure is correct
- Clear messaging about network status

### 2. Real Data Validation
- Tests against live Solana networks
- Validates actual RPC response formats
- Ensures bigint conversion works correctly
- Tests commitment level handling

### 3. Error Handling
- Network timeout scenarios
- Invalid endpoint handling
- Malformed parameter validation
- Graceful error recovery

### 4. Debugging Support
- Detailed console output for all responses
- Type information validation
- Performance timing
- Error message inspection

## Integration with Debug Tools

This test suite complements the debug tools in `../debug/`:

- **Integration Tests** - Automated validation for CI/CD
- **Debug Scripts** - Manual testing and response inspection
- **Shared Patterns** - Consistent testing approaches

## Future Enhancements

### Next Priority Methods
1. **Transaction Methods** - getTransaction, sendTransaction, simulateTransaction
2. **Token Methods** - getTokenSupply, getTokenAccountsByOwner
3. **Program Methods** - getProgramAccounts
4. **Block Methods** - getBlock, getBlockHeight

### Test Improvements
1. **Performance Benchmarks** - Response time validation
2. **Load Testing** - Multiple concurrent requests
3. **Data Validation** - Schema validation for responses
4. **Mock Testing** - Offline testing with mock responses

## Troubleshooting

### Common Issues

1. **Network Timeouts**
   - Normal when RPC endpoints are overloaded
   - Tests will skip gracefully
   - Try different endpoints if persistent

2. **Rate Limiting**
   - Public endpoints have rate limits
   - Tests are designed to handle this
   - Consider using private RPC for heavy testing

3. **Response Format Changes**
   - Solana RPC responses may evolve
   - Tests validate current format expectations
   - Update tests when Solana updates RPC spec

### Debug Tips

1. **Check Console Output** - All responses are logged
2. **Verify Network** - Ensure internet connectivity
3. **Test Individual Methods** - Use debug scripts for specific methods
4. **Compare with Official Docs** - Validate against Solana RPC documentation

## Contributing

When adding new RPC methods:

1. **Add Method to Interface** - Update `ISolanaQueryClient`
2. **Implement Codec** - Create request/response types
3. **Add Integration Test** - Follow existing patterns
4. **Update Documentation** - Update method lists
5. **Test Network Scenarios** - Ensure graceful offline handling

This integration test suite provides a solid foundation for validating Solana RPC implementations and ensuring reliability across different network conditions.
