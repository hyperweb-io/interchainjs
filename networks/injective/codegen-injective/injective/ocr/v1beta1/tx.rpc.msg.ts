import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { MsgCreateFeed, MsgUpdateFeed, MsgTransmit, MsgFundFeedRewardPool, MsgWithdrawFeedRewardPool, MsgSetPayees, MsgTransferPayeeship, MsgAcceptPayeeship, MsgUpdateParams } from "./tx";
/** Msg defines the OCR Msg service. */
export interface Msg {
  /** CreateFeed defines a method for creating feed by module admin */
  createFeed(signerAddress: string, message: MsgCreateFeed, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * CreateFeed defines a method for creating feed by feed admin or feed billing
   * admin
   */
  updateFeed(signerAddress: string, message: MsgUpdateFeed, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** Transmit defines a method for transmitting the feed info by transmitter */
  transmit(signerAddress: string, message: MsgTransmit, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** FundFeedRewardPool defines a method to put funds into feed reward pool */
  fundFeedRewardPool(signerAddress: string, message: MsgFundFeedRewardPool, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * WithdrawFeedRewardPool defines a method to witdhraw feed reward by feed
   * admin or billing admin
   */
  withdrawFeedRewardPool(signerAddress: string, message: MsgWithdrawFeedRewardPool, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** SetPayees defines a method to set payees for transmitters (batch action) */
  setPayees(signerAddress: string, message: MsgSetPayees, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * TransferPayeeship defines a method for a payee to transfer reward receive
   * ownership
   */
  transferPayeeship(signerAddress: string, message: MsgTransferPayeeship, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * AcceptPayeeship defines a method for a new payee to accept reward receive
   * ownership
   */
  acceptPayeeship(signerAddress: string, message: MsgAcceptPayeeship, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  updateParams(signerAddress: string, message: MsgUpdateParams, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateFeed defines a method for creating feed by module admin */
  createFeed = async (signerAddress: string, message: MsgCreateFeed, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateFeed.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* CreateFeed defines a method for creating feed by feed admin or feed billing
   admin */
  updateFeed = async (signerAddress: string, message: MsgUpdateFeed, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateFeed.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* Transmit defines a method for transmitting the feed info by transmitter */
  transmit = async (signerAddress: string, message: MsgTransmit, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgTransmit.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* FundFeedRewardPool defines a method to put funds into feed reward pool */
  fundFeedRewardPool = async (signerAddress: string, message: MsgFundFeedRewardPool, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgFundFeedRewardPool.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* WithdrawFeedRewardPool defines a method to witdhraw feed reward by feed
   admin or billing admin */
  withdrawFeedRewardPool = async (signerAddress: string, message: MsgWithdrawFeedRewardPool, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgWithdrawFeedRewardPool.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* SetPayees defines a method to set payees for transmitters (batch action) */
  setPayees = async (signerAddress: string, message: MsgSetPayees, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSetPayees.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* TransferPayeeship defines a method for a payee to transfer reward receive
   ownership */
  transferPayeeship = async (signerAddress: string, message: MsgTransferPayeeship, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgTransferPayeeship.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* AcceptPayeeship defines a method for a new payee to accept reward receive
   ownership */
  acceptPayeeship = async (signerAddress: string, message: MsgAcceptPayeeship, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgAcceptPayeeship.typeUrl,
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