import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgBid, MsgBidResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the auction Msg service. */
export interface Msg {
  /** Bid defines a method for placing a bid for an auction */
  bid(request: MsgBid): Promise<MsgBidResponse>;
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Bid defines a method for placing a bid for an auction */
  bid = async (request: MsgBid): Promise<MsgBidResponse> => {
    const data = MsgBid.encode(request).finish();
    const promise = this.rpc.request("injective.auction.v1beta1.Msg", "Bid", data);
    return promise.then(data => MsgBidResponse.decode(new BinaryReader(data)));
  };
  /* UpdateParams */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("injective.auction.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};