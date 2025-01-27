import { buildUseVueQuery } from "../../../vue-query";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse, TxDecodeRequest, TxDecodeResponse, TxEncodeRequest, TxEncodeResponse, TxEncodeAminoRequest, TxEncodeAminoResponse, TxDecodeAminoRequest, TxDecodeAminoResponse } from "./service";
import { createGetSimulate, createGetGetTx, createGetBroadcastTx, createGetGetTxsEvent, createGetGetBlockWithTxs, createGetTxDecode, createGetTxEncode, createGetTxEncodeAmino, createGetTxDecodeAmino } from "./service.rpc.func";
export const useGetSimulate = buildUseVueQuery<SimulateRequest, SimulateResponse>({
  builderQueryFn: createGetSimulate,
  queryKeyPrefix: "SimulateQuery"
});
export const useGetGetTx = buildUseVueQuery<GetTxRequest, GetTxResponse>({
  builderQueryFn: createGetGetTx,
  queryKeyPrefix: "GetTxQuery"
});
export const useGetBroadcastTx = buildUseVueQuery<BroadcastTxRequest, BroadcastTxResponse>({
  builderQueryFn: createGetBroadcastTx,
  queryKeyPrefix: "BroadcastTxQuery"
});
export const useGetGetTxsEvent = buildUseVueQuery<GetTxsEventRequest, GetTxsEventResponse>({
  builderQueryFn: createGetGetTxsEvent,
  queryKeyPrefix: "GetTxsEventQuery"
});
export const useGetGetBlockWithTxs = buildUseVueQuery<GetBlockWithTxsRequest, GetBlockWithTxsResponse>({
  builderQueryFn: createGetGetBlockWithTxs,
  queryKeyPrefix: "GetBlockWithTxsQuery"
});
export const useGetTxDecode = buildUseVueQuery<TxDecodeRequest, TxDecodeResponse>({
  builderQueryFn: createGetTxDecode,
  queryKeyPrefix: "TxDecodeQuery"
});
export const useGetTxEncode = buildUseVueQuery<TxEncodeRequest, TxEncodeResponse>({
  builderQueryFn: createGetTxEncode,
  queryKeyPrefix: "TxEncodeQuery"
});
export const useGetTxEncodeAmino = buildUseVueQuery<TxEncodeAminoRequest, TxEncodeAminoResponse>({
  builderQueryFn: createGetTxEncodeAmino,
  queryKeyPrefix: "TxEncodeAminoQuery"
});
export const useGetTxDecodeAmino = buildUseVueQuery<TxDecodeAminoRequest, TxDecodeAminoResponse>({
  builderQueryFn: createGetTxDecodeAmino,
  queryKeyPrefix: "TxDecodeAminoQuery"
});