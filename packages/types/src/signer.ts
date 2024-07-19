import Decimal from 'decimal.js';

import { Auth, IKey, isByteAuth } from './auth';
import { SignDocResponse } from './wallet';

export interface HttpEndpoint {
  url: string;
  headers: Record<string, string>;
}

export interface Price {
  amount: Decimal;
  denom: string;
}

export interface SignerConfig {
  publicKey: {
    isCompressed: boolean;
    hash(publicKey: IKey): IKey;
  };
  message: {
    /**
     * method to hash arbitrary message in methods with `Arbitrary` in name. i.e.
     * - signArbitrary
     * - verifyArbitrary
     * - broadcastArbitrary
     */
    hash(data: Uint8Array): Uint8Array;
  };
}

export interface BroadcastOptions {
  checkTx?: boolean;
  deliverTx?: boolean;
  timeoutMs?: number;
  pollIntervalMs?: number;
}

export interface CreateDocResponse<Tx, Doc> {
  tx: Tx;
  doc: Doc;
}

export interface SignResponse<Tx, Doc, BroadcastResponse = { hash: string }>
  extends CreateDocResponse<Tx, Doc> {
  broadcast: (options?: BroadcastOptions) => Promise<BroadcastResponse>;
}

export interface ISigBuilder<Doc = unknown, Sig = unknown> {
  buildSignature(doc: Doc): Sig | Promise<Sig>;
}

export interface ITxBuilder<SignArgs = unknown, SignResp = unknown> {
  buildSignedTxDoc(args: SignArgs): Promise<SignResp>;
}

export interface ITxBuilderContext<Signer = unknown> {
  signer?: Signer;
}

/**
 * UniSigner is a generic interface for signing and broadcasting transactions.
 * It is used to abstract the signing and broadcasting process for different chains.
 * @template SignArgs - arguments for sign method
 * @template Tx - transaction type
 * @template Doc - sign doc type
 * @template AddressResponse - address type
 * @template BroadcastResponse - response type after broadcasting a transaction
 */
export interface UniSigner<
  SignArgs,
  Tx,
  Doc,
  AddressResponse = string,
  BroadcastResponse = { hash: string },
> {
  publicKey: IKey;
  /**
   * publicKeyHash is usually used to get address.
   * - for cosmos chains: publicKeyHash.toBech32(prefix)
   * - for ethereum chains: publicKeyHash.toPrefixedHex()
   */
  publicKeyHash: IKey;
  /**
   * to get printable address(es)
   */
  getAddress(): AddressResponse;
  signArbitrary(data: Uint8Array): IKey | Promise<IKey>;
  signDoc(doc: Doc): SignDocResponse<Doc> | Promise<SignDocResponse<Doc>>;
  broadcastArbitrary(
    data: Uint8Array,
    options?: BroadcastOptions
  ): Promise<BroadcastResponse>;
  sign(args: SignArgs): Promise<SignResponse<Tx, Doc, BroadcastResponse>>;
  signAndBroadcast(
    args: SignArgs,
    options?: BroadcastOptions
  ): Promise<BroadcastResponse>;
  broadcast: (tx: Tx, options?: BroadcastOptions) => Promise<BroadcastResponse>;
}

export class BaseSigner {
  protected _auth: Auth;
  protected _config: SignerConfig;

  constructor(auth: Auth, config: SignerConfig) {
    this._auth = auth;
    this._config = config;
  }

  get auth() {
    return this._auth;
  }

  get config() {
    return this._config;
  }

  get publicKey() {
    return this.auth.getPublicKey(this.config.publicKey.isCompressed);
  }

  get publicKeyHash() {
    return this.config.publicKey.hash(this.publicKey);
  }

  setAuth(auth: Auth) {
    this._auth = auth;
  }

  signArbitrary(data: Uint8Array): IKey {
    if (!isByteAuth(this.auth)) {
      throw new Error('signArbitrary needs ByteAuth implementation');
    }

    const signature = this.auth.sign(this.config.message.hash(data));
    return signature.toCompact();
  }
}
