import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgDeposit, MsgWithdraw, MsgInstantSpotMarketLaunch, MsgInstantPerpetualMarketLaunch, MsgInstantExpiryFuturesMarketLaunch, MsgCreateSpotLimitOrder, MsgBatchCreateSpotLimitOrders, MsgCreateSpotMarketOrder, MsgCancelSpotOrder, MsgBatchCancelSpotOrders, MsgBatchUpdateOrders, MsgPrivilegedExecuteContract, MsgCreateDerivativeLimitOrder, MsgBatchCreateDerivativeLimitOrders, MsgCreateDerivativeMarketOrder, MsgCancelDerivativeOrder, MsgBatchCancelDerivativeOrders, MsgInstantBinaryOptionsMarketLaunch, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsMarketOrder, MsgCancelBinaryOptionsOrder, MsgBatchCancelBinaryOptionsOrders, MsgSubaccountTransfer, MsgExternalTransfer, MsgLiquidatePosition, MsgEmergencySettleMarket, MsgIncreasePositionMargin, MsgDecreasePositionMargin, MsgRewardsOptOut, MsgAdminUpdateBinaryOptionsMarket, MsgUpdateParams, MsgUpdateSpotMarket, MsgUpdateDerivativeMarket, MsgAuthorizeStakeGrants, MsgActivateStakeGrant } from "./tx";
export const createDeposit = (clientResolver?: SigningClientResolver) => buildTx<MsgDeposit>({
  clientResolver,
  typeUrl: MsgDeposit.typeUrl,
  encoders: toEncoders(MsgDeposit),
  converters: toConverters(MsgDeposit)
});
export const createWithdraw = (clientResolver?: SigningClientResolver) => buildTx<MsgWithdraw>({
  clientResolver,
  typeUrl: MsgWithdraw.typeUrl,
  encoders: toEncoders(MsgWithdraw),
  converters: toConverters(MsgWithdraw)
});
export const createInstantSpotMarketLaunch = (clientResolver?: SigningClientResolver) => buildTx<MsgInstantSpotMarketLaunch>({
  clientResolver,
  typeUrl: MsgInstantSpotMarketLaunch.typeUrl,
  encoders: toEncoders(MsgInstantSpotMarketLaunch),
  converters: toConverters(MsgInstantSpotMarketLaunch)
});
export const createInstantPerpetualMarketLaunch = (clientResolver?: SigningClientResolver) => buildTx<MsgInstantPerpetualMarketLaunch>({
  clientResolver,
  typeUrl: MsgInstantPerpetualMarketLaunch.typeUrl,
  encoders: toEncoders(MsgInstantPerpetualMarketLaunch),
  converters: toConverters(MsgInstantPerpetualMarketLaunch)
});
export const createInstantExpiryFuturesMarketLaunch = (clientResolver?: SigningClientResolver) => buildTx<MsgInstantExpiryFuturesMarketLaunch>({
  clientResolver,
  typeUrl: MsgInstantExpiryFuturesMarketLaunch.typeUrl,
  encoders: toEncoders(MsgInstantExpiryFuturesMarketLaunch),
  converters: toConverters(MsgInstantExpiryFuturesMarketLaunch)
});
export const createCreateSpotLimitOrder = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateSpotLimitOrder>({
  clientResolver,
  typeUrl: MsgCreateSpotLimitOrder.typeUrl,
  encoders: toEncoders(MsgCreateSpotLimitOrder),
  converters: toConverters(MsgCreateSpotLimitOrder)
});
export const createBatchCreateSpotLimitOrders = (clientResolver?: SigningClientResolver) => buildTx<MsgBatchCreateSpotLimitOrders>({
  clientResolver,
  typeUrl: MsgBatchCreateSpotLimitOrders.typeUrl,
  encoders: toEncoders(MsgBatchCreateSpotLimitOrders),
  converters: toConverters(MsgBatchCreateSpotLimitOrders)
});
export const createCreateSpotMarketOrder = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateSpotMarketOrder>({
  clientResolver,
  typeUrl: MsgCreateSpotMarketOrder.typeUrl,
  encoders: toEncoders(MsgCreateSpotMarketOrder),
  converters: toConverters(MsgCreateSpotMarketOrder)
});
export const createCancelSpotOrder = (clientResolver?: SigningClientResolver) => buildTx<MsgCancelSpotOrder>({
  clientResolver,
  typeUrl: MsgCancelSpotOrder.typeUrl,
  encoders: toEncoders(MsgCancelSpotOrder),
  converters: toConverters(MsgCancelSpotOrder)
});
export const createBatchCancelSpotOrders = (clientResolver?: SigningClientResolver) => buildTx<MsgBatchCancelSpotOrders>({
  clientResolver,
  typeUrl: MsgBatchCancelSpotOrders.typeUrl,
  encoders: toEncoders(MsgBatchCancelSpotOrders),
  converters: toConverters(MsgBatchCancelSpotOrders)
});
export const createBatchUpdateOrders = (clientResolver?: SigningClientResolver) => buildTx<MsgBatchUpdateOrders>({
  clientResolver,
  typeUrl: MsgBatchUpdateOrders.typeUrl,
  encoders: toEncoders(MsgBatchUpdateOrders),
  converters: toConverters(MsgBatchUpdateOrders)
});
export const createPrivilegedExecuteContract = (clientResolver?: SigningClientResolver) => buildTx<MsgPrivilegedExecuteContract>({
  clientResolver,
  typeUrl: MsgPrivilegedExecuteContract.typeUrl,
  encoders: toEncoders(MsgPrivilegedExecuteContract),
  converters: toConverters(MsgPrivilegedExecuteContract)
});
export const createCreateDerivativeLimitOrder = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateDerivativeLimitOrder>({
  clientResolver,
  typeUrl: MsgCreateDerivativeLimitOrder.typeUrl,
  encoders: toEncoders(MsgCreateDerivativeLimitOrder),
  converters: toConverters(MsgCreateDerivativeLimitOrder)
});
export const createBatchCreateDerivativeLimitOrders = (clientResolver?: SigningClientResolver) => buildTx<MsgBatchCreateDerivativeLimitOrders>({
  clientResolver,
  typeUrl: MsgBatchCreateDerivativeLimitOrders.typeUrl,
  encoders: toEncoders(MsgBatchCreateDerivativeLimitOrders),
  converters: toConverters(MsgBatchCreateDerivativeLimitOrders)
});
export const createCreateDerivativeMarketOrder = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateDerivativeMarketOrder>({
  clientResolver,
  typeUrl: MsgCreateDerivativeMarketOrder.typeUrl,
  encoders: toEncoders(MsgCreateDerivativeMarketOrder),
  converters: toConverters(MsgCreateDerivativeMarketOrder)
});
export const createCancelDerivativeOrder = (clientResolver?: SigningClientResolver) => buildTx<MsgCancelDerivativeOrder>({
  clientResolver,
  typeUrl: MsgCancelDerivativeOrder.typeUrl,
  encoders: toEncoders(MsgCancelDerivativeOrder),
  converters: toConverters(MsgCancelDerivativeOrder)
});
export const createBatchCancelDerivativeOrders = (clientResolver?: SigningClientResolver) => buildTx<MsgBatchCancelDerivativeOrders>({
  clientResolver,
  typeUrl: MsgBatchCancelDerivativeOrders.typeUrl,
  encoders: toEncoders(MsgBatchCancelDerivativeOrders),
  converters: toConverters(MsgBatchCancelDerivativeOrders)
});
export const createInstantBinaryOptionsMarketLaunch = (clientResolver?: SigningClientResolver) => buildTx<MsgInstantBinaryOptionsMarketLaunch>({
  clientResolver,
  typeUrl: MsgInstantBinaryOptionsMarketLaunch.typeUrl,
  encoders: toEncoders(MsgInstantBinaryOptionsMarketLaunch),
  converters: toConverters(MsgInstantBinaryOptionsMarketLaunch)
});
export const createCreateBinaryOptionsLimitOrder = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateBinaryOptionsLimitOrder>({
  clientResolver,
  typeUrl: MsgCreateBinaryOptionsLimitOrder.typeUrl,
  encoders: toEncoders(MsgCreateBinaryOptionsLimitOrder),
  converters: toConverters(MsgCreateBinaryOptionsLimitOrder)
});
export const createCreateBinaryOptionsMarketOrder = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateBinaryOptionsMarketOrder>({
  clientResolver,
  typeUrl: MsgCreateBinaryOptionsMarketOrder.typeUrl,
  encoders: toEncoders(MsgCreateBinaryOptionsMarketOrder),
  converters: toConverters(MsgCreateBinaryOptionsMarketOrder)
});
export const createCancelBinaryOptionsOrder = (clientResolver?: SigningClientResolver) => buildTx<MsgCancelBinaryOptionsOrder>({
  clientResolver,
  typeUrl: MsgCancelBinaryOptionsOrder.typeUrl,
  encoders: toEncoders(MsgCancelBinaryOptionsOrder),
  converters: toConverters(MsgCancelBinaryOptionsOrder)
});
export const createBatchCancelBinaryOptionsOrders = (clientResolver?: SigningClientResolver) => buildTx<MsgBatchCancelBinaryOptionsOrders>({
  clientResolver,
  typeUrl: MsgBatchCancelBinaryOptionsOrders.typeUrl,
  encoders: toEncoders(MsgBatchCancelBinaryOptionsOrders),
  converters: toConverters(MsgBatchCancelBinaryOptionsOrders)
});
export const createSubaccountTransfer = (clientResolver?: SigningClientResolver) => buildTx<MsgSubaccountTransfer>({
  clientResolver,
  typeUrl: MsgSubaccountTransfer.typeUrl,
  encoders: toEncoders(MsgSubaccountTransfer),
  converters: toConverters(MsgSubaccountTransfer)
});
export const createExternalTransfer = (clientResolver?: SigningClientResolver) => buildTx<MsgExternalTransfer>({
  clientResolver,
  typeUrl: MsgExternalTransfer.typeUrl,
  encoders: toEncoders(MsgExternalTransfer),
  converters: toConverters(MsgExternalTransfer)
});
export const createLiquidatePosition = (clientResolver?: SigningClientResolver) => buildTx<MsgLiquidatePosition>({
  clientResolver,
  typeUrl: MsgLiquidatePosition.typeUrl,
  encoders: toEncoders(MsgLiquidatePosition),
  converters: toConverters(MsgLiquidatePosition)
});
export const createEmergencySettleMarket = (clientResolver?: SigningClientResolver) => buildTx<MsgEmergencySettleMarket>({
  clientResolver,
  typeUrl: MsgEmergencySettleMarket.typeUrl,
  encoders: toEncoders(MsgEmergencySettleMarket),
  converters: toConverters(MsgEmergencySettleMarket)
});
export const createIncreasePositionMargin = (clientResolver?: SigningClientResolver) => buildTx<MsgIncreasePositionMargin>({
  clientResolver,
  typeUrl: MsgIncreasePositionMargin.typeUrl,
  encoders: toEncoders(MsgIncreasePositionMargin),
  converters: toConverters(MsgIncreasePositionMargin)
});
export const createDecreasePositionMargin = (clientResolver?: SigningClientResolver) => buildTx<MsgDecreasePositionMargin>({
  clientResolver,
  typeUrl: MsgDecreasePositionMargin.typeUrl,
  encoders: toEncoders(MsgDecreasePositionMargin),
  converters: toConverters(MsgDecreasePositionMargin)
});
export const createRewardsOptOut = (clientResolver?: SigningClientResolver) => buildTx<MsgRewardsOptOut>({
  clientResolver,
  typeUrl: MsgRewardsOptOut.typeUrl,
  encoders: toEncoders(MsgRewardsOptOut),
  converters: toConverters(MsgRewardsOptOut)
});
export const createAdminUpdateBinaryOptionsMarket = (clientResolver?: SigningClientResolver) => buildTx<MsgAdminUpdateBinaryOptionsMarket>({
  clientResolver,
  typeUrl: MsgAdminUpdateBinaryOptionsMarket.typeUrl,
  encoders: toEncoders(MsgAdminUpdateBinaryOptionsMarket),
  converters: toConverters(MsgAdminUpdateBinaryOptionsMarket)
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams)
});
export const createUpdateSpotMarket = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateSpotMarket>({
  clientResolver,
  typeUrl: MsgUpdateSpotMarket.typeUrl,
  encoders: toEncoders(MsgUpdateSpotMarket),
  converters: toConverters(MsgUpdateSpotMarket)
});
export const createUpdateDerivativeMarket = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateDerivativeMarket>({
  clientResolver,
  typeUrl: MsgUpdateDerivativeMarket.typeUrl,
  encoders: toEncoders(MsgUpdateDerivativeMarket),
  converters: toConverters(MsgUpdateDerivativeMarket)
});
export const createAuthorizeStakeGrants = (clientResolver?: SigningClientResolver) => buildTx<MsgAuthorizeStakeGrants>({
  clientResolver,
  typeUrl: MsgAuthorizeStakeGrants.typeUrl,
  encoders: toEncoders(MsgAuthorizeStakeGrants),
  converters: toConverters(MsgAuthorizeStakeGrants)
});
export const createActivateStakeGrant = (clientResolver?: SigningClientResolver) => buildTx<MsgActivateStakeGrant>({
  clientResolver,
  typeUrl: MsgActivateStakeGrant.typeUrl,
  encoders: toEncoders(MsgActivateStakeGrant),
  converters: toConverters(MsgActivateStakeGrant)
});