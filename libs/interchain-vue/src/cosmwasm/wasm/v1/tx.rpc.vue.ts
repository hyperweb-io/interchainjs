import { buildUseVueMutation } from "../../../vue-query";
import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig, MsgUpdateParams, MsgSudoContract, MsgPinCodes, MsgUnpinCodes, MsgStoreAndInstantiateContract, MsgRemoveCodeUploadParamsAddresses, MsgAddCodeUploadParamsAddresses, MsgStoreAndMigrateContract, MsgUpdateContractLabel } from "./tx";
import { storeCode, instantiateContract, instantiateContract2, executeContract, migrateContract, updateAdmin, clearAdmin, updateInstantiateConfig, updateParams, sudoContract, pinCodes, unpinCodes, storeAndInstantiateContract, removeCodeUploadParamsAddresses, addCodeUploadParamsAddresses, storeAndMigrateContract, updateContractLabel } from "./tx.rpc.func";
export const useStoreCode = buildUseVueMutation<MsgStoreCode, Error>({
  builderMutationFn: storeCode
});
export const useInstantiateContract = buildUseVueMutation<MsgInstantiateContract, Error>({
  builderMutationFn: instantiateContract
});
export const useInstantiateContract2 = buildUseVueMutation<MsgInstantiateContract2, Error>({
  builderMutationFn: instantiateContract2
});
export const useExecuteContract = buildUseVueMutation<MsgExecuteContract, Error>({
  builderMutationFn: executeContract
});
export const useMigrateContract = buildUseVueMutation<MsgMigrateContract, Error>({
  builderMutationFn: migrateContract
});
export const useUpdateAdmin = buildUseVueMutation<MsgUpdateAdmin, Error>({
  builderMutationFn: updateAdmin
});
export const useClearAdmin = buildUseVueMutation<MsgClearAdmin, Error>({
  builderMutationFn: clearAdmin
});
export const useUpdateInstantiateConfig = buildUseVueMutation<MsgUpdateInstantiateConfig, Error>({
  builderMutationFn: updateInstantiateConfig
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
export const useSudoContract = buildUseVueMutation<MsgSudoContract, Error>({
  builderMutationFn: sudoContract
});
export const usePinCodes = buildUseVueMutation<MsgPinCodes, Error>({
  builderMutationFn: pinCodes
});
export const useUnpinCodes = buildUseVueMutation<MsgUnpinCodes, Error>({
  builderMutationFn: unpinCodes
});
export const useStoreAndInstantiateContract = buildUseVueMutation<MsgStoreAndInstantiateContract, Error>({
  builderMutationFn: storeAndInstantiateContract
});
export const useRemoveCodeUploadParamsAddresses = buildUseVueMutation<MsgRemoveCodeUploadParamsAddresses, Error>({
  builderMutationFn: removeCodeUploadParamsAddresses
});
export const useAddCodeUploadParamsAddresses = buildUseVueMutation<MsgAddCodeUploadParamsAddresses, Error>({
  builderMutationFn: addCodeUploadParamsAddresses
});
export const useStoreAndMigrateContract = buildUseVueMutation<MsgStoreAndMigrateContract, Error>({
  builderMutationFn: storeAndMigrateContract
});
export const useUpdateContractLabel = buildUseVueMutation<MsgUpdateContractLabel, Error>({
  builderMutationFn: updateContractLabel
});