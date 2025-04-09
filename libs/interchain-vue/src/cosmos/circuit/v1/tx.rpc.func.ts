import { buildTx } from "../../../helper-func-types";
import { MsgAuthorizeCircuitBreaker, MsgTripCircuitBreaker, MsgResetCircuitBreaker } from "./tx";
export const authorizeCircuitBreaker = buildTx<MsgAuthorizeCircuitBreaker>({
  msg: MsgAuthorizeCircuitBreaker
});
export const tripCircuitBreaker = buildTx<MsgTripCircuitBreaker>({
  msg: MsgTripCircuitBreaker
});
export const resetCircuitBreaker = buildTx<MsgResetCircuitBreaker>({
  msg: MsgResetCircuitBreaker
});