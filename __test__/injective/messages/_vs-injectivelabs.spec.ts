import { address, chain } from "../../data";
import { Message, SignMode, StdFee } from "@uni-sign/cosmos/types";
import { MsgSend, createTransaction } from "@injectivelabs/sdk-ts";
import { auth, isPubKeyCompressed } from "../constants";
import { toHex } from "@uni-sign/utils";
import { DirectSigner } from "@uni-sign/injective/direct";
import { AminoSigner } from "@uni-sign/injective/amino";
import { toConverter, toEncoder } from "@uni-sign/cosmos/utils";
import { MsgSend as _MsgSend } from "@uni-sign/cosmos-msgs/cosmos/bank/v1beta1/tx";

const msg = MsgSend.fromJSON({
  amount: {
    denom: chain.injective.prefix,
    amount: "0.01",
  },
  srcInjectiveAddress: address.injective.genesis,
  dstInjectiveAddress: address.injective.test1,
});

const messages: Message<_MsgSend>[] = [
  {
    typeUrl: _MsgSend.typeUrl,
    value: {
      amount: [
        {
          amount: "0.01",
          denom: chain.injective.denom,
        },
      ],
      fromAddress: address.injective.genesis,
      toAddress: address.injective.test1,
    },
  },
];

const fee: StdFee = {
  gas: "20000000",
  amount: [
    {
      denom: chain.injective.denom,
      amount: "0.05",
    },
  ],
};

describe("Compare with @injectivelabs", () => {
  it("direct signing", async () => {
    const signer = new DirectSigner(
      auth,
      [toEncoder(_MsgSend)],
      chain.injective.rpc
    );

    const {
      tx: { bodyBytes, authInfoBytes, signatures },
    } = await signer.sign(messages, fee, "", {
      sequence: 3n,
      accountNumber: 5n,
      chainId: chain.injective.chainId,
      timeoutHeight: 10n,
    });

    const { txRaw, signDoc } = createTransaction({
      pubKey: auth.getPublicKey(isPubKeyCompressed).toBase64(),
      chainId: chain.injective.chainId,
      fee,
      message: msg,
      sequence: 3,
      timeoutHeight: 10,
      accountNumber: 5,
    });

    // expect(toHex(signatures[0])).toBe(toHex(txRaw.signatures[0]));
    expect(toHex(bodyBytes)).toBe(toHex(txRaw.bodyBytes));
    expect(toHex(authInfoBytes)).toBe(toHex(txRaw.authInfoBytes));
  });

  it("amino signing", async () => {
    const signer = new AminoSigner(
      auth,
      [toEncoder(_MsgSend)],
      [toConverter(_MsgSend)],
      chain.injective.rpc
    );

    const {
      tx: { bodyBytes, authInfoBytes, signatures },
    } = await signer.sign(messages, fee, "", {
      sequence: 3n,
      accountNumber: 5n,
      chainId: chain.injective.chainId,
      timeoutHeight: 10n,
    });

    const { txRaw, signDoc } = createTransaction({
      pubKey: auth.getPublicKey(isPubKeyCompressed).toBase64(),
      chainId: chain.injective.chainId,
      fee,
      message: msg,
      sequence: 3,
      timeoutHeight: 10,
      accountNumber: 5,
      signMode: SignMode.SIGN_MODE_LEGACY_AMINO_JSON,
    });

    // expect(toHex(signatures[0])).toBe(toHex(txRaw.signatures[0]));
    expect(toHex(bodyBytes)).toBe(toHex(txRaw.bodyBytes));
    expect(toHex(authInfoBytes)).toBe(toHex(txRaw.authInfoBytes));
  });
});
