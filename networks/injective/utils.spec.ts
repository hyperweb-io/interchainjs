import { MsgSendAmino } from "@interchainjs/cosmos-msgs/cosmos/bank/v1beta1/tx";
import { address } from "../../__test__/data";
import { toEthTypes } from "./utils";
import { Eip712Types } from "@interchainjs/types";

it("should match", () => {
  const message: MsgSendAmino = {
    from_address: address.injective.genesis,
    to_address: address.injective.test1,
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
