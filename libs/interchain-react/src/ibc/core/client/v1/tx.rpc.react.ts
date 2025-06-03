import { buildUseMutation } from "../../../../react-query";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour, MsgRecoverClient, MsgIBCSoftwareUpgrade, MsgUpdateParams } from "./tx";
import { createClient, updateClient, upgradeClient, submitMisbehaviour, recoverClient, iBCSoftwareUpgrade, updateClientParams } from "./tx.rpc.func";
/* CreateClient defines a rpc handler method for MsgCreateClient. */
export const useCreateClient = buildUseMutation<MsgCreateClient, Error>({
  builderMutationFn: createClient
});
/* UpdateClient defines a rpc handler method for MsgUpdateClient. */
export const useUpdateClient = buildUseMutation<MsgUpdateClient, Error>({
  builderMutationFn: updateClient
});
/* UpgradeClient defines a rpc handler method for MsgUpgradeClient. */
export const useUpgradeClient = buildUseMutation<MsgUpgradeClient, Error>({
  builderMutationFn: upgradeClient
});
/* SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. */
export const useSubmitMisbehaviour = buildUseMutation<MsgSubmitMisbehaviour, Error>({
  builderMutationFn: submitMisbehaviour
});
/* RecoverClient defines a rpc handler method for MsgRecoverClient. */
export const useRecoverClient = buildUseMutation<MsgRecoverClient, Error>({
  builderMutationFn: recoverClient
});
/* IBCSoftwareUpgrade defines a rpc handler method for MsgIBCSoftwareUpgrade. */
export const useIBCSoftwareUpgrade = buildUseMutation<MsgIBCSoftwareUpgrade, Error>({
  builderMutationFn: iBCSoftwareUpgrade
});
/* UpdateClientParams defines a rpc handler method for MsgUpdateParams. */
export const useUpdateClientParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateClientParams
});