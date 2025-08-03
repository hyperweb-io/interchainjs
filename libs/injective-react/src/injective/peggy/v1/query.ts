import { Params, ParamsAmino } from "./params";
import { Valset, ValsetAmino, LastClaimEvent, LastClaimEventAmino } from "./types";
import { MsgValsetConfirm, MsgValsetConfirmAmino, MsgConfirmBatch, MsgConfirmBatchAmino } from "./msgs";
import { BatchFees, BatchFeesAmino } from "./pool";
import { OutgoingTxBatch, OutgoingTxBatchAmino, OutgoingTransferTx, OutgoingTransferTxAmino } from "./batch";
import { GenesisState, GenesisStateAmino } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * @name QueryParamsRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * @name QueryParamsRequestAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/injective.peggy.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * @name QueryParamsResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * @name QueryParamsResponseAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/injective.peggy.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * @name QueryCurrentValsetRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryCurrentValsetRequest
 */
export interface QueryCurrentValsetRequest {}
export interface QueryCurrentValsetRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryCurrentValsetRequest";
  value: Uint8Array;
}
/**
 * @name QueryCurrentValsetRequestAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryCurrentValsetRequest
 */
export interface QueryCurrentValsetRequestAmino {}
export interface QueryCurrentValsetRequestAminoMsg {
  type: "/injective.peggy.v1.QueryCurrentValsetRequest";
  value: QueryCurrentValsetRequestAmino;
}
/**
 * @name QueryCurrentValsetResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryCurrentValsetResponse
 */
export interface QueryCurrentValsetResponse {
  valset?: Valset;
}
export interface QueryCurrentValsetResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryCurrentValsetResponse";
  value: Uint8Array;
}
/**
 * @name QueryCurrentValsetResponseAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryCurrentValsetResponse
 */
export interface QueryCurrentValsetResponseAmino {
  valset?: ValsetAmino;
}
export interface QueryCurrentValsetResponseAminoMsg {
  type: "/injective.peggy.v1.QueryCurrentValsetResponse";
  value: QueryCurrentValsetResponseAmino;
}
/**
 * @name QueryValsetRequestRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryValsetRequestRequest
 */
export interface QueryValsetRequestRequest {
  nonce: bigint;
}
export interface QueryValsetRequestRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryValsetRequestRequest";
  value: Uint8Array;
}
/**
 * @name QueryValsetRequestRequestAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryValsetRequestRequest
 */
export interface QueryValsetRequestRequestAmino {
  nonce: string;
}
export interface QueryValsetRequestRequestAminoMsg {
  type: "/injective.peggy.v1.QueryValsetRequestRequest";
  value: QueryValsetRequestRequestAmino;
}
/**
 * @name QueryValsetRequestResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryValsetRequestResponse
 */
export interface QueryValsetRequestResponse {
  valset?: Valset;
}
export interface QueryValsetRequestResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryValsetRequestResponse";
  value: Uint8Array;
}
/**
 * @name QueryValsetRequestResponseAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryValsetRequestResponse
 */
export interface QueryValsetRequestResponseAmino {
  valset?: ValsetAmino;
}
export interface QueryValsetRequestResponseAminoMsg {
  type: "/injective.peggy.v1.QueryValsetRequestResponse";
  value: QueryValsetRequestResponseAmino;
}
/**
 * @name QueryValsetConfirmRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryValsetConfirmRequest
 */
export interface QueryValsetConfirmRequest {
  nonce: bigint;
  address: string;
}
export interface QueryValsetConfirmRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryValsetConfirmRequest";
  value: Uint8Array;
}
/**
 * @name QueryValsetConfirmRequestAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryValsetConfirmRequest
 */
export interface QueryValsetConfirmRequestAmino {
  nonce: string;
  address: string;
}
export interface QueryValsetConfirmRequestAminoMsg {
  type: "/injective.peggy.v1.QueryValsetConfirmRequest";
  value: QueryValsetConfirmRequestAmino;
}
/**
 * @name QueryValsetConfirmResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryValsetConfirmResponse
 */
export interface QueryValsetConfirmResponse {
  confirm?: MsgValsetConfirm;
}
export interface QueryValsetConfirmResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryValsetConfirmResponse";
  value: Uint8Array;
}
/**
 * @name QueryValsetConfirmResponseAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryValsetConfirmResponse
 */
export interface QueryValsetConfirmResponseAmino {
  confirm?: MsgValsetConfirmAmino;
}
export interface QueryValsetConfirmResponseAminoMsg {
  type: "/injective.peggy.v1.QueryValsetConfirmResponse";
  value: QueryValsetConfirmResponseAmino;
}
/**
 * @name QueryValsetConfirmsByNonceRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryValsetConfirmsByNonceRequest
 */
export interface QueryValsetConfirmsByNonceRequest {
  nonce: bigint;
}
export interface QueryValsetConfirmsByNonceRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryValsetConfirmsByNonceRequest";
  value: Uint8Array;
}
/**
 * @name QueryValsetConfirmsByNonceRequestAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryValsetConfirmsByNonceRequest
 */
export interface QueryValsetConfirmsByNonceRequestAmino {
  nonce: string;
}
export interface QueryValsetConfirmsByNonceRequestAminoMsg {
  type: "/injective.peggy.v1.QueryValsetConfirmsByNonceRequest";
  value: QueryValsetConfirmsByNonceRequestAmino;
}
/**
 * @name QueryValsetConfirmsByNonceResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryValsetConfirmsByNonceResponse
 */
export interface QueryValsetConfirmsByNonceResponse {
  confirms: MsgValsetConfirm[];
}
export interface QueryValsetConfirmsByNonceResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryValsetConfirmsByNonceResponse";
  value: Uint8Array;
}
/**
 * @name QueryValsetConfirmsByNonceResponseAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryValsetConfirmsByNonceResponse
 */
export interface QueryValsetConfirmsByNonceResponseAmino {
  confirms: MsgValsetConfirmAmino[];
}
export interface QueryValsetConfirmsByNonceResponseAminoMsg {
  type: "/injective.peggy.v1.QueryValsetConfirmsByNonceResponse";
  value: QueryValsetConfirmsByNonceResponseAmino;
}
/**
 * @name QueryLastValsetRequestsRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryLastValsetRequestsRequest
 */
export interface QueryLastValsetRequestsRequest {}
export interface QueryLastValsetRequestsRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryLastValsetRequestsRequest";
  value: Uint8Array;
}
/**
 * @name QueryLastValsetRequestsRequestAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryLastValsetRequestsRequest
 */
export interface QueryLastValsetRequestsRequestAmino {}
export interface QueryLastValsetRequestsRequestAminoMsg {
  type: "/injective.peggy.v1.QueryLastValsetRequestsRequest";
  value: QueryLastValsetRequestsRequestAmino;
}
/**
 * @name QueryLastValsetRequestsResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryLastValsetRequestsResponse
 */
export interface QueryLastValsetRequestsResponse {
  valsets: Valset[];
}
export interface QueryLastValsetRequestsResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryLastValsetRequestsResponse";
  value: Uint8Array;
}
/**
 * @name QueryLastValsetRequestsResponseAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryLastValsetRequestsResponse
 */
export interface QueryLastValsetRequestsResponseAmino {
  valsets: ValsetAmino[];
}
export interface QueryLastValsetRequestsResponseAminoMsg {
  type: "/injective.peggy.v1.QueryLastValsetRequestsResponse";
  value: QueryLastValsetRequestsResponseAmino;
}
/**
 * @name QueryLastPendingValsetRequestByAddrRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest
 */
export interface QueryLastPendingValsetRequestByAddrRequest {
  address: string;
}
export interface QueryLastPendingValsetRequestByAddrRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest";
  value: Uint8Array;
}
/**
 * @name QueryLastPendingValsetRequestByAddrRequestAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest
 */
export interface QueryLastPendingValsetRequestByAddrRequestAmino {
  address: string;
}
export interface QueryLastPendingValsetRequestByAddrRequestAminoMsg {
  type: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest";
  value: QueryLastPendingValsetRequestByAddrRequestAmino;
}
/**
 * @name QueryLastPendingValsetRequestByAddrResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse
 */
export interface QueryLastPendingValsetRequestByAddrResponse {
  valsets: Valset[];
}
export interface QueryLastPendingValsetRequestByAddrResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse";
  value: Uint8Array;
}
/**
 * @name QueryLastPendingValsetRequestByAddrResponseAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse
 */
export interface QueryLastPendingValsetRequestByAddrResponseAmino {
  valsets: ValsetAmino[];
}
export interface QueryLastPendingValsetRequestByAddrResponseAminoMsg {
  type: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse";
  value: QueryLastPendingValsetRequestByAddrResponseAmino;
}
/**
 * @name QueryBatchFeeRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryBatchFeeRequest
 */
export interface QueryBatchFeeRequest {}
export interface QueryBatchFeeRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryBatchFeeRequest";
  value: Uint8Array;
}
/**
 * @name QueryBatchFeeRequestAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryBatchFeeRequest
 */
export interface QueryBatchFeeRequestAmino {}
export interface QueryBatchFeeRequestAminoMsg {
  type: "/injective.peggy.v1.QueryBatchFeeRequest";
  value: QueryBatchFeeRequestAmino;
}
/**
 * @name QueryBatchFeeResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryBatchFeeResponse
 */
export interface QueryBatchFeeResponse {
  batchFees: BatchFees[];
}
export interface QueryBatchFeeResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryBatchFeeResponse";
  value: Uint8Array;
}
/**
 * @name QueryBatchFeeResponseAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryBatchFeeResponse
 */
export interface QueryBatchFeeResponseAmino {
  batchFees: BatchFeesAmino[];
}
export interface QueryBatchFeeResponseAminoMsg {
  type: "/injective.peggy.v1.QueryBatchFeeResponse";
  value: QueryBatchFeeResponseAmino;
}
/**
 * @name QueryLastPendingBatchRequestByAddrRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest
 */
export interface QueryLastPendingBatchRequestByAddrRequest {
  address: string;
}
export interface QueryLastPendingBatchRequestByAddrRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest";
  value: Uint8Array;
}
/**
 * @name QueryLastPendingBatchRequestByAddrRequestAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest
 */
export interface QueryLastPendingBatchRequestByAddrRequestAmino {
  address: string;
}
export interface QueryLastPendingBatchRequestByAddrRequestAminoMsg {
  type: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest";
  value: QueryLastPendingBatchRequestByAddrRequestAmino;
}
/**
 * @name QueryLastPendingBatchRequestByAddrResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse
 */
export interface QueryLastPendingBatchRequestByAddrResponse {
  batch?: OutgoingTxBatch;
}
export interface QueryLastPendingBatchRequestByAddrResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse";
  value: Uint8Array;
}
/**
 * @name QueryLastPendingBatchRequestByAddrResponseAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse
 */
export interface QueryLastPendingBatchRequestByAddrResponseAmino {
  batch?: OutgoingTxBatchAmino;
}
export interface QueryLastPendingBatchRequestByAddrResponseAminoMsg {
  type: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse";
  value: QueryLastPendingBatchRequestByAddrResponseAmino;
}
/**
 * @name QueryOutgoingTxBatchesRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryOutgoingTxBatchesRequest
 */
export interface QueryOutgoingTxBatchesRequest {}
export interface QueryOutgoingTxBatchesRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryOutgoingTxBatchesRequest";
  value: Uint8Array;
}
/**
 * @name QueryOutgoingTxBatchesRequestAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryOutgoingTxBatchesRequest
 */
export interface QueryOutgoingTxBatchesRequestAmino {}
export interface QueryOutgoingTxBatchesRequestAminoMsg {
  type: "/injective.peggy.v1.QueryOutgoingTxBatchesRequest";
  value: QueryOutgoingTxBatchesRequestAmino;
}
/**
 * @name QueryOutgoingTxBatchesResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryOutgoingTxBatchesResponse
 */
export interface QueryOutgoingTxBatchesResponse {
  batches: OutgoingTxBatch[];
}
export interface QueryOutgoingTxBatchesResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryOutgoingTxBatchesResponse";
  value: Uint8Array;
}
/**
 * @name QueryOutgoingTxBatchesResponseAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryOutgoingTxBatchesResponse
 */
export interface QueryOutgoingTxBatchesResponseAmino {
  batches: OutgoingTxBatchAmino[];
}
export interface QueryOutgoingTxBatchesResponseAminoMsg {
  type: "/injective.peggy.v1.QueryOutgoingTxBatchesResponse";
  value: QueryOutgoingTxBatchesResponseAmino;
}
/**
 * @name QueryBatchRequestByNonceRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryBatchRequestByNonceRequest
 */
export interface QueryBatchRequestByNonceRequest {
  nonce: bigint;
  contractAddress: string;
}
export interface QueryBatchRequestByNonceRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryBatchRequestByNonceRequest";
  value: Uint8Array;
}
/**
 * @name QueryBatchRequestByNonceRequestAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryBatchRequestByNonceRequest
 */
export interface QueryBatchRequestByNonceRequestAmino {
  nonce: string;
  contract_address: string;
}
export interface QueryBatchRequestByNonceRequestAminoMsg {
  type: "/injective.peggy.v1.QueryBatchRequestByNonceRequest";
  value: QueryBatchRequestByNonceRequestAmino;
}
/**
 * @name QueryBatchRequestByNonceResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryBatchRequestByNonceResponse
 */
export interface QueryBatchRequestByNonceResponse {
  batch?: OutgoingTxBatch;
}
export interface QueryBatchRequestByNonceResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryBatchRequestByNonceResponse";
  value: Uint8Array;
}
/**
 * @name QueryBatchRequestByNonceResponseAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryBatchRequestByNonceResponse
 */
export interface QueryBatchRequestByNonceResponseAmino {
  batch?: OutgoingTxBatchAmino;
}
export interface QueryBatchRequestByNonceResponseAminoMsg {
  type: "/injective.peggy.v1.QueryBatchRequestByNonceResponse";
  value: QueryBatchRequestByNonceResponseAmino;
}
/**
 * @name QueryBatchConfirmsRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryBatchConfirmsRequest
 */
export interface QueryBatchConfirmsRequest {
  nonce: bigint;
  contractAddress: string;
}
export interface QueryBatchConfirmsRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryBatchConfirmsRequest";
  value: Uint8Array;
}
/**
 * @name QueryBatchConfirmsRequestAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryBatchConfirmsRequest
 */
export interface QueryBatchConfirmsRequestAmino {
  nonce: string;
  contract_address: string;
}
export interface QueryBatchConfirmsRequestAminoMsg {
  type: "/injective.peggy.v1.QueryBatchConfirmsRequest";
  value: QueryBatchConfirmsRequestAmino;
}
/**
 * @name QueryBatchConfirmsResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryBatchConfirmsResponse
 */
export interface QueryBatchConfirmsResponse {
  confirms: MsgConfirmBatch[];
}
export interface QueryBatchConfirmsResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryBatchConfirmsResponse";
  value: Uint8Array;
}
/**
 * @name QueryBatchConfirmsResponseAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryBatchConfirmsResponse
 */
export interface QueryBatchConfirmsResponseAmino {
  confirms: MsgConfirmBatchAmino[];
}
export interface QueryBatchConfirmsResponseAminoMsg {
  type: "/injective.peggy.v1.QueryBatchConfirmsResponse";
  value: QueryBatchConfirmsResponseAmino;
}
/**
 * @name QueryLastEventByAddrRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryLastEventByAddrRequest
 */
export interface QueryLastEventByAddrRequest {
  address: string;
}
export interface QueryLastEventByAddrRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryLastEventByAddrRequest";
  value: Uint8Array;
}
/**
 * @name QueryLastEventByAddrRequestAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryLastEventByAddrRequest
 */
export interface QueryLastEventByAddrRequestAmino {
  address: string;
}
export interface QueryLastEventByAddrRequestAminoMsg {
  type: "/injective.peggy.v1.QueryLastEventByAddrRequest";
  value: QueryLastEventByAddrRequestAmino;
}
/**
 * @name QueryLastEventByAddrResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryLastEventByAddrResponse
 */
export interface QueryLastEventByAddrResponse {
  lastClaimEvent?: LastClaimEvent;
}
export interface QueryLastEventByAddrResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryLastEventByAddrResponse";
  value: Uint8Array;
}
/**
 * @name QueryLastEventByAddrResponseAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryLastEventByAddrResponse
 */
export interface QueryLastEventByAddrResponseAmino {
  last_claim_event?: LastClaimEventAmino;
}
export interface QueryLastEventByAddrResponseAminoMsg {
  type: "/injective.peggy.v1.QueryLastEventByAddrResponse";
  value: QueryLastEventByAddrResponseAmino;
}
/**
 * @name QueryERC20ToDenomRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryERC20ToDenomRequest
 */
export interface QueryERC20ToDenomRequest {
  erc20: string;
}
export interface QueryERC20ToDenomRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryERC20ToDenomRequest";
  value: Uint8Array;
}
/**
 * @name QueryERC20ToDenomRequestAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryERC20ToDenomRequest
 */
export interface QueryERC20ToDenomRequestAmino {
  erc20: string;
}
export interface QueryERC20ToDenomRequestAminoMsg {
  type: "/injective.peggy.v1.QueryERC20ToDenomRequest";
  value: QueryERC20ToDenomRequestAmino;
}
/**
 * @name QueryERC20ToDenomResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryERC20ToDenomResponse
 */
export interface QueryERC20ToDenomResponse {
  denom: string;
  cosmosOriginated: boolean;
}
export interface QueryERC20ToDenomResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryERC20ToDenomResponse";
  value: Uint8Array;
}
/**
 * @name QueryERC20ToDenomResponseAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryERC20ToDenomResponse
 */
export interface QueryERC20ToDenomResponseAmino {
  denom: string;
  cosmos_originated: boolean;
}
export interface QueryERC20ToDenomResponseAminoMsg {
  type: "/injective.peggy.v1.QueryERC20ToDenomResponse";
  value: QueryERC20ToDenomResponseAmino;
}
/**
 * @name QueryDenomToERC20Request
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryDenomToERC20Request
 */
export interface QueryDenomToERC20Request {
  denom: string;
}
export interface QueryDenomToERC20RequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryDenomToERC20Request";
  value: Uint8Array;
}
/**
 * @name QueryDenomToERC20RequestAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryDenomToERC20Request
 */
export interface QueryDenomToERC20RequestAmino {
  denom: string;
}
export interface QueryDenomToERC20RequestAminoMsg {
  type: "/injective.peggy.v1.QueryDenomToERC20Request";
  value: QueryDenomToERC20RequestAmino;
}
/**
 * @name QueryDenomToERC20Response
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryDenomToERC20Response
 */
export interface QueryDenomToERC20Response {
  erc20: string;
  cosmosOriginated: boolean;
}
export interface QueryDenomToERC20ResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryDenomToERC20Response";
  value: Uint8Array;
}
/**
 * @name QueryDenomToERC20ResponseAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryDenomToERC20Response
 */
export interface QueryDenomToERC20ResponseAmino {
  erc20: string;
  cosmos_originated: boolean;
}
export interface QueryDenomToERC20ResponseAminoMsg {
  type: "/injective.peggy.v1.QueryDenomToERC20Response";
  value: QueryDenomToERC20ResponseAmino;
}
/**
 * @name QueryDelegateKeysByValidatorAddress
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryDelegateKeysByValidatorAddress
 */
export interface QueryDelegateKeysByValidatorAddress {
  validatorAddress: string;
}
export interface QueryDelegateKeysByValidatorAddressProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddress";
  value: Uint8Array;
}
/**
 * @name QueryDelegateKeysByValidatorAddressAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryDelegateKeysByValidatorAddress
 */
export interface QueryDelegateKeysByValidatorAddressAmino {
  validator_address: string;
}
export interface QueryDelegateKeysByValidatorAddressAminoMsg {
  type: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddress";
  value: QueryDelegateKeysByValidatorAddressAmino;
}
/**
 * @name QueryDelegateKeysByValidatorAddressResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse
 */
export interface QueryDelegateKeysByValidatorAddressResponse {
  ethAddress: string;
  orchestratorAddress: string;
}
export interface QueryDelegateKeysByValidatorAddressResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse";
  value: Uint8Array;
}
/**
 * @name QueryDelegateKeysByValidatorAddressResponseAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse
 */
export interface QueryDelegateKeysByValidatorAddressResponseAmino {
  eth_address: string;
  orchestrator_address: string;
}
export interface QueryDelegateKeysByValidatorAddressResponseAminoMsg {
  type: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse";
  value: QueryDelegateKeysByValidatorAddressResponseAmino;
}
/**
 * @name QueryDelegateKeysByEthAddress
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryDelegateKeysByEthAddress
 */
export interface QueryDelegateKeysByEthAddress {
  ethAddress: string;
}
export interface QueryDelegateKeysByEthAddressProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryDelegateKeysByEthAddress";
  value: Uint8Array;
}
/**
 * @name QueryDelegateKeysByEthAddressAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryDelegateKeysByEthAddress
 */
export interface QueryDelegateKeysByEthAddressAmino {
  eth_address: string;
}
export interface QueryDelegateKeysByEthAddressAminoMsg {
  type: "/injective.peggy.v1.QueryDelegateKeysByEthAddress";
  value: QueryDelegateKeysByEthAddressAmino;
}
/**
 * @name QueryDelegateKeysByEthAddressResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryDelegateKeysByEthAddressResponse
 */
export interface QueryDelegateKeysByEthAddressResponse {
  validatorAddress: string;
  orchestratorAddress: string;
}
export interface QueryDelegateKeysByEthAddressResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryDelegateKeysByEthAddressResponse";
  value: Uint8Array;
}
/**
 * @name QueryDelegateKeysByEthAddressResponseAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryDelegateKeysByEthAddressResponse
 */
export interface QueryDelegateKeysByEthAddressResponseAmino {
  validator_address: string;
  orchestrator_address: string;
}
export interface QueryDelegateKeysByEthAddressResponseAminoMsg {
  type: "/injective.peggy.v1.QueryDelegateKeysByEthAddressResponse";
  value: QueryDelegateKeysByEthAddressResponseAmino;
}
/**
 * @name QueryDelegateKeysByOrchestratorAddress
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress
 */
export interface QueryDelegateKeysByOrchestratorAddress {
  orchestratorAddress: string;
}
export interface QueryDelegateKeysByOrchestratorAddressProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress";
  value: Uint8Array;
}
/**
 * @name QueryDelegateKeysByOrchestratorAddressAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress
 */
export interface QueryDelegateKeysByOrchestratorAddressAmino {
  orchestrator_address: string;
}
export interface QueryDelegateKeysByOrchestratorAddressAminoMsg {
  type: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress";
  value: QueryDelegateKeysByOrchestratorAddressAmino;
}
/**
 * @name QueryDelegateKeysByOrchestratorAddressResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse
 */
export interface QueryDelegateKeysByOrchestratorAddressResponse {
  validatorAddress: string;
  ethAddress: string;
}
export interface QueryDelegateKeysByOrchestratorAddressResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse";
  value: Uint8Array;
}
/**
 * @name QueryDelegateKeysByOrchestratorAddressResponseAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse
 */
export interface QueryDelegateKeysByOrchestratorAddressResponseAmino {
  validator_address: string;
  eth_address: string;
}
export interface QueryDelegateKeysByOrchestratorAddressResponseAminoMsg {
  type: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse";
  value: QueryDelegateKeysByOrchestratorAddressResponseAmino;
}
/**
 * @name QueryPendingSendToEth
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryPendingSendToEth
 */
export interface QueryPendingSendToEth {
  senderAddress: string;
}
export interface QueryPendingSendToEthProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryPendingSendToEth";
  value: Uint8Array;
}
/**
 * @name QueryPendingSendToEthAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryPendingSendToEth
 */
export interface QueryPendingSendToEthAmino {
  sender_address: string;
}
export interface QueryPendingSendToEthAminoMsg {
  type: "/injective.peggy.v1.QueryPendingSendToEth";
  value: QueryPendingSendToEthAmino;
}
/**
 * @name QueryPendingSendToEthResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryPendingSendToEthResponse
 */
export interface QueryPendingSendToEthResponse {
  transfersInBatches: OutgoingTransferTx[];
  unbatchedTransfers: OutgoingTransferTx[];
}
export interface QueryPendingSendToEthResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryPendingSendToEthResponse";
  value: Uint8Array;
}
/**
 * @name QueryPendingSendToEthResponseAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryPendingSendToEthResponse
 */
export interface QueryPendingSendToEthResponseAmino {
  transfers_in_batches: OutgoingTransferTxAmino[];
  unbatched_transfers: OutgoingTransferTxAmino[];
}
export interface QueryPendingSendToEthResponseAminoMsg {
  type: "/injective.peggy.v1.QueryPendingSendToEthResponse";
  value: QueryPendingSendToEthResponseAmino;
}
/**
 * QueryModuleStateRequest is the request type for the Query/PeggyModuleState
 * RPC method.
 * @name QueryModuleStateRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryModuleStateRequest
 */
export interface QueryModuleStateRequest {}
export interface QueryModuleStateRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryModuleStateRequest";
  value: Uint8Array;
}
/**
 * QueryModuleStateRequest is the request type for the Query/PeggyModuleState
 * RPC method.
 * @name QueryModuleStateRequestAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryModuleStateRequest
 */
export interface QueryModuleStateRequestAmino {}
export interface QueryModuleStateRequestAminoMsg {
  type: "/injective.peggy.v1.QueryModuleStateRequest";
  value: QueryModuleStateRequestAmino;
}
/**
 * QueryModuleStateResponse is the response type for the Query/PeggyModuleState
 * RPC method.
 * @name QueryModuleStateResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryModuleStateResponse
 */
export interface QueryModuleStateResponse {
  state?: GenesisState;
}
export interface QueryModuleStateResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryModuleStateResponse";
  value: Uint8Array;
}
/**
 * QueryModuleStateResponse is the response type for the Query/PeggyModuleState
 * RPC method.
 * @name QueryModuleStateResponseAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryModuleStateResponse
 */
export interface QueryModuleStateResponseAmino {
  state?: GenesisStateAmino;
}
export interface QueryModuleStateResponseAminoMsg {
  type: "/injective.peggy.v1.QueryModuleStateResponse";
  value: QueryModuleStateResponseAmino;
}
/**
 * @name MissingNoncesRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.MissingNoncesRequest
 */
export interface MissingNoncesRequest {}
export interface MissingNoncesRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.MissingNoncesRequest";
  value: Uint8Array;
}
/**
 * @name MissingNoncesRequestAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.MissingNoncesRequest
 */
export interface MissingNoncesRequestAmino {}
export interface MissingNoncesRequestAminoMsg {
  type: "/injective.peggy.v1.MissingNoncesRequest";
  value: MissingNoncesRequestAmino;
}
/**
 * @name MissingNoncesResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.MissingNoncesResponse
 */
export interface MissingNoncesResponse {
  operatorAddresses: string[];
}
export interface MissingNoncesResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MissingNoncesResponse";
  value: Uint8Array;
}
/**
 * @name MissingNoncesResponseAmino
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.MissingNoncesResponse
 */
export interface MissingNoncesResponseAmino {
  operator_addresses: string[];
}
export interface MissingNoncesResponseAminoMsg {
  type: "/injective.peggy.v1.MissingNoncesResponse";
  value: MissingNoncesResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * @name QueryParamsRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/injective.peggy.v1.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
/**
 * @name QueryParamsResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/injective.peggy.v1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryParamsResponse.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};
function createBaseQueryCurrentValsetRequest(): QueryCurrentValsetRequest {
  return {};
}
/**
 * @name QueryCurrentValsetRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryCurrentValsetRequest
 */
export const QueryCurrentValsetRequest = {
  typeUrl: "/injective.peggy.v1.QueryCurrentValsetRequest",
  is(o: any): o is QueryCurrentValsetRequest {
    return o && o.$typeUrl === QueryCurrentValsetRequest.typeUrl;
  },
  isAmino(o: any): o is QueryCurrentValsetRequestAmino {
    return o && o.$typeUrl === QueryCurrentValsetRequest.typeUrl;
  },
  encode(_: QueryCurrentValsetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentValsetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentValsetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryCurrentValsetRequest>): QueryCurrentValsetRequest {
    const message = createBaseQueryCurrentValsetRequest();
    return message;
  },
  fromAmino(_: QueryCurrentValsetRequestAmino): QueryCurrentValsetRequest {
    const message = createBaseQueryCurrentValsetRequest();
    return message;
  },
  toAmino(_: QueryCurrentValsetRequest): QueryCurrentValsetRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCurrentValsetRequestAminoMsg): QueryCurrentValsetRequest {
    return QueryCurrentValsetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentValsetRequestProtoMsg): QueryCurrentValsetRequest {
    return QueryCurrentValsetRequest.decode(message.value);
  },
  toProto(message: QueryCurrentValsetRequest): Uint8Array {
    return QueryCurrentValsetRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentValsetRequest): QueryCurrentValsetRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryCurrentValsetRequest",
      value: QueryCurrentValsetRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryCurrentValsetResponse(): QueryCurrentValsetResponse {
  return {
    valset: undefined
  };
}
/**
 * @name QueryCurrentValsetResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryCurrentValsetResponse
 */
export const QueryCurrentValsetResponse = {
  typeUrl: "/injective.peggy.v1.QueryCurrentValsetResponse",
  is(o: any): o is QueryCurrentValsetResponse {
    return o && o.$typeUrl === QueryCurrentValsetResponse.typeUrl;
  },
  isAmino(o: any): o is QueryCurrentValsetResponseAmino {
    return o && o.$typeUrl === QueryCurrentValsetResponse.typeUrl;
  },
  encode(message: QueryCurrentValsetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valset !== undefined) {
      Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentValsetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentValsetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valset = Valset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCurrentValsetResponse>): QueryCurrentValsetResponse {
    const message = createBaseQueryCurrentValsetResponse();
    message.valset = object.valset !== undefined && object.valset !== null ? Valset.fromPartial(object.valset) : undefined;
    return message;
  },
  fromAmino(object: QueryCurrentValsetResponseAmino): QueryCurrentValsetResponse {
    const message = createBaseQueryCurrentValsetResponse();
    if (object.valset !== undefined && object.valset !== null) {
      message.valset = Valset.fromAmino(object.valset);
    }
    return message;
  },
  toAmino(message: QueryCurrentValsetResponse): QueryCurrentValsetResponseAmino {
    const obj: any = {};
    obj.valset = message.valset ? Valset.toAmino(message.valset) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentValsetResponseAminoMsg): QueryCurrentValsetResponse {
    return QueryCurrentValsetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentValsetResponseProtoMsg): QueryCurrentValsetResponse {
    return QueryCurrentValsetResponse.decode(message.value);
  },
  toProto(message: QueryCurrentValsetResponse): Uint8Array {
    return QueryCurrentValsetResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentValsetResponse): QueryCurrentValsetResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryCurrentValsetResponse",
      value: QueryCurrentValsetResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryCurrentValsetResponse.typeUrl)) {
      return;
    }
    Valset.registerTypeUrl();
  }
};
function createBaseQueryValsetRequestRequest(): QueryValsetRequestRequest {
  return {
    nonce: BigInt(0)
  };
}
/**
 * @name QueryValsetRequestRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryValsetRequestRequest
 */
export const QueryValsetRequestRequest = {
  typeUrl: "/injective.peggy.v1.QueryValsetRequestRequest",
  is(o: any): o is QueryValsetRequestRequest {
    return o && (o.$typeUrl === QueryValsetRequestRequest.typeUrl || typeof o.nonce === "bigint");
  },
  isAmino(o: any): o is QueryValsetRequestRequestAmino {
    return o && (o.$typeUrl === QueryValsetRequestRequest.typeUrl || typeof o.nonce === "bigint");
  },
  encode(message: QueryValsetRequestRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValsetRequestRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryValsetRequestRequest>): QueryValsetRequestRequest {
    const message = createBaseQueryValsetRequestRequest();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryValsetRequestRequestAmino): QueryValsetRequestRequest {
    const message = createBaseQueryValsetRequestRequest();
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce);
    }
    return message;
  },
  toAmino(message: QueryValsetRequestRequest): QueryValsetRequestRequestAmino {
    const obj: any = {};
    obj.nonce = message.nonce !== BigInt(0) ? message.nonce?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValsetRequestRequestAminoMsg): QueryValsetRequestRequest {
    return QueryValsetRequestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValsetRequestRequestProtoMsg): QueryValsetRequestRequest {
    return QueryValsetRequestRequest.decode(message.value);
  },
  toProto(message: QueryValsetRequestRequest): Uint8Array {
    return QueryValsetRequestRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValsetRequestRequest): QueryValsetRequestRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryValsetRequestRequest",
      value: QueryValsetRequestRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryValsetRequestResponse(): QueryValsetRequestResponse {
  return {
    valset: undefined
  };
}
/**
 * @name QueryValsetRequestResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryValsetRequestResponse
 */
export const QueryValsetRequestResponse = {
  typeUrl: "/injective.peggy.v1.QueryValsetRequestResponse",
  is(o: any): o is QueryValsetRequestResponse {
    return o && o.$typeUrl === QueryValsetRequestResponse.typeUrl;
  },
  isAmino(o: any): o is QueryValsetRequestResponseAmino {
    return o && o.$typeUrl === QueryValsetRequestResponse.typeUrl;
  },
  encode(message: QueryValsetRequestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valset !== undefined) {
      Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValsetRequestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valset = Valset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryValsetRequestResponse>): QueryValsetRequestResponse {
    const message = createBaseQueryValsetRequestResponse();
    message.valset = object.valset !== undefined && object.valset !== null ? Valset.fromPartial(object.valset) : undefined;
    return message;
  },
  fromAmino(object: QueryValsetRequestResponseAmino): QueryValsetRequestResponse {
    const message = createBaseQueryValsetRequestResponse();
    if (object.valset !== undefined && object.valset !== null) {
      message.valset = Valset.fromAmino(object.valset);
    }
    return message;
  },
  toAmino(message: QueryValsetRequestResponse): QueryValsetRequestResponseAmino {
    const obj: any = {};
    obj.valset = message.valset ? Valset.toAmino(message.valset) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValsetRequestResponseAminoMsg): QueryValsetRequestResponse {
    return QueryValsetRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValsetRequestResponseProtoMsg): QueryValsetRequestResponse {
    return QueryValsetRequestResponse.decode(message.value);
  },
  toProto(message: QueryValsetRequestResponse): Uint8Array {
    return QueryValsetRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValsetRequestResponse): QueryValsetRequestResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryValsetRequestResponse",
      value: QueryValsetRequestResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryValsetRequestResponse.typeUrl)) {
      return;
    }
    Valset.registerTypeUrl();
  }
};
function createBaseQueryValsetConfirmRequest(): QueryValsetConfirmRequest {
  return {
    nonce: BigInt(0),
    address: ""
  };
}
/**
 * @name QueryValsetConfirmRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryValsetConfirmRequest
 */
export const QueryValsetConfirmRequest = {
  typeUrl: "/injective.peggy.v1.QueryValsetConfirmRequest",
  is(o: any): o is QueryValsetConfirmRequest {
    return o && (o.$typeUrl === QueryValsetConfirmRequest.typeUrl || typeof o.nonce === "bigint" && typeof o.address === "string");
  },
  isAmino(o: any): o is QueryValsetConfirmRequestAmino {
    return o && (o.$typeUrl === QueryValsetConfirmRequest.typeUrl || typeof o.nonce === "bigint" && typeof o.address === "string");
  },
  encode(message: QueryValsetConfirmRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValsetConfirmRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetConfirmRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryValsetConfirmRequest>): QueryValsetConfirmRequest {
    const message = createBaseQueryValsetConfirmRequest();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryValsetConfirmRequestAmino): QueryValsetConfirmRequest {
    const message = createBaseQueryValsetConfirmRequest();
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryValsetConfirmRequest): QueryValsetConfirmRequestAmino {
    const obj: any = {};
    obj.nonce = message.nonce !== BigInt(0) ? message.nonce?.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryValsetConfirmRequestAminoMsg): QueryValsetConfirmRequest {
    return QueryValsetConfirmRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValsetConfirmRequestProtoMsg): QueryValsetConfirmRequest {
    return QueryValsetConfirmRequest.decode(message.value);
  },
  toProto(message: QueryValsetConfirmRequest): Uint8Array {
    return QueryValsetConfirmRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValsetConfirmRequest): QueryValsetConfirmRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryValsetConfirmRequest",
      value: QueryValsetConfirmRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryValsetConfirmResponse(): QueryValsetConfirmResponse {
  return {
    confirm: undefined
  };
}
/**
 * @name QueryValsetConfirmResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryValsetConfirmResponse
 */
export const QueryValsetConfirmResponse = {
  typeUrl: "/injective.peggy.v1.QueryValsetConfirmResponse",
  is(o: any): o is QueryValsetConfirmResponse {
    return o && o.$typeUrl === QueryValsetConfirmResponse.typeUrl;
  },
  isAmino(o: any): o is QueryValsetConfirmResponseAmino {
    return o && o.$typeUrl === QueryValsetConfirmResponse.typeUrl;
  },
  encode(message: QueryValsetConfirmResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.confirm !== undefined) {
      MsgValsetConfirm.encode(message.confirm, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValsetConfirmResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirm = MsgValsetConfirm.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryValsetConfirmResponse>): QueryValsetConfirmResponse {
    const message = createBaseQueryValsetConfirmResponse();
    message.confirm = object.confirm !== undefined && object.confirm !== null ? MsgValsetConfirm.fromPartial(object.confirm) : undefined;
    return message;
  },
  fromAmino(object: QueryValsetConfirmResponseAmino): QueryValsetConfirmResponse {
    const message = createBaseQueryValsetConfirmResponse();
    if (object.confirm !== undefined && object.confirm !== null) {
      message.confirm = MsgValsetConfirm.fromAmino(object.confirm);
    }
    return message;
  },
  toAmino(message: QueryValsetConfirmResponse): QueryValsetConfirmResponseAmino {
    const obj: any = {};
    obj.confirm = message.confirm ? MsgValsetConfirm.toAmino(message.confirm) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValsetConfirmResponseAminoMsg): QueryValsetConfirmResponse {
    return QueryValsetConfirmResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValsetConfirmResponseProtoMsg): QueryValsetConfirmResponse {
    return QueryValsetConfirmResponse.decode(message.value);
  },
  toProto(message: QueryValsetConfirmResponse): Uint8Array {
    return QueryValsetConfirmResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValsetConfirmResponse): QueryValsetConfirmResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryValsetConfirmResponse",
      value: QueryValsetConfirmResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryValsetConfirmResponse.typeUrl)) {
      return;
    }
    MsgValsetConfirm.registerTypeUrl();
  }
};
function createBaseQueryValsetConfirmsByNonceRequest(): QueryValsetConfirmsByNonceRequest {
  return {
    nonce: BigInt(0)
  };
}
/**
 * @name QueryValsetConfirmsByNonceRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryValsetConfirmsByNonceRequest
 */
export const QueryValsetConfirmsByNonceRequest = {
  typeUrl: "/injective.peggy.v1.QueryValsetConfirmsByNonceRequest",
  is(o: any): o is QueryValsetConfirmsByNonceRequest {
    return o && (o.$typeUrl === QueryValsetConfirmsByNonceRequest.typeUrl || typeof o.nonce === "bigint");
  },
  isAmino(o: any): o is QueryValsetConfirmsByNonceRequestAmino {
    return o && (o.$typeUrl === QueryValsetConfirmsByNonceRequest.typeUrl || typeof o.nonce === "bigint");
  },
  encode(message: QueryValsetConfirmsByNonceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValsetConfirmsByNonceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetConfirmsByNonceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryValsetConfirmsByNonceRequest>): QueryValsetConfirmsByNonceRequest {
    const message = createBaseQueryValsetConfirmsByNonceRequest();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryValsetConfirmsByNonceRequestAmino): QueryValsetConfirmsByNonceRequest {
    const message = createBaseQueryValsetConfirmsByNonceRequest();
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce);
    }
    return message;
  },
  toAmino(message: QueryValsetConfirmsByNonceRequest): QueryValsetConfirmsByNonceRequestAmino {
    const obj: any = {};
    obj.nonce = message.nonce !== BigInt(0) ? message.nonce?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValsetConfirmsByNonceRequestAminoMsg): QueryValsetConfirmsByNonceRequest {
    return QueryValsetConfirmsByNonceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValsetConfirmsByNonceRequestProtoMsg): QueryValsetConfirmsByNonceRequest {
    return QueryValsetConfirmsByNonceRequest.decode(message.value);
  },
  toProto(message: QueryValsetConfirmsByNonceRequest): Uint8Array {
    return QueryValsetConfirmsByNonceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValsetConfirmsByNonceRequest): QueryValsetConfirmsByNonceRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryValsetConfirmsByNonceRequest",
      value: QueryValsetConfirmsByNonceRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryValsetConfirmsByNonceResponse(): QueryValsetConfirmsByNonceResponse {
  return {
    confirms: []
  };
}
/**
 * @name QueryValsetConfirmsByNonceResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryValsetConfirmsByNonceResponse
 */
export const QueryValsetConfirmsByNonceResponse = {
  typeUrl: "/injective.peggy.v1.QueryValsetConfirmsByNonceResponse",
  is(o: any): o is QueryValsetConfirmsByNonceResponse {
    return o && (o.$typeUrl === QueryValsetConfirmsByNonceResponse.typeUrl || Array.isArray(o.confirms) && (!o.confirms.length || MsgValsetConfirm.is(o.confirms[0])));
  },
  isAmino(o: any): o is QueryValsetConfirmsByNonceResponseAmino {
    return o && (o.$typeUrl === QueryValsetConfirmsByNonceResponse.typeUrl || Array.isArray(o.confirms) && (!o.confirms.length || MsgValsetConfirm.isAmino(o.confirms[0])));
  },
  encode(message: QueryValsetConfirmsByNonceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.confirms) {
      MsgValsetConfirm.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValsetConfirmsByNonceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetConfirmsByNonceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirms.push(MsgValsetConfirm.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryValsetConfirmsByNonceResponse>): QueryValsetConfirmsByNonceResponse {
    const message = createBaseQueryValsetConfirmsByNonceResponse();
    message.confirms = object.confirms?.map(e => MsgValsetConfirm.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryValsetConfirmsByNonceResponseAmino): QueryValsetConfirmsByNonceResponse {
    const message = createBaseQueryValsetConfirmsByNonceResponse();
    message.confirms = object.confirms?.map(e => MsgValsetConfirm.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryValsetConfirmsByNonceResponse): QueryValsetConfirmsByNonceResponseAmino {
    const obj: any = {};
    if (message.confirms) {
      obj.confirms = message.confirms.map(e => e ? MsgValsetConfirm.toAmino(e) : undefined);
    } else {
      obj.confirms = message.confirms;
    }
    return obj;
  },
  fromAminoMsg(object: QueryValsetConfirmsByNonceResponseAminoMsg): QueryValsetConfirmsByNonceResponse {
    return QueryValsetConfirmsByNonceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValsetConfirmsByNonceResponseProtoMsg): QueryValsetConfirmsByNonceResponse {
    return QueryValsetConfirmsByNonceResponse.decode(message.value);
  },
  toProto(message: QueryValsetConfirmsByNonceResponse): Uint8Array {
    return QueryValsetConfirmsByNonceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValsetConfirmsByNonceResponse): QueryValsetConfirmsByNonceResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryValsetConfirmsByNonceResponse",
      value: QueryValsetConfirmsByNonceResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryValsetConfirmsByNonceResponse.typeUrl)) {
      return;
    }
    MsgValsetConfirm.registerTypeUrl();
  }
};
function createBaseQueryLastValsetRequestsRequest(): QueryLastValsetRequestsRequest {
  return {};
}
/**
 * @name QueryLastValsetRequestsRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryLastValsetRequestsRequest
 */
export const QueryLastValsetRequestsRequest = {
  typeUrl: "/injective.peggy.v1.QueryLastValsetRequestsRequest",
  is(o: any): o is QueryLastValsetRequestsRequest {
    return o && o.$typeUrl === QueryLastValsetRequestsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryLastValsetRequestsRequestAmino {
    return o && o.$typeUrl === QueryLastValsetRequestsRequest.typeUrl;
  },
  encode(_: QueryLastValsetRequestsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastValsetRequestsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastValsetRequestsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryLastValsetRequestsRequest>): QueryLastValsetRequestsRequest {
    const message = createBaseQueryLastValsetRequestsRequest();
    return message;
  },
  fromAmino(_: QueryLastValsetRequestsRequestAmino): QueryLastValsetRequestsRequest {
    const message = createBaseQueryLastValsetRequestsRequest();
    return message;
  },
  toAmino(_: QueryLastValsetRequestsRequest): QueryLastValsetRequestsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryLastValsetRequestsRequestAminoMsg): QueryLastValsetRequestsRequest {
    return QueryLastValsetRequestsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastValsetRequestsRequestProtoMsg): QueryLastValsetRequestsRequest {
    return QueryLastValsetRequestsRequest.decode(message.value);
  },
  toProto(message: QueryLastValsetRequestsRequest): Uint8Array {
    return QueryLastValsetRequestsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLastValsetRequestsRequest): QueryLastValsetRequestsRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryLastValsetRequestsRequest",
      value: QueryLastValsetRequestsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryLastValsetRequestsResponse(): QueryLastValsetRequestsResponse {
  return {
    valsets: []
  };
}
/**
 * @name QueryLastValsetRequestsResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryLastValsetRequestsResponse
 */
export const QueryLastValsetRequestsResponse = {
  typeUrl: "/injective.peggy.v1.QueryLastValsetRequestsResponse",
  is(o: any): o is QueryLastValsetRequestsResponse {
    return o && (o.$typeUrl === QueryLastValsetRequestsResponse.typeUrl || Array.isArray(o.valsets) && (!o.valsets.length || Valset.is(o.valsets[0])));
  },
  isAmino(o: any): o is QueryLastValsetRequestsResponseAmino {
    return o && (o.$typeUrl === QueryLastValsetRequestsResponse.typeUrl || Array.isArray(o.valsets) && (!o.valsets.length || Valset.isAmino(o.valsets[0])));
  },
  encode(message: QueryLastValsetRequestsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.valsets) {
      Valset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastValsetRequestsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastValsetRequestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valsets.push(Valset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLastValsetRequestsResponse>): QueryLastValsetRequestsResponse {
    const message = createBaseQueryLastValsetRequestsResponse();
    message.valsets = object.valsets?.map(e => Valset.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryLastValsetRequestsResponseAmino): QueryLastValsetRequestsResponse {
    const message = createBaseQueryLastValsetRequestsResponse();
    message.valsets = object.valsets?.map(e => Valset.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryLastValsetRequestsResponse): QueryLastValsetRequestsResponseAmino {
    const obj: any = {};
    if (message.valsets) {
      obj.valsets = message.valsets.map(e => e ? Valset.toAmino(e) : undefined);
    } else {
      obj.valsets = message.valsets;
    }
    return obj;
  },
  fromAminoMsg(object: QueryLastValsetRequestsResponseAminoMsg): QueryLastValsetRequestsResponse {
    return QueryLastValsetRequestsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastValsetRequestsResponseProtoMsg): QueryLastValsetRequestsResponse {
    return QueryLastValsetRequestsResponse.decode(message.value);
  },
  toProto(message: QueryLastValsetRequestsResponse): Uint8Array {
    return QueryLastValsetRequestsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLastValsetRequestsResponse): QueryLastValsetRequestsResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryLastValsetRequestsResponse",
      value: QueryLastValsetRequestsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryLastValsetRequestsResponse.typeUrl)) {
      return;
    }
    Valset.registerTypeUrl();
  }
};
function createBaseQueryLastPendingValsetRequestByAddrRequest(): QueryLastPendingValsetRequestByAddrRequest {
  return {
    address: ""
  };
}
/**
 * @name QueryLastPendingValsetRequestByAddrRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest
 */
export const QueryLastPendingValsetRequestByAddrRequest = {
  typeUrl: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest",
  is(o: any): o is QueryLastPendingValsetRequestByAddrRequest {
    return o && (o.$typeUrl === QueryLastPendingValsetRequestByAddrRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryLastPendingValsetRequestByAddrRequestAmino {
    return o && (o.$typeUrl === QueryLastPendingValsetRequestByAddrRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryLastPendingValsetRequestByAddrRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastPendingValsetRequestByAddrRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingValsetRequestByAddrRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLastPendingValsetRequestByAddrRequest>): QueryLastPendingValsetRequestByAddrRequest {
    const message = createBaseQueryLastPendingValsetRequestByAddrRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryLastPendingValsetRequestByAddrRequestAmino): QueryLastPendingValsetRequestByAddrRequest {
    const message = createBaseQueryLastPendingValsetRequestByAddrRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryLastPendingValsetRequestByAddrRequest): QueryLastPendingValsetRequestByAddrRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryLastPendingValsetRequestByAddrRequestAminoMsg): QueryLastPendingValsetRequestByAddrRequest {
    return QueryLastPendingValsetRequestByAddrRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastPendingValsetRequestByAddrRequestProtoMsg): QueryLastPendingValsetRequestByAddrRequest {
    return QueryLastPendingValsetRequestByAddrRequest.decode(message.value);
  },
  toProto(message: QueryLastPendingValsetRequestByAddrRequest): Uint8Array {
    return QueryLastPendingValsetRequestByAddrRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLastPendingValsetRequestByAddrRequest): QueryLastPendingValsetRequestByAddrRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest",
      value: QueryLastPendingValsetRequestByAddrRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryLastPendingValsetRequestByAddrResponse(): QueryLastPendingValsetRequestByAddrResponse {
  return {
    valsets: []
  };
}
/**
 * @name QueryLastPendingValsetRequestByAddrResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse
 */
export const QueryLastPendingValsetRequestByAddrResponse = {
  typeUrl: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse",
  is(o: any): o is QueryLastPendingValsetRequestByAddrResponse {
    return o && (o.$typeUrl === QueryLastPendingValsetRequestByAddrResponse.typeUrl || Array.isArray(o.valsets) && (!o.valsets.length || Valset.is(o.valsets[0])));
  },
  isAmino(o: any): o is QueryLastPendingValsetRequestByAddrResponseAmino {
    return o && (o.$typeUrl === QueryLastPendingValsetRequestByAddrResponse.typeUrl || Array.isArray(o.valsets) && (!o.valsets.length || Valset.isAmino(o.valsets[0])));
  },
  encode(message: QueryLastPendingValsetRequestByAddrResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.valsets) {
      Valset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastPendingValsetRequestByAddrResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valsets.push(Valset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLastPendingValsetRequestByAddrResponse>): QueryLastPendingValsetRequestByAddrResponse {
    const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
    message.valsets = object.valsets?.map(e => Valset.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryLastPendingValsetRequestByAddrResponseAmino): QueryLastPendingValsetRequestByAddrResponse {
    const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
    message.valsets = object.valsets?.map(e => Valset.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryLastPendingValsetRequestByAddrResponse): QueryLastPendingValsetRequestByAddrResponseAmino {
    const obj: any = {};
    if (message.valsets) {
      obj.valsets = message.valsets.map(e => e ? Valset.toAmino(e) : undefined);
    } else {
      obj.valsets = message.valsets;
    }
    return obj;
  },
  fromAminoMsg(object: QueryLastPendingValsetRequestByAddrResponseAminoMsg): QueryLastPendingValsetRequestByAddrResponse {
    return QueryLastPendingValsetRequestByAddrResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastPendingValsetRequestByAddrResponseProtoMsg): QueryLastPendingValsetRequestByAddrResponse {
    return QueryLastPendingValsetRequestByAddrResponse.decode(message.value);
  },
  toProto(message: QueryLastPendingValsetRequestByAddrResponse): Uint8Array {
    return QueryLastPendingValsetRequestByAddrResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLastPendingValsetRequestByAddrResponse): QueryLastPendingValsetRequestByAddrResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse",
      value: QueryLastPendingValsetRequestByAddrResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryLastPendingValsetRequestByAddrResponse.typeUrl)) {
      return;
    }
    Valset.registerTypeUrl();
  }
};
function createBaseQueryBatchFeeRequest(): QueryBatchFeeRequest {
  return {};
}
/**
 * @name QueryBatchFeeRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryBatchFeeRequest
 */
export const QueryBatchFeeRequest = {
  typeUrl: "/injective.peggy.v1.QueryBatchFeeRequest",
  is(o: any): o is QueryBatchFeeRequest {
    return o && o.$typeUrl === QueryBatchFeeRequest.typeUrl;
  },
  isAmino(o: any): o is QueryBatchFeeRequestAmino {
    return o && o.$typeUrl === QueryBatchFeeRequest.typeUrl;
  },
  encode(_: QueryBatchFeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchFeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchFeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryBatchFeeRequest>): QueryBatchFeeRequest {
    const message = createBaseQueryBatchFeeRequest();
    return message;
  },
  fromAmino(_: QueryBatchFeeRequestAmino): QueryBatchFeeRequest {
    const message = createBaseQueryBatchFeeRequest();
    return message;
  },
  toAmino(_: QueryBatchFeeRequest): QueryBatchFeeRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBatchFeeRequestAminoMsg): QueryBatchFeeRequest {
    return QueryBatchFeeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchFeeRequestProtoMsg): QueryBatchFeeRequest {
    return QueryBatchFeeRequest.decode(message.value);
  },
  toProto(message: QueryBatchFeeRequest): Uint8Array {
    return QueryBatchFeeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchFeeRequest): QueryBatchFeeRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryBatchFeeRequest",
      value: QueryBatchFeeRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryBatchFeeResponse(): QueryBatchFeeResponse {
  return {
    batchFees: []
  };
}
/**
 * @name QueryBatchFeeResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryBatchFeeResponse
 */
export const QueryBatchFeeResponse = {
  typeUrl: "/injective.peggy.v1.QueryBatchFeeResponse",
  is(o: any): o is QueryBatchFeeResponse {
    return o && (o.$typeUrl === QueryBatchFeeResponse.typeUrl || Array.isArray(o.batchFees) && (!o.batchFees.length || BatchFees.is(o.batchFees[0])));
  },
  isAmino(o: any): o is QueryBatchFeeResponseAmino {
    return o && (o.$typeUrl === QueryBatchFeeResponse.typeUrl || Array.isArray(o.batchFees) && (!o.batchFees.length || BatchFees.isAmino(o.batchFees[0])));
  },
  encode(message: QueryBatchFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.batchFees) {
      BatchFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchFees.push(BatchFees.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBatchFeeResponse>): QueryBatchFeeResponse {
    const message = createBaseQueryBatchFeeResponse();
    message.batchFees = object.batchFees?.map(e => BatchFees.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryBatchFeeResponseAmino): QueryBatchFeeResponse {
    const message = createBaseQueryBatchFeeResponse();
    message.batchFees = object.batchFees?.map(e => BatchFees.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryBatchFeeResponse): QueryBatchFeeResponseAmino {
    const obj: any = {};
    if (message.batchFees) {
      obj.batchFees = message.batchFees.map(e => e ? BatchFees.toAmino(e) : undefined);
    } else {
      obj.batchFees = message.batchFees;
    }
    return obj;
  },
  fromAminoMsg(object: QueryBatchFeeResponseAminoMsg): QueryBatchFeeResponse {
    return QueryBatchFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchFeeResponseProtoMsg): QueryBatchFeeResponse {
    return QueryBatchFeeResponse.decode(message.value);
  },
  toProto(message: QueryBatchFeeResponse): Uint8Array {
    return QueryBatchFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchFeeResponse): QueryBatchFeeResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryBatchFeeResponse",
      value: QueryBatchFeeResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryBatchFeeResponse.typeUrl)) {
      return;
    }
    BatchFees.registerTypeUrl();
  }
};
function createBaseQueryLastPendingBatchRequestByAddrRequest(): QueryLastPendingBatchRequestByAddrRequest {
  return {
    address: ""
  };
}
/**
 * @name QueryLastPendingBatchRequestByAddrRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest
 */
export const QueryLastPendingBatchRequestByAddrRequest = {
  typeUrl: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest",
  is(o: any): o is QueryLastPendingBatchRequestByAddrRequest {
    return o && (o.$typeUrl === QueryLastPendingBatchRequestByAddrRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryLastPendingBatchRequestByAddrRequestAmino {
    return o && (o.$typeUrl === QueryLastPendingBatchRequestByAddrRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryLastPendingBatchRequestByAddrRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastPendingBatchRequestByAddrRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingBatchRequestByAddrRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLastPendingBatchRequestByAddrRequest>): QueryLastPendingBatchRequestByAddrRequest {
    const message = createBaseQueryLastPendingBatchRequestByAddrRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryLastPendingBatchRequestByAddrRequestAmino): QueryLastPendingBatchRequestByAddrRequest {
    const message = createBaseQueryLastPendingBatchRequestByAddrRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryLastPendingBatchRequestByAddrRequest): QueryLastPendingBatchRequestByAddrRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryLastPendingBatchRequestByAddrRequestAminoMsg): QueryLastPendingBatchRequestByAddrRequest {
    return QueryLastPendingBatchRequestByAddrRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastPendingBatchRequestByAddrRequestProtoMsg): QueryLastPendingBatchRequestByAddrRequest {
    return QueryLastPendingBatchRequestByAddrRequest.decode(message.value);
  },
  toProto(message: QueryLastPendingBatchRequestByAddrRequest): Uint8Array {
    return QueryLastPendingBatchRequestByAddrRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLastPendingBatchRequestByAddrRequest): QueryLastPendingBatchRequestByAddrRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest",
      value: QueryLastPendingBatchRequestByAddrRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryLastPendingBatchRequestByAddrResponse(): QueryLastPendingBatchRequestByAddrResponse {
  return {
    batch: undefined
  };
}
/**
 * @name QueryLastPendingBatchRequestByAddrResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse
 */
export const QueryLastPendingBatchRequestByAddrResponse = {
  typeUrl: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse",
  is(o: any): o is QueryLastPendingBatchRequestByAddrResponse {
    return o && o.$typeUrl === QueryLastPendingBatchRequestByAddrResponse.typeUrl;
  },
  isAmino(o: any): o is QueryLastPendingBatchRequestByAddrResponseAmino {
    return o && o.$typeUrl === QueryLastPendingBatchRequestByAddrResponse.typeUrl;
  },
  encode(message: QueryLastPendingBatchRequestByAddrResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batch !== undefined) {
      OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastPendingBatchRequestByAddrResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batch = OutgoingTxBatch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLastPendingBatchRequestByAddrResponse>): QueryLastPendingBatchRequestByAddrResponse {
    const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
    message.batch = object.batch !== undefined && object.batch !== null ? OutgoingTxBatch.fromPartial(object.batch) : undefined;
    return message;
  },
  fromAmino(object: QueryLastPendingBatchRequestByAddrResponseAmino): QueryLastPendingBatchRequestByAddrResponse {
    const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
    if (object.batch !== undefined && object.batch !== null) {
      message.batch = OutgoingTxBatch.fromAmino(object.batch);
    }
    return message;
  },
  toAmino(message: QueryLastPendingBatchRequestByAddrResponse): QueryLastPendingBatchRequestByAddrResponseAmino {
    const obj: any = {};
    obj.batch = message.batch ? OutgoingTxBatch.toAmino(message.batch) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLastPendingBatchRequestByAddrResponseAminoMsg): QueryLastPendingBatchRequestByAddrResponse {
    return QueryLastPendingBatchRequestByAddrResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastPendingBatchRequestByAddrResponseProtoMsg): QueryLastPendingBatchRequestByAddrResponse {
    return QueryLastPendingBatchRequestByAddrResponse.decode(message.value);
  },
  toProto(message: QueryLastPendingBatchRequestByAddrResponse): Uint8Array {
    return QueryLastPendingBatchRequestByAddrResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLastPendingBatchRequestByAddrResponse): QueryLastPendingBatchRequestByAddrResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse",
      value: QueryLastPendingBatchRequestByAddrResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryLastPendingBatchRequestByAddrResponse.typeUrl)) {
      return;
    }
    OutgoingTxBatch.registerTypeUrl();
  }
};
function createBaseQueryOutgoingTxBatchesRequest(): QueryOutgoingTxBatchesRequest {
  return {};
}
/**
 * @name QueryOutgoingTxBatchesRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryOutgoingTxBatchesRequest
 */
export const QueryOutgoingTxBatchesRequest = {
  typeUrl: "/injective.peggy.v1.QueryOutgoingTxBatchesRequest",
  is(o: any): o is QueryOutgoingTxBatchesRequest {
    return o && o.$typeUrl === QueryOutgoingTxBatchesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryOutgoingTxBatchesRequestAmino {
    return o && o.$typeUrl === QueryOutgoingTxBatchesRequest.typeUrl;
  },
  encode(_: QueryOutgoingTxBatchesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOutgoingTxBatchesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutgoingTxBatchesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryOutgoingTxBatchesRequest>): QueryOutgoingTxBatchesRequest {
    const message = createBaseQueryOutgoingTxBatchesRequest();
    return message;
  },
  fromAmino(_: QueryOutgoingTxBatchesRequestAmino): QueryOutgoingTxBatchesRequest {
    const message = createBaseQueryOutgoingTxBatchesRequest();
    return message;
  },
  toAmino(_: QueryOutgoingTxBatchesRequest): QueryOutgoingTxBatchesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryOutgoingTxBatchesRequestAminoMsg): QueryOutgoingTxBatchesRequest {
    return QueryOutgoingTxBatchesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOutgoingTxBatchesRequestProtoMsg): QueryOutgoingTxBatchesRequest {
    return QueryOutgoingTxBatchesRequest.decode(message.value);
  },
  toProto(message: QueryOutgoingTxBatchesRequest): Uint8Array {
    return QueryOutgoingTxBatchesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOutgoingTxBatchesRequest): QueryOutgoingTxBatchesRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryOutgoingTxBatchesRequest",
      value: QueryOutgoingTxBatchesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryOutgoingTxBatchesResponse(): QueryOutgoingTxBatchesResponse {
  return {
    batches: []
  };
}
/**
 * @name QueryOutgoingTxBatchesResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryOutgoingTxBatchesResponse
 */
export const QueryOutgoingTxBatchesResponse = {
  typeUrl: "/injective.peggy.v1.QueryOutgoingTxBatchesResponse",
  is(o: any): o is QueryOutgoingTxBatchesResponse {
    return o && (o.$typeUrl === QueryOutgoingTxBatchesResponse.typeUrl || Array.isArray(o.batches) && (!o.batches.length || OutgoingTxBatch.is(o.batches[0])));
  },
  isAmino(o: any): o is QueryOutgoingTxBatchesResponseAmino {
    return o && (o.$typeUrl === QueryOutgoingTxBatchesResponse.typeUrl || Array.isArray(o.batches) && (!o.batches.length || OutgoingTxBatch.isAmino(o.batches[0])));
  },
  encode(message: QueryOutgoingTxBatchesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.batches) {
      OutgoingTxBatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOutgoingTxBatchesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutgoingTxBatchesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batches.push(OutgoingTxBatch.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOutgoingTxBatchesResponse>): QueryOutgoingTxBatchesResponse {
    const message = createBaseQueryOutgoingTxBatchesResponse();
    message.batches = object.batches?.map(e => OutgoingTxBatch.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryOutgoingTxBatchesResponseAmino): QueryOutgoingTxBatchesResponse {
    const message = createBaseQueryOutgoingTxBatchesResponse();
    message.batches = object.batches?.map(e => OutgoingTxBatch.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryOutgoingTxBatchesResponse): QueryOutgoingTxBatchesResponseAmino {
    const obj: any = {};
    if (message.batches) {
      obj.batches = message.batches.map(e => e ? OutgoingTxBatch.toAmino(e) : undefined);
    } else {
      obj.batches = message.batches;
    }
    return obj;
  },
  fromAminoMsg(object: QueryOutgoingTxBatchesResponseAminoMsg): QueryOutgoingTxBatchesResponse {
    return QueryOutgoingTxBatchesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOutgoingTxBatchesResponseProtoMsg): QueryOutgoingTxBatchesResponse {
    return QueryOutgoingTxBatchesResponse.decode(message.value);
  },
  toProto(message: QueryOutgoingTxBatchesResponse): Uint8Array {
    return QueryOutgoingTxBatchesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOutgoingTxBatchesResponse): QueryOutgoingTxBatchesResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryOutgoingTxBatchesResponse",
      value: QueryOutgoingTxBatchesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryOutgoingTxBatchesResponse.typeUrl)) {
      return;
    }
    OutgoingTxBatch.registerTypeUrl();
  }
};
function createBaseQueryBatchRequestByNonceRequest(): QueryBatchRequestByNonceRequest {
  return {
    nonce: BigInt(0),
    contractAddress: ""
  };
}
/**
 * @name QueryBatchRequestByNonceRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryBatchRequestByNonceRequest
 */
export const QueryBatchRequestByNonceRequest = {
  typeUrl: "/injective.peggy.v1.QueryBatchRequestByNonceRequest",
  is(o: any): o is QueryBatchRequestByNonceRequest {
    return o && (o.$typeUrl === QueryBatchRequestByNonceRequest.typeUrl || typeof o.nonce === "bigint" && typeof o.contractAddress === "string");
  },
  isAmino(o: any): o is QueryBatchRequestByNonceRequestAmino {
    return o && (o.$typeUrl === QueryBatchRequestByNonceRequest.typeUrl || typeof o.nonce === "bigint" && typeof o.contract_address === "string");
  },
  encode(message: QueryBatchRequestByNonceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchRequestByNonceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchRequestByNonceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBatchRequestByNonceRequest>): QueryBatchRequestByNonceRequest {
    const message = createBaseQueryBatchRequestByNonceRequest();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: QueryBatchRequestByNonceRequestAmino): QueryBatchRequestByNonceRequest {
    const message = createBaseQueryBatchRequestByNonceRequest();
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce);
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: QueryBatchRequestByNonceRequest): QueryBatchRequestByNonceRequestAmino {
    const obj: any = {};
    obj.nonce = message.nonce !== BigInt(0) ? message.nonce?.toString() : undefined;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: QueryBatchRequestByNonceRequestAminoMsg): QueryBatchRequestByNonceRequest {
    return QueryBatchRequestByNonceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchRequestByNonceRequestProtoMsg): QueryBatchRequestByNonceRequest {
    return QueryBatchRequestByNonceRequest.decode(message.value);
  },
  toProto(message: QueryBatchRequestByNonceRequest): Uint8Array {
    return QueryBatchRequestByNonceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchRequestByNonceRequest): QueryBatchRequestByNonceRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryBatchRequestByNonceRequest",
      value: QueryBatchRequestByNonceRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryBatchRequestByNonceResponse(): QueryBatchRequestByNonceResponse {
  return {
    batch: undefined
  };
}
/**
 * @name QueryBatchRequestByNonceResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryBatchRequestByNonceResponse
 */
export const QueryBatchRequestByNonceResponse = {
  typeUrl: "/injective.peggy.v1.QueryBatchRequestByNonceResponse",
  is(o: any): o is QueryBatchRequestByNonceResponse {
    return o && o.$typeUrl === QueryBatchRequestByNonceResponse.typeUrl;
  },
  isAmino(o: any): o is QueryBatchRequestByNonceResponseAmino {
    return o && o.$typeUrl === QueryBatchRequestByNonceResponse.typeUrl;
  },
  encode(message: QueryBatchRequestByNonceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batch !== undefined) {
      OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchRequestByNonceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchRequestByNonceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batch = OutgoingTxBatch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBatchRequestByNonceResponse>): QueryBatchRequestByNonceResponse {
    const message = createBaseQueryBatchRequestByNonceResponse();
    message.batch = object.batch !== undefined && object.batch !== null ? OutgoingTxBatch.fromPartial(object.batch) : undefined;
    return message;
  },
  fromAmino(object: QueryBatchRequestByNonceResponseAmino): QueryBatchRequestByNonceResponse {
    const message = createBaseQueryBatchRequestByNonceResponse();
    if (object.batch !== undefined && object.batch !== null) {
      message.batch = OutgoingTxBatch.fromAmino(object.batch);
    }
    return message;
  },
  toAmino(message: QueryBatchRequestByNonceResponse): QueryBatchRequestByNonceResponseAmino {
    const obj: any = {};
    obj.batch = message.batch ? OutgoingTxBatch.toAmino(message.batch) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBatchRequestByNonceResponseAminoMsg): QueryBatchRequestByNonceResponse {
    return QueryBatchRequestByNonceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchRequestByNonceResponseProtoMsg): QueryBatchRequestByNonceResponse {
    return QueryBatchRequestByNonceResponse.decode(message.value);
  },
  toProto(message: QueryBatchRequestByNonceResponse): Uint8Array {
    return QueryBatchRequestByNonceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchRequestByNonceResponse): QueryBatchRequestByNonceResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryBatchRequestByNonceResponse",
      value: QueryBatchRequestByNonceResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryBatchRequestByNonceResponse.typeUrl)) {
      return;
    }
    OutgoingTxBatch.registerTypeUrl();
  }
};
function createBaseQueryBatchConfirmsRequest(): QueryBatchConfirmsRequest {
  return {
    nonce: BigInt(0),
    contractAddress: ""
  };
}
/**
 * @name QueryBatchConfirmsRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryBatchConfirmsRequest
 */
export const QueryBatchConfirmsRequest = {
  typeUrl: "/injective.peggy.v1.QueryBatchConfirmsRequest",
  is(o: any): o is QueryBatchConfirmsRequest {
    return o && (o.$typeUrl === QueryBatchConfirmsRequest.typeUrl || typeof o.nonce === "bigint" && typeof o.contractAddress === "string");
  },
  isAmino(o: any): o is QueryBatchConfirmsRequestAmino {
    return o && (o.$typeUrl === QueryBatchConfirmsRequest.typeUrl || typeof o.nonce === "bigint" && typeof o.contract_address === "string");
  },
  encode(message: QueryBatchConfirmsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchConfirmsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchConfirmsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBatchConfirmsRequest>): QueryBatchConfirmsRequest {
    const message = createBaseQueryBatchConfirmsRequest();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: QueryBatchConfirmsRequestAmino): QueryBatchConfirmsRequest {
    const message = createBaseQueryBatchConfirmsRequest();
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce);
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: QueryBatchConfirmsRequest): QueryBatchConfirmsRequestAmino {
    const obj: any = {};
    obj.nonce = message.nonce !== BigInt(0) ? message.nonce?.toString() : undefined;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: QueryBatchConfirmsRequestAminoMsg): QueryBatchConfirmsRequest {
    return QueryBatchConfirmsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchConfirmsRequestProtoMsg): QueryBatchConfirmsRequest {
    return QueryBatchConfirmsRequest.decode(message.value);
  },
  toProto(message: QueryBatchConfirmsRequest): Uint8Array {
    return QueryBatchConfirmsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchConfirmsRequest): QueryBatchConfirmsRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryBatchConfirmsRequest",
      value: QueryBatchConfirmsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryBatchConfirmsResponse(): QueryBatchConfirmsResponse {
  return {
    confirms: []
  };
}
/**
 * @name QueryBatchConfirmsResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryBatchConfirmsResponse
 */
export const QueryBatchConfirmsResponse = {
  typeUrl: "/injective.peggy.v1.QueryBatchConfirmsResponse",
  is(o: any): o is QueryBatchConfirmsResponse {
    return o && (o.$typeUrl === QueryBatchConfirmsResponse.typeUrl || Array.isArray(o.confirms) && (!o.confirms.length || MsgConfirmBatch.is(o.confirms[0])));
  },
  isAmino(o: any): o is QueryBatchConfirmsResponseAmino {
    return o && (o.$typeUrl === QueryBatchConfirmsResponse.typeUrl || Array.isArray(o.confirms) && (!o.confirms.length || MsgConfirmBatch.isAmino(o.confirms[0])));
  },
  encode(message: QueryBatchConfirmsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.confirms) {
      MsgConfirmBatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchConfirmsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchConfirmsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirms.push(MsgConfirmBatch.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBatchConfirmsResponse>): QueryBatchConfirmsResponse {
    const message = createBaseQueryBatchConfirmsResponse();
    message.confirms = object.confirms?.map(e => MsgConfirmBatch.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryBatchConfirmsResponseAmino): QueryBatchConfirmsResponse {
    const message = createBaseQueryBatchConfirmsResponse();
    message.confirms = object.confirms?.map(e => MsgConfirmBatch.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryBatchConfirmsResponse): QueryBatchConfirmsResponseAmino {
    const obj: any = {};
    if (message.confirms) {
      obj.confirms = message.confirms.map(e => e ? MsgConfirmBatch.toAmino(e) : undefined);
    } else {
      obj.confirms = message.confirms;
    }
    return obj;
  },
  fromAminoMsg(object: QueryBatchConfirmsResponseAminoMsg): QueryBatchConfirmsResponse {
    return QueryBatchConfirmsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchConfirmsResponseProtoMsg): QueryBatchConfirmsResponse {
    return QueryBatchConfirmsResponse.decode(message.value);
  },
  toProto(message: QueryBatchConfirmsResponse): Uint8Array {
    return QueryBatchConfirmsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchConfirmsResponse): QueryBatchConfirmsResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryBatchConfirmsResponse",
      value: QueryBatchConfirmsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryBatchConfirmsResponse.typeUrl)) {
      return;
    }
    MsgConfirmBatch.registerTypeUrl();
  }
};
function createBaseQueryLastEventByAddrRequest(): QueryLastEventByAddrRequest {
  return {
    address: ""
  };
}
/**
 * @name QueryLastEventByAddrRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryLastEventByAddrRequest
 */
export const QueryLastEventByAddrRequest = {
  typeUrl: "/injective.peggy.v1.QueryLastEventByAddrRequest",
  is(o: any): o is QueryLastEventByAddrRequest {
    return o && (o.$typeUrl === QueryLastEventByAddrRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryLastEventByAddrRequestAmino {
    return o && (o.$typeUrl === QueryLastEventByAddrRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryLastEventByAddrRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastEventByAddrRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastEventByAddrRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLastEventByAddrRequest>): QueryLastEventByAddrRequest {
    const message = createBaseQueryLastEventByAddrRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryLastEventByAddrRequestAmino): QueryLastEventByAddrRequest {
    const message = createBaseQueryLastEventByAddrRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryLastEventByAddrRequest): QueryLastEventByAddrRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryLastEventByAddrRequestAminoMsg): QueryLastEventByAddrRequest {
    return QueryLastEventByAddrRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastEventByAddrRequestProtoMsg): QueryLastEventByAddrRequest {
    return QueryLastEventByAddrRequest.decode(message.value);
  },
  toProto(message: QueryLastEventByAddrRequest): Uint8Array {
    return QueryLastEventByAddrRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLastEventByAddrRequest): QueryLastEventByAddrRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryLastEventByAddrRequest",
      value: QueryLastEventByAddrRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryLastEventByAddrResponse(): QueryLastEventByAddrResponse {
  return {
    lastClaimEvent: undefined
  };
}
/**
 * @name QueryLastEventByAddrResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryLastEventByAddrResponse
 */
export const QueryLastEventByAddrResponse = {
  typeUrl: "/injective.peggy.v1.QueryLastEventByAddrResponse",
  is(o: any): o is QueryLastEventByAddrResponse {
    return o && o.$typeUrl === QueryLastEventByAddrResponse.typeUrl;
  },
  isAmino(o: any): o is QueryLastEventByAddrResponseAmino {
    return o && o.$typeUrl === QueryLastEventByAddrResponse.typeUrl;
  },
  encode(message: QueryLastEventByAddrResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lastClaimEvent !== undefined) {
      LastClaimEvent.encode(message.lastClaimEvent, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastEventByAddrResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastEventByAddrResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastClaimEvent = LastClaimEvent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLastEventByAddrResponse>): QueryLastEventByAddrResponse {
    const message = createBaseQueryLastEventByAddrResponse();
    message.lastClaimEvent = object.lastClaimEvent !== undefined && object.lastClaimEvent !== null ? LastClaimEvent.fromPartial(object.lastClaimEvent) : undefined;
    return message;
  },
  fromAmino(object: QueryLastEventByAddrResponseAmino): QueryLastEventByAddrResponse {
    const message = createBaseQueryLastEventByAddrResponse();
    if (object.last_claim_event !== undefined && object.last_claim_event !== null) {
      message.lastClaimEvent = LastClaimEvent.fromAmino(object.last_claim_event);
    }
    return message;
  },
  toAmino(message: QueryLastEventByAddrResponse): QueryLastEventByAddrResponseAmino {
    const obj: any = {};
    obj.last_claim_event = message.lastClaimEvent ? LastClaimEvent.toAmino(message.lastClaimEvent) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLastEventByAddrResponseAminoMsg): QueryLastEventByAddrResponse {
    return QueryLastEventByAddrResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastEventByAddrResponseProtoMsg): QueryLastEventByAddrResponse {
    return QueryLastEventByAddrResponse.decode(message.value);
  },
  toProto(message: QueryLastEventByAddrResponse): Uint8Array {
    return QueryLastEventByAddrResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLastEventByAddrResponse): QueryLastEventByAddrResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryLastEventByAddrResponse",
      value: QueryLastEventByAddrResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryLastEventByAddrResponse.typeUrl)) {
      return;
    }
    LastClaimEvent.registerTypeUrl();
  }
};
function createBaseQueryERC20ToDenomRequest(): QueryERC20ToDenomRequest {
  return {
    erc20: ""
  };
}
/**
 * @name QueryERC20ToDenomRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryERC20ToDenomRequest
 */
export const QueryERC20ToDenomRequest = {
  typeUrl: "/injective.peggy.v1.QueryERC20ToDenomRequest",
  is(o: any): o is QueryERC20ToDenomRequest {
    return o && (o.$typeUrl === QueryERC20ToDenomRequest.typeUrl || typeof o.erc20 === "string");
  },
  isAmino(o: any): o is QueryERC20ToDenomRequestAmino {
    return o && (o.$typeUrl === QueryERC20ToDenomRequest.typeUrl || typeof o.erc20 === "string");
  },
  encode(message: QueryERC20ToDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.erc20 !== "") {
      writer.uint32(10).string(message.erc20);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryERC20ToDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryERC20ToDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.erc20 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryERC20ToDenomRequest>): QueryERC20ToDenomRequest {
    const message = createBaseQueryERC20ToDenomRequest();
    message.erc20 = object.erc20 ?? "";
    return message;
  },
  fromAmino(object: QueryERC20ToDenomRequestAmino): QueryERC20ToDenomRequest {
    const message = createBaseQueryERC20ToDenomRequest();
    if (object.erc20 !== undefined && object.erc20 !== null) {
      message.erc20 = object.erc20;
    }
    return message;
  },
  toAmino(message: QueryERC20ToDenomRequest): QueryERC20ToDenomRequestAmino {
    const obj: any = {};
    obj.erc20 = message.erc20 === "" ? undefined : message.erc20;
    return obj;
  },
  fromAminoMsg(object: QueryERC20ToDenomRequestAminoMsg): QueryERC20ToDenomRequest {
    return QueryERC20ToDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryERC20ToDenomRequestProtoMsg): QueryERC20ToDenomRequest {
    return QueryERC20ToDenomRequest.decode(message.value);
  },
  toProto(message: QueryERC20ToDenomRequest): Uint8Array {
    return QueryERC20ToDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryERC20ToDenomRequest): QueryERC20ToDenomRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryERC20ToDenomRequest",
      value: QueryERC20ToDenomRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryERC20ToDenomResponse(): QueryERC20ToDenomResponse {
  return {
    denom: "",
    cosmosOriginated: false
  };
}
/**
 * @name QueryERC20ToDenomResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryERC20ToDenomResponse
 */
export const QueryERC20ToDenomResponse = {
  typeUrl: "/injective.peggy.v1.QueryERC20ToDenomResponse",
  is(o: any): o is QueryERC20ToDenomResponse {
    return o && (o.$typeUrl === QueryERC20ToDenomResponse.typeUrl || typeof o.denom === "string" && typeof o.cosmosOriginated === "boolean");
  },
  isAmino(o: any): o is QueryERC20ToDenomResponseAmino {
    return o && (o.$typeUrl === QueryERC20ToDenomResponse.typeUrl || typeof o.denom === "string" && typeof o.cosmos_originated === "boolean");
  },
  encode(message: QueryERC20ToDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.cosmosOriginated === true) {
      writer.uint32(16).bool(message.cosmosOriginated);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryERC20ToDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryERC20ToDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.cosmosOriginated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryERC20ToDenomResponse>): QueryERC20ToDenomResponse {
    const message = createBaseQueryERC20ToDenomResponse();
    message.denom = object.denom ?? "";
    message.cosmosOriginated = object.cosmosOriginated ?? false;
    return message;
  },
  fromAmino(object: QueryERC20ToDenomResponseAmino): QueryERC20ToDenomResponse {
    const message = createBaseQueryERC20ToDenomResponse();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.cosmos_originated !== undefined && object.cosmos_originated !== null) {
      message.cosmosOriginated = object.cosmos_originated;
    }
    return message;
  },
  toAmino(message: QueryERC20ToDenomResponse): QueryERC20ToDenomResponseAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.cosmos_originated = message.cosmosOriginated === false ? undefined : message.cosmosOriginated;
    return obj;
  },
  fromAminoMsg(object: QueryERC20ToDenomResponseAminoMsg): QueryERC20ToDenomResponse {
    return QueryERC20ToDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryERC20ToDenomResponseProtoMsg): QueryERC20ToDenomResponse {
    return QueryERC20ToDenomResponse.decode(message.value);
  },
  toProto(message: QueryERC20ToDenomResponse): Uint8Array {
    return QueryERC20ToDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryERC20ToDenomResponse): QueryERC20ToDenomResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryERC20ToDenomResponse",
      value: QueryERC20ToDenomResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDenomToERC20Request(): QueryDenomToERC20Request {
  return {
    denom: ""
  };
}
/**
 * @name QueryDenomToERC20Request
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryDenomToERC20Request
 */
export const QueryDenomToERC20Request = {
  typeUrl: "/injective.peggy.v1.QueryDenomToERC20Request",
  is(o: any): o is QueryDenomToERC20Request {
    return o && (o.$typeUrl === QueryDenomToERC20Request.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryDenomToERC20RequestAmino {
    return o && (o.$typeUrl === QueryDenomToERC20Request.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryDenomToERC20Request, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomToERC20Request {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomToERC20Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomToERC20Request>): QueryDenomToERC20Request {
    const message = createBaseQueryDenomToERC20Request();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryDenomToERC20RequestAmino): QueryDenomToERC20Request {
    const message = createBaseQueryDenomToERC20Request();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryDenomToERC20Request): QueryDenomToERC20RequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryDenomToERC20RequestAminoMsg): QueryDenomToERC20Request {
    return QueryDenomToERC20Request.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomToERC20RequestProtoMsg): QueryDenomToERC20Request {
    return QueryDenomToERC20Request.decode(message.value);
  },
  toProto(message: QueryDenomToERC20Request): Uint8Array {
    return QueryDenomToERC20Request.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomToERC20Request): QueryDenomToERC20RequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryDenomToERC20Request",
      value: QueryDenomToERC20Request.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDenomToERC20Response(): QueryDenomToERC20Response {
  return {
    erc20: "",
    cosmosOriginated: false
  };
}
/**
 * @name QueryDenomToERC20Response
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryDenomToERC20Response
 */
export const QueryDenomToERC20Response = {
  typeUrl: "/injective.peggy.v1.QueryDenomToERC20Response",
  is(o: any): o is QueryDenomToERC20Response {
    return o && (o.$typeUrl === QueryDenomToERC20Response.typeUrl || typeof o.erc20 === "string" && typeof o.cosmosOriginated === "boolean");
  },
  isAmino(o: any): o is QueryDenomToERC20ResponseAmino {
    return o && (o.$typeUrl === QueryDenomToERC20Response.typeUrl || typeof o.erc20 === "string" && typeof o.cosmos_originated === "boolean");
  },
  encode(message: QueryDenomToERC20Response, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.erc20 !== "") {
      writer.uint32(10).string(message.erc20);
    }
    if (message.cosmosOriginated === true) {
      writer.uint32(16).bool(message.cosmosOriginated);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomToERC20Response {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomToERC20Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.erc20 = reader.string();
          break;
        case 2:
          message.cosmosOriginated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomToERC20Response>): QueryDenomToERC20Response {
    const message = createBaseQueryDenomToERC20Response();
    message.erc20 = object.erc20 ?? "";
    message.cosmosOriginated = object.cosmosOriginated ?? false;
    return message;
  },
  fromAmino(object: QueryDenomToERC20ResponseAmino): QueryDenomToERC20Response {
    const message = createBaseQueryDenomToERC20Response();
    if (object.erc20 !== undefined && object.erc20 !== null) {
      message.erc20 = object.erc20;
    }
    if (object.cosmos_originated !== undefined && object.cosmos_originated !== null) {
      message.cosmosOriginated = object.cosmos_originated;
    }
    return message;
  },
  toAmino(message: QueryDenomToERC20Response): QueryDenomToERC20ResponseAmino {
    const obj: any = {};
    obj.erc20 = message.erc20 === "" ? undefined : message.erc20;
    obj.cosmos_originated = message.cosmosOriginated === false ? undefined : message.cosmosOriginated;
    return obj;
  },
  fromAminoMsg(object: QueryDenomToERC20ResponseAminoMsg): QueryDenomToERC20Response {
    return QueryDenomToERC20Response.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomToERC20ResponseProtoMsg): QueryDenomToERC20Response {
    return QueryDenomToERC20Response.decode(message.value);
  },
  toProto(message: QueryDenomToERC20Response): Uint8Array {
    return QueryDenomToERC20Response.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomToERC20Response): QueryDenomToERC20ResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryDenomToERC20Response",
      value: QueryDenomToERC20Response.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDelegateKeysByValidatorAddress(): QueryDelegateKeysByValidatorAddress {
  return {
    validatorAddress: ""
  };
}
/**
 * @name QueryDelegateKeysByValidatorAddress
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryDelegateKeysByValidatorAddress
 */
export const QueryDelegateKeysByValidatorAddress = {
  typeUrl: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddress",
  is(o: any): o is QueryDelegateKeysByValidatorAddress {
    return o && (o.$typeUrl === QueryDelegateKeysByValidatorAddress.typeUrl || typeof o.validatorAddress === "string");
  },
  isAmino(o: any): o is QueryDelegateKeysByValidatorAddressAmino {
    return o && (o.$typeUrl === QueryDelegateKeysByValidatorAddress.typeUrl || typeof o.validator_address === "string");
  },
  encode(message: QueryDelegateKeysByValidatorAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegateKeysByValidatorAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeysByValidatorAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegateKeysByValidatorAddress>): QueryDelegateKeysByValidatorAddress {
    const message = createBaseQueryDelegateKeysByValidatorAddress();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegateKeysByValidatorAddressAmino): QueryDelegateKeysByValidatorAddress {
    const message = createBaseQueryDelegateKeysByValidatorAddress();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: QueryDelegateKeysByValidatorAddress): QueryDelegateKeysByValidatorAddressAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegateKeysByValidatorAddressAminoMsg): QueryDelegateKeysByValidatorAddress {
    return QueryDelegateKeysByValidatorAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegateKeysByValidatorAddressProtoMsg): QueryDelegateKeysByValidatorAddress {
    return QueryDelegateKeysByValidatorAddress.decode(message.value);
  },
  toProto(message: QueryDelegateKeysByValidatorAddress): Uint8Array {
    return QueryDelegateKeysByValidatorAddress.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegateKeysByValidatorAddress): QueryDelegateKeysByValidatorAddressProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddress",
      value: QueryDelegateKeysByValidatorAddress.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDelegateKeysByValidatorAddressResponse(): QueryDelegateKeysByValidatorAddressResponse {
  return {
    ethAddress: "",
    orchestratorAddress: ""
  };
}
/**
 * @name QueryDelegateKeysByValidatorAddressResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse
 */
export const QueryDelegateKeysByValidatorAddressResponse = {
  typeUrl: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse",
  is(o: any): o is QueryDelegateKeysByValidatorAddressResponse {
    return o && (o.$typeUrl === QueryDelegateKeysByValidatorAddressResponse.typeUrl || typeof o.ethAddress === "string" && typeof o.orchestratorAddress === "string");
  },
  isAmino(o: any): o is QueryDelegateKeysByValidatorAddressResponseAmino {
    return o && (o.$typeUrl === QueryDelegateKeysByValidatorAddressResponse.typeUrl || typeof o.eth_address === "string" && typeof o.orchestrator_address === "string");
  },
  encode(message: QueryDelegateKeysByValidatorAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ethAddress !== "") {
      writer.uint32(10).string(message.ethAddress);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(18).string(message.orchestratorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegateKeysByValidatorAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeysByValidatorAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ethAddress = reader.string();
          break;
        case 2:
          message.orchestratorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegateKeysByValidatorAddressResponse>): QueryDelegateKeysByValidatorAddressResponse {
    const message = createBaseQueryDelegateKeysByValidatorAddressResponse();
    message.ethAddress = object.ethAddress ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegateKeysByValidatorAddressResponseAmino): QueryDelegateKeysByValidatorAddressResponse {
    const message = createBaseQueryDelegateKeysByValidatorAddressResponse();
    if (object.eth_address !== undefined && object.eth_address !== null) {
      message.ethAddress = object.eth_address;
    }
    if (object.orchestrator_address !== undefined && object.orchestrator_address !== null) {
      message.orchestratorAddress = object.orchestrator_address;
    }
    return message;
  },
  toAmino(message: QueryDelegateKeysByValidatorAddressResponse): QueryDelegateKeysByValidatorAddressResponseAmino {
    const obj: any = {};
    obj.eth_address = message.ethAddress === "" ? undefined : message.ethAddress;
    obj.orchestrator_address = message.orchestratorAddress === "" ? undefined : message.orchestratorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegateKeysByValidatorAddressResponseAminoMsg): QueryDelegateKeysByValidatorAddressResponse {
    return QueryDelegateKeysByValidatorAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegateKeysByValidatorAddressResponseProtoMsg): QueryDelegateKeysByValidatorAddressResponse {
    return QueryDelegateKeysByValidatorAddressResponse.decode(message.value);
  },
  toProto(message: QueryDelegateKeysByValidatorAddressResponse): Uint8Array {
    return QueryDelegateKeysByValidatorAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegateKeysByValidatorAddressResponse): QueryDelegateKeysByValidatorAddressResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse",
      value: QueryDelegateKeysByValidatorAddressResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDelegateKeysByEthAddress(): QueryDelegateKeysByEthAddress {
  return {
    ethAddress: ""
  };
}
/**
 * @name QueryDelegateKeysByEthAddress
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryDelegateKeysByEthAddress
 */
export const QueryDelegateKeysByEthAddress = {
  typeUrl: "/injective.peggy.v1.QueryDelegateKeysByEthAddress",
  is(o: any): o is QueryDelegateKeysByEthAddress {
    return o && (o.$typeUrl === QueryDelegateKeysByEthAddress.typeUrl || typeof o.ethAddress === "string");
  },
  isAmino(o: any): o is QueryDelegateKeysByEthAddressAmino {
    return o && (o.$typeUrl === QueryDelegateKeysByEthAddress.typeUrl || typeof o.eth_address === "string");
  },
  encode(message: QueryDelegateKeysByEthAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ethAddress !== "") {
      writer.uint32(10).string(message.ethAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegateKeysByEthAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeysByEthAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ethAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegateKeysByEthAddress>): QueryDelegateKeysByEthAddress {
    const message = createBaseQueryDelegateKeysByEthAddress();
    message.ethAddress = object.ethAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegateKeysByEthAddressAmino): QueryDelegateKeysByEthAddress {
    const message = createBaseQueryDelegateKeysByEthAddress();
    if (object.eth_address !== undefined && object.eth_address !== null) {
      message.ethAddress = object.eth_address;
    }
    return message;
  },
  toAmino(message: QueryDelegateKeysByEthAddress): QueryDelegateKeysByEthAddressAmino {
    const obj: any = {};
    obj.eth_address = message.ethAddress === "" ? undefined : message.ethAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegateKeysByEthAddressAminoMsg): QueryDelegateKeysByEthAddress {
    return QueryDelegateKeysByEthAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegateKeysByEthAddressProtoMsg): QueryDelegateKeysByEthAddress {
    return QueryDelegateKeysByEthAddress.decode(message.value);
  },
  toProto(message: QueryDelegateKeysByEthAddress): Uint8Array {
    return QueryDelegateKeysByEthAddress.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegateKeysByEthAddress): QueryDelegateKeysByEthAddressProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryDelegateKeysByEthAddress",
      value: QueryDelegateKeysByEthAddress.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDelegateKeysByEthAddressResponse(): QueryDelegateKeysByEthAddressResponse {
  return {
    validatorAddress: "",
    orchestratorAddress: ""
  };
}
/**
 * @name QueryDelegateKeysByEthAddressResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryDelegateKeysByEthAddressResponse
 */
export const QueryDelegateKeysByEthAddressResponse = {
  typeUrl: "/injective.peggy.v1.QueryDelegateKeysByEthAddressResponse",
  is(o: any): o is QueryDelegateKeysByEthAddressResponse {
    return o && (o.$typeUrl === QueryDelegateKeysByEthAddressResponse.typeUrl || typeof o.validatorAddress === "string" && typeof o.orchestratorAddress === "string");
  },
  isAmino(o: any): o is QueryDelegateKeysByEthAddressResponseAmino {
    return o && (o.$typeUrl === QueryDelegateKeysByEthAddressResponse.typeUrl || typeof o.validator_address === "string" && typeof o.orchestrator_address === "string");
  },
  encode(message: QueryDelegateKeysByEthAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(18).string(message.orchestratorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegateKeysByEthAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeysByEthAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.orchestratorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegateKeysByEthAddressResponse>): QueryDelegateKeysByEthAddressResponse {
    const message = createBaseQueryDelegateKeysByEthAddressResponse();
    message.validatorAddress = object.validatorAddress ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegateKeysByEthAddressResponseAmino): QueryDelegateKeysByEthAddressResponse {
    const message = createBaseQueryDelegateKeysByEthAddressResponse();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.orchestrator_address !== undefined && object.orchestrator_address !== null) {
      message.orchestratorAddress = object.orchestrator_address;
    }
    return message;
  },
  toAmino(message: QueryDelegateKeysByEthAddressResponse): QueryDelegateKeysByEthAddressResponseAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.orchestrator_address = message.orchestratorAddress === "" ? undefined : message.orchestratorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegateKeysByEthAddressResponseAminoMsg): QueryDelegateKeysByEthAddressResponse {
    return QueryDelegateKeysByEthAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegateKeysByEthAddressResponseProtoMsg): QueryDelegateKeysByEthAddressResponse {
    return QueryDelegateKeysByEthAddressResponse.decode(message.value);
  },
  toProto(message: QueryDelegateKeysByEthAddressResponse): Uint8Array {
    return QueryDelegateKeysByEthAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegateKeysByEthAddressResponse): QueryDelegateKeysByEthAddressResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryDelegateKeysByEthAddressResponse",
      value: QueryDelegateKeysByEthAddressResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDelegateKeysByOrchestratorAddress(): QueryDelegateKeysByOrchestratorAddress {
  return {
    orchestratorAddress: ""
  };
}
/**
 * @name QueryDelegateKeysByOrchestratorAddress
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress
 */
export const QueryDelegateKeysByOrchestratorAddress = {
  typeUrl: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress",
  is(o: any): o is QueryDelegateKeysByOrchestratorAddress {
    return o && (o.$typeUrl === QueryDelegateKeysByOrchestratorAddress.typeUrl || typeof o.orchestratorAddress === "string");
  },
  isAmino(o: any): o is QueryDelegateKeysByOrchestratorAddressAmino {
    return o && (o.$typeUrl === QueryDelegateKeysByOrchestratorAddress.typeUrl || typeof o.orchestrator_address === "string");
  },
  encode(message: QueryDelegateKeysByOrchestratorAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orchestratorAddress !== "") {
      writer.uint32(10).string(message.orchestratorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegateKeysByOrchestratorAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeysByOrchestratorAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orchestratorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegateKeysByOrchestratorAddress>): QueryDelegateKeysByOrchestratorAddress {
    const message = createBaseQueryDelegateKeysByOrchestratorAddress();
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegateKeysByOrchestratorAddressAmino): QueryDelegateKeysByOrchestratorAddress {
    const message = createBaseQueryDelegateKeysByOrchestratorAddress();
    if (object.orchestrator_address !== undefined && object.orchestrator_address !== null) {
      message.orchestratorAddress = object.orchestrator_address;
    }
    return message;
  },
  toAmino(message: QueryDelegateKeysByOrchestratorAddress): QueryDelegateKeysByOrchestratorAddressAmino {
    const obj: any = {};
    obj.orchestrator_address = message.orchestratorAddress === "" ? undefined : message.orchestratorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegateKeysByOrchestratorAddressAminoMsg): QueryDelegateKeysByOrchestratorAddress {
    return QueryDelegateKeysByOrchestratorAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegateKeysByOrchestratorAddressProtoMsg): QueryDelegateKeysByOrchestratorAddress {
    return QueryDelegateKeysByOrchestratorAddress.decode(message.value);
  },
  toProto(message: QueryDelegateKeysByOrchestratorAddress): Uint8Array {
    return QueryDelegateKeysByOrchestratorAddress.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegateKeysByOrchestratorAddress): QueryDelegateKeysByOrchestratorAddressProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress",
      value: QueryDelegateKeysByOrchestratorAddress.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDelegateKeysByOrchestratorAddressResponse(): QueryDelegateKeysByOrchestratorAddressResponse {
  return {
    validatorAddress: "",
    ethAddress: ""
  };
}
/**
 * @name QueryDelegateKeysByOrchestratorAddressResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse
 */
export const QueryDelegateKeysByOrchestratorAddressResponse = {
  typeUrl: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse",
  is(o: any): o is QueryDelegateKeysByOrchestratorAddressResponse {
    return o && (o.$typeUrl === QueryDelegateKeysByOrchestratorAddressResponse.typeUrl || typeof o.validatorAddress === "string" && typeof o.ethAddress === "string");
  },
  isAmino(o: any): o is QueryDelegateKeysByOrchestratorAddressResponseAmino {
    return o && (o.$typeUrl === QueryDelegateKeysByOrchestratorAddressResponse.typeUrl || typeof o.validator_address === "string" && typeof o.eth_address === "string");
  },
  encode(message: QueryDelegateKeysByOrchestratorAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.ethAddress !== "") {
      writer.uint32(18).string(message.ethAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegateKeysByOrchestratorAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeysByOrchestratorAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.ethAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegateKeysByOrchestratorAddressResponse>): QueryDelegateKeysByOrchestratorAddressResponse {
    const message = createBaseQueryDelegateKeysByOrchestratorAddressResponse();
    message.validatorAddress = object.validatorAddress ?? "";
    message.ethAddress = object.ethAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegateKeysByOrchestratorAddressResponseAmino): QueryDelegateKeysByOrchestratorAddressResponse {
    const message = createBaseQueryDelegateKeysByOrchestratorAddressResponse();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.eth_address !== undefined && object.eth_address !== null) {
      message.ethAddress = object.eth_address;
    }
    return message;
  },
  toAmino(message: QueryDelegateKeysByOrchestratorAddressResponse): QueryDelegateKeysByOrchestratorAddressResponseAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.eth_address = message.ethAddress === "" ? undefined : message.ethAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegateKeysByOrchestratorAddressResponseAminoMsg): QueryDelegateKeysByOrchestratorAddressResponse {
    return QueryDelegateKeysByOrchestratorAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegateKeysByOrchestratorAddressResponseProtoMsg): QueryDelegateKeysByOrchestratorAddressResponse {
    return QueryDelegateKeysByOrchestratorAddressResponse.decode(message.value);
  },
  toProto(message: QueryDelegateKeysByOrchestratorAddressResponse): Uint8Array {
    return QueryDelegateKeysByOrchestratorAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegateKeysByOrchestratorAddressResponse): QueryDelegateKeysByOrchestratorAddressResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse",
      value: QueryDelegateKeysByOrchestratorAddressResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryPendingSendToEth(): QueryPendingSendToEth {
  return {
    senderAddress: ""
  };
}
/**
 * @name QueryPendingSendToEth
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryPendingSendToEth
 */
export const QueryPendingSendToEth = {
  typeUrl: "/injective.peggy.v1.QueryPendingSendToEth",
  is(o: any): o is QueryPendingSendToEth {
    return o && (o.$typeUrl === QueryPendingSendToEth.typeUrl || typeof o.senderAddress === "string");
  },
  isAmino(o: any): o is QueryPendingSendToEthAmino {
    return o && (o.$typeUrl === QueryPendingSendToEth.typeUrl || typeof o.sender_address === "string");
  },
  encode(message: QueryPendingSendToEth, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingSendToEth {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingSendToEth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPendingSendToEth>): QueryPendingSendToEth {
    const message = createBaseQueryPendingSendToEth();
    message.senderAddress = object.senderAddress ?? "";
    return message;
  },
  fromAmino(object: QueryPendingSendToEthAmino): QueryPendingSendToEth {
    const message = createBaseQueryPendingSendToEth();
    if (object.sender_address !== undefined && object.sender_address !== null) {
      message.senderAddress = object.sender_address;
    }
    return message;
  },
  toAmino(message: QueryPendingSendToEth): QueryPendingSendToEthAmino {
    const obj: any = {};
    obj.sender_address = message.senderAddress === "" ? undefined : message.senderAddress;
    return obj;
  },
  fromAminoMsg(object: QueryPendingSendToEthAminoMsg): QueryPendingSendToEth {
    return QueryPendingSendToEth.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingSendToEthProtoMsg): QueryPendingSendToEth {
    return QueryPendingSendToEth.decode(message.value);
  },
  toProto(message: QueryPendingSendToEth): Uint8Array {
    return QueryPendingSendToEth.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingSendToEth): QueryPendingSendToEthProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryPendingSendToEth",
      value: QueryPendingSendToEth.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryPendingSendToEthResponse(): QueryPendingSendToEthResponse {
  return {
    transfersInBatches: [],
    unbatchedTransfers: []
  };
}
/**
 * @name QueryPendingSendToEthResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryPendingSendToEthResponse
 */
export const QueryPendingSendToEthResponse = {
  typeUrl: "/injective.peggy.v1.QueryPendingSendToEthResponse",
  is(o: any): o is QueryPendingSendToEthResponse {
    return o && (o.$typeUrl === QueryPendingSendToEthResponse.typeUrl || Array.isArray(o.transfersInBatches) && (!o.transfersInBatches.length || OutgoingTransferTx.is(o.transfersInBatches[0])) && Array.isArray(o.unbatchedTransfers) && (!o.unbatchedTransfers.length || OutgoingTransferTx.is(o.unbatchedTransfers[0])));
  },
  isAmino(o: any): o is QueryPendingSendToEthResponseAmino {
    return o && (o.$typeUrl === QueryPendingSendToEthResponse.typeUrl || Array.isArray(o.transfers_in_batches) && (!o.transfers_in_batches.length || OutgoingTransferTx.isAmino(o.transfers_in_batches[0])) && Array.isArray(o.unbatched_transfers) && (!o.unbatched_transfers.length || OutgoingTransferTx.isAmino(o.unbatched_transfers[0])));
  },
  encode(message: QueryPendingSendToEthResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.transfersInBatches) {
      OutgoingTransferTx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.unbatchedTransfers) {
      OutgoingTransferTx.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingSendToEthResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingSendToEthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transfersInBatches.push(OutgoingTransferTx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.unbatchedTransfers.push(OutgoingTransferTx.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPendingSendToEthResponse>): QueryPendingSendToEthResponse {
    const message = createBaseQueryPendingSendToEthResponse();
    message.transfersInBatches = object.transfersInBatches?.map(e => OutgoingTransferTx.fromPartial(e)) || [];
    message.unbatchedTransfers = object.unbatchedTransfers?.map(e => OutgoingTransferTx.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPendingSendToEthResponseAmino): QueryPendingSendToEthResponse {
    const message = createBaseQueryPendingSendToEthResponse();
    message.transfersInBatches = object.transfers_in_batches?.map(e => OutgoingTransferTx.fromAmino(e)) || [];
    message.unbatchedTransfers = object.unbatched_transfers?.map(e => OutgoingTransferTx.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPendingSendToEthResponse): QueryPendingSendToEthResponseAmino {
    const obj: any = {};
    if (message.transfersInBatches) {
      obj.transfers_in_batches = message.transfersInBatches.map(e => e ? OutgoingTransferTx.toAmino(e) : undefined);
    } else {
      obj.transfers_in_batches = message.transfersInBatches;
    }
    if (message.unbatchedTransfers) {
      obj.unbatched_transfers = message.unbatchedTransfers.map(e => e ? OutgoingTransferTx.toAmino(e) : undefined);
    } else {
      obj.unbatched_transfers = message.unbatchedTransfers;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPendingSendToEthResponseAminoMsg): QueryPendingSendToEthResponse {
    return QueryPendingSendToEthResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingSendToEthResponseProtoMsg): QueryPendingSendToEthResponse {
    return QueryPendingSendToEthResponse.decode(message.value);
  },
  toProto(message: QueryPendingSendToEthResponse): Uint8Array {
    return QueryPendingSendToEthResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingSendToEthResponse): QueryPendingSendToEthResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryPendingSendToEthResponse",
      value: QueryPendingSendToEthResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryPendingSendToEthResponse.typeUrl)) {
      return;
    }
    OutgoingTransferTx.registerTypeUrl();
  }
};
function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}
/**
 * QueryModuleStateRequest is the request type for the Query/PeggyModuleState
 * RPC method.
 * @name QueryModuleStateRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryModuleStateRequest
 */
export const QueryModuleStateRequest = {
  typeUrl: "/injective.peggy.v1.QueryModuleStateRequest",
  is(o: any): o is QueryModuleStateRequest {
    return o && o.$typeUrl === QueryModuleStateRequest.typeUrl;
  },
  isAmino(o: any): o is QueryModuleStateRequestAmino {
    return o && o.$typeUrl === QueryModuleStateRequest.typeUrl;
  },
  encode(_: QueryModuleStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryModuleStateRequest>): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  },
  fromAmino(_: QueryModuleStateRequestAmino): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  },
  toAmino(_: QueryModuleStateRequest): QueryModuleStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryModuleStateRequestAminoMsg): QueryModuleStateRequest {
    return QueryModuleStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleStateRequestProtoMsg): QueryModuleStateRequest {
    return QueryModuleStateRequest.decode(message.value);
  },
  toProto(message: QueryModuleStateRequest): Uint8Array {
    return QueryModuleStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleStateRequest): QueryModuleStateRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryModuleStateRequest",
      value: QueryModuleStateRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryModuleStateResponse(): QueryModuleStateResponse {
  return {
    state: undefined
  };
}
/**
 * QueryModuleStateResponse is the response type for the Query/PeggyModuleState
 * RPC method.
 * @name QueryModuleStateResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.QueryModuleStateResponse
 */
export const QueryModuleStateResponse = {
  typeUrl: "/injective.peggy.v1.QueryModuleStateResponse",
  is(o: any): o is QueryModuleStateResponse {
    return o && o.$typeUrl === QueryModuleStateResponse.typeUrl;
  },
  isAmino(o: any): o is QueryModuleStateResponseAmino {
    return o && o.$typeUrl === QueryModuleStateResponse.typeUrl;
  },
  encode(message: QueryModuleStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== undefined) {
      GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = GenesisState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryModuleStateResponse>): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    message.state = object.state !== undefined && object.state !== null ? GenesisState.fromPartial(object.state) : undefined;
    return message;
  },
  fromAmino(object: QueryModuleStateResponseAmino): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    if (object.state !== undefined && object.state !== null) {
      message.state = GenesisState.fromAmino(object.state);
    }
    return message;
  },
  toAmino(message: QueryModuleStateResponse): QueryModuleStateResponseAmino {
    const obj: any = {};
    obj.state = message.state ? GenesisState.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryModuleStateResponseAminoMsg): QueryModuleStateResponse {
    return QueryModuleStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleStateResponseProtoMsg): QueryModuleStateResponse {
    return QueryModuleStateResponse.decode(message.value);
  },
  toProto(message: QueryModuleStateResponse): Uint8Array {
    return QueryModuleStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleStateResponse): QueryModuleStateResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryModuleStateResponse",
      value: QueryModuleStateResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryModuleStateResponse.typeUrl)) {
      return;
    }
    GenesisState.registerTypeUrl();
  }
};
function createBaseMissingNoncesRequest(): MissingNoncesRequest {
  return {};
}
/**
 * @name MissingNoncesRequest
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.MissingNoncesRequest
 */
export const MissingNoncesRequest = {
  typeUrl: "/injective.peggy.v1.MissingNoncesRequest",
  is(o: any): o is MissingNoncesRequest {
    return o && o.$typeUrl === MissingNoncesRequest.typeUrl;
  },
  isAmino(o: any): o is MissingNoncesRequestAmino {
    return o && o.$typeUrl === MissingNoncesRequest.typeUrl;
  },
  encode(_: MissingNoncesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MissingNoncesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMissingNoncesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MissingNoncesRequest>): MissingNoncesRequest {
    const message = createBaseMissingNoncesRequest();
    return message;
  },
  fromAmino(_: MissingNoncesRequestAmino): MissingNoncesRequest {
    const message = createBaseMissingNoncesRequest();
    return message;
  },
  toAmino(_: MissingNoncesRequest): MissingNoncesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MissingNoncesRequestAminoMsg): MissingNoncesRequest {
    return MissingNoncesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MissingNoncesRequestProtoMsg): MissingNoncesRequest {
    return MissingNoncesRequest.decode(message.value);
  },
  toProto(message: MissingNoncesRequest): Uint8Array {
    return MissingNoncesRequest.encode(message).finish();
  },
  toProtoMsg(message: MissingNoncesRequest): MissingNoncesRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MissingNoncesRequest",
      value: MissingNoncesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMissingNoncesResponse(): MissingNoncesResponse {
  return {
    operatorAddresses: []
  };
}
/**
 * @name MissingNoncesResponse
 * @package injective.peggy.v1
 * @see proto type: injective.peggy.v1.MissingNoncesResponse
 */
export const MissingNoncesResponse = {
  typeUrl: "/injective.peggy.v1.MissingNoncesResponse",
  is(o: any): o is MissingNoncesResponse {
    return o && (o.$typeUrl === MissingNoncesResponse.typeUrl || Array.isArray(o.operatorAddresses) && (!o.operatorAddresses.length || typeof o.operatorAddresses[0] === "string"));
  },
  isAmino(o: any): o is MissingNoncesResponseAmino {
    return o && (o.$typeUrl === MissingNoncesResponse.typeUrl || Array.isArray(o.operator_addresses) && (!o.operator_addresses.length || typeof o.operator_addresses[0] === "string"));
  },
  encode(message: MissingNoncesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.operatorAddresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MissingNoncesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMissingNoncesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MissingNoncesResponse>): MissingNoncesResponse {
    const message = createBaseMissingNoncesResponse();
    message.operatorAddresses = object.operatorAddresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MissingNoncesResponseAmino): MissingNoncesResponse {
    const message = createBaseMissingNoncesResponse();
    message.operatorAddresses = object.operator_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: MissingNoncesResponse): MissingNoncesResponseAmino {
    const obj: any = {};
    if (message.operatorAddresses) {
      obj.operator_addresses = message.operatorAddresses.map(e => e);
    } else {
      obj.operator_addresses = message.operatorAddresses;
    }
    return obj;
  },
  fromAminoMsg(object: MissingNoncesResponseAminoMsg): MissingNoncesResponse {
    return MissingNoncesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MissingNoncesResponseProtoMsg): MissingNoncesResponse {
    return MissingNoncesResponse.decode(message.value);
  },
  toProto(message: MissingNoncesResponse): Uint8Array {
    return MissingNoncesResponse.encode(message).finish();
  },
  toProtoMsg(message: MissingNoncesResponse): MissingNoncesResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MissingNoncesResponse",
      value: MissingNoncesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};