import { buildTx } from "../../../helper-func-types";
import { MsgRelayProviderPrices, MsgRelayPriceFeedPrice, MsgRelayBandRates, MsgRequestBandIBCRates, MsgRelayCoinbaseMessages, MsgRelayStorkPrices, MsgRelayPythPrices, MsgUpdateParams } from "./tx";
export const relayProviderPrices = buildTx<MsgRelayProviderPrices>({
  msg: MsgRelayProviderPrices
});
export const relayPriceFeedPrice = buildTx<MsgRelayPriceFeedPrice>({
  msg: MsgRelayPriceFeedPrice
});
export const relayBandRates = buildTx<MsgRelayBandRates>({
  msg: MsgRelayBandRates
});
export const requestBandIBCRates = buildTx<MsgRequestBandIBCRates>({
  msg: MsgRequestBandIBCRates
});
export const relayCoinbaseMessages = buildTx<MsgRelayCoinbaseMessages>({
  msg: MsgRelayCoinbaseMessages
});
export const relayStorkMessage = buildTx<MsgRelayStorkPrices>({
  msg: MsgRelayStorkPrices
});
export const relayPythPrices = buildTx<MsgRelayPythPrices>({
  msg: MsgRelayPythPrices
});
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});