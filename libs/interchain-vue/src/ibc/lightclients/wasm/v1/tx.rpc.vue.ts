import { buildUseVueMutation } from "../../../../vue-query";
import { MsgStoreCode, MsgRemoveChecksum, MsgMigrateContract } from "./tx";
import { storeCode, removeChecksum, migrateContract } from "./tx.rpc.func";
export const useStoreCode = buildUseVueMutation<MsgStoreCode, Error>({
  builderMutationFn: storeCode
});
export const useRemoveChecksum = buildUseVueMutation<MsgRemoveChecksum, Error>({
  builderMutationFn: removeChecksum
});
export const useMigrateContract = buildUseVueMutation<MsgMigrateContract, Error>({
  builderMutationFn: migrateContract
});