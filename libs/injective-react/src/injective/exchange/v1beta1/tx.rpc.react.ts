import { buildUseMutation } from "../../../react-query";
import { MsgDeposit, MsgWithdraw, MsgInstantSpotMarketLaunch, MsgInstantPerpetualMarketLaunch, MsgInstantExpiryFuturesMarketLaunch, MsgCreateSpotLimitOrder, MsgBatchCreateSpotLimitOrders, MsgCreateSpotMarketOrder, MsgCancelSpotOrder, MsgBatchCancelSpotOrders, MsgBatchUpdateOrders, MsgPrivilegedExecuteContract, MsgCreateDerivativeLimitOrder, MsgBatchCreateDerivativeLimitOrders, MsgCreateDerivativeMarketOrder, MsgCancelDerivativeOrder, MsgBatchCancelDerivativeOrders, MsgInstantBinaryOptionsMarketLaunch, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsMarketOrder, MsgCancelBinaryOptionsOrder, MsgBatchCancelBinaryOptionsOrders, MsgSubaccountTransfer, MsgExternalTransfer, MsgLiquidatePosition, MsgEmergencySettleMarket, MsgIncreasePositionMargin, MsgDecreasePositionMargin, MsgRewardsOptOut, MsgAdminUpdateBinaryOptionsMarket, MsgUpdateParams, MsgUpdateSpotMarket, MsgUpdateDerivativeMarket, MsgAuthorizeStakeGrants, MsgActivateStakeGrant } from "./tx";
import { deposit, withdraw, instantSpotMarketLaunch, instantPerpetualMarketLaunch, instantExpiryFuturesMarketLaunch, createSpotLimitOrder, batchCreateSpotLimitOrders, createSpotMarketOrder, cancelSpotOrder, batchCancelSpotOrders, batchUpdateOrders, privilegedExecuteContract, createDerivativeLimitOrder, batchCreateDerivativeLimitOrders, createDerivativeMarketOrder, cancelDerivativeOrder, batchCancelDerivativeOrders, instantBinaryOptionsMarketLaunch, createBinaryOptionsLimitOrder, createBinaryOptionsMarketOrder, cancelBinaryOptionsOrder, batchCancelBinaryOptionsOrders, subaccountTransfer, externalTransfer, liquidatePosition, emergencySettleMarket, increasePositionMargin, decreasePositionMargin, rewardsOptOut, adminUpdateBinaryOptionsMarket, updateParams, updateSpotMarket, updateDerivativeMarket, authorizeStakeGrants, activateStakeGrant } from "./tx.rpc.func";
/* Deposit defines a method for transferring coins from the sender's bank
 balance into the subaccount's exchange deposits */
export const useDeposit = buildUseMutation<MsgDeposit, Error>({
  builderMutationFn: deposit
});
/* Withdraw defines a method for withdrawing coins from a subaccount's
 deposits to the user's bank balance */
export const useWithdraw = buildUseMutation<MsgWithdraw, Error>({
  builderMutationFn: withdraw
});
/* InstantSpotMarketLaunch defines method for creating a spot market by paying
 listing fee without governance */
export const useInstantSpotMarketLaunch = buildUseMutation<MsgInstantSpotMarketLaunch, Error>({
  builderMutationFn: instantSpotMarketLaunch
});
/* InstantPerpetualMarketLaunch defines a method for creating a new perpetual
 futures market by paying listing fee without governance */
export const useInstantPerpetualMarketLaunch = buildUseMutation<MsgInstantPerpetualMarketLaunch, Error>({
  builderMutationFn: instantPerpetualMarketLaunch
});
/* InstantExpiryFuturesMarketLaunch defines a method for creating a new expiry
 futures market by paying listing fee without governance */
export const useInstantExpiryFuturesMarketLaunch = buildUseMutation<MsgInstantExpiryFuturesMarketLaunch, Error>({
  builderMutationFn: instantExpiryFuturesMarketLaunch
});
/* CreateSpotLimitOrder defines a method for creating a new spot limit order. */
export const useCreateSpotLimitOrder = buildUseMutation<MsgCreateSpotLimitOrder, Error>({
  builderMutationFn: createSpotLimitOrder
});
/* BatchCreateSpotLimitOrder defines a method for creating a new batch of spot
 limit orders. */
export const useBatchCreateSpotLimitOrders = buildUseMutation<MsgBatchCreateSpotLimitOrders, Error>({
  builderMutationFn: batchCreateSpotLimitOrders
});
/* CreateSpotMarketOrder defines a method for creating a new spot market
 order. */
export const useCreateSpotMarketOrder = buildUseMutation<MsgCreateSpotMarketOrder, Error>({
  builderMutationFn: createSpotMarketOrder
});
/* MsgCancelSpotOrder defines a method for cancelling a spot order. */
export const useCancelSpotOrder = buildUseMutation<MsgCancelSpotOrder, Error>({
  builderMutationFn: cancelSpotOrder
});
/* BatchCancelSpotOrders defines a method for cancelling a batch of spot
 orders in a given market. */
export const useBatchCancelSpotOrders = buildUseMutation<MsgBatchCancelSpotOrders, Error>({
  builderMutationFn: batchCancelSpotOrders
});
/* BatchUpdateOrders defines a method for updating a batch of orders. */
export const useBatchUpdateOrders = buildUseMutation<MsgBatchUpdateOrders, Error>({
  builderMutationFn: batchUpdateOrders
});
/* PrivilegedExecuteContract defines a method for executing a Cosmwasm
 contract from the exchange module with privileged capabilities. */
export const usePrivilegedExecuteContract = buildUseMutation<MsgPrivilegedExecuteContract, Error>({
  builderMutationFn: privilegedExecuteContract
});
/* CreateDerivativeLimitOrder defines a method for creating a new derivative
 limit order. */
export const useCreateDerivativeLimitOrder = buildUseMutation<MsgCreateDerivativeLimitOrder, Error>({
  builderMutationFn: createDerivativeLimitOrder
});
/* BatchCreateDerivativeLimitOrders defines a method for creating a new batch
 of derivative limit orders. */
export const useBatchCreateDerivativeLimitOrders = buildUseMutation<MsgBatchCreateDerivativeLimitOrders, Error>({
  builderMutationFn: batchCreateDerivativeLimitOrders
});
/* MsgCreateDerivativeLimitOrder defines a method for creating a new
 derivative market order. */
export const useCreateDerivativeMarketOrder = buildUseMutation<MsgCreateDerivativeMarketOrder, Error>({
  builderMutationFn: createDerivativeMarketOrder
});
/* MsgCancelDerivativeOrder defines a method for cancelling a derivative
 order. */
export const useCancelDerivativeOrder = buildUseMutation<MsgCancelDerivativeOrder, Error>({
  builderMutationFn: cancelDerivativeOrder
});
/* MsgBatchCancelDerivativeOrders defines a method for cancelling a batch of
 derivative limit orders. */
export const useBatchCancelDerivativeOrders = buildUseMutation<MsgBatchCancelDerivativeOrders, Error>({
  builderMutationFn: batchCancelDerivativeOrders
});
/* InstantBinaryOptionsMarketLaunch defines method for creating a binary
 options market by paying listing fee without governance */
export const useInstantBinaryOptionsMarketLaunch = buildUseMutation<MsgInstantBinaryOptionsMarketLaunch, Error>({
  builderMutationFn: instantBinaryOptionsMarketLaunch
});
/* CreateBinaryOptionsLimitOrder defines a method for creating a new binary
 options limit order. */
export const useCreateBinaryOptionsLimitOrder = buildUseMutation<MsgCreateBinaryOptionsLimitOrder, Error>({
  builderMutationFn: createBinaryOptionsLimitOrder
});
/* CreateBinaryOptionsMarketOrder defines a method for creating a new binary
 options market order. */
export const useCreateBinaryOptionsMarketOrder = buildUseMutation<MsgCreateBinaryOptionsMarketOrder, Error>({
  builderMutationFn: createBinaryOptionsMarketOrder
});
/* MsgCancelBinaryOptionsOrder defines a method for cancelling a binary
 options order. */
export const useCancelBinaryOptionsOrder = buildUseMutation<MsgCancelBinaryOptionsOrder, Error>({
  builderMutationFn: cancelBinaryOptionsOrder
});
/* BatchCancelBinaryOptionsOrders defines a method for cancelling a batch of
 binary options limit orders. */
export const useBatchCancelBinaryOptionsOrders = buildUseMutation<MsgBatchCancelBinaryOptionsOrders, Error>({
  builderMutationFn: batchCancelBinaryOptionsOrders
});
/* SubaccountTransfer defines a method for transfer between subaccounts */
export const useSubaccountTransfer = buildUseMutation<MsgSubaccountTransfer, Error>({
  builderMutationFn: subaccountTransfer
});
/* ExternalTransfer defines a method for transfer between external accounts */
export const useExternalTransfer = buildUseMutation<MsgExternalTransfer, Error>({
  builderMutationFn: externalTransfer
});
/* LiquidatePosition defines a method for liquidating a position */
export const useLiquidatePosition = buildUseMutation<MsgLiquidatePosition, Error>({
  builderMutationFn: liquidatePosition
});
/* EmergencySettleMarket defines a method for emergency settling a market */
export const useEmergencySettleMarket = buildUseMutation<MsgEmergencySettleMarket, Error>({
  builderMutationFn: emergencySettleMarket
});
/* IncreasePositionMargin defines a method for increasing margin of a position */
export const useIncreasePositionMargin = buildUseMutation<MsgIncreasePositionMargin, Error>({
  builderMutationFn: increasePositionMargin
});
/* DecreasePositionMargin defines a method for decreasing margin of a position */
export const useDecreasePositionMargin = buildUseMutation<MsgDecreasePositionMargin, Error>({
  builderMutationFn: decreasePositionMargin
});
/* RewardsOptOut defines a method for opting out of rewards */
export const useRewardsOptOut = buildUseMutation<MsgRewardsOptOut, Error>({
  builderMutationFn: rewardsOptOut
});
/* AdminUpdateBinaryOptionsMarket defines method for updating a binary options
 market by admin */
export const useAdminUpdateBinaryOptionsMarket = buildUseMutation<MsgAdminUpdateBinaryOptionsMarket, Error>({
  builderMutationFn: adminUpdateBinaryOptionsMarket
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
/* UpdateSpotMarket modifies certain spot market fields (admin only) */
export const useUpdateSpotMarket = buildUseMutation<MsgUpdateSpotMarket, Error>({
  builderMutationFn: updateSpotMarket
});
/* UpdateDerivativeMarket modifies certain derivative market fields (admin
 only) */
export const useUpdateDerivativeMarket = buildUseMutation<MsgUpdateDerivativeMarket, Error>({
  builderMutationFn: updateDerivativeMarket
});
export const useAuthorizeStakeGrants = buildUseMutation<MsgAuthorizeStakeGrants, Error>({
  builderMutationFn: authorizeStakeGrants
});
export const useActivateStakeGrant = buildUseMutation<MsgActivateStakeGrant, Error>({
  builderMutationFn: activateStakeGrant
});