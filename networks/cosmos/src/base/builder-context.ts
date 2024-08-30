import { AuthInfo } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { ITxBuilderContext } from '@interchainjs/types';

/**
 * Context for the transaction builder.
 */
export class BaseCosmosTxBuilderContext<Signer>
implements ITxBuilderContext<Signer>
{
  constructor(public signer: Signer, public authInfo?: AuthInfo) {}
}
