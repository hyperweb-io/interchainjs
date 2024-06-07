import { Price } from "@interchainjs/types";
import Decimal from "decimal.js";

/**
 *
 * @param price formatted as `<amount><denom>`
 */
export function toPrice(price: string | Price): Price {
  if (typeof price === "string") {
    const matchResult = price.match(/^([0-9.]+)([a-z][a-z0-9]*)$/i);
    if (!matchResult) {
      throw new Error(
        "Invalid price string. Please check if the format is `<amount><denom>`"
      );
    }
    const [, amount, denom] = matchResult;

    return {
      amount: new Decimal(amount),
      denom,
    };
  }
  return price;
}
