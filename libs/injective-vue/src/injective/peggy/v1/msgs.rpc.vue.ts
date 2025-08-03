import { buildUseVueMutation } from "../../../vue-query";
import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgDepositClaim, MsgWithdrawClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgSetOrchestratorAddresses, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence, MsgUpdateParams, MsgBlacklistEthereumAddresses, MsgRevokeEthereumBlacklist } from "./msgs";
import { valsetConfirm, sendToEth, requestBatch, confirmBatch, depositClaim, withdrawClaim, valsetUpdateClaim, eRC20DeployedClaim, setOrchestratorAddresses, cancelSendToEth, submitBadSignatureEvidence, updateParams, blacklistEthereumAddresses, revokeEthereumBlacklist } from "./msgs.rpc.func";
/**
 * @name useValsetConfirm
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.ValsetConfirm
 */
export const useValsetConfirm = buildUseVueMutation<MsgValsetConfirm, Error>({
  builderMutationFn: valsetConfirm
});
/**
 * @name useSendToEth
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.SendToEth
 */
export const useSendToEth = buildUseVueMutation<MsgSendToEth, Error>({
  builderMutationFn: sendToEth
});
/**
 * @name useRequestBatch
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.RequestBatch
 */
export const useRequestBatch = buildUseVueMutation<MsgRequestBatch, Error>({
  builderMutationFn: requestBatch
});
/**
 * @name useConfirmBatch
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.ConfirmBatch
 */
export const useConfirmBatch = buildUseVueMutation<MsgConfirmBatch, Error>({
  builderMutationFn: confirmBatch
});
/**
 * @name useDepositClaim
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.DepositClaim
 */
export const useDepositClaim = buildUseVueMutation<MsgDepositClaim, Error>({
  builderMutationFn: depositClaim
});
/**
 * @name useWithdrawClaim
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.WithdrawClaim
 */
export const useWithdrawClaim = buildUseVueMutation<MsgWithdrawClaim, Error>({
  builderMutationFn: withdrawClaim
});
/**
 * @name useValsetUpdateClaim
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.ValsetUpdateClaim
 */
export const useValsetUpdateClaim = buildUseVueMutation<MsgValsetUpdatedClaim, Error>({
  builderMutationFn: valsetUpdateClaim
});
/**
 * @name useERC20DeployedClaim
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.ERC20DeployedClaim
 */
export const useERC20DeployedClaim = buildUseVueMutation<MsgERC20DeployedClaim, Error>({
  builderMutationFn: eRC20DeployedClaim
});
/**
 * @name useSetOrchestratorAddresses
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.SetOrchestratorAddresses
 */
export const useSetOrchestratorAddresses = buildUseVueMutation<MsgSetOrchestratorAddresses, Error>({
  builderMutationFn: setOrchestratorAddresses
});
/**
 * @name useCancelSendToEth
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.CancelSendToEth
 */
export const useCancelSendToEth = buildUseVueMutation<MsgCancelSendToEth, Error>({
  builderMutationFn: cancelSendToEth
});
/**
 * @name useSubmitBadSignatureEvidence
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.SubmitBadSignatureEvidence
 */
export const useSubmitBadSignatureEvidence = buildUseVueMutation<MsgSubmitBadSignatureEvidence, Error>({
  builderMutationFn: submitBadSignatureEvidence
});
/**
 * @name useUpdateParams
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.UpdateParams
 */
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
/**
 * BlacklistEthereumAddresses adds Ethereum addresses to the peggy blacklist.
 * @name useBlacklistEthereumAddresses
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.BlacklistEthereumAddresses
 */
export const useBlacklistEthereumAddresses = buildUseVueMutation<MsgBlacklistEthereumAddresses, Error>({
  builderMutationFn: blacklistEthereumAddresses
});
/**
 * RevokeEthereumBlacklist removes Ethereum addresses from the peggy
 * blacklist.
 * @name useRevokeEthereumBlacklist
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.RevokeEthereumBlacklist
 */
export const useRevokeEthereumBlacklist = buildUseVueMutation<MsgRevokeEthereumBlacklist, Error>({
  builderMutationFn: revokeEthereumBlacklist
});