import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgGrantAllowance, MsgRevokeAllowance, MsgPruneAllowances } from "./tx";
export const createGrantAllowance = (getSigningClient: SigningClientResolver) => buildTx<MsgGrantAllowance>({
  getSigningClient: getSigningClient,
  typeUrl: MsgGrantAllowance.typeUrl,
  encoders: toEncoders(MsgGrantAllowance),
  converters: toConverters(MsgGrantAllowance)
});
export const useGrantAllowance = buildUseMutation<MsgGrantAllowance, Error>({
  builderMutationFn: createGrantAllowance
});
export const createRevokeAllowance = (getSigningClient: SigningClientResolver) => buildTx<MsgRevokeAllowance>({
  getSigningClient: getSigningClient,
  typeUrl: MsgRevokeAllowance.typeUrl,
  encoders: toEncoders(MsgRevokeAllowance),
  converters: toConverters(MsgRevokeAllowance)
});
export const useRevokeAllowance = buildUseMutation<MsgRevokeAllowance, Error>({
  builderMutationFn: createRevokeAllowance
});
export const createPruneAllowances = (getSigningClient: SigningClientResolver) => buildTx<MsgPruneAllowances>({
  getSigningClient: getSigningClient,
  typeUrl: MsgPruneAllowances.typeUrl,
  encoders: toEncoders(MsgPruneAllowances),
  converters: toConverters(MsgPruneAllowances)
});
export const usePruneAllowances = buildUseMutation<MsgPruneAllowances, Error>({
  builderMutationFn: createPruneAllowances
});