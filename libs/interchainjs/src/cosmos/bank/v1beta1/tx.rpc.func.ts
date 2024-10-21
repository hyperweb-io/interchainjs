import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSend, MsgMultiSend, MsgUpdateParams, MsgSetSendEnabled } from "./tx";
export const createSend = (getSigningClient: SigningClientResolver) => buildTx<MsgSend>({
  getSigningClient: getSigningClient,
  typeUrl: MsgSend.typeUrl,
  encoders: toEncoders(MsgSend),
  converters: toConverters(MsgSend)
});
export const useSend = buildUseMutation<MsgSend, Error>({
  builderMutationFn: createSend
});
export const createMultiSend = (getSigningClient: SigningClientResolver) => buildTx<MsgMultiSend>({
  getSigningClient: getSigningClient,
  typeUrl: MsgMultiSend.typeUrl,
  encoders: toEncoders(MsgMultiSend),
  converters: toConverters(MsgMultiSend)
});
export const useMultiSend = buildUseMutation<MsgMultiSend, Error>({
  builderMutationFn: createMultiSend
});
export const createUpdateParams = (getSigningClient: SigningClientResolver) => buildTx<MsgUpdateParams>({
  getSigningClient: getSigningClient,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams)
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});
export const createSetSendEnabled = (getSigningClient: SigningClientResolver) => buildTx<MsgSetSendEnabled>({
  getSigningClient: getSigningClient,
  typeUrl: MsgSetSendEnabled.typeUrl,
  encoders: toEncoders(MsgSetSendEnabled),
  converters: toConverters(MsgSetSendEnabled)
});
export const useSetSendEnabled = buildUseMutation<MsgSetSendEnabled, Error>({
  builderMutationFn: createSetSendEnabled
});