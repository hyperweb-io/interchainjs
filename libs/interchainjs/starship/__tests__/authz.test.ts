import "./setup.test";

import { generateMnemonic } from "@confio/relayer/build/lib/helpers";
import { assertIsDeliverTxSuccess } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { useChain } from 'starshipjs';

import {
  GenericAuthorization,
  Grant,
} from "interchainjs/cosmos/authz/v1beta1/authz";
import {
  MsgExec,
  MsgGrant,
  MsgRevoke,
} from "interchainjs/cosmos/authz/v1beta1/tx";
import { SendAuthorization } from "interchainjs/cosmos/bank/v1beta1/authz";
import { MsgVote } from "interchainjs/cosmos/gov/v1beta1/tx";
import { QueryGranteeGrantsRequest, QueryGranteeGrantsResponse } from "interchainjs/cosmos/authz/v1beta1/query";
import { MsgSend } from "interchainjs/cosmos/bank/v1beta1/tx";
import { Secp256k1HDWallet } from "@interchainjs/cosmos/wallets/secp256k1hd";
import { SigningClient as CosmosSigningClient } from '@interchainjs/cosmos/signing-client';
import { QueryBalanceRequest, QueryBalanceResponse } from 'interchainjs/cosmos/bank/v1beta1/query';

import { createGetBalance } from "interchainjs/cosmos/bank/v1beta1/query.rpc.func";
import { DeliverTxResponse, StdFee } from "@interchainjs/types";
import { createGrant, createExec, createRevoke } from "interchainjs/cosmos/authz/v1beta1/tx.rpc.func";
import { createGetGranteeGrants } from "interchainjs/cosmos/authz/v1beta1/query.rpc.func";
import { DirectGenericOfflineSigner } from "@interchainjs/cosmos/types/wallet";

const cosmosHdPath = "m/44'/118'/0'/0/0";

describe("Authz testing", () => {
  let wallet1: Secp256k1HDWallet, address1: string, denom: string;
  let wallet2: Secp256k1HDWallet, address2: string;
  let wallet3: Secp256k1HDWallet, address3: string;
  let commonPrefix: string, chainInfo, getCoin, getRpcEndpoint: () => Promise<string>, creditFromFaucet;
  let expiration: Date;

  let getBalance: (request: QueryBalanceRequest) => Promise<QueryBalanceResponse>;
  let getGranteeGrants: (request: QueryGranteeGrantsRequest) => Promise<QueryGranteeGrantsResponse>;

  let grant1: (signerAddress: string, message: MsgGrant, fee: StdFee | "auto", memo: string) => Promise<DeliverTxResponse>;
  let exec2: (signerAddress: string, message: MsgExec, fee: StdFee | "auto", memo: string) => Promise<DeliverTxResponse>;
  let revoke1: (signerAddress: string, message: MsgRevoke, fee: StdFee | "auto", memo: string) => Promise<DeliverTxResponse>;

  // Variables used accross testcases

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain("osmosis"));
    denom = (await getCoin()).base;

    commonPrefix = chainInfo?.chain?.bech32_prefix;

    const rpcEndpoint = await getRpcEndpoint();
    getBalance = createGetBalance(rpcEndpoint);
    getGranteeGrants = createGetGranteeGrants(rpcEndpoint);

    // Initialize wallet
    wallet1 = await Secp256k1HDWallet.fromMnemonic(generateMnemonic(), [
      {
        prefix: commonPrefix,
        hdPath: cosmosHdPath,
      },
    ]);
    address1 = (await wallet1.getAccounts())[0].address;
    const signingClient1 = await CosmosSigningClient.connectWithSigner(
      await getRpcEndpoint(),
      new DirectGenericOfflineSigner(wallet1),
      {
        broadcast: {
          checkTx: true,
          deliverTx: true,
        },
      }
    );

    wallet2 = await Secp256k1HDWallet.fromMnemonic(generateMnemonic(), [
      {
        prefix: commonPrefix,
        hdPath: cosmosHdPath,
      },
    ]);
    address2 = (await wallet2.getAccounts())[0].address;
    const signingClient2 = await CosmosSigningClient.connectWithSigner(
      await getRpcEndpoint(),
      new DirectGenericOfflineSigner(wallet2),
      {
        broadcast: {
          checkTx: true,
          deliverTx: true,
        },
      }
    );

    wallet3 = await Secp256k1HDWallet.fromMnemonic(generateMnemonic(), [
      {
        prefix: commonPrefix,
        hdPath: cosmosHdPath,
      },
    ]);
    address3 = (await wallet3.getAccounts())[0].address;

    grant1 = createGrant(signingClient1);
    exec2 = createExec(signingClient2);
    revoke1 = createRevoke(signingClient1);

    // Transfer osmosis and ibc tokens to address, send only osmo to address
    await creditFromFaucet(address1);
    await creditFromFaucet(address2);
    await creditFromFaucet(address3);

    expiration = new Date();
    expiration.setDate(expiration.getDate() + 1);

    console.log(`address1: ${address1}, address2: ${address2}, address3: ${address3}, expiration: ${expiration}`)
  }, 200000);

  it("check address1 has tokens", async () => {
    const { balance } = await getBalance({
      address: address1,
      denom,
    });

    expect(balance?.amount).toEqual("10000000000");
  }, 200000);

  it("check address2 has tokens", async () => {
    const { balance } = await getBalance({
      address: address2,
      denom,
    });

    expect(balance?.amount).toEqual("10000000000");
  }, 200000);

  it("check address3 has tokens", async () => {
    const { balance } = await getBalance({
      address: address3,
      denom,
    });

    expect(balance?.amount).toEqual("10000000000");
  }, 200000);

  it("grant address2 Send Auth with limits", async () => {
    const fee = {
      amount: [
        {
          denom,
          amount: "100000",
        },
      ],
      gas: "550000",
    };

    const msg = MsgGrant.fromPartial({
      granter: address1,
      grantee: address2,
      grant: Grant.fromPartial({
        authorization: SendAuthorization.fromPartial({
          spendLimit: [
            {
              denom: denom,
              amount: "1000000",
            },
          ],
        }),
        expiration: expiration,
      }),
    });

    const result = await grant1(address1, msg, fee, "grant address2 Send Auth with limits");

    assertIsDeliverTxSuccess(result);

    const authsResults = await getGranteeGrants({
      grantee: address2,
    });

    expect(authsResults?.grants?.length).toBeGreaterThan(0);

    const auth = authsResults.grants[0].authorization;

    expect(SendAuthorization.is(auth)).toBeTruthy();

    if (SendAuthorization.is(auth)) {
      expect(auth.spendLimit[0].amount).toBe("1000000");
    }
  }, 200000);

  it("grant address3 Generic Send Auth", async () => {
    const fee = {
      amount: [
        {
          denom,
          amount: "100000",
        },
      ],
      gas: "550000",
    };

    const msg = MsgGrant.fromPartial({
      granter: address1,
      grantee: address3,
      grant: Grant.fromPartial({
        authorization: GenericAuthorization.fromPartial({
          msg: MsgSend.typeUrl,
        }),
        expiration: expiration,
      }),
    });

    const result = await grant1(
      address1,
      msg,
      fee,
      "grant address3 Generic Send Auth"
    );

    assertIsDeliverTxSuccess(result);

    const authsResults = await getGranteeGrants({
      grantee: address3,
    });

    expect(authsResults?.grants?.length).toBeGreaterThan(0);

    const auth = authsResults.grants[0].authorization;

    expect(GenericAuthorization.is(auth)).toBeTruthy();

    if (GenericAuthorization.is(auth)) {
      expect(auth.msg).toBe(MsgSend.typeUrl);
    }
  }, 200000);

  it("grant address2 Generic Vote Auth", async () => {
    const fee = {
      amount: [
        {
          denom,
          amount: "100000",
        },
      ],
      gas: "550000",
    };

    const msg = MsgGrant.fromPartial({
      granter: address1,
      grantee: address2,
      grant: Grant.fromPartial({
        authorization: GenericAuthorization.fromPartial({
          msg: MsgVote.typeUrl,
        }),
        expiration: expiration,
      }),
    });

    const result = await grant1(
      address1,
      msg,
      fee,
      "grant address2 Generic Vote Auth"
    );

    assertIsDeliverTxSuccess(result);

    const authsResults = await getGranteeGrants({
      grantee: address2,
    });

    expect(authsResults?.grants?.length).toBeGreaterThan(0);

    const auth = authsResults.grants[1].authorization;

    expect(GenericAuthorization.is(auth)).toBeTruthy();

    if (GenericAuthorization.is(auth)) {
      expect(auth.msg).toBe(MsgVote.typeUrl);
    }
  }, 200000);

  it("exec address2 send", async () => {
    const fee = {
      amount: [
        {
          denom,
          amount: "100000",
        },
      ],
      gas: "550000",
    };

    const msg = MsgExec.fromPartial({
      grantee: address2,
      msgs: [
        MsgSend.toProtoMsg(
          MsgSend.fromPartial({
            fromAddress: address1,
            toAddress: address2,
            amount: [
              {
                denom,
                amount: "90000",
              },
            ],
          })
        ),
      ],
    });

    const result = await exec2(
      address2,
      msg,
      fee,
      "exec address2 send"
    );

    assertIsDeliverTxSuccess(result);

    const { balance } = await getBalance({
      address: address2,
      denom,
    });

    expect(balance?.amount).toEqual("9999990000"); // not 10000000000, due to fees deduction
  }, 2000000);

  it("revoke address2 vote auth", async () => {
    const fee = {
      amount: [
        {
          denom,
          amount: "100000",
        },
      ],
      gas: "550000",
    };

    const msg = MsgRevoke.fromPartial({
      granter: address1,
      grantee: address2,
      msgTypeUrl: MsgVote.typeUrl,
    });

    const result = await revoke1(
      address1,
      msg,
      fee,
      "revoke address2 vote auth"
    );

    assertIsDeliverTxSuccess(result);

    const authsResults = await getGranteeGrants({
      grantee: address2,
    });

    expect(authsResults?.grants?.length).toBe(1);

    const auth = authsResults.grants[0].authorization;

    expect(SendAuthorization.is(auth)).toBeTruthy();

    if (SendAuthorization.is(auth)) {
      expect(auth.spendLimit[0].amount).toBe("910000"); // not 1000000 due to fees
    }
  }, 200000);

  it("revoke address3 generic send auth", async () => {
    const fee = {
      amount: [
        {
          denom,
          amount: "100000",
        },
      ],
      gas: "550000",
    };

    const msg = MsgRevoke.fromPartial({
      granter: address1,
      grantee: address3,
      msgTypeUrl: MsgSend.typeUrl,
    });

    const result = await revoke1(
      address1,
      msg,
      fee,
      "revoke address3 generic send auth"
    );

    assertIsDeliverTxSuccess(result);

    const authsResults = await getGranteeGrants({
      grantee: address3,
    });

    expect(authsResults?.grants?.length).toBe(0);
  }, 200000);

  it("revoke address2 send auth", async () => {
    const fee = {
      amount: [
        {
          denom,
          amount: "100000",
        },
      ],
      gas: "550000",
    };

    const msg = MsgRevoke.fromPartial({
      granter: address1,
      grantee: address2,
      msgTypeUrl: MsgSend.typeUrl,
    });

    const result = await revoke1(
      address1,
      msg,
      fee,
      "revoke address2 send auth"
    );

    assertIsDeliverTxSuccess(result);

    const authsResults = await getGranteeGrants({
      grantee: address2,
    });

    expect(authsResults?.grants?.length).toBe(0);
  }, 200000);
});
