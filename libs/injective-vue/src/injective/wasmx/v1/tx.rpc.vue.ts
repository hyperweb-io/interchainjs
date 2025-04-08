import { buildUseVueMutation } from "../../../vue-query";
import { MsgUpdateContract, MsgActivateContract, MsgDeactivateContract, MsgExecuteContractCompat, MsgUpdateParams, MsgRegisterContract } from "./tx";
import { updateRegistryContractParams, activateRegistryContract, deactivateRegistryContract, executeContractCompat, updateParams, registerContract } from "./tx.rpc.func";
export const useUpdateRegistryContractParams = buildUseVueMutation<MsgUpdateContract, Error>({
  builderMutationFn: updateRegistryContractParams
});
export const useActivateRegistryContract = buildUseVueMutation<MsgActivateContract, Error>({
  builderMutationFn: activateRegistryContract
});
export const useDeactivateRegistryContract = buildUseVueMutation<MsgDeactivateContract, Error>({
  builderMutationFn: deactivateRegistryContract
});
export const useExecuteContractCompat = buildUseVueMutation<MsgExecuteContractCompat, Error>({
  builderMutationFn: executeContractCompat
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
export const useRegisterContract = buildUseVueMutation<MsgRegisterContract, Error>({
  builderMutationFn: registerContract
});