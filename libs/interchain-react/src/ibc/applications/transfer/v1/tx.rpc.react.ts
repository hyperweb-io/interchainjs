import { buildUseMutation } from "../../../../react-query";
import { MsgTransfer, MsgUpdateParams } from "./tx";
import { transfer, updateParams } from "./tx.rpc.func";
/**
 * Transfer defines a rpc handler method for MsgTransfer.
 * @name useTransfer
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.Transfer
 */
export const useTransfer = buildUseMutation<MsgTransfer, Error>({
  builderMutationFn: transfer
});
/**
 * UpdateParams defines a rpc handler for MsgUpdateParams.
 * @name useUpdateParams
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.UpdateParams
 */
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});