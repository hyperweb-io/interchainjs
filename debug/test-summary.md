# ✅ simulateByTxBody Implementation Complete

## Summary

The `simulateByTxBody` method has been successfully redesigned and implemented using the `getSimulate` function from cosmos-types.

## Changes Made

### 1. Updated simulateByTxBody in base-signer.ts
- **File**: `networks/cosmos/src/signers/base-signer.ts`
- **Lines**: 324-388
- **Status**: ✅ Complete

### 2. Key Improvements
- **Real Simulation**: Uses actual gRPC simulation instead of hardcoded gas estimates
- **Proper Tx Building**: Creates complete Tx from TxBody + SignerInfos
- **Error Handling**: Graceful fallback with 300k gas on simulation failure
- **Type Safety**: Uses proper cosmos-types imports

### 3. Implementation Details

#### Before (Hardcoded):
```typescript
return {
  gasInfo: {
    gasUsed: BigInt(200000),
    gasWanted: BigInt(200000)
  }
};
```

#### After (Real Simulation):
```typescript
// Build complete transaction
const tx = Tx.fromPartial({
  body: txBody,
  authInfo: authInfo,
  signatures: [], // Empty for simulation
});

// Encode and simulate
const txBytes = Tx.encode(tx).finish();
const { getSimulate } = require('@interchainjs/cosmos-types/cosmos/tx/v1beta1/service.rpc.func');
const response = await getSimulate(this.config.queryClient, { txBytes });

// Return real gas estimate
return {
  gasInfo: {
    gasUsed: response.gasInfo.gasUsed,
    gasWanted: response.gasInfo.gasWanted
  }
};
```

### 4. Required Imports
Added to base-signer.ts:
- `Tx` from cosmos-types/cosmos/tx/v1beta1/tx
- `AuthInfo` from cosmos-types/cosmos/tx/v1beta1/tx

### 5. Build Status
- ✅ All 18 packages build successfully
- ✅ No TypeScript errors
- ✅ Ready for testing with Starship

### 6. Next Steps
The implementation is ready for:
- Integration testing with Starship environment
- Fee estimation in workflows
- Gas optimization for transactions

## Usage Example

```typescript
// In any Cosmos signer
const txBody = TxBody.fromPartial({
  messages: [/* your messages */],
  memo: 'test memo',
});

const signerInfos = [/* signer configuration */];

const simulation = await signer.simulateByTxBody(txBody, signerInfos);
console.log('Gas estimate:', simulation.gasInfo.gasUsed.toString());
```