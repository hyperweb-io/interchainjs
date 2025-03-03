import { buildTx, SigningClientResolver } from "../../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgRegisterPayee, MsgRegisterCounterpartyPayee, MsgPayPacketFee, MsgPayPacketFeeAsync } from "./tx";
export const createRegisterPayee = (clientResolver?: SigningClientResolver) => buildTx<MsgRegisterPayee>({
  clientResolver,
  typeUrl: MsgRegisterPayee.typeUrl,
  encoders: toEncoders(MsgRegisterPayee),
  converters: toConverters(MsgRegisterPayee)
});
export const createRegisterCounterpartyPayee = (clientResolver?: SigningClientResolver) => buildTx<MsgRegisterCounterpartyPayee>({
  clientResolver,
  typeUrl: MsgRegisterCounterpartyPayee.typeUrl,
  encoders: toEncoders(MsgRegisterCounterpartyPayee),
  converters: toConverters(MsgRegisterCounterpartyPayee)
});
export const createPayPacketFee = (clientResolver?: SigningClientResolver) => buildTx<MsgPayPacketFee>({
  clientResolver,
  typeUrl: MsgPayPacketFee.typeUrl,
  encoders: toEncoders(MsgPayPacketFee),
  converters: toConverters(MsgPayPacketFee)
});
export const createPayPacketFeeAsync = (clientResolver?: SigningClientResolver) => buildTx<MsgPayPacketFeeAsync>({
  clientResolver,
  typeUrl: MsgPayPacketFeeAsync.typeUrl,
  encoders: toEncoders(MsgPayPacketFeeAsync),
  converters: toConverters(MsgPayPacketFeeAsync)
});