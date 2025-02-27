import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateInsuranceFund, MsgCreateInsuranceFundResponse, MsgUnderwrite, MsgUnderwriteResponse, MsgRequestRedemption, MsgRequestRedemptionResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the insurance Msg service. */
export interface Msg {
  /** CreateInsuranceFund defines a method for creating an insurance fund */
  createInsuranceFund(request: MsgCreateInsuranceFund): Promise<MsgCreateInsuranceFundResponse>;
  /**
   * Underwrite defines a method for depositing tokens to underwrite an
   * insurance fund
   */
  underwrite(request: MsgUnderwrite): Promise<MsgUnderwriteResponse>;
  /**
   * RequestRedemption defines a method for requesting a redemption of the
   * sender's insurance fund tokens
   */
  requestRedemption(request: MsgRequestRedemption): Promise<MsgRequestRedemptionResponse>;
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateInsuranceFund defines a method for creating an insurance fund */
  createInsuranceFund = async (request: MsgCreateInsuranceFund): Promise<MsgCreateInsuranceFundResponse> => {
    const data = MsgCreateInsuranceFund.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Msg", "CreateInsuranceFund", data);
    return promise.then(data => MsgCreateInsuranceFundResponse.decode(new BinaryReader(data)));
  };
  /* Underwrite defines a method for depositing tokens to underwrite an
   insurance fund */
  underwrite = async (request: MsgUnderwrite): Promise<MsgUnderwriteResponse> => {
    const data = MsgUnderwrite.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Msg", "Underwrite", data);
    return promise.then(data => MsgUnderwriteResponse.decode(new BinaryReader(data)));
  };
  /* RequestRedemption defines a method for requesting a redemption of the
   sender's insurance fund tokens */
  requestRedemption = async (request: MsgRequestRedemption): Promise<MsgRequestRedemptionResponse> => {
    const data = MsgRequestRedemption.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Msg", "RequestRedemption", data);
    return promise.then(data => MsgRequestRedemptionResponse.decode(new BinaryReader(data)));
  };
  /* UpdateParams */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};