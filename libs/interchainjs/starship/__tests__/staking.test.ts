/// <reference types="@types/jest" />

import './setup.test';

import { ChainInfo } from '@chain-registry/client';
import { Asset } from '@chain-registry/types';
import { generateMnemonic } from '../src/utils';
import { assertIsDeliverTxSuccess } from '@interchainjs/cosmos/utils';
import { DirectGenericOfflineSigner, OfflineDirectSigner } from '@interchainjs/cosmos/types/wallet';
import { Secp256k1HDWallet } from '@interchainjs/cosmos/wallets/secp256k1hd';
import {
  BondStatus,
  bondStatusToJSON,
} from 'interchainjs/cosmos/staking/v1beta1/staking';
import { MsgDelegate } from 'interchainjs/cosmos/staking/v1beta1/tx';
import BigNumber from 'bignumber.js';
import { SigningClient as CosmosSigningClient } from '@interchainjs/cosmos/signing-client';
import { useChain } from 'starshipjs';
import { SIGN_MODE } from '@interchainjs/types';

import { getBalance } from "@interchainjs/cosmos-types/cosmos/bank/v1beta1/query.rpc.func";
import { getValidators, getDelegation } from "@interchainjs/cosmos-types/cosmos/staking/v1beta1/query.rpc.func";

import { QueryBalanceRequest, QueryBalanceResponse } from '@interchainjs/cosmos-types/cosmos/bank/v1beta1/query';
import { QueryDelegationRequest, QueryDelegationResponse, QueryValidatorsRequest, QueryValidatorsResponse } from '@interchainjs/cosmos-types/cosmos/staking/v1beta1/query';
import { delegate } from 'interchainjs/cosmos/staking/v1beta1/tx.rpc.func';

const cosmosHdPath = "m/44'/118'/0'/0/0";

describe('Staking tokens testing', () => {
  let wallet: Secp256k1HDWallet, protoSigner: OfflineDirectSigner, denom: string, address: string;
  let commonPrefix: string,
    chainInfo: ChainInfo,
    getCoin: () => Promise<Asset>,
    getRpcEndpoint: () => Promise<string>,
    creditFromFaucet: (address: string, denom?: string | null) => Promise<void>;

  // Variables used accross testcases
  let validatorAddress: string;
  let delegationAmount: string;
  let totalDelegationAmount: bigint;

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain('osmosis'));
    denom = (await getCoin()).base;

    commonPrefix = chainInfo?.chain?.bech32_prefix;

    const mnemonic = generateMnemonic();
    // Initialize wallet
    wallet = Secp256k1HDWallet.fromMnemonic(mnemonic, [
      {
        prefix: commonPrefix,
        hdPath: cosmosHdPath,
      },
    ]);
    protoSigner = wallet.toOfflineDirectSigner();
    address = (await protoSigner.getAccounts())[0].address;

    // Transfer osmosis and ibc tokens to address, send only osmo to address
    await creditFromFaucet(address);
  }, 200000);

  it('check address has tokens', async () => {
    const { balance } = await getBalance(await getRpcEndpoint(), {
      address,
      denom,
    });

    expect(balance!.amount).toEqual('10000000000');
  }, 10000);

  it('query validator address', async () => {
    const { validators } = await getValidators(await getRpcEndpoint(), {
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

  it('stake tokens to genesis validator default signing mode', async () => {
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

    const { balance } = await getBalance(await getRpcEndpoint(), {
      address,
      denom,
    });

    // Stake half of the tokens
    // eslint-disable-next-line no-undef
    delegationAmount = (BigInt(balance!.amount) / BigInt(10)).toString();
    totalDelegationAmount = BigInt(delegationAmount);
    const msg = {
      delegatorAddress: address,
      validatorAddress: validatorAddress,
      amount: {
        amount: delegationAmount,
        denom: balance!.denom,
      },
    };

    const fee = {
      amount: [
        {
          denom,
          amount: '100000',
        },
      ],
      gas: '550000',
    };

    const result = await delegate(signingClient, address, msg, fee, "Stake tokens to genesis validator");
    assertIsDeliverTxSuccess(result);
  });

  it('stake tokens to genesis validator direct signing mode', async () => {
    const signingClient = await CosmosSigningClient.connectWithSigner(
      await getRpcEndpoint(),
      wallet.toGenericOfflineSigner(SIGN_MODE.DIRECT),
      {
        broadcast: {
          checkTx: true,
          deliverTx: true,
        },
      }
    );

    const { balance } = await getBalance(await getRpcEndpoint(), {
      address,
      denom,
    });

    // Stake half of the tokens
    // eslint-disable-next-line no-undef
    delegationAmount = (BigInt(balance!.amount) / BigInt(10)).toString();
    totalDelegationAmount = totalDelegationAmount + BigInt(delegationAmount);
    const msg = {
      delegatorAddress: address,
      validatorAddress: validatorAddress,
      amount: {
        amount: delegationAmount,
        denom: balance!.denom,
      },
    };

    const fee = {
      amount: [
        {
          denom,
          amount: '100000',
        },
      ],
      gas: '550000',
    };

    const result = await delegate(signingClient, address, msg, fee, "Stake tokens to genesis validator");
    assertIsDeliverTxSuccess(result);
  });

  it('stake tokens to genesis validator amino signing mode', async () => {
    const signingClient = await CosmosSigningClient.connectWithSigner(
      await getRpcEndpoint(),
      wallet.toGenericOfflineSigner(SIGN_MODE.AMINO),
      {
        broadcast: {
          checkTx: true,
          deliverTx: true,
        },
      }
    );

    const { balance } = await getBalance(await getRpcEndpoint(), {
      address,
      denom,
    });

    // Stake half of the tokens
    // eslint-disable-next-line no-undef
    delegationAmount = (BigInt(balance!.amount) / BigInt(10)).toString();
    totalDelegationAmount = totalDelegationAmount + BigInt(delegationAmount);
    const msg = {
      delegatorAddress: address,
      validatorAddress: validatorAddress,
      amount: {
        amount: delegationAmount,
        denom: balance!.denom,
      },
    };

    const fee = {
      amount: [
        {
          denom,
          amount: '100000',
        },
      ],
      gas: '550000',
    };

    const result = await delegate(signingClient, address, msg, fee, "Stake tokens to genesis validator");
    assertIsDeliverTxSuccess(result);
  });

  it('query delegation', async () => {
    const { delegationResponse } = await getDelegation(await getRpcEndpoint(), {
      delegatorAddr: address,
      validatorAddr: validatorAddress,
    });

    // Assert that the delegation amount is the set delegation amount
    // eslint-disable-next-line no-undef
    expect(BigInt(delegationResponse!.balance.amount)).toBeGreaterThan(
      BigInt(0)
    );
    expect(delegationResponse!.balance.amount).toEqual(totalDelegationAmount.toString());
    expect(delegationResponse!.balance.denom).toEqual(denom);
  });
});