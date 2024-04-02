import { messages } from "../../cosmos/messages/send-tokens.spec";
import { address } from "../../data";
import { aminoClient, directClient } from "../constants";

describe("Cosmjs: Send tokens", () => {
  it("should success with direct signing", async () => {
    const resp = await directClient.signAndBroadcast(
      address.cosmoshub.genesis,
      messages,
      "auto"
    );
    expect(resp.code).toEqual(0);
  });

  it("should success with amino signing", async () => {
    const resp = await aminoClient.signAndBroadcast(
      address.cosmoshub.genesis,
      messages,
      "auto"
    );
    expect(resp.code).toEqual(0);
  });
});
