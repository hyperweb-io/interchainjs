import { buildTx } from "../../../helper-func-types";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgUpdateParams } from "./tx";
export const createDenom = buildTx<MsgCreateDenom>({
  msg: MsgCreateDenom
});
export const mint = buildTx<MsgMint>({
  msg: MsgMint
});
export const burn = buildTx<MsgBurn>({
  msg: MsgBurn
});
export const changeAdmin = buildTx<MsgChangeAdmin>({
  msg: MsgChangeAdmin
});
export const setDenomMetadata = buildTx<MsgSetDenomMetadata>({
  msg: MsgSetDenomMetadata
});
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});