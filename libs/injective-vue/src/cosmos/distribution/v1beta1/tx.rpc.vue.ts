import { buildUseVueMutation } from "../../../vue-query";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool, MsgUpdateParams, MsgCommunityPoolSpend, MsgDepositValidatorRewardsPool } from "./tx";
import { setWithdrawAddress, withdrawDelegatorReward, withdrawValidatorCommission, fundCommunityPool, updateParams, communityPoolSpend, depositValidatorRewardsPool } from "./tx.rpc.func";
export const useSetWithdrawAddress = buildUseVueMutation<MsgSetWithdrawAddress, Error>({
  builderMutationFn: setWithdrawAddress
});
export const useWithdrawDelegatorReward = buildUseVueMutation<MsgWithdrawDelegatorReward, Error>({
  builderMutationFn: withdrawDelegatorReward
});
export const useWithdrawValidatorCommission = buildUseVueMutation<MsgWithdrawValidatorCommission, Error>({
  builderMutationFn: withdrawValidatorCommission
});
export const useFundCommunityPool = buildUseVueMutation<MsgFundCommunityPool, Error>({
  builderMutationFn: fundCommunityPool
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
export const useCommunityPoolSpend = buildUseVueMutation<MsgCommunityPoolSpend, Error>({
  builderMutationFn: communityPoolSpend
});
export const useDepositValidatorRewardsPool = buildUseVueMutation<MsgDepositValidatorRewardsPool, Error>({
  builderMutationFn: depositValidatorRewardsPool
});