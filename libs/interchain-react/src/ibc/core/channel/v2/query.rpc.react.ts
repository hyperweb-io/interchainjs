import { buildUseQuery } from "../../../../react-query";
import { QueryNextSequenceSendRequest, QueryNextSequenceSendResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse } from "./query";
import { getNextSequenceSend, getPacketCommitment, getPacketCommitments, getPacketAcknowledgement, getPacketAcknowledgements, getPacketReceipt, getUnreceivedPackets, getUnreceivedAcks } from "./query.rpc.func";
/**
 * NextSequenceSend returns the next send sequence for a given channel.
 * @name useGetNextSequenceSend
 * @package ibc.core.channel.v2
 * @see proto service: ibc.core.channel.v2.NextSequenceSend
 */
export const useGetNextSequenceSend = buildUseQuery<QueryNextSequenceSendRequest, QueryNextSequenceSendResponse>({
  builderQueryFn: getNextSequenceSend,
  queryKeyPrefix: "NextSequenceSendQuery"
});
/**
 * PacketCommitment queries a stored packet commitment hash.
 * @name useGetPacketCommitment
 * @package ibc.core.channel.v2
 * @see proto service: ibc.core.channel.v2.PacketCommitment
 */
export const useGetPacketCommitment = buildUseQuery<QueryPacketCommitmentRequest, QueryPacketCommitmentResponse>({
  builderQueryFn: getPacketCommitment,
  queryKeyPrefix: "PacketCommitmentQuery"
});
/**
 * PacketCommitments queries a stored packet commitment hash.
 * @name useGetPacketCommitments
 * @package ibc.core.channel.v2
 * @see proto service: ibc.core.channel.v2.PacketCommitments
 */
export const useGetPacketCommitments = buildUseQuery<QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse>({
  builderQueryFn: getPacketCommitments,
  queryKeyPrefix: "PacketCommitmentsQuery"
});
/**
 * PacketAcknowledgement queries a stored acknowledgement commitment hash.
 * @name useGetPacketAcknowledgement
 * @package ibc.core.channel.v2
 * @see proto service: ibc.core.channel.v2.PacketAcknowledgement
 */
export const useGetPacketAcknowledgement = buildUseQuery<QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse>({
  builderQueryFn: getPacketAcknowledgement,
  queryKeyPrefix: "PacketAcknowledgementQuery"
});
/**
 * PacketAcknowledgements returns all packet acknowledgements associated with a channel.
 * @name useGetPacketAcknowledgements
 * @package ibc.core.channel.v2
 * @see proto service: ibc.core.channel.v2.PacketAcknowledgements
 */
export const useGetPacketAcknowledgements = buildUseQuery<QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse>({
  builderQueryFn: getPacketAcknowledgements,
  queryKeyPrefix: "PacketAcknowledgementsQuery"
});
/**
 * PacketReceipt queries a stored packet receipt.
 * @name useGetPacketReceipt
 * @package ibc.core.channel.v2
 * @see proto service: ibc.core.channel.v2.PacketReceipt
 */
export const useGetPacketReceipt = buildUseQuery<QueryPacketReceiptRequest, QueryPacketReceiptResponse>({
  builderQueryFn: getPacketReceipt,
  queryKeyPrefix: "PacketReceiptQuery"
});
/**
 * UnreceivedPackets returns all the unreceived IBC packets associated with a channel and sequences.
 * @name useGetUnreceivedPackets
 * @package ibc.core.channel.v2
 * @see proto service: ibc.core.channel.v2.UnreceivedPackets
 */
export const useGetUnreceivedPackets = buildUseQuery<QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse>({
  builderQueryFn: getUnreceivedPackets,
  queryKeyPrefix: "UnreceivedPacketsQuery"
});
/**
 * UnreceivedAcks returns all the unreceived IBC acknowledgements associated with a channel and sequences.
 * @name useGetUnreceivedAcks
 * @package ibc.core.channel.v2
 * @see proto service: ibc.core.channel.v2.UnreceivedAcks
 */
export const useGetUnreceivedAcks = buildUseQuery<QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse>({
  builderQueryFn: getUnreceivedAcks,
  queryKeyPrefix: "UnreceivedAcksQuery"
});