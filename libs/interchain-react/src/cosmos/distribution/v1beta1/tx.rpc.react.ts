import { buildUseMutation } from "../../../react-query";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool, MsgUpdateParams, MsgCommunityPoolSpend, MsgDepositValidatorRewardsPool } from "./tx";
import { setWithdrawAddress, withdrawDelegatorReward, withdrawValidatorCommission, fundCommunityPool, updateParams, communityPoolSpend, depositValidatorRewardsPool } from "./tx.rpc.func";
/* SetWithdrawAddress defines a method to change the withdraw address
 for a delegator (or validator self-delegation). */
export const useSetWithdrawAddress = buildUseMutation<MsgSetWithdrawAddress, Error>({
  builderMutationFn: setWithdrawAddress
});
/* WithdrawDelegatorReward defines a method to withdraw rewards of delegator
 from a single validator. */
export const useWithdrawDelegatorReward = buildUseMutation<MsgWithdrawDelegatorReward, Error>({
  builderMutationFn: withdrawDelegatorReward
});
/* WithdrawValidatorCommission defines a method to withdraw the
 full commission to the validator address. */
export const useWithdrawValidatorCommission = buildUseMutation<MsgWithdrawValidatorCommission, Error>({
  builderMutationFn: withdrawValidatorCommission
});
/* FundCommunityPool defines a method to allow an account to directly
 fund the community pool. */
export const useFundCommunityPool = buildUseMutation<MsgFundCommunityPool, Error>({
  builderMutationFn: fundCommunityPool
});
/* UpdateParams defines a governance operation for updating the x/distribution
 module parameters. The authority is defined in the keeper.

 Since: cosmos-sdk 0.47 */
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
/* CommunityPoolSpend defines a governance operation for sending tokens from
 the community pool in the x/distribution module to another account, which
 could be the governance module itself. The authority is defined in the
 keeper.

 Since: cosmos-sdk 0.47 */
export const useCommunityPoolSpend = buildUseMutation<MsgCommunityPoolSpend, Error>({
  builderMutationFn: communityPoolSpend
});
/* DepositValidatorRewardsPool defines a method to provide additional rewards
 to delegators to a specific validator.

 Since: cosmos-sdk 0.50 */
export const useDepositValidatorRewardsPool = buildUseMutation<MsgDepositValidatorRewardsPool, Error>({
  builderMutationFn: depositValidatorRewardsPool
});