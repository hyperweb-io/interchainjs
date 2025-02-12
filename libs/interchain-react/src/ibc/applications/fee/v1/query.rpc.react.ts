import { buildUseQuery } from "../../../../react-query";
import { QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse, QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse, QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse, QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse, QueryTotalAckFeesRequest, QueryTotalAckFeesResponse, QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse, QueryPayeeRequest, QueryPayeeResponse, QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse, QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse, QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse } from "./query";
import { createGetIncentivizedPackets, createGetIncentivizedPacket, createGetIncentivizedPacketsForChannel, createGetTotalRecvFees, createGetTotalAckFees, createGetTotalTimeoutFees, createGetPayee, createGetCounterpartyPayee, createGetFeeEnabledChannels, createGetFeeEnabledChannel } from "./query.rpc.func";
export const useGetIncentivizedPackets = buildUseQuery<QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse>({
  builderQueryFn: createGetIncentivizedPackets,
  queryKeyPrefix: "IncentivizedPacketsQuery"
});
export const useGetIncentivizedPacket = buildUseQuery<QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse>({
  builderQueryFn: createGetIncentivizedPacket,
  queryKeyPrefix: "IncentivizedPacketQuery"
});
export const useGetIncentivizedPacketsForChannel = buildUseQuery<QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse>({
  builderQueryFn: createGetIncentivizedPacketsForChannel,
  queryKeyPrefix: "IncentivizedPacketsForChannelQuery"
});
export const useGetTotalRecvFees = buildUseQuery<QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse>({
  builderQueryFn: createGetTotalRecvFees,
  queryKeyPrefix: "TotalRecvFeesQuery"
});
export const useGetTotalAckFees = buildUseQuery<QueryTotalAckFeesRequest, QueryTotalAckFeesResponse>({
  builderQueryFn: createGetTotalAckFees,
  queryKeyPrefix: "TotalAckFeesQuery"
});
export const useGetTotalTimeoutFees = buildUseQuery<QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse>({
  builderQueryFn: createGetTotalTimeoutFees,
  queryKeyPrefix: "TotalTimeoutFeesQuery"
});
export const useGetPayee = buildUseQuery<QueryPayeeRequest, QueryPayeeResponse>({
  builderQueryFn: createGetPayee,
  queryKeyPrefix: "PayeeQuery"
});
export const useGetCounterpartyPayee = buildUseQuery<QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse>({
  builderQueryFn: createGetCounterpartyPayee,
  queryKeyPrefix: "CounterpartyPayeeQuery"
});
export const useGetFeeEnabledChannels = buildUseQuery<QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse>({
  builderQueryFn: createGetFeeEnabledChannels,
  queryKeyPrefix: "FeeEnabledChannelsQuery"
});
export const useGetFeeEnabledChannel = buildUseQuery<QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse>({
  builderQueryFn: createGetFeeEnabledChannel,
  queryKeyPrefix: "FeeEnabledChannelQuery"
});