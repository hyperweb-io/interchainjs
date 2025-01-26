import { buildUseVueMutation } from "../../../vue-query";
import { MsgUpdateContract, MsgActivateContract, MsgDeactivateContract, MsgExecuteContractCompat, MsgUpdateParams, MsgRegisterContract } from "./tx";
import { createUpdateRegistryContractParams, createActivateRegistryContract, createDeactivateRegistryContract, createExecuteContractCompat, createUpdateParams, createRegisterContract } from "./tx.rpc.func.ts";
export const useUpdateRegistryContractParams = buildUseVueMutation<MsgUpdateContract, Error>({
  builderMutationFn: createUpdateRegistryContractParams
});
export const useActivateRegistryContract = buildUseVueMutation<MsgActivateContract, Error>({
  builderMutationFn: createActivateRegistryContract
});
export const useDeactivateRegistryContract = buildUseVueMutation<MsgDeactivateContract, Error>({
  builderMutationFn: createDeactivateRegistryContract
});
export const useExecuteContractCompat = buildUseVueMutation<MsgExecuteContractCompat, Error>({
  builderMutationFn: createExecuteContractCompat
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});
export const useRegisterContract = buildUseVueMutation<MsgRegisterContract, Error>({
  builderMutationFn: createRegisterContract
});