import { AminoSigner } from './signers/amino';
import { DirectSigner } from './signers/direct';
import { RpcClient } from './query/rpc';
import {
  AminoConverter,
  Encoder,
  QueryClient,
  IndexedTx,
  TxResponse
} from './types';
import {
  IAminoGenericOfflineSigner,
  ICosmosGenericOfflineSigner,
  IDirectGenericOfflineSigner,
} from './types/wallet';
import { toConverter, toEncoder } from './utils';
import { TxBody, TxRaw } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { TxRpc } from '@interchainjs/cosmos-types/types';
import { BroadcastOptions, DeliverTxResponse, HttpEndpoint, SIGN_MODE, StdFee, TelescopeGeneratedCodec } from '@interchainjs/types';
import { fromBase64, camelCaseRecursive } from '@interchainjs/utils';

import {
  Block,
  BlockResponse,
  SearchBlockQuery,
  SearchBlockQueryObj,
  SearchTxQuery,
  SearchTxQueryObj,
  isSearchBlockQueryObj,
  isSearchTxQueryObj,
} from './types/query';
import {
  EncodeObject,
  SigningOptions,
} from './types/signing-client';


/**
 * SigningClient is a client that can sign and broadcast transactions.
 */
export class SigningClient {
  readonly client: QueryClient | null | undefined;
  readonly offlineSigner: ICosmosGenericOfflineSigner;
  readonly options: SigningOptions;

  readonly signers: Record<string, DirectSigner | AminoSigner> = {};

  readonly addresses: string[] = [];

  readonly encoders: Encoder[] = [];
  readonly converters: AminoConverter[] = [];

  protected txRpc: TxRpc;

  constructor(
    client: QueryClient | null | undefined,
    offlineSigner: ICosmosGenericOfflineSigner,
    options: SigningOptions = {}
  ) {
    this.client = client;

    this.offlineSigner = offlineSigner;
    this.encoders = options.registry?.map((type) => {
      if (Array.isArray(type)) {
        return toEncoder(type[1]);
      }
      return toEncoder(type);
    }) || [];
    this.converters = options.registry?.map((type) => {
      if (Array.isArray(type)) {
        return toConverter(type[1]);
      }
      return toConverter(type);
    }) || [];

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
    signer: ICosmosGenericOfflineSigner,
    options: SigningOptions = {}
  ): Promise<SigningClient> {
    const signingClient = new SigningClient(
      new RpcClient(endpoint, options.signerOptions?.prefix),
      signer,
      options
    );

    await signingClient.connect();

    return signingClient;
  }

  async connect() {
    let signers;

    switch (this.offlineSigner.signMode) {
      case SIGN_MODE.DIRECT:
        signers = await DirectSigner.fromWalletToSigners(
          this.offlineSigner as IDirectGenericOfflineSigner,
          this.encoders,
          this.endpoint,
          this.options.signerOptions
        )
        break;

      case SIGN_MODE.AMINO:
        signers = await AminoSigner.fromWalletToSigners(
          this.offlineSigner as IAminoGenericOfflineSigner,
          this.encoders,
          this.converters,
          this.endpoint,
          this.options.signerOptions
        );
        break;

      default:
        break;
    }

    for (const signer of signers) {
      this.signers[await signer.getAddress()] = signer;
    }
  }

  /**
   * register converters
   */
  addConverters = (converters: (AminoConverter | TelescopeGeneratedCodec<any, any, any>)[]) => {
    // Create a Set of existing typeUrls for quick lookup
    const existingTypeUrls = new Set(this.converters.map(c => c.typeUrl));

    // Filter out converters with duplicate typeUrls
    const newConverters = converters.filter(converter => !existingTypeUrls.has(converter.typeUrl));

    // Add only the unique converters
    this.converters.push(...newConverters.map(toConverter));

    Object.values(this.signers).forEach(signer => {
      if (signer instanceof AminoSigner) {
        signer.addEncoders(this.encoders);
        signer.addConverters(newConverters);
      }
    });
  };

  /**
   * register encoders
   */
  addEncoders = (encoders: (Encoder | TelescopeGeneratedCodec<any, any, any>)[]) => {
    // Create a Set of existing typeUrls for quick lookup
    const existingTypeUrls = new Set(this.encoders.map(c => c.typeUrl));

    // Filter out converters with duplicate typeUrls
    const newEncoders = encoders.filter(encoder => !existingTypeUrls.has(encoder.typeUrl));

    // Add only the unique converters
    this.encoders.push(...newEncoders.map(toEncoder));

    Object.values(this.signers).forEach(signer => {
      if (signer instanceof DirectSigner) {
        signer.addEncoders(newEncoders);
      }
    });
  };

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
    const signer = this.signers[signerAddress];

    if (!signer) {
      throw new Error(`No signer found for address ${signerAddress}`);
    }

    return signer;
  }

  async sign(
    signerAddress: string,
    messages: readonly EncodeObject[],
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
    messages: readonly EncodeObject[],
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

  async broadcastTxSync(tx: Uint8Array): Promise<DeliverTxResponse> {
    const broadcasted = await this.queryClient.broadcast(tx, {
      checkTx: true,
      deliverTx: false,
    });

    return broadcasted;
  }

  public async signAndBroadcastSync(
    signerAddress: string,
    messages: EncodeObject[],
    fee: StdFee | 'auto',
    memo = ''
  ): Promise<DeliverTxResponse> {
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
    broadcast: BroadcastOptions
  ): Promise<DeliverTxResponse> {
    const resp = await this.queryClient.broadcast(tx, broadcast);

    return resp;
  }

  signAndBroadcast = async (
    signerAddress: string,
    messages: readonly EncodeObject[],
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
      this.options.broadcast,
    );
  };

  get endpoint(): HttpEndpoint {
    return typeof this.queryClient.endpoint === 'string' ?
      { url: this.queryClient.endpoint, headers: {} }
      : this.queryClient.endpoint;
  }

  async getStatus() {
    const data = await fetch(`${this.endpoint.url}/status`);
    const json = await data.json();
    return json['result'];
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
      gasUsed: tx?.tx_result?.gas_used ? BigInt(tx?.tx_result?.gas_used) : 0n,
      gasWanted: tx?.tx_result?.gas_wanted ? BigInt(tx?.tx_result?.gas_wanted) : 0n,
    };
  }

  async searchTx(query: SearchTxQuery | SearchTxQueryObj): Promise<any> {
    let rawQuery: string;
    let prove = false;
    let page = 1;
    let perPage = 100;
    let orderBy: 'asc' | 'desc' = 'asc';

    if (typeof query === 'string') {
      rawQuery = query;
    } else if (Array.isArray(query)) {
      rawQuery = query.map((t) => `${t.key}=${t.value}`).join(' AND ');
    } else if (isSearchTxQueryObj(query)) {
      if (typeof query.query === 'string') {
        rawQuery = query.query;
      } else if (Array.isArray(query.query)) {
        rawQuery = query.query.map((t) => `${t.key}=${t.value}`).join(' AND ');
      } else {
        throw new Error('Need to provide a valid query.');
      }
      prove = query.prove ?? false;
      page = query.page ?? 1;
      perPage = query.perPage ?? 100;
      orderBy = query.orderBy ?? 'asc';
    } else {
      throw new Error('Got unsupported query type.');
    }

    const params = new URLSearchParams({
      query: `"${rawQuery}"`,
      prove: prove.toString(),
      page: page.toString(),
      per_page: perPage.toString(),
      order_by: `"${orderBy}"`,
    });

    const data = await fetch(`${this.endpoint.url}/tx_search?${params.toString()}`);
    const json = await data.json();
    return camelCaseRecursive(json['result']);
  }

  async searchBlock(query: SearchBlockQuery | SearchBlockQueryObj): Promise<any> {
    let rawQuery: string;
    let page = 1;
    let perPage = 100;
    let orderBy: 'asc' | 'desc' = 'asc';

    if (typeof query === 'string') {
      rawQuery = query;
    } else if (Array.isArray(query)) {
      rawQuery = query.map((t) => `${t.key}=${t.value}`).join(' AND ');
    } else if (isSearchBlockQueryObj(query)) {
      if (typeof query.query === 'string') {
        rawQuery = query.query;
      } else if (Array.isArray(query.query)) {
        rawQuery = query.query.map((t) => `${t.key}=${t.value}`).join(' AND ');
      } else {
        throw new Error('Need to provide a valid query.');
      }
      page = query.page ?? 1;
      perPage = query.perPage ?? 100;
      orderBy = query.orderBy ?? 'asc';
    } else {
      throw new Error('Got unsupported query type.');
    }

    const params = new URLSearchParams({
      query: `"${rawQuery}"`,
      page: page.toString(),
      per_page: perPage.toString(),
      order_by: `"${orderBy}"`,
    });

    const data = await fetch(`${this.endpoint.url}/block_search?${params.toString()}`);
    const json = await data.json();
    return camelCaseRecursive(json['result']);
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
