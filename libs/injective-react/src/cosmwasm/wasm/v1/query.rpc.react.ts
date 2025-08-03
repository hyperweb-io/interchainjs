import { buildUseQuery } from "../../../react-query";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryCodeInfoRequest, QueryCodeInfoResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse, QueryParamsRequest, QueryParamsResponse, QueryContractsByCreatorRequest, QueryContractsByCreatorResponse, QueryWasmLimitsConfigRequest, QueryWasmLimitsConfigResponse, QueryBuildAddressRequest, QueryBuildAddressResponse } from "./query";
import { getContractInfo, getContractHistory, getContractsByCode, getAllContractState, getRawContractState, getSmartContractState, getCode, getCodes, getCodeInfo, getPinnedCodes, getParams, getContractsByCreator, getWasmLimitsConfig, getBuildAddress } from "./query.rpc.func";
/**
 * ContractInfo gets the contract meta data
 * @name useGetContractInfo
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.ContractInfo
 */
export const useGetContractInfo = buildUseQuery<QueryContractInfoRequest, QueryContractInfoResponse>({
  builderQueryFn: getContractInfo,
  queryKeyPrefix: "ContractInfoQuery"
});
/**
 * ContractHistory gets the contract code history
 * @name useGetContractHistory
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.ContractHistory
 */
export const useGetContractHistory = buildUseQuery<QueryContractHistoryRequest, QueryContractHistoryResponse>({
  builderQueryFn: getContractHistory,
  queryKeyPrefix: "ContractHistoryQuery"
});
/**
 * ContractsByCode lists all smart contracts for a code id
 * @name useGetContractsByCode
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.ContractsByCode
 */
export const useGetContractsByCode = buildUseQuery<QueryContractsByCodeRequest, QueryContractsByCodeResponse>({
  builderQueryFn: getContractsByCode,
  queryKeyPrefix: "ContractsByCodeQuery"
});
/**
 * AllContractState gets all raw store data for a single contract
 * @name useGetAllContractState
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.AllContractState
 */
export const useGetAllContractState = buildUseQuery<QueryAllContractStateRequest, QueryAllContractStateResponse>({
  builderQueryFn: getAllContractState,
  queryKeyPrefix: "AllContractStateQuery"
});
/**
 * RawContractState gets single key from the raw store data of a contract
 * @name useGetRawContractState
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.RawContractState
 */
export const useGetRawContractState = buildUseQuery<QueryRawContractStateRequest, QueryRawContractStateResponse>({
  builderQueryFn: getRawContractState,
  queryKeyPrefix: "RawContractStateQuery"
});
/**
 * SmartContractState get smart query result from the contract
 * @name useGetSmartContractState
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.SmartContractState
 */
export const useGetSmartContractState = buildUseQuery<QuerySmartContractStateRequest, QuerySmartContractStateResponse>({
  builderQueryFn: getSmartContractState,
  queryKeyPrefix: "SmartContractStateQuery"
});
/**
 * Code gets the binary code and metadata for a single wasm code
 * @name useGetCode
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.Code
 */
export const useGetCode = buildUseQuery<QueryCodeRequest, QueryCodeResponse>({
  builderQueryFn: getCode,
  queryKeyPrefix: "CodeQuery"
});
/**
 * Codes gets the metadata for all stored wasm codes
 * @name useGetCodes
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.Codes
 */
export const useGetCodes = buildUseQuery<QueryCodesRequest, QueryCodesResponse>({
  builderQueryFn: getCodes,
  queryKeyPrefix: "CodesQuery"
});
/**
 * CodeInfo gets the metadata for a single wasm code
 * @name useGetCodeInfo
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.CodeInfo
 */
export const useGetCodeInfo = buildUseQuery<QueryCodeInfoRequest, QueryCodeInfoResponse>({
  builderQueryFn: getCodeInfo,
  queryKeyPrefix: "CodeInfoQuery"
});
/**
 * PinnedCodes gets the pinned code ids
 * @name useGetPinnedCodes
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.PinnedCodes
 */
export const useGetPinnedCodes = buildUseQuery<QueryPinnedCodesRequest, QueryPinnedCodesResponse>({
  builderQueryFn: getPinnedCodes,
  queryKeyPrefix: "PinnedCodesQuery"
});
/**
 * Params gets the module params
 * @name useGetParams
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.Params
 */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * ContractsByCreator gets the contracts by creator
 * @name useGetContractsByCreator
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.ContractsByCreator
 */
export const useGetContractsByCreator = buildUseQuery<QueryContractsByCreatorRequest, QueryContractsByCreatorResponse>({
  builderQueryFn: getContractsByCreator,
  queryKeyPrefix: "ContractsByCreatorQuery"
});
/**
 * WasmLimitsConfig gets the configured limits for static validation of Wasm
 * files, encoded in JSON.
 * @name useGetWasmLimitsConfig
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.WasmLimitsConfig
 */
export const useGetWasmLimitsConfig = buildUseQuery<QueryWasmLimitsConfigRequest, QueryWasmLimitsConfigResponse>({
  builderQueryFn: getWasmLimitsConfig,
  queryKeyPrefix: "WasmLimitsConfigQuery"
});
/**
 * BuildAddress builds a contract address
 * @name useGetBuildAddress
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.BuildAddress
 */
export const useGetBuildAddress = buildUseQuery<QueryBuildAddressRequest, QueryBuildAddressResponse>({
  builderQueryFn: getBuildAddress,
  queryKeyPrefix: "BuildAddressQuery"
});