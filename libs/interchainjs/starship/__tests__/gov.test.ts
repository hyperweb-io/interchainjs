import "./setup.test";

import { generateMnemonic } from "@confio/relayer/build/lib/helpers";
import { assertIsDeliverTxSuccess } from "@cosmjs/stargate";
import {
  ProposalStatus,
  TextProposal,
  VoteOption,
} from "@interchainjs/cosmos-types/cosmos/gov/v1beta1/gov";
import {
  MsgSubmitProposal,
  MsgVote,
} from "@interchainjs/cosmos-types/cosmos/gov/v1beta1/tx";
import {
  BondStatus,
  bondStatusToJSON,
} from "@interchainjs/cosmos-types/cosmos/staking/v1beta1/staking";
import { MsgDelegate } from "@interchainjs/cosmos-types/cosmos/staking/v1beta1/tx";
import { fromBase64, toUtf8 } from "@interchainjs/utils";
import { BigNumber } from "bignumber.js";
import { RpcQuery } from "interchainjs/query/rpc";
import { StargateSigningClient } from "interchainjs/stargate";
import { OfflineAminoSigner, OfflineDirectSigner } from "interchainjs/types";
import { Secp256k1Wallet } from "interchainjs/wallets/secp256k1";
import { useChain } from "starshipjs";

import { waitUntil } from "../../../../test-utils/utils";

describe("Governance tests for osmosis", () => {
  let directSigner: OfflineDirectSigner,
    aminoSigner: OfflineAminoSigner,
    denom: string,
    directAddress: string,
    aminoAddress: string;
  let chainInfo, getCoin, getRpcEndpoint: () => string, creditFromFaucet;

  // Variables used accross testcases
  let queryClient: RpcQuery;
  let proposalId: string;
  let validatorAddress: string;

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain("osmosis"));
    denom = getCoin().base;

    // Initialize wallet
    const directWallet = Secp256k1Wallet.fromMnemonic(generateMnemonic(), {
      prefix: chainInfo.chain.bech32_prefix,
    });
    const aminoWallet = Secp256k1Wallet.fromMnemonic(generateMnemonic(), {
      prefix: chainInfo.chain.bech32_prefix,
    });
    directSigner = directWallet.toOfflineDirectSigner();
    aminoSigner = aminoWallet.toOfflineAminoSigner();
    directAddress = (
      await directSigner.getAccounts()
    )[0].getAddress() as string;
    aminoAddress = (await aminoSigner.getAccounts())[0].getAddress() as string;

    // Create custom cosmos interchain client
    queryClient = new RpcQuery(getRpcEndpoint());

    // Transfer osmosis to address
    await creditFromFaucet(directAddress);
    await creditFromFaucet(aminoAddress);
  }, 200000);

  it("check address has tokens", async () => {
    const { balance } = await queryClient.balance({
      address: directAddress,
      denom,
    });

    expect(balance!.amount).toEqual("10000000000");
  }, 10000);

  it("query validator address", async () => {
    const { validators } = await queryClient.validators({
      status: bondStatusToJSON(BondStatus.BOND_STATUS_BONDED),
    });
    let allValidators = validators;
    if (validators.length > 1) {
      allValidators = validators.sort((a, b) =>
        new BigNumber(b.tokens).minus(new BigNumber(a.tokens)).toNumber()
      );
    }

    expect(allValidators.length).toBeGreaterThan(0);

    // set validator address to the first one
    validatorAddress = allValidators[0].operatorAddress;
  });

  it("stake tokens to genesis validator", async () => {
    const signingClient = StargateSigningClient.connectWithSigner(
      getRpcEndpoint(),
      directSigner
    );

    const { balance } = await queryClient.balance({
      address: directAddress,
      denom,
    });

    // Stake half of the tokens
    // eslint-disable-next-line no-undef
    const delegationAmount = (BigInt(balance!.amount) / BigInt(2)).toString();
    const msg = {
      typeUrl: MsgDelegate.typeUrl,
      value: MsgDelegate.fromPartial({
        delegatorAddress: directAddress,
        validatorAddress: validatorAddress,
        amount: {
          amount: delegationAmount,
          denom: balance!.denom,
        },
      }),
    };

    const fee = {
      amount: [
        {
          denom,
          amount: "100000",
        },
      ],
      gas: "550000",
    };

    const result = await signingClient.signAndBroadcast(
      directAddress,
      [msg],
      fee
    );
    assertIsDeliverTxSuccess(result);
  }, 10000);

  it("submit a txt proposal", async () => {
    const signingClient = StargateSigningClient.connectWithSigner(
      getRpcEndpoint(),
      directSigner
    );

    const contentMsg = TextProposal.fromPartial({
      title: "Test Proposal",
      description: "Test text proposal for the e2e testing",
    });

    // Stake half of the tokens
    const msg = {
      typeUrl: MsgSubmitProposal.typeUrl,
      value: MsgSubmitProposal.fromPartial({
        proposer: directAddress,
        initialDeposit: [
          {
            amount: "1000000",
            denom: denom,
          },
        ],
        content: {
          typeUrl: "/cosmos.gov.v1beta1.TextProposal",
          value: TextProposal.encode(contentMsg).finish(),
        },
      }),
    };

    const fee = {
      amount: [
        {
          denom,
          amount: "100000",
        },
      ],
      gas: "550000",
    };

    const result = await signingClient.signAndBroadcast(
      directAddress,
      [msg],
      fee
    );
    assertIsDeliverTxSuccess(result);

    // Get proposal id from log events
    const proposalIdEvent = result.events.find(
      (event) => event.type === "submit_proposal"
    );
    const proposalIdEncoded = proposalIdEvent!.attributes.find(
      (attr) => toUtf8(fromBase64(attr.key)) === "proposal_id"
    )!.value;
    proposalId = toUtf8(fromBase64(proposalIdEncoded));

    // eslint-disable-next-line no-undef
    expect(BigInt(proposalId)).toBeGreaterThan(BigInt(0));
  }, 200000);

  it("query proposal", async () => {
    const result = await queryClient.proposal({
      proposalId: BigInt(proposalId),
    });

    expect(result.proposal.proposalId.toString()).toEqual(proposalId);
  }, 10000);

  it("vote on proposal using direct", async () => {
    // create direct address signing client
    const signingClient = StargateSigningClient.connectWithSigner(
      getRpcEndpoint(),
      directSigner
    );

    // Vote on proposal from genesis mnemonic address
    const msg = {
      typeUrl: MsgVote.typeUrl,
      value: MsgVote.fromPartial({
        proposalId: BigInt(proposalId),
        voter: directAddress,
        option: VoteOption.VOTE_OPTION_YES,
      }),
    };

    const fee = {
      amount: [
        {
          denom,
          amount: "100000",
        },
      ],
      gas: "550000",
    };

    const result = await signingClient.signAndBroadcast(
      directAddress,
      [msg],
      fee
    );
    assertIsDeliverTxSuccess(result);
  }, 10000);

  it("verify direct vote", async () => {
    const { vote } = await queryClient.getVote({
      proposalId: BigInt(proposalId),
      voter: directAddress,
    });

    expect(vote.proposalId.toString()).toEqual(proposalId);
    expect(vote.voter).toEqual(directAddress);
    expect(vote.option).toEqual(VoteOption.VOTE_OPTION_YES);
  }, 10000);

  it("vote on proposal using amino", async () => {
    // create amino address signing client
    const signingClient = StargateSigningClient.connectWithSigner(
      getRpcEndpoint(),
      aminoSigner
    );

    // Vote on proposal from genesis mnemonic address
    const msg = {
      typeUrl: MsgVote.typeUrl,
      value: MsgVote.fromPartial({
        proposalId: BigInt(proposalId),
        voter: aminoAddress,
        option: VoteOption.VOTE_OPTION_NO,
      }),
    };

    const fee = {
      amount: [
        {
          denom,
          amount: "100000",
        },
      ],
      gas: "550000",
    };

    const result = await signingClient.signAndBroadcast(
      aminoAddress,
      [msg],
      fee
    );
    assertIsDeliverTxSuccess(result);
  }, 10000);

  it("verify amino vote", async () => {
    const { vote } = await queryClient.getVote({
      proposalId: BigInt(proposalId),
      voter: aminoAddress,
    });

    expect(vote.proposalId.toString()).toEqual(proposalId);
    expect(vote.voter).toEqual(aminoAddress);
    expect(vote.option).toEqual(VoteOption.VOTE_OPTION_NO);
  }, 10000);

  it("wait for voting period to end", async () => {
    // wait for the voting period to end
    const { proposal } = await queryClient.proposal({
      proposalId: BigInt(proposalId),
    });

    await expect(waitUntil(proposal.votingEndTime)).resolves.not.toThrow();
  }, 200000);

  it("verify proposal passed", async () => {
    const { proposal } = await queryClient.proposal({
      proposalId: BigInt(proposalId),
    });

    expect(proposal.status).toEqual(ProposalStatus.PROPOSAL_STATUS_PASSED);
  }, 10000);
});
