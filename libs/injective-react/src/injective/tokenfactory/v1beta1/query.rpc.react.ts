import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
import { getParams, getDenomAuthorityMetadata, getDenomsFromCreator, getTokenfactoryModuleState } from "./query.rpc.func";
/**
 * Params defines a gRPC query method that returns the tokenfactory module's
 * parameters.
 * @name useGetParams
 * @package injective.tokenfactory.v1beta1
 * @see proto service: injective.tokenfactory.v1beta1.Params
 */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * DenomAuthorityMetadata defines a gRPC query method for fetching
 * DenomAuthorityMetadata for a particular denom.
 * @name useGetDenomAuthorityMetadata
 * @package injective.tokenfactory.v1beta1
 * @see proto service: injective.tokenfactory.v1beta1.DenomAuthorityMetadata
 */
export const useGetDenomAuthorityMetadata = buildUseQuery<QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse>({
  builderQueryFn: getDenomAuthorityMetadata,
  queryKeyPrefix: "DenomAuthorityMetadataQuery"
});
/**
 * DenomsFromCreator defines a gRPC query method for fetching all
 * denominations created by a specific admin/creator.
 * @name useGetDenomsFromCreator
 * @package injective.tokenfactory.v1beta1
 * @see proto service: injective.tokenfactory.v1beta1.DenomsFromCreator
 */
export const useGetDenomsFromCreator = buildUseQuery<QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse>({
  builderQueryFn: getDenomsFromCreator,
  queryKeyPrefix: "DenomsFromCreatorQuery"
});
/**
 * Retrieves the entire auction module's state
 * @name useGetTokenfactoryModuleState
 * @package injective.tokenfactory.v1beta1
 * @see proto service: injective.tokenfactory.v1beta1.TokenfactoryModuleState
 */
export const useGetTokenfactoryModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getTokenfactoryModuleState,
  queryKeyPrefix: "TokenfactoryModuleStateQuery"
});