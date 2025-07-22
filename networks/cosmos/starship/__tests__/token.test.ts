import './setup.test';

import { ChainInfo } from '@chain-registry/client';
import { Asset } from '@chain-registry/types';
import { generateMnemonic } from '../src/utils';
import { OfflineDirectSigner } from '@interchainjs/cosmos';
import { Secp256k1HDWallet } from '@interchainjs/cosmos/wallets/secp256k1hd';
import { HDPath } from '@interchainjs/types';
import { getBalance } from "@interchainjs/cosmos-types/cosmos/bank/v1beta1/query.rpc.func";
import { send } from "@interchainjs/cosmos-types/cosmos/bank/v1beta1/tx.rpc.func";
import { useChain } from 'starshipjs';

const cosmosHdPath = "m/44'/118'/0'/0/0";

describe('Token transfers', () => {
  let protoSigner: OfflineDirectSigner,
    denom: string,
    address: string,
    address2: string;
  let commonPrefix: string,
    chainInfo: ChainInfo,
    getCoin: () => Promise<Asset>,
    getRpcEndpoint: () => Promise<string>,
    creditFromFaucet: (address: string, denom?: string | null) => Promise<void>;

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain('osmosis'));
    denom = (await getCoin()).base;

    commonPrefix = chainInfo?.chain?.bech32_prefix;

    const mnemonic = generateMnemonic();
    // Initialize wallet
    const wallet = Secp256k1HDWallet.fromMnemonic(
      mnemonic,
      [0, 1].map((i) => ({
        prefix: commonPrefix,
        hdPath: HDPath.cosmos(0, 0, i).toString(),
      }))
    );
    protoSigner = wallet.toOfflineDirectSigner();
    const accounts = await protoSigner.getAccounts();
    address = accounts[0].address;
    address2 = accounts[1].address;

    await creditFromFaucet(address);
  });

  it('send osmosis token to address', async () => {
    const signingClient = await CosmosSigningClient.connectWithSigner(
      await getRpcEndpoint(),
      new DirectGenericOfflineSigner(protoSigner),
      {
        broadcast: {
          checkTx: true,
          deliverTx: true,
        },
      }
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
    await send(
      signingClient,
      address,
      { fromAddress: address, toAddress: address2, amount: [token] },
      fee,
      'send tokens test'
    );

    const { balance } = await getBalance(await getRpcEndpoint(), { address: address2, denom });

    expect(balance!.amount).toEqual(token.amount);
    expect(balance!.denom).toEqual(denom);
  }, 10000);
});