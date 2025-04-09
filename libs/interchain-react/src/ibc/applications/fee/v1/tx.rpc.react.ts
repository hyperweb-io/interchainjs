import { buildUseMutation } from "../../../../react-query";
import { MsgRegisterPayee, MsgRegisterCounterpartyPayee, MsgPayPacketFee, MsgPayPacketFeeAsync } from "./tx";
import { registerPayee, registerCounterpartyPayee, payPacketFee, payPacketFeeAsync } from "./tx.rpc.func";
export const useRegisterPayee = buildUseMutation<MsgRegisterPayee, Error>({
  builderMutationFn: registerPayee
});
export const useRegisterCounterpartyPayee = buildUseMutation<MsgRegisterCounterpartyPayee, Error>({
  builderMutationFn: registerCounterpartyPayee
});
export const usePayPacketFee = buildUseMutation<MsgPayPacketFee, Error>({
  builderMutationFn: payPacketFee
});
export const usePayPacketFeeAsync = buildUseMutation<MsgPayPacketFeeAsync, Error>({
  builderMutationFn: payPacketFeeAsync
});