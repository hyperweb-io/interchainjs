import { BaseAccount } from '@interchainjs/cosmos-types/cosmos/auth/v1beta1/auth';
import { QueryClientImpl as AuthQuery } from '@interchainjs/cosmos-types/cosmos/auth/v1beta1/query.rpc.Query';
import { SignMode } from '@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing';
import { ServiceClientImpl as TxQuery } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/service.rpc.Service';
import {
  Fee,
  SignerInfo,
  Tx,
  TxBody,
  TxRaw,
} from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { BroadcastOptions, HttpEndpoint } from '@interchainjs/types';
import { fromBase64, isEmpty, Key, toHttpEndpoint } from '@interchainjs/utils';

import { defaultAccountParser, defaultBroadcastOptions } from '../defaults';
import {
  BroadcastMode,
  BroadcastResponse,
  EncodedMessage,
  QueryClient,
} from '../types';
import {
  AsyncCometBroadcastResponse,
  IndexedTx,
  Status,
  SyncCometBroadcastResponse,
  TimeoutError,
  TxResponse,
} from '../types/rpc';
import { constructAuthInfo } from '../utils/direct';
import { broadcast, createTxRpc, getPrefix, sleep } from '../utils/rpc';

export class RpcClient implements QueryClient {
  readonly endpoint: HttpEndpoint;

  protected chainId?: string;
  protected accountNumber?: bigint;
  protected readonly authQuery: AuthQuery;
  protected readonly txQuery: TxQuery;
  protected readonly publicKeyHash?: Key;
  protected parseAccount: (encodedAccount: EncodedMessage) => BaseAccount =
    defaultAccountParser;
  protected _prefix?: string;

  constructor(
    endpoint: string | HttpEndpoint,
    publicKeyHash?: Key,
    prefix?: string
  ) {
    this.endpoint = toHttpEndpoint(endpoint);
    this.publicKeyHash = publicKeyHash;
    const txRpc = createTxRpc(this.endpoint);
    this.authQuery = new AuthQuery(txRpc);
    this.txQuery = new TxQuery(txRpc);
    this._prefix = prefix;
  }

  setAccountParser(
    parseBaseAccount: (encodedAccount: EncodedMessage) => BaseAccount
  ) {
    this.parseAccount = parseBaseAccount;
  }

  async getPrefix() {
    return this._prefix ?? getPrefix(await this.getChainId());
  }

  async getAddress() {
    if (!this.publicKeyHash) {
      throw new Error(
        'publicKeyHash is not provided when constructing RpcClient'
      );
    }
    return this.publicKeyHash.toBech32(await this.getPrefix());
  }

  async getBaseAccount(): Promise<BaseAccount> {
    const accountResp = await this.authQuery.account({
      address: await this.getAddress(),
    });

    if (!accountResp || !accountResp.account) {
      throw new Error(`Account is undefined.`);
    }

    if (BaseAccount.is(accountResp.account)) {
      return accountResp.account;
    }

    return this.parseAccount(accountResp.account);
  }

  protected async getStatus(): Promise<Status> {
    const data = await fetch(`${this.endpoint.url}/status`);
    const json = await data.json();
    return json['result'];
  }

  getChainId = async () => {
    if (isEmpty(this.chainId)) {
      const status: Status = await this.getStatus();
      this.chainId = status.node_info.network;
    }
    return this.chainId;
  };

  async getLatestBlockHeight() {
    const status: Status = await this.getStatus();
    return BigInt(status.sync_info.latest_block_height);
  }

  async getAccountNumber() {
    if (isEmpty(this.accountNumber)) {
      const account = await this.getBaseAccount();
      this.accountNumber = account.accountNumber;
    }
    return this.accountNumber;
  }

  async getSequence() {
    const account = await this.getBaseAccount();
    return account.sequence;
  }

  async simulate(txBody: TxBody, signerInfos: SignerInfo[]) {
    const tx = Tx.fromPartial({
      body: txBody,
      authInfo: constructAuthInfo(
        signerInfos.map((signerInfo) => {
          return {
            ...signerInfo,
            modeInfo: { single: { mode: SignMode.SIGN_MODE_UNSPECIFIED } },
          };
        }),
        Fee.fromPartial({})
      ).authInfo,
      signatures: [new Uint8Array()],
    });
    return await this.txQuery.simulate({
      tx: void 0,
      txBytes: Tx.encode(tx).finish(),
    });
  }

  async getTx(id: string): Promise<IndexedTx | null> {
    const data = await fetch(`${this.endpoint.url}/tx?hash=0x${id}`);
    const json = await data.json();
    const tx: TxResponse = json['result'];
    if (!tx) return null;
    const txRaw = TxRaw.decode(fromBase64(tx.tx));
    const txBody = TxBody.decode(txRaw.bodyBytes);
    return {
      height: tx.height,
      txIndex: tx.index,
      hash: tx.hash,
      code: tx.tx_result.code,
      events: tx.tx_result.events,
      rawLog: tx.tx_result.log,
      tx: fromBase64(tx.tx),
      msgResponses: txBody.messages,
      gasUsed: BigInt(tx.tx_result.gas_used),
      gasWanted: BigInt(tx.tx_result.gas_wanted),
      data: tx.tx_result.data,
      log: tx.tx_result.log,
      info: tx.tx_result.info,
    };
  }

  async broadcast(
    txBytes: Uint8Array,
    options?: BroadcastOptions
  ): Promise<BroadcastResponse> {
    const { checkTx, deliverTx } = { ...options, ...defaultBroadcastOptions };

    const mode: BroadcastMode =
      checkTx && deliverTx
        ? 'broadcast_tx_commit'
        : checkTx
          ? 'broadcast_tx_sync'
          : 'broadcast_tx_async';
    const resp = await broadcast(
      this.endpoint,
      mode === 'broadcast_tx_commit' ? 'broadcast_tx_async' : mode,
      txBytes
    );
    switch (mode) {
    case 'broadcast_tx_async':
      const { hash: hash1, ...rest1 } = resp as AsyncCometBroadcastResponse;
      return {
        hash: hash1,
        add_tx: rest1,
      };
    case 'broadcast_tx_sync':
      const { hash: hash2, ...rest2 } = resp as SyncCometBroadcastResponse;
      return {
        hash: hash2,
        check_tx: rest2,
      };
    case 'broadcast_tx_commit':
      let timedOut = false;
      const txPollTimeout = setTimeout(() => {
        timedOut = true;
      }, options.timeoutMs);

      const pollForTx = async (txId: string): Promise<BroadcastResponse> => {
        if (timedOut) {
          throw new TimeoutError(
            `Transaction with ID ${txId} was submitted but was not yet found on the chain. You might want to check later. There was a wait of ${
              options.timeoutMs / 1000
            } seconds.`,
            txId
          );
        }
        await sleep(options.pollIntervalMs);
        const result = await this.getTx(txId);

        console.log(result);

        return result
          ? {
            hash: resp.hash,
            deliver_tx: {
              code: result.code,
              height: result.height.toString(),
              txIndex: result.txIndex,
              events: result.events,
              rawLog: result.rawLog,
              msgResponses: result.msgResponses,
              gas_used: result.gasUsed.toString(),
              gas_wanted: result.gasWanted.toString(),
              data: result.data,
              log: result.log,
              info: result.info,
            },
          }
          : pollForTx(txId);
      };

      const transactionId = resp.hash.toUpperCase();

      return new Promise((resolve, reject) =>
        pollForTx(transactionId).then(
          (value) => {
            clearTimeout(txPollTimeout);
            resolve(value);
          },
          (error) => {
            clearTimeout(txPollTimeout);
            reject(error);
          }
        )
      );
    default:
      throw new Error(`Wrong method: ${mode}`);
    }
  }
}
