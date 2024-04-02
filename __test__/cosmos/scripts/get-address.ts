import { Secp256k1Auth } from "@interchainjs/auth/secp256k1";
import { DirectSigner } from "@interchainjs/cosmos/direct";
import { Key } from "@interchainjs/utils";

// const auth = Secp256k1Auth.fromMnemonic(
//   "issue have volume expire shoe year finish poem alien urban license undo rural endless food host opera fix forum crack wide example firm learn",
//   defaultHdPath.secp256k1
// );

// const signer = new DirectSigner(auth, []);
// console.log("cosmoshub address", signer.address.toBech32("osmovaloper"));
// console.log("cosmoshub address", signer.address.toBech32("cosmosvaloper"));

console.log(
  Key.fromHex("6BD6D7F66A2146CA39FBBBC8067810F65A2BF162").toBech32(
    "osmovaloper"
  )
);
