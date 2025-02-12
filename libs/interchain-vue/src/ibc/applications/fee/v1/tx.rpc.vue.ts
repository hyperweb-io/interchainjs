import { buildUseVueMutation } from "../../../../vue-query";
import { MsgRegisterPayee, MsgRegisterCounterpartyPayee, MsgPayPacketFee, MsgPayPacketFeeAsync } from "./tx";
import { createRegisterPayee, createRegisterCounterpartyPayee, createPayPacketFee, createPayPacketFeeAsync } from "./tx.rpc.func";
export const useRegisterPayee = buildUseVueMutation<MsgRegisterPayee, Error>({
  builderMutationFn: createRegisterPayee
});
export const useRegisterCounterpartyPayee = buildUseVueMutation<MsgRegisterCounterpartyPayee, Error>({
  builderMutationFn: createRegisterCounterpartyPayee
});
export const usePayPacketFee = buildUseVueMutation<MsgPayPacketFee, Error>({
  builderMutationFn: createPayPacketFee
});
export const usePayPacketFeeAsync = buildUseVueMutation<MsgPayPacketFeeAsync, Error>({
  builderMutationFn: createPayPacketFeeAsync
});