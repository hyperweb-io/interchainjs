import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgAuthorizeCircuitBreaker, MsgTripCircuitBreaker, MsgResetCircuitBreaker } from "./tx";
export const createAuthorizeCircuitBreaker = (clientResolver?: SigningClientResolver) => buildTx<MsgAuthorizeCircuitBreaker>({
  clientResolver,
  typeUrl: MsgAuthorizeCircuitBreaker.typeUrl,
  encoders: toEncoders(MsgAuthorizeCircuitBreaker),
  converters: toConverters(MsgAuthorizeCircuitBreaker)
});
export const createTripCircuitBreaker = (clientResolver?: SigningClientResolver) => buildTx<MsgTripCircuitBreaker>({
  clientResolver,
  typeUrl: MsgTripCircuitBreaker.typeUrl,
  encoders: toEncoders(MsgTripCircuitBreaker),
  converters: toConverters(MsgTripCircuitBreaker)
});
export const createResetCircuitBreaker = (clientResolver?: SigningClientResolver) => buildTx<MsgResetCircuitBreaker>({
  clientResolver,
  typeUrl: MsgResetCircuitBreaker.typeUrl,
  encoders: toEncoders(MsgResetCircuitBreaker),
  converters: toConverters(MsgResetCircuitBreaker)
});