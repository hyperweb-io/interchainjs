import { BaseCryptoBytes } from './cryptobytes';

describe('class `BaseCryptoBytes`', () => {
  it('test bigint', () => {
    expect(BaseCryptoBytes.fromBigInt(12345n).toBigInt()).toEqual(12345n);
    expect(BaseCryptoBytes.fromBigInt(888n).toBigInt()).toEqual(888n);
    expect(BaseCryptoBytes.fromBigInt(888n).toPrefixedHex()).toEqual('0x0378');
    expect(BaseCryptoBytes.fromBigInt(888n).toPrefixedHex(true)).toEqual('0x378');
  });

  it('test hex', () => {
    expect(BaseCryptoBytes.fromHex('639eab45').toHex()).toEqual('639eab45');
  });

  it('test base64', () => {
    expect(BaseCryptoBytes.fromBase64('639eab4=').toBase64()).toEqual('639eab4=');
  });

  it('test number', () => {
    expect(BaseCryptoBytes.fromNumber(1234).toNumber()).toEqual(1234);
    expect(BaseCryptoBytes.fromNumber(1234.66).toNumber()).toEqual(1234);

    enum KeyId {
      A = 1,
      B = 888,
    }
    expect(BaseCryptoBytes.fromNumber(KeyId.B).toNumber()).toEqual(KeyId.B);
    expect(BaseCryptoBytes.fromNumber(KeyId.A).toPrefixedHex()).toEqual('0x00000001');
    expect(BaseCryptoBytes.fromNumber(KeyId.B).toPrefixedHex()).toEqual('0x00000378');
    expect(BaseCryptoBytes.fromNumber(KeyId.A).toPrefixedHex(true)).toEqual('0x1');
    expect(BaseCryptoBytes.fromNumber(KeyId.B).toPrefixedHex(true)).toEqual('0x378');
  });
});
