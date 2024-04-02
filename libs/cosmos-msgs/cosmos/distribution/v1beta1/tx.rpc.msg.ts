import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool, MsgUpdateParams, MsgCommunityPoolSpend } from "./tx";
/** Msg defines the distribution Msg service. */
export interface Msg {
  /**
   * SetWithdrawAddress defines a method to change the withdraw address
   * for a delegator (or validator self-delegation).
   */
  setWithdrawAddress(signerAddress: string, message: MsgSetWithdrawAddress, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /**
   * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
   * from a single validator.
   */
  withdrawDelegatorReward(signerAddress: string, message: MsgWithdrawDelegatorReward, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /**
   * WithdrawValidatorCommission defines a method to withdraw the
   * full commission to the validator address.
   */
  withdrawValidatorCommission(signerAddress: string, message: MsgWithdrawValidatorCommission, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /**
   * FundCommunityPool defines a method to allow an account to directly
   * fund the community pool.
   */
  fundCommunityPool(signerAddress: string, message: MsgFundCommunityPool, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/distribution
   * module parameters. The authority is defined in the keeper.
   * 
   * Since: cosmos-sdk 0.47
   */
  updateParams(signerAddress: string, message: MsgUpdateParams, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /**
   * CommunityPoolSpend defines a governance operation for sending tokens from
   * the community pool in the x/distribution module to another account, which
   * could be the governance module itself. The authority is defined in the
   * keeper.
   * 
   * Since: cosmos-sdk 0.47
   */
  communityPoolSpend(signerAddress: string, message: MsgCommunityPoolSpend, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
/** Msg defines the distribution Msg service. */
export interface StargateImpl {
  /**
   * SetWithdrawAddress defines a method to change the withdraw address
   * for a delegator (or validator self-delegation).
   */
  setWithdrawAddress(signerAddress: string, message: MsgSetWithdrawAddress, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /**
   * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
   * from a single validator.
   */
  withdrawDelegatorReward(signerAddress: string, message: MsgWithdrawDelegatorReward, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /**
   * WithdrawValidatorCommission defines a method to withdraw the
   * full commission to the validator address.
   */
  withdrawValidatorCommission(signerAddress: string, message: MsgWithdrawValidatorCommission, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /**
   * FundCommunityPool defines a method to allow an account to directly
   * fund the community pool.
   */
  fundCommunityPool(signerAddress: string, message: MsgFundCommunityPool, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/distribution
   * module parameters. The authority is defined in the keeper.
   * 
   * Since: cosmos-sdk 0.47
   */
  updateParams(signerAddress: string, message: MsgUpdateParams, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /**
   * CommunityPoolSpend defines a governance operation for sending tokens from
   * the community pool in the x/distribution module to another account, which
   * could be the governance module itself. The authority is defined in the
   * keeper.
   * 
   * Since: cosmos-sdk 0.47
   */
  communityPoolSpend(signerAddress: string, message: MsgCommunityPoolSpend, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* SetWithdrawAddress defines a method to change the withdraw address
   for a delegator (or validator self-delegation). */
  setWithdrawAddress = async (signerAddress: string, message: MsgSetWithdrawAddress, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSetWithdrawAddress.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* WithdrawDelegatorReward defines a method to withdraw rewards of delegator
   from a single validator. */
  withdrawDelegatorReward = async (signerAddress: string, message: MsgWithdrawDelegatorReward, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgWithdrawDelegatorReward.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* WithdrawValidatorCommission defines a method to withdraw the
   full commission to the validator address. */
  withdrawValidatorCommission = async (signerAddress: string, message: MsgWithdrawValidatorCommission, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgWithdrawValidatorCommission.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* FundCommunityPool defines a method to allow an account to directly
   fund the community pool. */
  fundCommunityPool = async (signerAddress: string, message: MsgFundCommunityPool, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgFundCommunityPool.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* UpdateParams defines a governance operation for updating the x/distribution
   module parameters. The authority is defined in the keeper.
  
   Since: cosmos-sdk 0.47 */
  updateParams = async (signerAddress: string, message: MsgUpdateParams, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateParams.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* CommunityPoolSpend defines a governance operation for sending tokens from
   the community pool in the x/distribution module to another account, which
   could be the governance module itself. The authority is defined in the
   keeper.
  
   Since: cosmos-sdk 0.47 */
  communityPoolSpend = async (signerAddress: string, message: MsgCommunityPoolSpend, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCommunityPoolSpend.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};