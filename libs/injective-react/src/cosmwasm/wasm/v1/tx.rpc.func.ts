import { buildTx } from "../../../helper-func-types";
import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig, MsgUpdateParams, MsgSudoContract, MsgPinCodes, MsgUnpinCodes, MsgStoreAndInstantiateContract, MsgRemoveCodeUploadParamsAddresses, MsgAddCodeUploadParamsAddresses, MsgStoreAndMigrateContract, MsgUpdateContractLabel } from "./tx";
/* StoreCode to submit Wasm code to the system */
export const storeCode = buildTx<MsgStoreCode>({
  msg: MsgStoreCode
});
/* InstantiateContract creates a new smart contract instance for the given
  code id. */
export const instantiateContract = buildTx<MsgInstantiateContract>({
  msg: MsgInstantiateContract
});
/* InstantiateContract2 creates a new smart contract instance for the given
  code id with a predictable address */
export const instantiateContract2 = buildTx<MsgInstantiateContract2>({
  msg: MsgInstantiateContract2
});
/* Execute submits the given message data to a smart contract */
export const executeContract = buildTx<MsgExecuteContract>({
  msg: MsgExecuteContract
});
/* Migrate runs a code upgrade/ downgrade for a smart contract */
export const migrateContract = buildTx<MsgMigrateContract>({
  msg: MsgMigrateContract
});
/* UpdateAdmin sets a new admin for a smart contract */
export const updateAdmin = buildTx<MsgUpdateAdmin>({
  msg: MsgUpdateAdmin
});
/* ClearAdmin removes any admin stored for a smart contract */
export const clearAdmin = buildTx<MsgClearAdmin>({
  msg: MsgClearAdmin
});
/* UpdateInstantiateConfig updates instantiate config for a smart contract */
export const updateInstantiateConfig = buildTx<MsgUpdateInstantiateConfig>({
  msg: MsgUpdateInstantiateConfig
});
/* UpdateParams defines a governance operation for updating the x/wasm
 module parameters. The authority is defined in the keeper.

 Since: 0.40 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
/* SudoContract defines a governance operation for calling sudo
 on a contract. The authority is defined in the keeper.

 Since: 0.40 */
export const sudoContract = buildTx<MsgSudoContract>({
  msg: MsgSudoContract
});
/* PinCodes defines a governance operation for pinning a set of
 code ids in the wasmvm cache. The authority is defined in the keeper.

 Since: 0.40 */
export const pinCodes = buildTx<MsgPinCodes>({
  msg: MsgPinCodes
});
/* UnpinCodes defines a governance operation for unpinning a set of
 code ids in the wasmvm cache. The authority is defined in the keeper.

 Since: 0.40 */
export const unpinCodes = buildTx<MsgUnpinCodes>({
  msg: MsgUnpinCodes
});
/* StoreAndInstantiateContract defines a governance operation for storing
 and instantiating the contract. The authority is defined in the keeper.

 Since: 0.40 */
export const storeAndInstantiateContract = buildTx<MsgStoreAndInstantiateContract>({
  msg: MsgStoreAndInstantiateContract
});
/* RemoveCodeUploadParamsAddresses defines a governance operation for
 removing addresses from code upload params.
 The authority is defined in the keeper. */
export const removeCodeUploadParamsAddresses = buildTx<MsgRemoveCodeUploadParamsAddresses>({
  msg: MsgRemoveCodeUploadParamsAddresses
});
/* AddCodeUploadParamsAddresses defines a governance operation for
 adding addresses to code upload params.
 The authority is defined in the keeper. */
export const addCodeUploadParamsAddresses = buildTx<MsgAddCodeUploadParamsAddresses>({
  msg: MsgAddCodeUploadParamsAddresses
});
/* StoreAndMigrateContract defines a governance operation for storing
 and migrating the contract. The authority is defined in the keeper.

 Since: 0.42 */
export const storeAndMigrateContract = buildTx<MsgStoreAndMigrateContract>({
  msg: MsgStoreAndMigrateContract
});
/* UpdateContractLabel sets a new label for a smart contract

 Since: 0.43 */
export const updateContractLabel = buildTx<MsgUpdateContractLabel>({
  msg: MsgUpdateContractLabel
});