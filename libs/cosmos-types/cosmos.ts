import { MsgExec, MsgGrant, MsgRevoke } from './cosmos/authz/v1beta1/tx';
import { MsgMultiSend, MsgSend } from './cosmos/bank/v1beta1/tx';
import {
  MsgFundCommunityPool,
  MsgSetWithdrawAddress,
  MsgWithdrawDelegatorReward,
  MsgWithdrawValidatorCommission,
} from './cosmos/distribution/v1beta1/tx';
import {
  MsgGrantAllowance,
  MsgRevokeAllowance,
} from './cosmos/feegrant/v1beta1/tx';
import {
  MsgDeposit as MsgDepositV1,
  MsgExecLegacyContent as MsgExecLegacyContentV1,
  MsgSubmitProposal as MsgSubmitProposalV1,
  MsgVote as MsgVoteV1,
  MsgVoteWeighted as MsgVoteWeightedV1,
} from './cosmos/gov/v1/tx';
import {
  MsgDeposit,
  MsgSubmitProposal,
  MsgVote,
  MsgVoteWeighted,
} from './cosmos/gov/v1beta1/tx';
import {
  MsgCreateGroup,
  MsgCreateGroupPolicy,
  MsgCreateGroupWithPolicy,
  MsgExec as MsgGroupExec,
  MsgLeaveGroup,
  MsgSubmitProposal as MsgGroupSubmitProposal,
  MsgUpdateGroupAdmin,
  MsgUpdateGroupMembers,
  MsgUpdateGroupMetadata,
  MsgUpdateGroupPolicyAdmin,
  MsgUpdateGroupPolicyDecisionPolicy,
  MsgUpdateGroupPolicyMetadata,
  MsgVote as MsgGroupVote,
  MsgWithdrawProposal,
} from './cosmos/group/v1/tx';
import {
  MsgBeginRedelegate,
  MsgCreateValidator,
  MsgDelegate,
  MsgEditValidator,
  MsgUndelegate,
} from './cosmos/staking/v1beta1/tx';
import { MsgCreateVestingAccount } from './cosmos/vesting/v1beta1/tx';
import { MsgTransfer } from './ibc/applications/transfer/v1/tx';
import {
  MsgChannelCloseConfirm,
  MsgChannelCloseInit,
  MsgChannelOpenAck,
  MsgChannelOpenConfirm,
  MsgChannelOpenInit,
  MsgChannelOpenTry,
  MsgRecvPacket,
  MsgTimeout,
  MsgTimeoutOnClose,
} from './ibc/core/channel/v1/tx';
import {
  MsgCreateClient,
  MsgSubmitMisbehaviour,
  MsgUpdateClient,
  MsgUpgradeClient,
} from './ibc/core/client/v1/tx';
import {
  MsgConnectionOpenAck,
  MsgConnectionOpenConfirm,
  MsgConnectionOpenInit,
  MsgConnectionOpenTry,
} from './ibc/core/connection/v1/tx';

const AuthzMsgs = [MsgGrant, MsgExec, MsgRevoke];
const BankMsgs = [MsgSend, MsgMultiSend];
const DistributionMsgs = [
  MsgSetWithdrawAddress,
  MsgWithdrawDelegatorReward,
  MsgWithdrawValidatorCommission,
  MsgFundCommunityPool,
];
const FeeGrantMsgs = [MsgGrantAllowance, MsgRevokeAllowance];
const GovMsgs = [
  MsgDepositV1,
  MsgSubmitProposalV1,
  MsgExecLegacyContentV1,
  MsgVoteV1,
  MsgVoteWeightedV1,
  MsgSubmitProposal,
  MsgVote,
  MsgVoteWeighted,
  MsgDeposit,
];
const GroupMsgs = [
  MsgCreateGroup,
  MsgUpdateGroupMembers,
  MsgUpdateGroupAdmin,
  MsgUpdateGroupMetadata,
  MsgCreateGroupPolicy,
  MsgCreateGroupWithPolicy,
  MsgUpdateGroupPolicyAdmin,
  MsgUpdateGroupPolicyDecisionPolicy,
  MsgUpdateGroupPolicyMetadata,
  MsgGroupSubmitProposal,
  MsgWithdrawProposal,
  MsgGroupVote,
  MsgGroupExec,
  MsgLeaveGroup,
];

const IbcMsgs = [
  MsgTransfer,
  MsgTransfer,
  MsgChannelCloseConfirm,
  MsgChannelCloseInit,
  MsgChannelOpenAck,
  MsgChannelOpenConfirm,
  MsgChannelOpenInit,
  MsgChannelOpenTry,
  MsgRecvPacket,
  MsgTimeout,
  MsgTimeoutOnClose,
  MsgCreateClient,
  MsgSubmitMisbehaviour,
  MsgUpdateClient,
  MsgUpgradeClient,
  MsgConnectionOpenAck,
  MsgConnectionOpenConfirm,
  MsgConnectionOpenInit,
  MsgConnectionOpenTry,
];

const StakingMsgs = [
  MsgCreateValidator,
  MsgEditValidator,
  MsgDelegate,
  MsgBeginRedelegate,
  MsgUndelegate,
];

const VestingMsgs = [MsgCreateVestingAccount];

export const Msgs = [
  ...AuthzMsgs,
  ...BankMsgs,
  ...DistributionMsgs,
  ...FeeGrantMsgs,
  ...GovMsgs,
  ...GroupMsgs,
  ...IbcMsgs,
  ...StakingMsgs,
  ...VestingMsgs,
];
