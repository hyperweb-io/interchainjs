import { buildQuery } from "../../../../helper-func-types";
import { QueryNextSequenceSendRequest, QueryNextSequenceSendResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse } from "./query";
/**
 * NextSequenceSend returns the next send sequence for a given channel.
 * @name getNextSequenceSend
 * @package ibc.core.channel.v2
 * @see proto service: ibc.core.channel.v2.NextSequenceSend
 */
export const getNextSequenceSend = buildQuery<QueryNextSequenceSendRequest, QueryNextSequenceSendResponse>({
  encode: QueryNextSequenceSendRequest.encode,
  decode: QueryNextSequenceSendResponse.decode,
  service: "ibc.core.channel.v2.Query",
  method: "NextSequenceSend",
  deps: [QueryNextSequenceSendRequest, QueryNextSequenceSendResponse]
});
/**
 * PacketCommitment queries a stored packet commitment hash.
 * @name getPacketCommitment
 * @package ibc.core.channel.v2
 * @see proto service: ibc.core.channel.v2.PacketCommitment
 */
export const getPacketCommitment = buildQuery<QueryPacketCommitmentRequest, QueryPacketCommitmentResponse>({
  encode: QueryPacketCommitmentRequest.encode,
  decode: QueryPacketCommitmentResponse.decode,
  service: "ibc.core.channel.v2.Query",
  method: "PacketCommitment",
  deps: [QueryPacketCommitmentRequest, QueryPacketCommitmentResponse]
});
/**
 * PacketCommitments queries a stored packet commitment hash.
 * @name getPacketCommitments
 * @package ibc.core.channel.v2
 * @see proto service: ibc.core.channel.v2.PacketCommitments
 */
export const getPacketCommitments = buildQuery<QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse>({
  encode: QueryPacketCommitmentsRequest.encode,
  decode: QueryPacketCommitmentsResponse.decode,
  service: "ibc.core.channel.v2.Query",
  method: "PacketCommitments",
  deps: [QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse]
});
/**
 * PacketAcknowledgement queries a stored acknowledgement commitment hash.
 * @name getPacketAcknowledgement
 * @package ibc.core.channel.v2
 * @see proto service: ibc.core.channel.v2.PacketAcknowledgement
 */
export const getPacketAcknowledgement = buildQuery<QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse>({
  encode: QueryPacketAcknowledgementRequest.encode,
  decode: QueryPacketAcknowledgementResponse.decode,
  service: "ibc.core.channel.v2.Query",
  method: "PacketAcknowledgement",
  deps: [QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse]
});
/**
 * PacketAcknowledgements returns all packet acknowledgements associated with a channel.
 * @name getPacketAcknowledgements
 * @package ibc.core.channel.v2
 * @see proto service: ibc.core.channel.v2.PacketAcknowledgements
 */
export const getPacketAcknowledgements = buildQuery<QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse>({
  encode: QueryPacketAcknowledgementsRequest.encode,
  decode: QueryPacketAcknowledgementsResponse.decode,
  service: "ibc.core.channel.v2.Query",
  method: "PacketAcknowledgements",
  deps: [QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse]
});
/**
 * PacketReceipt queries a stored packet receipt.
 * @name getPacketReceipt
 * @package ibc.core.channel.v2
 * @see proto service: ibc.core.channel.v2.PacketReceipt
 */
export const getPacketReceipt = buildQuery<QueryPacketReceiptRequest, QueryPacketReceiptResponse>({
  encode: QueryPacketReceiptRequest.encode,
  decode: QueryPacketReceiptResponse.decode,
  service: "ibc.core.channel.v2.Query",
  method: "PacketReceipt",
  deps: [QueryPacketReceiptRequest, QueryPacketReceiptResponse]
});
/**
 * UnreceivedPackets returns all the unreceived IBC packets associated with a channel and sequences.
 * @name getUnreceivedPackets
 * @package ibc.core.channel.v2
 * @see proto service: ibc.core.channel.v2.UnreceivedPackets
 */
export const getUnreceivedPackets = buildQuery<QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse>({
  encode: QueryUnreceivedPacketsRequest.encode,
  decode: QueryUnreceivedPacketsResponse.decode,
  service: "ibc.core.channel.v2.Query",
  method: "UnreceivedPackets",
  deps: [QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse]
});
/**
 * UnreceivedAcks returns all the unreceived IBC acknowledgements associated with a channel and sequences.
 * @name getUnreceivedAcks
 * @package ibc.core.channel.v2
 * @see proto service: ibc.core.channel.v2.UnreceivedAcks
 */
export const getUnreceivedAcks = buildQuery<QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse>({
  encode: QueryUnreceivedAcksRequest.encode,
  decode: QueryUnreceivedAcksResponse.decode,
  service: "ibc.core.channel.v2.Query",
  method: "UnreceivedAcks",
  deps: [QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse]
});