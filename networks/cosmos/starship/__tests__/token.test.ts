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
import { getAllBalances, getBalance } from "@interchainjs/cosmos-types/cosmos/bank/v1beta1/query.rpc.func";
import { QueryBalanceRequest, QueryBalanceResponse } from '@interchainjs/cosmos-types/cosmos/bank/v1beta1/query';

const cosmosHdPath = "m/44'/118'/0'/0/0";

describe('Token transfers', () => {
  let directSigner: DirectSigner, denom: string, address: string, address2: string, ws: string;
  let chainInfo: ChainInfo,
    getCoin: () => Promise<Asset>,
    getRpcEndpoint: () => Promise<string>,
    creditFromFaucet;

  let initialBalance: string = "0"; // Track initial balance before each test

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain('osmosis'));
    denom = (await getCoin()).base;
    ws = `${chainInfo.chain.apis.rpc[0].address.replace('http', 'ws')}/websocket`;

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

    await creditFromFaucet(address);
  });

  it('monitor osmosis token transfer via WebSocket', async () => {
    // Setup WebSocket connection to listen for events
    const WebSocket = require('ws');
    const wsClient = new WebSocket(ws);

    // Create a promise that will be resolved when we receive a transaction event
    const txEventPromise = new Promise<any>((resolve) => {
      wsClient.on('open', () => {
        // Subscribe to Tx events
        const subscribeMsg = {
          jsonrpc: '2.0',
          id: 'subscribe-tx',
          method: 'subscribe',
          params: {
            query: "tm.event='Tx' AND transfer.recipient='" + address2 + "'"
          }
        };
        wsClient.send(JSON.stringify(subscribeMsg));
      });

      wsClient.on('message', (data: any) => {
        const response = JSON.parse(data.toString());
        if (response.result && response.result.events) {
          resolve(response);
        }
      });

      wsClient.on('error', (err: any) => {
        console.error('WebSocket error:', err);
      });
    });

    // Setup fees and token for the transaction
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
      amount: '5000000', // Different amount to distinguish from other tests
      denom,
    };

    // Wait a bit to ensure WebSocket connection is established
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Send the transaction
    directSigner.addEncoders(toEncoders(MsgSend));
    const txResult = await directSigner.signAndBroadcast(
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
        memo: 'websocket test transaction',
      },
      { deliverTx: true }
    );

    // Wait for the WebSocket event (with a timeout)
    const txEvent = await Promise.race([
      txEventPromise,
      new Promise<null>((resolve) => setTimeout(() => resolve(null), 10000))
    ]);

    // Close WebSocket connection
    wsClient.close();

    // Verify WebSocket event was received
    expect(txEvent).not.toBeNull();
    expect(txEvent.result.events).toBeDefined();

    // Verify transfer details in the event
    if (txEvent && txEvent.result && txEvent.result.events) {
      // Extract transfer details - structure depends on the chain's event format
      // This might need adjustment based on the actual event structure
      if (txEvent.result.events.transfer) {
        const transferEvent = txEvent.result.events.transfer;

        // Check for amount in the event (format might vary)
        if (transferEvent.amount) {
          // The transfer amount might be in format like "5000000uosmo"
          const amountMatch = transferEvent.amount.match(/(\d+)(.+)/);
          if (amountMatch) {
            const [_, amount, eventDenom] = amountMatch;
            expect(amount).toEqual(token.amount);
          }
        }

        // Verify recipient
        if (transferEvent.recipient) {
          expect(transferEvent.recipient).toEqual(address2);
        }
      }
    }

    // Also verify through direct query
    const { balance } = await getBalance(await getRpcEndpoint(), { address: address2, denom });

    // Calculate the expected final balance
    const expectedBalance = (BigInt(initialBalance) + BigInt(token.amount)).toString();

    expect(balance!.amount).toEqual(expectedBalance);
  }, 20000);

  it('send osmosis token to address', async () => {
    // Get initial balance
    const initialBalanceResponse = await getBalance(await getRpcEndpoint(), { address: address2, denom });
    const initialAmount = initialBalanceResponse.balance?.amount || "0";

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
    directSigner.addEncoders([MsgSend]);
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

    const { balance } = await getBalance(await getRpcEndpoint(), { address: address2, denom });

    // Calculate expected balance (initial + transferred amount)
    const expectedBalance = (BigInt(initialAmount) + BigInt(token.amount)).toString();

    expect(balance!.amount).toEqual(expectedBalance);
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
    const { balances } = await getAllBalances(await cosmosRpcEndpoint(), {
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

