import { buildUseMutation } from "../../../../react-query";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement, MsgChannelUpgradeInit, MsgChannelUpgradeTry, MsgChannelUpgradeAck, MsgChannelUpgradeConfirm, MsgChannelUpgradeOpen, MsgChannelUpgradeTimeout, MsgChannelUpgradeCancel, MsgUpdateParams, MsgPruneAcknowledgements } from "./tx";
import { channelOpenInit, channelOpenTry, channelOpenAck, channelOpenConfirm, channelCloseInit, channelCloseConfirm, recvPacket, timeout, timeoutOnClose, acknowledgement, channelUpgradeInit, channelUpgradeTry, channelUpgradeAck, channelUpgradeConfirm, channelUpgradeOpen, channelUpgradeTimeout, channelUpgradeCancel, updateChannelParams, pruneAcknowledgements } from "./tx.rpc.func";
export const useChannelOpenInit = buildUseMutation<MsgChannelOpenInit, Error>({
  builderMutationFn: channelOpenInit
});
export const useChannelOpenTry = buildUseMutation<MsgChannelOpenTry, Error>({
  builderMutationFn: channelOpenTry
});
export const useChannelOpenAck = buildUseMutation<MsgChannelOpenAck, Error>({
  builderMutationFn: channelOpenAck
});
export const useChannelOpenConfirm = buildUseMutation<MsgChannelOpenConfirm, Error>({
  builderMutationFn: channelOpenConfirm
});
export const useChannelCloseInit = buildUseMutation<MsgChannelCloseInit, Error>({
  builderMutationFn: channelCloseInit
});
export const useChannelCloseConfirm = buildUseMutation<MsgChannelCloseConfirm, Error>({
  builderMutationFn: channelCloseConfirm
});
export const useRecvPacket = buildUseMutation<MsgRecvPacket, Error>({
  builderMutationFn: recvPacket
});
export const useTimeout = buildUseMutation<MsgTimeout, Error>({
  builderMutationFn: timeout
});
export const useTimeoutOnClose = buildUseMutation<MsgTimeoutOnClose, Error>({
  builderMutationFn: timeoutOnClose
});
export const useAcknowledgement = buildUseMutation<MsgAcknowledgement, Error>({
  builderMutationFn: acknowledgement
});
export const useChannelUpgradeInit = buildUseMutation<MsgChannelUpgradeInit, Error>({
  builderMutationFn: channelUpgradeInit
});
export const useChannelUpgradeTry = buildUseMutation<MsgChannelUpgradeTry, Error>({
  builderMutationFn: channelUpgradeTry
});
export const useChannelUpgradeAck = buildUseMutation<MsgChannelUpgradeAck, Error>({
  builderMutationFn: channelUpgradeAck
});
export const useChannelUpgradeConfirm = buildUseMutation<MsgChannelUpgradeConfirm, Error>({
  builderMutationFn: channelUpgradeConfirm
});
export const useChannelUpgradeOpen = buildUseMutation<MsgChannelUpgradeOpen, Error>({
  builderMutationFn: channelUpgradeOpen
});
export const useChannelUpgradeTimeout = buildUseMutation<MsgChannelUpgradeTimeout, Error>({
  builderMutationFn: channelUpgradeTimeout
});
export const useChannelUpgradeCancel = buildUseMutation<MsgChannelUpgradeCancel, Error>({
  builderMutationFn: channelUpgradeCancel
});
export const useUpdateChannelParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateChannelParams
});
export const usePruneAcknowledgements = buildUseMutation<MsgPruneAcknowledgements, Error>({
  builderMutationFn: pruneAcknowledgements
});