import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate, MsgCancelUnbondingDelegation, MsgUpdateParams } from "./tx";
/** Msg defines the staking Msg service. */
export interface Msg {
  /** CreateValidator defines a method for creating a new validator. */
  createValidator(signerAddress: string, message: MsgCreateValidator, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /** EditValidator defines a method for editing an existing validator. */
  editValidator(signerAddress: string, message: MsgEditValidator, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /**
   * Delegate defines a method for performing a delegation of coins
   * from a delegator to a validator.
   */
  delegate(signerAddress: string, message: MsgDelegate, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /**
   * BeginRedelegate defines a method for performing a redelegation
   * of coins from a delegator and source validator to a destination validator.
   */
  beginRedelegate(signerAddress: string, message: MsgBeginRedelegate, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /**
   * Undelegate defines a method for performing an undelegation from a
   * delegate and a validator.
   */
  undelegate(signerAddress: string, message: MsgUndelegate, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /**
   * CancelUnbondingDelegation defines a method for performing canceling the unbonding delegation
   * and delegate back to previous validator.
   * 
   * Since: cosmos-sdk 0.46
   */
  cancelUnbondingDelegation(signerAddress: string, message: MsgCancelUnbondingDelegation, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /**
   * UpdateParams defines an operation for updating the x/staking module
   * parameters.
   * Since: cosmos-sdk 0.47
   */
  updateParams(signerAddress: string, message: MsgUpdateParams, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
/** Msg defines the staking Msg service. */
export interface StargateImpl {
  /** CreateValidator defines a method for creating a new validator. */
  createValidator(signerAddress: string, message: MsgCreateValidator, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /** EditValidator defines a method for editing an existing validator. */
  editValidator(signerAddress: string, message: MsgEditValidator, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /**
   * Delegate defines a method for performing a delegation of coins
   * from a delegator to a validator.
   */
  delegate(signerAddress: string, message: MsgDelegate, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /**
   * BeginRedelegate defines a method for performing a redelegation
   * of coins from a delegator and source validator to a destination validator.
   */
  beginRedelegate(signerAddress: string, message: MsgBeginRedelegate, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /**
   * Undelegate defines a method for performing an undelegation from a
   * delegate and a validator.
   */
  undelegate(signerAddress: string, message: MsgUndelegate, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /**
   * CancelUnbondingDelegation defines a method for performing canceling the unbonding delegation
   * and delegate back to previous validator.
   * 
   * Since: cosmos-sdk 0.46
   */
  cancelUnbondingDelegation(signerAddress: string, message: MsgCancelUnbondingDelegation, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /**
   * UpdateParams defines an operation for updating the x/staking module
   * parameters.
   * Since: cosmos-sdk 0.47
   */
  updateStakingParams(signerAddress: string, message: MsgUpdateParams, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateValidator defines a method for creating a new validator. */
  createValidator = async (signerAddress: string, message: MsgCreateValidator, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateValidator.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* EditValidator defines a method for editing an existing validator. */
  editValidator = async (signerAddress: string, message: MsgEditValidator, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgEditValidator.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* Delegate defines a method for performing a delegation of coins
   from a delegator to a validator. */
  delegate = async (signerAddress: string, message: MsgDelegate, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgDelegate.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* BeginRedelegate defines a method for performing a redelegation
   of coins from a delegator and source validator to a destination validator. */
  beginRedelegate = async (signerAddress: string, message: MsgBeginRedelegate, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgBeginRedelegate.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* Undelegate defines a method for performing an undelegation from a
   delegate and a validator. */
  undelegate = async (signerAddress: string, message: MsgUndelegate, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUndelegate.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* CancelUnbondingDelegation defines a method for performing canceling the unbonding delegation
   and delegate back to previous validator.
  
   Since: cosmos-sdk 0.46 */
  cancelUnbondingDelegation = async (signerAddress: string, message: MsgCancelUnbondingDelegation, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCancelUnbondingDelegation.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* UpdateParams defines an operation for updating the x/staking module
   parameters.
   Since: cosmos-sdk 0.47 */
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