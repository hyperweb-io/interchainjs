import { DeliverTxResponse, StdFee, TxRpc } from "../../../../types";
import { MsgTransfer, MsgUpdateParams } from "./tx";
/** Msg defines the ibc/transfer Msg service. */
export interface Msg {
  /** Transfer defines a rpc handler method for MsgTransfer. */
  transfer(signerAddress: string, message: MsgTransfer, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** UpdateParams defines a rpc handler for MsgUpdateParams. */
  updateParams(signerAddress: string, message: MsgUpdateParams, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
/** Msg defines the ibc/transfer Msg service. */
export interface StargateImpl {
  /** Transfer defines a rpc handler method for MsgTransfer. */
  transfer(signerAddress: string, message: MsgTransfer, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** UpdateParams defines a rpc handler for MsgUpdateParams. */
  updateIBCTransferParams(signerAddress: string, message: MsgUpdateParams, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
/** Msg defines the ibc/transfer Msg service. */
export interface CosmWasmStargateImpl {
  /** Transfer defines a rpc handler method for MsgTransfer. */
  transfer(signerAddress: string, message: MsgTransfer, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** UpdateParams defines a rpc handler for MsgUpdateParams. */
  updateIBCTransferParams(signerAddress: string, message: MsgUpdateParams, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Transfer defines a rpc handler method for MsgTransfer. */
  transfer = async (signerAddress: string, message: MsgTransfer, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgTransfer.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* UpdateParams defines a rpc handler for MsgUpdateParams. */
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