import { buildUseVueMutation } from "../../../../vue-query";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour, MsgRecoverClient, MsgIBCSoftwareUpgrade, MsgUpdateParams } from "./tx";
import { createCreateClient, createUpdateClient, createUpgradeClient, createSubmitMisbehaviour, createRecoverClient, createIBCSoftwareUpgrade, createUpdateClientParams } from "./tx.rpc.func";
export const useCreateClient = buildUseVueMutation<MsgCreateClient, Error>({
  builderMutationFn: createCreateClient
});
export const useUpdateClient = buildUseVueMutation<MsgUpdateClient, Error>({
  builderMutationFn: createUpdateClient
});
export const useUpgradeClient = buildUseVueMutation<MsgUpgradeClient, Error>({
  builderMutationFn: createUpgradeClient
});
export const useSubmitMisbehaviour = buildUseVueMutation<MsgSubmitMisbehaviour, Error>({
  builderMutationFn: createSubmitMisbehaviour
});
export const useRecoverClient = buildUseVueMutation<MsgRecoverClient, Error>({
  builderMutationFn: createRecoverClient
});
export const useIBCSoftwareUpgrade = buildUseVueMutation<MsgIBCSoftwareUpgrade, Error>({
  builderMutationFn: createIBCSoftwareUpgrade
});
export const useUpdateClientParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateClientParams
});