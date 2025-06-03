import { buildUseVueQuery } from "../../../vue-query";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryCodeInfoRequest, QueryCodeInfoResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse, QueryParamsRequest, QueryParamsResponse, QueryContractsByCreatorRequest, QueryContractsByCreatorResponse, QueryWasmLimitsConfigRequest, QueryWasmLimitsConfigResponse, QueryBuildAddressRequest, QueryBuildAddressResponse } from "./query";
import { getContractInfo, getContractHistory, getContractsByCode, getAllContractState, getRawContractState, getSmartContractState, getCode, getCodes, getCodeInfo, getPinnedCodes, getParams, getContractsByCreator, getWasmLimitsConfig, getBuildAddress } from "./query.rpc.func";
/* ContractInfo gets the contract meta data */
export const useGetContractInfo = buildUseVueQuery<QueryContractInfoRequest, QueryContractInfoResponse>({
  builderQueryFn: getContractInfo,
  queryKeyPrefix: "ContractInfoQuery"
});
/* ContractHistory gets the contract code history */
export const useGetContractHistory = buildUseVueQuery<QueryContractHistoryRequest, QueryContractHistoryResponse>({
  builderQueryFn: getContractHistory,
  queryKeyPrefix: "ContractHistoryQuery"
});
/* ContractsByCode lists all smart contracts for a code id */
export const useGetContractsByCode = buildUseVueQuery<QueryContractsByCodeRequest, QueryContractsByCodeResponse>({
  builderQueryFn: getContractsByCode,
  queryKeyPrefix: "ContractsByCodeQuery"
});
/* AllContractState gets all raw store data for a single contract */
export const useGetAllContractState = buildUseVueQuery<QueryAllContractStateRequest, QueryAllContractStateResponse>({
  builderQueryFn: getAllContractState,
  queryKeyPrefix: "AllContractStateQuery"
});
/* RawContractState gets single key from the raw store data of a contract */
export const useGetRawContractState = buildUseVueQuery<QueryRawContractStateRequest, QueryRawContractStateResponse>({
  builderQueryFn: getRawContractState,
  queryKeyPrefix: "RawContractStateQuery"
});
/* SmartContractState get smart query result from the contract */
export const useGetSmartContractState = buildUseVueQuery<QuerySmartContractStateRequest, QuerySmartContractStateResponse>({
  builderQueryFn: getSmartContractState,
  queryKeyPrefix: "SmartContractStateQuery"
});
/* Code gets the binary code and metadata for a single wasm code */
export const useGetCode = buildUseVueQuery<QueryCodeRequest, QueryCodeResponse>({
  builderQueryFn: getCode,
  queryKeyPrefix: "CodeQuery"
});
/* Codes gets the metadata for all stored wasm codes */
export const useGetCodes = buildUseVueQuery<QueryCodesRequest, QueryCodesResponse>({
  builderQueryFn: getCodes,
  queryKeyPrefix: "CodesQuery"
});
/* CodeInfo gets the metadata for a single wasm code */
export const useGetCodeInfo = buildUseVueQuery<QueryCodeInfoRequest, QueryCodeInfoResponse>({
  builderQueryFn: getCodeInfo,
  queryKeyPrefix: "CodeInfoQuery"
});
/* PinnedCodes gets the pinned code ids */
export const useGetPinnedCodes = buildUseVueQuery<QueryPinnedCodesRequest, QueryPinnedCodesResponse>({
  builderQueryFn: getPinnedCodes,
  queryKeyPrefix: "PinnedCodesQuery"
});
/* Params gets the module params */
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/* ContractsByCreator gets the contracts by creator */
export const useGetContractsByCreator = buildUseVueQuery<QueryContractsByCreatorRequest, QueryContractsByCreatorResponse>({
  builderQueryFn: getContractsByCreator,
  queryKeyPrefix: "ContractsByCreatorQuery"
});
/* WasmLimitsConfig gets the configured limits for static validation of Wasm
 files, encoded in JSON. */
export const useGetWasmLimitsConfig = buildUseVueQuery<QueryWasmLimitsConfigRequest, QueryWasmLimitsConfigResponse>({
  builderQueryFn: getWasmLimitsConfig,
  queryKeyPrefix: "WasmLimitsConfigQuery"
});
/* BuildAddress builds a contract address */
export const useGetBuildAddress = buildUseVueQuery<QueryBuildAddressRequest, QueryBuildAddressResponse>({
  builderQueryFn: getBuildAddress,
  queryKeyPrefix: "BuildAddressQuery"
});