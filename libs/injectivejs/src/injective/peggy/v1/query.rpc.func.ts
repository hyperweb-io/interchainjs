import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryCurrentValsetRequest, QueryCurrentValsetResponse, QueryValsetRequestRequest, QueryValsetRequestResponse, QueryValsetConfirmRequest, QueryValsetConfirmResponse, QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse, QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse, QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse, QueryLastEventByAddrRequest, QueryLastEventByAddrResponse, QueryPendingSendToEth, QueryPendingSendToEthResponse, QueryBatchFeeRequest, QueryBatchFeeResponse, QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse, QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse, QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse, QueryBatchConfirmsRequest, QueryBatchConfirmsResponse, QueryERC20ToDenomRequest, QueryERC20ToDenomResponse, QueryDenomToERC20Request, QueryDenomToERC20Response, QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse, QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse, QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse, QueryModuleStateRequest, QueryModuleStateResponse, MissingNoncesRequest, MissingNoncesResponse } from "./query";
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "Params",
  clientResolver,
  deps: [QueryParamsRequest, QueryParamsResponse]
});
export const createGetCurrentValset = (clientResolver?: RpcResolver) => buildQuery<QueryCurrentValsetRequest, QueryCurrentValsetResponse>({
  encode: QueryCurrentValsetRequest.encode,
  decode: QueryCurrentValsetResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "CurrentValset",
  clientResolver,
  deps: [QueryCurrentValsetRequest, QueryCurrentValsetResponse]
});
export const createGetValsetRequest = (clientResolver?: RpcResolver) => buildQuery<QueryValsetRequestRequest, QueryValsetRequestResponse>({
  encode: QueryValsetRequestRequest.encode,
  decode: QueryValsetRequestResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "ValsetRequest",
  clientResolver,
  deps: [QueryValsetRequestRequest, QueryValsetRequestResponse]
});
export const createGetValsetConfirm = (clientResolver?: RpcResolver) => buildQuery<QueryValsetConfirmRequest, QueryValsetConfirmResponse>({
  encode: QueryValsetConfirmRequest.encode,
  decode: QueryValsetConfirmResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "ValsetConfirm",
  clientResolver,
  deps: [QueryValsetConfirmRequest, QueryValsetConfirmResponse]
});
export const createGetValsetConfirmsByNonce = (clientResolver?: RpcResolver) => buildQuery<QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse>({
  encode: QueryValsetConfirmsByNonceRequest.encode,
  decode: QueryValsetConfirmsByNonceResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "ValsetConfirmsByNonce",
  clientResolver,
  deps: [QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse]
});
export const createGetLastValsetRequests = (clientResolver?: RpcResolver) => buildQuery<QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse>({
  encode: QueryLastValsetRequestsRequest.encode,
  decode: QueryLastValsetRequestsResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "LastValsetRequests",
  clientResolver,
  deps: [QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse]
});
export const createGetLastPendingValsetRequestByAddr = (clientResolver?: RpcResolver) => buildQuery<QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse>({
  encode: QueryLastPendingValsetRequestByAddrRequest.encode,
  decode: QueryLastPendingValsetRequestByAddrResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "LastPendingValsetRequestByAddr",
  clientResolver,
  deps: [QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse]
});
export const createGetLastEventByAddr = (clientResolver?: RpcResolver) => buildQuery<QueryLastEventByAddrRequest, QueryLastEventByAddrResponse>({
  encode: QueryLastEventByAddrRequest.encode,
  decode: QueryLastEventByAddrResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "LastEventByAddr",
  clientResolver,
  deps: [QueryLastEventByAddrRequest, QueryLastEventByAddrResponse]
});
export const createGetGetPendingSendToEth = (clientResolver?: RpcResolver) => buildQuery<QueryPendingSendToEth, QueryPendingSendToEthResponse>({
  encode: QueryPendingSendToEth.encode,
  decode: QueryPendingSendToEthResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "GetPendingSendToEth",
  clientResolver,
  deps: [QueryPendingSendToEth, QueryPendingSendToEthResponse]
});
export const createGetBatchFees = (clientResolver?: RpcResolver) => buildQuery<QueryBatchFeeRequest, QueryBatchFeeResponse>({
  encode: QueryBatchFeeRequest.encode,
  decode: QueryBatchFeeResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "BatchFees",
  clientResolver,
  deps: [QueryBatchFeeRequest, QueryBatchFeeResponse]
});
export const createGetOutgoingTxBatches = (clientResolver?: RpcResolver) => buildQuery<QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse>({
  encode: QueryOutgoingTxBatchesRequest.encode,
  decode: QueryOutgoingTxBatchesResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "OutgoingTxBatches",
  clientResolver,
  deps: [QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse]
});
export const createGetLastPendingBatchRequestByAddr = (clientResolver?: RpcResolver) => buildQuery<QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse>({
  encode: QueryLastPendingBatchRequestByAddrRequest.encode,
  decode: QueryLastPendingBatchRequestByAddrResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "LastPendingBatchRequestByAddr",
  clientResolver,
  deps: [QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse]
});
export const createGetBatchRequestByNonce = (clientResolver?: RpcResolver) => buildQuery<QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse>({
  encode: QueryBatchRequestByNonceRequest.encode,
  decode: QueryBatchRequestByNonceResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "BatchRequestByNonce",
  clientResolver,
  deps: [QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse]
});
export const createGetBatchConfirms = (clientResolver?: RpcResolver) => buildQuery<QueryBatchConfirmsRequest, QueryBatchConfirmsResponse>({
  encode: QueryBatchConfirmsRequest.encode,
  decode: QueryBatchConfirmsResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "BatchConfirms",
  clientResolver,
  deps: [QueryBatchConfirmsRequest, QueryBatchConfirmsResponse]
});
export const createGetERC20ToDenom = (clientResolver?: RpcResolver) => buildQuery<QueryERC20ToDenomRequest, QueryERC20ToDenomResponse>({
  encode: QueryERC20ToDenomRequest.encode,
  decode: QueryERC20ToDenomResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "ERC20ToDenom",
  clientResolver,
  deps: [QueryERC20ToDenomRequest, QueryERC20ToDenomResponse]
});
export const createGetDenomToERC20 = (clientResolver?: RpcResolver) => buildQuery<QueryDenomToERC20Request, QueryDenomToERC20Response>({
  encode: QueryDenomToERC20Request.encode,
  decode: QueryDenomToERC20Response.decode,
  service: "injective.peggy.v1.Query",
  method: "DenomToERC20",
  clientResolver,
  deps: [QueryDenomToERC20Request, QueryDenomToERC20Response]
});
export const createGetGetDelegateKeyByValidator = (clientResolver?: RpcResolver) => buildQuery<QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse>({
  encode: QueryDelegateKeysByValidatorAddress.encode,
  decode: QueryDelegateKeysByValidatorAddressResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "GetDelegateKeyByValidator",
  clientResolver,
  deps: [QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse]
});
export const createGetGetDelegateKeyByEth = (clientResolver?: RpcResolver) => buildQuery<QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse>({
  encode: QueryDelegateKeysByEthAddress.encode,
  decode: QueryDelegateKeysByEthAddressResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "GetDelegateKeyByEth",
  clientResolver,
  deps: [QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse]
});
export const createGetGetDelegateKeyByOrchestrator = (clientResolver?: RpcResolver) => buildQuery<QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse>({
  encode: QueryDelegateKeysByOrchestratorAddress.encode,
  decode: QueryDelegateKeysByOrchestratorAddressResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "GetDelegateKeyByOrchestrator",
  clientResolver,
  deps: [QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse]
});
export const createGetPeggyModuleState = (clientResolver?: RpcResolver) => buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "PeggyModuleState",
  clientResolver,
  deps: [QueryModuleStateRequest, QueryModuleStateResponse]
});
export const createGetMissingPeggoNonces = (clientResolver?: RpcResolver) => buildQuery<MissingNoncesRequest, MissingNoncesResponse>({
  encode: MissingNoncesRequest.encode,
  decode: MissingNoncesResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "MissingPeggoNonces",
  clientResolver,
  deps: [MissingNoncesRequest, MissingNoncesResponse]
});