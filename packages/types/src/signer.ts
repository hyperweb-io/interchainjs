import Decimal from "decimal.js";
import { IKey, Signature } from "./auth";
import { SignDocResponse } from "./wallet";

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
  signature: {
    fromCompact(key: IKey, algo: string): Signature;
    toCompact(signature: Signature, algo: string): IKey;
  };
}

export interface BroadcastOptions {
  checkTx?: boolean;
  deliverTx?: boolean;
}

export interface CreateDocResponse<SignDoc, Tx> {
  signDoc: SignDoc;
  tx: Tx;
}

export interface SignResponse<
  SignDoc,
  Tx,
  BroadcastResponse = { hash: string }
> extends CreateDocResponse<SignDoc, Tx> {
  signature: IKey;
  broadcast: (options?: BroadcastOptions) => Promise<BroadcastResponse>;
}

/**
 * - SignDoc is the document type as the signing target to get signature
 * - Tx is the transaction to broadcast
 */
export interface UniSigner<SignDoc, Tx, BroadcastResponse = { hash: string }> {
  publicKey: IKey;
  /**
   * publicKeyHash is usually used to get address.
   * - for cosmos chains: publicKeyHash.toBech32(prefix)
   * - for ethereum chains: publicKeyHash.toPrefixedHex()
   */
  publicKeyHash: IKey;
  /**
   * to get printable address(es)
   * the return type is unknown because sometimes there are multiple addresses
   * (i.e. Injective network has both cosmos address and eth address)
   */
  getAddress(): unknown;
  signArbitrary(data: Uint8Array): IKey;
  verifyArbitrary(data: Uint8Array, signature: IKey): boolean;
  broadcastArbitrary(
    data: Uint8Array,
    options?: BroadcastOptions
  ): Promise<BroadcastResponse>;
  signDoc: (doc: SignDoc) => Promise<SignDocResponse<SignDoc>>;
  createDoc(
    messages: unknown,
    ...args: unknown[]
  ): Promise<CreateDocResponse<SignDoc, Tx>>;
  sign(
    messages: unknown,
    ...args: unknown[]
  ): Promise<SignResponse<SignDoc, Tx, BroadcastResponse>>;
  signAndBroadcast(
    messages: unknown,
    ...args: unknown[]
  ): Promise<BroadcastResponse>;
  broadcast: (tx: Tx, options?: BroadcastOptions) => Promise<BroadcastResponse>;
}
