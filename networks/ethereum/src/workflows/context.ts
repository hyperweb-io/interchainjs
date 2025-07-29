import { WorkflowBuilderContext, IWorkflowBuilderContext } from '@interchainjs/types';
import { IEthereumSigner } from '../signers/types';

/**
 * Workflow builder context interface for Ethereum
 */
export interface IEthereumWorkflowBuilderContext extends IWorkflowBuilderContext<IEthereumSigner> {
  getSigner(): IEthereumSigner;
}

/**
 * Ethereum-specific workflow builder context
 */
export class EthereumWorkflowBuilderContext
  extends WorkflowBuilderContext<IEthereumSigner>
  implements IEthereumWorkflowBuilderContext {

  constructor(signer: IEthereumSigner) {
    super(signer);
  }

  getSigner(): IEthereumSigner {
    if (!this.signer) {
      throw new Error('Ethereum signer not set in context');
    }
    return this.signer;
  }
}
