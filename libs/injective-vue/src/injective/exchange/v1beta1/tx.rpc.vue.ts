import { buildUseVueMutation } from "../../../vue-query";
import { MsgDeposit, MsgWithdraw, MsgInstantSpotMarketLaunch, MsgInstantPerpetualMarketLaunch, MsgInstantExpiryFuturesMarketLaunch, MsgCreateSpotLimitOrder, MsgBatchCreateSpotLimitOrders, MsgCreateSpotMarketOrder, MsgCancelSpotOrder, MsgBatchCancelSpotOrders, MsgBatchUpdateOrders, MsgPrivilegedExecuteContract, MsgCreateDerivativeLimitOrder, MsgBatchCreateDerivativeLimitOrders, MsgCreateDerivativeMarketOrder, MsgCancelDerivativeOrder, MsgBatchCancelDerivativeOrders, MsgInstantBinaryOptionsMarketLaunch, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsMarketOrder, MsgCancelBinaryOptionsOrder, MsgBatchCancelBinaryOptionsOrders, MsgSubaccountTransfer, MsgExternalTransfer, MsgLiquidatePosition, MsgEmergencySettleMarket, MsgIncreasePositionMargin, MsgDecreasePositionMargin, MsgRewardsOptOut, MsgAdminUpdateBinaryOptionsMarket, MsgUpdateParams, MsgUpdateSpotMarket, MsgUpdateDerivativeMarket, MsgAuthorizeStakeGrants, MsgActivateStakeGrant } from "./tx";
import { deposit, withdraw, instantSpotMarketLaunch, instantPerpetualMarketLaunch, instantExpiryFuturesMarketLaunch, createSpotLimitOrder, batchCreateSpotLimitOrders, createSpotMarketOrder, cancelSpotOrder, batchCancelSpotOrders, batchUpdateOrders, privilegedExecuteContract, createDerivativeLimitOrder, batchCreateDerivativeLimitOrders, createDerivativeMarketOrder, cancelDerivativeOrder, batchCancelDerivativeOrders, instantBinaryOptionsMarketLaunch, createBinaryOptionsLimitOrder, createBinaryOptionsMarketOrder, cancelBinaryOptionsOrder, batchCancelBinaryOptionsOrders, subaccountTransfer, externalTransfer, liquidatePosition, emergencySettleMarket, increasePositionMargin, decreasePositionMargin, rewardsOptOut, adminUpdateBinaryOptionsMarket, updateParams, updateSpotMarket, updateDerivativeMarket, authorizeStakeGrants, activateStakeGrant } from "./tx.rpc.func";
export const useDeposit = buildUseVueMutation<MsgDeposit, Error>({
  builderMutationFn: deposit
});
export const useWithdraw = buildUseVueMutation<MsgWithdraw, Error>({
  builderMutationFn: withdraw
});
export const useInstantSpotMarketLaunch = buildUseVueMutation<MsgInstantSpotMarketLaunch, Error>({
  builderMutationFn: instantSpotMarketLaunch
});
export const useInstantPerpetualMarketLaunch = buildUseVueMutation<MsgInstantPerpetualMarketLaunch, Error>({
  builderMutationFn: instantPerpetualMarketLaunch
});
export const useInstantExpiryFuturesMarketLaunch = buildUseVueMutation<MsgInstantExpiryFuturesMarketLaunch, Error>({
  builderMutationFn: instantExpiryFuturesMarketLaunch
});
export const useCreateSpotLimitOrder = buildUseVueMutation<MsgCreateSpotLimitOrder, Error>({
  builderMutationFn: createSpotLimitOrder
});
export const useBatchCreateSpotLimitOrders = buildUseVueMutation<MsgBatchCreateSpotLimitOrders, Error>({
  builderMutationFn: batchCreateSpotLimitOrders
});
export const useCreateSpotMarketOrder = buildUseVueMutation<MsgCreateSpotMarketOrder, Error>({
  builderMutationFn: createSpotMarketOrder
});
export const useCancelSpotOrder = buildUseVueMutation<MsgCancelSpotOrder, Error>({
  builderMutationFn: cancelSpotOrder
});
export const useBatchCancelSpotOrders = buildUseVueMutation<MsgBatchCancelSpotOrders, Error>({
  builderMutationFn: batchCancelSpotOrders
});
export const useBatchUpdateOrders = buildUseVueMutation<MsgBatchUpdateOrders, Error>({
  builderMutationFn: batchUpdateOrders
});
export const usePrivilegedExecuteContract = buildUseVueMutation<MsgPrivilegedExecuteContract, Error>({
  builderMutationFn: privilegedExecuteContract
});
export const useCreateDerivativeLimitOrder = buildUseVueMutation<MsgCreateDerivativeLimitOrder, Error>({
  builderMutationFn: createDerivativeLimitOrder
});
export const useBatchCreateDerivativeLimitOrders = buildUseVueMutation<MsgBatchCreateDerivativeLimitOrders, Error>({
  builderMutationFn: batchCreateDerivativeLimitOrders
});
export const useCreateDerivativeMarketOrder = buildUseVueMutation<MsgCreateDerivativeMarketOrder, Error>({
  builderMutationFn: createDerivativeMarketOrder
});
export const useCancelDerivativeOrder = buildUseVueMutation<MsgCancelDerivativeOrder, Error>({
  builderMutationFn: cancelDerivativeOrder
});
export const useBatchCancelDerivativeOrders = buildUseVueMutation<MsgBatchCancelDerivativeOrders, Error>({
  builderMutationFn: batchCancelDerivativeOrders
});
export const useInstantBinaryOptionsMarketLaunch = buildUseVueMutation<MsgInstantBinaryOptionsMarketLaunch, Error>({
  builderMutationFn: instantBinaryOptionsMarketLaunch
});
export const useCreateBinaryOptionsLimitOrder = buildUseVueMutation<MsgCreateBinaryOptionsLimitOrder, Error>({
  builderMutationFn: createBinaryOptionsLimitOrder
});
export const useCreateBinaryOptionsMarketOrder = buildUseVueMutation<MsgCreateBinaryOptionsMarketOrder, Error>({
  builderMutationFn: createBinaryOptionsMarketOrder
});
export const useCancelBinaryOptionsOrder = buildUseVueMutation<MsgCancelBinaryOptionsOrder, Error>({
  builderMutationFn: cancelBinaryOptionsOrder
});
export const useBatchCancelBinaryOptionsOrders = buildUseVueMutation<MsgBatchCancelBinaryOptionsOrders, Error>({
  builderMutationFn: batchCancelBinaryOptionsOrders
});
export const useSubaccountTransfer = buildUseVueMutation<MsgSubaccountTransfer, Error>({
  builderMutationFn: subaccountTransfer
});
export const useExternalTransfer = buildUseVueMutation<MsgExternalTransfer, Error>({
  builderMutationFn: externalTransfer
});
export const useLiquidatePosition = buildUseVueMutation<MsgLiquidatePosition, Error>({
  builderMutationFn: liquidatePosition
});
export const useEmergencySettleMarket = buildUseVueMutation<MsgEmergencySettleMarket, Error>({
  builderMutationFn: emergencySettleMarket
});
export const useIncreasePositionMargin = buildUseVueMutation<MsgIncreasePositionMargin, Error>({
  builderMutationFn: increasePositionMargin
});
export const useDecreasePositionMargin = buildUseVueMutation<MsgDecreasePositionMargin, Error>({
  builderMutationFn: decreasePositionMargin
});
export const useRewardsOptOut = buildUseVueMutation<MsgRewardsOptOut, Error>({
  builderMutationFn: rewardsOptOut
});
export const useAdminUpdateBinaryOptionsMarket = buildUseVueMutation<MsgAdminUpdateBinaryOptionsMarket, Error>({
  builderMutationFn: adminUpdateBinaryOptionsMarket
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
export const useUpdateSpotMarket = buildUseVueMutation<MsgUpdateSpotMarket, Error>({
  builderMutationFn: updateSpotMarket
});
export const useUpdateDerivativeMarket = buildUseVueMutation<MsgUpdateDerivativeMarket, Error>({
  builderMutationFn: updateDerivativeMarket
});
export const useAuthorizeStakeGrants = buildUseVueMutation<MsgAuthorizeStakeGrants, Error>({
  builderMutationFn: authorizeStakeGrants
});
export const useActivateStakeGrant = buildUseVueMutation<MsgActivateStakeGrant, Error>({
  builderMutationFn: activateStakeGrant
});