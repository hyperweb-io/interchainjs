import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgDepositClaim, MsgWithdrawClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgSetOrchestratorAddresses, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence, MsgUpdateParams, MsgBlacklistEthereumAddresses, MsgRevokeEthereumBlacklist } from "./msgs";
export const createValsetConfirm = (clientResolver?: SigningClientResolver) => buildTx<MsgValsetConfirm>({
  clientResolver,
  typeUrl: MsgValsetConfirm.typeUrl,
  encoders: toEncoders(MsgValsetConfirm),
  converters: toConverters(MsgValsetConfirm)
});
export const createSendToEth = (clientResolver?: SigningClientResolver) => buildTx<MsgSendToEth>({
  clientResolver,
  typeUrl: MsgSendToEth.typeUrl,
  encoders: toEncoders(MsgSendToEth),
  converters: toConverters(MsgSendToEth)
});
export const createRequestBatch = (clientResolver?: SigningClientResolver) => buildTx<MsgRequestBatch>({
  clientResolver,
  typeUrl: MsgRequestBatch.typeUrl,
  encoders: toEncoders(MsgRequestBatch),
  converters: toConverters(MsgRequestBatch)
});
export const createConfirmBatch = (clientResolver?: SigningClientResolver) => buildTx<MsgConfirmBatch>({
  clientResolver,
  typeUrl: MsgConfirmBatch.typeUrl,
  encoders: toEncoders(MsgConfirmBatch),
  converters: toConverters(MsgConfirmBatch)
});
export const createDepositClaim = (clientResolver?: SigningClientResolver) => buildTx<MsgDepositClaim>({
  clientResolver,
  typeUrl: MsgDepositClaim.typeUrl,
  encoders: toEncoders(MsgDepositClaim),
  converters: toConverters(MsgDepositClaim)
});
export const createWithdrawClaim = (clientResolver?: SigningClientResolver) => buildTx<MsgWithdrawClaim>({
  clientResolver,
  typeUrl: MsgWithdrawClaim.typeUrl,
  encoders: toEncoders(MsgWithdrawClaim),
  converters: toConverters(MsgWithdrawClaim)
});
export const createValsetUpdateClaim = (clientResolver?: SigningClientResolver) => buildTx<MsgValsetUpdatedClaim>({
  clientResolver,
  typeUrl: MsgValsetUpdatedClaim.typeUrl,
  encoders: toEncoders(MsgValsetUpdatedClaim),
  converters: toConverters(MsgValsetUpdatedClaim)
});
export const createERC20DeployedClaim = (clientResolver?: SigningClientResolver) => buildTx<MsgERC20DeployedClaim>({
  clientResolver,
  typeUrl: MsgERC20DeployedClaim.typeUrl,
  encoders: toEncoders(MsgERC20DeployedClaim),
  converters: toConverters(MsgERC20DeployedClaim)
});
export const createSetOrchestratorAddresses = (clientResolver?: SigningClientResolver) => buildTx<MsgSetOrchestratorAddresses>({
  clientResolver,
  typeUrl: MsgSetOrchestratorAddresses.typeUrl,
  encoders: toEncoders(MsgSetOrchestratorAddresses),
  converters: toConverters(MsgSetOrchestratorAddresses)
});
export const createCancelSendToEth = (clientResolver?: SigningClientResolver) => buildTx<MsgCancelSendToEth>({
  clientResolver,
  typeUrl: MsgCancelSendToEth.typeUrl,
  encoders: toEncoders(MsgCancelSendToEth),
  converters: toConverters(MsgCancelSendToEth)
});
export const createSubmitBadSignatureEvidence = (clientResolver?: SigningClientResolver) => buildTx<MsgSubmitBadSignatureEvidence>({
  clientResolver,
  typeUrl: MsgSubmitBadSignatureEvidence.typeUrl,
  encoders: toEncoders(MsgSubmitBadSignatureEvidence),
  converters: toConverters(MsgSubmitBadSignatureEvidence)
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams)
});
export const createBlacklistEthereumAddresses = (clientResolver?: SigningClientResolver) => buildTx<MsgBlacklistEthereumAddresses>({
  clientResolver,
  typeUrl: MsgBlacklistEthereumAddresses.typeUrl,
  encoders: toEncoders(MsgBlacklistEthereumAddresses),
  converters: toConverters(MsgBlacklistEthereumAddresses)
});
export const createRevokeEthereumBlacklist = (clientResolver?: SigningClientResolver) => buildTx<MsgRevokeEthereumBlacklist>({
  clientResolver,
  typeUrl: MsgRevokeEthereumBlacklist.typeUrl,
  encoders: toEncoders(MsgRevokeEthereumBlacklist),
  converters: toConverters(MsgRevokeEthereumBlacklist)
});