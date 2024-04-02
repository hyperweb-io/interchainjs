import {
  BondStatus,
  bondStatusToJSON,
} from "@interchainjs/cosmos-msgs/cosmos/staking/v1beta1/staking";

import { address } from "../../data";
import { rpcQuery } from "../constants";

it("should query validators", async () => {
  const { validators } = await rpcQuery.validators({
    status: bondStatusToJSON(BondStatus.BOND_STATUS_BONDED),
  });
  const validatorAddress = validators[0]?.operatorAddress;
  expect(validatorAddress).toBe(address.cosmoshub.validator);
});
