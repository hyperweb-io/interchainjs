import { Secp256k1HdWallet } from "@cosmjs/amino";
import { SigningStargateClient as OldSigningStargateClient } from "@cosmjs/stargate";
import { StargateSigningClient as NewSigningStargateClient } from "@cosmology/cosmjs/stargate";
import { address, chain, seed } from "../../data";
import { messages } from "../../cosmos/messages/send-tokens.spec";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { TxRaw } from "@uni-sign/cosmos/types";
import { StdFee } from "@uni-sign/types";

async function getDirectSigningClients() {
  const offlineDirectSigner = await DirectSecp256k1HdWallet.fromMnemonic(
    seed.genesis,
    {
      prefix: chain.cosmoshub.prefix,
    }
  );
  const oldClient = await OldSigningStargateClient.connectWithSigner(
    chain.cosmoshub.rpc,
    offlineDirectSigner
  );
  const newClient = NewSigningStargateClient.connectWithSigner(
    chain.cosmoshub.rpc,
    {
      getAccounts: async () => {
        return offlineDirectSigner.getAccounts() as any;
      },
      signDirect: async (signerAddress, signDoc) => {
        return (await offlineDirectSigner.signDirect(
          signerAddress,
          signDoc
        )) as any;
      },
    }
  );
  return {
    oldClient,
    newClient,
  };
}

async function getAminoSigningClients() {
  const offlineAminoSigner = await Secp256k1HdWallet.fromMnemonic(
    seed.genesis,
    {
      prefix: chain.cosmoshub.prefix,
    }
  );
  const oldClient = await OldSigningStargateClient.connectWithSigner(
    chain.cosmoshub.rpc,
    offlineAminoSigner
  );
  const newClient = NewSigningStargateClient.connectWithSigner(
    chain.cosmoshub.rpc,
    {
      getAccounts: async () => {
        return offlineAminoSigner.getAccounts() as any;
      },
      signAmino: async (signerAddress, signDoc) => {
        return (await offlineAminoSigner.signAmino(
          signerAddress,
          signDoc
        )) as any;
      },
    }
  );
  return {
    oldClient,
    newClient,
  };
}

const fee: StdFee = {
  gas: "20000000",
  amount: [
    {
      denom: chain.cosmoshub.denom,
      amount: "400000",
    },
  ],
};

const memo = "for test";

function compareTxRaw(txRaw1: TxRaw, txRaw2: TxRaw) {
  expect(txRaw1.signatures[0]).toEqual(txRaw2.signatures[0]);
  expect(txRaw1.bodyBytes).toEqual(txRaw2.bodyBytes);
  expect(txRaw1.authInfoBytes).toEqual(txRaw2.authInfoBytes);
}

describe("Compare with @cosmjs 1.0", () => {
  it("direct signing results should match", async () => {
    const { oldClient, newClient } = await getDirectSigningClients();

    const oldTxRaw = await oldClient.sign(
      address.cosmoshub.genesis,
      messages,
      fee,
      memo
    );

    const newTxRaw = await newClient.sign(
      address.cosmoshub.genesis,
      messages,
      fee,
      memo
    );

    compareTxRaw(newTxRaw, oldTxRaw);
  });

  it("amino signing results should match", async () => {
    const { oldClient, newClient } = await getAminoSigningClients();

    const oldTxRaw = await oldClient.sign(
      address.cosmoshub.genesis,
      messages,
      fee,
      memo
    );

    const newTxRaw = await newClient.sign(
      address.cosmoshub.genesis,
      messages,
      fee,
      memo
    );

    compareTxRaw(newTxRaw, oldTxRaw);
  });
});
