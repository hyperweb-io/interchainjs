import { chains } from '@chain-registry/v2';
import { Chain } from '@chain-registry/v2-types';
import { Price } from '@interchainjs/types';
import { toPrice } from '@interchainjs/utils';
import Decimal from 'decimal.js';

import { defaultFeeOptions } from '../defaults';
import { FeeOptions } from '../types';

export function getChainById(chainId: string): Chain {
  return chains.find((c) => c.chainId === chainId);
}

export function getPrefix(chainId: string): string {
  const prefix = getChainById(chainId)?.bech32Prefix;
  if (!prefix) {
    throw new Error(`Cannot find bech32_prefix for chain ${chainId}.`);
  }
  return prefix;
}

export function getAvgGasPrice(chainId: string): Price {
  const feeToken = getChainById(chainId)?.fees?.feeTokens?.[0];
  if (typeof feeToken?.averageGasPrice === 'undefined') {
    throw new Error(`No averageGasPrice found for chain ${chainId}`);
  }
  return {
    amount: new Decimal(feeToken.averageGasPrice),
    denom: feeToken.denom,
  };
}

export function getHighGasPrice(chainId: string): Price {
  const feeToken = getChainById(chainId)?.fees?.feeTokens?.[0];
  if (typeof feeToken?.highGasPrice === 'undefined') {
    throw new Error(`No highGasPrice found for chain ${chainId}`);
  }
  return {
    amount: new Decimal(feeToken.highGasPrice),
    denom: feeToken.denom,
  };
}

export function getLowGasPrice(chainId: string): Price {
  const feeToken = getChainById(chainId)?.fees?.feeTokens?.[0];
  if (typeof feeToken?.lowGasPrice === 'undefined') {
    throw new Error(`No lowGasPrice found for chain ${chainId}`);
  }
  return {
    amount: new Decimal(feeToken.lowGasPrice),
    denom: feeToken.denom,
  };
}

export async function calculateFee(
  gasInfo: any,
  options?: FeeOptions,
  getChainId?: () => Promise<string>
) {
  const gasLimit = new Decimal(gasInfo.gasUsed.toString())
    .mul(options?.multiplier || defaultFeeOptions.multiplier)
    .ceil();

  let price: Price;
  switch (options?.gasPrice ?? defaultFeeOptions.gasPrice) {
  case 'average':
    price = getAvgGasPrice(await getChainId());
    break;
  case 'high':
    price = getHighGasPrice(await getChainId());
    break;
  case 'low':
    price = getLowGasPrice(await getChainId());
    break;
  default:
    price = toPrice(options?.gasPrice);
    break;
  }

  if (price.denom.length < 3 || price.denom.length > 128) {
    throw new Error('Denom must be between 3 and 128 characters');
  }

  return {
    amount: [
      {
        amount: gasLimit.mul(price.amount).ceil().toString(),
        denom: price.denom,
      },
    ],
    gas: gasLimit.toString(),
  };
}
