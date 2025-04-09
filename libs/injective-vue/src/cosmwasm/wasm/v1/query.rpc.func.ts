import { buildQuery } from "../../../helper-func-types";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryCodeInfoRequest, QueryCodeInfoResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse, QueryParamsRequest, QueryParamsResponse, QueryContractsByCreatorRequest, QueryContractsByCreatorResponse, QueryWasmLimitsConfigRequest, QueryWasmLimitsConfigResponse, QueryBuildAddressRequest, QueryBuildAddressResponse } from "./query";
export const getContractInfo = buildQuery<QueryContractInfoRequest, QueryContractInfoResponse>({
  encode: QueryContractInfoRequest.encode,
  decode: QueryContractInfoResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "ContractInfo",
  deps: [QueryContractInfoRequest, QueryContractInfoResponse]
});
export const getContractHistory = buildQuery<QueryContractHistoryRequest, QueryContractHistoryResponse>({
  encode: QueryContractHistoryRequest.encode,
  decode: QueryContractHistoryResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "ContractHistory",
  deps: [QueryContractHistoryRequest, QueryContractHistoryResponse]
});
export const getContractsByCode = buildQuery<QueryContractsByCodeRequest, QueryContractsByCodeResponse>({
  encode: QueryContractsByCodeRequest.encode,
  decode: QueryContractsByCodeResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "ContractsByCode",
  deps: [QueryContractsByCodeRequest, QueryContractsByCodeResponse]
});
export const getAllContractState = buildQuery<QueryAllContractStateRequest, QueryAllContractStateResponse>({
  encode: QueryAllContractStateRequest.encode,
  decode: QueryAllContractStateResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "AllContractState",
  deps: [QueryAllContractStateRequest, QueryAllContractStateResponse]
});
export const getRawContractState = buildQuery<QueryRawContractStateRequest, QueryRawContractStateResponse>({
  encode: QueryRawContractStateRequest.encode,
  decode: QueryRawContractStateResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "RawContractState",
  deps: [QueryRawContractStateRequest, QueryRawContractStateResponse]
});
export const getSmartContractState = buildQuery<QuerySmartContractStateRequest, QuerySmartContractStateResponse>({
  encode: QuerySmartContractStateRequest.encode,
  decode: QuerySmartContractStateResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "SmartContractState",
  deps: [QuerySmartContractStateRequest, QuerySmartContractStateResponse]
});
export const getCode = buildQuery<QueryCodeRequest, QueryCodeResponse>({
  encode: QueryCodeRequest.encode,
  decode: QueryCodeResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "Code",
  deps: [QueryCodeRequest, QueryCodeResponse]
});
export const getCodes = buildQuery<QueryCodesRequest, QueryCodesResponse>({
  encode: QueryCodesRequest.encode,
  decode: QueryCodesResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "Codes",
  deps: [QueryCodesRequest, QueryCodesResponse]
});
export const getCodeInfo = buildQuery<QueryCodeInfoRequest, QueryCodeInfoResponse>({
  encode: QueryCodeInfoRequest.encode,
  decode: QueryCodeInfoResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "CodeInfo",
  deps: [QueryCodeInfoRequest, QueryCodeInfoResponse]
});
export const getPinnedCodes = buildQuery<QueryPinnedCodesRequest, QueryPinnedCodesResponse>({
  encode: QueryPinnedCodesRequest.encode,
  decode: QueryPinnedCodesResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "PinnedCodes",
  deps: [QueryPinnedCodesRequest, QueryPinnedCodesResponse]
});
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
export const getContractsByCreator = buildQuery<QueryContractsByCreatorRequest, QueryContractsByCreatorResponse>({
  encode: QueryContractsByCreatorRequest.encode,
  decode: QueryContractsByCreatorResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "ContractsByCreator",
  deps: [QueryContractsByCreatorRequest, QueryContractsByCreatorResponse]
});
export const getWasmLimitsConfig = buildQuery<QueryWasmLimitsConfigRequest, QueryWasmLimitsConfigResponse>({
  encode: QueryWasmLimitsConfigRequest.encode,
  decode: QueryWasmLimitsConfigResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "WasmLimitsConfig",
  deps: [QueryWasmLimitsConfigRequest, QueryWasmLimitsConfigResponse]
});
export const getBuildAddress = buildQuery<QueryBuildAddressRequest, QueryBuildAddressResponse>({
  encode: QueryBuildAddressRequest.encode,
  decode: QueryBuildAddressResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "BuildAddress",
  deps: [QueryBuildAddressRequest, QueryBuildAddressResponse]
});