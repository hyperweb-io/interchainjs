import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { SignMode } from "../signing/v1beta1/signing";
import { CompactBitArray } from "../../crypto/multisig/v1beta1/multisig";
import { Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
/**
 * Tx is the standard type used for broadcasting transactions.
 * @name Tx
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.Tx
 */
export interface Tx {
  /**
   * body is the processable content of the transaction
   */
  body?: TxBody;
  /**
   * auth_info is the authorization related content of the transaction,
   * specifically signers, signer modes and fee
   */
  authInfo?: AuthInfo;
  /**
   * signatures is a list of signatures that matches the length and order of
   * AuthInfo's signer_infos to allow connecting signature meta information like
   * public key and signing mode by position.
   */
  signatures: Uint8Array[];
}
/**
 * TxRaw is a variant of Tx that pins the signer's exact binary representation
 * of body and auth_info. This is used for signing, broadcasting and
 * verification. The binary `serialize(tx: TxRaw)` is stored in Tendermint and
 * the hash `sha256(serialize(tx: TxRaw))` becomes the "txhash", commonly used
 * as the transaction ID.
 * @name TxRaw
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxRaw
 */
export interface TxRaw {
  /**
   * body_bytes is a protobuf serialization of a TxBody that matches the
   * representation in SignDoc.
   */
  bodyBytes: Uint8Array;
  /**
   * auth_info_bytes is a protobuf serialization of an AuthInfo that matches the
   * representation in SignDoc.
   */
  authInfoBytes: Uint8Array;
  /**
   * signatures is a list of signatures that matches the length and order of
   * AuthInfo's signer_infos to allow connecting signature meta information like
   * public key and signing mode by position.
   */
  signatures: Uint8Array[];
}
/**
 * SignDoc is the type used for generating sign bytes for SIGN_MODE_DIRECT.
 * @name SignDoc
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.SignDoc
 */
export interface SignDoc {
  /**
   * body_bytes is protobuf serialization of a TxBody that matches the
   * representation in TxRaw.
   */
  bodyBytes: Uint8Array;
  /**
   * auth_info_bytes is a protobuf serialization of an AuthInfo that matches the
   * representation in TxRaw.
   */
  authInfoBytes: Uint8Array;
  /**
   * chain_id is the unique identifier of the chain this transaction targets.
   * It prevents signed transactions from being used on another chain by an
   * attacker
   */
  chainId: string;
  /**
   * account_number is the account number of the account in state
   */
  accountNumber: bigint;
}
/**
 * SignDocDirectAux is the type used for generating sign bytes for
 * SIGN_MODE_DIRECT_AUX.
 * @name SignDocDirectAux
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.SignDocDirectAux
 */
export interface SignDocDirectAux {
  /**
   * body_bytes is protobuf serialization of a TxBody that matches the
   * representation in TxRaw.
   */
  bodyBytes: Uint8Array;
  /**
   * public_key is the public key of the signing account.
   */
  publicKey?: Any;
  /**
   * chain_id is the identifier of the chain this transaction targets.
   * It prevents signed transactions from being used on another chain by an
   * attacker.
   */
  chainId: string;
  /**
   * account_number is the account number of the account in state.
   */
  accountNumber: bigint;
  /**
   * sequence is the sequence number of the signing account.
   */
  sequence: bigint;
  /**
   * tips have been depreacted and should not be used
   * @deprecated
   */
  tip?: Tip;
}
/**
 * TxBody is the body of a transaction that all signers sign over.
 * @name TxBody
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxBody
 */
export interface TxBody {
  /**
   * messages is a list of messages to be executed. The required signers of
   * those messages define the number and order of elements in AuthInfo's
   * signer_infos and Tx's signatures. Each required signer address is added to
   * the list only the first time it occurs.
   * By convention, the first required signer (usually from the first message)
   * is referred to as the primary signer and pays the fee for the whole
   * transaction.
   */
  messages: Any[];
  /**
   * memo is any arbitrary note/comment to be added to the transaction.
   * WARNING: in clients, any publicly exposed text should not be called memo,
   * but should be called `note` instead (see
   * https://github.com/cosmos/cosmos-sdk/issues/9122).
   */
  memo: string;
  /**
   * timeout_height is the block height after which this transaction will not
   * be processed by the chain.
   */
  timeoutHeight: bigint;
  /**
   * unordered, when set to true, indicates that the transaction signer(s)
   * intend for the transaction to be evaluated and executed in an un-ordered
   * fashion. Specifically, the account's nonce will NOT be checked or
   * incremented, which allows for fire-and-forget as well as concurrent
   * transaction execution.
   * 
   * Note, when set to true, the existing 'timeout_timestamp' value must
   * be set and will be used to correspond to a timestamp in which the transaction is deemed
   * valid.
   * 
   * When true, the sequence value MUST be 0, and any transaction with unordered=true and a non-zero sequence value will
   * be rejected.
   * External services that make assumptions about sequence values may need to be updated because of this.
   */
  unordered: boolean;
  /**
   * timeout_timestamp is the block time after which this transaction will not
   * be processed by the chain.
   * 
   * Note, if unordered=true this value MUST be set
   * and will act as a short-lived TTL in which the transaction is deemed valid
   * and kept in memory to prevent duplicates.
   */
  timeoutTimestamp?: Date;
  /**
   * extension_options are arbitrary options that can be added by chains
   * when the default options are not sufficient. If any of these are present
   * and can't be handled, the transaction will be rejected
   */
  extensionOptions: Any[];
  /**
   * extension_options are arbitrary options that can be added by chains
   * when the default options are not sufficient. If any of these are present
   * and can't be handled, they will be ignored
   */
  nonCriticalExtensionOptions: Any[];
}
/**
 * AuthInfo describes the fee and signer modes that are used to sign a
 * transaction.
 * @name AuthInfo
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.AuthInfo
 */
export interface AuthInfo {
  /**
   * signer_infos defines the signing modes for the required signers. The number
   * and order of elements must match the required signers from TxBody's
   * messages. The first element is the primary signer and the one which pays
   * the fee.
   */
  signerInfos: SignerInfo[];
  /**
   * Fee is the fee and gas limit for the transaction. The first signer is the
   * primary signer and the one which pays the fee. The fee can be calculated
   * based on the cost of evaluating the body and doing signature verification
   * of the signers. This can be estimated via simulation.
   */
  fee?: Fee;
  /**
   * Tip is the optional tip used for transactions fees paid in another denom.
   * 
   * This field is ignored if the chain didn't enable tips, i.e. didn't add the
   * `TipDecorator` in its posthandler.
   * @deprecated
   */
  tip?: Tip;
}
/**
 * SignerInfo describes the public key and signing mode of a single top-level
 * signer.
 * @name SignerInfo
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.SignerInfo
 */
export interface SignerInfo {
  /**
   * public_key is the public key of the signer. It is optional for accounts
   * that already exist in state. If unset, the verifier can use the required \
   * signer address for this position and lookup the public key.
   */
  publicKey?: Any;
  /**
   * mode_info describes the signing mode of the signer and is a nested
   * structure to support nested multisig pubkey's
   */
  modeInfo?: ModeInfo;
  /**
   * sequence is the sequence of the account, which describes the
   * number of committed transactions signed by a given address. It is used to
   * prevent replay attacks.
   */
  sequence: bigint;
}
/**
 * ModeInfo describes the signing mode of a single or nested multisig signer.
 * @name ModeInfo
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.ModeInfo
 */
export interface ModeInfo {
  /**
   * single represents a single signer
   */
  single?: ModeInfo_Single;
  /**
   * multi represents a nested multisig signer
   */
  multi?: ModeInfo_Multi;
}
/**
 * Single is the mode info for a single signer. It is structured as a message
 * to allow for additional fields such as locale for SIGN_MODE_TEXTUAL in the
 * future
 * @name ModeInfo_Single
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.Single
 */
export interface ModeInfo_Single {
  /**
   * mode is the signing mode of the single signer
   */
  mode: SignMode;
}
/**
 * Multi is the mode info for a multisig public key
 * @name ModeInfo_Multi
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.Multi
 */
export interface ModeInfo_Multi {
  /**
   * bitarray specifies which keys within the multisig are signing
   */
  bitarray?: CompactBitArray;
  /**
   * mode_infos is the corresponding modes of the signers of the multisig
   * which could include nested multisig public keys
   */
  modeInfos: ModeInfo[];
}
/**
 * Fee includes the amount of coins paid in fees and the maximum
 * gas to be used by the transaction. The ratio yields an effective "gasprice",
 * which must be above some miminum to be accepted into the mempool.
 * @name Fee
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.Fee
 */
export interface Fee {
  /**
   * amount is the amount of coins to be paid as a fee
   */
  amount: Coin[];
  /**
   * gas_limit is the maximum gas that can be used in transaction processing
   * before an out of gas error occurs
   */
  gasLimit: bigint;
  /**
   * if unset, the first signer is responsible for paying the fees. If set, the
   * specified account must pay the fees. the payer must be a tx signer (and
   * thus have signed this field in AuthInfo). setting this field does *not*
   * change the ordering of required signers for the transaction.
   */
  payer: string;
  /**
   * if set, the fee payer (either the first signer or the value of the payer
   * field) requests that a fee grant be used to pay fees instead of the fee
   * payer's own balance. If an appropriate fee grant does not exist or the
   * chain does not support fee grants, this will fail
   */
  granter: string;
}
/**
 * Tip is the tip used for meta-transactions.
 * @name Tip
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.Tip
 * @deprecated
 */
export interface Tip {
  /**
   * amount is the amount of the tip
   */
  amount: Coin[];
  /**
   * tipper is the address of the account paying for the tip
   */
  tipper: string;
}
/**
 * AuxSignerData is the intermediary format that an auxiliary signer (e.g. a
 * tipper) builds and sends to the fee payer (who will build and broadcast the
 * actual tx). AuxSignerData is not a valid tx in itself, and will be rejected
 * by the node if sent directly as-is.
 * @name AuxSignerData
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.AuxSignerData
 */
export interface AuxSignerData {
  /**
   * address is the bech32-encoded address of the auxiliary signer. If using
   * AuxSignerData across different chains, the bech32 prefix of the target
   * chain (where the final transaction is broadcasted) should be used.
   */
  address: string;
  /**
   * sign_doc is the SIGN_MODE_DIRECT_AUX sign doc that the auxiliary signer
   * signs. Note: we use the same sign doc even if we're signing with
   * LEGACY_AMINO_JSON.
   */
  signDoc?: SignDocDirectAux;
  /**
   * mode is the signing mode of the single signer.
   */
  mode: SignMode;
  /**
   * sig is the signature of the sign doc.
   */
  sig: Uint8Array;
}
function createBaseTx(): Tx {
  return {
    body: undefined,
    authInfo: undefined,
    signatures: []
  };
}
/**
 * Tx is the standard type used for broadcasting transactions.
 * @name Tx
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.Tx
 */
export const Tx = {
  typeUrl: "/cosmos.tx.v1beta1.Tx",
  aminoType: "cosmos-sdk/Tx",
  encode(message: Tx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.body !== undefined) {
      TxBody.encode(message.body, writer.uint32(10).fork()).ldelim();
    }
    if (message.authInfo !== undefined) {
      AuthInfo.encode(message.authInfo, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.signatures) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Tx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = TxBody.decode(reader, reader.uint32());
          break;
        case 2:
          message.authInfo = AuthInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.signatures.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Tx>): Tx {
    const message = createBaseTx();
    message.body = object.body !== undefined && object.body !== null ? TxBody.fromPartial(object.body) : undefined;
    message.authInfo = object.authInfo !== undefined && object.authInfo !== null ? AuthInfo.fromPartial(object.authInfo) : undefined;
    message.signatures = object.signatures?.map(e => e) || [];
    return message;
  }
};
function createBaseTxRaw(): TxRaw {
  return {
    bodyBytes: new Uint8Array(),
    authInfoBytes: new Uint8Array(),
    signatures: []
  };
}
/**
 * TxRaw is a variant of Tx that pins the signer's exact binary representation
 * of body and auth_info. This is used for signing, broadcasting and
 * verification. The binary `serialize(tx: TxRaw)` is stored in Tendermint and
 * the hash `sha256(serialize(tx: TxRaw))` becomes the "txhash", commonly used
 * as the transaction ID.
 * @name TxRaw
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxRaw
 */
export const TxRaw = {
  typeUrl: "/cosmos.tx.v1beta1.TxRaw",
  aminoType: "cosmos-sdk/TxRaw",
  encode(message: TxRaw, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bodyBytes.length !== 0) {
      writer.uint32(10).bytes(message.bodyBytes);
    }
    if (message.authInfoBytes.length !== 0) {
      writer.uint32(18).bytes(message.authInfoBytes);
    }
    for (const v of message.signatures) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxRaw {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxRaw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bodyBytes = reader.bytes();
          break;
        case 2:
          message.authInfoBytes = reader.bytes();
          break;
        case 3:
          message.signatures.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxRaw>): TxRaw {
    const message = createBaseTxRaw();
    message.bodyBytes = object.bodyBytes ?? new Uint8Array();
    message.authInfoBytes = object.authInfoBytes ?? new Uint8Array();
    message.signatures = object.signatures?.map(e => e) || [];
    return message;
  }
};
function createBaseSignDoc(): SignDoc {
  return {
    bodyBytes: new Uint8Array(),
    authInfoBytes: new Uint8Array(),
    chainId: "",
    accountNumber: BigInt(0)
  };
}
/**
 * SignDoc is the type used for generating sign bytes for SIGN_MODE_DIRECT.
 * @name SignDoc
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.SignDoc
 */
export const SignDoc = {
  typeUrl: "/cosmos.tx.v1beta1.SignDoc",
  aminoType: "cosmos-sdk/SignDoc",
  encode(message: SignDoc, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bodyBytes.length !== 0) {
      writer.uint32(10).bytes(message.bodyBytes);
    }
    if (message.authInfoBytes.length !== 0) {
      writer.uint32(18).bytes(message.authInfoBytes);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (message.accountNumber !== BigInt(0)) {
      writer.uint32(32).uint64(message.accountNumber);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SignDoc {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignDoc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bodyBytes = reader.bytes();
          break;
        case 2:
          message.authInfoBytes = reader.bytes();
          break;
        case 3:
          message.chainId = reader.string();
          break;
        case 4:
          message.accountNumber = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SignDoc>): SignDoc {
    const message = createBaseSignDoc();
    message.bodyBytes = object.bodyBytes ?? new Uint8Array();
    message.authInfoBytes = object.authInfoBytes ?? new Uint8Array();
    message.chainId = object.chainId ?? "";
    message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt(0);
    return message;
  }
};
function createBaseSignDocDirectAux(): SignDocDirectAux {
  return {
    bodyBytes: new Uint8Array(),
    publicKey: undefined,
    chainId: "",
    accountNumber: BigInt(0),
    sequence: BigInt(0),
    tip: undefined
  };
}
/**
 * SignDocDirectAux is the type used for generating sign bytes for
 * SIGN_MODE_DIRECT_AUX.
 * @name SignDocDirectAux
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.SignDocDirectAux
 */
export const SignDocDirectAux = {
  typeUrl: "/cosmos.tx.v1beta1.SignDocDirectAux",
  aminoType: "cosmos-sdk/SignDocDirectAux",
  encode(message: SignDocDirectAux, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bodyBytes.length !== 0) {
      writer.uint32(10).bytes(message.bodyBytes);
    }
    if (message.publicKey !== undefined) {
      Any.encode(message.publicKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (message.accountNumber !== BigInt(0)) {
      writer.uint32(32).uint64(message.accountNumber);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(40).uint64(message.sequence);
    }
    if (message.tip !== undefined) {
      Tip.encode(message.tip, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SignDocDirectAux {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignDocDirectAux();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bodyBytes = reader.bytes();
          break;
        case 2:
          message.publicKey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.chainId = reader.string();
          break;
        case 4:
          message.accountNumber = reader.uint64();
          break;
        case 5:
          message.sequence = reader.uint64();
          break;
        case 6:
          message.tip = Tip.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SignDocDirectAux>): SignDocDirectAux {
    const message = createBaseSignDocDirectAux();
    message.bodyBytes = object.bodyBytes ?? new Uint8Array();
    message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? Any.fromPartial(object.publicKey) : undefined;
    message.chainId = object.chainId ?? "";
    message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt(0);
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.tip = object.tip !== undefined && object.tip !== null ? Tip.fromPartial(object.tip) : undefined;
    return message;
  }
};
function createBaseTxBody(): TxBody {
  return {
    messages: [],
    memo: "",
    timeoutHeight: BigInt(0),
    unordered: false,
    timeoutTimestamp: undefined,
    extensionOptions: [],
    nonCriticalExtensionOptions: []
  };
}
/**
 * TxBody is the body of a transaction that all signers sign over.
 * @name TxBody
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxBody
 */
export const TxBody = {
  typeUrl: "/cosmos.tx.v1beta1.TxBody",
  aminoType: "cosmos-sdk/TxBody",
  encode(message: TxBody, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.memo !== "") {
      writer.uint32(18).string(message.memo);
    }
    if (message.timeoutHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.timeoutHeight);
    }
    if (message.unordered === true) {
      writer.uint32(32).bool(message.unordered);
    }
    if (message.timeoutTimestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timeoutTimestamp), writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.extensionOptions) {
      Any.encode(v!, writer.uint32(8186).fork()).ldelim();
    }
    for (const v of message.nonCriticalExtensionOptions) {
      Any.encode(v!, writer.uint32(16378).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxBody {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.memo = reader.string();
          break;
        case 3:
          message.timeoutHeight = reader.uint64();
          break;
        case 4:
          message.unordered = reader.bool();
          break;
        case 5:
          message.timeoutTimestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 1023:
          message.extensionOptions.push(Any.decode(reader, reader.uint32()));
          break;
        case 2047:
          message.nonCriticalExtensionOptions.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxBody>): TxBody {
    const message = createBaseTxBody();
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    message.memo = object.memo ?? "";
    message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? BigInt(object.timeoutHeight.toString()) : BigInt(0);
    message.unordered = object.unordered ?? false;
    message.timeoutTimestamp = object.timeoutTimestamp ?? undefined;
    message.extensionOptions = object.extensionOptions?.map(e => Any.fromPartial(e)) || [];
    message.nonCriticalExtensionOptions = object.nonCriticalExtensionOptions?.map(e => Any.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAuthInfo(): AuthInfo {
  return {
    signerInfos: [],
    fee: undefined,
    tip: undefined
  };
}
/**
 * AuthInfo describes the fee and signer modes that are used to sign a
 * transaction.
 * @name AuthInfo
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.AuthInfo
 */
export const AuthInfo = {
  typeUrl: "/cosmos.tx.v1beta1.AuthInfo",
  aminoType: "cosmos-sdk/AuthInfo",
  encode(message: AuthInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.signerInfos) {
      SignerInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    if (message.tip !== undefined) {
      Tip.encode(message.tip, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AuthInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signerInfos.push(SignerInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        case 3:
          message.tip = Tip.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AuthInfo>): AuthInfo {
    const message = createBaseAuthInfo();
    message.signerInfos = object.signerInfos?.map(e => SignerInfo.fromPartial(e)) || [];
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    message.tip = object.tip !== undefined && object.tip !== null ? Tip.fromPartial(object.tip) : undefined;
    return message;
  }
};
function createBaseSignerInfo(): SignerInfo {
  return {
    publicKey: undefined,
    modeInfo: undefined,
    sequence: BigInt(0)
  };
}
/**
 * SignerInfo describes the public key and signing mode of a single top-level
 * signer.
 * @name SignerInfo
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.SignerInfo
 */
export const SignerInfo = {
  typeUrl: "/cosmos.tx.v1beta1.SignerInfo",
  aminoType: "cosmos-sdk/SignerInfo",
  encode(message: SignerInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.publicKey !== undefined) {
      Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.modeInfo !== undefined) {
      ModeInfo.encode(message.modeInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SignerInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publicKey = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.modeInfo = ModeInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SignerInfo>): SignerInfo {
    const message = createBaseSignerInfo();
    message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? Any.fromPartial(object.publicKey) : undefined;
    message.modeInfo = object.modeInfo !== undefined && object.modeInfo !== null ? ModeInfo.fromPartial(object.modeInfo) : undefined;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  }
};
function createBaseModeInfo(): ModeInfo {
  return {
    single: undefined,
    multi: undefined
  };
}
/**
 * ModeInfo describes the signing mode of a single or nested multisig signer.
 * @name ModeInfo
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.ModeInfo
 */
export const ModeInfo = {
  typeUrl: "/cosmos.tx.v1beta1.ModeInfo",
  aminoType: "cosmos-sdk/ModeInfo",
  encode(message: ModeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.single !== undefined) {
      ModeInfo_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
    }
    if (message.multi !== undefined) {
      ModeInfo_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.single = ModeInfo_Single.decode(reader, reader.uint32());
          break;
        case 2:
          message.multi = ModeInfo_Multi.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ModeInfo>): ModeInfo {
    const message = createBaseModeInfo();
    message.single = object.single !== undefined && object.single !== null ? ModeInfo_Single.fromPartial(object.single) : undefined;
    message.multi = object.multi !== undefined && object.multi !== null ? ModeInfo_Multi.fromPartial(object.multi) : undefined;
    return message;
  }
};
function createBaseModeInfo_Single(): ModeInfo_Single {
  return {
    mode: 0
  };
}
/**
 * Single is the mode info for a single signer. It is structured as a message
 * to allow for additional fields such as locale for SIGN_MODE_TEXTUAL in the
 * future
 * @name ModeInfo_Single
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.Single
 */
export const ModeInfo_Single = {
  typeUrl: "/cosmos.tx.v1beta1.Single",
  aminoType: "cosmos-sdk/Single",
  encode(message: ModeInfo_Single, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModeInfo_Single {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModeInfo_Single();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mode = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ModeInfo_Single>): ModeInfo_Single {
    const message = createBaseModeInfo_Single();
    message.mode = object.mode ?? 0;
    return message;
  }
};
function createBaseModeInfo_Multi(): ModeInfo_Multi {
  return {
    bitarray: undefined,
    modeInfos: []
  };
}
/**
 * Multi is the mode info for a multisig public key
 * @name ModeInfo_Multi
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.Multi
 */
export const ModeInfo_Multi = {
  typeUrl: "/cosmos.tx.v1beta1.Multi",
  aminoType: "cosmos-sdk/Multi",
  encode(message: ModeInfo_Multi, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bitarray !== undefined) {
      CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.modeInfos) {
      ModeInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModeInfo_Multi {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModeInfo_Multi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bitarray = CompactBitArray.decode(reader, reader.uint32());
          break;
        case 2:
          message.modeInfos.push(ModeInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ModeInfo_Multi>): ModeInfo_Multi {
    const message = createBaseModeInfo_Multi();
    message.bitarray = object.bitarray !== undefined && object.bitarray !== null ? CompactBitArray.fromPartial(object.bitarray) : undefined;
    message.modeInfos = object.modeInfos?.map(e => ModeInfo.fromPartial(e)) || [];
    return message;
  }
};
function createBaseFee(): Fee {
  return {
    amount: [],
    gasLimit: BigInt(0),
    payer: "",
    granter: ""
  };
}
/**
 * Fee includes the amount of coins paid in fees and the maximum
 * gas to be used by the transaction. The ratio yields an effective "gasprice",
 * which must be above some miminum to be accepted into the mempool.
 * @name Fee
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.Fee
 */
export const Fee = {
  typeUrl: "/cosmos.tx.v1beta1.Fee",
  aminoType: "cosmos-sdk/Fee",
  encode(message: Fee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.gasLimit !== BigInt(0)) {
      writer.uint32(16).uint64(message.gasLimit);
    }
    if (message.payer !== "") {
      writer.uint32(26).string(message.payer);
    }
    if (message.granter !== "") {
      writer.uint32(34).string(message.granter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Fee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.gasLimit = reader.uint64();
          break;
        case 3:
          message.payer = reader.string();
          break;
        case 4:
          message.granter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Fee>): Fee {
    const message = createBaseFee();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? BigInt(object.gasLimit.toString()) : BigInt(0);
    message.payer = object.payer ?? "";
    message.granter = object.granter ?? "";
    return message;
  }
};
function createBaseTip(): Tip {
  return {
    amount: [],
    tipper: ""
  };
}
/**
 * Tip is the tip used for meta-transactions.
 * @name Tip
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.Tip
 * @deprecated
 */
export const Tip = {
  typeUrl: "/cosmos.tx.v1beta1.Tip",
  aminoType: "cosmos-sdk/Tip",
  encode(message: Tip, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.tipper !== "") {
      writer.uint32(18).string(message.tipper);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Tip {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.tipper = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Tip>): Tip {
    const message = createBaseTip();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.tipper = object.tipper ?? "";
    return message;
  }
};
function createBaseAuxSignerData(): AuxSignerData {
  return {
    address: "",
    signDoc: undefined,
    mode: 0,
    sig: new Uint8Array()
  };
}
/**
 * AuxSignerData is the intermediary format that an auxiliary signer (e.g. a
 * tipper) builds and sends to the fee payer (who will build and broadcast the
 * actual tx). AuxSignerData is not a valid tx in itself, and will be rejected
 * by the node if sent directly as-is.
 * @name AuxSignerData
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.AuxSignerData
 */
export const AuxSignerData = {
  typeUrl: "/cosmos.tx.v1beta1.AuxSignerData",
  aminoType: "cosmos-sdk/AuxSignerData",
  encode(message: AuxSignerData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.signDoc !== undefined) {
      SignDocDirectAux.encode(message.signDoc, writer.uint32(18).fork()).ldelim();
    }
    if (message.mode !== 0) {
      writer.uint32(24).int32(message.mode);
    }
    if (message.sig.length !== 0) {
      writer.uint32(34).bytes(message.sig);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AuxSignerData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuxSignerData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.signDoc = SignDocDirectAux.decode(reader, reader.uint32());
          break;
        case 3:
          message.mode = reader.int32() as any;
          break;
        case 4:
          message.sig = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AuxSignerData>): AuxSignerData {
    const message = createBaseAuxSignerData();
    message.address = object.address ?? "";
    message.signDoc = object.signDoc !== undefined && object.signDoc !== null ? SignDocDirectAux.fromPartial(object.signDoc) : undefined;
    message.mode = object.mode ?? 0;
    message.sig = object.sig ?? new Uint8Array();
    return message;
  }
};