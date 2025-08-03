import { buildTx } from "../../../helper-func-types";
import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig, MsgUpdateParams, MsgSudoContract, MsgPinCodes, MsgUnpinCodes, MsgStoreAndInstantiateContract, MsgRemoveCodeUploadParamsAddresses, MsgAddCodeUploadParamsAddresses, MsgStoreAndMigrateContract, MsgUpdateContractLabel } from "./tx";
/**
 * StoreCode to submit Wasm code to the system
 * @name storeCode
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.StoreCode
 */
export const storeCode = buildTx<MsgStoreCode>({
  msg: MsgStoreCode
});
/**
 * InstantiateContract creates a new smart contract instance for the given
 *  code id.
 * @name instantiateContract
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.InstantiateContract
 */
export const instantiateContract = buildTx<MsgInstantiateContract>({
  msg: MsgInstantiateContract
});
/**
 * InstantiateContract2 creates a new smart contract instance for the given
 *  code id with a predictable address
 * @name instantiateContract2
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.InstantiateContract2
 */
export const instantiateContract2 = buildTx<MsgInstantiateContract2>({
  msg: MsgInstantiateContract2
});
/**
 * Execute submits the given message data to a smart contract
 * @name executeContract
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.ExecuteContract
 */
export const executeContract = buildTx<MsgExecuteContract>({
  msg: MsgExecuteContract
});
/**
 * Migrate runs a code upgrade/ downgrade for a smart contract
 * @name migrateContract
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.MigrateContract
 */
export const migrateContract = buildTx<MsgMigrateContract>({
  msg: MsgMigrateContract
});
/**
 * UpdateAdmin sets a new admin for a smart contract
 * @name updateAdmin
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.UpdateAdmin
 */
export const updateAdmin = buildTx<MsgUpdateAdmin>({
  msg: MsgUpdateAdmin
});
/**
 * ClearAdmin removes any admin stored for a smart contract
 * @name clearAdmin
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.ClearAdmin
 */
export const clearAdmin = buildTx<MsgClearAdmin>({
  msg: MsgClearAdmin
});
/**
 * UpdateInstantiateConfig updates instantiate config for a smart contract
 * @name updateInstantiateConfig
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.UpdateInstantiateConfig
 */
export const updateInstantiateConfig = buildTx<MsgUpdateInstantiateConfig>({
  msg: MsgUpdateInstantiateConfig
});
/**
 * UpdateParams defines a governance operation for updating the x/wasm
 * module parameters. The authority is defined in the keeper.
 * 
 * Since: 0.40
 * @name updateParams
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
/**
 * SudoContract defines a governance operation for calling sudo
 * on a contract. The authority is defined in the keeper.
 * 
 * Since: 0.40
 * @name sudoContract
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.SudoContract
 */
export const sudoContract = buildTx<MsgSudoContract>({
  msg: MsgSudoContract
});
/**
 * PinCodes defines a governance operation for pinning a set of
 * code ids in the wasmvm cache. The authority is defined in the keeper.
 * 
 * Since: 0.40
 * @name pinCodes
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.PinCodes
 */
export const pinCodes = buildTx<MsgPinCodes>({
  msg: MsgPinCodes
});
/**
 * UnpinCodes defines a governance operation for unpinning a set of
 * code ids in the wasmvm cache. The authority is defined in the keeper.
 * 
 * Since: 0.40
 * @name unpinCodes
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.UnpinCodes
 */
export const unpinCodes = buildTx<MsgUnpinCodes>({
  msg: MsgUnpinCodes
});
/**
 * StoreAndInstantiateContract defines a governance operation for storing
 * and instantiating the contract. The authority is defined in the keeper.
 * 
 * Since: 0.40
 * @name storeAndInstantiateContract
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.StoreAndInstantiateContract
 */
export const storeAndInstantiateContract = buildTx<MsgStoreAndInstantiateContract>({
  msg: MsgStoreAndInstantiateContract
});
/**
 * RemoveCodeUploadParamsAddresses defines a governance operation for
 * removing addresses from code upload params.
 * The authority is defined in the keeper.
 * @name removeCodeUploadParamsAddresses
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.RemoveCodeUploadParamsAddresses
 */
export const removeCodeUploadParamsAddresses = buildTx<MsgRemoveCodeUploadParamsAddresses>({
  msg: MsgRemoveCodeUploadParamsAddresses
});
/**
 * AddCodeUploadParamsAddresses defines a governance operation for
 * adding addresses to code upload params.
 * The authority is defined in the keeper.
 * @name addCodeUploadParamsAddresses
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.AddCodeUploadParamsAddresses
 */
export const addCodeUploadParamsAddresses = buildTx<MsgAddCodeUploadParamsAddresses>({
  msg: MsgAddCodeUploadParamsAddresses
});
/**
 * StoreAndMigrateContract defines a governance operation for storing
 * and migrating the contract. The authority is defined in the keeper.
 * 
 * Since: 0.42
 * @name storeAndMigrateContract
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.StoreAndMigrateContract
 */
export const storeAndMigrateContract = buildTx<MsgStoreAndMigrateContract>({
  msg: MsgStoreAndMigrateContract
});
/**
 * UpdateContractLabel sets a new label for a smart contract
 * 
 * Since: 0.43
 * @name updateContractLabel
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.UpdateContractLabel
 */
export const updateContractLabel = buildTx<MsgUpdateContractLabel>({
  msg: MsgUpdateContractLabel
});