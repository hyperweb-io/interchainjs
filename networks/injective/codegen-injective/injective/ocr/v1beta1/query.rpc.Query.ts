import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryParamsRequest, QueryParamsResponse, QueryFeedConfigRequest, QueryFeedConfigResponse, QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse, QueryLatestRoundRequest, QueryLatestRoundResponse, QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse, QueryOwedAmountRequest, QueryOwedAmountResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/** Query defines the gRPC querier service for OCR module. */
export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Retrieves the OCR FeedConfig for a given FeedId */
  feedConfig(request: QueryFeedConfigRequest): Promise<QueryFeedConfigResponse>;
  /** Retrieves the OCR FeedConfigInfo for a given FeedId */
  feedConfigInfo(request: QueryFeedConfigInfoRequest): Promise<QueryFeedConfigInfoResponse>;
  /** Retrieves latest round ID and data, including median answer for that round */
  latestRound(request: QueryLatestRoundRequest): Promise<QueryLatestRoundResponse>;
  /**
   * LatestTransmissionDetails returns details about the latest trasmission
   * recorded on chain for the given feed ID.
   */
  latestTransmissionDetails(request: QueryLatestTransmissionDetailsRequest): Promise<QueryLatestTransmissionDetailsResponse>;
  /** Retrieves transmitter's owed amount */
  owedAmount(request: QueryOwedAmountRequest): Promise<QueryOwedAmountResponse>;
  /** Retrieves the entire OCR module's state */
  ocrModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Params */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the OCR FeedConfig for a given FeedId */
  feedConfig = async (request: QueryFeedConfigRequest): Promise<QueryFeedConfigResponse> => {
    const data = QueryFeedConfigRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "FeedConfig", data);
    return promise.then(data => QueryFeedConfigResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the OCR FeedConfigInfo for a given FeedId */
  feedConfigInfo = async (request: QueryFeedConfigInfoRequest): Promise<QueryFeedConfigInfoResponse> => {
    const data = QueryFeedConfigInfoRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "FeedConfigInfo", data);
    return promise.then(data => QueryFeedConfigInfoResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves latest round ID and data, including median answer for that round */
  latestRound = async (request: QueryLatestRoundRequest): Promise<QueryLatestRoundResponse> => {
    const data = QueryLatestRoundRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "LatestRound", data);
    return promise.then(data => QueryLatestRoundResponse.decode(new BinaryReader(data)));
  };
  /* LatestTransmissionDetails returns details about the latest trasmission
   recorded on chain for the given feed ID. */
  latestTransmissionDetails = async (request: QueryLatestTransmissionDetailsRequest): Promise<QueryLatestTransmissionDetailsResponse> => {
    const data = QueryLatestTransmissionDetailsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "LatestTransmissionDetails", data);
    return promise.then(data => QueryLatestTransmissionDetailsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves transmitter's owed amount */
  owedAmount = async (request: QueryOwedAmountRequest): Promise<QueryOwedAmountResponse> => {
    const data = QueryOwedAmountRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "OwedAmount", data);
    return promise.then(data => QueryOwedAmountResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the entire OCR module's state */
  ocrModuleState = async (request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> => {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "OcrModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new QueryClientImpl(rpc);
};