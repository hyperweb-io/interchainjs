import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse, QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse, QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse, QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse, QueryTotalAckFeesRequest, QueryTotalAckFeesResponse, QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse, QueryPayeeRequest, QueryPayeeResponse, QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse, QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse, QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse } from "./query";
export const createGetIncentivizedPackets = (clientResolver?: RpcResolver) => buildQuery<QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse>({
  encode: QueryIncentivizedPacketsRequest.encode,
  decode: QueryIncentivizedPacketsResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "IncentivizedPackets",
  clientResolver
});
export const createGetIncentivizedPacket = (clientResolver?: RpcResolver) => buildQuery<QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse>({
  encode: QueryIncentivizedPacketRequest.encode,
  decode: QueryIncentivizedPacketResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "IncentivizedPacket",
  clientResolver
});
export const createGetIncentivizedPacketsForChannel = (clientResolver?: RpcResolver) => buildQuery<QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse>({
  encode: QueryIncentivizedPacketsForChannelRequest.encode,
  decode: QueryIncentivizedPacketsForChannelResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "IncentivizedPacketsForChannel",
  clientResolver
});
export const createGetTotalRecvFees = (clientResolver?: RpcResolver) => buildQuery<QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse>({
  encode: QueryTotalRecvFeesRequest.encode,
  decode: QueryTotalRecvFeesResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "TotalRecvFees",
  clientResolver
});
export const createGetTotalAckFees = (clientResolver?: RpcResolver) => buildQuery<QueryTotalAckFeesRequest, QueryTotalAckFeesResponse>({
  encode: QueryTotalAckFeesRequest.encode,
  decode: QueryTotalAckFeesResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "TotalAckFees",
  clientResolver
});
export const createGetTotalTimeoutFees = (clientResolver?: RpcResolver) => buildQuery<QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse>({
  encode: QueryTotalTimeoutFeesRequest.encode,
  decode: QueryTotalTimeoutFeesResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "TotalTimeoutFees",
  clientResolver
});
export const createGetPayee = (clientResolver?: RpcResolver) => buildQuery<QueryPayeeRequest, QueryPayeeResponse>({
  encode: QueryPayeeRequest.encode,
  decode: QueryPayeeResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "Payee",
  clientResolver
});
export const createGetCounterpartyPayee = (clientResolver?: RpcResolver) => buildQuery<QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse>({
  encode: QueryCounterpartyPayeeRequest.encode,
  decode: QueryCounterpartyPayeeResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "CounterpartyPayee",
  clientResolver
});
export const createGetFeeEnabledChannels = (clientResolver?: RpcResolver) => buildQuery<QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse>({
  encode: QueryFeeEnabledChannelsRequest.encode,
  decode: QueryFeeEnabledChannelsResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "FeeEnabledChannels",
  clientResolver
});
export const createGetFeeEnabledChannel = (clientResolver?: RpcResolver) => buildQuery<QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse>({
  encode: QueryFeeEnabledChannelRequest.encode,
  decode: QueryFeeEnabledChannelResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "FeeEnabledChannel",
  clientResolver
});