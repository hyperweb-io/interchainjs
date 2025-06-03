import { buildTx } from "../../../../helper-func-types";
import { MsgStoreCode, MsgRemoveChecksum, MsgMigrateContract } from "./tx";
/* StoreCode defines a rpc handler method for MsgStoreCode. */
export const storeCode = buildTx<MsgStoreCode>({
  msg: MsgStoreCode
});
/* RemoveChecksum defines a rpc handler method for MsgRemoveChecksum. */
export const removeChecksum = buildTx<MsgRemoveChecksum>({
  msg: MsgRemoveChecksum
});
/* MigrateContract defines a rpc handler method for MsgMigrateContract. */
export const migrateContract = buildTx<MsgMigrateContract>({
  msg: MsgMigrateContract
});