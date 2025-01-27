import { buildUseVueQuery } from "../../../vue-query";
import { QueryWasmxParamsRequest, QueryWasmxParamsResponse, QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
import { createGetWasmxParams, createGetContractRegistrationInfo, createGetWasmxModuleState } from "./query.rpc.func";
export const useGetWasmxParams = buildUseVueQuery<QueryWasmxParamsRequest, QueryWasmxParamsResponse>({
  builderQueryFn: createGetWasmxParams,
  queryKeyPrefix: "WasmxParamsQuery"
});
export const useGetContractRegistrationInfo = buildUseVueQuery<QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse>({
  builderQueryFn: createGetContractRegistrationInfo,
  queryKeyPrefix: "ContractRegistrationInfoQuery"
});
export const useGetWasmxModuleState = buildUseVueQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: createGetWasmxModuleState,
  queryKeyPrefix: "WasmxModuleStateQuery"
});