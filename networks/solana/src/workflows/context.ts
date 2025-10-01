import { WorkflowBuilderContext, IWorkflowBuilderContext } from '@interchainjs/types';
import { ISolanaSigner } from '../signers/types';

/**
 * Workflow builder context interface for Solana
 */
export interface ISolanaWorkflowBuilderContext extends IWorkflowBuilderContext<ISolanaSigner> {
  getSigner(): ISolanaSigner;
}

/**
 * Solana-specific workflow builder context
 */
export class SolanaWorkflowBuilderContext
  extends WorkflowBuilderContext<ISolanaSigner>
  implements ISolanaWorkflowBuilderContext {

  constructor(signer: ISolanaSigner) {
    super(signer);
  }

  getSigner(): ISolanaSigner {
    if (!this.signer) {
      throw new Error('Solana signer not set in context');
    }
    return this.signer;
  }
}
