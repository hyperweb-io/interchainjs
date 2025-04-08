import { buildUseVueQuery } from "../../../../vue-query";
import { QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse, QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse, QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse, QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse, QueryTotalAckFeesRequest, QueryTotalAckFeesResponse, QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse, QueryPayeeRequest, QueryPayeeResponse, QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse, QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse, QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse } from "./query";
import { getIncentivizedPackets, getIncentivizedPacket, getIncentivizedPacketsForChannel, getTotalRecvFees, getTotalAckFees, getTotalTimeoutFees, getPayee, getCounterpartyPayee, getFeeEnabledChannels, getFeeEnabledChannel } from "./query.rpc.func";
export const useGetIncentivizedPackets = buildUseVueQuery<QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse>({
  builderQueryFn: getIncentivizedPackets,
  queryKeyPrefix: "IncentivizedPacketsQuery"
});
export const useGetIncentivizedPacket = buildUseVueQuery<QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse>({
  builderQueryFn: getIncentivizedPacket,
  queryKeyPrefix: "IncentivizedPacketQuery"
});
export const useGetIncentivizedPacketsForChannel = buildUseVueQuery<QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse>({
  builderQueryFn: getIncentivizedPacketsForChannel,
  queryKeyPrefix: "IncentivizedPacketsForChannelQuery"
});
export const useGetTotalRecvFees = buildUseVueQuery<QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse>({
  builderQueryFn: getTotalRecvFees,
  queryKeyPrefix: "TotalRecvFeesQuery"
});
export const useGetTotalAckFees = buildUseVueQuery<QueryTotalAckFeesRequest, QueryTotalAckFeesResponse>({
  builderQueryFn: getTotalAckFees,
  queryKeyPrefix: "TotalAckFeesQuery"
});
export const useGetTotalTimeoutFees = buildUseVueQuery<QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse>({
  builderQueryFn: getTotalTimeoutFees,
  queryKeyPrefix: "TotalTimeoutFeesQuery"
});
export const useGetPayee = buildUseVueQuery<QueryPayeeRequest, QueryPayeeResponse>({
  builderQueryFn: getPayee,
  queryKeyPrefix: "PayeeQuery"
});
export const useGetCounterpartyPayee = buildUseVueQuery<QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse>({
  builderQueryFn: getCounterpartyPayee,
  queryKeyPrefix: "CounterpartyPayeeQuery"
});
export const useGetFeeEnabledChannels = buildUseVueQuery<QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse>({
  builderQueryFn: getFeeEnabledChannels,
  queryKeyPrefix: "FeeEnabledChannelsQuery"
});
export const useGetFeeEnabledChannel = buildUseVueQuery<QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse>({
  builderQueryFn: getFeeEnabledChannel,
  queryKeyPrefix: "FeeEnabledChannelQuery"
});