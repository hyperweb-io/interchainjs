import { MsgCreateFeed, MsgUpdateFeed, MsgTransmit, MsgFundFeedRewardPool, MsgWithdrawFeedRewardPool, MsgSetPayees, MsgTransferPayeeship, MsgAcceptPayeeship, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/injective.ocr.v1beta1.MsgCreateFeed": {
    aminoType: "/injective.ocr.v1beta1.MsgCreateFeed",
    toAmino: MsgCreateFeed.toAmino,
    fromAmino: MsgCreateFeed.fromAmino
  },
  "/injective.ocr.v1beta1.MsgUpdateFeed": {
    aminoType: "/injective.ocr.v1beta1.MsgUpdateFeed",
    toAmino: MsgUpdateFeed.toAmino,
    fromAmino: MsgUpdateFeed.fromAmino
  },
  "/injective.ocr.v1beta1.MsgTransmit": {
    aminoType: "/injective.ocr.v1beta1.MsgTransmit",
    toAmino: MsgTransmit.toAmino,
    fromAmino: MsgTransmit.fromAmino
  },
  "/injective.ocr.v1beta1.MsgFundFeedRewardPool": {
    aminoType: "/injective.ocr.v1beta1.MsgFundFeedRewardPool",
    toAmino: MsgFundFeedRewardPool.toAmino,
    fromAmino: MsgFundFeedRewardPool.fromAmino
  },
  "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool": {
    aminoType: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool",
    toAmino: MsgWithdrawFeedRewardPool.toAmino,
    fromAmino: MsgWithdrawFeedRewardPool.fromAmino
  },
  "/injective.ocr.v1beta1.MsgSetPayees": {
    aminoType: "/injective.ocr.v1beta1.MsgSetPayees",
    toAmino: MsgSetPayees.toAmino,
    fromAmino: MsgSetPayees.fromAmino
  },
  "/injective.ocr.v1beta1.MsgTransferPayeeship": {
    aminoType: "/injective.ocr.v1beta1.MsgTransferPayeeship",
    toAmino: MsgTransferPayeeship.toAmino,
    fromAmino: MsgTransferPayeeship.fromAmino
  },
  "/injective.ocr.v1beta1.MsgAcceptPayeeship": {
    aminoType: "/injective.ocr.v1beta1.MsgAcceptPayeeship",
    toAmino: MsgAcceptPayeeship.toAmino,
    fromAmino: MsgAcceptPayeeship.fromAmino
  },
  "/injective.ocr.v1beta1.MsgUpdateParams": {
    aminoType: "/injective.ocr.v1beta1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};