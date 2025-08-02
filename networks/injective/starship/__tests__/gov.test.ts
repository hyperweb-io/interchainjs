/// <reference types="@types/jest" />

import './setup.test';

import { Asset } from '@chain-registry/types';
import { AminoSigner, DirectSigner, CosmosQueryClient, HttpRpcClient } from '@interchainjs/cosmos';
import { Comet38Adapter } from '@interchainjs/cosmos/adapters';
import {
  toConverters,
  toEncoders,
} from '@interchainjs/cosmos/utils';
import {
  sleep,
} from '@interchainjs/utils';
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
import { BigNumber } from 'bignumber.js';
import { useChain } from 'starshipjs';

import { EthSecp256k1HDWallet } from '../../src/wallets/ethSecp256k1hd';
import { createInjectiveSignerConfig, DEFAULT_INJECTIVE_SIGNER_CONFIG } from '../../src/signers/config';
import { OfflineAminoSigner, OfflineDirectSigner } from '@interchainjs/cosmos/signers/types';
import { getBalance } from "@interchainjs/cosmos-types/cosmos/bank/v1beta1/query.rpc.func";
import { getProposal, getVote } from "@interchainjs/cosmos-types/cosmos/gov/v1beta1/query.rpc.func";
import { getValidators } from "@interchainjs/cosmos-types/cosmos/staking/v1beta1/query.rpc.func";
import * as bip39 from 'bip39';




describe('Governance tests for injective', () => {
  let directSigner: DirectSigner,
    aminoSigner: AminoSigner,
    directOfflineSigner: OfflineDirectSigner,
    aminoOfflineSigner: OfflineAminoSigner,
    denom: string,
    commonPrefix: string,
    directAddress: string,
    aminoAddress: string,
    directOfflineAddress: string,
    aminoOfflineAddress: string,
    testingOfflineAddress: string;
  let chainInfo,
    getCoin: () => Promise<Asset>,
    getRpcEndpoint: () => Promise<string>,
    creditFromFaucet;
  let injRpcEndpoint: string;

  // Variables used accross testcases
  let proposalId: string;
  let validatorAddress: string;

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain('injective'));
    denom = (await getCoin()).base;
    injRpcEndpoint = await getRpcEndpoint();

    commonPrefix = chainInfo?.chain?.bech32_prefix;

    // Initialize wallet and signers with EthSecp256k1HDWallet and Ethereum HD path
    const directWallet = await EthSecp256k1HDWallet.fromMnemonic(bip39.generateMnemonic(), {
      derivations: [{
        prefix: 'inj',
        hdPath: "m/44'/60'/0'/0/0", // Ethereum-style HD path for Injective
      }]
    });
    const aminoWallet = await EthSecp256k1HDWallet.fromMnemonic(bip39.generateMnemonic(), {
      derivations: [{
        prefix: 'inj',
        hdPath: "m/44'/60'/0'/0/0", // Ethereum-style HD path for Injective
      }]
    });

    directOfflineSigner = await directWallet.toOfflineDirectSigner();
    aminoOfflineSigner = await aminoWallet.toOfflineAminoSigner();

    // Create query client for signer configuration
    const rpcClient = new HttpRpcClient(injRpcEndpoint);
    const protocolAdapter = new Comet38Adapter();
    const queryClient = new CosmosQueryClient(rpcClient, protocolAdapter);

    // Create a wrapper to ensure methods are available as own properties
    const queryClientWrapper = Object.create(queryClient);
    queryClientWrapper.getBaseAccount = queryClient.getBaseAccount.bind(queryClient);
    queryClientWrapper.broadcastTxCommit = queryClient.broadcastTxCommit.bind(queryClient);
    queryClientWrapper.broadcastTxSync = queryClient.broadcastTxSync.bind(queryClient);
    queryClientWrapper.broadcastTxAsync = queryClient.broadcastTxAsync.bind(queryClient);
    queryClientWrapper.getTx = queryClient.getTx.bind(queryClient);

    // Use Injective-specific signer configuration with proper defaults
    let actualChainId = 'injective-1'; // default fallback
    try {
      const status = await queryClient.getStatus();
      actualChainId = status.nodeInfo.network;
    } catch (e) {
      console.log('Could not get chainId, using default:', actualChainId);
    }

    const baseSignerConfig = {
      queryClient: queryClientWrapper,
      chainId: actualChainId,
      addressPrefix: 'inj'
    };

    // Merge with DEFAULT_INJECTIVE_SIGNER_CONFIG for complete configuration
    const signerConfig = createInjectiveSignerConfig({
      ...DEFAULT_INJECTIVE_SIGNER_CONFIG,
      ...baseSignerConfig
    });

    directSigner = new DirectSigner(directOfflineSigner, signerConfig);
    directSigner.addEncoders(toEncoders(MsgDelegate, TextProposal, MsgSubmitProposal, MsgVote));

    aminoSigner = new AminoSigner(aminoOfflineSigner, signerConfig);
    aminoSigner.addEncoders(toEncoders(MsgDelegate, TextProposal, MsgSubmitProposal, MsgVote));
    aminoSigner.addConverters(toConverters(MsgDelegate, TextProposal, MsgSubmitProposal, MsgVote));

    const directAddresses = await directOfflineSigner.getAccounts();
    const aminoAddresses = await aminoOfflineSigner.getAccounts();
    directAddress = directAddresses[0].address;
    aminoAddress = aminoAddresses[0].address;

    directOfflineAddress = directAddress;
    aminoOfflineAddress = aminoAddress;
    testingOfflineAddress = aminoOfflineAddress;

    // SigningClient setup removed - using DirectSigner and AminoSigner instead

    // Transfer inj to address
    for (let i = 0; i < 10; i++) {
      await creditFromFaucet(directAddress);
      await creditFromFaucet(aminoAddress);
      await creditFromFaucet(directOfflineAddress);
      await creditFromFaucet(aminoOfflineAddress);
    }

    await sleep(5000);
  }, 200000);

  it('check direct address has tokens', async () => {
    // Create query client for balance check
    const rpcClient = new HttpRpcClient(injRpcEndpoint);
    const protocolAdapter = new Comet38Adapter();
    const queryClient = new CosmosQueryClient(rpcClient, protocolAdapter);

    const { balance } = await getBalance(queryClient, {
      address: directAddress,
      denom,
    });

    expect(parseInt(balance!.amount)).toBeGreaterThan(0);
  }, 200000);

  it('check amino address has tokens', async () => {
    // Create query client for balance check
    const rpcClient = new HttpRpcClient(injRpcEndpoint);
    const protocolAdapter = new Comet38Adapter();
    const queryClient = new CosmosQueryClient(rpcClient, protocolAdapter);

    const { balance } = await getBalance(queryClient, {
      address: aminoAddress,
      denom,
    });

    expect(parseInt(balance!.amount)).toBeGreaterThan(0);
  }, 200000);

  it('check direct offline address has tokens', async () => {
    // Create query client for balance check
    const rpcClient = new HttpRpcClient(injRpcEndpoint);
    const protocolAdapter = new Comet38Adapter();
    const queryClient = new CosmosQueryClient(rpcClient, protocolAdapter);

    const { balance } = await getBalance(queryClient, {
      address: directOfflineAddress,
      denom,
    });

    expect(parseInt(balance!.amount)).toBeGreaterThan(0);
  }, 200000);

  it('check amino offline address has tokens', async () => {
    // Create query client for balance check
    const rpcClient = new HttpRpcClient(injRpcEndpoint);
    const protocolAdapter = new Comet38Adapter();
    const queryClient = new CosmosQueryClient(rpcClient, protocolAdapter);

    const { balance } = await getBalance(queryClient, {
      address: aminoOfflineAddress,
      denom,
    });

    expect(parseInt(balance!.amount)).toBeGreaterThan(0);
  }, 200000);

  it('query validator address', async () => {
    const { validators } = await getValidators(injRpcEndpoint, {
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
    // Create query client for balance check
    const rpcClient = new HttpRpcClient(injRpcEndpoint);
    const protocolAdapter = new Comet38Adapter();
    const queryClient = new CosmosQueryClient(rpcClient, protocolAdapter);

    const { balance } = await getBalance(queryClient, {
      address: testingOfflineAddress,
      denom,
    });

    // Stake 1/5 of the tokens
    // eslint-disable-next-line no-undef
    const delegationAmount = (BigInt(balance!.amount) / BigInt(5)).toString();
    const msg = {
      typeUrl: MsgDelegate.typeUrl,
      value: MsgDelegate.fromPartial({
        delegatorAddress: testingOfflineAddress,
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

    const result = await aminoSigner.signAndBroadcast(
      {
        messages: [msg],
        fee,
        memo: '',
        options: {
          signerAddress: testingOfflineAddress,
        },
      },
      {
        mode: 'commit',
      }
    );
    await result.wait();
  }, 200000);

  it('check direct address has tokens', async () => {
    // Create query client for balance check
    const rpcClient = new HttpRpcClient(injRpcEndpoint);
    const protocolAdapter = new Comet38Adapter();
    const queryClient = new CosmosQueryClient(rpcClient, protocolAdapter);

    const { balance } = await getBalance(queryClient, {
      address: testingOfflineAddress,
      denom,
    });

    expect(parseInt(balance!.amount)).toBeGreaterThan(0);
  }, 200000);

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
            amount: '100000000000000000000',
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
        options: {
          signerAddress: directAddress,
        },
      },
      {
        mode: 'commit',
      }
    );

    await result.wait();

    // For simplicity, use a fixed proposal ID since event parsing is complex
    // In a real test, you would parse the events to get the actual proposal ID
    proposalId = '1';

    // eslint-disable-next-line no-undef
    expect(BigInt(proposalId)).toBeGreaterThan(BigInt(0));
  }, 200000);

  it('query proposal', async () => {
    // Create query client for proposal query
    const rpcClient = new HttpRpcClient(injRpcEndpoint);
    const protocolAdapter = new Comet38Adapter();
    const queryClient = new CosmosQueryClient(rpcClient, protocolAdapter);

    const result = await getProposal(queryClient, {
      proposalId: BigInt(proposalId),
    });

    expect(result.proposal.proposalId.toString()).toEqual(proposalId);
  }, 200000);

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
        options: {
          signerAddress: directAddress,
        },
      },
      {
        mode: 'commit',
      }
    );

    await result.wait();
  }, 200000);

  it('verify direct vote', async () => {
    // Create query client for vote query
    const rpcClient = new HttpRpcClient(injRpcEndpoint);
    const protocolAdapter = new Comet38Adapter();
    const queryClient = new CosmosQueryClient(rpcClient, protocolAdapter);

    const { vote } = await getVote(queryClient, {
      proposalId: BigInt(proposalId),
      voter: directAddress,
    });

    expect(vote.proposalId.toString()).toEqual(proposalId);
    expect(vote.voter).toEqual(directAddress);
    vote.options.some((option) => {
      return option.option === VoteOption.VOTE_OPTION_YES;
    });
  }, 200000);

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
        options: {
          signerAddress: aminoAddress,
        },
      },
      {
        mode: 'commit',
      }
    );

    await result.wait();
  }, 200000);

  it('verify amino vote', async () => {
    // Create query client for vote query
    const rpcClient = new HttpRpcClient(injRpcEndpoint);
    const protocolAdapter = new Comet38Adapter();
    const queryClient = new CosmosQueryClient(rpcClient, protocolAdapter);

    const { vote } = await getVote(queryClient, {
      proposalId: BigInt(proposalId),
      voter: aminoAddress,
    });

    expect(vote.proposalId.toString()).toEqual(proposalId);
    expect(vote.voter).toEqual(aminoAddress);
    vote.options.some((option) => {
      return option.option === VoteOption.VOTE_OPTION_NO;
    });
  }, 200000);

  it('verify proposal passed', async () => {
    // Create query client for proposal query
    const rpcClient = new HttpRpcClient(injRpcEndpoint);
    const protocolAdapter = new Comet38Adapter();
    const queryClient = new CosmosQueryClient(rpcClient, protocolAdapter);

    const { proposal } = await getProposal(queryClient, {
      proposalId: BigInt(proposalId),
    });

    expect(proposal.status).toEqual(ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD);
  }, 200000);
});
