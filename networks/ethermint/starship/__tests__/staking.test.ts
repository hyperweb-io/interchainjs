// Using `fromWallet` to construct Signer
import './setup.test';

import { ChainInfo } from '@chain-registry/client';
import { Secp256k1Auth } from '@interchainjs/auth/secp256k1';
import {
  assertIsDeliverTxSuccess,
  toEncoders,
} from '@interchainjs/cosmos/utils';
import {
  BondStatus,
  bondStatusToJSON,
} from '@interchainjs/cosmos-types/cosmos/staking/v1beta1/staking';
import { MsgDelegate } from '@interchainjs/cosmos-types/cosmos/staking/v1beta1/tx';
import { DirectSigner } from '@interchainjs/injective/direct';
import BigNumber from 'bignumber.js';
import { RpcQuery } from 'interchainjs/query/rpc';
import { useChain } from 'starshipjs';

import { generateMnemonic } from '../src';
import {Asset} from "@chain-registry/types";

describe('Staking tokens testing', () => {
  let directSigner: DirectSigner, denom: string, address: string;
  let chainInfo: ChainInfo,
    getCoin: () => Promise<Asset>,
    getRpcEndpoint: () => Promise<string>,
    creditFromFaucet;

  // Variables used accross testcases
  let queryClient: RpcQuery;
  let validatorAddress: string;
  let delegationAmount: string;

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain('injective'));
    denom = (await getCoin()).base;

    const mnemonic = generateMnemonic();
    // Initialize auth
    const auth = Secp256k1Auth.fromMnemonic(mnemonic);
    directSigner = new DirectSigner(
      auth,
      toEncoders(MsgDelegate),
      await getRpcEndpoint(),
      {
        prefix: chainInfo.chain.bech32_prefix,
      }
    );
    address = await directSigner.getAddress();

    // Create custom cosmos interchain client
    queryClient = new RpcQuery(await getRpcEndpoint());

    // Transfer injective and ibc tokens to address, send only osmo to address
    await creditFromFaucet(address);
  }, 200000);

  it('check address has tokens', async () => {
    const { balance } = await queryClient.balance({
      address,
      denom,
    });

    expect(balance!.amount).toEqual('10000000000');
  }, 10000);

  it('query validator address', async () => {
    const { validators } = await queryClient.validators({
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
    const { balance } = await queryClient.balance({
      address,
      denom,
    });

    // Stake half of the tokens
    // eslint-disable-next-line no-undef
    delegationAmount = (BigInt(balance!.amount) / BigInt(2)).toString();
    const msg = {
      typeUrl: MsgDelegate.typeUrl,
      value: MsgDelegate.fromPartial({
        delegatorAddress: address,
        validatorAddress: validatorAddress,
        amount: {
          amount: delegationAmount,
          denom: balance!.denom,
        },
      }),
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

    const result = await directSigner.signAndBroadcast(
      { messages: [msg], fee, memo: '' },
      {
        deliverTx: true,
      }
    );
    assertIsDeliverTxSuccess(result);
  });

  it('query delegation', async () => {
    const { delegationResponse } = await queryClient.delegation({
      delegatorAddr: address,
      validatorAddr: validatorAddress,
    });

    // Assert that the delegation amount is the set delegation amount
    // eslint-disable-next-line no-undef
    expect(BigInt(delegationResponse!.balance.amount)).toBeGreaterThan(
      // eslint-disable-next-line no-undef
      BigInt(0)
    );
    expect(delegationResponse!.balance.amount).toEqual(delegationAmount);
    expect(delegationResponse!.balance.denom).toEqual(denom);
  });
});
