import { buildUseMutation } from "../../../../react-query";
import { MsgStoreCode, MsgRemoveChecksum, MsgMigrateContract } from "./tx";
import { storeCode, removeChecksum, migrateContract } from "./tx.rpc.func";
export const useStoreCode = buildUseMutation<MsgStoreCode, Error>({
  builderMutationFn: storeCode
});
export const useRemoveChecksum = buildUseMutation<MsgRemoveChecksum, Error>({
  builderMutationFn: removeChecksum
});
export const useMigrateContract = buildUseMutation<MsgMigrateContract, Error>({
  builderMutationFn: migrateContract
});