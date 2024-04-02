import { AminoSigner } from "@interchainjs/cosmos/amino";
import { DirectSigner } from "@interchainjs/cosmos/direct";
import { Message } from "@interchainjs/cosmos/types";
import { toConverter, toEncoder } from "@interchainjs/cosmos/utils";
import { TextProposal } from "@interchainjs/cosmos-msgs/cosmos/gov/v1beta1/gov";
import { MsgSubmitProposal } from "@interchainjs/cosmos-msgs/cosmos/gov/v1beta1/tx";

import { address, chain } from "../../data";
import { auth } from "../constants";

export const messages: Message<MsgSubmitProposal>[] = [
  {
    typeUrl: MsgSubmitProposal.typeUrl,
    value: {
      proposer: address.cosmoshub.genesis,
      initialDeposit: [
        {
          amount: "1000000",
          denom: chain.cosmoshub.denom,
        },
      ],
      content: {
        typeUrl: "/cosmos.gov.v1beta1.TextProposal",
        value: TextProposal.encode(
          TextProposal.fromPartial({
            title: "Test Proposal",
            description: "Test text proposal for the @sign testing",
          })
        ).finish(),
      },
    },
  },
];

describe("Submit proposal", () => {
  it("should success with direct signing", async () => {
    const signer = new DirectSigner(
      auth,
      [toEncoder(MsgSubmitProposal)],
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
      [toEncoder(MsgSubmitProposal)],
      [toConverter(MsgSubmitProposal)],
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
