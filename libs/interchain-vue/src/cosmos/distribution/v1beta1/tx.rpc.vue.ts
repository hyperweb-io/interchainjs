import { buildUseVueMutation } from "../../../vue-query";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool, MsgUpdateParams, MsgCommunityPoolSpend, MsgDepositValidatorRewardsPool } from "./tx";
import { createSetWithdrawAddress, createWithdrawDelegatorReward, createWithdrawValidatorCommission, createFundCommunityPool, createUpdateParams, createCommunityPoolSpend, createDepositValidatorRewardsPool } from "./tx.rpc.func.ts";
export const useSetWithdrawAddress = buildUseVueMutation<MsgSetWithdrawAddress, Error>({
  builderMutationFn: createSetWithdrawAddress
});
export const useWithdrawDelegatorReward = buildUseVueMutation<MsgWithdrawDelegatorReward, Error>({
  builderMutationFn: createWithdrawDelegatorReward
});
export const useWithdrawValidatorCommission = buildUseVueMutation<MsgWithdrawValidatorCommission, Error>({
  builderMutationFn: createWithdrawValidatorCommission
});
export const useFundCommunityPool = buildUseVueMutation<MsgFundCommunityPool, Error>({
  builderMutationFn: createFundCommunityPool
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});
export const useCommunityPoolSpend = buildUseVueMutation<MsgCommunityPoolSpend, Error>({
  builderMutationFn: createCommunityPoolSpend
});
export const useDepositValidatorRewardsPool = buildUseVueMutation<MsgDepositValidatorRewardsPool, Error>({
  builderMutationFn: createDepositValidatorRewardsPool
});