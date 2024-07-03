import { MsgSend, MsgBroadcasterWithPk } from '@injectivelabs/sdk-ts'
import { Network } from '@injectivelabs/networks'

const privateKey = 'b6627188cc31f4dd3e36445e1e77fe3e1ab085f774ab264ccbc2dd767694b993'
const injectiveAddress = 'inj10a64save5u2rpdru50x5kvwe7uyqfmshl9vwy2'
const amount = {
  denom: 'inj',
  amount: '1',
}
const msg = MsgSend.fromJSON({
  amount,
  srcInjectiveAddress: injectiveAddress,
  dstInjectiveAddress: injectiveAddress,
});
console.log('msg', msg)

;(async ()=>{
  const txResponse = await new MsgBroadcasterWithPk({
    privateKey,
    network: Network.Testnet
  }).broadcast({
    msgs: msg,
    // memo: ''
  })
  console.log('txResponse', txResponse)
})()