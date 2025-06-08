import { Any, AnyProtoMsg, AnyAmino } from "../../../google/protobuf/any";
import { Coin, CoinAmino } from "../../base/v1beta1/coin";
import { VoteOption, WeightedVoteOption, WeightedVoteOptionAmino, TextProposal, TextProposalProtoMsg } from "./gov";
import { CommunityPoolSpendProposal, CommunityPoolSpendProposalProtoMsg, CommunityPoolSpendProposalWithDeposit, CommunityPoolSpendProposalWithDepositProtoMsg } from "../../distribution/v1beta1/distribution";
import { ParameterChangeProposal, ParameterChangeProposalProtoMsg } from "../../params/v1beta1/params";
import { SoftwareUpgradeProposal, SoftwareUpgradeProposalProtoMsg, CancelSoftwareUpgradeProposal, CancelSoftwareUpgradeProposalProtoMsg } from "../../upgrade/v1beta1/upgrade";
import { StoreCodeProposal, StoreCodeProposalProtoMsg, InstantiateContractProposal, InstantiateContractProposalProtoMsg, InstantiateContract2Proposal, InstantiateContract2ProposalProtoMsg, MigrateContractProposal, MigrateContractProposalProtoMsg, SudoContractProposal, SudoContractProposalProtoMsg, ExecuteContractProposal, ExecuteContractProposalProtoMsg, UpdateAdminProposal, UpdateAdminProposalProtoMsg, ClearAdminProposal, ClearAdminProposalProtoMsg, PinCodesProposal, PinCodesProposalProtoMsg, UnpinCodesProposal, UnpinCodesProposalProtoMsg, UpdateInstantiateConfigProposal, UpdateInstantiateConfigProposalProtoMsg, StoreAndInstantiateContractProposal, StoreAndInstantiateContractProposalProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial, isSet } from "../../../helpers";
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 * @name MsgSubmitProposal
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.MsgSubmitProposal
 */
export interface MsgSubmitProposal {
  /**
   * content is the proposal's content.
   */
  content?: CommunityPoolSpendProposal | CommunityPoolSpendProposalWithDeposit | TextProposal | ParameterChangeProposal | SoftwareUpgradeProposal | CancelSoftwareUpgradeProposal | StoreCodeProposal | InstantiateContractProposal | InstantiateContract2Proposal | MigrateContractProposal | SudoContractProposal | ExecuteContractProposal | UpdateAdminProposal | ClearAdminProposal | PinCodesProposal | UnpinCodesProposal | UpdateInstantiateConfigProposal | StoreAndInstantiateContractProposal | Any | undefined;
  /**
   * initial_deposit is the deposit value that must be paid at proposal submission.
   */
  initialDeposit: Coin[];
  /**
   * proposer is the account address of the proposer.
   */
  proposer: string;
}
export interface MsgSubmitProposalProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal";
  value: Uint8Array;
}
export type MsgSubmitProposalEncoded = Omit<MsgSubmitProposal, "content"> & {
  /**
   * content is the proposal's content.
   */
  content?: CommunityPoolSpendProposalProtoMsg | CommunityPoolSpendProposalWithDepositProtoMsg | TextProposalProtoMsg | ParameterChangeProposalProtoMsg | SoftwareUpgradeProposalProtoMsg | CancelSoftwareUpgradeProposalProtoMsg | StoreCodeProposalProtoMsg | InstantiateContractProposalProtoMsg | InstantiateContract2ProposalProtoMsg | MigrateContractProposalProtoMsg | SudoContractProposalProtoMsg | ExecuteContractProposalProtoMsg | UpdateAdminProposalProtoMsg | ClearAdminProposalProtoMsg | PinCodesProposalProtoMsg | UnpinCodesProposalProtoMsg | UpdateInstantiateConfigProposalProtoMsg | StoreAndInstantiateContractProposalProtoMsg | AnyProtoMsg | undefined;
};
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 * @name MsgSubmitProposalAmino
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.MsgSubmitProposal
 */
export interface MsgSubmitProposalAmino {
  /**
   * content is the proposal's content.
   */
  content?: AnyAmino;
  /**
   * initial_deposit is the deposit value that must be paid at proposal submission.
   */
  initial_deposit: CoinAmino[];
  /**
   * proposer is the account address of the proposer.
   */
  proposer: string;
}
export interface MsgSubmitProposalAminoMsg {
  type: "cosmos-sdk/MsgSubmitProposal";
  value: MsgSubmitProposalAmino;
}
/**
 * MsgSubmitProposalResponse defines the Msg/SubmitProposal response type.
 * @name MsgSubmitProposalResponse
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.MsgSubmitProposalResponse
 */
export interface MsgSubmitProposalResponse {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposalId: bigint;
}
export interface MsgSubmitProposalResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposalResponse";
  value: Uint8Array;
}
/**
 * MsgSubmitProposalResponse defines the Msg/SubmitProposal response type.
 * @name MsgSubmitProposalResponseAmino
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.MsgSubmitProposalResponse
 */
export interface MsgSubmitProposalResponseAmino {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposal_id: string;
}
export interface MsgSubmitProposalResponseAminoMsg {
  type: "cosmos-sdk/MsgSubmitProposalResponse";
  value: MsgSubmitProposalResponseAmino;
}
/**
 * MsgVote defines a message to cast a vote.
 * @name MsgVote
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.MsgVote
 */
export interface MsgVote {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposalId: bigint;
  /**
   * voter is the voter address for the proposal.
   */
  voter: string;
  /**
   * option defines the vote option.
   */
  option: VoteOption;
}
export interface MsgVoteProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgVote";
  value: Uint8Array;
}
/**
 * MsgVote defines a message to cast a vote.
 * @name MsgVoteAmino
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.MsgVote
 */
export interface MsgVoteAmino {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposal_id: string;
  /**
   * voter is the voter address for the proposal.
   */
  voter: string;
  /**
   * option defines the vote option.
   */
  option: VoteOption;
}
export interface MsgVoteAminoMsg {
  type: "cosmos-sdk/MsgVote";
  value: MsgVoteAmino;
}
/**
 * MsgVoteResponse defines the Msg/Vote response type.
 * @name MsgVoteResponse
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.MsgVoteResponse
 */
export interface MsgVoteResponse {}
export interface MsgVoteResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteResponse";
  value: Uint8Array;
}
/**
 * MsgVoteResponse defines the Msg/Vote response type.
 * @name MsgVoteResponseAmino
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.MsgVoteResponse
 */
export interface MsgVoteResponseAmino {}
export interface MsgVoteResponseAminoMsg {
  type: "cosmos-sdk/MsgVoteResponse";
  value: MsgVoteResponseAmino;
}
/**
 * MsgVoteWeighted defines a message to cast a vote.
 * 
 * Since: cosmos-sdk 0.43
 * @name MsgVoteWeighted
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.MsgVoteWeighted
 */
export interface MsgVoteWeighted {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposalId: bigint;
  /**
   * voter is the voter address for the proposal.
   */
  voter: string;
  /**
   * options defines the weighted vote options.
   */
  options: WeightedVoteOption[];
}
export interface MsgVoteWeightedProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted";
  value: Uint8Array;
}
/**
 * MsgVoteWeighted defines a message to cast a vote.
 * 
 * Since: cosmos-sdk 0.43
 * @name MsgVoteWeightedAmino
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.MsgVoteWeighted
 */
export interface MsgVoteWeightedAmino {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposal_id: string;
  /**
   * voter is the voter address for the proposal.
   */
  voter: string;
  /**
   * options defines the weighted vote options.
   */
  options: WeightedVoteOptionAmino[];
}
export interface MsgVoteWeightedAminoMsg {
  type: "cosmos-sdk/MsgVoteWeighted";
  value: MsgVoteWeightedAmino;
}
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 * 
 * Since: cosmos-sdk 0.43
 * @name MsgVoteWeightedResponse
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.MsgVoteWeightedResponse
 */
export interface MsgVoteWeightedResponse {}
export interface MsgVoteWeightedResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeightedResponse";
  value: Uint8Array;
}
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 * 
 * Since: cosmos-sdk 0.43
 * @name MsgVoteWeightedResponseAmino
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.MsgVoteWeightedResponse
 */
export interface MsgVoteWeightedResponseAmino {}
export interface MsgVoteWeightedResponseAminoMsg {
  type: "cosmos-sdk/MsgVoteWeightedResponse";
  value: MsgVoteWeightedResponseAmino;
}
/**
 * MsgDeposit defines a message to submit a deposit to an existing proposal.
 * @name MsgDeposit
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.MsgDeposit
 */
export interface MsgDeposit {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposalId: bigint;
  /**
   * depositor defines the deposit addresses from the proposals.
   */
  depositor: string;
  /**
   * amount to be deposited by depositor.
   */
  amount: Coin[];
}
export interface MsgDepositProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgDeposit";
  value: Uint8Array;
}
/**
 * MsgDeposit defines a message to submit a deposit to an existing proposal.
 * @name MsgDepositAmino
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.MsgDeposit
 */
export interface MsgDepositAmino {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposal_id: string;
  /**
   * depositor defines the deposit addresses from the proposals.
   */
  depositor: string;
  /**
   * amount to be deposited by depositor.
   */
  amount: CoinAmino[];
}
export interface MsgDepositAminoMsg {
  type: "cosmos-sdk/MsgDeposit";
  value: MsgDepositAmino;
}
/**
 * MsgDepositResponse defines the Msg/Deposit response type.
 * @name MsgDepositResponse
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.MsgDepositResponse
 */
export interface MsgDepositResponse {}
export interface MsgDepositResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgDepositResponse";
  value: Uint8Array;
}
/**
 * MsgDepositResponse defines the Msg/Deposit response type.
 * @name MsgDepositResponseAmino
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.MsgDepositResponse
 */
export interface MsgDepositResponseAmino {}
export interface MsgDepositResponseAminoMsg {
  type: "cosmos-sdk/MsgDepositResponse";
  value: MsgDepositResponseAmino;
}
function createBaseMsgSubmitProposal(): MsgSubmitProposal {
  return {
    content: undefined,
    initialDeposit: [],
    proposer: ""
  };
}
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 * @name MsgSubmitProposal
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.MsgSubmitProposal
 */
export const MsgSubmitProposal = {
  typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
  aminoType: "cosmos-sdk/MsgSubmitProposal",
  is(o: any): o is MsgSubmitProposal {
    return o && (o.$typeUrl === MsgSubmitProposal.typeUrl || Array.isArray(o.initialDeposit) && (!o.initialDeposit.length || Coin.is(o.initialDeposit[0])) && typeof o.proposer === "string");
  },
  isAmino(o: any): o is MsgSubmitProposalAmino {
    return o && (o.$typeUrl === MsgSubmitProposal.typeUrl || Array.isArray(o.initial_deposit) && (!o.initial_deposit.length || Coin.isAmino(o.initial_deposit[0])) && typeof o.proposer === "string");
  },
  encode(message: MsgSubmitProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.content !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.content), writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.initialDeposit) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        case 2:
          message.initialDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.proposer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSubmitProposal>): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.content = object.content !== undefined && object.content !== null ? GlobalDecoderRegistry.fromPartial(object.content) : undefined;
    message.initialDeposit = object.initialDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.proposer = object.proposer ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitProposalAmino): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    if (object.content !== undefined && object.content !== null) {
      message.content = GlobalDecoderRegistry.fromAminoMsg(object.content);
    }
    message.initialDeposit = object.initial_deposit?.map(e => Coin.fromAmino(e)) || [];
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    return message;
  },
  toAmino(message: MsgSubmitProposal): MsgSubmitProposalAmino {
    const obj: any = {};
    obj.content = message.content ? GlobalDecoderRegistry.toAminoMsg(message.content) : undefined;
    if (message.initialDeposit) {
      obj.initial_deposit = message.initialDeposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.initial_deposit = message.initialDeposit;
    }
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitProposalAminoMsg): MsgSubmitProposal {
    return MsgSubmitProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitProposal): MsgSubmitProposalAminoMsg {
    return {
      type: "cosmos-sdk/MsgSubmitProposal",
      value: MsgSubmitProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitProposalProtoMsg): MsgSubmitProposal {
    return MsgSubmitProposal.decode(message.value);
  },
  toProto(message: MsgSubmitProposal): Uint8Array {
    return MsgSubmitProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitProposal): MsgSubmitProposalProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
      value: MsgSubmitProposal.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgSubmitProposal.typeUrl)) {
      return;
    }
    CommunityPoolSpendProposal.registerTypeUrl();
    CommunityPoolSpendProposalWithDeposit.registerTypeUrl();
    TextProposal.registerTypeUrl();
    ParameterChangeProposal.registerTypeUrl();
    SoftwareUpgradeProposal.registerTypeUrl();
    CancelSoftwareUpgradeProposal.registerTypeUrl();
    StoreCodeProposal.registerTypeUrl();
    InstantiateContractProposal.registerTypeUrl();
    InstantiateContract2Proposal.registerTypeUrl();
    MigrateContractProposal.registerTypeUrl();
    SudoContractProposal.registerTypeUrl();
    ExecuteContractProposal.registerTypeUrl();
    UpdateAdminProposal.registerTypeUrl();
    ClearAdminProposal.registerTypeUrl();
    PinCodesProposal.registerTypeUrl();
    UnpinCodesProposal.registerTypeUrl();
    UpdateInstantiateConfigProposal.registerTypeUrl();
    StoreAndInstantiateContractProposal.registerTypeUrl();
    Coin.registerTypeUrl();
  }
};
function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
  return {
    proposalId: BigInt(0)
  };
}
/**
 * MsgSubmitProposalResponse defines the Msg/SubmitProposal response type.
 * @name MsgSubmitProposalResponse
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.MsgSubmitProposalResponse
 */
export const MsgSubmitProposalResponse = {
  typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposalResponse",
  aminoType: "cosmos-sdk/MsgSubmitProposalResponse",
  is(o: any): o is MsgSubmitProposalResponse {
    return o && (o.$typeUrl === MsgSubmitProposalResponse.typeUrl || typeof o.proposalId === "bigint");
  },
  isAmino(o: any): o is MsgSubmitProposalResponseAmino {
    return o && (o.$typeUrl === MsgSubmitProposalResponse.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: MsgSubmitProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSubmitProposalResponseAmino): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: MsgSubmitProposalResponseAminoMsg): MsgSubmitProposalResponse {
    return MsgSubmitProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitProposalResponseProtoMsg): MsgSubmitProposalResponse {
    return MsgSubmitProposalResponse.decode(message.value);
  },
  toProto(message: MsgSubmitProposalResponse): Uint8Array {
    return MsgSubmitProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgVote(): MsgVote {
  return {
    proposalId: BigInt(0),
    voter: "",
    option: 0
  };
}
/**
 * MsgVote defines a message to cast a vote.
 * @name MsgVote
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.MsgVote
 */
export const MsgVote = {
  typeUrl: "/cosmos.gov.v1beta1.MsgVote",
  aminoType: "cosmos-sdk/MsgVote",
  is(o: any): o is MsgVote {
    return o && (o.$typeUrl === MsgVote.typeUrl || typeof o.proposalId === "bigint" && typeof o.voter === "string" && isSet(o.option));
  },
  isAmino(o: any): o is MsgVoteAmino {
    return o && (o.$typeUrl === MsgVote.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && isSet(o.option));
  },
  encode(message: MsgVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgVote>): MsgVote {
    const message = createBaseMsgVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    return message;
  },
  fromAmino(object: MsgVoteAmino): MsgVote {
    const message = createBaseMsgVote();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.option !== undefined && object.option !== null) {
      message.option = object.option;
    }
    return message;
  },
  toAmino(message: MsgVote): MsgVoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.option = message.option === 0 ? undefined : message.option;
    return obj;
  },
  fromAminoMsg(object: MsgVoteAminoMsg): MsgVote {
    return MsgVote.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVote): MsgVoteAminoMsg {
    return {
      type: "cosmos-sdk/MsgVote",
      value: MsgVote.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVoteProtoMsg): MsgVote {
    return MsgVote.decode(message.value);
  },
  toProto(message: MsgVote): Uint8Array {
    return MsgVote.encode(message).finish();
  },
  toProtoMsg(message: MsgVote): MsgVoteProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVote",
      value: MsgVote.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgVoteResponse(): MsgVoteResponse {
  return {};
}
/**
 * MsgVoteResponse defines the Msg/Vote response type.
 * @name MsgVoteResponse
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.MsgVoteResponse
 */
export const MsgVoteResponse = {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteResponse",
  aminoType: "cosmos-sdk/MsgVoteResponse",
  is(o: any): o is MsgVoteResponse {
    return o && o.$typeUrl === MsgVoteResponse.typeUrl;
  },
  isAmino(o: any): o is MsgVoteResponseAmino {
    return o && o.$typeUrl === MsgVoteResponse.typeUrl;
  },
  encode(_: MsgVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteResponse();
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
  fromPartial(_: DeepPartial<MsgVoteResponse>): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },
  fromAmino(_: MsgVoteResponseAmino): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },
  toAmino(_: MsgVoteResponse): MsgVoteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVoteResponseAminoMsg): MsgVoteResponse {
    return MsgVoteResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVoteResponse): MsgVoteResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgVoteResponse",
      value: MsgVoteResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVoteResponseProtoMsg): MsgVoteResponse {
    return MsgVoteResponse.decode(message.value);
  },
  toProto(message: MsgVoteResponse): Uint8Array {
    return MsgVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteResponse): MsgVoteResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVoteResponse",
      value: MsgVoteResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgVoteWeighted(): MsgVoteWeighted {
  return {
    proposalId: BigInt(0),
    voter: "",
    options: []
  };
}
/**
 * MsgVoteWeighted defines a message to cast a vote.
 * 
 * Since: cosmos-sdk 0.43
 * @name MsgVoteWeighted
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.MsgVoteWeighted
 */
export const MsgVoteWeighted = {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
  aminoType: "cosmos-sdk/MsgVoteWeighted",
  is(o: any): o is MsgVoteWeighted {
    return o && (o.$typeUrl === MsgVoteWeighted.typeUrl || typeof o.proposalId === "bigint" && typeof o.voter === "string" && Array.isArray(o.options) && (!o.options.length || WeightedVoteOption.is(o.options[0])));
  },
  isAmino(o: any): o is MsgVoteWeightedAmino {
    return o && (o.$typeUrl === MsgVoteWeighted.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && Array.isArray(o.options) && (!o.options.length || WeightedVoteOption.isAmino(o.options[0])));
  },
  encode(message: MsgVoteWeighted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteWeighted {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteWeighted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgVoteWeighted>): MsgVoteWeighted {
    const message = createBaseMsgVoteWeighted();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.options = object.options?.map(e => WeightedVoteOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgVoteWeightedAmino): MsgVoteWeighted {
    const message = createBaseMsgVoteWeighted();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    message.options = object.options?.map(e => WeightedVoteOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgVoteWeighted): MsgVoteWeightedAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId?.toString() : "0";
    obj.voter = message.voter === "" ? undefined : message.voter;
    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toAmino(e) : undefined);
    } else {
      obj.options = message.options;
    }
    return obj;
  },
  fromAminoMsg(object: MsgVoteWeightedAminoMsg): MsgVoteWeighted {
    return MsgVoteWeighted.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVoteWeighted): MsgVoteWeightedAminoMsg {
    return {
      type: "cosmos-sdk/MsgVoteWeighted",
      value: MsgVoteWeighted.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVoteWeightedProtoMsg): MsgVoteWeighted {
    return MsgVoteWeighted.decode(message.value);
  },
  toProto(message: MsgVoteWeighted): Uint8Array {
    return MsgVoteWeighted.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteWeighted): MsgVoteWeightedProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
      value: MsgVoteWeighted.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgVoteWeighted.typeUrl)) {
      return;
    }
    WeightedVoteOption.registerTypeUrl();
  }
};
function createBaseMsgVoteWeightedResponse(): MsgVoteWeightedResponse {
  return {};
}
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 * 
 * Since: cosmos-sdk 0.43
 * @name MsgVoteWeightedResponse
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.MsgVoteWeightedResponse
 */
export const MsgVoteWeightedResponse = {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeightedResponse",
  aminoType: "cosmos-sdk/MsgVoteWeightedResponse",
  is(o: any): o is MsgVoteWeightedResponse {
    return o && o.$typeUrl === MsgVoteWeightedResponse.typeUrl;
  },
  isAmino(o: any): o is MsgVoteWeightedResponseAmino {
    return o && o.$typeUrl === MsgVoteWeightedResponse.typeUrl;
  },
  encode(_: MsgVoteWeightedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteWeightedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteWeightedResponse();
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
  fromPartial(_: DeepPartial<MsgVoteWeightedResponse>): MsgVoteWeightedResponse {
    const message = createBaseMsgVoteWeightedResponse();
    return message;
  },
  fromAmino(_: MsgVoteWeightedResponseAmino): MsgVoteWeightedResponse {
    const message = createBaseMsgVoteWeightedResponse();
    return message;
  },
  toAmino(_: MsgVoteWeightedResponse): MsgVoteWeightedResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVoteWeightedResponseAminoMsg): MsgVoteWeightedResponse {
    return MsgVoteWeightedResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVoteWeightedResponse): MsgVoteWeightedResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgVoteWeightedResponse",
      value: MsgVoteWeightedResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVoteWeightedResponseProtoMsg): MsgVoteWeightedResponse {
    return MsgVoteWeightedResponse.decode(message.value);
  },
  toProto(message: MsgVoteWeightedResponse): Uint8Array {
    return MsgVoteWeightedResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteWeightedResponse): MsgVoteWeightedResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeightedResponse",
      value: MsgVoteWeightedResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgDeposit(): MsgDeposit {
  return {
    proposalId: BigInt(0),
    depositor: "",
    amount: []
  };
}
/**
 * MsgDeposit defines a message to submit a deposit to an existing proposal.
 * @name MsgDeposit
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.MsgDeposit
 */
export const MsgDeposit = {
  typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
  aminoType: "cosmos-sdk/MsgDeposit",
  is(o: any): o is MsgDeposit {
    return o && (o.$typeUrl === MsgDeposit.typeUrl || typeof o.proposalId === "bigint" && typeof o.depositor === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
  },
  isAmino(o: any): o is MsgDepositAmino {
    return o && (o.$typeUrl === MsgDeposit.typeUrl || typeof o.proposal_id === "bigint" && typeof o.depositor === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])));
  },
  encode(message: MsgDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.depositor = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgDepositAmino): MsgDeposit {
    const message = createBaseMsgDeposit();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgDeposit): MsgDepositAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId?.toString() : "0";
    obj.depositor = message.depositor === "" ? undefined : message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgDepositAminoMsg): MsgDeposit {
    return MsgDeposit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeposit): MsgDepositAminoMsg {
    return {
      type: "cosmos-sdk/MsgDeposit",
      value: MsgDeposit.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDepositProtoMsg): MsgDeposit {
    return MsgDeposit.decode(message.value);
  },
  toProto(message: MsgDeposit): Uint8Array {
    return MsgDeposit.encode(message).finish();
  },
  toProtoMsg(message: MsgDeposit): MsgDepositProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
      value: MsgDeposit.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgDeposit.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}
/**
 * MsgDepositResponse defines the Msg/Deposit response type.
 * @name MsgDepositResponse
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.MsgDepositResponse
 */
export const MsgDepositResponse = {
  typeUrl: "/cosmos.gov.v1beta1.MsgDepositResponse",
  aminoType: "cosmos-sdk/MsgDepositResponse",
  is(o: any): o is MsgDepositResponse {
    return o && o.$typeUrl === MsgDepositResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDepositResponseAmino {
    return o && o.$typeUrl === MsgDepositResponse.typeUrl;
  },
  encode(_: MsgDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();
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
  fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },
  fromAmino(_: MsgDepositResponseAmino): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },
  toAmino(_: MsgDepositResponse): MsgDepositResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDepositResponseAminoMsg): MsgDepositResponse {
    return MsgDepositResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDepositResponse): MsgDepositResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgDepositResponse",
      value: MsgDepositResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDepositResponseProtoMsg): MsgDepositResponse {
    return MsgDepositResponse.decode(message.value);
  },
  toProto(message: MsgDepositResponse): Uint8Array {
    return MsgDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositResponse): MsgDepositResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgDepositResponse",
      value: MsgDepositResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};