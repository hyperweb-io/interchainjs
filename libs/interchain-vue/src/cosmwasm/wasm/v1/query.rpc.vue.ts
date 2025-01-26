import { buildUseVueQuery } from "../../../vue-query";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryCodeInfoRequest, QueryCodeInfoResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse, QueryParamsRequest, QueryParamsResponse, QueryContractsByCreatorRequest, QueryContractsByCreatorResponse, QueryWasmLimitsConfigRequest, QueryWasmLimitsConfigResponse, QueryBuildAddressRequest, QueryBuildAddressResponse } from "./query";
import { createGetContractInfo, createGetContractHistory, createGetContractsByCode, createGetAllContractState, createGetRawContractState, createGetSmartContractState, createGetCode, createGetCodes, createGetCodeInfo, createGetPinnedCodes, createGetParams, createGetContractsByCreator, createGetWasmLimitsConfig, createGetBuildAddress } from "./query.rpc.func.ts";
export const useGetContractInfo = buildUseVueQuery<QueryContractInfoRequest, QueryContractInfoResponse>({
  builderQueryFn: createGetContractInfo,
  queryKeyPrefix: "ContractInfoQuery"
});
export const useGetContractHistory = buildUseVueQuery<QueryContractHistoryRequest, QueryContractHistoryResponse>({
  builderQueryFn: createGetContractHistory,
  queryKeyPrefix: "ContractHistoryQuery"
});
export const useGetContractsByCode = buildUseVueQuery<QueryContractsByCodeRequest, QueryContractsByCodeResponse>({
  builderQueryFn: createGetContractsByCode,
  queryKeyPrefix: "ContractsByCodeQuery"
});
export const useGetAllContractState = buildUseVueQuery<QueryAllContractStateRequest, QueryAllContractStateResponse>({
  builderQueryFn: createGetAllContractState,
  queryKeyPrefix: "AllContractStateQuery"
});
export const useGetRawContractState = buildUseVueQuery<QueryRawContractStateRequest, QueryRawContractStateResponse>({
  builderQueryFn: createGetRawContractState,
  queryKeyPrefix: "RawContractStateQuery"
});
export const useGetSmartContractState = buildUseVueQuery<QuerySmartContractStateRequest, QuerySmartContractStateResponse>({
  builderQueryFn: createGetSmartContractState,
  queryKeyPrefix: "SmartContractStateQuery"
});
export const useGetCode = buildUseVueQuery<QueryCodeRequest, QueryCodeResponse>({
  builderQueryFn: createGetCode,
  queryKeyPrefix: "CodeQuery"
});
export const useGetCodes = buildUseVueQuery<QueryCodesRequest, QueryCodesResponse>({
  builderQueryFn: createGetCodes,
  queryKeyPrefix: "CodesQuery"
});
export const useGetCodeInfo = buildUseVueQuery<QueryCodeInfoRequest, QueryCodeInfoResponse>({
  builderQueryFn: createGetCodeInfo,
  queryKeyPrefix: "CodeInfoQuery"
});
export const useGetPinnedCodes = buildUseVueQuery<QueryPinnedCodesRequest, QueryPinnedCodesResponse>({
  builderQueryFn: createGetPinnedCodes,
  queryKeyPrefix: "PinnedCodesQuery"
});
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetContractsByCreator = buildUseVueQuery<QueryContractsByCreatorRequest, QueryContractsByCreatorResponse>({
  builderQueryFn: createGetContractsByCreator,
  queryKeyPrefix: "ContractsByCreatorQuery"
});
export const useGetWasmLimitsConfig = buildUseVueQuery<QueryWasmLimitsConfigRequest, QueryWasmLimitsConfigResponse>({
  builderQueryFn: createGetWasmLimitsConfig,
  queryKeyPrefix: "WasmLimitsConfigQuery"
});
export const useGetBuildAddress = buildUseVueQuery<QueryBuildAddressRequest, QueryBuildAddressResponse>({
  builderQueryFn: createGetBuildAddress,
  queryKeyPrefix: "BuildAddressQuery"
});