import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { buildUseMutation } from "../../../react-query";
import { MsgGrantAllowance, MsgRevokeAllowance, MsgPruneAllowances } from "./tx";
export const createGrantAllowance = (clientResolver?: SigningClientResolver) => buildTx<MsgGrantAllowance>({
  clientResolver,
  typeUrl: MsgGrantAllowance.typeUrl,
  encoders: toEncoders(MsgGrantAllowance),
  converters: toConverters(MsgGrantAllowance),
  deps: [MsgGrantAllowance]
});
export const useGrantAllowance = buildUseMutation<MsgGrantAllowance, Error>({
  builderMutationFn: createGrantAllowance
});
export const createRevokeAllowance = (clientResolver?: SigningClientResolver) => buildTx<MsgRevokeAllowance>({
  clientResolver,
  typeUrl: MsgRevokeAllowance.typeUrl,
  encoders: toEncoders(MsgRevokeAllowance),
  converters: toConverters(MsgRevokeAllowance),
  deps: [MsgRevokeAllowance]
});
export const useRevokeAllowance = buildUseMutation<MsgRevokeAllowance, Error>({
  builderMutationFn: createRevokeAllowance
});
export const createPruneAllowances = (clientResolver?: SigningClientResolver) => buildTx<MsgPruneAllowances>({
  clientResolver,
  typeUrl: MsgPruneAllowances.typeUrl,
  encoders: toEncoders(MsgPruneAllowances),
  converters: toConverters(MsgPruneAllowances),
  deps: [MsgPruneAllowances]
});
export const usePruneAllowances = buildUseMutation<MsgPruneAllowances, Error>({
  builderMutationFn: createPruneAllowances
});