import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgBid, MsgUpdateParams } from "./tx";
export const createBid = (clientResolver?: SigningClientResolver) => buildTx<MsgBid>({
  clientResolver,
  typeUrl: MsgBid.typeUrl,
  encoders: toEncoders(MsgBid),
  converters: toConverters(MsgBid),
  deps: [MsgBid]
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams),
  deps: [MsgUpdateParams]
});