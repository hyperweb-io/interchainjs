import { buildUseVueMutation } from "../../../../vue-query";
import { MsgRegisterPayee, MsgRegisterCounterpartyPayee, MsgPayPacketFee, MsgPayPacketFeeAsync } from "./tx";
import { registerPayee, registerCounterpartyPayee, payPacketFee, payPacketFeeAsync } from "./tx.rpc.func";
export const useRegisterPayee = buildUseVueMutation<MsgRegisterPayee, Error>({
  builderMutationFn: registerPayee
});
export const useRegisterCounterpartyPayee = buildUseVueMutation<MsgRegisterCounterpartyPayee, Error>({
  builderMutationFn: registerCounterpartyPayee
});
export const usePayPacketFee = buildUseVueMutation<MsgPayPacketFee, Error>({
  builderMutationFn: payPacketFee
});
export const usePayPacketFeeAsync = buildUseVueMutation<MsgPayPacketFeeAsync, Error>({
  builderMutationFn: payPacketFeeAsync
});