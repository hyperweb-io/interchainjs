import { SHA256 } from 'jscrypto/SHA256'
import { Word32Array } from 'jscrypto'
import * as secp256k1 from 'secp256k1'

const sha256 = (data: Uint8Array): Uint8Array => {
  return SHA256.hash(new Word32Array(data)).toUint8Array()
}

const privateKey = 'b6627188cc31f4dd3e36445e1e77fe3e1ab085f774ab264ccbc2dd767694b993'
const address = 'inj10a64save5u2rpdru50x5kvwe7uyqfmshl9vwy2'
const lcd = 'https://testnet.sentry.lcd.injective.network'
const rpc = 'https://testnet.sentry.tm.injective.network'
const chainID = 'injective-888' // network at https://testnet.sentry.lcd.injective.network/cosmos/base/tendermint/v1beta1/node_info
const msg = {
  "type": "cosmos-sdk/MsgSend",
  "value": {
    "from_address": address,
    "to_address": address,
    "amount": [
      {
        "denom" : "inj",
        "amount" : "1"
      }
    ]
  }
}
const fee = {
  amount: [
    {
      denom: 'inj',
      amount: "1000000000000000",
    },
  ],
  gas: "550000",
}

;(async ()=>{
  const account = await (await fetch(`${lcd}/cosmos/auth/v1beta1/accounts/${address}`)).json()
  const accountNumber = account.account.base_account.account_number
  const sequence = account.account.base_account.sequence

  const data = { // key must be in alphabetical order
    "account_number": accountNumber,
    "chain_id": chainID,
    "fee": fee,
    "memo": "",
    "msgs": [msg],
    "sequence": sequence
  }
  const compact_json = JSON.stringify(data) // json's white space should be removed
  const hash:Uint8Array = sha256(new Uint8Array(Buffer.from(compact_json, 'utf-8')))

  const privateKeyBuffer = Buffer.from(privateKey, 'hex')
  // console.log('privateKeyBuffer', privateKeyBuffer)

  const { signature } = secp256k1.ecdsaSign(hash, privateKeyBuffer)
  const signatureBase64 = Buffer.from(signature).toString('base64')
  // console.log('signatureBase64', signatureBase64)

  const publicKeyByte = secp256k1.publicKeyCreate(privateKeyBuffer, true)
  const publicKeyBase64 = Buffer.from(publicKeyByte).toString('base64')
  // console.log('publicKeyBase64', publicKeyBase64)

  const signatureObject = {
    "pub_key": {
      "type": "/injective.crypto.v1beta1.ethsecp256k1.PubKey",
      "value": publicKeyBase64
    },
    "signature": signatureBase64
  }

  const transaction = {
    "msg": [msg],
    "fee": fee,
    "signatures": signatureObject,
    "memo": ""
  }

  const body = JSON.stringify({ 
    "tx": transaction,
    "mode": "async" // async | sync | block
  })

  console.log('body', body)

  const response = await fetch(`${lcd}/cosmos/tx/v1beta1/txs`, { // await fetch(`${rpc}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body
  })

  console.log('response', response)

})()