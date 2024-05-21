import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryParamsRequest, QueryParamsResponse, QueryCurrentValsetRequest, QueryCurrentValsetResponse, QueryValsetRequestRequest, QueryValsetRequestResponse, QueryValsetConfirmRequest, QueryValsetConfirmResponse, QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse, QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse, QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse, QueryLastEventByAddrRequest, QueryLastEventByAddrResponse, QueryPendingSendToEth, QueryPendingSendToEthResponse, QueryBatchFeeRequest, QueryBatchFeeResponse, QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse, QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse, QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse, QueryBatchConfirmsRequest, QueryBatchConfirmsResponse, QueryERC20ToDenomRequest, QueryERC20ToDenomResponse, QueryDenomToERC20Request, QueryDenomToERC20Response, QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse, QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse, QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse, QueryModuleStateRequest, QueryModuleStateResponse, MissingNoncesRequest, MissingNoncesResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /** Deployments queries deployments */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** valset */
  currentValset(request?: QueryCurrentValsetRequest): Promise<QueryCurrentValsetResponse>;
  valsetRequest(request: QueryValsetRequestRequest): Promise<QueryValsetRequestResponse>;
  valsetConfirm(request: QueryValsetConfirmRequest): Promise<QueryValsetConfirmResponse>;
  valsetConfirmsByNonce(request: QueryValsetConfirmsByNonceRequest): Promise<QueryValsetConfirmsByNonceResponse>;
  lastValsetRequests(request?: QueryLastValsetRequestsRequest): Promise<QueryLastValsetRequestsResponse>;
  lastPendingValsetRequestByAddr(request: QueryLastPendingValsetRequestByAddrRequest): Promise<QueryLastPendingValsetRequestByAddrResponse>;
  /** claim */
  lastEventByAddr(request: QueryLastEventByAddrRequest): Promise<QueryLastEventByAddrResponse>;
  /** batch */
  getPendingSendToEth(request: QueryPendingSendToEth): Promise<QueryPendingSendToEthResponse>;
  batchFees(request?: QueryBatchFeeRequest): Promise<QueryBatchFeeResponse>;
  outgoingTxBatches(request?: QueryOutgoingTxBatchesRequest): Promise<QueryOutgoingTxBatchesResponse>;
  lastPendingBatchRequestByAddr(request: QueryLastPendingBatchRequestByAddrRequest): Promise<QueryLastPendingBatchRequestByAddrResponse>;
  batchRequestByNonce(request: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponse>;
  batchConfirms(request: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponse>;
  eRC20ToDenom(request: QueryERC20ToDenomRequest): Promise<QueryERC20ToDenomResponse>;
  denomToERC20(request: QueryDenomToERC20Request): Promise<QueryDenomToERC20Response>;
  getDelegateKeyByValidator(request: QueryDelegateKeysByValidatorAddress): Promise<QueryDelegateKeysByValidatorAddressResponse>;
  getDelegateKeyByEth(request: QueryDelegateKeysByEthAddress): Promise<QueryDelegateKeysByEthAddressResponse>;
  getDelegateKeyByOrchestrator(request: QueryDelegateKeysByOrchestratorAddress): Promise<QueryDelegateKeysByOrchestratorAddressResponse>;
  /** Retrieves the entire peggy module's state */
  peggyModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
  missingPeggoNonces(request?: MissingNoncesRequest): Promise<MissingNoncesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Deployments queries deployments */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* valset */
  currentValset = async (request: QueryCurrentValsetRequest = {}): Promise<QueryCurrentValsetResponse> => {
    const data = QueryCurrentValsetRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "CurrentValset", data);
    return promise.then(data => QueryCurrentValsetResponse.decode(new BinaryReader(data)));
  };
  /* ValsetRequest */
  valsetRequest = async (request: QueryValsetRequestRequest): Promise<QueryValsetRequestResponse> => {
    const data = QueryValsetRequestRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "ValsetRequest", data);
    return promise.then(data => QueryValsetRequestResponse.decode(new BinaryReader(data)));
  };
  /* ValsetConfirm */
  valsetConfirm = async (request: QueryValsetConfirmRequest): Promise<QueryValsetConfirmResponse> => {
    const data = QueryValsetConfirmRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "ValsetConfirm", data);
    return promise.then(data => QueryValsetConfirmResponse.decode(new BinaryReader(data)));
  };
  /* ValsetConfirmsByNonce */
  valsetConfirmsByNonce = async (request: QueryValsetConfirmsByNonceRequest): Promise<QueryValsetConfirmsByNonceResponse> => {
    const data = QueryValsetConfirmsByNonceRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "ValsetConfirmsByNonce", data);
    return promise.then(data => QueryValsetConfirmsByNonceResponse.decode(new BinaryReader(data)));
  };
  /* LastValsetRequests */
  lastValsetRequests = async (request: QueryLastValsetRequestsRequest = {}): Promise<QueryLastValsetRequestsResponse> => {
    const data = QueryLastValsetRequestsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "LastValsetRequests", data);
    return promise.then(data => QueryLastValsetRequestsResponse.decode(new BinaryReader(data)));
  };
  /* LastPendingValsetRequestByAddr */
  lastPendingValsetRequestByAddr = async (request: QueryLastPendingValsetRequestByAddrRequest): Promise<QueryLastPendingValsetRequestByAddrResponse> => {
    const data = QueryLastPendingValsetRequestByAddrRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "LastPendingValsetRequestByAddr", data);
    return promise.then(data => QueryLastPendingValsetRequestByAddrResponse.decode(new BinaryReader(data)));
  };
  /* claim */
  lastEventByAddr = async (request: QueryLastEventByAddrRequest): Promise<QueryLastEventByAddrResponse> => {
    const data = QueryLastEventByAddrRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "LastEventByAddr", data);
    return promise.then(data => QueryLastEventByAddrResponse.decode(new BinaryReader(data)));
  };
  /* batch */
  getPendingSendToEth = async (request: QueryPendingSendToEth): Promise<QueryPendingSendToEthResponse> => {
    const data = QueryPendingSendToEth.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "GetPendingSendToEth", data);
    return promise.then(data => QueryPendingSendToEthResponse.decode(new BinaryReader(data)));
  };
  /* BatchFees */
  batchFees = async (request: QueryBatchFeeRequest = {}): Promise<QueryBatchFeeResponse> => {
    const data = QueryBatchFeeRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "BatchFees", data);
    return promise.then(data => QueryBatchFeeResponse.decode(new BinaryReader(data)));
  };
  /* OutgoingTxBatches */
  outgoingTxBatches = async (request: QueryOutgoingTxBatchesRequest = {}): Promise<QueryOutgoingTxBatchesResponse> => {
    const data = QueryOutgoingTxBatchesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "OutgoingTxBatches", data);
    return promise.then(data => QueryOutgoingTxBatchesResponse.decode(new BinaryReader(data)));
  };
  /* LastPendingBatchRequestByAddr */
  lastPendingBatchRequestByAddr = async (request: QueryLastPendingBatchRequestByAddrRequest): Promise<QueryLastPendingBatchRequestByAddrResponse> => {
    const data = QueryLastPendingBatchRequestByAddrRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "LastPendingBatchRequestByAddr", data);
    return promise.then(data => QueryLastPendingBatchRequestByAddrResponse.decode(new BinaryReader(data)));
  };
  /* BatchRequestByNonce */
  batchRequestByNonce = async (request: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponse> => {
    const data = QueryBatchRequestByNonceRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "BatchRequestByNonce", data);
    return promise.then(data => QueryBatchRequestByNonceResponse.decode(new BinaryReader(data)));
  };
  /* BatchConfirms */
  batchConfirms = async (request: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponse> => {
    const data = QueryBatchConfirmsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "BatchConfirms", data);
    return promise.then(data => QueryBatchConfirmsResponse.decode(new BinaryReader(data)));
  };
  /* ERC20ToDenom */
  eRC20ToDenom = async (request: QueryERC20ToDenomRequest): Promise<QueryERC20ToDenomResponse> => {
    const data = QueryERC20ToDenomRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "ERC20ToDenom", data);
    return promise.then(data => QueryERC20ToDenomResponse.decode(new BinaryReader(data)));
  };
  /* DenomToERC20 */
  denomToERC20 = async (request: QueryDenomToERC20Request): Promise<QueryDenomToERC20Response> => {
    const data = QueryDenomToERC20Request.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "DenomToERC20", data);
    return promise.then(data => QueryDenomToERC20Response.decode(new BinaryReader(data)));
  };
  /* GetDelegateKeyByValidator */
  getDelegateKeyByValidator = async (request: QueryDelegateKeysByValidatorAddress): Promise<QueryDelegateKeysByValidatorAddressResponse> => {
    const data = QueryDelegateKeysByValidatorAddress.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "GetDelegateKeyByValidator", data);
    return promise.then(data => QueryDelegateKeysByValidatorAddressResponse.decode(new BinaryReader(data)));
  };
  /* GetDelegateKeyByEth */
  getDelegateKeyByEth = async (request: QueryDelegateKeysByEthAddress): Promise<QueryDelegateKeysByEthAddressResponse> => {
    const data = QueryDelegateKeysByEthAddress.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "GetDelegateKeyByEth", data);
    return promise.then(data => QueryDelegateKeysByEthAddressResponse.decode(new BinaryReader(data)));
  };
  /* GetDelegateKeyByOrchestrator */
  getDelegateKeyByOrchestrator = async (request: QueryDelegateKeysByOrchestratorAddress): Promise<QueryDelegateKeysByOrchestratorAddressResponse> => {
    const data = QueryDelegateKeysByOrchestratorAddress.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "GetDelegateKeyByOrchestrator", data);
    return promise.then(data => QueryDelegateKeysByOrchestratorAddressResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the entire peggy module's state */
  peggyModuleState = async (request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> => {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "PeggyModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
  };
  /* MissingPeggoNonces */
  missingPeggoNonces = async (request: MissingNoncesRequest = {}): Promise<MissingNoncesResponse> => {
    const data = MissingNoncesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "MissingPeggoNonces", data);
    return promise.then(data => MissingNoncesResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new QueryClientImpl(rpc);
};