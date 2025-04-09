import { TelescopeGeneratedType } from "../../../../types";
import { MsgTransfer, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/ibc.applications.transfer.v1.MsgTransfer", MsgTransfer], ["/ibc.applications.transfer.v1.MsgUpdateParams", MsgUpdateParams]];
export const MessageComposer = {
  encoded: {
    transfer(value: MsgTransfer) {
      return {
        typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
        value: MsgTransfer.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/ibc.applications.transfer.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    transfer(value: MsgTransfer) {
      return {
        typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/ibc.applications.transfer.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    transfer(value: MsgTransfer) {
      return {
        typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
        value: MsgTransfer.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/ibc.applications.transfer.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};