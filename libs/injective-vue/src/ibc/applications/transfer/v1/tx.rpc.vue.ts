import { buildUseVueMutation } from "../../../../vue-query";
import { MsgTransfer, MsgUpdateParams } from "./tx";
import { transfer, updateParams } from "./tx.rpc.func";
/**
 * Transfer defines a rpc handler method for MsgTransfer.
 * @name useTransfer
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.Transfer
 */
export const useTransfer = buildUseVueMutation<MsgTransfer, Error>({
  builderMutationFn: transfer
});
/**
 * UpdateParams defines a rpc handler for MsgUpdateParams.
 * @name useUpdateParams
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.UpdateParams
 */
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});