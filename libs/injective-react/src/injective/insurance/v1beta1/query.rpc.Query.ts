import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryInsuranceParamsRequest, QueryInsuranceParamsResponse, QueryInsuranceFundRequest, QueryInsuranceFundResponse, QueryInsuranceFundsRequest, QueryInsuranceFundsResponse, QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse, QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves insurance params */
  insuranceParams(request?: QueryInsuranceParamsRequest): Promise<QueryInsuranceParamsResponse>;
  /** Retrieves individual insurance fund information from market id */
  insuranceFund(request: QueryInsuranceFundRequest): Promise<QueryInsuranceFundResponse>;
  /** Retrieves all insurance funds */
  insuranceFunds(request?: QueryInsuranceFundsRequest): Promise<QueryInsuranceFundsResponse>;
  /**
   * Retrives the value of insurance fund share token at current price (not
   * pending redemption)
   */
  estimatedRedemptions(request: QueryEstimatedRedemptionsRequest): Promise<QueryEstimatedRedemptionsResponse>;
  /** Retrieves pending redemptions' share token at current price */
  pendingRedemptions(request: QueryPendingRedemptionsRequest): Promise<QueryPendingRedemptionsResponse>;
  /** Retrieves the entire insurance module's state */
  insuranceModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Retrieves insurance params */
  insuranceParams = async (request: QueryInsuranceParamsRequest = {}): Promise<QueryInsuranceParamsResponse> => {
    const data = QueryInsuranceParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Query", "InsuranceParams", data);
    return promise.then(data => QueryInsuranceParamsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves individual insurance fund information from market id */
  insuranceFund = async (request: QueryInsuranceFundRequest): Promise<QueryInsuranceFundResponse> => {
    const data = QueryInsuranceFundRequest.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Query", "InsuranceFund", data);
    return promise.then(data => QueryInsuranceFundResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves all insurance funds */
  insuranceFunds = async (request: QueryInsuranceFundsRequest = {}): Promise<QueryInsuranceFundsResponse> => {
    const data = QueryInsuranceFundsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Query", "InsuranceFunds", data);
    return promise.then(data => QueryInsuranceFundsResponse.decode(new BinaryReader(data)));
  };
  /* Retrives the value of insurance fund share token at current price (not
   pending redemption) */
  estimatedRedemptions = async (request: QueryEstimatedRedemptionsRequest): Promise<QueryEstimatedRedemptionsResponse> => {
    const data = QueryEstimatedRedemptionsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Query", "EstimatedRedemptions", data);
    return promise.then(data => QueryEstimatedRedemptionsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves pending redemptions' share token at current price */
  pendingRedemptions = async (request: QueryPendingRedemptionsRequest): Promise<QueryPendingRedemptionsResponse> => {
    const data = QueryPendingRedemptionsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Query", "PendingRedemptions", data);
    return promise.then(data => QueryPendingRedemptionsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the entire insurance module's state */
  insuranceModuleState = async (request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> => {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Query", "InsuranceModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new QueryClientImpl(rpc);
};