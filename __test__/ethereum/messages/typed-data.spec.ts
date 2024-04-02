import { Eip712Signer } from "@interchainjs/ethereum/eip712";

import { auth } from "../constants";
import { signature as expectedSignature,typedData } from "../data";

const signer = new Eip712Signer(auth);

it("should match signature", async () => {
  const { signature, signDoc } = await signer.signDoc(typedData);
  expect(signature.toPrefixedHex()).toBe(expectedSignature);
});
