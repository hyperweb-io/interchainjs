import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/* Params defines a gRPC query method that returns the tokenfactory module's
 parameters. */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "injective.tokenfactory.v1beta1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/* DenomAuthorityMetadata defines a gRPC query method for fetching
 DenomAuthorityMetadata for a particular denom. */
export const getDenomAuthorityMetadata = buildQuery<QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse>({
  encode: QueryDenomAuthorityMetadataRequest.encode,
  decode: QueryDenomAuthorityMetadataResponse.decode,
  service: "injective.tokenfactory.v1beta1.Query",
  method: "DenomAuthorityMetadata",
  deps: [QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse]
});
/* DenomsFromCreator defines a gRPC query method for fetching all
 denominations created by a specific admin/creator. */
export const getDenomsFromCreator = buildQuery<QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse>({
  encode: QueryDenomsFromCreatorRequest.encode,
  decode: QueryDenomsFromCreatorResponse.decode,
  service: "injective.tokenfactory.v1beta1.Query",
  method: "DenomsFromCreator",
  deps: [QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse]
});
/* Retrieves the entire auction module's state */
export const getTokenfactoryModuleState = buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.tokenfactory.v1beta1.Query",
  method: "TokenfactoryModuleState",
  deps: [QueryModuleStateRequest, QueryModuleStateResponse]
});