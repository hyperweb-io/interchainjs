import { buildUseMutation } from "../../../../react-query";
import { MsgStoreCode, MsgRemoveChecksum, MsgMigrateContract } from "./tx";
import { storeCode, removeChecksum, migrateContract } from "./tx.rpc.func";
/* StoreCode defines a rpc handler method for MsgStoreCode. */
export const useStoreCode = buildUseMutation<MsgStoreCode, Error>({
  builderMutationFn: storeCode
});
/* RemoveChecksum defines a rpc handler method for MsgRemoveChecksum. */
export const useRemoveChecksum = buildUseMutation<MsgRemoveChecksum, Error>({
  builderMutationFn: removeChecksum
});
/* MigrateContract defines a rpc handler method for MsgMigrateContract. */
export const useMigrateContract = buildUseMutation<MsgMigrateContract, Error>({
  builderMutationFn: migrateContract
});