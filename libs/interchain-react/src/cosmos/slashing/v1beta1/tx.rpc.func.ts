import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { buildUseMutation } from "../../../react-query";
import { MsgUnjail, MsgUpdateParams } from "./tx";
export const createUnjail = (clientResolver?: SigningClientResolver) => buildTx<MsgUnjail>({
  clientResolver,
  typeUrl: MsgUnjail.typeUrl,
  encoders: toEncoders(MsgUnjail),
  converters: toConverters(MsgUnjail),
  deps: [MsgUnjail]
});
export const useUnjail = buildUseMutation<MsgUnjail, Error>({
  builderMutationFn: createUnjail
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams),
  deps: [MsgUpdateParams]
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});