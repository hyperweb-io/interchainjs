import { buildUseQuery } from "../../../../react-query";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse, QueryNextSequenceSendRequest, QueryNextSequenceSendResponse, QueryUpgradeErrorRequest, QueryUpgradeErrorResponse, QueryUpgradeRequest, QueryUpgradeResponse, QueryChannelParamsRequest, QueryChannelParamsResponse } from "./query";
import { createGetChannel, createGetChannels, createGetConnectionChannels, createGetChannelClientState, createGetChannelConsensusState, createGetPacketCommitment, createGetPacketCommitments, createGetPacketReceipt, createGetPacketAcknowledgement, createGetPacketAcknowledgements, createGetUnreceivedPackets, createGetUnreceivedAcks, createGetNextSequenceReceive, createGetNextSequenceSend, createGetUpgradeError, createGetUpgrade, createGetChannelParams } from "./query.rpc.func";
export const useGetChannel = buildUseQuery<QueryChannelRequest, QueryChannelResponse>({
  builderQueryFn: createGetChannel,
  queryKeyPrefix: "ChannelQuery"
});
export const useGetChannels = buildUseQuery<QueryChannelsRequest, QueryChannelsResponse>({
  builderQueryFn: createGetChannels,
  queryKeyPrefix: "ChannelsQuery"
});
export const useGetConnectionChannels = buildUseQuery<QueryConnectionChannelsRequest, QueryConnectionChannelsResponse>({
  builderQueryFn: createGetConnectionChannels,
  queryKeyPrefix: "ConnectionChannelsQuery"
});
export const useGetChannelClientState = buildUseQuery<QueryChannelClientStateRequest, QueryChannelClientStateResponse>({
  builderQueryFn: createGetChannelClientState,
  queryKeyPrefix: "ChannelClientStateQuery"
});
export const useGetChannelConsensusState = buildUseQuery<QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse>({
  builderQueryFn: createGetChannelConsensusState,
  queryKeyPrefix: "ChannelConsensusStateQuery"
});
export const useGetPacketCommitment = buildUseQuery<QueryPacketCommitmentRequest, QueryPacketCommitmentResponse>({
  builderQueryFn: createGetPacketCommitment,
  queryKeyPrefix: "PacketCommitmentQuery"
});
export const useGetPacketCommitments = buildUseQuery<QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse>({
  builderQueryFn: createGetPacketCommitments,
  queryKeyPrefix: "PacketCommitmentsQuery"
});
export const useGetPacketReceipt = buildUseQuery<QueryPacketReceiptRequest, QueryPacketReceiptResponse>({
  builderQueryFn: createGetPacketReceipt,
  queryKeyPrefix: "PacketReceiptQuery"
});
export const useGetPacketAcknowledgement = buildUseQuery<QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse>({
  builderQueryFn: createGetPacketAcknowledgement,
  queryKeyPrefix: "PacketAcknowledgementQuery"
});
export const useGetPacketAcknowledgements = buildUseQuery<QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse>({
  builderQueryFn: createGetPacketAcknowledgements,
  queryKeyPrefix: "PacketAcknowledgementsQuery"
});
export const useGetUnreceivedPackets = buildUseQuery<QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse>({
  builderQueryFn: createGetUnreceivedPackets,
  queryKeyPrefix: "UnreceivedPacketsQuery"
});
export const useGetUnreceivedAcks = buildUseQuery<QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse>({
  builderQueryFn: createGetUnreceivedAcks,
  queryKeyPrefix: "UnreceivedAcksQuery"
});
export const useGetNextSequenceReceive = buildUseQuery<QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse>({
  builderQueryFn: createGetNextSequenceReceive,
  queryKeyPrefix: "NextSequenceReceiveQuery"
});
export const useGetNextSequenceSend = buildUseQuery<QueryNextSequenceSendRequest, QueryNextSequenceSendResponse>({
  builderQueryFn: createGetNextSequenceSend,
  queryKeyPrefix: "NextSequenceSendQuery"
});
export const useGetUpgradeError = buildUseQuery<QueryUpgradeErrorRequest, QueryUpgradeErrorResponse>({
  builderQueryFn: createGetUpgradeError,
  queryKeyPrefix: "UpgradeErrorQuery"
});
export const useGetUpgrade = buildUseQuery<QueryUpgradeRequest, QueryUpgradeResponse>({
  builderQueryFn: createGetUpgrade,
  queryKeyPrefix: "UpgradeQuery"
});
export const useGetChannelParams = buildUseQuery<QueryChannelParamsRequest, QueryChannelParamsResponse>({
  builderQueryFn: createGetChannelParams,
  queryKeyPrefix: "ChannelParamsQuery"
});