import { MsgCreateFeed, MsgUpdateFeed, MsgTransmit, MsgFundFeedRewardPool, MsgWithdrawFeedRewardPool, MsgSetPayees, MsgTransferPayeeship, MsgAcceptPayeeship, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/injective.ocr.v1beta1.MsgCreateFeed": {
    aminoType: "ocr/MsgCreateFeed",
    toAmino: MsgCreateFeed.toAmino,
    fromAmino: MsgCreateFeed.fromAmino
  },
  "/injective.ocr.v1beta1.MsgUpdateFeed": {
    aminoType: "ocr/MsgUpdateFeed",
    toAmino: MsgUpdateFeed.toAmino,
    fromAmino: MsgUpdateFeed.fromAmino
  },
  "/injective.ocr.v1beta1.MsgTransmit": {
    aminoType: "ocr/MsgTransmit",
    toAmino: MsgTransmit.toAmino,
    fromAmino: MsgTransmit.fromAmino
  },
  "/injective.ocr.v1beta1.MsgFundFeedRewardPool": {
    aminoType: "ocr/MsgFundFeedRewardPool",
    toAmino: MsgFundFeedRewardPool.toAmino,
    fromAmino: MsgFundFeedRewardPool.fromAmino
  },
  "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool": {
    aminoType: "ocr/MsgWithdrawFeedRewardPool",
    toAmino: MsgWithdrawFeedRewardPool.toAmino,
    fromAmino: MsgWithdrawFeedRewardPool.fromAmino
  },
  "/injective.ocr.v1beta1.MsgSetPayees": {
    aminoType: "ocr/MsgSetPayees",
    toAmino: MsgSetPayees.toAmino,
    fromAmino: MsgSetPayees.fromAmino
  },
  "/injective.ocr.v1beta1.MsgTransferPayeeship": {
    aminoType: "ocr/MsgTransferPayeeship",
    toAmino: MsgTransferPayeeship.toAmino,
    fromAmino: MsgTransferPayeeship.fromAmino
  },
  "/injective.ocr.v1beta1.MsgAcceptPayeeship": {
    aminoType: "ocr/MsgAcceptPayeeship",
    toAmino: MsgAcceptPayeeship.toAmino,
    fromAmino: MsgAcceptPayeeship.fromAmino
  },
  "/injective.ocr.v1beta1.MsgUpdateParams": {
    aminoType: "ocr/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};