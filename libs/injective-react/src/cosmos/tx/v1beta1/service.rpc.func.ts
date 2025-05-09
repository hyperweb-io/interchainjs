import { buildQuery } from "../../../helper-func-types";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse, TxDecodeRequest, TxDecodeResponse, TxEncodeRequest, TxEncodeResponse, TxEncodeAminoRequest, TxEncodeAminoResponse, TxDecodeAminoRequest, TxDecodeAminoResponse } from "./service";
export const getSimulate = buildQuery<SimulateRequest, SimulateResponse>({
  encode: SimulateRequest.encode,
  decode: SimulateResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "Simulate",
  deps: [SimulateRequest, SimulateResponse]
});
export const getTx = buildQuery<GetTxRequest, GetTxResponse>({
  encode: GetTxRequest.encode,
  decode: GetTxResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "GetTx",
  deps: [GetTxRequest, GetTxResponse]
});
export const getBroadcastTx = buildQuery<BroadcastTxRequest, BroadcastTxResponse>({
  encode: BroadcastTxRequest.encode,
  decode: BroadcastTxResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "BroadcastTx",
  deps: [BroadcastTxRequest, BroadcastTxResponse]
});
export const getTxsEvent = buildQuery<GetTxsEventRequest, GetTxsEventResponse>({
  encode: GetTxsEventRequest.encode,
  decode: GetTxsEventResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "GetTxsEvent",
  deps: [GetTxsEventRequest, GetTxsEventResponse]
});
export const getBlockWithTxs = buildQuery<GetBlockWithTxsRequest, GetBlockWithTxsResponse>({
  encode: GetBlockWithTxsRequest.encode,
  decode: GetBlockWithTxsResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "GetBlockWithTxs",
  deps: [GetBlockWithTxsRequest, GetBlockWithTxsResponse]
});
export const getTxDecode = buildQuery<TxDecodeRequest, TxDecodeResponse>({
  encode: TxDecodeRequest.encode,
  decode: TxDecodeResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "TxDecode",
  deps: [TxDecodeRequest, TxDecodeResponse]
});
export const getTxEncode = buildQuery<TxEncodeRequest, TxEncodeResponse>({
  encode: TxEncodeRequest.encode,
  decode: TxEncodeResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "TxEncode",
  deps: [TxEncodeRequest, TxEncodeResponse]
});
export const getTxEncodeAmino = buildQuery<TxEncodeAminoRequest, TxEncodeAminoResponse>({
  encode: TxEncodeAminoRequest.encode,
  decode: TxEncodeAminoResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "TxEncodeAmino",
  deps: [TxEncodeAminoRequest, TxEncodeAminoResponse]
});
export const getTxDecodeAmino = buildQuery<TxDecodeAminoRequest, TxDecodeAminoResponse>({
  encode: TxDecodeAminoRequest.encode,
  decode: TxDecodeAminoResponse.decode,
  service: "cosmos.tx.v1beta1.Service",
  method: "TxDecodeAmino",
  deps: [TxDecodeAminoRequest, TxDecodeAminoResponse]
});