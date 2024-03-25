import { address, chain } from "../../data";
import { signature as expectedSignature } from "../data";
import {
  MsgSend,
  createTransaction,
  createTxRawEIP712,
  createWeb3Extension,
  getEip712TypedData,
  hexToBase64,
  recoverTypedSignaturePubKey,
} from "@injectivelabs/sdk-ts";
import { EthereumChainId } from "@injectivelabs/ts-types";
import { MsgSend as _MsgSend } from "@uni-sign/cosmos-msgs/cosmos/bank/v1beta1/tx";
import { Message } from "@uni-sign/cosmos/types";
import { Eip712Signer } from "@uni-sign/injective/eip712";
import { auth, isPubKeyCompressed } from "../constants";
import { toConverter, toEncoder } from "@uni-sign/cosmos/utils";
import { toHex } from "@uni-sign/utils";
import { StdFee } from "@uni-sign/types";

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

const signer = new Eip712Signer(
  auth,
  [toEncoder(_MsgSend)],
  [toConverter(_MsgSend)],
  chain.injective.rpc
);

const fee: StdFee = {
  gas: "2000",
  amount: [
    {
      denom: chain.injective.denom,
      amount: "0.05",
    },
  ],
  payer: address.injective.genesis,
};

describe("Compare with @injectivelabs", () => {
  const eip712TypedData = getEip712TypedData({
    msgs: [msg],
    tx: {
      accountNumber: "5",
      sequence: "3",
      timeoutHeight: "10",
      chainId: "injective-1",
    },
    fee: {
      amount: [
        {
          denom: chain.injective.denom,
          amount: "0.05",
        },
      ],
      gas: "2000",
      feePayer: address.injective.genesis,
    },
    ethereumChainId: EthereumChainId.Mainnet,
  });

  it("Eip712SignDoc should match", async () => {
    const { signDoc } = await signer.createDoc(messages, fee, "", {
      sequence: 3n,
      accountNumber: 5n,
      chainId: chain.injective.chainId,
      timeoutHeight: {
        type: "absolute",
        value: 10n,
      },
      ethereumChainId: EthereumChainId.Mainnet,
    });

    expect(signDoc).toEqual(eip712TypedData);
  });

  it("Eip712Tx should match", async () => {
    const { txRaw } = createTransaction({
      pubKey: auth.getPublicKey(isPubKeyCompressed).toBase64(),
      chainId: chain.injective.chainId,
      fee,
      message: msg,
      sequence: 3,
      accountNumber: 5,
      timeoutHeight: 10,
    });

    const web3Extension = createWeb3Extension({
      ethereumChainId: EthereumChainId.Mainnet,
    });

    const txRawEip712 = createTxRawEIP712(txRaw, web3Extension);

    const { tx } = await signer.createDoc(messages, fee, "", {
      sequence: 3n,
      accountNumber: 5n,
      chainId: chain.injective.chainId,
      timeoutHeight: {
        type: "absolute",
        value: 10n,
      },
      ethereumChainId: EthereumChainId.Mainnet,
    });

    expect(toHex(tx.bodyBytes)).toBe(toHex(txRawEip712.bodyBytes));
    expect(toHex(tx.authInfoBytes)).toBe(toHex(txRawEip712.authInfoBytes));
  });

  it("Signature should match", async () => {
    const { signature } = await signer.sign(messages, fee, "", {
      sequence: 3n,
      accountNumber: 5n,
      chainId: chain.injective.chainId,
      timeoutHeight: {
        type: "absolute",
        value: 10n,
      },
      ethereumChainId: EthereumChainId.Mainnet,
    });

    expect(signature.toPrefixedHex()).toEqual(expectedSignature);
  });

  it("PublicKey should match", async () => {
    const publicKey = auth.getPublicKey(isPubKeyCompressed).toBase64();

    const publicKeyHex = recoverTypedSignaturePubKey(
      eip712TypedData,
      expectedSignature
    );
    const expectedPublicKey = hexToBase64(publicKeyHex);

    expect(publicKey).toEqual(expectedPublicKey);
  });
});
