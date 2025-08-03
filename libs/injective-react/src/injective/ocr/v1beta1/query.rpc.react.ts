import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryFeedConfigRequest, QueryFeedConfigResponse, QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse, QueryLatestRoundRequest, QueryLatestRoundResponse, QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse, QueryOwedAmountRequest, QueryOwedAmountResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
import { getParams, getFeedConfig, getFeedConfigInfo, getLatestRound, getLatestTransmissionDetails, getOwedAmount, getOcrModuleState } from "./query.rpc.func";
/**
 * @name useGetParams
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.Params
 */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * Retrieves the OCR FeedConfig for a given FeedId
 * @name useGetFeedConfig
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.FeedConfig
 */
export const useGetFeedConfig = buildUseQuery<QueryFeedConfigRequest, QueryFeedConfigResponse>({
  builderQueryFn: getFeedConfig,
  queryKeyPrefix: "FeedConfigQuery"
});
/**
 * Retrieves the OCR FeedConfigInfo for a given FeedId
 * @name useGetFeedConfigInfo
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.FeedConfigInfo
 */
export const useGetFeedConfigInfo = buildUseQuery<QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse>({
  builderQueryFn: getFeedConfigInfo,
  queryKeyPrefix: "FeedConfigInfoQuery"
});
/**
 * Retrieves latest round ID and data, including median answer for that round
 * @name useGetLatestRound
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.LatestRound
 */
export const useGetLatestRound = buildUseQuery<QueryLatestRoundRequest, QueryLatestRoundResponse>({
  builderQueryFn: getLatestRound,
  queryKeyPrefix: "LatestRoundQuery"
});
/**
 * LatestTransmissionDetails returns details about the latest trasmission
 * recorded on chain for the given feed ID.
 * @name useGetLatestTransmissionDetails
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.LatestTransmissionDetails
 */
export const useGetLatestTransmissionDetails = buildUseQuery<QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse>({
  builderQueryFn: getLatestTransmissionDetails,
  queryKeyPrefix: "LatestTransmissionDetailsQuery"
});
/**
 * Retrieves transmitter's owed amount
 * @name useGetOwedAmount
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.OwedAmount
 */
export const useGetOwedAmount = buildUseQuery<QueryOwedAmountRequest, QueryOwedAmountResponse>({
  builderQueryFn: getOwedAmount,
  queryKeyPrefix: "OwedAmountQuery"
});
/**
 * Retrieves the entire OCR module's state
 * @name useGetOcrModuleState
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.OcrModuleState
 */
export const useGetOcrModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getOcrModuleState,
  queryKeyPrefix: "OcrModuleStateQuery"
});