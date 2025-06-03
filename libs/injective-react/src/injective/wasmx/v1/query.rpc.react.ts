import { buildUseQuery } from "../../../react-query";
import { QueryWasmxParamsRequest, QueryWasmxParamsResponse, QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
import { getWasmxParams, getContractRegistrationInfo, getWasmxModuleState } from "./query.rpc.func";
/* Retrieves wasmx params */
export const useGetWasmxParams = buildUseQuery<QueryWasmxParamsRequest, QueryWasmxParamsResponse>({
  builderQueryFn: getWasmxParams,
  queryKeyPrefix: "WasmxParamsQuery"
});
/* Retrieves contract registration info */
export const useGetContractRegistrationInfo = buildUseQuery<QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse>({
  builderQueryFn: getContractRegistrationInfo,
  queryKeyPrefix: "ContractRegistrationInfoQuery"
});
/* Retrieves the entire wasmx module's state */
export const useGetWasmxModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getWasmxModuleState,
  queryKeyPrefix: "WasmxModuleStateQuery"
});