import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryFeedConfigRequest, QueryFeedConfigResponse, QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse, QueryLatestRoundRequest, QueryLatestRoundResponse, QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse, QueryOwedAmountRequest, QueryOwedAmountResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/**
 * @name getParams
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "injective.ocr.v1beta1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * Retrieves the OCR FeedConfig for a given FeedId
 * @name getFeedConfig
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.FeedConfig
 */
export const getFeedConfig = buildQuery<QueryFeedConfigRequest, QueryFeedConfigResponse>({
  encode: QueryFeedConfigRequest.encode,
  decode: QueryFeedConfigResponse.decode,
  service: "injective.ocr.v1beta1.Query",
  method: "FeedConfig",
  deps: [QueryFeedConfigRequest, QueryFeedConfigResponse]
});
/**
 * Retrieves the OCR FeedConfigInfo for a given FeedId
 * @name getFeedConfigInfo
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.FeedConfigInfo
 */
export const getFeedConfigInfo = buildQuery<QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse>({
  encode: QueryFeedConfigInfoRequest.encode,
  decode: QueryFeedConfigInfoResponse.decode,
  service: "injective.ocr.v1beta1.Query",
  method: "FeedConfigInfo",
  deps: [QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse]
});
/**
 * Retrieves latest round ID and data, including median answer for that round
 * @name getLatestRound
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.LatestRound
 */
export const getLatestRound = buildQuery<QueryLatestRoundRequest, QueryLatestRoundResponse>({
  encode: QueryLatestRoundRequest.encode,
  decode: QueryLatestRoundResponse.decode,
  service: "injective.ocr.v1beta1.Query",
  method: "LatestRound",
  deps: [QueryLatestRoundRequest, QueryLatestRoundResponse]
});
/**
 * LatestTransmissionDetails returns details about the latest trasmission
 * recorded on chain for the given feed ID.
 * @name getLatestTransmissionDetails
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.LatestTransmissionDetails
 */
export const getLatestTransmissionDetails = buildQuery<QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse>({
  encode: QueryLatestTransmissionDetailsRequest.encode,
  decode: QueryLatestTransmissionDetailsResponse.decode,
  service: "injective.ocr.v1beta1.Query",
  method: "LatestTransmissionDetails",
  deps: [QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse]
});
/**
 * Retrieves transmitter's owed amount
 * @name getOwedAmount
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.OwedAmount
 */
export const getOwedAmount = buildQuery<QueryOwedAmountRequest, QueryOwedAmountResponse>({
  encode: QueryOwedAmountRequest.encode,
  decode: QueryOwedAmountResponse.decode,
  service: "injective.ocr.v1beta1.Query",
  method: "OwedAmount",
  deps: [QueryOwedAmountRequest, QueryOwedAmountResponse]
});
/**
 * Retrieves the entire OCR module's state
 * @name getOcrModuleState
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.OcrModuleState
 */
export const getOcrModuleState = buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.ocr.v1beta1.Query",
  method: "OcrModuleState",
  deps: [QueryModuleStateRequest, QueryModuleStateResponse]
});