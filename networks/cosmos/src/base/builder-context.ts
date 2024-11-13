import { BaseTxBuilderContext, ITxBuilderContext } from '@interchainjs/types';

/**
 * Context for the transaction builder.
 */
export class BaseCosmosTxBuilderContext<Signer>
extends BaseTxBuilderContext<Signer>
implements ITxBuilderContext<Signer>
{
  constructor(public signer: Signer) {
    super(signer);
  }
}
