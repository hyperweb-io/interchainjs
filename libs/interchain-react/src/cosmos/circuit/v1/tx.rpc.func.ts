import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { buildUseMutation } from "../../../react-query";
import { MsgAuthorizeCircuitBreaker, MsgTripCircuitBreaker, MsgResetCircuitBreaker } from "./tx";
export const createAuthorizeCircuitBreaker = (clientResolver?: SigningClientResolver) => buildTx<MsgAuthorizeCircuitBreaker>({
  clientResolver,
  typeUrl: MsgAuthorizeCircuitBreaker.typeUrl,
  encoders: toEncoders(MsgAuthorizeCircuitBreaker),
  converters: toConverters(MsgAuthorizeCircuitBreaker),
  deps: [MsgAuthorizeCircuitBreaker]
});
export const useAuthorizeCircuitBreaker = buildUseMutation<MsgAuthorizeCircuitBreaker, Error>({
  builderMutationFn: createAuthorizeCircuitBreaker
});
export const createTripCircuitBreaker = (clientResolver?: SigningClientResolver) => buildTx<MsgTripCircuitBreaker>({
  clientResolver,
  typeUrl: MsgTripCircuitBreaker.typeUrl,
  encoders: toEncoders(MsgTripCircuitBreaker),
  converters: toConverters(MsgTripCircuitBreaker),
  deps: [MsgTripCircuitBreaker]
});
export const useTripCircuitBreaker = buildUseMutation<MsgTripCircuitBreaker, Error>({
  builderMutationFn: createTripCircuitBreaker
});
export const createResetCircuitBreaker = (clientResolver?: SigningClientResolver) => buildTx<MsgResetCircuitBreaker>({
  clientResolver,
  typeUrl: MsgResetCircuitBreaker.typeUrl,
  encoders: toEncoders(MsgResetCircuitBreaker),
  converters: toConverters(MsgResetCircuitBreaker),
  deps: [MsgResetCircuitBreaker]
});
export const useResetCircuitBreaker = buildUseMutation<MsgResetCircuitBreaker, Error>({
  builderMutationFn: createResetCircuitBreaker
});