// TODO: Replace with proper imports when dependencies are available
class WorkflowBuilderContext<TSigner> {
  signer: TSigner | undefined;
  private stagingData: Map<string, any> = new Map();

  constructor(signer: TSigner) {
    this.signer = signer;
  }

  getStagingData(key: string): any {
    return this.stagingData.get(key);
  }

  setStagingData(key: string, value: any): void {
    this.stagingData.set(key, value);
  }

  setFinalResult(result: any): void {
    this.setStagingData('__final_result__', result);
  }

  getFinalResult(): any {
    return this.getStagingData('__final_result__');
  }
}

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