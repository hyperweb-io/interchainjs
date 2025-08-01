/// <reference types="@types/jest" />

import './setup.test';

import { ChainInfo } from '@chain-registry/client';
import { Asset } from '@chain-registry/types';
import { generateMnemonic } from '../src/utils';
import { CosmosQueryClient, AminoSigner, DirectSigner, HttpRpcClient, OfflineDirectSigner } from '@interchainjs/cosmos';
import { Secp256k1HDWallet } from '@interchainjs/cosmos/wallets/secp256k1hd';
import { HDPath } from '@interchainjs/types';
import { getBalance } from "@interchainjs/cosmos-types/cosmos/bank/v1beta1/query.rpc.func";
import { send } from "interchainjs/cosmos/bank/v1beta1/tx.rpc.func";

import { useChain } from 'starshipjs';
import { Comet38Adapter } from '@interchainjs/cosmos/adapters';
import { MsgSend } from 'interchainjs/cosmos/bank/v1beta1/tx';
import { getAllBalances, MsgTransfer, transfer } from 'interchainjs';

const cosmosHdPath = "m/44'/118'/0'/0/0";

describe('Token transfers', () => {
  let wallet: Secp256k1HDWallet;
  let client: CosmosQueryClient;
  let signer: DirectSigner;
  let protoSigner: OfflineDirectSigner,
    denom: string,
    address: string,
    address2: string,
    address3: string,
    address4: string;
  let commonPrefix: string,
    chainInfo: ChainInfo,
    getCoin: () => Promise<Asset>,
    getRpcEndpoint: () => Promise<string>,
    creditFromFaucet: (address: string, denom?: string | null) => Promise<void>;

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain('osmosis'));
    const rpcEndpoint = await getRpcEndpoint();
    const rpcClient = new HttpRpcClient(rpcEndpoint);
    const adapter = new Comet38Adapter();
    client = new CosmosQueryClient(rpcClient, adapter);

    denom = (await getCoin()).base;
    commonPrefix = chainInfo?.chain?.bech32_prefix;

    const mnemonic = generateMnemonic();
    // Initialize wallet with 4 accounts for testing
    wallet = await Secp256k1HDWallet.fromMnemonic(
      mnemonic,
      {
        derivations: [0, 1, 2, 3].map((i) => ({
          prefix: commonPrefix,
          hdPath: HDPath.cosmos(0, 0, i).toString(),
        }))
      }
    );
    protoSigner = await wallet.toOfflineDirectSigner();
    const accounts = await protoSigner.getAccounts();
    address = accounts[0].address;   // For direct mode test
    address2 = accounts[1].address;  // Recipient for direct mode test
    address3 = accounts[2].address;  // For amino mode test
    address4 = accounts[3].address;  // Recipient for amino mode test

    // Fund both sender addresses
    await creditFromFaucet(address);
    await creditFromFaucet(address3);
  });

  it('direct mode: send osmosis token to address', async () => {
    // Use wallet directly as it implements OfflineDirectSigner interface
    signer = new DirectSigner(protoSigner, {
      queryClient: client,
      chainId: 'osmosis-1',
      addressPrefix: commonPrefix
    });




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

    try {

      // Create a proper MsgSend message - use correct field names
      const msgSend = MsgSend.fromPartial({
        fromAddress: address,
        toAddress: address2,
        amount: [token]
      });

      const result = await send(signer, address, msgSend, fee, 'send tokens test');

      // Wait for transaction to be confirmed
      try {
        await result.wait();
      } catch (err) {
        console.log(err);
      }

      const { balance: balance2 } = await getBalance(client, { address: address2, denom });

      expect(balance2!.amount).toEqual(token.amount);
      expect(balance2!.denom).toEqual(denom);
    } catch (error) {
      console.error('Error sending tokens:', error);
      throw error;
    }
  }, 100000);

  it('amino mode: send osmosis token to address', async () => {
    // Use wallet.toOfflineAminoSigner() to get proper offline signer with cached account data
    const aminoOfflineSigner = await wallet.toOfflineAminoSigner();
    const aminoSigner: AminoSigner = new AminoSigner(aminoOfflineSigner, {
      queryClient: client,
      chainId: 'osmosis-1',
      addressPrefix: commonPrefix
    });



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

    try {
      // Create a proper MsgSend message - use different addresses for amino test
      const msgSend = MsgSend.fromPartial({
        fromAddress: address3,  // Use different sender address
        toAddress: address4,    // Use different recipient address
        amount: [token]
      });

      const result = await send(aminoSigner, address3, msgSend, fee, 'amino send tokens test');

      // Wait for transaction to be confirmed
      try {
        await result.wait();
      } catch (err) {
        console.log(err);
      }

      const { balance: balance4 } = await getBalance(client, { address: address4, denom });

      expect(balance4!.amount).toEqual(token.amount);
      expect(balance4!.denom).toEqual(denom);
    } catch (error) {
      console.error('Error sending tokens in amino mode:', error);
      throw error;
    }
  }, 100000);

  it('send ibc osmo tokens to address on cosmos chain', async () => {
    const { chainInfo: cosmosChainInfo, getRpcEndpoint: getCosmosRpcEndpoint } =
      useChain('cosmoshub');

    const cosmosPrefix = cosmosChainInfo?.chain?.bech32_prefix;
    const cosmosRpcEndpoint = await getCosmosRpcEndpoint();

    const rpcClient = new HttpRpcClient(cosmosRpcEndpoint);
    const adapter = new Comet38Adapter();
    const cosmosClient = new CosmosQueryClient(rpcClient, adapter);

    // Initialize wallet address for cosmos chain
    const cosmosWallet = await Secp256k1HDWallet.fromMnemonic(
      generateMnemonic(),
      {
        derivations: [0].map((i) => ({
          prefix: cosmosPrefix,
          hdPath: HDPath.cosmos(0, 0, i).toString(),
        }))
      }
    );
    const cosmosAddress = (await cosmosWallet.getAccounts())[0].address;

    const ibcInfos = chainInfo.fetcher.getChainIbcData(
      chainInfo.chain.chain_name
    );
    const sourceIbcInfo = ibcInfos.find(
      (i) =>
        i.chain_1.chain_name === chainInfo.chain.chain_name &&
        i.chain_2.chain_name === cosmosChainInfo.chain.chain_name
    );

    expect(sourceIbcInfo).toBeTruthy();

    const { port_id: sourcePort, channel_id: sourceChannel } =
      sourceIbcInfo!.channels[0].chain_1;

    // Transfer osmosis tokens via IBC to cosmos chain
    const currentTime = Math.floor(Date.now()) * 1000000;
    const timeoutTime = currentTime + 3600 * 1000000000; // 1 hour

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

    // send ibc tokens
    const resp = await transfer(
      signer,
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

    const { balances } = await getAllBalances(cosmosClient, {
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
  }, 40000);
});