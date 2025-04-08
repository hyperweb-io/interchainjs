import { buildTx } from "../../../../helper-func-types";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement, MsgChannelUpgradeInit, MsgChannelUpgradeTry, MsgChannelUpgradeAck, MsgChannelUpgradeConfirm, MsgChannelUpgradeOpen, MsgChannelUpgradeTimeout, MsgChannelUpgradeCancel, MsgUpdateParams, MsgPruneAcknowledgements } from "./tx";
export const channelOpenInit = buildTx<MsgChannelOpenInit>({
  msg: MsgChannelOpenInit
});
export const channelOpenTry = buildTx<MsgChannelOpenTry>({
  msg: MsgChannelOpenTry
});
export const channelOpenAck = buildTx<MsgChannelOpenAck>({
  msg: MsgChannelOpenAck
});
export const channelOpenConfirm = buildTx<MsgChannelOpenConfirm>({
  msg: MsgChannelOpenConfirm
});
export const channelCloseInit = buildTx<MsgChannelCloseInit>({
  msg: MsgChannelCloseInit
});
export const channelCloseConfirm = buildTx<MsgChannelCloseConfirm>({
  msg: MsgChannelCloseConfirm
});
export const recvPacket = buildTx<MsgRecvPacket>({
  msg: MsgRecvPacket
});
export const timeout = buildTx<MsgTimeout>({
  msg: MsgTimeout
});
export const timeoutOnClose = buildTx<MsgTimeoutOnClose>({
  msg: MsgTimeoutOnClose
});
export const acknowledgement = buildTx<MsgAcknowledgement>({
  msg: MsgAcknowledgement
});
export const channelUpgradeInit = buildTx<MsgChannelUpgradeInit>({
  msg: MsgChannelUpgradeInit
});
export const channelUpgradeTry = buildTx<MsgChannelUpgradeTry>({
  msg: MsgChannelUpgradeTry
});
export const channelUpgradeAck = buildTx<MsgChannelUpgradeAck>({
  msg: MsgChannelUpgradeAck
});
export const channelUpgradeConfirm = buildTx<MsgChannelUpgradeConfirm>({
  msg: MsgChannelUpgradeConfirm
});
export const channelUpgradeOpen = buildTx<MsgChannelUpgradeOpen>({
  msg: MsgChannelUpgradeOpen
});
export const channelUpgradeTimeout = buildTx<MsgChannelUpgradeTimeout>({
  msg: MsgChannelUpgradeTimeout
});
export const channelUpgradeCancel = buildTx<MsgChannelUpgradeCancel>({
  msg: MsgChannelUpgradeCancel
});
export const updateChannelParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
export const pruneAcknowledgements = buildTx<MsgPruneAcknowledgements>({
  msg: MsgPruneAcknowledgements
});