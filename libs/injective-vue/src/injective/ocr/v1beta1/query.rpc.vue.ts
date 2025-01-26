import { buildUseVueQuery } from "../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryFeedConfigRequest, QueryFeedConfigResponse, QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse, QueryLatestRoundRequest, QueryLatestRoundResponse, QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse, QueryOwedAmountRequest, QueryOwedAmountResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
import { createGetParams, createGetFeedConfig, createGetFeedConfigInfo, createGetLatestRound, createGetLatestTransmissionDetails, createGetOwedAmount, createGetOcrModuleState } from "./query.rpc.func";
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetFeedConfig = buildUseVueQuery<QueryFeedConfigRequest, QueryFeedConfigResponse>({
  builderQueryFn: createGetFeedConfig,
  queryKeyPrefix: "FeedConfigQuery"
});
export const useGetFeedConfigInfo = buildUseVueQuery<QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse>({
  builderQueryFn: createGetFeedConfigInfo,
  queryKeyPrefix: "FeedConfigInfoQuery"
});
export const useGetLatestRound = buildUseVueQuery<QueryLatestRoundRequest, QueryLatestRoundResponse>({
  builderQueryFn: createGetLatestRound,
  queryKeyPrefix: "LatestRoundQuery"
});
export const useGetLatestTransmissionDetails = buildUseVueQuery<QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse>({
  builderQueryFn: createGetLatestTransmissionDetails,
  queryKeyPrefix: "LatestTransmissionDetailsQuery"
});
export const useGetOwedAmount = buildUseVueQuery<QueryOwedAmountRequest, QueryOwedAmountResponse>({
  builderQueryFn: createGetOwedAmount,
  queryKeyPrefix: "OwedAmountQuery"
});
export const useGetOcrModuleState = buildUseVueQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: createGetOcrModuleState,
  queryKeyPrefix: "OcrModuleStateQuery"
});