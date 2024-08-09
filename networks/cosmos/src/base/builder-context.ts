import { ITxBuilderContext } from '@interchainjs/types';

/**
 * Context for the transaction builder.
 */
export class BaseCosmosTxBuilderContext<Signer>
implements ITxBuilderContext<Signer>
{
  constructor(public signer: Signer) {}
}
