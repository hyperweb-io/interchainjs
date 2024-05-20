import { DirectSecp256k1Wallet } from "@cosmjs/proto-signing";
import { fromHex } from "@cosmjs/encoding";
import { getSigningInjectiveClient } from '../../codegen'

import { config } from 'dotenv';
import { SigningStargateClient } from "@cosmjs/stargate";
config({ path: '.env.development' });

describe("Injective Chain transfer test", () => {
  let client: SigningStargateClient;
  let fromAddress: string;
  const toAddress = 'inj1et085dzp9xkrzfx3c75u405u4hk8d0tyfgjxqc' // receive address should exist on chain
  const privkeyUint8Array = fromHex(process.env.TEST_PRIVATE_KEY)

  beforeAll(async () => {
    console.log('process.env.TEST_PRIVATE_KEY', process.env.TEST_PRIVATE_KEY)
    const fromWallet = await DirectSecp256k1Wallet.fromKey(privkeyUint8Array, 'inj')

    fromAddress = (await fromWallet.getAccounts())[0].address;

    client = await getSigningInjectiveClient({
      rpcEndpoint: 'https://testnet.sentry.tm.injective.network',
      signer: fromWallet
    })
  });

  test("transfer should be successful", async () => {
    const initialBalance = BigInt((await client.getBalance(toAddress, "uinj")).amount);

    const sendAmount = '1';
    const sendResult = await client.sendTokens(
      fromAddress,
      toAddress, 
      [{denom: 'inj', amount: sendAmount}],
      {amount: [{denom: 'inj', amount: '0' }], gas: '20000'}
    );

    expect(sendResult.code).toBeUndefined();

    console.log('Waiting for 20s for transaction to be processed...');
    await new Promise(resolve => setTimeout(resolve, 20_000));

    const finalBalance = BigInt((await client.getBalance(toAddress, "uinj")).amount);

    const increase = finalBalance - initialBalance;
    expect(increase).toBe(sendAmount);
  });
});