import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool, MsgUpdateParams, MsgCommunityPoolSpend, MsgDepositValidatorRewardsPool } from "./tx";
export const createSetWithdrawAddress = (clientResolver?: SigningClientResolver) => buildTx<MsgSetWithdrawAddress>({
  clientResolver,
  typeUrl: MsgSetWithdrawAddress.typeUrl,
  encoders: toEncoders(MsgSetWithdrawAddress),
  converters: toConverters(MsgSetWithdrawAddress)
});
export const useSetWithdrawAddress = buildUseMutation<MsgSetWithdrawAddress, Error>({
  builderMutationFn: createSetWithdrawAddress
});
export const createWithdrawDelegatorReward = (clientResolver?: SigningClientResolver) => buildTx<MsgWithdrawDelegatorReward>({
  clientResolver,
  typeUrl: MsgWithdrawDelegatorReward.typeUrl,
  encoders: toEncoders(MsgWithdrawDelegatorReward),
  converters: toConverters(MsgWithdrawDelegatorReward)
});
export const useWithdrawDelegatorReward = buildUseMutation<MsgWithdrawDelegatorReward, Error>({
  builderMutationFn: createWithdrawDelegatorReward
});
export const createWithdrawValidatorCommission = (clientResolver?: SigningClientResolver) => buildTx<MsgWithdrawValidatorCommission>({
  clientResolver,
  typeUrl: MsgWithdrawValidatorCommission.typeUrl,
  encoders: toEncoders(MsgWithdrawValidatorCommission),
  converters: toConverters(MsgWithdrawValidatorCommission)
});
export const useWithdrawValidatorCommission = buildUseMutation<MsgWithdrawValidatorCommission, Error>({
  builderMutationFn: createWithdrawValidatorCommission
});
export const createFundCommunityPool = (clientResolver?: SigningClientResolver) => buildTx<MsgFundCommunityPool>({
  clientResolver,
  typeUrl: MsgFundCommunityPool.typeUrl,
  encoders: toEncoders(MsgFundCommunityPool),
  converters: toConverters(MsgFundCommunityPool)
});
export const useFundCommunityPool = buildUseMutation<MsgFundCommunityPool, Error>({
  builderMutationFn: createFundCommunityPool
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams)
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});
export const createCommunityPoolSpend = (clientResolver?: SigningClientResolver) => buildTx<MsgCommunityPoolSpend>({
  clientResolver,
  typeUrl: MsgCommunityPoolSpend.typeUrl,
  encoders: toEncoders(MsgCommunityPoolSpend),
  converters: toConverters(MsgCommunityPoolSpend)
});
export const useCommunityPoolSpend = buildUseMutation<MsgCommunityPoolSpend, Error>({
  builderMutationFn: createCommunityPoolSpend
});
export const createDepositValidatorRewardsPool = (clientResolver?: SigningClientResolver) => buildTx<MsgDepositValidatorRewardsPool>({
  clientResolver,
  typeUrl: MsgDepositValidatorRewardsPool.typeUrl,
  encoders: toEncoders(MsgDepositValidatorRewardsPool),
  converters: toConverters(MsgDepositValidatorRewardsPool)
});
export const useDepositValidatorRewardsPool = buildUseMutation<MsgDepositValidatorRewardsPool, Error>({
  builderMutationFn: createDepositValidatorRewardsPool
});