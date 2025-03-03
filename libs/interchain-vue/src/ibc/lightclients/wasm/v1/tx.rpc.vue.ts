import { buildUseVueMutation } from "../../../../vue-query";
import { MsgStoreCode, MsgRemoveChecksum, MsgMigrateContract } from "./tx";
import { createStoreCode, createRemoveChecksum, createMigrateContract } from "./tx.rpc.func";
export const useStoreCode = buildUseVueMutation<MsgStoreCode, Error>({
  builderMutationFn: createStoreCode
});
export const useRemoveChecksum = buildUseVueMutation<MsgRemoveChecksum, Error>({
  builderMutationFn: createRemoveChecksum
});
export const useMigrateContract = buildUseVueMutation<MsgMigrateContract, Error>({
  builderMutationFn: createMigrateContract
});