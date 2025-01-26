import { buildUseMutation } from "../../../../react-query";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement, MsgChannelUpgradeInit, MsgChannelUpgradeTry, MsgChannelUpgradeAck, MsgChannelUpgradeConfirm, MsgChannelUpgradeOpen, MsgChannelUpgradeTimeout, MsgChannelUpgradeCancel, MsgUpdateParams, MsgPruneAcknowledgements } from "./tx";
import { createChannelOpenInit, createChannelOpenTry, createChannelOpenAck, createChannelOpenConfirm, createChannelCloseInit, createChannelCloseConfirm, createRecvPacket, createTimeout, createTimeoutOnClose, createAcknowledgement, createChannelUpgradeInit, createChannelUpgradeTry, createChannelUpgradeAck, createChannelUpgradeConfirm, createChannelUpgradeOpen, createChannelUpgradeTimeout, createChannelUpgradeCancel, createUpdateChannelParams, createPruneAcknowledgements } from "./tx.rpc.func";
export const useChannelOpenInit = buildUseMutation<MsgChannelOpenInit, Error>({
  builderMutationFn: createChannelOpenInit
});
export const useChannelOpenTry = buildUseMutation<MsgChannelOpenTry, Error>({
  builderMutationFn: createChannelOpenTry
});
export const useChannelOpenAck = buildUseMutation<MsgChannelOpenAck, Error>({
  builderMutationFn: createChannelOpenAck
});
export const useChannelOpenConfirm = buildUseMutation<MsgChannelOpenConfirm, Error>({
  builderMutationFn: createChannelOpenConfirm
});
export const useChannelCloseInit = buildUseMutation<MsgChannelCloseInit, Error>({
  builderMutationFn: createChannelCloseInit
});
export const useChannelCloseConfirm = buildUseMutation<MsgChannelCloseConfirm, Error>({
  builderMutationFn: createChannelCloseConfirm
});
export const useRecvPacket = buildUseMutation<MsgRecvPacket, Error>({
  builderMutationFn: createRecvPacket
});
export const useTimeout = buildUseMutation<MsgTimeout, Error>({
  builderMutationFn: createTimeout
});
export const useTimeoutOnClose = buildUseMutation<MsgTimeoutOnClose, Error>({
  builderMutationFn: createTimeoutOnClose
});
export const useAcknowledgement = buildUseMutation<MsgAcknowledgement, Error>({
  builderMutationFn: createAcknowledgement
});
export const useChannelUpgradeInit = buildUseMutation<MsgChannelUpgradeInit, Error>({
  builderMutationFn: createChannelUpgradeInit
});
export const useChannelUpgradeTry = buildUseMutation<MsgChannelUpgradeTry, Error>({
  builderMutationFn: createChannelUpgradeTry
});
export const useChannelUpgradeAck = buildUseMutation<MsgChannelUpgradeAck, Error>({
  builderMutationFn: createChannelUpgradeAck
});
export const useChannelUpgradeConfirm = buildUseMutation<MsgChannelUpgradeConfirm, Error>({
  builderMutationFn: createChannelUpgradeConfirm
});
export const useChannelUpgradeOpen = buildUseMutation<MsgChannelUpgradeOpen, Error>({
  builderMutationFn: createChannelUpgradeOpen
});
export const useChannelUpgradeTimeout = buildUseMutation<MsgChannelUpgradeTimeout, Error>({
  builderMutationFn: createChannelUpgradeTimeout
});
export const useChannelUpgradeCancel = buildUseMutation<MsgChannelUpgradeCancel, Error>({
  builderMutationFn: createChannelUpgradeCancel
});
export const useUpdateChannelParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateChannelParams
});
export const usePruneAcknowledgements = buildUseMutation<MsgPruneAcknowledgements, Error>({
  builderMutationFn: createPruneAcknowledgements
});