import { buildTx, SigningClientResolver } from "../../../../helper-func-types";
import { buildUseMutation } from "../../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement, MsgChannelUpgradeInit, MsgChannelUpgradeTry, MsgChannelUpgradeAck, MsgChannelUpgradeConfirm, MsgChannelUpgradeOpen, MsgChannelUpgradeTimeout, MsgChannelUpgradeCancel, MsgUpdateParams, MsgPruneAcknowledgements } from "./tx";
export const createChannelOpenInit = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelOpenInit>({
  clientResolver,
  typeUrl: MsgChannelOpenInit.typeUrl,
  encoders: toEncoders(MsgChannelOpenInit),
  converters: toConverters(MsgChannelOpenInit)
});
export const useChannelOpenInit = buildUseMutation<MsgChannelOpenInit, Error>({
  builderMutationFn: createChannelOpenInit
});
export const createChannelOpenTry = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelOpenTry>({
  clientResolver,
  typeUrl: MsgChannelOpenTry.typeUrl,
  encoders: toEncoders(MsgChannelOpenTry),
  converters: toConverters(MsgChannelOpenTry)
});
export const useChannelOpenTry = buildUseMutation<MsgChannelOpenTry, Error>({
  builderMutationFn: createChannelOpenTry
});
export const createChannelOpenAck = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelOpenAck>({
  clientResolver,
  typeUrl: MsgChannelOpenAck.typeUrl,
  encoders: toEncoders(MsgChannelOpenAck),
  converters: toConverters(MsgChannelOpenAck)
});
export const useChannelOpenAck = buildUseMutation<MsgChannelOpenAck, Error>({
  builderMutationFn: createChannelOpenAck
});
export const createChannelOpenConfirm = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelOpenConfirm>({
  clientResolver,
  typeUrl: MsgChannelOpenConfirm.typeUrl,
  encoders: toEncoders(MsgChannelOpenConfirm),
  converters: toConverters(MsgChannelOpenConfirm)
});
export const useChannelOpenConfirm = buildUseMutation<MsgChannelOpenConfirm, Error>({
  builderMutationFn: createChannelOpenConfirm
});
export const createChannelCloseInit = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelCloseInit>({
  clientResolver,
  typeUrl: MsgChannelCloseInit.typeUrl,
  encoders: toEncoders(MsgChannelCloseInit),
  converters: toConverters(MsgChannelCloseInit)
});
export const useChannelCloseInit = buildUseMutation<MsgChannelCloseInit, Error>({
  builderMutationFn: createChannelCloseInit
});
export const createChannelCloseConfirm = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelCloseConfirm>({
  clientResolver,
  typeUrl: MsgChannelCloseConfirm.typeUrl,
  encoders: toEncoders(MsgChannelCloseConfirm),
  converters: toConverters(MsgChannelCloseConfirm)
});
export const useChannelCloseConfirm = buildUseMutation<MsgChannelCloseConfirm, Error>({
  builderMutationFn: createChannelCloseConfirm
});
export const createRecvPacket = (clientResolver?: SigningClientResolver) => buildTx<MsgRecvPacket>({
  clientResolver,
  typeUrl: MsgRecvPacket.typeUrl,
  encoders: toEncoders(MsgRecvPacket),
  converters: toConverters(MsgRecvPacket)
});
export const useRecvPacket = buildUseMutation<MsgRecvPacket, Error>({
  builderMutationFn: createRecvPacket
});
export const createTimeout = (clientResolver?: SigningClientResolver) => buildTx<MsgTimeout>({
  clientResolver,
  typeUrl: MsgTimeout.typeUrl,
  encoders: toEncoders(MsgTimeout),
  converters: toConverters(MsgTimeout)
});
export const useTimeout = buildUseMutation<MsgTimeout, Error>({
  builderMutationFn: createTimeout
});
export const createTimeoutOnClose = (clientResolver?: SigningClientResolver) => buildTx<MsgTimeoutOnClose>({
  clientResolver,
  typeUrl: MsgTimeoutOnClose.typeUrl,
  encoders: toEncoders(MsgTimeoutOnClose),
  converters: toConverters(MsgTimeoutOnClose)
});
export const useTimeoutOnClose = buildUseMutation<MsgTimeoutOnClose, Error>({
  builderMutationFn: createTimeoutOnClose
});
export const createAcknowledgement = (clientResolver?: SigningClientResolver) => buildTx<MsgAcknowledgement>({
  clientResolver,
  typeUrl: MsgAcknowledgement.typeUrl,
  encoders: toEncoders(MsgAcknowledgement),
  converters: toConverters(MsgAcknowledgement)
});
export const useAcknowledgement = buildUseMutation<MsgAcknowledgement, Error>({
  builderMutationFn: createAcknowledgement
});
export const createChannelUpgradeInit = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelUpgradeInit>({
  clientResolver,
  typeUrl: MsgChannelUpgradeInit.typeUrl,
  encoders: toEncoders(MsgChannelUpgradeInit),
  converters: toConverters(MsgChannelUpgradeInit)
});
export const useChannelUpgradeInit = buildUseMutation<MsgChannelUpgradeInit, Error>({
  builderMutationFn: createChannelUpgradeInit
});
export const createChannelUpgradeTry = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelUpgradeTry>({
  clientResolver,
  typeUrl: MsgChannelUpgradeTry.typeUrl,
  encoders: toEncoders(MsgChannelUpgradeTry),
  converters: toConverters(MsgChannelUpgradeTry)
});
export const useChannelUpgradeTry = buildUseMutation<MsgChannelUpgradeTry, Error>({
  builderMutationFn: createChannelUpgradeTry
});
export const createChannelUpgradeAck = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelUpgradeAck>({
  clientResolver,
  typeUrl: MsgChannelUpgradeAck.typeUrl,
  encoders: toEncoders(MsgChannelUpgradeAck),
  converters: toConverters(MsgChannelUpgradeAck)
});
export const useChannelUpgradeAck = buildUseMutation<MsgChannelUpgradeAck, Error>({
  builderMutationFn: createChannelUpgradeAck
});
export const createChannelUpgradeConfirm = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelUpgradeConfirm>({
  clientResolver,
  typeUrl: MsgChannelUpgradeConfirm.typeUrl,
  encoders: toEncoders(MsgChannelUpgradeConfirm),
  converters: toConverters(MsgChannelUpgradeConfirm)
});
export const useChannelUpgradeConfirm = buildUseMutation<MsgChannelUpgradeConfirm, Error>({
  builderMutationFn: createChannelUpgradeConfirm
});
export const createChannelUpgradeOpen = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelUpgradeOpen>({
  clientResolver,
  typeUrl: MsgChannelUpgradeOpen.typeUrl,
  encoders: toEncoders(MsgChannelUpgradeOpen),
  converters: toConverters(MsgChannelUpgradeOpen)
});
export const useChannelUpgradeOpen = buildUseMutation<MsgChannelUpgradeOpen, Error>({
  builderMutationFn: createChannelUpgradeOpen
});
export const createChannelUpgradeTimeout = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelUpgradeTimeout>({
  clientResolver,
  typeUrl: MsgChannelUpgradeTimeout.typeUrl,
  encoders: toEncoders(MsgChannelUpgradeTimeout),
  converters: toConverters(MsgChannelUpgradeTimeout)
});
export const useChannelUpgradeTimeout = buildUseMutation<MsgChannelUpgradeTimeout, Error>({
  builderMutationFn: createChannelUpgradeTimeout
});
export const createChannelUpgradeCancel = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelUpgradeCancel>({
  clientResolver,
  typeUrl: MsgChannelUpgradeCancel.typeUrl,
  encoders: toEncoders(MsgChannelUpgradeCancel),
  converters: toConverters(MsgChannelUpgradeCancel)
});
export const useChannelUpgradeCancel = buildUseMutation<MsgChannelUpgradeCancel, Error>({
  builderMutationFn: createChannelUpgradeCancel
});
export const createUpdateChannelParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams)
});
export const useUpdateChannelParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateChannelParams
});
export const createPruneAcknowledgements = (clientResolver?: SigningClientResolver) => buildTx<MsgPruneAcknowledgements>({
  clientResolver,
  typeUrl: MsgPruneAcknowledgements.typeUrl,
  encoders: toEncoders(MsgPruneAcknowledgements),
  converters: toConverters(MsgPruneAcknowledgements)
});
export const usePruneAcknowledgements = buildUseMutation<MsgPruneAcknowledgements, Error>({
  builderMutationFn: createPruneAcknowledgements
});