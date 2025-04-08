import { buildTx } from "../../../helper-func-types";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool, MsgUpdateParams, MsgCommunityPoolSpend, MsgDepositValidatorRewardsPool } from "./tx";
export const setWithdrawAddress = buildTx<MsgSetWithdrawAddress>({
  msg: MsgSetWithdrawAddress
});
export const withdrawDelegatorReward = buildTx<MsgWithdrawDelegatorReward>({
  msg: MsgWithdrawDelegatorReward
});
export const withdrawValidatorCommission = buildTx<MsgWithdrawValidatorCommission>({
  msg: MsgWithdrawValidatorCommission
});
export const fundCommunityPool = buildTx<MsgFundCommunityPool>({
  msg: MsgFundCommunityPool
});
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
export const communityPoolSpend = buildTx<MsgCommunityPoolSpend>({
  msg: MsgCommunityPoolSpend
});
export const depositValidatorRewardsPool = buildTx<MsgDepositValidatorRewardsPool>({
  msg: MsgDepositValidatorRewardsPool
});