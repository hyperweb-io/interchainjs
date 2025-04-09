import { TelescopeGeneratedType } from "../../../types";
import { MsgCreateInsuranceFund, MsgUnderwrite, MsgRequestRedemption, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/injective.insurance.v1beta1.MsgCreateInsuranceFund", MsgCreateInsuranceFund], ["/injective.insurance.v1beta1.MsgUnderwrite", MsgUnderwrite], ["/injective.insurance.v1beta1.MsgRequestRedemption", MsgRequestRedemption], ["/injective.insurance.v1beta1.MsgUpdateParams", MsgUpdateParams]];
export const MessageComposer = {
  encoded: {
    createInsuranceFund(value: MsgCreateInsuranceFund) {
      return {
        typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFund",
        value: MsgCreateInsuranceFund.encode(value).finish()
      };
    },
    underwrite(value: MsgUnderwrite) {
      return {
        typeUrl: "/injective.insurance.v1beta1.MsgUnderwrite",
        value: MsgUnderwrite.encode(value).finish()
      };
    },
    requestRedemption(value: MsgRequestRedemption) {
      return {
        typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemption",
        value: MsgRequestRedemption.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.insurance.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createInsuranceFund(value: MsgCreateInsuranceFund) {
      return {
        typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFund",
        value
      };
    },
    underwrite(value: MsgUnderwrite) {
      return {
        typeUrl: "/injective.insurance.v1beta1.MsgUnderwrite",
        value
      };
    },
    requestRedemption(value: MsgRequestRedemption) {
      return {
        typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemption",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.insurance.v1beta1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    createInsuranceFund(value: MsgCreateInsuranceFund) {
      return {
        typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFund",
        value: MsgCreateInsuranceFund.fromPartial(value)
      };
    },
    underwrite(value: MsgUnderwrite) {
      return {
        typeUrl: "/injective.insurance.v1beta1.MsgUnderwrite",
        value: MsgUnderwrite.fromPartial(value)
      };
    },
    requestRedemption(value: MsgRequestRedemption) {
      return {
        typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemption",
        value: MsgRequestRedemption.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.insurance.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};