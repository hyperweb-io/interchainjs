import { TelescopeGeneratedType } from "../../../types";
import { MsgGrantAllowance, MsgRevokeAllowance, MsgPruneAllowances } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/cosmos.feegrant.v1beta1.MsgGrantAllowance", MsgGrantAllowance], ["/cosmos.feegrant.v1beta1.MsgRevokeAllowance", MsgRevokeAllowance], ["/cosmos.feegrant.v1beta1.MsgPruneAllowances", MsgPruneAllowances]];
export const MessageComposer = {
  encoded: {
    grantAllowance(value: MsgGrantAllowance) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
        value: MsgGrantAllowance.encode(value).finish()
      };
    },
    revokeAllowance(value: MsgRevokeAllowance) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
        value: MsgRevokeAllowance.encode(value).finish()
      };
    },
    pruneAllowances(value: MsgPruneAllowances) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
        value: MsgPruneAllowances.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    grantAllowance(value: MsgGrantAllowance) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
        value
      };
    },
    revokeAllowance(value: MsgRevokeAllowance) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
        value
      };
    },
    pruneAllowances(value: MsgPruneAllowances) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
        value
      };
    }
  },
  fromPartial: {
    grantAllowance(value: MsgGrantAllowance) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
        value: MsgGrantAllowance.fromPartial(value)
      };
    },
    revokeAllowance(value: MsgRevokeAllowance) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
        value: MsgRevokeAllowance.fromPartial(value)
      };
    },
    pruneAllowances(value: MsgPruneAllowances) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
        value: MsgPruneAllowances.fromPartial(value)
      };
    }
  }
};