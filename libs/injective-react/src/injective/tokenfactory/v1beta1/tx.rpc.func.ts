import { buildTx } from "../../../helper-func-types";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgUpdateParams } from "./tx";
/**
 * @name createDenom
 * @package injective.tokenfactory.v1beta1
 * @see proto service: injective.tokenfactory.v1beta1.CreateDenom
 */
export const createDenom = buildTx<MsgCreateDenom>({
  msg: MsgCreateDenom
});
/**
 * @name mint
 * @package injective.tokenfactory.v1beta1
 * @see proto service: injective.tokenfactory.v1beta1.Mint
 */
export const mint = buildTx<MsgMint>({
  msg: MsgMint
});
/**
 * @name burn
 * @package injective.tokenfactory.v1beta1
 * @see proto service: injective.tokenfactory.v1beta1.Burn
 */
export const burn = buildTx<MsgBurn>({
  msg: MsgBurn
});
/**
 * @name changeAdmin
 * @package injective.tokenfactory.v1beta1
 * @see proto service: injective.tokenfactory.v1beta1.ChangeAdmin
 */
export const changeAdmin = buildTx<MsgChangeAdmin>({
  msg: MsgChangeAdmin
});
/**
 * @name setDenomMetadata
 * @package injective.tokenfactory.v1beta1
 * @see proto service: injective.tokenfactory.v1beta1.SetDenomMetadata
 */
export const setDenomMetadata = buildTx<MsgSetDenomMetadata>({
  msg: MsgSetDenomMetadata
});
/**
 * @name updateParams
 * @package injective.tokenfactory.v1beta1
 * @see proto service: injective.tokenfactory.v1beta1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});