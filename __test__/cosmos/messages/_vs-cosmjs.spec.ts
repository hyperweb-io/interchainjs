import { Secp256k1HdWallet } from "@cosmjs/amino";
import { SigningStargateClient } from "@cosmjs/stargate";
import { address, chain, seed } from "../../data";
import { AminoSigner } from "@uni-sign/cosmos/amino";
import { toConverter, toEncoder } from "@uni-sign/cosmos/utils";
import { MsgSend } from "@uni-sign/cosmos-msgs/cosmos/bank/v1beta1/tx";
import { MsgTransfer } from "@uni-sign/cosmos-msgs/ibc/applications/transfer/v1/tx";
import { messages } from "./send-tokens.spec";
// import { messages } from "./send-ibc-tokens.spec";
import { AminoWallet, DirectWallet, StdFee } from "@uni-sign/cosmos/types";
import { toHex } from "@uni-sign/utils";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { DirectSigner } from "@uni-sign/cosmos/direct";
import { auth } from "../constants";
import { toDirectWallet, toAminoWallet } from "@cosmology/cosmjs/utils";

async function getDirectClient() {
  return await SigningStargateClient.connectWithSigner(
    chain.cosmoshub.rpc,
    await DirectSecp256k1HdWallet.fromMnemonic(seed.genesis, {
      prefix: chain.cosmoshub.prefix,
    })
  );
}

async function getAminoClient() {
  return await SigningStargateClient.connectWithSigner(
    chain.cosmoshub.rpc,
    await Secp256k1HdWallet.fromMnemonic(seed.genesis, {
      prefix: chain.cosmoshub.prefix,
    })
  );
}

export const fee: StdFee = {
  gas: "20000000",
  amount: [
    {
      denom: chain.cosmoshub.denom,
      amount: "400000",
    },
  ],
};

export const memo = "for test";

async function getDirectWallet(): Promise<DirectWallet> {
  return toDirectWallet(
    (await DirectSecp256k1HdWallet.fromMnemonic(seed.genesis, {
      prefix: chain.cosmoshub.prefix,
    })) as any,
    chain.cosmoshub.chainId
  );
}

async function getAminoWallet(): Promise<AminoWallet> {
  return toAminoWallet(
    (await Secp256k1HdWallet.fromMnemonic(seed.genesis, {
      prefix: chain.cosmoshub.prefix,
    })) as any,
    chain.cosmoshub.chainId
  );
}

describe("Compare with @cosmjs 1.0", () => {
  it("direct signing results should match", async () => {
    const client = await getDirectClient();
    const signer = new DirectSigner(
      auth,
      [toEncoder(MsgSend), toEncoder(MsgTransfer)],
      chain.cosmoshub.rpc
    );

    const txRaw = await client.sign(
      address.cosmoshub.genesis,
      messages,
      fee,
      memo
    );
    const {
      tx: { bodyBytes, authInfoBytes, signatures },
    } = await signer.sign(messages, fee, memo);

    expect(toHex(signatures[0])).toBe(toHex(txRaw.signatures[0]));
    expect(toHex(bodyBytes)).toBe(toHex(txRaw.bodyBytes));
    expect(toHex(authInfoBytes)).toBe(toHex(txRaw.authInfoBytes));
  });

  it("direct signing from Wallet results should match", async () => {
    const client = await getDirectClient();

    const signer = await DirectSigner.fromWallet(
      await getDirectWallet(),
      [toEncoder(MsgSend), toEncoder(MsgTransfer)],
      chain.cosmoshub.rpc
    );

    const txRaw = await client.sign(
      address.cosmoshub.genesis,
      messages,
      fee,
      memo
    );
    const {
      tx: { bodyBytes, authInfoBytes, signatures },
    } = await signer.sign(messages, fee, memo);

    expect(toHex(signatures[0])).toBe(toHex(txRaw.signatures[0]));
    expect(toHex(bodyBytes)).toBe(toHex(txRaw.bodyBytes));
    expect(toHex(authInfoBytes)).toBe(toHex(txRaw.authInfoBytes));
  });

  it("amino signing results should match", async () => {
    const client = await getAminoClient();
    const signer = new AminoSigner(
      auth,
      [toEncoder(MsgSend), toEncoder(MsgTransfer)],
      [toConverter(MsgSend), toConverter(MsgTransfer)],
      chain.cosmoshub.rpc
    );

    const txRaw = await client.sign(
      address.cosmoshub.genesis,
      messages,
      fee,
      memo
    );
    const {
      tx: { bodyBytes, authInfoBytes, signatures },
    } = await signer.sign(messages, fee, memo);

    expect(toHex(signatures[0])).toBe(toHex(txRaw.signatures[0]));
    expect(toHex(bodyBytes)).toBe(toHex(txRaw.bodyBytes));
    expect(toHex(authInfoBytes)).toBe(toHex(txRaw.authInfoBytes));
  });

  it("amino signing from Wallet results should match", async () => {
    const client = await getAminoClient();

    const signer = await AminoSigner.fromWallet(
      await getAminoWallet(),
      [toEncoder(MsgSend), toEncoder(MsgTransfer)],
      [toConverter(MsgSend), toConverter(MsgTransfer)],
      chain.cosmoshub.rpc
    );

    const txRaw = await client.sign(
      address.cosmoshub.genesis,
      messages,
      fee,
      memo
    );
    const {
      tx: { bodyBytes, authInfoBytes, signatures },
    } = await signer.sign(messages, fee, memo);

    expect(toHex(signatures[0])).toBe(toHex(txRaw.signatures[0]));
    expect(toHex(bodyBytes)).toBe(toHex(txRaw.bodyBytes));
    expect(toHex(authInfoBytes)).toBe(toHex(txRaw.authInfoBytes));
  });
});
