import { DirectSecp256k1Wallet } from "@cosmjs/proto-signing";
import { fromHex } from "@cosmjs/encoding";
import { getSigningInjectiveClient } from "../../codegen-injective"
import { SigningStargateClient } from "@cosmjs/stargate";
import { MsgSend, MsgBroadcasterWithPk } from '@injectivelabs/sdk-ts'
import { Network } from '@injectivelabs/networks'

import { config } from 'dotenv';
config({ path: '.env.development' });

describe("Injective Chain transfer test", () => {
  
  let client: SigningStargateClient;
  let fromAddress: string;
  const toAddress = 'inj1et085dzp9xkrzfx3c75u405u4hk8d0tyfgjxqc' // receive address should exist on chain
  const privkeyUint8Array = fromHex(process.env.TEST_PRIVATE_KEY)
  
  const rpcEndpoint = 'https://testnet.sentry.tm.injective.network'

  let fromWallet: DirectSecp256k1Wallet

  beforeAll(async () => {
    // console.log('process.env.TEST_PRIVATE_KEY', process.env.TEST_PRIVATE_KEY)
    fromWallet = await DirectSecp256k1Wallet.fromKey(privkeyUint8Array, 'inj');

    fromAddress = 'inj10a64save5u2rpdru50x5kvwe7uyqfmshl9vwy2' // (await fromWallet.getAccounts())[0].address;
    console.log('fromAddress', fromAddress)

    client = await getSigningInjectiveClient({
      rpcEndpoint,
      signer: fromWallet
    })
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
  }, 60_000);
});