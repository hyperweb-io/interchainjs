import { buildUseVueQuery } from "../../../../vue-query";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse, QueryNextSequenceSendRequest, QueryNextSequenceSendResponse, QueryUpgradeErrorRequest, QueryUpgradeErrorResponse, QueryUpgradeRequest, QueryUpgradeResponse, QueryChannelParamsRequest, QueryChannelParamsResponse } from "./query";
import { getChannel, getChannels, getConnectionChannels, getChannelClientState, getChannelConsensusState, getPacketCommitment, getPacketCommitments, getPacketReceipt, getPacketAcknowledgement, getPacketAcknowledgements, getUnreceivedPackets, getUnreceivedAcks, getNextSequenceReceive, getNextSequenceSend, getUpgradeError, getUpgrade, getChannelParams } from "./query.rpc.func";
/* Channel queries an IBC Channel. */
export const useGetChannel = buildUseVueQuery<QueryChannelRequest, QueryChannelResponse>({
  builderQueryFn: getChannel,
  queryKeyPrefix: "ChannelQuery"
});
/* Channels queries all the IBC channels of a chain. */
export const useGetChannels = buildUseVueQuery<QueryChannelsRequest, QueryChannelsResponse>({
  builderQueryFn: getChannels,
  queryKeyPrefix: "ChannelsQuery"
});
/* ConnectionChannels queries all the channels associated with a connection
 end. */
export const useGetConnectionChannels = buildUseVueQuery<QueryConnectionChannelsRequest, QueryConnectionChannelsResponse>({
  builderQueryFn: getConnectionChannels,
  queryKeyPrefix: "ConnectionChannelsQuery"
});
/* ChannelClientState queries for the client state for the channel associated
 with the provided channel identifiers. */
export const useGetChannelClientState = buildUseVueQuery<QueryChannelClientStateRequest, QueryChannelClientStateResponse>({
  builderQueryFn: getChannelClientState,
  queryKeyPrefix: "ChannelClientStateQuery"
});
/* ChannelConsensusState queries for the consensus state for the channel
 associated with the provided channel identifiers. */
export const useGetChannelConsensusState = buildUseVueQuery<QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse>({
  builderQueryFn: getChannelConsensusState,
  queryKeyPrefix: "ChannelConsensusStateQuery"
});
/* PacketCommitment queries a stored packet commitment hash. */
export const useGetPacketCommitment = buildUseVueQuery<QueryPacketCommitmentRequest, QueryPacketCommitmentResponse>({
  builderQueryFn: getPacketCommitment,
  queryKeyPrefix: "PacketCommitmentQuery"
});
/* PacketCommitments returns all the packet commitments hashes associated
 with a channel. */
export const useGetPacketCommitments = buildUseVueQuery<QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse>({
  builderQueryFn: getPacketCommitments,
  queryKeyPrefix: "PacketCommitmentsQuery"
});
/* PacketReceipt queries if a given packet sequence has been received on the
 queried chain */
export const useGetPacketReceipt = buildUseVueQuery<QueryPacketReceiptRequest, QueryPacketReceiptResponse>({
  builderQueryFn: getPacketReceipt,
  queryKeyPrefix: "PacketReceiptQuery"
});
/* PacketAcknowledgement queries a stored packet acknowledgement hash. */
export const useGetPacketAcknowledgement = buildUseVueQuery<QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse>({
  builderQueryFn: getPacketAcknowledgement,
  queryKeyPrefix: "PacketAcknowledgementQuery"
});
/* PacketAcknowledgements returns all the packet acknowledgements associated
 with a channel. */
export const useGetPacketAcknowledgements = buildUseVueQuery<QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse>({
  builderQueryFn: getPacketAcknowledgements,
  queryKeyPrefix: "PacketAcknowledgementsQuery"
});
/* UnreceivedPackets returns all the unreceived IBC packets associated with a
 channel and sequences. */
export const useGetUnreceivedPackets = buildUseVueQuery<QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse>({
  builderQueryFn: getUnreceivedPackets,
  queryKeyPrefix: "UnreceivedPacketsQuery"
});
/* UnreceivedAcks returns all the unreceived IBC acknowledgements associated
 with a channel and sequences. */
export const useGetUnreceivedAcks = buildUseVueQuery<QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse>({
  builderQueryFn: getUnreceivedAcks,
  queryKeyPrefix: "UnreceivedAcksQuery"
});
/* NextSequenceReceive returns the next receive sequence for a given channel. */
export const useGetNextSequenceReceive = buildUseVueQuery<QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse>({
  builderQueryFn: getNextSequenceReceive,
  queryKeyPrefix: "NextSequenceReceiveQuery"
});
/* NextSequenceSend returns the next send sequence for a given channel. */
export const useGetNextSequenceSend = buildUseVueQuery<QueryNextSequenceSendRequest, QueryNextSequenceSendResponse>({
  builderQueryFn: getNextSequenceSend,
  queryKeyPrefix: "NextSequenceSendQuery"
});
/* UpgradeError returns the error receipt if the upgrade handshake failed. */
export const useGetUpgradeError = buildUseVueQuery<QueryUpgradeErrorRequest, QueryUpgradeErrorResponse>({
  builderQueryFn: getUpgradeError,
  queryKeyPrefix: "UpgradeErrorQuery"
});
/* Upgrade returns the upgrade for a given port and channel id. */
export const useGetUpgrade = buildUseVueQuery<QueryUpgradeRequest, QueryUpgradeResponse>({
  builderQueryFn: getUpgrade,
  queryKeyPrefix: "UpgradeQuery"
});
/* ChannelParams queries all parameters of the ibc channel submodule. */
export const useGetChannelParams = buildUseVueQuery<QueryChannelParamsRequest, QueryChannelParamsResponse>({
  builderQueryFn: getChannelParams,
  queryKeyPrefix: "ChannelParamsQuery"
});