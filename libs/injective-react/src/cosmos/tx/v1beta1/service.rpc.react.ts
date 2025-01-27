import { buildUseQuery } from "../../../react-query";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse, TxDecodeRequest, TxDecodeResponse, TxEncodeRequest, TxEncodeResponse, TxEncodeAminoRequest, TxEncodeAminoResponse, TxDecodeAminoRequest, TxDecodeAminoResponse } from "./service";
import { createGetSimulate, createGetGetTx, createGetBroadcastTx, createGetGetTxsEvent, createGetGetBlockWithTxs, createGetTxDecode, createGetTxEncode, createGetTxEncodeAmino, createGetTxDecodeAmino } from "./service.rpc.func";
export const useGetSimulate = buildUseQuery<SimulateRequest, SimulateResponse>({
  builderQueryFn: createGetSimulate,
  queryKeyPrefix: "SimulateQuery"
});
export const useGetGetTx = buildUseQuery<GetTxRequest, GetTxResponse>({
  builderQueryFn: createGetGetTx,
  queryKeyPrefix: "GetTxQuery"
});
export const useGetBroadcastTx = buildUseQuery<BroadcastTxRequest, BroadcastTxResponse>({
  builderQueryFn: createGetBroadcastTx,
  queryKeyPrefix: "BroadcastTxQuery"
});
export const useGetGetTxsEvent = buildUseQuery<GetTxsEventRequest, GetTxsEventResponse>({
  builderQueryFn: createGetGetTxsEvent,
  queryKeyPrefix: "GetTxsEventQuery"
});
export const useGetGetBlockWithTxs = buildUseQuery<GetBlockWithTxsRequest, GetBlockWithTxsResponse>({
  builderQueryFn: createGetGetBlockWithTxs,
  queryKeyPrefix: "GetBlockWithTxsQuery"
});
export const useGetTxDecode = buildUseQuery<TxDecodeRequest, TxDecodeResponse>({
  builderQueryFn: createGetTxDecode,
  queryKeyPrefix: "TxDecodeQuery"
});
export const useGetTxEncode = buildUseQuery<TxEncodeRequest, TxEncodeResponse>({
  builderQueryFn: createGetTxEncode,
  queryKeyPrefix: "TxEncodeQuery"
});
export const useGetTxEncodeAmino = buildUseQuery<TxEncodeAminoRequest, TxEncodeAminoResponse>({
  builderQueryFn: createGetTxEncodeAmino,
  queryKeyPrefix: "TxEncodeAminoQuery"
});
export const useGetTxDecodeAmino = buildUseQuery<TxDecodeAminoRequest, TxDecodeAminoResponse>({
  builderQueryFn: createGetTxDecodeAmino,
  queryKeyPrefix: "TxDecodeAminoQuery"
});