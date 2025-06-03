import { buildQuery } from "../../../../helper-func-types";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse, QueryNextSequenceSendRequest, QueryNextSequenceSendResponse, QueryUpgradeErrorRequest, QueryUpgradeErrorResponse, QueryUpgradeRequest, QueryUpgradeResponse, QueryChannelParamsRequest, QueryChannelParamsResponse } from "./query";
/* Channel queries an IBC Channel. */
export const getChannel = buildQuery<QueryChannelRequest, QueryChannelResponse>({
  encode: QueryChannelRequest.encode,
  decode: QueryChannelResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "Channel",
  deps: [QueryChannelRequest, QueryChannelResponse]
});
/* Channels queries all the IBC channels of a chain. */
export const getChannels = buildQuery<QueryChannelsRequest, QueryChannelsResponse>({
  encode: QueryChannelsRequest.encode,
  decode: QueryChannelsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "Channels",
  deps: [QueryChannelsRequest, QueryChannelsResponse]
});
/* ConnectionChannels queries all the channels associated with a connection
 end. */
export const getConnectionChannels = buildQuery<QueryConnectionChannelsRequest, QueryConnectionChannelsResponse>({
  encode: QueryConnectionChannelsRequest.encode,
  decode: QueryConnectionChannelsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "ConnectionChannels",
  deps: [QueryConnectionChannelsRequest, QueryConnectionChannelsResponse]
});
/* ChannelClientState queries for the client state for the channel associated
 with the provided channel identifiers. */
export const getChannelClientState = buildQuery<QueryChannelClientStateRequest, QueryChannelClientStateResponse>({
  encode: QueryChannelClientStateRequest.encode,
  decode: QueryChannelClientStateResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "ChannelClientState",
  deps: [QueryChannelClientStateRequest, QueryChannelClientStateResponse]
});
/* ChannelConsensusState queries for the consensus state for the channel
 associated with the provided channel identifiers. */
export const getChannelConsensusState = buildQuery<QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse>({
  encode: QueryChannelConsensusStateRequest.encode,
  decode: QueryChannelConsensusStateResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "ChannelConsensusState",
  deps: [QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse]
});
/* PacketCommitment queries a stored packet commitment hash. */
export const getPacketCommitment = buildQuery<QueryPacketCommitmentRequest, QueryPacketCommitmentResponse>({
  encode: QueryPacketCommitmentRequest.encode,
  decode: QueryPacketCommitmentResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketCommitment",
  deps: [QueryPacketCommitmentRequest, QueryPacketCommitmentResponse]
});
/* PacketCommitments returns all the packet commitments hashes associated
 with a channel. */
export const getPacketCommitments = buildQuery<QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse>({
  encode: QueryPacketCommitmentsRequest.encode,
  decode: QueryPacketCommitmentsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketCommitments",
  deps: [QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse]
});
/* PacketReceipt queries if a given packet sequence has been received on the
 queried chain */
export const getPacketReceipt = buildQuery<QueryPacketReceiptRequest, QueryPacketReceiptResponse>({
  encode: QueryPacketReceiptRequest.encode,
  decode: QueryPacketReceiptResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketReceipt",
  deps: [QueryPacketReceiptRequest, QueryPacketReceiptResponse]
});
/* PacketAcknowledgement queries a stored packet acknowledgement hash. */
export const getPacketAcknowledgement = buildQuery<QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse>({
  encode: QueryPacketAcknowledgementRequest.encode,
  decode: QueryPacketAcknowledgementResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketAcknowledgement",
  deps: [QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse]
});
/* PacketAcknowledgements returns all the packet acknowledgements associated
 with a channel. */
export const getPacketAcknowledgements = buildQuery<QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse>({
  encode: QueryPacketAcknowledgementsRequest.encode,
  decode: QueryPacketAcknowledgementsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketAcknowledgements",
  deps: [QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse]
});
/* UnreceivedPackets returns all the unreceived IBC packets associated with a
 channel and sequences. */
export const getUnreceivedPackets = buildQuery<QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse>({
  encode: QueryUnreceivedPacketsRequest.encode,
  decode: QueryUnreceivedPacketsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "UnreceivedPackets",
  deps: [QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse]
});
/* UnreceivedAcks returns all the unreceived IBC acknowledgements associated
 with a channel and sequences. */
export const getUnreceivedAcks = buildQuery<QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse>({
  encode: QueryUnreceivedAcksRequest.encode,
  decode: QueryUnreceivedAcksResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "UnreceivedAcks",
  deps: [QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse]
});
/* NextSequenceReceive returns the next receive sequence for a given channel. */
export const getNextSequenceReceive = buildQuery<QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse>({
  encode: QueryNextSequenceReceiveRequest.encode,
  decode: QueryNextSequenceReceiveResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "NextSequenceReceive",
  deps: [QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse]
});
/* NextSequenceSend returns the next send sequence for a given channel. */
export const getNextSequenceSend = buildQuery<QueryNextSequenceSendRequest, QueryNextSequenceSendResponse>({
  encode: QueryNextSequenceSendRequest.encode,
  decode: QueryNextSequenceSendResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "NextSequenceSend",
  deps: [QueryNextSequenceSendRequest, QueryNextSequenceSendResponse]
});
/* UpgradeError returns the error receipt if the upgrade handshake failed. */
export const getUpgradeError = buildQuery<QueryUpgradeErrorRequest, QueryUpgradeErrorResponse>({
  encode: QueryUpgradeErrorRequest.encode,
  decode: QueryUpgradeErrorResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "UpgradeError",
  deps: [QueryUpgradeErrorRequest, QueryUpgradeErrorResponse]
});
/* Upgrade returns the upgrade for a given port and channel id. */
export const getUpgrade = buildQuery<QueryUpgradeRequest, QueryUpgradeResponse>({
  encode: QueryUpgradeRequest.encode,
  decode: QueryUpgradeResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "Upgrade",
  deps: [QueryUpgradeRequest, QueryUpgradeResponse]
});
/* ChannelParams queries all parameters of the ibc channel submodule. */
export const getChannelParams = buildQuery<QueryChannelParamsRequest, QueryChannelParamsResponse>({
  encode: QueryChannelParamsRequest.encode,
  decode: QueryChannelParamsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "ChannelParams",
  deps: [QueryChannelParamsRequest, QueryChannelParamsResponse]
});