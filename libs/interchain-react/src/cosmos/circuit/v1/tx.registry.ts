import { TelescopeGeneratedType } from "../../../types";
import { MsgAuthorizeCircuitBreaker, MsgTripCircuitBreaker, MsgResetCircuitBreaker } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker", MsgAuthorizeCircuitBreaker], ["/cosmos.circuit.v1.MsgTripCircuitBreaker", MsgTripCircuitBreaker], ["/cosmos.circuit.v1.MsgResetCircuitBreaker", MsgResetCircuitBreaker]];
export const MessageComposer = {
  encoded: {
    authorizeCircuitBreaker(value: MsgAuthorizeCircuitBreaker) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
        value: MsgAuthorizeCircuitBreaker.encode(value).finish()
      };
    },
    tripCircuitBreaker(value: MsgTripCircuitBreaker) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
        value: MsgTripCircuitBreaker.encode(value).finish()
      };
    },
    resetCircuitBreaker(value: MsgResetCircuitBreaker) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
        value: MsgResetCircuitBreaker.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    authorizeCircuitBreaker(value: MsgAuthorizeCircuitBreaker) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
        value
      };
    },
    tripCircuitBreaker(value: MsgTripCircuitBreaker) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
        value
      };
    },
    resetCircuitBreaker(value: MsgResetCircuitBreaker) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
        value
      };
    }
  },
  fromPartial: {
    authorizeCircuitBreaker(value: MsgAuthorizeCircuitBreaker) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
        value: MsgAuthorizeCircuitBreaker.fromPartial(value)
      };
    },
    tripCircuitBreaker(value: MsgTripCircuitBreaker) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
        value: MsgTripCircuitBreaker.fromPartial(value)
      };
    },
    resetCircuitBreaker(value: MsgResetCircuitBreaker) {
      return {
        typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
        value: MsgResetCircuitBreaker.fromPartial(value)
      };
    }
  }
};