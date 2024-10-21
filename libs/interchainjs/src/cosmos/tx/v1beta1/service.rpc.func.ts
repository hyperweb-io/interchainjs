import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse, TxDecodeRequest, TxDecodeResponse, TxEncodeRequest, TxEncodeResponse, TxEncodeAminoRequest, TxEncodeAminoResponse, TxDecodeAminoRequest, TxDecodeAminoResponse } from "./service";
export const createGetSimulate = (getRpcInstance: RpcResolver) => buildQuery<SimulateRequest, SimulateResponse>({
  encoder: SimulateRequest.encode,
  decoder: SimulateResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Simulate",
  getRpcInstance: getRpcInstance
});
export const useGetSimulate = buildUseQuery<SimulateRequest, SimulateResponse>({
  builderQueryFn: createGetSimulate,
  queryKeyPrefix: "SimulateQuery"
});
export const createGetGetTx = (getRpcInstance: RpcResolver) => buildQuery<GetTxRequest, GetTxResponse>({
  encoder: GetTxRequest.encode,
  decoder: GetTxResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GetTx",
  getRpcInstance: getRpcInstance
});
export const useGetGetTx = buildUseQuery<GetTxRequest, GetTxResponse>({
  builderQueryFn: createGetGetTx,
  queryKeyPrefix: "GetTxQuery"
});
export const createGetBroadcastTx = (getRpcInstance: RpcResolver) => buildQuery<BroadcastTxRequest, BroadcastTxResponse>({
  encoder: BroadcastTxRequest.encode,
  decoder: BroadcastTxResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "BroadcastTx",
  getRpcInstance: getRpcInstance
});
export const useGetBroadcastTx = buildUseQuery<BroadcastTxRequest, BroadcastTxResponse>({
  builderQueryFn: createGetBroadcastTx,
  queryKeyPrefix: "BroadcastTxQuery"
});
export const createGetGetTxsEvent = (getRpcInstance: RpcResolver) => buildQuery<GetTxsEventRequest, GetTxsEventResponse>({
  encoder: GetTxsEventRequest.encode,
  decoder: GetTxsEventResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GetTxsEvent",
  getRpcInstance: getRpcInstance
});
export const useGetGetTxsEvent = buildUseQuery<GetTxsEventRequest, GetTxsEventResponse>({
  builderQueryFn: createGetGetTxsEvent,
  queryKeyPrefix: "GetTxsEventQuery"
});
export const createGetGetBlockWithTxs = (getRpcInstance: RpcResolver) => buildQuery<GetBlockWithTxsRequest, GetBlockWithTxsResponse>({
  encoder: GetBlockWithTxsRequest.encode,
  decoder: GetBlockWithTxsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GetBlockWithTxs",
  getRpcInstance: getRpcInstance
});
export const useGetGetBlockWithTxs = buildUseQuery<GetBlockWithTxsRequest, GetBlockWithTxsResponse>({
  builderQueryFn: createGetGetBlockWithTxs,
  queryKeyPrefix: "GetBlockWithTxsQuery"
});
export const createGetTxDecode = (getRpcInstance: RpcResolver) => buildQuery<TxDecodeRequest, TxDecodeResponse>({
  encoder: TxDecodeRequest.encode,
  decoder: TxDecodeResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "TxDecode",
  getRpcInstance: getRpcInstance
});
export const useGetTxDecode = buildUseQuery<TxDecodeRequest, TxDecodeResponse>({
  builderQueryFn: createGetTxDecode,
  queryKeyPrefix: "TxDecodeQuery"
});
export const createGetTxEncode = (getRpcInstance: RpcResolver) => buildQuery<TxEncodeRequest, TxEncodeResponse>({
  encoder: TxEncodeRequest.encode,
  decoder: TxEncodeResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "TxEncode",
  getRpcInstance: getRpcInstance
});
export const useGetTxEncode = buildUseQuery<TxEncodeRequest, TxEncodeResponse>({
  builderQueryFn: createGetTxEncode,
  queryKeyPrefix: "TxEncodeQuery"
});
export const createGetTxEncodeAmino = (getRpcInstance: RpcResolver) => buildQuery<TxEncodeAminoRequest, TxEncodeAminoResponse>({
  encoder: TxEncodeAminoRequest.encode,
  decoder: TxEncodeAminoResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "TxEncodeAmino",
  getRpcInstance: getRpcInstance
});
export const useGetTxEncodeAmino = buildUseQuery<TxEncodeAminoRequest, TxEncodeAminoResponse>({
  builderQueryFn: createGetTxEncodeAmino,
  queryKeyPrefix: "TxEncodeAminoQuery"
});
export const createGetTxDecodeAmino = (getRpcInstance: RpcResolver) => buildQuery<TxDecodeAminoRequest, TxDecodeAminoResponse>({
  encoder: TxDecodeAminoRequest.encode,
  decoder: TxDecodeAminoResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "TxDecodeAmino",
  getRpcInstance: getRpcInstance
});
export const useGetTxDecodeAmino = buildUseQuery<TxDecodeAminoRequest, TxDecodeAminoResponse>({
  builderQueryFn: createGetTxDecodeAmino,
  queryKeyPrefix: "TxDecodeAminoQuery"
});