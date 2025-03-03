import { buildUseVueQuery } from "../../../../vue-query";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse, QueryNextSequenceSendRequest, QueryNextSequenceSendResponse, QueryUpgradeErrorRequest, QueryUpgradeErrorResponse, QueryUpgradeRequest, QueryUpgradeResponse, QueryChannelParamsRequest, QueryChannelParamsResponse } from "./query";
import { createGetChannel, createGetChannels, createGetConnectionChannels, createGetChannelClientState, createGetChannelConsensusState, createGetPacketCommitment, createGetPacketCommitments, createGetPacketReceipt, createGetPacketAcknowledgement, createGetPacketAcknowledgements, createGetUnreceivedPackets, createGetUnreceivedAcks, createGetNextSequenceReceive, createGetNextSequenceSend, createGetUpgradeError, createGetUpgrade, createGetChannelParams } from "./query.rpc.func";
export const useGetChannel = buildUseVueQuery<QueryChannelRequest, QueryChannelResponse>({
  builderQueryFn: createGetChannel,
  queryKeyPrefix: "ChannelQuery"
});
export const useGetChannels = buildUseVueQuery<QueryChannelsRequest, QueryChannelsResponse>({
  builderQueryFn: createGetChannels,
  queryKeyPrefix: "ChannelsQuery"
});
export const useGetConnectionChannels = buildUseVueQuery<QueryConnectionChannelsRequest, QueryConnectionChannelsResponse>({
  builderQueryFn: createGetConnectionChannels,
  queryKeyPrefix: "ConnectionChannelsQuery"
});
export const useGetChannelClientState = buildUseVueQuery<QueryChannelClientStateRequest, QueryChannelClientStateResponse>({
  builderQueryFn: createGetChannelClientState,
  queryKeyPrefix: "ChannelClientStateQuery"
});
export const useGetChannelConsensusState = buildUseVueQuery<QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse>({
  builderQueryFn: createGetChannelConsensusState,
  queryKeyPrefix: "ChannelConsensusStateQuery"
});
export const useGetPacketCommitment = buildUseVueQuery<QueryPacketCommitmentRequest, QueryPacketCommitmentResponse>({
  builderQueryFn: createGetPacketCommitment,
  queryKeyPrefix: "PacketCommitmentQuery"
});
export const useGetPacketCommitments = buildUseVueQuery<QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse>({
  builderQueryFn: createGetPacketCommitments,
  queryKeyPrefix: "PacketCommitmentsQuery"
});
export const useGetPacketReceipt = buildUseVueQuery<QueryPacketReceiptRequest, QueryPacketReceiptResponse>({
  builderQueryFn: createGetPacketReceipt,
  queryKeyPrefix: "PacketReceiptQuery"
});
export const useGetPacketAcknowledgement = buildUseVueQuery<QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse>({
  builderQueryFn: createGetPacketAcknowledgement,
  queryKeyPrefix: "PacketAcknowledgementQuery"
});
export const useGetPacketAcknowledgements = buildUseVueQuery<QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse>({
  builderQueryFn: createGetPacketAcknowledgements,
  queryKeyPrefix: "PacketAcknowledgementsQuery"
});
export const useGetUnreceivedPackets = buildUseVueQuery<QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse>({
  builderQueryFn: createGetUnreceivedPackets,
  queryKeyPrefix: "UnreceivedPacketsQuery"
});
export const useGetUnreceivedAcks = buildUseVueQuery<QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse>({
  builderQueryFn: createGetUnreceivedAcks,
  queryKeyPrefix: "UnreceivedAcksQuery"
});
export const useGetNextSequenceReceive = buildUseVueQuery<QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse>({
  builderQueryFn: createGetNextSequenceReceive,
  queryKeyPrefix: "NextSequenceReceiveQuery"
});
export const useGetNextSequenceSend = buildUseVueQuery<QueryNextSequenceSendRequest, QueryNextSequenceSendResponse>({
  builderQueryFn: createGetNextSequenceSend,
  queryKeyPrefix: "NextSequenceSendQuery"
});
export const useGetUpgradeError = buildUseVueQuery<QueryUpgradeErrorRequest, QueryUpgradeErrorResponse>({
  builderQueryFn: createGetUpgradeError,
  queryKeyPrefix: "UpgradeErrorQuery"
});
export const useGetUpgrade = buildUseVueQuery<QueryUpgradeRequest, QueryUpgradeResponse>({
  builderQueryFn: createGetUpgrade,
  queryKeyPrefix: "UpgradeQuery"
});
export const useGetChannelParams = buildUseVueQuery<QueryChannelParamsRequest, QueryChannelParamsResponse>({
  builderQueryFn: createGetChannelParams,
  queryKeyPrefix: "ChannelParamsQuery"
});