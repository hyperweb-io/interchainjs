import { buildUseVueMutation } from "../../../vue-query";
import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig, MsgUpdateParams, MsgSudoContract, MsgPinCodes, MsgUnpinCodes, MsgStoreAndInstantiateContract, MsgRemoveCodeUploadParamsAddresses, MsgAddCodeUploadParamsAddresses, MsgStoreAndMigrateContract, MsgUpdateContractLabel } from "./tx";
import { createStoreCode, createInstantiateContract, createInstantiateContract2, createExecuteContract, createMigrateContract, createUpdateAdmin, createClearAdmin, createUpdateInstantiateConfig, createUpdateParams, createSudoContract, createPinCodes, createUnpinCodes, createStoreAndInstantiateContract, createRemoveCodeUploadParamsAddresses, createAddCodeUploadParamsAddresses, createStoreAndMigrateContract, createUpdateContractLabel } from "./tx.rpc.func";
export const useStoreCode = buildUseVueMutation<MsgStoreCode, Error>({
  builderMutationFn: createStoreCode
});
export const useInstantiateContract = buildUseVueMutation<MsgInstantiateContract, Error>({
  builderMutationFn: createInstantiateContract
});
export const useInstantiateContract2 = buildUseVueMutation<MsgInstantiateContract2, Error>({
  builderMutationFn: createInstantiateContract2
});
export const useExecuteContract = buildUseVueMutation<MsgExecuteContract, Error>({
  builderMutationFn: createExecuteContract
});
export const useMigrateContract = buildUseVueMutation<MsgMigrateContract, Error>({
  builderMutationFn: createMigrateContract
});
export const useUpdateAdmin = buildUseVueMutation<MsgUpdateAdmin, Error>({
  builderMutationFn: createUpdateAdmin
});
export const useClearAdmin = buildUseVueMutation<MsgClearAdmin, Error>({
  builderMutationFn: createClearAdmin
});
export const useUpdateInstantiateConfig = buildUseVueMutation<MsgUpdateInstantiateConfig, Error>({
  builderMutationFn: createUpdateInstantiateConfig
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});
export const useSudoContract = buildUseVueMutation<MsgSudoContract, Error>({
  builderMutationFn: createSudoContract
});
export const usePinCodes = buildUseVueMutation<MsgPinCodes, Error>({
  builderMutationFn: createPinCodes
});
export const useUnpinCodes = buildUseVueMutation<MsgUnpinCodes, Error>({
  builderMutationFn: createUnpinCodes
});
export const useStoreAndInstantiateContract = buildUseVueMutation<MsgStoreAndInstantiateContract, Error>({
  builderMutationFn: createStoreAndInstantiateContract
});
export const useRemoveCodeUploadParamsAddresses = buildUseVueMutation<MsgRemoveCodeUploadParamsAddresses, Error>({
  builderMutationFn: createRemoveCodeUploadParamsAddresses
});
export const useAddCodeUploadParamsAddresses = buildUseVueMutation<MsgAddCodeUploadParamsAddresses, Error>({
  builderMutationFn: createAddCodeUploadParamsAddresses
});
export const useStoreAndMigrateContract = buildUseVueMutation<MsgStoreAndMigrateContract, Error>({
  builderMutationFn: createStoreAndMigrateContract
});
export const useUpdateContractLabel = buildUseVueMutation<MsgUpdateContractLabel, Error>({
  builderMutationFn: createUpdateContractLabel
});