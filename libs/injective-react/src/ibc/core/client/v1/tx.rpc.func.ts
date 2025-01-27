import { buildTx, SigningClientResolver } from "../../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour, MsgRecoverClient, MsgIBCSoftwareUpgrade, MsgUpdateParams } from "./tx";
export const createCreateClient = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateClient>({
  clientResolver,
  typeUrl: MsgCreateClient.typeUrl,
  encoders: toEncoders(MsgCreateClient),
  converters: toConverters(MsgCreateClient),
  deps: [MsgCreateClient]
});
export const createUpdateClient = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateClient>({
  clientResolver,
  typeUrl: MsgUpdateClient.typeUrl,
  encoders: toEncoders(MsgUpdateClient),
  converters: toConverters(MsgUpdateClient),
  deps: [MsgUpdateClient]
});
export const createUpgradeClient = (clientResolver?: SigningClientResolver) => buildTx<MsgUpgradeClient>({
  clientResolver,
  typeUrl: MsgUpgradeClient.typeUrl,
  encoders: toEncoders(MsgUpgradeClient),
  converters: toConverters(MsgUpgradeClient),
  deps: [MsgUpgradeClient]
});
export const createSubmitMisbehaviour = (clientResolver?: SigningClientResolver) => buildTx<MsgSubmitMisbehaviour>({
  clientResolver,
  typeUrl: MsgSubmitMisbehaviour.typeUrl,
  encoders: toEncoders(MsgSubmitMisbehaviour),
  converters: toConverters(MsgSubmitMisbehaviour),
  deps: [MsgSubmitMisbehaviour]
});
export const createRecoverClient = (clientResolver?: SigningClientResolver) => buildTx<MsgRecoverClient>({
  clientResolver,
  typeUrl: MsgRecoverClient.typeUrl,
  encoders: toEncoders(MsgRecoverClient),
  converters: toConverters(MsgRecoverClient),
  deps: [MsgRecoverClient]
});
export const createIBCSoftwareUpgrade = (clientResolver?: SigningClientResolver) => buildTx<MsgIBCSoftwareUpgrade>({
  clientResolver,
  typeUrl: MsgIBCSoftwareUpgrade.typeUrl,
  encoders: toEncoders(MsgIBCSoftwareUpgrade),
  converters: toConverters(MsgIBCSoftwareUpgrade),
  deps: [MsgIBCSoftwareUpgrade]
});
export const createUpdateClientParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams),
  deps: [MsgUpdateParams]
});