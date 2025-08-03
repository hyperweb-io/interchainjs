import { buildUseMutation } from "../../../react-query";
import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgDepositClaim, MsgWithdrawClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgSetOrchestratorAddresses, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence, MsgUpdateParams, MsgBlacklistEthereumAddresses, MsgRevokeEthereumBlacklist } from "./msgs";
import { valsetConfirm, sendToEth, requestBatch, confirmBatch, depositClaim, withdrawClaim, valsetUpdateClaim, eRC20DeployedClaim, setOrchestratorAddresses, cancelSendToEth, submitBadSignatureEvidence, updateParams, blacklistEthereumAddresses, revokeEthereumBlacklist } from "./msgs.rpc.func";
/**
 * @name useValsetConfirm
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.ValsetConfirm
 */
export const useValsetConfirm = buildUseMutation<MsgValsetConfirm, Error>({
  builderMutationFn: valsetConfirm
});
/**
 * @name useSendToEth
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.SendToEth
 */
export const useSendToEth = buildUseMutation<MsgSendToEth, Error>({
  builderMutationFn: sendToEth
});
/**
 * @name useRequestBatch
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.RequestBatch
 */
export const useRequestBatch = buildUseMutation<MsgRequestBatch, Error>({
  builderMutationFn: requestBatch
});
/**
 * @name useConfirmBatch
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.ConfirmBatch
 */
export const useConfirmBatch = buildUseMutation<MsgConfirmBatch, Error>({
  builderMutationFn: confirmBatch
});
/**
 * @name useDepositClaim
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.DepositClaim
 */
export const useDepositClaim = buildUseMutation<MsgDepositClaim, Error>({
  builderMutationFn: depositClaim
});
/**
 * @name useWithdrawClaim
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.WithdrawClaim
 */
export const useWithdrawClaim = buildUseMutation<MsgWithdrawClaim, Error>({
  builderMutationFn: withdrawClaim
});
/**
 * @name useValsetUpdateClaim
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.ValsetUpdateClaim
 */
export const useValsetUpdateClaim = buildUseMutation<MsgValsetUpdatedClaim, Error>({
  builderMutationFn: valsetUpdateClaim
});
/**
 * @name useERC20DeployedClaim
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.ERC20DeployedClaim
 */
export const useERC20DeployedClaim = buildUseMutation<MsgERC20DeployedClaim, Error>({
  builderMutationFn: eRC20DeployedClaim
});
/**
 * @name useSetOrchestratorAddresses
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.SetOrchestratorAddresses
 */
export const useSetOrchestratorAddresses = buildUseMutation<MsgSetOrchestratorAddresses, Error>({
  builderMutationFn: setOrchestratorAddresses
});
/**
 * @name useCancelSendToEth
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.CancelSendToEth
 */
export const useCancelSendToEth = buildUseMutation<MsgCancelSendToEth, Error>({
  builderMutationFn: cancelSendToEth
});
/**
 * @name useSubmitBadSignatureEvidence
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.SubmitBadSignatureEvidence
 */
export const useSubmitBadSignatureEvidence = buildUseMutation<MsgSubmitBadSignatureEvidence, Error>({
  builderMutationFn: submitBadSignatureEvidence
});
/**
 * @name useUpdateParams
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.UpdateParams
 */
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
/**
 * BlacklistEthereumAddresses adds Ethereum addresses to the peggy blacklist.
 * @name useBlacklistEthereumAddresses
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.BlacklistEthereumAddresses
 */
export const useBlacklistEthereumAddresses = buildUseMutation<MsgBlacklistEthereumAddresses, Error>({
  builderMutationFn: blacklistEthereumAddresses
});
/**
 * RevokeEthereumBlacklist removes Ethereum addresses from the peggy
 * blacklist.
 * @name useRevokeEthereumBlacklist
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.RevokeEthereumBlacklist
 */
export const useRevokeEthereumBlacklist = buildUseMutation<MsgRevokeEthereumBlacklist, Error>({
  builderMutationFn: revokeEthereumBlacklist
});