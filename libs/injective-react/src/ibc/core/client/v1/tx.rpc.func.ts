import { buildTx } from "../../../../helper-func-types";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour, MsgRecoverClient, MsgIBCSoftwareUpgrade, MsgUpdateParams } from "./tx";
export const createClient = buildTx<MsgCreateClient>({
  msg: MsgCreateClient
});
export const updateClient = buildTx<MsgUpdateClient>({
  msg: MsgUpdateClient
});
export const upgradeClient = buildTx<MsgUpgradeClient>({
  msg: MsgUpgradeClient
});
export const submitMisbehaviour = buildTx<MsgSubmitMisbehaviour>({
  msg: MsgSubmitMisbehaviour
});
export const recoverClient = buildTx<MsgRecoverClient>({
  msg: MsgRecoverClient
});
export const iBCSoftwareUpgrade = buildTx<MsgIBCSoftwareUpgrade>({
  msg: MsgIBCSoftwareUpgrade
});
export const updateClientParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});