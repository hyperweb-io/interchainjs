import { buildUseMutation } from "../../../../react-query";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour, MsgRecoverClient, MsgIBCSoftwareUpgrade, MsgUpdateParams } from "./tx";
import { createClient, updateClient, upgradeClient, submitMisbehaviour, recoverClient, iBCSoftwareUpgrade, updateClientParams } from "./tx.rpc.func";
export const useCreateClient = buildUseMutation<MsgCreateClient, Error>({
  builderMutationFn: createClient
});
export const useUpdateClient = buildUseMutation<MsgUpdateClient, Error>({
  builderMutationFn: updateClient
});
export const useUpgradeClient = buildUseMutation<MsgUpgradeClient, Error>({
  builderMutationFn: upgradeClient
});
export const useSubmitMisbehaviour = buildUseMutation<MsgSubmitMisbehaviour, Error>({
  builderMutationFn: submitMisbehaviour
});
export const useRecoverClient = buildUseMutation<MsgRecoverClient, Error>({
  builderMutationFn: recoverClient
});
export const useIBCSoftwareUpgrade = buildUseMutation<MsgIBCSoftwareUpgrade, Error>({
  builderMutationFn: iBCSoftwareUpgrade
});
export const useUpdateClientParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateClientParams
});