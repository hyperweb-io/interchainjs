import { buildUseVueMutation } from "../../../vue-query";
import { MsgAuthorizeCircuitBreaker, MsgTripCircuitBreaker, MsgResetCircuitBreaker } from "./tx";
import { createAuthorizeCircuitBreaker, createTripCircuitBreaker, createResetCircuitBreaker } from "./tx.rpc.func.ts";
export const useAuthorizeCircuitBreaker = buildUseVueMutation<MsgAuthorizeCircuitBreaker, Error>({
  builderMutationFn: createAuthorizeCircuitBreaker
});
export const useTripCircuitBreaker = buildUseVueMutation<MsgTripCircuitBreaker, Error>({
  builderMutationFn: createTripCircuitBreaker
});
export const useResetCircuitBreaker = buildUseVueMutation<MsgResetCircuitBreaker, Error>({
  builderMutationFn: createResetCircuitBreaker
});