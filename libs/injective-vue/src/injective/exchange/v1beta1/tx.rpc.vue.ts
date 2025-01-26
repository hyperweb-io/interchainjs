import { buildUseVueMutation } from "../../../vue-query";
import { MsgDeposit, MsgWithdraw, MsgInstantSpotMarketLaunch, MsgInstantPerpetualMarketLaunch, MsgInstantExpiryFuturesMarketLaunch, MsgCreateSpotLimitOrder, MsgBatchCreateSpotLimitOrders, MsgCreateSpotMarketOrder, MsgCancelSpotOrder, MsgBatchCancelSpotOrders, MsgBatchUpdateOrders, MsgPrivilegedExecuteContract, MsgCreateDerivativeLimitOrder, MsgBatchCreateDerivativeLimitOrders, MsgCreateDerivativeMarketOrder, MsgCancelDerivativeOrder, MsgBatchCancelDerivativeOrders, MsgInstantBinaryOptionsMarketLaunch, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsMarketOrder, MsgCancelBinaryOptionsOrder, MsgBatchCancelBinaryOptionsOrders, MsgSubaccountTransfer, MsgExternalTransfer, MsgLiquidatePosition, MsgEmergencySettleMarket, MsgIncreasePositionMargin, MsgDecreasePositionMargin, MsgRewardsOptOut, MsgAdminUpdateBinaryOptionsMarket, MsgUpdateParams, MsgUpdateSpotMarket, MsgUpdateDerivativeMarket, MsgAuthorizeStakeGrants, MsgActivateStakeGrant } from "./tx";
import { createDeposit, createWithdraw, createInstantSpotMarketLaunch, createInstantPerpetualMarketLaunch, createInstantExpiryFuturesMarketLaunch, createCreateSpotLimitOrder, createBatchCreateSpotLimitOrders, createCreateSpotMarketOrder, createCancelSpotOrder, createBatchCancelSpotOrders, createBatchUpdateOrders, createPrivilegedExecuteContract, createCreateDerivativeLimitOrder, createBatchCreateDerivativeLimitOrders, createCreateDerivativeMarketOrder, createCancelDerivativeOrder, createBatchCancelDerivativeOrders, createInstantBinaryOptionsMarketLaunch, createCreateBinaryOptionsLimitOrder, createCreateBinaryOptionsMarketOrder, createCancelBinaryOptionsOrder, createBatchCancelBinaryOptionsOrders, createSubaccountTransfer, createExternalTransfer, createLiquidatePosition, createEmergencySettleMarket, createIncreasePositionMargin, createDecreasePositionMargin, createRewardsOptOut, createAdminUpdateBinaryOptionsMarket, createUpdateParams, createUpdateSpotMarket, createUpdateDerivativeMarket, createAuthorizeStakeGrants, createActivateStakeGrant } from "./tx.rpc.func.ts";
export const useDeposit = buildUseVueMutation<MsgDeposit, Error>({
  builderMutationFn: createDeposit
});
export const useWithdraw = buildUseVueMutation<MsgWithdraw, Error>({
  builderMutationFn: createWithdraw
});
export const useInstantSpotMarketLaunch = buildUseVueMutation<MsgInstantSpotMarketLaunch, Error>({
  builderMutationFn: createInstantSpotMarketLaunch
});
export const useInstantPerpetualMarketLaunch = buildUseVueMutation<MsgInstantPerpetualMarketLaunch, Error>({
  builderMutationFn: createInstantPerpetualMarketLaunch
});
export const useInstantExpiryFuturesMarketLaunch = buildUseVueMutation<MsgInstantExpiryFuturesMarketLaunch, Error>({
  builderMutationFn: createInstantExpiryFuturesMarketLaunch
});
export const useCreateSpotLimitOrder = buildUseVueMutation<MsgCreateSpotLimitOrder, Error>({
  builderMutationFn: createCreateSpotLimitOrder
});
export const useBatchCreateSpotLimitOrders = buildUseVueMutation<MsgBatchCreateSpotLimitOrders, Error>({
  builderMutationFn: createBatchCreateSpotLimitOrders
});
export const useCreateSpotMarketOrder = buildUseVueMutation<MsgCreateSpotMarketOrder, Error>({
  builderMutationFn: createCreateSpotMarketOrder
});
export const useCancelSpotOrder = buildUseVueMutation<MsgCancelSpotOrder, Error>({
  builderMutationFn: createCancelSpotOrder
});
export const useBatchCancelSpotOrders = buildUseVueMutation<MsgBatchCancelSpotOrders, Error>({
  builderMutationFn: createBatchCancelSpotOrders
});
export const useBatchUpdateOrders = buildUseVueMutation<MsgBatchUpdateOrders, Error>({
  builderMutationFn: createBatchUpdateOrders
});
export const usePrivilegedExecuteContract = buildUseVueMutation<MsgPrivilegedExecuteContract, Error>({
  builderMutationFn: createPrivilegedExecuteContract
});
export const useCreateDerivativeLimitOrder = buildUseVueMutation<MsgCreateDerivativeLimitOrder, Error>({
  builderMutationFn: createCreateDerivativeLimitOrder
});
export const useBatchCreateDerivativeLimitOrders = buildUseVueMutation<MsgBatchCreateDerivativeLimitOrders, Error>({
  builderMutationFn: createBatchCreateDerivativeLimitOrders
});
export const useCreateDerivativeMarketOrder = buildUseVueMutation<MsgCreateDerivativeMarketOrder, Error>({
  builderMutationFn: createCreateDerivativeMarketOrder
});
export const useCancelDerivativeOrder = buildUseVueMutation<MsgCancelDerivativeOrder, Error>({
  builderMutationFn: createCancelDerivativeOrder
});
export const useBatchCancelDerivativeOrders = buildUseVueMutation<MsgBatchCancelDerivativeOrders, Error>({
  builderMutationFn: createBatchCancelDerivativeOrders
});
export const useInstantBinaryOptionsMarketLaunch = buildUseVueMutation<MsgInstantBinaryOptionsMarketLaunch, Error>({
  builderMutationFn: createInstantBinaryOptionsMarketLaunch
});
export const useCreateBinaryOptionsLimitOrder = buildUseVueMutation<MsgCreateBinaryOptionsLimitOrder, Error>({
  builderMutationFn: createCreateBinaryOptionsLimitOrder
});
export const useCreateBinaryOptionsMarketOrder = buildUseVueMutation<MsgCreateBinaryOptionsMarketOrder, Error>({
  builderMutationFn: createCreateBinaryOptionsMarketOrder
});
export const useCancelBinaryOptionsOrder = buildUseVueMutation<MsgCancelBinaryOptionsOrder, Error>({
  builderMutationFn: createCancelBinaryOptionsOrder
});
export const useBatchCancelBinaryOptionsOrders = buildUseVueMutation<MsgBatchCancelBinaryOptionsOrders, Error>({
  builderMutationFn: createBatchCancelBinaryOptionsOrders
});
export const useSubaccountTransfer = buildUseVueMutation<MsgSubaccountTransfer, Error>({
  builderMutationFn: createSubaccountTransfer
});
export const useExternalTransfer = buildUseVueMutation<MsgExternalTransfer, Error>({
  builderMutationFn: createExternalTransfer
});
export const useLiquidatePosition = buildUseVueMutation<MsgLiquidatePosition, Error>({
  builderMutationFn: createLiquidatePosition
});
export const useEmergencySettleMarket = buildUseVueMutation<MsgEmergencySettleMarket, Error>({
  builderMutationFn: createEmergencySettleMarket
});
export const useIncreasePositionMargin = buildUseVueMutation<MsgIncreasePositionMargin, Error>({
  builderMutationFn: createIncreasePositionMargin
});
export const useDecreasePositionMargin = buildUseVueMutation<MsgDecreasePositionMargin, Error>({
  builderMutationFn: createDecreasePositionMargin
});
export const useRewardsOptOut = buildUseVueMutation<MsgRewardsOptOut, Error>({
  builderMutationFn: createRewardsOptOut
});
export const useAdminUpdateBinaryOptionsMarket = buildUseVueMutation<MsgAdminUpdateBinaryOptionsMarket, Error>({
  builderMutationFn: createAdminUpdateBinaryOptionsMarket
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});
export const useUpdateSpotMarket = buildUseVueMutation<MsgUpdateSpotMarket, Error>({
  builderMutationFn: createUpdateSpotMarket
});
export const useUpdateDerivativeMarket = buildUseVueMutation<MsgUpdateDerivativeMarket, Error>({
  builderMutationFn: createUpdateDerivativeMarket
});
export const useAuthorizeStakeGrants = buildUseVueMutation<MsgAuthorizeStakeGrants, Error>({
  builderMutationFn: createAuthorizeStakeGrants
});
export const useActivateStakeGrant = buildUseVueMutation<MsgActivateStakeGrant, Error>({
  builderMutationFn: createActivateStakeGrant
});