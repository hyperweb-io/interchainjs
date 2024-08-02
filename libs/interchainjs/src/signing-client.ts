import { AminoSigner } from '@interchainjs/cosmos/amino';
import { DirectSigner } from '@interchainjs/cosmos/direct';
import { RpcClient } from '@interchainjs/cosmos/query/rpc';
import {
  AminoConverter,
  Encoder,
  isICosmosAccount,
  QueryClient,
} from '@interchainjs/cosmos/types';
import {
  isOfflineAminoSigner,
  isOfflineDirectSigner,
  OfflineSigner,
} from '@interchainjs/cosmos/types/wallet';
import { toEncoder } from '@interchainjs/cosmos/utils';
import { IBinaryWriter } from '@interchainjs/cosmos-types/binary';
import { PubKey as Secp256k1PubKey } from '@interchainjs/cosmos-types/cosmos/crypto/secp256k1/keys';
import { TxBody, TxRaw } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { Any } from '@interchainjs/cosmos-types/google/protobuf/any';
import { TxRpc } from '@interchainjs/cosmos-types/types';
import {
  AccountData,
  HttpEndpoint,
  IKey,
  Price,
  StdFee,
} from '@interchainjs/types';
import { fromBase64 } from '@interchainjs/utils';

import {
  Block,
  BlockResponse,
  IndexedTx,
  SearchTxQuery,
  SearchTxResponse,
  TxResponse,
} from './types/query';
import {
  DeliverTxResponse,
  EncodeObject,
  SignerOptions,
} from './types/signing-client';
import { BroadcastTxError } from './utils';

/**
 * implement the same methods as what in `cosmjs` signingClient
 */
export class SigningClient {
  readonly client: QueryClient | null | undefined;
  readonly offlineSigner: OfflineSigner;
  readonly options: SignerOptions;

  readonly aminoSigners: Record<string, AminoSigner> = {};
  readonly directSigners: Record<string, DirectSigner> = {};

  readonly addresses: string[] = [];

  readonly encoders: Encoder[] = [];
  readonly converters: AminoConverter[] = [];

  private readonly gasPrice?: Price | string;

  private _endpoint: string | HttpEndpoint;
  protected txRpc: TxRpc;

  constructor(
    client: QueryClient | null | undefined,
    offlineSigner: OfflineSigner,
    options: SignerOptions = {}
  ) {
    this.client = client;

    this.offlineSigner = offlineSigner;
    this.encoders = options.registry?.map(([, g]) => toEncoder(g)) || [];
    this.converters = Object.values(options.aminoConverters || {});

    this.options = options;

    this.txRpc = {
      request(): Promise<Uint8Array> {
        throw new Error('Not implemented yet');
      },
      signAndBroadcast: this.signAndBroadcast,
    };
  }

  static async connectWithSigner(
    endpoint: string | HttpEndpoint,
    signer: OfflineSigner,
    options: SignerOptions = {}
  ): Promise<SigningClient> {
    const signingClient = new SigningClient(
      new RpcClient(endpoint, options.prefix),
      signer,
      options
    );

    await signingClient.connect();

    return signingClient;
  }

  async connect() {
    let firstPubkey: IKey;
    if (isOfflineAminoSigner(this.offlineSigner)) {
      const aminoSigners = await AminoSigner.fromWalletToSigners(
        this.offlineSigner,
        this.encoders,
        this.converters,
        this.endpoint,
        {
          prefix: this.options.prefix,
        }
      );

      for (const signer of aminoSigners) {
        if (!firstPubkey) {
          firstPubkey = await signer.publicKey;
        }
        this.aminoSigners[await signer.getAddress()] = signer;
      }
    }

    if (isOfflineDirectSigner(this.offlineSigner)) {
      const directSigners = await DirectSigner.fromWalletToSigners(
        this.offlineSigner,
        this.encoders,
        this.endpoint,
        {
          prefix: this.options.prefix,
        }
      );

      for (const signer of directSigners) {
        if (!firstPubkey) {
          firstPubkey = await signer.publicKey;
        }
        this.directSigners[await signer.getAddress()] = signer;
      }
    }
  }

  private async getAccountData(address: string): Promise<AccountData> {
    const accounts = await this.offlineSigner.getAccounts();
    const account = accounts.find((account) => account.address === address);
    if (!account) {
      throw new Error(
        `No such account found in OfflineSigner for address ${address}`
      );
    }

    return isICosmosAccount(account) ? account.toAccountData() : account;
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
    case 'secp256k1':
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
    return this.client;
  }

  async getChainId() {
    return await this.queryClient.getChainId();
  }

  async getAccountNumber(address: string) {
    return await this.queryClient.getAccountNumber(address);
  }

  async getSequence(address: string) {
    return await this.queryClient.getSequence(address);
  }

  getSinger(signerAddress: string) {
    const signer =
      this.aminoSigners[signerAddress] || this.directSigners[signerAddress];

    if (!signer) {
      throw new Error(`No signer found for address ${signerAddress}`);
    }

    return signer;
  }

  async sign(
    signerAddress: string,
    messages: EncodeObject[],
    fee: StdFee,
    memo: string
  ): Promise<TxRaw> {
    const signer = this.getSinger(signerAddress);

    const resp = await signer.sign({
      messages,
      fee,
      memo,
    });

    return resp.tx;
  }

  private signWithAutoFee = async (
    signerAddress: string,
    messages: EncodeObject[],
    fee: StdFee | 'auto',
    memo = ''
  ): Promise<TxRaw> => {
    const usedFee = fee === 'auto' ? undefined : fee;
    return await this.sign(signerAddress, messages, usedFee, memo);
  };

  async simulate(
    signerAddress: string,
    messages: EncodeObject[],
    memo: string | undefined
  ): Promise<bigint> {
    const signer = this.getSinger(signerAddress);

    const resp = await signer.estimateFee({
      messages,
      memo,
      options: this.options,
    });

    return BigInt(resp.gas);
  }

  async broadcastTxSync(tx: Uint8Array): Promise<string> {
    const broadcasted = await this.queryClient.broadcast(tx, {
      checkTx: true,
      deliverTx: false,
    });
    if (broadcasted.check_tx?.code) {
      return Promise.reject(
        new BroadcastTxError(
          broadcasted.check_tx?.code,
          broadcasted.check_tx?.codespace ?? '',
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
    fee: StdFee | 'auto',
    memo = ''
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
    const resp = await this.queryClient.broadcast(tx, {
      checkTx: true,
      deliverTx: true,
      timeoutMs,
      pollIntervalMs,
    });

    return {
      height: Number(resp.deliver_tx.height),
      txIndex: resp.deliver_tx.txIndex,
      code: resp.deliver_tx.code,
      transactionHash: resp.hash,
      events: resp.deliver_tx.events,
      rawLog: resp.deliver_tx.rawLog,
      msgResponses: resp.deliver_tx.msgResponses,
      gasUsed: BigInt(resp.deliver_tx.gas_used),
      gasWanted: BigInt(resp.deliver_tx.gas_wanted),
    };
  }

  signAndBroadcast = async (
    signerAddress: string,
    messages: EncodeObject[],
    fee: StdFee | 'auto',
    memo = ''
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
      this.options.broadcastTimeoutMs,
      this.options.broadcastPollIntervalMs
    );
  };

  get endpoint(): HttpEndpoint {
    return this.queryClient.endpoint;
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
    };
  }

  async searchTx(query: SearchTxQuery): Promise<IndexedTx[]> {
    let rawQuery: string;
    if (typeof query === 'string') {
      rawQuery = query;
    } else if (Array.isArray(query)) {
      rawQuery = query.map((t) => `${t.key}=${t.value}`).join(' AND ');
    } else {
      throw new Error('Got unsupported query type.');
    }
    const orderBy: 'asc' | 'desc' = 'asc';
    const data = await fetch(
      `${this.endpoint.url}/tx_search?query="${rawQuery}"&order_by="${orderBy}"`
      // `${this.endpoint.url}/tx_search?query="${rawQuery}"&order_by="${orderBy}"&page=1&per_page=100`
    );
    const json = await data.json();

    const { txs }: SearchTxResponse = json['result'];
    return txs.map((tx) => {
      return {
        height: Number.parseInt(tx.height),
        txIndex: tx.index,
        hash: tx.hash,
        code: 0,
        // events: tx.tx_result.tags,
        events: [],
        rawLog: tx.tx_result.log || '',
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
    const { block_id, block }: BlockResponse = json['result'];
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
