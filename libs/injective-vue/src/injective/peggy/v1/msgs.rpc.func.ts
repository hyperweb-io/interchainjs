import { buildTx } from "../../../helper-func-types";
import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgDepositClaim, MsgWithdrawClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgSetOrchestratorAddresses, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence, MsgUpdateParams, MsgBlacklistEthereumAddresses, MsgRevokeEthereumBlacklist } from "./msgs";
export const valsetConfirm = buildTx<MsgValsetConfirm>({
  msg: MsgValsetConfirm
});
export const sendToEth = buildTx<MsgSendToEth>({
  msg: MsgSendToEth
});
export const requestBatch = buildTx<MsgRequestBatch>({
  msg: MsgRequestBatch
});
export const confirmBatch = buildTx<MsgConfirmBatch>({
  msg: MsgConfirmBatch
});
export const depositClaim = buildTx<MsgDepositClaim>({
  msg: MsgDepositClaim
});
export const withdrawClaim = buildTx<MsgWithdrawClaim>({
  msg: MsgWithdrawClaim
});
export const valsetUpdateClaim = buildTx<MsgValsetUpdatedClaim>({
  msg: MsgValsetUpdatedClaim
});
export const eRC20DeployedClaim = buildTx<MsgERC20DeployedClaim>({
  msg: MsgERC20DeployedClaim
});
export const setOrchestratorAddresses = buildTx<MsgSetOrchestratorAddresses>({
  msg: MsgSetOrchestratorAddresses
});
export const cancelSendToEth = buildTx<MsgCancelSendToEth>({
  msg: MsgCancelSendToEth
});
export const submitBadSignatureEvidence = buildTx<MsgSubmitBadSignatureEvidence>({
  msg: MsgSubmitBadSignatureEvidence
});
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
export const blacklistEthereumAddresses = buildTx<MsgBlacklistEthereumAddresses>({
  msg: MsgBlacklistEthereumAddresses
});
export const revokeEthereumBlacklist = buildTx<MsgRevokeEthereumBlacklist>({
  msg: MsgRevokeEthereumBlacklist
});