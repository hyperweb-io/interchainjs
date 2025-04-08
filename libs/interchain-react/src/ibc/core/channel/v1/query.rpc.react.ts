import { buildUseQuery } from "../../../../react-query";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse, QueryNextSequenceSendRequest, QueryNextSequenceSendResponse, QueryUpgradeErrorRequest, QueryUpgradeErrorResponse, QueryUpgradeRequest, QueryUpgradeResponse, QueryChannelParamsRequest, QueryChannelParamsResponse } from "./query";
import { getChannel, getChannels, getConnectionChannels, getChannelClientState, getChannelConsensusState, getPacketCommitment, getPacketCommitments, getPacketReceipt, getPacketAcknowledgement, getPacketAcknowledgements, getUnreceivedPackets, getUnreceivedAcks, getNextSequenceReceive, getNextSequenceSend, getUpgradeError, getUpgrade, getChannelParams } from "./query.rpc.func";
export const useGetChannel = buildUseQuery<QueryChannelRequest, QueryChannelResponse>({
  builderQueryFn: getChannel,
  queryKeyPrefix: "ChannelQuery"
});
export const useGetChannels = buildUseQuery<QueryChannelsRequest, QueryChannelsResponse>({
  builderQueryFn: getChannels,
  queryKeyPrefix: "ChannelsQuery"
});
export const useGetConnectionChannels = buildUseQuery<QueryConnectionChannelsRequest, QueryConnectionChannelsResponse>({
  builderQueryFn: getConnectionChannels,
  queryKeyPrefix: "ConnectionChannelsQuery"
});
export const useGetChannelClientState = buildUseQuery<QueryChannelClientStateRequest, QueryChannelClientStateResponse>({
  builderQueryFn: getChannelClientState,
  queryKeyPrefix: "ChannelClientStateQuery"
});
export const useGetChannelConsensusState = buildUseQuery<QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse>({
  builderQueryFn: getChannelConsensusState,
  queryKeyPrefix: "ChannelConsensusStateQuery"
});
export const useGetPacketCommitment = buildUseQuery<QueryPacketCommitmentRequest, QueryPacketCommitmentResponse>({
  builderQueryFn: getPacketCommitment,
  queryKeyPrefix: "PacketCommitmentQuery"
});
export const useGetPacketCommitments = buildUseQuery<QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse>({
  builderQueryFn: getPacketCommitments,
  queryKeyPrefix: "PacketCommitmentsQuery"
});
export const useGetPacketReceipt = buildUseQuery<QueryPacketReceiptRequest, QueryPacketReceiptResponse>({
  builderQueryFn: getPacketReceipt,
  queryKeyPrefix: "PacketReceiptQuery"
});
export const useGetPacketAcknowledgement = buildUseQuery<QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse>({
  builderQueryFn: getPacketAcknowledgement,
  queryKeyPrefix: "PacketAcknowledgementQuery"
});
export const useGetPacketAcknowledgements = buildUseQuery<QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse>({
  builderQueryFn: getPacketAcknowledgements,
  queryKeyPrefix: "PacketAcknowledgementsQuery"
});
export const useGetUnreceivedPackets = buildUseQuery<QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse>({
  builderQueryFn: getUnreceivedPackets,
  queryKeyPrefix: "UnreceivedPacketsQuery"
});
export const useGetUnreceivedAcks = buildUseQuery<QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse>({
  builderQueryFn: getUnreceivedAcks,
  queryKeyPrefix: "UnreceivedAcksQuery"
});
export const useGetNextSequenceReceive = buildUseQuery<QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse>({
  builderQueryFn: getNextSequenceReceive,
  queryKeyPrefix: "NextSequenceReceiveQuery"
});
export const useGetNextSequenceSend = buildUseQuery<QueryNextSequenceSendRequest, QueryNextSequenceSendResponse>({
  builderQueryFn: getNextSequenceSend,
  queryKeyPrefix: "NextSequenceSendQuery"
});
export const useGetUpgradeError = buildUseQuery<QueryUpgradeErrorRequest, QueryUpgradeErrorResponse>({
  builderQueryFn: getUpgradeError,
  queryKeyPrefix: "UpgradeErrorQuery"
});
export const useGetUpgrade = buildUseQuery<QueryUpgradeRequest, QueryUpgradeResponse>({
  builderQueryFn: getUpgrade,
  queryKeyPrefix: "UpgradeQuery"
});
export const useGetChannelParams = buildUseQuery<QueryChannelParamsRequest, QueryChannelParamsResponse>({
  builderQueryFn: getChannelParams,
  queryKeyPrefix: "ChannelParamsQuery"
});