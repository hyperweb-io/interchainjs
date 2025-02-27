import { MsgCreateInsuranceFund, MsgUnderwrite, MsgRequestRedemption, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/injective.insurance.v1beta1.MsgCreateInsuranceFund": {
    aminoType: "insurance/MsgCreateInsuranceFund",
    toAmino: MsgCreateInsuranceFund.toAmino,
    fromAmino: MsgCreateInsuranceFund.fromAmino
  },
  "/injective.insurance.v1beta1.MsgUnderwrite": {
    aminoType: "insurance/MsgUnderwrite",
    toAmino: MsgUnderwrite.toAmino,
    fromAmino: MsgUnderwrite.fromAmino
  },
  "/injective.insurance.v1beta1.MsgRequestRedemption": {
    aminoType: "insurance/MsgRequestRedemption",
    toAmino: MsgRequestRedemption.toAmino,
    fromAmino: MsgRequestRedemption.fromAmino
  },
  "/injective.insurance.v1beta1.MsgUpdateParams": {
    aminoType: "insurance/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};