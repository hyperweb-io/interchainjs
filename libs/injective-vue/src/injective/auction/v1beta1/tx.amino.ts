import { MsgBid, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/injective.auction.v1beta1.MsgBid": {
    aminoType: "auction/MsgBid",
    toAmino: MsgBid.toAmino,
    fromAmino: MsgBid.fromAmino
  },
  "/injective.auction.v1beta1.MsgUpdateParams": {
    aminoType: "auction/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};