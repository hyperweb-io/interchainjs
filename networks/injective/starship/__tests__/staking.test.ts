/// <reference types="@types/jest" />

import './setup.test';

import { Asset } from '@chain-registry/types';
import { DirectSigner, AminoSigner } from '@interchainjs/cosmos';
import { toEncoders, toConverters } from '@interchainjs/cosmos/utils';
import {
  sleep,
} from '@interchainjs/utils';

import { CosmosQueryClient, HttpRpcClient } from '@interchainjs/cosmos';
import { Comet38Adapter } from '@interchainjs/cosmos/adapters';
import {
  BondStatus,
  bondStatusToJSON,
} from 'interchainjs/cosmos/staking/v1beta1/staking';
import { MsgDelegate } from 'interchainjs/cosmos/staking/v1beta1/tx';
import { BigNumber } from 'bignumber.js'; // Using `fromWallet` to construct Signer
import { useChain } from 'starshipjs';

import { EthSecp256k1HDWallet } from '../../src/wallets/ethSecp256k1hd';
import { createInjectiveSignerConfig, DEFAULT_INJECTIVE_SIGNER_CONFIG } from '../../src/signers/config';
import { getBalance } from "@interchainjs/cosmos-types/cosmos/bank/v1beta1/query.rpc.func";
import { getValidators, getDelegation } from "@interchainjs/cosmos-types/cosmos/staking/v1beta1/query.rpc.func";
import { delegate } from "interchainjs/cosmos/staking/v1beta1/tx.rpc.func";
import * as bip39 from 'bip39';


describe('Staking tokens testing', () => {
  let directSigner: DirectSigner, aminoSigner: AminoSigner, denom: string, address: string;
  let wallet: EthSecp256k1HDWallet;
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
    injRpcEndpoint = await getRpcEndpoint();

    const mnemonic = bip39.generateMnemonic();

    // Use EthSecp256k1HDWallet with Ethereum HD path for Injective compatibility
    wallet = await EthSecp256k1HDWallet.fromMnemonic(mnemonic, {
      derivations: [{
        prefix: 'inj',
        hdPath: "m/44'/60'/0'/0/0", // Ethereum-style HD path for Injective
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
    let actualChainId = 'injective-1'; // default fallback
    try {
      const status = await queryClient.getStatus();
      actualChainId = status.nodeInfo.network;
    } catch (e) {
      console.log('Could not get chainId, using default:', actualChainId);
    }

    const baseSignerConfig = {
      queryClient: queryClientWrapper,
      chainId: actualChainId,
      addressPrefix: 'inj'
    };



    // Merge with DEFAULT_INJECTIVE_SIGNER_CONFIG for complete configuration
    // Override signature format to use compact format for compatibility
    const signerConfig = createInjectiveSignerConfig({
      ...DEFAULT_INJECTIVE_SIGNER_CONFIG,
      ...baseSignerConfig
    });



    directSigner = new DirectSigner(offlineSigner, signerConfig);
    directSigner.addEncoders(toEncoders(MsgDelegate));

    // Also create amino signer as backup
    aminoSigner = new AminoSigner(offlineSigner, signerConfig);
    aminoSigner.addEncoders(toEncoders(MsgDelegate));
    aminoSigner.addConverters(toConverters(MsgDelegate));
    const addresses = await offlineSigner.getAccounts();
    address = addresses[0].address;



    // Transfer tokens to address
    await creditFromFaucet(address);
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


    const result = await delegate(
      directSigner,
      address,
      msgDelegate,
      fee,
      'Stake tokens to genesis validator'
    );
    await result.wait();

    // Verify the delegation was successful by checking the delegation amount
    const { delegationResponse } = await getDelegation(queryClient, {
      delegatorAddr: address,
      validatorAddr: validatorAddress,
    });



    // Check that delegation exists and has a reasonable amount
    expect(delegationResponse?.balance?.amount).toBeDefined();
    expect(BigInt(delegationResponse!.balance.amount)).toBeGreaterThan(BigInt(0));
    expect(delegationResponse!.balance.denom).toEqual(denom);

    // The delegation amount should be at least what we just delegated
    // (it might be more if there were previous delegations from other test runs)
    const expectedAmount = BigInt(delegationAmount);
    const actualAmount = BigInt(delegationResponse!.balance.amount);
    expect(actualAmount).toBeGreaterThanOrEqual(expectedAmount);
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

    // Assert that the delegation amount is reasonable

    // Check that delegation exists and has a reasonable amount
    expect(BigInt(delegationResponse!.balance.amount)).toBeGreaterThan(BigInt(0));
    expect(delegationResponse!.balance.denom).toEqual(denom);

    // The delegation amount should be at least what we just delegated
    // (it might be more if there were previous delegations from other test runs)
    const expectedAmount = BigInt(delegationAmount);
    const actualAmount = BigInt(delegationResponse!.balance.amount);
    expect(actualAmount).toBeGreaterThanOrEqual(expectedAmount);
  });
});
