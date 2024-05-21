import { MsgDeposit, MsgWithdraw, MsgInstantSpotMarketLaunch, MsgInstantPerpetualMarketLaunch, MsgInstantExpiryFuturesMarketLaunch, MsgCreateSpotLimitOrder, MsgBatchCreateSpotLimitOrders, MsgCreateSpotMarketOrder, MsgCancelSpotOrder, MsgBatchCancelSpotOrders, MsgBatchUpdateOrders, MsgPrivilegedExecuteContract, MsgCreateDerivativeLimitOrder, MsgBatchCreateDerivativeLimitOrders, MsgCreateDerivativeMarketOrder, MsgCancelDerivativeOrder, MsgBatchCancelDerivativeOrders, MsgInstantBinaryOptionsMarketLaunch, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsMarketOrder, MsgCancelBinaryOptionsOrder, MsgBatchCancelBinaryOptionsOrders, MsgSubaccountTransfer, MsgExternalTransfer, MsgLiquidatePosition, MsgEmergencySettleMarket, MsgIncreasePositionMargin, MsgRewardsOptOut, MsgAdminUpdateBinaryOptionsMarket, MsgReclaimLockedFunds, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/injective.exchange.v1beta1.MsgDeposit": {
    aminoType: "/injective.exchange.v1beta1.MsgDeposit",
    toAmino: MsgDeposit.toAmino,
    fromAmino: MsgDeposit.fromAmino
  },
  "/injective.exchange.v1beta1.MsgWithdraw": {
    aminoType: "/injective.exchange.v1beta1.MsgWithdraw",
    toAmino: MsgWithdraw.toAmino,
    fromAmino: MsgWithdraw.fromAmino
  },
  "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch": {
    aminoType: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch",
    toAmino: MsgInstantSpotMarketLaunch.toAmino,
    fromAmino: MsgInstantSpotMarketLaunch.fromAmino
  },
  "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch": {
    aminoType: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch",
    toAmino: MsgInstantPerpetualMarketLaunch.toAmino,
    fromAmino: MsgInstantPerpetualMarketLaunch.fromAmino
  },
  "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch": {
    aminoType: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch",
    toAmino: MsgInstantExpiryFuturesMarketLaunch.toAmino,
    fromAmino: MsgInstantExpiryFuturesMarketLaunch.fromAmino
  },
  "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder": {
    aminoType: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder",
    toAmino: MsgCreateSpotLimitOrder.toAmino,
    fromAmino: MsgCreateSpotLimitOrder.fromAmino
  },
  "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders": {
    aminoType: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders",
    toAmino: MsgBatchCreateSpotLimitOrders.toAmino,
    fromAmino: MsgBatchCreateSpotLimitOrders.fromAmino
  },
  "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder": {
    aminoType: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder",
    toAmino: MsgCreateSpotMarketOrder.toAmino,
    fromAmino: MsgCreateSpotMarketOrder.fromAmino
  },
  "/injective.exchange.v1beta1.MsgCancelSpotOrder": {
    aminoType: "/injective.exchange.v1beta1.MsgCancelSpotOrder",
    toAmino: MsgCancelSpotOrder.toAmino,
    fromAmino: MsgCancelSpotOrder.fromAmino
  },
  "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders": {
    aminoType: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders",
    toAmino: MsgBatchCancelSpotOrders.toAmino,
    fromAmino: MsgBatchCancelSpotOrders.fromAmino
  },
  "/injective.exchange.v1beta1.MsgBatchUpdateOrders": {
    aminoType: "/injective.exchange.v1beta1.MsgBatchUpdateOrders",
    toAmino: MsgBatchUpdateOrders.toAmino,
    fromAmino: MsgBatchUpdateOrders.fromAmino
  },
  "/injective.exchange.v1beta1.MsgPrivilegedExecuteContract": {
    aminoType: "/injective.exchange.v1beta1.MsgPrivilegedExecuteContract",
    toAmino: MsgPrivilegedExecuteContract.toAmino,
    fromAmino: MsgPrivilegedExecuteContract.fromAmino
  },
  "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder": {
    aminoType: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder",
    toAmino: MsgCreateDerivativeLimitOrder.toAmino,
    fromAmino: MsgCreateDerivativeLimitOrder.fromAmino
  },
  "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders": {
    aminoType: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders",
    toAmino: MsgBatchCreateDerivativeLimitOrders.toAmino,
    fromAmino: MsgBatchCreateDerivativeLimitOrders.fromAmino
  },
  "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder": {
    aminoType: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder",
    toAmino: MsgCreateDerivativeMarketOrder.toAmino,
    fromAmino: MsgCreateDerivativeMarketOrder.fromAmino
  },
  "/injective.exchange.v1beta1.MsgCancelDerivativeOrder": {
    aminoType: "/injective.exchange.v1beta1.MsgCancelDerivativeOrder",
    toAmino: MsgCancelDerivativeOrder.toAmino,
    fromAmino: MsgCancelDerivativeOrder.fromAmino
  },
  "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders": {
    aminoType: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders",
    toAmino: MsgBatchCancelDerivativeOrders.toAmino,
    fromAmino: MsgBatchCancelDerivativeOrders.fromAmino
  },
  "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch": {
    aminoType: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch",
    toAmino: MsgInstantBinaryOptionsMarketLaunch.toAmino,
    fromAmino: MsgInstantBinaryOptionsMarketLaunch.fromAmino
  },
  "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder": {
    aminoType: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder",
    toAmino: MsgCreateBinaryOptionsLimitOrder.toAmino,
    fromAmino: MsgCreateBinaryOptionsLimitOrder.fromAmino
  },
  "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder": {
    aminoType: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder",
    toAmino: MsgCreateBinaryOptionsMarketOrder.toAmino,
    fromAmino: MsgCreateBinaryOptionsMarketOrder.fromAmino
  },
  "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder": {
    aminoType: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder",
    toAmino: MsgCancelBinaryOptionsOrder.toAmino,
    fromAmino: MsgCancelBinaryOptionsOrder.fromAmino
  },
  "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders": {
    aminoType: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders",
    toAmino: MsgBatchCancelBinaryOptionsOrders.toAmino,
    fromAmino: MsgBatchCancelBinaryOptionsOrders.fromAmino
  },
  "/injective.exchange.v1beta1.MsgSubaccountTransfer": {
    aminoType: "/injective.exchange.v1beta1.MsgSubaccountTransfer",
    toAmino: MsgSubaccountTransfer.toAmino,
    fromAmino: MsgSubaccountTransfer.fromAmino
  },
  "/injective.exchange.v1beta1.MsgExternalTransfer": {
    aminoType: "/injective.exchange.v1beta1.MsgExternalTransfer",
    toAmino: MsgExternalTransfer.toAmino,
    fromAmino: MsgExternalTransfer.fromAmino
  },
  "/injective.exchange.v1beta1.MsgLiquidatePosition": {
    aminoType: "/injective.exchange.v1beta1.MsgLiquidatePosition",
    toAmino: MsgLiquidatePosition.toAmino,
    fromAmino: MsgLiquidatePosition.fromAmino
  },
  "/injective.exchange.v1beta1.MsgEmergencySettleMarket": {
    aminoType: "/injective.exchange.v1beta1.MsgEmergencySettleMarket",
    toAmino: MsgEmergencySettleMarket.toAmino,
    fromAmino: MsgEmergencySettleMarket.fromAmino
  },
  "/injective.exchange.v1beta1.MsgIncreasePositionMargin": {
    aminoType: "/injective.exchange.v1beta1.MsgIncreasePositionMargin",
    toAmino: MsgIncreasePositionMargin.toAmino,
    fromAmino: MsgIncreasePositionMargin.fromAmino
  },
  "/injective.exchange.v1beta1.MsgRewardsOptOut": {
    aminoType: "/injective.exchange.v1beta1.MsgRewardsOptOut",
    toAmino: MsgRewardsOptOut.toAmino,
    fromAmino: MsgRewardsOptOut.fromAmino
  },
  "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket": {
    aminoType: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket",
    toAmino: MsgAdminUpdateBinaryOptionsMarket.toAmino,
    fromAmino: MsgAdminUpdateBinaryOptionsMarket.fromAmino
  },
  "/injective.exchange.v1beta1.MsgReclaimLockedFunds": {
    aminoType: "/injective.exchange.v1beta1.MsgReclaimLockedFunds",
    toAmino: MsgReclaimLockedFunds.toAmino,
    fromAmino: MsgReclaimLockedFunds.fromAmino
  },
  "/injective.exchange.v1beta1.MsgUpdateParams": {
    aminoType: "/injective.exchange.v1beta1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};