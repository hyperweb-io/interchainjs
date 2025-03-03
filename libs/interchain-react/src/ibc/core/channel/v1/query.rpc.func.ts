import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse, QueryNextSequenceSendRequest, QueryNextSequenceSendResponse, QueryUpgradeErrorRequest, QueryUpgradeErrorResponse, QueryUpgradeRequest, QueryUpgradeResponse, QueryChannelParamsRequest, QueryChannelParamsResponse } from "./query";
export const createGetChannel = (clientResolver?: RpcResolver) => buildQuery<QueryChannelRequest, QueryChannelResponse>({
  encode: QueryChannelRequest.encode,
  decode: QueryChannelResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "Channel",
  clientResolver,
  deps: [QueryChannelRequest, QueryChannelResponse]
});
export const createGetChannels = (clientResolver?: RpcResolver) => buildQuery<QueryChannelsRequest, QueryChannelsResponse>({
  encode: QueryChannelsRequest.encode,
  decode: QueryChannelsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "Channels",
  clientResolver,
  deps: [QueryChannelsRequest, QueryChannelsResponse]
});
export const createGetConnectionChannels = (clientResolver?: RpcResolver) => buildQuery<QueryConnectionChannelsRequest, QueryConnectionChannelsResponse>({
  encode: QueryConnectionChannelsRequest.encode,
  decode: QueryConnectionChannelsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "ConnectionChannels",
  clientResolver,
  deps: [QueryConnectionChannelsRequest, QueryConnectionChannelsResponse]
});
export const createGetChannelClientState = (clientResolver?: RpcResolver) => buildQuery<QueryChannelClientStateRequest, QueryChannelClientStateResponse>({
  encode: QueryChannelClientStateRequest.encode,
  decode: QueryChannelClientStateResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "ChannelClientState",
  clientResolver,
  deps: [QueryChannelClientStateRequest, QueryChannelClientStateResponse]
});
export const createGetChannelConsensusState = (clientResolver?: RpcResolver) => buildQuery<QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse>({
  encode: QueryChannelConsensusStateRequest.encode,
  decode: QueryChannelConsensusStateResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "ChannelConsensusState",
  clientResolver,
  deps: [QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse]
});
export const createGetPacketCommitment = (clientResolver?: RpcResolver) => buildQuery<QueryPacketCommitmentRequest, QueryPacketCommitmentResponse>({
  encode: QueryPacketCommitmentRequest.encode,
  decode: QueryPacketCommitmentResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketCommitment",
  clientResolver,
  deps: [QueryPacketCommitmentRequest, QueryPacketCommitmentResponse]
});
export const createGetPacketCommitments = (clientResolver?: RpcResolver) => buildQuery<QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse>({
  encode: QueryPacketCommitmentsRequest.encode,
  decode: QueryPacketCommitmentsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketCommitments",
  clientResolver,
  deps: [QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse]
});
export const createGetPacketReceipt = (clientResolver?: RpcResolver) => buildQuery<QueryPacketReceiptRequest, QueryPacketReceiptResponse>({
  encode: QueryPacketReceiptRequest.encode,
  decode: QueryPacketReceiptResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketReceipt",
  clientResolver,
  deps: [QueryPacketReceiptRequest, QueryPacketReceiptResponse]
});
export const createGetPacketAcknowledgement = (clientResolver?: RpcResolver) => buildQuery<QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse>({
  encode: QueryPacketAcknowledgementRequest.encode,
  decode: QueryPacketAcknowledgementResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketAcknowledgement",
  clientResolver,
  deps: [QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse]
});
export const createGetPacketAcknowledgements = (clientResolver?: RpcResolver) => buildQuery<QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse>({
  encode: QueryPacketAcknowledgementsRequest.encode,
  decode: QueryPacketAcknowledgementsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketAcknowledgements",
  clientResolver,
  deps: [QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse]
});
export const createGetUnreceivedPackets = (clientResolver?: RpcResolver) => buildQuery<QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse>({
  encode: QueryUnreceivedPacketsRequest.encode,
  decode: QueryUnreceivedPacketsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "UnreceivedPackets",
  clientResolver,
  deps: [QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse]
});
export const createGetUnreceivedAcks = (clientResolver?: RpcResolver) => buildQuery<QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse>({
  encode: QueryUnreceivedAcksRequest.encode,
  decode: QueryUnreceivedAcksResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "UnreceivedAcks",
  clientResolver,
  deps: [QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse]
});
export const createGetNextSequenceReceive = (clientResolver?: RpcResolver) => buildQuery<QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse>({
  encode: QueryNextSequenceReceiveRequest.encode,
  decode: QueryNextSequenceReceiveResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "NextSequenceReceive",
  clientResolver,
  deps: [QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse]
});
export const createGetNextSequenceSend = (clientResolver?: RpcResolver) => buildQuery<QueryNextSequenceSendRequest, QueryNextSequenceSendResponse>({
  encode: QueryNextSequenceSendRequest.encode,
  decode: QueryNextSequenceSendResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "NextSequenceSend",
  clientResolver,
  deps: [QueryNextSequenceSendRequest, QueryNextSequenceSendResponse]
});
export const createGetUpgradeError = (clientResolver?: RpcResolver) => buildQuery<QueryUpgradeErrorRequest, QueryUpgradeErrorResponse>({
  encode: QueryUpgradeErrorRequest.encode,
  decode: QueryUpgradeErrorResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "UpgradeError",
  clientResolver,
  deps: [QueryUpgradeErrorRequest, QueryUpgradeErrorResponse]
});
export const createGetUpgrade = (clientResolver?: RpcResolver) => buildQuery<QueryUpgradeRequest, QueryUpgradeResponse>({
  encode: QueryUpgradeRequest.encode,
  decode: QueryUpgradeResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "Upgrade",
  clientResolver,
  deps: [QueryUpgradeRequest, QueryUpgradeResponse]
});
export const createGetChannelParams = (clientResolver?: RpcResolver) => buildQuery<QueryChannelParamsRequest, QueryChannelParamsResponse>({
  encode: QueryChannelParamsRequest.encode,
  decode: QueryChannelParamsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "ChannelParams",
  clientResolver,
  deps: [QueryChannelParamsRequest, QueryChannelParamsResponse]
});