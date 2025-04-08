import { buildTx } from "../../../../helper-func-types";
import { MsgStoreCode, MsgRemoveChecksum, MsgMigrateContract } from "./tx";
export const storeCode = buildTx<MsgStoreCode>({
  msg: MsgStoreCode
});
export const removeChecksum = buildTx<MsgRemoveChecksum>({
  msg: MsgRemoveChecksum
});
export const migrateContract = buildTx<MsgMigrateContract>({
  msg: MsgMigrateContract
});