import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateNamespace, MsgCreateNamespaceResponse, MsgDeleteNamespace, MsgDeleteNamespaceResponse, MsgUpdateNamespace, MsgUpdateNamespaceResponse, MsgUpdateNamespaceRoles, MsgUpdateNamespaceRolesResponse, MsgRevokeNamespaceRoles, MsgRevokeNamespaceRolesResponse, MsgClaimVoucher, MsgClaimVoucherResponse } from "./tx";
/** Msg defines the permissions module's gRPC message service. */
export interface Msg {
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  createNamespace(request: MsgCreateNamespace): Promise<MsgCreateNamespaceResponse>;
  deleteNamespace(request: MsgDeleteNamespace): Promise<MsgDeleteNamespaceResponse>;
  updateNamespace(request: MsgUpdateNamespace): Promise<MsgUpdateNamespaceResponse>;
  updateNamespaceRoles(request: MsgUpdateNamespaceRoles): Promise<MsgUpdateNamespaceRolesResponse>;
  revokeNamespaceRoles(request: MsgRevokeNamespaceRoles): Promise<MsgRevokeNamespaceRolesResponse>;
  claimVoucher(request: MsgClaimVoucher): Promise<MsgClaimVoucherResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* UpdateParams */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("injective.permissions.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* CreateNamespace */
  createNamespace = async (request: MsgCreateNamespace): Promise<MsgCreateNamespaceResponse> => {
    const data = MsgCreateNamespace.encode(request).finish();
    const promise = this.rpc.request("injective.permissions.v1beta1.Msg", "CreateNamespace", data);
    return promise.then(data => MsgCreateNamespaceResponse.decode(new BinaryReader(data)));
  };
  /* DeleteNamespace */
  deleteNamespace = async (request: MsgDeleteNamespace): Promise<MsgDeleteNamespaceResponse> => {
    const data = MsgDeleteNamespace.encode(request).finish();
    const promise = this.rpc.request("injective.permissions.v1beta1.Msg", "DeleteNamespace", data);
    return promise.then(data => MsgDeleteNamespaceResponse.decode(new BinaryReader(data)));
  };
  /* UpdateNamespace */
  updateNamespace = async (request: MsgUpdateNamespace): Promise<MsgUpdateNamespaceResponse> => {
    const data = MsgUpdateNamespace.encode(request).finish();
    const promise = this.rpc.request("injective.permissions.v1beta1.Msg", "UpdateNamespace", data);
    return promise.then(data => MsgUpdateNamespaceResponse.decode(new BinaryReader(data)));
  };
  /* UpdateNamespaceRoles */
  updateNamespaceRoles = async (request: MsgUpdateNamespaceRoles): Promise<MsgUpdateNamespaceRolesResponse> => {
    const data = MsgUpdateNamespaceRoles.encode(request).finish();
    const promise = this.rpc.request("injective.permissions.v1beta1.Msg", "UpdateNamespaceRoles", data);
    return promise.then(data => MsgUpdateNamespaceRolesResponse.decode(new BinaryReader(data)));
  };
  /* RevokeNamespaceRoles */
  revokeNamespaceRoles = async (request: MsgRevokeNamespaceRoles): Promise<MsgRevokeNamespaceRolesResponse> => {
    const data = MsgRevokeNamespaceRoles.encode(request).finish();
    const promise = this.rpc.request("injective.permissions.v1beta1.Msg", "RevokeNamespaceRoles", data);
    return promise.then(data => MsgRevokeNamespaceRolesResponse.decode(new BinaryReader(data)));
  };
  /* ClaimVoucher */
  claimVoucher = async (request: MsgClaimVoucher): Promise<MsgClaimVoucherResponse> => {
    const data = MsgClaimVoucher.encode(request).finish();
    const promise = this.rpc.request("injective.permissions.v1beta1.Msg", "ClaimVoucher", data);
    return promise.then(data => MsgClaimVoucherResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};