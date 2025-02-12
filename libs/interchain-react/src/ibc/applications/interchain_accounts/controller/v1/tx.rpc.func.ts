import { buildTx, SigningClientResolver } from "../../../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgRegisterInterchainAccount, MsgSendTx, MsgUpdateParams } from "./tx";
export const createRegisterInterchainAccount = (clientResolver?: SigningClientResolver) => buildTx<MsgRegisterInterchainAccount>({
  clientResolver,
  typeUrl: MsgRegisterInterchainAccount.typeUrl,
  encoders: toEncoders(MsgRegisterInterchainAccount),
  converters: toConverters(MsgRegisterInterchainAccount),
  deps: [MsgRegisterInterchainAccount]
});
export const createSendTx = (clientResolver?: SigningClientResolver) => buildTx<MsgSendTx>({
  clientResolver,
  typeUrl: MsgSendTx.typeUrl,
  encoders: toEncoders(MsgSendTx),
  converters: toConverters(MsgSendTx),
  deps: [MsgSendTx]
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams),
  deps: [MsgUpdateParams]
});