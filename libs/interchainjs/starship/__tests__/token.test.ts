import './setup.test';

import { ChainInfo } from '@chain-registry/client';
import { Asset } from '@chain-registry/types';
import { OfflineDirectSigner } from '@interchainjs/cosmos';
import { Secp256k1HDWallet } from '@interchainjs/cosmos/wallets/secp256k1hd';
import { HDPath } from '@interchainjs/types';
import { getBalance } from "interchainjs/cosmos/bank/v1beta1/query.rpc.func";
import { send } from "interchainjs/cosmos/bank/v1beta1/tx.rpc.func";
import { generateMnemonic, useChain } from 'starshipjs';
import { getSigner, GetSignerOptions } from '../../src/interchain/core/getSigner';
import { DirectSigner } from '@interchainjs/cosmos';
import { ICosmosQueryClient, createCosmosQueryClient } from '@interchainjs/cosmos';
import { MsgSend } from 'interchainjs/cosmos/bank/v1beta1/tx';

describe('Token transfers', () => {
  let wallet: Secp256k1HDWallet;
  let client: ICosmosQueryClient;
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
    client = await createCosmosQueryClient(rpcEndpoint);

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
    protoSigner = await wallet.toOfflineDirectSigner();
    const accounts = await protoSigner.getAccounts();
    address = accounts[0].address;
    address2 = accounts[1].address;

    await creditFromFaucet(address);
  });

  it('send osmosis token to address', async () => {
    // Use getSigner function with wallet (this should now work with the fixed SignerInfoPlugin)
    const signer = getSigner<DirectSigner>(wallet, {
      preferredSignType: 'direct',
      signerOptions: {
        queryClient: client,
        chainId: 'osmosis-1',
        addressPrefix: commonPrefix
      }
    } as GetSignerOptions);

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

      const result = await send(signer, address, msgSend, fee, 'send tokens test');

      // Wait for transaction to be confirmed
      try {
        await result.wait();
      } catch (err) {
        console.log(err);
      }

      const { balance } = await getBalance(client, { address: address2, denom });

      expect(balance!.amount).toEqual(token.amount);
      expect(balance!.denom).toEqual(denom);
    } catch (error) {
      console.error('Error sending tokens:', error);
      throw error;
    }
  }, 100000);
});