import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateContract, MsgUpdateContractResponse, MsgActivateContract, MsgActivateContractResponse, MsgDeactivateContract, MsgDeactivateContractResponse, MsgExecuteContractCompat, MsgExecuteContractCompatResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgRegisterContract, MsgRegisterContractResponse } from "./tx";
/** Msg defines the wasmx Msg service. */
export interface Msg {
  updateRegistryContractParams(request: MsgUpdateContract): Promise<MsgUpdateContractResponse>;
  activateRegistryContract(request: MsgActivateContract): Promise<MsgActivateContractResponse>;
  deactivateRegistryContract(request: MsgDeactivateContract): Promise<MsgDeactivateContractResponse>;
  executeContractCompat(request: MsgExecuteContractCompat): Promise<MsgExecuteContractCompatResponse>;
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  registerContract(request: MsgRegisterContract): Promise<MsgRegisterContractResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* UpdateRegistryContractParams */
  updateRegistryContractParams = async (request: MsgUpdateContract): Promise<MsgUpdateContractResponse> => {
    const data = MsgUpdateContract.encode(request).finish();
    const promise = this.rpc.request("injective.wasmx.v1.Msg", "UpdateRegistryContractParams", data);
    return promise.then(data => MsgUpdateContractResponse.decode(new BinaryReader(data)));
  };
  /* ActivateRegistryContract */
  activateRegistryContract = async (request: MsgActivateContract): Promise<MsgActivateContractResponse> => {
    const data = MsgActivateContract.encode(request).finish();
    const promise = this.rpc.request("injective.wasmx.v1.Msg", "ActivateRegistryContract", data);
    return promise.then(data => MsgActivateContractResponse.decode(new BinaryReader(data)));
  };
  /* DeactivateRegistryContract */
  deactivateRegistryContract = async (request: MsgDeactivateContract): Promise<MsgDeactivateContractResponse> => {
    const data = MsgDeactivateContract.encode(request).finish();
    const promise = this.rpc.request("injective.wasmx.v1.Msg", "DeactivateRegistryContract", data);
    return promise.then(data => MsgDeactivateContractResponse.decode(new BinaryReader(data)));
  };
  /* ExecuteContractCompat */
  executeContractCompat = async (request: MsgExecuteContractCompat): Promise<MsgExecuteContractCompatResponse> => {
    const data = MsgExecuteContractCompat.encode(request).finish();
    const promise = this.rpc.request("injective.wasmx.v1.Msg", "ExecuteContractCompat", data);
    return promise.then(data => MsgExecuteContractCompatResponse.decode(new BinaryReader(data)));
  };
  /* UpdateParams */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("injective.wasmx.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* RegisterContract */
  registerContract = async (request: MsgRegisterContract): Promise<MsgRegisterContractResponse> => {
    const data = MsgRegisterContract.encode(request).finish();
    const promise = this.rpc.request("injective.wasmx.v1.Msg", "RegisterContract", data);
    return promise.then(data => MsgRegisterContractResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};