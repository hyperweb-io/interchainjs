import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BridgeValidator, BridgeValidatorAmino } from "./types";
import { Any, AnyAmino } from "../../../google/protobuf/any";
import { Params, ParamsAmino } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * MsgSetOrchestratorAddresses
 * this message allows validators to delegate their voting responsibilities
 * to a given key. This key is then used as an optional authentication method
 * for sigining oracle claims
 * VALIDATOR
 * The validator field is a cosmosvaloper1... string (i.e. sdk.ValAddress)
 * that references a validator in the active set
 * ORCHESTRATOR
 * The orchestrator field is a cosmos1... string  (i.e. sdk.AccAddress) that
 * references the key that is being delegated to
 * ETH_ADDRESS
 * This is a hex encoded 0x Ethereum public key that will be used by this
 * validator on Ethereum
 */
export interface MsgSetOrchestratorAddresses {
  sender: string;
  orchestrator: string;
  ethAddress: string;
}
export interface MsgSetOrchestratorAddressesProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddresses";
  value: Uint8Array;
}
/**
 * MsgSetOrchestratorAddresses
 * this message allows validators to delegate their voting responsibilities
 * to a given key. This key is then used as an optional authentication method
 * for sigining oracle claims
 * VALIDATOR
 * The validator field is a cosmosvaloper1... string (i.e. sdk.ValAddress)
 * that references a validator in the active set
 * ORCHESTRATOR
 * The orchestrator field is a cosmos1... string  (i.e. sdk.AccAddress) that
 * references the key that is being delegated to
 * ETH_ADDRESS
 * This is a hex encoded 0x Ethereum public key that will be used by this
 * validator on Ethereum
 */
export interface MsgSetOrchestratorAddressesAmino {
  sender: string;
  orchestrator: string;
  eth_address: string;
}
export interface MsgSetOrchestratorAddressesAminoMsg {
  type: "peggy/MsgSetOrchestratorAddresses";
  value: MsgSetOrchestratorAddressesAmino;
}
export interface MsgSetOrchestratorAddressesResponse {}
export interface MsgSetOrchestratorAddressesResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddressesResponse";
  value: Uint8Array;
}
export interface MsgSetOrchestratorAddressesResponseAmino {}
export interface MsgSetOrchestratorAddressesResponseAminoMsg {
  type: "/injective.peggy.v1.MsgSetOrchestratorAddressesResponse";
  value: MsgSetOrchestratorAddressesResponseAmino;
}
/**
 * MsgValsetConfirm
 * this is the message sent by the validators when they wish to submit their
 * signatures over the validator set at a given block height. A validator must
 * first call MsgSetEthAddress to set their Ethereum address to be used for
 * signing. Then someone (anyone) must make a ValsetRequest the request is
 * essentially a messaging mechanism to determine which block all validators
 * should submit signatures over. Finally validators sign the validator set,
 * powers, and Ethereum addresses of the entire validator set at the height of a
 * ValsetRequest and submit that signature with this message.
 * 
 * If a sufficient number of validators (66% of voting power) (A) have set
 * Ethereum addresses and (B) submit ValsetConfirm messages with their
 * signatures it is then possible for anyone to view these signatures in the
 * chain store and submit them to Ethereum to update the validator set
 * -------------
 */
export interface MsgValsetConfirm {
  nonce: bigint;
  orchestrator: string;
  ethAddress: string;
  signature: string;
}
export interface MsgValsetConfirmProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgValsetConfirm";
  value: Uint8Array;
}
/**
 * MsgValsetConfirm
 * this is the message sent by the validators when they wish to submit their
 * signatures over the validator set at a given block height. A validator must
 * first call MsgSetEthAddress to set their Ethereum address to be used for
 * signing. Then someone (anyone) must make a ValsetRequest the request is
 * essentially a messaging mechanism to determine which block all validators
 * should submit signatures over. Finally validators sign the validator set,
 * powers, and Ethereum addresses of the entire validator set at the height of a
 * ValsetRequest and submit that signature with this message.
 * 
 * If a sufficient number of validators (66% of voting power) (A) have set
 * Ethereum addresses and (B) submit ValsetConfirm messages with their
 * signatures it is then possible for anyone to view these signatures in the
 * chain store and submit them to Ethereum to update the validator set
 * -------------
 */
export interface MsgValsetConfirmAmino {
  nonce: string;
  orchestrator: string;
  eth_address: string;
  signature: string;
}
export interface MsgValsetConfirmAminoMsg {
  type: "peggy/MsgValsetConfirm";
  value: MsgValsetConfirmAmino;
}
export interface MsgValsetConfirmResponse {}
export interface MsgValsetConfirmResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgValsetConfirmResponse";
  value: Uint8Array;
}
export interface MsgValsetConfirmResponseAmino {}
export interface MsgValsetConfirmResponseAminoMsg {
  type: "/injective.peggy.v1.MsgValsetConfirmResponse";
  value: MsgValsetConfirmResponseAmino;
}
/**
 * MsgSendToEth
 * This is the message that a user calls when they want to bridge an asset
 * it will later be removed when it is included in a batch and successfully
 * submitted tokens are removed from the users balance immediately
 * -------------
 * AMOUNT:
 * the coin to send across the bridge, note the restriction that this is a
 * single coin not a set of coins that is normal in other Cosmos messages
 * FEE:
 * the fee paid for the bridge, distinct from the fee paid to the chain to
 * actually send this message in the first place. So a successful send has
 * two layers of fees for the user
 */
export interface MsgSendToEth {
  sender: string;
  ethDest: string;
  amount: Coin;
  bridgeFee: Coin;
}
export interface MsgSendToEthProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgSendToEth";
  value: Uint8Array;
}
/**
 * MsgSendToEth
 * This is the message that a user calls when they want to bridge an asset
 * it will later be removed when it is included in a batch and successfully
 * submitted tokens are removed from the users balance immediately
 * -------------
 * AMOUNT:
 * the coin to send across the bridge, note the restriction that this is a
 * single coin not a set of coins that is normal in other Cosmos messages
 * FEE:
 * the fee paid for the bridge, distinct from the fee paid to the chain to
 * actually send this message in the first place. So a successful send has
 * two layers of fees for the user
 */
export interface MsgSendToEthAmino {
  sender: string;
  eth_dest: string;
  amount: CoinAmino;
  bridge_fee: CoinAmino;
}
export interface MsgSendToEthAminoMsg {
  type: "peggy/MsgSendToEth";
  value: MsgSendToEthAmino;
}
export interface MsgSendToEthResponse {}
export interface MsgSendToEthResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgSendToEthResponse";
  value: Uint8Array;
}
export interface MsgSendToEthResponseAmino {}
export interface MsgSendToEthResponseAminoMsg {
  type: "/injective.peggy.v1.MsgSendToEthResponse";
  value: MsgSendToEthResponseAmino;
}
/**
 * MsgRequestBatch
 * this is a message anyone can send that requests a batch of transactions to
 * send across the bridge be created for whatever block height this message is
 * included in. This acts as a coordination point, the handler for this message
 * looks at the AddToOutgoingPool tx's in the store and generates a batch, also
 * available in the store tied to this message. The validators then grab this
 * batch, sign it, submit the signatures with a MsgConfirmBatch before a relayer
 * can finally submit the batch
 * -------------
 */
export interface MsgRequestBatch {
  orchestrator: string;
  denom: string;
}
export interface MsgRequestBatchProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgRequestBatch";
  value: Uint8Array;
}
/**
 * MsgRequestBatch
 * this is a message anyone can send that requests a batch of transactions to
 * send across the bridge be created for whatever block height this message is
 * included in. This acts as a coordination point, the handler for this message
 * looks at the AddToOutgoingPool tx's in the store and generates a batch, also
 * available in the store tied to this message. The validators then grab this
 * batch, sign it, submit the signatures with a MsgConfirmBatch before a relayer
 * can finally submit the batch
 * -------------
 */
export interface MsgRequestBatchAmino {
  orchestrator: string;
  denom: string;
}
export interface MsgRequestBatchAminoMsg {
  type: "peggy/MsgRequestBatch";
  value: MsgRequestBatchAmino;
}
export interface MsgRequestBatchResponse {}
export interface MsgRequestBatchResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgRequestBatchResponse";
  value: Uint8Array;
}
export interface MsgRequestBatchResponseAmino {}
export interface MsgRequestBatchResponseAminoMsg {
  type: "/injective.peggy.v1.MsgRequestBatchResponse";
  value: MsgRequestBatchResponseAmino;
}
/**
 * MsgConfirmBatch
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmBatch {
  nonce: bigint;
  tokenContract: string;
  ethSigner: string;
  orchestrator: string;
  signature: string;
}
export interface MsgConfirmBatchProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgConfirmBatch";
  value: Uint8Array;
}
/**
 * MsgConfirmBatch
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmBatchAmino {
  nonce: string;
  token_contract: string;
  eth_signer: string;
  orchestrator: string;
  signature: string;
}
export interface MsgConfirmBatchAminoMsg {
  type: "peggy/MsgConfirmBatch";
  value: MsgConfirmBatchAmino;
}
export interface MsgConfirmBatchResponse {}
export interface MsgConfirmBatchResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgConfirmBatchResponse";
  value: Uint8Array;
}
export interface MsgConfirmBatchResponseAmino {}
export interface MsgConfirmBatchResponseAminoMsg {
  type: "/injective.peggy.v1.MsgConfirmBatchResponse";
  value: MsgConfirmBatchResponseAmino;
}
/**
 * EthereumBridgeDepositClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the ethereum blockchain coins are
 * issued to the Cosmos address in question
 * -------------
 */
export interface MsgDepositClaim {
  eventNonce: bigint;
  blockHeight: bigint;
  tokenContract: string;
  amount: string;
  ethereumSender: string;
  cosmosReceiver: string;
  orchestrator: string;
  data: string;
}
export interface MsgDepositClaimProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgDepositClaim";
  value: Uint8Array;
}
/**
 * EthereumBridgeDepositClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the ethereum blockchain coins are
 * issued to the Cosmos address in question
 * -------------
 */
export interface MsgDepositClaimAmino {
  event_nonce: string;
  block_height: string;
  token_contract: string;
  amount: string;
  ethereum_sender: string;
  cosmos_receiver: string;
  orchestrator: string;
  data: string;
}
export interface MsgDepositClaimAminoMsg {
  type: "peggy/MsgDepositClaim";
  value: MsgDepositClaimAmino;
}
export interface MsgDepositClaimResponse {}
export interface MsgDepositClaimResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgDepositClaimResponse";
  value: Uint8Array;
}
export interface MsgDepositClaimResponseAmino {}
export interface MsgDepositClaimResponseAminoMsg {
  type: "/injective.peggy.v1.MsgDepositClaimResponse";
  value: MsgDepositClaimResponseAmino;
}
/**
 * WithdrawClaim claims that a batch of withdrawal
 * operations on the bridge contract was executed.
 */
export interface MsgWithdrawClaim {
  eventNonce: bigint;
  blockHeight: bigint;
  batchNonce: bigint;
  tokenContract: string;
  orchestrator: string;
}
export interface MsgWithdrawClaimProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgWithdrawClaim";
  value: Uint8Array;
}
/**
 * WithdrawClaim claims that a batch of withdrawal
 * operations on the bridge contract was executed.
 */
export interface MsgWithdrawClaimAmino {
  event_nonce: string;
  block_height: string;
  batch_nonce: string;
  token_contract: string;
  orchestrator: string;
}
export interface MsgWithdrawClaimAminoMsg {
  type: "peggy/MsgWithdrawClaim";
  value: MsgWithdrawClaimAmino;
}
export interface MsgWithdrawClaimResponse {}
export interface MsgWithdrawClaimResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgWithdrawClaimResponse";
  value: Uint8Array;
}
export interface MsgWithdrawClaimResponseAmino {}
export interface MsgWithdrawClaimResponseAminoMsg {
  type: "/injective.peggy.v1.MsgWithdrawClaimResponse";
  value: MsgWithdrawClaimResponseAmino;
}
/**
 * ERC20DeployedClaim allows the Cosmos module
 * to learn about an ERC20 that someone deployed
 * to represent a Cosmos asset
 */
export interface MsgERC20DeployedClaim {
  eventNonce: bigint;
  blockHeight: bigint;
  cosmosDenom: string;
  tokenContract: string;
  name: string;
  symbol: string;
  decimals: bigint;
  orchestrator: string;
}
export interface MsgERC20DeployedClaimProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaim";
  value: Uint8Array;
}
/**
 * ERC20DeployedClaim allows the Cosmos module
 * to learn about an ERC20 that someone deployed
 * to represent a Cosmos asset
 */
export interface MsgERC20DeployedClaimAmino {
  event_nonce: string;
  block_height: string;
  cosmos_denom: string;
  token_contract: string;
  name: string;
  symbol: string;
  decimals: string;
  orchestrator: string;
}
export interface MsgERC20DeployedClaimAminoMsg {
  type: "peggy/MsgERC20DeployedClaim";
  value: MsgERC20DeployedClaimAmino;
}
export interface MsgERC20DeployedClaimResponse {}
export interface MsgERC20DeployedClaimResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaimResponse";
  value: Uint8Array;
}
export interface MsgERC20DeployedClaimResponseAmino {}
export interface MsgERC20DeployedClaimResponseAminoMsg {
  type: "/injective.peggy.v1.MsgERC20DeployedClaimResponse";
  value: MsgERC20DeployedClaimResponseAmino;
}
/**
 * This call allows the sender (and only the sender)
 * to cancel a given MsgSendToEth and recieve a refund
 * of the tokens
 */
export interface MsgCancelSendToEth {
  transactionId: bigint;
  sender: string;
}
export interface MsgCancelSendToEthProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgCancelSendToEth";
  value: Uint8Array;
}
/**
 * This call allows the sender (and only the sender)
 * to cancel a given MsgSendToEth and recieve a refund
 * of the tokens
 */
export interface MsgCancelSendToEthAmino {
  transaction_id: string;
  sender: string;
}
export interface MsgCancelSendToEthAminoMsg {
  type: "peggy/MsgCancelSendToEth";
  value: MsgCancelSendToEthAmino;
}
export interface MsgCancelSendToEthResponse {}
export interface MsgCancelSendToEthResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgCancelSendToEthResponse";
  value: Uint8Array;
}
export interface MsgCancelSendToEthResponseAmino {}
export interface MsgCancelSendToEthResponseAminoMsg {
  type: "/injective.peggy.v1.MsgCancelSendToEthResponse";
  value: MsgCancelSendToEthResponseAmino;
}
/**
 * This call allows anyone to submit evidence that a
 * validator has signed a valset, batch, or logic call that never
 * existed. Subject contains the batch, valset, or logic call.
 */
export interface MsgSubmitBadSignatureEvidence {
  subject?: Any;
  signature: string;
  sender: string;
}
export interface MsgSubmitBadSignatureEvidenceProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence";
  value: Uint8Array;
}
/**
 * This call allows anyone to submit evidence that a
 * validator has signed a valset, batch, or logic call that never
 * existed. Subject contains the batch, valset, or logic call.
 */
export interface MsgSubmitBadSignatureEvidenceAmino {
  subject?: AnyAmino;
  signature: string;
  sender: string;
}
export interface MsgSubmitBadSignatureEvidenceAminoMsg {
  type: "peggy/MsgSubmitBadSignatureEvidence";
  value: MsgSubmitBadSignatureEvidenceAmino;
}
export interface MsgSubmitBadSignatureEvidenceResponse {}
export interface MsgSubmitBadSignatureEvidenceResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidenceResponse";
  value: Uint8Array;
}
export interface MsgSubmitBadSignatureEvidenceResponseAmino {}
export interface MsgSubmitBadSignatureEvidenceResponseAminoMsg {
  type: "/injective.peggy.v1.MsgSubmitBadSignatureEvidenceResponse";
  value: MsgSubmitBadSignatureEvidenceResponseAmino;
}
/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 */
export interface MsgValsetUpdatedClaim {
  eventNonce: bigint;
  valsetNonce: bigint;
  blockHeight: bigint;
  members: BridgeValidator[];
  rewardAmount: string;
  rewardToken: string;
  orchestrator: string;
}
export interface MsgValsetUpdatedClaimProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaim";
  value: Uint8Array;
}
/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 */
export interface MsgValsetUpdatedClaimAmino {
  event_nonce: string;
  valset_nonce: string;
  block_height: string;
  members: BridgeValidatorAmino[];
  reward_amount: string;
  reward_token: string;
  orchestrator: string;
}
export interface MsgValsetUpdatedClaimAminoMsg {
  type: "peggy/MsgValsetUpdatedClaim";
  value: MsgValsetUpdatedClaimAmino;
}
export interface MsgValsetUpdatedClaimResponse {}
export interface MsgValsetUpdatedClaimResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaimResponse";
  value: Uint8Array;
}
export interface MsgValsetUpdatedClaimResponseAmino {}
export interface MsgValsetUpdatedClaimResponseAminoMsg {
  type: "/injective.peggy.v1.MsgValsetUpdatedClaimResponse";
  value: MsgValsetUpdatedClaimResponseAmino;
}
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the peggy parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the peggy parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "peggy/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/injective.peggy.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgBlacklistEthereumAddresses defines the message used to add Ethereum
 * addresses to peggy blacklist.
 */
export interface MsgBlacklistEthereumAddresses {
  /** signer address */
  signer: string;
  /** Ethereum addresses to include in the blacklist */
  blacklistAddresses: string[];
}
export interface MsgBlacklistEthereumAddressesProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgBlacklistEthereumAddresses";
  value: Uint8Array;
}
/**
 * MsgBlacklistEthereumAddresses defines the message used to add Ethereum
 * addresses to peggy blacklist.
 */
export interface MsgBlacklistEthereumAddressesAmino {
  /** signer address */
  signer: string;
  /** Ethereum addresses to include in the blacklist */
  blacklist_addresses: string[];
}
export interface MsgBlacklistEthereumAddressesAminoMsg {
  type: "peggy/MsgBlacklistEthereumAddresses";
  value: MsgBlacklistEthereumAddressesAmino;
}
/**
 * MsgBlacklistEthereumAddressesResponse defines the
 * MsgBlacklistEthereumAddresses response type.
 */
export interface MsgBlacklistEthereumAddressesResponse {}
export interface MsgBlacklistEthereumAddressesResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgBlacklistEthereumAddressesResponse";
  value: Uint8Array;
}
/**
 * MsgBlacklistEthereumAddressesResponse defines the
 * MsgBlacklistEthereumAddresses response type.
 */
export interface MsgBlacklistEthereumAddressesResponseAmino {}
export interface MsgBlacklistEthereumAddressesResponseAminoMsg {
  type: "/injective.peggy.v1.MsgBlacklistEthereumAddressesResponse";
  value: MsgBlacklistEthereumAddressesResponseAmino;
}
/**
 * MsgRevokeEthereumBlacklist defines the message used to remove Ethereum
 * addresses from peggy blacklist.
 */
export interface MsgRevokeEthereumBlacklist {
  /** signer address */
  signer: string;
  /** Ethereum addresses to include in the blacklist */
  blacklistAddresses: string[];
}
export interface MsgRevokeEthereumBlacklistProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgRevokeEthereumBlacklist";
  value: Uint8Array;
}
/**
 * MsgRevokeEthereumBlacklist defines the message used to remove Ethereum
 * addresses from peggy blacklist.
 */
export interface MsgRevokeEthereumBlacklistAmino {
  /** signer address */
  signer: string;
  /** Ethereum addresses to include in the blacklist */
  blacklist_addresses: string[];
}
export interface MsgRevokeEthereumBlacklistAminoMsg {
  type: "peggy/MsgRevokeEthereumBlacklist";
  value: MsgRevokeEthereumBlacklistAmino;
}
/**
 * MsgRevokeEthereumBlacklistResponse defines the MsgRevokeEthereumBlacklist
 * response type.
 */
export interface MsgRevokeEthereumBlacklistResponse {}
export interface MsgRevokeEthereumBlacklistResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgRevokeEthereumBlacklistResponse";
  value: Uint8Array;
}
/**
 * MsgRevokeEthereumBlacklistResponse defines the MsgRevokeEthereumBlacklist
 * response type.
 */
export interface MsgRevokeEthereumBlacklistResponseAmino {}
export interface MsgRevokeEthereumBlacklistResponseAminoMsg {
  type: "/injective.peggy.v1.MsgRevokeEthereumBlacklistResponse";
  value: MsgRevokeEthereumBlacklistResponseAmino;
}
function createBaseMsgSetOrchestratorAddresses(): MsgSetOrchestratorAddresses {
  return {
    sender: "",
    orchestrator: "",
    ethAddress: ""
  };
}
export const MsgSetOrchestratorAddresses = {
  typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddresses",
  aminoType: "peggy/MsgSetOrchestratorAddresses",
  is(o: any): o is MsgSetOrchestratorAddresses {
    return o && (o.$typeUrl === MsgSetOrchestratorAddresses.typeUrl || typeof o.sender === "string" && typeof o.orchestrator === "string" && typeof o.ethAddress === "string");
  },
  isAmino(o: any): o is MsgSetOrchestratorAddressesAmino {
    return o && (o.$typeUrl === MsgSetOrchestratorAddresses.typeUrl || typeof o.sender === "string" && typeof o.orchestrator === "string" && typeof o.eth_address === "string");
  },
  encode(message: MsgSetOrchestratorAddresses, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.orchestrator !== "") {
      writer.uint32(18).string(message.orchestrator);
    }
    if (message.ethAddress !== "") {
      writer.uint32(26).string(message.ethAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetOrchestratorAddresses {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOrchestratorAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.orchestrator = reader.string();
          break;
        case 3:
          message.ethAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetOrchestratorAddresses>): MsgSetOrchestratorAddresses {
    const message = createBaseMsgSetOrchestratorAddresses();
    message.sender = object.sender ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.ethAddress = object.ethAddress ?? "";
    return message;
  },
  fromAmino(object: MsgSetOrchestratorAddressesAmino): MsgSetOrchestratorAddresses {
    const message = createBaseMsgSetOrchestratorAddresses();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = object.orchestrator;
    }
    if (object.eth_address !== undefined && object.eth_address !== null) {
      message.ethAddress = object.eth_address;
    }
    return message;
  },
  toAmino(message: MsgSetOrchestratorAddresses): MsgSetOrchestratorAddressesAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.orchestrator = message.orchestrator === "" ? undefined : message.orchestrator;
    obj.eth_address = message.ethAddress === "" ? undefined : message.ethAddress;
    return obj;
  },
  fromAminoMsg(object: MsgSetOrchestratorAddressesAminoMsg): MsgSetOrchestratorAddresses {
    return MsgSetOrchestratorAddresses.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetOrchestratorAddresses): MsgSetOrchestratorAddressesAminoMsg {
    return {
      type: "peggy/MsgSetOrchestratorAddresses",
      value: MsgSetOrchestratorAddresses.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetOrchestratorAddressesProtoMsg): MsgSetOrchestratorAddresses {
    return MsgSetOrchestratorAddresses.decode(message.value);
  },
  toProto(message: MsgSetOrchestratorAddresses): Uint8Array {
    return MsgSetOrchestratorAddresses.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOrchestratorAddresses): MsgSetOrchestratorAddressesProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddresses",
      value: MsgSetOrchestratorAddresses.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetOrchestratorAddresses.typeUrl, MsgSetOrchestratorAddresses);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetOrchestratorAddresses.aminoType, MsgSetOrchestratorAddresses.typeUrl);
function createBaseMsgSetOrchestratorAddressesResponse(): MsgSetOrchestratorAddressesResponse {
  return {};
}
export const MsgSetOrchestratorAddressesResponse = {
  typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddressesResponse",
  is(o: any): o is MsgSetOrchestratorAddressesResponse {
    return o && o.$typeUrl === MsgSetOrchestratorAddressesResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetOrchestratorAddressesResponseAmino {
    return o && o.$typeUrl === MsgSetOrchestratorAddressesResponse.typeUrl;
  },
  encode(_: MsgSetOrchestratorAddressesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetOrchestratorAddressesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOrchestratorAddressesResponse();
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
  fromPartial(_: DeepPartial<MsgSetOrchestratorAddressesResponse>): MsgSetOrchestratorAddressesResponse {
    const message = createBaseMsgSetOrchestratorAddressesResponse();
    return message;
  },
  fromAmino(_: MsgSetOrchestratorAddressesResponseAmino): MsgSetOrchestratorAddressesResponse {
    const message = createBaseMsgSetOrchestratorAddressesResponse();
    return message;
  },
  toAmino(_: MsgSetOrchestratorAddressesResponse): MsgSetOrchestratorAddressesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetOrchestratorAddressesResponseAminoMsg): MsgSetOrchestratorAddressesResponse {
    return MsgSetOrchestratorAddressesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetOrchestratorAddressesResponseProtoMsg): MsgSetOrchestratorAddressesResponse {
    return MsgSetOrchestratorAddressesResponse.decode(message.value);
  },
  toProto(message: MsgSetOrchestratorAddressesResponse): Uint8Array {
    return MsgSetOrchestratorAddressesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOrchestratorAddressesResponse): MsgSetOrchestratorAddressesResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddressesResponse",
      value: MsgSetOrchestratorAddressesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetOrchestratorAddressesResponse.typeUrl, MsgSetOrchestratorAddressesResponse);
function createBaseMsgValsetConfirm(): MsgValsetConfirm {
  return {
    nonce: BigInt(0),
    orchestrator: "",
    ethAddress: "",
    signature: ""
  };
}
export const MsgValsetConfirm = {
  typeUrl: "/injective.peggy.v1.MsgValsetConfirm",
  aminoType: "peggy/MsgValsetConfirm",
  is(o: any): o is MsgValsetConfirm {
    return o && (o.$typeUrl === MsgValsetConfirm.typeUrl || typeof o.nonce === "bigint" && typeof o.orchestrator === "string" && typeof o.ethAddress === "string" && typeof o.signature === "string");
  },
  isAmino(o: any): o is MsgValsetConfirmAmino {
    return o && (o.$typeUrl === MsgValsetConfirm.typeUrl || typeof o.nonce === "bigint" && typeof o.orchestrator === "string" && typeof o.eth_address === "string" && typeof o.signature === "string");
  },
  encode(message: MsgValsetConfirm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.orchestrator !== "") {
      writer.uint32(18).string(message.orchestrator);
    }
    if (message.ethAddress !== "") {
      writer.uint32(26).string(message.ethAddress);
    }
    if (message.signature !== "") {
      writer.uint32(34).string(message.signature);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgValsetConfirm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64();
          break;
        case 2:
          message.orchestrator = reader.string();
          break;
        case 3:
          message.ethAddress = reader.string();
          break;
        case 4:
          message.signature = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgValsetConfirm>): MsgValsetConfirm {
    const message = createBaseMsgValsetConfirm();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    message.orchestrator = object.orchestrator ?? "";
    message.ethAddress = object.ethAddress ?? "";
    message.signature = object.signature ?? "";
    return message;
  },
  fromAmino(object: MsgValsetConfirmAmino): MsgValsetConfirm {
    const message = createBaseMsgValsetConfirm();
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce);
    }
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = object.orchestrator;
    }
    if (object.eth_address !== undefined && object.eth_address !== null) {
      message.ethAddress = object.eth_address;
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    }
    return message;
  },
  toAmino(message: MsgValsetConfirm): MsgValsetConfirmAmino {
    const obj: any = {};
    obj.nonce = message.nonce !== BigInt(0) ? message.nonce?.toString() : undefined;
    obj.orchestrator = message.orchestrator === "" ? undefined : message.orchestrator;
    obj.eth_address = message.ethAddress === "" ? undefined : message.ethAddress;
    obj.signature = message.signature === "" ? undefined : message.signature;
    return obj;
  },
  fromAminoMsg(object: MsgValsetConfirmAminoMsg): MsgValsetConfirm {
    return MsgValsetConfirm.fromAmino(object.value);
  },
  toAminoMsg(message: MsgValsetConfirm): MsgValsetConfirmAminoMsg {
    return {
      type: "peggy/MsgValsetConfirm",
      value: MsgValsetConfirm.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgValsetConfirmProtoMsg): MsgValsetConfirm {
    return MsgValsetConfirm.decode(message.value);
  },
  toProto(message: MsgValsetConfirm): Uint8Array {
    return MsgValsetConfirm.encode(message).finish();
  },
  toProtoMsg(message: MsgValsetConfirm): MsgValsetConfirmProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgValsetConfirm",
      value: MsgValsetConfirm.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgValsetConfirm.typeUrl, MsgValsetConfirm);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgValsetConfirm.aminoType, MsgValsetConfirm.typeUrl);
function createBaseMsgValsetConfirmResponse(): MsgValsetConfirmResponse {
  return {};
}
export const MsgValsetConfirmResponse = {
  typeUrl: "/injective.peggy.v1.MsgValsetConfirmResponse",
  is(o: any): o is MsgValsetConfirmResponse {
    return o && o.$typeUrl === MsgValsetConfirmResponse.typeUrl;
  },
  isAmino(o: any): o is MsgValsetConfirmResponseAmino {
    return o && o.$typeUrl === MsgValsetConfirmResponse.typeUrl;
  },
  encode(_: MsgValsetConfirmResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgValsetConfirmResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetConfirmResponse();
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
  fromPartial(_: DeepPartial<MsgValsetConfirmResponse>): MsgValsetConfirmResponse {
    const message = createBaseMsgValsetConfirmResponse();
    return message;
  },
  fromAmino(_: MsgValsetConfirmResponseAmino): MsgValsetConfirmResponse {
    const message = createBaseMsgValsetConfirmResponse();
    return message;
  },
  toAmino(_: MsgValsetConfirmResponse): MsgValsetConfirmResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgValsetConfirmResponseAminoMsg): MsgValsetConfirmResponse {
    return MsgValsetConfirmResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgValsetConfirmResponseProtoMsg): MsgValsetConfirmResponse {
    return MsgValsetConfirmResponse.decode(message.value);
  },
  toProto(message: MsgValsetConfirmResponse): Uint8Array {
    return MsgValsetConfirmResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgValsetConfirmResponse): MsgValsetConfirmResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgValsetConfirmResponse",
      value: MsgValsetConfirmResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgValsetConfirmResponse.typeUrl, MsgValsetConfirmResponse);
function createBaseMsgSendToEth(): MsgSendToEth {
  return {
    sender: "",
    ethDest: "",
    amount: Coin.fromPartial({}),
    bridgeFee: Coin.fromPartial({})
  };
}
export const MsgSendToEth = {
  typeUrl: "/injective.peggy.v1.MsgSendToEth",
  aminoType: "peggy/MsgSendToEth",
  is(o: any): o is MsgSendToEth {
    return o && (o.$typeUrl === MsgSendToEth.typeUrl || typeof o.sender === "string" && typeof o.ethDest === "string" && Coin.is(o.amount) && Coin.is(o.bridgeFee));
  },
  isAmino(o: any): o is MsgSendToEthAmino {
    return o && (o.$typeUrl === MsgSendToEth.typeUrl || typeof o.sender === "string" && typeof o.eth_dest === "string" && Coin.isAmino(o.amount) && Coin.isAmino(o.bridge_fee));
  },
  encode(message: MsgSendToEth, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.ethDest !== "") {
      writer.uint32(18).string(message.ethDest);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.bridgeFee !== undefined) {
      Coin.encode(message.bridgeFee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSendToEth {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToEth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.ethDest = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.bridgeFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSendToEth>): MsgSendToEth {
    const message = createBaseMsgSendToEth();
    message.sender = object.sender ?? "";
    message.ethDest = object.ethDest ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.bridgeFee = object.bridgeFee !== undefined && object.bridgeFee !== null ? Coin.fromPartial(object.bridgeFee) : undefined;
    return message;
  },
  fromAmino(object: MsgSendToEthAmino): MsgSendToEth {
    const message = createBaseMsgSendToEth();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.eth_dest !== undefined && object.eth_dest !== null) {
      message.ethDest = object.eth_dest;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.bridge_fee !== undefined && object.bridge_fee !== null) {
      message.bridgeFee = Coin.fromAmino(object.bridge_fee);
    }
    return message;
  },
  toAmino(message: MsgSendToEth): MsgSendToEthAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.eth_dest = message.ethDest === "" ? undefined : message.ethDest;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.bridge_fee = message.bridgeFee ? Coin.toAmino(message.bridgeFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSendToEthAminoMsg): MsgSendToEth {
    return MsgSendToEth.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSendToEth): MsgSendToEthAminoMsg {
    return {
      type: "peggy/MsgSendToEth",
      value: MsgSendToEth.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSendToEthProtoMsg): MsgSendToEth {
    return MsgSendToEth.decode(message.value);
  },
  toProto(message: MsgSendToEth): Uint8Array {
    return MsgSendToEth.encode(message).finish();
  },
  toProtoMsg(message: MsgSendToEth): MsgSendToEthProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgSendToEth",
      value: MsgSendToEth.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSendToEth.typeUrl, MsgSendToEth);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSendToEth.aminoType, MsgSendToEth.typeUrl);
function createBaseMsgSendToEthResponse(): MsgSendToEthResponse {
  return {};
}
export const MsgSendToEthResponse = {
  typeUrl: "/injective.peggy.v1.MsgSendToEthResponse",
  is(o: any): o is MsgSendToEthResponse {
    return o && o.$typeUrl === MsgSendToEthResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSendToEthResponseAmino {
    return o && o.$typeUrl === MsgSendToEthResponse.typeUrl;
  },
  encode(_: MsgSendToEthResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSendToEthResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToEthResponse();
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
  fromPartial(_: DeepPartial<MsgSendToEthResponse>): MsgSendToEthResponse {
    const message = createBaseMsgSendToEthResponse();
    return message;
  },
  fromAmino(_: MsgSendToEthResponseAmino): MsgSendToEthResponse {
    const message = createBaseMsgSendToEthResponse();
    return message;
  },
  toAmino(_: MsgSendToEthResponse): MsgSendToEthResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSendToEthResponseAminoMsg): MsgSendToEthResponse {
    return MsgSendToEthResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSendToEthResponseProtoMsg): MsgSendToEthResponse {
    return MsgSendToEthResponse.decode(message.value);
  },
  toProto(message: MsgSendToEthResponse): Uint8Array {
    return MsgSendToEthResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSendToEthResponse): MsgSendToEthResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgSendToEthResponse",
      value: MsgSendToEthResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSendToEthResponse.typeUrl, MsgSendToEthResponse);
function createBaseMsgRequestBatch(): MsgRequestBatch {
  return {
    orchestrator: "",
    denom: ""
  };
}
export const MsgRequestBatch = {
  typeUrl: "/injective.peggy.v1.MsgRequestBatch",
  aminoType: "peggy/MsgRequestBatch",
  is(o: any): o is MsgRequestBatch {
    return o && (o.$typeUrl === MsgRequestBatch.typeUrl || typeof o.orchestrator === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgRequestBatchAmino {
    return o && (o.$typeUrl === MsgRequestBatch.typeUrl || typeof o.orchestrator === "string" && typeof o.denom === "string");
  },
  encode(message: MsgRequestBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orchestrator !== "") {
      writer.uint32(10).string(message.orchestrator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestBatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orchestrator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRequestBatch>): MsgRequestBatch {
    const message = createBaseMsgRequestBatch();
    message.orchestrator = object.orchestrator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgRequestBatchAmino): MsgRequestBatch {
    const message = createBaseMsgRequestBatch();
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = object.orchestrator;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgRequestBatch): MsgRequestBatchAmino {
    const obj: any = {};
    obj.orchestrator = message.orchestrator === "" ? undefined : message.orchestrator;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgRequestBatchAminoMsg): MsgRequestBatch {
    return MsgRequestBatch.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRequestBatch): MsgRequestBatchAminoMsg {
    return {
      type: "peggy/MsgRequestBatch",
      value: MsgRequestBatch.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRequestBatchProtoMsg): MsgRequestBatch {
    return MsgRequestBatch.decode(message.value);
  },
  toProto(message: MsgRequestBatch): Uint8Array {
    return MsgRequestBatch.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestBatch): MsgRequestBatchProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgRequestBatch",
      value: MsgRequestBatch.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRequestBatch.typeUrl, MsgRequestBatch);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRequestBatch.aminoType, MsgRequestBatch.typeUrl);
function createBaseMsgRequestBatchResponse(): MsgRequestBatchResponse {
  return {};
}
export const MsgRequestBatchResponse = {
  typeUrl: "/injective.peggy.v1.MsgRequestBatchResponse",
  is(o: any): o is MsgRequestBatchResponse {
    return o && o.$typeUrl === MsgRequestBatchResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRequestBatchResponseAmino {
    return o && o.$typeUrl === MsgRequestBatchResponse.typeUrl;
  },
  encode(_: MsgRequestBatchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestBatchResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestBatchResponse();
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
  fromPartial(_: DeepPartial<MsgRequestBatchResponse>): MsgRequestBatchResponse {
    const message = createBaseMsgRequestBatchResponse();
    return message;
  },
  fromAmino(_: MsgRequestBatchResponseAmino): MsgRequestBatchResponse {
    const message = createBaseMsgRequestBatchResponse();
    return message;
  },
  toAmino(_: MsgRequestBatchResponse): MsgRequestBatchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRequestBatchResponseAminoMsg): MsgRequestBatchResponse {
    return MsgRequestBatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestBatchResponseProtoMsg): MsgRequestBatchResponse {
    return MsgRequestBatchResponse.decode(message.value);
  },
  toProto(message: MsgRequestBatchResponse): Uint8Array {
    return MsgRequestBatchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestBatchResponse): MsgRequestBatchResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgRequestBatchResponse",
      value: MsgRequestBatchResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRequestBatchResponse.typeUrl, MsgRequestBatchResponse);
function createBaseMsgConfirmBatch(): MsgConfirmBatch {
  return {
    nonce: BigInt(0),
    tokenContract: "",
    ethSigner: "",
    orchestrator: "",
    signature: ""
  };
}
export const MsgConfirmBatch = {
  typeUrl: "/injective.peggy.v1.MsgConfirmBatch",
  aminoType: "peggy/MsgConfirmBatch",
  is(o: any): o is MsgConfirmBatch {
    return o && (o.$typeUrl === MsgConfirmBatch.typeUrl || typeof o.nonce === "bigint" && typeof o.tokenContract === "string" && typeof o.ethSigner === "string" && typeof o.orchestrator === "string" && typeof o.signature === "string");
  },
  isAmino(o: any): o is MsgConfirmBatchAmino {
    return o && (o.$typeUrl === MsgConfirmBatch.typeUrl || typeof o.nonce === "bigint" && typeof o.token_contract === "string" && typeof o.eth_signer === "string" && typeof o.orchestrator === "string" && typeof o.signature === "string");
  },
  encode(message: MsgConfirmBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.tokenContract !== "") {
      writer.uint32(18).string(message.tokenContract);
    }
    if (message.ethSigner !== "") {
      writer.uint32(26).string(message.ethSigner);
    }
    if (message.orchestrator !== "") {
      writer.uint32(34).string(message.orchestrator);
    }
    if (message.signature !== "") {
      writer.uint32(42).string(message.signature);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConfirmBatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64();
          break;
        case 2:
          message.tokenContract = reader.string();
          break;
        case 3:
          message.ethSigner = reader.string();
          break;
        case 4:
          message.orchestrator = reader.string();
          break;
        case 5:
          message.signature = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgConfirmBatch>): MsgConfirmBatch {
    const message = createBaseMsgConfirmBatch();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    message.tokenContract = object.tokenContract ?? "";
    message.ethSigner = object.ethSigner ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.signature = object.signature ?? "";
    return message;
  },
  fromAmino(object: MsgConfirmBatchAmino): MsgConfirmBatch {
    const message = createBaseMsgConfirmBatch();
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce);
    }
    if (object.token_contract !== undefined && object.token_contract !== null) {
      message.tokenContract = object.token_contract;
    }
    if (object.eth_signer !== undefined && object.eth_signer !== null) {
      message.ethSigner = object.eth_signer;
    }
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = object.orchestrator;
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    }
    return message;
  },
  toAmino(message: MsgConfirmBatch): MsgConfirmBatchAmino {
    const obj: any = {};
    obj.nonce = message.nonce !== BigInt(0) ? message.nonce?.toString() : undefined;
    obj.token_contract = message.tokenContract === "" ? undefined : message.tokenContract;
    obj.eth_signer = message.ethSigner === "" ? undefined : message.ethSigner;
    obj.orchestrator = message.orchestrator === "" ? undefined : message.orchestrator;
    obj.signature = message.signature === "" ? undefined : message.signature;
    return obj;
  },
  fromAminoMsg(object: MsgConfirmBatchAminoMsg): MsgConfirmBatch {
    return MsgConfirmBatch.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConfirmBatch): MsgConfirmBatchAminoMsg {
    return {
      type: "peggy/MsgConfirmBatch",
      value: MsgConfirmBatch.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgConfirmBatchProtoMsg): MsgConfirmBatch {
    return MsgConfirmBatch.decode(message.value);
  },
  toProto(message: MsgConfirmBatch): Uint8Array {
    return MsgConfirmBatch.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmBatch): MsgConfirmBatchProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgConfirmBatch",
      value: MsgConfirmBatch.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgConfirmBatch.typeUrl, MsgConfirmBatch);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgConfirmBatch.aminoType, MsgConfirmBatch.typeUrl);
function createBaseMsgConfirmBatchResponse(): MsgConfirmBatchResponse {
  return {};
}
export const MsgConfirmBatchResponse = {
  typeUrl: "/injective.peggy.v1.MsgConfirmBatchResponse",
  is(o: any): o is MsgConfirmBatchResponse {
    return o && o.$typeUrl === MsgConfirmBatchResponse.typeUrl;
  },
  isAmino(o: any): o is MsgConfirmBatchResponseAmino {
    return o && o.$typeUrl === MsgConfirmBatchResponse.typeUrl;
  },
  encode(_: MsgConfirmBatchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConfirmBatchResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmBatchResponse();
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
  fromPartial(_: DeepPartial<MsgConfirmBatchResponse>): MsgConfirmBatchResponse {
    const message = createBaseMsgConfirmBatchResponse();
    return message;
  },
  fromAmino(_: MsgConfirmBatchResponseAmino): MsgConfirmBatchResponse {
    const message = createBaseMsgConfirmBatchResponse();
    return message;
  },
  toAmino(_: MsgConfirmBatchResponse): MsgConfirmBatchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConfirmBatchResponseAminoMsg): MsgConfirmBatchResponse {
    return MsgConfirmBatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmBatchResponseProtoMsg): MsgConfirmBatchResponse {
    return MsgConfirmBatchResponse.decode(message.value);
  },
  toProto(message: MsgConfirmBatchResponse): Uint8Array {
    return MsgConfirmBatchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmBatchResponse): MsgConfirmBatchResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgConfirmBatchResponse",
      value: MsgConfirmBatchResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgConfirmBatchResponse.typeUrl, MsgConfirmBatchResponse);
function createBaseMsgDepositClaim(): MsgDepositClaim {
  return {
    eventNonce: BigInt(0),
    blockHeight: BigInt(0),
    tokenContract: "",
    amount: "",
    ethereumSender: "",
    cosmosReceiver: "",
    orchestrator: "",
    data: ""
  };
}
export const MsgDepositClaim = {
  typeUrl: "/injective.peggy.v1.MsgDepositClaim",
  aminoType: "peggy/MsgDepositClaim",
  is(o: any): o is MsgDepositClaim {
    return o && (o.$typeUrl === MsgDepositClaim.typeUrl || typeof o.eventNonce === "bigint" && typeof o.blockHeight === "bigint" && typeof o.tokenContract === "string" && typeof o.amount === "string" && typeof o.ethereumSender === "string" && typeof o.cosmosReceiver === "string" && typeof o.orchestrator === "string" && typeof o.data === "string");
  },
  isAmino(o: any): o is MsgDepositClaimAmino {
    return o && (o.$typeUrl === MsgDepositClaim.typeUrl || typeof o.event_nonce === "bigint" && typeof o.block_height === "bigint" && typeof o.token_contract === "string" && typeof o.amount === "string" && typeof o.ethereum_sender === "string" && typeof o.cosmos_receiver === "string" && typeof o.orchestrator === "string" && typeof o.data === "string");
  },
  encode(message: MsgDepositClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.tokenContract !== "") {
      writer.uint32(26).string(message.tokenContract);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.ethereumSender !== "") {
      writer.uint32(42).string(message.ethereumSender);
    }
    if (message.cosmosReceiver !== "") {
      writer.uint32(50).string(message.cosmosReceiver);
    }
    if (message.orchestrator !== "") {
      writer.uint32(58).string(message.orchestrator);
    }
    if (message.data !== "") {
      writer.uint32(66).string(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64();
          break;
        case 2:
          message.blockHeight = reader.uint64();
          break;
        case 3:
          message.tokenContract = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.ethereumSender = reader.string();
          break;
        case 6:
          message.cosmosReceiver = reader.string();
          break;
        case 7:
          message.orchestrator = reader.string();
          break;
        case 8:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDepositClaim>): MsgDepositClaim {
    const message = createBaseMsgDepositClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.tokenContract = object.tokenContract ?? "";
    message.amount = object.amount ?? "";
    message.ethereumSender = object.ethereumSender ?? "";
    message.cosmosReceiver = object.cosmosReceiver ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.data = object.data ?? "";
    return message;
  },
  fromAmino(object: MsgDepositClaimAmino): MsgDepositClaim {
    const message = createBaseMsgDepositClaim();
    if (object.event_nonce !== undefined && object.event_nonce !== null) {
      message.eventNonce = BigInt(object.event_nonce);
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.token_contract !== undefined && object.token_contract !== null) {
      message.tokenContract = object.token_contract;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.ethereum_sender !== undefined && object.ethereum_sender !== null) {
      message.ethereumSender = object.ethereum_sender;
    }
    if (object.cosmos_receiver !== undefined && object.cosmos_receiver !== null) {
      message.cosmosReceiver = object.cosmos_receiver;
    }
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = object.orchestrator;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    return message;
  },
  toAmino(message: MsgDepositClaim): MsgDepositClaimAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce !== BigInt(0) ? message.eventNonce?.toString() : undefined;
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    obj.token_contract = message.tokenContract === "" ? undefined : message.tokenContract;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.ethereum_sender = message.ethereumSender === "" ? undefined : message.ethereumSender;
    obj.cosmos_receiver = message.cosmosReceiver === "" ? undefined : message.cosmosReceiver;
    obj.orchestrator = message.orchestrator === "" ? undefined : message.orchestrator;
    obj.data = message.data === "" ? undefined : message.data;
    return obj;
  },
  fromAminoMsg(object: MsgDepositClaimAminoMsg): MsgDepositClaim {
    return MsgDepositClaim.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDepositClaim): MsgDepositClaimAminoMsg {
    return {
      type: "peggy/MsgDepositClaim",
      value: MsgDepositClaim.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDepositClaimProtoMsg): MsgDepositClaim {
    return MsgDepositClaim.decode(message.value);
  },
  toProto(message: MsgDepositClaim): Uint8Array {
    return MsgDepositClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositClaim): MsgDepositClaimProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgDepositClaim",
      value: MsgDepositClaim.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDepositClaim.typeUrl, MsgDepositClaim);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgDepositClaim.aminoType, MsgDepositClaim.typeUrl);
function createBaseMsgDepositClaimResponse(): MsgDepositClaimResponse {
  return {};
}
export const MsgDepositClaimResponse = {
  typeUrl: "/injective.peggy.v1.MsgDepositClaimResponse",
  is(o: any): o is MsgDepositClaimResponse {
    return o && o.$typeUrl === MsgDepositClaimResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDepositClaimResponseAmino {
    return o && o.$typeUrl === MsgDepositClaimResponse.typeUrl;
  },
  encode(_: MsgDepositClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositClaimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositClaimResponse();
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
  fromPartial(_: DeepPartial<MsgDepositClaimResponse>): MsgDepositClaimResponse {
    const message = createBaseMsgDepositClaimResponse();
    return message;
  },
  fromAmino(_: MsgDepositClaimResponseAmino): MsgDepositClaimResponse {
    const message = createBaseMsgDepositClaimResponse();
    return message;
  },
  toAmino(_: MsgDepositClaimResponse): MsgDepositClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDepositClaimResponseAminoMsg): MsgDepositClaimResponse {
    return MsgDepositClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositClaimResponseProtoMsg): MsgDepositClaimResponse {
    return MsgDepositClaimResponse.decode(message.value);
  },
  toProto(message: MsgDepositClaimResponse): Uint8Array {
    return MsgDepositClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositClaimResponse): MsgDepositClaimResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgDepositClaimResponse",
      value: MsgDepositClaimResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDepositClaimResponse.typeUrl, MsgDepositClaimResponse);
function createBaseMsgWithdrawClaim(): MsgWithdrawClaim {
  return {
    eventNonce: BigInt(0),
    blockHeight: BigInt(0),
    batchNonce: BigInt(0),
    tokenContract: "",
    orchestrator: ""
  };
}
export const MsgWithdrawClaim = {
  typeUrl: "/injective.peggy.v1.MsgWithdrawClaim",
  aminoType: "peggy/MsgWithdrawClaim",
  is(o: any): o is MsgWithdrawClaim {
    return o && (o.$typeUrl === MsgWithdrawClaim.typeUrl || typeof o.eventNonce === "bigint" && typeof o.blockHeight === "bigint" && typeof o.batchNonce === "bigint" && typeof o.tokenContract === "string" && typeof o.orchestrator === "string");
  },
  isAmino(o: any): o is MsgWithdrawClaimAmino {
    return o && (o.$typeUrl === MsgWithdrawClaim.typeUrl || typeof o.event_nonce === "bigint" && typeof o.block_height === "bigint" && typeof o.batch_nonce === "bigint" && typeof o.token_contract === "string" && typeof o.orchestrator === "string");
  },
  encode(message: MsgWithdrawClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.batchNonce !== BigInt(0)) {
      writer.uint32(24).uint64(message.batchNonce);
    }
    if (message.tokenContract !== "") {
      writer.uint32(34).string(message.tokenContract);
    }
    if (message.orchestrator !== "") {
      writer.uint32(42).string(message.orchestrator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64();
          break;
        case 2:
          message.blockHeight = reader.uint64();
          break;
        case 3:
          message.batchNonce = reader.uint64();
          break;
        case 4:
          message.tokenContract = reader.string();
          break;
        case 5:
          message.orchestrator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgWithdrawClaim>): MsgWithdrawClaim {
    const message = createBaseMsgWithdrawClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? BigInt(object.batchNonce.toString()) : BigInt(0);
    message.tokenContract = object.tokenContract ?? "";
    message.orchestrator = object.orchestrator ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawClaimAmino): MsgWithdrawClaim {
    const message = createBaseMsgWithdrawClaim();
    if (object.event_nonce !== undefined && object.event_nonce !== null) {
      message.eventNonce = BigInt(object.event_nonce);
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.batch_nonce !== undefined && object.batch_nonce !== null) {
      message.batchNonce = BigInt(object.batch_nonce);
    }
    if (object.token_contract !== undefined && object.token_contract !== null) {
      message.tokenContract = object.token_contract;
    }
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = object.orchestrator;
    }
    return message;
  },
  toAmino(message: MsgWithdrawClaim): MsgWithdrawClaimAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce !== BigInt(0) ? message.eventNonce?.toString() : undefined;
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    obj.batch_nonce = message.batchNonce !== BigInt(0) ? message.batchNonce?.toString() : undefined;
    obj.token_contract = message.tokenContract === "" ? undefined : message.tokenContract;
    obj.orchestrator = message.orchestrator === "" ? undefined : message.orchestrator;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawClaimAminoMsg): MsgWithdrawClaim {
    return MsgWithdrawClaim.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawClaim): MsgWithdrawClaimAminoMsg {
    return {
      type: "peggy/MsgWithdrawClaim",
      value: MsgWithdrawClaim.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawClaimProtoMsg): MsgWithdrawClaim {
    return MsgWithdrawClaim.decode(message.value);
  },
  toProto(message: MsgWithdrawClaim): Uint8Array {
    return MsgWithdrawClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawClaim): MsgWithdrawClaimProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgWithdrawClaim",
      value: MsgWithdrawClaim.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWithdrawClaim.typeUrl, MsgWithdrawClaim);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgWithdrawClaim.aminoType, MsgWithdrawClaim.typeUrl);
function createBaseMsgWithdrawClaimResponse(): MsgWithdrawClaimResponse {
  return {};
}
export const MsgWithdrawClaimResponse = {
  typeUrl: "/injective.peggy.v1.MsgWithdrawClaimResponse",
  is(o: any): o is MsgWithdrawClaimResponse {
    return o && o.$typeUrl === MsgWithdrawClaimResponse.typeUrl;
  },
  isAmino(o: any): o is MsgWithdrawClaimResponseAmino {
    return o && o.$typeUrl === MsgWithdrawClaimResponse.typeUrl;
  },
  encode(_: MsgWithdrawClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawClaimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawClaimResponse();
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
  fromPartial(_: DeepPartial<MsgWithdrawClaimResponse>): MsgWithdrawClaimResponse {
    const message = createBaseMsgWithdrawClaimResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawClaimResponseAmino): MsgWithdrawClaimResponse {
    const message = createBaseMsgWithdrawClaimResponse();
    return message;
  },
  toAmino(_: MsgWithdrawClaimResponse): MsgWithdrawClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawClaimResponseAminoMsg): MsgWithdrawClaimResponse {
    return MsgWithdrawClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawClaimResponseProtoMsg): MsgWithdrawClaimResponse {
    return MsgWithdrawClaimResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawClaimResponse): Uint8Array {
    return MsgWithdrawClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawClaimResponse): MsgWithdrawClaimResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgWithdrawClaimResponse",
      value: MsgWithdrawClaimResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWithdrawClaimResponse.typeUrl, MsgWithdrawClaimResponse);
function createBaseMsgERC20DeployedClaim(): MsgERC20DeployedClaim {
  return {
    eventNonce: BigInt(0),
    blockHeight: BigInt(0),
    cosmosDenom: "",
    tokenContract: "",
    name: "",
    symbol: "",
    decimals: BigInt(0),
    orchestrator: ""
  };
}
export const MsgERC20DeployedClaim = {
  typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaim",
  aminoType: "peggy/MsgERC20DeployedClaim",
  is(o: any): o is MsgERC20DeployedClaim {
    return o && (o.$typeUrl === MsgERC20DeployedClaim.typeUrl || typeof o.eventNonce === "bigint" && typeof o.blockHeight === "bigint" && typeof o.cosmosDenom === "string" && typeof o.tokenContract === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.decimals === "bigint" && typeof o.orchestrator === "string");
  },
  isAmino(o: any): o is MsgERC20DeployedClaimAmino {
    return o && (o.$typeUrl === MsgERC20DeployedClaim.typeUrl || typeof o.event_nonce === "bigint" && typeof o.block_height === "bigint" && typeof o.cosmos_denom === "string" && typeof o.token_contract === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.decimals === "bigint" && typeof o.orchestrator === "string");
  },
  encode(message: MsgERC20DeployedClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.cosmosDenom !== "") {
      writer.uint32(26).string(message.cosmosDenom);
    }
    if (message.tokenContract !== "") {
      writer.uint32(34).string(message.tokenContract);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(50).string(message.symbol);
    }
    if (message.decimals !== BigInt(0)) {
      writer.uint32(56).uint64(message.decimals);
    }
    if (message.orchestrator !== "") {
      writer.uint32(66).string(message.orchestrator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgERC20DeployedClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgERC20DeployedClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64();
          break;
        case 2:
          message.blockHeight = reader.uint64();
          break;
        case 3:
          message.cosmosDenom = reader.string();
          break;
        case 4:
          message.tokenContract = reader.string();
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.symbol = reader.string();
          break;
        case 7:
          message.decimals = reader.uint64();
          break;
        case 8:
          message.orchestrator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgERC20DeployedClaim>): MsgERC20DeployedClaim {
    const message = createBaseMsgERC20DeployedClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.cosmosDenom = object.cosmosDenom ?? "";
    message.tokenContract = object.tokenContract ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals.toString()) : BigInt(0);
    message.orchestrator = object.orchestrator ?? "";
    return message;
  },
  fromAmino(object: MsgERC20DeployedClaimAmino): MsgERC20DeployedClaim {
    const message = createBaseMsgERC20DeployedClaim();
    if (object.event_nonce !== undefined && object.event_nonce !== null) {
      message.eventNonce = BigInt(object.event_nonce);
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
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
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = object.orchestrator;
    }
    return message;
  },
  toAmino(message: MsgERC20DeployedClaim): MsgERC20DeployedClaimAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce !== BigInt(0) ? message.eventNonce?.toString() : undefined;
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    obj.cosmos_denom = message.cosmosDenom === "" ? undefined : message.cosmosDenom;
    obj.token_contract = message.tokenContract === "" ? undefined : message.tokenContract;
    obj.name = message.name === "" ? undefined : message.name;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.decimals = message.decimals !== BigInt(0) ? message.decimals?.toString() : undefined;
    obj.orchestrator = message.orchestrator === "" ? undefined : message.orchestrator;
    return obj;
  },
  fromAminoMsg(object: MsgERC20DeployedClaimAminoMsg): MsgERC20DeployedClaim {
    return MsgERC20DeployedClaim.fromAmino(object.value);
  },
  toAminoMsg(message: MsgERC20DeployedClaim): MsgERC20DeployedClaimAminoMsg {
    return {
      type: "peggy/MsgERC20DeployedClaim",
      value: MsgERC20DeployedClaim.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgERC20DeployedClaimProtoMsg): MsgERC20DeployedClaim {
    return MsgERC20DeployedClaim.decode(message.value);
  },
  toProto(message: MsgERC20DeployedClaim): Uint8Array {
    return MsgERC20DeployedClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgERC20DeployedClaim): MsgERC20DeployedClaimProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaim",
      value: MsgERC20DeployedClaim.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgERC20DeployedClaim.typeUrl, MsgERC20DeployedClaim);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgERC20DeployedClaim.aminoType, MsgERC20DeployedClaim.typeUrl);
function createBaseMsgERC20DeployedClaimResponse(): MsgERC20DeployedClaimResponse {
  return {};
}
export const MsgERC20DeployedClaimResponse = {
  typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaimResponse",
  is(o: any): o is MsgERC20DeployedClaimResponse {
    return o && o.$typeUrl === MsgERC20DeployedClaimResponse.typeUrl;
  },
  isAmino(o: any): o is MsgERC20DeployedClaimResponseAmino {
    return o && o.$typeUrl === MsgERC20DeployedClaimResponse.typeUrl;
  },
  encode(_: MsgERC20DeployedClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgERC20DeployedClaimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgERC20DeployedClaimResponse();
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
  fromPartial(_: DeepPartial<MsgERC20DeployedClaimResponse>): MsgERC20DeployedClaimResponse {
    const message = createBaseMsgERC20DeployedClaimResponse();
    return message;
  },
  fromAmino(_: MsgERC20DeployedClaimResponseAmino): MsgERC20DeployedClaimResponse {
    const message = createBaseMsgERC20DeployedClaimResponse();
    return message;
  },
  toAmino(_: MsgERC20DeployedClaimResponse): MsgERC20DeployedClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgERC20DeployedClaimResponseAminoMsg): MsgERC20DeployedClaimResponse {
    return MsgERC20DeployedClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgERC20DeployedClaimResponseProtoMsg): MsgERC20DeployedClaimResponse {
    return MsgERC20DeployedClaimResponse.decode(message.value);
  },
  toProto(message: MsgERC20DeployedClaimResponse): Uint8Array {
    return MsgERC20DeployedClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgERC20DeployedClaimResponse): MsgERC20DeployedClaimResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaimResponse",
      value: MsgERC20DeployedClaimResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgERC20DeployedClaimResponse.typeUrl, MsgERC20DeployedClaimResponse);
function createBaseMsgCancelSendToEth(): MsgCancelSendToEth {
  return {
    transactionId: BigInt(0),
    sender: ""
  };
}
export const MsgCancelSendToEth = {
  typeUrl: "/injective.peggy.v1.MsgCancelSendToEth",
  aminoType: "peggy/MsgCancelSendToEth",
  is(o: any): o is MsgCancelSendToEth {
    return o && (o.$typeUrl === MsgCancelSendToEth.typeUrl || typeof o.transactionId === "bigint" && typeof o.sender === "string");
  },
  isAmino(o: any): o is MsgCancelSendToEthAmino {
    return o && (o.$typeUrl === MsgCancelSendToEth.typeUrl || typeof o.transaction_id === "bigint" && typeof o.sender === "string");
  },
  encode(message: MsgCancelSendToEth, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.transactionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.transactionId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelSendToEth {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSendToEth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactionId = reader.uint64();
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCancelSendToEth>): MsgCancelSendToEth {
    const message = createBaseMsgCancelSendToEth();
    message.transactionId = object.transactionId !== undefined && object.transactionId !== null ? BigInt(object.transactionId.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgCancelSendToEthAmino): MsgCancelSendToEth {
    const message = createBaseMsgCancelSendToEth();
    if (object.transaction_id !== undefined && object.transaction_id !== null) {
      message.transactionId = BigInt(object.transaction_id);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgCancelSendToEth): MsgCancelSendToEthAmino {
    const obj: any = {};
    obj.transaction_id = message.transactionId !== BigInt(0) ? message.transactionId?.toString() : undefined;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgCancelSendToEthAminoMsg): MsgCancelSendToEth {
    return MsgCancelSendToEth.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelSendToEth): MsgCancelSendToEthAminoMsg {
    return {
      type: "peggy/MsgCancelSendToEth",
      value: MsgCancelSendToEth.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelSendToEthProtoMsg): MsgCancelSendToEth {
    return MsgCancelSendToEth.decode(message.value);
  },
  toProto(message: MsgCancelSendToEth): Uint8Array {
    return MsgCancelSendToEth.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelSendToEth): MsgCancelSendToEthProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgCancelSendToEth",
      value: MsgCancelSendToEth.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCancelSendToEth.typeUrl, MsgCancelSendToEth);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCancelSendToEth.aminoType, MsgCancelSendToEth.typeUrl);
function createBaseMsgCancelSendToEthResponse(): MsgCancelSendToEthResponse {
  return {};
}
export const MsgCancelSendToEthResponse = {
  typeUrl: "/injective.peggy.v1.MsgCancelSendToEthResponse",
  is(o: any): o is MsgCancelSendToEthResponse {
    return o && o.$typeUrl === MsgCancelSendToEthResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCancelSendToEthResponseAmino {
    return o && o.$typeUrl === MsgCancelSendToEthResponse.typeUrl;
  },
  encode(_: MsgCancelSendToEthResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelSendToEthResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSendToEthResponse();
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
  fromPartial(_: DeepPartial<MsgCancelSendToEthResponse>): MsgCancelSendToEthResponse {
    const message = createBaseMsgCancelSendToEthResponse();
    return message;
  },
  fromAmino(_: MsgCancelSendToEthResponseAmino): MsgCancelSendToEthResponse {
    const message = createBaseMsgCancelSendToEthResponse();
    return message;
  },
  toAmino(_: MsgCancelSendToEthResponse): MsgCancelSendToEthResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelSendToEthResponseAminoMsg): MsgCancelSendToEthResponse {
    return MsgCancelSendToEthResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelSendToEthResponseProtoMsg): MsgCancelSendToEthResponse {
    return MsgCancelSendToEthResponse.decode(message.value);
  },
  toProto(message: MsgCancelSendToEthResponse): Uint8Array {
    return MsgCancelSendToEthResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelSendToEthResponse): MsgCancelSendToEthResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgCancelSendToEthResponse",
      value: MsgCancelSendToEthResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCancelSendToEthResponse.typeUrl, MsgCancelSendToEthResponse);
function createBaseMsgSubmitBadSignatureEvidence(): MsgSubmitBadSignatureEvidence {
  return {
    subject: undefined,
    signature: "",
    sender: ""
  };
}
export const MsgSubmitBadSignatureEvidence = {
  typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence",
  aminoType: "peggy/MsgSubmitBadSignatureEvidence",
  is(o: any): o is MsgSubmitBadSignatureEvidence {
    return o && (o.$typeUrl === MsgSubmitBadSignatureEvidence.typeUrl || typeof o.signature === "string" && typeof o.sender === "string");
  },
  isAmino(o: any): o is MsgSubmitBadSignatureEvidenceAmino {
    return o && (o.$typeUrl === MsgSubmitBadSignatureEvidence.typeUrl || typeof o.signature === "string" && typeof o.sender === "string");
  },
  encode(message: MsgSubmitBadSignatureEvidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subject !== undefined) {
      Any.encode(message.subject, writer.uint32(10).fork()).ldelim();
    }
    if (message.signature !== "") {
      writer.uint32(18).string(message.signature);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitBadSignatureEvidence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitBadSignatureEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subject = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.signature = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSubmitBadSignatureEvidence>): MsgSubmitBadSignatureEvidence {
    const message = createBaseMsgSubmitBadSignatureEvidence();
    message.subject = object.subject !== undefined && object.subject !== null ? Any.fromPartial(object.subject) : undefined;
    message.signature = object.signature ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitBadSignatureEvidenceAmino): MsgSubmitBadSignatureEvidence {
    const message = createBaseMsgSubmitBadSignatureEvidence();
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Any.fromAmino(object.subject);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgSubmitBadSignatureEvidence): MsgSubmitBadSignatureEvidenceAmino {
    const obj: any = {};
    obj.subject = message.subject ? Any.toAmino(message.subject) : undefined;
    obj.signature = message.signature === "" ? undefined : message.signature;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitBadSignatureEvidenceAminoMsg): MsgSubmitBadSignatureEvidence {
    return MsgSubmitBadSignatureEvidence.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitBadSignatureEvidence): MsgSubmitBadSignatureEvidenceAminoMsg {
    return {
      type: "peggy/MsgSubmitBadSignatureEvidence",
      value: MsgSubmitBadSignatureEvidence.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitBadSignatureEvidenceProtoMsg): MsgSubmitBadSignatureEvidence {
    return MsgSubmitBadSignatureEvidence.decode(message.value);
  },
  toProto(message: MsgSubmitBadSignatureEvidence): Uint8Array {
    return MsgSubmitBadSignatureEvidence.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitBadSignatureEvidence): MsgSubmitBadSignatureEvidenceProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence",
      value: MsgSubmitBadSignatureEvidence.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSubmitBadSignatureEvidence.typeUrl, MsgSubmitBadSignatureEvidence);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSubmitBadSignatureEvidence.aminoType, MsgSubmitBadSignatureEvidence.typeUrl);
function createBaseMsgSubmitBadSignatureEvidenceResponse(): MsgSubmitBadSignatureEvidenceResponse {
  return {};
}
export const MsgSubmitBadSignatureEvidenceResponse = {
  typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidenceResponse",
  is(o: any): o is MsgSubmitBadSignatureEvidenceResponse {
    return o && o.$typeUrl === MsgSubmitBadSignatureEvidenceResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSubmitBadSignatureEvidenceResponseAmino {
    return o && o.$typeUrl === MsgSubmitBadSignatureEvidenceResponse.typeUrl;
  },
  encode(_: MsgSubmitBadSignatureEvidenceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitBadSignatureEvidenceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitBadSignatureEvidenceResponse();
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
  fromPartial(_: DeepPartial<MsgSubmitBadSignatureEvidenceResponse>): MsgSubmitBadSignatureEvidenceResponse {
    const message = createBaseMsgSubmitBadSignatureEvidenceResponse();
    return message;
  },
  fromAmino(_: MsgSubmitBadSignatureEvidenceResponseAmino): MsgSubmitBadSignatureEvidenceResponse {
    const message = createBaseMsgSubmitBadSignatureEvidenceResponse();
    return message;
  },
  toAmino(_: MsgSubmitBadSignatureEvidenceResponse): MsgSubmitBadSignatureEvidenceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitBadSignatureEvidenceResponseAminoMsg): MsgSubmitBadSignatureEvidenceResponse {
    return MsgSubmitBadSignatureEvidenceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitBadSignatureEvidenceResponseProtoMsg): MsgSubmitBadSignatureEvidenceResponse {
    return MsgSubmitBadSignatureEvidenceResponse.decode(message.value);
  },
  toProto(message: MsgSubmitBadSignatureEvidenceResponse): Uint8Array {
    return MsgSubmitBadSignatureEvidenceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitBadSignatureEvidenceResponse): MsgSubmitBadSignatureEvidenceResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidenceResponse",
      value: MsgSubmitBadSignatureEvidenceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSubmitBadSignatureEvidenceResponse.typeUrl, MsgSubmitBadSignatureEvidenceResponse);
function createBaseMsgValsetUpdatedClaim(): MsgValsetUpdatedClaim {
  return {
    eventNonce: BigInt(0),
    valsetNonce: BigInt(0),
    blockHeight: BigInt(0),
    members: [],
    rewardAmount: "",
    rewardToken: "",
    orchestrator: ""
  };
}
export const MsgValsetUpdatedClaim = {
  typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaim",
  aminoType: "peggy/MsgValsetUpdatedClaim",
  is(o: any): o is MsgValsetUpdatedClaim {
    return o && (o.$typeUrl === MsgValsetUpdatedClaim.typeUrl || typeof o.eventNonce === "bigint" && typeof o.valsetNonce === "bigint" && typeof o.blockHeight === "bigint" && Array.isArray(o.members) && (!o.members.length || BridgeValidator.is(o.members[0])) && typeof o.rewardAmount === "string" && typeof o.rewardToken === "string" && typeof o.orchestrator === "string");
  },
  isAmino(o: any): o is MsgValsetUpdatedClaimAmino {
    return o && (o.$typeUrl === MsgValsetUpdatedClaim.typeUrl || typeof o.event_nonce === "bigint" && typeof o.valset_nonce === "bigint" && typeof o.block_height === "bigint" && Array.isArray(o.members) && (!o.members.length || BridgeValidator.isAmino(o.members[0])) && typeof o.reward_amount === "string" && typeof o.reward_token === "string" && typeof o.orchestrator === "string");
  },
  encode(message: MsgValsetUpdatedClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.valsetNonce !== BigInt(0)) {
      writer.uint32(16).uint64(message.valsetNonce);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.blockHeight);
    }
    for (const v of message.members) {
      BridgeValidator.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.rewardAmount !== "") {
      writer.uint32(42).string(message.rewardAmount);
    }
    if (message.rewardToken !== "") {
      writer.uint32(50).string(message.rewardToken);
    }
    if (message.orchestrator !== "") {
      writer.uint32(58).string(message.orchestrator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgValsetUpdatedClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetUpdatedClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64();
          break;
        case 2:
          message.valsetNonce = reader.uint64();
          break;
        case 3:
          message.blockHeight = reader.uint64();
          break;
        case 4:
          message.members.push(BridgeValidator.decode(reader, reader.uint32()));
          break;
        case 5:
          message.rewardAmount = reader.string();
          break;
        case 6:
          message.rewardToken = reader.string();
          break;
        case 7:
          message.orchestrator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgValsetUpdatedClaim>): MsgValsetUpdatedClaim {
    const message = createBaseMsgValsetUpdatedClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
    message.valsetNonce = object.valsetNonce !== undefined && object.valsetNonce !== null ? BigInt(object.valsetNonce.toString()) : BigInt(0);
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.members = object.members?.map(e => BridgeValidator.fromPartial(e)) || [];
    message.rewardAmount = object.rewardAmount ?? "";
    message.rewardToken = object.rewardToken ?? "";
    message.orchestrator = object.orchestrator ?? "";
    return message;
  },
  fromAmino(object: MsgValsetUpdatedClaimAmino): MsgValsetUpdatedClaim {
    const message = createBaseMsgValsetUpdatedClaim();
    if (object.event_nonce !== undefined && object.event_nonce !== null) {
      message.eventNonce = BigInt(object.event_nonce);
    }
    if (object.valset_nonce !== undefined && object.valset_nonce !== null) {
      message.valsetNonce = BigInt(object.valset_nonce);
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    message.members = object.members?.map(e => BridgeValidator.fromAmino(e)) || [];
    if (object.reward_amount !== undefined && object.reward_amount !== null) {
      message.rewardAmount = object.reward_amount;
    }
    if (object.reward_token !== undefined && object.reward_token !== null) {
      message.rewardToken = object.reward_token;
    }
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = object.orchestrator;
    }
    return message;
  },
  toAmino(message: MsgValsetUpdatedClaim): MsgValsetUpdatedClaimAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce !== BigInt(0) ? message.eventNonce?.toString() : undefined;
    obj.valset_nonce = message.valsetNonce !== BigInt(0) ? message.valsetNonce?.toString() : undefined;
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    if (message.members) {
      obj.members = message.members.map(e => e ? BridgeValidator.toAmino(e) : undefined);
    } else {
      obj.members = message.members;
    }
    obj.reward_amount = message.rewardAmount === "" ? undefined : message.rewardAmount;
    obj.reward_token = message.rewardToken === "" ? undefined : message.rewardToken;
    obj.orchestrator = message.orchestrator === "" ? undefined : message.orchestrator;
    return obj;
  },
  fromAminoMsg(object: MsgValsetUpdatedClaimAminoMsg): MsgValsetUpdatedClaim {
    return MsgValsetUpdatedClaim.fromAmino(object.value);
  },
  toAminoMsg(message: MsgValsetUpdatedClaim): MsgValsetUpdatedClaimAminoMsg {
    return {
      type: "peggy/MsgValsetUpdatedClaim",
      value: MsgValsetUpdatedClaim.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgValsetUpdatedClaimProtoMsg): MsgValsetUpdatedClaim {
    return MsgValsetUpdatedClaim.decode(message.value);
  },
  toProto(message: MsgValsetUpdatedClaim): Uint8Array {
    return MsgValsetUpdatedClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgValsetUpdatedClaim): MsgValsetUpdatedClaimProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaim",
      value: MsgValsetUpdatedClaim.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgValsetUpdatedClaim.typeUrl, MsgValsetUpdatedClaim);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgValsetUpdatedClaim.aminoType, MsgValsetUpdatedClaim.typeUrl);
function createBaseMsgValsetUpdatedClaimResponse(): MsgValsetUpdatedClaimResponse {
  return {};
}
export const MsgValsetUpdatedClaimResponse = {
  typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaimResponse",
  is(o: any): o is MsgValsetUpdatedClaimResponse {
    return o && o.$typeUrl === MsgValsetUpdatedClaimResponse.typeUrl;
  },
  isAmino(o: any): o is MsgValsetUpdatedClaimResponseAmino {
    return o && o.$typeUrl === MsgValsetUpdatedClaimResponse.typeUrl;
  },
  encode(_: MsgValsetUpdatedClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgValsetUpdatedClaimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetUpdatedClaimResponse();
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
  fromPartial(_: DeepPartial<MsgValsetUpdatedClaimResponse>): MsgValsetUpdatedClaimResponse {
    const message = createBaseMsgValsetUpdatedClaimResponse();
    return message;
  },
  fromAmino(_: MsgValsetUpdatedClaimResponseAmino): MsgValsetUpdatedClaimResponse {
    const message = createBaseMsgValsetUpdatedClaimResponse();
    return message;
  },
  toAmino(_: MsgValsetUpdatedClaimResponse): MsgValsetUpdatedClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgValsetUpdatedClaimResponseAminoMsg): MsgValsetUpdatedClaimResponse {
    return MsgValsetUpdatedClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgValsetUpdatedClaimResponseProtoMsg): MsgValsetUpdatedClaimResponse {
    return MsgValsetUpdatedClaimResponse.decode(message.value);
  },
  toProto(message: MsgValsetUpdatedClaimResponse): Uint8Array {
    return MsgValsetUpdatedClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgValsetUpdatedClaimResponse): MsgValsetUpdatedClaimResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaimResponse",
      value: MsgValsetUpdatedClaimResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgValsetUpdatedClaimResponse.typeUrl, MsgValsetUpdatedClaimResponse);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/injective.peggy.v1.MsgUpdateParams",
  aminoType: "peggy/MsgUpdateParams",
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
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "peggy/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParams.aminoType, MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/injective.peggy.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/injective.peggy.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
function createBaseMsgBlacklistEthereumAddresses(): MsgBlacklistEthereumAddresses {
  return {
    signer: "",
    blacklistAddresses: []
  };
}
export const MsgBlacklistEthereumAddresses = {
  typeUrl: "/injective.peggy.v1.MsgBlacklistEthereumAddresses",
  aminoType: "peggy/MsgBlacklistEthereumAddresses",
  is(o: any): o is MsgBlacklistEthereumAddresses {
    return o && (o.$typeUrl === MsgBlacklistEthereumAddresses.typeUrl || typeof o.signer === "string" && Array.isArray(o.blacklistAddresses) && (!o.blacklistAddresses.length || typeof o.blacklistAddresses[0] === "string"));
  },
  isAmino(o: any): o is MsgBlacklistEthereumAddressesAmino {
    return o && (o.$typeUrl === MsgBlacklistEthereumAddresses.typeUrl || typeof o.signer === "string" && Array.isArray(o.blacklist_addresses) && (!o.blacklist_addresses.length || typeof o.blacklist_addresses[0] === "string"));
  },
  encode(message: MsgBlacklistEthereumAddresses, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    for (const v of message.blacklistAddresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBlacklistEthereumAddresses {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBlacklistEthereumAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.blacklistAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBlacklistEthereumAddresses>): MsgBlacklistEthereumAddresses {
    const message = createBaseMsgBlacklistEthereumAddresses();
    message.signer = object.signer ?? "";
    message.blacklistAddresses = object.blacklistAddresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgBlacklistEthereumAddressesAmino): MsgBlacklistEthereumAddresses {
    const message = createBaseMsgBlacklistEthereumAddresses();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    message.blacklistAddresses = object.blacklist_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgBlacklistEthereumAddresses): MsgBlacklistEthereumAddressesAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    if (message.blacklistAddresses) {
      obj.blacklist_addresses = message.blacklistAddresses.map(e => e);
    } else {
      obj.blacklist_addresses = message.blacklistAddresses;
    }
    return obj;
  },
  fromAminoMsg(object: MsgBlacklistEthereumAddressesAminoMsg): MsgBlacklistEthereumAddresses {
    return MsgBlacklistEthereumAddresses.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBlacklistEthereumAddresses): MsgBlacklistEthereumAddressesAminoMsg {
    return {
      type: "peggy/MsgBlacklistEthereumAddresses",
      value: MsgBlacklistEthereumAddresses.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBlacklistEthereumAddressesProtoMsg): MsgBlacklistEthereumAddresses {
    return MsgBlacklistEthereumAddresses.decode(message.value);
  },
  toProto(message: MsgBlacklistEthereumAddresses): Uint8Array {
    return MsgBlacklistEthereumAddresses.encode(message).finish();
  },
  toProtoMsg(message: MsgBlacklistEthereumAddresses): MsgBlacklistEthereumAddressesProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgBlacklistEthereumAddresses",
      value: MsgBlacklistEthereumAddresses.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBlacklistEthereumAddresses.typeUrl, MsgBlacklistEthereumAddresses);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgBlacklistEthereumAddresses.aminoType, MsgBlacklistEthereumAddresses.typeUrl);
function createBaseMsgBlacklistEthereumAddressesResponse(): MsgBlacklistEthereumAddressesResponse {
  return {};
}
export const MsgBlacklistEthereumAddressesResponse = {
  typeUrl: "/injective.peggy.v1.MsgBlacklistEthereumAddressesResponse",
  is(o: any): o is MsgBlacklistEthereumAddressesResponse {
    return o && o.$typeUrl === MsgBlacklistEthereumAddressesResponse.typeUrl;
  },
  isAmino(o: any): o is MsgBlacklistEthereumAddressesResponseAmino {
    return o && o.$typeUrl === MsgBlacklistEthereumAddressesResponse.typeUrl;
  },
  encode(_: MsgBlacklistEthereumAddressesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBlacklistEthereumAddressesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBlacklistEthereumAddressesResponse();
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
  fromPartial(_: DeepPartial<MsgBlacklistEthereumAddressesResponse>): MsgBlacklistEthereumAddressesResponse {
    const message = createBaseMsgBlacklistEthereumAddressesResponse();
    return message;
  },
  fromAmino(_: MsgBlacklistEthereumAddressesResponseAmino): MsgBlacklistEthereumAddressesResponse {
    const message = createBaseMsgBlacklistEthereumAddressesResponse();
    return message;
  },
  toAmino(_: MsgBlacklistEthereumAddressesResponse): MsgBlacklistEthereumAddressesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBlacklistEthereumAddressesResponseAminoMsg): MsgBlacklistEthereumAddressesResponse {
    return MsgBlacklistEthereumAddressesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBlacklistEthereumAddressesResponseProtoMsg): MsgBlacklistEthereumAddressesResponse {
    return MsgBlacklistEthereumAddressesResponse.decode(message.value);
  },
  toProto(message: MsgBlacklistEthereumAddressesResponse): Uint8Array {
    return MsgBlacklistEthereumAddressesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBlacklistEthereumAddressesResponse): MsgBlacklistEthereumAddressesResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgBlacklistEthereumAddressesResponse",
      value: MsgBlacklistEthereumAddressesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBlacklistEthereumAddressesResponse.typeUrl, MsgBlacklistEthereumAddressesResponse);
function createBaseMsgRevokeEthereumBlacklist(): MsgRevokeEthereumBlacklist {
  return {
    signer: "",
    blacklistAddresses: []
  };
}
export const MsgRevokeEthereumBlacklist = {
  typeUrl: "/injective.peggy.v1.MsgRevokeEthereumBlacklist",
  aminoType: "peggy/MsgRevokeEthereumBlacklist",
  is(o: any): o is MsgRevokeEthereumBlacklist {
    return o && (o.$typeUrl === MsgRevokeEthereumBlacklist.typeUrl || typeof o.signer === "string" && Array.isArray(o.blacklistAddresses) && (!o.blacklistAddresses.length || typeof o.blacklistAddresses[0] === "string"));
  },
  isAmino(o: any): o is MsgRevokeEthereumBlacklistAmino {
    return o && (o.$typeUrl === MsgRevokeEthereumBlacklist.typeUrl || typeof o.signer === "string" && Array.isArray(o.blacklist_addresses) && (!o.blacklist_addresses.length || typeof o.blacklist_addresses[0] === "string"));
  },
  encode(message: MsgRevokeEthereumBlacklist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    for (const v of message.blacklistAddresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeEthereumBlacklist {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeEthereumBlacklist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.blacklistAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRevokeEthereumBlacklist>): MsgRevokeEthereumBlacklist {
    const message = createBaseMsgRevokeEthereumBlacklist();
    message.signer = object.signer ?? "";
    message.blacklistAddresses = object.blacklistAddresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgRevokeEthereumBlacklistAmino): MsgRevokeEthereumBlacklist {
    const message = createBaseMsgRevokeEthereumBlacklist();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    message.blacklistAddresses = object.blacklist_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgRevokeEthereumBlacklist): MsgRevokeEthereumBlacklistAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    if (message.blacklistAddresses) {
      obj.blacklist_addresses = message.blacklistAddresses.map(e => e);
    } else {
      obj.blacklist_addresses = message.blacklistAddresses;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRevokeEthereumBlacklistAminoMsg): MsgRevokeEthereumBlacklist {
    return MsgRevokeEthereumBlacklist.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevokeEthereumBlacklist): MsgRevokeEthereumBlacklistAminoMsg {
    return {
      type: "peggy/MsgRevokeEthereumBlacklist",
      value: MsgRevokeEthereumBlacklist.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevokeEthereumBlacklistProtoMsg): MsgRevokeEthereumBlacklist {
    return MsgRevokeEthereumBlacklist.decode(message.value);
  },
  toProto(message: MsgRevokeEthereumBlacklist): Uint8Array {
    return MsgRevokeEthereumBlacklist.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeEthereumBlacklist): MsgRevokeEthereumBlacklistProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgRevokeEthereumBlacklist",
      value: MsgRevokeEthereumBlacklist.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRevokeEthereumBlacklist.typeUrl, MsgRevokeEthereumBlacklist);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRevokeEthereumBlacklist.aminoType, MsgRevokeEthereumBlacklist.typeUrl);
function createBaseMsgRevokeEthereumBlacklistResponse(): MsgRevokeEthereumBlacklistResponse {
  return {};
}
export const MsgRevokeEthereumBlacklistResponse = {
  typeUrl: "/injective.peggy.v1.MsgRevokeEthereumBlacklistResponse",
  is(o: any): o is MsgRevokeEthereumBlacklistResponse {
    return o && o.$typeUrl === MsgRevokeEthereumBlacklistResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRevokeEthereumBlacklistResponseAmino {
    return o && o.$typeUrl === MsgRevokeEthereumBlacklistResponse.typeUrl;
  },
  encode(_: MsgRevokeEthereumBlacklistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeEthereumBlacklistResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeEthereumBlacklistResponse();
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
  fromPartial(_: DeepPartial<MsgRevokeEthereumBlacklistResponse>): MsgRevokeEthereumBlacklistResponse {
    const message = createBaseMsgRevokeEthereumBlacklistResponse();
    return message;
  },
  fromAmino(_: MsgRevokeEthereumBlacklistResponseAmino): MsgRevokeEthereumBlacklistResponse {
    const message = createBaseMsgRevokeEthereumBlacklistResponse();
    return message;
  },
  toAmino(_: MsgRevokeEthereumBlacklistResponse): MsgRevokeEthereumBlacklistResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeEthereumBlacklistResponseAminoMsg): MsgRevokeEthereumBlacklistResponse {
    return MsgRevokeEthereumBlacklistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeEthereumBlacklistResponseProtoMsg): MsgRevokeEthereumBlacklistResponse {
    return MsgRevokeEthereumBlacklistResponse.decode(message.value);
  },
  toProto(message: MsgRevokeEthereumBlacklistResponse): Uint8Array {
    return MsgRevokeEthereumBlacklistResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeEthereumBlacklistResponse): MsgRevokeEthereumBlacklistResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgRevokeEthereumBlacklistResponse",
      value: MsgRevokeEthereumBlacklistResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRevokeEthereumBlacklistResponse.typeUrl, MsgRevokeEthereumBlacklistResponse);