import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateInsuranceFund, MsgUnderwrite, MsgRequestRedemption, MsgUpdateParams } from "./tx";
export const createCreateInsuranceFund = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateInsuranceFund>({
  clientResolver,
  typeUrl: MsgCreateInsuranceFund.typeUrl,
  encoders: toEncoders(MsgCreateInsuranceFund),
  converters: toConverters(MsgCreateInsuranceFund)
});
export const useCreateInsuranceFund = buildUseMutation<MsgCreateInsuranceFund, Error>({
  builderMutationFn: createCreateInsuranceFund
});
export const createUnderwrite = (clientResolver?: SigningClientResolver) => buildTx<MsgUnderwrite>({
  clientResolver,
  typeUrl: MsgUnderwrite.typeUrl,
  encoders: toEncoders(MsgUnderwrite),
  converters: toConverters(MsgUnderwrite)
});
export const useUnderwrite = buildUseMutation<MsgUnderwrite, Error>({
  builderMutationFn: createUnderwrite
});
export const createRequestRedemption = (clientResolver?: SigningClientResolver) => buildTx<MsgRequestRedemption>({
  clientResolver,
  typeUrl: MsgRequestRedemption.typeUrl,
  encoders: toEncoders(MsgRequestRedemption),
  converters: toConverters(MsgRequestRedemption)
});
export const useRequestRedemption = buildUseMutation<MsgRequestRedemption, Error>({
  builderMutationFn: createRequestRedemption
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams)
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});