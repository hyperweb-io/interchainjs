import { buildQuery } from "../../../helper-func-types";
import { QueryCommunityPoolRequest, QueryCommunityPoolResponse, QueryContinuousFundRequest, QueryContinuousFundResponse, QueryContinuousFundsRequest, QueryContinuousFundsResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/**
 * CommunityPool queries the community pool coins.
 * @name getCommunityPool
 * @package cosmos.protocolpool.v1
 * @see proto service: cosmos.protocolpool.v1.CommunityPool
 */
export const getCommunityPool = buildQuery<QueryCommunityPoolRequest, QueryCommunityPoolResponse>({
  encode: QueryCommunityPoolRequest.encode,
  decode: QueryCommunityPoolResponse.decode,
  service: "cosmos.protocolpool.v1.Query",
  method: "CommunityPool",
  deps: [QueryCommunityPoolRequest, QueryCommunityPoolResponse]
});
/**
 * ContinuousFund queries a continuous fund by the recipient is is associated with.
 * @name getContinuousFund
 * @package cosmos.protocolpool.v1
 * @see proto service: cosmos.protocolpool.v1.ContinuousFund
 */
export const getContinuousFund = buildQuery<QueryContinuousFundRequest, QueryContinuousFundResponse>({
  encode: QueryContinuousFundRequest.encode,
  decode: QueryContinuousFundResponse.decode,
  service: "cosmos.protocolpool.v1.Query",
  method: "ContinuousFund",
  deps: [QueryContinuousFundRequest, QueryContinuousFundResponse]
});
/**
 * ContinuousFunds queries all continuous funds in the store.
 * @name getContinuousFunds
 * @package cosmos.protocolpool.v1
 * @see proto service: cosmos.protocolpool.v1.ContinuousFunds
 */
export const getContinuousFunds = buildQuery<QueryContinuousFundsRequest, QueryContinuousFundsResponse>({
  encode: QueryContinuousFundsRequest.encode,
  decode: QueryContinuousFundsResponse.decode,
  service: "cosmos.protocolpool.v1.Query",
  method: "ContinuousFunds",
  deps: [QueryContinuousFundsRequest, QueryContinuousFundsResponse]
});
/**
 * Params returns the total set of x/protocolpool parameters.
 * @name getParams
 * @package cosmos.protocolpool.v1
 * @see proto service: cosmos.protocolpool.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.protocolpool.v1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});