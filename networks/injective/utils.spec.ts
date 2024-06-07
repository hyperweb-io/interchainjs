import { MsgSendAmino } from "@interchainjs/cosmos-types/cosmos/bank/v1beta1/tx";
import { Eip712Types } from "@interchainjs/types";

import { toEthTypes } from "./utils";

it("should match", () => {
  const message: MsgSendAmino = {
    from_address: "inj11111",
    to_address: "inj22222",
    amount: [
      {
        denom: "inj",
        amount: "0.01",
      },
    ],
  };
  const expectedTypes: Eip712Types = {
    MsgValue: [
      {
        name: "from_address",
        type: "string",
      },
      {
        name: "to_address",
        type: "string",
      },
      {
        name: "amount",
        type: "TypeAmount[]",
      },
    ],
    TypeAmount: [
      {
        name: "denom",
        type: "string",
      },
      {
        name: "amount",
        type: "string",
      },
    ],
  };
  const types = toEthTypes(message);
  expect(types).toEqual(expectedTypes);
});
