import { ClaimType } from "./attestation";
import { BridgeValidator, BridgeValidatorAmino } from "./types";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * @name EventAttestationObserved
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventAttestationObserved
 */
export interface EventAttestationObserved {
  attestationType: ClaimType;
  bridgeContract: string;
  bridgeChainId: bigint;
  attestationId: Uint8Array;
  nonce: bigint;
}
export interface EventAttestationObservedProtoMsg {
  typeUrl: "/injective.peggy.v1.EventAttestationObserved";
  value: Uint8Array;
}
/**
 * @name EventAttestationObservedAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventAttestationObserved
 */
export interface EventAttestationObservedAmino {
  attestation_type: ClaimType;
  bridge_contract: string;
  bridge_chain_id: string;
  attestation_id: string;
  nonce: string;
}
export interface EventAttestationObservedAminoMsg {
  type: "/injective.peggy.v1.EventAttestationObserved";
  value: EventAttestationObservedAmino;
}
/**
 * @name EventBridgeWithdrawCanceled
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventBridgeWithdrawCanceled
 */
export interface EventBridgeWithdrawCanceled {
  bridgeContract: string;
  bridgeChainId: bigint;
}
export interface EventBridgeWithdrawCanceledProtoMsg {
  typeUrl: "/injective.peggy.v1.EventBridgeWithdrawCanceled";
  value: Uint8Array;
}
/**
 * @name EventBridgeWithdrawCanceledAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventBridgeWithdrawCanceled
 */
export interface EventBridgeWithdrawCanceledAmino {
  bridge_contract: string;
  bridge_chain_id: string;
}
export interface EventBridgeWithdrawCanceledAminoMsg {
  type: "/injective.peggy.v1.EventBridgeWithdrawCanceled";
  value: EventBridgeWithdrawCanceledAmino;
}
/**
 * @name EventOutgoingBatch
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventOutgoingBatch
 */
export interface EventOutgoingBatch {
  denom: string;
  orchestratorAddress: string;
  batchNonce: bigint;
  batchTimeout: bigint;
  batchTxIds: bigint[];
}
export interface EventOutgoingBatchProtoMsg {
  typeUrl: "/injective.peggy.v1.EventOutgoingBatch";
  value: Uint8Array;
}
/**
 * @name EventOutgoingBatchAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventOutgoingBatch
 */
export interface EventOutgoingBatchAmino {
  denom: string;
  orchestrator_address: string;
  batch_nonce: string;
  batch_timeout: string;
  batch_tx_ids: string[];
}
export interface EventOutgoingBatchAminoMsg {
  type: "/injective.peggy.v1.EventOutgoingBatch";
  value: EventOutgoingBatchAmino;
}
/**
 * @name EventOutgoingBatchCanceled
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventOutgoingBatchCanceled
 */
export interface EventOutgoingBatchCanceled {
  bridgeContract: string;
  bridgeChainId: bigint;
  batchId: bigint;
  nonce: bigint;
}
export interface EventOutgoingBatchCanceledProtoMsg {
  typeUrl: "/injective.peggy.v1.EventOutgoingBatchCanceled";
  value: Uint8Array;
}
/**
 * @name EventOutgoingBatchCanceledAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventOutgoingBatchCanceled
 */
export interface EventOutgoingBatchCanceledAmino {
  bridge_contract: string;
  bridge_chain_id: string;
  batch_id: string;
  nonce: string;
}
export interface EventOutgoingBatchCanceledAminoMsg {
  type: "/injective.peggy.v1.EventOutgoingBatchCanceled";
  value: EventOutgoingBatchCanceledAmino;
}
/**
 * @name EventValsetUpdateRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventValsetUpdateRequest
 */
export interface EventValsetUpdateRequest {
  valsetNonce: bigint;
  valsetHeight: bigint;
  valsetMembers: BridgeValidator[];
  rewardAmount: string;
  rewardToken: string;
}
export interface EventValsetUpdateRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.EventValsetUpdateRequest";
  value: Uint8Array;
}
/**
 * @name EventValsetUpdateRequestAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventValsetUpdateRequest
 */
export interface EventValsetUpdateRequestAmino {
  valset_nonce: string;
  valset_height: string;
  valset_members: BridgeValidatorAmino[];
  reward_amount: string;
  reward_token: string;
}
export interface EventValsetUpdateRequestAminoMsg {
  type: "/injective.peggy.v1.EventValsetUpdateRequest";
  value: EventValsetUpdateRequestAmino;
}
/**
 * @name EventSetOrchestratorAddresses
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventSetOrchestratorAddresses
 */
export interface EventSetOrchestratorAddresses {
  validatorAddress: string;
  orchestratorAddress: string;
  operatorEthAddress: string;
}
export interface EventSetOrchestratorAddressesProtoMsg {
  typeUrl: "/injective.peggy.v1.EventSetOrchestratorAddresses";
  value: Uint8Array;
}
/**
 * @name EventSetOrchestratorAddressesAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventSetOrchestratorAddresses
 */
export interface EventSetOrchestratorAddressesAmino {
  validator_address: string;
  orchestrator_address: string;
  operator_eth_address: string;
}
export interface EventSetOrchestratorAddressesAminoMsg {
  type: "/injective.peggy.v1.EventSetOrchestratorAddresses";
  value: EventSetOrchestratorAddressesAmino;
}
/**
 * @name EventValsetConfirm
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventValsetConfirm
 */
export interface EventValsetConfirm {
  valsetNonce: bigint;
  orchestratorAddress: string;
}
export interface EventValsetConfirmProtoMsg {
  typeUrl: "/injective.peggy.v1.EventValsetConfirm";
  value: Uint8Array;
}
/**
 * @name EventValsetConfirmAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventValsetConfirm
 */
export interface EventValsetConfirmAmino {
  valset_nonce: string;
  orchestrator_address: string;
}
export interface EventValsetConfirmAminoMsg {
  type: "/injective.peggy.v1.EventValsetConfirm";
  value: EventValsetConfirmAmino;
}
/**
 * @name EventSendToEth
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventSendToEth
 */
export interface EventSendToEth {
  outgoingTxId: bigint;
  sender: string;
  receiver: string;
  amount: string;
  bridgeFee: string;
}
export interface EventSendToEthProtoMsg {
  typeUrl: "/injective.peggy.v1.EventSendToEth";
  value: Uint8Array;
}
/**
 * @name EventSendToEthAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventSendToEth
 */
export interface EventSendToEthAmino {
  outgoing_tx_id: string;
  sender: string;
  receiver: string;
  amount: string;
  bridge_fee: string;
}
export interface EventSendToEthAminoMsg {
  type: "/injective.peggy.v1.EventSendToEth";
  value: EventSendToEthAmino;
}
/**
 * @name EventConfirmBatch
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventConfirmBatch
 */
export interface EventConfirmBatch {
  batchNonce: bigint;
  orchestratorAddress: string;
}
export interface EventConfirmBatchProtoMsg {
  typeUrl: "/injective.peggy.v1.EventConfirmBatch";
  value: Uint8Array;
}
/**
 * @name EventConfirmBatchAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventConfirmBatch
 */
export interface EventConfirmBatchAmino {
  batch_nonce: string;
  orchestrator_address: string;
}
export interface EventConfirmBatchAminoMsg {
  type: "/injective.peggy.v1.EventConfirmBatch";
  value: EventConfirmBatchAmino;
}
/**
 * @name EventAttestationVote
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventAttestationVote
 */
export interface EventAttestationVote {
  eventNonce: bigint;
  attestationId: Uint8Array;
  voter: string;
}
export interface EventAttestationVoteProtoMsg {
  typeUrl: "/injective.peggy.v1.EventAttestationVote";
  value: Uint8Array;
}
/**
 * @name EventAttestationVoteAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventAttestationVote
 */
export interface EventAttestationVoteAmino {
  event_nonce: string;
  attestation_id: string;
  voter: string;
}
export interface EventAttestationVoteAminoMsg {
  type: "/injective.peggy.v1.EventAttestationVote";
  value: EventAttestationVoteAmino;
}
/**
 * @name EventDepositClaim
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventDepositClaim
 */
export interface EventDepositClaim {
  eventNonce: bigint;
  eventHeight: bigint;
  attestationId: Uint8Array;
  ethereumSender: string;
  cosmosReceiver: string;
  tokenContract: string;
  amount: string;
  orchestratorAddress: string;
  data: string;
}
export interface EventDepositClaimProtoMsg {
  typeUrl: "/injective.peggy.v1.EventDepositClaim";
  value: Uint8Array;
}
/**
 * @name EventDepositClaimAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventDepositClaim
 */
export interface EventDepositClaimAmino {
  event_nonce: string;
  event_height: string;
  attestation_id: string;
  ethereum_sender: string;
  cosmos_receiver: string;
  token_contract: string;
  amount: string;
  orchestrator_address: string;
  data: string;
}
export interface EventDepositClaimAminoMsg {
  type: "/injective.peggy.v1.EventDepositClaim";
  value: EventDepositClaimAmino;
}
/**
 * @name EventWithdrawClaim
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventWithdrawClaim
 */
export interface EventWithdrawClaim {
  eventNonce: bigint;
  eventHeight: bigint;
  attestationId: Uint8Array;
  batchNonce: bigint;
  tokenContract: string;
  orchestratorAddress: string;
}
export interface EventWithdrawClaimProtoMsg {
  typeUrl: "/injective.peggy.v1.EventWithdrawClaim";
  value: Uint8Array;
}
/**
 * @name EventWithdrawClaimAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventWithdrawClaim
 */
export interface EventWithdrawClaimAmino {
  event_nonce: string;
  event_height: string;
  attestation_id: string;
  batch_nonce: string;
  token_contract: string;
  orchestrator_address: string;
}
export interface EventWithdrawClaimAminoMsg {
  type: "/injective.peggy.v1.EventWithdrawClaim";
  value: EventWithdrawClaimAmino;
}
/**
 * @name EventERC20DeployedClaim
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventERC20DeployedClaim
 */
export interface EventERC20DeployedClaim {
  eventNonce: bigint;
  eventHeight: bigint;
  attestationId: Uint8Array;
  cosmosDenom: string;
  tokenContract: string;
  name: string;
  symbol: string;
  decimals: bigint;
  orchestratorAddress: string;
}
export interface EventERC20DeployedClaimProtoMsg {
  typeUrl: "/injective.peggy.v1.EventERC20DeployedClaim";
  value: Uint8Array;
}
/**
 * @name EventERC20DeployedClaimAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventERC20DeployedClaim
 */
export interface EventERC20DeployedClaimAmino {
  event_nonce: string;
  event_height: string;
  attestation_id: string;
  cosmos_denom: string;
  token_contract: string;
  name: string;
  symbol: string;
  decimals: string;
  orchestrator_address: string;
}
export interface EventERC20DeployedClaimAminoMsg {
  type: "/injective.peggy.v1.EventERC20DeployedClaim";
  value: EventERC20DeployedClaimAmino;
}
/**
 * @name EventValsetUpdateClaim
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventValsetUpdateClaim
 */
export interface EventValsetUpdateClaim {
  eventNonce: bigint;
  eventHeight: bigint;
  attestationId: Uint8Array;
  valsetNonce: bigint;
  valsetMembers: BridgeValidator[];
  rewardAmount: string;
  rewardToken: string;
  orchestratorAddress: string;
}
export interface EventValsetUpdateClaimProtoMsg {
  typeUrl: "/injective.peggy.v1.EventValsetUpdateClaim";
  value: Uint8Array;
}
/**
 * @name EventValsetUpdateClaimAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventValsetUpdateClaim
 */
export interface EventValsetUpdateClaimAmino {
  event_nonce: string;
  event_height: string;
  attestation_id: string;
  valset_nonce: string;
  valset_members: BridgeValidatorAmino[];
  reward_amount: string;
  reward_token: string;
  orchestrator_address: string;
}
export interface EventValsetUpdateClaimAminoMsg {
  type: "/injective.peggy.v1.EventValsetUpdateClaim";
  value: EventValsetUpdateClaimAmino;
}
/**
 * @name EventCancelSendToEth
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventCancelSendToEth
 */
export interface EventCancelSendToEth {
  outgoingTxId: bigint;
}
export interface EventCancelSendToEthProtoMsg {
  typeUrl: "/injective.peggy.v1.EventCancelSendToEth";
  value: Uint8Array;
}
/**
 * @name EventCancelSendToEthAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventCancelSendToEth
 */
export interface EventCancelSendToEthAmino {
  outgoing_tx_id: string;
}
export interface EventCancelSendToEthAminoMsg {
  type: "/injective.peggy.v1.EventCancelSendToEth";
  value: EventCancelSendToEthAmino;
}
/**
 * @name EventSubmitBadSignatureEvidence
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventSubmitBadSignatureEvidence
 */
export interface EventSubmitBadSignatureEvidence {
  badEthSignature: string;
  badEthSignatureSubject: string;
}
export interface EventSubmitBadSignatureEvidenceProtoMsg {
  typeUrl: "/injective.peggy.v1.EventSubmitBadSignatureEvidence";
  value: Uint8Array;
}
/**
 * @name EventSubmitBadSignatureEvidenceAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventSubmitBadSignatureEvidence
 */
export interface EventSubmitBadSignatureEvidenceAmino {
  bad_eth_signature: string;
  bad_eth_signature_subject: string;
}
export interface EventSubmitBadSignatureEvidenceAminoMsg {
  type: "/injective.peggy.v1.EventSubmitBadSignatureEvidence";
  value: EventSubmitBadSignatureEvidenceAmino;
}
/**
 * @name EventValidatorSlash
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventValidatorSlash
 */
export interface EventValidatorSlash {
  power: bigint;
  reason: string;
  consensusAddress: string;
  operatorAddress: string;
  moniker: string;
}
export interface EventValidatorSlashProtoMsg {
  typeUrl: "/injective.peggy.v1.EventValidatorSlash";
  value: Uint8Array;
}
/**
 * @name EventValidatorSlashAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventValidatorSlash
 */
export interface EventValidatorSlashAmino {
  power: string;
  reason: string;
  consensus_address: string;
  operator_address: string;
  moniker: string;
}
export interface EventValidatorSlashAminoMsg {
  type: "/injective.peggy.v1.EventValidatorSlash";
  value: EventValidatorSlashAmino;
}
function createBaseEventAttestationObserved(): EventAttestationObserved {
  return {
    attestationType: 0,
    bridgeContract: "",
    bridgeChainId: BigInt(0),
    attestationId: new Uint8Array(),
    nonce: BigInt(0)
  };
}
/**
 * @name EventAttestationObserved
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventAttestationObserved
 */
export const EventAttestationObserved = {
  typeUrl: "/injective.peggy.v1.EventAttestationObserved",
  is(o: any): o is EventAttestationObserved {
    return o && (o.$typeUrl === EventAttestationObserved.typeUrl || isSet(o.attestationType) && typeof o.bridgeContract === "string" && typeof o.bridgeChainId === "bigint" && (o.attestationId instanceof Uint8Array || typeof o.attestationId === "string") && typeof o.nonce === "bigint");
  },
  isAmino(o: any): o is EventAttestationObservedAmino {
    return o && (o.$typeUrl === EventAttestationObserved.typeUrl || isSet(o.attestation_type) && typeof o.bridge_contract === "string" && typeof o.bridge_chain_id === "bigint" && (o.attestation_id instanceof Uint8Array || typeof o.attestation_id === "string") && typeof o.nonce === "bigint");
  },
  encode(message: EventAttestationObserved, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.attestationType !== 0) {
      writer.uint32(8).int32(message.attestationType);
    }
    if (message.bridgeContract !== "") {
      writer.uint32(18).string(message.bridgeContract);
    }
    if (message.bridgeChainId !== BigInt(0)) {
      writer.uint32(24).uint64(message.bridgeChainId);
    }
    if (message.attestationId.length !== 0) {
      writer.uint32(34).bytes(message.attestationId);
    }
    if (message.nonce !== BigInt(0)) {
      writer.uint32(40).uint64(message.nonce);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAttestationObserved {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAttestationObserved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attestationType = reader.int32() as any;
          break;
        case 2:
          message.bridgeContract = reader.string();
          break;
        case 3:
          message.bridgeChainId = reader.uint64();
          break;
        case 4:
          message.attestationId = reader.bytes();
          break;
        case 5:
          message.nonce = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventAttestationObserved>): EventAttestationObserved {
    const message = createBaseEventAttestationObserved();
    message.attestationType = object.attestationType ?? 0;
    message.bridgeContract = object.bridgeContract ?? "";
    message.bridgeChainId = object.bridgeChainId !== undefined && object.bridgeChainId !== null ? BigInt(object.bridgeChainId.toString()) : BigInt(0);
    message.attestationId = object.attestationId ?? new Uint8Array();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventAttestationObservedAmino): EventAttestationObserved {
    const message = createBaseEventAttestationObserved();
    if (object.attestation_type !== undefined && object.attestation_type !== null) {
      message.attestationType = object.attestation_type;
    }
    if (object.bridge_contract !== undefined && object.bridge_contract !== null) {
      message.bridgeContract = object.bridge_contract;
    }
    if (object.bridge_chain_id !== undefined && object.bridge_chain_id !== null) {
      message.bridgeChainId = BigInt(object.bridge_chain_id);
    }
    if (object.attestation_id !== undefined && object.attestation_id !== null) {
      message.attestationId = bytesFromBase64(object.attestation_id);
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce);
    }
    return message;
  },
  toAmino(message: EventAttestationObserved): EventAttestationObservedAmino {
    const obj: any = {};
    obj.attestation_type = message.attestationType === 0 ? undefined : message.attestationType;
    obj.bridge_contract = message.bridgeContract === "" ? undefined : message.bridgeContract;
    obj.bridge_chain_id = message.bridgeChainId !== BigInt(0) ? message.bridgeChainId?.toString() : undefined;
    obj.attestation_id = message.attestationId ? base64FromBytes(message.attestationId) : undefined;
    obj.nonce = message.nonce !== BigInt(0) ? message.nonce?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventAttestationObservedAminoMsg): EventAttestationObserved {
    return EventAttestationObserved.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAttestationObservedProtoMsg): EventAttestationObserved {
    return EventAttestationObserved.decode(message.value);
  },
  toProto(message: EventAttestationObserved): Uint8Array {
    return EventAttestationObserved.encode(message).finish();
  },
  toProtoMsg(message: EventAttestationObserved): EventAttestationObservedProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventAttestationObserved",
      value: EventAttestationObserved.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventBridgeWithdrawCanceled(): EventBridgeWithdrawCanceled {
  return {
    bridgeContract: "",
    bridgeChainId: BigInt(0)
  };
}
/**
 * @name EventBridgeWithdrawCanceled
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventBridgeWithdrawCanceled
 */
export const EventBridgeWithdrawCanceled = {
  typeUrl: "/injective.peggy.v1.EventBridgeWithdrawCanceled",
  is(o: any): o is EventBridgeWithdrawCanceled {
    return o && (o.$typeUrl === EventBridgeWithdrawCanceled.typeUrl || typeof o.bridgeContract === "string" && typeof o.bridgeChainId === "bigint");
  },
  isAmino(o: any): o is EventBridgeWithdrawCanceledAmino {
    return o && (o.$typeUrl === EventBridgeWithdrawCanceled.typeUrl || typeof o.bridge_contract === "string" && typeof o.bridge_chain_id === "bigint");
  },
  encode(message: EventBridgeWithdrawCanceled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bridgeContract !== "") {
      writer.uint32(10).string(message.bridgeContract);
    }
    if (message.bridgeChainId !== BigInt(0)) {
      writer.uint32(16).uint64(message.bridgeChainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBridgeWithdrawCanceled {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBridgeWithdrawCanceled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bridgeContract = reader.string();
          break;
        case 2:
          message.bridgeChainId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventBridgeWithdrawCanceled>): EventBridgeWithdrawCanceled {
    const message = createBaseEventBridgeWithdrawCanceled();
    message.bridgeContract = object.bridgeContract ?? "";
    message.bridgeChainId = object.bridgeChainId !== undefined && object.bridgeChainId !== null ? BigInt(object.bridgeChainId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventBridgeWithdrawCanceledAmino): EventBridgeWithdrawCanceled {
    const message = createBaseEventBridgeWithdrawCanceled();
    if (object.bridge_contract !== undefined && object.bridge_contract !== null) {
      message.bridgeContract = object.bridge_contract;
    }
    if (object.bridge_chain_id !== undefined && object.bridge_chain_id !== null) {
      message.bridgeChainId = BigInt(object.bridge_chain_id);
    }
    return message;
  },
  toAmino(message: EventBridgeWithdrawCanceled): EventBridgeWithdrawCanceledAmino {
    const obj: any = {};
    obj.bridge_contract = message.bridgeContract === "" ? undefined : message.bridgeContract;
    obj.bridge_chain_id = message.bridgeChainId !== BigInt(0) ? message.bridgeChainId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBridgeWithdrawCanceledAminoMsg): EventBridgeWithdrawCanceled {
    return EventBridgeWithdrawCanceled.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBridgeWithdrawCanceledProtoMsg): EventBridgeWithdrawCanceled {
    return EventBridgeWithdrawCanceled.decode(message.value);
  },
  toProto(message: EventBridgeWithdrawCanceled): Uint8Array {
    return EventBridgeWithdrawCanceled.encode(message).finish();
  },
  toProtoMsg(message: EventBridgeWithdrawCanceled): EventBridgeWithdrawCanceledProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventBridgeWithdrawCanceled",
      value: EventBridgeWithdrawCanceled.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventOutgoingBatch(): EventOutgoingBatch {
  return {
    denom: "",
    orchestratorAddress: "",
    batchNonce: BigInt(0),
    batchTimeout: BigInt(0),
    batchTxIds: []
  };
}
/**
 * @name EventOutgoingBatch
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventOutgoingBatch
 */
export const EventOutgoingBatch = {
  typeUrl: "/injective.peggy.v1.EventOutgoingBatch",
  is(o: any): o is EventOutgoingBatch {
    return o && (o.$typeUrl === EventOutgoingBatch.typeUrl || typeof o.denom === "string" && typeof o.orchestratorAddress === "string" && typeof o.batchNonce === "bigint" && typeof o.batchTimeout === "bigint" && Array.isArray(o.batchTxIds) && (!o.batchTxIds.length || typeof o.batchTxIds[0] === "bigint"));
  },
  isAmino(o: any): o is EventOutgoingBatchAmino {
    return o && (o.$typeUrl === EventOutgoingBatch.typeUrl || typeof o.denom === "string" && typeof o.orchestrator_address === "string" && typeof o.batch_nonce === "bigint" && typeof o.batch_timeout === "bigint" && Array.isArray(o.batch_tx_ids) && (!o.batch_tx_ids.length || typeof o.batch_tx_ids[0] === "bigint"));
  },
  encode(message: EventOutgoingBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(18).string(message.orchestratorAddress);
    }
    if (message.batchNonce !== BigInt(0)) {
      writer.uint32(24).uint64(message.batchNonce);
    }
    if (message.batchTimeout !== BigInt(0)) {
      writer.uint32(32).uint64(message.batchTimeout);
    }
    writer.uint32(42).fork();
    for (const v of message.batchTxIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventOutgoingBatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOutgoingBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.orchestratorAddress = reader.string();
          break;
        case 3:
          message.batchNonce = reader.uint64();
          break;
        case 4:
          message.batchTimeout = reader.uint64();
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.batchTxIds.push(reader.uint64());
            }
          } else {
            message.batchTxIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventOutgoingBatch>): EventOutgoingBatch {
    const message = createBaseEventOutgoingBatch();
    message.denom = object.denom ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? BigInt(object.batchNonce.toString()) : BigInt(0);
    message.batchTimeout = object.batchTimeout !== undefined && object.batchTimeout !== null ? BigInt(object.batchTimeout.toString()) : BigInt(0);
    message.batchTxIds = object.batchTxIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: EventOutgoingBatchAmino): EventOutgoingBatch {
    const message = createBaseEventOutgoingBatch();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.orchestrator_address !== undefined && object.orchestrator_address !== null) {
      message.orchestratorAddress = object.orchestrator_address;
    }
    if (object.batch_nonce !== undefined && object.batch_nonce !== null) {
      message.batchNonce = BigInt(object.batch_nonce);
    }
    if (object.batch_timeout !== undefined && object.batch_timeout !== null) {
      message.batchTimeout = BigInt(object.batch_timeout);
    }
    message.batchTxIds = object.batch_tx_ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: EventOutgoingBatch): EventOutgoingBatchAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.orchestrator_address = message.orchestratorAddress === "" ? undefined : message.orchestratorAddress;
    obj.batch_nonce = message.batchNonce !== BigInt(0) ? message.batchNonce?.toString() : undefined;
    obj.batch_timeout = message.batchTimeout !== BigInt(0) ? message.batchTimeout?.toString() : undefined;
    if (message.batchTxIds) {
      obj.batch_tx_ids = message.batchTxIds.map(e => e.toString());
    } else {
      obj.batch_tx_ids = message.batchTxIds;
    }
    return obj;
  },
  fromAminoMsg(object: EventOutgoingBatchAminoMsg): EventOutgoingBatch {
    return EventOutgoingBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: EventOutgoingBatchProtoMsg): EventOutgoingBatch {
    return EventOutgoingBatch.decode(message.value);
  },
  toProto(message: EventOutgoingBatch): Uint8Array {
    return EventOutgoingBatch.encode(message).finish();
  },
  toProtoMsg(message: EventOutgoingBatch): EventOutgoingBatchProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventOutgoingBatch",
      value: EventOutgoingBatch.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventOutgoingBatchCanceled(): EventOutgoingBatchCanceled {
  return {
    bridgeContract: "",
    bridgeChainId: BigInt(0),
    batchId: BigInt(0),
    nonce: BigInt(0)
  };
}
/**
 * @name EventOutgoingBatchCanceled
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventOutgoingBatchCanceled
 */
export const EventOutgoingBatchCanceled = {
  typeUrl: "/injective.peggy.v1.EventOutgoingBatchCanceled",
  is(o: any): o is EventOutgoingBatchCanceled {
    return o && (o.$typeUrl === EventOutgoingBatchCanceled.typeUrl || typeof o.bridgeContract === "string" && typeof o.bridgeChainId === "bigint" && typeof o.batchId === "bigint" && typeof o.nonce === "bigint");
  },
  isAmino(o: any): o is EventOutgoingBatchCanceledAmino {
    return o && (o.$typeUrl === EventOutgoingBatchCanceled.typeUrl || typeof o.bridge_contract === "string" && typeof o.bridge_chain_id === "bigint" && typeof o.batch_id === "bigint" && typeof o.nonce === "bigint");
  },
  encode(message: EventOutgoingBatchCanceled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bridgeContract !== "") {
      writer.uint32(10).string(message.bridgeContract);
    }
    if (message.bridgeChainId !== BigInt(0)) {
      writer.uint32(16).uint64(message.bridgeChainId);
    }
    if (message.batchId !== BigInt(0)) {
      writer.uint32(24).uint64(message.batchId);
    }
    if (message.nonce !== BigInt(0)) {
      writer.uint32(32).uint64(message.nonce);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventOutgoingBatchCanceled {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOutgoingBatchCanceled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bridgeContract = reader.string();
          break;
        case 2:
          message.bridgeChainId = reader.uint64();
          break;
        case 3:
          message.batchId = reader.uint64();
          break;
        case 4:
          message.nonce = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventOutgoingBatchCanceled>): EventOutgoingBatchCanceled {
    const message = createBaseEventOutgoingBatchCanceled();
    message.bridgeContract = object.bridgeContract ?? "";
    message.bridgeChainId = object.bridgeChainId !== undefined && object.bridgeChainId !== null ? BigInt(object.bridgeChainId.toString()) : BigInt(0);
    message.batchId = object.batchId !== undefined && object.batchId !== null ? BigInt(object.batchId.toString()) : BigInt(0);
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventOutgoingBatchCanceledAmino): EventOutgoingBatchCanceled {
    const message = createBaseEventOutgoingBatchCanceled();
    if (object.bridge_contract !== undefined && object.bridge_contract !== null) {
      message.bridgeContract = object.bridge_contract;
    }
    if (object.bridge_chain_id !== undefined && object.bridge_chain_id !== null) {
      message.bridgeChainId = BigInt(object.bridge_chain_id);
    }
    if (object.batch_id !== undefined && object.batch_id !== null) {
      message.batchId = BigInt(object.batch_id);
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce);
    }
    return message;
  },
  toAmino(message: EventOutgoingBatchCanceled): EventOutgoingBatchCanceledAmino {
    const obj: any = {};
    obj.bridge_contract = message.bridgeContract === "" ? undefined : message.bridgeContract;
    obj.bridge_chain_id = message.bridgeChainId !== BigInt(0) ? message.bridgeChainId?.toString() : undefined;
    obj.batch_id = message.batchId !== BigInt(0) ? message.batchId?.toString() : undefined;
    obj.nonce = message.nonce !== BigInt(0) ? message.nonce?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventOutgoingBatchCanceledAminoMsg): EventOutgoingBatchCanceled {
    return EventOutgoingBatchCanceled.fromAmino(object.value);
  },
  fromProtoMsg(message: EventOutgoingBatchCanceledProtoMsg): EventOutgoingBatchCanceled {
    return EventOutgoingBatchCanceled.decode(message.value);
  },
  toProto(message: EventOutgoingBatchCanceled): Uint8Array {
    return EventOutgoingBatchCanceled.encode(message).finish();
  },
  toProtoMsg(message: EventOutgoingBatchCanceled): EventOutgoingBatchCanceledProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventOutgoingBatchCanceled",
      value: EventOutgoingBatchCanceled.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventValsetUpdateRequest(): EventValsetUpdateRequest {
  return {
    valsetNonce: BigInt(0),
    valsetHeight: BigInt(0),
    valsetMembers: [],
    rewardAmount: "",
    rewardToken: ""
  };
}
/**
 * @name EventValsetUpdateRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventValsetUpdateRequest
 */
export const EventValsetUpdateRequest = {
  typeUrl: "/injective.peggy.v1.EventValsetUpdateRequest",
  is(o: any): o is EventValsetUpdateRequest {
    return o && (o.$typeUrl === EventValsetUpdateRequest.typeUrl || typeof o.valsetNonce === "bigint" && typeof o.valsetHeight === "bigint" && Array.isArray(o.valsetMembers) && (!o.valsetMembers.length || BridgeValidator.is(o.valsetMembers[0])) && typeof o.rewardAmount === "string" && typeof o.rewardToken === "string");
  },
  isAmino(o: any): o is EventValsetUpdateRequestAmino {
    return o && (o.$typeUrl === EventValsetUpdateRequest.typeUrl || typeof o.valset_nonce === "bigint" && typeof o.valset_height === "bigint" && Array.isArray(o.valset_members) && (!o.valset_members.length || BridgeValidator.isAmino(o.valset_members[0])) && typeof o.reward_amount === "string" && typeof o.reward_token === "string");
  },
  encode(message: EventValsetUpdateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valsetNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.valsetNonce);
    }
    if (message.valsetHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.valsetHeight);
    }
    for (const v of message.valsetMembers) {
      BridgeValidator.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.rewardAmount !== "") {
      writer.uint32(34).string(message.rewardAmount);
    }
    if (message.rewardToken !== "") {
      writer.uint32(42).string(message.rewardToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventValsetUpdateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventValsetUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valsetNonce = reader.uint64();
          break;
        case 2:
          message.valsetHeight = reader.uint64();
          break;
        case 3:
          message.valsetMembers.push(BridgeValidator.decode(reader, reader.uint32()));
          break;
        case 4:
          message.rewardAmount = reader.string();
          break;
        case 5:
          message.rewardToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventValsetUpdateRequest>): EventValsetUpdateRequest {
    const message = createBaseEventValsetUpdateRequest();
    message.valsetNonce = object.valsetNonce !== undefined && object.valsetNonce !== null ? BigInt(object.valsetNonce.toString()) : BigInt(0);
    message.valsetHeight = object.valsetHeight !== undefined && object.valsetHeight !== null ? BigInt(object.valsetHeight.toString()) : BigInt(0);
    message.valsetMembers = object.valsetMembers?.map(e => BridgeValidator.fromPartial(e)) || [];
    message.rewardAmount = object.rewardAmount ?? "";
    message.rewardToken = object.rewardToken ?? "";
    return message;
  },
  fromAmino(object: EventValsetUpdateRequestAmino): EventValsetUpdateRequest {
    const message = createBaseEventValsetUpdateRequest();
    if (object.valset_nonce !== undefined && object.valset_nonce !== null) {
      message.valsetNonce = BigInt(object.valset_nonce);
    }
    if (object.valset_height !== undefined && object.valset_height !== null) {
      message.valsetHeight = BigInt(object.valset_height);
    }
    message.valsetMembers = object.valset_members?.map(e => BridgeValidator.fromAmino(e)) || [];
    if (object.reward_amount !== undefined && object.reward_amount !== null) {
      message.rewardAmount = object.reward_amount;
    }
    if (object.reward_token !== undefined && object.reward_token !== null) {
      message.rewardToken = object.reward_token;
    }
    return message;
  },
  toAmino(message: EventValsetUpdateRequest): EventValsetUpdateRequestAmino {
    const obj: any = {};
    obj.valset_nonce = message.valsetNonce !== BigInt(0) ? message.valsetNonce?.toString() : undefined;
    obj.valset_height = message.valsetHeight !== BigInt(0) ? message.valsetHeight?.toString() : undefined;
    if (message.valsetMembers) {
      obj.valset_members = message.valsetMembers.map(e => e ? BridgeValidator.toAmino(e) : undefined);
    } else {
      obj.valset_members = message.valsetMembers;
    }
    obj.reward_amount = message.rewardAmount === "" ? undefined : message.rewardAmount;
    obj.reward_token = message.rewardToken === "" ? undefined : message.rewardToken;
    return obj;
  },
  fromAminoMsg(object: EventValsetUpdateRequestAminoMsg): EventValsetUpdateRequest {
    return EventValsetUpdateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: EventValsetUpdateRequestProtoMsg): EventValsetUpdateRequest {
    return EventValsetUpdateRequest.decode(message.value);
  },
  toProto(message: EventValsetUpdateRequest): Uint8Array {
    return EventValsetUpdateRequest.encode(message).finish();
  },
  toProtoMsg(message: EventValsetUpdateRequest): EventValsetUpdateRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventValsetUpdateRequest",
      value: EventValsetUpdateRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(EventValsetUpdateRequest.typeUrl)) {
      return;
    }
    BridgeValidator.registerTypeUrl();
  }
};
function createBaseEventSetOrchestratorAddresses(): EventSetOrchestratorAddresses {
  return {
    validatorAddress: "",
    orchestratorAddress: "",
    operatorEthAddress: ""
  };
}
/**
 * @name EventSetOrchestratorAddresses
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventSetOrchestratorAddresses
 */
export const EventSetOrchestratorAddresses = {
  typeUrl: "/injective.peggy.v1.EventSetOrchestratorAddresses",
  is(o: any): o is EventSetOrchestratorAddresses {
    return o && (o.$typeUrl === EventSetOrchestratorAddresses.typeUrl || typeof o.validatorAddress === "string" && typeof o.orchestratorAddress === "string" && typeof o.operatorEthAddress === "string");
  },
  isAmino(o: any): o is EventSetOrchestratorAddressesAmino {
    return o && (o.$typeUrl === EventSetOrchestratorAddresses.typeUrl || typeof o.validator_address === "string" && typeof o.orchestrator_address === "string" && typeof o.operator_eth_address === "string");
  },
  encode(message: EventSetOrchestratorAddresses, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(18).string(message.orchestratorAddress);
    }
    if (message.operatorEthAddress !== "") {
      writer.uint32(26).string(message.operatorEthAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetOrchestratorAddresses {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetOrchestratorAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.orchestratorAddress = reader.string();
          break;
        case 3:
          message.operatorEthAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventSetOrchestratorAddresses>): EventSetOrchestratorAddresses {
    const message = createBaseEventSetOrchestratorAddresses();
    message.validatorAddress = object.validatorAddress ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    message.operatorEthAddress = object.operatorEthAddress ?? "";
    return message;
  },
  fromAmino(object: EventSetOrchestratorAddressesAmino): EventSetOrchestratorAddresses {
    const message = createBaseEventSetOrchestratorAddresses();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.orchestrator_address !== undefined && object.orchestrator_address !== null) {
      message.orchestratorAddress = object.orchestrator_address;
    }
    if (object.operator_eth_address !== undefined && object.operator_eth_address !== null) {
      message.operatorEthAddress = object.operator_eth_address;
    }
    return message;
  },
  toAmino(message: EventSetOrchestratorAddresses): EventSetOrchestratorAddressesAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.orchestrator_address = message.orchestratorAddress === "" ? undefined : message.orchestratorAddress;
    obj.operator_eth_address = message.operatorEthAddress === "" ? undefined : message.operatorEthAddress;
    return obj;
  },
  fromAminoMsg(object: EventSetOrchestratorAddressesAminoMsg): EventSetOrchestratorAddresses {
    return EventSetOrchestratorAddresses.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetOrchestratorAddressesProtoMsg): EventSetOrchestratorAddresses {
    return EventSetOrchestratorAddresses.decode(message.value);
  },
  toProto(message: EventSetOrchestratorAddresses): Uint8Array {
    return EventSetOrchestratorAddresses.encode(message).finish();
  },
  toProtoMsg(message: EventSetOrchestratorAddresses): EventSetOrchestratorAddressesProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventSetOrchestratorAddresses",
      value: EventSetOrchestratorAddresses.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventValsetConfirm(): EventValsetConfirm {
  return {
    valsetNonce: BigInt(0),
    orchestratorAddress: ""
  };
}
/**
 * @name EventValsetConfirm
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventValsetConfirm
 */
export const EventValsetConfirm = {
  typeUrl: "/injective.peggy.v1.EventValsetConfirm",
  is(o: any): o is EventValsetConfirm {
    return o && (o.$typeUrl === EventValsetConfirm.typeUrl || typeof o.valsetNonce === "bigint" && typeof o.orchestratorAddress === "string");
  },
  isAmino(o: any): o is EventValsetConfirmAmino {
    return o && (o.$typeUrl === EventValsetConfirm.typeUrl || typeof o.valset_nonce === "bigint" && typeof o.orchestrator_address === "string");
  },
  encode(message: EventValsetConfirm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valsetNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.valsetNonce);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(18).string(message.orchestratorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventValsetConfirm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventValsetConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valsetNonce = reader.uint64();
          break;
        case 2:
          message.orchestratorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventValsetConfirm>): EventValsetConfirm {
    const message = createBaseEventValsetConfirm();
    message.valsetNonce = object.valsetNonce !== undefined && object.valsetNonce !== null ? BigInt(object.valsetNonce.toString()) : BigInt(0);
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  },
  fromAmino(object: EventValsetConfirmAmino): EventValsetConfirm {
    const message = createBaseEventValsetConfirm();
    if (object.valset_nonce !== undefined && object.valset_nonce !== null) {
      message.valsetNonce = BigInt(object.valset_nonce);
    }
    if (object.orchestrator_address !== undefined && object.orchestrator_address !== null) {
      message.orchestratorAddress = object.orchestrator_address;
    }
    return message;
  },
  toAmino(message: EventValsetConfirm): EventValsetConfirmAmino {
    const obj: any = {};
    obj.valset_nonce = message.valsetNonce !== BigInt(0) ? message.valsetNonce?.toString() : undefined;
    obj.orchestrator_address = message.orchestratorAddress === "" ? undefined : message.orchestratorAddress;
    return obj;
  },
  fromAminoMsg(object: EventValsetConfirmAminoMsg): EventValsetConfirm {
    return EventValsetConfirm.fromAmino(object.value);
  },
  fromProtoMsg(message: EventValsetConfirmProtoMsg): EventValsetConfirm {
    return EventValsetConfirm.decode(message.value);
  },
  toProto(message: EventValsetConfirm): Uint8Array {
    return EventValsetConfirm.encode(message).finish();
  },
  toProtoMsg(message: EventValsetConfirm): EventValsetConfirmProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventValsetConfirm",
      value: EventValsetConfirm.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventSendToEth(): EventSendToEth {
  return {
    outgoingTxId: BigInt(0),
    sender: "",
    receiver: "",
    amount: "",
    bridgeFee: ""
  };
}
/**
 * @name EventSendToEth
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventSendToEth
 */
export const EventSendToEth = {
  typeUrl: "/injective.peggy.v1.EventSendToEth",
  is(o: any): o is EventSendToEth {
    return o && (o.$typeUrl === EventSendToEth.typeUrl || typeof o.outgoingTxId === "bigint" && typeof o.sender === "string" && typeof o.receiver === "string" && typeof o.amount === "string" && typeof o.bridgeFee === "string");
  },
  isAmino(o: any): o is EventSendToEthAmino {
    return o && (o.$typeUrl === EventSendToEth.typeUrl || typeof o.outgoing_tx_id === "bigint" && typeof o.sender === "string" && typeof o.receiver === "string" && typeof o.amount === "string" && typeof o.bridge_fee === "string");
  },
  encode(message: EventSendToEth, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.outgoingTxId !== BigInt(0)) {
      writer.uint32(8).uint64(message.outgoingTxId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.bridgeFee !== "") {
      writer.uint32(42).string(message.bridgeFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSendToEth {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSendToEth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.outgoingTxId = reader.uint64();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.bridgeFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventSendToEth>): EventSendToEth {
    const message = createBaseEventSendToEth();
    message.outgoingTxId = object.outgoingTxId !== undefined && object.outgoingTxId !== null ? BigInt(object.outgoingTxId.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount ?? "";
    message.bridgeFee = object.bridgeFee ?? "";
    return message;
  },
  fromAmino(object: EventSendToEthAmino): EventSendToEth {
    const message = createBaseEventSendToEth();
    if (object.outgoing_tx_id !== undefined && object.outgoing_tx_id !== null) {
      message.outgoingTxId = BigInt(object.outgoing_tx_id);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.bridge_fee !== undefined && object.bridge_fee !== null) {
      message.bridgeFee = object.bridge_fee;
    }
    return message;
  },
  toAmino(message: EventSendToEth): EventSendToEthAmino {
    const obj: any = {};
    obj.outgoing_tx_id = message.outgoingTxId !== BigInt(0) ? message.outgoingTxId?.toString() : undefined;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.bridge_fee = message.bridgeFee === "" ? undefined : message.bridgeFee;
    return obj;
  },
  fromAminoMsg(object: EventSendToEthAminoMsg): EventSendToEth {
    return EventSendToEth.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSendToEthProtoMsg): EventSendToEth {
    return EventSendToEth.decode(message.value);
  },
  toProto(message: EventSendToEth): Uint8Array {
    return EventSendToEth.encode(message).finish();
  },
  toProtoMsg(message: EventSendToEth): EventSendToEthProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventSendToEth",
      value: EventSendToEth.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventConfirmBatch(): EventConfirmBatch {
  return {
    batchNonce: BigInt(0),
    orchestratorAddress: ""
  };
}
/**
 * @name EventConfirmBatch
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventConfirmBatch
 */
export const EventConfirmBatch = {
  typeUrl: "/injective.peggy.v1.EventConfirmBatch",
  is(o: any): o is EventConfirmBatch {
    return o && (o.$typeUrl === EventConfirmBatch.typeUrl || typeof o.batchNonce === "bigint" && typeof o.orchestratorAddress === "string");
  },
  isAmino(o: any): o is EventConfirmBatchAmino {
    return o && (o.$typeUrl === EventConfirmBatch.typeUrl || typeof o.batch_nonce === "bigint" && typeof o.orchestrator_address === "string");
  },
  encode(message: EventConfirmBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.batchNonce);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(18).string(message.orchestratorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventConfirmBatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventConfirmBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchNonce = reader.uint64();
          break;
        case 2:
          message.orchestratorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventConfirmBatch>): EventConfirmBatch {
    const message = createBaseEventConfirmBatch();
    message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? BigInt(object.batchNonce.toString()) : BigInt(0);
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  },
  fromAmino(object: EventConfirmBatchAmino): EventConfirmBatch {
    const message = createBaseEventConfirmBatch();
    if (object.batch_nonce !== undefined && object.batch_nonce !== null) {
      message.batchNonce = BigInt(object.batch_nonce);
    }
    if (object.orchestrator_address !== undefined && object.orchestrator_address !== null) {
      message.orchestratorAddress = object.orchestrator_address;
    }
    return message;
  },
  toAmino(message: EventConfirmBatch): EventConfirmBatchAmino {
    const obj: any = {};
    obj.batch_nonce = message.batchNonce !== BigInt(0) ? message.batchNonce?.toString() : undefined;
    obj.orchestrator_address = message.orchestratorAddress === "" ? undefined : message.orchestratorAddress;
    return obj;
  },
  fromAminoMsg(object: EventConfirmBatchAminoMsg): EventConfirmBatch {
    return EventConfirmBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: EventConfirmBatchProtoMsg): EventConfirmBatch {
    return EventConfirmBatch.decode(message.value);
  },
  toProto(message: EventConfirmBatch): Uint8Array {
    return EventConfirmBatch.encode(message).finish();
  },
  toProtoMsg(message: EventConfirmBatch): EventConfirmBatchProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventConfirmBatch",
      value: EventConfirmBatch.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventAttestationVote(): EventAttestationVote {
  return {
    eventNonce: BigInt(0),
    attestationId: new Uint8Array(),
    voter: ""
  };
}
/**
 * @name EventAttestationVote
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventAttestationVote
 */
export const EventAttestationVote = {
  typeUrl: "/injective.peggy.v1.EventAttestationVote",
  is(o: any): o is EventAttestationVote {
    return o && (o.$typeUrl === EventAttestationVote.typeUrl || typeof o.eventNonce === "bigint" && (o.attestationId instanceof Uint8Array || typeof o.attestationId === "string") && typeof o.voter === "string");
  },
  isAmino(o: any): o is EventAttestationVoteAmino {
    return o && (o.$typeUrl === EventAttestationVote.typeUrl || typeof o.event_nonce === "bigint" && (o.attestation_id instanceof Uint8Array || typeof o.attestation_id === "string") && typeof o.voter === "string");
  },
  encode(message: EventAttestationVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.attestationId.length !== 0) {
      writer.uint32(18).bytes(message.attestationId);
    }
    if (message.voter !== "") {
      writer.uint32(26).string(message.voter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAttestationVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAttestationVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64();
          break;
        case 2:
          message.attestationId = reader.bytes();
          break;
        case 3:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventAttestationVote>): EventAttestationVote {
    const message = createBaseEventAttestationVote();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
    message.attestationId = object.attestationId ?? new Uint8Array();
    message.voter = object.voter ?? "";
    return message;
  },
  fromAmino(object: EventAttestationVoteAmino): EventAttestationVote {
    const message = createBaseEventAttestationVote();
    if (object.event_nonce !== undefined && object.event_nonce !== null) {
      message.eventNonce = BigInt(object.event_nonce);
    }
    if (object.attestation_id !== undefined && object.attestation_id !== null) {
      message.attestationId = bytesFromBase64(object.attestation_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    return message;
  },
  toAmino(message: EventAttestationVote): EventAttestationVoteAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce !== BigInt(0) ? message.eventNonce?.toString() : undefined;
    obj.attestation_id = message.attestationId ? base64FromBytes(message.attestationId) : undefined;
    obj.voter = message.voter === "" ? undefined : message.voter;
    return obj;
  },
  fromAminoMsg(object: EventAttestationVoteAminoMsg): EventAttestationVote {
    return EventAttestationVote.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAttestationVoteProtoMsg): EventAttestationVote {
    return EventAttestationVote.decode(message.value);
  },
  toProto(message: EventAttestationVote): Uint8Array {
    return EventAttestationVote.encode(message).finish();
  },
  toProtoMsg(message: EventAttestationVote): EventAttestationVoteProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventAttestationVote",
      value: EventAttestationVote.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventDepositClaim(): EventDepositClaim {
  return {
    eventNonce: BigInt(0),
    eventHeight: BigInt(0),
    attestationId: new Uint8Array(),
    ethereumSender: "",
    cosmosReceiver: "",
    tokenContract: "",
    amount: "",
    orchestratorAddress: "",
    data: ""
  };
}
/**
 * @name EventDepositClaim
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventDepositClaim
 */
export const EventDepositClaim = {
  typeUrl: "/injective.peggy.v1.EventDepositClaim",
  is(o: any): o is EventDepositClaim {
    return o && (o.$typeUrl === EventDepositClaim.typeUrl || typeof o.eventNonce === "bigint" && typeof o.eventHeight === "bigint" && (o.attestationId instanceof Uint8Array || typeof o.attestationId === "string") && typeof o.ethereumSender === "string" && typeof o.cosmosReceiver === "string" && typeof o.tokenContract === "string" && typeof o.amount === "string" && typeof o.orchestratorAddress === "string" && typeof o.data === "string");
  },
  isAmino(o: any): o is EventDepositClaimAmino {
    return o && (o.$typeUrl === EventDepositClaim.typeUrl || typeof o.event_nonce === "bigint" && typeof o.event_height === "bigint" && (o.attestation_id instanceof Uint8Array || typeof o.attestation_id === "string") && typeof o.ethereum_sender === "string" && typeof o.cosmos_receiver === "string" && typeof o.token_contract === "string" && typeof o.amount === "string" && typeof o.orchestrator_address === "string" && typeof o.data === "string");
  },
  encode(message: EventDepositClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.eventHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.eventHeight);
    }
    if (message.attestationId.length !== 0) {
      writer.uint32(26).bytes(message.attestationId);
    }
    if (message.ethereumSender !== "") {
      writer.uint32(34).string(message.ethereumSender);
    }
    if (message.cosmosReceiver !== "") {
      writer.uint32(42).string(message.cosmosReceiver);
    }
    if (message.tokenContract !== "") {
      writer.uint32(50).string(message.tokenContract);
    }
    if (message.amount !== "") {
      writer.uint32(58).string(message.amount);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(66).string(message.orchestratorAddress);
    }
    if (message.data !== "") {
      writer.uint32(74).string(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDepositClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDepositClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64();
          break;
        case 2:
          message.eventHeight = reader.uint64();
          break;
        case 3:
          message.attestationId = reader.bytes();
          break;
        case 4:
          message.ethereumSender = reader.string();
          break;
        case 5:
          message.cosmosReceiver = reader.string();
          break;
        case 6:
          message.tokenContract = reader.string();
          break;
        case 7:
          message.amount = reader.string();
          break;
        case 8:
          message.orchestratorAddress = reader.string();
          break;
        case 9:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventDepositClaim>): EventDepositClaim {
    const message = createBaseEventDepositClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
    message.eventHeight = object.eventHeight !== undefined && object.eventHeight !== null ? BigInt(object.eventHeight.toString()) : BigInt(0);
    message.attestationId = object.attestationId ?? new Uint8Array();
    message.ethereumSender = object.ethereumSender ?? "";
    message.cosmosReceiver = object.cosmosReceiver ?? "";
    message.tokenContract = object.tokenContract ?? "";
    message.amount = object.amount ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    message.data = object.data ?? "";
    return message;
  },
  fromAmino(object: EventDepositClaimAmino): EventDepositClaim {
    const message = createBaseEventDepositClaim();
    if (object.event_nonce !== undefined && object.event_nonce !== null) {
      message.eventNonce = BigInt(object.event_nonce);
    }
    if (object.event_height !== undefined && object.event_height !== null) {
      message.eventHeight = BigInt(object.event_height);
    }
    if (object.attestation_id !== undefined && object.attestation_id !== null) {
      message.attestationId = bytesFromBase64(object.attestation_id);
    }
    if (object.ethereum_sender !== undefined && object.ethereum_sender !== null) {
      message.ethereumSender = object.ethereum_sender;
    }
    if (object.cosmos_receiver !== undefined && object.cosmos_receiver !== null) {
      message.cosmosReceiver = object.cosmos_receiver;
    }
    if (object.token_contract !== undefined && object.token_contract !== null) {
      message.tokenContract = object.token_contract;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.orchestrator_address !== undefined && object.orchestrator_address !== null) {
      message.orchestratorAddress = object.orchestrator_address;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    return message;
  },
  toAmino(message: EventDepositClaim): EventDepositClaimAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce !== BigInt(0) ? message.eventNonce?.toString() : undefined;
    obj.event_height = message.eventHeight !== BigInt(0) ? message.eventHeight?.toString() : undefined;
    obj.attestation_id = message.attestationId ? base64FromBytes(message.attestationId) : undefined;
    obj.ethereum_sender = message.ethereumSender === "" ? undefined : message.ethereumSender;
    obj.cosmos_receiver = message.cosmosReceiver === "" ? undefined : message.cosmosReceiver;
    obj.token_contract = message.tokenContract === "" ? undefined : message.tokenContract;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.orchestrator_address = message.orchestratorAddress === "" ? undefined : message.orchestratorAddress;
    obj.data = message.data === "" ? undefined : message.data;
    return obj;
  },
  fromAminoMsg(object: EventDepositClaimAminoMsg): EventDepositClaim {
    return EventDepositClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDepositClaimProtoMsg): EventDepositClaim {
    return EventDepositClaim.decode(message.value);
  },
  toProto(message: EventDepositClaim): Uint8Array {
    return EventDepositClaim.encode(message).finish();
  },
  toProtoMsg(message: EventDepositClaim): EventDepositClaimProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventDepositClaim",
      value: EventDepositClaim.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventWithdrawClaim(): EventWithdrawClaim {
  return {
    eventNonce: BigInt(0),
    eventHeight: BigInt(0),
    attestationId: new Uint8Array(),
    batchNonce: BigInt(0),
    tokenContract: "",
    orchestratorAddress: ""
  };
}
/**
 * @name EventWithdrawClaim
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventWithdrawClaim
 */
export const EventWithdrawClaim = {
  typeUrl: "/injective.peggy.v1.EventWithdrawClaim",
  is(o: any): o is EventWithdrawClaim {
    return o && (o.$typeUrl === EventWithdrawClaim.typeUrl || typeof o.eventNonce === "bigint" && typeof o.eventHeight === "bigint" && (o.attestationId instanceof Uint8Array || typeof o.attestationId === "string") && typeof o.batchNonce === "bigint" && typeof o.tokenContract === "string" && typeof o.orchestratorAddress === "string");
  },
  isAmino(o: any): o is EventWithdrawClaimAmino {
    return o && (o.$typeUrl === EventWithdrawClaim.typeUrl || typeof o.event_nonce === "bigint" && typeof o.event_height === "bigint" && (o.attestation_id instanceof Uint8Array || typeof o.attestation_id === "string") && typeof o.batch_nonce === "bigint" && typeof o.token_contract === "string" && typeof o.orchestrator_address === "string");
  },
  encode(message: EventWithdrawClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.eventHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.eventHeight);
    }
    if (message.attestationId.length !== 0) {
      writer.uint32(26).bytes(message.attestationId);
    }
    if (message.batchNonce !== BigInt(0)) {
      writer.uint32(32).uint64(message.batchNonce);
    }
    if (message.tokenContract !== "") {
      writer.uint32(42).string(message.tokenContract);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(50).string(message.orchestratorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventWithdrawClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64();
          break;
        case 2:
          message.eventHeight = reader.uint64();
          break;
        case 3:
          message.attestationId = reader.bytes();
          break;
        case 4:
          message.batchNonce = reader.uint64();
          break;
        case 5:
          message.tokenContract = reader.string();
          break;
        case 6:
          message.orchestratorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventWithdrawClaim>): EventWithdrawClaim {
    const message = createBaseEventWithdrawClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
    message.eventHeight = object.eventHeight !== undefined && object.eventHeight !== null ? BigInt(object.eventHeight.toString()) : BigInt(0);
    message.attestationId = object.attestationId ?? new Uint8Array();
    message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? BigInt(object.batchNonce.toString()) : BigInt(0);
    message.tokenContract = object.tokenContract ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  },
  fromAmino(object: EventWithdrawClaimAmino): EventWithdrawClaim {
    const message = createBaseEventWithdrawClaim();
    if (object.event_nonce !== undefined && object.event_nonce !== null) {
      message.eventNonce = BigInt(object.event_nonce);
    }
    if (object.event_height !== undefined && object.event_height !== null) {
      message.eventHeight = BigInt(object.event_height);
    }
    if (object.attestation_id !== undefined && object.attestation_id !== null) {
      message.attestationId = bytesFromBase64(object.attestation_id);
    }
    if (object.batch_nonce !== undefined && object.batch_nonce !== null) {
      message.batchNonce = BigInt(object.batch_nonce);
    }
    if (object.token_contract !== undefined && object.token_contract !== null) {
      message.tokenContract = object.token_contract;
    }
    if (object.orchestrator_address !== undefined && object.orchestrator_address !== null) {
      message.orchestratorAddress = object.orchestrator_address;
    }
    return message;
  },
  toAmino(message: EventWithdrawClaim): EventWithdrawClaimAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce !== BigInt(0) ? message.eventNonce?.toString() : undefined;
    obj.event_height = message.eventHeight !== BigInt(0) ? message.eventHeight?.toString() : undefined;
    obj.attestation_id = message.attestationId ? base64FromBytes(message.attestationId) : undefined;
    obj.batch_nonce = message.batchNonce !== BigInt(0) ? message.batchNonce?.toString() : undefined;
    obj.token_contract = message.tokenContract === "" ? undefined : message.tokenContract;
    obj.orchestrator_address = message.orchestratorAddress === "" ? undefined : message.orchestratorAddress;
    return obj;
  },
  fromAminoMsg(object: EventWithdrawClaimAminoMsg): EventWithdrawClaim {
    return EventWithdrawClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: EventWithdrawClaimProtoMsg): EventWithdrawClaim {
    return EventWithdrawClaim.decode(message.value);
  },
  toProto(message: EventWithdrawClaim): Uint8Array {
    return EventWithdrawClaim.encode(message).finish();
  },
  toProtoMsg(message: EventWithdrawClaim): EventWithdrawClaimProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventWithdrawClaim",
      value: EventWithdrawClaim.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventERC20DeployedClaim(): EventERC20DeployedClaim {
  return {
    eventNonce: BigInt(0),
    eventHeight: BigInt(0),
    attestationId: new Uint8Array(),
    cosmosDenom: "",
    tokenContract: "",
    name: "",
    symbol: "",
    decimals: BigInt(0),
    orchestratorAddress: ""
  };
}
/**
 * @name EventERC20DeployedClaim
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventERC20DeployedClaim
 */
export const EventERC20DeployedClaim = {
  typeUrl: "/injective.peggy.v1.EventERC20DeployedClaim",
  is(o: any): o is EventERC20DeployedClaim {
    return o && (o.$typeUrl === EventERC20DeployedClaim.typeUrl || typeof o.eventNonce === "bigint" && typeof o.eventHeight === "bigint" && (o.attestationId instanceof Uint8Array || typeof o.attestationId === "string") && typeof o.cosmosDenom === "string" && typeof o.tokenContract === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.decimals === "bigint" && typeof o.orchestratorAddress === "string");
  },
  isAmino(o: any): o is EventERC20DeployedClaimAmino {
    return o && (o.$typeUrl === EventERC20DeployedClaim.typeUrl || typeof o.event_nonce === "bigint" && typeof o.event_height === "bigint" && (o.attestation_id instanceof Uint8Array || typeof o.attestation_id === "string") && typeof o.cosmos_denom === "string" && typeof o.token_contract === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.decimals === "bigint" && typeof o.orchestrator_address === "string");
  },
  encode(message: EventERC20DeployedClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.eventHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.eventHeight);
    }
    if (message.attestationId.length !== 0) {
      writer.uint32(26).bytes(message.attestationId);
    }
    if (message.cosmosDenom !== "") {
      writer.uint32(34).string(message.cosmosDenom);
    }
    if (message.tokenContract !== "") {
      writer.uint32(42).string(message.tokenContract);
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(58).string(message.symbol);
    }
    if (message.decimals !== BigInt(0)) {
      writer.uint32(64).uint64(message.decimals);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(74).string(message.orchestratorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventERC20DeployedClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventERC20DeployedClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64();
          break;
        case 2:
          message.eventHeight = reader.uint64();
          break;
        case 3:
          message.attestationId = reader.bytes();
          break;
        case 4:
          message.cosmosDenom = reader.string();
          break;
        case 5:
          message.tokenContract = reader.string();
          break;
        case 6:
          message.name = reader.string();
          break;
        case 7:
          message.symbol = reader.string();
          break;
        case 8:
          message.decimals = reader.uint64();
          break;
        case 9:
          message.orchestratorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventERC20DeployedClaim>): EventERC20DeployedClaim {
    const message = createBaseEventERC20DeployedClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
    message.eventHeight = object.eventHeight !== undefined && object.eventHeight !== null ? BigInt(object.eventHeight.toString()) : BigInt(0);
    message.attestationId = object.attestationId ?? new Uint8Array();
    message.cosmosDenom = object.cosmosDenom ?? "";
    message.tokenContract = object.tokenContract ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals.toString()) : BigInt(0);
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  },
  fromAmino(object: EventERC20DeployedClaimAmino): EventERC20DeployedClaim {
    const message = createBaseEventERC20DeployedClaim();
    if (object.event_nonce !== undefined && object.event_nonce !== null) {
      message.eventNonce = BigInt(object.event_nonce);
    }
    if (object.event_height !== undefined && object.event_height !== null) {
      message.eventHeight = BigInt(object.event_height);
    }
    if (object.attestation_id !== undefined && object.attestation_id !== null) {
      message.attestationId = bytesFromBase64(object.attestation_id);
    }
    if (object.cosmos_denom !== undefined && object.cosmos_denom !== null) {
      message.cosmosDenom = object.cosmos_denom;
    }
    if (object.token_contract !== undefined && object.token_contract !== null) {
      message.tokenContract = object.token_contract;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = BigInt(object.decimals);
    }
    if (object.orchestrator_address !== undefined && object.orchestrator_address !== null) {
      message.orchestratorAddress = object.orchestrator_address;
    }
    return message;
  },
  toAmino(message: EventERC20DeployedClaim): EventERC20DeployedClaimAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce !== BigInt(0) ? message.eventNonce?.toString() : undefined;
    obj.event_height = message.eventHeight !== BigInt(0) ? message.eventHeight?.toString() : undefined;
    obj.attestation_id = message.attestationId ? base64FromBytes(message.attestationId) : undefined;
    obj.cosmos_denom = message.cosmosDenom === "" ? undefined : message.cosmosDenom;
    obj.token_contract = message.tokenContract === "" ? undefined : message.tokenContract;
    obj.name = message.name === "" ? undefined : message.name;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.decimals = message.decimals !== BigInt(0) ? message.decimals?.toString() : undefined;
    obj.orchestrator_address = message.orchestratorAddress === "" ? undefined : message.orchestratorAddress;
    return obj;
  },
  fromAminoMsg(object: EventERC20DeployedClaimAminoMsg): EventERC20DeployedClaim {
    return EventERC20DeployedClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: EventERC20DeployedClaimProtoMsg): EventERC20DeployedClaim {
    return EventERC20DeployedClaim.decode(message.value);
  },
  toProto(message: EventERC20DeployedClaim): Uint8Array {
    return EventERC20DeployedClaim.encode(message).finish();
  },
  toProtoMsg(message: EventERC20DeployedClaim): EventERC20DeployedClaimProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventERC20DeployedClaim",
      value: EventERC20DeployedClaim.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventValsetUpdateClaim(): EventValsetUpdateClaim {
  return {
    eventNonce: BigInt(0),
    eventHeight: BigInt(0),
    attestationId: new Uint8Array(),
    valsetNonce: BigInt(0),
    valsetMembers: [],
    rewardAmount: "",
    rewardToken: "",
    orchestratorAddress: ""
  };
}
/**
 * @name EventValsetUpdateClaim
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventValsetUpdateClaim
 */
export const EventValsetUpdateClaim = {
  typeUrl: "/injective.peggy.v1.EventValsetUpdateClaim",
  is(o: any): o is EventValsetUpdateClaim {
    return o && (o.$typeUrl === EventValsetUpdateClaim.typeUrl || typeof o.eventNonce === "bigint" && typeof o.eventHeight === "bigint" && (o.attestationId instanceof Uint8Array || typeof o.attestationId === "string") && typeof o.valsetNonce === "bigint" && Array.isArray(o.valsetMembers) && (!o.valsetMembers.length || BridgeValidator.is(o.valsetMembers[0])) && typeof o.rewardAmount === "string" && typeof o.rewardToken === "string" && typeof o.orchestratorAddress === "string");
  },
  isAmino(o: any): o is EventValsetUpdateClaimAmino {
    return o && (o.$typeUrl === EventValsetUpdateClaim.typeUrl || typeof o.event_nonce === "bigint" && typeof o.event_height === "bigint" && (o.attestation_id instanceof Uint8Array || typeof o.attestation_id === "string") && typeof o.valset_nonce === "bigint" && Array.isArray(o.valset_members) && (!o.valset_members.length || BridgeValidator.isAmino(o.valset_members[0])) && typeof o.reward_amount === "string" && typeof o.reward_token === "string" && typeof o.orchestrator_address === "string");
  },
  encode(message: EventValsetUpdateClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.eventHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.eventHeight);
    }
    if (message.attestationId.length !== 0) {
      writer.uint32(26).bytes(message.attestationId);
    }
    if (message.valsetNonce !== BigInt(0)) {
      writer.uint32(32).uint64(message.valsetNonce);
    }
    for (const v of message.valsetMembers) {
      BridgeValidator.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.rewardAmount !== "") {
      writer.uint32(50).string(message.rewardAmount);
    }
    if (message.rewardToken !== "") {
      writer.uint32(58).string(message.rewardToken);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(66).string(message.orchestratorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventValsetUpdateClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventValsetUpdateClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64();
          break;
        case 2:
          message.eventHeight = reader.uint64();
          break;
        case 3:
          message.attestationId = reader.bytes();
          break;
        case 4:
          message.valsetNonce = reader.uint64();
          break;
        case 5:
          message.valsetMembers.push(BridgeValidator.decode(reader, reader.uint32()));
          break;
        case 6:
          message.rewardAmount = reader.string();
          break;
        case 7:
          message.rewardToken = reader.string();
          break;
        case 8:
          message.orchestratorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventValsetUpdateClaim>): EventValsetUpdateClaim {
    const message = createBaseEventValsetUpdateClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
    message.eventHeight = object.eventHeight !== undefined && object.eventHeight !== null ? BigInt(object.eventHeight.toString()) : BigInt(0);
    message.attestationId = object.attestationId ?? new Uint8Array();
    message.valsetNonce = object.valsetNonce !== undefined && object.valsetNonce !== null ? BigInt(object.valsetNonce.toString()) : BigInt(0);
    message.valsetMembers = object.valsetMembers?.map(e => BridgeValidator.fromPartial(e)) || [];
    message.rewardAmount = object.rewardAmount ?? "";
    message.rewardToken = object.rewardToken ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  },
  fromAmino(object: EventValsetUpdateClaimAmino): EventValsetUpdateClaim {
    const message = createBaseEventValsetUpdateClaim();
    if (object.event_nonce !== undefined && object.event_nonce !== null) {
      message.eventNonce = BigInt(object.event_nonce);
    }
    if (object.event_height !== undefined && object.event_height !== null) {
      message.eventHeight = BigInt(object.event_height);
    }
    if (object.attestation_id !== undefined && object.attestation_id !== null) {
      message.attestationId = bytesFromBase64(object.attestation_id);
    }
    if (object.valset_nonce !== undefined && object.valset_nonce !== null) {
      message.valsetNonce = BigInt(object.valset_nonce);
    }
    message.valsetMembers = object.valset_members?.map(e => BridgeValidator.fromAmino(e)) || [];
    if (object.reward_amount !== undefined && object.reward_amount !== null) {
      message.rewardAmount = object.reward_amount;
    }
    if (object.reward_token !== undefined && object.reward_token !== null) {
      message.rewardToken = object.reward_token;
    }
    if (object.orchestrator_address !== undefined && object.orchestrator_address !== null) {
      message.orchestratorAddress = object.orchestrator_address;
    }
    return message;
  },
  toAmino(message: EventValsetUpdateClaim): EventValsetUpdateClaimAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce !== BigInt(0) ? message.eventNonce?.toString() : undefined;
    obj.event_height = message.eventHeight !== BigInt(0) ? message.eventHeight?.toString() : undefined;
    obj.attestation_id = message.attestationId ? base64FromBytes(message.attestationId) : undefined;
    obj.valset_nonce = message.valsetNonce !== BigInt(0) ? message.valsetNonce?.toString() : undefined;
    if (message.valsetMembers) {
      obj.valset_members = message.valsetMembers.map(e => e ? BridgeValidator.toAmino(e) : undefined);
    } else {
      obj.valset_members = message.valsetMembers;
    }
    obj.reward_amount = message.rewardAmount === "" ? undefined : message.rewardAmount;
    obj.reward_token = message.rewardToken === "" ? undefined : message.rewardToken;
    obj.orchestrator_address = message.orchestratorAddress === "" ? undefined : message.orchestratorAddress;
    return obj;
  },
  fromAminoMsg(object: EventValsetUpdateClaimAminoMsg): EventValsetUpdateClaim {
    return EventValsetUpdateClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: EventValsetUpdateClaimProtoMsg): EventValsetUpdateClaim {
    return EventValsetUpdateClaim.decode(message.value);
  },
  toProto(message: EventValsetUpdateClaim): Uint8Array {
    return EventValsetUpdateClaim.encode(message).finish();
  },
  toProtoMsg(message: EventValsetUpdateClaim): EventValsetUpdateClaimProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventValsetUpdateClaim",
      value: EventValsetUpdateClaim.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(EventValsetUpdateClaim.typeUrl)) {
      return;
    }
    BridgeValidator.registerTypeUrl();
  }
};
function createBaseEventCancelSendToEth(): EventCancelSendToEth {
  return {
    outgoingTxId: BigInt(0)
  };
}
/**
 * @name EventCancelSendToEth
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventCancelSendToEth
 */
export const EventCancelSendToEth = {
  typeUrl: "/injective.peggy.v1.EventCancelSendToEth",
  is(o: any): o is EventCancelSendToEth {
    return o && (o.$typeUrl === EventCancelSendToEth.typeUrl || typeof o.outgoingTxId === "bigint");
  },
  isAmino(o: any): o is EventCancelSendToEthAmino {
    return o && (o.$typeUrl === EventCancelSendToEth.typeUrl || typeof o.outgoing_tx_id === "bigint");
  },
  encode(message: EventCancelSendToEth, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.outgoingTxId !== BigInt(0)) {
      writer.uint32(8).uint64(message.outgoingTxId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCancelSendToEth {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelSendToEth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.outgoingTxId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventCancelSendToEth>): EventCancelSendToEth {
    const message = createBaseEventCancelSendToEth();
    message.outgoingTxId = object.outgoingTxId !== undefined && object.outgoingTxId !== null ? BigInt(object.outgoingTxId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventCancelSendToEthAmino): EventCancelSendToEth {
    const message = createBaseEventCancelSendToEth();
    if (object.outgoing_tx_id !== undefined && object.outgoing_tx_id !== null) {
      message.outgoingTxId = BigInt(object.outgoing_tx_id);
    }
    return message;
  },
  toAmino(message: EventCancelSendToEth): EventCancelSendToEthAmino {
    const obj: any = {};
    obj.outgoing_tx_id = message.outgoingTxId !== BigInt(0) ? message.outgoingTxId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCancelSendToEthAminoMsg): EventCancelSendToEth {
    return EventCancelSendToEth.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCancelSendToEthProtoMsg): EventCancelSendToEth {
    return EventCancelSendToEth.decode(message.value);
  },
  toProto(message: EventCancelSendToEth): Uint8Array {
    return EventCancelSendToEth.encode(message).finish();
  },
  toProtoMsg(message: EventCancelSendToEth): EventCancelSendToEthProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventCancelSendToEth",
      value: EventCancelSendToEth.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventSubmitBadSignatureEvidence(): EventSubmitBadSignatureEvidence {
  return {
    badEthSignature: "",
    badEthSignatureSubject: ""
  };
}
/**
 * @name EventSubmitBadSignatureEvidence
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventSubmitBadSignatureEvidence
 */
export const EventSubmitBadSignatureEvidence = {
  typeUrl: "/injective.peggy.v1.EventSubmitBadSignatureEvidence",
  is(o: any): o is EventSubmitBadSignatureEvidence {
    return o && (o.$typeUrl === EventSubmitBadSignatureEvidence.typeUrl || typeof o.badEthSignature === "string" && typeof o.badEthSignatureSubject === "string");
  },
  isAmino(o: any): o is EventSubmitBadSignatureEvidenceAmino {
    return o && (o.$typeUrl === EventSubmitBadSignatureEvidence.typeUrl || typeof o.bad_eth_signature === "string" && typeof o.bad_eth_signature_subject === "string");
  },
  encode(message: EventSubmitBadSignatureEvidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.badEthSignature !== "") {
      writer.uint32(10).string(message.badEthSignature);
    }
    if (message.badEthSignatureSubject !== "") {
      writer.uint32(18).string(message.badEthSignatureSubject);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSubmitBadSignatureEvidence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubmitBadSignatureEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.badEthSignature = reader.string();
          break;
        case 2:
          message.badEthSignatureSubject = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventSubmitBadSignatureEvidence>): EventSubmitBadSignatureEvidence {
    const message = createBaseEventSubmitBadSignatureEvidence();
    message.badEthSignature = object.badEthSignature ?? "";
    message.badEthSignatureSubject = object.badEthSignatureSubject ?? "";
    return message;
  },
  fromAmino(object: EventSubmitBadSignatureEvidenceAmino): EventSubmitBadSignatureEvidence {
    const message = createBaseEventSubmitBadSignatureEvidence();
    if (object.bad_eth_signature !== undefined && object.bad_eth_signature !== null) {
      message.badEthSignature = object.bad_eth_signature;
    }
    if (object.bad_eth_signature_subject !== undefined && object.bad_eth_signature_subject !== null) {
      message.badEthSignatureSubject = object.bad_eth_signature_subject;
    }
    return message;
  },
  toAmino(message: EventSubmitBadSignatureEvidence): EventSubmitBadSignatureEvidenceAmino {
    const obj: any = {};
    obj.bad_eth_signature = message.badEthSignature === "" ? undefined : message.badEthSignature;
    obj.bad_eth_signature_subject = message.badEthSignatureSubject === "" ? undefined : message.badEthSignatureSubject;
    return obj;
  },
  fromAminoMsg(object: EventSubmitBadSignatureEvidenceAminoMsg): EventSubmitBadSignatureEvidence {
    return EventSubmitBadSignatureEvidence.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSubmitBadSignatureEvidenceProtoMsg): EventSubmitBadSignatureEvidence {
    return EventSubmitBadSignatureEvidence.decode(message.value);
  },
  toProto(message: EventSubmitBadSignatureEvidence): Uint8Array {
    return EventSubmitBadSignatureEvidence.encode(message).finish();
  },
  toProtoMsg(message: EventSubmitBadSignatureEvidence): EventSubmitBadSignatureEvidenceProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventSubmitBadSignatureEvidence",
      value: EventSubmitBadSignatureEvidence.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventValidatorSlash(): EventValidatorSlash {
  return {
    power: BigInt(0),
    reason: "",
    consensusAddress: "",
    operatorAddress: "",
    moniker: ""
  };
}
/**
 * @name EventValidatorSlash
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.EventValidatorSlash
 */
export const EventValidatorSlash = {
  typeUrl: "/injective.peggy.v1.EventValidatorSlash",
  is(o: any): o is EventValidatorSlash {
    return o && (o.$typeUrl === EventValidatorSlash.typeUrl || typeof o.power === "bigint" && typeof o.reason === "string" && typeof o.consensusAddress === "string" && typeof o.operatorAddress === "string" && typeof o.moniker === "string");
  },
  isAmino(o: any): o is EventValidatorSlashAmino {
    return o && (o.$typeUrl === EventValidatorSlash.typeUrl || typeof o.power === "bigint" && typeof o.reason === "string" && typeof o.consensus_address === "string" && typeof o.operator_address === "string" && typeof o.moniker === "string");
  },
  encode(message: EventValidatorSlash, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.power !== BigInt(0)) {
      writer.uint32(8).int64(message.power);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    if (message.consensusAddress !== "") {
      writer.uint32(26).string(message.consensusAddress);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(34).string(message.operatorAddress);
    }
    if (message.moniker !== "") {
      writer.uint32(42).string(message.moniker);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventValidatorSlash {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventValidatorSlash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.power = reader.int64();
          break;
        case 2:
          message.reason = reader.string();
          break;
        case 3:
          message.consensusAddress = reader.string();
          break;
        case 4:
          message.operatorAddress = reader.string();
          break;
        case 5:
          message.moniker = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventValidatorSlash>): EventValidatorSlash {
    const message = createBaseEventValidatorSlash();
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    message.consensusAddress = object.consensusAddress ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    message.moniker = object.moniker ?? "";
    return message;
  },
  fromAmino(object: EventValidatorSlashAmino): EventValidatorSlash {
    const message = createBaseEventValidatorSlash();
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.consensus_address !== undefined && object.consensus_address !== null) {
      message.consensusAddress = object.consensus_address;
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    }
    return message;
  },
  toAmino(message: EventValidatorSlash): EventValidatorSlashAmino {
    const obj: any = {};
    obj.power = message.power !== BigInt(0) ? message.power?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    obj.consensus_address = message.consensusAddress === "" ? undefined : message.consensusAddress;
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    obj.moniker = message.moniker === "" ? undefined : message.moniker;
    return obj;
  },
  fromAminoMsg(object: EventValidatorSlashAminoMsg): EventValidatorSlash {
    return EventValidatorSlash.fromAmino(object.value);
  },
  fromProtoMsg(message: EventValidatorSlashProtoMsg): EventValidatorSlash {
    return EventValidatorSlash.decode(message.value);
  },
  toProto(message: EventValidatorSlash): Uint8Array {
    return EventValidatorSlash.encode(message).finish();
  },
  toProtoMsg(message: EventValidatorSlash): EventValidatorSlashProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventValidatorSlash",
      value: EventValidatorSlash.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};