import { buildUseVueQuery } from "../../../vue-query";
import { QueryWasmxParamsRequest, QueryWasmxParamsResponse, QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
import { getWasmxParams, getContractRegistrationInfo, getWasmxModuleState } from "./query.rpc.func";
export const useGetWasmxParams = buildUseVueQuery<QueryWasmxParamsRequest, QueryWasmxParamsResponse>({
  builderQueryFn: getWasmxParams,
  queryKeyPrefix: "WasmxParamsQuery"
});
export const useGetContractRegistrationInfo = buildUseVueQuery<QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse>({
  builderQueryFn: getContractRegistrationInfo,
  queryKeyPrefix: "ContractRegistrationInfoQuery"
});
export const useGetWasmxModuleState = buildUseVueQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getWasmxModuleState,
  queryKeyPrefix: "WasmxModuleStateQuery"
});