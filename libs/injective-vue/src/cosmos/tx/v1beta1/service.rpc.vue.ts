import { buildUseVueQuery } from "../../../vue-query";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse, TxDecodeRequest, TxDecodeResponse, TxEncodeRequest, TxEncodeResponse, TxEncodeAminoRequest, TxEncodeAminoResponse, TxDecodeAminoRequest, TxDecodeAminoResponse } from "./service";
import { getSimulate, getTx, getBroadcastTx, getTxsEvent, getBlockWithTxs, getTxDecode, getTxEncode, getTxEncodeAmino, getTxDecodeAmino } from "./service.rpc.func";
/* Simulate simulates executing a transaction for estimating gas usage. */
export const useGetSimulate = buildUseVueQuery<SimulateRequest, SimulateResponse>({
  builderQueryFn: getSimulate,
  queryKeyPrefix: "SimulateQuery"
});
/* GetTx fetches a tx by hash. */
export const useGetTx = buildUseVueQuery<GetTxRequest, GetTxResponse>({
  builderQueryFn: getTx,
  queryKeyPrefix: "GetTxQuery"
});
/* BroadcastTx broadcast transaction. */
export const useGetBroadcastTx = buildUseVueQuery<BroadcastTxRequest, BroadcastTxResponse>({
  builderQueryFn: getBroadcastTx,
  queryKeyPrefix: "BroadcastTxQuery"
});
/* GetTxsEvent fetches txs by event. */
export const useGetTxsEvent = buildUseVueQuery<GetTxsEventRequest, GetTxsEventResponse>({
  builderQueryFn: getTxsEvent,
  queryKeyPrefix: "GetTxsEventQuery"
});
/* GetBlockWithTxs fetches a block with decoded txs.

 Since: cosmos-sdk 0.45.2 */
export const useGetBlockWithTxs = buildUseVueQuery<GetBlockWithTxsRequest, GetBlockWithTxsResponse>({
  builderQueryFn: getBlockWithTxs,
  queryKeyPrefix: "GetBlockWithTxsQuery"
});
/* TxDecode decodes the transaction.

 Since: cosmos-sdk 0.47 */
export const useGetTxDecode = buildUseVueQuery<TxDecodeRequest, TxDecodeResponse>({
  builderQueryFn: getTxDecode,
  queryKeyPrefix: "TxDecodeQuery"
});
/* TxEncode encodes the transaction.

 Since: cosmos-sdk 0.47 */
export const useGetTxEncode = buildUseVueQuery<TxEncodeRequest, TxEncodeResponse>({
  builderQueryFn: getTxEncode,
  queryKeyPrefix: "TxEncodeQuery"
});
/* TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.

 Since: cosmos-sdk 0.47 */
export const useGetTxEncodeAmino = buildUseVueQuery<TxEncodeAminoRequest, TxEncodeAminoResponse>({
  builderQueryFn: getTxEncodeAmino,
  queryKeyPrefix: "TxEncodeAminoQuery"
});
/* TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.

 Since: cosmos-sdk 0.47 */
export const useGetTxDecodeAmino = buildUseVueQuery<TxDecodeAminoRequest, TxDecodeAminoResponse>({
  builderQueryFn: getTxDecodeAmino,
  queryKeyPrefix: "TxDecodeAminoQuery"
});