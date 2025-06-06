import './setup.test';

import { Asset } from '@chain-registry/types';
import { Secp256k1Auth } from '@interchainjs/auth/secp256k1';
import { AminoSigner } from '@interchainjs/cosmos/signers/amino';
import { DirectSigner } from '@interchainjs/cosmos/signers/direct';
import {
  assertIsDeliverTxSuccess,
  toConverters,
  toEncoders,
} from '@interchainjs/cosmos/utils';
import {
  ProposalStatus,
  TextProposal,
  VoteOption,
} from 'interchainjs/cosmos/gov/v1beta1/gov';
import {
  MsgSubmitProposal,
  MsgVote,
} from 'interchainjs/cosmos/gov/v1beta1/tx';
import {
  BondStatus,
  bondStatusToJSON,
} from 'interchainjs/cosmos/staking/v1beta1/staking';
import { MsgDelegate } from 'interchainjs/cosmos/staking/v1beta1/tx';
import {
  HDPath
} from '@interchainjs/types';
import { fromBase64, toUtf8 } from '@interchainjs/utils';
import { BigNumber } from 'bignumber.js';
import { getBalance } from "@interchainjs/cosmos-types/cosmos/bank/v1beta1/query.rpc.func";
import { getProposal, getVote } from "@interchainjs/cosmos-types/cosmos/gov/v1beta1/query.rpc.func";
import { getValidators } from "@interchainjs/cosmos-types/cosmos/staking/v1beta1/query.rpc.func";
import { useChain } from 'starshipjs';

import { generateMnemonic, waitUntil } from '../src';
import { QueryBalanceRequest, QueryBalanceResponse } from '@interchainjs/cosmos-types/cosmos/bank/v1beta1/query';
import { QueryProposalRequest, QueryProposalResponse, QueryVoteRequest, QueryVoteResponse } from '@interchainjs/cosmos-types/cosmos/gov/v1beta1/query';
import { QueryValidatorsRequest, QueryValidatorsResponse } from '@interchainjs/cosmos-types/cosmos/staking/v1beta1/query';

const cosmosHdPath = "m/44'/118'/0'/0/0";

describe('Governance tests for osmosis', () => {
  let directSigner: DirectSigner,
    aminoSigner: AminoSigner,
    denom: string,
    directAddress: string,
    aminoAddress: string;
  let chainInfo, getCoin: () => Promise<Asset>, getRpcEndpoint: () => Promise<string>, creditFromFaucet;

  // Variables used accross testcases
  let proposalId: string;
  let validatorAddress: string;

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain('osmosis'));
    denom = (await getCoin()).base;

    // Initialize auth
    const rpcEndpoint = await getRpcEndpoint();
    const [directAuth] = Secp256k1Auth.fromMnemonic(generateMnemonic(), [
      cosmosHdPath,
    ]);
    const [aminoAuth] = Secp256k1Auth.fromMnemonic(generateMnemonic(), [
      // use cosmos hdpath built by HDPath
      // we can get cosmos hdpath "m/44'/118'/0'/0/0" by this:
      HDPath.cosmos().toString(),
    ]);
    directSigner = new DirectSigner(
      directAuth,
      // [MsgDelegate, TextProposal, MsgSubmitProposal, MsgVote],
      toEncoders(MsgDelegate, TextProposal, MsgSubmitProposal, MsgVote),
      rpcEndpoint,
      { prefix: chainInfo.chain.bech32_prefix }
    );
    aminoSigner = new AminoSigner(
      aminoAuth,
      // [MsgDelegate, TextProposal, MsgSubmitProposal, MsgVote],
      toEncoders(MsgDelegate, TextProposal, MsgSubmitProposal, MsgVote),
      // [MsgDelegate, TextProposal, MsgSubmitProposal, MsgVote],
      toConverters(MsgDelegate, TextProposal, MsgSubmitProposal, MsgVote),
      rpcEndpoint,
      { prefix: chainInfo.chain.bech32_prefix }
    );
    directAddress = await directSigner.getAddress();
    aminoAddress = await aminoSigner.getAddress();

    // Transfer osmosis to address
    await creditFromFaucet(directAddress);
    await creditFromFaucet(aminoAddress);
  }, 200000);

  it('check direct address has tokens', async () => {
    const { balance } = await getBalance(await getRpcEndpoint(), {
      address: directAddress,
      denom,
    });

    expect(balance!.amount).toEqual('10000000000');
  }, 10000);

  it('check amino address has tokens', async () => {
    const { balance } = await getBalance(await getRpcEndpoint(), {
      address: aminoAddress,
      denom,
    });

    expect(balance!.amount).toEqual('10000000000');
  }, 10000);

  it('query validator address', async () => {
    const { validators } = await getValidators(await getRpcEndpoint(), {
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

  it('stake tokens to genesis validator', async () => {
    const { balance } = await getBalance(await getRpcEndpoint(), {
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
          amount: '100000',
        },
      ],
      gas: '550000',
    };

    const result = await directSigner.signAndBroadcast(
      {
        messages: [msg],
        fee,
        memo: '',
      },
      {
        deliverTx: true,
      }
    );
    assertIsDeliverTxSuccess(result);
  }, 10000);

  it('submit a txt proposal', async () => {
    const contentMsg = TextProposal.fromPartial({
      title: 'Test Proposal',
      description: 'Test text proposal for the e2e testing',
    });

    // Stake half of the tokens
    const msg = {
      typeUrl: MsgSubmitProposal.typeUrl,
      value: MsgSubmitProposal.fromPartial({
        proposer: directAddress,
        initialDeposit: [
          {
            amount: '1000000',
            denom: denom,
          },
        ],
        content: {
          typeUrl: '/cosmos.gov.v1beta1.TextProposal',
          value: TextProposal.encode(contentMsg).finish(),
        },
      }),
    };

    const fee = {
      amount: [
        {
          denom,
          amount: '100000',
        },
      ],
      gas: '550000',
    };

    const result = await directSigner.signAndBroadcast(
      {
        messages: [msg],
        fee,
        memo: '',
      },
      {
        deliverTx: true,
      }
    );
    assertIsDeliverTxSuccess(result);

    // Get proposal id from log events
    const proposalIdEvent = result.events.find(
      (event) => event.type === 'submit_proposal'
    );
    const proposalIdEncoded = proposalIdEvent!.attributes.find(
      (attr) => toUtf8(fromBase64(attr.key)) === 'proposal_id'
    )!.value;
    proposalId = toUtf8(fromBase64(proposalIdEncoded));

    // eslint-disable-next-line no-undef
    expect(BigInt(proposalId)).toBeGreaterThan(BigInt(0));
  }, 200000);

  it('query proposal', async () => {
    const result = await getProposal(await getRpcEndpoint(), {
      proposalId: BigInt(proposalId),
    });

    expect(result.proposal.proposalId.toString()).toEqual(proposalId);
  }, 10000);

  it('vote on proposal using direct', async () => {
    // Vote on proposal from direct address
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
          amount: '100000',
        },
      ],
      gas: '550000',
    };

    const result = await directSigner.signAndBroadcast(
      {
        messages: [msg],
        fee,
        memo: '',
      },
      {
        deliverTx: true,
      }
    );
    assertIsDeliverTxSuccess(result);
  }, 10000);

  it('verify direct vote', async () => {
    const { vote } = await getVote(await getRpcEndpoint(), {
      proposalId: BigInt(proposalId),
      voter: directAddress,
    });

    expect(vote.proposalId.toString()).toEqual(proposalId);
    expect(vote.voter).toEqual(directAddress);
    expect(vote.option).toEqual(VoteOption.VOTE_OPTION_YES);
  }, 10000);

  it('vote on proposal using amino', async () => {
    // Vote on proposal from amino address
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
          amount: '100000',
        },
      ],
      gas: '550000',
    };

    const result = await aminoSigner.signAndBroadcast(
      {
        messages: [msg],
        fee,
        memo: '',
      },
      {
        deliverTx: true,
      }
    );
    assertIsDeliverTxSuccess(result);
  }, 10000);

  it('verify amino vote', async () => {
    const { vote } = await getVote(await getRpcEndpoint(), {
      proposalId: BigInt(proposalId),
      voter: aminoAddress,
    });

    expect(vote.proposalId.toString()).toEqual(proposalId);
    expect(vote.voter).toEqual(aminoAddress);
    expect(vote.option).toEqual(VoteOption.VOTE_OPTION_NO);
  }, 10000);

  it('wait for voting period to end', async () => {
    // wait for the voting period to end
    const { proposal } = await getProposal(await getRpcEndpoint(), {
      proposalId: BigInt(proposalId),
    });

    await expect(waitUntil(proposal.votingEndTime)).resolves.not.toThrow();
  }, 200000);

  it('verify proposal passed', async () => {
    const { proposal } = await getProposal(await getRpcEndpoint(), {
      proposalId: BigInt(proposalId),
    });

    expect(proposal.status).toEqual(ProposalStatus.PROPOSAL_STATUS_PASSED);
  }, 10000);
});
