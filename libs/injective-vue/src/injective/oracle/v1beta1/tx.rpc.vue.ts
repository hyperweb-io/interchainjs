import { buildUseVueMutation } from "../../../vue-query";
import { MsgRelayProviderPrices, MsgRelayPriceFeedPrice, MsgRelayBandRates, MsgRequestBandIBCRates, MsgRelayCoinbaseMessages, MsgRelayStorkPrices, MsgRelayPythPrices, MsgUpdateParams } from "./tx";
import { relayProviderPrices, relayPriceFeedPrice, relayBandRates, requestBandIBCRates, relayCoinbaseMessages, relayStorkMessage, relayPythPrices, updateParams } from "./tx.rpc.func";
export const useRelayProviderPrices = buildUseVueMutation<MsgRelayProviderPrices, Error>({
  builderMutationFn: relayProviderPrices
});
export const useRelayPriceFeedPrice = buildUseVueMutation<MsgRelayPriceFeedPrice, Error>({
  builderMutationFn: relayPriceFeedPrice
});
export const useRelayBandRates = buildUseVueMutation<MsgRelayBandRates, Error>({
  builderMutationFn: relayBandRates
});
export const useRequestBandIBCRates = buildUseVueMutation<MsgRequestBandIBCRates, Error>({
  builderMutationFn: requestBandIBCRates
});
export const useRelayCoinbaseMessages = buildUseVueMutation<MsgRelayCoinbaseMessages, Error>({
  builderMutationFn: relayCoinbaseMessages
});
export const useRelayStorkMessage = buildUseVueMutation<MsgRelayStorkPrices, Error>({
  builderMutationFn: relayStorkMessage
});
export const useRelayPythPrices = buildUseVueMutation<MsgRelayPythPrices, Error>({
  builderMutationFn: relayPythPrices
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});