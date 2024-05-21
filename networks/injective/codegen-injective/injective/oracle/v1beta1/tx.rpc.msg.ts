import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { MsgRelayProviderPrices, MsgRelayPriceFeedPrice, MsgRelayBandRates, MsgRequestBandIBCRates, MsgRelayCoinbaseMessages, MsgRelayPythPrices, MsgUpdateParams } from "./tx";
/** Msg defines the oracle Msg service. */
export interface Msg {
  /**
   * RelayProviderPrice defines a method for relaying a price for a
   * provider-based oracle
   */
  relayProviderPrices(signerAddress: string, message: MsgRelayProviderPrices, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * RelayPriceFeedPrice defines a method for relaying a price for a price
   * feeder-based oracle
   */
  relayPriceFeedPrice(signerAddress: string, message: MsgRelayPriceFeedPrice, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** RelayBandRates defines a method for relaying rates from Band */
  relayBandRates(signerAddress: string, message: MsgRelayBandRates, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** RequestBandIBCRates defines a method for fetching rates from Band ibc */
  requestBandIBCRates(signerAddress: string, message: MsgRequestBandIBCRates, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * RelayCoinbaseMessages defines a method for relaying price messages from
   * Coinbase API
   */
  relayCoinbaseMessages(signerAddress: string, message: MsgRelayCoinbaseMessages, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** RelayPythPrices defines a method for relaying rates from the Pyth contract */
  relayPythPrices(signerAddress: string, message: MsgRelayPythPrices, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** UpdateParams enables updating oracle module's params via governance */
  updateParams(signerAddress: string, message: MsgUpdateParams, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* RelayProviderPrice defines a method for relaying a price for a
   provider-based oracle */
  relayProviderPrices = async (signerAddress: string, message: MsgRelayProviderPrices, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgRelayProviderPrices.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* RelayPriceFeedPrice defines a method for relaying a price for a price
   feeder-based oracle */
  relayPriceFeedPrice = async (signerAddress: string, message: MsgRelayPriceFeedPrice, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgRelayPriceFeedPrice.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* RelayBandRates defines a method for relaying rates from Band */
  relayBandRates = async (signerAddress: string, message: MsgRelayBandRates, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgRelayBandRates.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* RequestBandIBCRates defines a method for fetching rates from Band ibc */
  requestBandIBCRates = async (signerAddress: string, message: MsgRequestBandIBCRates, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgRequestBandIBCRates.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* RelayCoinbaseMessages defines a method for relaying price messages from
   Coinbase API */
  relayCoinbaseMessages = async (signerAddress: string, message: MsgRelayCoinbaseMessages, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgRelayCoinbaseMessages.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* RelayPythPrices defines a method for relaying rates from the Pyth contract */
  relayPythPrices = async (signerAddress: string, message: MsgRelayPythPrices, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgRelayPythPrices.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* UpdateParams enables updating oracle module's params via governance */
  updateParams = async (signerAddress: string, message: MsgUpdateParams, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateParams.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};