import { ProposalStatus, Proposal, Vote, VotingParams, DepositParams, TallyParams, Deposit, TallyResult } from "./gov";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryProposalRequest is the request type for the Query/Proposal RPC method.
 * @name QueryProposalRequest
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryProposalRequest
 */
export interface QueryProposalRequest {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposalId: bigint;
}
/**
 * QueryProposalResponse is the response type for the Query/Proposal RPC method.
 * @name QueryProposalResponse
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryProposalResponse
 */
export interface QueryProposalResponse {
  proposal: Proposal;
}
/**
 * QueryProposalsRequest is the request type for the Query/Proposals RPC method.
 * @name QueryProposalsRequest
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryProposalsRequest
 */
export interface QueryProposalsRequest {
  /**
   * proposal_status defines the status of the proposals.
   */
  proposalStatus: ProposalStatus;
  /**
   * voter defines the voter address for the proposals.
   */
  voter: string;
  /**
   * depositor defines the deposit addresses from the proposals.
   */
  depositor: string;
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 * @name QueryProposalsResponse
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryProposalsResponse
 */
export interface QueryProposalsResponse {
  /**
   * proposals defines all the requested governance proposals.
   */
  proposals: Proposal[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
/**
 * QueryVoteRequest is the request type for the Query/Vote RPC method.
 * @name QueryVoteRequest
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryVoteRequest
 */
export interface QueryVoteRequest {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposalId: bigint;
  /**
   * voter defines the voter address for the proposals.
   */
  voter: string;
}
/**
 * QueryVoteResponse is the response type for the Query/Vote RPC method.
 * @name QueryVoteResponse
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryVoteResponse
 */
export interface QueryVoteResponse {
  /**
   * vote defines the queried vote.
   */
  vote: Vote;
}
/**
 * QueryVotesRequest is the request type for the Query/Votes RPC method.
 * @name QueryVotesRequest
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryVotesRequest
 */
export interface QueryVotesRequest {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposalId: bigint;
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
/**
 * QueryVotesResponse is the response type for the Query/Votes RPC method.
 * @name QueryVotesResponse
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryVotesResponse
 */
export interface QueryVotesResponse {
  /**
   * votes defines the queried votes.
   */
  votes: Vote[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequest {
  /**
   * params_type defines which parameters to query for, can be one of "voting",
   * "tallying" or "deposit".
   */
  paramsType: string;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * voting_params defines the parameters related to voting.
   */
  votingParams: VotingParams;
  /**
   * deposit_params defines the parameters related to deposit.
   */
  depositParams: DepositParams;
  /**
   * tally_params defines the parameters related to tally.
   */
  tallyParams: TallyParams;
}
/**
 * QueryDepositRequest is the request type for the Query/Deposit RPC method.
 * @name QueryDepositRequest
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryDepositRequest
 */
export interface QueryDepositRequest {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposalId: bigint;
  /**
   * depositor defines the deposit addresses from the proposals.
   */
  depositor: string;
}
/**
 * QueryDepositResponse is the response type for the Query/Deposit RPC method.
 * @name QueryDepositResponse
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryDepositResponse
 */
export interface QueryDepositResponse {
  /**
   * deposit defines the requested deposit.
   */
  deposit: Deposit;
}
/**
 * QueryDepositsRequest is the request type for the Query/Deposits RPC method.
 * @name QueryDepositsRequest
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryDepositsRequest
 */
export interface QueryDepositsRequest {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposalId: bigint;
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
/**
 * QueryDepositsResponse is the response type for the Query/Deposits RPC method.
 * @name QueryDepositsResponse
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryDepositsResponse
 */
export interface QueryDepositsResponse {
  /**
   * deposits defines the requested deposits.
   */
  deposits: Deposit[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
/**
 * QueryTallyResultRequest is the request type for the Query/Tally RPC method.
 * @name QueryTallyResultRequest
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryTallyResultRequest
 */
export interface QueryTallyResultRequest {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposalId: bigint;
}
/**
 * QueryTallyResultResponse is the response type for the Query/Tally RPC method.
 * @name QueryTallyResultResponse
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryTallyResultResponse
 */
export interface QueryTallyResultResponse {
  /**
   * tally defines the requested tally.
   */
  tally: TallyResult;
}
function createBaseQueryProposalRequest(): QueryProposalRequest {
  return {
    proposalId: BigInt(0)
  };
}
/**
 * QueryProposalRequest is the request type for the Query/Proposal RPC method.
 * @name QueryProposalRequest
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryProposalRequest
 */
export const QueryProposalRequest = {
  typeUrl: "/cosmos.gov.v1beta1.QueryProposalRequest",
  aminoType: "cosmos-sdk/QueryProposalRequest",
  encode(message: QueryProposalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryProposalRequest>): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  }
};
function createBaseQueryProposalResponse(): QueryProposalResponse {
  return {
    proposal: Proposal.fromPartial({})
  };
}
/**
 * QueryProposalResponse is the response type for the Query/Proposal RPC method.
 * @name QueryProposalResponse
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryProposalResponse
 */
export const QueryProposalResponse = {
  typeUrl: "/cosmos.gov.v1beta1.QueryProposalResponse",
  aminoType: "cosmos-sdk/QueryProposalResponse",
  encode(message: QueryProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryProposalResponse>): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    return message;
  }
};
function createBaseQueryProposalsRequest(): QueryProposalsRequest {
  return {
    proposalStatus: 0,
    voter: "",
    depositor: "",
    pagination: undefined
  };
}
/**
 * QueryProposalsRequest is the request type for the Query/Proposals RPC method.
 * @name QueryProposalsRequest
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryProposalsRequest
 */
export const QueryProposalsRequest = {
  typeUrl: "/cosmos.gov.v1beta1.QueryProposalsRequest",
  aminoType: "cosmos-sdk/QueryProposalsRequest",
  encode(message: QueryProposalsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalStatus !== 0) {
      writer.uint32(8).int32(message.proposalStatus);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.depositor !== "") {
      writer.uint32(26).string(message.depositor);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalStatus = reader.int32() as any;
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.depositor = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryProposalsRequest>): QueryProposalsRequest {
    const message = createBaseQueryProposalsRequest();
    message.proposalStatus = object.proposalStatus ?? 0;
    message.voter = object.voter ?? "";
    message.depositor = object.depositor ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryProposalsResponse(): QueryProposalsResponse {
  return {
    proposals: [],
    pagination: undefined
  };
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 * @name QueryProposalsResponse
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryProposalsResponse
 */
export const QueryProposalsResponse = {
  typeUrl: "/cosmos.gov.v1beta1.QueryProposalsResponse",
  aminoType: "cosmos-sdk/QueryProposalsResponse",
  encode(message: QueryProposalsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryProposalsResponse>): QueryProposalsResponse {
    const message = createBaseQueryProposalsResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryVoteRequest(): QueryVoteRequest {
  return {
    proposalId: BigInt(0),
    voter: ""
  };
}
/**
 * QueryVoteRequest is the request type for the Query/Vote RPC method.
 * @name QueryVoteRequest
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryVoteRequest
 */
export const QueryVoteRequest = {
  typeUrl: "/cosmos.gov.v1beta1.QueryVoteRequest",
  aminoType: "cosmos-sdk/QueryVoteRequest",
  encode(message: QueryVoteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVoteRequest>): QueryVoteRequest {
    const message = createBaseQueryVoteRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    return message;
  }
};
function createBaseQueryVoteResponse(): QueryVoteResponse {
  return {
    vote: Vote.fromPartial({})
  };
}
/**
 * QueryVoteResponse is the response type for the Query/Vote RPC method.
 * @name QueryVoteResponse
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryVoteResponse
 */
export const QueryVoteResponse = {
  typeUrl: "/cosmos.gov.v1beta1.QueryVoteResponse",
  aminoType: "cosmos-sdk/QueryVoteResponse",
  encode(message: QueryVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVoteResponse>): QueryVoteResponse {
    const message = createBaseQueryVoteResponse();
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    return message;
  }
};
function createBaseQueryVotesRequest(): QueryVotesRequest {
  return {
    proposalId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryVotesRequest is the request type for the Query/Votes RPC method.
 * @name QueryVotesRequest
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryVotesRequest
 */
export const QueryVotesRequest = {
  typeUrl: "/cosmos.gov.v1beta1.QueryVotesRequest",
  aminoType: "cosmos-sdk/QueryVotesRequest",
  encode(message: QueryVotesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryVotesRequest>): QueryVotesRequest {
    const message = createBaseQueryVotesRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryVotesResponse(): QueryVotesResponse {
  return {
    votes: [],
    pagination: undefined
  };
}
/**
 * QueryVotesResponse is the response type for the Query/Votes RPC method.
 * @name QueryVotesResponse
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryVotesResponse
 */
export const QueryVotesResponse = {
  typeUrl: "/cosmos.gov.v1beta1.QueryVotesResponse",
  aminoType: "cosmos-sdk/QueryVotesResponse",
  encode(message: QueryVotesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVotesResponse>): QueryVotesResponse {
    const message = createBaseQueryVotesResponse();
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {
    paramsType: ""
  };
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/cosmos.gov.v1beta1.QueryParamsRequest",
  aminoType: "cosmos-sdk/QueryParamsRequest",
  encode(message: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.paramsType !== "") {
      writer.uint32(10).string(message.paramsType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paramsType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    message.paramsType = object.paramsType ?? "";
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    votingParams: VotingParams.fromPartial({}),
    depositParams: DepositParams.fromPartial({}),
    tallyParams: TallyParams.fromPartial({})
  };
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/cosmos.gov.v1beta1.QueryParamsResponse",
  aminoType: "cosmos-sdk/QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.votingParams !== undefined) {
      VotingParams.encode(message.votingParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositParams !== undefined) {
      DepositParams.encode(message.depositParams, writer.uint32(18).fork()).ldelim();
    }
    if (message.tallyParams !== undefined) {
      TallyParams.encode(message.tallyParams, writer.uint32(26).fork()).ldelim();
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
          message.votingParams = VotingParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.depositParams = DepositParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.tallyParams = TallyParams.decode(reader, reader.uint32());
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
    message.votingParams = object.votingParams !== undefined && object.votingParams !== null ? VotingParams.fromPartial(object.votingParams) : undefined;
    message.depositParams = object.depositParams !== undefined && object.depositParams !== null ? DepositParams.fromPartial(object.depositParams) : undefined;
    message.tallyParams = object.tallyParams !== undefined && object.tallyParams !== null ? TallyParams.fromPartial(object.tallyParams) : undefined;
    return message;
  }
};
function createBaseQueryDepositRequest(): QueryDepositRequest {
  return {
    proposalId: BigInt(0),
    depositor: ""
  };
}
/**
 * QueryDepositRequest is the request type for the Query/Deposit RPC method.
 * @name QueryDepositRequest
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryDepositRequest
 */
export const QueryDepositRequest = {
  typeUrl: "/cosmos.gov.v1beta1.QueryDepositRequest",
  aminoType: "cosmos-sdk/QueryDepositRequest",
  encode(message: QueryDepositRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDepositRequest>): QueryDepositRequest {
    const message = createBaseQueryDepositRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.depositor = object.depositor ?? "";
    return message;
  }
};
function createBaseQueryDepositResponse(): QueryDepositResponse {
  return {
    deposit: Deposit.fromPartial({})
  };
}
/**
 * QueryDepositResponse is the response type for the Query/Deposit RPC method.
 * @name QueryDepositResponse
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryDepositResponse
 */
export const QueryDepositResponse = {
  typeUrl: "/cosmos.gov.v1beta1.QueryDepositResponse",
  aminoType: "cosmos-sdk/QueryDepositResponse",
  encode(message: QueryDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deposit !== undefined) {
      Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit = Deposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDepositResponse>): QueryDepositResponse {
    const message = createBaseQueryDepositResponse();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Deposit.fromPartial(object.deposit) : undefined;
    return message;
  }
};
function createBaseQueryDepositsRequest(): QueryDepositsRequest {
  return {
    proposalId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryDepositsRequest is the request type for the Query/Deposits RPC method.
 * @name QueryDepositsRequest
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryDepositsRequest
 */
export const QueryDepositsRequest = {
  typeUrl: "/cosmos.gov.v1beta1.QueryDepositsRequest",
  aminoType: "cosmos-sdk/QueryDepositsRequest",
  encode(message: QueryDepositsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryDepositsRequest>): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDepositsResponse(): QueryDepositsResponse {
  return {
    deposits: [],
    pagination: undefined
  };
}
/**
 * QueryDepositsResponse is the response type for the Query/Deposits RPC method.
 * @name QueryDepositsResponse
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryDepositsResponse
 */
export const QueryDepositsResponse = {
  typeUrl: "/cosmos.gov.v1beta1.QueryDepositsResponse",
  aminoType: "cosmos-sdk/QueryDepositsResponse",
  encode(message: QueryDepositsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDepositsResponse>): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryTallyResultRequest(): QueryTallyResultRequest {
  return {
    proposalId: BigInt(0)
  };
}
/**
 * QueryTallyResultRequest is the request type for the Query/Tally RPC method.
 * @name QueryTallyResultRequest
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryTallyResultRequest
 */
export const QueryTallyResultRequest = {
  typeUrl: "/cosmos.gov.v1beta1.QueryTallyResultRequest",
  aminoType: "cosmos-sdk/QueryTallyResultRequest",
  encode(message: QueryTallyResultRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTallyResultRequest>): QueryTallyResultRequest {
    const message = createBaseQueryTallyResultRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  }
};
function createBaseQueryTallyResultResponse(): QueryTallyResultResponse {
  return {
    tally: TallyResult.fromPartial({})
  };
}
/**
 * QueryTallyResultResponse is the response type for the Query/Tally RPC method.
 * @name QueryTallyResultResponse
 * @package cosmos.gov.v1beta1
 * @see proto type: cosmos.gov.v1beta1.QueryTallyResultResponse
 */
export const QueryTallyResultResponse = {
  typeUrl: "/cosmos.gov.v1beta1.QueryTallyResultResponse",
  aminoType: "cosmos-sdk/QueryTallyResultResponse",
  encode(message: QueryTallyResultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tally !== undefined) {
      TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tally = TallyResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTallyResultResponse>): QueryTallyResultResponse {
    const message = createBaseQueryTallyResultResponse();
    message.tally = object.tally !== undefined && object.tally !== null ? TallyResult.fromPartial(object.tally) : undefined;
    return message;
  }
};