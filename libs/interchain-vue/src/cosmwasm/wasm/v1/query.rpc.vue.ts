import { buildUseVueQuery } from "../../../vue-query";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryCodeInfoRequest, QueryCodeInfoResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse, QueryParamsRequest, QueryParamsResponse, QueryContractsByCreatorRequest, QueryContractsByCreatorResponse, QueryWasmLimitsConfigRequest, QueryWasmLimitsConfigResponse, QueryBuildAddressRequest, QueryBuildAddressResponse } from "./query";
import { getContractInfo, getContractHistory, getContractsByCode, getAllContractState, getRawContractState, getSmartContractState, getCode, getCodes, getCodeInfo, getPinnedCodes, getParams, getContractsByCreator, getWasmLimitsConfig, getBuildAddress } from "./query.rpc.func";
export const useGetContractInfo = buildUseVueQuery<QueryContractInfoRequest, QueryContractInfoResponse>({
  builderQueryFn: getContractInfo,
  queryKeyPrefix: "ContractInfoQuery"
});
export const useGetContractHistory = buildUseVueQuery<QueryContractHistoryRequest, QueryContractHistoryResponse>({
  builderQueryFn: getContractHistory,
  queryKeyPrefix: "ContractHistoryQuery"
});
export const useGetContractsByCode = buildUseVueQuery<QueryContractsByCodeRequest, QueryContractsByCodeResponse>({
  builderQueryFn: getContractsByCode,
  queryKeyPrefix: "ContractsByCodeQuery"
});
export const useGetAllContractState = buildUseVueQuery<QueryAllContractStateRequest, QueryAllContractStateResponse>({
  builderQueryFn: getAllContractState,
  queryKeyPrefix: "AllContractStateQuery"
});
export const useGetRawContractState = buildUseVueQuery<QueryRawContractStateRequest, QueryRawContractStateResponse>({
  builderQueryFn: getRawContractState,
  queryKeyPrefix: "RawContractStateQuery"
});
export const useGetSmartContractState = buildUseVueQuery<QuerySmartContractStateRequest, QuerySmartContractStateResponse>({
  builderQueryFn: getSmartContractState,
  queryKeyPrefix: "SmartContractStateQuery"
});
export const useGetCode = buildUseVueQuery<QueryCodeRequest, QueryCodeResponse>({
  builderQueryFn: getCode,
  queryKeyPrefix: "CodeQuery"
});
export const useGetCodes = buildUseVueQuery<QueryCodesRequest, QueryCodesResponse>({
  builderQueryFn: getCodes,
  queryKeyPrefix: "CodesQuery"
});
export const useGetCodeInfo = buildUseVueQuery<QueryCodeInfoRequest, QueryCodeInfoResponse>({
  builderQueryFn: getCodeInfo,
  queryKeyPrefix: "CodeInfoQuery"
});
export const useGetPinnedCodes = buildUseVueQuery<QueryPinnedCodesRequest, QueryPinnedCodesResponse>({
  builderQueryFn: getPinnedCodes,
  queryKeyPrefix: "PinnedCodesQuery"
});
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetContractsByCreator = buildUseVueQuery<QueryContractsByCreatorRequest, QueryContractsByCreatorResponse>({
  builderQueryFn: getContractsByCreator,
  queryKeyPrefix: "ContractsByCreatorQuery"
});
export const useGetWasmLimitsConfig = buildUseVueQuery<QueryWasmLimitsConfigRequest, QueryWasmLimitsConfigResponse>({
  builderQueryFn: getWasmLimitsConfig,
  queryKeyPrefix: "WasmLimitsConfigQuery"
});
export const useGetBuildAddress = buildUseVueQuery<QueryBuildAddressRequest, QueryBuildAddressResponse>({
  builderQueryFn: getBuildAddress,
  queryKeyPrefix: "BuildAddressQuery"
});