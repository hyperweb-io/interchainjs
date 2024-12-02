import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSend, MsgMultiSend, MsgUpdateParams, MsgSetSendEnabled } from "./tx";
export const createSend = (clientResolver?: SigningClientResolver) => buildTx<MsgSend>({
  clientResolver,
  typeUrl: MsgSend.typeUrl,
  encoders: toEncoders(MsgSend),
  converters: toConverters(MsgSend)
});
export const createMultiSend = (clientResolver?: SigningClientResolver) => buildTx<MsgMultiSend>({
  clientResolver,
  typeUrl: MsgMultiSend.typeUrl,
  encoders: toEncoders(MsgMultiSend),
  converters: toConverters(MsgMultiSend)
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams)
});
export const createSetSendEnabled = (clientResolver?: SigningClientResolver) => buildTx<MsgSetSendEnabled>({
  clientResolver,
  typeUrl: MsgSetSendEnabled.typeUrl,
  encoders: toEncoders(MsgSetSendEnabled),
  converters: toConverters(MsgSetSendEnabled)
});