import { WorkflowBuilderContext } from '@interchainjs/types';
import { ICosmosSigner, ICosmosWorkflowBuilderContext } from './types';

/**
 * Cosmos-specific workflow builder context
 */
export class CosmosWorkflowBuilderContext 
  extends WorkflowBuilderContext<ICosmosSigner> 
  implements ICosmosWorkflowBuilderContext {
  
  constructor(signer: ICosmosSigner) {
    super(signer);
  }

  getSigner(): ICosmosSigner {
    if (!this.signer) {
      throw new Error('Cosmos signer not set in context');
    }
    return this.signer;
  }
}