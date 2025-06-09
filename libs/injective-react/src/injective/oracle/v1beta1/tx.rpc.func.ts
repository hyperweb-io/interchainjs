import { buildTx } from "../../../helper-func-types";
import { MsgRelayProviderPrices, MsgRelayPriceFeedPrice, MsgRelayBandRates, MsgRequestBandIBCRates, MsgRelayCoinbaseMessages, MsgRelayStorkPrices, MsgRelayPythPrices, MsgUpdateParams } from "./tx";
/**
 * RelayProviderPrice defines a method for relaying a price for a
 * provider-based oracle
 * @name relayProviderPrices
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.RelayProviderPrices
 */
export const relayProviderPrices = buildTx<MsgRelayProviderPrices>({
  msg: MsgRelayProviderPrices
});
/**
 * RelayPriceFeedPrice defines a method for relaying a price for a price
 * feeder-based oracle
 * @name relayPriceFeedPrice
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.RelayPriceFeedPrice
 */
export const relayPriceFeedPrice = buildTx<MsgRelayPriceFeedPrice>({
  msg: MsgRelayPriceFeedPrice
});
/**
 * RelayBandRates defines a method for relaying rates from Band
 * @name relayBandRates
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.RelayBandRates
 */
export const relayBandRates = buildTx<MsgRelayBandRates>({
  msg: MsgRelayBandRates
});
/**
 * RequestBandIBCRates defines a method for fetching rates from Band ibc
 * @name requestBandIBCRates
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.RequestBandIBCRates
 */
export const requestBandIBCRates = buildTx<MsgRequestBandIBCRates>({
  msg: MsgRequestBandIBCRates
});
/**
 * RelayCoinbaseMessages defines a method for relaying price messages from
 * Coinbase API
 * @name relayCoinbaseMessages
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.RelayCoinbaseMessages
 */
export const relayCoinbaseMessages = buildTx<MsgRelayCoinbaseMessages>({
  msg: MsgRelayCoinbaseMessages
});
/**
 * RelayStorkMessage defines a method for relaying price message from
 * Stork API
 * @name relayStorkMessage
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.RelayStorkMessage
 */
export const relayStorkMessage = buildTx<MsgRelayStorkPrices>({
  msg: MsgRelayStorkPrices
});
/**
 * RelayPythPrices defines a method for relaying rates from the Pyth contract
 * @name relayPythPrices
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.RelayPythPrices
 */
export const relayPythPrices = buildTx<MsgRelayPythPrices>({
  msg: MsgRelayPythPrices
});
/**
 * UpdateParams enables updating oracle module's params via governance
 * @name updateParams
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});