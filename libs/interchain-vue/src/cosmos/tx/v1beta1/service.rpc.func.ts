import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse, TxDecodeRequest, TxDecodeResponse, TxEncodeRequest, TxEncodeResponse, TxEncodeAminoRequest, TxEncodeAminoResponse, TxDecodeAminoRequest, TxDecodeAminoResponse } from "./service";
export const createGetSimulate = (clientResolver?: RpcResolver) => buildQuery<SimulateRequest, SimulateResponse>({
  encode: SimulateRequest.encode,
  decode: SimulateResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "Simulate",
  clientResolver
});
export const createGetGetTx = (clientResolver?: RpcResolver) => buildQuery<GetTxRequest, GetTxResponse>({
  encode: GetTxRequest.encode,
  decode: GetTxResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "GetTx",
  clientResolver
});
export const createGetBroadcastTx = (clientResolver?: RpcResolver) => buildQuery<BroadcastTxRequest, BroadcastTxResponse>({
  encode: BroadcastTxRequest.encode,
  decode: BroadcastTxResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "BroadcastTx",
  clientResolver
});
export const createGetGetTxsEvent = (clientResolver?: RpcResolver) => buildQuery<GetTxsEventRequest, GetTxsEventResponse>({
  encode: GetTxsEventRequest.encode,
  decode: GetTxsEventResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "GetTxsEvent",
  clientResolver
});
export const createGetGetBlockWithTxs = (clientResolver?: RpcResolver) => buildQuery<GetBlockWithTxsRequest, GetBlockWithTxsResponse>({
  encode: GetBlockWithTxsRequest.encode,
  decode: GetBlockWithTxsResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "GetBlockWithTxs",
  clientResolver
});
export const createGetTxDecode = (clientResolver?: RpcResolver) => buildQuery<TxDecodeRequest, TxDecodeResponse>({
  encode: TxDecodeRequest.encode,
  decode: TxDecodeResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "TxDecode",
  clientResolver
});
export const createGetTxEncode = (clientResolver?: RpcResolver) => buildQuery<TxEncodeRequest, TxEncodeResponse>({
  encode: TxEncodeRequest.encode,
  decode: TxEncodeResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "TxEncode",
  clientResolver
});
export const createGetTxEncodeAmino = (clientResolver?: RpcResolver) => buildQuery<TxEncodeAminoRequest, TxEncodeAminoResponse>({
  encode: TxEncodeAminoRequest.encode,
  decode: TxEncodeAminoResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "TxEncodeAmino",
  clientResolver
});
export const createGetTxDecodeAmino = (clientResolver?: RpcResolver) => buildQuery<TxDecodeAminoRequest, TxDecodeAminoResponse>({
  encode: TxDecodeAminoRequest.encode,
  decode: TxDecodeAminoResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "TxDecodeAmino",
  clientResolver
});