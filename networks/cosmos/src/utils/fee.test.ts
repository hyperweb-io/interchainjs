import Decimal from 'decimal.js';
import { GasPrice, calculateFee } from './fee';

describe('GasPrice', () => {
  test('fromString parses valid gas price', () => {
    const gp = GasPrice.fromString('0.025uatom');
    expect(gp.denom).toBe('uatom');
    expect(gp.amount.equals(new Decimal('0.025'))).toBe(true);
  });

  test('toString roundtrips', () => {
    const gp = GasPrice.fromString('0.0125uosmo');
    expect(gp.toString()).toBe('0.0125uosmo');
  });

  test('invalid string throws', () => {
    expect(() => GasPrice.fromString('abc')).toThrow('Invalid gas price string');
    expect(() => GasPrice.fromString('0.1')).toThrow('Invalid gas price string');
    expect(() => GasPrice.fromString('0.1_foo')).toThrow('Invalid gas price string');
  });
});

describe('calculateFee', () => {
  test('works with number gasLimit', () => {
    const fee = calculateFee(200000, '0.025uatom');
    expect(fee.gas).toBe('200000');
    expect(fee.amount).toEqual([{ denom: 'uatom', amount: '5000' }]);
  });

  test('works with bigint gasLimit', () => {
    const fee = calculateFee(3n, '0.4ufoo');
    expect(fee.gas).toBe('3');
    expect(fee.amount).toEqual([{ denom: 'ufoo', amount: '2' }]); // ceil(1.2) = 2
  });

  test('rounds up small fractional result to 1', () => {
    const fee = calculateFee(3, '0.0001utest');
    expect(fee.amount).toEqual([{ denom: 'utest', amount: '1' }]);
  });
});

