import { buildUseMutation } from "../../../react-query";
import { MsgRelayProviderPrices, MsgRelayPriceFeedPrice, MsgRelayBandRates, MsgRequestBandIBCRates, MsgRelayCoinbaseMessages, MsgRelayStorkPrices, MsgRelayPythPrices, MsgUpdateParams } from "./tx";
import { createRelayProviderPrices, createRelayPriceFeedPrice, createRelayBandRates, createRequestBandIBCRates, createRelayCoinbaseMessages, createRelayStorkMessage, createRelayPythPrices, createUpdateParams } from "./tx.rpc.func";
export const useRelayProviderPrices = buildUseMutation<MsgRelayProviderPrices, Error>({
  builderMutationFn: createRelayProviderPrices
});
export const useRelayPriceFeedPrice = buildUseMutation<MsgRelayPriceFeedPrice, Error>({
  builderMutationFn: createRelayPriceFeedPrice
});
export const useRelayBandRates = buildUseMutation<MsgRelayBandRates, Error>({
  builderMutationFn: createRelayBandRates
});
export const useRequestBandIBCRates = buildUseMutation<MsgRequestBandIBCRates, Error>({
  builderMutationFn: createRequestBandIBCRates
});
export const useRelayCoinbaseMessages = buildUseMutation<MsgRelayCoinbaseMessages, Error>({
  builderMutationFn: createRelayCoinbaseMessages
});
export const useRelayStorkMessage = buildUseMutation<MsgRelayStorkPrices, Error>({
  builderMutationFn: createRelayStorkMessage
});
export const useRelayPythPrices = buildUseMutation<MsgRelayPythPrices, Error>({
  builderMutationFn: createRelayPythPrices
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});