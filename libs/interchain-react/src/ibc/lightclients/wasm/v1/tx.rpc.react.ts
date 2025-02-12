import { buildUseMutation } from "../../../../react-query";
import { MsgStoreCode, MsgRemoveChecksum, MsgMigrateContract } from "./tx";
import { createStoreCode, createRemoveChecksum, createMigrateContract } from "./tx.rpc.func";
export const useStoreCode = buildUseMutation<MsgStoreCode, Error>({
  builderMutationFn: createStoreCode
});
export const useRemoveChecksum = buildUseMutation<MsgRemoveChecksum, Error>({
  builderMutationFn: createRemoveChecksum
});
export const useMigrateContract = buildUseMutation<MsgMigrateContract, Error>({
  builderMutationFn: createMigrateContract
});