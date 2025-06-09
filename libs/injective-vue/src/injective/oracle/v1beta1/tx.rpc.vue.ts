import { buildUseVueMutation } from "../../../vue-query";
import { MsgRelayProviderPrices, MsgRelayPriceFeedPrice, MsgRelayBandRates, MsgRequestBandIBCRates, MsgRelayCoinbaseMessages, MsgRelayStorkPrices, MsgRelayPythPrices, MsgUpdateParams } from "./tx";
import { relayProviderPrices, relayPriceFeedPrice, relayBandRates, requestBandIBCRates, relayCoinbaseMessages, relayStorkMessage, relayPythPrices, updateParams } from "./tx.rpc.func";
/**
 * RelayProviderPrice defines a method for relaying a price for a
 * provider-based oracle
 * @name useRelayProviderPrices
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.RelayProviderPrices
 */
export const useRelayProviderPrices = buildUseVueMutation<MsgRelayProviderPrices, Error>({
  builderMutationFn: relayProviderPrices
});
/**
 * RelayPriceFeedPrice defines a method for relaying a price for a price
 * feeder-based oracle
 * @name useRelayPriceFeedPrice
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.RelayPriceFeedPrice
 */
export const useRelayPriceFeedPrice = buildUseVueMutation<MsgRelayPriceFeedPrice, Error>({
  builderMutationFn: relayPriceFeedPrice
});
/**
 * RelayBandRates defines a method for relaying rates from Band
 * @name useRelayBandRates
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.RelayBandRates
 */
export const useRelayBandRates = buildUseVueMutation<MsgRelayBandRates, Error>({
  builderMutationFn: relayBandRates
});
/**
 * RequestBandIBCRates defines a method for fetching rates from Band ibc
 * @name useRequestBandIBCRates
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.RequestBandIBCRates
 */
export const useRequestBandIBCRates = buildUseVueMutation<MsgRequestBandIBCRates, Error>({
  builderMutationFn: requestBandIBCRates
});
/**
 * RelayCoinbaseMessages defines a method for relaying price messages from
 * Coinbase API
 * @name useRelayCoinbaseMessages
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.RelayCoinbaseMessages
 */
export const useRelayCoinbaseMessages = buildUseVueMutation<MsgRelayCoinbaseMessages, Error>({
  builderMutationFn: relayCoinbaseMessages
});
/**
 * RelayStorkMessage defines a method for relaying price message from
 * Stork API
 * @name useRelayStorkMessage
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.RelayStorkMessage
 */
export const useRelayStorkMessage = buildUseVueMutation<MsgRelayStorkPrices, Error>({
  builderMutationFn: relayStorkMessage
});
/**
 * RelayPythPrices defines a method for relaying rates from the Pyth contract
 * @name useRelayPythPrices
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.RelayPythPrices
 */
export const useRelayPythPrices = buildUseVueMutation<MsgRelayPythPrices, Error>({
  builderMutationFn: relayPythPrices
});
/**
 * UpdateParams enables updating oracle module's params via governance
 * @name useUpdateParams
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.UpdateParams
 */
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});