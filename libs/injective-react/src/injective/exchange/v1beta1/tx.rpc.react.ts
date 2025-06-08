import { buildUseMutation } from "../../../react-query";
import { MsgDeposit, MsgWithdraw, MsgInstantSpotMarketLaunch, MsgInstantPerpetualMarketLaunch, MsgInstantExpiryFuturesMarketLaunch, MsgCreateSpotLimitOrder, MsgBatchCreateSpotLimitOrders, MsgCreateSpotMarketOrder, MsgCancelSpotOrder, MsgBatchCancelSpotOrders, MsgBatchUpdateOrders, MsgPrivilegedExecuteContract, MsgCreateDerivativeLimitOrder, MsgBatchCreateDerivativeLimitOrders, MsgCreateDerivativeMarketOrder, MsgCancelDerivativeOrder, MsgBatchCancelDerivativeOrders, MsgInstantBinaryOptionsMarketLaunch, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsMarketOrder, MsgCancelBinaryOptionsOrder, MsgBatchCancelBinaryOptionsOrders, MsgSubaccountTransfer, MsgExternalTransfer, MsgLiquidatePosition, MsgEmergencySettleMarket, MsgIncreasePositionMargin, MsgDecreasePositionMargin, MsgRewardsOptOut, MsgAdminUpdateBinaryOptionsMarket, MsgUpdateParams, MsgUpdateSpotMarket, MsgUpdateDerivativeMarket, MsgAuthorizeStakeGrants, MsgActivateStakeGrant } from "./tx";
import { deposit, withdraw, instantSpotMarketLaunch, instantPerpetualMarketLaunch, instantExpiryFuturesMarketLaunch, createSpotLimitOrder, batchCreateSpotLimitOrders, createSpotMarketOrder, cancelSpotOrder, batchCancelSpotOrders, batchUpdateOrders, privilegedExecuteContract, createDerivativeLimitOrder, batchCreateDerivativeLimitOrders, createDerivativeMarketOrder, cancelDerivativeOrder, batchCancelDerivativeOrders, instantBinaryOptionsMarketLaunch, createBinaryOptionsLimitOrder, createBinaryOptionsMarketOrder, cancelBinaryOptionsOrder, batchCancelBinaryOptionsOrders, subaccountTransfer, externalTransfer, liquidatePosition, emergencySettleMarket, increasePositionMargin, decreasePositionMargin, rewardsOptOut, adminUpdateBinaryOptionsMarket, updateParams, updateSpotMarket, updateDerivativeMarket, authorizeStakeGrants, activateStakeGrant } from "./tx.rpc.func";
/**
 * Deposit defines a method for transferring coins from the sender's bank
 * balance into the subaccount's exchange deposits
 * @name useDeposit
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.Deposit
 */
export const useDeposit = buildUseMutation<MsgDeposit, Error>({
  builderMutationFn: deposit
});
/**
 * Withdraw defines a method for withdrawing coins from a subaccount's
 * deposits to the user's bank balance
 * @name useWithdraw
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.Withdraw
 */
export const useWithdraw = buildUseMutation<MsgWithdraw, Error>({
  builderMutationFn: withdraw
});
/**
 * InstantSpotMarketLaunch defines method for creating a spot market by paying
 * listing fee without governance
 * @name useInstantSpotMarketLaunch
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.InstantSpotMarketLaunch
 */
export const useInstantSpotMarketLaunch = buildUseMutation<MsgInstantSpotMarketLaunch, Error>({
  builderMutationFn: instantSpotMarketLaunch
});
/**
 * InstantPerpetualMarketLaunch defines a method for creating a new perpetual
 * futures market by paying listing fee without governance
 * @name useInstantPerpetualMarketLaunch
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.InstantPerpetualMarketLaunch
 */
export const useInstantPerpetualMarketLaunch = buildUseMutation<MsgInstantPerpetualMarketLaunch, Error>({
  builderMutationFn: instantPerpetualMarketLaunch
});
/**
 * InstantExpiryFuturesMarketLaunch defines a method for creating a new expiry
 * futures market by paying listing fee without governance
 * @name useInstantExpiryFuturesMarketLaunch
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.InstantExpiryFuturesMarketLaunch
 */
export const useInstantExpiryFuturesMarketLaunch = buildUseMutation<MsgInstantExpiryFuturesMarketLaunch, Error>({
  builderMutationFn: instantExpiryFuturesMarketLaunch
});
/**
 * CreateSpotLimitOrder defines a method for creating a new spot limit order.
 * @name useCreateSpotLimitOrder
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.CreateSpotLimitOrder
 */
export const useCreateSpotLimitOrder = buildUseMutation<MsgCreateSpotLimitOrder, Error>({
  builderMutationFn: createSpotLimitOrder
});
/**
 * BatchCreateSpotLimitOrder defines a method for creating a new batch of spot
 * limit orders.
 * @name useBatchCreateSpotLimitOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.BatchCreateSpotLimitOrders
 */
export const useBatchCreateSpotLimitOrders = buildUseMutation<MsgBatchCreateSpotLimitOrders, Error>({
  builderMutationFn: batchCreateSpotLimitOrders
});
/**
 * CreateSpotMarketOrder defines a method for creating a new spot market
 * order.
 * @name useCreateSpotMarketOrder
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.CreateSpotMarketOrder
 */
export const useCreateSpotMarketOrder = buildUseMutation<MsgCreateSpotMarketOrder, Error>({
  builderMutationFn: createSpotMarketOrder
});
/**
 * MsgCancelSpotOrder defines a method for cancelling a spot order.
 * @name useCancelSpotOrder
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.CancelSpotOrder
 */
export const useCancelSpotOrder = buildUseMutation<MsgCancelSpotOrder, Error>({
  builderMutationFn: cancelSpotOrder
});
/**
 * BatchCancelSpotOrders defines a method for cancelling a batch of spot
 * orders in a given market.
 * @name useBatchCancelSpotOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.BatchCancelSpotOrders
 */
export const useBatchCancelSpotOrders = buildUseMutation<MsgBatchCancelSpotOrders, Error>({
  builderMutationFn: batchCancelSpotOrders
});
/**
 * BatchUpdateOrders defines a method for updating a batch of orders.
 * @name useBatchUpdateOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.BatchUpdateOrders
 */
export const useBatchUpdateOrders = buildUseMutation<MsgBatchUpdateOrders, Error>({
  builderMutationFn: batchUpdateOrders
});
/**
 * PrivilegedExecuteContract defines a method for executing a Cosmwasm
 * contract from the exchange module with privileged capabilities.
 * @name usePrivilegedExecuteContract
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.PrivilegedExecuteContract
 */
export const usePrivilegedExecuteContract = buildUseMutation<MsgPrivilegedExecuteContract, Error>({
  builderMutationFn: privilegedExecuteContract
});
/**
 * CreateDerivativeLimitOrder defines a method for creating a new derivative
 * limit order.
 * @name useCreateDerivativeLimitOrder
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.CreateDerivativeLimitOrder
 */
export const useCreateDerivativeLimitOrder = buildUseMutation<MsgCreateDerivativeLimitOrder, Error>({
  builderMutationFn: createDerivativeLimitOrder
});
/**
 * BatchCreateDerivativeLimitOrders defines a method for creating a new batch
 * of derivative limit orders.
 * @name useBatchCreateDerivativeLimitOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.BatchCreateDerivativeLimitOrders
 */
export const useBatchCreateDerivativeLimitOrders = buildUseMutation<MsgBatchCreateDerivativeLimitOrders, Error>({
  builderMutationFn: batchCreateDerivativeLimitOrders
});
/**
 * MsgCreateDerivativeLimitOrder defines a method for creating a new
 * derivative market order.
 * @name useCreateDerivativeMarketOrder
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.CreateDerivativeMarketOrder
 */
export const useCreateDerivativeMarketOrder = buildUseMutation<MsgCreateDerivativeMarketOrder, Error>({
  builderMutationFn: createDerivativeMarketOrder
});
/**
 * MsgCancelDerivativeOrder defines a method for cancelling a derivative
 * order.
 * @name useCancelDerivativeOrder
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.CancelDerivativeOrder
 */
export const useCancelDerivativeOrder = buildUseMutation<MsgCancelDerivativeOrder, Error>({
  builderMutationFn: cancelDerivativeOrder
});
/**
 * MsgBatchCancelDerivativeOrders defines a method for cancelling a batch of
 * derivative limit orders.
 * @name useBatchCancelDerivativeOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.BatchCancelDerivativeOrders
 */
export const useBatchCancelDerivativeOrders = buildUseMutation<MsgBatchCancelDerivativeOrders, Error>({
  builderMutationFn: batchCancelDerivativeOrders
});
/**
 * InstantBinaryOptionsMarketLaunch defines method for creating a binary
 * options market by paying listing fee without governance
 * @name useInstantBinaryOptionsMarketLaunch
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.InstantBinaryOptionsMarketLaunch
 */
export const useInstantBinaryOptionsMarketLaunch = buildUseMutation<MsgInstantBinaryOptionsMarketLaunch, Error>({
  builderMutationFn: instantBinaryOptionsMarketLaunch
});
/**
 * CreateBinaryOptionsLimitOrder defines a method for creating a new binary
 * options limit order.
 * @name useCreateBinaryOptionsLimitOrder
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.CreateBinaryOptionsLimitOrder
 */
export const useCreateBinaryOptionsLimitOrder = buildUseMutation<MsgCreateBinaryOptionsLimitOrder, Error>({
  builderMutationFn: createBinaryOptionsLimitOrder
});
/**
 * CreateBinaryOptionsMarketOrder defines a method for creating a new binary
 * options market order.
 * @name useCreateBinaryOptionsMarketOrder
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.CreateBinaryOptionsMarketOrder
 */
export const useCreateBinaryOptionsMarketOrder = buildUseMutation<MsgCreateBinaryOptionsMarketOrder, Error>({
  builderMutationFn: createBinaryOptionsMarketOrder
});
/**
 * MsgCancelBinaryOptionsOrder defines a method for cancelling a binary
 * options order.
 * @name useCancelBinaryOptionsOrder
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.CancelBinaryOptionsOrder
 */
export const useCancelBinaryOptionsOrder = buildUseMutation<MsgCancelBinaryOptionsOrder, Error>({
  builderMutationFn: cancelBinaryOptionsOrder
});
/**
 * BatchCancelBinaryOptionsOrders defines a method for cancelling a batch of
 * binary options limit orders.
 * @name useBatchCancelBinaryOptionsOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.BatchCancelBinaryOptionsOrders
 */
export const useBatchCancelBinaryOptionsOrders = buildUseMutation<MsgBatchCancelBinaryOptionsOrders, Error>({
  builderMutationFn: batchCancelBinaryOptionsOrders
});
/**
 * SubaccountTransfer defines a method for transfer between subaccounts
 * @name useSubaccountTransfer
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SubaccountTransfer
 */
export const useSubaccountTransfer = buildUseMutation<MsgSubaccountTransfer, Error>({
  builderMutationFn: subaccountTransfer
});
/**
 * ExternalTransfer defines a method for transfer between external accounts
 * @name useExternalTransfer
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.ExternalTransfer
 */
export const useExternalTransfer = buildUseMutation<MsgExternalTransfer, Error>({
  builderMutationFn: externalTransfer
});
/**
 * LiquidatePosition defines a method for liquidating a position
 * @name useLiquidatePosition
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.LiquidatePosition
 */
export const useLiquidatePosition = buildUseMutation<MsgLiquidatePosition, Error>({
  builderMutationFn: liquidatePosition
});
/**
 * EmergencySettleMarket defines a method for emergency settling a market
 * @name useEmergencySettleMarket
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.EmergencySettleMarket
 */
export const useEmergencySettleMarket = buildUseMutation<MsgEmergencySettleMarket, Error>({
  builderMutationFn: emergencySettleMarket
});
/**
 * IncreasePositionMargin defines a method for increasing margin of a position
 * @name useIncreasePositionMargin
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.IncreasePositionMargin
 */
export const useIncreasePositionMargin = buildUseMutation<MsgIncreasePositionMargin, Error>({
  builderMutationFn: increasePositionMargin
});
/**
 * DecreasePositionMargin defines a method for decreasing margin of a position
 * @name useDecreasePositionMargin
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.DecreasePositionMargin
 */
export const useDecreasePositionMargin = buildUseMutation<MsgDecreasePositionMargin, Error>({
  builderMutationFn: decreasePositionMargin
});
/**
 * RewardsOptOut defines a method for opting out of rewards
 * @name useRewardsOptOut
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.RewardsOptOut
 */
export const useRewardsOptOut = buildUseMutation<MsgRewardsOptOut, Error>({
  builderMutationFn: rewardsOptOut
});
/**
 * AdminUpdateBinaryOptionsMarket defines method for updating a binary options
 * market by admin
 * @name useAdminUpdateBinaryOptionsMarket
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.AdminUpdateBinaryOptionsMarket
 */
export const useAdminUpdateBinaryOptionsMarket = buildUseMutation<MsgAdminUpdateBinaryOptionsMarket, Error>({
  builderMutationFn: adminUpdateBinaryOptionsMarket
});
/**
 * @name useUpdateParams
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.UpdateParams
 */
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
/**
 * UpdateSpotMarket modifies certain spot market fields (admin only)
 * @name useUpdateSpotMarket
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.UpdateSpotMarket
 */
export const useUpdateSpotMarket = buildUseMutation<MsgUpdateSpotMarket, Error>({
  builderMutationFn: updateSpotMarket
});
/**
 * UpdateDerivativeMarket modifies certain derivative market fields (admin
 * only)
 * @name useUpdateDerivativeMarket
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.UpdateDerivativeMarket
 */
export const useUpdateDerivativeMarket = buildUseMutation<MsgUpdateDerivativeMarket, Error>({
  builderMutationFn: updateDerivativeMarket
});
/**
 * @name useAuthorizeStakeGrants
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.AuthorizeStakeGrants
 */
export const useAuthorizeStakeGrants = buildUseMutation<MsgAuthorizeStakeGrants, Error>({
  builderMutationFn: authorizeStakeGrants
});
/**
 * @name useActivateStakeGrant
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.ActivateStakeGrant
 */
export const useActivateStakeGrant = buildUseMutation<MsgActivateStakeGrant, Error>({
  builderMutationFn: activateStakeGrant
});