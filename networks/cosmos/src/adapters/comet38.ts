import { fromBase64, fromHex } from '@interchainjs/encoding';
import { BaseAdapter } from './base';
import { ProtocolVersion } from '../types/protocol';
import {
  BlockResponse,
  createBlockResponse
} from '../types/responses/common/block';
import {
  BlockResultsResponse,
  createBlockResultsResponse
} from '../types/responses/common/block-results';
import {
  BlockchainResponse,
  createBlockchainResponse
} from '../types/responses/common/blockchain';
import {
  ConsensusStateResponse,
  createConsensusStateResponse
} from '../types/responses/common/consensus-state';
import {
  DumpConsensusStateResponse,
  createDumpConsensusStateResponse
} from '../types/responses/common/dump-consensus-state';
import {
  GenesisResponse,
  createGenesisResponse
} from '../types/responses/common/genesis';
import {
  UnconfirmedTxsResponse,
  createUnconfirmedTxsResponse
} from '../types/responses/common/unconfirmed-txs';
import {
  TxResponse,
  createTxResponse
} from '../types/responses/common/tx';
import {
  TxSearchResponse,
  createTxSearchResponse
} from '../types/responses/common/tx-search';
import {
  BlockSearchResponse,
  createBlockSearchResponse
} from '../types/responses/common/block-search';
import {
  BroadcastTxSyncResponse,
  createBroadcastTxSyncResponse
} from '../types/responses/common/broadcast-tx-sync';
import {
  BroadcastTxAsyncResponse,
  createBroadcastTxAsyncResponse
} from '../types/responses/common/broadcast-tx-async';
import {
  BroadcastTxCommitResponse,
  createBroadcastTxCommitResponse
} from '../types/responses/common/broadcast-tx-commit';
import {
  CheckTxResponse,
  createCheckTxResponse
} from '../types/responses/common/check-tx';
// No response imports needed since ABCI methods are now in base class

export class Comet38Adapter extends BaseAdapter {
  constructor() {
    super(ProtocolVersion.COMET_38);
  }

  decodeBlock(response: any): BlockResponse {
    return createBlockResponse(response);
  }

  private decodeBlockId(data: any): any {
    if (!data) return null;
    return {
      hash: fromHex(data.hash || ''),
      partSetHeader: {
        total: data.part_set_header?.total || data.parts?.total || 0,
        hash: fromHex(data.part_set_header?.hash || data.parts?.hash || '')
      }
    };
  }

  private decodeHeaderData(data: any): any {
    return {
      version: {
        block: this.apiToNumber(data.version?.block),
        app: this.apiToNumber(data.version?.app)
      },
      chainId: data.chain_id || '',
      height: this.apiToNumber(data.height),
      time: this.decodeTime(data.time),
      lastBlockId: this.decodeBlockId(data.last_block_id),
      lastCommitHash: fromHex(data.last_commit_hash || ''),
      dataHash: fromHex(data.data_hash || ''),
      validatorsHash: fromHex(data.validators_hash || ''),
      nextValidatorsHash: fromHex(data.next_validators_hash || ''),
      consensusHash: fromHex(data.consensus_hash || ''),
      appHash: fromHex(data.app_hash || ''),
      lastResultsHash: fromHex(data.last_results_hash || ''),
      evidenceHash: fromHex(data.evidence_hash || ''),
      proposerAddress: fromHex(data.proposer_address || '')
    };
  }



  private decodeCommitData(data: any): any {
    return {
      height: this.apiToNumber(data.height),
      round: data.round || 0,
      blockId: this.decodeBlockId(data.block_id),
      signatures: (data.signatures || []).map((sig: any) => this.decodeCommitSignature(sig))
    };
  }

  private decodeCommitSignature(data: any): any {
    return {
      blockIdFlag: data.block_id_flag || 0,
      validatorAddress: data.validator_address ? fromHex(data.validator_address) : undefined,
      timestamp: this.decodeTime(data.timestamp),
      signature: data.signature ? fromBase64(data.signature) : null
    };
  }

  decodeBlockResults(response: any): BlockResultsResponse {
    return createBlockResultsResponse(response);
  }

  private decodeTxResult(data: any): any {
    return {
      code: data.code || 0,
      data: data.data ? this.safeFromBase64(data.data) : undefined,
      log: data.log || '',
      info: data.info || '',
      gasWanted: this.apiToNumber(data.gas_wanted),
      gasUsed: this.apiToNumber(data.gas_used),
      events: this.decodeEvents(data.events),
      codespace: data.codespace || ''
    };
  }

  private decodeValidatorUpdate(data: any): any {
    return {
      pubkey: this.decodePubkey(data.pub_key),
      power: this.apiToBigInt(data.power)
    };
  }

  private decodePubkey(data: any): any {
    if (!data) return null;
    return {
      type: data.type || '',
      value: fromBase64(data.value || '')
    };
  }

  decodeBlockSearch(response: any): BlockSearchResponse {
    const data = response.result || response;
    return createBlockSearchResponse(data);
  }

  decodeBlockchain(response: any): BlockchainResponse {
    return createBlockchainResponse(response);
  }

  decodeBroadcastTx(response: any): any {
    const data = response.result || response;
    return {
      code: data.code || 0,
      data: data.data ? fromBase64(data.data) : undefined,
      log: data.log || '',
      codespace: data.codespace || '',
      hash: fromHex(data.hash || ''),
      height: data.height ? this.apiToNumber(data.height) : undefined
    };
  }







  decodeConsensusState(response: any): ConsensusStateResponse {
    return createConsensusStateResponse(response);
  }

  decodeDumpConsensusState(response: any): DumpConsensusStateResponse {
    return createDumpConsensusStateResponse(response);
  }

  decodeGenesis(response: any): GenesisResponse {
    return createGenesisResponse(response);
  }







  decodeTx(response: any): TxResponse {
    const data = response.result || response;
    return createTxResponse(data);
  }

  decodeTxSearch(response: any): TxSearchResponse {
    const data = response.result || response;
    return createTxSearchResponse(data);
  }

  decodeUnconfirmedTxs(response: any): UnconfirmedTxsResponse {
    const data = response.result || response;
    return createUnconfirmedTxsResponse(data);
  }

  decodeBroadcastTxSync(response: any): BroadcastTxSyncResponse {
    const data = response.result || response;
    return createBroadcastTxSyncResponse(data);
  }

  decodeBroadcastTxAsync(response: any): BroadcastTxAsyncResponse {
    const data = response.result || response;
    return createBroadcastTxAsyncResponse(data);
  }

  decodeBroadcastTxCommit(response: any): BroadcastTxCommitResponse {
    const data = response.result || response;
    return createBroadcastTxCommitResponse(data);
  }

  decodeCheckTx(response: any): CheckTxResponse {
    const data = response.result || response;
    return createCheckTxResponse(data);
  }

}