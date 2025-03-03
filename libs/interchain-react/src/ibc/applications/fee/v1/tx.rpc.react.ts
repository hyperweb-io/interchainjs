import { buildUseMutation } from "../../../../react-query";
import { MsgRegisterPayee, MsgRegisterCounterpartyPayee, MsgPayPacketFee, MsgPayPacketFeeAsync } from "./tx";
import { createRegisterPayee, createRegisterCounterpartyPayee, createPayPacketFee, createPayPacketFeeAsync } from "./tx.rpc.func";
export const useRegisterPayee = buildUseMutation<MsgRegisterPayee, Error>({
  builderMutationFn: createRegisterPayee
});
export const useRegisterCounterpartyPayee = buildUseMutation<MsgRegisterCounterpartyPayee, Error>({
  builderMutationFn: createRegisterCounterpartyPayee
});
export const usePayPacketFee = buildUseMutation<MsgPayPacketFee, Error>({
  builderMutationFn: createPayPacketFee
});
export const usePayPacketFeeAsync = buildUseMutation<MsgPayPacketFeeAsync, Error>({
  builderMutationFn: createPayPacketFeeAsync
});