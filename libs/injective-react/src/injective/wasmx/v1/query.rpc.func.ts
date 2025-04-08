import { buildQuery } from "../../../helper-func-types";
import { QueryWasmxParamsRequest, QueryWasmxParamsResponse, QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
export const getWasmxParams = buildQuery<QueryWasmxParamsRequest, QueryWasmxParamsResponse>({
  encode: QueryWasmxParamsRequest.encode,
  decode: QueryWasmxParamsResponse.decode,
  service: "injective.wasmx.v1.Query",
  method: "WasmxParams",
  deps: [QueryWasmxParamsRequest, QueryWasmxParamsResponse]
});
export const getContractRegistrationInfo = buildQuery<QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse>({
  encode: QueryContractRegistrationInfoRequest.encode,
  decode: QueryContractRegistrationInfoResponse.decode,
  service: "injective.wasmx.v1.Query",
  method: "ContractRegistrationInfo",
  deps: [QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse]
});
export const getWasmxModuleState = buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.wasmx.v1.Query",
  method: "WasmxModuleState",
  deps: [QueryModuleStateRequest, QueryModuleStateResponse]
});