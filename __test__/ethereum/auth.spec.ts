import { Wallet } from "ethers";

import { auth, hashPubKey,isPubkeyCompressed, mnemonic } from "./constants";

describe("vs. Ethers", () => {
  const hisAuth = Wallet.fromMnemonic(mnemonic);

  it("should have identical key pair", () => {
    expect(auth.privateKey.toPrefixedHex()).toEqual(hisAuth.privateKey);
    expect(auth.getPublicKey(isPubkeyCompressed).toPrefixedHex()).toEqual(
      hisAuth.publicKey
    );
  });

  it("should have identical address", () => {
    expect(
      hashPubKey(auth.getPublicKey(isPubkeyCompressed)).toPrefixedHex()
    ).toEqual(hisAuth.address.toLowerCase());
  });
});
