import { buildUseMutation } from "../../../../react-query";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement, MsgChannelUpgradeInit, MsgChannelUpgradeTry, MsgChannelUpgradeAck, MsgChannelUpgradeConfirm, MsgChannelUpgradeOpen, MsgChannelUpgradeTimeout, MsgChannelUpgradeCancel, MsgUpdateParams, MsgPruneAcknowledgements } from "./tx";
import { channelOpenInit, channelOpenTry, channelOpenAck, channelOpenConfirm, channelCloseInit, channelCloseConfirm, recvPacket, timeout, timeoutOnClose, acknowledgement, channelUpgradeInit, channelUpgradeTry, channelUpgradeAck, channelUpgradeConfirm, channelUpgradeOpen, channelUpgradeTimeout, channelUpgradeCancel, updateChannelParams, pruneAcknowledgements } from "./tx.rpc.func";
/* ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
export const useChannelOpenInit = buildUseMutation<MsgChannelOpenInit, Error>({
  builderMutationFn: channelOpenInit
});
/* ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
export const useChannelOpenTry = buildUseMutation<MsgChannelOpenTry, Error>({
  builderMutationFn: channelOpenTry
});
/* ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
export const useChannelOpenAck = buildUseMutation<MsgChannelOpenAck, Error>({
  builderMutationFn: channelOpenAck
});
/* ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
export const useChannelOpenConfirm = buildUseMutation<MsgChannelOpenConfirm, Error>({
  builderMutationFn: channelOpenConfirm
});
/* ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
export const useChannelCloseInit = buildUseMutation<MsgChannelCloseInit, Error>({
  builderMutationFn: channelCloseInit
});
/* ChannelCloseConfirm defines a rpc handler method for
 MsgChannelCloseConfirm. */
export const useChannelCloseConfirm = buildUseMutation<MsgChannelCloseConfirm, Error>({
  builderMutationFn: channelCloseConfirm
});
/* RecvPacket defines a rpc handler method for MsgRecvPacket. */
export const useRecvPacket = buildUseMutation<MsgRecvPacket, Error>({
  builderMutationFn: recvPacket
});
/* Timeout defines a rpc handler method for MsgTimeout. */
export const useTimeout = buildUseMutation<MsgTimeout, Error>({
  builderMutationFn: timeout
});
/* TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
export const useTimeoutOnClose = buildUseMutation<MsgTimeoutOnClose, Error>({
  builderMutationFn: timeoutOnClose
});
/* Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
export const useAcknowledgement = buildUseMutation<MsgAcknowledgement, Error>({
  builderMutationFn: acknowledgement
});
/* ChannelUpgradeInit defines a rpc handler method for MsgChannelUpgradeInit. */
export const useChannelUpgradeInit = buildUseMutation<MsgChannelUpgradeInit, Error>({
  builderMutationFn: channelUpgradeInit
});
/* ChannelUpgradeTry defines a rpc handler method for MsgChannelUpgradeTry. */
export const useChannelUpgradeTry = buildUseMutation<MsgChannelUpgradeTry, Error>({
  builderMutationFn: channelUpgradeTry
});
/* ChannelUpgradeAck defines a rpc handler method for MsgChannelUpgradeAck. */
export const useChannelUpgradeAck = buildUseMutation<MsgChannelUpgradeAck, Error>({
  builderMutationFn: channelUpgradeAck
});
/* ChannelUpgradeConfirm defines a rpc handler method for MsgChannelUpgradeConfirm. */
export const useChannelUpgradeConfirm = buildUseMutation<MsgChannelUpgradeConfirm, Error>({
  builderMutationFn: channelUpgradeConfirm
});
/* ChannelUpgradeOpen defines a rpc handler method for MsgChannelUpgradeOpen. */
export const useChannelUpgradeOpen = buildUseMutation<MsgChannelUpgradeOpen, Error>({
  builderMutationFn: channelUpgradeOpen
});
/* ChannelUpgradeTimeout defines a rpc handler method for MsgChannelUpgradeTimeout. */
export const useChannelUpgradeTimeout = buildUseMutation<MsgChannelUpgradeTimeout, Error>({
  builderMutationFn: channelUpgradeTimeout
});
/* ChannelUpgradeCancel defines a rpc handler method for MsgChannelUpgradeCancel. */
export const useChannelUpgradeCancel = buildUseMutation<MsgChannelUpgradeCancel, Error>({
  builderMutationFn: channelUpgradeCancel
});
/* UpdateChannelParams defines a rpc handler method for MsgUpdateParams. */
export const useUpdateChannelParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateChannelParams
});
/* PruneAcknowledgements defines a rpc handler method for MsgPruneAcknowledgements. */
export const usePruneAcknowledgements = buildUseMutation<MsgPruneAcknowledgements, Error>({
  builderMutationFn: pruneAcknowledgements
});