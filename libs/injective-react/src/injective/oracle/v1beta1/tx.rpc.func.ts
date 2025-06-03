import { buildTx } from "../../../helper-func-types";
import { MsgRelayProviderPrices, MsgRelayPriceFeedPrice, MsgRelayBandRates, MsgRequestBandIBCRates, MsgRelayCoinbaseMessages, MsgRelayStorkPrices, MsgRelayPythPrices, MsgUpdateParams } from "./tx";
/* RelayProviderPrice defines a method for relaying a price for a
 provider-based oracle */
export const relayProviderPrices = buildTx<MsgRelayProviderPrices>({
  msg: MsgRelayProviderPrices
});
/* RelayPriceFeedPrice defines a method for relaying a price for a price
 feeder-based oracle */
export const relayPriceFeedPrice = buildTx<MsgRelayPriceFeedPrice>({
  msg: MsgRelayPriceFeedPrice
});
/* RelayBandRates defines a method for relaying rates from Band */
export const relayBandRates = buildTx<MsgRelayBandRates>({
  msg: MsgRelayBandRates
});
/* RequestBandIBCRates defines a method for fetching rates from Band ibc */
export const requestBandIBCRates = buildTx<MsgRequestBandIBCRates>({
  msg: MsgRequestBandIBCRates
});
/* RelayCoinbaseMessages defines a method for relaying price messages from
 Coinbase API */
export const relayCoinbaseMessages = buildTx<MsgRelayCoinbaseMessages>({
  msg: MsgRelayCoinbaseMessages
});
/* RelayStorkMessage defines a method for relaying price message from
 Stork API */
export const relayStorkMessage = buildTx<MsgRelayStorkPrices>({
  msg: MsgRelayStorkPrices
});
/* RelayPythPrices defines a method for relaying rates from the Pyth contract */
export const relayPythPrices = buildTx<MsgRelayPythPrices>({
  msg: MsgRelayPythPrices
});
/* UpdateParams enables updating oracle module's params via governance */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});