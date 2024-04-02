import { DirectSigner } from "@interchainjs/cosmos/direct";
import { MsgDelegate } from "@interchainjs/cosmos-msgs/cosmos/staking/v1beta1/tx";

import { address, chain } from "../../data";
import { toConverter, toEncoder } from "@interchainjs/cosmos/utils";
import { Message } from "@interchainjs/cosmos/types";
import { AminoSigner } from "@interchainjs/cosmos/amino";
import { auth } from "../constants";

export const messages: Message<MsgDelegate>[] = [
  {
    typeUrl: MsgDelegate.typeUrl,
    value: {
      delegatorAddress: address.cosmoshub.genesis,
      validatorAddress: address.cosmoshub.validator,
      amount: {
        denom: chain.cosmoshub.denom,
        amount: "1000000",
      },
    },
  },
];

describe("Delegate tokens", () => {
  it("should success with direct signing", async () => {
    const signer = new DirectSigner(
      auth,
      [toEncoder(MsgDelegate)],
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
      [toEncoder(MsgDelegate)],
      [toConverter(MsgDelegate)],
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
