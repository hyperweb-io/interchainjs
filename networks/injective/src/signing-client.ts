import { isOfflineAminoSigner, isOfflineDirectSigner, OfflineSigner } from "@interchainjs/cosmos/types/wallet";
import { HttpEndpoint } from "@interchainjs/types";
import { SigningClient } from "interchainjs/signing-client"
import { SignerOptions } from "interchainjs/types/signing-client";
import { RpcClient } from '@interchainjs/cosmos/query/rpc';
import { AminoSigner } from "./signers/amino";
import { DirectSigner } from "./signers/direct";

/**
 * signingClient for inj
 */
export class InjSigningClient extends SigningClient {
  static async connectWithSigner(
    endpoint: string | HttpEndpoint,
    signer: OfflineSigner,
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
    if (isOfflineAminoSigner(this.offlineSigner)) {
      const aminoSigners = await AminoSigner.fromWalletToSigners(
        this.offlineSigner,
        this.encoders,
        this.converters,
        this.endpoint,
        {
          prefix: this.options.prefix,
        }
      );

      for (const signer of aminoSigners) {
        this.aminoSigners[await signer.getAddress()] = signer;
      }
    }

    if (isOfflineDirectSigner(this.offlineSigner)) {
      const directSigners = await DirectSigner.fromWalletToSigners(
        this.offlineSigner,
        this.encoders,
        this.endpoint,
        {
          prefix: this.options.prefix,
        }
      );

      for (const signer of directSigners) {
        this.directSigners[await signer.getAddress()] = signer;
      }
    }
  }
}
