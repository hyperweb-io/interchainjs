import {
  Auth,
  HttpEndpoint,
  Price,
  StdFee,
  StdSignDoc,
} from "@interchainjs/types";
import { fromBase64, Key } from "@interchainjs/utils";

import {
  DeliverTxResponse,
  EncodeObject,
  SignerData,
  SignerOptions,
} from "./types/signing-client";
import {
  AccountData,
  OfflineAminoSigner,
  OfflineDirectSigner,
  OfflineSigner,
} from "./types/wallet";
import { defaultAuth, BroadcastTxError, sleep, TimeoutError } from "./utils";
import {
  AuthInfo,
  Secp256k1PubKey,
  SignDoc,
  SignMode,
  SignerInfo,
  TxBody,
  TxRaw,
  IBinaryWriter,
  Any,
} from "@interchainjs/cosmos/types";
import {
  constructAuthInfo,
  constructSignerInfo,
  constructTxBody,
  toAminoMsgs,
  toEncoder,
  toFee,
  toMessages,
} from "@interchainjs/cosmos/utils";
import { AminoSigner } from "@interchainjs/cosmos/amino";
import {
  SearchTxQuery,
  SearchTxResponse,
  IndexedTx,
  Block,
  BlockResponse,
  TxResponse,
} from "./types/query";
import { TxRpc } from "@interchainjs/cosmos-msgs/types";

/**
 * implement the same methods as what in `cosmjs` signingClient
 */
export class SigningClient {
  readonly offlineSigner: OfflineSigner;
  readonly broadcastTimeoutMs: number | undefined;
  readonly broadcastPollIntervalMs: number | undefined;

  readonly aminoSigner: AminoSigner;
  private readonly _signAmino?: OfflineAminoSigner["signAmino"];
  private readonly _signDirect?: OfflineDirectSigner["signDirect"];
  private readonly gasPrice?: Price | string;

  private _endpoint: string | HttpEndpoint;
  protected txRpc: TxRpc;

  constructor(
    aminoSigner: AminoSigner,
    offlineSigner: OfflineSigner,
    options: SignerOptions = {}
  ) {
    aminoSigner.addEncoders(
      options.registry?.map(([, g]) => toEncoder(g)) || []
    );
    aminoSigner.addConverters(Object.values(options.aminoConverters || {}));
    this.aminoSigner = aminoSigner;
    this.offlineSigner = offlineSigner;
    this._signAmino = (offlineSigner as OfflineAminoSigner).signAmino;
    this._signDirect = (offlineSigner as OfflineDirectSigner).signDirect;
    this.broadcastTimeoutMs = options.broadcastTimeoutMs;
    this.broadcastPollIntervalMs = options.broadcastPollIntervalMs;
    this.gasPrice = options.gasPrice;
    this.txRpc = {
      request(
        service: string,
        method: string,
        data: Uint8Array
      ): Promise<Uint8Array> {
        throw new Error("Not implemented yet");
      },
      signAndBroadcast: this.signAndBroadcast,
    };
  }

  static connectWithSigner(
    endpoint: string | HttpEndpoint,
    signer: OfflineSigner,
    options: SignerOptions = {}
  ): SigningClient {
    const aminoSigner = new AminoSigner(defaultAuth, [], []);
    const signingClient = new SigningClient(aminoSigner, signer, options);
    signingClient.setEndpoint(endpoint);
    return signingClient;
  }

  setEndpoint(endpoint: string | HttpEndpoint) {
    this._endpoint = endpoint;
  }

  private async initAuth(address: string) {
    const { pubkey, algo } = await this.getAccountData(address);
    const getPublicKey = (isCompressed?: boolean) => {
      if (isCompressed) {
        return Key.from(pubkey);
      }
      throw new Error("Getting uncompressed public key is not implemented");
    };
    const auth: Auth = {
      ...defaultAuth,
      algo,
      getPublicKey,
    };
    this.aminoSigner.setAuth(auth);
    this.aminoSigner.setEndpoint(this._endpoint);
  }

  private async getAccountData(address: string): Promise<AccountData> {
    const accounts = await this.offlineSigner.getAccounts();
    const account = accounts.find((account) => account.address === address);
    if (!account) {
      throw new Error(
        `No such account found in OfflineSigner for address ${address}`
      );
    }
    return account;
  }

  private async getPubkey(address: string): Promise<Any> {
    const account = await this.getAccountData(address);
    let typeUrl: string;
    let PubKey: {
      encode(
        message: { key: Uint8Array },
        writer?: IBinaryWriter
      ): IBinaryWriter;
    };
    switch (account.algo) {
      case "secp256k1":
        typeUrl = Secp256k1PubKey.typeUrl;
        PubKey = Secp256k1PubKey;
        break;
      default:
        throw new Error(`${account.algo} not supported.`);
    }
    const publicKey: Any = {
      typeUrl,
      value: PubKey.encode({
        key: account.pubkey,
      }).finish(),
    };
    return publicKey;
  }

  private get queryClient() {
    return this.aminoSigner.queryClient;
  }

  async getChainId() {
    return await this.queryClient.getChainId();
  }

  async getAccountNumber() {
    return await this.queryClient.getAccountNumber();
  }

  async getSequence() {
    return await this.queryClient.getSequence();
  }

  async sign(
    signerAddress: string,
    messages: EncodeObject[],
    fee: StdFee,
    memo: string,
    explicitSignerData?: SignerData
  ): Promise<TxRaw> {
    let signerData: SignerData;
    if (explicitSignerData) {
      signerData = explicitSignerData;
    } else {
      await this.initAuth(signerAddress);
      signerData = {
        accountNumber: await this.getAccountNumber(),
        sequence: await this.getSequence(),
        chainId: await this.getChainId(),
      };
    }
    return this._signDirect
      ? this.signDirect(signerAddress, messages, fee, memo, signerData)
      : this.signAmino(signerAddress, messages, fee, memo, signerData);
  }

  private signWithAutoFee = async (
    signerAddress: string,
    messages: EncodeObject[],
    fee: StdFee | "auto" | number,
    memo = ""
  ): Promise<TxRaw> => {
    let usedFee: StdFee;
    if (fee == "auto" || typeof fee === "number") {
      await this.initAuth(signerAddress);
      const { txBody } = constructTxBody(
        messages,
        this.aminoSigner.getEncoder,
        memo
      );
      const { signerInfo } = constructSignerInfo(
        this.aminoSigner.encodedPublicKey,
        await this.queryClient.getSequence(),
        this._signDirect
          ? SignMode.SIGN_MODE_DIRECT
          : SignMode.SIGN_MODE_LEGACY_AMINO_JSON
      );
      const feeEstimation = await this.aminoSigner.estimateFee(
        txBody,
        [signerInfo],
        {
          multiplier: typeof fee === "number" ? fee : void 0,
          gasPrice: this.gasPrice,
        }
      );
      usedFee = feeEstimation;
    } else {
      usedFee = fee;
    }
    const txRaw = await this.sign(signerAddress, messages, usedFee, memo);
    return txRaw;
  };

  async simulate(
    signerAddress: string,
    messages: EncodeObject[],
    memo: string | undefined
  ): Promise<bigint> {
    await this.initAuth(signerAddress);
    const { txBody } = constructTxBody(
      messages,
      this.aminoSigner.getEncoder,
      memo
    );
    const { signerInfo } = constructSignerInfo(
      this.aminoSigner.encodedPublicKey,
      await this.queryClient.getSequence(),
      this._signDirect
        ? SignMode.SIGN_MODE_DIRECT
        : SignMode.SIGN_MODE_LEGACY_AMINO_JSON
    );
    const feeEstimation = await this.aminoSigner.estimateFee(
      txBody,
      [signerInfo],
      { multiplier: 1 }
    );
    return BigInt(feeEstimation.gas);
  }

  async broadcastTxSync(tx: Uint8Array): Promise<string> {
    const broadcasted = await this.aminoSigner.broadcastArbitrary(tx, {
      checkTx: true,
      deliverTx: false,
    });
    if (broadcasted.check_tx?.code) {
      return Promise.reject(
        new BroadcastTxError(
          broadcasted.check_tx?.code,
          broadcasted.check_tx?.codespace ?? "",
          broadcasted.check_tx?.log
        )
      );
    }
    const transactionId = broadcasted.hash.toUpperCase();
    return transactionId;
  }

  public async signAndBroadcastSync(
    signerAddress: string,
    messages: EncodeObject[],
    fee: StdFee | "auto" | number,
    memo = ""
  ): Promise<string> {
    const txRaw = await this.signWithAutoFee(
      signerAddress,
      messages,
      fee,
      memo
    );
    const txBytes = TxRaw.encode(txRaw).finish();
    return this.broadcastTxSync(txBytes);
  }

  public async broadcastTx(
    tx: Uint8Array,
    timeoutMs = 60_000,
    pollIntervalMs = 3_000
  ): Promise<DeliverTxResponse> {
    let timedOut = false;
    const txPollTimeout = setTimeout(() => {
      timedOut = true;
    }, timeoutMs);

    const pollForTx = async (txId: string): Promise<DeliverTxResponse> => {
      if (timedOut) {
        throw new TimeoutError(
          `Transaction with ID ${txId} was submitted but was not yet found on the chain. You might want to check later. There was a wait of ${
            timeoutMs / 1000
          } seconds.`,
          txId
        );
      }
      await sleep(pollIntervalMs);
      const result = await this.getTx(txId);
      return result
        ? {
            code: result.code,
            height: result.height,
            txIndex: result.txIndex,
            events: result.events,
            rawLog: result.rawLog,
            transactionHash: txId,
            msgResponses: result.msgResponses,
            gasUsed: result.gasUsed,
            gasWanted: result.gasWanted,
          }
        : pollForTx(txId);
    };

    const transactionId = await this.broadcastTxSync(tx);

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
  }

  signAndBroadcast = async (
    signerAddress: string,
    messages: EncodeObject[],
    fee: StdFee | "auto" | number,
    memo = ""
  ): Promise<DeliverTxResponse> => {
    const txRaw = await this.signWithAutoFee(
      signerAddress,
      messages,
      fee,
      memo
    );
    const txBytes = TxRaw.encode(txRaw).finish();
    return this.broadcastTx(
      txBytes,
      this.broadcastTimeoutMs,
      this.broadcastPollIntervalMs
    );
  };

  private async signDirect(
    signerAddress: string,
    messages: EncodeObject[],
    fee: StdFee,
    memo: string,
    { accountNumber, sequence, chainId }: SignerData
  ): Promise<TxRaw> {
    if (!this._signDirect) {
      throw new Error("`signDirect` not implemented in provided OfflineSigner");
    }
    const { txBody } = constructTxBody(
      messages,
      this.aminoSigner.getEncoder,
      memo
    );
    const authInfo = AuthInfo.fromPartial({
      signerInfos: [
        SignerInfo.fromPartial({
          publicKey: await this.getPubkey(signerAddress),
          sequence: BigInt(sequence),
          modeInfo: {
            single: {
              mode: SignMode.SIGN_MODE_DIRECT,
            },
          },
        }),
      ],
      fee: toFee(fee),
    });
    const doc: SignDoc = {
      bodyBytes: TxBody.encode(txBody).finish(),
      authInfoBytes: AuthInfo.encode(authInfo).finish(),
      chainId,
      accountNumber,
    };
    const { signature, signed } = await this._signDirect(signerAddress, doc);
    const txRaw = TxRaw.fromPartial({
      bodyBytes: signed.bodyBytes,
      authInfoBytes: signed.authInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
    return txRaw;
  }

  private async signAmino(
    signerAddress: string,
    messages: EncodeObject[],
    fee: StdFee,
    memo: string,
    { accountNumber, sequence, chainId }: SignerData
  ): Promise<TxRaw> {
    if (!this._signAmino) {
      throw new Error("`signAmino` not implemented in provided OfflineSigner");
    }
    const doc: StdSignDoc = {
      chain_id: chainId,
      account_number: accountNumber.toString(),
      sequence: sequence.toString(),
      fee,
      msgs: toAminoMsgs(messages, this.aminoSigner.getConverterFromTypeUrl),
      memo,
    };
    const { signature, signed } = await this._signAmino(signerAddress, doc);
    const bodyBytes = constructTxBody(
      toMessages(signed.msgs, this.aminoSigner.getConverter),
      this.aminoSigner.getEncoder,
      doc.memo
    ).encode();

    const { signerInfo } = constructSignerInfo(
      this.aminoSigner.encodedPublicKey,
      BigInt(signed.sequence),
      this._signDirect
        ? SignMode.SIGN_MODE_DIRECT
        : SignMode.SIGN_MODE_LEGACY_AMINO_JSON
    );

    const authInfoBytes = constructAuthInfo(
      [signerInfo],
      toFee(signed.fee)
    ).encode();

    const txRaw = TxRaw.fromPartial({
      bodyBytes,
      authInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
    return txRaw;
  }

  get endpoint(): HttpEndpoint {
    return this.queryClient.endpoint;
  }

  async getTx(id: string): Promise<IndexedTx | null> {
    const data = await fetch(`${this.endpoint.url}/tx?hash=0x${id}`);
    const json = await data.json();
    const tx: TxResponse = json["result"];
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
    };
  }

  async searchTx(query: SearchTxQuery): Promise<IndexedTx[]> {
    let rawQuery: string;
    if (typeof query === "string") {
      rawQuery = query;
    } else if (Array.isArray(query)) {
      rawQuery = query.map((t) => `${t.key}=${t.value}`).join(" AND ");
    } else {
      throw new Error("Got unsupported query type.");
    }
    const orderBy: "asc" | "desc" = "asc";
    const data = await fetch(
      `${this.endpoint.url}/tx_search?query="${rawQuery}"&order_by="${orderBy}"`
      // `${this.endpoint.url}/tx_search?query="${rawQuery}"&order_by="${orderBy}"&page=1&per_page=100`
    );
    const json = await data.json();

    const { txs }: SearchTxResponse = json["result"];
    return txs.map((tx) => {
      return {
        height: Number.parseInt(tx.height),
        txIndex: tx.index,
        hash: tx.hash,
        code: 0,
        // events: tx.tx_result.tags,
        events: [],
        rawLog: tx.tx_result.log || "",
        tx: fromBase64(tx.tx),
        msgResponses: [],
        gasUsed: BigInt(tx.tx_result.gas_used),
        gasWanted: BigInt(tx.tx_result.gas_wanted),
      } as IndexedTx;
    });
  }

  async getBlock(height?: number): Promise<Block> {
    const data = await fetch(
      height == void 0
        ? `${this.endpoint.url}/block?height=${height}`
        : `${this.endpoint.url}/block`
    );
    const json = await data.json();
    const { block_id, block }: BlockResponse = json["result"];
    return {
      id: block_id.hash.toUpperCase(),
      header: {
        version: {
          block: block.header.version.block,
          app: block.header.version.app,
        },
        height: Number(block.header.height),
        chainId: block.header.chain_id,
        time: block.header.time,
      },
      txs: block.data.txs.map((tx: string) => fromBase64(tx)),
    };
  }
}
