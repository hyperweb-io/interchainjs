import { buildUseVueQuery } from "../../../../vue-query";
import { QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse, QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse, QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse, QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse, QueryTotalAckFeesRequest, QueryTotalAckFeesResponse, QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse, QueryPayeeRequest, QueryPayeeResponse, QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse, QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse, QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse } from "./query";
import { getIncentivizedPackets, getIncentivizedPacket, getIncentivizedPacketsForChannel, getTotalRecvFees, getTotalAckFees, getTotalTimeoutFees, getPayee, getCounterpartyPayee, getFeeEnabledChannels, getFeeEnabledChannel } from "./query.rpc.func";
/**
 * IncentivizedPackets returns all incentivized packets and their associated fees
 * @name useGetIncentivizedPackets
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.IncentivizedPackets
 */
export const useGetIncentivizedPackets = buildUseVueQuery<QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse>({
  builderQueryFn: getIncentivizedPackets,
  queryKeyPrefix: "IncentivizedPacketsQuery"
});
/**
 * IncentivizedPacket returns all packet fees for a packet given its identifier
 * @name useGetIncentivizedPacket
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.IncentivizedPacket
 */
export const useGetIncentivizedPacket = buildUseVueQuery<QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse>({
  builderQueryFn: getIncentivizedPacket,
  queryKeyPrefix: "IncentivizedPacketQuery"
});
/**
 * Gets all incentivized packets for a specific channel
 * @name useGetIncentivizedPacketsForChannel
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.IncentivizedPacketsForChannel
 */
export const useGetIncentivizedPacketsForChannel = buildUseVueQuery<QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse>({
  builderQueryFn: getIncentivizedPacketsForChannel,
  queryKeyPrefix: "IncentivizedPacketsForChannelQuery"
});
/**
 * TotalRecvFees returns the total receive fees for a packet given its identifier
 * @name useGetTotalRecvFees
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.TotalRecvFees
 */
export const useGetTotalRecvFees = buildUseVueQuery<QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse>({
  builderQueryFn: getTotalRecvFees,
  queryKeyPrefix: "TotalRecvFeesQuery"
});
/**
 * TotalAckFees returns the total acknowledgement fees for a packet given its identifier
 * @name useGetTotalAckFees
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.TotalAckFees
 */
export const useGetTotalAckFees = buildUseVueQuery<QueryTotalAckFeesRequest, QueryTotalAckFeesResponse>({
  builderQueryFn: getTotalAckFees,
  queryKeyPrefix: "TotalAckFeesQuery"
});
/**
 * TotalTimeoutFees returns the total timeout fees for a packet given its identifier
 * @name useGetTotalTimeoutFees
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.TotalTimeoutFees
 */
export const useGetTotalTimeoutFees = buildUseVueQuery<QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse>({
  builderQueryFn: getTotalTimeoutFees,
  queryKeyPrefix: "TotalTimeoutFeesQuery"
});
/**
 * Payee returns the registered payee address for a specific channel given the relayer address
 * @name useGetPayee
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.Payee
 */
export const useGetPayee = buildUseVueQuery<QueryPayeeRequest, QueryPayeeResponse>({
  builderQueryFn: getPayee,
  queryKeyPrefix: "PayeeQuery"
});
/**
 * CounterpartyPayee returns the registered counterparty payee for forward relaying
 * @name useGetCounterpartyPayee
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.CounterpartyPayee
 */
export const useGetCounterpartyPayee = buildUseVueQuery<QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse>({
  builderQueryFn: getCounterpartyPayee,
  queryKeyPrefix: "CounterpartyPayeeQuery"
});
/**
 * FeeEnabledChannels returns a list of all fee enabled channels
 * @name useGetFeeEnabledChannels
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.FeeEnabledChannels
 */
export const useGetFeeEnabledChannels = buildUseVueQuery<QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse>({
  builderQueryFn: getFeeEnabledChannels,
  queryKeyPrefix: "FeeEnabledChannelsQuery"
});
/**
 * FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel
 * @name useGetFeeEnabledChannel
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.FeeEnabledChannel
 */
export const useGetFeeEnabledChannel = buildUseVueQuery<QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse>({
  builderQueryFn: getFeeEnabledChannel,
  queryKeyPrefix: "FeeEnabledChannelQuery"
});