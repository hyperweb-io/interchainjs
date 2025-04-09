import { buildUseMutation } from "../../../react-query";
import { MsgRelayProviderPrices, MsgRelayPriceFeedPrice, MsgRelayBandRates, MsgRequestBandIBCRates, MsgRelayCoinbaseMessages, MsgRelayStorkPrices, MsgRelayPythPrices, MsgUpdateParams } from "./tx";
import { relayProviderPrices, relayPriceFeedPrice, relayBandRates, requestBandIBCRates, relayCoinbaseMessages, relayStorkMessage, relayPythPrices, updateParams } from "./tx.rpc.func";
export const useRelayProviderPrices = buildUseMutation<MsgRelayProviderPrices, Error>({
  builderMutationFn: relayProviderPrices
});
export const useRelayPriceFeedPrice = buildUseMutation<MsgRelayPriceFeedPrice, Error>({
  builderMutationFn: relayPriceFeedPrice
});
export const useRelayBandRates = buildUseMutation<MsgRelayBandRates, Error>({
  builderMutationFn: relayBandRates
});
export const useRequestBandIBCRates = buildUseMutation<MsgRequestBandIBCRates, Error>({
  builderMutationFn: requestBandIBCRates
});
export const useRelayCoinbaseMessages = buildUseMutation<MsgRelayCoinbaseMessages, Error>({
  builderMutationFn: relayCoinbaseMessages
});
export const useRelayStorkMessage = buildUseMutation<MsgRelayStorkPrices, Error>({
  builderMutationFn: relayStorkMessage
});
export const useRelayPythPrices = buildUseMutation<MsgRelayPythPrices, Error>({
  builderMutationFn: relayPythPrices
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});