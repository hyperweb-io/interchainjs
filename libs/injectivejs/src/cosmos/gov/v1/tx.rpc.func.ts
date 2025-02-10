import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit, MsgUpdateParams, MsgCancelProposal } from "./tx";
export const createSubmitProposal = (clientResolver?: SigningClientResolver) => buildTx<MsgSubmitProposal>({
  clientResolver,
  typeUrl: MsgSubmitProposal.typeUrl,
  encoders: toEncoders(MsgSubmitProposal),
  converters: toConverters(MsgSubmitProposal),
  deps: [MsgSubmitProposal]
});
export const createExecLegacyContent = (clientResolver?: SigningClientResolver) => buildTx<MsgExecLegacyContent>({
  clientResolver,
  typeUrl: MsgExecLegacyContent.typeUrl,
  encoders: toEncoders(MsgExecLegacyContent),
  converters: toConverters(MsgExecLegacyContent),
  deps: [MsgExecLegacyContent]
});
export const createVote = (clientResolver?: SigningClientResolver) => buildTx<MsgVote>({
  clientResolver,
  typeUrl: MsgVote.typeUrl,
  encoders: toEncoders(MsgVote),
  converters: toConverters(MsgVote),
  deps: [MsgVote]
});
export const createVoteWeighted = (clientResolver?: SigningClientResolver) => buildTx<MsgVoteWeighted>({
  clientResolver,
  typeUrl: MsgVoteWeighted.typeUrl,
  encoders: toEncoders(MsgVoteWeighted),
  converters: toConverters(MsgVoteWeighted),
  deps: [MsgVoteWeighted]
});
export const createDeposit = (clientResolver?: SigningClientResolver) => buildTx<MsgDeposit>({
  clientResolver,
  typeUrl: MsgDeposit.typeUrl,
  encoders: toEncoders(MsgDeposit),
  converters: toConverters(MsgDeposit),
  deps: [MsgDeposit]
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams),
  deps: [MsgUpdateParams]
});
export const createCancelProposal = (clientResolver?: SigningClientResolver) => buildTx<MsgCancelProposal>({
  clientResolver,
  typeUrl: MsgCancelProposal.typeUrl,
  encoders: toEncoders(MsgCancelProposal),
  converters: toConverters(MsgCancelProposal),
  deps: [MsgCancelProposal]
});