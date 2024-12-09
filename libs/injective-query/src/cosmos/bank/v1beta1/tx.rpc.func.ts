import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSend, MsgMultiSend, MsgUpdateParams, MsgSetSendEnabled } from "./tx";
export const createSend = (clientResolver?: SigningClientResolver) => buildTx<MsgSend>({
  clientResolver,
  typeUrl: MsgSend.typeUrl,
  encoders: toEncoders(MsgSend),
  converters: toConverters(MsgSend)
});
export const useSend = buildUseMutation<MsgSend, Error>({
  builderMutationFn: createSend
});
export const createMultiSend = (clientResolver?: SigningClientResolver) => buildTx<MsgMultiSend>({
  clientResolver,
  typeUrl: MsgMultiSend.typeUrl,
  encoders: toEncoders(MsgMultiSend),
  converters: toConverters(MsgMultiSend)
});
export const useMultiSend = buildUseMutation<MsgMultiSend, Error>({
  builderMutationFn: createMultiSend
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
export const createSetSendEnabled = (clientResolver?: SigningClientResolver) => buildTx<MsgSetSendEnabled>({
  clientResolver,
  typeUrl: MsgSetSendEnabled.typeUrl,
  encoders: toEncoders(MsgSetSendEnabled),
  converters: toConverters(MsgSetSendEnabled)
});
export const useSetSendEnabled = buildUseMutation<MsgSetSendEnabled, Error>({
  builderMutationFn: createSetSendEnabled
});