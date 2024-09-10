import Decimal from 'decimal.js';

export const isNumber = (number: string | number) => {
  if (typeof number === 'number') {
    return true;
  }

  return !isNaN(parseFloat(number));
};

export const numberToCosmosSdkDecString = (value: string | number): string => {
  return new Decimal(value).toFixed(18);
};
