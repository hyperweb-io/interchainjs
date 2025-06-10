import { buildUseVueMutation } from "../../../../vue-query";
import { MsgSendPacket, MsgRecvPacket, MsgTimeout, MsgAcknowledgement } from "./tx";
import { sendPacket, recvPacket, timeout, acknowledgement } from "./tx.rpc.func";
/**
 * SendPacket defines a rpc handler method for MsgSendPacket.
 * @name useSendPacket
 * @package ibc.core.channel.v2
 * @see proto service: ibc.core.channel.v2.SendPacket
 */
export const useSendPacket = buildUseVueMutation<MsgSendPacket, Error>({
  builderMutationFn: sendPacket
});
/**
 * RecvPacket defines a rpc handler method for MsgRecvPacket.
 * @name useRecvPacket
 * @package ibc.core.channel.v2
 * @see proto service: ibc.core.channel.v2.RecvPacket
 */
export const useRecvPacket = buildUseVueMutation<MsgRecvPacket, Error>({
  builderMutationFn: recvPacket
});
/**
 * Timeout defines a rpc handler method for MsgTimeout.
 * @name useTimeout
 * @package ibc.core.channel.v2
 * @see proto service: ibc.core.channel.v2.Timeout
 */
export const useTimeout = buildUseVueMutation<MsgTimeout, Error>({
  builderMutationFn: timeout
});
/**
 * Acknowledgement defines a rpc handler method for MsgAcknowledgement.
 * @name useAcknowledgement
 * @package ibc.core.channel.v2
 * @see proto service: ibc.core.channel.v2.Acknowledgement
 */
export const useAcknowledgement = buildUseVueMutation<MsgAcknowledgement, Error>({
  builderMutationFn: acknowledgement
});