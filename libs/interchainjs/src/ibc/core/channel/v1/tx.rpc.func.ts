import { buildTx, SigningClientResolver } from "../../../../helper-func-types";
import { buildUseMutation } from "../../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement, MsgChannelUpgradeInit, MsgChannelUpgradeTry, MsgChannelUpgradeAck, MsgChannelUpgradeConfirm, MsgChannelUpgradeOpen, MsgChannelUpgradeTimeout, MsgChannelUpgradeCancel, MsgUpdateParams, MsgPruneAcknowledgements } from "./tx";
export const createChannelOpenInit = (getSigningClient: SigningClientResolver) => buildTx<MsgChannelOpenInit>({
  getSigningClient: getSigningClient,
  typeUrl: MsgChannelOpenInit.typeUrl,
  encoders: toEncoders(MsgChannelOpenInit),
  converters: toConverters(MsgChannelOpenInit)
});
export const useChannelOpenInit = buildUseMutation<MsgChannelOpenInit, Error>({
  builderMutationFn: createChannelOpenInit
});
export const createChannelOpenTry = (getSigningClient: SigningClientResolver) => buildTx<MsgChannelOpenTry>({
  getSigningClient: getSigningClient,
  typeUrl: MsgChannelOpenTry.typeUrl,
  encoders: toEncoders(MsgChannelOpenTry),
  converters: toConverters(MsgChannelOpenTry)
});
export const useChannelOpenTry = buildUseMutation<MsgChannelOpenTry, Error>({
  builderMutationFn: createChannelOpenTry
});
export const createChannelOpenAck = (getSigningClient: SigningClientResolver) => buildTx<MsgChannelOpenAck>({
  getSigningClient: getSigningClient,
  typeUrl: MsgChannelOpenAck.typeUrl,
  encoders: toEncoders(MsgChannelOpenAck),
  converters: toConverters(MsgChannelOpenAck)
});
export const useChannelOpenAck = buildUseMutation<MsgChannelOpenAck, Error>({
  builderMutationFn: createChannelOpenAck
});
export const createChannelOpenConfirm = (getSigningClient: SigningClientResolver) => buildTx<MsgChannelOpenConfirm>({
  getSigningClient: getSigningClient,
  typeUrl: MsgChannelOpenConfirm.typeUrl,
  encoders: toEncoders(MsgChannelOpenConfirm),
  converters: toConverters(MsgChannelOpenConfirm)
});
export const useChannelOpenConfirm = buildUseMutation<MsgChannelOpenConfirm, Error>({
  builderMutationFn: createChannelOpenConfirm
});
export const createChannelCloseInit = (getSigningClient: SigningClientResolver) => buildTx<MsgChannelCloseInit>({
  getSigningClient: getSigningClient,
  typeUrl: MsgChannelCloseInit.typeUrl,
  encoders: toEncoders(MsgChannelCloseInit),
  converters: toConverters(MsgChannelCloseInit)
});
export const useChannelCloseInit = buildUseMutation<MsgChannelCloseInit, Error>({
  builderMutationFn: createChannelCloseInit
});
export const createChannelCloseConfirm = (getSigningClient: SigningClientResolver) => buildTx<MsgChannelCloseConfirm>({
  getSigningClient: getSigningClient,
  typeUrl: MsgChannelCloseConfirm.typeUrl,
  encoders: toEncoders(MsgChannelCloseConfirm),
  converters: toConverters(MsgChannelCloseConfirm)
});
export const useChannelCloseConfirm = buildUseMutation<MsgChannelCloseConfirm, Error>({
  builderMutationFn: createChannelCloseConfirm
});
export const createRecvPacket = (getSigningClient: SigningClientResolver) => buildTx<MsgRecvPacket>({
  getSigningClient: getSigningClient,
  typeUrl: MsgRecvPacket.typeUrl,
  encoders: toEncoders(MsgRecvPacket),
  converters: toConverters(MsgRecvPacket)
});
export const useRecvPacket = buildUseMutation<MsgRecvPacket, Error>({
  builderMutationFn: createRecvPacket
});
export const createTimeout = (getSigningClient: SigningClientResolver) => buildTx<MsgTimeout>({
  getSigningClient: getSigningClient,
  typeUrl: MsgTimeout.typeUrl,
  encoders: toEncoders(MsgTimeout),
  converters: toConverters(MsgTimeout)
});
export const useTimeout = buildUseMutation<MsgTimeout, Error>({
  builderMutationFn: createTimeout
});
export const createTimeoutOnClose = (getSigningClient: SigningClientResolver) => buildTx<MsgTimeoutOnClose>({
  getSigningClient: getSigningClient,
  typeUrl: MsgTimeoutOnClose.typeUrl,
  encoders: toEncoders(MsgTimeoutOnClose),
  converters: toConverters(MsgTimeoutOnClose)
});
export const useTimeoutOnClose = buildUseMutation<MsgTimeoutOnClose, Error>({
  builderMutationFn: createTimeoutOnClose
});
export const createAcknowledgement = (getSigningClient: SigningClientResolver) => buildTx<MsgAcknowledgement>({
  getSigningClient: getSigningClient,
  typeUrl: MsgAcknowledgement.typeUrl,
  encoders: toEncoders(MsgAcknowledgement),
  converters: toConverters(MsgAcknowledgement)
});
export const useAcknowledgement = buildUseMutation<MsgAcknowledgement, Error>({
  builderMutationFn: createAcknowledgement
});
export const createChannelUpgradeInit = (getSigningClient: SigningClientResolver) => buildTx<MsgChannelUpgradeInit>({
  getSigningClient: getSigningClient,
  typeUrl: MsgChannelUpgradeInit.typeUrl,
  encoders: toEncoders(MsgChannelUpgradeInit),
  converters: toConverters(MsgChannelUpgradeInit)
});
export const useChannelUpgradeInit = buildUseMutation<MsgChannelUpgradeInit, Error>({
  builderMutationFn: createChannelUpgradeInit
});
export const createChannelUpgradeTry = (getSigningClient: SigningClientResolver) => buildTx<MsgChannelUpgradeTry>({
  getSigningClient: getSigningClient,
  typeUrl: MsgChannelUpgradeTry.typeUrl,
  encoders: toEncoders(MsgChannelUpgradeTry),
  converters: toConverters(MsgChannelUpgradeTry)
});
export const useChannelUpgradeTry = buildUseMutation<MsgChannelUpgradeTry, Error>({
  builderMutationFn: createChannelUpgradeTry
});
export const createChannelUpgradeAck = (getSigningClient: SigningClientResolver) => buildTx<MsgChannelUpgradeAck>({
  getSigningClient: getSigningClient,
  typeUrl: MsgChannelUpgradeAck.typeUrl,
  encoders: toEncoders(MsgChannelUpgradeAck),
  converters: toConverters(MsgChannelUpgradeAck)
});
export const useChannelUpgradeAck = buildUseMutation<MsgChannelUpgradeAck, Error>({
  builderMutationFn: createChannelUpgradeAck
});
export const createChannelUpgradeConfirm = (getSigningClient: SigningClientResolver) => buildTx<MsgChannelUpgradeConfirm>({
  getSigningClient: getSigningClient,
  typeUrl: MsgChannelUpgradeConfirm.typeUrl,
  encoders: toEncoders(MsgChannelUpgradeConfirm),
  converters: toConverters(MsgChannelUpgradeConfirm)
});
export const useChannelUpgradeConfirm = buildUseMutation<MsgChannelUpgradeConfirm, Error>({
  builderMutationFn: createChannelUpgradeConfirm
});
export const createChannelUpgradeOpen = (getSigningClient: SigningClientResolver) => buildTx<MsgChannelUpgradeOpen>({
  getSigningClient: getSigningClient,
  typeUrl: MsgChannelUpgradeOpen.typeUrl,
  encoders: toEncoders(MsgChannelUpgradeOpen),
  converters: toConverters(MsgChannelUpgradeOpen)
});
export const useChannelUpgradeOpen = buildUseMutation<MsgChannelUpgradeOpen, Error>({
  builderMutationFn: createChannelUpgradeOpen
});
export const createChannelUpgradeTimeout = (getSigningClient: SigningClientResolver) => buildTx<MsgChannelUpgradeTimeout>({
  getSigningClient: getSigningClient,
  typeUrl: MsgChannelUpgradeTimeout.typeUrl,
  encoders: toEncoders(MsgChannelUpgradeTimeout),
  converters: toConverters(MsgChannelUpgradeTimeout)
});
export const useChannelUpgradeTimeout = buildUseMutation<MsgChannelUpgradeTimeout, Error>({
  builderMutationFn: createChannelUpgradeTimeout
});
export const createChannelUpgradeCancel = (getSigningClient: SigningClientResolver) => buildTx<MsgChannelUpgradeCancel>({
  getSigningClient: getSigningClient,
  typeUrl: MsgChannelUpgradeCancel.typeUrl,
  encoders: toEncoders(MsgChannelUpgradeCancel),
  converters: toConverters(MsgChannelUpgradeCancel)
});
export const useChannelUpgradeCancel = buildUseMutation<MsgChannelUpgradeCancel, Error>({
  builderMutationFn: createChannelUpgradeCancel
});
export const createUpdateChannelParams = (getSigningClient: SigningClientResolver) => buildTx<MsgUpdateParams>({
  getSigningClient: getSigningClient,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams)
});
export const useUpdateChannelParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateChannelParams
});
export const createPruneAcknowledgements = (getSigningClient: SigningClientResolver) => buildTx<MsgPruneAcknowledgements>({
  getSigningClient: getSigningClient,
  typeUrl: MsgPruneAcknowledgements.typeUrl,
  encoders: toEncoders(MsgPruneAcknowledgements),
  converters: toConverters(MsgPruneAcknowledgements)
});
export const usePruneAcknowledgements = buildUseMutation<MsgPruneAcknowledgements, Error>({
  builderMutationFn: createPruneAcknowledgements
});