import { buildTx } from "../../../helper-func-types";
import { MsgAuthorizeCircuitBreaker, MsgTripCircuitBreaker, MsgResetCircuitBreaker } from "./tx";
/* AuthorizeCircuitBreaker allows a super-admin to grant (or revoke) another
 account's circuit breaker permissions. */
export const authorizeCircuitBreaker = buildTx<MsgAuthorizeCircuitBreaker>({
  msg: MsgAuthorizeCircuitBreaker
});
/* TripCircuitBreaker pauses processing of Msg's in the state machine. */
export const tripCircuitBreaker = buildTx<MsgTripCircuitBreaker>({
  msg: MsgTripCircuitBreaker
});
/* ResetCircuitBreaker resumes processing of Msg's in the state machine that
 have been been paused using TripCircuitBreaker. */
export const resetCircuitBreaker = buildTx<MsgResetCircuitBreaker>({
  msg: MsgResetCircuitBreaker
});