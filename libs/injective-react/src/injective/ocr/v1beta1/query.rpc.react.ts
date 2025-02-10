import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryFeedConfigRequest, QueryFeedConfigResponse, QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse, QueryLatestRoundRequest, QueryLatestRoundResponse, QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse, QueryOwedAmountRequest, QueryOwedAmountResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
import { createGetParams, createGetFeedConfig, createGetFeedConfigInfo, createGetLatestRound, createGetLatestTransmissionDetails, createGetOwedAmount, createGetOcrModuleState } from "./query.rpc.func";
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetFeedConfig = buildUseQuery<QueryFeedConfigRequest, QueryFeedConfigResponse>({
  builderQueryFn: createGetFeedConfig,
  queryKeyPrefix: "FeedConfigQuery"
});
export const useGetFeedConfigInfo = buildUseQuery<QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse>({
  builderQueryFn: createGetFeedConfigInfo,
  queryKeyPrefix: "FeedConfigInfoQuery"
});
export const useGetLatestRound = buildUseQuery<QueryLatestRoundRequest, QueryLatestRoundResponse>({
  builderQueryFn: createGetLatestRound,
  queryKeyPrefix: "LatestRoundQuery"
});
export const useGetLatestTransmissionDetails = buildUseQuery<QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse>({
  builderQueryFn: createGetLatestTransmissionDetails,
  queryKeyPrefix: "LatestTransmissionDetailsQuery"
});
export const useGetOwedAmount = buildUseQuery<QueryOwedAmountRequest, QueryOwedAmountResponse>({
  builderQueryFn: createGetOwedAmount,
  queryKeyPrefix: "OwedAmountQuery"
});
export const useGetOcrModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: createGetOcrModuleState,
  queryKeyPrefix: "OcrModuleStateQuery"
});