import { buildTx } from "../../../helper-func-types";
import { MsgUpdateContract, MsgActivateContract, MsgDeactivateContract, MsgExecuteContractCompat, MsgUpdateParams, MsgRegisterContract } from "./tx";
export const updateRegistryContractParams = buildTx<MsgUpdateContract>({
  msg: MsgUpdateContract
});
export const activateRegistryContract = buildTx<MsgActivateContract>({
  msg: MsgActivateContract
});
export const deactivateRegistryContract = buildTx<MsgDeactivateContract>({
  msg: MsgDeactivateContract
});
export const executeContractCompat = buildTx<MsgExecuteContractCompat>({
  msg: MsgExecuteContractCompat
});
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
export const registerContract = buildTx<MsgRegisterContract>({
  msg: MsgRegisterContract
});