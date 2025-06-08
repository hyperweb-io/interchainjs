import { buildUseMutation } from "../../../react-query";
import { MsgAuthorizeCircuitBreaker, MsgTripCircuitBreaker, MsgResetCircuitBreaker } from "./tx";
import { authorizeCircuitBreaker, tripCircuitBreaker, resetCircuitBreaker } from "./tx.rpc.func";
/**
 * AuthorizeCircuitBreaker allows a super-admin to grant (or revoke) another
 * account's circuit breaker permissions.
 * @name useAuthorizeCircuitBreaker
 * @package cosmos.circuit.v1
 * @see proto service: cosmos.circuit.v1.AuthorizeCircuitBreaker
 */
export const useAuthorizeCircuitBreaker = buildUseMutation<MsgAuthorizeCircuitBreaker, Error>({
  builderMutationFn: authorizeCircuitBreaker
});
/**
 * TripCircuitBreaker pauses processing of Msg's in the state machine.
 * @name useTripCircuitBreaker
 * @package cosmos.circuit.v1
 * @see proto service: cosmos.circuit.v1.TripCircuitBreaker
 */
export const useTripCircuitBreaker = buildUseMutation<MsgTripCircuitBreaker, Error>({
  builderMutationFn: tripCircuitBreaker
});
/**
 * ResetCircuitBreaker resumes processing of Msg's in the state machine that
 * have been been paused using TripCircuitBreaker.
 * @name useResetCircuitBreaker
 * @package cosmos.circuit.v1
 * @see proto service: cosmos.circuit.v1.ResetCircuitBreaker
 */
export const useResetCircuitBreaker = buildUseMutation<MsgResetCircuitBreaker, Error>({
  builderMutationFn: resetCircuitBreaker
});