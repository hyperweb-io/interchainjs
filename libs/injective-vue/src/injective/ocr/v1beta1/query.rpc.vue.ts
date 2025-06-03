import { buildUseVueQuery } from "../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryFeedConfigRequest, QueryFeedConfigResponse, QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse, QueryLatestRoundRequest, QueryLatestRoundResponse, QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse, QueryOwedAmountRequest, QueryOwedAmountResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
import { getParams, getFeedConfig, getFeedConfigInfo, getLatestRound, getLatestTransmissionDetails, getOwedAmount, getOcrModuleState } from "./query.rpc.func";
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/* Retrieves the OCR FeedConfig for a given FeedId */
export const useGetFeedConfig = buildUseVueQuery<QueryFeedConfigRequest, QueryFeedConfigResponse>({
  builderQueryFn: getFeedConfig,
  queryKeyPrefix: "FeedConfigQuery"
});
/* Retrieves the OCR FeedConfigInfo for a given FeedId */
export const useGetFeedConfigInfo = buildUseVueQuery<QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse>({
  builderQueryFn: getFeedConfigInfo,
  queryKeyPrefix: "FeedConfigInfoQuery"
});
/* Retrieves latest round ID and data, including median answer for that round */
export const useGetLatestRound = buildUseVueQuery<QueryLatestRoundRequest, QueryLatestRoundResponse>({
  builderQueryFn: getLatestRound,
  queryKeyPrefix: "LatestRoundQuery"
});
/* LatestTransmissionDetails returns details about the latest trasmission
 recorded on chain for the given feed ID. */
export const useGetLatestTransmissionDetails = buildUseVueQuery<QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse>({
  builderQueryFn: getLatestTransmissionDetails,
  queryKeyPrefix: "LatestTransmissionDetailsQuery"
});
/* Retrieves transmitter's owed amount */
export const useGetOwedAmount = buildUseVueQuery<QueryOwedAmountRequest, QueryOwedAmountResponse>({
  builderQueryFn: getOwedAmount,
  queryKeyPrefix: "OwedAmountQuery"
});
/* Retrieves the entire OCR module's state */
export const useGetOcrModuleState = buildUseVueQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getOcrModuleState,
  queryKeyPrefix: "OcrModuleStateQuery"
});