import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgRelayProviderPrices, MsgRelayProviderPricesResponse, MsgRelayPriceFeedPrice, MsgRelayPriceFeedPriceResponse, MsgRelayBandRates, MsgRelayBandRatesResponse, MsgRequestBandIBCRates, MsgRequestBandIBCRatesResponse, MsgRelayCoinbaseMessages, MsgRelayCoinbaseMessagesResponse, MsgRelayStorkPrices, MsgRelayStorkPricesResponse, MsgRelayPythPrices, MsgRelayPythPricesResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the oracle Msg service. */
export interface Msg {
  /**
   * RelayProviderPrice defines a method for relaying a price for a
   * provider-based oracle
   */
  relayProviderPrices(request: MsgRelayProviderPrices): Promise<MsgRelayProviderPricesResponse>;
  /**
   * RelayPriceFeedPrice defines a method for relaying a price for a price
   * feeder-based oracle
   */
  relayPriceFeedPrice(request: MsgRelayPriceFeedPrice): Promise<MsgRelayPriceFeedPriceResponse>;
  /** RelayBandRates defines a method for relaying rates from Band */
  relayBandRates(request: MsgRelayBandRates): Promise<MsgRelayBandRatesResponse>;
  /** RequestBandIBCRates defines a method for fetching rates from Band ibc */
  requestBandIBCRates(request: MsgRequestBandIBCRates): Promise<MsgRequestBandIBCRatesResponse>;
  /**
   * RelayCoinbaseMessages defines a method for relaying price messages from
   * Coinbase API
   */
  relayCoinbaseMessages(request: MsgRelayCoinbaseMessages): Promise<MsgRelayCoinbaseMessagesResponse>;
  /**
   * RelayStorkMessage defines a method for relaying price message from
   * Stork API
   */
  relayStorkMessage(request: MsgRelayStorkPrices): Promise<MsgRelayStorkPricesResponse>;
  /** RelayPythPrices defines a method for relaying rates from the Pyth contract */
  relayPythPrices(request: MsgRelayPythPrices): Promise<MsgRelayPythPricesResponse>;
  /** UpdateParams enables updating oracle module's params via governance */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* RelayProviderPrice defines a method for relaying a price for a
   provider-based oracle */
  relayProviderPrices = async (request: MsgRelayProviderPrices): Promise<MsgRelayProviderPricesResponse> => {
    const data = MsgRelayProviderPrices.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Msg", "RelayProviderPrices", data);
    return promise.then(data => MsgRelayProviderPricesResponse.decode(new BinaryReader(data)));
  };
  /* RelayPriceFeedPrice defines a method for relaying a price for a price
   feeder-based oracle */
  relayPriceFeedPrice = async (request: MsgRelayPriceFeedPrice): Promise<MsgRelayPriceFeedPriceResponse> => {
    const data = MsgRelayPriceFeedPrice.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Msg", "RelayPriceFeedPrice", data);
    return promise.then(data => MsgRelayPriceFeedPriceResponse.decode(new BinaryReader(data)));
  };
  /* RelayBandRates defines a method for relaying rates from Band */
  relayBandRates = async (request: MsgRelayBandRates): Promise<MsgRelayBandRatesResponse> => {
    const data = MsgRelayBandRates.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Msg", "RelayBandRates", data);
    return promise.then(data => MsgRelayBandRatesResponse.decode(new BinaryReader(data)));
  };
  /* RequestBandIBCRates defines a method for fetching rates from Band ibc */
  requestBandIBCRates = async (request: MsgRequestBandIBCRates): Promise<MsgRequestBandIBCRatesResponse> => {
    const data = MsgRequestBandIBCRates.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Msg", "RequestBandIBCRates", data);
    return promise.then(data => MsgRequestBandIBCRatesResponse.decode(new BinaryReader(data)));
  };
  /* RelayCoinbaseMessages defines a method for relaying price messages from
   Coinbase API */
  relayCoinbaseMessages = async (request: MsgRelayCoinbaseMessages): Promise<MsgRelayCoinbaseMessagesResponse> => {
    const data = MsgRelayCoinbaseMessages.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Msg", "RelayCoinbaseMessages", data);
    return promise.then(data => MsgRelayCoinbaseMessagesResponse.decode(new BinaryReader(data)));
  };
  /* RelayStorkMessage defines a method for relaying price message from
   Stork API */
  relayStorkMessage = async (request: MsgRelayStorkPrices): Promise<MsgRelayStorkPricesResponse> => {
    const data = MsgRelayStorkPrices.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Msg", "RelayStorkMessage", data);
    return promise.then(data => MsgRelayStorkPricesResponse.decode(new BinaryReader(data)));
  };
  /* RelayPythPrices defines a method for relaying rates from the Pyth contract */
  relayPythPrices = async (request: MsgRelayPythPrices): Promise<MsgRelayPythPricesResponse> => {
    const data = MsgRelayPythPrices.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Msg", "RelayPythPrices", data);
    return promise.then(data => MsgRelayPythPricesResponse.decode(new BinaryReader(data)));
  };
  /* UpdateParams enables updating oracle module's params via governance */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};