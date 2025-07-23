import { buildTx } from "../../../../helper-func-types";
import { MsgSendPacket, MsgRecvPacket, MsgTimeout, MsgAcknowledgement } from "./tx";
/**
 * SendPacket defines a rpc handler method for MsgSendPacket.
 * @name sendPacket
 * @package ibc.core.channel.v2
 * @see proto service: ibc.core.channel.v2.SendPacket
 */
export const sendPacket = buildTx<MsgSendPacket>({
  msg: MsgSendPacket
});
/**
 * RecvPacket defines a rpc handler method for MsgRecvPacket.
 * @name recvPacket
 * @package ibc.core.channel.v2
 * @see proto service: ibc.core.channel.v2.RecvPacket
 */
export const recvPacket = buildTx<MsgRecvPacket>({
  msg: MsgRecvPacket
});
/**
 * Timeout defines a rpc handler method for MsgTimeout.
 * @name timeout
 * @package ibc.core.channel.v2
 * @see proto service: ibc.core.channel.v2.Timeout
 */
export const timeout = buildTx<MsgTimeout>({
  msg: MsgTimeout
});
/**
 * Acknowledgement defines a rpc handler method for MsgAcknowledgement.
 * @name acknowledgement
 * @package ibc.core.channel.v2
 * @see proto service: ibc.core.channel.v2.Acknowledgement
 */
export const acknowledgement = buildTx<MsgAcknowledgement>({
  msg: MsgAcknowledgement
});