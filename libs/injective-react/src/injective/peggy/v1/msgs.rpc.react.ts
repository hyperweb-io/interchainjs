import { buildUseMutation } from "../../../react-query";
import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgDepositClaim, MsgWithdrawClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgSetOrchestratorAddresses, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence, MsgUpdateParams, MsgBlacklistEthereumAddresses, MsgRevokeEthereumBlacklist } from "./msgs";
import { valsetConfirm, sendToEth, requestBatch, confirmBatch, depositClaim, withdrawClaim, valsetUpdateClaim, eRC20DeployedClaim, setOrchestratorAddresses, cancelSendToEth, submitBadSignatureEvidence, updateParams, blacklistEthereumAddresses, revokeEthereumBlacklist } from "./msgs.rpc.func";
export const useValsetConfirm = buildUseMutation<MsgValsetConfirm, Error>({
  builderMutationFn: valsetConfirm
});
export const useSendToEth = buildUseMutation<MsgSendToEth, Error>({
  builderMutationFn: sendToEth
});
export const useRequestBatch = buildUseMutation<MsgRequestBatch, Error>({
  builderMutationFn: requestBatch
});
export const useConfirmBatch = buildUseMutation<MsgConfirmBatch, Error>({
  builderMutationFn: confirmBatch
});
export const useDepositClaim = buildUseMutation<MsgDepositClaim, Error>({
  builderMutationFn: depositClaim
});
export const useWithdrawClaim = buildUseMutation<MsgWithdrawClaim, Error>({
  builderMutationFn: withdrawClaim
});
export const useValsetUpdateClaim = buildUseMutation<MsgValsetUpdatedClaim, Error>({
  builderMutationFn: valsetUpdateClaim
});
export const useERC20DeployedClaim = buildUseMutation<MsgERC20DeployedClaim, Error>({
  builderMutationFn: eRC20DeployedClaim
});
export const useSetOrchestratorAddresses = buildUseMutation<MsgSetOrchestratorAddresses, Error>({
  builderMutationFn: setOrchestratorAddresses
});
export const useCancelSendToEth = buildUseMutation<MsgCancelSendToEth, Error>({
  builderMutationFn: cancelSendToEth
});
export const useSubmitBadSignatureEvidence = buildUseMutation<MsgSubmitBadSignatureEvidence, Error>({
  builderMutationFn: submitBadSignatureEvidence
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
/* BlacklistEthereumAddresses adds Ethereum addresses to the peggy blacklist. */
export const useBlacklistEthereumAddresses = buildUseMutation<MsgBlacklistEthereumAddresses, Error>({
  builderMutationFn: blacklistEthereumAddresses
});
/* RevokeEthereumBlacklist removes Ethereum addresses from the peggy
 blacklist. */
export const useRevokeEthereumBlacklist = buildUseMutation<MsgRevokeEthereumBlacklist, Error>({
  builderMutationFn: revokeEthereumBlacklist
});