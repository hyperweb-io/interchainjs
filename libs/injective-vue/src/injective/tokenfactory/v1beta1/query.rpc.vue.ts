import { buildUseVueQuery } from "../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
import { getParams, getDenomAuthorityMetadata, getDenomsFromCreator, getTokenfactoryModuleState } from "./query.rpc.func";
/* Params defines a gRPC query method that returns the tokenfactory module's
 parameters. */
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/* DenomAuthorityMetadata defines a gRPC query method for fetching
 DenomAuthorityMetadata for a particular denom. */
export const useGetDenomAuthorityMetadata = buildUseVueQuery<QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse>({
  builderQueryFn: getDenomAuthorityMetadata,
  queryKeyPrefix: "DenomAuthorityMetadataQuery"
});
/* DenomsFromCreator defines a gRPC query method for fetching all
 denominations created by a specific admin/creator. */
export const useGetDenomsFromCreator = buildUseVueQuery<QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse>({
  builderQueryFn: getDenomsFromCreator,
  queryKeyPrefix: "DenomsFromCreatorQuery"
});
/* Retrieves the entire auction module's state */
export const useGetTokenfactoryModuleState = buildUseVueQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getTokenfactoryModuleState,
  queryKeyPrefix: "TokenfactoryModuleStateQuery"
});