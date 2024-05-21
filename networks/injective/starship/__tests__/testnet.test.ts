import { DirectSecp256k1Wallet } from "@cosmjs/proto-signing";
import { fromHex } from "@cosmjs/encoding";
import { getSigningInjectiveClient } from "../../codegen-injective"
import { SigningStargateClient } from "@cosmjs/stargate";
import { MsgSend, MsgBroadcasterWithPk } from '@injectivelabs/sdk-ts'
import { Network } from '@injectivelabs/networks'
import * as ethUtil from 'ethereumjs-util';

import { config } from 'dotenv';
config({ path: '.env.development' });

const { bech32 } = require('bech32')

describe("Injective Chain transfer test", () => {
  let client: SigningStargateClient;
  let fromAddress: string;
  const toAddress = 'inj1et085dzp9xkrzfx3c75u405u4hk8d0tyfgjxqc' // receive address should exist on chain
  const privkeyUint8Array = fromHex(process.env.TEST_PRIVATE_KEY)
  const rpcEndpoint = 'https://testnet.sentry.tm.injective.network'
  let signer: DirectSecp256k1Wallet
  beforeAll(async () => {
    signer = await DirectSecp256k1Wallet.fromKey(privkeyUint8Array, 'inj');

    const privateKey = Buffer.from(process.env.TEST_PRIVATE_KEY, 'hex');
    const addressBuffer = ethUtil.privateToAddress(privateKey);
    fromAddress = bech32.encode('inj', bech32.toWords(addressBuffer)) // (await fromWallet.getAccounts())[0].address is different from this
    console.log('fromAddress', fromAddress)

    client = await getSigningInjectiveClient({rpcEndpoint, signer})
  });

  test("transfer should be successful", async () => {
    const initialBalance = BigInt((await client.getBalance(toAddress, "inj")).amount);
    const sendAmount = '1';
    const msg = MsgSend.fromJSON({
      amount: [{denom: 'inj', amount: sendAmount}],
      srcInjectiveAddress: fromAddress,
      dstInjectiveAddress: toAddress,
    })
    const tx = await new MsgBroadcasterWithPk({
      privateKey: process.env.TEST_PRIVATE_KEY,
      network: Network.Testnet
    }).broadcast({
      msgs: msg
    })
    expect(tx.code).toBe(0);
    console.log('Waiting for 20s for transaction to be processed...');
    await new Promise(resolve => setTimeout(resolve, 10_000));
    const finalBalance = BigInt((await client.getBalance(toAddress, "inj")).amount);
    const increase = finalBalance - initialBalance
    expect(increase).toBe( BigInt(sendAmount) );
  }, 20_000);
});