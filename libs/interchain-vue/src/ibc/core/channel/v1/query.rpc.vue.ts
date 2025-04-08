import { buildUseVueQuery } from "../../../../vue-query";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse, QueryNextSequenceSendRequest, QueryNextSequenceSendResponse, QueryUpgradeErrorRequest, QueryUpgradeErrorResponse, QueryUpgradeRequest, QueryUpgradeResponse, QueryChannelParamsRequest, QueryChannelParamsResponse } from "./query";
import { getChannel, getChannels, getConnectionChannels, getChannelClientState, getChannelConsensusState, getPacketCommitment, getPacketCommitments, getPacketReceipt, getPacketAcknowledgement, getPacketAcknowledgements, getUnreceivedPackets, getUnreceivedAcks, getNextSequenceReceive, getNextSequenceSend, getUpgradeError, getUpgrade, getChannelParams } from "./query.rpc.func";
export const useGetChannel = buildUseVueQuery<QueryChannelRequest, QueryChannelResponse>({
  builderQueryFn: getChannel,
  queryKeyPrefix: "ChannelQuery"
});
export const useGetChannels = buildUseVueQuery<QueryChannelsRequest, QueryChannelsResponse>({
  builderQueryFn: getChannels,
  queryKeyPrefix: "ChannelsQuery"
});
export const useGetConnectionChannels = buildUseVueQuery<QueryConnectionChannelsRequest, QueryConnectionChannelsResponse>({
  builderQueryFn: getConnectionChannels,
  queryKeyPrefix: "ConnectionChannelsQuery"
});
export const useGetChannelClientState = buildUseVueQuery<QueryChannelClientStateRequest, QueryChannelClientStateResponse>({
  builderQueryFn: getChannelClientState,
  queryKeyPrefix: "ChannelClientStateQuery"
});
export const useGetChannelConsensusState = buildUseVueQuery<QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse>({
  builderQueryFn: getChannelConsensusState,
  queryKeyPrefix: "ChannelConsensusStateQuery"
});
export const useGetPacketCommitment = buildUseVueQuery<QueryPacketCommitmentRequest, QueryPacketCommitmentResponse>({
  builderQueryFn: getPacketCommitment,
  queryKeyPrefix: "PacketCommitmentQuery"
});
export const useGetPacketCommitments = buildUseVueQuery<QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse>({
  builderQueryFn: getPacketCommitments,
  queryKeyPrefix: "PacketCommitmentsQuery"
});
export const useGetPacketReceipt = buildUseVueQuery<QueryPacketReceiptRequest, QueryPacketReceiptResponse>({
  builderQueryFn: getPacketReceipt,
  queryKeyPrefix: "PacketReceiptQuery"
});
export const useGetPacketAcknowledgement = buildUseVueQuery<QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse>({
  builderQueryFn: getPacketAcknowledgement,
  queryKeyPrefix: "PacketAcknowledgementQuery"
});
export const useGetPacketAcknowledgements = buildUseVueQuery<QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse>({
  builderQueryFn: getPacketAcknowledgements,
  queryKeyPrefix: "PacketAcknowledgementsQuery"
});
export const useGetUnreceivedPackets = buildUseVueQuery<QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse>({
  builderQueryFn: getUnreceivedPackets,
  queryKeyPrefix: "UnreceivedPacketsQuery"
});
export const useGetUnreceivedAcks = buildUseVueQuery<QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse>({
  builderQueryFn: getUnreceivedAcks,
  queryKeyPrefix: "UnreceivedAcksQuery"
});
export const useGetNextSequenceReceive = buildUseVueQuery<QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse>({
  builderQueryFn: getNextSequenceReceive,
  queryKeyPrefix: "NextSequenceReceiveQuery"
});
export const useGetNextSequenceSend = buildUseVueQuery<QueryNextSequenceSendRequest, QueryNextSequenceSendResponse>({
  builderQueryFn: getNextSequenceSend,
  queryKeyPrefix: "NextSequenceSendQuery"
});
export const useGetUpgradeError = buildUseVueQuery<QueryUpgradeErrorRequest, QueryUpgradeErrorResponse>({
  builderQueryFn: getUpgradeError,
  queryKeyPrefix: "UpgradeErrorQuery"
});
export const useGetUpgrade = buildUseVueQuery<QueryUpgradeRequest, QueryUpgradeResponse>({
  builderQueryFn: getUpgrade,
  queryKeyPrefix: "UpgradeQuery"
});
export const useGetChannelParams = buildUseVueQuery<QueryChannelParamsRequest, QueryChannelParamsResponse>({
  builderQueryFn: getChannelParams,
  queryKeyPrefix: "ChannelParamsQuery"
});