import { type Key } from "@uni-sign/utils";
import Decimal from "decimal.js";
import {  Signature } from "./auth";
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
    hash(publicKey: Key): Key;
  };
  message: {
    /**
     * method to hash arbitrary message in methods with `Arbitrary` in name. i.e.
     * - signArbitrary
     * - verifyArbitrary
     * - broadcastArbitrary
     */
    hash(message: Uint8Array): Uint8Array;
  };
  signature: {
    fromCompact(key: Key, algo: string): Signature;
    toCompact(signature: Signature, algo: string): Key;
  };
}

export interface BroadcastOptions {
  checkTx?: boolean;
  deliverTx?: boolean;
}

export type BroadcastResponse<T> = {
  hash: string;
} & T

export interface SignResponse<SignDoc, Tx> {
  signature: Key;
  signed: SignDoc;
  tx: Tx,
  broadcast: (options?: BroadcastOptions) => Promise<BroadcastResponse<unknown>>
}

/**
 * - SignDoc is the document type as the signing target to get signature
 * - Tx is the transaction to broadcast
 */
export interface UniSigner<SignDoc, Tx> {
  publicKey: Key;
  /**
   * publicKeyHash is usually used to get address.
   * - for cosmos chains: publicKeyHash.toBech32(prefix)
   * - for ethereum chains: publicKeyHash.toPrefixedHex()
   */
  publicKeyHash: Key;
  /**
   * to get printable address(es)
   * the return type is unknown because sometimes there are multiple addresses 
   * (i.e. Injective network has both cosmos address and eth address)
   */
  getAddress(): unknown;
  signArbitrary(data: Uint8Array): Key;
  verifyArbitrary(data: Uint8Array, signature: Key): boolean;
  broadcastArbitrary(data: Uint8Array, options?: BroadcastOptions): Promise<unknown>;
  signDoc: (doc: SignDoc) => Promise<SignDocResponse<SignDoc>>;
  sign(messages: any, ...args: any): Promise<SignResponse<SignDoc, Tx>>;
  signAndBroadcast(messages: any, ...args: any): Promise<BroadcastResponse<unknown>>;
  broadcast: (tx: Tx, options?: BroadcastOptions) => Promise<BroadcastResponse<unknown>>
}
