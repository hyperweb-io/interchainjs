import { buildUseVueMutation } from "../../../../vue-query";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement, MsgChannelUpgradeInit, MsgChannelUpgradeTry, MsgChannelUpgradeAck, MsgChannelUpgradeConfirm, MsgChannelUpgradeOpen, MsgChannelUpgradeTimeout, MsgChannelUpgradeCancel, MsgUpdateParams, MsgPruneAcknowledgements } from "./tx";
import { channelOpenInit, channelOpenTry, channelOpenAck, channelOpenConfirm, channelCloseInit, channelCloseConfirm, recvPacket, timeout, timeoutOnClose, acknowledgement, channelUpgradeInit, channelUpgradeTry, channelUpgradeAck, channelUpgradeConfirm, channelUpgradeOpen, channelUpgradeTimeout, channelUpgradeCancel, updateChannelParams, pruneAcknowledgements } from "./tx.rpc.func";
/**
 * ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit.
 * @name useChannelOpenInit
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelOpenInit
 */
export const useChannelOpenInit = buildUseVueMutation<MsgChannelOpenInit, Error>({
  builderMutationFn: channelOpenInit
});
/**
 * ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry.
 * @name useChannelOpenTry
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelOpenTry
 */
export const useChannelOpenTry = buildUseVueMutation<MsgChannelOpenTry, Error>({
  builderMutationFn: channelOpenTry
});
/**
 * ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck.
 * @name useChannelOpenAck
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelOpenAck
 */
export const useChannelOpenAck = buildUseVueMutation<MsgChannelOpenAck, Error>({
  builderMutationFn: channelOpenAck
});
/**
 * ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm.
 * @name useChannelOpenConfirm
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelOpenConfirm
 */
export const useChannelOpenConfirm = buildUseVueMutation<MsgChannelOpenConfirm, Error>({
  builderMutationFn: channelOpenConfirm
});
/**
 * ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit.
 * @name useChannelCloseInit
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelCloseInit
 */
export const useChannelCloseInit = buildUseVueMutation<MsgChannelCloseInit, Error>({
  builderMutationFn: channelCloseInit
});
/**
 * ChannelCloseConfirm defines a rpc handler method for
 * MsgChannelCloseConfirm.
 * @name useChannelCloseConfirm
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelCloseConfirm
 */
export const useChannelCloseConfirm = buildUseVueMutation<MsgChannelCloseConfirm, Error>({
  builderMutationFn: channelCloseConfirm
});
/**
 * RecvPacket defines a rpc handler method for MsgRecvPacket.
 * @name useRecvPacket
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.RecvPacket
 */
export const useRecvPacket = buildUseVueMutation<MsgRecvPacket, Error>({
  builderMutationFn: recvPacket
});
/**
 * Timeout defines a rpc handler method for MsgTimeout.
 * @name useTimeout
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.Timeout
 */
export const useTimeout = buildUseVueMutation<MsgTimeout, Error>({
  builderMutationFn: timeout
});
/**
 * TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose.
 * @name useTimeoutOnClose
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.TimeoutOnClose
 */
export const useTimeoutOnClose = buildUseVueMutation<MsgTimeoutOnClose, Error>({
  builderMutationFn: timeoutOnClose
});
/**
 * Acknowledgement defines a rpc handler method for MsgAcknowledgement.
 * @name useAcknowledgement
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.Acknowledgement
 */
export const useAcknowledgement = buildUseVueMutation<MsgAcknowledgement, Error>({
  builderMutationFn: acknowledgement
});
/**
 * ChannelUpgradeInit defines a rpc handler method for MsgChannelUpgradeInit.
 * @name useChannelUpgradeInit
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelUpgradeInit
 */
export const useChannelUpgradeInit = buildUseVueMutation<MsgChannelUpgradeInit, Error>({
  builderMutationFn: channelUpgradeInit
});
/**
 * ChannelUpgradeTry defines a rpc handler method for MsgChannelUpgradeTry.
 * @name useChannelUpgradeTry
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelUpgradeTry
 */
export const useChannelUpgradeTry = buildUseVueMutation<MsgChannelUpgradeTry, Error>({
  builderMutationFn: channelUpgradeTry
});
/**
 * ChannelUpgradeAck defines a rpc handler method for MsgChannelUpgradeAck.
 * @name useChannelUpgradeAck
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelUpgradeAck
 */
export const useChannelUpgradeAck = buildUseVueMutation<MsgChannelUpgradeAck, Error>({
  builderMutationFn: channelUpgradeAck
});
/**
 * ChannelUpgradeConfirm defines a rpc handler method for MsgChannelUpgradeConfirm.
 * @name useChannelUpgradeConfirm
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelUpgradeConfirm
 */
export const useChannelUpgradeConfirm = buildUseVueMutation<MsgChannelUpgradeConfirm, Error>({
  builderMutationFn: channelUpgradeConfirm
});
/**
 * ChannelUpgradeOpen defines a rpc handler method for MsgChannelUpgradeOpen.
 * @name useChannelUpgradeOpen
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelUpgradeOpen
 */
export const useChannelUpgradeOpen = buildUseVueMutation<MsgChannelUpgradeOpen, Error>({
  builderMutationFn: channelUpgradeOpen
});
/**
 * ChannelUpgradeTimeout defines a rpc handler method for MsgChannelUpgradeTimeout.
 * @name useChannelUpgradeTimeout
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelUpgradeTimeout
 */
export const useChannelUpgradeTimeout = buildUseVueMutation<MsgChannelUpgradeTimeout, Error>({
  builderMutationFn: channelUpgradeTimeout
});
/**
 * ChannelUpgradeCancel defines a rpc handler method for MsgChannelUpgradeCancel.
 * @name useChannelUpgradeCancel
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelUpgradeCancel
 */
export const useChannelUpgradeCancel = buildUseVueMutation<MsgChannelUpgradeCancel, Error>({
  builderMutationFn: channelUpgradeCancel
});
/**
 * UpdateChannelParams defines a rpc handler method for MsgUpdateParams.
 * @name useUpdateChannelParams
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.UpdateChannelParams
 */
export const useUpdateChannelParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateChannelParams
});
/**
 * PruneAcknowledgements defines a rpc handler method for MsgPruneAcknowledgements.
 * @name usePruneAcknowledgements
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.PruneAcknowledgements
 */
export const usePruneAcknowledgements = buildUseVueMutation<MsgPruneAcknowledgements, Error>({
  builderMutationFn: pruneAcknowledgements
});