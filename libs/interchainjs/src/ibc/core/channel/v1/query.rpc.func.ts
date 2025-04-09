import { buildQuery } from "../../../../helper-func-types";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse, QueryNextSequenceSendRequest, QueryNextSequenceSendResponse, QueryUpgradeErrorRequest, QueryUpgradeErrorResponse, QueryUpgradeRequest, QueryUpgradeResponse, QueryChannelParamsRequest, QueryChannelParamsResponse } from "./query";
export const getChannel = buildQuery<QueryChannelRequest, QueryChannelResponse>({
  encode: QueryChannelRequest.encode,
  decode: QueryChannelResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "Channel",
  deps: [QueryChannelRequest, QueryChannelResponse]
});
export const getChannels = buildQuery<QueryChannelsRequest, QueryChannelsResponse>({
  encode: QueryChannelsRequest.encode,
  decode: QueryChannelsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "Channels",
  deps: [QueryChannelsRequest, QueryChannelsResponse]
});
export const getConnectionChannels = buildQuery<QueryConnectionChannelsRequest, QueryConnectionChannelsResponse>({
  encode: QueryConnectionChannelsRequest.encode,
  decode: QueryConnectionChannelsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "ConnectionChannels",
  deps: [QueryConnectionChannelsRequest, QueryConnectionChannelsResponse]
});
export const getChannelClientState = buildQuery<QueryChannelClientStateRequest, QueryChannelClientStateResponse>({
  encode: QueryChannelClientStateRequest.encode,
  decode: QueryChannelClientStateResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "ChannelClientState",
  deps: [QueryChannelClientStateRequest, QueryChannelClientStateResponse]
});
export const getChannelConsensusState = buildQuery<QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse>({
  encode: QueryChannelConsensusStateRequest.encode,
  decode: QueryChannelConsensusStateResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "ChannelConsensusState",
  deps: [QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse]
});
export const getPacketCommitment = buildQuery<QueryPacketCommitmentRequest, QueryPacketCommitmentResponse>({
  encode: QueryPacketCommitmentRequest.encode,
  decode: QueryPacketCommitmentResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketCommitment",
  deps: [QueryPacketCommitmentRequest, QueryPacketCommitmentResponse]
});
export const getPacketCommitments = buildQuery<QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse>({
  encode: QueryPacketCommitmentsRequest.encode,
  decode: QueryPacketCommitmentsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketCommitments",
  deps: [QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse]
});
export const getPacketReceipt = buildQuery<QueryPacketReceiptRequest, QueryPacketReceiptResponse>({
  encode: QueryPacketReceiptRequest.encode,
  decode: QueryPacketReceiptResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketReceipt",
  deps: [QueryPacketReceiptRequest, QueryPacketReceiptResponse]
});
export const getPacketAcknowledgement = buildQuery<QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse>({
  encode: QueryPacketAcknowledgementRequest.encode,
  decode: QueryPacketAcknowledgementResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketAcknowledgement",
  deps: [QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse]
});
export const getPacketAcknowledgements = buildQuery<QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse>({
  encode: QueryPacketAcknowledgementsRequest.encode,
  decode: QueryPacketAcknowledgementsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketAcknowledgements",
  deps: [QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse]
});
export const getUnreceivedPackets = buildQuery<QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse>({
  encode: QueryUnreceivedPacketsRequest.encode,
  decode: QueryUnreceivedPacketsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "UnreceivedPackets",
  deps: [QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse]
});
export const getUnreceivedAcks = buildQuery<QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse>({
  encode: QueryUnreceivedAcksRequest.encode,
  decode: QueryUnreceivedAcksResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "UnreceivedAcks",
  deps: [QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse]
});
export const getNextSequenceReceive = buildQuery<QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse>({
  encode: QueryNextSequenceReceiveRequest.encode,
  decode: QueryNextSequenceReceiveResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "NextSequenceReceive",
  deps: [QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse]
});
export const getNextSequenceSend = buildQuery<QueryNextSequenceSendRequest, QueryNextSequenceSendResponse>({
  encode: QueryNextSequenceSendRequest.encode,
  decode: QueryNextSequenceSendResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "NextSequenceSend",
  deps: [QueryNextSequenceSendRequest, QueryNextSequenceSendResponse]
});
export const getUpgradeError = buildQuery<QueryUpgradeErrorRequest, QueryUpgradeErrorResponse>({
  encode: QueryUpgradeErrorRequest.encode,
  decode: QueryUpgradeErrorResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "UpgradeError",
  deps: [QueryUpgradeErrorRequest, QueryUpgradeErrorResponse]
});
export const getUpgrade = buildQuery<QueryUpgradeRequest, QueryUpgradeResponse>({
  encode: QueryUpgradeRequest.encode,
  decode: QueryUpgradeResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "Upgrade",
  deps: [QueryUpgradeRequest, QueryUpgradeResponse]
});
export const getChannelParams = buildQuery<QueryChannelParamsRequest, QueryChannelParamsResponse>({
  encode: QueryChannelParamsRequest.encode,
  decode: QueryChannelParamsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "ChannelParams",
  deps: [QueryChannelParamsRequest, QueryChannelParamsResponse]
});