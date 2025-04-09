import { TelescopeGeneratedType } from "../../../types";
import { MsgBid, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/injective.auction.v1beta1.MsgBid", MsgBid], ["/injective.auction.v1beta1.MsgUpdateParams", MsgUpdateParams]];
export const MessageComposer = {
  encoded: {
    bid(value: MsgBid) {
      return {
        typeUrl: "/injective.auction.v1beta1.MsgBid",
        value: MsgBid.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.auction.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    bid(value: MsgBid) {
      return {
        typeUrl: "/injective.auction.v1beta1.MsgBid",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.auction.v1beta1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    bid(value: MsgBid) {
      return {
        typeUrl: "/injective.auction.v1beta1.MsgBid",
        value: MsgBid.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.auction.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};