import { WorkflowBuilderContext, IWorkflowBuilderContext } from '@interchainjs/types';
import { ICosmosSigner } from '../signers/types';

/**
 * Workflow builder context interface for cosmos
 */
export interface ICosmosWorkflowBuilderContext extends IWorkflowBuilderContext<ICosmosSigner> {
  getSigner(): ICosmosSigner;
}

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