import { address, chain } from "../../data";
import { rpcQuery } from "../constants";

it("should query balance", async () => {
  const { balance } = await rpcQuery.balance({
    address: address.cosmoshub.genesis,
    denom: chain.cosmoshub.denom,
  });
  expect(balance?.amount).toBe("99989999590631");
});
