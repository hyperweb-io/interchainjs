import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryCurrentValsetRequest, QueryCurrentValsetResponse, QueryValsetRequestRequest, QueryValsetRequestResponse, QueryValsetConfirmRequest, QueryValsetConfirmResponse, QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse, QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse, QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse, QueryLastEventByAddrRequest, QueryLastEventByAddrResponse, QueryPendingSendToEth, QueryPendingSendToEthResponse, QueryBatchFeeRequest, QueryBatchFeeResponse, QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse, QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse, QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse, QueryBatchConfirmsRequest, QueryBatchConfirmsResponse, QueryERC20ToDenomRequest, QueryERC20ToDenomResponse, QueryDenomToERC20Request, QueryDenomToERC20Response, QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse, QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse, QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse, QueryModuleStateRequest, QueryModuleStateResponse, MissingNoncesRequest, MissingNoncesResponse } from "./query";
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "Params",
  clientResolver
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetCurrentValset = (clientResolver?: RpcResolver) => buildQuery<QueryCurrentValsetRequest, QueryCurrentValsetResponse>({
  encode: QueryCurrentValsetRequest.encode,
  decode: QueryCurrentValsetResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "CurrentValset",
  clientResolver
});
export const useGetCurrentValset = buildUseQuery<QueryCurrentValsetRequest, QueryCurrentValsetResponse>({
  builderQueryFn: createGetCurrentValset,
  queryKeyPrefix: "CurrentValsetQuery"
});
export const createGetValsetRequest = (clientResolver?: RpcResolver) => buildQuery<QueryValsetRequestRequest, QueryValsetRequestResponse>({
  encode: QueryValsetRequestRequest.encode,
  decode: QueryValsetRequestResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "ValsetRequest",
  clientResolver
});
export const useGetValsetRequest = buildUseQuery<QueryValsetRequestRequest, QueryValsetRequestResponse>({
  builderQueryFn: createGetValsetRequest,
  queryKeyPrefix: "ValsetRequestQuery"
});
export const createGetValsetConfirm = (clientResolver?: RpcResolver) => buildQuery<QueryValsetConfirmRequest, QueryValsetConfirmResponse>({
  encode: QueryValsetConfirmRequest.encode,
  decode: QueryValsetConfirmResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "ValsetConfirm",
  clientResolver
});
export const useGetValsetConfirm = buildUseQuery<QueryValsetConfirmRequest, QueryValsetConfirmResponse>({
  builderQueryFn: createGetValsetConfirm,
  queryKeyPrefix: "ValsetConfirmQuery"
});
export const createGetValsetConfirmsByNonce = (clientResolver?: RpcResolver) => buildQuery<QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse>({
  encode: QueryValsetConfirmsByNonceRequest.encode,
  decode: QueryValsetConfirmsByNonceResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "ValsetConfirmsByNonce",
  clientResolver
});
export const useGetValsetConfirmsByNonce = buildUseQuery<QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse>({
  builderQueryFn: createGetValsetConfirmsByNonce,
  queryKeyPrefix: "ValsetConfirmsByNonceQuery"
});
export const createGetLastValsetRequests = (clientResolver?: RpcResolver) => buildQuery<QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse>({
  encode: QueryLastValsetRequestsRequest.encode,
  decode: QueryLastValsetRequestsResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "LastValsetRequests",
  clientResolver
});
export const useGetLastValsetRequests = buildUseQuery<QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse>({
  builderQueryFn: createGetLastValsetRequests,
  queryKeyPrefix: "LastValsetRequestsQuery"
});
export const createGetLastPendingValsetRequestByAddr = (clientResolver?: RpcResolver) => buildQuery<QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse>({
  encode: QueryLastPendingValsetRequestByAddrRequest.encode,
  decode: QueryLastPendingValsetRequestByAddrResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "LastPendingValsetRequestByAddr",
  clientResolver
});
export const useGetLastPendingValsetRequestByAddr = buildUseQuery<QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse>({
  builderQueryFn: createGetLastPendingValsetRequestByAddr,
  queryKeyPrefix: "LastPendingValsetRequestByAddrQuery"
});
export const createGetLastEventByAddr = (clientResolver?: RpcResolver) => buildQuery<QueryLastEventByAddrRequest, QueryLastEventByAddrResponse>({
  encode: QueryLastEventByAddrRequest.encode,
  decode: QueryLastEventByAddrResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "LastEventByAddr",
  clientResolver
});
export const useGetLastEventByAddr = buildUseQuery<QueryLastEventByAddrRequest, QueryLastEventByAddrResponse>({
  builderQueryFn: createGetLastEventByAddr,
  queryKeyPrefix: "LastEventByAddrQuery"
});
export const createGetGetPendingSendToEth = (clientResolver?: RpcResolver) => buildQuery<QueryPendingSendToEth, QueryPendingSendToEthResponse>({
  encode: QueryPendingSendToEth.encode,
  decode: QueryPendingSendToEthResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "GetPendingSendToEth",
  clientResolver
});
export const useGetGetPendingSendToEth = buildUseQuery<QueryPendingSendToEth, QueryPendingSendToEthResponse>({
  builderQueryFn: createGetGetPendingSendToEth,
  queryKeyPrefix: "GetPendingSendToEthQuery"
});
export const createGetBatchFees = (clientResolver?: RpcResolver) => buildQuery<QueryBatchFeeRequest, QueryBatchFeeResponse>({
  encode: QueryBatchFeeRequest.encode,
  decode: QueryBatchFeeResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "BatchFees",
  clientResolver
});
export const useGetBatchFees = buildUseQuery<QueryBatchFeeRequest, QueryBatchFeeResponse>({
  builderQueryFn: createGetBatchFees,
  queryKeyPrefix: "BatchFeesQuery"
});
export const createGetOutgoingTxBatches = (clientResolver?: RpcResolver) => buildQuery<QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse>({
  encode: QueryOutgoingTxBatchesRequest.encode,
  decode: QueryOutgoingTxBatchesResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "OutgoingTxBatches",
  clientResolver
});
export const useGetOutgoingTxBatches = buildUseQuery<QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse>({
  builderQueryFn: createGetOutgoingTxBatches,
  queryKeyPrefix: "OutgoingTxBatchesQuery"
});
export const createGetLastPendingBatchRequestByAddr = (clientResolver?: RpcResolver) => buildQuery<QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse>({
  encode: QueryLastPendingBatchRequestByAddrRequest.encode,
  decode: QueryLastPendingBatchRequestByAddrResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "LastPendingBatchRequestByAddr",
  clientResolver
});
export const useGetLastPendingBatchRequestByAddr = buildUseQuery<QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse>({
  builderQueryFn: createGetLastPendingBatchRequestByAddr,
  queryKeyPrefix: "LastPendingBatchRequestByAddrQuery"
});
export const createGetBatchRequestByNonce = (clientResolver?: RpcResolver) => buildQuery<QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse>({
  encode: QueryBatchRequestByNonceRequest.encode,
  decode: QueryBatchRequestByNonceResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "BatchRequestByNonce",
  clientResolver
});
export const useGetBatchRequestByNonce = buildUseQuery<QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse>({
  builderQueryFn: createGetBatchRequestByNonce,
  queryKeyPrefix: "BatchRequestByNonceQuery"
});
export const createGetBatchConfirms = (clientResolver?: RpcResolver) => buildQuery<QueryBatchConfirmsRequest, QueryBatchConfirmsResponse>({
  encode: QueryBatchConfirmsRequest.encode,
  decode: QueryBatchConfirmsResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "BatchConfirms",
  clientResolver
});
export const useGetBatchConfirms = buildUseQuery<QueryBatchConfirmsRequest, QueryBatchConfirmsResponse>({
  builderQueryFn: createGetBatchConfirms,
  queryKeyPrefix: "BatchConfirmsQuery"
});
export const createGetERC20ToDenom = (clientResolver?: RpcResolver) => buildQuery<QueryERC20ToDenomRequest, QueryERC20ToDenomResponse>({
  encode: QueryERC20ToDenomRequest.encode,
  decode: QueryERC20ToDenomResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "ERC20ToDenom",
  clientResolver
});
export const useGetERC20ToDenom = buildUseQuery<QueryERC20ToDenomRequest, QueryERC20ToDenomResponse>({
  builderQueryFn: createGetERC20ToDenom,
  queryKeyPrefix: "ERC20ToDenomQuery"
});
export const createGetDenomToERC20 = (clientResolver?: RpcResolver) => buildQuery<QueryDenomToERC20Request, QueryDenomToERC20Response>({
  encode: QueryDenomToERC20Request.encode,
  decode: QueryDenomToERC20Response.decode,
  service: "injective.peggy.v1.Query",
  method: "DenomToERC20",
  clientResolver
});
export const useGetDenomToERC20 = buildUseQuery<QueryDenomToERC20Request, QueryDenomToERC20Response>({
  builderQueryFn: createGetDenomToERC20,
  queryKeyPrefix: "DenomToERC20Query"
});
export const createGetGetDelegateKeyByValidator = (clientResolver?: RpcResolver) => buildQuery<QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse>({
  encode: QueryDelegateKeysByValidatorAddress.encode,
  decode: QueryDelegateKeysByValidatorAddressResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "GetDelegateKeyByValidator",
  clientResolver
});
export const useGetGetDelegateKeyByValidator = buildUseQuery<QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse>({
  builderQueryFn: createGetGetDelegateKeyByValidator,
  queryKeyPrefix: "GetDelegateKeyByValidatorQuery"
});
export const createGetGetDelegateKeyByEth = (clientResolver?: RpcResolver) => buildQuery<QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse>({
  encode: QueryDelegateKeysByEthAddress.encode,
  decode: QueryDelegateKeysByEthAddressResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "GetDelegateKeyByEth",
  clientResolver
});
export const useGetGetDelegateKeyByEth = buildUseQuery<QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse>({
  builderQueryFn: createGetGetDelegateKeyByEth,
  queryKeyPrefix: "GetDelegateKeyByEthQuery"
});
export const createGetGetDelegateKeyByOrchestrator = (clientResolver?: RpcResolver) => buildQuery<QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse>({
  encode: QueryDelegateKeysByOrchestratorAddress.encode,
  decode: QueryDelegateKeysByOrchestratorAddressResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "GetDelegateKeyByOrchestrator",
  clientResolver
});
export const useGetGetDelegateKeyByOrchestrator = buildUseQuery<QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse>({
  builderQueryFn: createGetGetDelegateKeyByOrchestrator,
  queryKeyPrefix: "GetDelegateKeyByOrchestratorQuery"
});
export const createGetPeggyModuleState = (clientResolver?: RpcResolver) => buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "PeggyModuleState",
  clientResolver
});
export const useGetPeggyModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: createGetPeggyModuleState,
  queryKeyPrefix: "PeggyModuleStateQuery"
});
export const createGetMissingPeggoNonces = (clientResolver?: RpcResolver) => buildQuery<MissingNoncesRequest, MissingNoncesResponse>({
  encode: MissingNoncesRequest.encode,
  decode: MissingNoncesResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "MissingPeggoNonces",
  clientResolver
});
export const useGetMissingPeggoNonces = buildUseQuery<MissingNoncesRequest, MissingNoncesResponse>({
  builderQueryFn: createGetMissingPeggoNonces,
  queryKeyPrefix: "MissingPeggoNoncesQuery"
});