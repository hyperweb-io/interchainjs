import { buildTx, SigningClientResolver } from "../../../../helper-func-types";
import { buildUseMutation } from "../../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgTransfer, MsgUpdateParams } from "./tx";
export const createTransfer = (getSigningClient: SigningClientResolver) => buildTx<MsgTransfer>({
  getSigningClient: getSigningClient,
  typeUrl: MsgTransfer.typeUrl,
  encoders: toEncoders(MsgTransfer),
  converters: toConverters(MsgTransfer)
});
export const useTransfer = buildUseMutation<MsgTransfer, Error>({
  builderMutationFn: createTransfer
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