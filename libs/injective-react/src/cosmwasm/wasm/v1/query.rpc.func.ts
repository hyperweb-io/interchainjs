import { buildQuery } from "../../../helper-func-types";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryCodeInfoRequest, QueryCodeInfoResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse, QueryParamsRequest, QueryParamsResponse, QueryContractsByCreatorRequest, QueryContractsByCreatorResponse, QueryWasmLimitsConfigRequest, QueryWasmLimitsConfigResponse, QueryBuildAddressRequest, QueryBuildAddressResponse } from "./query";
/**
 * ContractInfo gets the contract meta data
 * @name getContractInfo
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.ContractInfo
 */
export const getContractInfo = buildQuery<QueryContractInfoRequest, QueryContractInfoResponse>({
  encode: QueryContractInfoRequest.encode,
  decode: QueryContractInfoResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "ContractInfo",
  deps: [QueryContractInfoRequest, QueryContractInfoResponse]
});
/**
 * ContractHistory gets the contract code history
 * @name getContractHistory
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.ContractHistory
 */
export const getContractHistory = buildQuery<QueryContractHistoryRequest, QueryContractHistoryResponse>({
  encode: QueryContractHistoryRequest.encode,
  decode: QueryContractHistoryResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "ContractHistory",
  deps: [QueryContractHistoryRequest, QueryContractHistoryResponse]
});
/**
 * ContractsByCode lists all smart contracts for a code id
 * @name getContractsByCode
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.ContractsByCode
 */
export const getContractsByCode = buildQuery<QueryContractsByCodeRequest, QueryContractsByCodeResponse>({
  encode: QueryContractsByCodeRequest.encode,
  decode: QueryContractsByCodeResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "ContractsByCode",
  deps: [QueryContractsByCodeRequest, QueryContractsByCodeResponse]
});
/**
 * AllContractState gets all raw store data for a single contract
 * @name getAllContractState
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.AllContractState
 */
export const getAllContractState = buildQuery<QueryAllContractStateRequest, QueryAllContractStateResponse>({
  encode: QueryAllContractStateRequest.encode,
  decode: QueryAllContractStateResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "AllContractState",
  deps: [QueryAllContractStateRequest, QueryAllContractStateResponse]
});
/**
 * RawContractState gets single key from the raw store data of a contract
 * @name getRawContractState
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.RawContractState
 */
export const getRawContractState = buildQuery<QueryRawContractStateRequest, QueryRawContractStateResponse>({
  encode: QueryRawContractStateRequest.encode,
  decode: QueryRawContractStateResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "RawContractState",
  deps: [QueryRawContractStateRequest, QueryRawContractStateResponse]
});
/**
 * SmartContractState get smart query result from the contract
 * @name getSmartContractState
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.SmartContractState
 */
export const getSmartContractState = buildQuery<QuerySmartContractStateRequest, QuerySmartContractStateResponse>({
  encode: QuerySmartContractStateRequest.encode,
  decode: QuerySmartContractStateResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "SmartContractState",
  deps: [QuerySmartContractStateRequest, QuerySmartContractStateResponse]
});
/**
 * Code gets the binary code and metadata for a single wasm code
 * @name getCode
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.Code
 */
export const getCode = buildQuery<QueryCodeRequest, QueryCodeResponse>({
  encode: QueryCodeRequest.encode,
  decode: QueryCodeResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "Code",
  deps: [QueryCodeRequest, QueryCodeResponse]
});
/**
 * Codes gets the metadata for all stored wasm codes
 * @name getCodes
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.Codes
 */
export const getCodes = buildQuery<QueryCodesRequest, QueryCodesResponse>({
  encode: QueryCodesRequest.encode,
  decode: QueryCodesResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "Codes",
  deps: [QueryCodesRequest, QueryCodesResponse]
});
/**
 * CodeInfo gets the metadata for a single wasm code
 * @name getCodeInfo
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.CodeInfo
 */
export const getCodeInfo = buildQuery<QueryCodeInfoRequest, QueryCodeInfoResponse>({
  encode: QueryCodeInfoRequest.encode,
  decode: QueryCodeInfoResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "CodeInfo",
  deps: [QueryCodeInfoRequest, QueryCodeInfoResponse]
});
/**
 * PinnedCodes gets the pinned code ids
 * @name getPinnedCodes
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.PinnedCodes
 */
export const getPinnedCodes = buildQuery<QueryPinnedCodesRequest, QueryPinnedCodesResponse>({
  encode: QueryPinnedCodesRequest.encode,
  decode: QueryPinnedCodesResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "PinnedCodes",
  deps: [QueryPinnedCodesRequest, QueryPinnedCodesResponse]
});
/**
 * Params gets the module params
 * @name getParams
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * ContractsByCreator gets the contracts by creator
 * @name getContractsByCreator
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.ContractsByCreator
 */
export const getContractsByCreator = buildQuery<QueryContractsByCreatorRequest, QueryContractsByCreatorResponse>({
  encode: QueryContractsByCreatorRequest.encode,
  decode: QueryContractsByCreatorResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "ContractsByCreator",
  deps: [QueryContractsByCreatorRequest, QueryContractsByCreatorResponse]
});
/**
 * WasmLimitsConfig gets the configured limits for static validation of Wasm
 * files, encoded in JSON.
 * @name getWasmLimitsConfig
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.WasmLimitsConfig
 */
export const getWasmLimitsConfig = buildQuery<QueryWasmLimitsConfigRequest, QueryWasmLimitsConfigResponse>({
  encode: QueryWasmLimitsConfigRequest.encode,
  decode: QueryWasmLimitsConfigResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "WasmLimitsConfig",
  deps: [QueryWasmLimitsConfigRequest, QueryWasmLimitsConfigResponse]
});
/**
 * BuildAddress builds a contract address
 * @name getBuildAddress
 * @package cosmwasm.wasm.v1
 * @see proto service: cosmwasm.wasm.v1.BuildAddress
 */
export const getBuildAddress = buildQuery<QueryBuildAddressRequest, QueryBuildAddressResponse>({
  encode: QueryBuildAddressRequest.encode,
  decode: QueryBuildAddressResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "BuildAddress",
  deps: [QueryBuildAddressRequest, QueryBuildAddressResponse]
});