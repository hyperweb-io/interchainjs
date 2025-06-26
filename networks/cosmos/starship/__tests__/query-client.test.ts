/// <reference types="@types/jest" />

import './setup.test';
import { useChain } from 'starshipjs';
import { createCosmosQueryClient, ICosmosQueryClient } from '@interchainjs/cosmos';

describe('Cosmos Query Client with Starship', () => {
  let queryClient: ICosmosQueryClient;
  let getRpcEndpoint: () => Promise<string>;
  let creditFromFaucet: any;

  beforeAll(async () => {
    ({ getRpcEndpoint, creditFromFaucet } =
      useChain('osmosis'));

    const rpcEndpoint = await getRpcEndpoint();
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

  test('should query chain status', async () => {
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

    console.log('✅ Starship Osmosis chain is running and accessible');
    console.log(`Chain ID: ${status.nodeInfo.network}`);
    console.log(`Latest Block Height: ${status.syncInfo.latestBlockHeight}`);
    console.log(`Node Moniker: ${status.nodeInfo.moniker}`);
  });
});