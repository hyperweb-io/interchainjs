/// <reference types="@types/jest" />

import './setup.test';

import { describe, test, expect, beforeAll, afterAll } from '@jest/globals';
import {
  createCosmosQueryClient,
  CosmosClientFactory,
  ICosmosQueryClient,
  ProtocolVersion,
  RpcMethod
} from '@interchainjs/cosmos';

import { useChain } from 'starshipjs';

let queryClient: ICosmosQueryClient;
let rpcEndpoint: string;

describe('Cosmos Query Client', () => {

  beforeAll(async () => {
    const { getRpcEndpoint } = useChain('osmosis');
    rpcEndpoint = await getRpcEndpoint();
    queryClient = createCosmosQueryClient(rpcEndpoint, {
      timeout: 15000,
      headers: {
        'User-Agent': 'InterchainJS-QueryClient-Test/1.0.0'
      }
    });
    await queryClient.connect();
  });

  afterAll(async () => {
    if (queryClient) {
      await queryClient.disconnect();
    }
  });

  describe('Connection Management', () => {
    test('should connect successfully', () => {
      expect(queryClient.isConnected()).toBe(true);
      expect(queryClient.endpoint).toBe(rpcEndpoint);
    });

    test('should have correct protocol info', () => {
      const protocolInfo = queryClient.getProtocolInfo();
      expect(protocolInfo.version).toBe(ProtocolVersion.COMET_38);
      expect(protocolInfo.supportedMethods.has(RpcMethod.STATUS)).toBe(true);
      expect(protocolInfo.supportedMethods.has(RpcMethod.BLOCK)).toBe(true);
      expect(protocolInfo.capabilities.streaming).toBe(true);
      expect(protocolInfo.capabilities.subscriptions).toBe(true);
    });
  });

  describe('Basic Info Methods', () => {
    test('getStatus should return chain status', async () => {
      const status = await queryClient.getStatus();

      expect(status).toBeDefined();
      expect(status.nodeInfo).toBeDefined();
      expect(status.syncInfo).toBeDefined();
      expect(status.validatorInfo).toBeDefined();

      expect(status.nodeInfo.network).toBe('osmosis-1');
      expect(status.nodeInfo.id).toBeDefined();
      expect(status.nodeInfo.moniker).toBeDefined();
      expect(status.nodeInfo.version).toBeDefined();

      expect(status.syncInfo.latestBlockHeight).toBeDefined();
      expect(status.syncInfo.latestBlockTime).toBeDefined();
      expect(status.syncInfo.catchingUp).toBeDefined();

      expect(status.validatorInfo.address).toBeDefined();
      expect(status.validatorInfo.pubKey).toBeDefined();
      expect(status.validatorInfo.votingPower).toBeDefined();
    });

    test('getAbciInfo should return ABCI info', async () => {
      const abciInfo = await queryClient.getAbciInfo() as any;

      expect(abciInfo).toBeDefined();
      expect(abciInfo.response).toBeDefined();
      expect(abciInfo.response.data).toBeDefined();
      expect(abciInfo.response.version).toBeDefined();
      expect(abciInfo.response.lastBlockHeight).toBeDefined();
    });

    test('getHealth should return health status', async () => {
      const health = await queryClient.getHealth();

      expect(health).toBeDefined();
      // Health endpoint returns empty object for healthy node
      expect(typeof health).toBe('object');
    });

    test('getNetInfo should return network info', async () => {
      const netInfo = await queryClient.getNetInfo();

      expect(netInfo).toBeDefined();
      expect(netInfo.listening).toBeDefined();
      expect(netInfo.listeners).toBeDefined();
      expect(netInfo.nPeers).toBeDefined();
      expect(netInfo.peers).toBeDefined();
      expect(Array.isArray(netInfo.listeners)).toBe(true);
      expect(Array.isArray(netInfo.peers)).toBe(true);
    });
  });

  describe('Block Query Methods', () => {
    test('getBlock should return latest block when no height specified', async () => {
      const blockResponse = await queryClient.getBlock() as any;

      expect(blockResponse).toBeDefined();
      expect(blockResponse.blockId).toBeDefined();
      expect(blockResponse.block).toBeDefined();
      expect(blockResponse.block.header).toBeDefined();
      expect(blockResponse.block.data).toBeDefined();
      expect(blockResponse.block.evidence).toBeDefined();
      expect(blockResponse.block.lastCommit).toBeDefined();

      expect(blockResponse.block.header.chainId).toBe('osmosis-1');
      expect(blockResponse.block.header.height).toBeDefined();
      expect(blockResponse.block.header.time).toBeDefined();
      expect(Array.isArray(blockResponse.block.data.txs)).toBe(true);
    });

    test('getBlock should return specific block when height specified', async () => {
      // Get latest block first to determine a valid height
      const latestBlockResponse = await queryClient.getBlock() as any;
      const targetHeight = parseInt(latestBlockResponse.block.header.height) - 100;

      const blockResponse = await queryClient.getBlock(targetHeight) as any;

      expect(blockResponse).toBeDefined();
      expect(blockResponse.block.header.height).toBe(targetHeight.toString());
      expect(blockResponse.block.header.chainId).toBe('osmosis-1');
    });

    test('getBlockResults should return block results', async () => {
      const latestBlockResponse = await queryClient.getBlock() as any;
      const targetHeight = parseInt(latestBlockResponse.block.header.height) - 10;

      const blockResults = await queryClient.getBlockResults(targetHeight);

      expect(blockResults).toBeDefined();
      expect(blockResults.height).toBe(targetHeight.toString());
      expect(Array.isArray(blockResults.txsResults)).toBe(true);
      expect(Array.isArray(blockResults.beginBlockEvents)).toBe(true);
      expect(Array.isArray(blockResults.endBlockEvents)).toBe(true);
    });

    test('getHeader should return block header', async () => {
      const header = await queryClient.getHeader();

      expect(header).toBeDefined();
      expect(header.chainId).toBe('osmosis-1');
      expect(header.height).toBeDefined();
      expect(header.time).toBeDefined();
      expect(header.proposerAddress).toBeDefined();
    });

    test('getCommit should return block commit', async () => {
      const latestBlockResponse = await queryClient.getBlock() as any;
      const targetHeight = parseInt(latestBlockResponse.block.header.height) - 5;

      const commit = await queryClient.getCommit(targetHeight);

      expect(commit).toBeDefined();
      expect(commit.height).toBe(targetHeight.toString());
      expect(commit.blockId).toBeDefined();
      expect(Array.isArray(commit.signatures)).toBe(true);
    });

    test('getBlockchain should return blockchain info', async () => {
      const latestBlockResponse = await queryClient.getBlock() as any;
      const latestHeight = parseInt(latestBlockResponse.block.header.height);
      const minHeight = latestHeight - 10;
      const maxHeight = latestHeight - 5;

      const blockchain = await queryClient.getBlockchain(minHeight, maxHeight);

      expect(blockchain).toBeDefined();
      expect(blockchain.lastHeight).toBeDefined();
      expect(Array.isArray(blockchain.blockMetas)).toBe(true);
      expect(blockchain.blockMetas.length).toBeGreaterThan(0);
    });
  });

  describe('Chain Query Methods', () => {
    test('getValidators should return validator set', async () => {
      const validators = await queryClient.getValidators(undefined, 1, 5);

      expect(validators).toBeDefined();
      expect(validators.blockHeight).toBeDefined();
      expect(validators.validators).toBeDefined();
      expect(validators.count).toBeDefined();
      expect(validators.total).toBeDefined();

      expect(Array.isArray(validators.validators)).toBe(true);
      expect(validators.validators.length).toBeGreaterThan(0);
      expect(validators.validators.length).toBeLessThanOrEqual(5);

      const firstValidator = validators.validators[0];
      expect(firstValidator.address).toBeDefined();
      expect(firstValidator.pubKey).toBeDefined();
      expect(firstValidator.votingPower).toBeDefined();
    });

    test('getConsensusParams should return consensus parameters', async () => {
      const consensusParams = await queryClient.getConsensusParams();

      expect(consensusParams).toBeDefined();
      expect(consensusParams.block).toBeDefined();
      expect(consensusParams.evidence).toBeDefined();
      expect(consensusParams.validator).toBeDefined();

      expect((consensusParams as any).maxBytes).toBeDefined();
      expect((consensusParams as any).maxGas).toBeDefined();
      expect(Array.isArray(consensusParams.validator.pubKeyTypes)).toBe(true);
    });

    test('getConsensusState should return consensus state', async () => {
      const consensusState = await queryClient.getConsensusState();

      expect(consensusState).toBeDefined();
      expect(consensusState.height).toBeDefined();
      expect(consensusState.round).toBeDefined();
      expect(consensusState.step).toBeDefined();
    });
  });

  describe('Transaction Query Methods', () => {
    test('getUnconfirmedTxs should return unconfirmed transactions', async () => {
      const unconfirmedTxs = await queryClient.getUnconfirmedTxs(10);

      expect(unconfirmedTxs).toBeDefined();
      expect(unconfirmedTxs.nTxs).toBeDefined();
      expect(unconfirmedTxs.total).toBeDefined();
      expect(unconfirmedTxs.totalBytes).toBeDefined();
      expect(Array.isArray(unconfirmedTxs.txs)).toBe(true);
    });

    test('getNumUnconfirmedTxs should return unconfirmed tx count', async () => {
      const numUnconfirmedTxs = await queryClient.getNumUnconfirmedTxs();

      expect(numUnconfirmedTxs).toBeDefined();
      expect(numUnconfirmedTxs.nTxs).toBeDefined();
      expect(numUnconfirmedTxs.total).toBeDefined();
      expect(numUnconfirmedTxs.totalBytes).toBeDefined();
    });

    test('searchTxs should search for transactions', async () => {
      const searchResult = await queryClient.searchTxs({
        query: "tx.height>1000000",
        page: 1,
        perPage: 5,
        orderBy: "desc"
      });

      expect(searchResult).toBeDefined();
      expect(searchResult.txs).toBeDefined();
      expect(searchResult.totalCount).toBeDefined();
      expect(Array.isArray(searchResult.txs)).toBe(true);
    });
  });

  describe('ABCI Query Methods', () => {
    test('queryAbci should perform ABCI query', async () => {
      const queryParams = {
        path: "/store/bank/key",
        data: new Uint8Array([0x01, 0x02, 0x03]),
        height: undefined as any,
        prove: false
      };

      const result = await queryClient.queryAbci(queryParams);

      expect(result).toBeDefined();
      expect(result.code).toBeDefined();
      expect(result.height).toBeDefined();
      expect(result.key).toBeDefined();
      expect((result as any).value).toBeDefined();
      expect(result.key instanceof Uint8Array).toBe(true);
      expect((result as any).value instanceof Uint8Array).toBe(true);
    });
  });

  describe('Error Handling', () => {
    test('should handle invalid block height gracefully', async () => {
      await expect(queryClient.getBlock(999999999)).rejects.toThrow();
    });

    test('should handle invalid transaction hash gracefully', async () => {
      await expect(queryClient.getTx('invalid_hash')).rejects.toThrow();
    });

    test('should handle network timeouts', async () => {
      const shortTimeoutClient = createCosmosQueryClient(rpcEndpoint, {
        timeout: 1 // Very short timeout
      });

      await shortTimeoutClient.connect();

      await expect(shortTimeoutClient.getStatus()).rejects.toThrow();

      await shortTimeoutClient.disconnect();
    });
  });

  describe('Performance Tests', () => {
    test('should handle parallel requests efficiently', async () => {
      const startTime = Date.now();

      const promises = Array.from({ length: 5 }, () => queryClient.getStatus());
      const results = await Promise.all(promises);

      const endTime = Date.now();
      const totalTime = endTime - startTime;

      expect(results).toHaveLength(5);
      results.forEach(result => {
        expect(result.nodeInfo.network).toBe('osmosis-1');
      });

      // Should complete in reasonable time (less than 10 seconds for 5 parallel requests)
      expect(totalTime).toBeLessThan(10000);
    });

    test('should handle mixed operations in parallel', async () => {
      const startTime = Date.now();

      const [status, abciInfo, health, netInfo, block] = await Promise.all([
        queryClient.getStatus(),
        queryClient.getAbciInfo(),
        queryClient.getHealth(),
        queryClient.getNetInfo(),
        queryClient.getBlock()
      ]) as any[];

      const endTime = Date.now();
      const totalTime = endTime - startTime;

      expect(status.nodeInfo.network).toBe('osmosis-1');
      expect(abciInfo.response).toBeDefined();
      expect(health).toBeDefined();
      expect(netInfo.listening).toBeDefined();
      expect(block.block.header.chainId).toBe('osmosis-1');

      // Should complete in reasonable time
      expect(totalTime).toBeLessThan(15000);
    });
  });
});

describe('Client Factory', () => {
  test('should create query client with factory', () => {
    const client = CosmosClientFactory.createQueryClient(rpcEndpoint, {
      protocolVersion: ProtocolVersion.COMET_38,
      timeout: 10000
    });

    expect(client).toBeDefined();
    expect(client.endpoint).toBe(rpcEndpoint);

    const protocolInfo = client.getProtocolInfo();
    expect(protocolInfo.version).toBe(ProtocolVersion.COMET_38);
  });

  test('should create clients with shared configuration', () => {
    const { queryClient, eventClient } = CosmosClientFactory.createClients(
      rpcEndpoint,
      rpcEndpoint,
      {
        protocolVersion: ProtocolVersion.COMET_38,
        timeout: 15000
      }
    );

    expect(queryClient).toBeDefined();
    expect(eventClient).toBeDefined();
    expect(queryClient.endpoint).toBe('https://rpc.osmosis.zone/');
  });
});