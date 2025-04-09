import { buildTx } from "../../../../helper-func-types";
import { MsgRegisterPayee, MsgRegisterCounterpartyPayee, MsgPayPacketFee, MsgPayPacketFeeAsync } from "./tx";
export const registerPayee = buildTx<MsgRegisterPayee>({
  msg: MsgRegisterPayee
});
export const registerCounterpartyPayee = buildTx<MsgRegisterCounterpartyPayee>({
  msg: MsgRegisterCounterpartyPayee
});
export const payPacketFee = buildTx<MsgPayPacketFee>({
  msg: MsgPayPacketFee
});
export const payPacketFeeAsync = buildTx<MsgPayPacketFeeAsync>({
  msg: MsgPayPacketFeeAsync
});