import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryFeedConfigRequest, QueryFeedConfigResponse, QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse, QueryLatestRoundRequest, QueryLatestRoundResponse, QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse, QueryOwedAmountRequest, QueryOwedAmountResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "injective.ocr.v1beta1.Query",
  method: "Params",
  clientResolver,
  deps: [QueryParamsRequest, QueryParamsResponse]
});
export const createGetFeedConfig = (clientResolver?: RpcResolver) => buildQuery<QueryFeedConfigRequest, QueryFeedConfigResponse>({
  encode: QueryFeedConfigRequest.encode,
  decode: QueryFeedConfigResponse.decode,
  service: "injective.ocr.v1beta1.Query",
  method: "FeedConfig",
  clientResolver,
  deps: [QueryFeedConfigRequest, QueryFeedConfigResponse]
});
export const createGetFeedConfigInfo = (clientResolver?: RpcResolver) => buildQuery<QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse>({
  encode: QueryFeedConfigInfoRequest.encode,
  decode: QueryFeedConfigInfoResponse.decode,
  service: "injective.ocr.v1beta1.Query",
  method: "FeedConfigInfo",
  clientResolver,
  deps: [QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse]
});
export const createGetLatestRound = (clientResolver?: RpcResolver) => buildQuery<QueryLatestRoundRequest, QueryLatestRoundResponse>({
  encode: QueryLatestRoundRequest.encode,
  decode: QueryLatestRoundResponse.decode,
  service: "injective.ocr.v1beta1.Query",
  method: "LatestRound",
  clientResolver,
  deps: [QueryLatestRoundRequest, QueryLatestRoundResponse]
});
export const createGetLatestTransmissionDetails = (clientResolver?: RpcResolver) => buildQuery<QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse>({
  encode: QueryLatestTransmissionDetailsRequest.encode,
  decode: QueryLatestTransmissionDetailsResponse.decode,
  service: "injective.ocr.v1beta1.Query",
  method: "LatestTransmissionDetails",
  clientResolver,
  deps: [QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse]
});
export const createGetOwedAmount = (clientResolver?: RpcResolver) => buildQuery<QueryOwedAmountRequest, QueryOwedAmountResponse>({
  encode: QueryOwedAmountRequest.encode,
  decode: QueryOwedAmountResponse.decode,
  service: "injective.ocr.v1beta1.Query",
  method: "OwedAmount",
  clientResolver,
  deps: [QueryOwedAmountRequest, QueryOwedAmountResponse]
});
export const createGetOcrModuleState = (clientResolver?: RpcResolver) => buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.ocr.v1beta1.Query",
  method: "OcrModuleState",
  clientResolver,
  deps: [QueryModuleStateRequest, QueryModuleStateResponse]
});