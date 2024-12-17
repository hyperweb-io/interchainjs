import { MsgDeposit, MsgWithdraw, MsgInstantSpotMarketLaunch, MsgInstantPerpetualMarketLaunch, MsgInstantExpiryFuturesMarketLaunch, MsgCreateSpotLimitOrder, MsgBatchCreateSpotLimitOrders, MsgCreateSpotMarketOrder, MsgCancelSpotOrder, MsgBatchCancelSpotOrders, MsgBatchUpdateOrders, MsgPrivilegedExecuteContract, MsgCreateDerivativeLimitOrder, MsgBatchCreateDerivativeLimitOrders, MsgCreateDerivativeMarketOrder, MsgCancelDerivativeOrder, MsgBatchCancelDerivativeOrders, MsgInstantBinaryOptionsMarketLaunch, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsMarketOrder, MsgCancelBinaryOptionsOrder, MsgBatchCancelBinaryOptionsOrders, MsgSubaccountTransfer, MsgExternalTransfer, MsgLiquidatePosition, MsgEmergencySettleMarket, MsgIncreasePositionMargin, MsgDecreasePositionMargin, MsgRewardsOptOut, MsgAdminUpdateBinaryOptionsMarket, MsgUpdateParams, MsgUpdateSpotMarket, MsgUpdateDerivativeMarket, MsgAuthorizeStakeGrants, MsgActivateStakeGrant } from "./tx";
export const AminoConverter = {
  "/injective.exchange.v1beta1.MsgDeposit": {
    aminoType: "exchange/MsgDeposit",
    toAmino: MsgDeposit.toAmino,
    fromAmino: MsgDeposit.fromAmino
  },
  "/injective.exchange.v1beta1.MsgWithdraw": {
    aminoType: "exchange/MsgWithdraw",
    toAmino: MsgWithdraw.toAmino,
    fromAmino: MsgWithdraw.fromAmino
  },
  "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch": {
    aminoType: "exchange/MsgInstantSpotMarketLaunch",
    toAmino: MsgInstantSpotMarketLaunch.toAmino,
    fromAmino: MsgInstantSpotMarketLaunch.fromAmino
  },
  "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch": {
    aminoType: "exchange/MsgInstantPerpetualMarketLaunch",
    toAmino: MsgInstantPerpetualMarketLaunch.toAmino,
    fromAmino: MsgInstantPerpetualMarketLaunch.fromAmino
  },
  "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch": {
    aminoType: "exchange/MsgInstantExpiryFuturesMarketLaunch",
    toAmino: MsgInstantExpiryFuturesMarketLaunch.toAmino,
    fromAmino: MsgInstantExpiryFuturesMarketLaunch.fromAmino
  },
  "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder": {
    aminoType: "exchange/MsgCreateSpotLimitOrder",
    toAmino: MsgCreateSpotLimitOrder.toAmino,
    fromAmino: MsgCreateSpotLimitOrder.fromAmino
  },
  "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders": {
    aminoType: "exchange/MsgBatchCreateSpotLimitOrders",
    toAmino: MsgBatchCreateSpotLimitOrders.toAmino,
    fromAmino: MsgBatchCreateSpotLimitOrders.fromAmino
  },
  "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder": {
    aminoType: "exchange/MsgCreateSpotMarketOrder",
    toAmino: MsgCreateSpotMarketOrder.toAmino,
    fromAmino: MsgCreateSpotMarketOrder.fromAmino
  },
  "/injective.exchange.v1beta1.MsgCancelSpotOrder": {
    aminoType: "exchange/MsgCancelSpotOrder",
    toAmino: MsgCancelSpotOrder.toAmino,
    fromAmino: MsgCancelSpotOrder.fromAmino
  },
  "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders": {
    aminoType: "exchange/MsgBatchCancelSpotOrders",
    toAmino: MsgBatchCancelSpotOrders.toAmino,
    fromAmino: MsgBatchCancelSpotOrders.fromAmino
  },
  "/injective.exchange.v1beta1.MsgBatchUpdateOrders": {
    aminoType: "exchange/MsgBatchUpdateOrders",
    toAmino: MsgBatchUpdateOrders.toAmino,
    fromAmino: MsgBatchUpdateOrders.fromAmino
  },
  "/injective.exchange.v1beta1.MsgPrivilegedExecuteContract": {
    aminoType: "exchange/MsgPrivilegedExecuteContract",
    toAmino: MsgPrivilegedExecuteContract.toAmino,
    fromAmino: MsgPrivilegedExecuteContract.fromAmino
  },
  "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder": {
    aminoType: "exchange/MsgCreateDerivativeLimitOrder",
    toAmino: MsgCreateDerivativeLimitOrder.toAmino,
    fromAmino: MsgCreateDerivativeLimitOrder.fromAmino
  },
  "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders": {
    aminoType: "exchange/MsgBatchCreateDerivativeLimitOrders",
    toAmino: MsgBatchCreateDerivativeLimitOrders.toAmino,
    fromAmino: MsgBatchCreateDerivativeLimitOrders.fromAmino
  },
  "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder": {
    aminoType: "exchange/MsgCreateDerivativeMarketOrder",
    toAmino: MsgCreateDerivativeMarketOrder.toAmino,
    fromAmino: MsgCreateDerivativeMarketOrder.fromAmino
  },
  "/injective.exchange.v1beta1.MsgCancelDerivativeOrder": {
    aminoType: "exchange/MsgCancelDerivativeOrder",
    toAmino: MsgCancelDerivativeOrder.toAmino,
    fromAmino: MsgCancelDerivativeOrder.fromAmino
  },
  "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders": {
    aminoType: "exchange/MsgBatchCancelDerivativeOrders",
    toAmino: MsgBatchCancelDerivativeOrders.toAmino,
    fromAmino: MsgBatchCancelDerivativeOrders.fromAmino
  },
  "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch": {
    aminoType: "exchange/MsgInstantBinaryOptionsMarketLaunch",
    toAmino: MsgInstantBinaryOptionsMarketLaunch.toAmino,
    fromAmino: MsgInstantBinaryOptionsMarketLaunch.fromAmino
  },
  "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder": {
    aminoType: "exchange/MsgCreateBinaryOptionsLimitOrder",
    toAmino: MsgCreateBinaryOptionsLimitOrder.toAmino,
    fromAmino: MsgCreateBinaryOptionsLimitOrder.fromAmino
  },
  "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder": {
    aminoType: "exchange/MsgCreateBinaryOptionsMarketOrder",
    toAmino: MsgCreateBinaryOptionsMarketOrder.toAmino,
    fromAmino: MsgCreateBinaryOptionsMarketOrder.fromAmino
  },
  "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder": {
    aminoType: "exchange/MsgCancelBinaryOptionsOrder",
    toAmino: MsgCancelBinaryOptionsOrder.toAmino,
    fromAmino: MsgCancelBinaryOptionsOrder.fromAmino
  },
  "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders": {
    aminoType: "exchange/MsgBatchCancelBinaryOptionsOrders",
    toAmino: MsgBatchCancelBinaryOptionsOrders.toAmino,
    fromAmino: MsgBatchCancelBinaryOptionsOrders.fromAmino
  },
  "/injective.exchange.v1beta1.MsgSubaccountTransfer": {
    aminoType: "exchange/MsgSubaccountTransfer",
    toAmino: MsgSubaccountTransfer.toAmino,
    fromAmino: MsgSubaccountTransfer.fromAmino
  },
  "/injective.exchange.v1beta1.MsgExternalTransfer": {
    aminoType: "exchange/MsgExternalTransfer",
    toAmino: MsgExternalTransfer.toAmino,
    fromAmino: MsgExternalTransfer.fromAmino
  },
  "/injective.exchange.v1beta1.MsgLiquidatePosition": {
    aminoType: "exchange/MsgLiquidatePosition",
    toAmino: MsgLiquidatePosition.toAmino,
    fromAmino: MsgLiquidatePosition.fromAmino
  },
  "/injective.exchange.v1beta1.MsgEmergencySettleMarket": {
    aminoType: "exchange/MsgEmergencySettleMarket",
    toAmino: MsgEmergencySettleMarket.toAmino,
    fromAmino: MsgEmergencySettleMarket.fromAmino
  },
  "/injective.exchange.v1beta1.MsgIncreasePositionMargin": {
    aminoType: "exchange/MsgIncreasePositionMargin",
    toAmino: MsgIncreasePositionMargin.toAmino,
    fromAmino: MsgIncreasePositionMargin.fromAmino
  },
  "/injective.exchange.v1beta1.MsgDecreasePositionMargin": {
    aminoType: "exchange/MsgDecreasePositionMargin",
    toAmino: MsgDecreasePositionMargin.toAmino,
    fromAmino: MsgDecreasePositionMargin.fromAmino
  },
  "/injective.exchange.v1beta1.MsgRewardsOptOut": {
    aminoType: "exchange/MsgRewardsOptOut",
    toAmino: MsgRewardsOptOut.toAmino,
    fromAmino: MsgRewardsOptOut.fromAmino
  },
  "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket": {
    aminoType: "exchange/MsgAdminUpdateBinaryOptionsMarket",
    toAmino: MsgAdminUpdateBinaryOptionsMarket.toAmino,
    fromAmino: MsgAdminUpdateBinaryOptionsMarket.fromAmino
  },
  "/injective.exchange.v1beta1.MsgUpdateParams": {
    aminoType: "exchange/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/injective.exchange.v1beta1.MsgUpdateSpotMarket": {
    aminoType: "exchange/MsgUpdateSpotMarket",
    toAmino: MsgUpdateSpotMarket.toAmino,
    fromAmino: MsgUpdateSpotMarket.fromAmino
  },
  "/injective.exchange.v1beta1.MsgUpdateDerivativeMarket": {
    aminoType: "exchange/MsgUpdateDerivativeMarket",
    toAmino: MsgUpdateDerivativeMarket.toAmino,
    fromAmino: MsgUpdateDerivativeMarket.fromAmino
  },
  "/injective.exchange.v1beta1.MsgAuthorizeStakeGrants": {
    aminoType: "exchange/MsgAuthorizeStakeGrants",
    toAmino: MsgAuthorizeStakeGrants.toAmino,
    fromAmino: MsgAuthorizeStakeGrants.fromAmino
  },
  "/injective.exchange.v1beta1.MsgActivateStakeGrant": {
    aminoType: "exchange/MsgActivateStakeGrant",
    toAmino: MsgActivateStakeGrant.toAmino,
    fromAmino: MsgActivateStakeGrant.fromAmino
  }
};