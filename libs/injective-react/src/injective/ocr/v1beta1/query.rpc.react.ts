import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryFeedConfigRequest, QueryFeedConfigResponse, QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse, QueryLatestRoundRequest, QueryLatestRoundResponse, QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse, QueryOwedAmountRequest, QueryOwedAmountResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
import { getParams, getFeedConfig, getFeedConfigInfo, getLatestRound, getLatestTransmissionDetails, getOwedAmount, getOcrModuleState } from "./query.rpc.func";
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/* Retrieves the OCR FeedConfig for a given FeedId */
export const useGetFeedConfig = buildUseQuery<QueryFeedConfigRequest, QueryFeedConfigResponse>({
  builderQueryFn: getFeedConfig,
  queryKeyPrefix: "FeedConfigQuery"
});
/* Retrieves the OCR FeedConfigInfo for a given FeedId */
export const useGetFeedConfigInfo = buildUseQuery<QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse>({
  builderQueryFn: getFeedConfigInfo,
  queryKeyPrefix: "FeedConfigInfoQuery"
});
/* Retrieves latest round ID and data, including median answer for that round */
export const useGetLatestRound = buildUseQuery<QueryLatestRoundRequest, QueryLatestRoundResponse>({
  builderQueryFn: getLatestRound,
  queryKeyPrefix: "LatestRoundQuery"
});
/* LatestTransmissionDetails returns details about the latest trasmission
 recorded on chain for the given feed ID. */
export const useGetLatestTransmissionDetails = buildUseQuery<QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse>({
  builderQueryFn: getLatestTransmissionDetails,
  queryKeyPrefix: "LatestTransmissionDetailsQuery"
});
/* Retrieves transmitter's owed amount */
export const useGetOwedAmount = buildUseQuery<QueryOwedAmountRequest, QueryOwedAmountResponse>({
  builderQueryFn: getOwedAmount,
  queryKeyPrefix: "OwedAmountQuery"
});
/* Retrieves the entire OCR module's state */
export const useGetOcrModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getOcrModuleState,
  queryKeyPrefix: "OcrModuleStateQuery"
});