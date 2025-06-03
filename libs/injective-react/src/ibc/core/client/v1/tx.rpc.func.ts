import { buildTx } from "../../../../helper-func-types";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour, MsgRecoverClient, MsgIBCSoftwareUpgrade, MsgUpdateParams } from "./tx";
/* CreateClient defines a rpc handler method for MsgCreateClient. */
export const createClient = buildTx<MsgCreateClient>({
  msg: MsgCreateClient
});
/* UpdateClient defines a rpc handler method for MsgUpdateClient. */
export const updateClient = buildTx<MsgUpdateClient>({
  msg: MsgUpdateClient
});
/* UpgradeClient defines a rpc handler method for MsgUpgradeClient. */
export const upgradeClient = buildTx<MsgUpgradeClient>({
  msg: MsgUpgradeClient
});
/* SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. */
export const submitMisbehaviour = buildTx<MsgSubmitMisbehaviour>({
  msg: MsgSubmitMisbehaviour
});
/* RecoverClient defines a rpc handler method for MsgRecoverClient. */
export const recoverClient = buildTx<MsgRecoverClient>({
  msg: MsgRecoverClient
});
/* IBCSoftwareUpgrade defines a rpc handler method for MsgIBCSoftwareUpgrade. */
export const iBCSoftwareUpgrade = buildTx<MsgIBCSoftwareUpgrade>({
  msg: MsgIBCSoftwareUpgrade
});
/* UpdateClientParams defines a rpc handler method for MsgUpdateParams. */
export const updateClientParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});