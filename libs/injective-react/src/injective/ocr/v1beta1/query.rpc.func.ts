import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryFeedConfigRequest, QueryFeedConfigResponse, QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse, QueryLatestRoundRequest, QueryLatestRoundResponse, QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse, QueryOwedAmountRequest, QueryOwedAmountResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "injective.ocr.v1beta1.Query",
  method: "Params",
  clientResolver
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetFeedConfig = (clientResolver?: RpcResolver) => buildQuery<QueryFeedConfigRequest, QueryFeedConfigResponse>({
  encode: QueryFeedConfigRequest.encode,
  decode: QueryFeedConfigResponse.decode,
  service: "injective.ocr.v1beta1.Query",
  method: "FeedConfig",
  clientResolver
});
export const useGetFeedConfig = buildUseQuery<QueryFeedConfigRequest, QueryFeedConfigResponse>({
  builderQueryFn: createGetFeedConfig,
  queryKeyPrefix: "FeedConfigQuery"
});
export const createGetFeedConfigInfo = (clientResolver?: RpcResolver) => buildQuery<QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse>({
  encode: QueryFeedConfigInfoRequest.encode,
  decode: QueryFeedConfigInfoResponse.decode,
  service: "injective.ocr.v1beta1.Query",
  method: "FeedConfigInfo",
  clientResolver
});
export const useGetFeedConfigInfo = buildUseQuery<QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse>({
  builderQueryFn: createGetFeedConfigInfo,
  queryKeyPrefix: "FeedConfigInfoQuery"
});
export const createGetLatestRound = (clientResolver?: RpcResolver) => buildQuery<QueryLatestRoundRequest, QueryLatestRoundResponse>({
  encode: QueryLatestRoundRequest.encode,
  decode: QueryLatestRoundResponse.decode,
  service: "injective.ocr.v1beta1.Query",
  method: "LatestRound",
  clientResolver
});
export const useGetLatestRound = buildUseQuery<QueryLatestRoundRequest, QueryLatestRoundResponse>({
  builderQueryFn: createGetLatestRound,
  queryKeyPrefix: "LatestRoundQuery"
});
export const createGetLatestTransmissionDetails = (clientResolver?: RpcResolver) => buildQuery<QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse>({
  encode: QueryLatestTransmissionDetailsRequest.encode,
  decode: QueryLatestTransmissionDetailsResponse.decode,
  service: "injective.ocr.v1beta1.Query",
  method: "LatestTransmissionDetails",
  clientResolver
});
export const useGetLatestTransmissionDetails = buildUseQuery<QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse>({
  builderQueryFn: createGetLatestTransmissionDetails,
  queryKeyPrefix: "LatestTransmissionDetailsQuery"
});
export const createGetOwedAmount = (clientResolver?: RpcResolver) => buildQuery<QueryOwedAmountRequest, QueryOwedAmountResponse>({
  encode: QueryOwedAmountRequest.encode,
  decode: QueryOwedAmountResponse.decode,
  service: "injective.ocr.v1beta1.Query",
  method: "OwedAmount",
  clientResolver
});
export const useGetOwedAmount = buildUseQuery<QueryOwedAmountRequest, QueryOwedAmountResponse>({
  builderQueryFn: createGetOwedAmount,
  queryKeyPrefix: "OwedAmountQuery"
});
export const createGetOcrModuleState = (clientResolver?: RpcResolver) => buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.ocr.v1beta1.Query",
  method: "OcrModuleState",
  clientResolver
});
export const useGetOcrModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: createGetOcrModuleState,
  queryKeyPrefix: "OcrModuleStateQuery"
});