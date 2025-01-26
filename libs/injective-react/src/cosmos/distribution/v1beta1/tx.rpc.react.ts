import { buildUseMutation } from "../../../react-query";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool, MsgUpdateParams, MsgCommunityPoolSpend, MsgDepositValidatorRewardsPool } from "./tx";
import { createSetWithdrawAddress, createWithdrawDelegatorReward, createWithdrawValidatorCommission, createFundCommunityPool, createUpdateParams, createCommunityPoolSpend, createDepositValidatorRewardsPool } from "./tx.rpc.func";
export const useSetWithdrawAddress = buildUseMutation<MsgSetWithdrawAddress, Error>({
  builderMutationFn: createSetWithdrawAddress
});
export const useWithdrawDelegatorReward = buildUseMutation<MsgWithdrawDelegatorReward, Error>({
  builderMutationFn: createWithdrawDelegatorReward
});
export const useWithdrawValidatorCommission = buildUseMutation<MsgWithdrawValidatorCommission, Error>({
  builderMutationFn: createWithdrawValidatorCommission
});
export const useFundCommunityPool = buildUseMutation<MsgFundCommunityPool, Error>({
  builderMutationFn: createFundCommunityPool
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});
export const useCommunityPoolSpend = buildUseMutation<MsgCommunityPoolSpend, Error>({
  builderMutationFn: createCommunityPoolSpend
});
export const useDepositValidatorRewardsPool = buildUseMutation<MsgDepositValidatorRewardsPool, Error>({
  builderMutationFn: createDepositValidatorRewardsPool
});