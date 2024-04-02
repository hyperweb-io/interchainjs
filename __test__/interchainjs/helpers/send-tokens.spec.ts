import { messages } from "../../cosmos/messages/send-tokens.spec";
import { address } from "../../data";
import { aminoClient, directClient } from "../constants";

describe("Interchainjs: Send tokens", () => {
  it("should success with direct signing", async () => {
    const resp = await directClient.helpers.send(
      address.cosmoshub.genesis,
      messages[0].value,
      "auto",
      ""
    );
    expect(resp.code).toEqual(0);
  });

  it("should success with amino signing", async () => {
    const resp = await aminoClient.helpers.send(
      address.cosmoshub.genesis,
      messages[0].value,
      "auto",
      ""
    );
    expect(resp.code).toEqual(0);
  });
});
