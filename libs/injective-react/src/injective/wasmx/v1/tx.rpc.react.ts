import { buildUseMutation } from "../../../react-query";
import { MsgUpdateContract, MsgActivateContract, MsgDeactivateContract, MsgExecuteContractCompat, MsgUpdateParams, MsgRegisterContract } from "./tx";
import { updateRegistryContractParams, activateRegistryContract, deactivateRegistryContract, executeContractCompat, updateParams, registerContract } from "./tx.rpc.func";
export const useUpdateRegistryContractParams = buildUseMutation<MsgUpdateContract, Error>({
  builderMutationFn: updateRegistryContractParams
});
export const useActivateRegistryContract = buildUseMutation<MsgActivateContract, Error>({
  builderMutationFn: activateRegistryContract
});
export const useDeactivateRegistryContract = buildUseMutation<MsgDeactivateContract, Error>({
  builderMutationFn: deactivateRegistryContract
});
export const useExecuteContractCompat = buildUseMutation<MsgExecuteContractCompat, Error>({
  builderMutationFn: executeContractCompat
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
export const useRegisterContract = buildUseMutation<MsgRegisterContract, Error>({
  builderMutationFn: registerContract
});