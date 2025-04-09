import { buildUseVueMutation } from "../../../vue-query";
import { MsgAuthorizeCircuitBreaker, MsgTripCircuitBreaker, MsgResetCircuitBreaker } from "./tx";
import { authorizeCircuitBreaker, tripCircuitBreaker, resetCircuitBreaker } from "./tx.rpc.func";
export const useAuthorizeCircuitBreaker = buildUseVueMutation<MsgAuthorizeCircuitBreaker, Error>({
  builderMutationFn: authorizeCircuitBreaker
});
export const useTripCircuitBreaker = buildUseVueMutation<MsgTripCircuitBreaker, Error>({
  builderMutationFn: tripCircuitBreaker
});
export const useResetCircuitBreaker = buildUseVueMutation<MsgResetCircuitBreaker, Error>({
  builderMutationFn: resetCircuitBreaker
});