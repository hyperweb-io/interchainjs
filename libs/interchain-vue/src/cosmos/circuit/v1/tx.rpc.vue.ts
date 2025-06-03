import { buildUseVueMutation } from "../../../vue-query";
import { MsgAuthorizeCircuitBreaker, MsgTripCircuitBreaker, MsgResetCircuitBreaker } from "./tx";
import { authorizeCircuitBreaker, tripCircuitBreaker, resetCircuitBreaker } from "./tx.rpc.func";
/* AuthorizeCircuitBreaker allows a super-admin to grant (or revoke) another
 account's circuit breaker permissions. */
export const useAuthorizeCircuitBreaker = buildUseVueMutation<MsgAuthorizeCircuitBreaker, Error>({
  builderMutationFn: authorizeCircuitBreaker
});
/* TripCircuitBreaker pauses processing of Msg's in the state machine. */
export const useTripCircuitBreaker = buildUseVueMutation<MsgTripCircuitBreaker, Error>({
  builderMutationFn: tripCircuitBreaker
});
/* ResetCircuitBreaker resumes processing of Msg's in the state machine that
 have been been paused using TripCircuitBreaker. */
export const useResetCircuitBreaker = buildUseVueMutation<MsgResetCircuitBreaker, Error>({
  builderMutationFn: resetCircuitBreaker
});