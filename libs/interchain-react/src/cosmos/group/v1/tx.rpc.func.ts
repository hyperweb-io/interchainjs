import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
export const createCreateGroup = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateGroup>({
  clientResolver,
  typeUrl: MsgCreateGroup.typeUrl,
  encoders: toEncoders(MsgCreateGroup),
  converters: toConverters(MsgCreateGroup),
  deps: [MsgCreateGroup]
});
export const createUpdateGroupMembers = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateGroupMembers>({
  clientResolver,
  typeUrl: MsgUpdateGroupMembers.typeUrl,
  encoders: toEncoders(MsgUpdateGroupMembers),
  converters: toConverters(MsgUpdateGroupMembers),
  deps: [MsgUpdateGroupMembers]
});
export const createUpdateGroupAdmin = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateGroupAdmin>({
  clientResolver,
  typeUrl: MsgUpdateGroupAdmin.typeUrl,
  encoders: toEncoders(MsgUpdateGroupAdmin),
  converters: toConverters(MsgUpdateGroupAdmin),
  deps: [MsgUpdateGroupAdmin]
});
export const createUpdateGroupMetadata = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateGroupMetadata>({
  clientResolver,
  typeUrl: MsgUpdateGroupMetadata.typeUrl,
  encoders: toEncoders(MsgUpdateGroupMetadata),
  converters: toConverters(MsgUpdateGroupMetadata),
  deps: [MsgUpdateGroupMetadata]
});
export const createCreateGroupPolicy = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateGroupPolicy>({
  clientResolver,
  typeUrl: MsgCreateGroupPolicy.typeUrl,
  encoders: toEncoders(MsgCreateGroupPolicy),
  converters: toConverters(MsgCreateGroupPolicy),
  deps: [MsgCreateGroupPolicy]
});
export const createCreateGroupWithPolicy = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateGroupWithPolicy>({
  clientResolver,
  typeUrl: MsgCreateGroupWithPolicy.typeUrl,
  encoders: toEncoders(MsgCreateGroupWithPolicy),
  converters: toConverters(MsgCreateGroupWithPolicy),
  deps: [MsgCreateGroupWithPolicy]
});
export const createUpdateGroupPolicyAdmin = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateGroupPolicyAdmin>({
  clientResolver,
  typeUrl: MsgUpdateGroupPolicyAdmin.typeUrl,
  encoders: toEncoders(MsgUpdateGroupPolicyAdmin),
  converters: toConverters(MsgUpdateGroupPolicyAdmin),
  deps: [MsgUpdateGroupPolicyAdmin]
});
export const createUpdateGroupPolicyDecisionPolicy = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateGroupPolicyDecisionPolicy>({
  clientResolver,
  typeUrl: MsgUpdateGroupPolicyDecisionPolicy.typeUrl,
  encoders: toEncoders(MsgUpdateGroupPolicyDecisionPolicy),
  converters: toConverters(MsgUpdateGroupPolicyDecisionPolicy),
  deps: [MsgUpdateGroupPolicyDecisionPolicy]
});
export const createUpdateGroupPolicyMetadata = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateGroupPolicyMetadata>({
  clientResolver,
  typeUrl: MsgUpdateGroupPolicyMetadata.typeUrl,
  encoders: toEncoders(MsgUpdateGroupPolicyMetadata),
  converters: toConverters(MsgUpdateGroupPolicyMetadata),
  deps: [MsgUpdateGroupPolicyMetadata]
});
export const createSubmitProposal = (clientResolver?: SigningClientResolver) => buildTx<MsgSubmitProposal>({
  clientResolver,
  typeUrl: MsgSubmitProposal.typeUrl,
  encoders: toEncoders(MsgSubmitProposal),
  converters: toConverters(MsgSubmitProposal),
  deps: [MsgSubmitProposal]
});
export const createWithdrawProposal = (clientResolver?: SigningClientResolver) => buildTx<MsgWithdrawProposal>({
  clientResolver,
  typeUrl: MsgWithdrawProposal.typeUrl,
  encoders: toEncoders(MsgWithdrawProposal),
  converters: toConverters(MsgWithdrawProposal),
  deps: [MsgWithdrawProposal]
});
export const createVote = (clientResolver?: SigningClientResolver) => buildTx<MsgVote>({
  clientResolver,
  typeUrl: MsgVote.typeUrl,
  encoders: toEncoders(MsgVote),
  converters: toConverters(MsgVote),
  deps: [MsgVote]
});
export const createExec = (clientResolver?: SigningClientResolver) => buildTx<MsgExec>({
  clientResolver,
  typeUrl: MsgExec.typeUrl,
  encoders: toEncoders(MsgExec),
  converters: toConverters(MsgExec),
  deps: [MsgExec]
});
export const createLeaveGroup = (clientResolver?: SigningClientResolver) => buildTx<MsgLeaveGroup>({
  clientResolver,
  typeUrl: MsgLeaveGroup.typeUrl,
  encoders: toEncoders(MsgLeaveGroup),
  converters: toConverters(MsgLeaveGroup),
  deps: [MsgLeaveGroup]
});