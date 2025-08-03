import { buildUseMutation } from "../../../../react-query";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour, MsgRecoverClient, MsgIBCSoftwareUpgrade, MsgUpdateParams, MsgDeleteClientCreator } from "./tx";
import { createClient, updateClient, upgradeClient, submitMisbehaviour, recoverClient, iBCSoftwareUpgrade, updateClientParams, deleteClientCreator } from "./tx.rpc.func";
/**
 * CreateClient defines a rpc handler method for MsgCreateClient.
 * @name useCreateClient
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.CreateClient
 */
export const useCreateClient = buildUseMutation<MsgCreateClient, Error>({
  builderMutationFn: createClient
});
/**
 * UpdateClient defines a rpc handler method for MsgUpdateClient.
 * @name useUpdateClient
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.UpdateClient
 */
export const useUpdateClient = buildUseMutation<MsgUpdateClient, Error>({
  builderMutationFn: updateClient
});
/**
 * UpgradeClient defines a rpc handler method for MsgUpgradeClient.
 * @name useUpgradeClient
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.UpgradeClient
 */
export const useUpgradeClient = buildUseMutation<MsgUpgradeClient, Error>({
  builderMutationFn: upgradeClient
});
/**
 * SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour.
 * @name useSubmitMisbehaviour
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.SubmitMisbehaviour
 */
export const useSubmitMisbehaviour = buildUseMutation<MsgSubmitMisbehaviour, Error>({
  builderMutationFn: submitMisbehaviour
});
/**
 * RecoverClient defines a rpc handler method for MsgRecoverClient.
 * @name useRecoverClient
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.RecoverClient
 */
export const useRecoverClient = buildUseMutation<MsgRecoverClient, Error>({
  builderMutationFn: recoverClient
});
/**
 * IBCSoftwareUpgrade defines a rpc handler method for MsgIBCSoftwareUpgrade.
 * @name useIBCSoftwareUpgrade
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.IBCSoftwareUpgrade
 */
export const useIBCSoftwareUpgrade = buildUseMutation<MsgIBCSoftwareUpgrade, Error>({
  builderMutationFn: iBCSoftwareUpgrade
});
/**
 * UpdateClientParams defines a rpc handler method for MsgUpdateParams.
 * @name useUpdateClientParams
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.UpdateClientParams
 */
export const useUpdateClientParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateClientParams
});
/**
 * DeleteClientCreator defines a rpc handler method for MsgDeleteClientCreator.
 * @name useDeleteClientCreator
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.DeleteClientCreator
 */
export const useDeleteClientCreator = buildUseMutation<MsgDeleteClientCreator, Error>({
  builderMutationFn: deleteClientCreator
});