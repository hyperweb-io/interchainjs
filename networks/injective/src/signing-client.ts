import { IAminoGeneralOfflineSigner, IDirectGeneralOfflineSigner, isOfflineAminoSigner, isOfflineDirectSigner, OfflineSigner } from "@interchainjs/cosmos/types/wallet";
import { HttpEndpoint, IGeneralOfflineSigner, SIGN_MODE } from "@interchainjs/types";
import { SigningClient } from "@interchainjs/cosmos/signing-client"
import { SignerOptions } from "@interchainjs/cosmos/types/signing-client";
import { RpcClient } from '@interchainjs/cosmos/query/rpc';
import { AminoSigner } from "./signers/amino";
import { DirectSigner } from "./signers/direct";
import { ICosmosGeneralOfflineSigner } from "@interchainjs/cosmos/types/wallet";

/**
 * signingClient for inj
 */
export class InjSigningClient extends SigningClient {
  static async connectWithSigner(
    endpoint: string | HttpEndpoint,
    signer: ICosmosGeneralOfflineSigner,
    options: SignerOptions = {}
  ): Promise<InjSigningClient> {
    const signingClient = new InjSigningClient(
      new RpcClient(endpoint, options.prefix),
      signer,
      options
    );

    await signingClient.connect();

    return signingClient;
  }

  override async connect() {
    let signers;

    switch (this.offlineSigner.signMode) {
      case SIGN_MODE.DIRECT:
        signers = await DirectSigner.fromWalletToSigners(
          this.offlineSigner as IDirectGeneralOfflineSigner,
          this.encoders,
          this.endpoint,
          {
            prefix: this.options.prefix,
          }
        )
        break;

      case SIGN_MODE.AMINO:
        signers = await AminoSigner.fromWalletToSigners(
          this.offlineSigner as IAminoGeneralOfflineSigner,
          this.encoders,
          this.converters,
          this.endpoint,
          {
            prefix: this.options.prefix,
          }
        );
        break;

      default:
        break;
    }

    for (const signer of signers) {
      this.signers[await signer.getAddress()] = signer;
    }
  }
}
