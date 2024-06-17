import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { MsgGrantAllowance, MsgRevokeAllowance, MsgPruneAllowances } from "./tx";
/** Msg defines the feegrant msg service. */
export interface Msg {
  /**
   * GrantAllowance grants fee allowance to the grantee on the granter's
   * account with the provided expiration time.
   */
  grantAllowance(signerAddress: string, message: MsgGrantAllowance, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * RevokeAllowance revokes any fee allowance of granter's account that
   * has been granted to the grantee.
   */
  revokeAllowance(signerAddress: string, message: MsgRevokeAllowance, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * PruneAllowances prunes expired fee allowances, currently up to 75 at a time.
   * 
   * Since cosmos-sdk 0.50
   */
  pruneAllowances(signerAddress: string, message: MsgPruneAllowances, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* GrantAllowance grants fee allowance to the grantee on the granter's
   account with the provided expiration time. */
  grantAllowance = async (signerAddress: string, message: MsgGrantAllowance, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgGrantAllowance.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* RevokeAllowance revokes any fee allowance of granter's account that
   has been granted to the grantee. */
  revokeAllowance = async (signerAddress: string, message: MsgRevokeAllowance, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgRevokeAllowance.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* PruneAllowances prunes expired fee allowances, currently up to 75 at a time.
  
   Since cosmos-sdk 0.50 */
  pruneAllowances = async (signerAddress: string, message: MsgPruneAllowances, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgPruneAllowances.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};