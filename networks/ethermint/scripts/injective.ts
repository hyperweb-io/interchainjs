
import { Msgs } from '../../msgs'
import {
  ChainGrpcAuthApi,
  ChainGrpcTendermintApi,
} from '../../../../client/chain/grpc'
import {
  getStdFee,
  DEFAULT_STD_FEE,
  BigNumberInBase,
  DEFAULT_BLOCK_TIMEOUT_HEIGHT,
} from '@injectivelabs/utils'
import { GeneralException } from '@injectivelabs/exceptions'
import { ChainId, EthereumChainId } from '@injectivelabs/ts-types'
import {
  Network,
  getNetworkInfo,
  getNetworkEndpoints,
  NetworkEndpoints,
} from '@injectivelabs/networks'
import { getGasPriceBasedOnMessage } from '../../../../utils/msgs'
import { CreateTransactionArgs } from '../types'
import { IndexerGrpcTransactionApi } from '../../../../client'
import { AccountDetails } from '../../../../types/auth'
import { CosmosTxV1Beta1Tx } from '@injectivelabs/core-proto-ts'

import { generateMnemonic } from 'bip39'
import { Wallet } from 'ethers'
import secp256k1 from 'secp256k1'
import keccak256 from 'keccak256'
import { DEFAULT_DERIVATION_PATH } from '../../utils/constants'
import { PublicKey } from './PublicKey'
import { Address } from './Address'
import * as BytesUtils from '@ethersproject/bytes'
import { signTypedData, SignTypedDataVersion } from '@metamask/eth-sig-util'
import { recoverTypedSignaturePubKey } from '../../utils'
import {
  CosmosTxV1Beta1Tx,
  InjectiveTypesV1TxExt,
} from '@injectivelabs/core-proto-ts'
import { getTransactionPartsFromTxRaw } from '../modules/tx/utils/tx'
import { getEip712TypedData, MsgDecoder } from '../modules/tx/eip712'
import { GeneralException } from '@injectivelabs/exceptions'
import { ChainId, EthereumChainId } from '@injectivelabs/ts-types'

import { BrowserHeaders } from 'browser-headers'

export interface TxClientBroadcastResponse {
  height: number
  txHash: string
  codespace: string
  code: number
  data?: string
  rawLog: string
  logs?: any[]
  info?: string
  gasWanted: number
  gasUsed: number
  timestamp: string
  events?: any[]
}
export declare enum BroadcastMode {
  /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
  BROADCAST_MODE_UNSPECIFIED = 0,
  /**
   * BROADCAST_MODE_BLOCK - DEPRECATED: use BROADCAST_MODE_SYNC instead,
   * BROADCAST_MODE_BLOCK is not supported by the SDK from v0.47.x onwards.
   *
   * @deprecated
   */
  BROADCAST_MODE_BLOCK = 1,
  /**
   * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
   * a CheckTx execution response only.
   */
  BROADCAST_MODE_SYNC = 2,
  /**
   * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
   * immediately.
   */
  BROADCAST_MODE_ASYNC = 3,
  UNRECOGNIZED = -1
}
export interface TxClientBroadcastOptions {
  mode?: BroadcastMode
  timeout?: number // timeout in ms
  txTimeout?: number // blocks to wait for tx to be included in a block
}
export interface TxClientSimulateResponse {
  result: {
    data: Uint8Array | string
    log: string
    eventsList: any[]
  }
  gasInfo: {
    gasWanted: number
    gasUsed: number
  }
}
interface TxConcreteApi {
  broadcast(
    txRaw: CosmosTxV1Beta1Tx.TxRaw,
    options?: TxClientBroadcastOptions,
  ): Promise<TxClientBroadcastResponse>
  broadcastBlock(
    txRaw: CosmosTxV1Beta1Tx.TxRaw,
  ): Promise<TxClientBroadcastResponse>
  fetchTx(txHash: string): Promise<TxClientBroadcastResponse | undefined>
  fetchTxPoll(txHash: string): Promise<TxClientBroadcastResponse | undefined>
  simulate(txRaw: CosmosTxV1Beta1Tx.TxRaw): Promise<TxClientSimulateResponse>
}
interface UnaryMethodDefinitionR extends grpc.UnaryMethodDefinition<any, any> { //
  requestStream: any
  responseStream: any
}
type UnaryMethodDefinition = UnaryMethodDefinitionR

export class GrpcWebError extends Error {
  constructor(
    message: string,
    public code: grpc.Code, // 
    public metadata: grpc.Metadata, //
  ) {
    super(message)
  }
}
class GrpcWebImpl {
  private host: string
  private options: {
    transport?: grpc.TransportFactory // 
    debug?: boolean
    setCookieMetadata?: boolean
    metadata?: grpc.Metadata //
    upStreamRetryCodes?: number[]
  }

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory //
      debug?: boolean
      setCookieMetadata?: boolean
      metadata?: grpc.Metadata //
      upStreamRetryCodes?: number[]
    },
  ) {
    this.host = host
    this.options = options
  }

  unary<T extends UnaryMethodDefinition>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined, // 
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType } // 
    const actualMetadata = new BrowserHeaders({
      ...(metadata?.headersMap || {}),
      ...(this.options?.metadata?.headersMap || {}),
    })

    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, { //
        request,
        host: this.host,
        metadata: actualMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: (response) => {
          if (response.status === grpc.Code.OK) { //
            return resolve(response.message!.toObject())
          }

          return reject(
            new GrpcWebError(
              response.statusMessage,
              response.status,
              response.trailers,
            ),
          )
        },
      })
    })
  }
}
export const isReactNative = () => {
  return (
    typeof document === 'undefined' &&
    typeof navigator !== 'undefined' &&
    navigator.product === 'ReactNative'
  )
}
const isNode = () => {
  if (typeof window === 'undefined') {
    return true
  }

  return (
    typeof process !== 'undefined' &&
    typeof process.versions !== 'undefined' &&
    typeof process.versions.node !== 'undefined'
  )
}
const getGrpcTransport = (): grpc.TransportFactory => { // 
  if (isReactNative()) {
    return ReactNativeTransport({ withCredentials: true }) //
  }

  if (isNode()) {
    return NodeHttpTransport() //
  }

  return grpc.CrossBrowserHttpTransport({ withCredentials: false }) //
}
class BaseGrpcWebConsumer extends GrpcWebImpl {
  protected module: string = ''

  constructor(endpoint: string) {
    super(endpoint, {
      transport: getGrpcTransport(),
      setCookieMetadata: true
    })
  }

  static getGrpcWebImpl = (endpoint: string) =>
    new BaseGrpcWebConsumer(endpoint)
}
interface TxResponse {
  height: number
  txHash: string
  codespace: string
  code: number
  data?: string
  rawLog: string
  logs?: any[]
  info?: string
  gasWanted: number
  gasUsed: number
  timestamp: string
  events?: any[]
}
const DEFAULT_BLOCK_TIME_IN_SECONDS = 2
const DEFAULT_TX_BLOCK_INCLUSION_TIMEOUT_IN_MS =
  DEFAULT_BLOCK_TIMEOUT_HEIGHT * DEFAULT_BLOCK_TIME_IN_SECONDS * 1000
export class TxGrpcApi implements TxConcreteApi {
  public txService: CosmosTxV1Beta1Service.ServiceClientImpl //

  public endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
    this.txService = new CosmosTxV1Beta1Service.ServiceClientImpl( //
      BaseGrpcWebConsumer.getGrpcWebImpl(endpoint),
    )
  }

  public async fetchTx(hash: string): Promise<TxResponse> {
    const request = CosmosTxV1Beta1Service.GetTxRequest.create() //

    request.hash = hash

    try {
      const response = await this.txService.GetTx(request)

      const txResponse = response.txResponse

      if (!txResponse) {
        throw new GrpcUnaryRequestException( //
          new Error(`The transaction with ${hash} is not found`),
          {
            context: 'TxGrpcApi',
            contextModule: 'fetch-tx',
          },
        )
      }

      if (txResponse.code !== 0) {
        throw new TransactionException(new Error(txResponse.rawLog), { //
          contextCode: txResponse.code,
          contextModule: txResponse.codespace,
        })
      }

      return {
        ...txResponse,
        height: parseInt(txResponse.height, 10),
        gasWanted: parseInt(txResponse.gasWanted, 10),
        gasUsed: parseInt(txResponse.gasUsed, 10),
        txHash: txResponse.txhash,
      }
    } catch (e: unknown) {
      // Transaction has failed on the chain
      if (e instanceof TransactionException) { //
        throw e
      }

      // Failed to query the transaction on the chain
      if (e instanceof CosmosTxV1Beta1Service.GrpcWebError) { //
        throw new GrpcUnaryRequestException(new Error(e.toString()), { //
          code: e.code,
        })
      }

      // The response itself failed
      throw new GrpcUnaryRequestException( //
        new Error('There was an issue while fetching transaction details'),
        {
          context: 'TxGrpcApi',
          contextModule: 'fetch-tx',
        },
      )
    }
  }

  public async fetchTxPoll(
    txHash: string,
    timeout = DEFAULT_TX_BLOCK_INCLUSION_TIMEOUT_IN_MS || 60000,
  ): Promise<TxResponse> {
    const POLL_INTERVAL = DEFAULT_BLOCK_TIME_IN_SECONDS * 1000

    for (let i = 0; i <= timeout / POLL_INTERVAL; i += 1) {
      try {
        const txResponse = await this.fetchTx(txHash)

        if (txResponse) {
          return txResponse
        }
      } catch (e: unknown) {
        // We throw only if the transaction failed on chain
        if (e instanceof TransactionException) { //
          throw e
        }
      }

      await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL))
    }

    // Transaction was not included in the block in the desired timeout
    throw new GrpcUnaryRequestException( //
      new Error(
        `Transaction was not included in a block before timeout of ${timeout}ms`,
      ),
      {
        context: 'TxGrpcApi',
        contextModule: 'fetch-tx-poll',
      },
    )
  }

  public async simulate(txRaw: CosmosTxV1Beta1Tx.TxRaw) {
    const { txService } = this

    const txRawClone = CosmosTxV1Beta1Tx.TxRaw.fromPartial({ ...txRaw })
    const simulateRequest = CosmosTxV1Beta1Service.SimulateRequest.create()

    if (txRawClone.signatures.length === 0) {
      txRawClone.signatures = [new Uint8Array(0)]
    }

    simulateRequest.txBytes =
      CosmosTxV1Beta1Tx.TxRaw.encode(txRawClone).finish()

    try {
      const response = await txService.Simulate(simulateRequest)

      const result = {
        ...response.result,
        data: response.result ? response.result.data : '',
        log: response.result ? response.result.log : '',
        eventsList: response.result ? response.result.events : [],
      }
      const gasInfo = {
        ...response.gasInfo,
        gasWanted: response.gasInfo
          ? parseInt(response.gasInfo.gasWanted, 10)
          : 0,
        gasUsed: response.gasInfo ? parseInt(response.gasInfo.gasUsed, 10) : 0,
      }

      return {
        result: result,
        gasInfo: gasInfo,
      }
    } catch (e: unknown) {
      throw new TransactionException(new Error((e as any).message))
    }
  }

  public async broadcast(
    txRaw: CosmosTxV1Beta1Tx.TxRaw,
    options?: TxClientBroadcastOptions,
  ): Promise<TxResponse> {
    const { txService } = this
    const mode =
      options?.mode || CosmosTxV1Beta1Service.BroadcastMode.BROADCAST_MODE_SYNC
    const timeout =
      options?.timeout ||
      new BigNumberInBase(options?.txTimeout || DEFAULT_BLOCK_TIMEOUT_HEIGHT)
        .times(DEFAULT_BLOCK_TIME_IN_SECONDS * 1000)
        .toNumber()

    const broadcastTxRequest =
      CosmosTxV1Beta1Service.BroadcastTxRequest.create()
    broadcastTxRequest.txBytes = CosmosTxV1Beta1Tx.TxRaw.encode(txRaw).finish()
    broadcastTxRequest.mode = mode

    try {
      const response = await txService.BroadcastTx(broadcastTxRequest)

      const txResponse = response.txResponse!

      if (txResponse.code !== 0) {
        throw new TransactionException(new Error(txResponse.rawLog), {
          contextCode: txResponse.code,
          contextModule: txResponse.codespace,
        })
      }

      const result = await this.fetchTxPoll(txResponse.txhash, timeout)

      return result
    } catch (e: unknown) {
      if (e instanceof TransactionException) {
        throw e
      }

      throw new TransactionException(new Error((e as any).message))
    }
  }

  public async broadcastBlock(
    txRaw: CosmosTxV1Beta1Tx.TxRaw,
    broadcastMode: CosmosTxV1Beta1Service.BroadcastMode = CosmosTxV1Beta1Service
      .BroadcastMode.BROADCAST_MODE_BLOCK,
  ) {
    const { txService } = this

    const broadcastTxRequest =
      CosmosTxV1Beta1Service.BroadcastTxRequest.create()
    broadcastTxRequest.txBytes = CosmosTxV1Beta1Tx.TxRaw.encode(txRaw).finish()
    broadcastTxRequest.mode = broadcastMode

    try {
      const response = await txService.BroadcastTx(broadcastTxRequest)

      const txResponse = response.txResponse

      if (!txResponse) {
        throw new GeneralException(
          new Error('There was an issue broadcasting the transaction'),
        )
      }

      const result: TxClientBroadcastResponse = {
        ...txResponse,
        height: parseInt(txResponse.height, 10),
        gasWanted: parseInt(txResponse.gasWanted, 10),
        gasUsed: parseInt(txResponse.gasUsed, 10),
        txHash: txResponse.txhash,
      }

      if (result.code !== 0) {
        throw new TransactionException(new Error(result.rawLog), {
          contextCode: result.code,
          contextModule: result.codespace,
        })
      }

      return result as TxClientBroadcastResponse
    } catch (e: unknown) {
      if (e instanceof TransactionException) {
        throw e
      }

      throw new TransactionException(new Error((e as any).message))
    }
  }
}

export interface SignerDetails {
  pubKey: string | GoogleProtobufAny.Any // the pubKey of the signer of the transaction in base64 or protobuf Any
  sequence: number // the sequence (nonce) of the signer of the transaction
  accountNumber: number // the account number of the signer of the transaction
}
export interface CreateTransactionResult {
  txRaw: CosmosTxV1Beta1Tx.TxRaw // the Tx raw that was created
  signDoc: CosmosTxV1Beta1Tx.SignDoc // the SignDoc that was created - used for signing of the transaction
  bodyBytes: Uint8Array // the body bytes of the transaction
  signers: SignerDetails | SignerDetails[] // the signers of the transaction
  signer: SignerDetails // the signer of the transaction
  authInfoBytes: Uint8Array // the auth info bytes of the transaction
  signBytes: Uint8Array // the sign bytes of the transaction (SignDoc serialized to binary)
  signHashedBytes: Uint8Array // the sign bytes of the transaction (SignDoc serialized to binary) and hashed using keccak256
}
export interface Coin {
  readonly denom: string;
  readonly amount: string;
}
export interface StdFee {
  readonly amount: readonly Coin[];
  readonly gas: string;
  /** The granter address that is used for paying with feegrants */
  readonly granter?: string;
  /** The fee payer address. The payer must have signed the transaction. */
  readonly payer?: string;
}
export interface CreateTransactionWithSignersArgs {
  fee?: StdFee | string // the fee to include in the transaction
  memo?: string // the memo to include in the transaction
  chainId: string // the chain id of the chain that the transaction is going to be broadcasted to
  message: Msgs | Msgs[] // the message that should be packed into the transaction
  signers: SignerDetails | SignerDetails[] // the signers of the transaction
  signMode?: CosmosTxSigningV1Beta1Signing.SignMode
  timeoutHeight?: number // the height at which the transaction should be considered invalid
}
export const createTransactionWithSigners = ({
  signers,
  chainId,
  message,
  timeoutHeight,
  memo = '',
  fee = DEFAULT_STD_FEE,
  signMode = 1 // SIGN_DIRECT,
}: CreateTransactionWithSignersArgs): CreateTransactionResult => {
  const actualSigners = Array.isArray(signers) ? signers : [signers]
  const [signer] = actualSigners

  const body = createBody({ message, memo, timeoutHeight })
  const actualFee = typeof fee === 'string' ? getStdFeeFromString(fee) : fee
  const feeMessage = createFee({
    fee: actualFee.amount[0],
    payer: actualFee.payer,
    granter: actualFee.granter,
    gasLimit: parseInt(actualFee.gas, 10),
  })

  const signInfo = createSigners({
    chainId,
    mode: signMode,
    signers: actualSigners,
  })

  const authInfo = createAuthInfo({
    signerInfo: signInfo,
    fee: feeMessage,
  })

  const bodyBytes = CosmosTxV1Beta1Tx.TxBody.encode(body).finish()
  const authInfoBytes = CosmosTxV1Beta1Tx.AuthInfo.encode(authInfo).finish()

  const signDoc = createSignDoc({
    chainId,
    bodyBytes: bodyBytes,
    authInfoBytes: authInfoBytes,
    accountNumber: signer.accountNumber,
  })

  const signDocBytes = CosmosTxV1Beta1Tx.SignDoc.encode(signDoc).finish()

  const toSignBytes = Buffer.from(signDocBytes)
  const toSignHash = keccak256(Buffer.from(signDocBytes))

  const txRaw = CosmosTxV1Beta1Tx.TxRaw.create()
  txRaw.authInfoBytes = authInfoBytes
  txRaw.bodyBytes = bodyBytes

  return {
    txRaw,
    signDoc,
    signers,
    signer,
    signBytes: toSignBytes,
    signHashedBytes: toSignHash,
    bodyBytes: bodyBytes,
    authInfoBytes: authInfoBytes,
  }
}
export const createTransaction = (
  args: CreateTransactionArgs,
): CreateTransactionResult => {
  return createTransactionWithSigners({
    ...args,
    signers: {
      pubKey: args.pubKey,
      accountNumber: args.accountNumber,
      sequence: args.sequence,
    },
  })
}

/**
 * Class for wrapping SigningKey that is used for signature creation and public key derivation.
 *
 * @category Crypto Utility Classes
 */
export class PrivateKey {
  private wallet: Wallet

  private constructor(wallet: Wallet) {
    this.wallet = wallet
  }

  /**
   * Generate new private key with random mnemonic phrase
   * @returns { privateKey: PrivateKey, mnemonic: string }
   */
  static generate(): { privateKey: PrivateKey; mnemonic: string } {
    const mnemonic = generateMnemonic()
    const privateKey = PrivateKey.fromMnemonic(mnemonic)

    return {
      privateKey,
      mnemonic,
    }
  }

  /**
   * Create a PrivateKey instance from a given mnemonic phrase and a HD derivation path.
   * If path is not given, default to Band's HD prefix 494 and all other indexes being zeroes.
   * @param {string} words the mnemonic phrase
   * @param {string|undefined} path the HD path that follows the BIP32 standard (optional)
   * @returns {PrivateKey} Initialized PrivateKey object
   */
  static fromMnemonic(
    words: string,
    path: string | undefined = DEFAULT_DERIVATION_PATH,
  ): PrivateKey {
    return new PrivateKey(Wallet.fromMnemonic(words, path))
  }

  /**
   * Create a PrivateKey instance from a given private key and a HD derivation path.
   * If path is not given, default to Band's HD prefix 494 and all other indexes being zeroes.
   * @param {string} privateKey  the private key
   * @returns {PrivateKey} Initialized PrivateKey object
   *
   * @deprecated - use fromHex instead
   */
  static fromPrivateKey(privateKey: string): PrivateKey {
    return new PrivateKey(new Wallet(privateKey))
  }

  /**
   * Create a PrivateKey instance from a given private key and a HD derivation path.
   * If path is not given, default to Band's HD prefix 494 and all other indexes being zeroes.
   * @param {string} privateKey  the private key
   * @returns {PrivateKey} Initialized PrivateKey object
   */
  static fromHex(privateKey: string | Uint8Array): PrivateKey {
    const isString = typeof privateKey === 'string'
    const privateKeyHex =
      isString && privateKey.startsWith('0x') ? privateKey.slice(2) : privateKey
    const privateKeyBuff = isString
      ? Buffer.from(privateKeyHex.toString(), 'hex')
      : privateKey

    return new PrivateKey(new Wallet(privateKeyBuff))
  }

  /**
   * Return the private key in hex
   * @returns {string}
   **/
  toPrivateKeyHex(): string {
    return this.wallet.privateKey.startsWith('0x')
      ? this.wallet.privateKey
      : `0x${this.wallet.privateKey}`
  }

  /**
   * Return the PublicKey associated with this private key.
   * @returns {PublicKey} a Public key that can be used to verify the signatures made with this PrivateKey
   **/
  toPublicKey(): PublicKey {
    return PublicKey.fromHex(this.wallet.privateKey)
  }

  /**
   * Return the hex address associated with this private key.
   * @returns {string}
   */
  toHex(): string {
    return this.wallet.address.startsWith('0x')
      ? this.wallet.address
      : `0x${this.wallet.address}`
  }

  /**
   * Return the Address associated with this private key.
   * @returns {Address}
   **/
  toAddress(): Address {
    return Address.fromHex(this.toHex())
  }

  /**
   * Return the Bech32 address associated with this private key.
   * @returns {string}
   **/
  toBech32(): string {
    return Address.fromHex(this.toHex()).toBech32()
  }

  /**
   * Sign the given message using the wallet's _signingKey function.
   * @param {string} messageBytes: the message that will be hashed and signed, a Buffer made of bytes
   * @returns {Uint8Array} a signature of this private key over the given message
   */
  async sign(messageBytes: Buffer): Promise<Uint8Array> {
    const { wallet } = this

    const msgHash = keccak256(messageBytes)
    const signature = await wallet._signingKey().signDigest(msgHash)
    const splitSignature = BytesUtils.splitSignature(signature)

    return BytesUtils.arrayify(
      BytesUtils.concat([splitSignature.r, splitSignature.s]),
    )
  }

  /**
   * Sign the given message using the edcsa sign_deterministic function.
   * @param {Buffer} messageBytes: the message that will be hashed and signed, a Buffer made of bytes
   * @returns {Uint8Array} a signature of this private key over the given message
   */
  async signEcda(messageBytes: Buffer): Promise<Uint8Array> {
    const { wallet } = this

    const msgHash = keccak256(messageBytes)
    const privateKeyHex = wallet.privateKey.startsWith('0x')
      ? wallet.privateKey.slice(2)
      : wallet.privateKey
    const privateKey = Uint8Array.from(Buffer.from(privateKeyHex, 'hex'))
    const { signature } = secp256k1.ecdsaSign(msgHash, privateKey)

    return signature
  }

  /**
   * Sign the given message using the wallet's _signingKey function.
   * @param {string} messageHashedBytes: the message that will be signed, a Buffer made of bytes
   * @returns {Uint8Array} a signature of this private key over the given message
   */
  async signHashed(messageHashedBytes: Buffer): Promise<Uint8Array> {
    const { wallet } = this

    const signature = await wallet._signingKey().signDigest(messageHashedBytes)
    const splitSignature = BytesUtils.splitSignature(signature)

    return BytesUtils.arrayify(
      BytesUtils.concat([splitSignature.r, splitSignature.s]),
    )
  }

  /**
   * Sign the given message using the edcsa sign_deterministic function.
   * @param {Buffer} messageHashedBytes: the message that will be signed, a Buffer made of bytes
   * @returns {Uint8Array} a signature of this private key over the given message
   */
  async signHashedEcda(messageHashedBytes: Buffer): Promise<Uint8Array> {
    const { wallet } = this

    const privateKeyHex = wallet.privateKey.startsWith('0x')
      ? wallet.privateKey.slice(2)
      : wallet.privateKey
    const privateKey = Uint8Array.from(Buffer.from(privateKeyHex, 'hex'))
    const { signature } = secp256k1.ecdsaSign(messageHashedBytes, privateKey)

    return signature
  }

  /**
   * Sign the given typed data using the edcsa sign_deterministic function.
   * @param {Buffer} eip712Data: the typed data that will be hashed and signed, a Buffer made of bytes
   * @returns {Uint8Array} a signature of this private key over the given message
   */
  async signTypedData(eip712Data: any): Promise<Uint8Array> {
    const { wallet } = this

    const privateKeyHex = wallet.privateKey.startsWith('0x')
      ? wallet.privateKey.slice(2)
      : wallet.privateKey
    const signature = signTypedData({
      privateKey: Buffer.from(privateKeyHex, 'hex'),
      data: eip712Data,
      version: SignTypedDataVersion.V4,
    })

    return Buffer.from(signature.replace('0x', ''), 'hex')
  }

  /**
   * Sign the given typed data using the edcsa sign_deterministic function.
   * @param {Buffer} eip712Data: the typed data that will be signed, a Buffer made of bytes
   * @returns {Uint8Array} a signature of this private key over the given message
   */
  async signHashedTypedData(eip712Data: Buffer): Promise<Uint8Array> {
    const { wallet } = this

    const privateKeyHex = wallet.privateKey.startsWith('0x')
      ? wallet.privateKey.slice(2)
      : wallet.privateKey
    const privateKey = Uint8Array.from(Buffer.from(privateKeyHex, 'hex'))
    const { signature } = secp256k1.ecdsaSign(eip712Data, privateKey)

    return signature
  }

  /**
   * Verify signature using EIP712 typed data
   * and the publicKey
   *
   * (params are passed as an object)
   *
   * @param {string} signature: the signature to verify in hex
   * @param {any} eip712: the EIP712 typed data to verify against
   * @param {string} publicKey: the public key to verify against in hex
   * */
  public static verifySignature({
    signature,
    eip712,
    publicKey,
  }: {
    signature: string /* in hex */
    eip712: any
    publicKey: string /* in hex */
  }): boolean {
    const publicKeyInHex = publicKey.startsWith('0x')
      ? publicKey
      : `0x${publicKey}`

    const recoveredPubKey = recoverTypedSignaturePubKey(eip712, signature)
    const recoveredPubKeyInHex = recoveredPubKey.startsWith('0x')
      ? recoveredPubKey
      : `0x${recoveredPubKey}`

    /** uncompressed/compressed key */
    if (publicKeyInHex.length !== recoveredPubKeyInHex.length) {
      return (
        recoveredPubKeyInHex.substring(0, publicKeyInHex.length) ===
        publicKeyInHex
      )
    }

    return publicKeyInHex === recoveredPubKeyInHex
  }

  /**
   * Verify signature using EIP712 typed data
   * and the publicKey
   *
   * (params are passed as an object)
   *
   * @param {string} signature: the signature to verify in hex
   * @param {any} eip712: the EIP712 typed data to verify against
   * @param {string} publicKey: the public key to verify against in hex
   * */
  public verifyThisPkSignature({
    signature,
    eip712,
  }: {
    signature: string /* in hex */
    eip712: any
  }): boolean {
    const publicKeyInHex = `0x${this.toPublicKey().toHex()}`
    const recoveredPubKey = recoverTypedSignaturePubKey(eip712, signature)
    const recoveredPubKeyInHex = recoveredPubKey.startsWith('0x')
      ? recoveredPubKey
      : `0x${recoveredPubKey}`

    /** uncompressed/compressed key */
    if (publicKeyInHex.length !== recoveredPubKeyInHex.length) {
      return (
        recoveredPubKeyInHex.substring(0, publicKeyInHex.length) ===
        publicKeyInHex
      )
    }

    return publicKeyInHex === recoveredPubKeyInHex
  }

  /**
   * Verify cosmos signature EIP712 typed
   * data from the TxRaw and verify the signature
   * that's included in the TxRaw
   *
   * (params are passed as an object)
   *
   * @param {CosmosTxV1Beta1Tx.TxRaw} txRaw: the signature to verify in hex
   * @param {object} signer: the public key and the account number to verify against
   **/
  public static verifyCosmosSignature({
    txRaw,
    signer,
  }: {
    txRaw: CosmosTxV1Beta1Tx.TxRaw
    signer: {
      accountNumber: number | string
      publicKey: string /* in base64 */
    }
  }): boolean {
    const { body, authInfo, signatures } = getTransactionPartsFromTxRaw(txRaw)

    if (authInfo.signerInfos.length > 1 || signatures.length > 1) {
      throw new GeneralException(
        new Error('Validation of multiple signers is not supported'),
      )
    }

    if (body.messages.length > 1) {
      throw new GeneralException(
        new Error('Validation of multiple messages is not supported'),
      )
    }

    const getChainIds = () => {
      if (!body.extensionOptions.length) {
        return {
          ethereumChainId: EthereumChainId.Mainnet,
          chainId: ChainId.Mainnet,
        }
      }

      const extension = body.extensionOptions.find((extension) =>
        extension.typeUrl.includes('ExtensionOptionsWeb3Tx'),
      )

      if (!extension) {
        return {
          ethereumChainId: EthereumChainId.Mainnet,
          chainId: ChainId.Mainnet,
        }
      }

      const decodedExtension =
        InjectiveTypesV1TxExt.ExtensionOptionsWeb3Tx.decode(extension.value)

      const ethereumChainId = Number(
        decodedExtension.typedDataChainID,
      ) as EthereumChainId

      return {
        ethereumChainId: ethereumChainId,
        chainId: [
          EthereumChainId.Goerli,
          EthereumChainId.Kovan,
          EthereumChainId.Sepolia,
        ].includes(ethereumChainId)
          ? ChainId.Testnet
          : ChainId.Mainnet,
      }
    }

    const { ethereumChainId, chainId } = getChainIds()
    const [signerInfo] = authInfo.signerInfos
    const [signature] = signatures
    const [msg] = body.messages
    const decodedMsg = MsgDecoder.decode(msg)

    const eip712TypedData = getEip712TypedData({
      msgs: [decodedMsg],
      fee: authInfo.fee,
      tx: {
        memo: body.memo,
        accountNumber: signer.accountNumber.toString(),
        sequence: signerInfo.sequence.toString(),
        timeoutHeight: body.timeoutHeight.toString(),
        chainId,
      },
      ethereumChainId,
    })

    return this.verifySignature({
      eip712: eip712TypedData,
      signature: Buffer.from(signature).toString('hex'),
      publicKey: Buffer.from(signer.publicKey, 'base64').toString('hex'),
    })
  }

  /**
   * Verify signature using ADR-36 sign doc
   * and the publicKey
   *
   * (params are passed as an object)
   *
   * @param {string} signature: the signature to verify in hex
   * @param {any} signDoc: the signDoc to verify against
   * @param {string} publicKey:the public key to verify against in hex
   * */
  public static verifyArbitrarySignature({
    signature,
    signDoc,
    publicKey,
  }: {
    signature: string /* in hex */
    signDoc: Buffer
    publicKey: string /* in hex */
  }): boolean {
    return secp256k1.ecdsaVerify(
      Buffer.from(signature, 'hex'),
      keccak256(signDoc),
      Buffer.from(publicKey, 'hex'),
    )
  }
}


interface MsgBroadcasterTxOptions {
  msgs: Msgs | Msgs[]
  memo?: string
  gas?: {
    gasPrice?: string
    gas?: number /** gas limit */
    feePayer?: string
    granter?: string
  }
}

interface MsgBroadcasterWithPkOptions {
  network: Network

  /**
   * Only used if we want to override the default
   * endpoints taken from the network param
   */
  endpoints?: {
    indexer: string
    grpc: string
    rest: string
  }
  privateKey: string | PrivateKey /* hex or PrivateKey class */
  ethereumChainId?: EthereumChainId
  simulateTx?: boolean
  loggingEnabled?: boolean
  txTimeout?: number // blocks to wait for tx to be included in a block
  gasBufferCoefficient?: number
}

/**
 * This class is used to broadcast transactions
 * using a privateKey as a signer
 * for the transactions and broadcasting
 * the transactions directly to the node
 *
 * Mainly used for working in a Node Environment
 */
export class MsgBroadcasterWithPk {
  public endpoints: NetworkEndpoints

  public chainId: ChainId

  public ethereumChainId?: EthereumChainId

  public privateKey: PrivateKey

  public simulateTx: boolean = false

  public gasBufferCoefficient: number = 1.1

  public txTimeout = DEFAULT_BLOCK_TIMEOUT_HEIGHT

  constructor(options: MsgBroadcasterWithPkOptions) {
    const networkInfo = getNetworkInfo(options.network)
    const endpoints = getNetworkEndpoints(options.network)

    this.gasBufferCoefficient = options.gasBufferCoefficient || 1.1
    this.simulateTx = options.simulateTx || false
    this.chainId = networkInfo.chainId
    this.txTimeout = options.txTimeout || DEFAULT_BLOCK_TIMEOUT_HEIGHT
    this.ethereumChainId =
      options.ethereumChainId || networkInfo.ethereumChainId
    this.endpoints = { ...endpoints, ...(options.endpoints || {}) }
    this.privateKey =
      options.privateKey instanceof PrivateKey
        ? options.privateKey
        : PrivateKey.fromHex(options.privateKey)
  }

  /**
   * Broadcasting the transaction using the client
   *
   * @param tx
   * @returns {string} transaction hash
   */
  async broadcast(transaction: MsgBroadcasterTxOptions) {
    const { txRaw } = await this.prepareTxForBroadcast(transaction)

    return await this.broadcastTxRaw(txRaw)
  }

  /**
   * Broadcasting the transaction with fee delegation services
   *
   * @param tx
   * @returns {string} transaction hash
   */
  async broadcastWithFeeDelegation(transaction: MsgBroadcasterTxOptions) {
    const { simulateTx, privateKey, ethereumChainId, endpoints } = this
    const msgs = Array.isArray(transaction.msgs)
      ? transaction.msgs
      : [transaction.msgs]

    const tx = {
      ...transaction,
      msgs: msgs,
    } as MsgBroadcasterTxOptions & { ethereumAddress: string }

    const web3Msgs = msgs.map((msg) => msg.toWeb3())

    if (!ethereumChainId) {
      throw new GeneralException(new Error('Please provide ethereumChainId'))
    }

    const transactionApi = new IndexerGrpcTransactionApi(endpoints.indexer)
    const txResponse = await transactionApi.prepareTxRequest({
      memo: tx.memo,
      message: web3Msgs,
      address: tx.ethereumAddress,
      chainId: ethereumChainId,
      gasLimit: getGasPriceBasedOnMessage(msgs),
      estimateGas: simulateTx || false,
    })

    const signature = await privateKey.signTypedData(
      JSON.parse(txResponse.data),
    )

    const response = await transactionApi.broadcastTxRequest({
      txResponse,
      message: web3Msgs,
      chainId: ethereumChainId,
      signature: `0x${Buffer.from(signature).toString('hex')}`,
    })

    return await new TxGrpcApi(endpoints.grpc).fetchTxPoll(response.txHash)
  }

  /**
   * Broadcasting the transaction using the client
   *
   * @param tx
   * @returns {string} transaction hash
   */
  async simulate(transaction: MsgBroadcasterTxOptions) {
    const { privateKey, endpoints, chainId } = this
    const tx = {
      ...transaction,
      msgs: Array.isArray(transaction.msgs)
        ? transaction.msgs
        : [transaction.msgs],
    } as MsgBroadcasterTxOptions

    /** Account Details * */
    const publicKey = privateKey.toPublicKey()
    const accountDetails = await new ChainGrpcAuthApi(
      endpoints.grpc,
    ).fetchAccount(publicKey.toAddress().toBech32())
    const { baseAccount } = accountDetails

    /** Block Details */
    const latestBlock = await new ChainGrpcTendermintApi(
      endpoints.grpc,
    ).fetchLatestBlock()
    const latestHeight = latestBlock!.header!.height
    const timeoutHeight = new BigNumberInBase(latestHeight).plus(
      DEFAULT_BLOCK_TIMEOUT_HEIGHT,
    )

    /** Prepare the Transaction * */
    const { txRaw } = createTransaction({
      memo: tx.memo || '',
      fee: DEFAULT_STD_FEE,
      message: tx.msgs as Msgs[],
      timeoutHeight: timeoutHeight.toNumber(),
      pubKey: publicKey.toBase64(),
      sequence: baseAccount.sequence,
      accountNumber: baseAccount.accountNumber,
      chainId: chainId,
    })

    /** Append Blank Signatures */
    txRaw.signatures = [new Uint8Array(0)]

    /** Simulate transaction */
    const simulationResponse = await new TxGrpcApi(endpoints.grpc).simulate(
      txRaw,
    )

    return simulationResponse
  }

  /**
   * In case we don't want to simulate the transaction
   * we get the gas limit based on the message type.
   *
   * If we want to simulate the transaction we set the
   * gas limit based on the simulation and add a small multiplier
   * to be safe (factor of 1.1 (or user specified))
   */
  private async getTxWithStdFee(args: CreateTransactionArgs) {
    const { simulateTx, gasBufferCoefficient } = this

    if (!simulateTx) {
      return createTransaction(args)
    }

    const result = await this.simulateTxRaw(args)

    if (!result.gasInfo?.gasUsed) {
      return createTransaction(args)
    }

    const stdGasFee = getStdFee({
      ...args.fee,
      gas: new BigNumberInBase(result.gasInfo.gasUsed)
        .times(gasBufferCoefficient)
        .toFixed(),
    })

    return createTransaction({ ...args, fee: stdGasFee })
  }

  /**
   * Create TxRaw and simulate it
   */
  private async simulateTxRaw(args: CreateTransactionArgs) {
    const { endpoints } = this
    const { txRaw } = createTransaction(args)

    txRaw.signatures = [new Uint8Array(0)]

    const simulationResponse = await new TxGrpcApi(endpoints.grpc).simulate(
      txRaw,
    )

    return simulationResponse
  }

  private async prepareTxForBroadcast(
    transaction: MsgBroadcasterTxOptions,
    accountDetails?: AccountDetails,
  ) {
    const { chainId, privateKey, endpoints, txTimeout } = this
    const msgs = Array.isArray(transaction.msgs)
      ? transaction.msgs
      : [transaction.msgs]

    const tx = {
      ...transaction,
      msgs: msgs,
    } as MsgBroadcasterTxOptions

    /** Account Details * */
    const publicKey = privateKey.toPublicKey()
    const actualAccountDetails = await this.getAccountDetails(accountDetails)

    /** Block Details */
    const latestBlock = await new ChainGrpcTendermintApi(
      endpoints.grpc,
    ).fetchLatestBlock()
    const latestHeight = latestBlock!.header!.height
    const timeoutHeight = new BigNumberInBase(latestHeight).plus(txTimeout)

    const gas = (
      transaction.gas?.gas || getGasPriceBasedOnMessage(msgs)
    ).toString()

    /** Prepare the Transaction * */
    const { signBytes, txRaw } = await this.getTxWithStdFee({
      memo: tx.memo || '',
      message: msgs,
      fee: getStdFee({ ...tx.gas, gas }),
      timeoutHeight: timeoutHeight.toNumber(),
      pubKey: publicKey.toBase64(),
      sequence: actualAccountDetails.sequence,
      accountNumber: actualAccountDetails.accountNumber,
      chainId: chainId,
    })

    /** Sign transaction */
    const signature = await privateKey.sign(Buffer.from(signBytes))

    /** Append Signatures */
    txRaw.signatures = [signature]

    return { txRaw, accountDetails: actualAccountDetails }
  }

  private async getAccountDetails(accountDetails?: AccountDetails) {
    if (accountDetails) {
      return accountDetails
    }

    const { privateKey, endpoints } = this
    const accountDetailsResponse = await new ChainGrpcAuthApi(
      endpoints.grpc,
    ).fetchAccount(privateKey.toBech32())

    return accountDetailsResponse.baseAccount
  }

  private async broadcastTxRaw(txRaw: CosmosTxV1Beta1Tx.TxRaw) {
    const { endpoints, txTimeout } = this
    const txResponse = await new TxGrpcApi(endpoints.grpc).broadcast(txRaw, {
      txTimeout,
    })

    if (txResponse.code !== 0) {
      throw new GeneralException(
        new Error(
          `Transaction failed to be broadcasted - ${txResponse.rawLog} - ${txResponse.txHash}`,
        ),
      )
    }

    return txResponse
  }
}


const privateKey = 'b6627188cc31f4dd3e36445e1e77fe3e1ab085f774ab264ccbc2dd767694b993'
const injectiveAddress = 'inj10a64save5u2rpdru50x5kvwe7uyqfmshl9vwy2'
const amount = {
  denom: 'inj',
  amount: '1',
}
const msg = MsgSend.fromJSON({
  amount,
  srcInjectiveAddress: injectiveAddress,
  dstInjectiveAddress: injectiveAddress,
});
console.log('msg', msg)

;(async ()=>{
  const txResponse = await new MsgBroadcasterWithPk({
    privateKey,
    network: Network.Testnet
  }).broadcast({
    msgs: msg,
    // memo: ''
  })
  console.log('txResponse', txResponse)
})()