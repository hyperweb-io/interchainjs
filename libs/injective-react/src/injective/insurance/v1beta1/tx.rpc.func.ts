import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateInsuranceFund, MsgUnderwrite, MsgRequestRedemption, MsgUpdateParams } from "./tx";
export const createCreateInsuranceFund = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateInsuranceFund>({
  clientResolver,
  typeUrl: MsgCreateInsuranceFund.typeUrl,
  encoders: toEncoders(MsgCreateInsuranceFund),
  converters: toConverters(MsgCreateInsuranceFund),
  deps: [MsgCreateInsuranceFund]
});
export const createUnderwrite = (clientResolver?: SigningClientResolver) => buildTx<MsgUnderwrite>({
  clientResolver,
  typeUrl: MsgUnderwrite.typeUrl,
  encoders: toEncoders(MsgUnderwrite),
  converters: toConverters(MsgUnderwrite),
  deps: [MsgUnderwrite]
});
export const createRequestRedemption = (clientResolver?: SigningClientResolver) => buildTx<MsgRequestRedemption>({
  clientResolver,
  typeUrl: MsgRequestRedemption.typeUrl,
  encoders: toEncoders(MsgRequestRedemption),
  converters: toConverters(MsgRequestRedemption),
  deps: [MsgRequestRedemption]
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams),
  deps: [MsgUpdateParams]
});