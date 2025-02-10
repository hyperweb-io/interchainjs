import { buildUseVueMutation } from "../../../vue-query";
import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgDepositClaim, MsgWithdrawClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgSetOrchestratorAddresses, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence, MsgUpdateParams, MsgBlacklistEthereumAddresses, MsgRevokeEthereumBlacklist } from "./msgs";
import { createValsetConfirm, createSendToEth, createRequestBatch, createConfirmBatch, createDepositClaim, createWithdrawClaim, createValsetUpdateClaim, createERC20DeployedClaim, createSetOrchestratorAddresses, createCancelSendToEth, createSubmitBadSignatureEvidence, createUpdateParams, createBlacklistEthereumAddresses, createRevokeEthereumBlacklist } from "./msgs.rpc.func";
export const useValsetConfirm = buildUseVueMutation<MsgValsetConfirm, Error>({
  builderMutationFn: createValsetConfirm
});
export const useSendToEth = buildUseVueMutation<MsgSendToEth, Error>({
  builderMutationFn: createSendToEth
});
export const useRequestBatch = buildUseVueMutation<MsgRequestBatch, Error>({
  builderMutationFn: createRequestBatch
});
export const useConfirmBatch = buildUseVueMutation<MsgConfirmBatch, Error>({
  builderMutationFn: createConfirmBatch
});
export const useDepositClaim = buildUseVueMutation<MsgDepositClaim, Error>({
  builderMutationFn: createDepositClaim
});
export const useWithdrawClaim = buildUseVueMutation<MsgWithdrawClaim, Error>({
  builderMutationFn: createWithdrawClaim
});
export const useValsetUpdateClaim = buildUseVueMutation<MsgValsetUpdatedClaim, Error>({
  builderMutationFn: createValsetUpdateClaim
});
export const useERC20DeployedClaim = buildUseVueMutation<MsgERC20DeployedClaim, Error>({
  builderMutationFn: createERC20DeployedClaim
});
export const useSetOrchestratorAddresses = buildUseVueMutation<MsgSetOrchestratorAddresses, Error>({
  builderMutationFn: createSetOrchestratorAddresses
});
export const useCancelSendToEth = buildUseVueMutation<MsgCancelSendToEth, Error>({
  builderMutationFn: createCancelSendToEth
});
export const useSubmitBadSignatureEvidence = buildUseVueMutation<MsgSubmitBadSignatureEvidence, Error>({
  builderMutationFn: createSubmitBadSignatureEvidence
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});
export const useBlacklistEthereumAddresses = buildUseVueMutation<MsgBlacklistEthereumAddresses, Error>({
  builderMutationFn: createBlacklistEthereumAddresses
});
export const useRevokeEthereumBlacklist = buildUseVueMutation<MsgRevokeEthereumBlacklist, Error>({
  builderMutationFn: createRevokeEthereumBlacklist
});