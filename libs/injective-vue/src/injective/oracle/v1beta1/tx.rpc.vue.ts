import { buildUseVueMutation } from "../../../vue-query";
import { MsgRelayProviderPrices, MsgRelayPriceFeedPrice, MsgRelayBandRates, MsgRequestBandIBCRates, MsgRelayCoinbaseMessages, MsgRelayStorkPrices, MsgRelayPythPrices, MsgUpdateParams } from "./tx";
import { createRelayProviderPrices, createRelayPriceFeedPrice, createRelayBandRates, createRequestBandIBCRates, createRelayCoinbaseMessages, createRelayStorkMessage, createRelayPythPrices, createUpdateParams } from "./tx.rpc.func";
export const useRelayProviderPrices = buildUseVueMutation<MsgRelayProviderPrices, Error>({
  builderMutationFn: createRelayProviderPrices
});
export const useRelayPriceFeedPrice = buildUseVueMutation<MsgRelayPriceFeedPrice, Error>({
  builderMutationFn: createRelayPriceFeedPrice
});
export const useRelayBandRates = buildUseVueMutation<MsgRelayBandRates, Error>({
  builderMutationFn: createRelayBandRates
});
export const useRequestBandIBCRates = buildUseVueMutation<MsgRequestBandIBCRates, Error>({
  builderMutationFn: createRequestBandIBCRates
});
export const useRelayCoinbaseMessages = buildUseVueMutation<MsgRelayCoinbaseMessages, Error>({
  builderMutationFn: createRelayCoinbaseMessages
});
export const useRelayStorkMessage = buildUseVueMutation<MsgRelayStorkPrices, Error>({
  builderMutationFn: createRelayStorkMessage
});
export const useRelayPythPrices = buildUseVueMutation<MsgRelayPythPrices, Error>({
  builderMutationFn: createRelayPythPrices
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});