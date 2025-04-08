import { buildUseVueMutation } from "../../../vue-query";
import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgDepositClaim, MsgWithdrawClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgSetOrchestratorAddresses, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence, MsgUpdateParams, MsgBlacklistEthereumAddresses, MsgRevokeEthereumBlacklist } from "./msgs";
import { valsetConfirm, sendToEth, requestBatch, confirmBatch, depositClaim, withdrawClaim, valsetUpdateClaim, eRC20DeployedClaim, setOrchestratorAddresses, cancelSendToEth, submitBadSignatureEvidence, updateParams, blacklistEthereumAddresses, revokeEthereumBlacklist } from "./msgs.rpc.func";
export const useValsetConfirm = buildUseVueMutation<MsgValsetConfirm, Error>({
  builderMutationFn: valsetConfirm
});
export const useSendToEth = buildUseVueMutation<MsgSendToEth, Error>({
  builderMutationFn: sendToEth
});
export const useRequestBatch = buildUseVueMutation<MsgRequestBatch, Error>({
  builderMutationFn: requestBatch
});
export const useConfirmBatch = buildUseVueMutation<MsgConfirmBatch, Error>({
  builderMutationFn: confirmBatch
});
export const useDepositClaim = buildUseVueMutation<MsgDepositClaim, Error>({
  builderMutationFn: depositClaim
});
export const useWithdrawClaim = buildUseVueMutation<MsgWithdrawClaim, Error>({
  builderMutationFn: withdrawClaim
});
export const useValsetUpdateClaim = buildUseVueMutation<MsgValsetUpdatedClaim, Error>({
  builderMutationFn: valsetUpdateClaim
});
export const useERC20DeployedClaim = buildUseVueMutation<MsgERC20DeployedClaim, Error>({
  builderMutationFn: eRC20DeployedClaim
});
export const useSetOrchestratorAddresses = buildUseVueMutation<MsgSetOrchestratorAddresses, Error>({
  builderMutationFn: setOrchestratorAddresses
});
export const useCancelSendToEth = buildUseVueMutation<MsgCancelSendToEth, Error>({
  builderMutationFn: cancelSendToEth
});
export const useSubmitBadSignatureEvidence = buildUseVueMutation<MsgSubmitBadSignatureEvidence, Error>({
  builderMutationFn: submitBadSignatureEvidence
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
export const useBlacklistEthereumAddresses = buildUseVueMutation<MsgBlacklistEthereumAddresses, Error>({
  builderMutationFn: blacklistEthereumAddresses
});
export const useRevokeEthereumBlacklist = buildUseVueMutation<MsgRevokeEthereumBlacklist, Error>({
  builderMutationFn: revokeEthereumBlacklist
});