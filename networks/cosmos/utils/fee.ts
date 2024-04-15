import { Price } from "@interchainjs/types";
import Decimal from "decimal.js";
import { FeeOptions } from "../types";
import { defaultFeeOptions } from "../defaults";
import feeTokensJson from "../data/fee-tokens.json";
import { toPrice } from "@interchainjs/utils";

export function getAvgGasPrice(chainId: string): Price {
  const feeToken = (feeTokensJson as any)[chainId]?.[0];
  if (typeof feeToken?.average_gas_price === "undefined") {
    throw new Error(`No average_gas_price found for chain ${chainId}`);
  }
  return {
    amount: new Decimal(feeToken.average_gas_price),
    denom: feeToken.denom,
  };
}

export function getHighGasPrice(chainId: string): Price {
  const feeToken = (feeTokensJson as any)[chainId]?.[0];
  if (typeof feeToken?.high_gas_price === "undefined") {
    throw new Error(`No high_gas_price found for chain ${chainId}`);
  }
  return {
    amount: new Decimal(feeToken.high_gas_price),
    denom: feeToken.denom,
  };
}

export function getLowGasPrice(chainId: string): Price {
  const feeToken = (feeTokensJson as any)[chainId]?.[0];
  if (typeof feeToken?.low_gas_price === "undefined") {
    throw new Error(`No low_gas_price found for chain ${chainId}`);
  }
  return {
    amount: new Decimal(feeToken.low_gas_price),
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
    case "average":
      price = getAvgGasPrice(await getChainId());
      break;
    case "high":
      price = getHighGasPrice(await getChainId());
      break;
    case "low":
      price = getLowGasPrice(await getChainId());
      break;
    default:
      price = toPrice(options?.gasPrice);
      break;
  }

  if (price.denom.length < 3 || price.denom.length > 128) {
    throw new Error("Denom must be between 3 and 128 characters");
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
