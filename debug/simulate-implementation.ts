// Debug script to test new simulateByTxBody implementation

// Required imports for simulation
import { Tx, TxBody, SignerInfo, AuthInfo } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { getSimulate } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/service.rpc.func';
import { SimulateRequest, SimulateResponse } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/service';
import { SimulationResponse } from '@interchainjs/cosmos-types';
import { Tx as TxProto } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';

/**
 * New simulateByTxBody implementation using getSimulate
 */
async function simulateByTxBody(
  txBody: TxBody,
  signerInfos: SignerInfo[],
  queryClient: any // This would be the CosmosQueryClient from config
): Promise<SimulationResponse> {
  try {
    // Step 1: Create AuthInfo from signerInfos
    const authInfo = AuthInfo.fromPartial({
      signerInfos: signerInfos,
      fee: {
        amount: [], // Empty for simulation
        gasLimit: BigInt(0), // Will be determined by simulation
      },
    });

    // Step 2: Build the complete Tx
    const tx = Tx.fromPartial({
      body: txBody,
      authInfo: authInfo,
      signatures: [], // Empty signatures for simulation
    });

    // Step 3: Encode Tx to bytes
    const txBytes = Tx.encode(tx).finish();

    // Step 4: Create SimulateRequest
    const simulateRequest: SimulateRequest = {
      txBytes: txBytes,
    };

    // Step 5: Call getSimulate via queryClient
    const response: SimulateResponse = await queryClient.getSimulate(simulateRequest);

    // Step 6: Map response to SimulationResponse
    if (response.gasInfo) {
      return {
        gasInfo: {
          gasUsed: response.gasInfo.gasUsed || BigInt(0),
          gasWanted: response.gasInfo.gasWanted || BigInt(0),
        },
        result: response.result,
      };
    }

    // Fallback if no gas info
    return {
      gasInfo: {
        gasUsed: BigInt(200000),
        gasWanted: BigInt(200000),
      },
    };
  } catch (error) {
    console.error('Simulation failed:', error);
    
    // Return fallback with potentially higher gas for safety
    return {
      gasInfo: {
        gasUsed: BigInt(300000),
        gasWanted: BigInt(300000),
      },
    };
  }
}

// Usage example
export const simulationExamples = {
  usage: `
  // In BaseCosmosSigner class:
  async simulateByTxBody(
    txBody: TxBody,
    signerInfos: SignerInfo[]
  ): Promise<SimulationResponse> {
    return simulateByTxBody(txBody, signerInfos, this.config.queryClient);
  }
  `,
  
  test: `
  // Test the implementation
  const txBody = TxBody.fromPartial({
    messages: [/* your messages */],
    memo: "test transaction",
  });
  
  const signerInfos = [/* your signer info */];
  
  const simulation = await simulateByTxBody(txBody, signerInfos, queryClient);
  console.log('Gas used:', simulation.gasInfo.gasUsed.toString());
  `
};

// Export for testing
export { simulateByTxBody };