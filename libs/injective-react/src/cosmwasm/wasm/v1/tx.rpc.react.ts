import { buildUseMutation } from "../../../react-query";
import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig, MsgUpdateParams, MsgSudoContract, MsgPinCodes, MsgUnpinCodes, MsgStoreAndInstantiateContract, MsgRemoveCodeUploadParamsAddresses, MsgAddCodeUploadParamsAddresses, MsgStoreAndMigrateContract, MsgUpdateContractLabel } from "./tx";
import { storeCode, instantiateContract, instantiateContract2, executeContract, migrateContract, updateAdmin, clearAdmin, updateInstantiateConfig, updateParams, sudoContract, pinCodes, unpinCodes, storeAndInstantiateContract, removeCodeUploadParamsAddresses, addCodeUploadParamsAddresses, storeAndMigrateContract, updateContractLabel } from "./tx.rpc.func";
/**
 * StoreCode to submit Wasm code to the system
 * @name useStoreCode
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.StoreCode
 */
export const useStoreCode = buildUseMutation<MsgStoreCode, Error>({
  builderMutationFn: storeCode
});
/**
 * InstantiateContract creates a new smart contract instance for the given
 *  code id.
 * @name useInstantiateContract
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.InstantiateContract
 */
export const useInstantiateContract = buildUseMutation<MsgInstantiateContract, Error>({
  builderMutationFn: instantiateContract
});
/**
 * InstantiateContract2 creates a new smart contract instance for the given
 *  code id with a predictable address
 * @name useInstantiateContract2
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.InstantiateContract2
 */
export const useInstantiateContract2 = buildUseMutation<MsgInstantiateContract2, Error>({
  builderMutationFn: instantiateContract2
});
/**
 * Execute submits the given message data to a smart contract
 * @name useExecuteContract
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.ExecuteContract
 */
export const useExecuteContract = buildUseMutation<MsgExecuteContract, Error>({
  builderMutationFn: executeContract
});
/**
 * Migrate runs a code upgrade/ downgrade for a smart contract
 * @name useMigrateContract
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.MigrateContract
 */
export const useMigrateContract = buildUseMutation<MsgMigrateContract, Error>({
  builderMutationFn: migrateContract
});
/**
 * UpdateAdmin sets a new admin for a smart contract
 * @name useUpdateAdmin
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.UpdateAdmin
 */
export const useUpdateAdmin = buildUseMutation<MsgUpdateAdmin, Error>({
  builderMutationFn: updateAdmin
});
/**
 * ClearAdmin removes any admin stored for a smart contract
 * @name useClearAdmin
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.ClearAdmin
 */
export const useClearAdmin = buildUseMutation<MsgClearAdmin, Error>({
  builderMutationFn: clearAdmin
});
/**
 * UpdateInstantiateConfig updates instantiate config for a smart contract
 * @name useUpdateInstantiateConfig
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.UpdateInstantiateConfig
 */
export const useUpdateInstantiateConfig = buildUseMutation<MsgUpdateInstantiateConfig, Error>({
  builderMutationFn: updateInstantiateConfig
});
/**
 * UpdateParams defines a governance operation for updating the x/wasm
 * module parameters. The authority is defined in the keeper.
 * 
 * Since: 0.40
 * @name useUpdateParams
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.UpdateParams
 */
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
/**
 * SudoContract defines a governance operation for calling sudo
 * on a contract. The authority is defined in the keeper.
 * 
 * Since: 0.40
 * @name useSudoContract
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.SudoContract
 */
export const useSudoContract = buildUseMutation<MsgSudoContract, Error>({
  builderMutationFn: sudoContract
});
/**
 * PinCodes defines a governance operation for pinning a set of
 * code ids in the wasmvm cache. The authority is defined in the keeper.
 * 
 * Since: 0.40
 * @name usePinCodes
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.PinCodes
 */
export const usePinCodes = buildUseMutation<MsgPinCodes, Error>({
  builderMutationFn: pinCodes
});
/**
 * UnpinCodes defines a governance operation for unpinning a set of
 * code ids in the wasmvm cache. The authority is defined in the keeper.
 * 
 * Since: 0.40
 * @name useUnpinCodes
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.UnpinCodes
 */
export const useUnpinCodes = buildUseMutation<MsgUnpinCodes, Error>({
  builderMutationFn: unpinCodes
});
/**
 * StoreAndInstantiateContract defines a governance operation for storing
 * and instantiating the contract. The authority is defined in the keeper.
 * 
 * Since: 0.40
 * @name useStoreAndInstantiateContract
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.StoreAndInstantiateContract
 */
export const useStoreAndInstantiateContract = buildUseMutation<MsgStoreAndInstantiateContract, Error>({
  builderMutationFn: storeAndInstantiateContract
});
/**
 * RemoveCodeUploadParamsAddresses defines a governance operation for
 * removing addresses from code upload params.
 * The authority is defined in the keeper.
 * @name useRemoveCodeUploadParamsAddresses
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.RemoveCodeUploadParamsAddresses
 */
export const useRemoveCodeUploadParamsAddresses = buildUseMutation<MsgRemoveCodeUploadParamsAddresses, Error>({
  builderMutationFn: removeCodeUploadParamsAddresses
});
/**
 * AddCodeUploadParamsAddresses defines a governance operation for
 * adding addresses to code upload params.
 * The authority is defined in the keeper.
 * @name useAddCodeUploadParamsAddresses
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.AddCodeUploadParamsAddresses
 */
export const useAddCodeUploadParamsAddresses = buildUseMutation<MsgAddCodeUploadParamsAddresses, Error>({
  builderMutationFn: addCodeUploadParamsAddresses
});
/**
 * StoreAndMigrateContract defines a governance operation for storing
 * and migrating the contract. The authority is defined in the keeper.
 * 
 * Since: 0.42
 * @name useStoreAndMigrateContract
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.StoreAndMigrateContract
 */
export const useStoreAndMigrateContract = buildUseMutation<MsgStoreAndMigrateContract, Error>({
  builderMutationFn: storeAndMigrateContract
});
/**
 * UpdateContractLabel sets a new label for a smart contract
 * 
 * Since: 0.43
 * @name useUpdateContractLabel
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.UpdateContractLabel
 */
export const useUpdateContractLabel = buildUseMutation<MsgUpdateContractLabel, Error>({
  builderMutationFn: updateContractLabel
});