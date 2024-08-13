import {
  Auth,
  BaseSigner,
  HttpEndpoint,
  SignDocResponse,
  SignerConfig,
  SignResponse,
} from '@interchainjs/types';

import { defaultSignerConfig } from './defaults';
import {
  Eip712Doc,
  Eip712SignArgs,
  Eip712Tx,
  UniEip712Signer,
} from './types';

export class Eip712Signer<BroadcastResponse extends { hash: string }>
  extends BaseSigner
  implements UniEip712Signer<BroadcastResponse>
{
  constructor(
    auth: Auth,
    endpoint?: string | HttpEndpoint,
    config?: SignerConfig
  ) {
    super(auth, config ?? defaultSignerConfig);
  }

  static async fromWallet(
    _wallet: any,
    endpoint?: string | HttpEndpoint,
    config?: SignerConfig
  ) {
    throw new Error('Not implemented yet');
  }

  static async fromWalletToSigners(
    _wallet: any,
    endpoint?: string | HttpEndpoint,
    config?: SignerConfig
  ) {
    throw new Error('Not implemented yet');
  }

  async getAddress(): Promise<string> {
    throw new Error('Not implemented yet');
  }

  async signDoc(doc: Eip712Doc): Promise<SignDocResponse<Eip712Doc>> {
    throw new Error('Not implemented yet');
  }

  async sign(
    _: Eip712SignArgs
  ): Promise<SignResponse<Eip712Tx, Eip712Doc, BroadcastResponse>> {
    throw new Error('Not implemented yet');
  }

  async signAndBroadcast(_: Eip712SignArgs): Promise<BroadcastResponse> {
    throw new Error('Not implemented yet');
  }

  async broadcast(_: Eip712Tx): Promise<BroadcastResponse> {
    throw new Error('Not implemented yet');
  }

  async broadcastArbitrary(_: Uint8Array): Promise<BroadcastResponse> {
    throw new Error('Not implemented yet');
  }
}
