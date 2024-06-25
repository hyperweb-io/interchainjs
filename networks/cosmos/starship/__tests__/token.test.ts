import './setup.test';

import { ChainInfo } from '@chain-registry/client';
import { Secp256k1Auth } from '@interchainjs/auth/secp256k1';
import { defaultSignerOptions } from '@interchainjs/cosmos/defaults';
import { DirectSigner } from '@interchainjs/cosmos/direct';
import {
  assertIsDeliverTxSuccess,
  toEncoders,
} from '@interchainjs/cosmos/utils';
import { MsgSend } from '@interchainjs/cosmos-types/cosmos/bank/v1beta1/tx';
import { MsgTransfer } from '@interchainjs/cosmos-types/ibc/applications/transfer/v1/tx';
import { RpcQuery } from 'interchainjs/query/rpc';
import { useChain } from 'starshipjs';

import { generateMnemonic } from '../src';

const cosmosHdPath = "m/44'/118'/0'/0/0";

describe('Token transfers', () => {
  let directSigner: DirectSigner, denom: string, address: string;
  let chainInfo: ChainInfo,
    getCoin: () => Promise<import("@chain-registry/types").Asset>,
    getRpcEndpoint: () => Promise<string>,
    getRestEndpoint: () => Promise<string>,
    creditFromFaucet: (address: string, denom?: string | null) => Promise<void>;
  let queryClient: RpcQuery;

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet, getRestEndpoint } =
      useChain('osmosis'));
    denom = (await getCoin()).base;

    const mnemonic = generateMnemonic();
    // Initialize auth
    const [auth] = Secp256k1Auth.fromMnemonic(mnemonic, [cosmosHdPath]);
    directSigner = new DirectSigner(auth, [], await getRpcEndpoint(), {
      prefix: chainInfo.chain.bech32_prefix,
    });
    address = await directSigner.getAddress();

    // Create custom cosmos interchain client
    queryClient = new RpcQuery(await getRpcEndpoint());

    await creditFromFaucet(address);
  });

  it('send osmosis token to address', async () => {
    const mnemonic = generateMnemonic();
    // Initialize wallet
    const [auth2] = Secp256k1Auth.fromMnemonic(mnemonic, [cosmosHdPath]);
    const address2 = defaultSignerOptions.publicKey
      .hash(auth2.getPublicKey(defaultSignerOptions.publicKey.isCompressed))
      .toBech32(chainInfo.chain.bech32_prefix);

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
    directSigner.addEncoders(toEncoders(MsgSend));
    await directSigner.signAndBroadcast(
      {
        messages: [
          {
            typeUrl: MsgSend.typeUrl,
            value: {
              fromAddress: address,
              toAddress: address2,
              amount: [token],
            },
          },
        ],
        fee,
        memo: 'send tokens test',
      },
      { deliverTx: true }
    );

    const { balance } = await queryClient.balance({ address: address2, denom });

    expect(balance!.amount).toEqual(token.amount);
    expect(balance!.denom).toEqual(denom);
  }, 10000);

  it('send ibc osmo tokens to address on cosmos chain', async () => {
    const { chainInfo: cosmosChainInfo, getRpcEndpoint: cosmosRpcEndpoint } =
      useChain('cosmos');

    // Initialize wallet address for cosmos chain
    const [cosmosAuth] = Secp256k1Auth.fromMnemonic(generateMnemonic(), [
      cosmosHdPath,
    ]);
    const cosmosAddress = defaultSignerOptions.publicKey
      .hash(
        cosmosAuth.getPublicKey(defaultSignerOptions.publicKey.isCompressed)
      )
      .toBech32(cosmosChainInfo.chain.bech32_prefix);

    const ibcInfos = chainInfo.fetcher.getChainIbcData(
      chainInfo.chain.chain_id
    );
    const ibcInfo = ibcInfos.find(
      (i) =>
        i.chain_1.chain_name === chainInfo.chain.chain_id &&
        i.chain_2.chain_name === cosmosChainInfo.chain.chain_id
    );

    expect(ibcInfo).toBeTruthy();

    const { port_id: sourcePort, channel_id: sourceChannel } =
      ibcInfo!.channels[0].chain_1;

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
    directSigner.addEncoders(toEncoders(MsgTransfer));
    const lastBlock = (await (await fetch(`${getRestEndpoint()}/cosmos/base/tendermint/v1beta1/blocks/latest`)).json()).block?.header?.height
    const resp = await directSigner.signAndBroadcast(
      {
        messages: [
          {
            typeUrl: MsgTransfer.typeUrl,
            value: MsgTransfer.fromPartial({
              sourcePort,
              sourceChannel,
              token,
              sender: address,
              receiver: cosmosAddress,
              timeoutHeight: {
                revisionNumber: BigInt(lastBlock),
                revisionHeight: BigInt(lastBlock) + 100n
              },
              // timeoutTimestamp: !lastBlock?BigInt(timeoutTime):undefined,
              memo: 'test transfer',
            }),
          },
        ],
        fee,
        memo: '',
      },
      { deliverTx: true }
    );

    assertIsDeliverTxSuccess(resp);

    await new Promise((resolve) => setTimeout(resolve, 6000));

    // Check osmos in address on cosmos chain
    const cosmosQueryClient = new RpcQuery(await cosmosRpcEndpoint());
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
