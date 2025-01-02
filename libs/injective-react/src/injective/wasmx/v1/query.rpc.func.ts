import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryWasmxParamsRequest, QueryWasmxParamsResponse, QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
export const createGetWasmxParams = (clientResolver?: RpcResolver) => buildQuery<QueryWasmxParamsRequest, QueryWasmxParamsResponse>({
  encode: QueryWasmxParamsRequest.encode,
  decode: QueryWasmxParamsResponse.decode,
  service: "injective.wasmx.v1.Query",
  method: "WasmxParams",
  clientResolver,
  deps: [QueryWasmxParamsRequest, QueryWasmxParamsResponse]
});
export const useGetWasmxParams = buildUseQuery<QueryWasmxParamsRequest, QueryWasmxParamsResponse>({
  builderQueryFn: createGetWasmxParams,
  queryKeyPrefix: "WasmxParamsQuery"
});
export const createGetContractRegistrationInfo = (clientResolver?: RpcResolver) => buildQuery<QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse>({
  encode: QueryContractRegistrationInfoRequest.encode,
  decode: QueryContractRegistrationInfoResponse.decode,
  service: "injective.wasmx.v1.Query",
  method: "ContractRegistrationInfo",
  clientResolver,
  deps: [QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse]
});
export const useGetContractRegistrationInfo = buildUseQuery<QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse>({
  builderQueryFn: createGetContractRegistrationInfo,
  queryKeyPrefix: "ContractRegistrationInfoQuery"
});
export const createGetWasmxModuleState = (clientResolver?: RpcResolver) => buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.wasmx.v1.Query",
  method: "WasmxModuleState",
  clientResolver,
  deps: [QueryModuleStateRequest, QueryModuleStateResponse]
});
export const useGetWasmxModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: createGetWasmxModuleState,
  queryKeyPrefix: "WasmxModuleStateQuery"
});