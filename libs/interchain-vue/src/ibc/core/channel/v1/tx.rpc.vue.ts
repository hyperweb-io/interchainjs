import { buildUseVueMutation } from "../../../../vue-query";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement, MsgChannelUpgradeInit, MsgChannelUpgradeTry, MsgChannelUpgradeAck, MsgChannelUpgradeConfirm, MsgChannelUpgradeOpen, MsgChannelUpgradeTimeout, MsgChannelUpgradeCancel, MsgUpdateParams, MsgPruneAcknowledgements } from "./tx";
import { createChannelOpenInit, createChannelOpenTry, createChannelOpenAck, createChannelOpenConfirm, createChannelCloseInit, createChannelCloseConfirm, createRecvPacket, createTimeout, createTimeoutOnClose, createAcknowledgement, createChannelUpgradeInit, createChannelUpgradeTry, createChannelUpgradeAck, createChannelUpgradeConfirm, createChannelUpgradeOpen, createChannelUpgradeTimeout, createChannelUpgradeCancel, createUpdateChannelParams, createPruneAcknowledgements } from "./tx.rpc.func";
export const useChannelOpenInit = buildUseVueMutation<MsgChannelOpenInit, Error>({
  builderMutationFn: createChannelOpenInit
});
export const useChannelOpenTry = buildUseVueMutation<MsgChannelOpenTry, Error>({
  builderMutationFn: createChannelOpenTry
});
export const useChannelOpenAck = buildUseVueMutation<MsgChannelOpenAck, Error>({
  builderMutationFn: createChannelOpenAck
});
export const useChannelOpenConfirm = buildUseVueMutation<MsgChannelOpenConfirm, Error>({
  builderMutationFn: createChannelOpenConfirm
});
export const useChannelCloseInit = buildUseVueMutation<MsgChannelCloseInit, Error>({
  builderMutationFn: createChannelCloseInit
});
export const useChannelCloseConfirm = buildUseVueMutation<MsgChannelCloseConfirm, Error>({
  builderMutationFn: createChannelCloseConfirm
});
export const useRecvPacket = buildUseVueMutation<MsgRecvPacket, Error>({
  builderMutationFn: createRecvPacket
});
export const useTimeout = buildUseVueMutation<MsgTimeout, Error>({
  builderMutationFn: createTimeout
});
export const useTimeoutOnClose = buildUseVueMutation<MsgTimeoutOnClose, Error>({
  builderMutationFn: createTimeoutOnClose
});
export const useAcknowledgement = buildUseVueMutation<MsgAcknowledgement, Error>({
  builderMutationFn: createAcknowledgement
});
export const useChannelUpgradeInit = buildUseVueMutation<MsgChannelUpgradeInit, Error>({
  builderMutationFn: createChannelUpgradeInit
});
export const useChannelUpgradeTry = buildUseVueMutation<MsgChannelUpgradeTry, Error>({
  builderMutationFn: createChannelUpgradeTry
});
export const useChannelUpgradeAck = buildUseVueMutation<MsgChannelUpgradeAck, Error>({
  builderMutationFn: createChannelUpgradeAck
});
export const useChannelUpgradeConfirm = buildUseVueMutation<MsgChannelUpgradeConfirm, Error>({
  builderMutationFn: createChannelUpgradeConfirm
});
export const useChannelUpgradeOpen = buildUseVueMutation<MsgChannelUpgradeOpen, Error>({
  builderMutationFn: createChannelUpgradeOpen
});
export const useChannelUpgradeTimeout = buildUseVueMutation<MsgChannelUpgradeTimeout, Error>({
  builderMutationFn: createChannelUpgradeTimeout
});
export const useChannelUpgradeCancel = buildUseVueMutation<MsgChannelUpgradeCancel, Error>({
  builderMutationFn: createChannelUpgradeCancel
});
export const useUpdateChannelParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateChannelParams
});
export const usePruneAcknowledgements = buildUseVueMutation<MsgPruneAcknowledgements, Error>({
  builderMutationFn: createPruneAcknowledgements
});