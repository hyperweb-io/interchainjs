import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { MsgUpdateContract, MsgActivateContract, MsgDeactivateContract, MsgExecuteContractCompat, MsgUpdateParams, MsgRegisterContract } from "./tx";
/** Msg defines the wasmx Msg service. */
export interface Msg {
  updateRegistryContractParams(signerAddress: string, message: MsgUpdateContract, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  activateRegistryContract(signerAddress: string, message: MsgActivateContract, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  deactivateRegistryContract(signerAddress: string, message: MsgDeactivateContract, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  executeContractCompat(signerAddress: string, message: MsgExecuteContractCompat, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  updateParams(signerAddress: string, message: MsgUpdateParams, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  registerContract(signerAddress: string, message: MsgRegisterContract, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* UpdateRegistryContractParams */
  updateRegistryContractParams = async (signerAddress: string, message: MsgUpdateContract, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateContract.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ActivateRegistryContract */
  activateRegistryContract = async (signerAddress: string, message: MsgActivateContract, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgActivateContract.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* DeactivateRegistryContract */
  deactivateRegistryContract = async (signerAddress: string, message: MsgDeactivateContract, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgDeactivateContract.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ExecuteContractCompat */
  executeContractCompat = async (signerAddress: string, message: MsgExecuteContractCompat, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgExecuteContractCompat.typeUrl,
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
  /* RegisterContract */
  registerContract = async (signerAddress: string, message: MsgRegisterContract, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgRegisterContract.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};