import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "injective.tokenfactory.v1beta1.Query",
  method: "Params",
  clientResolver,
  deps: [QueryParamsRequest, QueryParamsResponse]
});
export const createGetDenomAuthorityMetadata = (clientResolver?: RpcResolver) => buildQuery<QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse>({
  encode: QueryDenomAuthorityMetadataRequest.encode,
  decode: QueryDenomAuthorityMetadataResponse.decode,
  service: "injective.tokenfactory.v1beta1.Query",
  method: "DenomAuthorityMetadata",
  clientResolver,
  deps: [QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse]
});
export const createGetDenomsFromCreator = (clientResolver?: RpcResolver) => buildQuery<QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse>({
  encode: QueryDenomsFromCreatorRequest.encode,
  decode: QueryDenomsFromCreatorResponse.decode,
  service: "injective.tokenfactory.v1beta1.Query",
  method: "DenomsFromCreator",
  clientResolver,
  deps: [QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse]
});
export const createGetTokenfactoryModuleState = (clientResolver?: RpcResolver) => buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.tokenfactory.v1beta1.Query",
  method: "TokenfactoryModuleState",
  clientResolver,
  deps: [QueryModuleStateRequest, QueryModuleStateResponse]
});