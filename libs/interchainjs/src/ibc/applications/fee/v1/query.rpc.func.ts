import { buildQuery } from "../../../../helper-func-types";
import { QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse, QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse, QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse, QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse, QueryTotalAckFeesRequest, QueryTotalAckFeesResponse, QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse, QueryPayeeRequest, QueryPayeeResponse, QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse, QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse, QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse } from "./query";
/**
 * IncentivizedPackets returns all incentivized packets and their associated fees
 * @name getIncentivizedPackets
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.IncentivizedPackets
 */
export const getIncentivizedPackets = buildQuery<QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse>({
  encode: QueryIncentivizedPacketsRequest.encode,
  decode: QueryIncentivizedPacketsResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "IncentivizedPackets",
  deps: [QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse]
});
/**
 * IncentivizedPacket returns all packet fees for a packet given its identifier
 * @name getIncentivizedPacket
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.IncentivizedPacket
 */
export const getIncentivizedPacket = buildQuery<QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse>({
  encode: QueryIncentivizedPacketRequest.encode,
  decode: QueryIncentivizedPacketResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "IncentivizedPacket",
  deps: [QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse]
});
/**
 * Gets all incentivized packets for a specific channel
 * @name getIncentivizedPacketsForChannel
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.IncentivizedPacketsForChannel
 */
export const getIncentivizedPacketsForChannel = buildQuery<QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse>({
  encode: QueryIncentivizedPacketsForChannelRequest.encode,
  decode: QueryIncentivizedPacketsForChannelResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "IncentivizedPacketsForChannel",
  deps: [QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse]
});
/**
 * TotalRecvFees returns the total receive fees for a packet given its identifier
 * @name getTotalRecvFees
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.TotalRecvFees
 */
export const getTotalRecvFees = buildQuery<QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse>({
  encode: QueryTotalRecvFeesRequest.encode,
  decode: QueryTotalRecvFeesResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "TotalRecvFees",
  deps: [QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse]
});
/**
 * TotalAckFees returns the total acknowledgement fees for a packet given its identifier
 * @name getTotalAckFees
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.TotalAckFees
 */
export const getTotalAckFees = buildQuery<QueryTotalAckFeesRequest, QueryTotalAckFeesResponse>({
  encode: QueryTotalAckFeesRequest.encode,
  decode: QueryTotalAckFeesResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "TotalAckFees",
  deps: [QueryTotalAckFeesRequest, QueryTotalAckFeesResponse]
});
/**
 * TotalTimeoutFees returns the total timeout fees for a packet given its identifier
 * @name getTotalTimeoutFees
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.TotalTimeoutFees
 */
export const getTotalTimeoutFees = buildQuery<QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse>({
  encode: QueryTotalTimeoutFeesRequest.encode,
  decode: QueryTotalTimeoutFeesResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "TotalTimeoutFees",
  deps: [QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse]
});
/**
 * Payee returns the registered payee address for a specific channel given the relayer address
 * @name getPayee
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.Payee
 */
export const getPayee = buildQuery<QueryPayeeRequest, QueryPayeeResponse>({
  encode: QueryPayeeRequest.encode,
  decode: QueryPayeeResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "Payee",
  deps: [QueryPayeeRequest, QueryPayeeResponse]
});
/**
 * CounterpartyPayee returns the registered counterparty payee for forward relaying
 * @name getCounterpartyPayee
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.CounterpartyPayee
 */
export const getCounterpartyPayee = buildQuery<QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse>({
  encode: QueryCounterpartyPayeeRequest.encode,
  decode: QueryCounterpartyPayeeResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "CounterpartyPayee",
  deps: [QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse]
});
/**
 * FeeEnabledChannels returns a list of all fee enabled channels
 * @name getFeeEnabledChannels
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.FeeEnabledChannels
 */
export const getFeeEnabledChannels = buildQuery<QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse>({
  encode: QueryFeeEnabledChannelsRequest.encode,
  decode: QueryFeeEnabledChannelsResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "FeeEnabledChannels",
  deps: [QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse]
});
/**
 * FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel
 * @name getFeeEnabledChannel
 * @package ibc.applications.fee.v1
 * @see proto service: ibc.applications.fee.v1.FeeEnabledChannel
 */
export const getFeeEnabledChannel = buildQuery<QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse>({
  encode: QueryFeeEnabledChannelRequest.encode,
  decode: QueryFeeEnabledChannelResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "FeeEnabledChannel",
  deps: [QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse]
});