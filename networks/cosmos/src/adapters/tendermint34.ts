import { fromBase64, fromHex } from '@interchainjs/encoding';
import { BaseAdapter } from './base';
import { ProtocolVersion } from '../types/protocol';
import { 
  BroadcastTxAsyncResponse, 
  BroadcastTxSyncResponse, 
  BroadcastTxCommitResponse
} from '../types/responses';

export class Tendermint34Adapter extends BaseAdapter {
  constructor() {
    super(ProtocolVersion.TENDERMINT_34);
  }

  decodeBlock(response: any): any {
    const blockData = response.block || response;
    return {
      blockId: this.decodeBlockId(response.block_id),
      block: {
        header: this.decodeHeaderData(blockData.header),
        lastCommit: blockData.last_commit?.block_id?.hash ? 
          this.decodeCommitData(blockData.last_commit) : null,
        txs: (blockData.data?.txs || []).map((tx: string) => fromBase64(tx)),
        evidence: blockData.evidence?.evidence || []
      }
    };
  }

  private decodeBlockId(data: any): any {
    if (!data) return null;
    return {
      hash: fromHex(data.hash || ''),
      parts: {
        total: data.parts?.total || 0,
        hash: fromHex(data.parts?.hash || '')
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

  // Public method for header RPC response
  decodeHeader(response: any): any {
    const headerData = response.header || response;
    return this.decodeHeaderData(headerData);
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

  decodeBlockResults(response: any): any {
    const data = response.result || response;
    return {
      height: this.apiToNumber(data.height),
      results: (data.txs_results || []).map((tx: any) => this.decodeTxResult(tx)),
      validatorUpdates: (data.validator_updates || []).map((v: any) => this.decodeValidatorUpdate(v)),
      consensusUpdates: data.consensus_param_updates ? 
        this.decodeConsensusParams(data.consensus_param_updates) : undefined,
      beginBlockEvents: this.decodeEvents(data.begin_block_events),
      endBlockEvents: this.decodeEvents(data.end_block_events)
    };
  }

  private decodeTxResult(data: any): any {
    return {
      code: data.code || 0,
      data: data.data ? fromBase64(data.data) : undefined,
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
      votingPower: this.apiToBigInt(data.power)
    };
  }

  private decodePubkey(data: any): any {
    if (!data) return null;
    return {
      type: data.type || '',
      value: fromBase64(data.value || '')
    };
  }

  decodeBlockSearch(response: any): any {
    const data = response.result || response;
    return {
      totalCount: this.apiToNumber(data.total_count),
      blocks: (data.blocks || []).map((block: any) => this.decodeBlock(block))
    };
  }

  decodeBlockchain(response: any): any {
    const data = response.result || response;
    return {
      lastHeight: this.apiToNumber(data.last_height),
      blockMetas: (data.block_metas || []).map((meta: any) => ({
        blockId: this.decodeBlockId(meta.block_id),
        blockSize: this.apiToNumber(meta.block_size),
        header: this.decodeHeaderData(meta.header),
        numTxs: this.apiToNumber(meta.num_txs)
      }))
    };
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

  decodeCommit(response: any): any {
    const data = response.result || response;
    return {
      signedHeader: {
        header: this.decodeHeaderData(data.signed_header?.header),
        commit: this.decodeCommitData(data.signed_header?.commit)
      },
      canonical: data.canonical || false
    };
  }

  decodeConsensusParams(response: any): any {
    const data = response.consensus_params || response;
    return {
      block: data.block ? {
        maxBytes: this.apiToNumber(data.block.max_bytes),
        maxGas: this.apiToNumber(data.block.max_gas)
      } : undefined,
      evidence: data.evidence ? {
        maxAgeNumBlocks: this.apiToNumber(data.evidence.max_age_num_blocks),
        maxAgeDuration: this.apiToNumber(data.evidence.max_age_duration)
      } : undefined,
      validator: data.validator ? {
        pubKeyTypes: data.validator.pub_key_types || []
      } : undefined,
      version: data.version || undefined
    };
  }

  decodeConsensusState(response: any): any {
    const data = response.round_state || response;
    const transformed = this.transformKeys(data);
    
    // Parse the "height/round/step" string into separate properties
    if (transformed['height/round/step']) {
      const heightRoundStep = transformed['height/round/step'];
      const parts = heightRoundStep.split('/');
      if (parts.length === 3) {
        transformed.height = parseInt(parts[0], 10);
        transformed.round = parseInt(parts[1], 10);
        transformed.step = parseInt(parts[2], 10);
      }
      delete transformed['height/round/step'];
    }
    
    return {
      roundState: transformed
    };
  }

  decodeDumpConsensusState(response: any): any {
    const data = response.result || response;
    const transformed = this.transformKeys(data);
    
    // Ensure height is a number in roundState
    if (transformed.roundState && transformed.roundState.height) {
      transformed.roundState.height = this.apiToNumber(transformed.roundState.height);
    }
    
    return transformed;
  }

  decodeGenesis(response: any): any {
    const data = response.genesis || response;
    return {
      genesisTime: this.decodeTime(data.genesis_time),
      chainId: data.chain_id || '',
      initialHeight: this.apiToNumber(data.initial_height),
      consensusParams: data.consensus_params ? 
        this.decodeConsensusParams(data.consensus_params) : undefined,
      validators: (data.validators || []).map((v: any) => ({
        address: fromHex(v.address || ''),
        pubkey: this.decodePubkey(v.pub_key),
        votingPower: this.apiToBigInt(v.power),
        name: v.name || ''
      })),
      appHash: fromBase64(data.app_hash || ''),
      appState: data.app_state || {}
    };
  }

  decodeGenesisChunked(response: any): any {
    const data = response.result || response;
    return {
      chunk: this.apiToNumber(data.chunk),
      total: this.apiToNumber(data.total),
      data: data.data || ''
    };
  }

  decodeHealth(response: any): any {
    return response;
  }

  decodeNetInfo(response: any): any {
    const data = response.result || response;
    return {
      listening: data.listening || false,
      listeners: data.listeners || [],
      nPeers: this.apiToNumber(data.n_peers),
      peers: (data.peers || []).map((peer: any) => ({
        nodeInfo: peer.node_info,
        isOutbound: peer.is_outbound || false,
        connectionStatus: peer.connection_status,
        remoteIp: peer.remote_ip || ''
      }))
    };
  }

  decodeNumUnconfirmedTxs(response: any): any {
    const data = response.result || response;
    return {
      count: this.apiToNumber(data.n_txs || data.count), // Add count field
      total: this.apiToNumber(data.total),
      totalBytes: this.apiToNumber(data.total_bytes)
    };
  }

  decodeStatus(response: any): any {
    const data = response.result || response;
    return {
      nodeInfo: data.node_info,
      syncInfo: {
        latestBlockHash: fromHex(data.sync_info?.latest_block_hash || ''),
        latestAppHash: fromHex(data.sync_info?.latest_app_hash || ''),
        latestBlockHeight: this.apiToNumber(data.sync_info?.latest_block_height),
        latestBlockTime: this.decodeTime(data.sync_info?.latest_block_time),
        earliestBlockHash: fromHex(data.sync_info?.earliest_block_hash || ''),
        earliestAppHash: fromHex(data.sync_info?.earliest_app_hash || ''),
        earliestBlockHeight: this.apiToNumber(data.sync_info?.earliest_block_height),
        earliestBlockTime: this.decodeTime(data.sync_info?.earliest_block_time),
        catchingUp: data.sync_info?.catching_up || false
      },
      validatorInfo: data.validator_info ? {
        address: fromHex(data.validator_info.address || ''),
        pubkey: this.decodePubkey(data.validator_info.pub_key),
        votingPower: this.apiToBigInt(data.validator_info.voting_power)
      } : undefined
    };
  }

  decodeTx(response: any): any {
    const data = response.result || response;
    return {
      hash: fromHex(data.hash || ''),
      height: this.apiToNumber(data.height),
      index: data.index || 0,
      txResult: this.decodeTxResult(data.tx_result),
      tx: fromBase64(data.tx || ''),
      proof: data.proof ? {
        rootHash: fromHex(data.proof.root_hash || ''),
        data: fromBase64(data.proof.data || ''),
        proof: data.proof.proof
      } : undefined
    };
  }

  decodeTxSearch(response: any): any {
    const data = response.result || response;
    return {
      totalCount: this.apiToNumber(data.total_count),
      txs: (data.txs || []).map((tx: any) => this.decodeTx(tx))
    };
  }

  decodeUnconfirmedTxs(response: any): any {
    const data = response.result || response;
    return {
      count: this.apiToNumber(data.n_txs || data.count), // Handle both field names
      total: this.apiToNumber(data.total),
      totalBytes: this.apiToNumber(data.total_bytes),
      txs: (data.txs || []).map((tx: string) => fromBase64(tx))
    };
  }

  decodeValidators(response: any): any {
    const data = response.result || response;
    return {
      blockHeight: this.apiToNumber(data.block_height),
      validators: (data.validators || []).map((v: any) => ({
        address: fromHex(v.address || ''),
        pubKey: this.decodePubkey(v.pub_key),
        votingPower: this.apiToBigInt(v.voting_power),
        proposerPriority: v.proposer_priority ? 
          this.apiToNumber(v.proposer_priority) : undefined
      })),
      count: this.apiToNumber(data.count),
      total: this.apiToNumber(data.total)
    };
  }

  // Broadcast methods
  decodeBroadcastTxAsync(response: any): BroadcastTxAsyncResponse {
    // In Tendermint 0.34, async response is the same as sync response
    return this.decodeBroadcastTxSync(response);
  }

  decodeBroadcastTxSync(response: any): BroadcastTxSyncResponse {
    const result = response.result || response;
    return {
      code: this.apiToNumber(result.code || 0),
      data: result.data ? fromBase64(result.data) : undefined,
      log: result.log || '',
      info: result.info || '',
      gasWanted: this.apiToBigInt(result.gas_wanted || '0'),
      gasUsed: this.apiToBigInt(result.gas_used || '0'),
      events: result.events || [],
      codespace: result.codespace || '',
      hash: fromHex(result.hash)
    };
  }

  decodeBroadcastTxCommit(response: any): BroadcastTxCommitResponse {
    const result = response.result || response;
    return {
      height: this.apiToNumber(result.height),
      hash: fromHex(result.hash),
      checkTx: {
        code: this.apiToNumber(result.check_tx?.code || 0),
        data: result.check_tx?.data ? fromBase64(result.check_tx.data) : undefined,
        log: result.check_tx?.log || '',
        info: result.check_tx?.info || '',
        gasWanted: this.apiToBigInt(result.check_tx?.gas_wanted || '0'),
        gasUsed: this.apiToBigInt(result.check_tx?.gas_used || '0'),
        events: result.check_tx?.events || [],
        codespace: result.check_tx?.codespace || ''
      },
      // Tendermint 0.34 uses deliver_tx instead of tx_result
      deliverTx: result.deliver_tx ? {
        code: this.apiToNumber(result.deliver_tx.code || 0),
        data: result.deliver_tx.data ? fromBase64(result.deliver_tx.data) : undefined,
        log: result.deliver_tx.log || '',
        info: result.deliver_tx.info || '',
        gasWanted: this.apiToBigInt(result.deliver_tx.gas_wanted || '0'),
        gasUsed: this.apiToBigInt(result.deliver_tx.gas_used || '0'),
        events: result.deliver_tx.events || [],
        codespace: result.deliver_tx.codespace || ''
      } : undefined
    };
  }
}