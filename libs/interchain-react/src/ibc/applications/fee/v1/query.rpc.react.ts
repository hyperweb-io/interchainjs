import { buildUseQuery } from "../../../../react-query";
import { QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse, QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse, QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse, QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse, QueryTotalAckFeesRequest, QueryTotalAckFeesResponse, QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse, QueryPayeeRequest, QueryPayeeResponse, QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse, QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse, QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse } from "./query";
import { getIncentivizedPackets, getIncentivizedPacket, getIncentivizedPacketsForChannel, getTotalRecvFees, getTotalAckFees, getTotalTimeoutFees, getPayee, getCounterpartyPayee, getFeeEnabledChannels, getFeeEnabledChannel } from "./query.rpc.func";
export const useGetIncentivizedPackets = buildUseQuery<QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse>({
  builderQueryFn: getIncentivizedPackets,
  queryKeyPrefix: "IncentivizedPacketsQuery"
});
export const useGetIncentivizedPacket = buildUseQuery<QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse>({
  builderQueryFn: getIncentivizedPacket,
  queryKeyPrefix: "IncentivizedPacketQuery"
});
export const useGetIncentivizedPacketsForChannel = buildUseQuery<QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse>({
  builderQueryFn: getIncentivizedPacketsForChannel,
  queryKeyPrefix: "IncentivizedPacketsForChannelQuery"
});
export const useGetTotalRecvFees = buildUseQuery<QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse>({
  builderQueryFn: getTotalRecvFees,
  queryKeyPrefix: "TotalRecvFeesQuery"
});
export const useGetTotalAckFees = buildUseQuery<QueryTotalAckFeesRequest, QueryTotalAckFeesResponse>({
  builderQueryFn: getTotalAckFees,
  queryKeyPrefix: "TotalAckFeesQuery"
});
export const useGetTotalTimeoutFees = buildUseQuery<QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse>({
  builderQueryFn: getTotalTimeoutFees,
  queryKeyPrefix: "TotalTimeoutFeesQuery"
});
export const useGetPayee = buildUseQuery<QueryPayeeRequest, QueryPayeeResponse>({
  builderQueryFn: getPayee,
  queryKeyPrefix: "PayeeQuery"
});
export const useGetCounterpartyPayee = buildUseQuery<QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse>({
  builderQueryFn: getCounterpartyPayee,
  queryKeyPrefix: "CounterpartyPayeeQuery"
});
export const useGetFeeEnabledChannels = buildUseQuery<QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse>({
  builderQueryFn: getFeeEnabledChannels,
  queryKeyPrefix: "FeeEnabledChannelsQuery"
});
export const useGetFeeEnabledChannel = buildUseQuery<QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse>({
  builderQueryFn: getFeeEnabledChannel,
  queryKeyPrefix: "FeeEnabledChannelQuery"
});