import { buildUseMutation } from "../../../../react-query";
import { MsgRegisterPayee, MsgRegisterCounterpartyPayee, MsgPayPacketFee, MsgPayPacketFeeAsync } from "./tx";
import { registerPayee, registerCounterpartyPayee, payPacketFee, payPacketFeeAsync } from "./tx.rpc.func";
/* RegisterPayee defines a rpc handler method for MsgRegisterPayee
 RegisterPayee is called by the relayer on each channelEnd and allows them to set an optional
 payee to which reverse and timeout relayer packet fees will be paid out. The payee should be registered on
 the source chain from which packets originate as this is where fee distribution takes place. This function may be
 called more than once by a relayer, in which case, the latest payee is always used. */
export const useRegisterPayee = buildUseMutation<MsgRegisterPayee, Error>({
  builderMutationFn: registerPayee
});
/* RegisterCounterpartyPayee defines a rpc handler method for MsgRegisterCounterpartyPayee
 RegisterCounterpartyPayee is called by the relayer on each channelEnd and allows them to specify the counterparty
 payee address before relaying. This ensures they will be properly compensated for forward relaying since
 the destination chain must include the registered counterparty payee address in the acknowledgement. This function
 may be called more than once by a relayer, in which case, the latest counterparty payee address is always used. */
export const useRegisterCounterpartyPayee = buildUseMutation<MsgRegisterCounterpartyPayee, Error>({
  builderMutationFn: registerCounterpartyPayee
});
/* PayPacketFee defines a rpc handler method for MsgPayPacketFee
 PayPacketFee is an open callback that may be called by any module/user that wishes to escrow funds in order to
 incentivize the relaying of the packet at the next sequence
 NOTE: This method is intended to be used within a multi msg transaction, where the subsequent msg that follows
 initiates the lifecycle of the incentivized packet */
export const usePayPacketFee = buildUseMutation<MsgPayPacketFee, Error>({
  builderMutationFn: payPacketFee
});
/* PayPacketFeeAsync defines a rpc handler method for MsgPayPacketFeeAsync
 PayPacketFeeAsync is an open callback that may be called by any module/user that wishes to escrow funds in order to
 incentivize the relaying of a known packet (i.e. at a particular sequence) */
export const usePayPacketFeeAsync = buildUseMutation<MsgPayPacketFeeAsync, Error>({
  builderMutationFn: payPacketFeeAsync
});