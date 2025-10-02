import Decimal from 'decimal.js';
import { ICryptoBytes, IAccount } from './auth';
import { IQueryClient } from './query';
import { sign } from 'crypto';

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
 * IUniSigner is a generic interface for signing and broadcasting transactions.
 * It is used to abstract the signing and broadcasting process for different chains.
 * @template TAccount - account type
 * @template TSignArgs - arguments for sign method
 * @template TBroadcastOpts - options for broadcasting a transaction
 * @template TBroadcastResponse - response type after broadcasting a transaction
 */
export interface IUniSigner<
  TTxResp = unknown,
  TAccount extends IAccount = IAccount,
  TSignArgs = unknown,
  TBroadcastOpts = unknown,
  TBroadcastResponse extends IBroadcastResult<TTxResp> = IBroadcastResult<TTxResp>,
  TQueryClient extends IQueryClient = IQueryClient,
> {
  // Query interface used for chain reads and broadcasting
  queryClient: TQueryClient;

  // Account management
  getAccounts(): Promise<readonly TAccount[]>;

  // Core signing methods
  signArbitrary(data: Uint8Array, index?: number): Promise<ICryptoBytes>;

  // Transaction flow
  sign(args: TSignArgs): Promise<ISigned<TBroadcastOpts, TBroadcastResponse>>;
  broadcast(signed: ISigned<TBroadcastOpts, TBroadcastResponse>, options?: TBroadcastOpts): Promise<TBroadcastResponse>;
  signAndBroadcast(args: TSignArgs, options?: TBroadcastOpts): Promise<TBroadcastResponse>;

  // Raw broadcast (for pre-signed transactions)
  broadcastArbitrary(data: Uint8Array, options?: TBroadcastOpts): Promise<TBroadcastResponse>;
}

export interface ISigned<BroadcastOpts, BroadcastResponse> {
  // Signature details
  signature: ICryptoBytes;

  // Built-in broadcast capability
  broadcast(options?: BroadcastOpts): Promise<BroadcastResponse>;
}

export interface IBroadcastResult<TxResp = unknown> {
  // Common fields
  transactionHash: string;  // Universal transaction identifier

  // Chain-specific data preserved
  rawResponse: unknown;    // Original chain response

  broadcastResponse: unknown;

  wait: () => Promise<TxResp>;
}

export type DeliverTxResponse = IBroadcastResult;

export interface Attribute {
  key: string;
  value: string;
  index?: boolean;
}

export interface Event {
  type: string;
  attributes: readonly Attribute[];
}
