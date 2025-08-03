import { buildQuery } from "../../../helper-func-types";
import { QueryWasmxParamsRequest, QueryWasmxParamsResponse, QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/**
 * Retrieves wasmx params
 * @name getWasmxParams
 * @package injective.wasmx.v1
 * @see proto service: injective.wasmx.v1.WasmxParams
 */
export const getWasmxParams = buildQuery<QueryWasmxParamsRequest, QueryWasmxParamsResponse>({
  encode: QueryWasmxParamsRequest.encode,
  decode: QueryWasmxParamsResponse.decode,
  service: "injective.wasmx.v1.Query",
  method: "WasmxParams",
  deps: [QueryWasmxParamsRequest, QueryWasmxParamsResponse]
});
/**
 * Retrieves contract registration info
 * @name getContractRegistrationInfo
 * @package injective.wasmx.v1
 * @see proto service: injective.wasmx.v1.ContractRegistrationInfo
 */
export const getContractRegistrationInfo = buildQuery<QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse>({
  encode: QueryContractRegistrationInfoRequest.encode,
  decode: QueryContractRegistrationInfoResponse.decode,
  service: "injective.wasmx.v1.Query",
  method: "ContractRegistrationInfo",
  deps: [QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse]
});
/**
 * Retrieves the entire wasmx module's state
 * @name getWasmxModuleState
 * @package injective.wasmx.v1
 * @see proto service: injective.wasmx.v1.WasmxModuleState
 */
export const getWasmxModuleState = buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.wasmx.v1.Query",
  method: "WasmxModuleState",
  deps: [QueryModuleStateRequest, QueryModuleStateResponse]
});