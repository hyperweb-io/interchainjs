import { buildUseMutation } from "../../../react-query";
import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig, MsgUpdateParams, MsgSudoContract, MsgPinCodes, MsgUnpinCodes, MsgStoreAndInstantiateContract, MsgRemoveCodeUploadParamsAddresses, MsgAddCodeUploadParamsAddresses, MsgStoreAndMigrateContract, MsgUpdateContractLabel } from "./tx";
import { storeCode, instantiateContract, instantiateContract2, executeContract, migrateContract, updateAdmin, clearAdmin, updateInstantiateConfig, updateParams, sudoContract, pinCodes, unpinCodes, storeAndInstantiateContract, removeCodeUploadParamsAddresses, addCodeUploadParamsAddresses, storeAndMigrateContract, updateContractLabel } from "./tx.rpc.func";
export const useStoreCode = buildUseMutation<MsgStoreCode, Error>({
  builderMutationFn: storeCode
});
export const useInstantiateContract = buildUseMutation<MsgInstantiateContract, Error>({
  builderMutationFn: instantiateContract
});
export const useInstantiateContract2 = buildUseMutation<MsgInstantiateContract2, Error>({
  builderMutationFn: instantiateContract2
});
export const useExecuteContract = buildUseMutation<MsgExecuteContract, Error>({
  builderMutationFn: executeContract
});
export const useMigrateContract = buildUseMutation<MsgMigrateContract, Error>({
  builderMutationFn: migrateContract
});
export const useUpdateAdmin = buildUseMutation<MsgUpdateAdmin, Error>({
  builderMutationFn: updateAdmin
});
export const useClearAdmin = buildUseMutation<MsgClearAdmin, Error>({
  builderMutationFn: clearAdmin
});
export const useUpdateInstantiateConfig = buildUseMutation<MsgUpdateInstantiateConfig, Error>({
  builderMutationFn: updateInstantiateConfig
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
export const useSudoContract = buildUseMutation<MsgSudoContract, Error>({
  builderMutationFn: sudoContract
});
export const usePinCodes = buildUseMutation<MsgPinCodes, Error>({
  builderMutationFn: pinCodes
});
export const useUnpinCodes = buildUseMutation<MsgUnpinCodes, Error>({
  builderMutationFn: unpinCodes
});
export const useStoreAndInstantiateContract = buildUseMutation<MsgStoreAndInstantiateContract, Error>({
  builderMutationFn: storeAndInstantiateContract
});
export const useRemoveCodeUploadParamsAddresses = buildUseMutation<MsgRemoveCodeUploadParamsAddresses, Error>({
  builderMutationFn: removeCodeUploadParamsAddresses
});
export const useAddCodeUploadParamsAddresses = buildUseMutation<MsgAddCodeUploadParamsAddresses, Error>({
  builderMutationFn: addCodeUploadParamsAddresses
});
export const useStoreAndMigrateContract = buildUseMutation<MsgStoreAndMigrateContract, Error>({
  builderMutationFn: storeAndMigrateContract
});
export const useUpdateContractLabel = buildUseMutation<MsgUpdateContractLabel, Error>({
  builderMutationFn: updateContractLabel
});