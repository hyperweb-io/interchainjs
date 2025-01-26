import { buildUseQuery } from "../../../react-query";
import { QueryWasmxParamsRequest, QueryWasmxParamsResponse, QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
import { createGetWasmxParams, createGetContractRegistrationInfo, createGetWasmxModuleState } from "./query.rpc.func.ts";
export const useGetWasmxParams = buildUseQuery<QueryWasmxParamsRequest, QueryWasmxParamsResponse>({
  builderQueryFn: createGetWasmxParams,
  queryKeyPrefix: "WasmxParamsQuery"
});
export const useGetContractRegistrationInfo = buildUseQuery<QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse>({
  builderQueryFn: createGetContractRegistrationInfo,
  queryKeyPrefix: "ContractRegistrationInfoQuery"
});
export const useGetWasmxModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: createGetWasmxModuleState,
  queryKeyPrefix: "WasmxModuleStateQuery"
});