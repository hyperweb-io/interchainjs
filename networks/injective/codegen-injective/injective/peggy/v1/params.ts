import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface Params {
  peggyId: string;
  contractSourceHash: string;
  bridgeEthereumAddress: string;
  bridgeChainId: bigint;
  signedValsetsWindow: bigint;
  signedBatchesWindow: bigint;
  signedClaimsWindow: bigint;
  targetBatchTimeout: bigint;
  averageBlockTime: bigint;
  averageEthereumBlockTime: bigint;
  slashFractionValset: Uint8Array;
  slashFractionBatch: Uint8Array;
  slashFractionClaim: Uint8Array;
  slashFractionConflictingClaim: Uint8Array;
  unbondSlashingValsetsWindow: bigint;
  slashFractionBadEthSignature: Uint8Array;
  cosmosCoinDenom: string;
  cosmosCoinErc20Contract: string;
  claimSlashingEnabled: boolean;
  bridgeContractStartHeight: bigint;
  valsetReward: Coin;
}
export interface ParamsProtoMsg {
  typeUrl: "/injective.peggy.v1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  peggy_id: string;
  contract_source_hash: string;
  bridge_ethereum_address: string;
  bridge_chain_id: string;
  signed_valsets_window: string;
  signed_batches_window: string;
  signed_claims_window: string;
  target_batch_timeout: string;
  average_block_time: string;
  average_ethereum_block_time: string;
  slash_fraction_valset: string;
  slash_fraction_batch: string;
  slash_fraction_claim: string;
  slash_fraction_conflicting_claim: string;
  unbond_slashing_valsets_window: string;
  slash_fraction_bad_eth_signature: string;
  cosmos_coin_denom: string;
  cosmos_coin_erc20_contract: string;
  claim_slashing_enabled: boolean;
  bridge_contract_start_height: string;
  valset_reward: CoinAmino;
}
export interface ParamsAminoMsg {
  type: "/injective.peggy.v1.Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    peggyId: "",
    contractSourceHash: "",
    bridgeEthereumAddress: "",
    bridgeChainId: BigInt(0),
    signedValsetsWindow: BigInt(0),
    signedBatchesWindow: BigInt(0),
    signedClaimsWindow: BigInt(0),
    targetBatchTimeout: BigInt(0),
    averageBlockTime: BigInt(0),
    averageEthereumBlockTime: BigInt(0),
    slashFractionValset: new Uint8Array(),
    slashFractionBatch: new Uint8Array(),
    slashFractionClaim: new Uint8Array(),
    slashFractionConflictingClaim: new Uint8Array(),
    unbondSlashingValsetsWindow: BigInt(0),
    slashFractionBadEthSignature: new Uint8Array(),
    cosmosCoinDenom: "",
    cosmosCoinErc20Contract: "",
    claimSlashingEnabled: false,
    bridgeContractStartHeight: BigInt(0),
    valsetReward: Coin.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/injective.peggy.v1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.peggyId === "string" && typeof o.contractSourceHash === "string" && typeof o.bridgeEthereumAddress === "string" && typeof o.bridgeChainId === "bigint" && typeof o.signedValsetsWindow === "bigint" && typeof o.signedBatchesWindow === "bigint" && typeof o.signedClaimsWindow === "bigint" && typeof o.targetBatchTimeout === "bigint" && typeof o.averageBlockTime === "bigint" && typeof o.averageEthereumBlockTime === "bigint" && (o.slashFractionValset instanceof Uint8Array || typeof o.slashFractionValset === "string") && (o.slashFractionBatch instanceof Uint8Array || typeof o.slashFractionBatch === "string") && (o.slashFractionClaim instanceof Uint8Array || typeof o.slashFractionClaim === "string") && (o.slashFractionConflictingClaim instanceof Uint8Array || typeof o.slashFractionConflictingClaim === "string") && typeof o.unbondSlashingValsetsWindow === "bigint" && (o.slashFractionBadEthSignature instanceof Uint8Array || typeof o.slashFractionBadEthSignature === "string") && typeof o.cosmosCoinDenom === "string" && typeof o.cosmosCoinErc20Contract === "string" && typeof o.claimSlashingEnabled === "boolean" && typeof o.bridgeContractStartHeight === "bigint" && Coin.is(o.valsetReward));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.peggy_id === "string" && typeof o.contract_source_hash === "string" && typeof o.bridge_ethereum_address === "string" && typeof o.bridge_chain_id === "bigint" && typeof o.signed_valsets_window === "bigint" && typeof o.signed_batches_window === "bigint" && typeof o.signed_claims_window === "bigint" && typeof o.target_batch_timeout === "bigint" && typeof o.average_block_time === "bigint" && typeof o.average_ethereum_block_time === "bigint" && (o.slash_fraction_valset instanceof Uint8Array || typeof o.slash_fraction_valset === "string") && (o.slash_fraction_batch instanceof Uint8Array || typeof o.slash_fraction_batch === "string") && (o.slash_fraction_claim instanceof Uint8Array || typeof o.slash_fraction_claim === "string") && (o.slash_fraction_conflicting_claim instanceof Uint8Array || typeof o.slash_fraction_conflicting_claim === "string") && typeof o.unbond_slashing_valsets_window === "bigint" && (o.slash_fraction_bad_eth_signature instanceof Uint8Array || typeof o.slash_fraction_bad_eth_signature === "string") && typeof o.cosmos_coin_denom === "string" && typeof o.cosmos_coin_erc20_contract === "string" && typeof o.claim_slashing_enabled === "boolean" && typeof o.bridge_contract_start_height === "bigint" && Coin.isAmino(o.valset_reward));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.peggyId !== "") {
      writer.uint32(10).string(message.peggyId);
    }
    if (message.contractSourceHash !== "") {
      writer.uint32(18).string(message.contractSourceHash);
    }
    if (message.bridgeEthereumAddress !== "") {
      writer.uint32(26).string(message.bridgeEthereumAddress);
    }
    if (message.bridgeChainId !== BigInt(0)) {
      writer.uint32(32).uint64(message.bridgeChainId);
    }
    if (message.signedValsetsWindow !== BigInt(0)) {
      writer.uint32(40).uint64(message.signedValsetsWindow);
    }
    if (message.signedBatchesWindow !== BigInt(0)) {
      writer.uint32(48).uint64(message.signedBatchesWindow);
    }
    if (message.signedClaimsWindow !== BigInt(0)) {
      writer.uint32(56).uint64(message.signedClaimsWindow);
    }
    if (message.targetBatchTimeout !== BigInt(0)) {
      writer.uint32(64).uint64(message.targetBatchTimeout);
    }
    if (message.averageBlockTime !== BigInt(0)) {
      writer.uint32(72).uint64(message.averageBlockTime);
    }
    if (message.averageEthereumBlockTime !== BigInt(0)) {
      writer.uint32(80).uint64(message.averageEthereumBlockTime);
    }
    if (message.slashFractionValset.length !== 0) {
      writer.uint32(90).bytes(message.slashFractionValset);
    }
    if (message.slashFractionBatch.length !== 0) {
      writer.uint32(98).bytes(message.slashFractionBatch);
    }
    if (message.slashFractionClaim.length !== 0) {
      writer.uint32(106).bytes(message.slashFractionClaim);
    }
    if (message.slashFractionConflictingClaim.length !== 0) {
      writer.uint32(114).bytes(message.slashFractionConflictingClaim);
    }
    if (message.unbondSlashingValsetsWindow !== BigInt(0)) {
      writer.uint32(120).uint64(message.unbondSlashingValsetsWindow);
    }
    if (message.slashFractionBadEthSignature.length !== 0) {
      writer.uint32(130).bytes(message.slashFractionBadEthSignature);
    }
    if (message.cosmosCoinDenom !== "") {
      writer.uint32(138).string(message.cosmosCoinDenom);
    }
    if (message.cosmosCoinErc20Contract !== "") {
      writer.uint32(146).string(message.cosmosCoinErc20Contract);
    }
    if (message.claimSlashingEnabled === true) {
      writer.uint32(152).bool(message.claimSlashingEnabled);
    }
    if (message.bridgeContractStartHeight !== BigInt(0)) {
      writer.uint32(160).uint64(message.bridgeContractStartHeight);
    }
    if (message.valsetReward !== undefined) {
      Coin.encode(message.valsetReward, writer.uint32(170).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peggyId = reader.string();
          break;
        case 2:
          message.contractSourceHash = reader.string();
          break;
        case 3:
          message.bridgeEthereumAddress = reader.string();
          break;
        case 4:
          message.bridgeChainId = reader.uint64();
          break;
        case 5:
          message.signedValsetsWindow = reader.uint64();
          break;
        case 6:
          message.signedBatchesWindow = reader.uint64();
          break;
        case 7:
          message.signedClaimsWindow = reader.uint64();
          break;
        case 8:
          message.targetBatchTimeout = reader.uint64();
          break;
        case 9:
          message.averageBlockTime = reader.uint64();
          break;
        case 10:
          message.averageEthereumBlockTime = reader.uint64();
          break;
        case 11:
          message.slashFractionValset = reader.bytes();
          break;
        case 12:
          message.slashFractionBatch = reader.bytes();
          break;
        case 13:
          message.slashFractionClaim = reader.bytes();
          break;
        case 14:
          message.slashFractionConflictingClaim = reader.bytes();
          break;
        case 15:
          message.unbondSlashingValsetsWindow = reader.uint64();
          break;
        case 16:
          message.slashFractionBadEthSignature = reader.bytes();
          break;
        case 17:
          message.cosmosCoinDenom = reader.string();
          break;
        case 18:
          message.cosmosCoinErc20Contract = reader.string();
          break;
        case 19:
          message.claimSlashingEnabled = reader.bool();
          break;
        case 20:
          message.bridgeContractStartHeight = reader.uint64();
          break;
        case 21:
          message.valsetReward = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.peggyId = object.peggyId ?? "";
    message.contractSourceHash = object.contractSourceHash ?? "";
    message.bridgeEthereumAddress = object.bridgeEthereumAddress ?? "";
    message.bridgeChainId = object.bridgeChainId !== undefined && object.bridgeChainId !== null ? BigInt(object.bridgeChainId.toString()) : BigInt(0);
    message.signedValsetsWindow = object.signedValsetsWindow !== undefined && object.signedValsetsWindow !== null ? BigInt(object.signedValsetsWindow.toString()) : BigInt(0);
    message.signedBatchesWindow = object.signedBatchesWindow !== undefined && object.signedBatchesWindow !== null ? BigInt(object.signedBatchesWindow.toString()) : BigInt(0);
    message.signedClaimsWindow = object.signedClaimsWindow !== undefined && object.signedClaimsWindow !== null ? BigInt(object.signedClaimsWindow.toString()) : BigInt(0);
    message.targetBatchTimeout = object.targetBatchTimeout !== undefined && object.targetBatchTimeout !== null ? BigInt(object.targetBatchTimeout.toString()) : BigInt(0);
    message.averageBlockTime = object.averageBlockTime !== undefined && object.averageBlockTime !== null ? BigInt(object.averageBlockTime.toString()) : BigInt(0);
    message.averageEthereumBlockTime = object.averageEthereumBlockTime !== undefined && object.averageEthereumBlockTime !== null ? BigInt(object.averageEthereumBlockTime.toString()) : BigInt(0);
    message.slashFractionValset = object.slashFractionValset ?? new Uint8Array();
    message.slashFractionBatch = object.slashFractionBatch ?? new Uint8Array();
    message.slashFractionClaim = object.slashFractionClaim ?? new Uint8Array();
    message.slashFractionConflictingClaim = object.slashFractionConflictingClaim ?? new Uint8Array();
    message.unbondSlashingValsetsWindow = object.unbondSlashingValsetsWindow !== undefined && object.unbondSlashingValsetsWindow !== null ? BigInt(object.unbondSlashingValsetsWindow.toString()) : BigInt(0);
    message.slashFractionBadEthSignature = object.slashFractionBadEthSignature ?? new Uint8Array();
    message.cosmosCoinDenom = object.cosmosCoinDenom ?? "";
    message.cosmosCoinErc20Contract = object.cosmosCoinErc20Contract ?? "";
    message.claimSlashingEnabled = object.claimSlashingEnabled ?? false;
    message.bridgeContractStartHeight = object.bridgeContractStartHeight !== undefined && object.bridgeContractStartHeight !== null ? BigInt(object.bridgeContractStartHeight.toString()) : BigInt(0);
    message.valsetReward = object.valsetReward !== undefined && object.valsetReward !== null ? Coin.fromPartial(object.valsetReward) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.peggy_id !== undefined && object.peggy_id !== null) {
      message.peggyId = object.peggy_id;
    }
    if (object.contract_source_hash !== undefined && object.contract_source_hash !== null) {
      message.contractSourceHash = object.contract_source_hash;
    }
    if (object.bridge_ethereum_address !== undefined && object.bridge_ethereum_address !== null) {
      message.bridgeEthereumAddress = object.bridge_ethereum_address;
    }
    if (object.bridge_chain_id !== undefined && object.bridge_chain_id !== null) {
      message.bridgeChainId = BigInt(object.bridge_chain_id);
    }
    if (object.signed_valsets_window !== undefined && object.signed_valsets_window !== null) {
      message.signedValsetsWindow = BigInt(object.signed_valsets_window);
    }
    if (object.signed_batches_window !== undefined && object.signed_batches_window !== null) {
      message.signedBatchesWindow = BigInt(object.signed_batches_window);
    }
    if (object.signed_claims_window !== undefined && object.signed_claims_window !== null) {
      message.signedClaimsWindow = BigInt(object.signed_claims_window);
    }
    if (object.target_batch_timeout !== undefined && object.target_batch_timeout !== null) {
      message.targetBatchTimeout = BigInt(object.target_batch_timeout);
    }
    if (object.average_block_time !== undefined && object.average_block_time !== null) {
      message.averageBlockTime = BigInt(object.average_block_time);
    }
    if (object.average_ethereum_block_time !== undefined && object.average_ethereum_block_time !== null) {
      message.averageEthereumBlockTime = BigInt(object.average_ethereum_block_time);
    }
    if (object.slash_fraction_valset !== undefined && object.slash_fraction_valset !== null) {
      message.slashFractionValset = bytesFromBase64(object.slash_fraction_valset);
    }
    if (object.slash_fraction_batch !== undefined && object.slash_fraction_batch !== null) {
      message.slashFractionBatch = bytesFromBase64(object.slash_fraction_batch);
    }
    if (object.slash_fraction_claim !== undefined && object.slash_fraction_claim !== null) {
      message.slashFractionClaim = bytesFromBase64(object.slash_fraction_claim);
    }
    if (object.slash_fraction_conflicting_claim !== undefined && object.slash_fraction_conflicting_claim !== null) {
      message.slashFractionConflictingClaim = bytesFromBase64(object.slash_fraction_conflicting_claim);
    }
    if (object.unbond_slashing_valsets_window !== undefined && object.unbond_slashing_valsets_window !== null) {
      message.unbondSlashingValsetsWindow = BigInt(object.unbond_slashing_valsets_window);
    }
    if (object.slash_fraction_bad_eth_signature !== undefined && object.slash_fraction_bad_eth_signature !== null) {
      message.slashFractionBadEthSignature = bytesFromBase64(object.slash_fraction_bad_eth_signature);
    }
    if (object.cosmos_coin_denom !== undefined && object.cosmos_coin_denom !== null) {
      message.cosmosCoinDenom = object.cosmos_coin_denom;
    }
    if (object.cosmos_coin_erc20_contract !== undefined && object.cosmos_coin_erc20_contract !== null) {
      message.cosmosCoinErc20Contract = object.cosmos_coin_erc20_contract;
    }
    if (object.claim_slashing_enabled !== undefined && object.claim_slashing_enabled !== null) {
      message.claimSlashingEnabled = object.claim_slashing_enabled;
    }
    if (object.bridge_contract_start_height !== undefined && object.bridge_contract_start_height !== null) {
      message.bridgeContractStartHeight = BigInt(object.bridge_contract_start_height);
    }
    if (object.valset_reward !== undefined && object.valset_reward !== null) {
      message.valsetReward = Coin.fromAmino(object.valset_reward);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.peggy_id = message.peggyId === "" ? undefined : message.peggyId;
    obj.contract_source_hash = message.contractSourceHash === "" ? undefined : message.contractSourceHash;
    obj.bridge_ethereum_address = message.bridgeEthereumAddress === "" ? undefined : message.bridgeEthereumAddress;
    obj.bridge_chain_id = message.bridgeChainId !== BigInt(0) ? message.bridgeChainId.toString() : undefined;
    obj.signed_valsets_window = message.signedValsetsWindow !== BigInt(0) ? message.signedValsetsWindow.toString() : undefined;
    obj.signed_batches_window = message.signedBatchesWindow !== BigInt(0) ? message.signedBatchesWindow.toString() : undefined;
    obj.signed_claims_window = message.signedClaimsWindow !== BigInt(0) ? message.signedClaimsWindow.toString() : undefined;
    obj.target_batch_timeout = message.targetBatchTimeout !== BigInt(0) ? message.targetBatchTimeout.toString() : undefined;
    obj.average_block_time = message.averageBlockTime !== BigInt(0) ? message.averageBlockTime.toString() : undefined;
    obj.average_ethereum_block_time = message.averageEthereumBlockTime !== BigInt(0) ? message.averageEthereumBlockTime.toString() : undefined;
    obj.slash_fraction_valset = message.slashFractionValset ? base64FromBytes(message.slashFractionValset) : undefined;
    obj.slash_fraction_batch = message.slashFractionBatch ? base64FromBytes(message.slashFractionBatch) : undefined;
    obj.slash_fraction_claim = message.slashFractionClaim ? base64FromBytes(message.slashFractionClaim) : undefined;
    obj.slash_fraction_conflicting_claim = message.slashFractionConflictingClaim ? base64FromBytes(message.slashFractionConflictingClaim) : undefined;
    obj.unbond_slashing_valsets_window = message.unbondSlashingValsetsWindow !== BigInt(0) ? message.unbondSlashingValsetsWindow.toString() : undefined;
    obj.slash_fraction_bad_eth_signature = message.slashFractionBadEthSignature ? base64FromBytes(message.slashFractionBadEthSignature) : undefined;
    obj.cosmos_coin_denom = message.cosmosCoinDenom === "" ? undefined : message.cosmosCoinDenom;
    obj.cosmos_coin_erc20_contract = message.cosmosCoinErc20Contract === "" ? undefined : message.cosmosCoinErc20Contract;
    obj.claim_slashing_enabled = message.claimSlashingEnabled === false ? undefined : message.claimSlashingEnabled;
    obj.bridge_contract_start_height = message.bridgeContractStartHeight !== BigInt(0) ? message.bridgeContractStartHeight.toString() : undefined;
    obj.valset_reward = message.valsetReward ? Coin.toAmino(message.valsetReward) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);