import { TelescopeGeneratedType } from "../../../types";
import { MsgRelayProviderPrices, MsgRelayPriceFeedPrice, MsgRelayBandRates, MsgRequestBandIBCRates, MsgRelayCoinbaseMessages, MsgRelayStorkPrices, MsgRelayPythPrices, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/injective.oracle.v1beta1.MsgRelayProviderPrices", MsgRelayProviderPrices], ["/injective.oracle.v1beta1.MsgRelayPriceFeedPrice", MsgRelayPriceFeedPrice], ["/injective.oracle.v1beta1.MsgRelayBandRates", MsgRelayBandRates], ["/injective.oracle.v1beta1.MsgRequestBandIBCRates", MsgRequestBandIBCRates], ["/injective.oracle.v1beta1.MsgRelayCoinbaseMessages", MsgRelayCoinbaseMessages], ["/injective.oracle.v1beta1.MsgRelayStorkPrices", MsgRelayStorkPrices], ["/injective.oracle.v1beta1.MsgRelayPythPrices", MsgRelayPythPrices], ["/injective.oracle.v1beta1.MsgUpdateParams", MsgUpdateParams]];
export const MessageComposer = {
  encoded: {
    relayProviderPrices(value: MsgRelayProviderPrices) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPrices",
        value: MsgRelayProviderPrices.encode(value).finish()
      };
    },
    relayPriceFeedPrice(value: MsgRelayPriceFeedPrice) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice",
        value: MsgRelayPriceFeedPrice.encode(value).finish()
      };
    },
    relayBandRates(value: MsgRelayBandRates) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRates",
        value: MsgRelayBandRates.encode(value).finish()
      };
    },
    requestBandIBCRates(value: MsgRequestBandIBCRates) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRates",
        value: MsgRequestBandIBCRates.encode(value).finish()
      };
    },
    relayCoinbaseMessages(value: MsgRelayCoinbaseMessages) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages",
        value: MsgRelayCoinbaseMessages.encode(value).finish()
      };
    },
    relayStorkMessage(value: MsgRelayStorkPrices) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayStorkPrices",
        value: MsgRelayStorkPrices.encode(value).finish()
      };
    },
    relayPythPrices(value: MsgRelayPythPrices) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayPythPrices",
        value: MsgRelayPythPrices.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    relayProviderPrices(value: MsgRelayProviderPrices) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPrices",
        value
      };
    },
    relayPriceFeedPrice(value: MsgRelayPriceFeedPrice) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice",
        value
      };
    },
    relayBandRates(value: MsgRelayBandRates) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRates",
        value
      };
    },
    requestBandIBCRates(value: MsgRequestBandIBCRates) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRates",
        value
      };
    },
    relayCoinbaseMessages(value: MsgRelayCoinbaseMessages) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages",
        value
      };
    },
    relayStorkMessage(value: MsgRelayStorkPrices) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayStorkPrices",
        value
      };
    },
    relayPythPrices(value: MsgRelayPythPrices) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayPythPrices",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    relayProviderPrices(value: MsgRelayProviderPrices) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPrices",
        value: MsgRelayProviderPrices.fromPartial(value)
      };
    },
    relayPriceFeedPrice(value: MsgRelayPriceFeedPrice) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice",
        value: MsgRelayPriceFeedPrice.fromPartial(value)
      };
    },
    relayBandRates(value: MsgRelayBandRates) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRates",
        value: MsgRelayBandRates.fromPartial(value)
      };
    },
    requestBandIBCRates(value: MsgRequestBandIBCRates) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRates",
        value: MsgRequestBandIBCRates.fromPartial(value)
      };
    },
    relayCoinbaseMessages(value: MsgRelayCoinbaseMessages) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages",
        value: MsgRelayCoinbaseMessages.fromPartial(value)
      };
    },
    relayStorkMessage(value: MsgRelayStorkPrices) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayStorkPrices",
        value: MsgRelayStorkPrices.fromPartial(value)
      };
    },
    relayPythPrices(value: MsgRelayPythPrices) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayPythPrices",
        value: MsgRelayPythPrices.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};