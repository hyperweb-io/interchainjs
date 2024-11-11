import Decimal from 'decimal.js';

import { AccountData, Auth, IKey, isByteAuth } from './auth';
import { SignDocResponse } from './wallet';

/**
 * HttpEndpoint is a type that represents an HTTP endpoint.
 */
export interface HttpEndpoint {
  url: string;
  headers: Record<string, string>;
}

export function isHttpEndpoint(endpoint: unknown): endpoint is HttpEndpoint {

  return (
    typeof (endpoint as HttpEndpoint).url === 'string' &&
    typeof (endpoint as HttpEndpoint).headers === 'object'
  );
}

export interface Price {
  amount: Decimal;
  denom: string;
}

/**
 * SignerConfig is a configuration object for a signer.
 */
export interface SignerConfig {
  /**
   * possible changes for publicKey generation
   */
  publicKey: {
    /**
     * compressed or uncompressed
     */
    isCompressed: boolean;
    /**
     * method to hash public key
     */
    hash(publicKey: IKey): IKey;
  };
  message: {
    /**
     * method to hash arbitrary message in methods with `Arbitrary` in name. i.e.
     * - signArbitrary
     * - broadcastArbitrary
     */
    hash(data: Uint8Array): Uint8Array;
  };
}

/**
 * BroadcastOptions is an object that contains options for broadcasting a transaction.
 */
export interface BroadcastOptions {
  /**
   * whether to check the tx result after broadcasting.
   * if checkTx && deliverTx are true, it's equivalent to broadcast_tx_commit.
   * else if checkTx is true, it's equivalent to broadcast_tx_sync.
   * else if checkTx is false, it's equivalent to broadcast_tx_async.
   */
  checkTx?: boolean;
  /**
   * whether to check the tx is delivered after broadcasting.
   * if checkTx && deliverTx are true, it's equivalent to broadcast_tx_commit.
   */
  deliverTx?: boolean;
  /**
   * timeout in milliseconds for checking broadcast_tx_commit result.
   */
  timeoutMs?: number;
  /**
   * polling interval in milliseconds for checking broadcast_tx_commit result.
   */
  pollIntervalMs?: number;

  /**
   * whether to use legacy broadcast_tx_commit result.
   */
  useLegacyBroadcastTxCommit?: boolean;
}

/**
 * the response after creating sign doc.
 */
export interface CreateDocResponse<Tx, Doc> {
  /**
   * transaction object with or without signature.
   */
  tx: Tx;
  /**
   * document to be signed.
   */
  doc: Doc;
}

/**
 * the response after signing a document.
 */
export interface SignResponse<Tx, Doc, BroadcastResponse = { hash: string }>
  extends CreateDocResponse<Tx, Doc> {
  /**
   * broadcast the transaction.
   */
  broadcast: (options?: BroadcastOptions) => Promise<BroadcastResponse>;
}

/**
 * IDocSigner is an interface for signing document.
 * @template TDoc - document type
 * @template TArgs - arguments type
 */
export interface IDocSigner<TDoc, TArgs = unknown, TResp = SignDocResponse<TDoc>> {
  /**
   * sign document.
   * @param doc - document to be signed
   * @param args - arguments for signing
   */
  signDoc(doc: TDoc, args?: TArgs): Promise<TResp>;
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
   * to get printable address(es)
   */
  getAddress(): AddressResponse;

  /**
   * sign arbitrary data in bytes
   */
  signArbitrary(data: Uint8Array): IKey | Promise<IKey>;
  /**
   * sign document
   */
  signDoc(doc: Doc): SignDocResponse<Doc> | Promise<SignDocResponse<Doc>>;

  /**
   * broadcast arbitrary data in bytes
   */
  broadcastArbitrary(
    data: Uint8Array,
    options?: BroadcastOptions
  ): Promise<BroadcastResponse>;

  /**
   * build signed transaction document based on sign arguments.
   * @argument args - arguments for signing. e.g. messages, fee, memo, etc.
   */
  sign(args: SignArgs): Promise<SignResponse<Tx, Doc, BroadcastResponse>>;

  /**
   * sign and broadcast transaction based on sign arguments.
   */
  signAndBroadcast(
    args: SignArgs,
    options?: BroadcastOptions
  ): Promise<BroadcastResponse>;

  /**
   * broadcast a signed transaction.
   */
  broadcast: (tx: Tx, options?: BroadcastOptions) => Promise<BroadcastResponse>;
}

/**
 * BaseSigner is a base class for signers
 */
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

  setAuth(auth: Auth) {
    this._auth = auth;
  }

  /**
   * default common implementation for sign arbitrary data in bytes.
   */
  signArbitrary(data: Uint8Array): IKey {
    if (!isByteAuth(this.auth)) {
      throw new Error('signArbitrary needs ByteAuth implementation');
    }

    const hashedData = this.config.message.hash(data);

    const signature = this.auth.sign(hashedData);
    return signature.toCompact();
  }
}

/**
 * SIGN_MODE for IGeneralOfflineSigner
 */
export const SIGN_MODE = {
  /**
   * SIGN_MODE for (cosmos_)direct
   */
  DIRECT: 'direct',
  /**
   * SIGN_MODE for (cosmos_)amino
   */
  AMINO: 'amino',
};

/**
 * IGeneralOfflineSigner is an interface for offline signers.
 */
export interface IGeneralOfflineSigner<TAddr = unknown, TDoc = unknown, TResp = unknown, TSignArgs = IGeneralOfflineSignArgs<TAddr, TDoc> > {
  /**
   * sign mode
   */
  signMode: string;

  /**
   * get accounts
   * @returns a list of accounts
   */
  getAccounts: () => Promise<readonly AccountData[]>;

  /**
   * sign document
   * @param signerAddress
   * @param signDoc
   * @returns
   */
  sign: (
    args: TSignArgs,
  ) => Promise<TResp>;
}

export interface IGeneralOfflineSignArgs<TAddr = unknown, TDoc = unknown> {
  signerAddress: TAddr;
  signDoc: TDoc;
}