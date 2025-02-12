import './setup.test';

import { ChainInfo } from '@chain-registry/client';
import { Asset } from '@chain-registry/types';
import { generateMnemonic } from '../src/utils';
import { assertIsDeliverTxSuccess } from '@interchainjs/cosmos/utils';
import { DirectGenericOfflineSigner, OfflineDirectSigner } from '@interchainjs/cosmos/types/wallet';
import { Secp256k1HDWallet } from '@interchainjs/cosmos/wallets/secp256k1hd';
import { MsgTransfer } from 'interchainjs/ibc/applications/transfer/v1/tx';
import { HDPath } from '@interchainjs/types';
import { SigningClient as CosmosSigningClient } from '@interchainjs/cosmos/signing-client';
import { createGetAllBalances, createGetBalance } from "interchainjs/cosmos/bank/v1beta1/query.rpc.func";
import { createSend } from "interchainjs/cosmos/bank/v1beta1/tx.rpc.func";
import { createTransfer } from "interchainjs/ibc/applications/transfer/v1/tx.rpc.func";
import { QueryBalanceRequest, QueryBalanceResponse } from 'interchainjs/cosmos/bank/v1beta1/query';
import { useChain } from 'starshipjs';

const cosmosHdPath = "m/44'/118'/0'/0/0";

describe('Token transfers', () => {
  let protoSigner: OfflineDirectSigner,
    denom: string,
    address: string,
    address2: string;
  let commonPrefix: string,
    chainInfo: ChainInfo,
    getCoin: () => Promise<Asset>,
    getRpcEndpoint: () => Promise<string>,
    creditFromFaucet: (address: string, denom?: string | null) => Promise<void>;

  let getBalance: (request: QueryBalanceRequest) => Promise<QueryBalanceResponse>;

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain('osmosis'));
    denom = (await getCoin()).base;

    commonPrefix = chainInfo?.chain?.bech32_prefix;

    const mnemonic = generateMnemonic();
    // Initialize wallet
    const wallet = Secp256k1HDWallet.fromMnemonic(
      mnemonic,
      [0, 1].map((i) => ({
        prefix: commonPrefix,
        hdPath: HDPath.cosmos(0, 0, i).toString(),
      }))
    );
    protoSigner = wallet.toOfflineDirectSigner();
    const accounts = await protoSigner.getAccounts();
    address = accounts[0].address;
    address2 = accounts[1].address;

    // Create custom cosmos interchain client
    getBalance = createGetBalance(await getRpcEndpoint());

    await creditFromFaucet(address);
  });

  it('send osmosis token to address', async () => {
    const signingClient = await CosmosSigningClient.connectWithSigner(
      await getRpcEndpoint(),
      new DirectGenericOfflineSigner(protoSigner),
      {
        broadcast: {
          checkTx: true,
          deliverTx: true,
        },
      }
    );

    const send = createSend(signingClient);

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

    // Transfer uosmo tokens from faceut
    await send(
      address,
      { fromAddress: address, toAddress: address2, amount: [token] },
      fee,
      'send tokens test'
    );

    const { balance } = await getBalance({ address: address2, denom });

    expect(balance!.amount).toEqual(token.amount);
    expect(balance!.denom).toEqual(denom);
  }, 10000);

  it('send ibc osmo tokens to address on cosmos chain', async () => {
    const signingClient = await CosmosSigningClient.connectWithSigner(
      await getRpcEndpoint(),
      new DirectGenericOfflineSigner(protoSigner),
      {
        broadcast: {
          checkTx: true,
          deliverTx: true,
        },
      }
    );

    const transfer = createTransfer(signingClient);

    const { chainInfo: cosmosChainInfo, getRpcEndpoint: cosmosRpcEndpoint } =
      useChain('cosmoshub');

    // Initialize wallet address for cosmos chain
    const cosmosWallet = Secp256k1HDWallet.fromMnemonic(generateMnemonic(), [
      {
        prefix: cosmosChainInfo.chain.bech32_prefix,
        hdPath: cosmosHdPath,
      },
    ]);
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
    const timeoutTime = currentTime + 300 * 1000000000; // 5 minutes

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

    assertIsDeliverTxSuccess(resp);

    // Check osmos in address on cosmos chain
    const cosmosGetAllBalances = createGetAllBalances(await cosmosRpcEndpoint());

    const { balances } = await cosmosGetAllBalances({
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
  }, 10000);
});