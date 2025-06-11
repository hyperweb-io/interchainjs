import { buildTx } from "../../../helper-func-types";
import { MsgDeposit, MsgWithdraw, MsgInstantSpotMarketLaunch, MsgInstantPerpetualMarketLaunch, MsgInstantExpiryFuturesMarketLaunch, MsgCreateSpotLimitOrder, MsgBatchCreateSpotLimitOrders, MsgCreateSpotMarketOrder, MsgCancelSpotOrder, MsgBatchCancelSpotOrders, MsgBatchUpdateOrders, MsgPrivilegedExecuteContract, MsgCreateDerivativeLimitOrder, MsgBatchCreateDerivativeLimitOrders, MsgCreateDerivativeMarketOrder, MsgCancelDerivativeOrder, MsgBatchCancelDerivativeOrders, MsgInstantBinaryOptionsMarketLaunch, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsMarketOrder, MsgCancelBinaryOptionsOrder, MsgBatchCancelBinaryOptionsOrders, MsgSubaccountTransfer, MsgExternalTransfer, MsgLiquidatePosition, MsgEmergencySettleMarket, MsgIncreasePositionMargin, MsgDecreasePositionMargin, MsgRewardsOptOut, MsgAdminUpdateBinaryOptionsMarket, MsgUpdateParams, MsgUpdateSpotMarket, MsgUpdateDerivativeMarket, MsgAuthorizeStakeGrants, MsgActivateStakeGrant, MsgBatchExchangeModification } from "./tx";
/**
 * Deposit defines a method for transferring coins from the sender's bank
 * balance into the subaccount's exchange deposits
 * @name deposit
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.Deposit
 */
export const deposit = buildTx<MsgDeposit>({
  msg: MsgDeposit
});
/**
 * Withdraw defines a method for withdrawing coins from a subaccount's
 * deposits to the user's bank balance
 * @name withdraw
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.Withdraw
 */
export const withdraw = buildTx<MsgWithdraw>({
  msg: MsgWithdraw
});
/**
 * InstantSpotMarketLaunch defines method for creating a spot market by paying
 * listing fee without governance
 * @name instantSpotMarketLaunch
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.InstantSpotMarketLaunch
 */
export const instantSpotMarketLaunch = buildTx<MsgInstantSpotMarketLaunch>({
  msg: MsgInstantSpotMarketLaunch
});
/**
 * InstantPerpetualMarketLaunch defines a method for creating a new perpetual
 * futures market by paying listing fee without governance
 * @name instantPerpetualMarketLaunch
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.InstantPerpetualMarketLaunch
 */
export const instantPerpetualMarketLaunch = buildTx<MsgInstantPerpetualMarketLaunch>({
  msg: MsgInstantPerpetualMarketLaunch
});
/**
 * InstantExpiryFuturesMarketLaunch defines a method for creating a new expiry
 * futures market by paying listing fee without governance
 * @name instantExpiryFuturesMarketLaunch
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.InstantExpiryFuturesMarketLaunch
 */
export const instantExpiryFuturesMarketLaunch = buildTx<MsgInstantExpiryFuturesMarketLaunch>({
  msg: MsgInstantExpiryFuturesMarketLaunch
});
/**
 * CreateSpotLimitOrder defines a method for creating a new spot limit order.
 * @name createSpotLimitOrder
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.CreateSpotLimitOrder
 */
export const createSpotLimitOrder = buildTx<MsgCreateSpotLimitOrder>({
  msg: MsgCreateSpotLimitOrder
});
/**
 * BatchCreateSpotLimitOrder defines a method for creating a new batch of spot
 * limit orders.
 * @name batchCreateSpotLimitOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.BatchCreateSpotLimitOrders
 */
export const batchCreateSpotLimitOrders = buildTx<MsgBatchCreateSpotLimitOrders>({
  msg: MsgBatchCreateSpotLimitOrders
});
/**
 * CreateSpotMarketOrder defines a method for creating a new spot market
 * order.
 * @name createSpotMarketOrder
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.CreateSpotMarketOrder
 */
export const createSpotMarketOrder = buildTx<MsgCreateSpotMarketOrder>({
  msg: MsgCreateSpotMarketOrder
});
/**
 * MsgCancelSpotOrder defines a method for cancelling a spot order.
 * @name cancelSpotOrder
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.CancelSpotOrder
 */
export const cancelSpotOrder = buildTx<MsgCancelSpotOrder>({
  msg: MsgCancelSpotOrder
});
/**
 * BatchCancelSpotOrders defines a method for cancelling a batch of spot
 * orders in a given market.
 * @name batchCancelSpotOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.BatchCancelSpotOrders
 */
export const batchCancelSpotOrders = buildTx<MsgBatchCancelSpotOrders>({
  msg: MsgBatchCancelSpotOrders
});
/**
 * BatchUpdateOrders defines a method for updating a batch of orders.
 * @name batchUpdateOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.BatchUpdateOrders
 */
export const batchUpdateOrders = buildTx<MsgBatchUpdateOrders>({
  msg: MsgBatchUpdateOrders
});
/**
 * PrivilegedExecuteContract defines a method for executing a Cosmwasm
 * contract from the exchange module with privileged capabilities.
 * @name privilegedExecuteContract
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.PrivilegedExecuteContract
 */
export const privilegedExecuteContract = buildTx<MsgPrivilegedExecuteContract>({
  msg: MsgPrivilegedExecuteContract
});
/**
 * CreateDerivativeLimitOrder defines a method for creating a new derivative
 * limit order.
 * @name createDerivativeLimitOrder
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.CreateDerivativeLimitOrder
 */
export const createDerivativeLimitOrder = buildTx<MsgCreateDerivativeLimitOrder>({
  msg: MsgCreateDerivativeLimitOrder
});
/**
 * BatchCreateDerivativeLimitOrders defines a method for creating a new batch
 * of derivative limit orders.
 * @name batchCreateDerivativeLimitOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.BatchCreateDerivativeLimitOrders
 */
export const batchCreateDerivativeLimitOrders = buildTx<MsgBatchCreateDerivativeLimitOrders>({
  msg: MsgBatchCreateDerivativeLimitOrders
});
/**
 * MsgCreateDerivativeLimitOrder defines a method for creating a new
 * derivative market order.
 * @name createDerivativeMarketOrder
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.CreateDerivativeMarketOrder
 */
export const createDerivativeMarketOrder = buildTx<MsgCreateDerivativeMarketOrder>({
  msg: MsgCreateDerivativeMarketOrder
});
/**
 * MsgCancelDerivativeOrder defines a method for cancelling a derivative
 * order.
 * @name cancelDerivativeOrder
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.CancelDerivativeOrder
 */
export const cancelDerivativeOrder = buildTx<MsgCancelDerivativeOrder>({
  msg: MsgCancelDerivativeOrder
});
/**
 * MsgBatchCancelDerivativeOrders defines a method for cancelling a batch of
 * derivative limit orders.
 * @name batchCancelDerivativeOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.BatchCancelDerivativeOrders
 */
export const batchCancelDerivativeOrders = buildTx<MsgBatchCancelDerivativeOrders>({
  msg: MsgBatchCancelDerivativeOrders
});
/**
 * InstantBinaryOptionsMarketLaunch defines method for creating a binary
 * options market by paying listing fee without governance
 * @name instantBinaryOptionsMarketLaunch
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.InstantBinaryOptionsMarketLaunch
 */
export const instantBinaryOptionsMarketLaunch = buildTx<MsgInstantBinaryOptionsMarketLaunch>({
  msg: MsgInstantBinaryOptionsMarketLaunch
});
/**
 * CreateBinaryOptionsLimitOrder defines a method for creating a new binary
 * options limit order.
 * @name createBinaryOptionsLimitOrder
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.CreateBinaryOptionsLimitOrder
 */
export const createBinaryOptionsLimitOrder = buildTx<MsgCreateBinaryOptionsLimitOrder>({
  msg: MsgCreateBinaryOptionsLimitOrder
});
/**
 * CreateBinaryOptionsMarketOrder defines a method for creating a new binary
 * options market order.
 * @name createBinaryOptionsMarketOrder
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.CreateBinaryOptionsMarketOrder
 */
export const createBinaryOptionsMarketOrder = buildTx<MsgCreateBinaryOptionsMarketOrder>({
  msg: MsgCreateBinaryOptionsMarketOrder
});
/**
 * MsgCancelBinaryOptionsOrder defines a method for cancelling a binary
 * options order.
 * @name cancelBinaryOptionsOrder
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.CancelBinaryOptionsOrder
 */
export const cancelBinaryOptionsOrder = buildTx<MsgCancelBinaryOptionsOrder>({
  msg: MsgCancelBinaryOptionsOrder
});
/**
 * BatchCancelBinaryOptionsOrders defines a method for cancelling a batch of
 * binary options limit orders.
 * @name batchCancelBinaryOptionsOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.BatchCancelBinaryOptionsOrders
 */
export const batchCancelBinaryOptionsOrders = buildTx<MsgBatchCancelBinaryOptionsOrders>({
  msg: MsgBatchCancelBinaryOptionsOrders
});
/**
 * SubaccountTransfer defines a method for transfer between subaccounts
 * @name subaccountTransfer
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SubaccountTransfer
 */
export const subaccountTransfer = buildTx<MsgSubaccountTransfer>({
  msg: MsgSubaccountTransfer
});
/**
 * ExternalTransfer defines a method for transfer between external accounts
 * @name externalTransfer
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.ExternalTransfer
 */
export const externalTransfer = buildTx<MsgExternalTransfer>({
  msg: MsgExternalTransfer
});
/**
 * LiquidatePosition defines a method for liquidating a position
 * @name liquidatePosition
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.LiquidatePosition
 */
export const liquidatePosition = buildTx<MsgLiquidatePosition>({
  msg: MsgLiquidatePosition
});
/**
 * EmergencySettleMarket defines a method for emergency settling a market
 * @name emergencySettleMarket
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.EmergencySettleMarket
 */
export const emergencySettleMarket = buildTx<MsgEmergencySettleMarket>({
  msg: MsgEmergencySettleMarket
});
/**
 * IncreasePositionMargin defines a method for increasing margin of a position
 * @name increasePositionMargin
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.IncreasePositionMargin
 */
export const increasePositionMargin = buildTx<MsgIncreasePositionMargin>({
  msg: MsgIncreasePositionMargin
});
/**
 * DecreasePositionMargin defines a method for decreasing margin of a position
 * @name decreasePositionMargin
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.DecreasePositionMargin
 */
export const decreasePositionMargin = buildTx<MsgDecreasePositionMargin>({
  msg: MsgDecreasePositionMargin
});
/**
 * RewardsOptOut defines a method for opting out of rewards
 * @name rewardsOptOut
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.RewardsOptOut
 */
export const rewardsOptOut = buildTx<MsgRewardsOptOut>({
  msg: MsgRewardsOptOut
});
/**
 * AdminUpdateBinaryOptionsMarket defines method for updating a binary options
 * market by admin
 * @name adminUpdateBinaryOptionsMarket
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.AdminUpdateBinaryOptionsMarket
 */
export const adminUpdateBinaryOptionsMarket = buildTx<MsgAdminUpdateBinaryOptionsMarket>({
  msg: MsgAdminUpdateBinaryOptionsMarket
});
/**
 * @name updateParams
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
/**
 * UpdateSpotMarket modifies certain spot market fields (admin only)
 * @name updateSpotMarket
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.UpdateSpotMarket
 */
export const updateSpotMarket = buildTx<MsgUpdateSpotMarket>({
  msg: MsgUpdateSpotMarket
});
/**
 * UpdateDerivativeMarket modifies certain derivative market fields (admin
 * only)
 * @name updateDerivativeMarket
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.UpdateDerivativeMarket
 */
export const updateDerivativeMarket = buildTx<MsgUpdateDerivativeMarket>({
  msg: MsgUpdateDerivativeMarket
});
/**
 * @name authorizeStakeGrants
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.AuthorizeStakeGrants
 */
export const authorizeStakeGrants = buildTx<MsgAuthorizeStakeGrants>({
  msg: MsgAuthorizeStakeGrants
});
/**
 * @name activateStakeGrant
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.ActivateStakeGrant
 */
export const activateStakeGrant = buildTx<MsgActivateStakeGrant>({
  msg: MsgActivateStakeGrant
});
/**
 * @name batchExchangeModification
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.BatchExchangeModification
 */
export const batchExchangeModification = buildTx<MsgBatchExchangeModification>({
  msg: MsgBatchExchangeModification
});