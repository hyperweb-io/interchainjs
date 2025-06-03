import { buildUseVueMutation } from "../../../../vue-query";
import { MsgStoreCode, MsgRemoveChecksum, MsgMigrateContract } from "./tx";
import { storeCode, removeChecksum, migrateContract } from "./tx.rpc.func";
/* StoreCode defines a rpc handler method for MsgStoreCode. */
export const useStoreCode = buildUseVueMutation<MsgStoreCode, Error>({
  builderMutationFn: storeCode
});
/* RemoveChecksum defines a rpc handler method for MsgRemoveChecksum. */
export const useRemoveChecksum = buildUseVueMutation<MsgRemoveChecksum, Error>({
  builderMutationFn: removeChecksum
});
/* MigrateContract defines a rpc handler method for MsgMigrateContract. */
export const useMigrateContract = buildUseVueMutation<MsgMigrateContract, Error>({
  builderMutationFn: migrateContract
});