# SimulateByTxBody Analysis & Redesign

## Current Implementation Analysis

### Current simulateByTxBody method (base-signer.ts)
```typescript
async simulateByTxBody(
  txBody: TxBody,
  signerInfos: SignerInfo[]
): Promise<SimulationResponse> {
  // TODO: Implement transaction simulation
  // This would typically involve creating a simulation transaction and querying the chain
  return {
    gasInfo: {
      gasUsed: BigInt(200000), // Default gas estimate
      gasWanted: BigInt(200000)
    }
  };
}
```

**Issues:**
- Hardcoded gas estimates (200000)
- No actual simulation against the chain
- Doesn't use getSimulate from cosmos-types

## getSimulate Analysis

### getSimulate function (service.rpc.func.ts)
```typescript
export const getSimulate = buildQuery<SimulateRequest, SimulateResponse>({
  encode: SimulateRequest.encode,
  decode: SimulateResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "Simulate"
});
```

### Required inputs/outputs:
- **SimulateRequest**: needs `txBytes` (Uint8Array)
- **SimulateResponse**: provides `gasInfo` and `result`

## Redesign Strategy

### New simulateByTxBody implementation:
1. **Build Tx**: Create a Tx object from TxBody + SignerInfos
2. **Serialize Tx**: Convert Tx to bytes for simulation
3. **Use getSimulate**: Call the actual simulation endpoint
4. **Return SimulationResponse**: Map response properly

### Required components:
- Need to create a Tx object from txBody and signerInfos
- Need to serialize the Tx to bytes
- Need access to CosmosQueryClient for getSimulate

### Updated signature consideration:
```typescript
async simulateByTxBody(
  txBody: TxBody,
  signerInfos: SignerInfo[],
  authInfo?: AuthInfo // Optional for building complete Tx
): Promise<SimulationResponse>
```

## Implementation approach:
1. Create Tx object from components
2. Encode Tx to bytes using Tx.encode
3. Use getSimulate with encoded bytes
4. Return standardized SimulationResponse