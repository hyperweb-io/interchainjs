import { BaseAccount } from "@interchainjs/cosmos-types/cosmos/auth/v1beta1/auth";
import { QueryClientImpl as AuthQuery } from "@interchainjs/cosmos-types/cosmos/auth/v1beta1/query.rpc.Query";
import { SignMode } from "@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing";
import { ServiceClientImpl as TxQuery } from "@interchainjs/cosmos-types/cosmos/tx/v1beta1/service.rpc.Service";
import {
  Fee,
  SignerInfo,
  Tx,
  TxBody,
} from "@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx";
import { BroadcastOptions, HttpEndpoint } from "@interchainjs/types";
import { isEmpty, Key, toHttpEndpoint } from "@interchainjs/utils";

import { defaultAccountParser, defaultBroadcastOptions } from "../defaults";
import {
  BroadcastMode,
  BroadcastResponse,
  EncodedMessage,
  QueryClient,
} from "../types";
import { CometBroadcastResponse, Status } from "../types/rpc";
import { constructAuthInfo } from "../utils/direct";
import { broadcast, createTxRpc, getPrefix } from "../utils/rpc";

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
        "publicKeyHash is not provided when constructing RpcClient"
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
    return json["result"];
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

  async broadcast(
    txBytes: Uint8Array,
    options?: BroadcastOptions
  ): Promise<BroadcastResponse> {
    const { checkTx, deliverTx } = { ...defaultBroadcastOptions, ...options };
    const mode: BroadcastMode =
      checkTx && deliverTx
        ? "broadcast_tx_commit"
        : checkTx
          ? "broadcast_tx_sync"
          : "broadcast_tx_async";
    const resp = await broadcast(this.endpoint, mode, txBytes);
    switch (mode) {
    case "broadcast_tx_async":
      const { hash: hash1, ...rest1 } = resp as CometBroadcastResponse.Async;
      return {
        hash: hash1,
        add_tx: rest1,
      };
    case "broadcast_tx_sync":
      const { hash: hash2, ...rest2 } = resp as CometBroadcastResponse.Sync;
      return {
        hash: hash2,
        check_tx: rest2,
      };
    case "broadcast_tx_commit":
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {
        check_tx,
        deliver_tx,
        height,
        hash: hash3,
      } = resp as CometBroadcastResponse.Commit;
      return {
        hash: hash3,
        check_tx,
        deliver_tx: { height, ...deliver_tx },
      };
    default:
      throw new Error(`Wrong method: ${mode}`);
    }
  }
}
