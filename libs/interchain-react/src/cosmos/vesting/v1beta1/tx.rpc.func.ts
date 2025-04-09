import { buildTx } from "../../../helper-func-types";
import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount } from "./tx";
export const createVestingAccount = buildTx<MsgCreateVestingAccount>({
  msg: MsgCreateVestingAccount
});
export const createPermanentLockedAccount = buildTx<MsgCreatePermanentLockedAccount>({
  msg: MsgCreatePermanentLockedAccount
});
export const createPeriodicVestingAccount = buildTx<MsgCreatePeriodicVestingAccount>({
  msg: MsgCreatePeriodicVestingAccount
});