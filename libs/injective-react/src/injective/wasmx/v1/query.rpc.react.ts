import { buildUseQuery } from "../../../react-query";
import { QueryWasmxParamsRequest, QueryWasmxParamsResponse, QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
import { getWasmxParams, getContractRegistrationInfo, getWasmxModuleState } from "./query.rpc.func";
export const useGetWasmxParams = buildUseQuery<QueryWasmxParamsRequest, QueryWasmxParamsResponse>({
  builderQueryFn: getWasmxParams,
  queryKeyPrefix: "WasmxParamsQuery"
});
export const useGetContractRegistrationInfo = buildUseQuery<QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse>({
  builderQueryFn: getContractRegistrationInfo,
  queryKeyPrefix: "ContractRegistrationInfoQuery"
});
export const useGetWasmxModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getWasmxModuleState,
  queryKeyPrefix: "WasmxModuleStateQuery"
});