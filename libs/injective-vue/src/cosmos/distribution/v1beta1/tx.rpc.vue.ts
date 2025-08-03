import { buildUseVueMutation } from "../../../vue-query";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool, MsgUpdateParams, MsgCommunityPoolSpend, MsgDepositValidatorRewardsPool } from "./tx";
import { setWithdrawAddress, withdrawDelegatorReward, withdrawValidatorCommission, fundCommunityPool, updateParams, communityPoolSpend, depositValidatorRewardsPool } from "./tx.rpc.func";
/**
 * SetWithdrawAddress defines a method to change the withdraw address
 * for a delegator (or validator self-delegation).
 * @name useSetWithdrawAddress
 * @package cosmos.distribution.v1beta1
 * @see proto service: cosmos.distribution.v1beta1.SetWithdrawAddress
 */
export const useSetWithdrawAddress = buildUseVueMutation<MsgSetWithdrawAddress, Error>({
  builderMutationFn: setWithdrawAddress
});
/**
 * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
 * from a single validator.
 * @name useWithdrawDelegatorReward
 * @package cosmos.distribution.v1beta1
 * @see proto service: cosmos.distribution.v1beta1.WithdrawDelegatorReward
 */
export const useWithdrawDelegatorReward = buildUseVueMutation<MsgWithdrawDelegatorReward, Error>({
  builderMutationFn: withdrawDelegatorReward
});
/**
 * WithdrawValidatorCommission defines a method to withdraw the
 * full commission to the validator address.
 * @name useWithdrawValidatorCommission
 * @package cosmos.distribution.v1beta1
 * @see proto service: cosmos.distribution.v1beta1.WithdrawValidatorCommission
 */
export const useWithdrawValidatorCommission = buildUseVueMutation<MsgWithdrawValidatorCommission, Error>({
  builderMutationFn: withdrawValidatorCommission
});
/**
 * FundCommunityPool defines a method to allow an account to directly
 * fund the community pool.
 * 
 * WARNING: This method will fail if an external community pool is used.
 * @name useFundCommunityPool
 * @package cosmos.distribution.v1beta1
 * @see proto service: cosmos.distribution.v1beta1.FundCommunityPool
 */
export const useFundCommunityPool = buildUseVueMutation<MsgFundCommunityPool, Error>({
  builderMutationFn: fundCommunityPool
});
/**
 * UpdateParams defines a governance operation for updating the x/distribution
 * module parameters. The authority is defined in the keeper.
 * @name useUpdateParams
 * @package cosmos.distribution.v1beta1
 * @see proto service: cosmos.distribution.v1beta1.UpdateParams
 */
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
/**
 * CommunityPoolSpend defines a governance operation for sending tokens from
 * the community pool in the x/distribution module to another account, which
 * could be the governance module itself. The authority is defined in the
 * keeper.
 * 
 * WARNING: This method will fail if an external community pool is used.
 * @name useCommunityPoolSpend
 * @package cosmos.distribution.v1beta1
 * @see proto service: cosmos.distribution.v1beta1.CommunityPoolSpend
 */
export const useCommunityPoolSpend = buildUseVueMutation<MsgCommunityPoolSpend, Error>({
  builderMutationFn: communityPoolSpend
});
/**
 * DepositValidatorRewardsPool defines a method to provide additional rewards
 * to delegators to a specific validator.
 * @name useDepositValidatorRewardsPool
 * @package cosmos.distribution.v1beta1
 * @see proto service: cosmos.distribution.v1beta1.DepositValidatorRewardsPool
 */
export const useDepositValidatorRewardsPool = buildUseVueMutation<MsgDepositValidatorRewardsPool, Error>({
  builderMutationFn: depositValidatorRewardsPool
});