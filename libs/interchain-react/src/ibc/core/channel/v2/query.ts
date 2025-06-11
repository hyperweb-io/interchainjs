import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Height, HeightAmino } from "../../client/v1/client";
import { PacketState, PacketStateAmino } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/**
 * QueryNextSequenceSendRequest is the request type for the Query/QueryNextSequenceSend RPC method
 * @name QueryNextSequenceSendRequest
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryNextSequenceSendRequest
 */
export interface QueryNextSequenceSendRequest {
  /**
   * client unique identifier
   */
  clientId: string;
}
export interface QueryNextSequenceSendRequestProtoMsg {
  typeUrl: "/ibc.core.channel.v2.QueryNextSequenceSendRequest";
  value: Uint8Array;
}
/**
 * QueryNextSequenceSendRequest is the request type for the Query/QueryNextSequenceSend RPC method
 * @name QueryNextSequenceSendRequestAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryNextSequenceSendRequest
 */
export interface QueryNextSequenceSendRequestAmino {
  /**
   * client unique identifier
   */
  client_id: string;
}
export interface QueryNextSequenceSendRequestAminoMsg {
  type: "cosmos-sdk/QueryNextSequenceSendRequest";
  value: QueryNextSequenceSendRequestAmino;
}
/**
 * QueryNextSequenceSendResponse is the response type for the Query/QueryNextSequenceSend RPC method
 * @name QueryNextSequenceSendResponse
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryNextSequenceSendResponse
 */
export interface QueryNextSequenceSendResponse {
  /**
   * next sequence send number
   */
  nextSequenceSend: bigint;
  /**
   * merkle proof of existence
   */
  proof: Uint8Array;
  /**
   * height at which the proof was retrieved
   */
  proofHeight: Height;
}
export interface QueryNextSequenceSendResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v2.QueryNextSequenceSendResponse";
  value: Uint8Array;
}
/**
 * QueryNextSequenceSendResponse is the response type for the Query/QueryNextSequenceSend RPC method
 * @name QueryNextSequenceSendResponseAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryNextSequenceSendResponse
 */
export interface QueryNextSequenceSendResponseAmino {
  /**
   * next sequence send number
   */
  next_sequence_send: string;
  /**
   * merkle proof of existence
   */
  proof: string;
  /**
   * height at which the proof was retrieved
   */
  proof_height: HeightAmino;
}
export interface QueryNextSequenceSendResponseAminoMsg {
  type: "cosmos-sdk/QueryNextSequenceSendResponse";
  value: QueryNextSequenceSendResponseAmino;
}
/**
 * QueryPacketCommitmentRequest is the request type for the Query/PacketCommitment RPC method.
 * @name QueryPacketCommitmentRequest
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketCommitmentRequest
 */
export interface QueryPacketCommitmentRequest {
  /**
   * client unique identifier
   */
  clientId: string;
  /**
   * packet sequence
   */
  sequence: bigint;
}
export interface QueryPacketCommitmentRequestProtoMsg {
  typeUrl: "/ibc.core.channel.v2.QueryPacketCommitmentRequest";
  value: Uint8Array;
}
/**
 * QueryPacketCommitmentRequest is the request type for the Query/PacketCommitment RPC method.
 * @name QueryPacketCommitmentRequestAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketCommitmentRequest
 */
export interface QueryPacketCommitmentRequestAmino {
  /**
   * client unique identifier
   */
  client_id: string;
  /**
   * packet sequence
   */
  sequence: string;
}
export interface QueryPacketCommitmentRequestAminoMsg {
  type: "cosmos-sdk/QueryPacketCommitmentRequest";
  value: QueryPacketCommitmentRequestAmino;
}
/**
 * QueryPacketCommitmentResponse is the response type for the Query/PacketCommitment RPC method.
 * @name QueryPacketCommitmentResponse
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketCommitmentResponse
 */
export interface QueryPacketCommitmentResponse {
  /**
   * packet associated with the request fields
   */
  commitment: Uint8Array;
  /**
   * merkle proof of existence
   */
  proof: Uint8Array;
  /**
   * height at which the proof was retrieved
   */
  proofHeight: Height;
}
export interface QueryPacketCommitmentResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v2.QueryPacketCommitmentResponse";
  value: Uint8Array;
}
/**
 * QueryPacketCommitmentResponse is the response type for the Query/PacketCommitment RPC method.
 * @name QueryPacketCommitmentResponseAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketCommitmentResponse
 */
export interface QueryPacketCommitmentResponseAmino {
  /**
   * packet associated with the request fields
   */
  commitment: string;
  /**
   * merkle proof of existence
   */
  proof: string;
  /**
   * height at which the proof was retrieved
   */
  proof_height: HeightAmino;
}
export interface QueryPacketCommitmentResponseAminoMsg {
  type: "cosmos-sdk/QueryPacketCommitmentResponse";
  value: QueryPacketCommitmentResponseAmino;
}
/**
 * QueryPacketCommitmentsRequest is the request type for the Query/PacketCommitments RPC method.
 * @name QueryPacketCommitmentsRequest
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketCommitmentsRequest
 */
export interface QueryPacketCommitmentsRequest {
  /**
   * client unique identifier
   */
  clientId: string;
  /**
   * pagination request
   */
  pagination?: PageRequest;
}
export interface QueryPacketCommitmentsRequestProtoMsg {
  typeUrl: "/ibc.core.channel.v2.QueryPacketCommitmentsRequest";
  value: Uint8Array;
}
/**
 * QueryPacketCommitmentsRequest is the request type for the Query/PacketCommitments RPC method.
 * @name QueryPacketCommitmentsRequestAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketCommitmentsRequest
 */
export interface QueryPacketCommitmentsRequestAmino {
  /**
   * client unique identifier
   */
  client_id: string;
  /**
   * pagination request
   */
  pagination?: PageRequestAmino;
}
export interface QueryPacketCommitmentsRequestAminoMsg {
  type: "cosmos-sdk/QueryPacketCommitmentsRequest";
  value: QueryPacketCommitmentsRequestAmino;
}
/**
 * QueryPacketCommitmentResponse is the response type for the Query/PacketCommitment RPC method.
 * @name QueryPacketCommitmentsResponse
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketCommitmentsResponse
 */
export interface QueryPacketCommitmentsResponse {
  /**
   * collection of packet commitments for the requested channel identifier.
   */
  commitments: PacketState[];
  /**
   * pagination response.
   */
  pagination?: PageResponse;
  /**
   * query block height.
   */
  height: Height;
}
export interface QueryPacketCommitmentsResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v2.QueryPacketCommitmentsResponse";
  value: Uint8Array;
}
/**
 * QueryPacketCommitmentResponse is the response type for the Query/PacketCommitment RPC method.
 * @name QueryPacketCommitmentsResponseAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketCommitmentsResponse
 */
export interface QueryPacketCommitmentsResponseAmino {
  /**
   * collection of packet commitments for the requested channel identifier.
   */
  commitments: PacketStateAmino[];
  /**
   * pagination response.
   */
  pagination?: PageResponseAmino;
  /**
   * query block height.
   */
  height: HeightAmino;
}
export interface QueryPacketCommitmentsResponseAminoMsg {
  type: "cosmos-sdk/QueryPacketCommitmentsResponse";
  value: QueryPacketCommitmentsResponseAmino;
}
/**
 * QueryPacketAcknowledgementRequest is the request type for the Query/PacketAcknowledgement RPC method.
 * @name QueryPacketAcknowledgementRequest
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketAcknowledgementRequest
 */
export interface QueryPacketAcknowledgementRequest {
  /**
   * client unique identifier
   */
  clientId: string;
  /**
   * packet sequence
   */
  sequence: bigint;
}
export interface QueryPacketAcknowledgementRequestProtoMsg {
  typeUrl: "/ibc.core.channel.v2.QueryPacketAcknowledgementRequest";
  value: Uint8Array;
}
/**
 * QueryPacketAcknowledgementRequest is the request type for the Query/PacketAcknowledgement RPC method.
 * @name QueryPacketAcknowledgementRequestAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketAcknowledgementRequest
 */
export interface QueryPacketAcknowledgementRequestAmino {
  /**
   * client unique identifier
   */
  client_id: string;
  /**
   * packet sequence
   */
  sequence: string;
}
export interface QueryPacketAcknowledgementRequestAminoMsg {
  type: "cosmos-sdk/QueryPacketAcknowledgementRequest";
  value: QueryPacketAcknowledgementRequestAmino;
}
/**
 * QueryPacketAcknowledgementResponse is the response type for the Query/PacketAcknowledgement RPC method.
 * @name QueryPacketAcknowledgementResponse
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketAcknowledgementResponse
 */
export interface QueryPacketAcknowledgementResponse {
  /**
   * acknowledgement associated with the request fields
   */
  acknowledgement: Uint8Array;
  /**
   * merkle proof of existence
   */
  proof: Uint8Array;
  /**
   * height at which the proof was retrieved
   */
  proofHeight: Height;
}
export interface QueryPacketAcknowledgementResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v2.QueryPacketAcknowledgementResponse";
  value: Uint8Array;
}
/**
 * QueryPacketAcknowledgementResponse is the response type for the Query/PacketAcknowledgement RPC method.
 * @name QueryPacketAcknowledgementResponseAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketAcknowledgementResponse
 */
export interface QueryPacketAcknowledgementResponseAmino {
  /**
   * acknowledgement associated with the request fields
   */
  acknowledgement: string;
  /**
   * merkle proof of existence
   */
  proof: string;
  /**
   * height at which the proof was retrieved
   */
  proof_height: HeightAmino;
}
export interface QueryPacketAcknowledgementResponseAminoMsg {
  type: "cosmos-sdk/QueryPacketAcknowledgementResponse";
  value: QueryPacketAcknowledgementResponseAmino;
}
/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 * @name QueryPacketAcknowledgementsRequest
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketAcknowledgementsRequest
 */
export interface QueryPacketAcknowledgementsRequest {
  /**
   * client unique identifier
   */
  clientId: string;
  /**
   * pagination request
   */
  pagination?: PageRequest;
  /**
   * list of packet sequences
   */
  packetCommitmentSequences: bigint[];
}
export interface QueryPacketAcknowledgementsRequestProtoMsg {
  typeUrl: "/ibc.core.channel.v2.QueryPacketAcknowledgementsRequest";
  value: Uint8Array;
}
/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 * @name QueryPacketAcknowledgementsRequestAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketAcknowledgementsRequest
 */
export interface QueryPacketAcknowledgementsRequestAmino {
  /**
   * client unique identifier
   */
  client_id: string;
  /**
   * pagination request
   */
  pagination?: PageRequestAmino;
  /**
   * list of packet sequences
   */
  packet_commitment_sequences: string[];
}
export interface QueryPacketAcknowledgementsRequestAminoMsg {
  type: "cosmos-sdk/QueryPacketAcknowledgementsRequest";
  value: QueryPacketAcknowledgementsRequestAmino;
}
/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 * @name QueryPacketAcknowledgementsResponse
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketAcknowledgementsResponse
 */
export interface QueryPacketAcknowledgementsResponse {
  acknowledgements: PacketState[];
  /**
   * pagination response
   */
  pagination?: PageResponse;
  /**
   * query block height
   */
  height: Height;
}
export interface QueryPacketAcknowledgementsResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v2.QueryPacketAcknowledgementsResponse";
  value: Uint8Array;
}
/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 * @name QueryPacketAcknowledgementsResponseAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketAcknowledgementsResponse
 */
export interface QueryPacketAcknowledgementsResponseAmino {
  acknowledgements: PacketStateAmino[];
  /**
   * pagination response
   */
  pagination?: PageResponseAmino;
  /**
   * query block height
   */
  height: HeightAmino;
}
export interface QueryPacketAcknowledgementsResponseAminoMsg {
  type: "cosmos-sdk/QueryPacketAcknowledgementsResponse";
  value: QueryPacketAcknowledgementsResponseAmino;
}
/**
 * QueryPacketReceiptRequest is the request type for the Query/PacketReceipt RPC method.
 * @name QueryPacketReceiptRequest
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketReceiptRequest
 */
export interface QueryPacketReceiptRequest {
  /**
   * client unique identifier
   */
  clientId: string;
  /**
   * packet sequence
   */
  sequence: bigint;
}
export interface QueryPacketReceiptRequestProtoMsg {
  typeUrl: "/ibc.core.channel.v2.QueryPacketReceiptRequest";
  value: Uint8Array;
}
/**
 * QueryPacketReceiptRequest is the request type for the Query/PacketReceipt RPC method.
 * @name QueryPacketReceiptRequestAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketReceiptRequest
 */
export interface QueryPacketReceiptRequestAmino {
  /**
   * client unique identifier
   */
  client_id: string;
  /**
   * packet sequence
   */
  sequence: string;
}
export interface QueryPacketReceiptRequestAminoMsg {
  type: "cosmos-sdk/QueryPacketReceiptRequest";
  value: QueryPacketReceiptRequestAmino;
}
/**
 * QueryPacketReceiptResponse is the response type for the Query/PacketReceipt RPC method.
 * @name QueryPacketReceiptResponse
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketReceiptResponse
 */
export interface QueryPacketReceiptResponse {
  /**
   * success flag for if receipt exists
   */
  received: boolean;
  /**
   * merkle proof of existence or absence
   */
  proof: Uint8Array;
  /**
   * height at which the proof was retrieved
   */
  proofHeight: Height;
}
export interface QueryPacketReceiptResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v2.QueryPacketReceiptResponse";
  value: Uint8Array;
}
/**
 * QueryPacketReceiptResponse is the response type for the Query/PacketReceipt RPC method.
 * @name QueryPacketReceiptResponseAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketReceiptResponse
 */
export interface QueryPacketReceiptResponseAmino {
  /**
   * success flag for if receipt exists
   */
  received: boolean;
  /**
   * merkle proof of existence or absence
   */
  proof: string;
  /**
   * height at which the proof was retrieved
   */
  proof_height: HeightAmino;
}
export interface QueryPacketReceiptResponseAminoMsg {
  type: "cosmos-sdk/QueryPacketReceiptResponse";
  value: QueryPacketReceiptResponseAmino;
}
/**
 * QueryUnreceivedPacketsRequest is the request type for the Query/UnreceivedPackets RPC method
 * @name QueryUnreceivedPacketsRequest
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryUnreceivedPacketsRequest
 */
export interface QueryUnreceivedPacketsRequest {
  /**
   * client unique identifier
   */
  clientId: string;
  /**
   * list of packet sequences
   */
  sequences: bigint[];
}
export interface QueryUnreceivedPacketsRequestProtoMsg {
  typeUrl: "/ibc.core.channel.v2.QueryUnreceivedPacketsRequest";
  value: Uint8Array;
}
/**
 * QueryUnreceivedPacketsRequest is the request type for the Query/UnreceivedPackets RPC method
 * @name QueryUnreceivedPacketsRequestAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryUnreceivedPacketsRequest
 */
export interface QueryUnreceivedPacketsRequestAmino {
  /**
   * client unique identifier
   */
  client_id: string;
  /**
   * list of packet sequences
   */
  sequences: string[];
}
export interface QueryUnreceivedPacketsRequestAminoMsg {
  type: "cosmos-sdk/QueryUnreceivedPacketsRequest";
  value: QueryUnreceivedPacketsRequestAmino;
}
/**
 * QueryUnreceivedPacketsResponse is the response type for the Query/UnreceivedPacketCommitments RPC method
 * @name QueryUnreceivedPacketsResponse
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryUnreceivedPacketsResponse
 */
export interface QueryUnreceivedPacketsResponse {
  /**
   * list of unreceived packet sequences
   */
  sequences: bigint[];
  /**
   * query block height
   */
  height: Height;
}
export interface QueryUnreceivedPacketsResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v2.QueryUnreceivedPacketsResponse";
  value: Uint8Array;
}
/**
 * QueryUnreceivedPacketsResponse is the response type for the Query/UnreceivedPacketCommitments RPC method
 * @name QueryUnreceivedPacketsResponseAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryUnreceivedPacketsResponse
 */
export interface QueryUnreceivedPacketsResponseAmino {
  /**
   * list of unreceived packet sequences
   */
  sequences: string[];
  /**
   * query block height
   */
  height: HeightAmino;
}
export interface QueryUnreceivedPacketsResponseAminoMsg {
  type: "cosmos-sdk/QueryUnreceivedPacketsResponse";
  value: QueryUnreceivedPacketsResponseAmino;
}
/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 * @name QueryUnreceivedAcksRequest
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryUnreceivedAcksRequest
 */
export interface QueryUnreceivedAcksRequest {
  /**
   * client unique identifier
   */
  clientId: string;
  /**
   * list of acknowledgement sequences
   */
  packetAckSequences: bigint[];
}
export interface QueryUnreceivedAcksRequestProtoMsg {
  typeUrl: "/ibc.core.channel.v2.QueryUnreceivedAcksRequest";
  value: Uint8Array;
}
/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 * @name QueryUnreceivedAcksRequestAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryUnreceivedAcksRequest
 */
export interface QueryUnreceivedAcksRequestAmino {
  /**
   * client unique identifier
   */
  client_id: string;
  /**
   * list of acknowledgement sequences
   */
  packet_ack_sequences: string[];
}
export interface QueryUnreceivedAcksRequestAminoMsg {
  type: "cosmos-sdk/QueryUnreceivedAcksRequest";
  value: QueryUnreceivedAcksRequestAmino;
}
/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 * @name QueryUnreceivedAcksResponse
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryUnreceivedAcksResponse
 */
export interface QueryUnreceivedAcksResponse {
  /**
   * list of unreceived acknowledgement sequences
   */
  sequences: bigint[];
  /**
   * query block height
   */
  height: Height;
}
export interface QueryUnreceivedAcksResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v2.QueryUnreceivedAcksResponse";
  value: Uint8Array;
}
/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 * @name QueryUnreceivedAcksResponseAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryUnreceivedAcksResponse
 */
export interface QueryUnreceivedAcksResponseAmino {
  /**
   * list of unreceived acknowledgement sequences
   */
  sequences: string[];
  /**
   * query block height
   */
  height: HeightAmino;
}
export interface QueryUnreceivedAcksResponseAminoMsg {
  type: "cosmos-sdk/QueryUnreceivedAcksResponse";
  value: QueryUnreceivedAcksResponseAmino;
}
function createBaseQueryNextSequenceSendRequest(): QueryNextSequenceSendRequest {
  return {
    clientId: ""
  };
}
/**
 * QueryNextSequenceSendRequest is the request type for the Query/QueryNextSequenceSend RPC method
 * @name QueryNextSequenceSendRequest
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryNextSequenceSendRequest
 */
export const QueryNextSequenceSendRequest = {
  typeUrl: "/ibc.core.channel.v2.QueryNextSequenceSendRequest",
  aminoType: "cosmos-sdk/QueryNextSequenceSendRequest",
  is(o: any): o is QueryNextSequenceSendRequest {
    return o && (o.$typeUrl === QueryNextSequenceSendRequest.typeUrl || typeof o.clientId === "string");
  },
  isAmino(o: any): o is QueryNextSequenceSendRequestAmino {
    return o && (o.$typeUrl === QueryNextSequenceSendRequest.typeUrl || typeof o.client_id === "string");
  },
  encode(message: QueryNextSequenceSendRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNextSequenceSendRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextSequenceSendRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryNextSequenceSendRequest>): QueryNextSequenceSendRequest {
    const message = createBaseQueryNextSequenceSendRequest();
    message.clientId = object.clientId ?? "";
    return message;
  },
  fromAmino(object: QueryNextSequenceSendRequestAmino): QueryNextSequenceSendRequest {
    const message = createBaseQueryNextSequenceSendRequest();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    return message;
  },
  toAmino(message: QueryNextSequenceSendRequest): QueryNextSequenceSendRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    return obj;
  },
  fromAminoMsg(object: QueryNextSequenceSendRequestAminoMsg): QueryNextSequenceSendRequest {
    return QueryNextSequenceSendRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryNextSequenceSendRequest): QueryNextSequenceSendRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryNextSequenceSendRequest",
      value: QueryNextSequenceSendRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryNextSequenceSendRequestProtoMsg): QueryNextSequenceSendRequest {
    return QueryNextSequenceSendRequest.decode(message.value);
  },
  toProto(message: QueryNextSequenceSendRequest): Uint8Array {
    return QueryNextSequenceSendRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNextSequenceSendRequest): QueryNextSequenceSendRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.QueryNextSequenceSendRequest",
      value: QueryNextSequenceSendRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryNextSequenceSendResponse(): QueryNextSequenceSendResponse {
  return {
    nextSequenceSend: BigInt(0),
    proof: new Uint8Array(),
    proofHeight: Height.fromPartial({})
  };
}
/**
 * QueryNextSequenceSendResponse is the response type for the Query/QueryNextSequenceSend RPC method
 * @name QueryNextSequenceSendResponse
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryNextSequenceSendResponse
 */
export const QueryNextSequenceSendResponse = {
  typeUrl: "/ibc.core.channel.v2.QueryNextSequenceSendResponse",
  aminoType: "cosmos-sdk/QueryNextSequenceSendResponse",
  is(o: any): o is QueryNextSequenceSendResponse {
    return o && (o.$typeUrl === QueryNextSequenceSendResponse.typeUrl || typeof o.nextSequenceSend === "bigint" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proofHeight));
  },
  isAmino(o: any): o is QueryNextSequenceSendResponseAmino {
    return o && (o.$typeUrl === QueryNextSequenceSendResponse.typeUrl || typeof o.next_sequence_send === "bigint" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryNextSequenceSendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nextSequenceSend !== BigInt(0)) {
      writer.uint32(8).uint64(message.nextSequenceSend);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNextSequenceSendResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextSequenceSendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextSequenceSend = reader.uint64();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryNextSequenceSendResponse>): QueryNextSequenceSendResponse {
    const message = createBaseQueryNextSequenceSendResponse();
    message.nextSequenceSend = object.nextSequenceSend !== undefined && object.nextSequenceSend !== null ? BigInt(object.nextSequenceSend.toString()) : BigInt(0);
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    return message;
  },
  fromAmino(object: QueryNextSequenceSendResponseAmino): QueryNextSequenceSendResponse {
    const message = createBaseQueryNextSequenceSendResponse();
    if (object.next_sequence_send !== undefined && object.next_sequence_send !== null) {
      message.nextSequenceSend = BigInt(object.next_sequence_send);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryNextSequenceSendResponse): QueryNextSequenceSendResponseAmino {
    const obj: any = {};
    obj.next_sequence_send = message.nextSequenceSend !== BigInt(0) ? message.nextSequenceSend?.toString() : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    return obj;
  },
  fromAminoMsg(object: QueryNextSequenceSendResponseAminoMsg): QueryNextSequenceSendResponse {
    return QueryNextSequenceSendResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryNextSequenceSendResponse): QueryNextSequenceSendResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryNextSequenceSendResponse",
      value: QueryNextSequenceSendResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryNextSequenceSendResponseProtoMsg): QueryNextSequenceSendResponse {
    return QueryNextSequenceSendResponse.decode(message.value);
  },
  toProto(message: QueryNextSequenceSendResponse): Uint8Array {
    return QueryNextSequenceSendResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNextSequenceSendResponse): QueryNextSequenceSendResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.QueryNextSequenceSendResponse",
      value: QueryNextSequenceSendResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryNextSequenceSendResponse.typeUrl)) {
      return;
    }
    Height.registerTypeUrl();
  }
};
function createBaseQueryPacketCommitmentRequest(): QueryPacketCommitmentRequest {
  return {
    clientId: "",
    sequence: BigInt(0)
  };
}
/**
 * QueryPacketCommitmentRequest is the request type for the Query/PacketCommitment RPC method.
 * @name QueryPacketCommitmentRequest
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketCommitmentRequest
 */
export const QueryPacketCommitmentRequest = {
  typeUrl: "/ibc.core.channel.v2.QueryPacketCommitmentRequest",
  aminoType: "cosmos-sdk/QueryPacketCommitmentRequest",
  is(o: any): o is QueryPacketCommitmentRequest {
    return o && (o.$typeUrl === QueryPacketCommitmentRequest.typeUrl || typeof o.clientId === "string" && typeof o.sequence === "bigint");
  },
  isAmino(o: any): o is QueryPacketCommitmentRequestAmino {
    return o && (o.$typeUrl === QueryPacketCommitmentRequest.typeUrl || typeof o.client_id === "string" && typeof o.sequence === "bigint");
  },
  encode(message: QueryPacketCommitmentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketCommitmentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPacketCommitmentRequest>): QueryPacketCommitmentRequest {
    const message = createBaseQueryPacketCommitmentRequest();
    message.clientId = object.clientId ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPacketCommitmentRequestAmino): QueryPacketCommitmentRequest {
    const message = createBaseQueryPacketCommitmentRequest();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: QueryPacketCommitmentRequest): QueryPacketCommitmentRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPacketCommitmentRequestAminoMsg): QueryPacketCommitmentRequest {
    return QueryPacketCommitmentRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketCommitmentRequest): QueryPacketCommitmentRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketCommitmentRequest",
      value: QueryPacketCommitmentRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketCommitmentRequestProtoMsg): QueryPacketCommitmentRequest {
    return QueryPacketCommitmentRequest.decode(message.value);
  },
  toProto(message: QueryPacketCommitmentRequest): Uint8Array {
    return QueryPacketCommitmentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketCommitmentRequest): QueryPacketCommitmentRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.QueryPacketCommitmentRequest",
      value: QueryPacketCommitmentRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryPacketCommitmentResponse(): QueryPacketCommitmentResponse {
  return {
    commitment: new Uint8Array(),
    proof: new Uint8Array(),
    proofHeight: Height.fromPartial({})
  };
}
/**
 * QueryPacketCommitmentResponse is the response type for the Query/PacketCommitment RPC method.
 * @name QueryPacketCommitmentResponse
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketCommitmentResponse
 */
export const QueryPacketCommitmentResponse = {
  typeUrl: "/ibc.core.channel.v2.QueryPacketCommitmentResponse",
  aminoType: "cosmos-sdk/QueryPacketCommitmentResponse",
  is(o: any): o is QueryPacketCommitmentResponse {
    return o && (o.$typeUrl === QueryPacketCommitmentResponse.typeUrl || (o.commitment instanceof Uint8Array || typeof o.commitment === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proofHeight));
  },
  isAmino(o: any): o is QueryPacketCommitmentResponseAmino {
    return o && (o.$typeUrl === QueryPacketCommitmentResponse.typeUrl || (o.commitment instanceof Uint8Array || typeof o.commitment === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryPacketCommitmentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.commitment.length !== 0) {
      writer.uint32(10).bytes(message.commitment);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketCommitmentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitment = reader.bytes();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPacketCommitmentResponse>): QueryPacketCommitmentResponse {
    const message = createBaseQueryPacketCommitmentResponse();
    message.commitment = object.commitment ?? new Uint8Array();
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    return message;
  },
  fromAmino(object: QueryPacketCommitmentResponseAmino): QueryPacketCommitmentResponse {
    const message = createBaseQueryPacketCommitmentResponse();
    if (object.commitment !== undefined && object.commitment !== null) {
      message.commitment = bytesFromBase64(object.commitment);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryPacketCommitmentResponse): QueryPacketCommitmentResponseAmino {
    const obj: any = {};
    obj.commitment = message.commitment ? base64FromBytes(message.commitment) : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    return obj;
  },
  fromAminoMsg(object: QueryPacketCommitmentResponseAminoMsg): QueryPacketCommitmentResponse {
    return QueryPacketCommitmentResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketCommitmentResponse): QueryPacketCommitmentResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketCommitmentResponse",
      value: QueryPacketCommitmentResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketCommitmentResponseProtoMsg): QueryPacketCommitmentResponse {
    return QueryPacketCommitmentResponse.decode(message.value);
  },
  toProto(message: QueryPacketCommitmentResponse): Uint8Array {
    return QueryPacketCommitmentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketCommitmentResponse): QueryPacketCommitmentResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.QueryPacketCommitmentResponse",
      value: QueryPacketCommitmentResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryPacketCommitmentResponse.typeUrl)) {
      return;
    }
    Height.registerTypeUrl();
  }
};
function createBaseQueryPacketCommitmentsRequest(): QueryPacketCommitmentsRequest {
  return {
    clientId: "",
    pagination: undefined
  };
}
/**
 * QueryPacketCommitmentsRequest is the request type for the Query/PacketCommitments RPC method.
 * @name QueryPacketCommitmentsRequest
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketCommitmentsRequest
 */
export const QueryPacketCommitmentsRequest = {
  typeUrl: "/ibc.core.channel.v2.QueryPacketCommitmentsRequest",
  aminoType: "cosmos-sdk/QueryPacketCommitmentsRequest",
  is(o: any): o is QueryPacketCommitmentsRequest {
    return o && (o.$typeUrl === QueryPacketCommitmentsRequest.typeUrl || typeof o.clientId === "string");
  },
  isAmino(o: any): o is QueryPacketCommitmentsRequestAmino {
    return o && (o.$typeUrl === QueryPacketCommitmentsRequest.typeUrl || typeof o.client_id === "string");
  },
  encode(message: QueryPacketCommitmentsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketCommitmentsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPacketCommitmentsRequest>): QueryPacketCommitmentsRequest {
    const message = createBaseQueryPacketCommitmentsRequest();
    message.clientId = object.clientId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPacketCommitmentsRequestAmino): QueryPacketCommitmentsRequest {
    const message = createBaseQueryPacketCommitmentsRequest();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPacketCommitmentsRequest): QueryPacketCommitmentsRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPacketCommitmentsRequestAminoMsg): QueryPacketCommitmentsRequest {
    return QueryPacketCommitmentsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketCommitmentsRequest): QueryPacketCommitmentsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketCommitmentsRequest",
      value: QueryPacketCommitmentsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketCommitmentsRequestProtoMsg): QueryPacketCommitmentsRequest {
    return QueryPacketCommitmentsRequest.decode(message.value);
  },
  toProto(message: QueryPacketCommitmentsRequest): Uint8Array {
    return QueryPacketCommitmentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketCommitmentsRequest): QueryPacketCommitmentsRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.QueryPacketCommitmentsRequest",
      value: QueryPacketCommitmentsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryPacketCommitmentsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryPacketCommitmentsResponse(): QueryPacketCommitmentsResponse {
  return {
    commitments: [],
    pagination: undefined,
    height: Height.fromPartial({})
  };
}
/**
 * QueryPacketCommitmentResponse is the response type for the Query/PacketCommitment RPC method.
 * @name QueryPacketCommitmentsResponse
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketCommitmentsResponse
 */
export const QueryPacketCommitmentsResponse = {
  typeUrl: "/ibc.core.channel.v2.QueryPacketCommitmentsResponse",
  aminoType: "cosmos-sdk/QueryPacketCommitmentsResponse",
  is(o: any): o is QueryPacketCommitmentsResponse {
    return o && (o.$typeUrl === QueryPacketCommitmentsResponse.typeUrl || Array.isArray(o.commitments) && (!o.commitments.length || PacketState.is(o.commitments[0])) && Height.is(o.height));
  },
  isAmino(o: any): o is QueryPacketCommitmentsResponseAmino {
    return o && (o.$typeUrl === QueryPacketCommitmentsResponse.typeUrl || Array.isArray(o.commitments) && (!o.commitments.length || PacketState.isAmino(o.commitments[0])) && Height.isAmino(o.height));
  },
  encode(message: QueryPacketCommitmentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.commitments) {
      PacketState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketCommitmentsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitments.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPacketCommitmentsResponse>): QueryPacketCommitmentsResponse {
    const message = createBaseQueryPacketCommitmentsResponse();
    message.commitments = object.commitments?.map(e => PacketState.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },
  fromAmino(object: QueryPacketCommitmentsResponseAmino): QueryPacketCommitmentsResponse {
    const message = createBaseQueryPacketCommitmentsResponse();
    message.commitments = object.commitments?.map(e => PacketState.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromAmino(object.height);
    }
    return message;
  },
  toAmino(message: QueryPacketCommitmentsResponse): QueryPacketCommitmentsResponseAmino {
    const obj: any = {};
    if (message.commitments) {
      obj.commitments = message.commitments.map(e => e ? PacketState.toAmino(e) : undefined);
    } else {
      obj.commitments = message.commitments;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryPacketCommitmentsResponseAminoMsg): QueryPacketCommitmentsResponse {
    return QueryPacketCommitmentsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketCommitmentsResponse): QueryPacketCommitmentsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketCommitmentsResponse",
      value: QueryPacketCommitmentsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketCommitmentsResponseProtoMsg): QueryPacketCommitmentsResponse {
    return QueryPacketCommitmentsResponse.decode(message.value);
  },
  toProto(message: QueryPacketCommitmentsResponse): Uint8Array {
    return QueryPacketCommitmentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketCommitmentsResponse): QueryPacketCommitmentsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.QueryPacketCommitmentsResponse",
      value: QueryPacketCommitmentsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryPacketCommitmentsResponse.typeUrl)) {
      return;
    }
    PacketState.registerTypeUrl();
    PageResponse.registerTypeUrl();
    Height.registerTypeUrl();
  }
};
function createBaseQueryPacketAcknowledgementRequest(): QueryPacketAcknowledgementRequest {
  return {
    clientId: "",
    sequence: BigInt(0)
  };
}
/**
 * QueryPacketAcknowledgementRequest is the request type for the Query/PacketAcknowledgement RPC method.
 * @name QueryPacketAcknowledgementRequest
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketAcknowledgementRequest
 */
export const QueryPacketAcknowledgementRequest = {
  typeUrl: "/ibc.core.channel.v2.QueryPacketAcknowledgementRequest",
  aminoType: "cosmos-sdk/QueryPacketAcknowledgementRequest",
  is(o: any): o is QueryPacketAcknowledgementRequest {
    return o && (o.$typeUrl === QueryPacketAcknowledgementRequest.typeUrl || typeof o.clientId === "string" && typeof o.sequence === "bigint");
  },
  isAmino(o: any): o is QueryPacketAcknowledgementRequestAmino {
    return o && (o.$typeUrl === QueryPacketAcknowledgementRequest.typeUrl || typeof o.client_id === "string" && typeof o.sequence === "bigint");
  },
  encode(message: QueryPacketAcknowledgementRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketAcknowledgementRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPacketAcknowledgementRequest>): QueryPacketAcknowledgementRequest {
    const message = createBaseQueryPacketAcknowledgementRequest();
    message.clientId = object.clientId ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPacketAcknowledgementRequestAmino): QueryPacketAcknowledgementRequest {
    const message = createBaseQueryPacketAcknowledgementRequest();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: QueryPacketAcknowledgementRequest): QueryPacketAcknowledgementRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPacketAcknowledgementRequestAminoMsg): QueryPacketAcknowledgementRequest {
    return QueryPacketAcknowledgementRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketAcknowledgementRequest): QueryPacketAcknowledgementRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketAcknowledgementRequest",
      value: QueryPacketAcknowledgementRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketAcknowledgementRequestProtoMsg): QueryPacketAcknowledgementRequest {
    return QueryPacketAcknowledgementRequest.decode(message.value);
  },
  toProto(message: QueryPacketAcknowledgementRequest): Uint8Array {
    return QueryPacketAcknowledgementRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketAcknowledgementRequest): QueryPacketAcknowledgementRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.QueryPacketAcknowledgementRequest",
      value: QueryPacketAcknowledgementRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryPacketAcknowledgementResponse(): QueryPacketAcknowledgementResponse {
  return {
    acknowledgement: new Uint8Array(),
    proof: new Uint8Array(),
    proofHeight: Height.fromPartial({})
  };
}
/**
 * QueryPacketAcknowledgementResponse is the response type for the Query/PacketAcknowledgement RPC method.
 * @name QueryPacketAcknowledgementResponse
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketAcknowledgementResponse
 */
export const QueryPacketAcknowledgementResponse = {
  typeUrl: "/ibc.core.channel.v2.QueryPacketAcknowledgementResponse",
  aminoType: "cosmos-sdk/QueryPacketAcknowledgementResponse",
  is(o: any): o is QueryPacketAcknowledgementResponse {
    return o && (o.$typeUrl === QueryPacketAcknowledgementResponse.typeUrl || (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proofHeight));
  },
  isAmino(o: any): o is QueryPacketAcknowledgementResponseAmino {
    return o && (o.$typeUrl === QueryPacketAcknowledgementResponse.typeUrl || (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryPacketAcknowledgementResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.acknowledgement.length !== 0) {
      writer.uint32(10).bytes(message.acknowledgement);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketAcknowledgementResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.acknowledgement = reader.bytes();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPacketAcknowledgementResponse>): QueryPacketAcknowledgementResponse {
    const message = createBaseQueryPacketAcknowledgementResponse();
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    return message;
  },
  fromAmino(object: QueryPacketAcknowledgementResponseAmino): QueryPacketAcknowledgementResponse {
    const message = createBaseQueryPacketAcknowledgementResponse();
    if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
      message.acknowledgement = bytesFromBase64(object.acknowledgement);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryPacketAcknowledgementResponse): QueryPacketAcknowledgementResponseAmino {
    const obj: any = {};
    obj.acknowledgement = message.acknowledgement ? base64FromBytes(message.acknowledgement) : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    return obj;
  },
  fromAminoMsg(object: QueryPacketAcknowledgementResponseAminoMsg): QueryPacketAcknowledgementResponse {
    return QueryPacketAcknowledgementResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketAcknowledgementResponse): QueryPacketAcknowledgementResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketAcknowledgementResponse",
      value: QueryPacketAcknowledgementResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketAcknowledgementResponseProtoMsg): QueryPacketAcknowledgementResponse {
    return QueryPacketAcknowledgementResponse.decode(message.value);
  },
  toProto(message: QueryPacketAcknowledgementResponse): Uint8Array {
    return QueryPacketAcknowledgementResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketAcknowledgementResponse): QueryPacketAcknowledgementResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.QueryPacketAcknowledgementResponse",
      value: QueryPacketAcknowledgementResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryPacketAcknowledgementResponse.typeUrl)) {
      return;
    }
    Height.registerTypeUrl();
  }
};
function createBaseQueryPacketAcknowledgementsRequest(): QueryPacketAcknowledgementsRequest {
  return {
    clientId: "",
    pagination: undefined,
    packetCommitmentSequences: []
  };
}
/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 * @name QueryPacketAcknowledgementsRequest
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketAcknowledgementsRequest
 */
export const QueryPacketAcknowledgementsRequest = {
  typeUrl: "/ibc.core.channel.v2.QueryPacketAcknowledgementsRequest",
  aminoType: "cosmos-sdk/QueryPacketAcknowledgementsRequest",
  is(o: any): o is QueryPacketAcknowledgementsRequest {
    return o && (o.$typeUrl === QueryPacketAcknowledgementsRequest.typeUrl || typeof o.clientId === "string" && Array.isArray(o.packetCommitmentSequences) && (!o.packetCommitmentSequences.length || typeof o.packetCommitmentSequences[0] === "bigint"));
  },
  isAmino(o: any): o is QueryPacketAcknowledgementsRequestAmino {
    return o && (o.$typeUrl === QueryPacketAcknowledgementsRequest.typeUrl || typeof o.client_id === "string" && Array.isArray(o.packet_commitment_sequences) && (!o.packet_commitment_sequences.length || typeof o.packet_commitment_sequences[0] === "bigint"));
  },
  encode(message: QueryPacketAcknowledgementsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.packetCommitmentSequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketAcknowledgementsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packetCommitmentSequences.push(reader.uint64());
            }
          } else {
            message.packetCommitmentSequences.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPacketAcknowledgementsRequest>): QueryPacketAcknowledgementsRequest {
    const message = createBaseQueryPacketAcknowledgementsRequest();
    message.clientId = object.clientId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.packetCommitmentSequences = object.packetCommitmentSequences?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QueryPacketAcknowledgementsRequestAmino): QueryPacketAcknowledgementsRequest {
    const message = createBaseQueryPacketAcknowledgementsRequest();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    message.packetCommitmentSequences = object.packet_commitment_sequences?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryPacketAcknowledgementsRequest): QueryPacketAcknowledgementsRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    if (message.packetCommitmentSequences) {
      obj.packet_commitment_sequences = message.packetCommitmentSequences.map(e => e.toString());
    } else {
      obj.packet_commitment_sequences = message.packetCommitmentSequences;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPacketAcknowledgementsRequestAminoMsg): QueryPacketAcknowledgementsRequest {
    return QueryPacketAcknowledgementsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketAcknowledgementsRequest): QueryPacketAcknowledgementsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketAcknowledgementsRequest",
      value: QueryPacketAcknowledgementsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketAcknowledgementsRequestProtoMsg): QueryPacketAcknowledgementsRequest {
    return QueryPacketAcknowledgementsRequest.decode(message.value);
  },
  toProto(message: QueryPacketAcknowledgementsRequest): Uint8Array {
    return QueryPacketAcknowledgementsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketAcknowledgementsRequest): QueryPacketAcknowledgementsRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.QueryPacketAcknowledgementsRequest",
      value: QueryPacketAcknowledgementsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryPacketAcknowledgementsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryPacketAcknowledgementsResponse(): QueryPacketAcknowledgementsResponse {
  return {
    acknowledgements: [],
    pagination: undefined,
    height: Height.fromPartial({})
  };
}
/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 * @name QueryPacketAcknowledgementsResponse
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketAcknowledgementsResponse
 */
export const QueryPacketAcknowledgementsResponse = {
  typeUrl: "/ibc.core.channel.v2.QueryPacketAcknowledgementsResponse",
  aminoType: "cosmos-sdk/QueryPacketAcknowledgementsResponse",
  is(o: any): o is QueryPacketAcknowledgementsResponse {
    return o && (o.$typeUrl === QueryPacketAcknowledgementsResponse.typeUrl || Array.isArray(o.acknowledgements) && (!o.acknowledgements.length || PacketState.is(o.acknowledgements[0])) && Height.is(o.height));
  },
  isAmino(o: any): o is QueryPacketAcknowledgementsResponseAmino {
    return o && (o.$typeUrl === QueryPacketAcknowledgementsResponse.typeUrl || Array.isArray(o.acknowledgements) && (!o.acknowledgements.length || PacketState.isAmino(o.acknowledgements[0])) && Height.isAmino(o.height));
  },
  encode(message: QueryPacketAcknowledgementsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.acknowledgements) {
      PacketState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketAcknowledgementsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.acknowledgements.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPacketAcknowledgementsResponse>): QueryPacketAcknowledgementsResponse {
    const message = createBaseQueryPacketAcknowledgementsResponse();
    message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },
  fromAmino(object: QueryPacketAcknowledgementsResponseAmino): QueryPacketAcknowledgementsResponse {
    const message = createBaseQueryPacketAcknowledgementsResponse();
    message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromAmino(object.height);
    }
    return message;
  },
  toAmino(message: QueryPacketAcknowledgementsResponse): QueryPacketAcknowledgementsResponseAmino {
    const obj: any = {};
    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map(e => e ? PacketState.toAmino(e) : undefined);
    } else {
      obj.acknowledgements = message.acknowledgements;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryPacketAcknowledgementsResponseAminoMsg): QueryPacketAcknowledgementsResponse {
    return QueryPacketAcknowledgementsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketAcknowledgementsResponse): QueryPacketAcknowledgementsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketAcknowledgementsResponse",
      value: QueryPacketAcknowledgementsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketAcknowledgementsResponseProtoMsg): QueryPacketAcknowledgementsResponse {
    return QueryPacketAcknowledgementsResponse.decode(message.value);
  },
  toProto(message: QueryPacketAcknowledgementsResponse): Uint8Array {
    return QueryPacketAcknowledgementsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketAcknowledgementsResponse): QueryPacketAcknowledgementsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.QueryPacketAcknowledgementsResponse",
      value: QueryPacketAcknowledgementsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryPacketAcknowledgementsResponse.typeUrl)) {
      return;
    }
    PacketState.registerTypeUrl();
    PageResponse.registerTypeUrl();
    Height.registerTypeUrl();
  }
};
function createBaseQueryPacketReceiptRequest(): QueryPacketReceiptRequest {
  return {
    clientId: "",
    sequence: BigInt(0)
  };
}
/**
 * QueryPacketReceiptRequest is the request type for the Query/PacketReceipt RPC method.
 * @name QueryPacketReceiptRequest
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketReceiptRequest
 */
export const QueryPacketReceiptRequest = {
  typeUrl: "/ibc.core.channel.v2.QueryPacketReceiptRequest",
  aminoType: "cosmos-sdk/QueryPacketReceiptRequest",
  is(o: any): o is QueryPacketReceiptRequest {
    return o && (o.$typeUrl === QueryPacketReceiptRequest.typeUrl || typeof o.clientId === "string" && typeof o.sequence === "bigint");
  },
  isAmino(o: any): o is QueryPacketReceiptRequestAmino {
    return o && (o.$typeUrl === QueryPacketReceiptRequest.typeUrl || typeof o.client_id === "string" && typeof o.sequence === "bigint");
  },
  encode(message: QueryPacketReceiptRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketReceiptRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketReceiptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPacketReceiptRequest>): QueryPacketReceiptRequest {
    const message = createBaseQueryPacketReceiptRequest();
    message.clientId = object.clientId ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPacketReceiptRequestAmino): QueryPacketReceiptRequest {
    const message = createBaseQueryPacketReceiptRequest();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: QueryPacketReceiptRequest): QueryPacketReceiptRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPacketReceiptRequestAminoMsg): QueryPacketReceiptRequest {
    return QueryPacketReceiptRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketReceiptRequest): QueryPacketReceiptRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketReceiptRequest",
      value: QueryPacketReceiptRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketReceiptRequestProtoMsg): QueryPacketReceiptRequest {
    return QueryPacketReceiptRequest.decode(message.value);
  },
  toProto(message: QueryPacketReceiptRequest): Uint8Array {
    return QueryPacketReceiptRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketReceiptRequest): QueryPacketReceiptRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.QueryPacketReceiptRequest",
      value: QueryPacketReceiptRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryPacketReceiptResponse(): QueryPacketReceiptResponse {
  return {
    received: false,
    proof: new Uint8Array(),
    proofHeight: Height.fromPartial({})
  };
}
/**
 * QueryPacketReceiptResponse is the response type for the Query/PacketReceipt RPC method.
 * @name QueryPacketReceiptResponse
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryPacketReceiptResponse
 */
export const QueryPacketReceiptResponse = {
  typeUrl: "/ibc.core.channel.v2.QueryPacketReceiptResponse",
  aminoType: "cosmos-sdk/QueryPacketReceiptResponse",
  is(o: any): o is QueryPacketReceiptResponse {
    return o && (o.$typeUrl === QueryPacketReceiptResponse.typeUrl || typeof o.received === "boolean" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proofHeight));
  },
  isAmino(o: any): o is QueryPacketReceiptResponseAmino {
    return o && (o.$typeUrl === QueryPacketReceiptResponse.typeUrl || typeof o.received === "boolean" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryPacketReceiptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.received === true) {
      writer.uint32(16).bool(message.received);
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketReceiptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketReceiptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.received = reader.bool();
          break;
        case 3:
          message.proof = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPacketReceiptResponse>): QueryPacketReceiptResponse {
    const message = createBaseQueryPacketReceiptResponse();
    message.received = object.received ?? false;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    return message;
  },
  fromAmino(object: QueryPacketReceiptResponseAmino): QueryPacketReceiptResponse {
    const message = createBaseQueryPacketReceiptResponse();
    if (object.received !== undefined && object.received !== null) {
      message.received = object.received;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryPacketReceiptResponse): QueryPacketReceiptResponseAmino {
    const obj: any = {};
    obj.received = message.received === false ? undefined : message.received;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    return obj;
  },
  fromAminoMsg(object: QueryPacketReceiptResponseAminoMsg): QueryPacketReceiptResponse {
    return QueryPacketReceiptResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketReceiptResponse): QueryPacketReceiptResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketReceiptResponse",
      value: QueryPacketReceiptResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketReceiptResponseProtoMsg): QueryPacketReceiptResponse {
    return QueryPacketReceiptResponse.decode(message.value);
  },
  toProto(message: QueryPacketReceiptResponse): Uint8Array {
    return QueryPacketReceiptResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketReceiptResponse): QueryPacketReceiptResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.QueryPacketReceiptResponse",
      value: QueryPacketReceiptResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryPacketReceiptResponse.typeUrl)) {
      return;
    }
    Height.registerTypeUrl();
  }
};
function createBaseQueryUnreceivedPacketsRequest(): QueryUnreceivedPacketsRequest {
  return {
    clientId: "",
    sequences: []
  };
}
/**
 * QueryUnreceivedPacketsRequest is the request type for the Query/UnreceivedPackets RPC method
 * @name QueryUnreceivedPacketsRequest
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryUnreceivedPacketsRequest
 */
export const QueryUnreceivedPacketsRequest = {
  typeUrl: "/ibc.core.channel.v2.QueryUnreceivedPacketsRequest",
  aminoType: "cosmos-sdk/QueryUnreceivedPacketsRequest",
  is(o: any): o is QueryUnreceivedPacketsRequest {
    return o && (o.$typeUrl === QueryUnreceivedPacketsRequest.typeUrl || typeof o.clientId === "string" && Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint"));
  },
  isAmino(o: any): o is QueryUnreceivedPacketsRequestAmino {
    return o && (o.$typeUrl === QueryUnreceivedPacketsRequest.typeUrl || typeof o.client_id === "string" && Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint"));
  },
  encode(message: QueryUnreceivedPacketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    writer.uint32(18).fork();
    for (const v of message.sequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnreceivedPacketsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedPacketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sequences.push(reader.uint64());
            }
          } else {
            message.sequences.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUnreceivedPacketsRequest>): QueryUnreceivedPacketsRequest {
    const message = createBaseQueryUnreceivedPacketsRequest();
    message.clientId = object.clientId ?? "";
    message.sequences = object.sequences?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QueryUnreceivedPacketsRequestAmino): QueryUnreceivedPacketsRequest {
    const message = createBaseQueryUnreceivedPacketsRequest();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    message.sequences = object.sequences?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryUnreceivedPacketsRequest): QueryUnreceivedPacketsRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e.toString());
    } else {
      obj.sequences = message.sequences;
    }
    return obj;
  },
  fromAminoMsg(object: QueryUnreceivedPacketsRequestAminoMsg): QueryUnreceivedPacketsRequest {
    return QueryUnreceivedPacketsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUnreceivedPacketsRequest): QueryUnreceivedPacketsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryUnreceivedPacketsRequest",
      value: QueryUnreceivedPacketsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUnreceivedPacketsRequestProtoMsg): QueryUnreceivedPacketsRequest {
    return QueryUnreceivedPacketsRequest.decode(message.value);
  },
  toProto(message: QueryUnreceivedPacketsRequest): Uint8Array {
    return QueryUnreceivedPacketsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUnreceivedPacketsRequest): QueryUnreceivedPacketsRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.QueryUnreceivedPacketsRequest",
      value: QueryUnreceivedPacketsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryUnreceivedPacketsResponse(): QueryUnreceivedPacketsResponse {
  return {
    sequences: [],
    height: Height.fromPartial({})
  };
}
/**
 * QueryUnreceivedPacketsResponse is the response type for the Query/UnreceivedPacketCommitments RPC method
 * @name QueryUnreceivedPacketsResponse
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryUnreceivedPacketsResponse
 */
export const QueryUnreceivedPacketsResponse = {
  typeUrl: "/ibc.core.channel.v2.QueryUnreceivedPacketsResponse",
  aminoType: "cosmos-sdk/QueryUnreceivedPacketsResponse",
  is(o: any): o is QueryUnreceivedPacketsResponse {
    return o && (o.$typeUrl === QueryUnreceivedPacketsResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && Height.is(o.height));
  },
  isAmino(o: any): o is QueryUnreceivedPacketsResponseAmino {
    return o && (o.$typeUrl === QueryUnreceivedPacketsResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && Height.isAmino(o.height));
  },
  encode(message: QueryUnreceivedPacketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.sequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnreceivedPacketsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedPacketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sequences.push(reader.uint64());
            }
          } else {
            message.sequences.push(reader.uint64());
          }
          break;
        case 2:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUnreceivedPacketsResponse>): QueryUnreceivedPacketsResponse {
    const message = createBaseQueryUnreceivedPacketsResponse();
    message.sequences = object.sequences?.map(e => BigInt(e.toString())) || [];
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },
  fromAmino(object: QueryUnreceivedPacketsResponseAmino): QueryUnreceivedPacketsResponse {
    const message = createBaseQueryUnreceivedPacketsResponse();
    message.sequences = object.sequences?.map(e => BigInt(e)) || [];
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromAmino(object.height);
    }
    return message;
  },
  toAmino(message: QueryUnreceivedPacketsResponse): QueryUnreceivedPacketsResponseAmino {
    const obj: any = {};
    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e.toString());
    } else {
      obj.sequences = message.sequences;
    }
    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryUnreceivedPacketsResponseAminoMsg): QueryUnreceivedPacketsResponse {
    return QueryUnreceivedPacketsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUnreceivedPacketsResponse): QueryUnreceivedPacketsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryUnreceivedPacketsResponse",
      value: QueryUnreceivedPacketsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUnreceivedPacketsResponseProtoMsg): QueryUnreceivedPacketsResponse {
    return QueryUnreceivedPacketsResponse.decode(message.value);
  },
  toProto(message: QueryUnreceivedPacketsResponse): Uint8Array {
    return QueryUnreceivedPacketsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUnreceivedPacketsResponse): QueryUnreceivedPacketsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.QueryUnreceivedPacketsResponse",
      value: QueryUnreceivedPacketsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryUnreceivedPacketsResponse.typeUrl)) {
      return;
    }
    Height.registerTypeUrl();
  }
};
function createBaseQueryUnreceivedAcksRequest(): QueryUnreceivedAcksRequest {
  return {
    clientId: "",
    packetAckSequences: []
  };
}
/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 * @name QueryUnreceivedAcksRequest
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryUnreceivedAcksRequest
 */
export const QueryUnreceivedAcksRequest = {
  typeUrl: "/ibc.core.channel.v2.QueryUnreceivedAcksRequest",
  aminoType: "cosmos-sdk/QueryUnreceivedAcksRequest",
  is(o: any): o is QueryUnreceivedAcksRequest {
    return o && (o.$typeUrl === QueryUnreceivedAcksRequest.typeUrl || typeof o.clientId === "string" && Array.isArray(o.packetAckSequences) && (!o.packetAckSequences.length || typeof o.packetAckSequences[0] === "bigint"));
  },
  isAmino(o: any): o is QueryUnreceivedAcksRequestAmino {
    return o && (o.$typeUrl === QueryUnreceivedAcksRequest.typeUrl || typeof o.client_id === "string" && Array.isArray(o.packet_ack_sequences) && (!o.packet_ack_sequences.length || typeof o.packet_ack_sequences[0] === "bigint"));
  },
  encode(message: QueryUnreceivedAcksRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    writer.uint32(18).fork();
    for (const v of message.packetAckSequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnreceivedAcksRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedAcksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packetAckSequences.push(reader.uint64());
            }
          } else {
            message.packetAckSequences.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUnreceivedAcksRequest>): QueryUnreceivedAcksRequest {
    const message = createBaseQueryUnreceivedAcksRequest();
    message.clientId = object.clientId ?? "";
    message.packetAckSequences = object.packetAckSequences?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QueryUnreceivedAcksRequestAmino): QueryUnreceivedAcksRequest {
    const message = createBaseQueryUnreceivedAcksRequest();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    message.packetAckSequences = object.packet_ack_sequences?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryUnreceivedAcksRequest): QueryUnreceivedAcksRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    if (message.packetAckSequences) {
      obj.packet_ack_sequences = message.packetAckSequences.map(e => e.toString());
    } else {
      obj.packet_ack_sequences = message.packetAckSequences;
    }
    return obj;
  },
  fromAminoMsg(object: QueryUnreceivedAcksRequestAminoMsg): QueryUnreceivedAcksRequest {
    return QueryUnreceivedAcksRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUnreceivedAcksRequest): QueryUnreceivedAcksRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryUnreceivedAcksRequest",
      value: QueryUnreceivedAcksRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUnreceivedAcksRequestProtoMsg): QueryUnreceivedAcksRequest {
    return QueryUnreceivedAcksRequest.decode(message.value);
  },
  toProto(message: QueryUnreceivedAcksRequest): Uint8Array {
    return QueryUnreceivedAcksRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUnreceivedAcksRequest): QueryUnreceivedAcksRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.QueryUnreceivedAcksRequest",
      value: QueryUnreceivedAcksRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryUnreceivedAcksResponse(): QueryUnreceivedAcksResponse {
  return {
    sequences: [],
    height: Height.fromPartial({})
  };
}
/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 * @name QueryUnreceivedAcksResponse
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.QueryUnreceivedAcksResponse
 */
export const QueryUnreceivedAcksResponse = {
  typeUrl: "/ibc.core.channel.v2.QueryUnreceivedAcksResponse",
  aminoType: "cosmos-sdk/QueryUnreceivedAcksResponse",
  is(o: any): o is QueryUnreceivedAcksResponse {
    return o && (o.$typeUrl === QueryUnreceivedAcksResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && Height.is(o.height));
  },
  isAmino(o: any): o is QueryUnreceivedAcksResponseAmino {
    return o && (o.$typeUrl === QueryUnreceivedAcksResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && Height.isAmino(o.height));
  },
  encode(message: QueryUnreceivedAcksResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.sequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnreceivedAcksResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedAcksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sequences.push(reader.uint64());
            }
          } else {
            message.sequences.push(reader.uint64());
          }
          break;
        case 2:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUnreceivedAcksResponse>): QueryUnreceivedAcksResponse {
    const message = createBaseQueryUnreceivedAcksResponse();
    message.sequences = object.sequences?.map(e => BigInt(e.toString())) || [];
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },
  fromAmino(object: QueryUnreceivedAcksResponseAmino): QueryUnreceivedAcksResponse {
    const message = createBaseQueryUnreceivedAcksResponse();
    message.sequences = object.sequences?.map(e => BigInt(e)) || [];
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromAmino(object.height);
    }
    return message;
  },
  toAmino(message: QueryUnreceivedAcksResponse): QueryUnreceivedAcksResponseAmino {
    const obj: any = {};
    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e.toString());
    } else {
      obj.sequences = message.sequences;
    }
    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryUnreceivedAcksResponseAminoMsg): QueryUnreceivedAcksResponse {
    return QueryUnreceivedAcksResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUnreceivedAcksResponse): QueryUnreceivedAcksResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryUnreceivedAcksResponse",
      value: QueryUnreceivedAcksResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUnreceivedAcksResponseProtoMsg): QueryUnreceivedAcksResponse {
    return QueryUnreceivedAcksResponse.decode(message.value);
  },
  toProto(message: QueryUnreceivedAcksResponse): Uint8Array {
    return QueryUnreceivedAcksResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUnreceivedAcksResponse): QueryUnreceivedAcksResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.QueryUnreceivedAcksResponse",
      value: QueryUnreceivedAcksResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryUnreceivedAcksResponse.typeUrl)) {
      return;
    }
    Height.registerTypeUrl();
  }
};