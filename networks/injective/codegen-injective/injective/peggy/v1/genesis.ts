import { Params, ParamsAmino } from "./params";
import { Valset, ValsetAmino, ERC20ToDenom, ERC20ToDenomAmino } from "./types";
import { MsgValsetConfirm, MsgValsetConfirmAmino, MsgConfirmBatch, MsgConfirmBatchAmino, MsgSetOrchestratorAddresses, MsgSetOrchestratorAddressesAmino } from "./msgs";
import { OutgoingTxBatch, OutgoingTxBatchAmino, OutgoingTransferTx, OutgoingTransferTxAmino } from "./batch";
import { Attestation, AttestationAmino } from "./attestation";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState struct */
export interface GenesisState {
  params?: Params;
  lastObservedNonce: bigint;
  valsets: Valset[];
  valsetConfirms: MsgValsetConfirm[];
  batches: OutgoingTxBatch[];
  batchConfirms: MsgConfirmBatch[];
  attestations: Attestation[];
  orchestratorAddresses: MsgSetOrchestratorAddresses[];
  erc20ToDenoms: ERC20ToDenom[];
  unbatchedTransfers: OutgoingTransferTx[];
  lastObservedEthereumHeight: bigint;
  lastOutgoingBatchId: bigint;
  lastOutgoingPoolId: bigint;
  lastObservedValset: Valset;
  ethereumBlacklist: string[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/injective.peggy.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState struct */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  last_observed_nonce: string;
  valsets: ValsetAmino[];
  valset_confirms: MsgValsetConfirmAmino[];
  batches: OutgoingTxBatchAmino[];
  batch_confirms: MsgConfirmBatchAmino[];
  attestations: AttestationAmino[];
  orchestrator_addresses: MsgSetOrchestratorAddressesAmino[];
  erc20_to_denoms: ERC20ToDenomAmino[];
  unbatched_transfers: OutgoingTransferTxAmino[];
  last_observed_ethereum_height: string;
  last_outgoing_batch_id: string;
  last_outgoing_pool_id: string;
  last_observed_valset: ValsetAmino;
  ethereum_blacklist: string[];
}
export interface GenesisStateAminoMsg {
  type: "/injective.peggy.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    lastObservedNonce: BigInt(0),
    valsets: [],
    valsetConfirms: [],
    batches: [],
    batchConfirms: [],
    attestations: [],
    orchestratorAddresses: [],
    erc20ToDenoms: [],
    unbatchedTransfers: [],
    lastObservedEthereumHeight: BigInt(0),
    lastOutgoingBatchId: BigInt(0),
    lastOutgoingPoolId: BigInt(0),
    lastObservedValset: Valset.fromPartial({}),
    ethereumBlacklist: []
  };
}
export const GenesisState = {
  typeUrl: "/injective.peggy.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || typeof o.lastObservedNonce === "bigint" && Array.isArray(o.valsets) && (!o.valsets.length || Valset.is(o.valsets[0])) && Array.isArray(o.valsetConfirms) && (!o.valsetConfirms.length || MsgValsetConfirm.is(o.valsetConfirms[0])) && Array.isArray(o.batches) && (!o.batches.length || OutgoingTxBatch.is(o.batches[0])) && Array.isArray(o.batchConfirms) && (!o.batchConfirms.length || MsgConfirmBatch.is(o.batchConfirms[0])) && Array.isArray(o.attestations) && (!o.attestations.length || Attestation.is(o.attestations[0])) && Array.isArray(o.orchestratorAddresses) && (!o.orchestratorAddresses.length || MsgSetOrchestratorAddresses.is(o.orchestratorAddresses[0])) && Array.isArray(o.erc20ToDenoms) && (!o.erc20ToDenoms.length || ERC20ToDenom.is(o.erc20ToDenoms[0])) && Array.isArray(o.unbatchedTransfers) && (!o.unbatchedTransfers.length || OutgoingTransferTx.is(o.unbatchedTransfers[0])) && typeof o.lastObservedEthereumHeight === "bigint" && typeof o.lastOutgoingBatchId === "bigint" && typeof o.lastOutgoingPoolId === "bigint" && Valset.is(o.lastObservedValset) && Array.isArray(o.ethereumBlacklist) && (!o.ethereumBlacklist.length || typeof o.ethereumBlacklist[0] === "string"));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || typeof o.last_observed_nonce === "bigint" && Array.isArray(o.valsets) && (!o.valsets.length || Valset.isAmino(o.valsets[0])) && Array.isArray(o.valset_confirms) && (!o.valset_confirms.length || MsgValsetConfirm.isAmino(o.valset_confirms[0])) && Array.isArray(o.batches) && (!o.batches.length || OutgoingTxBatch.isAmino(o.batches[0])) && Array.isArray(o.batch_confirms) && (!o.batch_confirms.length || MsgConfirmBatch.isAmino(o.batch_confirms[0])) && Array.isArray(o.attestations) && (!o.attestations.length || Attestation.isAmino(o.attestations[0])) && Array.isArray(o.orchestrator_addresses) && (!o.orchestrator_addresses.length || MsgSetOrchestratorAddresses.isAmino(o.orchestrator_addresses[0])) && Array.isArray(o.erc20_to_denoms) && (!o.erc20_to_denoms.length || ERC20ToDenom.isAmino(o.erc20_to_denoms[0])) && Array.isArray(o.unbatched_transfers) && (!o.unbatched_transfers.length || OutgoingTransferTx.isAmino(o.unbatched_transfers[0])) && typeof o.last_observed_ethereum_height === "bigint" && typeof o.last_outgoing_batch_id === "bigint" && typeof o.last_outgoing_pool_id === "bigint" && Valset.isAmino(o.last_observed_valset) && Array.isArray(o.ethereum_blacklist) && (!o.ethereum_blacklist.length || typeof o.ethereum_blacklist[0] === "string"));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastObservedNonce !== BigInt(0)) {
      writer.uint32(16).uint64(message.lastObservedNonce);
    }
    for (const v of message.valsets) {
      Valset.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.valsetConfirms) {
      MsgValsetConfirm.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.batches) {
      OutgoingTxBatch.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.batchConfirms) {
      MsgConfirmBatch.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.attestations) {
      Attestation.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.orchestratorAddresses) {
      MsgSetOrchestratorAddresses.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.erc20ToDenoms) {
      ERC20ToDenom.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.unbatchedTransfers) {
      OutgoingTransferTx.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.lastObservedEthereumHeight !== BigInt(0)) {
      writer.uint32(88).uint64(message.lastObservedEthereumHeight);
    }
    if (message.lastOutgoingBatchId !== BigInt(0)) {
      writer.uint32(96).uint64(message.lastOutgoingBatchId);
    }
    if (message.lastOutgoingPoolId !== BigInt(0)) {
      writer.uint32(104).uint64(message.lastOutgoingPoolId);
    }
    if (message.lastObservedValset !== undefined) {
      Valset.encode(message.lastObservedValset, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.ethereumBlacklist) {
      writer.uint32(122).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.lastObservedNonce = reader.uint64();
          break;
        case 3:
          message.valsets.push(Valset.decode(reader, reader.uint32()));
          break;
        case 4:
          message.valsetConfirms.push(MsgValsetConfirm.decode(reader, reader.uint32()));
          break;
        case 5:
          message.batches.push(OutgoingTxBatch.decode(reader, reader.uint32()));
          break;
        case 6:
          message.batchConfirms.push(MsgConfirmBatch.decode(reader, reader.uint32()));
          break;
        case 7:
          message.attestations.push(Attestation.decode(reader, reader.uint32()));
          break;
        case 8:
          message.orchestratorAddresses.push(MsgSetOrchestratorAddresses.decode(reader, reader.uint32()));
          break;
        case 9:
          message.erc20ToDenoms.push(ERC20ToDenom.decode(reader, reader.uint32()));
          break;
        case 10:
          message.unbatchedTransfers.push(OutgoingTransferTx.decode(reader, reader.uint32()));
          break;
        case 11:
          message.lastObservedEthereumHeight = reader.uint64();
          break;
        case 12:
          message.lastOutgoingBatchId = reader.uint64();
          break;
        case 13:
          message.lastOutgoingPoolId = reader.uint64();
          break;
        case 14:
          message.lastObservedValset = Valset.decode(reader, reader.uint32());
          break;
        case 15:
          message.ethereumBlacklist.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.lastObservedNonce = object.lastObservedNonce !== undefined && object.lastObservedNonce !== null ? BigInt(object.lastObservedNonce.toString()) : BigInt(0);
    message.valsets = object.valsets?.map(e => Valset.fromPartial(e)) || [];
    message.valsetConfirms = object.valsetConfirms?.map(e => MsgValsetConfirm.fromPartial(e)) || [];
    message.batches = object.batches?.map(e => OutgoingTxBatch.fromPartial(e)) || [];
    message.batchConfirms = object.batchConfirms?.map(e => MsgConfirmBatch.fromPartial(e)) || [];
    message.attestations = object.attestations?.map(e => Attestation.fromPartial(e)) || [];
    message.orchestratorAddresses = object.orchestratorAddresses?.map(e => MsgSetOrchestratorAddresses.fromPartial(e)) || [];
    message.erc20ToDenoms = object.erc20ToDenoms?.map(e => ERC20ToDenom.fromPartial(e)) || [];
    message.unbatchedTransfers = object.unbatchedTransfers?.map(e => OutgoingTransferTx.fromPartial(e)) || [];
    message.lastObservedEthereumHeight = object.lastObservedEthereumHeight !== undefined && object.lastObservedEthereumHeight !== null ? BigInt(object.lastObservedEthereumHeight.toString()) : BigInt(0);
    message.lastOutgoingBatchId = object.lastOutgoingBatchId !== undefined && object.lastOutgoingBatchId !== null ? BigInt(object.lastOutgoingBatchId.toString()) : BigInt(0);
    message.lastOutgoingPoolId = object.lastOutgoingPoolId !== undefined && object.lastOutgoingPoolId !== null ? BigInt(object.lastOutgoingPoolId.toString()) : BigInt(0);
    message.lastObservedValset = object.lastObservedValset !== undefined && object.lastObservedValset !== null ? Valset.fromPartial(object.lastObservedValset) : undefined;
    message.ethereumBlacklist = object.ethereumBlacklist?.map(e => e) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.last_observed_nonce !== undefined && object.last_observed_nonce !== null) {
      message.lastObservedNonce = BigInt(object.last_observed_nonce);
    }
    message.valsets = object.valsets?.map(e => Valset.fromAmino(e)) || [];
    message.valsetConfirms = object.valset_confirms?.map(e => MsgValsetConfirm.fromAmino(e)) || [];
    message.batches = object.batches?.map(e => OutgoingTxBatch.fromAmino(e)) || [];
    message.batchConfirms = object.batch_confirms?.map(e => MsgConfirmBatch.fromAmino(e)) || [];
    message.attestations = object.attestations?.map(e => Attestation.fromAmino(e)) || [];
    message.orchestratorAddresses = object.orchestrator_addresses?.map(e => MsgSetOrchestratorAddresses.fromAmino(e)) || [];
    message.erc20ToDenoms = object.erc20_to_denoms?.map(e => ERC20ToDenom.fromAmino(e)) || [];
    message.unbatchedTransfers = object.unbatched_transfers?.map(e => OutgoingTransferTx.fromAmino(e)) || [];
    if (object.last_observed_ethereum_height !== undefined && object.last_observed_ethereum_height !== null) {
      message.lastObservedEthereumHeight = BigInt(object.last_observed_ethereum_height);
    }
    if (object.last_outgoing_batch_id !== undefined && object.last_outgoing_batch_id !== null) {
      message.lastOutgoingBatchId = BigInt(object.last_outgoing_batch_id);
    }
    if (object.last_outgoing_pool_id !== undefined && object.last_outgoing_pool_id !== null) {
      message.lastOutgoingPoolId = BigInt(object.last_outgoing_pool_id);
    }
    if (object.last_observed_valset !== undefined && object.last_observed_valset !== null) {
      message.lastObservedValset = Valset.fromAmino(object.last_observed_valset);
    }
    message.ethereumBlacklist = object.ethereum_blacklist?.map(e => e) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.last_observed_nonce = message.lastObservedNonce !== BigInt(0) ? message.lastObservedNonce.toString() : undefined;
    if (message.valsets) {
      obj.valsets = message.valsets.map(e => e ? Valset.toAmino(e) : undefined);
    } else {
      obj.valsets = message.valsets;
    }
    if (message.valsetConfirms) {
      obj.valset_confirms = message.valsetConfirms.map(e => e ? MsgValsetConfirm.toAmino(e) : undefined);
    } else {
      obj.valset_confirms = message.valsetConfirms;
    }
    if (message.batches) {
      obj.batches = message.batches.map(e => e ? OutgoingTxBatch.toAmino(e) : undefined);
    } else {
      obj.batches = message.batches;
    }
    if (message.batchConfirms) {
      obj.batch_confirms = message.batchConfirms.map(e => e ? MsgConfirmBatch.toAmino(e) : undefined);
    } else {
      obj.batch_confirms = message.batchConfirms;
    }
    if (message.attestations) {
      obj.attestations = message.attestations.map(e => e ? Attestation.toAmino(e) : undefined);
    } else {
      obj.attestations = message.attestations;
    }
    if (message.orchestratorAddresses) {
      obj.orchestrator_addresses = message.orchestratorAddresses.map(e => e ? MsgSetOrchestratorAddresses.toAmino(e) : undefined);
    } else {
      obj.orchestrator_addresses = message.orchestratorAddresses;
    }
    if (message.erc20ToDenoms) {
      obj.erc20_to_denoms = message.erc20ToDenoms.map(e => e ? ERC20ToDenom.toAmino(e) : undefined);
    } else {
      obj.erc20_to_denoms = message.erc20ToDenoms;
    }
    if (message.unbatchedTransfers) {
      obj.unbatched_transfers = message.unbatchedTransfers.map(e => e ? OutgoingTransferTx.toAmino(e) : undefined);
    } else {
      obj.unbatched_transfers = message.unbatchedTransfers;
    }
    obj.last_observed_ethereum_height = message.lastObservedEthereumHeight !== BigInt(0) ? message.lastObservedEthereumHeight.toString() : undefined;
    obj.last_outgoing_batch_id = message.lastOutgoingBatchId !== BigInt(0) ? message.lastOutgoingBatchId.toString() : undefined;
    obj.last_outgoing_pool_id = message.lastOutgoingPoolId !== BigInt(0) ? message.lastOutgoingPoolId.toString() : undefined;
    obj.last_observed_valset = message.lastObservedValset ? Valset.toAmino(message.lastObservedValset) : undefined;
    if (message.ethereumBlacklist) {
      obj.ethereum_blacklist = message.ethereumBlacklist.map(e => e);
    } else {
      obj.ethereum_blacklist = message.ethereumBlacklist;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);