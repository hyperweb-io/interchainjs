import { Key } from './key';

describe('class `Key`', () => {
  it('test bigint', () => {
    expect(Key.fromBigInt(12345n).toBigInt()).toEqual(12345n);
    expect(Key.fromBigInt(888n).toBigInt()).toEqual(888n);
    expect(Key.fromBigInt(888n).toPrefixedHex()).toEqual('0x0378');
    expect(Key.fromBigInt(888n).toPrefixedHex(true)).toEqual('0x378');
  });

  it('test hex', () => {
    expect(Key.fromHex('639eab45').toHex()).toEqual('639eab45');
  });

  it('test base64', () => {
    expect(Key.fromBase64('639eab4=').toBase64()).toEqual('639eab4=');
  });

  it('test number', () => {
    expect(Key.fromNumber(1234).toNumber()).toEqual(1234);
    expect(Key.fromNumber(1234.66).toNumber()).toEqual(1234);

    enum KeyId {
      A = 1,
      B = 888,
    }
    expect(Key.fromNumber(KeyId.B).toNumber()).toEqual(KeyId.B);
    expect(Key.fromNumber(KeyId.A).toPrefixedHex()).toEqual('0x00000001');
    expect(Key.fromNumber(KeyId.B).toPrefixedHex()).toEqual('0x00000378');
    expect(Key.fromNumber(KeyId.A).toPrefixedHex(true)).toEqual('0x1');
    expect(Key.fromNumber(KeyId.B).toPrefixedHex(true)).toEqual('0x378');
  });
});
