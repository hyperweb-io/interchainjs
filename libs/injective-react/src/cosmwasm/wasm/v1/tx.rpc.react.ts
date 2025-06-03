import { buildUseMutation } from "../../../react-query";
import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig, MsgUpdateParams, MsgSudoContract, MsgPinCodes, MsgUnpinCodes, MsgStoreAndInstantiateContract, MsgRemoveCodeUploadParamsAddresses, MsgAddCodeUploadParamsAddresses, MsgStoreAndMigrateContract, MsgUpdateContractLabel } from "./tx";
import { storeCode, instantiateContract, instantiateContract2, executeContract, migrateContract, updateAdmin, clearAdmin, updateInstantiateConfig, updateParams, sudoContract, pinCodes, unpinCodes, storeAndInstantiateContract, removeCodeUploadParamsAddresses, addCodeUploadParamsAddresses, storeAndMigrateContract, updateContractLabel } from "./tx.rpc.func";
/* StoreCode to submit Wasm code to the system */
export const useStoreCode = buildUseMutation<MsgStoreCode, Error>({
  builderMutationFn: storeCode
});
/* InstantiateContract creates a new smart contract instance for the given
  code id. */
export const useInstantiateContract = buildUseMutation<MsgInstantiateContract, Error>({
  builderMutationFn: instantiateContract
});
/* InstantiateContract2 creates a new smart contract instance for the given
  code id with a predictable address */
export const useInstantiateContract2 = buildUseMutation<MsgInstantiateContract2, Error>({
  builderMutationFn: instantiateContract2
});
/* Execute submits the given message data to a smart contract */
export const useExecuteContract = buildUseMutation<MsgExecuteContract, Error>({
  builderMutationFn: executeContract
});
/* Migrate runs a code upgrade/ downgrade for a smart contract */
export const useMigrateContract = buildUseMutation<MsgMigrateContract, Error>({
  builderMutationFn: migrateContract
});
/* UpdateAdmin sets a new admin for a smart contract */
export const useUpdateAdmin = buildUseMutation<MsgUpdateAdmin, Error>({
  builderMutationFn: updateAdmin
});
/* ClearAdmin removes any admin stored for a smart contract */
export const useClearAdmin = buildUseMutation<MsgClearAdmin, Error>({
  builderMutationFn: clearAdmin
});
/* UpdateInstantiateConfig updates instantiate config for a smart contract */
export const useUpdateInstantiateConfig = buildUseMutation<MsgUpdateInstantiateConfig, Error>({
  builderMutationFn: updateInstantiateConfig
});
/* UpdateParams defines a governance operation for updating the x/wasm
 module parameters. The authority is defined in the keeper.

 Since: 0.40 */
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
/* SudoContract defines a governance operation for calling sudo
 on a contract. The authority is defined in the keeper.

 Since: 0.40 */
export const useSudoContract = buildUseMutation<MsgSudoContract, Error>({
  builderMutationFn: sudoContract
});
/* PinCodes defines a governance operation for pinning a set of
 code ids in the wasmvm cache. The authority is defined in the keeper.

 Since: 0.40 */
export const usePinCodes = buildUseMutation<MsgPinCodes, Error>({
  builderMutationFn: pinCodes
});
/* UnpinCodes defines a governance operation for unpinning a set of
 code ids in the wasmvm cache. The authority is defined in the keeper.

 Since: 0.40 */
export const useUnpinCodes = buildUseMutation<MsgUnpinCodes, Error>({
  builderMutationFn: unpinCodes
});
/* StoreAndInstantiateContract defines a governance operation for storing
 and instantiating the contract. The authority is defined in the keeper.

 Since: 0.40 */
export const useStoreAndInstantiateContract = buildUseMutation<MsgStoreAndInstantiateContract, Error>({
  builderMutationFn: storeAndInstantiateContract
});
/* RemoveCodeUploadParamsAddresses defines a governance operation for
 removing addresses from code upload params.
 The authority is defined in the keeper. */
export const useRemoveCodeUploadParamsAddresses = buildUseMutation<MsgRemoveCodeUploadParamsAddresses, Error>({
  builderMutationFn: removeCodeUploadParamsAddresses
});
/* AddCodeUploadParamsAddresses defines a governance operation for
 adding addresses to code upload params.
 The authority is defined in the keeper. */
export const useAddCodeUploadParamsAddresses = buildUseMutation<MsgAddCodeUploadParamsAddresses, Error>({
  builderMutationFn: addCodeUploadParamsAddresses
});
/* StoreAndMigrateContract defines a governance operation for storing
 and migrating the contract. The authority is defined in the keeper.

 Since: 0.42 */
export const useStoreAndMigrateContract = buildUseMutation<MsgStoreAndMigrateContract, Error>({
  builderMutationFn: storeAndMigrateContract
});
/* UpdateContractLabel sets a new label for a smart contract

 Since: 0.43 */
export const useUpdateContractLabel = buildUseMutation<MsgUpdateContractLabel, Error>({
  builderMutationFn: updateContractLabel
});