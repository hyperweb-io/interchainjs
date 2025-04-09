import { buildUseVueQuery } from "../../../vue-query";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse, TxDecodeRequest, TxDecodeResponse, TxEncodeRequest, TxEncodeResponse, TxEncodeAminoRequest, TxEncodeAminoResponse, TxDecodeAminoRequest, TxDecodeAminoResponse } from "./service";
import { getSimulate, getGetTx, getBroadcastTx, getGetTxsEvent, getGetBlockWithTxs, getTxDecode, getTxEncode, getTxEncodeAmino, getTxDecodeAmino } from "./service.rpc.func";
export const useGetSimulate = buildUseVueQuery<SimulateRequest, SimulateResponse>({
  builderQueryFn: getSimulate,
  queryKeyPrefix: "SimulateQuery"
});
export const useGetGetTx = buildUseVueQuery<GetTxRequest, GetTxResponse>({
  builderQueryFn: getGetTx,
  queryKeyPrefix: "GetTxQuery"
});
export const useGetBroadcastTx = buildUseVueQuery<BroadcastTxRequest, BroadcastTxResponse>({
  builderQueryFn: getBroadcastTx,
  queryKeyPrefix: "BroadcastTxQuery"
});
export const useGetGetTxsEvent = buildUseVueQuery<GetTxsEventRequest, GetTxsEventResponse>({
  builderQueryFn: getGetTxsEvent,
  queryKeyPrefix: "GetTxsEventQuery"
});
export const useGetGetBlockWithTxs = buildUseVueQuery<GetBlockWithTxsRequest, GetBlockWithTxsResponse>({
  builderQueryFn: getGetBlockWithTxs,
  queryKeyPrefix: "GetBlockWithTxsQuery"
});
export const useGetTxDecode = buildUseVueQuery<TxDecodeRequest, TxDecodeResponse>({
  builderQueryFn: getTxDecode,
  queryKeyPrefix: "TxDecodeQuery"
});
export const useGetTxEncode = buildUseVueQuery<TxEncodeRequest, TxEncodeResponse>({
  builderQueryFn: getTxEncode,
  queryKeyPrefix: "TxEncodeQuery"
});
export const useGetTxEncodeAmino = buildUseVueQuery<TxEncodeAminoRequest, TxEncodeAminoResponse>({
  builderQueryFn: getTxEncodeAmino,
  queryKeyPrefix: "TxEncodeAminoQuery"
});
export const useGetTxDecodeAmino = buildUseVueQuery<TxDecodeAminoRequest, TxDecodeAminoResponse>({
  builderQueryFn: getTxDecodeAmino,
  queryKeyPrefix: "TxDecodeAminoQuery"
});