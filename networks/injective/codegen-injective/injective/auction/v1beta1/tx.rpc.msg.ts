import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { MsgBid, MsgUpdateParams } from "./tx";
/** Msg defines the auction Msg service. */
export interface Msg {
  /** Bid defines a method for placing a bid for an auction */
  bid(signerAddress: string, message: MsgBid, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  updateParams(signerAddress: string, message: MsgUpdateParams, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Bid defines a method for placing a bid for an auction */
  bid = async (signerAddress: string, message: MsgBid, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgBid.typeUrl,
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