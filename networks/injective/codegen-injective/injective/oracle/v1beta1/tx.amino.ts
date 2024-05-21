import { MsgRelayProviderPrices, MsgRelayPriceFeedPrice, MsgRelayBandRates, MsgRequestBandIBCRates, MsgRelayCoinbaseMessages, MsgRelayPythPrices, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/injective.oracle.v1beta1.MsgRelayProviderPrices": {
    aminoType: "/injective.oracle.v1beta1.MsgRelayProviderPrices",
    toAmino: MsgRelayProviderPrices.toAmino,
    fromAmino: MsgRelayProviderPrices.fromAmino
  },
  "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice": {
    aminoType: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice",
    toAmino: MsgRelayPriceFeedPrice.toAmino,
    fromAmino: MsgRelayPriceFeedPrice.fromAmino
  },
  "/injective.oracle.v1beta1.MsgRelayBandRates": {
    aminoType: "/injective.oracle.v1beta1.MsgRelayBandRates",
    toAmino: MsgRelayBandRates.toAmino,
    fromAmino: MsgRelayBandRates.fromAmino
  },
  "/injective.oracle.v1beta1.MsgRequestBandIBCRates": {
    aminoType: "/injective.oracle.v1beta1.MsgRequestBandIBCRates",
    toAmino: MsgRequestBandIBCRates.toAmino,
    fromAmino: MsgRequestBandIBCRates.fromAmino
  },
  "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages": {
    aminoType: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages",
    toAmino: MsgRelayCoinbaseMessages.toAmino,
    fromAmino: MsgRelayCoinbaseMessages.fromAmino
  },
  "/injective.oracle.v1beta1.MsgRelayPythPrices": {
    aminoType: "/injective.oracle.v1beta1.MsgRelayPythPrices",
    toAmino: MsgRelayPythPrices.toAmino,
    fromAmino: MsgRelayPythPrices.fromAmino
  },
  "/injective.oracle.v1beta1.MsgUpdateParams": {
    aminoType: "/injective.oracle.v1beta1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};