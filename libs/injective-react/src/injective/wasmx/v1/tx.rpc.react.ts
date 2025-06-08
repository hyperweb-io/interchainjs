import { buildUseMutation } from "../../../react-query";
import { MsgUpdateContract, MsgActivateContract, MsgDeactivateContract, MsgExecuteContractCompat, MsgUpdateParams, MsgRegisterContract } from "./tx";
import { updateRegistryContractParams, activateRegistryContract, deactivateRegistryContract, executeContractCompat, updateParams, registerContract } from "./tx.rpc.func";
/**
 * @name useUpdateRegistryContractParams
 * @package injective.wasmx.v1
 * @see proto service: injective.wasmx.v1.UpdateRegistryContractParams
 */
export const useUpdateRegistryContractParams = buildUseMutation<MsgUpdateContract, Error>({
  builderMutationFn: updateRegistryContractParams
});
/**
 * @name useActivateRegistryContract
 * @package injective.wasmx.v1
 * @see proto service: injective.wasmx.v1.ActivateRegistryContract
 */
export const useActivateRegistryContract = buildUseMutation<MsgActivateContract, Error>({
  builderMutationFn: activateRegistryContract
});
/**
 * @name useDeactivateRegistryContract
 * @package injective.wasmx.v1
 * @see proto service: injective.wasmx.v1.DeactivateRegistryContract
 */
export const useDeactivateRegistryContract = buildUseMutation<MsgDeactivateContract, Error>({
  builderMutationFn: deactivateRegistryContract
});
/**
 * @name useExecuteContractCompat
 * @package injective.wasmx.v1
 * @see proto service: injective.wasmx.v1.ExecuteContractCompat
 */
export const useExecuteContractCompat = buildUseMutation<MsgExecuteContractCompat, Error>({
  builderMutationFn: executeContractCompat
});
/**
 * @name useUpdateParams
 * @package injective.wasmx.v1
 * @see proto service: injective.wasmx.v1.UpdateParams
 */
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
/**
 * @name useRegisterContract
 * @package injective.wasmx.v1
 * @see proto service: injective.wasmx.v1.RegisterContract
 */
export const useRegisterContract = buildUseMutation<MsgRegisterContract, Error>({
  builderMutationFn: registerContract
});