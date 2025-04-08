import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryFeedConfigRequest, QueryFeedConfigResponse, QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse, QueryLatestRoundRequest, QueryLatestRoundResponse, QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse, QueryOwedAmountRequest, QueryOwedAmountResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
import { getParams, getFeedConfig, getFeedConfigInfo, getLatestRound, getLatestTransmissionDetails, getOwedAmount, getOcrModuleState } from "./query.rpc.func";
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetFeedConfig = buildUseQuery<QueryFeedConfigRequest, QueryFeedConfigResponse>({
  builderQueryFn: getFeedConfig,
  queryKeyPrefix: "FeedConfigQuery"
});
export const useGetFeedConfigInfo = buildUseQuery<QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse>({
  builderQueryFn: getFeedConfigInfo,
  queryKeyPrefix: "FeedConfigInfoQuery"
});
export const useGetLatestRound = buildUseQuery<QueryLatestRoundRequest, QueryLatestRoundResponse>({
  builderQueryFn: getLatestRound,
  queryKeyPrefix: "LatestRoundQuery"
});
export const useGetLatestTransmissionDetails = buildUseQuery<QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse>({
  builderQueryFn: getLatestTransmissionDetails,
  queryKeyPrefix: "LatestTransmissionDetailsQuery"
});
export const useGetOwedAmount = buildUseQuery<QueryOwedAmountRequest, QueryOwedAmountResponse>({
  builderQueryFn: getOwedAmount,
  queryKeyPrefix: "OwedAmountQuery"
});
export const useGetOcrModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getOcrModuleState,
  queryKeyPrefix: "OcrModuleStateQuery"
});