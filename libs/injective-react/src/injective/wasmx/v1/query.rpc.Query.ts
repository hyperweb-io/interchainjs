import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryWasmxParamsRequest, QueryWasmxParamsResponse, QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves wasmx params */
  wasmxParams(request?: QueryWasmxParamsRequest): Promise<QueryWasmxParamsResponse>;
  /** Retrieves contract registration info */
  contractRegistrationInfo(request: QueryContractRegistrationInfoRequest): Promise<QueryContractRegistrationInfoResponse>;
  /** Retrieves the entire wasmx module's state */
  wasmxModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Retrieves wasmx params */
  wasmxParams = async (request: QueryWasmxParamsRequest = {}): Promise<QueryWasmxParamsResponse> => {
    const data = QueryWasmxParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.wasmx.v1.Query", "WasmxParams", data);
    return promise.then(data => QueryWasmxParamsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves contract registration info */
  contractRegistrationInfo = async (request: QueryContractRegistrationInfoRequest): Promise<QueryContractRegistrationInfoResponse> => {
    const data = QueryContractRegistrationInfoRequest.encode(request).finish();
    const promise = this.rpc.request("injective.wasmx.v1.Query", "ContractRegistrationInfo", data);
    return promise.then(data => QueryContractRegistrationInfoResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the entire wasmx module's state */
  wasmxModuleState = async (request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> => {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.wasmx.v1.Query", "WasmxModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new QueryClientImpl(rpc);
};