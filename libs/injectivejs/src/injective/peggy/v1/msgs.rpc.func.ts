import { buildTx } from "../../../helper-func-types";
import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgDepositClaim, MsgWithdrawClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgSetOrchestratorAddresses, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence, MsgUpdateParams, MsgBlacklistEthereumAddresses, MsgRevokeEthereumBlacklist } from "./msgs";
/**
 * @name valsetConfirm
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.ValsetConfirm
 */
export const valsetConfirm = buildTx<MsgValsetConfirm>({
  msg: MsgValsetConfirm
});
/**
 * @name sendToEth
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.SendToEth
 */
export const sendToEth = buildTx<MsgSendToEth>({
  msg: MsgSendToEth
});
/**
 * @name requestBatch
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.RequestBatch
 */
export const requestBatch = buildTx<MsgRequestBatch>({
  msg: MsgRequestBatch
});
/**
 * @name confirmBatch
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.ConfirmBatch
 */
export const confirmBatch = buildTx<MsgConfirmBatch>({
  msg: MsgConfirmBatch
});
/**
 * @name depositClaim
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.DepositClaim
 */
export const depositClaim = buildTx<MsgDepositClaim>({
  msg: MsgDepositClaim
});
/**
 * @name withdrawClaim
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.WithdrawClaim
 */
export const withdrawClaim = buildTx<MsgWithdrawClaim>({
  msg: MsgWithdrawClaim
});
/**
 * @name valsetUpdateClaim
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.ValsetUpdateClaim
 */
export const valsetUpdateClaim = buildTx<MsgValsetUpdatedClaim>({
  msg: MsgValsetUpdatedClaim
});
/**
 * @name eRC20DeployedClaim
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.ERC20DeployedClaim
 */
export const eRC20DeployedClaim = buildTx<MsgERC20DeployedClaim>({
  msg: MsgERC20DeployedClaim
});
/**
 * @name setOrchestratorAddresses
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.SetOrchestratorAddresses
 */
export const setOrchestratorAddresses = buildTx<MsgSetOrchestratorAddresses>({
  msg: MsgSetOrchestratorAddresses
});
/**
 * @name cancelSendToEth
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.CancelSendToEth
 */
export const cancelSendToEth = buildTx<MsgCancelSendToEth>({
  msg: MsgCancelSendToEth
});
/**
 * @name submitBadSignatureEvidence
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.SubmitBadSignatureEvidence
 */
export const submitBadSignatureEvidence = buildTx<MsgSubmitBadSignatureEvidence>({
  msg: MsgSubmitBadSignatureEvidence
});
/**
 * @name updateParams
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
/**
 * BlacklistEthereumAddresses adds Ethereum addresses to the peggy blacklist.
 * @name blacklistEthereumAddresses
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.BlacklistEthereumAddresses
 */
export const blacklistEthereumAddresses = buildTx<MsgBlacklistEthereumAddresses>({
  msg: MsgBlacklistEthereumAddresses
});
/**
 * RevokeEthereumBlacklist removes Ethereum addresses from the peggy
 * blacklist.
 * @name revokeEthereumBlacklist
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.RevokeEthereumBlacklist
 */
export const revokeEthereumBlacklist = buildTx<MsgRevokeEthereumBlacklist>({
  msg: MsgRevokeEthereumBlacklist
});