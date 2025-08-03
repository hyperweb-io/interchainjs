import { TelescopeGeneratedType } from "../../../types";
import { MsgUpdateParams, MsgCreateNamespace, MsgUpdateNamespace, MsgUpdateActorRoles, MsgClaimVoucher } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/injective.permissions.v1beta1.MsgUpdateParams", MsgUpdateParams], ["/injective.permissions.v1beta1.MsgCreateNamespace", MsgCreateNamespace], ["/injective.permissions.v1beta1.MsgUpdateNamespace", MsgUpdateNamespace], ["/injective.permissions.v1beta1.MsgUpdateActorRoles", MsgUpdateActorRoles], ["/injective.permissions.v1beta1.MsgClaimVoucher", MsgClaimVoucher]];
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createNamespace(value: MsgCreateNamespace) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgCreateNamespace",
        value: MsgCreateNamespace.encode(value).finish()
      };
    },
    updateNamespace(value: MsgUpdateNamespace) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgUpdateNamespace",
        value: MsgUpdateNamespace.encode(value).finish()
      };
    },
    updateActorRoles(value: MsgUpdateActorRoles) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgUpdateActorRoles",
        value: MsgUpdateActorRoles.encode(value).finish()
      };
    },
    claimVoucher(value: MsgClaimVoucher) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgClaimVoucher",
        value: MsgClaimVoucher.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgUpdateParams",
        value
      };
    },
    createNamespace(value: MsgCreateNamespace) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgCreateNamespace",
        value
      };
    },
    updateNamespace(value: MsgUpdateNamespace) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgUpdateNamespace",
        value
      };
    },
    updateActorRoles(value: MsgUpdateActorRoles) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgUpdateActorRoles",
        value
      };
    },
    claimVoucher(value: MsgClaimVoucher) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgClaimVoucher",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createNamespace(value: MsgCreateNamespace) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgCreateNamespace",
        value: MsgCreateNamespace.fromPartial(value)
      };
    },
    updateNamespace(value: MsgUpdateNamespace) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgUpdateNamespace",
        value: MsgUpdateNamespace.fromPartial(value)
      };
    },
    updateActorRoles(value: MsgUpdateActorRoles) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgUpdateActorRoles",
        value: MsgUpdateActorRoles.fromPartial(value)
      };
    },
    claimVoucher(value: MsgClaimVoucher) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgClaimVoucher",
        value: MsgClaimVoucher.fromPartial(value)
      };
    }
  }
};