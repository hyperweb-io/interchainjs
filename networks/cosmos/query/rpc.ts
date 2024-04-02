import { BaseAccount } from "../codegen/cosmos/auth/v1beta1/auth";
import { QueryClientImpl as AuthQuery } from "../codegen/cosmos/auth/v1beta1/query.rpc.Query";
import { ServiceClientImpl as TxQuery } from "../codegen/cosmos/tx/v1beta1/service.rpc.Service";
import {
  BroadcastMode,
  BroadcastResponse,
  FeeOptions,
  QueryClient,
} from "../types";
import { Status, CometBroadcastResponse } from "../types/rpc";
import {
  accountDecoders,
  broadcast,
  createTxRpc,
  getAvgGasPrice,
  getHighGasPrice,
  getLowGasPrice,
  getPrefix,
} from "../utils/rpc";
import { Key, isEmpty, toHttpEndpoint } from "@interchainjs/utils";
import { TxBody, SignerInfo, Tx, Fee } from "../codegen/cosmos/tx/v1beta1/tx";
import { constructAuthInfo } from "../utils/direct";
import { SignMode } from "../codegen/cosmos/tx/signing/v1beta1/signing";
import { toPrice } from "@interchainjs/utils";
import { Decimal } from "decimal.js";
import { HttpEndpoint, Price, BroadcastOptions } from "@interchainjs/types";
import { defaultBroadcastOptions, defaultFeeOptions } from "../defaults";

export class RpcClient implements QueryClient {
  readonly endpoint: HttpEndpoint;

  protected chainId?: string;
  protected accountNumber?: bigint;
  protected readonly authQuery: AuthQuery;
  protected readonly txQuery: TxQuery;
  protected readonly publicKeyHash?: Key;

  constructor(endpoint: string | HttpEndpoint, publicKeyHash?: Key) {
    this.endpoint = toHttpEndpoint(endpoint);
    this.publicKeyHash = publicKeyHash;
    const txRpc = createTxRpc(this.endpoint);
    this.authQuery = new AuthQuery(txRpc);
    this.txQuery = new TxQuery(txRpc);
  }

  async getAddress() {
    if (!this.publicKeyHash) {
      throw new Error(
        "publicKeyHash is not provided when constructing RpcClient"
      );
    }
    return this.publicKeyHash.toBech32(getPrefix(await this.getChainId()));
  }

  async getBaseAccount(): Promise<BaseAccount> {
    const accountResp = await this.authQuery.account({
      address: await this.getAddress(),
    });

    if (!accountResp || !accountResp.account) {
      throw new Error(`Account is undefined.`);
    }

    const decoder = accountDecoders.find(
      (decoder) => decoder.typeUrl === accountResp.account!.typeUrl
    );

    if (!decoder) {
      throw new Error(
        `No corresponding account found for account type ${accountResp.account.typeUrl}.`
      );
    }

    const account = decoder.fromPartial(
      decoder.decode(accountResp.account.value)
    );
    const baseAccount =
      (account as any).baseVestingAccount?.baseAccount ||
      (account as any).baseAccount ||
      account;
    return baseAccount;
  }

  protected async getStatus(): Promise<Status> {
    const data = await fetch(`${this.endpoint.url}/status`);
    const json = await data.json();
    return json["result"];
  }

  async getChainId() {
    if (isEmpty(this.chainId)) {
      const status: Status = await this.getStatus();
      this.chainId = status.node_info.network;
    }
    return this.chainId;
  }

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

  async estimateFee(
    txBody: TxBody,
    signerInfos: SignerInfo[],
    options?: FeeOptions
  ) {
    // estimate gas
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
    const { gasInfo } = await this.txQuery.simulate({
      tx: void 0,
      txBytes: Tx.encode(tx).finish(),
    });
    if (typeof gasInfo === "undefined") {
      throw new Error("Fail to estimate gas by simulate tx.");
    }

    // calculate fee
    const gasLimit = new Decimal(gasInfo.gasUsed.toString())
      .mul(options?.multiplier || defaultFeeOptions.multiplier)
      .ceil();

    let price: Price;
    switch (options?.gasPrice ?? defaultFeeOptions.gasPrice) {
      case "average":
        price = getAvgGasPrice(await this.getChainId());
        break;
      case "high":
        price = getHighGasPrice(await this.getChainId());
        break;
      case "low":
        price = getLowGasPrice(await this.getChainId());
        break;
      default:
        price = toPrice(options?.gasPrice);
        break;
    }

    if (price.denom.length < 3 || price.denom.length > 128) {
      throw new Error("Denom must be between 3 and 128 characters");
    }

    return {
      amount: [
        {
          amount: gasLimit.mul(price.amount).ceil().toString(),
          denom: price.denom,
        },
      ],
      gas: gasLimit.toString(),
    };
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
