import { buildUseMutation } from "../../../react-query";
import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig, MsgUpdateParams, MsgSudoContract, MsgPinCodes, MsgUnpinCodes, MsgStoreAndInstantiateContract, MsgRemoveCodeUploadParamsAddresses, MsgAddCodeUploadParamsAddresses, MsgStoreAndMigrateContract, MsgUpdateContractLabel } from "./tx";
import { createStoreCode, createInstantiateContract, createInstantiateContract2, createExecuteContract, createMigrateContract, createUpdateAdmin, createClearAdmin, createUpdateInstantiateConfig, createUpdateParams, createSudoContract, createPinCodes, createUnpinCodes, createStoreAndInstantiateContract, createRemoveCodeUploadParamsAddresses, createAddCodeUploadParamsAddresses, createStoreAndMigrateContract, createUpdateContractLabel } from "./tx.rpc.func";
export const useStoreCode = buildUseMutation<MsgStoreCode, Error>({
  builderMutationFn: createStoreCode
});
export const useInstantiateContract = buildUseMutation<MsgInstantiateContract, Error>({
  builderMutationFn: createInstantiateContract
});
export const useInstantiateContract2 = buildUseMutation<MsgInstantiateContract2, Error>({
  builderMutationFn: createInstantiateContract2
});
export const useExecuteContract = buildUseMutation<MsgExecuteContract, Error>({
  builderMutationFn: createExecuteContract
});
export const useMigrateContract = buildUseMutation<MsgMigrateContract, Error>({
  builderMutationFn: createMigrateContract
});
export const useUpdateAdmin = buildUseMutation<MsgUpdateAdmin, Error>({
  builderMutationFn: createUpdateAdmin
});
export const useClearAdmin = buildUseMutation<MsgClearAdmin, Error>({
  builderMutationFn: createClearAdmin
});
export const useUpdateInstantiateConfig = buildUseMutation<MsgUpdateInstantiateConfig, Error>({
  builderMutationFn: createUpdateInstantiateConfig
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});
export const useSudoContract = buildUseMutation<MsgSudoContract, Error>({
  builderMutationFn: createSudoContract
});
export const usePinCodes = buildUseMutation<MsgPinCodes, Error>({
  builderMutationFn: createPinCodes
});
export const useUnpinCodes = buildUseMutation<MsgUnpinCodes, Error>({
  builderMutationFn: createUnpinCodes
});
export const useStoreAndInstantiateContract = buildUseMutation<MsgStoreAndInstantiateContract, Error>({
  builderMutationFn: createStoreAndInstantiateContract
});
export const useRemoveCodeUploadParamsAddresses = buildUseMutation<MsgRemoveCodeUploadParamsAddresses, Error>({
  builderMutationFn: createRemoveCodeUploadParamsAddresses
});
export const useAddCodeUploadParamsAddresses = buildUseMutation<MsgAddCodeUploadParamsAddresses, Error>({
  builderMutationFn: createAddCodeUploadParamsAddresses
});
export const useStoreAndMigrateContract = buildUseMutation<MsgStoreAndMigrateContract, Error>({
  builderMutationFn: createStoreAndMigrateContract
});
export const useUpdateContractLabel = buildUseMutation<MsgUpdateContractLabel, Error>({
  builderMutationFn: createUpdateContractLabel
});