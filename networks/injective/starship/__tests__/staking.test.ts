/// <reference types="@types/jest" />

import './setup.test';

import { Asset } from '@chain-registry/types';
import { DirectSigner, AminoSigner } from '@interchainjs/cosmos';
import { toEncoders, toConverters } from '@interchainjs/cosmos/utils';
import {
  sleep,
} from '@interchainjs/utils';
import { HDPath } from '@interchainjs/types';
import { CosmosQueryClient, HttpRpcClient } from '@interchainjs/cosmos';
import { Comet38Adapter } from '@interchainjs/cosmos/adapters';
import {
  BondStatus,
  bondStatusToJSON,
} from 'interchainjs/cosmos/staking/v1beta1/staking';
import { MsgDelegate } from 'interchainjs/cosmos/staking/v1beta1/tx';
import { BigNumber } from 'bignumber.js'; // Using `fromWallet` to construct Signer
import { useChain } from 'starshipjs';

import { generateMnemonic } from '../src';
import { Secp256k1HDWallet } from '@interchainjs/cosmos/wallets/secp256k1hd';
import { createInjectiveSignerConfig } from '../../src/signers/config';
import { getBalance } from "@interchainjs/cosmos-types/cosmos/bank/v1beta1/query.rpc.func";
import { getValidators, getDelegation } from "@interchainjs/cosmos-types/cosmos/staking/v1beta1/query.rpc.func";

describe('Staking tokens testing', () => {
  let directSigner: DirectSigner, aminoSigner: AminoSigner, denom: string, address: string;
  let wallet: Secp256k1HDWallet;
  let getCoin: () => Promise<Asset>,
    getRpcEndpoint: () => Promise<string>,
    creditFromFaucet;
  let injRpcEndpoint: string;

  // Variables used accross testcases
  let validatorAddress: string;
  let delegationAmount: string;

  beforeAll(async () => {
    ({ getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain('injective'));
    denom = (await getCoin()).base;

    const mnemonic = generateMnemonic();
    injRpcEndpoint = await getRpcEndpoint();

    // Use standard Cosmos wallet for compatibility with Injective testnet in Starship
    // The testnet expects standard Cosmos addresses, not Ethereum-style addresses
    wallet = await Secp256k1HDWallet.fromMnemonic(mnemonic, {
      derivations: [{
        prefix: 'inj',
        hdPath: HDPath.cosmos().toString(), // Use cosmos HD path for compatibility
      }]
    });
    const offlineSigner = await wallet.toOfflineDirectSigner();

    // Create query client for signer configuration
    const rpcClient = new HttpRpcClient(injRpcEndpoint);
    const protocolAdapter = new Comet38Adapter();
    const queryClient = new CosmosQueryClient(rpcClient, protocolAdapter);
    // Query client is properly configured with all required methods

    // Create a wrapper to ensure methods are available as own properties
    const queryClientWrapper = Object.create(queryClient);
    queryClientWrapper.getBaseAccount = queryClient.getBaseAccount.bind(queryClient);
    queryClientWrapper.broadcastTxCommit = queryClient.broadcastTxCommit.bind(queryClient);
    queryClientWrapper.broadcastTxSync = queryClient.broadcastTxSync.bind(queryClient);
    queryClientWrapper.broadcastTxAsync = queryClient.broadcastTxAsync.bind(queryClient);
    queryClientWrapper.getTx = queryClient.getTx.bind(queryClient);

    // Use Injective-specific signer configuration with proper defaults
    const baseSignerConfig = {
      queryClient: queryClientWrapper,
      chainId: 'injective-1',
      addressPrefix: 'inj'
    };

    const signerConfig = createInjectiveSignerConfig(baseSignerConfig);

    directSigner = new DirectSigner(offlineSigner, signerConfig);
    directSigner.addEncoders(toEncoders(MsgDelegate));

    // Also create amino signer as backup
    aminoSigner = new AminoSigner(offlineSigner, signerConfig);
    aminoSigner.addEncoders(toEncoders(MsgDelegate));
    aminoSigner.addConverters(toConverters(MsgDelegate));
    const addresses = await offlineSigner.getAccounts();
    address = addresses[0].address;

    // Transfer osmosis and ibc tokens to address, send only osmo to address (multiple times to ensure sufficient balance)
    for (let i = 0; i < 10; i++) {
      await creditFromFaucet(address);
    }
    await sleep(5000);
  }, 200000);

  it('check address has tokens', async () => {
    // Create query client for balance check
    const rpcClient = new HttpRpcClient(injRpcEndpoint);
    const protocolAdapter = new Comet38Adapter();
    const queryClient = new CosmosQueryClient(rpcClient, protocolAdapter);

    const { balance } = await getBalance(queryClient, {
      address,
      denom,
    });

    expect(parseInt(balance!.amount)).toBeGreaterThan(0);
    // We'll check if balance is sufficient for delegation in the staking test
  }, 10000);

  it('query validator address', async () => {
    const { validators } = await getValidators(injRpcEndpoint, {
      status: bondStatusToJSON(BondStatus.BOND_STATUS_BONDED),
    });
    let allValidators = validators;
    if (validators.length > 1) {
      allValidators = validators.sort((a, b) =>
        new BigNumber(b.tokens).minus(new BigNumber(a.tokens)).toNumber()
      );
    }

    expect(allValidators.length).toBeGreaterThan(0);

    // set validator address to the first one
    validatorAddress = allValidators[0].operatorAddress;
  });

  it('stake tokens to genesis validator', async () => {
    // Create query client for validator query
    const rpcClient = new HttpRpcClient(injRpcEndpoint);
    const protocolAdapter = new Comet38Adapter();
    const queryClient = new CosmosQueryClient(rpcClient, protocolAdapter);

    // First get the validator address
    const { validators } = await getValidators(queryClient, {
      status: bondStatusToJSON(BondStatus.BOND_STATUS_BONDED),
    });
    let allValidators = validators;
    if (validators.length > 1) {
      allValidators = validators.sort((a, b) =>
        new BigNumber(b.tokens).minus(new BigNumber(a.tokens)).toNumber()
      );
    }

    expect(allValidators.length).toBeGreaterThan(0);
    validatorAddress = allValidators[0].operatorAddress;

    const { balance } = await getBalance(queryClient, {
      address,
      denom,
    });

    // Stake half of the tokens
    // eslint-disable-next-line no-undef
    delegationAmount = (BigInt(balance!.amount) / BigInt(2)).toString();
    const msgDelegate = MsgDelegate.fromPartial({
      delegatorAddress: address,
      validatorAddress: validatorAddress,
      amount: {
        amount: delegationAmount,
        denom: balance!.denom,
      },
    });

    const fee = {
      amount: [
        {
          denom,
          amount: '100000',
        },
      ],
      gas: '550000',
    };

    const result = await directSigner.signAndBroadcast(
      {
        messages: [
          {
            typeUrl: MsgDelegate.typeUrl,
            value: msgDelegate,
          },
        ],
        fee,
        memo: 'Stake tokens to genesis validator',
        options: {
          signerAddress: address,
        },
      },
      {
        mode: 'commit',
      }
    );
    await result.wait();

    // Verify the delegation was successful by checking the delegation amount
    const { delegationResponse } = await getDelegation(queryClient, {
      delegatorAddr: address,
      validatorAddr: validatorAddress,
    });

    expect(delegationResponse?.balance?.amount).toEqual(delegationAmount);
  });

  it('query delegation', async () => {
    // Create query client for delegation query
    const rpcClient = new HttpRpcClient(injRpcEndpoint);
    const protocolAdapter = new Comet38Adapter();
    const queryClient = new CosmosQueryClient(rpcClient, protocolAdapter);

    const { delegationResponse } = await getDelegation(queryClient, {
      delegatorAddr: address,
      validatorAddr: validatorAddress,
    });

    // Assert that the delegation amount is the set delegation amount
    // eslint-disable-next-line no-undef
    expect(BigInt(delegationResponse!.balance.amount)).toBeGreaterThan(
      BigInt(0)
    );
    expect(delegationResponse!.balance.amount).toEqual(delegationAmount);
    expect(delegationResponse!.balance.denom).toEqual(denom);
  });
});
