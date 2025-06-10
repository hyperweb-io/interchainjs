import { buildUseMutation } from "../../../react-query";
import { MsgFundCommunityPool, MsgCommunityPoolSpend, MsgCreateContinuousFund, MsgCancelContinuousFund, MsgUpdateParams } from "./tx";
import { fundCommunityPool, communityPoolSpend, createContinuousFund, cancelContinuousFund, updateParams } from "./tx.rpc.func";
/**
 * FundCommunityPool defines a method to allow an account to directly
 * fund the community pool.
 * @name useFundCommunityPool
 * @package cosmos.protocolpool.v1
 * @see proto service: cosmos.protocolpool.v1.FundCommunityPool
 */
export const useFundCommunityPool = buildUseMutation<MsgFundCommunityPool, Error>({
  builderMutationFn: fundCommunityPool
});
/**
 * CommunityPoolSpend defines a governance operation for sending tokens from
 * the community pool in the x/protocolpool module to another account, which
 * could be the governance module itself. The authority is defined in the
 * keeper.
 * @name useCommunityPoolSpend
 * @package cosmos.protocolpool.v1
 * @see proto service: cosmos.protocolpool.v1.CommunityPoolSpend
 */
export const useCommunityPoolSpend = buildUseMutation<MsgCommunityPoolSpend, Error>({
  builderMutationFn: communityPoolSpend
});
/**
 * CreateContinuousFund defines a method to distribute a percentage of funds to an address continuously.
 * This ContinuousFund can be indefinite or run until a given expiry time.
 * Funds come from validator block rewards from x/distribution, but may also come from
 * any user who funds the ProtocolPoolEscrow module account directly through x/bank.
 * @name useCreateContinuousFund
 * @package cosmos.protocolpool.v1
 * @see proto service: cosmos.protocolpool.v1.CreateContinuousFund
 */
export const useCreateContinuousFund = buildUseMutation<MsgCreateContinuousFund, Error>({
  builderMutationFn: createContinuousFund
});
/**
 * CancelContinuousFund defines a method for cancelling continuous fund.
 * @name useCancelContinuousFund
 * @package cosmos.protocolpool.v1
 * @see proto service: cosmos.protocolpool.v1.CancelContinuousFund
 */
export const useCancelContinuousFund = buildUseMutation<MsgCancelContinuousFund, Error>({
  builderMutationFn: cancelContinuousFund
});
/**
 * UpdateParams defines a governance operation for updating the x/protocolpool module parameters.
 * The authority is defined in the keeper.
 * @name useUpdateParams
 * @package cosmos.protocolpool.v1
 * @see proto service: cosmos.protocolpool.v1.UpdateParams
 */
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});