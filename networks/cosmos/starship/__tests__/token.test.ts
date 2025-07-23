/// <reference types="@types/jest" />

import './setup.test';

import { ChainInfo } from '@chain-registry/client';
import { Asset } from '@chain-registry/types';
import { generateMnemonic } from '../src/utils';
import { CosmosQueryClient, AminoSigner, DirectSigner, HttpRpcClient, OfflineDirectSigner } from '@interchainjs/cosmos';
import { Secp256k1HDWallet } from '@interchainjs/cosmos/wallets/secp256k1hd';
import { HDPath } from '@interchainjs/types';
import { getBalance } from "@interchainjs/cosmos-types/cosmos/bank/v1beta1/query.rpc.func";
import { useChain } from 'starshipjs';
import { Comet38Adapter } from '@interchainjs/cosmos/adapters';
import { Any } from '@interchainjs/cosmos-types/google/protobuf/any';
import { MsgSend } from '@interchainjs/cosmos-types/cosmos/bank/v1beta1/tx';

const cosmosHdPath = "m/44'/118'/0'/0/0";

describe('Token transfers', () => {
  let wallet: Secp256k1HDWallet;
  let client: CosmosQueryClient;
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
    const rpcEndpoint = await getRpcEndpoint();
    const rpcClient = new HttpRpcClient(rpcEndpoint);
    const adapter = new Comet38Adapter();
    client = new CosmosQueryClient(rpcClient, adapter);
    denom = (await getCoin()).base;

    commonPrefix = chainInfo?.chain?.bech32_prefix;

    const mnemonic = generateMnemonic();
    // Initialize wallet
    wallet = await Secp256k1HDWallet.fromMnemonic(
      mnemonic,
      {
        derivations: [0, 1].map((i) => ({
          prefix: commonPrefix,
          hdPath: HDPath.cosmos(0, 0, i).toString(),
        }))
      }
    );
    protoSigner = wallet;
    const accounts = await protoSigner.getAccounts();
    address = accounts[0].address;
    address2 = accounts[1].address;

    await creditFromFaucet(address);
  });

  it('send osmosis token to address', async () => {
    // Use wallet directly as it implements OfflineDirectSigner interface
    const signer: DirectSigner = new DirectSigner(wallet, {
      queryClient: client,
      chainId: 'osmosis-1',
      addressPrefix: commonPrefix
    });

    signer.addEncoders([MsgSend]);

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

    try {
      console.log('Debug: address =', address);
      console.log('Debug: address2 =', address2);
      console.log('Debug: token =', token);
      console.log('Debug: denom =', denom);
      console.log('Debug: commonPrefix =', commonPrefix);

      // Create a proper MsgSend message - don't encode it manually
      const msgSend = MsgSend.fromPartial({
        fromAddress: address,
        toAddress: address2,
        amount: [token]
      });

      console.log('Debug: msgSend =', msgSend);

      // Create message with proper type
      const message = {
        typeUrl: '/cosmos.bank.v1beta1.MsgSend',
        value: msgSend
      };

      // Sign and broadcast the transaction
      const result = await signer.signAndBroadcast(address, [message], fee, 'send tokens test');
      console.log('Transaction result:', result);

      // Wait for transaction to be confirmed
      await result.wait();

      const { balance } = await getBalance(await getRpcEndpoint(), { address: address2, denom });

      expect(balance!.amount).toEqual(token.amount);
      expect(balance!.denom).toEqual(denom);
    } catch (error) {
      console.error('Error sending tokens:', error);
      throw error;
    }
  }, 30000);
});