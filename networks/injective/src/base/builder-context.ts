import { ITxBuilderContext } from '@interchainjs/types';

export class BaseCosmosTxBuilderContext<Signer>
implements ITxBuilderContext<Signer>
{
  constructor(public signer: Signer) {}
}
