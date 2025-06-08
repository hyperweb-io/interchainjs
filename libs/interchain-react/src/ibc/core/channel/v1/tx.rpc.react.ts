import { buildUseMutation } from "../../../../react-query";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement, MsgChannelUpgradeInit, MsgChannelUpgradeTry, MsgChannelUpgradeAck, MsgChannelUpgradeConfirm, MsgChannelUpgradeOpen, MsgChannelUpgradeTimeout, MsgChannelUpgradeCancel, MsgUpdateParams, MsgPruneAcknowledgements } from "./tx";
import { channelOpenInit, channelOpenTry, channelOpenAck, channelOpenConfirm, channelCloseInit, channelCloseConfirm, recvPacket, timeout, timeoutOnClose, acknowledgement, channelUpgradeInit, channelUpgradeTry, channelUpgradeAck, channelUpgradeConfirm, channelUpgradeOpen, channelUpgradeTimeout, channelUpgradeCancel, updateChannelParams, pruneAcknowledgements } from "./tx.rpc.func";
/**
 * ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit.
 * @name useChannelOpenInit
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelOpenInit
 */
export const useChannelOpenInit = buildUseMutation<MsgChannelOpenInit, Error>({
  builderMutationFn: channelOpenInit
});
/**
 * ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry.
 * @name useChannelOpenTry
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelOpenTry
 */
export const useChannelOpenTry = buildUseMutation<MsgChannelOpenTry, Error>({
  builderMutationFn: channelOpenTry
});
/**
 * ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck.
 * @name useChannelOpenAck
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelOpenAck
 */
export const useChannelOpenAck = buildUseMutation<MsgChannelOpenAck, Error>({
  builderMutationFn: channelOpenAck
});
/**
 * ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm.
 * @name useChannelOpenConfirm
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelOpenConfirm
 */
export const useChannelOpenConfirm = buildUseMutation<MsgChannelOpenConfirm, Error>({
  builderMutationFn: channelOpenConfirm
});
/**
 * ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit.
 * @name useChannelCloseInit
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelCloseInit
 */
export const useChannelCloseInit = buildUseMutation<MsgChannelCloseInit, Error>({
  builderMutationFn: channelCloseInit
});
/**
 * ChannelCloseConfirm defines a rpc handler method for
 * MsgChannelCloseConfirm.
 * @name useChannelCloseConfirm
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelCloseConfirm
 */
export const useChannelCloseConfirm = buildUseMutation<MsgChannelCloseConfirm, Error>({
  builderMutationFn: channelCloseConfirm
});
/**
 * RecvPacket defines a rpc handler method for MsgRecvPacket.
 * @name useRecvPacket
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.RecvPacket
 */
export const useRecvPacket = buildUseMutation<MsgRecvPacket, Error>({
  builderMutationFn: recvPacket
});
/**
 * Timeout defines a rpc handler method for MsgTimeout.
 * @name useTimeout
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.Timeout
 */
export const useTimeout = buildUseMutation<MsgTimeout, Error>({
  builderMutationFn: timeout
});
/**
 * TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose.
 * @name useTimeoutOnClose
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.TimeoutOnClose
 */
export const useTimeoutOnClose = buildUseMutation<MsgTimeoutOnClose, Error>({
  builderMutationFn: timeoutOnClose
});
/**
 * Acknowledgement defines a rpc handler method for MsgAcknowledgement.
 * @name useAcknowledgement
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.Acknowledgement
 */
export const useAcknowledgement = buildUseMutation<MsgAcknowledgement, Error>({
  builderMutationFn: acknowledgement
});
/**
 * ChannelUpgradeInit defines a rpc handler method for MsgChannelUpgradeInit.
 * @name useChannelUpgradeInit
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelUpgradeInit
 */
export const useChannelUpgradeInit = buildUseMutation<MsgChannelUpgradeInit, Error>({
  builderMutationFn: channelUpgradeInit
});
/**
 * ChannelUpgradeTry defines a rpc handler method for MsgChannelUpgradeTry.
 * @name useChannelUpgradeTry
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelUpgradeTry
 */
export const useChannelUpgradeTry = buildUseMutation<MsgChannelUpgradeTry, Error>({
  builderMutationFn: channelUpgradeTry
});
/**
 * ChannelUpgradeAck defines a rpc handler method for MsgChannelUpgradeAck.
 * @name useChannelUpgradeAck
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelUpgradeAck
 */
export const useChannelUpgradeAck = buildUseMutation<MsgChannelUpgradeAck, Error>({
  builderMutationFn: channelUpgradeAck
});
/**
 * ChannelUpgradeConfirm defines a rpc handler method for MsgChannelUpgradeConfirm.
 * @name useChannelUpgradeConfirm
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelUpgradeConfirm
 */
export const useChannelUpgradeConfirm = buildUseMutation<MsgChannelUpgradeConfirm, Error>({
  builderMutationFn: channelUpgradeConfirm
});
/**
 * ChannelUpgradeOpen defines a rpc handler method for MsgChannelUpgradeOpen.
 * @name useChannelUpgradeOpen
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelUpgradeOpen
 */
export const useChannelUpgradeOpen = buildUseMutation<MsgChannelUpgradeOpen, Error>({
  builderMutationFn: channelUpgradeOpen
});
/**
 * ChannelUpgradeTimeout defines a rpc handler method for MsgChannelUpgradeTimeout.
 * @name useChannelUpgradeTimeout
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelUpgradeTimeout
 */
export const useChannelUpgradeTimeout = buildUseMutation<MsgChannelUpgradeTimeout, Error>({
  builderMutationFn: channelUpgradeTimeout
});
/**
 * ChannelUpgradeCancel defines a rpc handler method for MsgChannelUpgradeCancel.
 * @name useChannelUpgradeCancel
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.ChannelUpgradeCancel
 */
export const useChannelUpgradeCancel = buildUseMutation<MsgChannelUpgradeCancel, Error>({
  builderMutationFn: channelUpgradeCancel
});
/**
 * UpdateChannelParams defines a rpc handler method for MsgUpdateParams.
 * @name useUpdateChannelParams
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.UpdateChannelParams
 */
export const useUpdateChannelParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateChannelParams
});
/**
 * PruneAcknowledgements defines a rpc handler method for MsgPruneAcknowledgements.
 * @name usePruneAcknowledgements
 * @package ibc.core.channel.v1
 * @see proto service: ibc.core.channel.v1.PruneAcknowledgements
 */
export const usePruneAcknowledgements = buildUseMutation<MsgPruneAcknowledgements, Error>({
  builderMutationFn: pruneAcknowledgements
});