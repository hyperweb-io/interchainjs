import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse, TxDecodeRequest, TxDecodeResponse, TxEncodeRequest, TxEncodeResponse, TxEncodeAminoRequest, TxEncodeAminoResponse, TxDecodeAminoRequest, TxDecodeAminoResponse } from "./service";
export const createGetSimulate = (getRpcInstance: RpcResolver) => buildQuery<SimulateRequest, SimulateResponse>({
  encode: SimulateRequest.encode,
  decode: SimulateResponse.decode,
  service: "cosmos.tx.v1beta1.Simulate",
  method: "Simulate",
  getRpcInstance: getRpcInstance
});
export const useGetSimulate = buildUseQuery<SimulateRequest, SimulateResponse>({
  builderQueryFn: createGetSimulate,
  queryKeyPrefix: "SimulateQuery"
});
export const createGetGetTx = (getRpcInstance: RpcResolver) => buildQuery<GetTxRequest, GetTxResponse>({
  encode: GetTxRequest.encode,
  decode: GetTxResponse.decode,
  service: "cosmos.tx.v1beta1.GetTx",
  method: "GetTx",
  getRpcInstance: getRpcInstance
});
export const useGetGetTx = buildUseQuery<GetTxRequest, GetTxResponse>({
  builderQueryFn: createGetGetTx,
  queryKeyPrefix: "GetTxQuery"
});
export const createGetBroadcastTx = (getRpcInstance: RpcResolver) => buildQuery<BroadcastTxRequest, BroadcastTxResponse>({
  encode: BroadcastTxRequest.encode,
  decode: BroadcastTxResponse.decode,
  service: "cosmos.tx.v1beta1.BroadcastTx",
  method: "BroadcastTx",
  getRpcInstance: getRpcInstance
});
export const useGetBroadcastTx = buildUseQuery<BroadcastTxRequest, BroadcastTxResponse>({
  builderQueryFn: createGetBroadcastTx,
  queryKeyPrefix: "BroadcastTxQuery"
});
export const createGetGetTxsEvent = (getRpcInstance: RpcResolver) => buildQuery<GetTxsEventRequest, GetTxsEventResponse>({
  encode: GetTxsEventRequest.encode,
  decode: GetTxsEventResponse.decode,
  service: "cosmos.tx.v1beta1.GetTxsEvent",
  method: "GetTxsEvent",
  getRpcInstance: getRpcInstance
});
export const useGetGetTxsEvent = buildUseQuery<GetTxsEventRequest, GetTxsEventResponse>({
  builderQueryFn: createGetGetTxsEvent,
  queryKeyPrefix: "GetTxsEventQuery"
});
export const createGetGetBlockWithTxs = (getRpcInstance: RpcResolver) => buildQuery<GetBlockWithTxsRequest, GetBlockWithTxsResponse>({
  encode: GetBlockWithTxsRequest.encode,
  decode: GetBlockWithTxsResponse.decode,
  service: "cosmos.tx.v1beta1.GetBlockWithTxs",
  method: "GetBlockWithTxs",
  getRpcInstance: getRpcInstance
});
export const useGetGetBlockWithTxs = buildUseQuery<GetBlockWithTxsRequest, GetBlockWithTxsResponse>({
  builderQueryFn: createGetGetBlockWithTxs,
  queryKeyPrefix: "GetBlockWithTxsQuery"
});
export const createGetTxDecode = (getRpcInstance: RpcResolver) => buildQuery<TxDecodeRequest, TxDecodeResponse>({
  encode: TxDecodeRequest.encode,
  decode: TxDecodeResponse.decode,
  service: "cosmos.tx.v1beta1.TxDecode",
  method: "TxDecode",
  getRpcInstance: getRpcInstance
});
export const useGetTxDecode = buildUseQuery<TxDecodeRequest, TxDecodeResponse>({
  builderQueryFn: createGetTxDecode,
  queryKeyPrefix: "TxDecodeQuery"
});
export const createGetTxEncode = (getRpcInstance: RpcResolver) => buildQuery<TxEncodeRequest, TxEncodeResponse>({
  encode: TxEncodeRequest.encode,
  decode: TxEncodeResponse.decode,
  service: "cosmos.tx.v1beta1.TxEncode",
  method: "TxEncode",
  getRpcInstance: getRpcInstance
});
export const useGetTxEncode = buildUseQuery<TxEncodeRequest, TxEncodeResponse>({
  builderQueryFn: createGetTxEncode,
  queryKeyPrefix: "TxEncodeQuery"
});
export const createGetTxEncodeAmino = (getRpcInstance: RpcResolver) => buildQuery<TxEncodeAminoRequest, TxEncodeAminoResponse>({
  encode: TxEncodeAminoRequest.encode,
  decode: TxEncodeAminoResponse.decode,
  service: "cosmos.tx.v1beta1.TxEncodeAmino",
  method: "TxEncodeAmino",
  getRpcInstance: getRpcInstance
});
export const useGetTxEncodeAmino = buildUseQuery<TxEncodeAminoRequest, TxEncodeAminoResponse>({
  builderQueryFn: createGetTxEncodeAmino,
  queryKeyPrefix: "TxEncodeAminoQuery"
});
export const createGetTxDecodeAmino = (getRpcInstance: RpcResolver) => buildQuery<TxDecodeAminoRequest, TxDecodeAminoResponse>({
  encode: TxDecodeAminoRequest.encode,
  decode: TxDecodeAminoResponse.decode,
  service: "cosmos.tx.v1beta1.TxDecodeAmino",
  method: "TxDecodeAmino",
  getRpcInstance: getRpcInstance
});
export const useGetTxDecodeAmino = buildUseQuery<TxDecodeAminoRequest, TxDecodeAminoResponse>({
  builderQueryFn: createGetTxDecodeAmino,
  queryKeyPrefix: "TxDecodeAminoQuery"
});