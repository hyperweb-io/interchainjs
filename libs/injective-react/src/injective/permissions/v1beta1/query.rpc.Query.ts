import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryParamsRequest, QueryParamsResponse, QueryAllNamespacesRequest, QueryAllNamespacesResponse, QueryNamespaceByDenomRequest, QueryNamespaceByDenomResponse, QueryAddressRolesRequest, QueryAddressRolesResponse, QueryAddressesByRoleRequest, QueryAddressesByRoleResponse, QueryVouchersForAddressRequest, QueryVouchersForAddressResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Params defines a gRPC query method that returns the permissions module's
   * parameters.
   */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * AllNamespaces defines a gRPC query method that returns the permissions
   * module's created namespaces.
   */
  allNamespaces(request?: QueryAllNamespacesRequest): Promise<QueryAllNamespacesResponse>;
  /**
   * NamespaceByDenom defines a gRPC query method that returns the permissions
   * module's namespace associated with the provided denom.
   */
  namespaceByDenom(request: QueryNamespaceByDenomRequest): Promise<QueryNamespaceByDenomResponse>;
  /**
   * AddressRoles defines a gRPC query method that returns address roles in the
   * namespace
   */
  addressRoles(request: QueryAddressRolesRequest): Promise<QueryAddressRolesResponse>;
  /**
   * AddressesByRole defines a gRPC query method that returns a namespace's
   * roles associated with the provided address.
   */
  addressesByRole(request: QueryAddressesByRoleRequest): Promise<QueryAddressesByRoleResponse>;
  /**
   * VouchersForAddress defines a gRPC query method that returns a map of
   * vouchers that are held by permissions module for this address, keyed by the
   * originator address
   */
  vouchersForAddress(request: QueryVouchersForAddressRequest): Promise<QueryVouchersForAddressResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Params defines a gRPC query method that returns the permissions module's
   parameters. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.permissions.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* AllNamespaces defines a gRPC query method that returns the permissions
   module's created namespaces. */
  allNamespaces = async (request: QueryAllNamespacesRequest = {}): Promise<QueryAllNamespacesResponse> => {
    const data = QueryAllNamespacesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.permissions.v1beta1.Query", "AllNamespaces", data);
    return promise.then(data => QueryAllNamespacesResponse.decode(new BinaryReader(data)));
  };
  /* NamespaceByDenom defines a gRPC query method that returns the permissions
   module's namespace associated with the provided denom. */
  namespaceByDenom = async (request: QueryNamespaceByDenomRequest): Promise<QueryNamespaceByDenomResponse> => {
    const data = QueryNamespaceByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("injective.permissions.v1beta1.Query", "NamespaceByDenom", data);
    return promise.then(data => QueryNamespaceByDenomResponse.decode(new BinaryReader(data)));
  };
  /* AddressRoles defines a gRPC query method that returns address roles in the
   namespace */
  addressRoles = async (request: QueryAddressRolesRequest): Promise<QueryAddressRolesResponse> => {
    const data = QueryAddressRolesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.permissions.v1beta1.Query", "AddressRoles", data);
    return promise.then(data => QueryAddressRolesResponse.decode(new BinaryReader(data)));
  };
  /* AddressesByRole defines a gRPC query method that returns a namespace's
   roles associated with the provided address. */
  addressesByRole = async (request: QueryAddressesByRoleRequest): Promise<QueryAddressesByRoleResponse> => {
    const data = QueryAddressesByRoleRequest.encode(request).finish();
    const promise = this.rpc.request("injective.permissions.v1beta1.Query", "AddressesByRole", data);
    return promise.then(data => QueryAddressesByRoleResponse.decode(new BinaryReader(data)));
  };
  /* VouchersForAddress defines a gRPC query method that returns a map of
   vouchers that are held by permissions module for this address, keyed by the
   originator address */
  vouchersForAddress = async (request: QueryVouchersForAddressRequest): Promise<QueryVouchersForAddressResponse> => {
    const data = QueryVouchersForAddressRequest.encode(request).finish();
    const promise = this.rpc.request("injective.permissions.v1beta1.Query", "VouchersForAddress", data);
    return promise.then(data => QueryVouchersForAddressResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new QueryClientImpl(rpc);
};