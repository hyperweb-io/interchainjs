import { buildUseVueMutation } from "../../../../vue-query";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement } from "./tx";
import { channelOpenInit, channelOpenTry, channelOpenAck, channelOpenConfirm, channelCloseInit, channelCloseConfirm, recvPacket, timeout, timeoutOnClose, acknowledgement } from "./tx.rpc.func";
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