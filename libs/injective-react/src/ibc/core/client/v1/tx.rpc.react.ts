import { buildUseMutation } from "../../../../react-query";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour, MsgRecoverClient, MsgIBCSoftwareUpgrade, MsgUpdateParams } from "./tx";
import { createCreateClient, createUpdateClient, createUpgradeClient, createSubmitMisbehaviour, createRecoverClient, createIBCSoftwareUpgrade, createUpdateClientParams } from "./tx.rpc.func";
export const useCreateClient = buildUseMutation<MsgCreateClient, Error>({
  builderMutationFn: createCreateClient
});
export const useUpdateClient = buildUseMutation<MsgUpdateClient, Error>({
  builderMutationFn: createUpdateClient
});
export const useUpgradeClient = buildUseMutation<MsgUpgradeClient, Error>({
  builderMutationFn: createUpgradeClient
});
export const useSubmitMisbehaviour = buildUseMutation<MsgSubmitMisbehaviour, Error>({
  builderMutationFn: createSubmitMisbehaviour
});
export const useRecoverClient = buildUseMutation<MsgRecoverClient, Error>({
  builderMutationFn: createRecoverClient
});
export const useIBCSoftwareUpgrade = buildUseMutation<MsgIBCSoftwareUpgrade, Error>({
  builderMutationFn: createIBCSoftwareUpgrade
});
export const useUpdateClientParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateClientParams
});