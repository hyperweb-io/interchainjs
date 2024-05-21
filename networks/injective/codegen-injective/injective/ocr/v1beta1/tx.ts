import { FeedConfig, FeedConfigAmino, Report, ReportAmino, Params, ParamsAmino } from "./ocr";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface MsgCreateFeed {
  sender: string;
  config?: FeedConfig;
}
export interface MsgCreateFeedProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgCreateFeed";
  value: Uint8Array;
}
export interface MsgCreateFeedAmino {
  sender: string;
  config?: FeedConfigAmino;
}
export interface MsgCreateFeedAminoMsg {
  type: "/injective.ocr.v1beta1.MsgCreateFeed";
  value: MsgCreateFeedAmino;
}
export interface MsgCreateFeedResponse {}
export interface MsgCreateFeedResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgCreateFeedResponse";
  value: Uint8Array;
}
export interface MsgCreateFeedResponseAmino {}
export interface MsgCreateFeedResponseAminoMsg {
  type: "/injective.ocr.v1beta1.MsgCreateFeedResponse";
  value: MsgCreateFeedResponseAmino;
}
export interface MsgUpdateFeed {
  sender: string;
  /** feed_id is an unique ID for the target of this config */
  feedId: string;
  /** signers ith element is address ith oracle uses to sign a report */
  signers: string[];
  /**
   * transmitters ith element is address ith oracle uses to transmit a report
   * via the transmit method
   */
  transmitters: string[];
  /** Fixed LINK reward for each observer */
  linkPerObservation?: string;
  /** Fixed LINK reward for transmitter */
  linkPerTransmission?: string;
  /** Native denom for LINK coin in the bank keeper */
  linkDenom: string;
  /** feed administrator */
  feedAdmin: string;
  /** feed billing administrator */
  billingAdmin: string;
}
export interface MsgUpdateFeedProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgUpdateFeed";
  value: Uint8Array;
}
export interface MsgUpdateFeedAmino {
  sender: string;
  /** feed_id is an unique ID for the target of this config */
  feed_id: string;
  /** signers ith element is address ith oracle uses to sign a report */
  signers: string[];
  /**
   * transmitters ith element is address ith oracle uses to transmit a report
   * via the transmit method
   */
  transmitters: string[];
  /** Fixed LINK reward for each observer */
  link_per_observation?: string;
  /** Fixed LINK reward for transmitter */
  link_per_transmission?: string;
  /** Native denom for LINK coin in the bank keeper */
  link_denom: string;
  /** feed administrator */
  feed_admin: string;
  /** feed billing administrator */
  billing_admin: string;
}
export interface MsgUpdateFeedAminoMsg {
  type: "/injective.ocr.v1beta1.MsgUpdateFeed";
  value: MsgUpdateFeedAmino;
}
export interface MsgUpdateFeedResponse {}
export interface MsgUpdateFeedResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgUpdateFeedResponse";
  value: Uint8Array;
}
export interface MsgUpdateFeedResponseAmino {}
export interface MsgUpdateFeedResponseAminoMsg {
  type: "/injective.ocr.v1beta1.MsgUpdateFeedResponse";
  value: MsgUpdateFeedResponseAmino;
}
export interface MsgTransmit {
  /** Address of the transmitter */
  transmitter: string;
  configDigest: Uint8Array;
  feedId: string;
  epoch: bigint;
  round: bigint;
  extraHash: Uint8Array;
  report?: Report;
  signatures: Uint8Array[];
}
export interface MsgTransmitProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgTransmit";
  value: Uint8Array;
}
export interface MsgTransmitAmino {
  /** Address of the transmitter */
  transmitter: string;
  config_digest: string;
  feed_id: string;
  epoch: string;
  round: string;
  extra_hash: string;
  report?: ReportAmino;
  signatures: string[];
}
export interface MsgTransmitAminoMsg {
  type: "/injective.ocr.v1beta1.MsgTransmit";
  value: MsgTransmitAmino;
}
export interface MsgTransmitResponse {}
export interface MsgTransmitResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgTransmitResponse";
  value: Uint8Array;
}
export interface MsgTransmitResponseAmino {}
export interface MsgTransmitResponseAminoMsg {
  type: "/injective.ocr.v1beta1.MsgTransmitResponse";
  value: MsgTransmitResponseAmino;
}
export interface MsgFundFeedRewardPool {
  sender: string;
  feedId: string;
  amount: Coin;
}
export interface MsgFundFeedRewardPoolProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgFundFeedRewardPool";
  value: Uint8Array;
}
export interface MsgFundFeedRewardPoolAmino {
  sender: string;
  feed_id: string;
  amount: CoinAmino;
}
export interface MsgFundFeedRewardPoolAminoMsg {
  type: "/injective.ocr.v1beta1.MsgFundFeedRewardPool";
  value: MsgFundFeedRewardPoolAmino;
}
export interface MsgFundFeedRewardPoolResponse {}
export interface MsgFundFeedRewardPoolResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgFundFeedRewardPoolResponse";
  value: Uint8Array;
}
export interface MsgFundFeedRewardPoolResponseAmino {}
export interface MsgFundFeedRewardPoolResponseAminoMsg {
  type: "/injective.ocr.v1beta1.MsgFundFeedRewardPoolResponse";
  value: MsgFundFeedRewardPoolResponseAmino;
}
export interface MsgWithdrawFeedRewardPool {
  sender: string;
  feedId: string;
  amount: Coin;
}
export interface MsgWithdrawFeedRewardPoolProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool";
  value: Uint8Array;
}
export interface MsgWithdrawFeedRewardPoolAmino {
  sender: string;
  feed_id: string;
  amount: CoinAmino;
}
export interface MsgWithdrawFeedRewardPoolAminoMsg {
  type: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool";
  value: MsgWithdrawFeedRewardPoolAmino;
}
export interface MsgWithdrawFeedRewardPoolResponse {}
export interface MsgWithdrawFeedRewardPoolResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPoolResponse";
  value: Uint8Array;
}
export interface MsgWithdrawFeedRewardPoolResponseAmino {}
export interface MsgWithdrawFeedRewardPoolResponseAminoMsg {
  type: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPoolResponse";
  value: MsgWithdrawFeedRewardPoolResponseAmino;
}
export interface MsgSetPayees {
  sender: string;
  feedId: string;
  /** addresses oracles use to transmit the reports */
  transmitters: string[];
  /** addresses of payees corresponding to list of transmitters */
  payees: string[];
}
export interface MsgSetPayeesProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgSetPayees";
  value: Uint8Array;
}
export interface MsgSetPayeesAmino {
  sender: string;
  feed_id: string;
  /** addresses oracles use to transmit the reports */
  transmitters: string[];
  /** addresses of payees corresponding to list of transmitters */
  payees: string[];
}
export interface MsgSetPayeesAminoMsg {
  type: "/injective.ocr.v1beta1.MsgSetPayees";
  value: MsgSetPayeesAmino;
}
export interface MsgSetPayeesResponse {}
export interface MsgSetPayeesResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgSetPayeesResponse";
  value: Uint8Array;
}
export interface MsgSetPayeesResponseAmino {}
export interface MsgSetPayeesResponseAminoMsg {
  type: "/injective.ocr.v1beta1.MsgSetPayeesResponse";
  value: MsgSetPayeesResponseAmino;
}
export interface MsgTransferPayeeship {
  /** transmitter address of oracle whose payee is changing */
  sender: string;
  transmitter: string;
  feedId: string;
  /** new payee address */
  proposed: string;
}
export interface MsgTransferPayeeshipProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgTransferPayeeship";
  value: Uint8Array;
}
export interface MsgTransferPayeeshipAmino {
  /** transmitter address of oracle whose payee is changing */
  sender: string;
  transmitter: string;
  feed_id: string;
  /** new payee address */
  proposed: string;
}
export interface MsgTransferPayeeshipAminoMsg {
  type: "/injective.ocr.v1beta1.MsgTransferPayeeship";
  value: MsgTransferPayeeshipAmino;
}
export interface MsgTransferPayeeshipResponse {}
export interface MsgTransferPayeeshipResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgTransferPayeeshipResponse";
  value: Uint8Array;
}
export interface MsgTransferPayeeshipResponseAmino {}
export interface MsgTransferPayeeshipResponseAminoMsg {
  type: "/injective.ocr.v1beta1.MsgTransferPayeeshipResponse";
  value: MsgTransferPayeeshipResponseAmino;
}
export interface MsgAcceptPayeeship {
  /** new payee address */
  payee: string;
  /** transmitter address of oracle whose payee is changing */
  transmitter: string;
  feedId: string;
}
export interface MsgAcceptPayeeshipProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgAcceptPayeeship";
  value: Uint8Array;
}
export interface MsgAcceptPayeeshipAmino {
  /** new payee address */
  payee: string;
  /** transmitter address of oracle whose payee is changing */
  transmitter: string;
  feed_id: string;
}
export interface MsgAcceptPayeeshipAminoMsg {
  type: "/injective.ocr.v1beta1.MsgAcceptPayeeship";
  value: MsgAcceptPayeeshipAmino;
}
export interface MsgAcceptPayeeshipResponse {}
export interface MsgAcceptPayeeshipResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgAcceptPayeeshipResponse";
  value: Uint8Array;
}
export interface MsgAcceptPayeeshipResponseAmino {}
export interface MsgAcceptPayeeshipResponseAminoMsg {
  type: "/injective.ocr.v1beta1.MsgAcceptPayeeshipResponse";
  value: MsgAcceptPayeeshipResponseAmino;
}
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the ocr parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the ocr parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/injective.ocr.v1beta1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/injective.ocr.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
function createBaseMsgCreateFeed(): MsgCreateFeed {
  return {
    sender: "",
    config: undefined
  };
}
export const MsgCreateFeed = {
  typeUrl: "/injective.ocr.v1beta1.MsgCreateFeed",
  is(o: any): o is MsgCreateFeed {
    return o && (o.$typeUrl === MsgCreateFeed.typeUrl || typeof o.sender === "string");
  },
  isAmino(o: any): o is MsgCreateFeedAmino {
    return o && (o.$typeUrl === MsgCreateFeed.typeUrl || typeof o.sender === "string");
  },
  encode(message: MsgCreateFeed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.config !== undefined) {
      FeedConfig.encode(message.config, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateFeed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.config = FeedConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateFeed>): MsgCreateFeed {
    const message = createBaseMsgCreateFeed();
    message.sender = object.sender ?? "";
    message.config = object.config !== undefined && object.config !== null ? FeedConfig.fromPartial(object.config) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateFeedAmino): MsgCreateFeed {
    const message = createBaseMsgCreateFeed();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = FeedConfig.fromAmino(object.config);
    }
    return message;
  },
  toAmino(message: MsgCreateFeed): MsgCreateFeedAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.config = message.config ? FeedConfig.toAmino(message.config) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateFeedAminoMsg): MsgCreateFeed {
    return MsgCreateFeed.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateFeedProtoMsg): MsgCreateFeed {
    return MsgCreateFeed.decode(message.value);
  },
  toProto(message: MsgCreateFeed): Uint8Array {
    return MsgCreateFeed.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateFeed): MsgCreateFeedProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgCreateFeed",
      value: MsgCreateFeed.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateFeed.typeUrl, MsgCreateFeed);
function createBaseMsgCreateFeedResponse(): MsgCreateFeedResponse {
  return {};
}
export const MsgCreateFeedResponse = {
  typeUrl: "/injective.ocr.v1beta1.MsgCreateFeedResponse",
  is(o: any): o is MsgCreateFeedResponse {
    return o && o.$typeUrl === MsgCreateFeedResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCreateFeedResponseAmino {
    return o && o.$typeUrl === MsgCreateFeedResponse.typeUrl;
  },
  encode(_: MsgCreateFeedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateFeedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFeedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgCreateFeedResponse>): MsgCreateFeedResponse {
    const message = createBaseMsgCreateFeedResponse();
    return message;
  },
  fromAmino(_: MsgCreateFeedResponseAmino): MsgCreateFeedResponse {
    const message = createBaseMsgCreateFeedResponse();
    return message;
  },
  toAmino(_: MsgCreateFeedResponse): MsgCreateFeedResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateFeedResponseAminoMsg): MsgCreateFeedResponse {
    return MsgCreateFeedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateFeedResponseProtoMsg): MsgCreateFeedResponse {
    return MsgCreateFeedResponse.decode(message.value);
  },
  toProto(message: MsgCreateFeedResponse): Uint8Array {
    return MsgCreateFeedResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateFeedResponse): MsgCreateFeedResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgCreateFeedResponse",
      value: MsgCreateFeedResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateFeedResponse.typeUrl, MsgCreateFeedResponse);
function createBaseMsgUpdateFeed(): MsgUpdateFeed {
  return {
    sender: "",
    feedId: "",
    signers: [],
    transmitters: [],
    linkPerObservation: undefined,
    linkPerTransmission: undefined,
    linkDenom: "",
    feedAdmin: "",
    billingAdmin: ""
  };
}
export const MsgUpdateFeed = {
  typeUrl: "/injective.ocr.v1beta1.MsgUpdateFeed",
  is(o: any): o is MsgUpdateFeed {
    return o && (o.$typeUrl === MsgUpdateFeed.typeUrl || typeof o.sender === "string" && typeof o.feedId === "string" && Array.isArray(o.signers) && (!o.signers.length || typeof o.signers[0] === "string") && Array.isArray(o.transmitters) && (!o.transmitters.length || typeof o.transmitters[0] === "string") && typeof o.linkDenom === "string" && typeof o.feedAdmin === "string" && typeof o.billingAdmin === "string");
  },
  isAmino(o: any): o is MsgUpdateFeedAmino {
    return o && (o.$typeUrl === MsgUpdateFeed.typeUrl || typeof o.sender === "string" && typeof o.feed_id === "string" && Array.isArray(o.signers) && (!o.signers.length || typeof o.signers[0] === "string") && Array.isArray(o.transmitters) && (!o.transmitters.length || typeof o.transmitters[0] === "string") && typeof o.link_denom === "string" && typeof o.feed_admin === "string" && typeof o.billing_admin === "string");
  },
  encode(message: MsgUpdateFeed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.feedId !== "") {
      writer.uint32(18).string(message.feedId);
    }
    for (const v of message.signers) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.transmitters) {
      writer.uint32(34).string(v!);
    }
    if (message.linkPerObservation !== undefined) {
      writer.uint32(42).string(message.linkPerObservation);
    }
    if (message.linkPerTransmission !== undefined) {
      writer.uint32(50).string(message.linkPerTransmission);
    }
    if (message.linkDenom !== "") {
      writer.uint32(58).string(message.linkDenom);
    }
    if (message.feedAdmin !== "") {
      writer.uint32(66).string(message.feedAdmin);
    }
    if (message.billingAdmin !== "") {
      writer.uint32(74).string(message.billingAdmin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateFeed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.feedId = reader.string();
          break;
        case 3:
          message.signers.push(reader.string());
          break;
        case 4:
          message.transmitters.push(reader.string());
          break;
        case 5:
          message.linkPerObservation = reader.string();
          break;
        case 6:
          message.linkPerTransmission = reader.string();
          break;
        case 7:
          message.linkDenom = reader.string();
          break;
        case 8:
          message.feedAdmin = reader.string();
          break;
        case 9:
          message.billingAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateFeed>): MsgUpdateFeed {
    const message = createBaseMsgUpdateFeed();
    message.sender = object.sender ?? "";
    message.feedId = object.feedId ?? "";
    message.signers = object.signers?.map(e => e) || [];
    message.transmitters = object.transmitters?.map(e => e) || [];
    message.linkPerObservation = object.linkPerObservation ?? undefined;
    message.linkPerTransmission = object.linkPerTransmission ?? undefined;
    message.linkDenom = object.linkDenom ?? "";
    message.feedAdmin = object.feedAdmin ?? "";
    message.billingAdmin = object.billingAdmin ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateFeedAmino): MsgUpdateFeed {
    const message = createBaseMsgUpdateFeed();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    message.signers = object.signers?.map(e => e) || [];
    message.transmitters = object.transmitters?.map(e => e) || [];
    if (object.link_per_observation !== undefined && object.link_per_observation !== null) {
      message.linkPerObservation = object.link_per_observation;
    }
    if (object.link_per_transmission !== undefined && object.link_per_transmission !== null) {
      message.linkPerTransmission = object.link_per_transmission;
    }
    if (object.link_denom !== undefined && object.link_denom !== null) {
      message.linkDenom = object.link_denom;
    }
    if (object.feed_admin !== undefined && object.feed_admin !== null) {
      message.feedAdmin = object.feed_admin;
    }
    if (object.billing_admin !== undefined && object.billing_admin !== null) {
      message.billingAdmin = object.billing_admin;
    }
    return message;
  },
  toAmino(message: MsgUpdateFeed): MsgUpdateFeedAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = message.signers;
    }
    if (message.transmitters) {
      obj.transmitters = message.transmitters.map(e => e);
    } else {
      obj.transmitters = message.transmitters;
    }
    obj.link_per_observation = message.linkPerObservation === null ? undefined : message.linkPerObservation;
    obj.link_per_transmission = message.linkPerTransmission === null ? undefined : message.linkPerTransmission;
    obj.link_denom = message.linkDenom === "" ? undefined : message.linkDenom;
    obj.feed_admin = message.feedAdmin === "" ? undefined : message.feedAdmin;
    obj.billing_admin = message.billingAdmin === "" ? undefined : message.billingAdmin;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateFeedAminoMsg): MsgUpdateFeed {
    return MsgUpdateFeed.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateFeedProtoMsg): MsgUpdateFeed {
    return MsgUpdateFeed.decode(message.value);
  },
  toProto(message: MsgUpdateFeed): Uint8Array {
    return MsgUpdateFeed.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateFeed): MsgUpdateFeedProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgUpdateFeed",
      value: MsgUpdateFeed.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateFeed.typeUrl, MsgUpdateFeed);
function createBaseMsgUpdateFeedResponse(): MsgUpdateFeedResponse {
  return {};
}
export const MsgUpdateFeedResponse = {
  typeUrl: "/injective.ocr.v1beta1.MsgUpdateFeedResponse",
  is(o: any): o is MsgUpdateFeedResponse {
    return o && o.$typeUrl === MsgUpdateFeedResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateFeedResponseAmino {
    return o && o.$typeUrl === MsgUpdateFeedResponse.typeUrl;
  },
  encode(_: MsgUpdateFeedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateFeedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFeedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateFeedResponse>): MsgUpdateFeedResponse {
    const message = createBaseMsgUpdateFeedResponse();
    return message;
  },
  fromAmino(_: MsgUpdateFeedResponseAmino): MsgUpdateFeedResponse {
    const message = createBaseMsgUpdateFeedResponse();
    return message;
  },
  toAmino(_: MsgUpdateFeedResponse): MsgUpdateFeedResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateFeedResponseAminoMsg): MsgUpdateFeedResponse {
    return MsgUpdateFeedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateFeedResponseProtoMsg): MsgUpdateFeedResponse {
    return MsgUpdateFeedResponse.decode(message.value);
  },
  toProto(message: MsgUpdateFeedResponse): Uint8Array {
    return MsgUpdateFeedResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateFeedResponse): MsgUpdateFeedResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgUpdateFeedResponse",
      value: MsgUpdateFeedResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateFeedResponse.typeUrl, MsgUpdateFeedResponse);
function createBaseMsgTransmit(): MsgTransmit {
  return {
    transmitter: "",
    configDigest: new Uint8Array(),
    feedId: "",
    epoch: BigInt(0),
    round: BigInt(0),
    extraHash: new Uint8Array(),
    report: undefined,
    signatures: []
  };
}
export const MsgTransmit = {
  typeUrl: "/injective.ocr.v1beta1.MsgTransmit",
  is(o: any): o is MsgTransmit {
    return o && (o.$typeUrl === MsgTransmit.typeUrl || typeof o.transmitter === "string" && (o.configDigest instanceof Uint8Array || typeof o.configDigest === "string") && typeof o.feedId === "string" && typeof o.epoch === "bigint" && typeof o.round === "bigint" && (o.extraHash instanceof Uint8Array || typeof o.extraHash === "string") && Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
  },
  isAmino(o: any): o is MsgTransmitAmino {
    return o && (o.$typeUrl === MsgTransmit.typeUrl || typeof o.transmitter === "string" && (o.config_digest instanceof Uint8Array || typeof o.config_digest === "string") && typeof o.feed_id === "string" && typeof o.epoch === "bigint" && typeof o.round === "bigint" && (o.extra_hash instanceof Uint8Array || typeof o.extra_hash === "string") && Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
  },
  encode(message: MsgTransmit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.transmitter !== "") {
      writer.uint32(10).string(message.transmitter);
    }
    if (message.configDigest.length !== 0) {
      writer.uint32(18).bytes(message.configDigest);
    }
    if (message.feedId !== "") {
      writer.uint32(26).string(message.feedId);
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(32).uint64(message.epoch);
    }
    if (message.round !== BigInt(0)) {
      writer.uint32(40).uint64(message.round);
    }
    if (message.extraHash.length !== 0) {
      writer.uint32(50).bytes(message.extraHash);
    }
    if (message.report !== undefined) {
      Report.encode(message.report, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.signatures) {
      writer.uint32(66).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransmit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransmit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transmitter = reader.string();
          break;
        case 2:
          message.configDigest = reader.bytes();
          break;
        case 3:
          message.feedId = reader.string();
          break;
        case 4:
          message.epoch = reader.uint64();
          break;
        case 5:
          message.round = reader.uint64();
          break;
        case 6:
          message.extraHash = reader.bytes();
          break;
        case 7:
          message.report = Report.decode(reader, reader.uint32());
          break;
        case 8:
          message.signatures.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgTransmit>): MsgTransmit {
    const message = createBaseMsgTransmit();
    message.transmitter = object.transmitter ?? "";
    message.configDigest = object.configDigest ?? new Uint8Array();
    message.feedId = object.feedId ?? "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
    message.extraHash = object.extraHash ?? new Uint8Array();
    message.report = object.report !== undefined && object.report !== null ? Report.fromPartial(object.report) : undefined;
    message.signatures = object.signatures?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgTransmitAmino): MsgTransmit {
    const message = createBaseMsgTransmit();
    if (object.transmitter !== undefined && object.transmitter !== null) {
      message.transmitter = object.transmitter;
    }
    if (object.config_digest !== undefined && object.config_digest !== null) {
      message.configDigest = bytesFromBase64(object.config_digest);
    }
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = BigInt(object.round);
    }
    if (object.extra_hash !== undefined && object.extra_hash !== null) {
      message.extraHash = bytesFromBase64(object.extra_hash);
    }
    if (object.report !== undefined && object.report !== null) {
      message.report = Report.fromAmino(object.report);
    }
    message.signatures = object.signatures?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: MsgTransmit): MsgTransmitAmino {
    const obj: any = {};
    obj.transmitter = message.transmitter === "" ? undefined : message.transmitter;
    obj.config_digest = message.configDigest ? base64FromBytes(message.configDigest) : undefined;
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    obj.epoch = message.epoch !== BigInt(0) ? message.epoch.toString() : undefined;
    obj.round = message.round !== BigInt(0) ? message.round.toString() : undefined;
    obj.extra_hash = message.extraHash ? base64FromBytes(message.extraHash) : undefined;
    obj.report = message.report ? Report.toAmino(message.report) : undefined;
    if (message.signatures) {
      obj.signatures = message.signatures.map(e => base64FromBytes(e));
    } else {
      obj.signatures = message.signatures;
    }
    return obj;
  },
  fromAminoMsg(object: MsgTransmitAminoMsg): MsgTransmit {
    return MsgTransmit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransmitProtoMsg): MsgTransmit {
    return MsgTransmit.decode(message.value);
  },
  toProto(message: MsgTransmit): Uint8Array {
    return MsgTransmit.encode(message).finish();
  },
  toProtoMsg(message: MsgTransmit): MsgTransmitProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgTransmit",
      value: MsgTransmit.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgTransmit.typeUrl, MsgTransmit);
function createBaseMsgTransmitResponse(): MsgTransmitResponse {
  return {};
}
export const MsgTransmitResponse = {
  typeUrl: "/injective.ocr.v1beta1.MsgTransmitResponse",
  is(o: any): o is MsgTransmitResponse {
    return o && o.$typeUrl === MsgTransmitResponse.typeUrl;
  },
  isAmino(o: any): o is MsgTransmitResponseAmino {
    return o && o.$typeUrl === MsgTransmitResponse.typeUrl;
  },
  encode(_: MsgTransmitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransmitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransmitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgTransmitResponse>): MsgTransmitResponse {
    const message = createBaseMsgTransmitResponse();
    return message;
  },
  fromAmino(_: MsgTransmitResponseAmino): MsgTransmitResponse {
    const message = createBaseMsgTransmitResponse();
    return message;
  },
  toAmino(_: MsgTransmitResponse): MsgTransmitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransmitResponseAminoMsg): MsgTransmitResponse {
    return MsgTransmitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransmitResponseProtoMsg): MsgTransmitResponse {
    return MsgTransmitResponse.decode(message.value);
  },
  toProto(message: MsgTransmitResponse): Uint8Array {
    return MsgTransmitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransmitResponse): MsgTransmitResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgTransmitResponse",
      value: MsgTransmitResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgTransmitResponse.typeUrl, MsgTransmitResponse);
function createBaseMsgFundFeedRewardPool(): MsgFundFeedRewardPool {
  return {
    sender: "",
    feedId: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgFundFeedRewardPool = {
  typeUrl: "/injective.ocr.v1beta1.MsgFundFeedRewardPool",
  is(o: any): o is MsgFundFeedRewardPool {
    return o && (o.$typeUrl === MsgFundFeedRewardPool.typeUrl || typeof o.sender === "string" && typeof o.feedId === "string" && Coin.is(o.amount));
  },
  isAmino(o: any): o is MsgFundFeedRewardPoolAmino {
    return o && (o.$typeUrl === MsgFundFeedRewardPool.typeUrl || typeof o.sender === "string" && typeof o.feed_id === "string" && Coin.isAmino(o.amount));
  },
  encode(message: MsgFundFeedRewardPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.feedId !== "") {
      writer.uint32(18).string(message.feedId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundFeedRewardPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundFeedRewardPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.feedId = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgFundFeedRewardPool>): MsgFundFeedRewardPool {
    const message = createBaseMsgFundFeedRewardPool();
    message.sender = object.sender ?? "";
    message.feedId = object.feedId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgFundFeedRewardPoolAmino): MsgFundFeedRewardPool {
    const message = createBaseMsgFundFeedRewardPool();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgFundFeedRewardPool): MsgFundFeedRewardPoolAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgFundFeedRewardPoolAminoMsg): MsgFundFeedRewardPool {
    return MsgFundFeedRewardPool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFundFeedRewardPoolProtoMsg): MsgFundFeedRewardPool {
    return MsgFundFeedRewardPool.decode(message.value);
  },
  toProto(message: MsgFundFeedRewardPool): Uint8Array {
    return MsgFundFeedRewardPool.encode(message).finish();
  },
  toProtoMsg(message: MsgFundFeedRewardPool): MsgFundFeedRewardPoolProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgFundFeedRewardPool",
      value: MsgFundFeedRewardPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgFundFeedRewardPool.typeUrl, MsgFundFeedRewardPool);
function createBaseMsgFundFeedRewardPoolResponse(): MsgFundFeedRewardPoolResponse {
  return {};
}
export const MsgFundFeedRewardPoolResponse = {
  typeUrl: "/injective.ocr.v1beta1.MsgFundFeedRewardPoolResponse",
  is(o: any): o is MsgFundFeedRewardPoolResponse {
    return o && o.$typeUrl === MsgFundFeedRewardPoolResponse.typeUrl;
  },
  isAmino(o: any): o is MsgFundFeedRewardPoolResponseAmino {
    return o && o.$typeUrl === MsgFundFeedRewardPoolResponse.typeUrl;
  },
  encode(_: MsgFundFeedRewardPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundFeedRewardPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundFeedRewardPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgFundFeedRewardPoolResponse>): MsgFundFeedRewardPoolResponse {
    const message = createBaseMsgFundFeedRewardPoolResponse();
    return message;
  },
  fromAmino(_: MsgFundFeedRewardPoolResponseAmino): MsgFundFeedRewardPoolResponse {
    const message = createBaseMsgFundFeedRewardPoolResponse();
    return message;
  },
  toAmino(_: MsgFundFeedRewardPoolResponse): MsgFundFeedRewardPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFundFeedRewardPoolResponseAminoMsg): MsgFundFeedRewardPoolResponse {
    return MsgFundFeedRewardPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFundFeedRewardPoolResponseProtoMsg): MsgFundFeedRewardPoolResponse {
    return MsgFundFeedRewardPoolResponse.decode(message.value);
  },
  toProto(message: MsgFundFeedRewardPoolResponse): Uint8Array {
    return MsgFundFeedRewardPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFundFeedRewardPoolResponse): MsgFundFeedRewardPoolResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgFundFeedRewardPoolResponse",
      value: MsgFundFeedRewardPoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgFundFeedRewardPoolResponse.typeUrl, MsgFundFeedRewardPoolResponse);
function createBaseMsgWithdrawFeedRewardPool(): MsgWithdrawFeedRewardPool {
  return {
    sender: "",
    feedId: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgWithdrawFeedRewardPool = {
  typeUrl: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool",
  is(o: any): o is MsgWithdrawFeedRewardPool {
    return o && (o.$typeUrl === MsgWithdrawFeedRewardPool.typeUrl || typeof o.sender === "string" && typeof o.feedId === "string" && Coin.is(o.amount));
  },
  isAmino(o: any): o is MsgWithdrawFeedRewardPoolAmino {
    return o && (o.$typeUrl === MsgWithdrawFeedRewardPool.typeUrl || typeof o.sender === "string" && typeof o.feed_id === "string" && Coin.isAmino(o.amount));
  },
  encode(message: MsgWithdrawFeedRewardPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.feedId !== "") {
      writer.uint32(18).string(message.feedId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawFeedRewardPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawFeedRewardPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.feedId = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgWithdrawFeedRewardPool>): MsgWithdrawFeedRewardPool {
    const message = createBaseMsgWithdrawFeedRewardPool();
    message.sender = object.sender ?? "";
    message.feedId = object.feedId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgWithdrawFeedRewardPoolAmino): MsgWithdrawFeedRewardPool {
    const message = createBaseMsgWithdrawFeedRewardPool();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgWithdrawFeedRewardPool): MsgWithdrawFeedRewardPoolAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawFeedRewardPoolAminoMsg): MsgWithdrawFeedRewardPool {
    return MsgWithdrawFeedRewardPool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawFeedRewardPoolProtoMsg): MsgWithdrawFeedRewardPool {
    return MsgWithdrawFeedRewardPool.decode(message.value);
  },
  toProto(message: MsgWithdrawFeedRewardPool): Uint8Array {
    return MsgWithdrawFeedRewardPool.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawFeedRewardPool): MsgWithdrawFeedRewardPoolProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool",
      value: MsgWithdrawFeedRewardPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWithdrawFeedRewardPool.typeUrl, MsgWithdrawFeedRewardPool);
function createBaseMsgWithdrawFeedRewardPoolResponse(): MsgWithdrawFeedRewardPoolResponse {
  return {};
}
export const MsgWithdrawFeedRewardPoolResponse = {
  typeUrl: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPoolResponse",
  is(o: any): o is MsgWithdrawFeedRewardPoolResponse {
    return o && o.$typeUrl === MsgWithdrawFeedRewardPoolResponse.typeUrl;
  },
  isAmino(o: any): o is MsgWithdrawFeedRewardPoolResponseAmino {
    return o && o.$typeUrl === MsgWithdrawFeedRewardPoolResponse.typeUrl;
  },
  encode(_: MsgWithdrawFeedRewardPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawFeedRewardPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawFeedRewardPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgWithdrawFeedRewardPoolResponse>): MsgWithdrawFeedRewardPoolResponse {
    const message = createBaseMsgWithdrawFeedRewardPoolResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawFeedRewardPoolResponseAmino): MsgWithdrawFeedRewardPoolResponse {
    const message = createBaseMsgWithdrawFeedRewardPoolResponse();
    return message;
  },
  toAmino(_: MsgWithdrawFeedRewardPoolResponse): MsgWithdrawFeedRewardPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawFeedRewardPoolResponseAminoMsg): MsgWithdrawFeedRewardPoolResponse {
    return MsgWithdrawFeedRewardPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawFeedRewardPoolResponseProtoMsg): MsgWithdrawFeedRewardPoolResponse {
    return MsgWithdrawFeedRewardPoolResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawFeedRewardPoolResponse): Uint8Array {
    return MsgWithdrawFeedRewardPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawFeedRewardPoolResponse): MsgWithdrawFeedRewardPoolResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPoolResponse",
      value: MsgWithdrawFeedRewardPoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWithdrawFeedRewardPoolResponse.typeUrl, MsgWithdrawFeedRewardPoolResponse);
function createBaseMsgSetPayees(): MsgSetPayees {
  return {
    sender: "",
    feedId: "",
    transmitters: [],
    payees: []
  };
}
export const MsgSetPayees = {
  typeUrl: "/injective.ocr.v1beta1.MsgSetPayees",
  is(o: any): o is MsgSetPayees {
    return o && (o.$typeUrl === MsgSetPayees.typeUrl || typeof o.sender === "string" && typeof o.feedId === "string" && Array.isArray(o.transmitters) && (!o.transmitters.length || typeof o.transmitters[0] === "string") && Array.isArray(o.payees) && (!o.payees.length || typeof o.payees[0] === "string"));
  },
  isAmino(o: any): o is MsgSetPayeesAmino {
    return o && (o.$typeUrl === MsgSetPayees.typeUrl || typeof o.sender === "string" && typeof o.feed_id === "string" && Array.isArray(o.transmitters) && (!o.transmitters.length || typeof o.transmitters[0] === "string") && Array.isArray(o.payees) && (!o.payees.length || typeof o.payees[0] === "string"));
  },
  encode(message: MsgSetPayees, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.feedId !== "") {
      writer.uint32(18).string(message.feedId);
    }
    for (const v of message.transmitters) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.payees) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPayees {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPayees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.feedId = reader.string();
          break;
        case 3:
          message.transmitters.push(reader.string());
          break;
        case 4:
          message.payees.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetPayees>): MsgSetPayees {
    const message = createBaseMsgSetPayees();
    message.sender = object.sender ?? "";
    message.feedId = object.feedId ?? "";
    message.transmitters = object.transmitters?.map(e => e) || [];
    message.payees = object.payees?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgSetPayeesAmino): MsgSetPayees {
    const message = createBaseMsgSetPayees();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    message.transmitters = object.transmitters?.map(e => e) || [];
    message.payees = object.payees?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgSetPayees): MsgSetPayeesAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    if (message.transmitters) {
      obj.transmitters = message.transmitters.map(e => e);
    } else {
      obj.transmitters = message.transmitters;
    }
    if (message.payees) {
      obj.payees = message.payees.map(e => e);
    } else {
      obj.payees = message.payees;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetPayeesAminoMsg): MsgSetPayees {
    return MsgSetPayees.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPayeesProtoMsg): MsgSetPayees {
    return MsgSetPayees.decode(message.value);
  },
  toProto(message: MsgSetPayees): Uint8Array {
    return MsgSetPayees.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPayees): MsgSetPayeesProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgSetPayees",
      value: MsgSetPayees.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetPayees.typeUrl, MsgSetPayees);
function createBaseMsgSetPayeesResponse(): MsgSetPayeesResponse {
  return {};
}
export const MsgSetPayeesResponse = {
  typeUrl: "/injective.ocr.v1beta1.MsgSetPayeesResponse",
  is(o: any): o is MsgSetPayeesResponse {
    return o && o.$typeUrl === MsgSetPayeesResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetPayeesResponseAmino {
    return o && o.$typeUrl === MsgSetPayeesResponse.typeUrl;
  },
  encode(_: MsgSetPayeesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPayeesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPayeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgSetPayeesResponse>): MsgSetPayeesResponse {
    const message = createBaseMsgSetPayeesResponse();
    return message;
  },
  fromAmino(_: MsgSetPayeesResponseAmino): MsgSetPayeesResponse {
    const message = createBaseMsgSetPayeesResponse();
    return message;
  },
  toAmino(_: MsgSetPayeesResponse): MsgSetPayeesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetPayeesResponseAminoMsg): MsgSetPayeesResponse {
    return MsgSetPayeesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPayeesResponseProtoMsg): MsgSetPayeesResponse {
    return MsgSetPayeesResponse.decode(message.value);
  },
  toProto(message: MsgSetPayeesResponse): Uint8Array {
    return MsgSetPayeesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPayeesResponse): MsgSetPayeesResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgSetPayeesResponse",
      value: MsgSetPayeesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetPayeesResponse.typeUrl, MsgSetPayeesResponse);
function createBaseMsgTransferPayeeship(): MsgTransferPayeeship {
  return {
    sender: "",
    transmitter: "",
    feedId: "",
    proposed: ""
  };
}
export const MsgTransferPayeeship = {
  typeUrl: "/injective.ocr.v1beta1.MsgTransferPayeeship",
  is(o: any): o is MsgTransferPayeeship {
    return o && (o.$typeUrl === MsgTransferPayeeship.typeUrl || typeof o.sender === "string" && typeof o.transmitter === "string" && typeof o.feedId === "string" && typeof o.proposed === "string");
  },
  isAmino(o: any): o is MsgTransferPayeeshipAmino {
    return o && (o.$typeUrl === MsgTransferPayeeship.typeUrl || typeof o.sender === "string" && typeof o.transmitter === "string" && typeof o.feed_id === "string" && typeof o.proposed === "string");
  },
  encode(message: MsgTransferPayeeship, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.transmitter !== "") {
      writer.uint32(18).string(message.transmitter);
    }
    if (message.feedId !== "") {
      writer.uint32(26).string(message.feedId);
    }
    if (message.proposed !== "") {
      writer.uint32(34).string(message.proposed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferPayeeship {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferPayeeship();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.transmitter = reader.string();
          break;
        case 3:
          message.feedId = reader.string();
          break;
        case 4:
          message.proposed = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgTransferPayeeship>): MsgTransferPayeeship {
    const message = createBaseMsgTransferPayeeship();
    message.sender = object.sender ?? "";
    message.transmitter = object.transmitter ?? "";
    message.feedId = object.feedId ?? "";
    message.proposed = object.proposed ?? "";
    return message;
  },
  fromAmino(object: MsgTransferPayeeshipAmino): MsgTransferPayeeship {
    const message = createBaseMsgTransferPayeeship();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.transmitter !== undefined && object.transmitter !== null) {
      message.transmitter = object.transmitter;
    }
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    if (object.proposed !== undefined && object.proposed !== null) {
      message.proposed = object.proposed;
    }
    return message;
  },
  toAmino(message: MsgTransferPayeeship): MsgTransferPayeeshipAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.transmitter = message.transmitter === "" ? undefined : message.transmitter;
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    obj.proposed = message.proposed === "" ? undefined : message.proposed;
    return obj;
  },
  fromAminoMsg(object: MsgTransferPayeeshipAminoMsg): MsgTransferPayeeship {
    return MsgTransferPayeeship.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferPayeeshipProtoMsg): MsgTransferPayeeship {
    return MsgTransferPayeeship.decode(message.value);
  },
  toProto(message: MsgTransferPayeeship): Uint8Array {
    return MsgTransferPayeeship.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferPayeeship): MsgTransferPayeeshipProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgTransferPayeeship",
      value: MsgTransferPayeeship.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgTransferPayeeship.typeUrl, MsgTransferPayeeship);
function createBaseMsgTransferPayeeshipResponse(): MsgTransferPayeeshipResponse {
  return {};
}
export const MsgTransferPayeeshipResponse = {
  typeUrl: "/injective.ocr.v1beta1.MsgTransferPayeeshipResponse",
  is(o: any): o is MsgTransferPayeeshipResponse {
    return o && o.$typeUrl === MsgTransferPayeeshipResponse.typeUrl;
  },
  isAmino(o: any): o is MsgTransferPayeeshipResponseAmino {
    return o && o.$typeUrl === MsgTransferPayeeshipResponse.typeUrl;
  },
  encode(_: MsgTransferPayeeshipResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferPayeeshipResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferPayeeshipResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgTransferPayeeshipResponse>): MsgTransferPayeeshipResponse {
    const message = createBaseMsgTransferPayeeshipResponse();
    return message;
  },
  fromAmino(_: MsgTransferPayeeshipResponseAmino): MsgTransferPayeeshipResponse {
    const message = createBaseMsgTransferPayeeshipResponse();
    return message;
  },
  toAmino(_: MsgTransferPayeeshipResponse): MsgTransferPayeeshipResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransferPayeeshipResponseAminoMsg): MsgTransferPayeeshipResponse {
    return MsgTransferPayeeshipResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferPayeeshipResponseProtoMsg): MsgTransferPayeeshipResponse {
    return MsgTransferPayeeshipResponse.decode(message.value);
  },
  toProto(message: MsgTransferPayeeshipResponse): Uint8Array {
    return MsgTransferPayeeshipResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferPayeeshipResponse): MsgTransferPayeeshipResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgTransferPayeeshipResponse",
      value: MsgTransferPayeeshipResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgTransferPayeeshipResponse.typeUrl, MsgTransferPayeeshipResponse);
function createBaseMsgAcceptPayeeship(): MsgAcceptPayeeship {
  return {
    payee: "",
    transmitter: "",
    feedId: ""
  };
}
export const MsgAcceptPayeeship = {
  typeUrl: "/injective.ocr.v1beta1.MsgAcceptPayeeship",
  is(o: any): o is MsgAcceptPayeeship {
    return o && (o.$typeUrl === MsgAcceptPayeeship.typeUrl || typeof o.payee === "string" && typeof o.transmitter === "string" && typeof o.feedId === "string");
  },
  isAmino(o: any): o is MsgAcceptPayeeshipAmino {
    return o && (o.$typeUrl === MsgAcceptPayeeship.typeUrl || typeof o.payee === "string" && typeof o.transmitter === "string" && typeof o.feed_id === "string");
  },
  encode(message: MsgAcceptPayeeship, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.payee !== "") {
      writer.uint32(10).string(message.payee);
    }
    if (message.transmitter !== "") {
      writer.uint32(18).string(message.transmitter);
    }
    if (message.feedId !== "") {
      writer.uint32(26).string(message.feedId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcceptPayeeship {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptPayeeship();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payee = reader.string();
          break;
        case 2:
          message.transmitter = reader.string();
          break;
        case 3:
          message.feedId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAcceptPayeeship>): MsgAcceptPayeeship {
    const message = createBaseMsgAcceptPayeeship();
    message.payee = object.payee ?? "";
    message.transmitter = object.transmitter ?? "";
    message.feedId = object.feedId ?? "";
    return message;
  },
  fromAmino(object: MsgAcceptPayeeshipAmino): MsgAcceptPayeeship {
    const message = createBaseMsgAcceptPayeeship();
    if (object.payee !== undefined && object.payee !== null) {
      message.payee = object.payee;
    }
    if (object.transmitter !== undefined && object.transmitter !== null) {
      message.transmitter = object.transmitter;
    }
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    return message;
  },
  toAmino(message: MsgAcceptPayeeship): MsgAcceptPayeeshipAmino {
    const obj: any = {};
    obj.payee = message.payee === "" ? undefined : message.payee;
    obj.transmitter = message.transmitter === "" ? undefined : message.transmitter;
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    return obj;
  },
  fromAminoMsg(object: MsgAcceptPayeeshipAminoMsg): MsgAcceptPayeeship {
    return MsgAcceptPayeeship.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAcceptPayeeshipProtoMsg): MsgAcceptPayeeship {
    return MsgAcceptPayeeship.decode(message.value);
  },
  toProto(message: MsgAcceptPayeeship): Uint8Array {
    return MsgAcceptPayeeship.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptPayeeship): MsgAcceptPayeeshipProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgAcceptPayeeship",
      value: MsgAcceptPayeeship.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAcceptPayeeship.typeUrl, MsgAcceptPayeeship);
function createBaseMsgAcceptPayeeshipResponse(): MsgAcceptPayeeshipResponse {
  return {};
}
export const MsgAcceptPayeeshipResponse = {
  typeUrl: "/injective.ocr.v1beta1.MsgAcceptPayeeshipResponse",
  is(o: any): o is MsgAcceptPayeeshipResponse {
    return o && o.$typeUrl === MsgAcceptPayeeshipResponse.typeUrl;
  },
  isAmino(o: any): o is MsgAcceptPayeeshipResponseAmino {
    return o && o.$typeUrl === MsgAcceptPayeeshipResponse.typeUrl;
  },
  encode(_: MsgAcceptPayeeshipResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcceptPayeeshipResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptPayeeshipResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgAcceptPayeeshipResponse>): MsgAcceptPayeeshipResponse {
    const message = createBaseMsgAcceptPayeeshipResponse();
    return message;
  },
  fromAmino(_: MsgAcceptPayeeshipResponseAmino): MsgAcceptPayeeshipResponse {
    const message = createBaseMsgAcceptPayeeshipResponse();
    return message;
  },
  toAmino(_: MsgAcceptPayeeshipResponse): MsgAcceptPayeeshipResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAcceptPayeeshipResponseAminoMsg): MsgAcceptPayeeshipResponse {
    return MsgAcceptPayeeshipResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAcceptPayeeshipResponseProtoMsg): MsgAcceptPayeeshipResponse {
    return MsgAcceptPayeeshipResponse.decode(message.value);
  },
  toProto(message: MsgAcceptPayeeshipResponse): Uint8Array {
    return MsgAcceptPayeeshipResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptPayeeshipResponse): MsgAcceptPayeeshipResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgAcceptPayeeshipResponse",
      value: MsgAcceptPayeeshipResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAcceptPayeeshipResponse.typeUrl, MsgAcceptPayeeshipResponse);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/injective.ocr.v1beta1.MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/injective.ocr.v1beta1.MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);