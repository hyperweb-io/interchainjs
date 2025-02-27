import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgDeposit, MsgDepositResponse, MsgWithdraw, MsgWithdrawResponse, MsgInstantSpotMarketLaunch, MsgInstantSpotMarketLaunchResponse, MsgInstantPerpetualMarketLaunch, MsgInstantPerpetualMarketLaunchResponse, MsgInstantExpiryFuturesMarketLaunch, MsgInstantExpiryFuturesMarketLaunchResponse, MsgCreateSpotLimitOrder, MsgCreateSpotLimitOrderResponse, MsgBatchCreateSpotLimitOrders, MsgBatchCreateSpotLimitOrdersResponse, MsgCreateSpotMarketOrder, MsgCreateSpotMarketOrderResponse, MsgCancelSpotOrder, MsgCancelSpotOrderResponse, MsgBatchCancelSpotOrders, MsgBatchCancelSpotOrdersResponse, MsgBatchUpdateOrders, MsgBatchUpdateOrdersResponse, MsgPrivilegedExecuteContract, MsgPrivilegedExecuteContractResponse, MsgCreateDerivativeLimitOrder, MsgCreateDerivativeLimitOrderResponse, MsgBatchCreateDerivativeLimitOrders, MsgBatchCreateDerivativeLimitOrdersResponse, MsgCreateDerivativeMarketOrder, MsgCreateDerivativeMarketOrderResponse, MsgCancelDerivativeOrder, MsgCancelDerivativeOrderResponse, MsgBatchCancelDerivativeOrders, MsgBatchCancelDerivativeOrdersResponse, MsgInstantBinaryOptionsMarketLaunch, MsgInstantBinaryOptionsMarketLaunchResponse, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsLimitOrderResponse, MsgCreateBinaryOptionsMarketOrder, MsgCreateBinaryOptionsMarketOrderResponse, MsgCancelBinaryOptionsOrder, MsgCancelBinaryOptionsOrderResponse, MsgBatchCancelBinaryOptionsOrders, MsgBatchCancelBinaryOptionsOrdersResponse, MsgSubaccountTransfer, MsgSubaccountTransferResponse, MsgExternalTransfer, MsgExternalTransferResponse, MsgLiquidatePosition, MsgLiquidatePositionResponse, MsgEmergencySettleMarket, MsgEmergencySettleMarketResponse, MsgIncreasePositionMargin, MsgIncreasePositionMarginResponse, MsgDecreasePositionMargin, MsgDecreasePositionMarginResponse, MsgRewardsOptOut, MsgRewardsOptOutResponse, MsgAdminUpdateBinaryOptionsMarket, MsgAdminUpdateBinaryOptionsMarketResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgUpdateSpotMarket, MsgUpdateSpotMarketResponse, MsgUpdateDerivativeMarket, MsgUpdateDerivativeMarketResponse, MsgAuthorizeStakeGrants, MsgAuthorizeStakeGrantsResponse, MsgActivateStakeGrant, MsgActivateStakeGrantResponse } from "./tx";
/** Msg defines the exchange Msg service. */
export interface Msg {
  /**
   * Deposit defines a method for transferring coins from the sender's bank
   * balance into the subaccount's exchange deposits
   */
  deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  /**
   * Withdraw defines a method for withdrawing coins from a subaccount's
   * deposits to the user's bank balance
   */
  withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  /**
   * InstantSpotMarketLaunch defines method for creating a spot market by paying
   * listing fee without governance
   */
  instantSpotMarketLaunch(request: MsgInstantSpotMarketLaunch): Promise<MsgInstantSpotMarketLaunchResponse>;
  /**
   * InstantPerpetualMarketLaunch defines a method for creating a new perpetual
   * futures market by paying listing fee without governance
   */
  instantPerpetualMarketLaunch(request: MsgInstantPerpetualMarketLaunch): Promise<MsgInstantPerpetualMarketLaunchResponse>;
  /**
   * InstantExpiryFuturesMarketLaunch defines a method for creating a new expiry
   * futures market by paying listing fee without governance
   */
  instantExpiryFuturesMarketLaunch(request: MsgInstantExpiryFuturesMarketLaunch): Promise<MsgInstantExpiryFuturesMarketLaunchResponse>;
  /** CreateSpotLimitOrder defines a method for creating a new spot limit order. */
  createSpotLimitOrder(request: MsgCreateSpotLimitOrder): Promise<MsgCreateSpotLimitOrderResponse>;
  /**
   * BatchCreateSpotLimitOrder defines a method for creating a new batch of spot
   * limit orders.
   */
  batchCreateSpotLimitOrders(request: MsgBatchCreateSpotLimitOrders): Promise<MsgBatchCreateSpotLimitOrdersResponse>;
  /**
   * CreateSpotMarketOrder defines a method for creating a new spot market
   * order.
   */
  createSpotMarketOrder(request: MsgCreateSpotMarketOrder): Promise<MsgCreateSpotMarketOrderResponse>;
  /** MsgCancelSpotOrder defines a method for cancelling a spot order. */
  cancelSpotOrder(request: MsgCancelSpotOrder): Promise<MsgCancelSpotOrderResponse>;
  /**
   * BatchCancelSpotOrders defines a method for cancelling a batch of spot
   * orders in a given market.
   */
  batchCancelSpotOrders(request: MsgBatchCancelSpotOrders): Promise<MsgBatchCancelSpotOrdersResponse>;
  /** BatchUpdateOrders defines a method for updating a batch of orders. */
  batchUpdateOrders(request: MsgBatchUpdateOrders): Promise<MsgBatchUpdateOrdersResponse>;
  /**
   * PrivilegedExecuteContract defines a method for executing a Cosmwasm
   * contract from the exchange module with privileged capabilities.
   */
  privilegedExecuteContract(request: MsgPrivilegedExecuteContract): Promise<MsgPrivilegedExecuteContractResponse>;
  /**
   * CreateDerivativeLimitOrder defines a method for creating a new derivative
   * limit order.
   */
  createDerivativeLimitOrder(request: MsgCreateDerivativeLimitOrder): Promise<MsgCreateDerivativeLimitOrderResponse>;
  /**
   * BatchCreateDerivativeLimitOrders defines a method for creating a new batch
   * of derivative limit orders.
   */
  batchCreateDerivativeLimitOrders(request: MsgBatchCreateDerivativeLimitOrders): Promise<MsgBatchCreateDerivativeLimitOrdersResponse>;
  /**
   * MsgCreateDerivativeLimitOrder defines a method for creating a new
   * derivative market order.
   */
  createDerivativeMarketOrder(request: MsgCreateDerivativeMarketOrder): Promise<MsgCreateDerivativeMarketOrderResponse>;
  /**
   * MsgCancelDerivativeOrder defines a method for cancelling a derivative
   * order.
   */
  cancelDerivativeOrder(request: MsgCancelDerivativeOrder): Promise<MsgCancelDerivativeOrderResponse>;
  /**
   * MsgBatchCancelDerivativeOrders defines a method for cancelling a batch of
   * derivative limit orders.
   */
  batchCancelDerivativeOrders(request: MsgBatchCancelDerivativeOrders): Promise<MsgBatchCancelDerivativeOrdersResponse>;
  /**
   * InstantBinaryOptionsMarketLaunch defines method for creating a binary
   * options market by paying listing fee without governance
   */
  instantBinaryOptionsMarketLaunch(request: MsgInstantBinaryOptionsMarketLaunch): Promise<MsgInstantBinaryOptionsMarketLaunchResponse>;
  /**
   * CreateBinaryOptionsLimitOrder defines a method for creating a new binary
   * options limit order.
   */
  createBinaryOptionsLimitOrder(request: MsgCreateBinaryOptionsLimitOrder): Promise<MsgCreateBinaryOptionsLimitOrderResponse>;
  /**
   * CreateBinaryOptionsMarketOrder defines a method for creating a new binary
   * options market order.
   */
  createBinaryOptionsMarketOrder(request: MsgCreateBinaryOptionsMarketOrder): Promise<MsgCreateBinaryOptionsMarketOrderResponse>;
  /**
   * MsgCancelBinaryOptionsOrder defines a method for cancelling a binary
   * options order.
   */
  cancelBinaryOptionsOrder(request: MsgCancelBinaryOptionsOrder): Promise<MsgCancelBinaryOptionsOrderResponse>;
  /**
   * BatchCancelBinaryOptionsOrders defines a method for cancelling a batch of
   * binary options limit orders.
   */
  batchCancelBinaryOptionsOrders(request: MsgBatchCancelBinaryOptionsOrders): Promise<MsgBatchCancelBinaryOptionsOrdersResponse>;
  /** SubaccountTransfer defines a method for transfer between subaccounts */
  subaccountTransfer(request: MsgSubaccountTransfer): Promise<MsgSubaccountTransferResponse>;
  /** ExternalTransfer defines a method for transfer between external accounts */
  externalTransfer(request: MsgExternalTransfer): Promise<MsgExternalTransferResponse>;
  /** LiquidatePosition defines a method for liquidating a position */
  liquidatePosition(request: MsgLiquidatePosition): Promise<MsgLiquidatePositionResponse>;
  /** EmergencySettleMarket defines a method for emergency settling a market */
  emergencySettleMarket(request: MsgEmergencySettleMarket): Promise<MsgEmergencySettleMarketResponse>;
  /** IncreasePositionMargin defines a method for increasing margin of a position */
  increasePositionMargin(request: MsgIncreasePositionMargin): Promise<MsgIncreasePositionMarginResponse>;
  /** DecreasePositionMargin defines a method for decreasing margin of a position */
  decreasePositionMargin(request: MsgDecreasePositionMargin): Promise<MsgDecreasePositionMarginResponse>;
  /** RewardsOptOut defines a method for opting out of rewards */
  rewardsOptOut(request: MsgRewardsOptOut): Promise<MsgRewardsOptOutResponse>;
  /**
   * AdminUpdateBinaryOptionsMarket defines method for updating a binary options
   * market by admin
   */
  adminUpdateBinaryOptionsMarket(request: MsgAdminUpdateBinaryOptionsMarket): Promise<MsgAdminUpdateBinaryOptionsMarketResponse>;
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** UpdateSpotMarket modifies certain spot market fields (admin only) */
  updateSpotMarket(request: MsgUpdateSpotMarket): Promise<MsgUpdateSpotMarketResponse>;
  /**
   * UpdateDerivativeMarket modifies certain derivative market fields (admin
   * only)
   */
  updateDerivativeMarket(request: MsgUpdateDerivativeMarket): Promise<MsgUpdateDerivativeMarketResponse>;
  authorizeStakeGrants(request: MsgAuthorizeStakeGrants): Promise<MsgAuthorizeStakeGrantsResponse>;
  activateStakeGrant(request: MsgActivateStakeGrant): Promise<MsgActivateStakeGrantResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Deposit defines a method for transferring coins from the sender's bank
   balance into the subaccount's exchange deposits */
  deposit = async (request: MsgDeposit): Promise<MsgDepositResponse> => {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new BinaryReader(data)));
  };
  /* Withdraw defines a method for withdrawing coins from a subaccount's
   deposits to the user's bank balance */
  withdraw = async (request: MsgWithdraw): Promise<MsgWithdrawResponse> => {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "Withdraw", data);
    return promise.then(data => MsgWithdrawResponse.decode(new BinaryReader(data)));
  };
  /* InstantSpotMarketLaunch defines method for creating a spot market by paying
   listing fee without governance */
  instantSpotMarketLaunch = async (request: MsgInstantSpotMarketLaunch): Promise<MsgInstantSpotMarketLaunchResponse> => {
    const data = MsgInstantSpotMarketLaunch.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "InstantSpotMarketLaunch", data);
    return promise.then(data => MsgInstantSpotMarketLaunchResponse.decode(new BinaryReader(data)));
  };
  /* InstantPerpetualMarketLaunch defines a method for creating a new perpetual
   futures market by paying listing fee without governance */
  instantPerpetualMarketLaunch = async (request: MsgInstantPerpetualMarketLaunch): Promise<MsgInstantPerpetualMarketLaunchResponse> => {
    const data = MsgInstantPerpetualMarketLaunch.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "InstantPerpetualMarketLaunch", data);
    return promise.then(data => MsgInstantPerpetualMarketLaunchResponse.decode(new BinaryReader(data)));
  };
  /* InstantExpiryFuturesMarketLaunch defines a method for creating a new expiry
   futures market by paying listing fee without governance */
  instantExpiryFuturesMarketLaunch = async (request: MsgInstantExpiryFuturesMarketLaunch): Promise<MsgInstantExpiryFuturesMarketLaunchResponse> => {
    const data = MsgInstantExpiryFuturesMarketLaunch.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "InstantExpiryFuturesMarketLaunch", data);
    return promise.then(data => MsgInstantExpiryFuturesMarketLaunchResponse.decode(new BinaryReader(data)));
  };
  /* CreateSpotLimitOrder defines a method for creating a new spot limit order. */
  createSpotLimitOrder = async (request: MsgCreateSpotLimitOrder): Promise<MsgCreateSpotLimitOrderResponse> => {
    const data = MsgCreateSpotLimitOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateSpotLimitOrder", data);
    return promise.then(data => MsgCreateSpotLimitOrderResponse.decode(new BinaryReader(data)));
  };
  /* BatchCreateSpotLimitOrder defines a method for creating a new batch of spot
   limit orders. */
  batchCreateSpotLimitOrders = async (request: MsgBatchCreateSpotLimitOrders): Promise<MsgBatchCreateSpotLimitOrdersResponse> => {
    const data = MsgBatchCreateSpotLimitOrders.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchCreateSpotLimitOrders", data);
    return promise.then(data => MsgBatchCreateSpotLimitOrdersResponse.decode(new BinaryReader(data)));
  };
  /* CreateSpotMarketOrder defines a method for creating a new spot market
   order. */
  createSpotMarketOrder = async (request: MsgCreateSpotMarketOrder): Promise<MsgCreateSpotMarketOrderResponse> => {
    const data = MsgCreateSpotMarketOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateSpotMarketOrder", data);
    return promise.then(data => MsgCreateSpotMarketOrderResponse.decode(new BinaryReader(data)));
  };
  /* MsgCancelSpotOrder defines a method for cancelling a spot order. */
  cancelSpotOrder = async (request: MsgCancelSpotOrder): Promise<MsgCancelSpotOrderResponse> => {
    const data = MsgCancelSpotOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CancelSpotOrder", data);
    return promise.then(data => MsgCancelSpotOrderResponse.decode(new BinaryReader(data)));
  };
  /* BatchCancelSpotOrders defines a method for cancelling a batch of spot
   orders in a given market. */
  batchCancelSpotOrders = async (request: MsgBatchCancelSpotOrders): Promise<MsgBatchCancelSpotOrdersResponse> => {
    const data = MsgBatchCancelSpotOrders.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchCancelSpotOrders", data);
    return promise.then(data => MsgBatchCancelSpotOrdersResponse.decode(new BinaryReader(data)));
  };
  /* BatchUpdateOrders defines a method for updating a batch of orders. */
  batchUpdateOrders = async (request: MsgBatchUpdateOrders): Promise<MsgBatchUpdateOrdersResponse> => {
    const data = MsgBatchUpdateOrders.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchUpdateOrders", data);
    return promise.then(data => MsgBatchUpdateOrdersResponse.decode(new BinaryReader(data)));
  };
  /* PrivilegedExecuteContract defines a method for executing a Cosmwasm
   contract from the exchange module with privileged capabilities. */
  privilegedExecuteContract = async (request: MsgPrivilegedExecuteContract): Promise<MsgPrivilegedExecuteContractResponse> => {
    const data = MsgPrivilegedExecuteContract.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "PrivilegedExecuteContract", data);
    return promise.then(data => MsgPrivilegedExecuteContractResponse.decode(new BinaryReader(data)));
  };
  /* CreateDerivativeLimitOrder defines a method for creating a new derivative
   limit order. */
  createDerivativeLimitOrder = async (request: MsgCreateDerivativeLimitOrder): Promise<MsgCreateDerivativeLimitOrderResponse> => {
    const data = MsgCreateDerivativeLimitOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateDerivativeLimitOrder", data);
    return promise.then(data => MsgCreateDerivativeLimitOrderResponse.decode(new BinaryReader(data)));
  };
  /* BatchCreateDerivativeLimitOrders defines a method for creating a new batch
   of derivative limit orders. */
  batchCreateDerivativeLimitOrders = async (request: MsgBatchCreateDerivativeLimitOrders): Promise<MsgBatchCreateDerivativeLimitOrdersResponse> => {
    const data = MsgBatchCreateDerivativeLimitOrders.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchCreateDerivativeLimitOrders", data);
    return promise.then(data => MsgBatchCreateDerivativeLimitOrdersResponse.decode(new BinaryReader(data)));
  };
  /* MsgCreateDerivativeLimitOrder defines a method for creating a new
   derivative market order. */
  createDerivativeMarketOrder = async (request: MsgCreateDerivativeMarketOrder): Promise<MsgCreateDerivativeMarketOrderResponse> => {
    const data = MsgCreateDerivativeMarketOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateDerivativeMarketOrder", data);
    return promise.then(data => MsgCreateDerivativeMarketOrderResponse.decode(new BinaryReader(data)));
  };
  /* MsgCancelDerivativeOrder defines a method for cancelling a derivative
   order. */
  cancelDerivativeOrder = async (request: MsgCancelDerivativeOrder): Promise<MsgCancelDerivativeOrderResponse> => {
    const data = MsgCancelDerivativeOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CancelDerivativeOrder", data);
    return promise.then(data => MsgCancelDerivativeOrderResponse.decode(new BinaryReader(data)));
  };
  /* MsgBatchCancelDerivativeOrders defines a method for cancelling a batch of
   derivative limit orders. */
  batchCancelDerivativeOrders = async (request: MsgBatchCancelDerivativeOrders): Promise<MsgBatchCancelDerivativeOrdersResponse> => {
    const data = MsgBatchCancelDerivativeOrders.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchCancelDerivativeOrders", data);
    return promise.then(data => MsgBatchCancelDerivativeOrdersResponse.decode(new BinaryReader(data)));
  };
  /* InstantBinaryOptionsMarketLaunch defines method for creating a binary
   options market by paying listing fee without governance */
  instantBinaryOptionsMarketLaunch = async (request: MsgInstantBinaryOptionsMarketLaunch): Promise<MsgInstantBinaryOptionsMarketLaunchResponse> => {
    const data = MsgInstantBinaryOptionsMarketLaunch.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "InstantBinaryOptionsMarketLaunch", data);
    return promise.then(data => MsgInstantBinaryOptionsMarketLaunchResponse.decode(new BinaryReader(data)));
  };
  /* CreateBinaryOptionsLimitOrder defines a method for creating a new binary
   options limit order. */
  createBinaryOptionsLimitOrder = async (request: MsgCreateBinaryOptionsLimitOrder): Promise<MsgCreateBinaryOptionsLimitOrderResponse> => {
    const data = MsgCreateBinaryOptionsLimitOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateBinaryOptionsLimitOrder", data);
    return promise.then(data => MsgCreateBinaryOptionsLimitOrderResponse.decode(new BinaryReader(data)));
  };
  /* CreateBinaryOptionsMarketOrder defines a method for creating a new binary
   options market order. */
  createBinaryOptionsMarketOrder = async (request: MsgCreateBinaryOptionsMarketOrder): Promise<MsgCreateBinaryOptionsMarketOrderResponse> => {
    const data = MsgCreateBinaryOptionsMarketOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateBinaryOptionsMarketOrder", data);
    return promise.then(data => MsgCreateBinaryOptionsMarketOrderResponse.decode(new BinaryReader(data)));
  };
  /* MsgCancelBinaryOptionsOrder defines a method for cancelling a binary
   options order. */
  cancelBinaryOptionsOrder = async (request: MsgCancelBinaryOptionsOrder): Promise<MsgCancelBinaryOptionsOrderResponse> => {
    const data = MsgCancelBinaryOptionsOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CancelBinaryOptionsOrder", data);
    return promise.then(data => MsgCancelBinaryOptionsOrderResponse.decode(new BinaryReader(data)));
  };
  /* BatchCancelBinaryOptionsOrders defines a method for cancelling a batch of
   binary options limit orders. */
  batchCancelBinaryOptionsOrders = async (request: MsgBatchCancelBinaryOptionsOrders): Promise<MsgBatchCancelBinaryOptionsOrdersResponse> => {
    const data = MsgBatchCancelBinaryOptionsOrders.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchCancelBinaryOptionsOrders", data);
    return promise.then(data => MsgBatchCancelBinaryOptionsOrdersResponse.decode(new BinaryReader(data)));
  };
  /* SubaccountTransfer defines a method for transfer between subaccounts */
  subaccountTransfer = async (request: MsgSubaccountTransfer): Promise<MsgSubaccountTransferResponse> => {
    const data = MsgSubaccountTransfer.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "SubaccountTransfer", data);
    return promise.then(data => MsgSubaccountTransferResponse.decode(new BinaryReader(data)));
  };
  /* ExternalTransfer defines a method for transfer between external accounts */
  externalTransfer = async (request: MsgExternalTransfer): Promise<MsgExternalTransferResponse> => {
    const data = MsgExternalTransfer.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "ExternalTransfer", data);
    return promise.then(data => MsgExternalTransferResponse.decode(new BinaryReader(data)));
  };
  /* LiquidatePosition defines a method for liquidating a position */
  liquidatePosition = async (request: MsgLiquidatePosition): Promise<MsgLiquidatePositionResponse> => {
    const data = MsgLiquidatePosition.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "LiquidatePosition", data);
    return promise.then(data => MsgLiquidatePositionResponse.decode(new BinaryReader(data)));
  };
  /* EmergencySettleMarket defines a method for emergency settling a market */
  emergencySettleMarket = async (request: MsgEmergencySettleMarket): Promise<MsgEmergencySettleMarketResponse> => {
    const data = MsgEmergencySettleMarket.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "EmergencySettleMarket", data);
    return promise.then(data => MsgEmergencySettleMarketResponse.decode(new BinaryReader(data)));
  };
  /* IncreasePositionMargin defines a method for increasing margin of a position */
  increasePositionMargin = async (request: MsgIncreasePositionMargin): Promise<MsgIncreasePositionMarginResponse> => {
    const data = MsgIncreasePositionMargin.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "IncreasePositionMargin", data);
    return promise.then(data => MsgIncreasePositionMarginResponse.decode(new BinaryReader(data)));
  };
  /* DecreasePositionMargin defines a method for decreasing margin of a position */
  decreasePositionMargin = async (request: MsgDecreasePositionMargin): Promise<MsgDecreasePositionMarginResponse> => {
    const data = MsgDecreasePositionMargin.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "DecreasePositionMargin", data);
    return promise.then(data => MsgDecreasePositionMarginResponse.decode(new BinaryReader(data)));
  };
  /* RewardsOptOut defines a method for opting out of rewards */
  rewardsOptOut = async (request: MsgRewardsOptOut): Promise<MsgRewardsOptOutResponse> => {
    const data = MsgRewardsOptOut.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "RewardsOptOut", data);
    return promise.then(data => MsgRewardsOptOutResponse.decode(new BinaryReader(data)));
  };
  /* AdminUpdateBinaryOptionsMarket defines method for updating a binary options
   market by admin */
  adminUpdateBinaryOptionsMarket = async (request: MsgAdminUpdateBinaryOptionsMarket): Promise<MsgAdminUpdateBinaryOptionsMarketResponse> => {
    const data = MsgAdminUpdateBinaryOptionsMarket.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "AdminUpdateBinaryOptionsMarket", data);
    return promise.then(data => MsgAdminUpdateBinaryOptionsMarketResponse.decode(new BinaryReader(data)));
  };
  /* UpdateParams */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* UpdateSpotMarket modifies certain spot market fields (admin only) */
  updateSpotMarket = async (request: MsgUpdateSpotMarket): Promise<MsgUpdateSpotMarketResponse> => {
    const data = MsgUpdateSpotMarket.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "UpdateSpotMarket", data);
    return promise.then(data => MsgUpdateSpotMarketResponse.decode(new BinaryReader(data)));
  };
  /* UpdateDerivativeMarket modifies certain derivative market fields (admin
   only) */
  updateDerivativeMarket = async (request: MsgUpdateDerivativeMarket): Promise<MsgUpdateDerivativeMarketResponse> => {
    const data = MsgUpdateDerivativeMarket.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "UpdateDerivativeMarket", data);
    return promise.then(data => MsgUpdateDerivativeMarketResponse.decode(new BinaryReader(data)));
  };
  /* AuthorizeStakeGrants */
  authorizeStakeGrants = async (request: MsgAuthorizeStakeGrants): Promise<MsgAuthorizeStakeGrantsResponse> => {
    const data = MsgAuthorizeStakeGrants.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "AuthorizeStakeGrants", data);
    return promise.then(data => MsgAuthorizeStakeGrantsResponse.decode(new BinaryReader(data)));
  };
  /* ActivateStakeGrant */
  activateStakeGrant = async (request: MsgActivateStakeGrant): Promise<MsgActivateStakeGrantResponse> => {
    const data = MsgActivateStakeGrant.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "ActivateStakeGrant", data);
    return promise.then(data => MsgActivateStakeGrantResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};