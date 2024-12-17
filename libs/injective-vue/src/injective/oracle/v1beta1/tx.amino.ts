import { MsgRelayProviderPrices, MsgRelayPriceFeedPrice, MsgRelayBandRates, MsgRequestBandIBCRates, MsgRelayCoinbaseMessages, MsgRelayStorkPrices, MsgRelayPythPrices, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/injective.oracle.v1beta1.MsgRelayProviderPrices": {
    aminoType: "oracle/MsgRelayProviderPrices",
    toAmino: MsgRelayProviderPrices.toAmino,
    fromAmino: MsgRelayProviderPrices.fromAmino
  },
  "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice": {
    aminoType: "oracle/MsgRelayPriceFeedPrice",
    toAmino: MsgRelayPriceFeedPrice.toAmino,
    fromAmino: MsgRelayPriceFeedPrice.fromAmino
  },
  "/injective.oracle.v1beta1.MsgRelayBandRates": {
    aminoType: "oracle/MsgRelayBandRates",
    toAmino: MsgRelayBandRates.toAmino,
    fromAmino: MsgRelayBandRates.fromAmino
  },
  "/injective.oracle.v1beta1.MsgRequestBandIBCRates": {
    aminoType: "oracle/MsgRequestBandIBCRates",
    toAmino: MsgRequestBandIBCRates.toAmino,
    fromAmino: MsgRequestBandIBCRates.fromAmino
  },
  "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages": {
    aminoType: "oracle/MsgRelayCoinbaseMessages",
    toAmino: MsgRelayCoinbaseMessages.toAmino,
    fromAmino: MsgRelayCoinbaseMessages.fromAmino
  },
  "/injective.oracle.v1beta1.MsgRelayStorkPrices": {
    aminoType: "/injective.oracle.v1beta1.MsgRelayStorkPrices",
    toAmino: MsgRelayStorkPrices.toAmino,
    fromAmino: MsgRelayStorkPrices.fromAmino
  },
  "/injective.oracle.v1beta1.MsgRelayPythPrices": {
    aminoType: "oracle/MsgRelayPythPrices",
    toAmino: MsgRelayPythPrices.toAmino,
    fromAmino: MsgRelayPythPrices.fromAmino
  },
  "/injective.oracle.v1beta1.MsgUpdateParams": {
    aminoType: "oracle/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};