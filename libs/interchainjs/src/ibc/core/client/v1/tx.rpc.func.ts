import { buildTx, SigningClientResolver } from "../../../../helper-func-types";
import { buildUseMutation } from "../../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour, MsgRecoverClient, MsgIBCSoftwareUpgrade, MsgUpdateParams } from "./tx";
export const createCreateClient = (getSigningClient: SigningClientResolver) => buildTx<MsgCreateClient>({
  getSigningClient: getSigningClient,
  typeUrl: MsgCreateClient.typeUrl,
  encoders: toEncoders(MsgCreateClient),
  converters: toConverters(MsgCreateClient)
});
export const useCreateClient = buildUseMutation<MsgCreateClient, Error>({
  builderMutationFn: createCreateClient
});
export const createUpdateClient = (getSigningClient: SigningClientResolver) => buildTx<MsgUpdateClient>({
  getSigningClient: getSigningClient,
  typeUrl: MsgUpdateClient.typeUrl,
  encoders: toEncoders(MsgUpdateClient),
  converters: toConverters(MsgUpdateClient)
});
export const useUpdateClient = buildUseMutation<MsgUpdateClient, Error>({
  builderMutationFn: createUpdateClient
});
export const createUpgradeClient = (getSigningClient: SigningClientResolver) => buildTx<MsgUpgradeClient>({
  getSigningClient: getSigningClient,
  typeUrl: MsgUpgradeClient.typeUrl,
  encoders: toEncoders(MsgUpgradeClient),
  converters: toConverters(MsgUpgradeClient)
});
export const useUpgradeClient = buildUseMutation<MsgUpgradeClient, Error>({
  builderMutationFn: createUpgradeClient
});
export const createSubmitMisbehaviour = (getSigningClient: SigningClientResolver) => buildTx<MsgSubmitMisbehaviour>({
  getSigningClient: getSigningClient,
  typeUrl: MsgSubmitMisbehaviour.typeUrl,
  encoders: toEncoders(MsgSubmitMisbehaviour),
  converters: toConverters(MsgSubmitMisbehaviour)
});
export const useSubmitMisbehaviour = buildUseMutation<MsgSubmitMisbehaviour, Error>({
  builderMutationFn: createSubmitMisbehaviour
});
export const createRecoverClient = (getSigningClient: SigningClientResolver) => buildTx<MsgRecoverClient>({
  getSigningClient: getSigningClient,
  typeUrl: MsgRecoverClient.typeUrl,
  encoders: toEncoders(MsgRecoverClient),
  converters: toConverters(MsgRecoverClient)
});
export const useRecoverClient = buildUseMutation<MsgRecoverClient, Error>({
  builderMutationFn: createRecoverClient
});
export const createIBCSoftwareUpgrade = (getSigningClient: SigningClientResolver) => buildTx<MsgIBCSoftwareUpgrade>({
  getSigningClient: getSigningClient,
  typeUrl: MsgIBCSoftwareUpgrade.typeUrl,
  encoders: toEncoders(MsgIBCSoftwareUpgrade),
  converters: toConverters(MsgIBCSoftwareUpgrade)
});
export const useIBCSoftwareUpgrade = buildUseMutation<MsgIBCSoftwareUpgrade, Error>({
  builderMutationFn: createIBCSoftwareUpgrade
});
export const createUpdateClientParams = (getSigningClient: SigningClientResolver) => buildTx<MsgUpdateParams>({
  getSigningClient: getSigningClient,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams)
});
export const useUpdateClientParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateClientParams
});