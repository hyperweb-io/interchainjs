import { getEthereumAddress,PrivateKey } from "@injectivelabs/sdk-ts";
import { getAccountFromAuth } from "@interchainjs/injective/utils";

import { chain } from "../data";
import { auth, hashPubKey,isPubKeyCompressed, mnemonic } from "./constants";
import { address } from "./data";

describe("vs. Injectivelabs", () => {
  const hisAuth = PrivateKey.fromMnemonic(mnemonic);

  it("should get identical key results", () => {
    expect(auth.privateKey.toPrefixedHex()).toEqual(hisAuth.toPrivateKeyHex());
    expect(auth.getPublicKey(isPubKeyCompressed).toHex()).toEqual(
      hisAuth.toPublicKey().toHex()
    );
  });

  it("should get identical address results", () => {
    const hisAddress = hisAuth.toAddress();
    const myPubKey = auth.getPublicKey(isPubKeyCompressed);
    expect(hashPubKey(myPubKey).toPrefixedHex()).toEqual(hisAddress.toHex());
    expect(hashPubKey(myPubKey).toBech32(chain.injective.prefix)).toEqual(
      hisAddress.toBech32()
    );
  });

  it("should get identical address results (2)", () => {
    const myHashedPubKey = hashPubKey(auth.getPublicKey(isPubKeyCompressed));
    const bech32Addr = myHashedPubKey.toBech32("inj");
    expect(myHashedPubKey.toPrefixedHex()).toEqual(
      getEthereumAddress(bech32Addr)
    );
  });

  it("should get correct account data", () => {
    const { cosmosAddress, ethereumAddress } = getAccountFromAuth(auth);
    expect(cosmosAddress).toBe(address.cosmos);
    expect(ethereumAddress).toBe(address.ethereum);
  });
});
