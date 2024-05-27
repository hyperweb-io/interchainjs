import { DirectSecp256k1Wallet, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { fromHex } from "@cosmjs/encoding";
import { getSigningInjectiveClient } from "../../codegen-injective"
import { SigningStargateClient } from "@cosmjs/stargate";
import * as ethUtil from 'ethereumjs-util';

import { DirectSigner } from "@interchainjs/cosmos/direct";  
import { MsgSend } from "@interchainjs/cosmos-types/cosmos/bank/v1beta1/tx";
import {
  toEncoders,
} from "@interchainjs/cosmos/utils";
import { Secp256k1Auth } from "@interchainjs/auth/secp256k1";

import {stringToPath} from '@cosmjs/crypto'

import { config } from 'dotenv';
import { Key } from "@interchainjs/utils";
config({ path: '.env.development' });

const { bech32 } = require('bech32')

describe("Injective Chain transfer test", () => {
  let directSigner: DirectSigner
  let addrFromDirectSigner: string

  let client: SigningStargateClient;
  let fromAddress: string;
  const toAddress = 'inj1et085dzp9xkrzfx3c75u405u4hk8d0tyfgjxqc' // receive address should exist on chain
  const privkeyUint8Array = fromHex(process.env.TEST_PRIVATE_KEY)
  const rpcEndpoint = 'https://testnet.sentry.tm.injective.network'
  let signer: DirectSecp256k1Wallet
  beforeAll(async () => {
    const auth = Secp256k1Auth.fromPrivateKey(
      new Key(privkeyUint8Array), 
      'ethereum' // etherum and injective will get the same result // "m/44'/60'/0'/0/0",
    )

    directSigner = new DirectSigner(
      auth, 
      [], 
      rpcEndpoint, 
      {
        prefix: 'inj',
      }
    );
    addrFromDirectSigner = await directSigner.getAddress();


    signer = await DirectSecp256k1Wallet.fromKey(privkeyUint8Array, 'inj');

    const signerFromDirectSecp256k1HdWallet = await DirectSecp256k1HdWallet.fromMnemonic(
      process.env.TEST_MNEMONIC,
      {
        hdPaths: [stringToPath("m/44'/60'/0'/0/0")],
        prefix: 'inj'
      }
    )
    signerFromDirectSecp256k1HdWallet.getAccounts().then(accounts=>{
      console.log('signerFromDirectSecp256k1HdWallet', accounts)
    })

    const privateKey = Buffer.from(process.env.TEST_PRIVATE_KEY, 'hex');
    const addressBuffer = ethUtil.privateToAddress(privateKey);
    fromAddress = bech32.encode('inj', bech32.toWords(addressBuffer)) // (await fromWallet.getAccounts())[0].address is different from this
    console.log({addrFromDirectSigner, fromAddress})

    client = await getSigningInjectiveClient({rpcEndpoint, signer})

    signer.getAccounts().then(accounts=>{
      console.log('signer.getAccounts', accounts)
    })
  });

  test("transfer should be successful", async () => {
    const initialBalance = BigInt((await client.getBalance(toAddress, "inj")).amount);
    const sendAmount = '1';

    const fee = {
      amount: [
        {
          denom: 'inj',
          amount: "100000",
        },
      ],
      gas: "550000",
    };

    directSigner.addEncoders(toEncoders(MsgSend));

    const tx = await directSigner.signAndBroadcast(
      [
        {
          typeUrl: MsgSend.typeUrl,
          value: { fromAddress, toAddress, amount: [{denom: 'inj', amount: sendAmount}] },
        },
      ],
      fee,
      "send tokens test",
      { deliverTx: true }
    );

    expect(tx.deliver_tx.code).toBe(0);

    console.log('Waiting for 20s for transaction to be processed...');
    await new Promise(resolve => setTimeout(resolve, 10_000));
    const finalBalance = BigInt((await client.getBalance(toAddress, "inj")).amount);
    const increase = finalBalance - initialBalance
    expect(increase).toBe( BigInt(sendAmount) );
  }, 20_000);
});