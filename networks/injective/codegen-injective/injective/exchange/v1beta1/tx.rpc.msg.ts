import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { MsgDeposit, MsgWithdraw, MsgInstantSpotMarketLaunch, MsgInstantPerpetualMarketLaunch, MsgInstantExpiryFuturesMarketLaunch, MsgCreateSpotLimitOrder, MsgBatchCreateSpotLimitOrders, MsgCreateSpotMarketOrder, MsgCancelSpotOrder, MsgBatchCancelSpotOrders, MsgBatchUpdateOrders, MsgPrivilegedExecuteContract, MsgCreateDerivativeLimitOrder, MsgBatchCreateDerivativeLimitOrders, MsgCreateDerivativeMarketOrder, MsgCancelDerivativeOrder, MsgBatchCancelDerivativeOrders, MsgInstantBinaryOptionsMarketLaunch, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsMarketOrder, MsgCancelBinaryOptionsOrder, MsgBatchCancelBinaryOptionsOrders, MsgSubaccountTransfer, MsgExternalTransfer, MsgLiquidatePosition, MsgEmergencySettleMarket, MsgIncreasePositionMargin, MsgRewardsOptOut, MsgAdminUpdateBinaryOptionsMarket, MsgReclaimLockedFunds, MsgUpdateParams } from "./tx";
/** Msg defines the exchange Msg service. */
export interface Msg {
  /**
   * Deposit defines a method for transferring coins from the sender's bank
   * balance into the subaccount's exchange deposits
   */
  deposit(signerAddress: string, message: MsgDeposit, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * Withdraw defines a method for withdrawing coins from a subaccount's
   * deposits to the user's bank balance
   */
  withdraw(signerAddress: string, message: MsgWithdraw, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * InstantSpotMarketLaunch defines method for creating a spot market by paying
   * listing fee without governance
   */
  instantSpotMarketLaunch(signerAddress: string, message: MsgInstantSpotMarketLaunch, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * InstantPerpetualMarketLaunch defines a method for creating a new perpetual
   * futures market by paying listing fee without governance
   */
  instantPerpetualMarketLaunch(signerAddress: string, message: MsgInstantPerpetualMarketLaunch, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * InstantExpiryFuturesMarketLaunch defines a method for creating a new expiry
   * futures market by paying listing fee without governance
   */
  instantExpiryFuturesMarketLaunch(signerAddress: string, message: MsgInstantExpiryFuturesMarketLaunch, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** CreateSpotLimitOrder defines a method for creating a new spot limit order. */
  createSpotLimitOrder(signerAddress: string, message: MsgCreateSpotLimitOrder, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * BatchCreateSpotLimitOrder defines a method for creating a new batch of spot
   * limit orders.
   */
  batchCreateSpotLimitOrders(signerAddress: string, message: MsgBatchCreateSpotLimitOrders, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * CreateSpotMarketOrder defines a method for creating a new spot market
   * order.
   */
  createSpotMarketOrder(signerAddress: string, message: MsgCreateSpotMarketOrder, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** MsgCancelSpotOrder defines a method for cancelling a spot order. */
  cancelSpotOrder(signerAddress: string, message: MsgCancelSpotOrder, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * BatchCancelSpotOrders defines a method for cancelling a batch of spot
   * orders in a given market.
   */
  batchCancelSpotOrders(signerAddress: string, message: MsgBatchCancelSpotOrders, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** BatchUpdateOrders defines a method for updating a batch of orders. */
  batchUpdateOrders(signerAddress: string, message: MsgBatchUpdateOrders, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * PrivilegedExecuteContract defines a method for executing a Cosmwasm
   * contract from the exchange module with privileged capabilities.
   */
  privilegedExecuteContract(signerAddress: string, message: MsgPrivilegedExecuteContract, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * CreateDerivativeLimitOrder defines a method for creating a new derivative
   * limit order.
   */
  createDerivativeLimitOrder(signerAddress: string, message: MsgCreateDerivativeLimitOrder, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * BatchCreateDerivativeLimitOrders defines a method for creating a new batch
   * of derivative limit orders.
   */
  batchCreateDerivativeLimitOrders(signerAddress: string, message: MsgBatchCreateDerivativeLimitOrders, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * MsgCreateDerivativeLimitOrder defines a method for creating a new
   * derivative market order.
   */
  createDerivativeMarketOrder(signerAddress: string, message: MsgCreateDerivativeMarketOrder, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * MsgCancelDerivativeOrder defines a method for cancelling a derivative
   * order.
   */
  cancelDerivativeOrder(signerAddress: string, message: MsgCancelDerivativeOrder, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * MsgBatchCancelDerivativeOrders defines a method for cancelling a batch of
   * derivative limit orders.
   */
  batchCancelDerivativeOrders(signerAddress: string, message: MsgBatchCancelDerivativeOrders, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * InstantBinaryOptionsMarketLaunch defines method for creating a binary
   * options market by paying listing fee without governance
   */
  instantBinaryOptionsMarketLaunch(signerAddress: string, message: MsgInstantBinaryOptionsMarketLaunch, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * CreateBinaryOptionsLimitOrder defines a method for creating a new binary
   * options limit order.
   */
  createBinaryOptionsLimitOrder(signerAddress: string, message: MsgCreateBinaryOptionsLimitOrder, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * CreateBinaryOptionsMarketOrder defines a method for creating a new binary
   * options market order.
   */
  createBinaryOptionsMarketOrder(signerAddress: string, message: MsgCreateBinaryOptionsMarketOrder, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * MsgCancelBinaryOptionsOrder defines a method for cancelling a binary
   * options order.
   */
  cancelBinaryOptionsOrder(signerAddress: string, message: MsgCancelBinaryOptionsOrder, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * BatchCancelBinaryOptionsOrders defines a method for cancelling a batch of
   * binary options limit orders.
   */
  batchCancelBinaryOptionsOrders(signerAddress: string, message: MsgBatchCancelBinaryOptionsOrders, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** SubaccountTransfer defines a method for transfer between subaccounts */
  subaccountTransfer(signerAddress: string, message: MsgSubaccountTransfer, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** ExternalTransfer defines a method for transfer between external accounts */
  externalTransfer(signerAddress: string, message: MsgExternalTransfer, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** LiquidatePosition defines a method for liquidating a position */
  liquidatePosition(signerAddress: string, message: MsgLiquidatePosition, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** EmergencySettleMarket defines a method for emergency settling a market */
  emergencySettleMarket(signerAddress: string, message: MsgEmergencySettleMarket, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** IncreasePositionMargin defines a method for increasing margin of a position */
  increasePositionMargin(signerAddress: string, message: MsgIncreasePositionMargin, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** RewardsOptOut defines a method for opting out of rewards */
  rewardsOptOut(signerAddress: string, message: MsgRewardsOptOut, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * AdminUpdateBinaryOptionsMarket defines method for updating a binary options
   * market by admin
   */
  adminUpdateBinaryOptionsMarket(signerAddress: string, message: MsgAdminUpdateBinaryOptionsMarket, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  reclaimLockedFunds(signerAddress: string, message: MsgReclaimLockedFunds, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  updateParams(signerAddress: string, message: MsgUpdateParams, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Deposit defines a method for transferring coins from the sender's bank
   balance into the subaccount's exchange deposits */
  deposit = async (signerAddress: string, message: MsgDeposit, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgDeposit.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* Withdraw defines a method for withdrawing coins from a subaccount's
   deposits to the user's bank balance */
  withdraw = async (signerAddress: string, message: MsgWithdraw, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgWithdraw.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* InstantSpotMarketLaunch defines method for creating a spot market by paying
   listing fee without governance */
  instantSpotMarketLaunch = async (signerAddress: string, message: MsgInstantSpotMarketLaunch, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgInstantSpotMarketLaunch.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* InstantPerpetualMarketLaunch defines a method for creating a new perpetual
   futures market by paying listing fee without governance */
  instantPerpetualMarketLaunch = async (signerAddress: string, message: MsgInstantPerpetualMarketLaunch, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgInstantPerpetualMarketLaunch.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* InstantExpiryFuturesMarketLaunch defines a method for creating a new expiry
   futures market by paying listing fee without governance */
  instantExpiryFuturesMarketLaunch = async (signerAddress: string, message: MsgInstantExpiryFuturesMarketLaunch, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgInstantExpiryFuturesMarketLaunch.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* CreateSpotLimitOrder defines a method for creating a new spot limit order. */
  createSpotLimitOrder = async (signerAddress: string, message: MsgCreateSpotLimitOrder, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateSpotLimitOrder.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* BatchCreateSpotLimitOrder defines a method for creating a new batch of spot
   limit orders. */
  batchCreateSpotLimitOrders = async (signerAddress: string, message: MsgBatchCreateSpotLimitOrders, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgBatchCreateSpotLimitOrders.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* CreateSpotMarketOrder defines a method for creating a new spot market
   order. */
  createSpotMarketOrder = async (signerAddress: string, message: MsgCreateSpotMarketOrder, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateSpotMarketOrder.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* MsgCancelSpotOrder defines a method for cancelling a spot order. */
  cancelSpotOrder = async (signerAddress: string, message: MsgCancelSpotOrder, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCancelSpotOrder.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* BatchCancelSpotOrders defines a method for cancelling a batch of spot
   orders in a given market. */
  batchCancelSpotOrders = async (signerAddress: string, message: MsgBatchCancelSpotOrders, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgBatchCancelSpotOrders.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* BatchUpdateOrders defines a method for updating a batch of orders. */
  batchUpdateOrders = async (signerAddress: string, message: MsgBatchUpdateOrders, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgBatchUpdateOrders.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* PrivilegedExecuteContract defines a method for executing a Cosmwasm
   contract from the exchange module with privileged capabilities. */
  privilegedExecuteContract = async (signerAddress: string, message: MsgPrivilegedExecuteContract, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgPrivilegedExecuteContract.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* CreateDerivativeLimitOrder defines a method for creating a new derivative
   limit order. */
  createDerivativeLimitOrder = async (signerAddress: string, message: MsgCreateDerivativeLimitOrder, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateDerivativeLimitOrder.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* BatchCreateDerivativeLimitOrders defines a method for creating a new batch
   of derivative limit orders. */
  batchCreateDerivativeLimitOrders = async (signerAddress: string, message: MsgBatchCreateDerivativeLimitOrders, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgBatchCreateDerivativeLimitOrders.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* MsgCreateDerivativeLimitOrder defines a method for creating a new
   derivative market order. */
  createDerivativeMarketOrder = async (signerAddress: string, message: MsgCreateDerivativeMarketOrder, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateDerivativeMarketOrder.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* MsgCancelDerivativeOrder defines a method for cancelling a derivative
   order. */
  cancelDerivativeOrder = async (signerAddress: string, message: MsgCancelDerivativeOrder, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCancelDerivativeOrder.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* MsgBatchCancelDerivativeOrders defines a method for cancelling a batch of
   derivative limit orders. */
  batchCancelDerivativeOrders = async (signerAddress: string, message: MsgBatchCancelDerivativeOrders, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgBatchCancelDerivativeOrders.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* InstantBinaryOptionsMarketLaunch defines method for creating a binary
   options market by paying listing fee without governance */
  instantBinaryOptionsMarketLaunch = async (signerAddress: string, message: MsgInstantBinaryOptionsMarketLaunch, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgInstantBinaryOptionsMarketLaunch.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* CreateBinaryOptionsLimitOrder defines a method for creating a new binary
   options limit order. */
  createBinaryOptionsLimitOrder = async (signerAddress: string, message: MsgCreateBinaryOptionsLimitOrder, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateBinaryOptionsLimitOrder.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* CreateBinaryOptionsMarketOrder defines a method for creating a new binary
   options market order. */
  createBinaryOptionsMarketOrder = async (signerAddress: string, message: MsgCreateBinaryOptionsMarketOrder, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateBinaryOptionsMarketOrder.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* MsgCancelBinaryOptionsOrder defines a method for cancelling a binary
   options order. */
  cancelBinaryOptionsOrder = async (signerAddress: string, message: MsgCancelBinaryOptionsOrder, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCancelBinaryOptionsOrder.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* BatchCancelBinaryOptionsOrders defines a method for cancelling a batch of
   binary options limit orders. */
  batchCancelBinaryOptionsOrders = async (signerAddress: string, message: MsgBatchCancelBinaryOptionsOrders, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgBatchCancelBinaryOptionsOrders.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* SubaccountTransfer defines a method for transfer between subaccounts */
  subaccountTransfer = async (signerAddress: string, message: MsgSubaccountTransfer, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSubaccountTransfer.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ExternalTransfer defines a method for transfer between external accounts */
  externalTransfer = async (signerAddress: string, message: MsgExternalTransfer, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgExternalTransfer.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* LiquidatePosition defines a method for liquidating a position */
  liquidatePosition = async (signerAddress: string, message: MsgLiquidatePosition, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgLiquidatePosition.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* EmergencySettleMarket defines a method for emergency settling a market */
  emergencySettleMarket = async (signerAddress: string, message: MsgEmergencySettleMarket, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgEmergencySettleMarket.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* IncreasePositionMargin defines a method for increasing margin of a position */
  increasePositionMargin = async (signerAddress: string, message: MsgIncreasePositionMargin, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgIncreasePositionMargin.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* RewardsOptOut defines a method for opting out of rewards */
  rewardsOptOut = async (signerAddress: string, message: MsgRewardsOptOut, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgRewardsOptOut.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* AdminUpdateBinaryOptionsMarket defines method for updating a binary options
   market by admin */
  adminUpdateBinaryOptionsMarket = async (signerAddress: string, message: MsgAdminUpdateBinaryOptionsMarket, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgAdminUpdateBinaryOptionsMarket.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /*  */
  reclaimLockedFunds = async (signerAddress: string, message: MsgReclaimLockedFunds, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgReclaimLockedFunds.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* UpdateParams */
  updateParams = async (signerAddress: string, message: MsgUpdateParams, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateParams.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};