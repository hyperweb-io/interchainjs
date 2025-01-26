import { buildUseMutation } from "../../../react-query";
import { MsgDeposit, MsgWithdraw, MsgInstantSpotMarketLaunch, MsgInstantPerpetualMarketLaunch, MsgInstantExpiryFuturesMarketLaunch, MsgCreateSpotLimitOrder, MsgBatchCreateSpotLimitOrders, MsgCreateSpotMarketOrder, MsgCancelSpotOrder, MsgBatchCancelSpotOrders, MsgBatchUpdateOrders, MsgPrivilegedExecuteContract, MsgCreateDerivativeLimitOrder, MsgBatchCreateDerivativeLimitOrders, MsgCreateDerivativeMarketOrder, MsgCancelDerivativeOrder, MsgBatchCancelDerivativeOrders, MsgInstantBinaryOptionsMarketLaunch, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsMarketOrder, MsgCancelBinaryOptionsOrder, MsgBatchCancelBinaryOptionsOrders, MsgSubaccountTransfer, MsgExternalTransfer, MsgLiquidatePosition, MsgEmergencySettleMarket, MsgIncreasePositionMargin, MsgDecreasePositionMargin, MsgRewardsOptOut, MsgAdminUpdateBinaryOptionsMarket, MsgUpdateParams, MsgUpdateSpotMarket, MsgUpdateDerivativeMarket, MsgAuthorizeStakeGrants, MsgActivateStakeGrant } from "./tx";
import { createDeposit, createWithdraw, createInstantSpotMarketLaunch, createInstantPerpetualMarketLaunch, createInstantExpiryFuturesMarketLaunch, createCreateSpotLimitOrder, createBatchCreateSpotLimitOrders, createCreateSpotMarketOrder, createCancelSpotOrder, createBatchCancelSpotOrders, createBatchUpdateOrders, createPrivilegedExecuteContract, createCreateDerivativeLimitOrder, createBatchCreateDerivativeLimitOrders, createCreateDerivativeMarketOrder, createCancelDerivativeOrder, createBatchCancelDerivativeOrders, createInstantBinaryOptionsMarketLaunch, createCreateBinaryOptionsLimitOrder, createCreateBinaryOptionsMarketOrder, createCancelBinaryOptionsOrder, createBatchCancelBinaryOptionsOrders, createSubaccountTransfer, createExternalTransfer, createLiquidatePosition, createEmergencySettleMarket, createIncreasePositionMargin, createDecreasePositionMargin, createRewardsOptOut, createAdminUpdateBinaryOptionsMarket, createUpdateParams, createUpdateSpotMarket, createUpdateDerivativeMarket, createAuthorizeStakeGrants, createActivateStakeGrant } from "./tx.rpc.func.ts";
export const useDeposit = buildUseMutation<MsgDeposit, Error>({
  builderMutationFn: createDeposit
});
export const useWithdraw = buildUseMutation<MsgWithdraw, Error>({
  builderMutationFn: createWithdraw
});
export const useInstantSpotMarketLaunch = buildUseMutation<MsgInstantSpotMarketLaunch, Error>({
  builderMutationFn: createInstantSpotMarketLaunch
});
export const useInstantPerpetualMarketLaunch = buildUseMutation<MsgInstantPerpetualMarketLaunch, Error>({
  builderMutationFn: createInstantPerpetualMarketLaunch
});
export const useInstantExpiryFuturesMarketLaunch = buildUseMutation<MsgInstantExpiryFuturesMarketLaunch, Error>({
  builderMutationFn: createInstantExpiryFuturesMarketLaunch
});
export const useCreateSpotLimitOrder = buildUseMutation<MsgCreateSpotLimitOrder, Error>({
  builderMutationFn: createCreateSpotLimitOrder
});
export const useBatchCreateSpotLimitOrders = buildUseMutation<MsgBatchCreateSpotLimitOrders, Error>({
  builderMutationFn: createBatchCreateSpotLimitOrders
});
export const useCreateSpotMarketOrder = buildUseMutation<MsgCreateSpotMarketOrder, Error>({
  builderMutationFn: createCreateSpotMarketOrder
});
export const useCancelSpotOrder = buildUseMutation<MsgCancelSpotOrder, Error>({
  builderMutationFn: createCancelSpotOrder
});
export const useBatchCancelSpotOrders = buildUseMutation<MsgBatchCancelSpotOrders, Error>({
  builderMutationFn: createBatchCancelSpotOrders
});
export const useBatchUpdateOrders = buildUseMutation<MsgBatchUpdateOrders, Error>({
  builderMutationFn: createBatchUpdateOrders
});
export const usePrivilegedExecuteContract = buildUseMutation<MsgPrivilegedExecuteContract, Error>({
  builderMutationFn: createPrivilegedExecuteContract
});
export const useCreateDerivativeLimitOrder = buildUseMutation<MsgCreateDerivativeLimitOrder, Error>({
  builderMutationFn: createCreateDerivativeLimitOrder
});
export const useBatchCreateDerivativeLimitOrders = buildUseMutation<MsgBatchCreateDerivativeLimitOrders, Error>({
  builderMutationFn: createBatchCreateDerivativeLimitOrders
});
export const useCreateDerivativeMarketOrder = buildUseMutation<MsgCreateDerivativeMarketOrder, Error>({
  builderMutationFn: createCreateDerivativeMarketOrder
});
export const useCancelDerivativeOrder = buildUseMutation<MsgCancelDerivativeOrder, Error>({
  builderMutationFn: createCancelDerivativeOrder
});
export const useBatchCancelDerivativeOrders = buildUseMutation<MsgBatchCancelDerivativeOrders, Error>({
  builderMutationFn: createBatchCancelDerivativeOrders
});
export const useInstantBinaryOptionsMarketLaunch = buildUseMutation<MsgInstantBinaryOptionsMarketLaunch, Error>({
  builderMutationFn: createInstantBinaryOptionsMarketLaunch
});
export const useCreateBinaryOptionsLimitOrder = buildUseMutation<MsgCreateBinaryOptionsLimitOrder, Error>({
  builderMutationFn: createCreateBinaryOptionsLimitOrder
});
export const useCreateBinaryOptionsMarketOrder = buildUseMutation<MsgCreateBinaryOptionsMarketOrder, Error>({
  builderMutationFn: createCreateBinaryOptionsMarketOrder
});
export const useCancelBinaryOptionsOrder = buildUseMutation<MsgCancelBinaryOptionsOrder, Error>({
  builderMutationFn: createCancelBinaryOptionsOrder
});
export const useBatchCancelBinaryOptionsOrders = buildUseMutation<MsgBatchCancelBinaryOptionsOrders, Error>({
  builderMutationFn: createBatchCancelBinaryOptionsOrders
});
export const useSubaccountTransfer = buildUseMutation<MsgSubaccountTransfer, Error>({
  builderMutationFn: createSubaccountTransfer
});
export const useExternalTransfer = buildUseMutation<MsgExternalTransfer, Error>({
  builderMutationFn: createExternalTransfer
});
export const useLiquidatePosition = buildUseMutation<MsgLiquidatePosition, Error>({
  builderMutationFn: createLiquidatePosition
});
export const useEmergencySettleMarket = buildUseMutation<MsgEmergencySettleMarket, Error>({
  builderMutationFn: createEmergencySettleMarket
});
export const useIncreasePositionMargin = buildUseMutation<MsgIncreasePositionMargin, Error>({
  builderMutationFn: createIncreasePositionMargin
});
export const useDecreasePositionMargin = buildUseMutation<MsgDecreasePositionMargin, Error>({
  builderMutationFn: createDecreasePositionMargin
});
export const useRewardsOptOut = buildUseMutation<MsgRewardsOptOut, Error>({
  builderMutationFn: createRewardsOptOut
});
export const useAdminUpdateBinaryOptionsMarket = buildUseMutation<MsgAdminUpdateBinaryOptionsMarket, Error>({
  builderMutationFn: createAdminUpdateBinaryOptionsMarket
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});
export const useUpdateSpotMarket = buildUseMutation<MsgUpdateSpotMarket, Error>({
  builderMutationFn: createUpdateSpotMarket
});
export const useUpdateDerivativeMarket = buildUseMutation<MsgUpdateDerivativeMarket, Error>({
  builderMutationFn: createUpdateDerivativeMarket
});
export const useAuthorizeStakeGrants = buildUseMutation<MsgAuthorizeStakeGrants, Error>({
  builderMutationFn: createAuthorizeStakeGrants
});
export const useActivateStakeGrant = buildUseMutation<MsgActivateStakeGrant, Error>({
  builderMutationFn: createActivateStakeGrant
});