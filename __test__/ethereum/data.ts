import { ISignDoc } from "@uni-sign/types";
import { seed as _seed } from "../data";

export const seed = _seed.genesis;
export const privateKey =
  "0x408890c2b5eba1664bbd33ced41ec0d1322c48b2f65934142e0d8855b552204c";
export const publicKey =
  "0x04dcfd76f9735a577849610e3b8f0388110099a20243017491a29efa6784f7c5d4c5c1ceb5fccdf56cccb64a0acf5d6c470516e9998a746efdb94543d902c6632a";
export const address = "0x2c8454f3a88070ced57e5b39762e6d983ac718b9";
export const signature =
  "0x422440fedf1869b2d27a250db36b1f952edeb3eb53fce4067dd9f6bbbbbfc10671fe9ce3ef4e45b18920849d76093ccdaea46b44205e1f9c14a2a65aa563f3491b";

/** chainId 137/0x89 */
export const polygonSignature =
  "0xdafffafeda0111243b639c905ccafd038fd02e011d6012de5436b96dac66fc58364df091661a2ad944dd284ef401fb462b408157665cc2124d524d21d1fa53051c";

export const typedData: ISignDoc.Eip712Doc = {
  types: {
    EIP712Domain: [
      {
        name: "name",
        type: "string",
      },
      {
        name: "version",
        type: "string",
      },
      {
        name: "chainId",
        type: "uint256",
      },
      {
        name: "verifyingContract",
        type: "string",
      },
      {
        name: "salt",
        type: "string",
      },
    ],
    Tx: [
      {
        name: "account_number",
        type: "string",
      },
      {
        name: "chain_id",
        type: "string",
      },
      {
        name: "fee",
        type: "Fee",
      },
      {
        name: "memo",
        type: "string",
      },
      {
        name: "msgs",
        type: "Msg[]",
      },
      {
        name: "sequence",
        type: "string",
      },
      {
        name: "timeout_height",
        type: "string",
      },
    ],
    Fee: [
      {
        name: "feePayer",
        type: "string",
      },
      {
        name: "amount",
        type: "Coin[]",
      },
      {
        name: "gas",
        type: "string",
      },
    ],
    Coin: [
      {
        name: "denom",
        type: "string",
      },
      {
        name: "amount",
        type: "string",
      },
    ],
    Msg: [
      {
        name: "type",
        type: "string",
      },
      {
        name: "value",
        type: "MsgValue",
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
  },
  primaryType: "Tx",
  domain: {
    name: "Injective Web3",
    version: "1.0.0",
    chainId: "0x1",
    salt: "0",
    verifyingContract: "cosmos",
  },
  message: {
    account_number: "5",
    chain_id: "injective-1",
    timeout_height: "10",
    memo: "",
    sequence: "3",
    fee: {
      feePayer: "inj19jz9fuagspcva4t7tvuhvtndnqavwx9el2u06m",
      gas: "2000",
      amount: [
        {
          denom: "inj",
          amount: "0.05",
        },
      ],
    },
    msgs: [
      {
        type: "cosmos-sdk/MsgSend",
        value: {
          from_address: "inj19jz9fuagspcva4t7tvuhvtndnqavwx9el2u06m",
          to_address: "inj1mfmsvd30fyehuvzq6d40ejcx732necwe4nkk37",
          amount: [
            {
              denom: "inj",
              amount: "0.01",
            },
          ],
        },
      },
    ],
  },
};
