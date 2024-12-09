import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgRelayProviderPrices, MsgRelayPriceFeedPrice, MsgRelayBandRates, MsgRequestBandIBCRates, MsgRelayCoinbaseMessages, MsgRelayStorkPrices, MsgRelayPythPrices, MsgUpdateParams } from "./tx";
export const createRelayProviderPrices = (clientResolver?: SigningClientResolver) => buildTx<MsgRelayProviderPrices>({
  clientResolver,
  typeUrl: MsgRelayProviderPrices.typeUrl,
  encoders: toEncoders(MsgRelayProviderPrices),
  converters: toConverters(MsgRelayProviderPrices)
});
export const useRelayProviderPrices = buildUseMutation<MsgRelayProviderPrices, Error>({
  builderMutationFn: createRelayProviderPrices
});
export const createRelayPriceFeedPrice = (clientResolver?: SigningClientResolver) => buildTx<MsgRelayPriceFeedPrice>({
  clientResolver,
  typeUrl: MsgRelayPriceFeedPrice.typeUrl,
  encoders: toEncoders(MsgRelayPriceFeedPrice),
  converters: toConverters(MsgRelayPriceFeedPrice)
});
export const useRelayPriceFeedPrice = buildUseMutation<MsgRelayPriceFeedPrice, Error>({
  builderMutationFn: createRelayPriceFeedPrice
});
export const createRelayBandRates = (clientResolver?: SigningClientResolver) => buildTx<MsgRelayBandRates>({
  clientResolver,
  typeUrl: MsgRelayBandRates.typeUrl,
  encoders: toEncoders(MsgRelayBandRates),
  converters: toConverters(MsgRelayBandRates)
});
export const useRelayBandRates = buildUseMutation<MsgRelayBandRates, Error>({
  builderMutationFn: createRelayBandRates
});
export const createRequestBandIBCRates = (clientResolver?: SigningClientResolver) => buildTx<MsgRequestBandIBCRates>({
  clientResolver,
  typeUrl: MsgRequestBandIBCRates.typeUrl,
  encoders: toEncoders(MsgRequestBandIBCRates),
  converters: toConverters(MsgRequestBandIBCRates)
});
export const useRequestBandIBCRates = buildUseMutation<MsgRequestBandIBCRates, Error>({
  builderMutationFn: createRequestBandIBCRates
});
export const createRelayCoinbaseMessages = (clientResolver?: SigningClientResolver) => buildTx<MsgRelayCoinbaseMessages>({
  clientResolver,
  typeUrl: MsgRelayCoinbaseMessages.typeUrl,
  encoders: toEncoders(MsgRelayCoinbaseMessages),
  converters: toConverters(MsgRelayCoinbaseMessages)
});
export const useRelayCoinbaseMessages = buildUseMutation<MsgRelayCoinbaseMessages, Error>({
  builderMutationFn: createRelayCoinbaseMessages
});
export const createRelayStorkMessage = (clientResolver?: SigningClientResolver) => buildTx<MsgRelayStorkPrices>({
  clientResolver,
  typeUrl: MsgRelayStorkPrices.typeUrl,
  encoders: toEncoders(MsgRelayStorkPrices),
  converters: toConverters(MsgRelayStorkPrices)
});
export const useRelayStorkMessage = buildUseMutation<MsgRelayStorkPrices, Error>({
  builderMutationFn: createRelayStorkMessage
});
export const createRelayPythPrices = (clientResolver?: SigningClientResolver) => buildTx<MsgRelayPythPrices>({
  clientResolver,
  typeUrl: MsgRelayPythPrices.typeUrl,
  encoders: toEncoders(MsgRelayPythPrices),
  converters: toConverters(MsgRelayPythPrices)
});
export const useRelayPythPrices = buildUseMutation<MsgRelayPythPrices, Error>({
  builderMutationFn: createRelayPythPrices
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams)
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});