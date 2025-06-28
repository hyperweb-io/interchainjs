import { TendermintProtocolAdapter } from '../src/protocol-adapter.js';
import { ProtocolVersion, RpcMethod } from '../src/types/protocol.js';

// Example showing how different protocol versions handle responses differently

// Example raw response from a block_results query
const mockBlockResultsResponse = {
  result: {
    height: "12345",
    txs_results: [],
    validator_updates: [],
    consensus_param_updates: null,
    // Tendermint 0.34 and 0.37 have these fields
    begin_block_events: [
      {
        type: "transfer",
        attributes: [
          { key: "c2VuZGVy", value: "Y29zbW9zMXh4eA==", index: true }
        ]
      }
    ],
    end_block_events: [],
    // CometBFT 0.38 has this field instead
    finalize_block_events: [
      {
        type: "transfer",
        attributes: [
          { key: "c2VuZGVy", value: "Y29zbW9zMXh4eA==", index: true }
        ]
      }
    ],
    // CometBFT 0.38 also includes app_hash
    app_hash: "YXBwX2hhc2g="
  }
};

// Create adapters for different versions
const tendermint34Adapter = new TendermintProtocolAdapter(ProtocolVersion.TENDERMINT_34);
const tendermint37Adapter = new TendermintProtocolAdapter(ProtocolVersion.TENDERMINT_37);
const comet38Adapter = new TendermintProtocolAdapter(ProtocolVersion.COMET_38);

// Decode the same response with different adapters
console.log("=== Tendermint 0.34 Decoding ===");
const decoded34 = tendermint34Adapter.decodeResponse(RpcMethod.BLOCK_RESULTS, mockBlockResultsResponse);
console.log("Has beginBlockEvents:", !!decoded34.beginBlockEvents);
console.log("Has endBlockEvents:", !!decoded34.endBlockEvents);
console.log("Has finalizeBlockEvents:", !!decoded34.finalizeBlockEvents);
console.log("Has appHash:", !!decoded34.appHash);

console.log("\n=== Tendermint 0.37 Decoding ===");
const decoded37 = tendermint37Adapter.decodeResponse(RpcMethod.BLOCK_RESULTS, mockBlockResultsResponse);
console.log("Has beginBlockEvents:", !!decoded37.beginBlockEvents);
console.log("Has endBlockEvents:", !!decoded37.endBlockEvents);
console.log("Has finalizeBlockEvents:", !!decoded37.finalizeBlockEvents);
console.log("Has appHash:", !!decoded37.appHash);

console.log("\n=== CometBFT 0.38 Decoding ===");
const decoded38 = comet38Adapter.decodeResponse(RpcMethod.BLOCK_RESULTS, mockBlockResultsResponse);
console.log("Has beginBlockEvents:", !!decoded38.beginBlockEvents);
console.log("Has endBlockEvents:", !!decoded38.endBlockEvents);
console.log("Has finalizeBlockEvents:", !!decoded38.finalizeBlockEvents);
console.log("Has appHash:", !!decoded38.appHash);

// Example of BlockId structure differences
const mockBlockResponse = {
  block_id: {
    hash: "ABCDEF123456",
    // Tendermint 0.34 uses "parts"
    parts: {
      total: 1,
      hash: "123456ABCDEF"
    },
    // Tendermint 0.37 and CometBFT 0.38 use "part_set_header"
    part_set_header: {
      total: 1,
      hash: "123456ABCDEF"
    }
  },
  block: {
    header: {
      version: { block: "11", app: "0" },
      chain_id: "cosmoshub-4",
      height: "12345",
      time: "2023-01-01T00:00:00Z",
      last_block_id: {
        hash: "FEDCBA654321",
        parts: { total: 1, hash: "654321FEDCBA" },
        part_set_header: { total: 1, hash: "654321FEDCBA" }
      },
      last_commit_hash: "1234567890ABCDEF",
      data_hash: "ABCDEF1234567890",
      validators_hash: "1111111111111111",
      next_validators_hash: "2222222222222222",
      consensus_hash: "3333333333333333",
      app_hash: "4444444444444444",
      last_results_hash: "5555555555555555",
      evidence_hash: "6666666666666666",
      proposer_address: "7777777777777777"
    },
    data: { txs: [] },
    evidence: { evidence: [] },
    last_commit: null
  }
};

console.log("\n=== BlockId Structure Handling ===");
const block34 = tendermint34Adapter.decodeResponse(RpcMethod.BLOCK, mockBlockResponse);
console.log("Tendermint 0.34 - blockId.parts:", !!block34.blockId.parts);
console.log("Tendermint 0.34 - blockId.partSetHeader:", !!block34.blockId.partSetHeader);

const block37 = tendermint37Adapter.decodeResponse(RpcMethod.BLOCK, mockBlockResponse);
console.log("Tendermint 0.37 - blockId.parts:", !!block37.blockId.parts);
console.log("Tendermint 0.37 - blockId.partSetHeader:", !!block37.blockId.partSetHeader);

const block38 = comet38Adapter.decodeResponse(RpcMethod.BLOCK, mockBlockResponse);
console.log("CometBFT 0.38 - blockId.parts:", !!block38.blockId.parts);
console.log("CometBFT 0.38 - blockId.partSetHeader:", !!block38.blockId.partSetHeader);