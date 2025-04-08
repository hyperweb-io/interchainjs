import { buildTx } from "../../../helper-func-types";
import { MsgDeposit, MsgWithdraw, MsgInstantSpotMarketLaunch, MsgInstantPerpetualMarketLaunch, MsgInstantExpiryFuturesMarketLaunch, MsgCreateSpotLimitOrder, MsgBatchCreateSpotLimitOrders, MsgCreateSpotMarketOrder, MsgCancelSpotOrder, MsgBatchCancelSpotOrders, MsgBatchUpdateOrders, MsgPrivilegedExecuteContract, MsgCreateDerivativeLimitOrder, MsgBatchCreateDerivativeLimitOrders, MsgCreateDerivativeMarketOrder, MsgCancelDerivativeOrder, MsgBatchCancelDerivativeOrders, MsgInstantBinaryOptionsMarketLaunch, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsMarketOrder, MsgCancelBinaryOptionsOrder, MsgBatchCancelBinaryOptionsOrders, MsgSubaccountTransfer, MsgExternalTransfer, MsgLiquidatePosition, MsgEmergencySettleMarket, MsgIncreasePositionMargin, MsgDecreasePositionMargin, MsgRewardsOptOut, MsgAdminUpdateBinaryOptionsMarket, MsgUpdateParams, MsgUpdateSpotMarket, MsgUpdateDerivativeMarket, MsgAuthorizeStakeGrants, MsgActivateStakeGrant } from "./tx";
export const deposit = buildTx<MsgDeposit>({
  msg: MsgDeposit
});
export const withdraw = buildTx<MsgWithdraw>({
  msg: MsgWithdraw
});
export const instantSpotMarketLaunch = buildTx<MsgInstantSpotMarketLaunch>({
  msg: MsgInstantSpotMarketLaunch
});
export const instantPerpetualMarketLaunch = buildTx<MsgInstantPerpetualMarketLaunch>({
  msg: MsgInstantPerpetualMarketLaunch
});
export const instantExpiryFuturesMarketLaunch = buildTx<MsgInstantExpiryFuturesMarketLaunch>({
  msg: MsgInstantExpiryFuturesMarketLaunch
});
export const createSpotLimitOrder = buildTx<MsgCreateSpotLimitOrder>({
  msg: MsgCreateSpotLimitOrder
});
export const batchCreateSpotLimitOrders = buildTx<MsgBatchCreateSpotLimitOrders>({
  msg: MsgBatchCreateSpotLimitOrders
});
export const createSpotMarketOrder = buildTx<MsgCreateSpotMarketOrder>({
  msg: MsgCreateSpotMarketOrder
});
export const cancelSpotOrder = buildTx<MsgCancelSpotOrder>({
  msg: MsgCancelSpotOrder
});
export const batchCancelSpotOrders = buildTx<MsgBatchCancelSpotOrders>({
  msg: MsgBatchCancelSpotOrders
});
export const batchUpdateOrders = buildTx<MsgBatchUpdateOrders>({
  msg: MsgBatchUpdateOrders
});
export const privilegedExecuteContract = buildTx<MsgPrivilegedExecuteContract>({
  msg: MsgPrivilegedExecuteContract
});
export const createDerivativeLimitOrder = buildTx<MsgCreateDerivativeLimitOrder>({
  msg: MsgCreateDerivativeLimitOrder
});
export const batchCreateDerivativeLimitOrders = buildTx<MsgBatchCreateDerivativeLimitOrders>({
  msg: MsgBatchCreateDerivativeLimitOrders
});
export const createDerivativeMarketOrder = buildTx<MsgCreateDerivativeMarketOrder>({
  msg: MsgCreateDerivativeMarketOrder
});
export const cancelDerivativeOrder = buildTx<MsgCancelDerivativeOrder>({
  msg: MsgCancelDerivativeOrder
});
export const batchCancelDerivativeOrders = buildTx<MsgBatchCancelDerivativeOrders>({
  msg: MsgBatchCancelDerivativeOrders
});
export const instantBinaryOptionsMarketLaunch = buildTx<MsgInstantBinaryOptionsMarketLaunch>({
  msg: MsgInstantBinaryOptionsMarketLaunch
});
export const createBinaryOptionsLimitOrder = buildTx<MsgCreateBinaryOptionsLimitOrder>({
  msg: MsgCreateBinaryOptionsLimitOrder
});
export const createBinaryOptionsMarketOrder = buildTx<MsgCreateBinaryOptionsMarketOrder>({
  msg: MsgCreateBinaryOptionsMarketOrder
});
export const cancelBinaryOptionsOrder = buildTx<MsgCancelBinaryOptionsOrder>({
  msg: MsgCancelBinaryOptionsOrder
});
export const batchCancelBinaryOptionsOrders = buildTx<MsgBatchCancelBinaryOptionsOrders>({
  msg: MsgBatchCancelBinaryOptionsOrders
});
export const subaccountTransfer = buildTx<MsgSubaccountTransfer>({
  msg: MsgSubaccountTransfer
});
export const externalTransfer = buildTx<MsgExternalTransfer>({
  msg: MsgExternalTransfer
});
export const liquidatePosition = buildTx<MsgLiquidatePosition>({
  msg: MsgLiquidatePosition
});
export const emergencySettleMarket = buildTx<MsgEmergencySettleMarket>({
  msg: MsgEmergencySettleMarket
});
export const increasePositionMargin = buildTx<MsgIncreasePositionMargin>({
  msg: MsgIncreasePositionMargin
});
export const decreasePositionMargin = buildTx<MsgDecreasePositionMargin>({
  msg: MsgDecreasePositionMargin
});
export const rewardsOptOut = buildTx<MsgRewardsOptOut>({
  msg: MsgRewardsOptOut
});
export const adminUpdateBinaryOptionsMarket = buildTx<MsgAdminUpdateBinaryOptionsMarket>({
  msg: MsgAdminUpdateBinaryOptionsMarket
});
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
export const updateSpotMarket = buildTx<MsgUpdateSpotMarket>({
  msg: MsgUpdateSpotMarket
});
export const updateDerivativeMarket = buildTx<MsgUpdateDerivativeMarket>({
  msg: MsgUpdateDerivativeMarket
});
export const authorizeStakeGrants = buildTx<MsgAuthorizeStakeGrants>({
  msg: MsgAuthorizeStakeGrants
});
export const activateStakeGrant = buildTx<MsgActivateStakeGrant>({
  msg: MsgActivateStakeGrant
});