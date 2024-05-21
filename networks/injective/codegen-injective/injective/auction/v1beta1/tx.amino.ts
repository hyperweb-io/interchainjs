import { MsgBid, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/injective.auction.v1beta1.MsgBid": {
    aminoType: "/injective.auction.v1beta1.MsgBid",
    toAmino: MsgBid.toAmino,
    fromAmino: MsgBid.fromAmino
  },
  "/injective.auction.v1beta1.MsgUpdateParams": {
    aminoType: "/injective.auction.v1beta1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};