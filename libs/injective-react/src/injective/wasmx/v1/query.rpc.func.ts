import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryWasmxParamsRequest, QueryWasmxParamsResponse, QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
export const createGetWasmxParams = (clientResolver?: RpcResolver) => buildQuery<QueryWasmxParamsRequest, QueryWasmxParamsResponse>({
  encode: QueryWasmxParamsRequest.encode,
  decode: QueryWasmxParamsResponse.decode,
  service: "injective.wasmx.v1.Query",
  method: "WasmxParams",
  clientResolver,
  deps: [QueryWasmxParamsRequest, QueryWasmxParamsResponse]
});
export const createGetContractRegistrationInfo = (clientResolver?: RpcResolver) => buildQuery<QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse>({
  encode: QueryContractRegistrationInfoRequest.encode,
  decode: QueryContractRegistrationInfoResponse.decode,
  service: "injective.wasmx.v1.Query",
  method: "ContractRegistrationInfo",
  clientResolver,
  deps: [QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse]
});
export const createGetWasmxModuleState = (clientResolver?: RpcResolver) => buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.wasmx.v1.Query",
  method: "WasmxModuleState",
  clientResolver,
  deps: [QueryModuleStateRequest, QueryModuleStateResponse]
});