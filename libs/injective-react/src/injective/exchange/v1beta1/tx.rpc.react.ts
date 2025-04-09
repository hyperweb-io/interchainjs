import { buildUseMutation } from "../../../react-query";
import { MsgDeposit, MsgWithdraw, MsgInstantSpotMarketLaunch, MsgInstantPerpetualMarketLaunch, MsgInstantExpiryFuturesMarketLaunch, MsgCreateSpotLimitOrder, MsgBatchCreateSpotLimitOrders, MsgCreateSpotMarketOrder, MsgCancelSpotOrder, MsgBatchCancelSpotOrders, MsgBatchUpdateOrders, MsgPrivilegedExecuteContract, MsgCreateDerivativeLimitOrder, MsgBatchCreateDerivativeLimitOrders, MsgCreateDerivativeMarketOrder, MsgCancelDerivativeOrder, MsgBatchCancelDerivativeOrders, MsgInstantBinaryOptionsMarketLaunch, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsMarketOrder, MsgCancelBinaryOptionsOrder, MsgBatchCancelBinaryOptionsOrders, MsgSubaccountTransfer, MsgExternalTransfer, MsgLiquidatePosition, MsgEmergencySettleMarket, MsgIncreasePositionMargin, MsgDecreasePositionMargin, MsgRewardsOptOut, MsgAdminUpdateBinaryOptionsMarket, MsgUpdateParams, MsgUpdateSpotMarket, MsgUpdateDerivativeMarket, MsgAuthorizeStakeGrants, MsgActivateStakeGrant } from "./tx";
import { deposit, withdraw, instantSpotMarketLaunch, instantPerpetualMarketLaunch, instantExpiryFuturesMarketLaunch, createSpotLimitOrder, batchCreateSpotLimitOrders, createSpotMarketOrder, cancelSpotOrder, batchCancelSpotOrders, batchUpdateOrders, privilegedExecuteContract, createDerivativeLimitOrder, batchCreateDerivativeLimitOrders, createDerivativeMarketOrder, cancelDerivativeOrder, batchCancelDerivativeOrders, instantBinaryOptionsMarketLaunch, createBinaryOptionsLimitOrder, createBinaryOptionsMarketOrder, cancelBinaryOptionsOrder, batchCancelBinaryOptionsOrders, subaccountTransfer, externalTransfer, liquidatePosition, emergencySettleMarket, increasePositionMargin, decreasePositionMargin, rewardsOptOut, adminUpdateBinaryOptionsMarket, updateParams, updateSpotMarket, updateDerivativeMarket, authorizeStakeGrants, activateStakeGrant } from "./tx.rpc.func";
export const useDeposit = buildUseMutation<MsgDeposit, Error>({
  builderMutationFn: deposit
});
export const useWithdraw = buildUseMutation<MsgWithdraw, Error>({
  builderMutationFn: withdraw
});
export const useInstantSpotMarketLaunch = buildUseMutation<MsgInstantSpotMarketLaunch, Error>({
  builderMutationFn: instantSpotMarketLaunch
});
export const useInstantPerpetualMarketLaunch = buildUseMutation<MsgInstantPerpetualMarketLaunch, Error>({
  builderMutationFn: instantPerpetualMarketLaunch
});
export const useInstantExpiryFuturesMarketLaunch = buildUseMutation<MsgInstantExpiryFuturesMarketLaunch, Error>({
  builderMutationFn: instantExpiryFuturesMarketLaunch
});
export const useCreateSpotLimitOrder = buildUseMutation<MsgCreateSpotLimitOrder, Error>({
  builderMutationFn: createSpotLimitOrder
});
export const useBatchCreateSpotLimitOrders = buildUseMutation<MsgBatchCreateSpotLimitOrders, Error>({
  builderMutationFn: batchCreateSpotLimitOrders
});
export const useCreateSpotMarketOrder = buildUseMutation<MsgCreateSpotMarketOrder, Error>({
  builderMutationFn: createSpotMarketOrder
});
export const useCancelSpotOrder = buildUseMutation<MsgCancelSpotOrder, Error>({
  builderMutationFn: cancelSpotOrder
});
export const useBatchCancelSpotOrders = buildUseMutation<MsgBatchCancelSpotOrders, Error>({
  builderMutationFn: batchCancelSpotOrders
});
export const useBatchUpdateOrders = buildUseMutation<MsgBatchUpdateOrders, Error>({
  builderMutationFn: batchUpdateOrders
});
export const usePrivilegedExecuteContract = buildUseMutation<MsgPrivilegedExecuteContract, Error>({
  builderMutationFn: privilegedExecuteContract
});
export const useCreateDerivativeLimitOrder = buildUseMutation<MsgCreateDerivativeLimitOrder, Error>({
  builderMutationFn: createDerivativeLimitOrder
});
export const useBatchCreateDerivativeLimitOrders = buildUseMutation<MsgBatchCreateDerivativeLimitOrders, Error>({
  builderMutationFn: batchCreateDerivativeLimitOrders
});
export const useCreateDerivativeMarketOrder = buildUseMutation<MsgCreateDerivativeMarketOrder, Error>({
  builderMutationFn: createDerivativeMarketOrder
});
export const useCancelDerivativeOrder = buildUseMutation<MsgCancelDerivativeOrder, Error>({
  builderMutationFn: cancelDerivativeOrder
});
export const useBatchCancelDerivativeOrders = buildUseMutation<MsgBatchCancelDerivativeOrders, Error>({
  builderMutationFn: batchCancelDerivativeOrders
});
export const useInstantBinaryOptionsMarketLaunch = buildUseMutation<MsgInstantBinaryOptionsMarketLaunch, Error>({
  builderMutationFn: instantBinaryOptionsMarketLaunch
});
export const useCreateBinaryOptionsLimitOrder = buildUseMutation<MsgCreateBinaryOptionsLimitOrder, Error>({
  builderMutationFn: createBinaryOptionsLimitOrder
});
export const useCreateBinaryOptionsMarketOrder = buildUseMutation<MsgCreateBinaryOptionsMarketOrder, Error>({
  builderMutationFn: createBinaryOptionsMarketOrder
});
export const useCancelBinaryOptionsOrder = buildUseMutation<MsgCancelBinaryOptionsOrder, Error>({
  builderMutationFn: cancelBinaryOptionsOrder
});
export const useBatchCancelBinaryOptionsOrders = buildUseMutation<MsgBatchCancelBinaryOptionsOrders, Error>({
  builderMutationFn: batchCancelBinaryOptionsOrders
});
export const useSubaccountTransfer = buildUseMutation<MsgSubaccountTransfer, Error>({
  builderMutationFn: subaccountTransfer
});
export const useExternalTransfer = buildUseMutation<MsgExternalTransfer, Error>({
  builderMutationFn: externalTransfer
});
export const useLiquidatePosition = buildUseMutation<MsgLiquidatePosition, Error>({
  builderMutationFn: liquidatePosition
});
export const useEmergencySettleMarket = buildUseMutation<MsgEmergencySettleMarket, Error>({
  builderMutationFn: emergencySettleMarket
});
export const useIncreasePositionMargin = buildUseMutation<MsgIncreasePositionMargin, Error>({
  builderMutationFn: increasePositionMargin
});
export const useDecreasePositionMargin = buildUseMutation<MsgDecreasePositionMargin, Error>({
  builderMutationFn: decreasePositionMargin
});
export const useRewardsOptOut = buildUseMutation<MsgRewardsOptOut, Error>({
  builderMutationFn: rewardsOptOut
});
export const useAdminUpdateBinaryOptionsMarket = buildUseMutation<MsgAdminUpdateBinaryOptionsMarket, Error>({
  builderMutationFn: adminUpdateBinaryOptionsMarket
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
export const useUpdateSpotMarket = buildUseMutation<MsgUpdateSpotMarket, Error>({
  builderMutationFn: updateSpotMarket
});
export const useUpdateDerivativeMarket = buildUseMutation<MsgUpdateDerivativeMarket, Error>({
  builderMutationFn: updateDerivativeMarket
});
export const useAuthorizeStakeGrants = buildUseMutation<MsgAuthorizeStakeGrants, Error>({
  builderMutationFn: authorizeStakeGrants
});
export const useActivateStakeGrant = buildUseMutation<MsgActivateStakeGrant, Error>({
  builderMutationFn: activateStakeGrant
});