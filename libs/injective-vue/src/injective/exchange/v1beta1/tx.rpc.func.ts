import { buildTx } from "../../../helper-func-types";
import { MsgDeposit, MsgWithdraw, MsgInstantSpotMarketLaunch, MsgInstantPerpetualMarketLaunch, MsgInstantExpiryFuturesMarketLaunch, MsgCreateSpotLimitOrder, MsgBatchCreateSpotLimitOrders, MsgCreateSpotMarketOrder, MsgCancelSpotOrder, MsgBatchCancelSpotOrders, MsgBatchUpdateOrders, MsgPrivilegedExecuteContract, MsgCreateDerivativeLimitOrder, MsgBatchCreateDerivativeLimitOrders, MsgCreateDerivativeMarketOrder, MsgCancelDerivativeOrder, MsgBatchCancelDerivativeOrders, MsgInstantBinaryOptionsMarketLaunch, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsMarketOrder, MsgCancelBinaryOptionsOrder, MsgBatchCancelBinaryOptionsOrders, MsgSubaccountTransfer, MsgExternalTransfer, MsgLiquidatePosition, MsgEmergencySettleMarket, MsgIncreasePositionMargin, MsgDecreasePositionMargin, MsgRewardsOptOut, MsgAdminUpdateBinaryOptionsMarket, MsgUpdateParams, MsgUpdateSpotMarket, MsgUpdateDerivativeMarket, MsgAuthorizeStakeGrants, MsgActivateStakeGrant } from "./tx";
/* Deposit defines a method for transferring coins from the sender's bank
 balance into the subaccount's exchange deposits */
export const deposit = buildTx<MsgDeposit>({
  msg: MsgDeposit
});
/* Withdraw defines a method for withdrawing coins from a subaccount's
 deposits to the user's bank balance */
export const withdraw = buildTx<MsgWithdraw>({
  msg: MsgWithdraw
});
/* InstantSpotMarketLaunch defines method for creating a spot market by paying
 listing fee without governance */
export const instantSpotMarketLaunch = buildTx<MsgInstantSpotMarketLaunch>({
  msg: MsgInstantSpotMarketLaunch
});
/* InstantPerpetualMarketLaunch defines a method for creating a new perpetual
 futures market by paying listing fee without governance */
export const instantPerpetualMarketLaunch = buildTx<MsgInstantPerpetualMarketLaunch>({
  msg: MsgInstantPerpetualMarketLaunch
});
/* InstantExpiryFuturesMarketLaunch defines a method for creating a new expiry
 futures market by paying listing fee without governance */
export const instantExpiryFuturesMarketLaunch = buildTx<MsgInstantExpiryFuturesMarketLaunch>({
  msg: MsgInstantExpiryFuturesMarketLaunch
});
/* CreateSpotLimitOrder defines a method for creating a new spot limit order. */
export const createSpotLimitOrder = buildTx<MsgCreateSpotLimitOrder>({
  msg: MsgCreateSpotLimitOrder
});
/* BatchCreateSpotLimitOrder defines a method for creating a new batch of spot
 limit orders. */
export const batchCreateSpotLimitOrders = buildTx<MsgBatchCreateSpotLimitOrders>({
  msg: MsgBatchCreateSpotLimitOrders
});
/* CreateSpotMarketOrder defines a method for creating a new spot market
 order. */
export const createSpotMarketOrder = buildTx<MsgCreateSpotMarketOrder>({
  msg: MsgCreateSpotMarketOrder
});
/* MsgCancelSpotOrder defines a method for cancelling a spot order. */
export const cancelSpotOrder = buildTx<MsgCancelSpotOrder>({
  msg: MsgCancelSpotOrder
});
/* BatchCancelSpotOrders defines a method for cancelling a batch of spot
 orders in a given market. */
export const batchCancelSpotOrders = buildTx<MsgBatchCancelSpotOrders>({
  msg: MsgBatchCancelSpotOrders
});
/* BatchUpdateOrders defines a method for updating a batch of orders. */
export const batchUpdateOrders = buildTx<MsgBatchUpdateOrders>({
  msg: MsgBatchUpdateOrders
});
/* PrivilegedExecuteContract defines a method for executing a Cosmwasm
 contract from the exchange module with privileged capabilities. */
export const privilegedExecuteContract = buildTx<MsgPrivilegedExecuteContract>({
  msg: MsgPrivilegedExecuteContract
});
/* CreateDerivativeLimitOrder defines a method for creating a new derivative
 limit order. */
export const createDerivativeLimitOrder = buildTx<MsgCreateDerivativeLimitOrder>({
  msg: MsgCreateDerivativeLimitOrder
});
/* BatchCreateDerivativeLimitOrders defines a method for creating a new batch
 of derivative limit orders. */
export const batchCreateDerivativeLimitOrders = buildTx<MsgBatchCreateDerivativeLimitOrders>({
  msg: MsgBatchCreateDerivativeLimitOrders
});
/* MsgCreateDerivativeLimitOrder defines a method for creating a new
 derivative market order. */
export const createDerivativeMarketOrder = buildTx<MsgCreateDerivativeMarketOrder>({
  msg: MsgCreateDerivativeMarketOrder
});
/* MsgCancelDerivativeOrder defines a method for cancelling a derivative
 order. */
export const cancelDerivativeOrder = buildTx<MsgCancelDerivativeOrder>({
  msg: MsgCancelDerivativeOrder
});
/* MsgBatchCancelDerivativeOrders defines a method for cancelling a batch of
 derivative limit orders. */
export const batchCancelDerivativeOrders = buildTx<MsgBatchCancelDerivativeOrders>({
  msg: MsgBatchCancelDerivativeOrders
});
/* InstantBinaryOptionsMarketLaunch defines method for creating a binary
 options market by paying listing fee without governance */
export const instantBinaryOptionsMarketLaunch = buildTx<MsgInstantBinaryOptionsMarketLaunch>({
  msg: MsgInstantBinaryOptionsMarketLaunch
});
/* CreateBinaryOptionsLimitOrder defines a method for creating a new binary
 options limit order. */
export const createBinaryOptionsLimitOrder = buildTx<MsgCreateBinaryOptionsLimitOrder>({
  msg: MsgCreateBinaryOptionsLimitOrder
});
/* CreateBinaryOptionsMarketOrder defines a method for creating a new binary
 options market order. */
export const createBinaryOptionsMarketOrder = buildTx<MsgCreateBinaryOptionsMarketOrder>({
  msg: MsgCreateBinaryOptionsMarketOrder
});
/* MsgCancelBinaryOptionsOrder defines a method for cancelling a binary
 options order. */
export const cancelBinaryOptionsOrder = buildTx<MsgCancelBinaryOptionsOrder>({
  msg: MsgCancelBinaryOptionsOrder
});
/* BatchCancelBinaryOptionsOrders defines a method for cancelling a batch of
 binary options limit orders. */
export const batchCancelBinaryOptionsOrders = buildTx<MsgBatchCancelBinaryOptionsOrders>({
  msg: MsgBatchCancelBinaryOptionsOrders
});
/* SubaccountTransfer defines a method for transfer between subaccounts */
export const subaccountTransfer = buildTx<MsgSubaccountTransfer>({
  msg: MsgSubaccountTransfer
});
/* ExternalTransfer defines a method for transfer between external accounts */
export const externalTransfer = buildTx<MsgExternalTransfer>({
  msg: MsgExternalTransfer
});
/* LiquidatePosition defines a method for liquidating a position */
export const liquidatePosition = buildTx<MsgLiquidatePosition>({
  msg: MsgLiquidatePosition
});
/* EmergencySettleMarket defines a method for emergency settling a market */
export const emergencySettleMarket = buildTx<MsgEmergencySettleMarket>({
  msg: MsgEmergencySettleMarket
});
/* IncreasePositionMargin defines a method for increasing margin of a position */
export const increasePositionMargin = buildTx<MsgIncreasePositionMargin>({
  msg: MsgIncreasePositionMargin
});
/* DecreasePositionMargin defines a method for decreasing margin of a position */
export const decreasePositionMargin = buildTx<MsgDecreasePositionMargin>({
  msg: MsgDecreasePositionMargin
});
/* RewardsOptOut defines a method for opting out of rewards */
export const rewardsOptOut = buildTx<MsgRewardsOptOut>({
  msg: MsgRewardsOptOut
});
/* AdminUpdateBinaryOptionsMarket defines method for updating a binary options
 market by admin */
export const adminUpdateBinaryOptionsMarket = buildTx<MsgAdminUpdateBinaryOptionsMarket>({
  msg: MsgAdminUpdateBinaryOptionsMarket
});
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
/* UpdateSpotMarket modifies certain spot market fields (admin only) */
export const updateSpotMarket = buildTx<MsgUpdateSpotMarket>({
  msg: MsgUpdateSpotMarket
});
/* UpdateDerivativeMarket modifies certain derivative market fields (admin
 only) */
export const updateDerivativeMarket = buildTx<MsgUpdateDerivativeMarket>({
  msg: MsgUpdateDerivativeMarket
});
export const authorizeStakeGrants = buildTx<MsgAuthorizeStakeGrants>({
  msg: MsgAuthorizeStakeGrants
});
export const activateStakeGrant = buildTx<MsgActivateStakeGrant>({
  msg: MsgActivateStakeGrant
});