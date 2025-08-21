import { TelescopeInput } from '@hyperweb/telescope';
import telescope from '@hyperweb/telescope';
import { join } from 'path';
import { rimrafSync as rimraf } from 'rimraf';
import deepmerge from 'deepmerge';
import { readFileSync, writeFileSync, existsSync, mkdirSync, cpSync } from 'fs';

/**
 * Preserves the interchain/core directory before rimraf
 */
function preserveInterchainCore(srcPath: string, tempPath: string) {
  const interchainCorePath = join(srcPath, 'interchain');
  if (existsSync(interchainCorePath)) {
    console.log('📦 preserving interchain/core directory...');
    cpSync(interchainCorePath, tempPath, { recursive: true });
    return true;
  }
  return false;
}

/**
 * Restores the interchain/core directory after telescope generation
 */
function restoreInterchainCore(srcPath: string, tempPath: string) {
  if (existsSync(tempPath)) {
    console.log('📦 restoring interchain/core directory...');
    const interchainPath = join(srcPath, 'interchain');
    if (!existsSync(interchainPath)) {
      mkdirSync(interchainPath, { recursive: true });
    }
    cpSync(tempPath, interchainPath, { recursive: true });
    rimraf(tempPath); // Clean up temp directory
  }
}

/**
 * Adds the interchain core export to the generated index.ts file
 * This ensures getSigner and other core utilities are exported from the main package
 */
function addInterchainCoreExport(indexPath: string) {
  try {
    const content = readFileSync(indexPath, 'utf8');
    const exportLine = 'export * from "./interchain/core";';

    // Check if the export line already exists
    if (content.includes(exportLine)) {
      console.log('✨ interchain/core export already exists in index.ts');
      return;
    }

    // Add the export line at the end
    const updatedContent = content + exportLine + '\n';
    writeFileSync(indexPath, updatedContent, 'utf8');
    console.log('✨ added interchain/core export to index.ts');
  } catch (error) {
    console.error('Failed to add interchain/core export:', error);
  }
}

export const options: TelescopeInput = {
  protoDirs: [],
  outPath: '',
  options: {
    "classesUseArrowFunctions": true,
    "env": "v-next",
    "useInterchainJs": true,
    "useSDKTypes": false,
    "prototypes": {
      "enableRegistryLoader": false,
      "enableMessageComposer": true,
      "enabled": true,
      "parser": {
        "keepCase": false
      },
      "methods": {
        "fromJSON": false,
        "toJSON": false,
        "encode": true,
        "decode": true,
        "fromPartial": true,
        "toAmino": true,
        "fromAmino": true,
        "fromProto": false,
        "toProto": false,
      },
      "addTypeUrlToDecoders": true,
      "addTypeUrlToObjects": true,
      "addAminoTypeToObjects": true,
      "typingsFormat": {
        "duration": "duration",
        "timestamp": "date",
        "useExact": false,
        "useDeepPartial": true,
        "num64": "bigint",
        "customTypes": {
          "useCosmosSDKDec": true,
          "useEnhancedDecimal": false
        },
        "useTelescopeGeneratedType": true,
        "autoFixUndefinedEnumDefault": true
      }
    },
    "bundle": {
      "enabled": true,
      type: "module",
      noAlias: [
        // Bank module
        { package: "cosmos.bank.v1beta1", name: "getBalance" },
        { package: "cosmos.bank.v1beta1", name: "getAllBalances" },
        { package: "cosmos.bank.v1beta1", name: "getSpendableBalances" },
        { package: "cosmos.bank.v1beta1", name: "getTotalSupply" },
        { package: "cosmos.bank.v1beta1", name: "getSupplyOf" },
        { package: "cosmos.bank.v1beta1", name: "getDenomMetadata" },
        { package: "cosmos.bank.v1beta1", name: "send" },
        { package: "cosmos.bank.v1beta1", name: "multiSend" },

        // Staking module
        { package: "cosmos.staking.v1beta1", name: "getValidators" },
        { package: "cosmos.staking.v1beta1", name: "getValidator" },
        { package: "cosmos.staking.v1beta1", name: "delegate" },
        { package: "cosmos.staking.v1beta1", name: "undelegate" },
        { package: "cosmos.staking.v1beta1", name: "beginRedelegate" },
        { package: "cosmos.staking.v1beta1", name: "cancelUnbondingDelegation" },

        // Gov module v1beta1
        { package: "cosmos.gov.v1beta1", name: "getProposal" },
        { package: "cosmos.gov.v1beta1", name: "getProposals" },
        { package: "cosmos.gov.v1beta1", name: "vote" },
        { package: "cosmos.gov.v1beta1", name: "deposit" },
        { package: "cosmos.gov.v1beta1", name: "submitProposal" },
        { package: "cosmos.gov.v1beta1", name: "getDeposit" },
        { package: "cosmos.gov.v1beta1", name: "getDeposits" },
        { package: "cosmos.gov.v1beta1", name: "getTallyResult" },

        // Auth module
        { package: "cosmos.auth.v1beta1", name: "getAccount" },
        { package: "cosmos.auth.v1beta1", name: "getAccounts" },
        { package: "cosmos.auth.v1beta1", name: "getParams" },

        // Distribution module
        { package: "cosmos.distribution.v1beta1", name: "setWithdrawAddress" },
        { package: "cosmos.distribution.v1beta1", name: "withdrawDelegatorReward" },
        { package: "cosmos.distribution.v1beta1", name: "withdrawValidatorCommission" },
        { package: "cosmos.distribution.v1beta1", name: "fundCommunityPool" },

        // Authz module
        { package: "cosmos.authz.v1beta1", name: "grant" },
        { package: "cosmos.authz.v1beta1", name: "revoke" },
        { package: "cosmos.authz.v1beta1", name: "exec" },

        // Message Types - Bank
        { package: "cosmos.bank.v1beta1", name: "MsgSend" },
        { package: "cosmos.bank.v1beta1", name: "MsgMultiSend" },
        { package: "cosmos.bank.v1beta1", name: "MsgUpdateParams" },
        { package: "cosmos.bank.v1beta1", name: "MsgSetSendEnabled" },

        // Message Types - Staking
        { package: "cosmos.staking.v1beta1", name: "MsgCreateValidator" },
        { package: "cosmos.staking.v1beta1", name: "MsgEditValidator" },
        { package: "cosmos.staking.v1beta1", name: "MsgDelegate" },
        { package: "cosmos.staking.v1beta1", name: "MsgBeginRedelegate" },
        { package: "cosmos.staking.v1beta1", name: "MsgUndelegate" },
        { package: "cosmos.staking.v1beta1", name: "MsgCancelUnbondingDelegation" },

        // Message Types - Gov v1beta1
        { package: "cosmos.gov.v1beta1", name: "MsgSubmitProposal" },
        { package: "cosmos.gov.v1beta1", name: "MsgVote" },
        { package: "cosmos.gov.v1beta1", name: "MsgVoteWeighted" },
        { package: "cosmos.gov.v1beta1", name: "MsgDeposit" },

        // Message Types - Distribution
        { package: "cosmos.distribution.v1beta1", name: "MsgSetWithdrawAddress" },
        { package: "cosmos.distribution.v1beta1", name: "MsgWithdrawDelegatorReward" },
        { package: "cosmos.distribution.v1beta1", name: "MsgWithdrawValidatorCommission" },
        { package: "cosmos.distribution.v1beta1", name: "MsgFundCommunityPool" },
        { package: "cosmos.distribution.v1beta1", name: "MsgCommunityPoolSpend" },
        { package: "cosmos.distribution.v1beta1", name: "MsgDepositValidatorRewardsPool" },

        // Message Types - Authz
        { package: "cosmos.authz.v1beta1", name: "MsgGrant" },
        { package: "cosmos.authz.v1beta1", name: "MsgExec" },
        { package: "cosmos.authz.v1beta1", name: "MsgRevoke" },

        // Query Request Types - Bank
        { package: "cosmos.bank.v1beta1", name: "QueryBalanceRequest" },
        { package: "cosmos.bank.v1beta1", name: "QueryAllBalancesRequest" },
        { package: "cosmos.bank.v1beta1", name: "QuerySpendableBalancesRequest" },
        { package: "cosmos.bank.v1beta1", name: "QueryTotalSupplyRequest" },
        { package: "cosmos.bank.v1beta1", name: "QuerySupplyOfRequest" },
        { package: "cosmos.bank.v1beta1", name: "QueryParamsRequest" },
        { package: "cosmos.bank.v1beta1", name: "QueryDenomMetadataRequest" },

        // Query Response Types - Bank
        { package: "cosmos.bank.v1beta1", name: "QueryBalanceResponse" },
        { package: "cosmos.bank.v1beta1", name: "QueryAllBalancesResponse" },
        { package: "cosmos.bank.v1beta1", name: "QuerySpendableBalancesResponse" },
        { package: "cosmos.bank.v1beta1", name: "QueryTotalSupplyResponse" },
        { package: "cosmos.bank.v1beta1", name: "QuerySupplyOfResponse" },
        { package: "cosmos.bank.v1beta1", name: "QueryParamsResponse" },
        { package: "cosmos.bank.v1beta1", name: "QueryDenomMetadataResponse" },

        // Query Request Types - Staking
        { package: "cosmos.staking.v1beta1", name: "QueryValidatorsRequest" },
        { package: "cosmos.staking.v1beta1", name: "QueryValidatorRequest" },
        { package: "cosmos.staking.v1beta1", name: "QueryValidatorDelegationsRequest" },
        { package: "cosmos.staking.v1beta1", name: "QueryDelegationRequest" },
        { package: "cosmos.staking.v1beta1", name: "QueryUnbondingDelegationRequest" },
        { package: "cosmos.staking.v1beta1", name: "QueryDelegatorDelegationsRequest" },
        { package: "cosmos.staking.v1beta1", name: "QueryDelegatorUnbondingDelegationsRequest" },
        { package: "cosmos.staking.v1beta1", name: "QueryRedelegationsRequest" },
        { package: "cosmos.staking.v1beta1", name: "QueryDelegatorValidatorsRequest" },
        { package: "cosmos.staking.v1beta1", name: "QueryDelegatorValidatorRequest" },
        { package: "cosmos.staking.v1beta1", name: "QueryHistoricalInfoRequest" },
        { package: "cosmos.staking.v1beta1", name: "QueryPoolRequest" },
        { package: "cosmos.staking.v1beta1", name: "QueryParamsRequest" },

        // Query Response Types - Staking
        { package: "cosmos.staking.v1beta1", name: "QueryValidatorsResponse" },
        { package: "cosmos.staking.v1beta1", name: "QueryValidatorResponse" },
        { package: "cosmos.staking.v1beta1", name: "QueryValidatorDelegationsResponse" },
        { package: "cosmos.staking.v1beta1", name: "QueryDelegationResponse" },
        { package: "cosmos.staking.v1beta1", name: "QueryUnbondingDelegationResponse" },
        { package: "cosmos.staking.v1beta1", name: "QueryDelegatorDelegationsResponse" },
        { package: "cosmos.staking.v1beta1", name: "QueryDelegatorUnbondingDelegationsResponse" },
        { package: "cosmos.staking.v1beta1", name: "QueryRedelegationsResponse" },
        { package: "cosmos.staking.v1beta1", name: "QueryDelegatorValidatorsResponse" },
        { package: "cosmos.staking.v1beta1", name: "QueryDelegatorValidatorResponse" },
        { package: "cosmos.staking.v1beta1", name: "QueryHistoricalInfoResponse" },
        { package: "cosmos.staking.v1beta1", name: "QueryPoolResponse" },
        { package: "cosmos.staking.v1beta1", name: "QueryParamsResponse" },

        // Query Request Types - Gov v1beta1
        { package: "cosmos.gov.v1beta1", name: "QueryProposalRequest" },
        { package: "cosmos.gov.v1beta1", name: "QueryProposalsRequest" },
        { package: "cosmos.gov.v1beta1", name: "QueryVoteRequest" },
        { package: "cosmos.gov.v1beta1", name: "QueryVotesRequest" },
        { package: "cosmos.gov.v1beta1", name: "QueryParamsRequest" },
        { package: "cosmos.gov.v1beta1", name: "QueryDepositRequest" },
        { package: "cosmos.gov.v1beta1", name: "QueryDepositsRequest" },
        { package: "cosmos.gov.v1beta1", name: "QueryTallyResultRequest" },

        // Query Response Types - Gov v1beta1
        { package: "cosmos.gov.v1beta1", name: "QueryProposalResponse" },
        { package: "cosmos.gov.v1beta1", name: "QueryProposalsResponse" },
        { package: "cosmos.gov.v1beta1", name: "QueryVoteResponse" },
        { package: "cosmos.gov.v1beta1", name: "QueryVotesResponse" },
        { package: "cosmos.gov.v1beta1", name: "QueryParamsResponse" },
        { package: "cosmos.gov.v1beta1", name: "QueryDepositResponse" },
        { package: "cosmos.gov.v1beta1", name: "QueryDepositsResponse" },
        { package: "cosmos.gov.v1beta1", name: "QueryTallyResultResponse" },

        // Query Request Types - Auth
        { package: "cosmos.auth.v1beta1", name: "QueryAccountsRequest" },
        { package: "cosmos.auth.v1beta1", name: "QueryAccountRequest" },
        { package: "cosmos.auth.v1beta1", name: "QueryAccountAddressByIDRequest" },
        { package: "cosmos.auth.v1beta1", name: "QueryParamsRequest" },
        { package: "cosmos.auth.v1beta1", name: "QueryModuleAccountsRequest" },
        { package: "cosmos.auth.v1beta1", name: "QueryModuleAccountByNameRequest" },

        // Query Response Types - Auth
        { package: "cosmos.auth.v1beta1", name: "QueryAccountsResponse" },
        { package: "cosmos.auth.v1beta1", name: "QueryAccountResponse" },
        { package: "cosmos.auth.v1beta1", name: "QueryAccountAddressByIDResponse" },
        { package: "cosmos.auth.v1beta1", name: "QueryParamsResponse" },
        { package: "cosmos.auth.v1beta1", name: "QueryModuleAccountsResponse" },
        { package: "cosmos.auth.v1beta1", name: "QueryModuleAccountByNameResponse" },

        // Common Types and Interfaces
        { package: "cosmos.base.v1beta1", name: "Coin" },
        { package: "cosmos.base.query.v1beta1", name: "PageRequest" },
        { package: "cosmos.base.query.v1beta1", name: "PageResponse" },
        { package: "cosmos.tx.v1beta1", name: "TxBody" },
        { package: "cosmos.tx.v1beta1", name: "AuthInfo" },
        { package: "cosmos.tx.v1beta1", name: "SignerInfo" },
        { package: "cosmos.tx.v1beta1", name: "ModeInfo" },
        { package: "cosmos.tx.v1beta1", name: "Fee" },
        { package: "cosmos.tx.v1beta1", name: "Tx" },
        { package: "cosmos.tx.v1beta1", name: "TxRaw" },
        { package: "cosmos.tx.v1beta1", name: "SignDoc" },
        { package: "cosmos.tx.signing.v1beta1", name: "SignMode" },

        // Staking Types
        { package: "cosmos.staking.v1beta1", name: "Validator" },
        { package: "cosmos.staking.v1beta1", name: "Delegation" },
        { package: "cosmos.staking.v1beta1", name: "DelegationResponse" },
        { package: "cosmos.staking.v1beta1", name: "UnbondingDelegation" },
        { package: "cosmos.staking.v1beta1", name: "UnbondingDelegationEntry" },
        { package: "cosmos.staking.v1beta1", name: "Redelegation" },
        { package: "cosmos.staking.v1beta1", name: "RedelegationEntry" },
        { package: "cosmos.staking.v1beta1", name: "RedelegationResponse" },
        { package: "cosmos.staking.v1beta1", name: "Pool" },
        { package: "cosmos.staking.v1beta1", name: "Params" },
        { package: "cosmos.staking.v1beta1", name: "Commission" },
        { package: "cosmos.staking.v1beta1", name: "CommissionRates" },
        { package: "cosmos.staking.v1beta1", name: "Description" },
        { package: "cosmos.staking.v1beta1", name: "HistoricalInfo" },

        // Gov Types
        { package: "cosmos.gov.v1beta1", name: "Proposal" },
        { package: "cosmos.gov.v1beta1", name: "Vote" },
        { package: "cosmos.gov.v1beta1", name: "Deposit" },
        { package: "cosmos.gov.v1beta1", name: "TallyResult" },
        { package: "cosmos.gov.v1beta1", name: "VotingParams" },
        { package: "cosmos.gov.v1beta1", name: "DepositParams" },
        { package: "cosmos.gov.v1beta1", name: "TallyParams" },
        { package: "cosmos.gov.v1beta1", name: "TextProposal" },

        // Auth Types
        { package: "cosmos.auth.v1beta1", name: "BaseAccount" },
        { package: "cosmos.auth.v1beta1", name: "ModuleAccount" },
        { package: "cosmos.auth.v1beta1", name: "Params" },

        // Bank Types
        { package: "cosmos.bank.v1beta1", name: "Params" },
        { package: "cosmos.bank.v1beta1", name: "SendEnabled" },
        { package: "cosmos.bank.v1beta1", name: "Input" },
        { package: "cosmos.bank.v1beta1", name: "Output" },
        { package: "cosmos.bank.v1beta1", name: "Supply" },
        { package: "cosmos.bank.v1beta1", name: "DenomUnit" },
        { package: "cosmos.bank.v1beta1", name: "Metadata" },

        // Enums - Staking
        { package: "cosmos.staking.v1beta1", name: "BondStatus" },
        { package: "cosmos.staking.v1beta1", name: "Infraction" },

        // Enums - Gov
        { package: "cosmos.gov.v1beta1", name: "VoteOption" },
        { package: "cosmos.gov.v1beta1", name: "ProposalStatus" },
        { package: "cosmos.gov.v1", name: "VoteOption" },
        { package: "cosmos.gov.v1", name: "ProposalStatus" },

        // Authz Types
        { package: "cosmos.authz.v1beta1", name: "GenericAuthorization" },
        { package: "cosmos.authz.v1beta1", name: "Grant" },
        { package: "cosmos.authz.v1beta1", name: "GrantAuthorization" },
        { package: "cosmos.authz.v1beta1", name: "GrantQueueItem" },
        { package: "cosmos.authz.v1beta1", name: "EventGrant" },
        { package: "cosmos.authz.v1beta1", name: "EventRevoke" },

        // Distribution Types
        { package: "cosmos.distribution.v1beta1", name: "Params" },
        { package: "cosmos.distribution.v1beta1", name: "ValidatorHistoricalRewards" },
        { package: "cosmos.distribution.v1beta1", name: "ValidatorCurrentRewards" },
        { package: "cosmos.distribution.v1beta1", name: "ValidatorAccumulatedCommission" },
        { package: "cosmos.distribution.v1beta1", name: "ValidatorOutstandingRewards" },
        { package: "cosmos.distribution.v1beta1", name: "ValidatorSlashEvent" },
        { package: "cosmos.distribution.v1beta1", name: "ValidatorSlashEvents" },
        { package: "cosmos.distribution.v1beta1", name: "FeePool" },
        { package: "cosmos.distribution.v1beta1", name: "CommunityPoolSpendProposal" },
        { package: "cosmos.distribution.v1beta1", name: "DelegatorStartingInfo" },
        { package: "cosmos.distribution.v1beta1", name: "DelegationDelegatorReward" },
        { package: "cosmos.distribution.v1beta1", name: "CommunityPoolSpendProposalWithDeposit" },

        // Google Protobuf Types
        { package: "google.protobuf", name: "Any" },
        { package: "google.protobuf", name: "Timestamp" },
        { package: "google.protobuf", name: "Duration" },
        { package: "google.protobuf", name: "Empty" },

        // Tendermint Types
        { package: "tendermint.types", name: "Validator" },
        { package: "tendermint.types", name: "Vote" },
        { package: "tendermint.types", name: "Proposal" },
        { package: "tendermint.types", name: "Header" },
        { package: "tendermint.types", name: "BlockID" },
        { package: "tendermint.types", name: "PartSetHeader" },
        { package: "tendermint.types", name: "Commit" },
        { package: "tendermint.types", name: "CommitSig" },
        { package: "tendermint.types", name: "Data" },
        { package: "tendermint.types", name: "Evidence" },
        { package: "tendermint.types", name: "EvidenceList" },
        { package: "tendermint.types", name: "Block" },
        { package: "tendermint.types", name: "LightBlock" },
        { package: "tendermint.types", name: "BlockMeta" },
        { package: "tendermint.types", name: "TxProof" },
      ],
    },
    "stargateClients": {
      "enabled": false
    },
    "lcdClients": {
      "enabled": false
    },
    "rpcClients": {
      "enabled": false
    },
    "helperFunctions": {
      "enabled": true,
      "useGlobalDecoderRegistry": true,
      "hooks": {
        "react": false,
        "vue": false
      },
      nameMappers: {
        Query: {
          "cosmos.tx.v1beta1.GetTx": {
            funcBody: "unchanged"
          },
          "cosmos.tx.v1beta1.GetTxsEvent": {
            funcBody: "unchanged"
          },
          "cosmos.tx.v1beta1.GetBlockWithTxs": {
            funcBody: "unchanged"
          },
        },
      },
    },
    "interfaces": {
      "enabled": true,
      "useGlobalDecoderRegistry": true,
      "registerAllDecodersToGlobal": false,
      "useUnionTypes": true
    },
    "aminoEncoding": {
      "enabled": true,
      "useLegacyInlineEncoding": false,
      "disableMsgTypes": false,
      "useProtoOptionality": true,
      "customTypes": {
        "useCosmosSDKDec": true
      }
    }
  }
};

rimraf(join(__dirname, '../libs/cosmos-types/src'));

// Preserve interchain/core before deleting interchainjs/src
const interchainJsSrcPath = join(__dirname, '../libs/interchainjs/src');
const tempInterchainPath = join(__dirname, '../temp-interchain-core');
const hasInterchainCore = preserveInterchainCore(interchainJsSrcPath, tempInterchainPath);

rimraf(interchainJsSrcPath);
rimraf(join(__dirname, '../libs/interchain-vue/src'));
rimraf(join(__dirname, '../libs/interchain-react/src'));
rimraf(join(__dirname, '../libs/injectivejs/src'));
rimraf(join(__dirname, '../libs/injective-vue/src'));
rimraf(join(__dirname, '../libs/injective-react/src'));

// cosmos-types
telescope({
  protoDirs: [join(__dirname, '../protos/interchainjs')],
  outPath: join(__dirname, '../libs/cosmos-types/src'),
  options: deepmerge(options.options, {
    "isGeneratingCosmosTypes": true,
    "prototypes": {
      "enableRegistryLoader": false,
      "enableMessageComposer": false,
      "includes": {
        "protos": [
          "cosmos/vesting/v1beta1/vesting.proto",
          "cosmos/tx/v1beta1/service.proto",
          "cosmos/tx/signing/v1beta1/signing.proto",
          "cosmos/tx/v1beta1/tx.proto",
          "cosmos/tx/v1beta1/service.proto",
          "injective/types/v1beta1/account.proto",
          "cosmos/auth/v1beta1/auth.proto",
          "cosmos/auth/v1beta1/query.proto",
          "cosmos/bank/v1beta1/bank.proto",
          "cosmos/bank/v1beta1/query.proto",
          "cosmos/gov/v1beta1/gov.proto",
          "cosmos/gov/v1beta1/query.proto",
          "cosmos/staking/v1beta1/staking.proto",
          "cosmos/staking/v1beta1/query.proto",
          "cosmos/crypto/secp256k1/keys.proto",
          "cosmos/crypto/ed25519/keys.proto",
          "cosmos/crypto/multisig/keys.proto"
        ]
      },
      "methods": {
        "fromJSON": false,
        "toJSON": false,
        "encode": true,
        "decode": true,
        "fromPartial": true,
        "toAmino": false,
        "fromAmino": false,
        "fromProto": false,
        "toProto": false,
      },
    },
    "interfaces": {
      "enabled": false
    },
    "aminoEncoding": {
      "enabled": false
    },
    "stargateClients": {
      "enabled": false
    },
    "lcdClients": {
      "enabled": false
    },
    "rpcClients": {
      "enabled": false
    }
  })
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

// interchainjs
telescope({
  protoDirs: [join(__dirname, '../protos/interchainjs')],
  outPath: join(__dirname, '../libs/interchainjs/src'),
  options: options.options
})
  .then(() => {
    // Restore the interchain/core directory if it was preserved
    if (hasInterchainCore) {
      restoreInterchainCore(interchainJsSrcPath, tempInterchainPath);
    }

    // Add the interchain/core export after generation
    const indexPath = join(__dirname, '../libs/interchainjs/src/index.ts');
    addInterchainCoreExport(indexPath);
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

// interchain-vue
telescope({
  protoDirs: [join(__dirname, '../protos/interchainjs')],
  outPath: join(__dirname, '../libs/interchain-vue/src'),
  options: deepmerge(options.options, {
    "helperFunctions": {
      "hooks": {
        "vue": true
      }
    },
  }),
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

// interchain-react
telescope({
  protoDirs: [join(__dirname, '../protos/interchainjs')],
  outPath: join(__dirname, '../libs/interchain-react/src'),
  options: deepmerge(options.options, {
    "helperFunctions": {
      "hooks": {
        "react": true
      }
    },
  }),
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

// injectivejs
telescope({
  protoDirs: [join(__dirname, '../protos/injectivejs')],
  outPath: join(__dirname, '../libs/injectivejs/src'),
  options: options.options
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

// injective-vue
telescope({
  protoDirs: [join(__dirname, '../protos/injectivejs')],
  outPath: join(__dirname, '../libs/injective-vue/src'),
  options: deepmerge(options.options, {
    "helperFunctions": {
      "hooks": {
        "vue": true
      }
    },
  }),
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

// injective-react
telescope({
  protoDirs: [join(__dirname, '../protos/injectivejs')],
  outPath: join(__dirname, '../libs/injective-react/src'),
  options: deepmerge(options.options, {
    "helperFunctions": {
      "hooks": {
        "react": true
      }
    },
  }),
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
