import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgAuthorizeCircuitBreaker, MsgAuthorizeCircuitBreakerResponse, MsgTripCircuitBreaker, MsgTripCircuitBreakerResponse, MsgResetCircuitBreaker, MsgResetCircuitBreakerResponse } from "./tx";
/** Msg defines the circuit Msg service. */
export interface Msg {
  /**
   * AuthorizeCircuitBreaker allows a super-admin to grant (or revoke) another
   * account's circuit breaker permissions.
   */
  authorizeCircuitBreaker(request: MsgAuthorizeCircuitBreaker): Promise<MsgAuthorizeCircuitBreakerResponse>;
  /** TripCircuitBreaker pauses processing of Msg's in the state machine. */
  tripCircuitBreaker(request: MsgTripCircuitBreaker): Promise<MsgTripCircuitBreakerResponse>;
  /**
   * ResetCircuitBreaker resumes processing of Msg's in the state machine that
   * have been been paused using TripCircuitBreaker.
   */
  resetCircuitBreaker(request: MsgResetCircuitBreaker): Promise<MsgResetCircuitBreakerResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* AuthorizeCircuitBreaker allows a super-admin to grant (or revoke) another
   account's circuit breaker permissions. */
  authorizeCircuitBreaker = async (request: MsgAuthorizeCircuitBreaker): Promise<MsgAuthorizeCircuitBreakerResponse> => {
    const data = MsgAuthorizeCircuitBreaker.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Msg", "AuthorizeCircuitBreaker", data);
    return promise.then(data => MsgAuthorizeCircuitBreakerResponse.decode(new BinaryReader(data)));
  };
  /* TripCircuitBreaker pauses processing of Msg's in the state machine. */
  tripCircuitBreaker = async (request: MsgTripCircuitBreaker): Promise<MsgTripCircuitBreakerResponse> => {
    const data = MsgTripCircuitBreaker.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Msg", "TripCircuitBreaker", data);
    return promise.then(data => MsgTripCircuitBreakerResponse.decode(new BinaryReader(data)));
  };
  /* ResetCircuitBreaker resumes processing of Msg's in the state machine that
   have been been paused using TripCircuitBreaker. */
  resetCircuitBreaker = async (request: MsgResetCircuitBreaker): Promise<MsgResetCircuitBreakerResponse> => {
    const data = MsgResetCircuitBreaker.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Msg", "ResetCircuitBreaker", data);
    return promise.then(data => MsgResetCircuitBreakerResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};