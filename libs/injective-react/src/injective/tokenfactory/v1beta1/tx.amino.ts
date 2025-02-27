import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/injective.tokenfactory.v1beta1.MsgCreateDenom": {
    aminoType: "injective/tokenfactory/create-denom",
    toAmino: MsgCreateDenom.toAmino,
    fromAmino: MsgCreateDenom.fromAmino
  },
  "/injective.tokenfactory.v1beta1.MsgMint": {
    aminoType: "injective/tokenfactory/mint",
    toAmino: MsgMint.toAmino,
    fromAmino: MsgMint.fromAmino
  },
  "/injective.tokenfactory.v1beta1.MsgBurn": {
    aminoType: "injective/tokenfactory/burn",
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino
  },
  "/injective.tokenfactory.v1beta1.MsgChangeAdmin": {
    aminoType: "injective/tokenfactory/change-admin",
    toAmino: MsgChangeAdmin.toAmino,
    fromAmino: MsgChangeAdmin.fromAmino
  },
  "/injective.tokenfactory.v1beta1.MsgSetDenomMetadata": {
    aminoType: "injective/tokenfactory/set-denom-metadata",
    toAmino: MsgSetDenomMetadata.toAmino,
    fromAmino: MsgSetDenomMetadata.fromAmino
  },
  "/injective.tokenfactory.v1beta1.MsgUpdateParams": {
    aminoType: "injective/tokenfactory/update-params",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};