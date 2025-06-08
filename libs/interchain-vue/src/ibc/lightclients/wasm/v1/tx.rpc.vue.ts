import { buildUseVueMutation } from "../../../../vue-query";
import { MsgStoreCode, MsgRemoveChecksum, MsgMigrateContract } from "./tx";
import { storeCode, removeChecksum, migrateContract } from "./tx.rpc.func";
/**
 * StoreCode defines a rpc handler method for MsgStoreCode.
 * @name useStoreCode
 * @package ibc.lightclients.wasm.v1
 * @see proto service: ibc.lightclients.wasm.v1.StoreCode
 */
export const useStoreCode = buildUseVueMutation<MsgStoreCode, Error>({
  builderMutationFn: storeCode
});
/**
 * RemoveChecksum defines a rpc handler method for MsgRemoveChecksum.
 * @name useRemoveChecksum
 * @package ibc.lightclients.wasm.v1
 * @see proto service: ibc.lightclients.wasm.v1.RemoveChecksum
 */
export const useRemoveChecksum = buildUseVueMutation<MsgRemoveChecksum, Error>({
  builderMutationFn: removeChecksum
});
/**
 * MigrateContract defines a rpc handler method for MsgMigrateContract.
 * @name useMigrateContract
 * @package ibc.lightclients.wasm.v1
 * @see proto service: ibc.lightclients.wasm.v1.MigrateContract
 */
export const useMigrateContract = buildUseVueMutation<MsgMigrateContract, Error>({
  builderMutationFn: migrateContract
});