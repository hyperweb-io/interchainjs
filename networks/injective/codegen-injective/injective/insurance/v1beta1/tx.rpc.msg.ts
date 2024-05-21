import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { MsgCreateInsuranceFund, MsgUnderwrite, MsgRequestRedemption, MsgUpdateParams } from "./tx";
/** Msg defines the insurance Msg service. */
export interface Msg {
  /** CreateInsuranceFund defines a method for creating an insurance fund */
  createInsuranceFund(signerAddress: string, message: MsgCreateInsuranceFund, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * Underwrite defines a method for depositing tokens to underwrite an
   * insurance fund
   */
  underwrite(signerAddress: string, message: MsgUnderwrite, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * RequestRedemption defines a method for requesting a redemption of the
   * sender's insurance fund tokens
   */
  requestRedemption(signerAddress: string, message: MsgRequestRedemption, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  updateParams(signerAddress: string, message: MsgUpdateParams, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateInsuranceFund defines a method for creating an insurance fund */
  createInsuranceFund = async (signerAddress: string, message: MsgCreateInsuranceFund, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateInsuranceFund.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* Underwrite defines a method for depositing tokens to underwrite an
   insurance fund */
  underwrite = async (signerAddress: string, message: MsgUnderwrite, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUnderwrite.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* RequestRedemption defines a method for requesting a redemption of the
   sender's insurance fund tokens */
  requestRedemption = async (signerAddress: string, message: MsgRequestRedemption, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgRequestRedemption.typeUrl,
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