import { DirectSigner } from "@interchainjs/cosmos/direct";
import { MsgTransfer } from "@interchainjs/cosmos-msgs/ibc/applications/transfer/v1/tx";

import { address, chain } from "../../data";
import { toConverter, toEncoder } from "@interchainjs/cosmos/utils";
import { Message } from "@interchainjs/cosmos/types";
import { AminoSigner } from "@interchainjs/cosmos/amino";
import { auth } from "../constants";

export const messages: Message<MsgTransfer>[] = [
  {
    typeUrl: MsgTransfer.typeUrl,
    value: {
      sourcePort: "transfer",
      sourceChannel: "channel-0",
      sender: address.cosmoshub.genesis,
      receiver: address.osmosis.test1,
      token: {
        amount: "1000000",
        denom: chain.cosmoshub.denom,
      },
      timeoutHeight: {
        revisionHeight: 13417750n,
        revisionNumber: 1n,
      },
      timeoutTimestamp: BigInt(Math.floor(Date.now() / 1000) + 12000000000),
      // timeoutTimestamp: 0n,
      memo: "test",
    },
  },
];

describe("Send IBC tokens", () => {
  it("should success with direct signing", async () => {
    const signer = new DirectSigner(
      auth,
      [toEncoder(MsgTransfer)],
      chain.cosmoshub.rpc
    );
    const resp = await (await signer.sign(messages)).broadcast({
      checkTx: true,
      deliverTx: true,
    });
    expect(resp.check_tx?.code).toEqual(0);
    expect(resp.deliver_tx?.code).toEqual(0);
  });

  it("should success with amino signing", async () => {
    const signer = new AminoSigner(
      auth,
      [toEncoder(MsgTransfer)],
      [toConverter(MsgTransfer)],
      chain.cosmoshub.rpc
    );
    const resp = await (await signer.sign(messages)).broadcast({
      checkTx: true,
      deliverTx: true,
    });
    expect(resp.check_tx?.code).toEqual(0);
    expect(resp.deliver_tx?.code).toEqual(0);
  });
});
