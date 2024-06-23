import './setup.test';

import { ChainInfo } from '@chain-registry/client';
import { Asset } from '@chain-registry/types';
import { generateMnemonic } from '@confio/relayer/build/lib/helpers';
import { assertIsDeliverTxSuccess } from '@cosmjs/stargate';
import { OfflineDirectSigner } from '@interchainjs/cosmos/types/wallet';
import { Secp256k1HDWallet } from '@interchainjs/cosmos/wallets/secp256k1hd';
import { MsgTransfer } from '@interchainjs/cosmos-types/ibc/applications/transfer/v1/tx';
import { RpcQuery } from 'interchainjs/query/rpc';
import { StargateSigningClient } from 'interchainjs/stargate';
import { useChain } from 'starshipjs';

const cosmosHdPath = "m/44'/118'/0'/0/0";

describe('Token transfers', () => {
  let protoSigner: OfflineDirectSigner, denom: string, address: string;
  let commonPrefix: string,
    chainInfo: ChainInfo,
    getCoin: () => Asset,
    getRpcEndpoint: () => string,
    creditFromFaucet: (address: string, denom?: string | null) => Promise<void>;
  let queryClient: RpcQuery;

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain('osmosis'));
    denom = getCoin().base;

    commonPrefix = chainInfo?.chain?.bech32_prefix;

    const mnemonic = generateMnemonic();
    // Initialize wallet
    const wallet = Secp256k1HDWallet.fromMnemonic(mnemonic, [
      {
        prefix: commonPrefix,
        hdPath: cosmosHdPath,
      },
    ]);
    protoSigner = wallet.toOfflineDirectSigner();
    address = (await protoSigner.getAccounts())[0].address;

    // Create custom cosmos interchain client
    queryClient = new RpcQuery(getRpcEndpoint());

    await creditFromFaucet(address);
  });

  it('send osmosis token to address', async () => {
    const mnemonic = generateMnemonic();
    // Initialize wallet
    const wallet2 = Secp256k1HDWallet.fromMnemonic(mnemonic, [
      {
        prefix: commonPrefix,
        hdPath: cosmosHdPath,
      },
    ]);
    const address2 = (await wallet2.getAccounts())[0].address;

    const signingClient = StargateSigningClient.connectWithSigner(
      getRpcEndpoint(),
      protoSigner
    );

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
    await signingClient.helpers.send(
      address,
      { fromAddress: address, toAddress: address2, amount: [token] },
      fee,
      'send tokens test'
    );

    const { balance } = await queryClient.balance({ address: address2, denom });

    expect(balance!.amount).toEqual(token.amount);
    expect(balance!.denom).toEqual(denom);
  }, 10000);

  it('send ibc osmo tokens to address on cosmos chain', async () => {
    const signingClient = StargateSigningClient.connectWithSigner(
      getRpcEndpoint(),
      protoSigner
    );

    const { chainInfo: cosmosChainInfo, getRpcEndpoint: cosmosRpcEndpoint } =
      useChain('cosmos');

    // Initialize wallet address for cosmos chain
    const cosmosWallet = Secp256k1HDWallet.fromMnemonic(generateMnemonic(), [
      {
        prefix: cosmosChainInfo.chain.bech32_prefix,
        hdPath: cosmosHdPath,
      },
    ]);
    const cosmosAddress = (await cosmosWallet.getAccounts())[0].address;

    const ibcInfos = chainInfo.fetcher.getChainIbcData(
      chainInfo.chain.chain_id
    );
    const sourceIbcInfo = ibcInfos.find(
      (i) =>
        i.chain_1.chain_name === chainInfo.chain.chain_id &&
        i.chain_2.chain_name === cosmosChainInfo.chain.chain_id
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
    const resp = await signingClient.helpers.transfer(
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
    const cosmosQueryClient = new RpcQuery(cosmosRpcEndpoint());
    const { balances } = await cosmosQueryClient.allBalances({
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
