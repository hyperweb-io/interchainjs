import { AminoSigner } from "@interchainjs/cosmos/amino";
import { DirectSigner } from "@interchainjs/cosmos/direct";
import { Message } from "@interchainjs/cosmos/types";
import { toConverter, toEncoder } from "@interchainjs/cosmos/utils";
import { MsgSend } from "@interchainjs/cosmos-msgs/cosmos/bank/v1beta1/tx";

import { address, chain } from "../../data";
import { auth } from "../constants";

export const messages: Message<MsgSend>[] = [
  {
    typeUrl: MsgSend.typeUrl,
    value: {
      amount: [
        {
          amount: "100000",
          denom: chain.cosmoshub.denom,
        },
      ],
      fromAddress: address.cosmoshub.genesis,
      toAddress: address.cosmoshub.test1,
    },
  },
];

describe("Send tokens", () => {
  it("should success with direct signing", async () => {
    const signer = new DirectSigner(
      auth,
      [toEncoder(MsgSend)],
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
      [toEncoder(MsgSend)],
      [toConverter(MsgSend)],
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
