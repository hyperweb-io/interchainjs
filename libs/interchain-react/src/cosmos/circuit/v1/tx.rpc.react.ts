import { buildUseMutation } from "../../../react-query";
import { MsgAuthorizeCircuitBreaker, MsgTripCircuitBreaker, MsgResetCircuitBreaker } from "./tx";
import { createAuthorizeCircuitBreaker, createTripCircuitBreaker, createResetCircuitBreaker } from "./tx.rpc.func";
export const useAuthorizeCircuitBreaker = buildUseMutation<MsgAuthorizeCircuitBreaker, Error>({
  builderMutationFn: createAuthorizeCircuitBreaker
});
export const useTripCircuitBreaker = buildUseMutation<MsgTripCircuitBreaker, Error>({
  builderMutationFn: createTripCircuitBreaker
});
export const useResetCircuitBreaker = buildUseMutation<MsgResetCircuitBreaker, Error>({
  builderMutationFn: createResetCircuitBreaker
});