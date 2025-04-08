import { buildUseVueMutation } from "../../../../vue-query";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement, MsgChannelUpgradeInit, MsgChannelUpgradeTry, MsgChannelUpgradeAck, MsgChannelUpgradeConfirm, MsgChannelUpgradeOpen, MsgChannelUpgradeTimeout, MsgChannelUpgradeCancel, MsgUpdateParams, MsgPruneAcknowledgements } from "./tx";
import { channelOpenInit, channelOpenTry, channelOpenAck, channelOpenConfirm, channelCloseInit, channelCloseConfirm, recvPacket, timeout, timeoutOnClose, acknowledgement, channelUpgradeInit, channelUpgradeTry, channelUpgradeAck, channelUpgradeConfirm, channelUpgradeOpen, channelUpgradeTimeout, channelUpgradeCancel, updateChannelParams, pruneAcknowledgements } from "./tx.rpc.func";
export const useChannelOpenInit = buildUseVueMutation<MsgChannelOpenInit, Error>({
  builderMutationFn: channelOpenInit
});
export const useChannelOpenTry = buildUseVueMutation<MsgChannelOpenTry, Error>({
  builderMutationFn: channelOpenTry
});
export const useChannelOpenAck = buildUseVueMutation<MsgChannelOpenAck, Error>({
  builderMutationFn: channelOpenAck
});
export const useChannelOpenConfirm = buildUseVueMutation<MsgChannelOpenConfirm, Error>({
  builderMutationFn: channelOpenConfirm
});
export const useChannelCloseInit = buildUseVueMutation<MsgChannelCloseInit, Error>({
  builderMutationFn: channelCloseInit
});
export const useChannelCloseConfirm = buildUseVueMutation<MsgChannelCloseConfirm, Error>({
  builderMutationFn: channelCloseConfirm
});
export const useRecvPacket = buildUseVueMutation<MsgRecvPacket, Error>({
  builderMutationFn: recvPacket
});
export const useTimeout = buildUseVueMutation<MsgTimeout, Error>({
  builderMutationFn: timeout
});
export const useTimeoutOnClose = buildUseVueMutation<MsgTimeoutOnClose, Error>({
  builderMutationFn: timeoutOnClose
});
export const useAcknowledgement = buildUseVueMutation<MsgAcknowledgement, Error>({
  builderMutationFn: acknowledgement
});
export const useChannelUpgradeInit = buildUseVueMutation<MsgChannelUpgradeInit, Error>({
  builderMutationFn: channelUpgradeInit
});
export const useChannelUpgradeTry = buildUseVueMutation<MsgChannelUpgradeTry, Error>({
  builderMutationFn: channelUpgradeTry
});
export const useChannelUpgradeAck = buildUseVueMutation<MsgChannelUpgradeAck, Error>({
  builderMutationFn: channelUpgradeAck
});
export const useChannelUpgradeConfirm = buildUseVueMutation<MsgChannelUpgradeConfirm, Error>({
  builderMutationFn: channelUpgradeConfirm
});
export const useChannelUpgradeOpen = buildUseVueMutation<MsgChannelUpgradeOpen, Error>({
  builderMutationFn: channelUpgradeOpen
});
export const useChannelUpgradeTimeout = buildUseVueMutation<MsgChannelUpgradeTimeout, Error>({
  builderMutationFn: channelUpgradeTimeout
});
export const useChannelUpgradeCancel = buildUseVueMutation<MsgChannelUpgradeCancel, Error>({
  builderMutationFn: channelUpgradeCancel
});
export const useUpdateChannelParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateChannelParams
});
export const usePruneAcknowledgements = buildUseVueMutation<MsgPruneAcknowledgements, Error>({
  builderMutationFn: pruneAcknowledgements
});