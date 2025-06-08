import { buildTx } from "../../../helper-func-types";
import { MsgUpdateContract, MsgActivateContract, MsgDeactivateContract, MsgExecuteContractCompat, MsgUpdateParams, MsgRegisterContract } from "./tx";
/**
 * @name updateRegistryContractParams
 * @package injective.wasmx.v1
 * @see proto service: injective.wasmx.v1.UpdateRegistryContractParams
 */
export const updateRegistryContractParams = buildTx<MsgUpdateContract>({
  msg: MsgUpdateContract
});
/**
 * @name activateRegistryContract
 * @package injective.wasmx.v1
 * @see proto service: injective.wasmx.v1.ActivateRegistryContract
 */
export const activateRegistryContract = buildTx<MsgActivateContract>({
  msg: MsgActivateContract
});
/**
 * @name deactivateRegistryContract
 * @package injective.wasmx.v1
 * @see proto service: injective.wasmx.v1.DeactivateRegistryContract
 */
export const deactivateRegistryContract = buildTx<MsgDeactivateContract>({
  msg: MsgDeactivateContract
});
/**
 * @name executeContractCompat
 * @package injective.wasmx.v1
 * @see proto service: injective.wasmx.v1.ExecuteContractCompat
 */
export const executeContractCompat = buildTx<MsgExecuteContractCompat>({
  msg: MsgExecuteContractCompat
});
/**
 * @name updateParams
 * @package injective.wasmx.v1
 * @see proto service: injective.wasmx.v1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
/**
 * @name registerContract
 * @package injective.wasmx.v1
 * @see proto service: injective.wasmx.v1.RegisterContract
 */
export const registerContract = buildTx<MsgRegisterContract>({
  msg: MsgRegisterContract
});