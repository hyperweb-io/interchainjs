import { buildUseVueMutation } from "../../../../vue-query";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour, MsgRecoverClient, MsgIBCSoftwareUpgrade, MsgUpdateParams } from "./tx";
import { createClient, updateClient, upgradeClient, submitMisbehaviour, recoverClient, iBCSoftwareUpgrade, updateClientParams } from "./tx.rpc.func";
export const useCreateClient = buildUseVueMutation<MsgCreateClient, Error>({
  builderMutationFn: createClient
});
export const useUpdateClient = buildUseVueMutation<MsgUpdateClient, Error>({
  builderMutationFn: updateClient
});
export const useUpgradeClient = buildUseVueMutation<MsgUpgradeClient, Error>({
  builderMutationFn: upgradeClient
});
export const useSubmitMisbehaviour = buildUseVueMutation<MsgSubmitMisbehaviour, Error>({
  builderMutationFn: submitMisbehaviour
});
export const useRecoverClient = buildUseVueMutation<MsgRecoverClient, Error>({
  builderMutationFn: recoverClient
});
export const useIBCSoftwareUpgrade = buildUseVueMutation<MsgIBCSoftwareUpgrade, Error>({
  builderMutationFn: iBCSoftwareUpgrade
});
export const useUpdateClientParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateClientParams
});