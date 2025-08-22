import './setup.test';

import { ChainInfo } from '@chain-registry/client';
import { Asset } from '@chain-registry/types';
import { DirectSigner, ICosmosQueryClient, createCosmosQueryClient } from '@interchainjs/cosmos';
import { toEncoders } from '@interchainjs/cosmos';
import { sleep } from '@interchainjs/utils';
import { MsgSend, MsgTransfer } from 'interchainjs';
import { useChain } from 'starshipjs';

import { EthSecp256k1HDWallet } from '../../src/wallets/ethSecp256k1hd';
import { createInjectiveSignerConfig, DEFAULT_INJECTIVE_SIGNER_CONFIG } from '../../src/signers/config';
import { getAllBalances, getBalance } from "@interchainjs/cosmos-types";
import { send, transfer } from "interchainjs";
import * as bip39 from 'bip39';



describe('Token transfers', () => {
  let directSigner: DirectSigner, denom: string, address: string, address2: string;
  let chainInfo: ChainInfo,
    getCoin: () => Promise<Asset>,
    getRpcEndpoint: () => Promise<string>,
    creditFromFaucet;

  let injRpcEndpoint: string;

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain('injective'));
    denom = (await getCoin()).base;

    injRpcEndpoint = await getRpcEndpoint();

    const mnemonic = bip39.generateMnemonic();

    // Use EthSecp256k1HDWallet with Ethereum HD path for Injective compatibility
    const wallet = await EthSecp256k1HDWallet.fromMnemonic(mnemonic, {
      derivations: [{
        prefix: 'inj',
        hdPath: "m/44'/60'/0'/0/0", // Ethereum-style HD path for Injective
      }]
    });
    const offlineSigner = await wallet.toOfflineDirectSigner();

    // Create query client for signer configuration
    const queryClient = await createCosmosQueryClient(injRpcEndpoint);

    // Use Injective-specific signer configuration with proper defaults
    let actualChainId = 'injective-1'; // default fallback
    try {
      const status = await queryClient.getStatus();
      actualChainId = status.nodeInfo.network;
    } catch (e) {
      console.log('Could not get chainId, using default:', actualChainId);
    }

    const baseSignerConfig = {
      queryClient: queryClient,
      chainId: actualChainId,
      addressPrefix: 'inj'
    };

    // Merge with DEFAULT_INJECTIVE_SIGNER_CONFIG for complete configuration
    const signerConfig = createInjectiveSignerConfig({
      ...DEFAULT_INJECTIVE_SIGNER_CONFIG,
      ...baseSignerConfig
    });

    directSigner = new DirectSigner(offlineSigner, signerConfig);
    directSigner.addEncoders(toEncoders(MsgSend, MsgTransfer));
    const addresses = await offlineSigner.getAccounts();
    address = addresses[0].address;

    await creditFromFaucet(address);

    await sleep(5000);
  });

  it('check address has tokens', async () => {
    // Create query client for balance check
    const queryClient = await createCosmosQueryClient(injRpcEndpoint);

    const { balance } = await getBalance(queryClient, {
      address: address,
      denom,
    });

    expect(balance!.amount).toEqual('100000000000000000000');
  }, 200000);

  it('send injective token to address', async () => {
    const mnemonic = bip39.generateMnemonic();
    // Initialize wallet with EthSecp256k1HDWallet and Ethereum HD path
    const wallet2 = await EthSecp256k1HDWallet.fromMnemonic(mnemonic, {
      derivations: [{
        prefix: 'inj',
        hdPath: "m/44'/60'/0'/0/0", // Ethereum-style HD path for Injective
      }]
    });
    const offlineSigner2 = await wallet2.toOfflineDirectSigner();
    const addresses2 = await offlineSigner2.getAccounts();
    address2 = addresses2[0].address;

    const fee = {
      amount: [
        {
          denom,
          amount: '100000',
        },
      ],
      gas: '550000',
    };

    const token = {
      amount: '10000000',
      denom,
    };

    // Transfer tokens using helper function
    const result = await send(
      directSigner,
      address,
      {
        fromAddress: address,
        toAddress: address2,
        amount: [token],
      },
      fee,
      'send tokens test'
    );

    // Wait for transaction to be confirmed
    try {
      await result.wait();
    } catch (err) {
      console.log(err);
    }

    // Create query client for balance check
    const queryClient = await createCosmosQueryClient(injRpcEndpoint);

    const { balance } = await getBalance(queryClient, { address: address2, denom });

    expect(balance!.amount).toEqual(token.amount);
    expect(balance!.denom).toEqual(denom);
  }, 200000);

  it('send ibc inj tokens to address on cosmos chain', async () => {
    const { chainInfo: cosmosChainInfo, getRpcEndpoint: cosmosRpcEndpoint } =
    useChain('cosmoshub');

    // Initialize wallet address for cosmos chain - use standard Cosmos wallet for Cosmos chain
    const cosmosWallet = await EthSecp256k1HDWallet.fromMnemonic(bip39.generateMnemonic(), {
      derivations: [{
        prefix: 'cosmos',
        hdPath: "m/44'/118'/0'/0/0", // Standard Cosmos HD path for Cosmos chain
      }]
    });
    const cosmosOfflineSigner = await cosmosWallet.toOfflineDirectSigner();
    const cosmosAddresses = await cosmosOfflineSigner.getAccounts();
    const cosmosAddress = cosmosAddresses[0].address;

    const ibcInfos = chainInfo.fetcher.getChainIbcData(
      chainInfo.chain.chain_name
    );
    const ibcInfo = ibcInfos.find(
      (i) =>
        i.chain_1.chain_name === chainInfo.chain.chain_name &&
        i.chain_2.chain_name === cosmosChainInfo.chain.chain_name
    );

    expect(ibcInfo).toBeTruthy();

    const { port_id: sourcePort, channel_id: sourceChannel } =
      ibcInfo!.channels[0].chain_1;

    // Transfer injective tokens via IBC to cosmos chain
    const currentTime = Math.floor(Date.now()) * 1000000;
    const timeoutTime = currentTime + 3600 * 1000000000; // 5 minutes

    const fee = {
      amount: [
        {
          denom,
          amount: '100000',
        },
      ],
      gas: '550000',
    };

    const token = {
      denom,
      amount: '10000000',
    };

    // send ibc tokens using helper function
    const resp = await transfer(
      directSigner,
      address,
      MsgTransfer.fromPartial({
        sourcePort,
        sourceChannel,
        token,
        sender: address,
        receiver: cosmosAddress,
        timeoutHeight: undefined,
        timeoutTimestamp: BigInt(timeoutTime),
        memo: 'test transfer',
      }),
      fee,
      ''
    );

    // Wait for transaction to be confirmed
    try {
      await resp.wait();
    } catch (err) {
      console.log(err);
    }

    // Create query client for cosmos chain
    const cosmosQueryClient = await createCosmosQueryClient(await cosmosRpcEndpoint());

    const { balances } = await getAllBalances(cosmosQueryClient, {
      address: cosmosAddress,
      resolveDenom: true,
    });

    // check balances
    expect(balances.length).toEqual(1);
    const ibcBalance = balances.find((balance) => {
      return balance.denom.startsWith('ibc/');
    });
    expect(ibcBalance!.amount).toEqual(token.amount);
    expect(ibcBalance!.denom).toContain('ibc/');

    // // check ibc denom trace of the same
    // const trace = await cosmosQueryClient.denomTrace({
    //   hash: ibcBalance!.denom.replace("ibc/", ""),
    // });
    // expect(trace.denomTrace.baseDenom).toEqual(denom);
  }, 200000);
});
