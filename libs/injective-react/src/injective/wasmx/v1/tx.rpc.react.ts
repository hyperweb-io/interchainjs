import { buildUseMutation } from "../../../react-query";
import { MsgUpdateContract, MsgActivateContract, MsgDeactivateContract, MsgExecuteContractCompat, MsgUpdateParams, MsgRegisterContract } from "./tx";
import { createUpdateRegistryContractParams, createActivateRegistryContract, createDeactivateRegistryContract, createExecuteContractCompat, createUpdateParams, createRegisterContract } from "./tx.rpc.func";
export const useUpdateRegistryContractParams = buildUseMutation<MsgUpdateContract, Error>({
  builderMutationFn: createUpdateRegistryContractParams
});
export const useActivateRegistryContract = buildUseMutation<MsgActivateContract, Error>({
  builderMutationFn: createActivateRegistryContract
});
export const useDeactivateRegistryContract = buildUseMutation<MsgDeactivateContract, Error>({
  builderMutationFn: createDeactivateRegistryContract
});
export const useExecuteContractCompat = buildUseMutation<MsgExecuteContractCompat, Error>({
  builderMutationFn: createExecuteContractCompat
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});
export const useRegisterContract = buildUseMutation<MsgRegisterContract, Error>({
  builderMutationFn: createRegisterContract
});