import './setup.test';

import { ChainInfo } from '@chain-registry/client';
import { Asset } from '@chain-registry/types';
import { Secp256k1Auth } from '@interchainjs/auth/secp256k1';
import { defaultSignerOptions } from '@interchainjs/cosmos/defaults';
import { DirectSigner } from '@interchainjs/cosmos/signers/direct';
import {
  assertIsDeliverTxSuccess,
  toEncoders,
} from '@interchainjs/cosmos/utils';
import {
  createQueryRpc,
} from '@interchainjs/utils';
import { MsgSend } from 'interchainjs/cosmos/bank/v1beta1/tx';
import { MessageComposer } from 'interchainjs/cosmos/bank/v1beta1/tx.registry';
import { MsgTransfer } from 'interchainjs/ibc/applications/transfer/v1/tx';
import { HDPath } from '@interchainjs/types';
import { useChain } from 'starshipjs';

import { generateMnemonic } from '../src';
import { createGetAllBalances, createGetBalance } from "@interchainjs/cosmos-types/cosmos/bank/v1beta1/query.rpc.func";
import { QueryBalanceRequest, QueryBalanceResponse } from '@interchainjs/cosmos-types/cosmos/bank/v1beta1/query';

const cosmosHdPath = "m/44'/118'/0'/0/0";

describe('Token transfers', () => {
  let directSigner: DirectSigner, denom: string, address: string, address2: string;
  let chainInfo: ChainInfo,
    getCoin: () => Promise<Asset>,
    getRpcEndpoint: () => Promise<string>,
    creditFromFaucet;

  let getBalance: (request: QueryBalanceRequest) => Promise<QueryBalanceResponse>;

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain('osmosis'));
    denom = (await getCoin()).base;

    const mnemonic = generateMnemonic();
    // Initialize auth
    const [auth, auth2] = Secp256k1Auth.fromMnemonic(
      mnemonic,
      [0, 1].map((i) => HDPath.cosmos(0, 0, i).toString())
    );
    directSigner = new DirectSigner(auth, [], await getRpcEndpoint(), {
      prefix: chainInfo.chain.bech32_prefix,
    });
    const directSigner2 = new DirectSigner(auth2, [], await getRpcEndpoint(), {
      prefix: chainInfo.chain.bech32_prefix,
    });
    address = await directSigner.getAddress();
    address2 = await directSigner2.getAddress();

    // Create custom cosmos interchain client
    getBalance = createGetBalance(createQueryRpc(await getRpcEndpoint()));

    await creditFromFaucet(address);
  });

  it('send osmosis token to address', async () => {
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

    const {
      send,
      multiSend,
      setSendEnabled,
      updateParams
    } = MessageComposer.withTypeUrl;

    // Transfer uosmo tokens from faceut
    directSigner.addEncoders(toEncoders(MsgSend));
    await directSigner.signAndBroadcast(
      {
        messages: [
          MessageComposer.withTypeUrl.send(
            {
              fromAddress: address,
              toAddress: address2,
              amount: [token],
            }
          ),
        ],
        fee,
        memo: 'send tokens test',
      },
      { deliverTx: true }
    );

    const { balance } = await getBalance({ address: address2, denom });

    expect(balance!.amount).toEqual(token.amount);
    expect(balance!.denom).toEqual(denom);
  }, 10000);

  it('send ibc osmo tokens to address on cosmos chain', async () => {
    const { chainInfo: cosmosChainInfo, getRpcEndpoint: cosmosRpcEndpoint } =
      useChain('cosmoshub');

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
              timeoutHeight: undefined,
              timeoutTimestamp: BigInt(timeoutTime),
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
    const cosmosGetAllBalances = createGetAllBalances(createQueryRpc(await cosmosRpcEndpoint()));

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

