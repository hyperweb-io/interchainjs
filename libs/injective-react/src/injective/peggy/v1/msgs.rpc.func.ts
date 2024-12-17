import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgDepositClaim, MsgWithdrawClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgSetOrchestratorAddresses, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence, MsgUpdateParams, MsgBlacklistEthereumAddresses, MsgRevokeEthereumBlacklist } from "./msgs";
export const createValsetConfirm = (clientResolver?: SigningClientResolver) => buildTx<MsgValsetConfirm>({
  clientResolver,
  typeUrl: MsgValsetConfirm.typeUrl,
  encoders: toEncoders(MsgValsetConfirm),
  converters: toConverters(MsgValsetConfirm)
});
export const useValsetConfirm = buildUseMutation<MsgValsetConfirm, Error>({
  builderMutationFn: createValsetConfirm
});
export const createSendToEth = (clientResolver?: SigningClientResolver) => buildTx<MsgSendToEth>({
  clientResolver,
  typeUrl: MsgSendToEth.typeUrl,
  encoders: toEncoders(MsgSendToEth),
  converters: toConverters(MsgSendToEth)
});
export const useSendToEth = buildUseMutation<MsgSendToEth, Error>({
  builderMutationFn: createSendToEth
});
export const createRequestBatch = (clientResolver?: SigningClientResolver) => buildTx<MsgRequestBatch>({
  clientResolver,
  typeUrl: MsgRequestBatch.typeUrl,
  encoders: toEncoders(MsgRequestBatch),
  converters: toConverters(MsgRequestBatch)
});
export const useRequestBatch = buildUseMutation<MsgRequestBatch, Error>({
  builderMutationFn: createRequestBatch
});
export const createConfirmBatch = (clientResolver?: SigningClientResolver) => buildTx<MsgConfirmBatch>({
  clientResolver,
  typeUrl: MsgConfirmBatch.typeUrl,
  encoders: toEncoders(MsgConfirmBatch),
  converters: toConverters(MsgConfirmBatch)
});
export const useConfirmBatch = buildUseMutation<MsgConfirmBatch, Error>({
  builderMutationFn: createConfirmBatch
});
export const createDepositClaim = (clientResolver?: SigningClientResolver) => buildTx<MsgDepositClaim>({
  clientResolver,
  typeUrl: MsgDepositClaim.typeUrl,
  encoders: toEncoders(MsgDepositClaim),
  converters: toConverters(MsgDepositClaim)
});
export const useDepositClaim = buildUseMutation<MsgDepositClaim, Error>({
  builderMutationFn: createDepositClaim
});
export const createWithdrawClaim = (clientResolver?: SigningClientResolver) => buildTx<MsgWithdrawClaim>({
  clientResolver,
  typeUrl: MsgWithdrawClaim.typeUrl,
  encoders: toEncoders(MsgWithdrawClaim),
  converters: toConverters(MsgWithdrawClaim)
});
export const useWithdrawClaim = buildUseMutation<MsgWithdrawClaim, Error>({
  builderMutationFn: createWithdrawClaim
});
export const createValsetUpdateClaim = (clientResolver?: SigningClientResolver) => buildTx<MsgValsetUpdatedClaim>({
  clientResolver,
  typeUrl: MsgValsetUpdatedClaim.typeUrl,
  encoders: toEncoders(MsgValsetUpdatedClaim),
  converters: toConverters(MsgValsetUpdatedClaim)
});
export const useValsetUpdateClaim = buildUseMutation<MsgValsetUpdatedClaim, Error>({
  builderMutationFn: createValsetUpdateClaim
});
export const createERC20DeployedClaim = (clientResolver?: SigningClientResolver) => buildTx<MsgERC20DeployedClaim>({
  clientResolver,
  typeUrl: MsgERC20DeployedClaim.typeUrl,
  encoders: toEncoders(MsgERC20DeployedClaim),
  converters: toConverters(MsgERC20DeployedClaim)
});
export const useERC20DeployedClaim = buildUseMutation<MsgERC20DeployedClaim, Error>({
  builderMutationFn: createERC20DeployedClaim
});
export const createSetOrchestratorAddresses = (clientResolver?: SigningClientResolver) => buildTx<MsgSetOrchestratorAddresses>({
  clientResolver,
  typeUrl: MsgSetOrchestratorAddresses.typeUrl,
  encoders: toEncoders(MsgSetOrchestratorAddresses),
  converters: toConverters(MsgSetOrchestratorAddresses)
});
export const useSetOrchestratorAddresses = buildUseMutation<MsgSetOrchestratorAddresses, Error>({
  builderMutationFn: createSetOrchestratorAddresses
});
export const createCancelSendToEth = (clientResolver?: SigningClientResolver) => buildTx<MsgCancelSendToEth>({
  clientResolver,
  typeUrl: MsgCancelSendToEth.typeUrl,
  encoders: toEncoders(MsgCancelSendToEth),
  converters: toConverters(MsgCancelSendToEth)
});
export const useCancelSendToEth = buildUseMutation<MsgCancelSendToEth, Error>({
  builderMutationFn: createCancelSendToEth
});
export const createSubmitBadSignatureEvidence = (clientResolver?: SigningClientResolver) => buildTx<MsgSubmitBadSignatureEvidence>({
  clientResolver,
  typeUrl: MsgSubmitBadSignatureEvidence.typeUrl,
  encoders: toEncoders(MsgSubmitBadSignatureEvidence),
  converters: toConverters(MsgSubmitBadSignatureEvidence)
});
export const useSubmitBadSignatureEvidence = buildUseMutation<MsgSubmitBadSignatureEvidence, Error>({
  builderMutationFn: createSubmitBadSignatureEvidence
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams)
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});
export const createBlacklistEthereumAddresses = (clientResolver?: SigningClientResolver) => buildTx<MsgBlacklistEthereumAddresses>({
  clientResolver,
  typeUrl: MsgBlacklistEthereumAddresses.typeUrl,
  encoders: toEncoders(MsgBlacklistEthereumAddresses),
  converters: toConverters(MsgBlacklistEthereumAddresses)
});
export const useBlacklistEthereumAddresses = buildUseMutation<MsgBlacklistEthereumAddresses, Error>({
  builderMutationFn: createBlacklistEthereumAddresses
});
export const createRevokeEthereumBlacklist = (clientResolver?: SigningClientResolver) => buildTx<MsgRevokeEthereumBlacklist>({
  clientResolver,
  typeUrl: MsgRevokeEthereumBlacklist.typeUrl,
  encoders: toEncoders(MsgRevokeEthereumBlacklist),
  converters: toConverters(MsgRevokeEthereumBlacklist)
});
export const useRevokeEthereumBlacklist = buildUseMutation<MsgRevokeEthereumBlacklist, Error>({
  builderMutationFn: createRevokeEthereumBlacklist
});