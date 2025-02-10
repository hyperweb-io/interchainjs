import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryCodeInfoRequest, QueryCodeInfoResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse, QueryParamsRequest, QueryParamsResponse, QueryContractsByCreatorRequest, QueryContractsByCreatorResponse, QueryWasmLimitsConfigRequest, QueryWasmLimitsConfigResponse, QueryBuildAddressRequest, QueryBuildAddressResponse } from "./query";
export const createGetContractInfo = (clientResolver?: RpcResolver) => buildQuery<QueryContractInfoRequest, QueryContractInfoResponse>({
  encode: QueryContractInfoRequest.encode,
  decode: QueryContractInfoResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "ContractInfo",
  clientResolver,
  deps: [QueryContractInfoRequest, QueryContractInfoResponse]
});
export const createGetContractHistory = (clientResolver?: RpcResolver) => buildQuery<QueryContractHistoryRequest, QueryContractHistoryResponse>({
  encode: QueryContractHistoryRequest.encode,
  decode: QueryContractHistoryResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "ContractHistory",
  clientResolver,
  deps: [QueryContractHistoryRequest, QueryContractHistoryResponse]
});
export const createGetContractsByCode = (clientResolver?: RpcResolver) => buildQuery<QueryContractsByCodeRequest, QueryContractsByCodeResponse>({
  encode: QueryContractsByCodeRequest.encode,
  decode: QueryContractsByCodeResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "ContractsByCode",
  clientResolver,
  deps: [QueryContractsByCodeRequest, QueryContractsByCodeResponse]
});
export const createGetAllContractState = (clientResolver?: RpcResolver) => buildQuery<QueryAllContractStateRequest, QueryAllContractStateResponse>({
  encode: QueryAllContractStateRequest.encode,
  decode: QueryAllContractStateResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "AllContractState",
  clientResolver,
  deps: [QueryAllContractStateRequest, QueryAllContractStateResponse]
});
export const createGetRawContractState = (clientResolver?: RpcResolver) => buildQuery<QueryRawContractStateRequest, QueryRawContractStateResponse>({
  encode: QueryRawContractStateRequest.encode,
  decode: QueryRawContractStateResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "RawContractState",
  clientResolver,
  deps: [QueryRawContractStateRequest, QueryRawContractStateResponse]
});
export const createGetSmartContractState = (clientResolver?: RpcResolver) => buildQuery<QuerySmartContractStateRequest, QuerySmartContractStateResponse>({
  encode: QuerySmartContractStateRequest.encode,
  decode: QuerySmartContractStateResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "SmartContractState",
  clientResolver,
  deps: [QuerySmartContractStateRequest, QuerySmartContractStateResponse]
});
export const createGetCode = (clientResolver?: RpcResolver) => buildQuery<QueryCodeRequest, QueryCodeResponse>({
  encode: QueryCodeRequest.encode,
  decode: QueryCodeResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "Code",
  clientResolver,
  deps: [QueryCodeRequest, QueryCodeResponse]
});
export const createGetCodes = (clientResolver?: RpcResolver) => buildQuery<QueryCodesRequest, QueryCodesResponse>({
  encode: QueryCodesRequest.encode,
  decode: QueryCodesResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "Codes",
  clientResolver,
  deps: [QueryCodesRequest, QueryCodesResponse]
});
export const createGetCodeInfo = (clientResolver?: RpcResolver) => buildQuery<QueryCodeInfoRequest, QueryCodeInfoResponse>({
  encode: QueryCodeInfoRequest.encode,
  decode: QueryCodeInfoResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "CodeInfo",
  clientResolver,
  deps: [QueryCodeInfoRequest, QueryCodeInfoResponse]
});
export const createGetPinnedCodes = (clientResolver?: RpcResolver) => buildQuery<QueryPinnedCodesRequest, QueryPinnedCodesResponse>({
  encode: QueryPinnedCodesRequest.encode,
  decode: QueryPinnedCodesResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "PinnedCodes",
  clientResolver,
  deps: [QueryPinnedCodesRequest, QueryPinnedCodesResponse]
});
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "Params",
  clientResolver,
  deps: [QueryParamsRequest, QueryParamsResponse]
});
export const createGetContractsByCreator = (clientResolver?: RpcResolver) => buildQuery<QueryContractsByCreatorRequest, QueryContractsByCreatorResponse>({
  encode: QueryContractsByCreatorRequest.encode,
  decode: QueryContractsByCreatorResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "ContractsByCreator",
  clientResolver,
  deps: [QueryContractsByCreatorRequest, QueryContractsByCreatorResponse]
});
export const createGetWasmLimitsConfig = (clientResolver?: RpcResolver) => buildQuery<QueryWasmLimitsConfigRequest, QueryWasmLimitsConfigResponse>({
  encode: QueryWasmLimitsConfigRequest.encode,
  decode: QueryWasmLimitsConfigResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "WasmLimitsConfig",
  clientResolver,
  deps: [QueryWasmLimitsConfigRequest, QueryWasmLimitsConfigResponse]
});
export const createGetBuildAddress = (clientResolver?: RpcResolver) => buildQuery<QueryBuildAddressRequest, QueryBuildAddressResponse>({
  encode: QueryBuildAddressRequest.encode,
  decode: QueryBuildAddressResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "BuildAddress",
  clientResolver,
  deps: [QueryBuildAddressRequest, QueryBuildAddressResponse]
});