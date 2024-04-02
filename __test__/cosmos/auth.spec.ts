import { Slip10, Slip10Curve, Slip10RawIndex } from "@cosmjs/crypto";
import { fromUtf8, toBase64 } from "@interchainjs/utils";
import { getSeedFromMnemonic } from "@interchainjs/auth/utils";
import { defaultSignerConfig } from "@interchainjs/cosmos/defaults";

import { seed } from "../data";
import { auth } from "./constants";

const hash = defaultSignerConfig.message.hash;

const expected = Slip10.derivePath(
  Slip10Curve.Secp256k1,
  getSeedFromMnemonic(seed.genesis),
  [
    Slip10RawIndex.hardened(44),
    Slip10RawIndex.hardened(118),
    Slip10RawIndex.hardened(0),
    Slip10RawIndex.normal(0),
    Slip10RawIndex.normal(0),
  ]
);

describe("Test Key", () => {
  const privkey = auth.privateKey.toBase64();

  it("should match private key", () => {
    expect(privkey).toEqual(toBase64(expected.privkey));
  });
});

describe("Verify", () => {
  const msg = hash(fromUtf8("foolala"));
  const msg2 = hash(fromUtf8("foolalaa"));

  it("derive private key", () => {
    const signature = auth.sign(msg);
    expect(auth.verify(msg, signature)).toBe(true);
    expect(auth.verify(msg, auth.sign(msg2))).toBe(false);
  });
});
