import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgUnjail, MsgUpdateParams } from "./tx";
export const createUnjail = (clientResolver?: SigningClientResolver) => buildTx<MsgUnjail>({
  clientResolver,
  typeUrl: MsgUnjail.typeUrl,
  encoders: toEncoders(MsgUnjail),
  converters: toConverters(MsgUnjail)
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams)
});