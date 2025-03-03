import { buildUseVueQuery } from "../../../../vue-query";
import { QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse, QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse, QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse, QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse, QueryTotalAckFeesRequest, QueryTotalAckFeesResponse, QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse, QueryPayeeRequest, QueryPayeeResponse, QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse, QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse, QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse } from "./query";
import { createGetIncentivizedPackets, createGetIncentivizedPacket, createGetIncentivizedPacketsForChannel, createGetTotalRecvFees, createGetTotalAckFees, createGetTotalTimeoutFees, createGetPayee, createGetCounterpartyPayee, createGetFeeEnabledChannels, createGetFeeEnabledChannel } from "./query.rpc.func";
export const useGetIncentivizedPackets = buildUseVueQuery<QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse>({
  builderQueryFn: createGetIncentivizedPackets,
  queryKeyPrefix: "IncentivizedPacketsQuery"
});
export const useGetIncentivizedPacket = buildUseVueQuery<QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse>({
  builderQueryFn: createGetIncentivizedPacket,
  queryKeyPrefix: "IncentivizedPacketQuery"
});
export const useGetIncentivizedPacketsForChannel = buildUseVueQuery<QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse>({
  builderQueryFn: createGetIncentivizedPacketsForChannel,
  queryKeyPrefix: "IncentivizedPacketsForChannelQuery"
});
export const useGetTotalRecvFees = buildUseVueQuery<QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse>({
  builderQueryFn: createGetTotalRecvFees,
  queryKeyPrefix: "TotalRecvFeesQuery"
});
export const useGetTotalAckFees = buildUseVueQuery<QueryTotalAckFeesRequest, QueryTotalAckFeesResponse>({
  builderQueryFn: createGetTotalAckFees,
  queryKeyPrefix: "TotalAckFeesQuery"
});
export const useGetTotalTimeoutFees = buildUseVueQuery<QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse>({
  builderQueryFn: createGetTotalTimeoutFees,
  queryKeyPrefix: "TotalTimeoutFeesQuery"
});
export const useGetPayee = buildUseVueQuery<QueryPayeeRequest, QueryPayeeResponse>({
  builderQueryFn: createGetPayee,
  queryKeyPrefix: "PayeeQuery"
});
export const useGetCounterpartyPayee = buildUseVueQuery<QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse>({
  builderQueryFn: createGetCounterpartyPayee,
  queryKeyPrefix: "CounterpartyPayeeQuery"
});
export const useGetFeeEnabledChannels = buildUseVueQuery<QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse>({
  builderQueryFn: createGetFeeEnabledChannels,
  queryKeyPrefix: "FeeEnabledChannelsQuery"
});
export const useGetFeeEnabledChannel = buildUseVueQuery<QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse>({
  builderQueryFn: createGetFeeEnabledChannel,
  queryKeyPrefix: "FeeEnabledChannelQuery"
});