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
import { MsgSend } from 'interchainjs/cosmos/bank/v1beta1/tx';

const cosmosHdPath = "m/44'/118'/0'/0/0";

describe('Token transfers', () => {
  let wallet: Secp256k1HDWallet;
  let client: CosmosQueryClient;
  let protoSigner: OfflineDirectSigner,
    denom: string,
    address: string,
    address2: string,
    address3: string,
    address4: string;
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
    // Initialize wallet with 4 accounts for testing
    wallet = await Secp256k1HDWallet.fromMnemonic(
      mnemonic,
      {
        derivations: [0, 1, 2, 3].map((i) => ({
          prefix: commonPrefix,
          hdPath: HDPath.cosmos(0, 0, i).toString(),
        }))
      }
    );
    protoSigner = await wallet.toOfflineDirectSigner();
    const accounts = await protoSigner.getAccounts();
    address = accounts[0].address;   // For direct mode test
    address2 = accounts[1].address;  // Recipient for direct mode test
    address3 = accounts[2].address;  // For amino mode test
    address4 = accounts[3].address;  // Recipient for amino mode test

    // Fund both sender addresses
    await creditFromFaucet(address);
    await creditFromFaucet(address3);
  });

  it('direct mode: send osmosis token to address', async () => {
    // Use wallet directly as it implements OfflineDirectSigner interface
    const signer: DirectSigner = new DirectSigner(protoSigner, {
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

      // Create a proper MsgSend message - use correct field names
      const msgSend = MsgSend.fromPartial({
        fromAddress: address,
        toAddress: address2,
        amount: [token]
      });

      // Create message with proper type
      const message = {
        typeUrl: '/cosmos.bank.v1beta1.MsgSend',
        value: msgSend
      };

      const result = await signer.signAndBroadcast(address, [message], fee, 'send tokens test');

      // Wait for transaction to be confirmed
      try {
        await result.wait();
      } catch (err) {
        console.log(err);
      }

      const { balance: balance2 } = await getBalance(client, { address: address2, denom });

      expect(balance2!.amount).toEqual(token.amount);
      expect(balance2!.denom).toEqual(denom);
    } catch (error) {
      console.error('Error sending tokens:', error);
      throw error;
    }
  }, 100000);

  it('amino mode: send osmosis token to address', async () => {
    // Use wallet as OfflineAminoSigner - Secp256k1HDWallet implements both interfaces
    const aminoSigner: AminoSigner = new AminoSigner(wallet, {
      queryClient: client,
      chainId: 'osmosis-1',
      addressPrefix: commonPrefix
    });

    // Add encoders and converters for MsgSend
    aminoSigner.addEncoders([MsgSend]);
    aminoSigner.addConverters([MsgSend]);

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
      // Create a proper MsgSend message - use different addresses for amino test
      const msgSend = MsgSend.fromPartial({
        fromAddress: address3,  // Use different sender address
        toAddress: address4,    // Use different recipient address
        amount: [token]
      });

      // Create message with proper type
      const message = {
        typeUrl: '/cosmos.bank.v1beta1.MsgSend',
        value: msgSend
      };

      const result = await aminoSigner.signAndBroadcast(address3, [message], fee, 'amino send tokens test');

      // Wait for transaction to be confirmed
      try {
        await result.wait();
      } catch (err) {
        console.log(err);
      }

      const { balance: balance4 } = await getBalance(client, { address: address4, denom });

      expect(balance4!.amount).toEqual(token.amount);
      expect(balance4!.denom).toEqual(denom);
    } catch (error) {
      console.error('Error sending tokens in amino mode:', error);
      throw error;
    }
  }, 100000);
});