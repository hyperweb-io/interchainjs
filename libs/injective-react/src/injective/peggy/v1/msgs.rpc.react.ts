import { buildUseMutation } from "../../../react-query";
import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgDepositClaim, MsgWithdrawClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgSetOrchestratorAddresses, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence, MsgUpdateParams, MsgBlacklistEthereumAddresses, MsgRevokeEthereumBlacklist } from "./msgs";
import { createValsetConfirm, createSendToEth, createRequestBatch, createConfirmBatch, createDepositClaim, createWithdrawClaim, createValsetUpdateClaim, createERC20DeployedClaim, createSetOrchestratorAddresses, createCancelSendToEth, createSubmitBadSignatureEvidence, createUpdateParams, createBlacklistEthereumAddresses, createRevokeEthereumBlacklist } from "./msgs.rpc.func";
export const useValsetConfirm = buildUseMutation<MsgValsetConfirm, Error>({
  builderMutationFn: createValsetConfirm
});
export const useSendToEth = buildUseMutation<MsgSendToEth, Error>({
  builderMutationFn: createSendToEth
});
export const useRequestBatch = buildUseMutation<MsgRequestBatch, Error>({
  builderMutationFn: createRequestBatch
});
export const useConfirmBatch = buildUseMutation<MsgConfirmBatch, Error>({
  builderMutationFn: createConfirmBatch
});
export const useDepositClaim = buildUseMutation<MsgDepositClaim, Error>({
  builderMutationFn: createDepositClaim
});
export const useWithdrawClaim = buildUseMutation<MsgWithdrawClaim, Error>({
  builderMutationFn: createWithdrawClaim
});
export const useValsetUpdateClaim = buildUseMutation<MsgValsetUpdatedClaim, Error>({
  builderMutationFn: createValsetUpdateClaim
});
export const useERC20DeployedClaim = buildUseMutation<MsgERC20DeployedClaim, Error>({
  builderMutationFn: createERC20DeployedClaim
});
export const useSetOrchestratorAddresses = buildUseMutation<MsgSetOrchestratorAddresses, Error>({
  builderMutationFn: createSetOrchestratorAddresses
});
export const useCancelSendToEth = buildUseMutation<MsgCancelSendToEth, Error>({
  builderMutationFn: createCancelSendToEth
});
export const useSubmitBadSignatureEvidence = buildUseMutation<MsgSubmitBadSignatureEvidence, Error>({
  builderMutationFn: createSubmitBadSignatureEvidence
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});
export const useBlacklistEthereumAddresses = buildUseMutation<MsgBlacklistEthereumAddresses, Error>({
  builderMutationFn: createBlacklistEthereumAddresses
});
export const useRevokeEthereumBlacklist = buildUseMutation<MsgRevokeEthereumBlacklist, Error>({
  builderMutationFn: createRevokeEthereumBlacklist
});