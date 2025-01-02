import { SubaccountOrderData, SubaccountOrderDataAmino, SubaccountOrderbookMetadata, SubaccountOrderbookMetadataAmino, Params, ParamsAmino, Deposit, DepositAmino, MarketVolume, MarketVolumeAmino, AggregateAccountVolumeRecord, AggregateAccountVolumeRecordAmino, VolumeRecord, VolumeRecordAmino, DenomDecimals, DenomDecimalsAmino, SpotMarket, SpotMarketAmino, Level, LevelAmino, MidPriceAndTOB, MidPriceAndTOBAmino, PerpetualMarketInfo, PerpetualMarketInfoAmino, PerpetualMarketFunding, PerpetualMarketFundingAmino, DerivativeMarket, DerivativeMarketAmino, ExpiryFuturesMarketInfo, ExpiryFuturesMarketInfoAmino, Position, PositionAmino, TradingRewardCampaignInfo, TradingRewardCampaignInfoAmino, CampaignRewardPool, CampaignRewardPoolAmino, FeeDiscountTierInfo, FeeDiscountTierInfoAmino, FeeDiscountTierTTL, FeeDiscountTierTTLAmino, FeeDiscountSchedule, FeeDiscountScheduleAmino, TradeRecords, TradeRecordsAmino, TradeRecord, TradeRecordAmino, BinaryOptionsMarket, BinaryOptionsMarketAmino, ActiveGrant, ActiveGrantAmino, EffectiveGrant, EffectiveGrantAmino, GrantAuthorization, GrantAuthorizationAmino } from "./exchange";
import { Balance, BalanceAmino, DerivativePosition, DerivativePositionAmino, GenesisState, GenesisStateAmino } from "./genesis";
import { MetadataStatistics, MetadataStatisticsAmino } from "../../oracle/v1beta1/oracle";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, isSet } from "../../../helpers";
export enum OrderSide {
  /** Side_Unspecified - will return both */
  Side_Unspecified = 0,
  Buy = 1,
  Sell = 2,
  UNRECOGNIZED = -1,
}
export const OrderSideAmino = OrderSide;
export function orderSideFromJSON(object: any): OrderSide {
  switch (object) {
    case 0:
    case "Side_Unspecified":
      return OrderSide.Side_Unspecified;
    case 1:
    case "Buy":
      return OrderSide.Buy;
    case 2:
    case "Sell":
      return OrderSide.Sell;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderSide.UNRECOGNIZED;
  }
}
export function orderSideToJSON(object: OrderSide): string {
  switch (object) {
    case OrderSide.Side_Unspecified:
      return "Side_Unspecified";
    case OrderSide.Buy:
      return "Buy";
    case OrderSide.Sell:
      return "Sell";
    case OrderSide.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** CancellationStrategy is the list of cancellation strategies. */
export enum CancellationStrategy {
  /** UnspecifiedOrder - just cancelling in random order in most efficient way */
  UnspecifiedOrder = 0,
  /** FromWorstToBest - e.g. for buy orders from lowest to highest price */
  FromWorstToBest = 1,
  /** FromBestToWorst - e.g. for buy orders from higest to lowest price */
  FromBestToWorst = 2,
  UNRECOGNIZED = -1,
}
export const CancellationStrategyAmino = CancellationStrategy;
export function cancellationStrategyFromJSON(object: any): CancellationStrategy {
  switch (object) {
    case 0:
    case "UnspecifiedOrder":
      return CancellationStrategy.UnspecifiedOrder;
    case 1:
    case "FromWorstToBest":
      return CancellationStrategy.FromWorstToBest;
    case 2:
    case "FromBestToWorst":
      return CancellationStrategy.FromBestToWorst;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CancellationStrategy.UNRECOGNIZED;
  }
}
export function cancellationStrategyToJSON(object: CancellationStrategy): string {
  switch (object) {
    case CancellationStrategy.UnspecifiedOrder:
      return "UnspecifiedOrder";
    case CancellationStrategy.FromWorstToBest:
      return "FromWorstToBest";
    case CancellationStrategy.FromBestToWorst:
      return "FromBestToWorst";
    case CancellationStrategy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Subaccount {
  trader: string;
  subaccountNonce: number;
}
export interface SubaccountProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.Subaccount";
  value: Uint8Array;
}
export interface SubaccountAmino {
  trader: string;
  subaccount_nonce: number;
}
export interface SubaccountAminoMsg {
  type: "/injective.exchange.v1beta1.Subaccount";
  value: SubaccountAmino;
}
export interface QuerySubaccountOrdersRequest {
  subaccountId: string;
  marketId: string;
}
export interface QuerySubaccountOrdersRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersRequest";
  value: Uint8Array;
}
export interface QuerySubaccountOrdersRequestAmino {
  subaccount_id: string;
  market_id: string;
}
export interface QuerySubaccountOrdersRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountOrdersRequest";
  value: QuerySubaccountOrdersRequestAmino;
}
export interface QuerySubaccountOrdersResponse {
  buyOrders: SubaccountOrderData[];
  sellOrders: SubaccountOrderData[];
}
export interface QuerySubaccountOrdersResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersResponse";
  value: Uint8Array;
}
export interface QuerySubaccountOrdersResponseAmino {
  buy_orders: SubaccountOrderDataAmino[];
  sell_orders: SubaccountOrderDataAmino[];
}
export interface QuerySubaccountOrdersResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountOrdersResponse";
  value: QuerySubaccountOrdersResponseAmino;
}
export interface SubaccountOrderbookMetadataWithMarket {
  metadata?: SubaccountOrderbookMetadata;
  marketId: string;
  isBuy: boolean;
}
export interface SubaccountOrderbookMetadataWithMarketProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SubaccountOrderbookMetadataWithMarket";
  value: Uint8Array;
}
export interface SubaccountOrderbookMetadataWithMarketAmino {
  metadata?: SubaccountOrderbookMetadataAmino;
  market_id: string;
  isBuy: boolean;
}
export interface SubaccountOrderbookMetadataWithMarketAminoMsg {
  type: "/injective.exchange.v1beta1.SubaccountOrderbookMetadataWithMarket";
  value: SubaccountOrderbookMetadataWithMarketAmino;
}
/**
 * QueryExchangeParamsRequest is the request type for the Query/ExchangeParams
 * RPC method.
 */
export interface QueryExchangeParamsRequest {}
export interface QueryExchangeParamsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsRequest";
  value: Uint8Array;
}
/**
 * QueryExchangeParamsRequest is the request type for the Query/ExchangeParams
 * RPC method.
 */
export interface QueryExchangeParamsRequestAmino {}
export interface QueryExchangeParamsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryExchangeParamsRequest";
  value: QueryExchangeParamsRequestAmino;
}
/**
 * QueryExchangeParamsRequest is the response type for the Query/ExchangeParams
 * RPC method.
 */
export interface QueryExchangeParamsResponse {
  params: Params;
}
export interface QueryExchangeParamsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsResponse";
  value: Uint8Array;
}
/**
 * QueryExchangeParamsRequest is the response type for the Query/ExchangeParams
 * RPC method.
 */
export interface QueryExchangeParamsResponseAmino {
  params: ParamsAmino;
}
export interface QueryExchangeParamsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryExchangeParamsResponse";
  value: QueryExchangeParamsResponseAmino;
}
/**
 * QuerySubaccountDepositsRequest is the request type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositsRequest {
  subaccountId: string;
  subaccount?: Subaccount;
}
export interface QuerySubaccountDepositsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsRequest";
  value: Uint8Array;
}
/**
 * QuerySubaccountDepositsRequest is the request type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositsRequestAmino {
  subaccount_id: string;
  subaccount?: SubaccountAmino;
}
export interface QuerySubaccountDepositsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountDepositsRequest";
  value: QuerySubaccountDepositsRequestAmino;
}
export interface QuerySubaccountDepositsResponse_DepositsEntry {
  key: string;
  value?: Deposit;
}
export interface QuerySubaccountDepositsResponse_DepositsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface QuerySubaccountDepositsResponse_DepositsEntryAmino {
  key: string;
  value?: DepositAmino;
}
export interface QuerySubaccountDepositsResponse_DepositsEntryAminoMsg {
  type: string;
  value: QuerySubaccountDepositsResponse_DepositsEntryAmino;
}
/**
 * QuerySubaccountDepositsResponse is the response type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositsResponse {
  deposits: {
    [key: string]: Deposit;
  };
}
export interface QuerySubaccountDepositsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsResponse";
  value: Uint8Array;
}
/**
 * QuerySubaccountDepositsResponse is the response type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositsResponseAmino {
  deposits: {
    [key: string]: DepositAmino;
  };
}
export interface QuerySubaccountDepositsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountDepositsResponse";
  value: QuerySubaccountDepositsResponseAmino;
}
/**
 * QueryExchangeBalancesRequest is the request type for the
 * Query/ExchangeBalances RPC method.
 */
export interface QueryExchangeBalancesRequest {}
export interface QueryExchangeBalancesRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesRequest";
  value: Uint8Array;
}
/**
 * QueryExchangeBalancesRequest is the request type for the
 * Query/ExchangeBalances RPC method.
 */
export interface QueryExchangeBalancesRequestAmino {}
export interface QueryExchangeBalancesRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryExchangeBalancesRequest";
  value: QueryExchangeBalancesRequestAmino;
}
/**
 * QuerySubaccountDepositsResponse is the response type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QueryExchangeBalancesResponse {
  balances: Balance[];
}
export interface QueryExchangeBalancesResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesResponse";
  value: Uint8Array;
}
/**
 * QuerySubaccountDepositsResponse is the response type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QueryExchangeBalancesResponseAmino {
  balances: BalanceAmino[];
}
export interface QueryExchangeBalancesResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryExchangeBalancesResponse";
  value: QueryExchangeBalancesResponseAmino;
}
/**
 * QueryAggregateVolumeRequest is the request type for the Query/AggregateVolume
 * RPC method.
 */
export interface QueryAggregateVolumeRequest {
  /** can either be an address or a subaccount */
  account: string;
}
export interface QueryAggregateVolumeRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateVolumeRequest";
  value: Uint8Array;
}
/**
 * QueryAggregateVolumeRequest is the request type for the Query/AggregateVolume
 * RPC method.
 */
export interface QueryAggregateVolumeRequestAmino {
  /** can either be an address or a subaccount */
  account: string;
}
export interface QueryAggregateVolumeRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryAggregateVolumeRequest";
  value: QueryAggregateVolumeRequestAmino;
}
/**
 * QueryAggregateVolumeResponse is the response type for the
 * Query/AggregateVolume RPC method.
 */
export interface QueryAggregateVolumeResponse {
  /**
   * if an address is specified, then the aggregate_volumes will aggregate the
   * volumes across all subaccounts for the address
   */
  aggregateVolumes: MarketVolume[];
}
export interface QueryAggregateVolumeResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateVolumeResponse";
  value: Uint8Array;
}
/**
 * QueryAggregateVolumeResponse is the response type for the
 * Query/AggregateVolume RPC method.
 */
export interface QueryAggregateVolumeResponseAmino {
  /**
   * if an address is specified, then the aggregate_volumes will aggregate the
   * volumes across all subaccounts for the address
   */
  aggregate_volumes: MarketVolumeAmino[];
}
export interface QueryAggregateVolumeResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryAggregateVolumeResponse";
  value: QueryAggregateVolumeResponseAmino;
}
/**
 * QueryAggregateVolumesRequest is the request type for the
 * Query/AggregateVolumes RPC method.
 */
export interface QueryAggregateVolumesRequest {
  accounts: string[];
  marketIds: string[];
}
export interface QueryAggregateVolumesRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateVolumesRequest";
  value: Uint8Array;
}
/**
 * QueryAggregateVolumesRequest is the request type for the
 * Query/AggregateVolumes RPC method.
 */
export interface QueryAggregateVolumesRequestAmino {
  accounts: string[];
  market_ids: string[];
}
export interface QueryAggregateVolumesRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryAggregateVolumesRequest";
  value: QueryAggregateVolumesRequestAmino;
}
/**
 * QueryAggregateVolumesResponse is the response type for the
 * Query/AggregateVolumes RPC method.
 */
export interface QueryAggregateVolumesResponse {
  /** the aggregate volume records for the accounts specified */
  aggregateAccountVolumes: AggregateAccountVolumeRecord[];
  /** the aggregate volumes for the markets specified */
  aggregateMarketVolumes: MarketVolume[];
}
export interface QueryAggregateVolumesResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateVolumesResponse";
  value: Uint8Array;
}
/**
 * QueryAggregateVolumesResponse is the response type for the
 * Query/AggregateVolumes RPC method.
 */
export interface QueryAggregateVolumesResponseAmino {
  /** the aggregate volume records for the accounts specified */
  aggregate_account_volumes: AggregateAccountVolumeRecordAmino[];
  /** the aggregate volumes for the markets specified */
  aggregate_market_volumes: MarketVolumeAmino[];
}
export interface QueryAggregateVolumesResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryAggregateVolumesResponse";
  value: QueryAggregateVolumesResponseAmino;
}
/**
 * QueryAggregateMarketVolumeRequest is the request type for the
 * Query/AggregateMarketVolume RPC method.
 */
export interface QueryAggregateMarketVolumeRequest {
  marketId: string;
}
export interface QueryAggregateMarketVolumeRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateMarketVolumeRequest";
  value: Uint8Array;
}
/**
 * QueryAggregateMarketVolumeRequest is the request type for the
 * Query/AggregateMarketVolume RPC method.
 */
export interface QueryAggregateMarketVolumeRequestAmino {
  market_id: string;
}
export interface QueryAggregateMarketVolumeRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryAggregateMarketVolumeRequest";
  value: QueryAggregateMarketVolumeRequestAmino;
}
/**
 * QueryAggregateMarketVolumeResponse is the response type for the
 * Query/AggregateMarketVolume RPC method.
 */
export interface QueryAggregateMarketVolumeResponse {
  volume: VolumeRecord;
}
export interface QueryAggregateMarketVolumeResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateMarketVolumeResponse";
  value: Uint8Array;
}
/**
 * QueryAggregateMarketVolumeResponse is the response type for the
 * Query/AggregateMarketVolume RPC method.
 */
export interface QueryAggregateMarketVolumeResponseAmino {
  volume: VolumeRecordAmino;
}
export interface QueryAggregateMarketVolumeResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryAggregateMarketVolumeResponse";
  value: QueryAggregateMarketVolumeResponseAmino;
}
/**
 * QueryDenomDecimalRequest is the request type for the Query/DenomDecimal RPC
 * method.
 */
export interface QueryDenomDecimalRequest {
  denom: string;
}
export interface QueryDenomDecimalRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDenomDecimalRequest";
  value: Uint8Array;
}
/**
 * QueryDenomDecimalRequest is the request type for the Query/DenomDecimal RPC
 * method.
 */
export interface QueryDenomDecimalRequestAmino {
  denom: string;
}
export interface QueryDenomDecimalRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDenomDecimalRequest";
  value: QueryDenomDecimalRequestAmino;
}
/**
 * QueryDenomDecimalResponse is the response type for the Query/DenomDecimal RPC
 * method.
 */
export interface QueryDenomDecimalResponse {
  decimal: bigint;
}
export interface QueryDenomDecimalResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDenomDecimalResponse";
  value: Uint8Array;
}
/**
 * QueryDenomDecimalResponse is the response type for the Query/DenomDecimal RPC
 * method.
 */
export interface QueryDenomDecimalResponseAmino {
  decimal: string;
}
export interface QueryDenomDecimalResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDenomDecimalResponse";
  value: QueryDenomDecimalResponseAmino;
}
/**
 * QueryDenomDecimalsRequest is the request type for the Query/DenomDecimals RPC
 * method.
 */
export interface QueryDenomDecimalsRequest {
  /** denoms can be empty to query all denom decimals */
  denoms: string[];
}
export interface QueryDenomDecimalsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDenomDecimalsRequest";
  value: Uint8Array;
}
/**
 * QueryDenomDecimalsRequest is the request type for the Query/DenomDecimals RPC
 * method.
 */
export interface QueryDenomDecimalsRequestAmino {
  /** denoms can be empty to query all denom decimals */
  denoms: string[];
}
export interface QueryDenomDecimalsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDenomDecimalsRequest";
  value: QueryDenomDecimalsRequestAmino;
}
/**
 * QueryDenomDecimalsRequest is the response type for the Query/DenomDecimals
 * RPC method.
 */
export interface QueryDenomDecimalsResponse {
  denomDecimals: DenomDecimals[];
}
export interface QueryDenomDecimalsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDenomDecimalsResponse";
  value: Uint8Array;
}
/**
 * QueryDenomDecimalsRequest is the response type for the Query/DenomDecimals
 * RPC method.
 */
export interface QueryDenomDecimalsResponseAmino {
  denom_decimals: DenomDecimalsAmino[];
}
export interface QueryDenomDecimalsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDenomDecimalsResponse";
  value: QueryDenomDecimalsResponseAmino;
}
/**
 * QueryAggregateMarketVolumesRequest is the request type for the
 * Query/AggregateMarketVolumes RPC method.
 */
export interface QueryAggregateMarketVolumesRequest {
  marketIds: string[];
}
export interface QueryAggregateMarketVolumesRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateMarketVolumesRequest";
  value: Uint8Array;
}
/**
 * QueryAggregateMarketVolumesRequest is the request type for the
 * Query/AggregateMarketVolumes RPC method.
 */
export interface QueryAggregateMarketVolumesRequestAmino {
  market_ids: string[];
}
export interface QueryAggregateMarketVolumesRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryAggregateMarketVolumesRequest";
  value: QueryAggregateMarketVolumesRequestAmino;
}
/**
 * QueryAggregateMarketVolumesResponse is the response type for the
 * Query/AggregateMarketVolumes RPC method.
 */
export interface QueryAggregateMarketVolumesResponse {
  /** the aggregate volumes for the entire market */
  volumes: MarketVolume[];
}
export interface QueryAggregateMarketVolumesResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateMarketVolumesResponse";
  value: Uint8Array;
}
/**
 * QueryAggregateMarketVolumesResponse is the response type for the
 * Query/AggregateMarketVolumes RPC method.
 */
export interface QueryAggregateMarketVolumesResponseAmino {
  /** the aggregate volumes for the entire market */
  volumes: MarketVolumeAmino[];
}
export interface QueryAggregateMarketVolumesResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryAggregateMarketVolumesResponse";
  value: QueryAggregateMarketVolumesResponseAmino;
}
/**
 * QuerySubaccountDepositsRequest is the request type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositRequest {
  subaccountId: string;
  denom: string;
}
export interface QuerySubaccountDepositRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositRequest";
  value: Uint8Array;
}
/**
 * QuerySubaccountDepositsRequest is the request type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositRequestAmino {
  subaccount_id: string;
  denom: string;
}
export interface QuerySubaccountDepositRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountDepositRequest";
  value: QuerySubaccountDepositRequestAmino;
}
/**
 * QuerySubaccountDepositsResponse is the response type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositResponse {
  deposits?: Deposit;
}
export interface QuerySubaccountDepositResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositResponse";
  value: Uint8Array;
}
/**
 * QuerySubaccountDepositsResponse is the response type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositResponseAmino {
  deposits?: DepositAmino;
}
export interface QuerySubaccountDepositResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountDepositResponse";
  value: QuerySubaccountDepositResponseAmino;
}
/**
 * QuerySpotMarketsRequest is the request type for the Query/SpotMarkets RPC
 * method.
 */
export interface QuerySpotMarketsRequest {
  /** Status of the market, for convenience it is set to string - not enum */
  status: string;
  /** Filter by market IDs */
  marketIds: string[];
}
export interface QuerySpotMarketsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsRequest";
  value: Uint8Array;
}
/**
 * QuerySpotMarketsRequest is the request type for the Query/SpotMarkets RPC
 * method.
 */
export interface QuerySpotMarketsRequestAmino {
  /** Status of the market, for convenience it is set to string - not enum */
  status: string;
  /** Filter by market IDs */
  market_ids: string[];
}
export interface QuerySpotMarketsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotMarketsRequest";
  value: QuerySpotMarketsRequestAmino;
}
/**
 * QuerySpotMarketsResponse is the response type for the Query/SpotMarkets RPC
 * method.
 */
export interface QuerySpotMarketsResponse {
  markets: SpotMarket[];
}
export interface QuerySpotMarketsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsResponse";
  value: Uint8Array;
}
/**
 * QuerySpotMarketsResponse is the response type for the Query/SpotMarkets RPC
 * method.
 */
export interface QuerySpotMarketsResponseAmino {
  markets: SpotMarketAmino[];
}
export interface QuerySpotMarketsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotMarketsResponse";
  value: QuerySpotMarketsResponseAmino;
}
/**
 * QuerySpotMarketRequest is the request type for the Query/SpotMarket RPC
 * method.
 */
export interface QuerySpotMarketRequest {
  /** Market ID for the market */
  marketId: string;
}
export interface QuerySpotMarketRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketRequest";
  value: Uint8Array;
}
/**
 * QuerySpotMarketRequest is the request type for the Query/SpotMarket RPC
 * method.
 */
export interface QuerySpotMarketRequestAmino {
  /** Market ID for the market */
  market_id: string;
}
export interface QuerySpotMarketRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotMarketRequest";
  value: QuerySpotMarketRequestAmino;
}
/**
 * QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC
 * method.
 */
export interface QuerySpotMarketResponse {
  market?: SpotMarket;
}
export interface QuerySpotMarketResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketResponse";
  value: Uint8Array;
}
/**
 * QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC
 * method.
 */
export interface QuerySpotMarketResponseAmino {
  market?: SpotMarketAmino;
}
export interface QuerySpotMarketResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotMarketResponse";
  value: QuerySpotMarketResponseAmino;
}
/**
 * QuerySpotOrderbookRequest is the request type for the Query/SpotOrderbook RPC
 * method.
 */
export interface QuerySpotOrderbookRequest {
  /** Market ID for the market */
  marketId: string;
  limit: bigint;
  orderSide: OrderSide;
  limitCumulativeNotional?: string;
  limitCumulativeQuantity?: string;
}
export interface QuerySpotOrderbookRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookRequest";
  value: Uint8Array;
}
/**
 * QuerySpotOrderbookRequest is the request type for the Query/SpotOrderbook RPC
 * method.
 */
export interface QuerySpotOrderbookRequestAmino {
  /** Market ID for the market */
  market_id: string;
  limit: string;
  order_side: OrderSide;
  limit_cumulative_notional?: string;
  limit_cumulative_quantity?: string;
}
export interface QuerySpotOrderbookRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotOrderbookRequest";
  value: QuerySpotOrderbookRequestAmino;
}
/**
 * QuerySpotOrderbookResponse is the response type for the Query/SpotOrderbook
 * RPC method.
 */
export interface QuerySpotOrderbookResponse {
  buysPriceLevel: Level[];
  sellsPriceLevel: Level[];
}
export interface QuerySpotOrderbookResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookResponse";
  value: Uint8Array;
}
/**
 * QuerySpotOrderbookResponse is the response type for the Query/SpotOrderbook
 * RPC method.
 */
export interface QuerySpotOrderbookResponseAmino {
  buys_price_level: LevelAmino[];
  sells_price_level: LevelAmino[];
}
export interface QuerySpotOrderbookResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotOrderbookResponse";
  value: QuerySpotOrderbookResponseAmino;
}
export interface FullSpotMarket {
  market?: SpotMarket;
  /**
   * mid_price_and_tob defines the mid price for this market and the best ask
   * and bid orders
   */
  midPriceAndTob?: MidPriceAndTOB;
}
export interface FullSpotMarketProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.FullSpotMarket";
  value: Uint8Array;
}
export interface FullSpotMarketAmino {
  market?: SpotMarketAmino;
  /**
   * mid_price_and_tob defines the mid price for this market and the best ask
   * and bid orders
   */
  mid_price_and_tob?: MidPriceAndTOBAmino;
}
export interface FullSpotMarketAminoMsg {
  type: "/injective.exchange.v1beta1.FullSpotMarket";
  value: FullSpotMarketAmino;
}
/**
 * QueryFullSpotMarketsRequest is the request type for the Query/FullSpotMarkets
 * RPC method.
 */
export interface QueryFullSpotMarketsRequest {
  /** Status of the market, for convenience it is set to string - not enum */
  status: string;
  /** Filter by market IDs */
  marketIds: string[];
  /**
   * Flag to return the markets mid price and top of the book buy and sell
   * orders.
   */
  withMidPriceAndTob: boolean;
}
export interface QueryFullSpotMarketsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFullSpotMarketsRequest";
  value: Uint8Array;
}
/**
 * QueryFullSpotMarketsRequest is the request type for the Query/FullSpotMarkets
 * RPC method.
 */
export interface QueryFullSpotMarketsRequestAmino {
  /** Status of the market, for convenience it is set to string - not enum */
  status: string;
  /** Filter by market IDs */
  market_ids: string[];
  /**
   * Flag to return the markets mid price and top of the book buy and sell
   * orders.
   */
  with_mid_price_and_tob: boolean;
}
export interface QueryFullSpotMarketsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFullSpotMarketsRequest";
  value: QueryFullSpotMarketsRequestAmino;
}
/**
 * QueryFullSpotMarketsResponse is the response type for the
 * Query/FullSpotMarkets RPC method.
 */
export interface QueryFullSpotMarketsResponse {
  markets: FullSpotMarket[];
}
export interface QueryFullSpotMarketsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFullSpotMarketsResponse";
  value: Uint8Array;
}
/**
 * QueryFullSpotMarketsResponse is the response type for the
 * Query/FullSpotMarkets RPC method.
 */
export interface QueryFullSpotMarketsResponseAmino {
  markets: FullSpotMarketAmino[];
}
export interface QueryFullSpotMarketsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFullSpotMarketsResponse";
  value: QueryFullSpotMarketsResponseAmino;
}
/**
 * QuerySpotMarketRequest is the request type for the Query/SpotMarket RPC
 * method.
 */
export interface QueryFullSpotMarketRequest {
  /** Market ID for the market */
  marketId: string;
  /**
   * Flag to return the markets mid price and top of the book buy and sell
   * orders.
   */
  withMidPriceAndTob: boolean;
}
export interface QueryFullSpotMarketRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFullSpotMarketRequest";
  value: Uint8Array;
}
/**
 * QuerySpotMarketRequest is the request type for the Query/SpotMarket RPC
 * method.
 */
export interface QueryFullSpotMarketRequestAmino {
  /** Market ID for the market */
  market_id: string;
  /**
   * Flag to return the markets mid price and top of the book buy and sell
   * orders.
   */
  with_mid_price_and_tob: boolean;
}
export interface QueryFullSpotMarketRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFullSpotMarketRequest";
  value: QueryFullSpotMarketRequestAmino;
}
/**
 * QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC
 * method.
 */
export interface QueryFullSpotMarketResponse {
  market?: FullSpotMarket;
}
export interface QueryFullSpotMarketResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFullSpotMarketResponse";
  value: Uint8Array;
}
/**
 * QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC
 * method.
 */
export interface QueryFullSpotMarketResponseAmino {
  market?: FullSpotMarketAmino;
}
export interface QueryFullSpotMarketResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFullSpotMarketResponse";
  value: QueryFullSpotMarketResponseAmino;
}
/**
 * QuerySpotOrdersByHashesRequest is the request type for the
 * Query/SpotOrdersByHashes RPC method.
 */
export interface QuerySpotOrdersByHashesRequest {
  /** Market ID for the market */
  marketId: string;
  /** SubaccountID of the trader */
  subaccountId: string;
  /** the order hashes */
  orderHashes: string[];
}
export interface QuerySpotOrdersByHashesRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesRequest";
  value: Uint8Array;
}
/**
 * QuerySpotOrdersByHashesRequest is the request type for the
 * Query/SpotOrdersByHashes RPC method.
 */
export interface QuerySpotOrdersByHashesRequestAmino {
  /** Market ID for the market */
  market_id: string;
  /** SubaccountID of the trader */
  subaccount_id: string;
  /** the order hashes */
  order_hashes: string[];
}
export interface QuerySpotOrdersByHashesRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesRequest";
  value: QuerySpotOrdersByHashesRequestAmino;
}
/**
 * QuerySpotOrdersByHashesResponse is the response type for the
 * Query/SpotOrdersByHashes RPC method.
 */
export interface QuerySpotOrdersByHashesResponse {
  orders: TrimmedSpotLimitOrder[];
}
export interface QuerySpotOrdersByHashesResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesResponse";
  value: Uint8Array;
}
/**
 * QuerySpotOrdersByHashesResponse is the response type for the
 * Query/SpotOrdersByHashes RPC method.
 */
export interface QuerySpotOrdersByHashesResponseAmino {
  orders: TrimmedSpotLimitOrderAmino[];
}
export interface QuerySpotOrdersByHashesResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesResponse";
  value: QuerySpotOrdersByHashesResponseAmino;
}
/**
 * QueryTraderSpotOrdersRequest is the request type for the
 * Query/TraderSpotOrders RPC method.
 */
export interface QueryTraderSpotOrdersRequest {
  /** Market ID for the market */
  marketId: string;
  /** SubaccountID of the trader */
  subaccountId: string;
}
export interface QueryTraderSpotOrdersRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersRequest";
  value: Uint8Array;
}
/**
 * QueryTraderSpotOrdersRequest is the request type for the
 * Query/TraderSpotOrders RPC method.
 */
export interface QueryTraderSpotOrdersRequestAmino {
  /** Market ID for the market */
  market_id: string;
  /** SubaccountID of the trader */
  subaccount_id: string;
}
export interface QueryTraderSpotOrdersRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTraderSpotOrdersRequest";
  value: QueryTraderSpotOrdersRequestAmino;
}
/**
 * QueryAccountAddressSpotOrdersRequest is the request type for the
 * Query/AccountAddressSpotOrders RPC method.
 */
export interface QueryAccountAddressSpotOrdersRequest {
  /** Market ID for the market */
  marketId: string;
  /** Account address of the trader */
  accountAddress: string;
}
export interface QueryAccountAddressSpotOrdersRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryAccountAddressSpotOrdersRequest";
  value: Uint8Array;
}
/**
 * QueryAccountAddressSpotOrdersRequest is the request type for the
 * Query/AccountAddressSpotOrders RPC method.
 */
export interface QueryAccountAddressSpotOrdersRequestAmino {
  /** Market ID for the market */
  market_id: string;
  /** Account address of the trader */
  account_address: string;
}
export interface QueryAccountAddressSpotOrdersRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryAccountAddressSpotOrdersRequest";
  value: QueryAccountAddressSpotOrdersRequestAmino;
}
export interface TrimmedSpotLimitOrder {
  /** price of the order */
  price: string;
  /** quantity of the order */
  quantity: string;
  /** the amount of the quantity remaining fillable */
  fillable: string;
  /** true if the order is a buy */
  isBuy: boolean;
  orderHash: string;
  cid: string;
}
export interface TrimmedSpotLimitOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TrimmedSpotLimitOrder";
  value: Uint8Array;
}
export interface TrimmedSpotLimitOrderAmino {
  /** price of the order */
  price: string;
  /** quantity of the order */
  quantity: string;
  /** the amount of the quantity remaining fillable */
  fillable: string;
  /** true if the order is a buy */
  isBuy: boolean;
  order_hash: string;
  cid: string;
}
export interface TrimmedSpotLimitOrderAminoMsg {
  type: "/injective.exchange.v1beta1.TrimmedSpotLimitOrder";
  value: TrimmedSpotLimitOrderAmino;
}
/**
 * QueryTraderSpotOrdersResponse is the response type for the
 * Query/TraderSpotOrders RPC method.
 */
export interface QueryTraderSpotOrdersResponse {
  orders: TrimmedSpotLimitOrder[];
}
export interface QueryTraderSpotOrdersResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersResponse";
  value: Uint8Array;
}
/**
 * QueryTraderSpotOrdersResponse is the response type for the
 * Query/TraderSpotOrders RPC method.
 */
export interface QueryTraderSpotOrdersResponseAmino {
  orders: TrimmedSpotLimitOrderAmino[];
}
export interface QueryTraderSpotOrdersResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTraderSpotOrdersResponse";
  value: QueryTraderSpotOrdersResponseAmino;
}
/**
 * QueryAccountAddressSpotOrdersResponse is the response type for the
 * Query/AccountAddressSpotOrders RPC method.
 */
export interface QueryAccountAddressSpotOrdersResponse {
  orders: TrimmedSpotLimitOrder[];
}
export interface QueryAccountAddressSpotOrdersResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryAccountAddressSpotOrdersResponse";
  value: Uint8Array;
}
/**
 * QueryAccountAddressSpotOrdersResponse is the response type for the
 * Query/AccountAddressSpotOrders RPC method.
 */
export interface QueryAccountAddressSpotOrdersResponseAmino {
  orders: TrimmedSpotLimitOrderAmino[];
}
export interface QueryAccountAddressSpotOrdersResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryAccountAddressSpotOrdersResponse";
  value: QueryAccountAddressSpotOrdersResponseAmino;
}
/**
 * QuerySpotMidPriceAndTOBRequest is the request type for the
 * Query/SpotMidPriceAndTOB RPC method.
 */
export interface QuerySpotMidPriceAndTOBRequest {
  /** Market ID for the market */
  marketId: string;
}
export interface QuerySpotMidPriceAndTOBRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBRequest";
  value: Uint8Array;
}
/**
 * QuerySpotMidPriceAndTOBRequest is the request type for the
 * Query/SpotMidPriceAndTOB RPC method.
 */
export interface QuerySpotMidPriceAndTOBRequestAmino {
  /** Market ID for the market */
  market_id: string;
}
export interface QuerySpotMidPriceAndTOBRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBRequest";
  value: QuerySpotMidPriceAndTOBRequestAmino;
}
/**
 * QuerySpotMidPriceAndTOBResponse is the response type for the
 * Query/SpotMidPriceAndTOB RPC method.
 */
export interface QuerySpotMidPriceAndTOBResponse {
  /** mid price of the market */
  midPrice?: string;
  /** best buy price of the market */
  bestBuyPrice?: string;
  /** best sell price of the market */
  bestSellPrice?: string;
}
export interface QuerySpotMidPriceAndTOBResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBResponse";
  value: Uint8Array;
}
/**
 * QuerySpotMidPriceAndTOBResponse is the response type for the
 * Query/SpotMidPriceAndTOB RPC method.
 */
export interface QuerySpotMidPriceAndTOBResponseAmino {
  /** mid price of the market */
  mid_price?: string;
  /** best buy price of the market */
  best_buy_price?: string;
  /** best sell price of the market */
  best_sell_price?: string;
}
export interface QuerySpotMidPriceAndTOBResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBResponse";
  value: QuerySpotMidPriceAndTOBResponseAmino;
}
/**
 * QueryDerivativeMidPriceAndTOBRequest is the request type for the
 * Query/GetDerivativeMidPriceAndTOB RPC method.
 */
export interface QueryDerivativeMidPriceAndTOBRequest {
  /** Market ID for the market */
  marketId: string;
}
export interface QueryDerivativeMidPriceAndTOBRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBRequest";
  value: Uint8Array;
}
/**
 * QueryDerivativeMidPriceAndTOBRequest is the request type for the
 * Query/GetDerivativeMidPriceAndTOB RPC method.
 */
export interface QueryDerivativeMidPriceAndTOBRequestAmino {
  /** Market ID for the market */
  market_id: string;
}
export interface QueryDerivativeMidPriceAndTOBRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBRequest";
  value: QueryDerivativeMidPriceAndTOBRequestAmino;
}
/**
 * QueryDerivativeMidPriceAndTOBResponse is the response type for the
 * Query/GetDerivativeMidPriceAndTOB RPC method.
 */
export interface QueryDerivativeMidPriceAndTOBResponse {
  /** mid price of the market */
  midPrice?: string;
  /** best buy price of the market */
  bestBuyPrice?: string;
  /** best sell price of the market */
  bestSellPrice?: string;
}
export interface QueryDerivativeMidPriceAndTOBResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBResponse";
  value: Uint8Array;
}
/**
 * QueryDerivativeMidPriceAndTOBResponse is the response type for the
 * Query/GetDerivativeMidPriceAndTOB RPC method.
 */
export interface QueryDerivativeMidPriceAndTOBResponseAmino {
  /** mid price of the market */
  mid_price?: string;
  /** best buy price of the market */
  best_buy_price?: string;
  /** best sell price of the market */
  best_sell_price?: string;
}
export interface QueryDerivativeMidPriceAndTOBResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBResponse";
  value: QueryDerivativeMidPriceAndTOBResponseAmino;
}
/**
 * QueryDerivativeOrderbookRequest is the request type for the
 * Query/DerivativeOrderbook RPC method.
 */
export interface QueryDerivativeOrderbookRequest {
  /** Market ID for the market */
  marketId: string;
  limit: bigint;
  limitCumulativeNotional?: string;
}
export interface QueryDerivativeOrderbookRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookRequest";
  value: Uint8Array;
}
/**
 * QueryDerivativeOrderbookRequest is the request type for the
 * Query/DerivativeOrderbook RPC method.
 */
export interface QueryDerivativeOrderbookRequestAmino {
  /** Market ID for the market */
  market_id: string;
  limit: string;
  limit_cumulative_notional?: string;
}
export interface QueryDerivativeOrderbookRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeOrderbookRequest";
  value: QueryDerivativeOrderbookRequestAmino;
}
/**
 * QueryDerivativeOrderbookResponse is the response type for the
 * Query/DerivativeOrderbook RPC method.
 */
export interface QueryDerivativeOrderbookResponse {
  buysPriceLevel: Level[];
  sellsPriceLevel: Level[];
}
export interface QueryDerivativeOrderbookResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookResponse";
  value: Uint8Array;
}
/**
 * QueryDerivativeOrderbookResponse is the response type for the
 * Query/DerivativeOrderbook RPC method.
 */
export interface QueryDerivativeOrderbookResponseAmino {
  buys_price_level: LevelAmino[];
  sells_price_level: LevelAmino[];
}
export interface QueryDerivativeOrderbookResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeOrderbookResponse";
  value: QueryDerivativeOrderbookResponseAmino;
}
/**
 * QueryTraderSpotOrdersToCancelUpToAmountRequest is the request type for the
 * Query/TraderSpotOrdersToCancelUpToAmountRequest RPC method.
 */
export interface QueryTraderSpotOrdersToCancelUpToAmountRequest {
  /** Market ID for the market */
  marketId: string;
  /** SubaccountID of the trader */
  subaccountId: string;
  /** the base amount to cancel (free up) */
  baseAmount: string;
  /** the quote amount to cancel (free up) */
  quoteAmount: string;
  /** The cancellation strategy */
  strategy: CancellationStrategy;
  /**
   * The reference price for the cancellation strategy, e.g. mid price or mark
   * price
   */
  referencePrice?: string;
}
export interface QueryTraderSpotOrdersToCancelUpToAmountRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersToCancelUpToAmountRequest";
  value: Uint8Array;
}
/**
 * QueryTraderSpotOrdersToCancelUpToAmountRequest is the request type for the
 * Query/TraderSpotOrdersToCancelUpToAmountRequest RPC method.
 */
export interface QueryTraderSpotOrdersToCancelUpToAmountRequestAmino {
  /** Market ID for the market */
  market_id: string;
  /** SubaccountID of the trader */
  subaccount_id: string;
  /** the base amount to cancel (free up) */
  base_amount: string;
  /** the quote amount to cancel (free up) */
  quote_amount: string;
  /** The cancellation strategy */
  strategy: CancellationStrategy;
  /**
   * The reference price for the cancellation strategy, e.g. mid price or mark
   * price
   */
  reference_price?: string;
}
export interface QueryTraderSpotOrdersToCancelUpToAmountRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTraderSpotOrdersToCancelUpToAmountRequest";
  value: QueryTraderSpotOrdersToCancelUpToAmountRequestAmino;
}
/**
 * QueryTraderDerivativeOrdersToCancelUpToAmountRequest is the request type for
 * the Query/TraderDerivativeOrdersToCancelUpToAmountRequest RPC method.
 */
export interface QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
  /** Market ID for the market */
  marketId: string;
  /** SubaccountID of the trader */
  subaccountId: string;
  /** the quote amount to cancel (free up) */
  quoteAmount: string;
  /** The cancellation strategy */
  strategy: CancellationStrategy;
  /**
   * The reference price for the cancellation strategy, e.g. mid price or mark
   * price
   */
  referencePrice?: string;
}
export interface QueryTraderDerivativeOrdersToCancelUpToAmountRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersToCancelUpToAmountRequest";
  value: Uint8Array;
}
/**
 * QueryTraderDerivativeOrdersToCancelUpToAmountRequest is the request type for
 * the Query/TraderDerivativeOrdersToCancelUpToAmountRequest RPC method.
 */
export interface QueryTraderDerivativeOrdersToCancelUpToAmountRequestAmino {
  /** Market ID for the market */
  market_id: string;
  /** SubaccountID of the trader */
  subaccount_id: string;
  /** the quote amount to cancel (free up) */
  quote_amount: string;
  /** The cancellation strategy */
  strategy: CancellationStrategy;
  /**
   * The reference price for the cancellation strategy, e.g. mid price or mark
   * price
   */
  reference_price?: string;
}
export interface QueryTraderDerivativeOrdersToCancelUpToAmountRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersToCancelUpToAmountRequest";
  value: QueryTraderDerivativeOrdersToCancelUpToAmountRequestAmino;
}
/**
 * QueryTraderDerivativeOrdersRequest is the request type for the
 * Query/TraderDerivativeOrders RPC method.
 */
export interface QueryTraderDerivativeOrdersRequest {
  /** Market ID for the market */
  marketId: string;
  /** SubaccountID of the trader */
  subaccountId: string;
}
export interface QueryTraderDerivativeOrdersRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersRequest";
  value: Uint8Array;
}
/**
 * QueryTraderDerivativeOrdersRequest is the request type for the
 * Query/TraderDerivativeOrders RPC method.
 */
export interface QueryTraderDerivativeOrdersRequestAmino {
  /** Market ID for the market */
  market_id: string;
  /** SubaccountID of the trader */
  subaccount_id: string;
}
export interface QueryTraderDerivativeOrdersRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersRequest";
  value: QueryTraderDerivativeOrdersRequestAmino;
}
/**
 * QueryAccountAddressSpotOrdersRequest is the request type for the
 * Query/AccountAddressDerivativeOrders RPC method.
 */
export interface QueryAccountAddressDerivativeOrdersRequest {
  /** Market ID for the market */
  marketId: string;
  /** Account address of the trader */
  accountAddress: string;
}
export interface QueryAccountAddressDerivativeOrdersRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryAccountAddressDerivativeOrdersRequest";
  value: Uint8Array;
}
/**
 * QueryAccountAddressSpotOrdersRequest is the request type for the
 * Query/AccountAddressDerivativeOrders RPC method.
 */
export interface QueryAccountAddressDerivativeOrdersRequestAmino {
  /** Market ID for the market */
  market_id: string;
  /** Account address of the trader */
  account_address: string;
}
export interface QueryAccountAddressDerivativeOrdersRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryAccountAddressDerivativeOrdersRequest";
  value: QueryAccountAddressDerivativeOrdersRequestAmino;
}
export interface TrimmedDerivativeLimitOrder {
  /** price of the order */
  price: string;
  /** quantity of the order */
  quantity: string;
  /** margin of the order */
  margin: string;
  /** the amount of the quantity remaining fillable */
  fillable: string;
  /** true if the order is a buy */
  isBuy: boolean;
  orderHash: string;
  cid: string;
}
export interface TrimmedDerivativeLimitOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeLimitOrder";
  value: Uint8Array;
}
export interface TrimmedDerivativeLimitOrderAmino {
  /** price of the order */
  price: string;
  /** quantity of the order */
  quantity: string;
  /** margin of the order */
  margin: string;
  /** the amount of the quantity remaining fillable */
  fillable: string;
  /** true if the order is a buy */
  isBuy: boolean;
  order_hash: string;
  cid: string;
}
export interface TrimmedDerivativeLimitOrderAminoMsg {
  type: "/injective.exchange.v1beta1.TrimmedDerivativeLimitOrder";
  value: TrimmedDerivativeLimitOrderAmino;
}
/**
 * QueryTraderDerivativeOrdersResponse is the response type for the
 * Query/TraderDerivativeOrders RPC method.
 */
export interface QueryTraderDerivativeOrdersResponse {
  orders: TrimmedDerivativeLimitOrder[];
}
export interface QueryTraderDerivativeOrdersResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersResponse";
  value: Uint8Array;
}
/**
 * QueryTraderDerivativeOrdersResponse is the response type for the
 * Query/TraderDerivativeOrders RPC method.
 */
export interface QueryTraderDerivativeOrdersResponseAmino {
  orders: TrimmedDerivativeLimitOrderAmino[];
}
export interface QueryTraderDerivativeOrdersResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersResponse";
  value: QueryTraderDerivativeOrdersResponseAmino;
}
/**
 * QueryAccountAddressDerivativeOrdersResponse is the response type for the
 * Query/AccountAddressDerivativeOrders RPC method.
 */
export interface QueryAccountAddressDerivativeOrdersResponse {
  orders: TrimmedDerivativeLimitOrder[];
}
export interface QueryAccountAddressDerivativeOrdersResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryAccountAddressDerivativeOrdersResponse";
  value: Uint8Array;
}
/**
 * QueryAccountAddressDerivativeOrdersResponse is the response type for the
 * Query/AccountAddressDerivativeOrders RPC method.
 */
export interface QueryAccountAddressDerivativeOrdersResponseAmino {
  orders: TrimmedDerivativeLimitOrderAmino[];
}
export interface QueryAccountAddressDerivativeOrdersResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryAccountAddressDerivativeOrdersResponse";
  value: QueryAccountAddressDerivativeOrdersResponseAmino;
}
/**
 * QueryTraderDerivativeOrdersRequest is the request type for the
 * Query/TraderDerivativeOrders RPC method.
 */
export interface QueryDerivativeOrdersByHashesRequest {
  /** Market ID for the market */
  marketId: string;
  /** SubaccountID of the trader */
  subaccountId: string;
  /** the order hashes */
  orderHashes: string[];
}
export interface QueryDerivativeOrdersByHashesRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesRequest";
  value: Uint8Array;
}
/**
 * QueryTraderDerivativeOrdersRequest is the request type for the
 * Query/TraderDerivativeOrders RPC method.
 */
export interface QueryDerivativeOrdersByHashesRequestAmino {
  /** Market ID for the market */
  market_id: string;
  /** SubaccountID of the trader */
  subaccount_id: string;
  /** the order hashes */
  order_hashes: string[];
}
export interface QueryDerivativeOrdersByHashesRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesRequest";
  value: QueryDerivativeOrdersByHashesRequestAmino;
}
/**
 * QueryDerivativeOrdersByHashesResponse is the response type for the
 * Query/DerivativeOrdersByHashes RPC method.
 */
export interface QueryDerivativeOrdersByHashesResponse {
  orders: TrimmedDerivativeLimitOrder[];
}
export interface QueryDerivativeOrdersByHashesResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesResponse";
  value: Uint8Array;
}
/**
 * QueryDerivativeOrdersByHashesResponse is the response type for the
 * Query/DerivativeOrdersByHashes RPC method.
 */
export interface QueryDerivativeOrdersByHashesResponseAmino {
  orders: TrimmedDerivativeLimitOrderAmino[];
}
export interface QueryDerivativeOrdersByHashesResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesResponse";
  value: QueryDerivativeOrdersByHashesResponseAmino;
}
/**
 * QueryDerivativeMarketsRequest is the request type for the
 * Query/DerivativeMarkets RPC method.
 */
export interface QueryDerivativeMarketsRequest {
  /** Status of the market, for convenience it is set to string - not enum */
  status: string;
  /** Filter by market IDs */
  marketIds: string[];
  /**
   * Flag to return the markets mid price and top of the book buy and sell
   * orders.
   */
  withMidPriceAndTob: boolean;
}
export interface QueryDerivativeMarketsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsRequest";
  value: Uint8Array;
}
/**
 * QueryDerivativeMarketsRequest is the request type for the
 * Query/DerivativeMarkets RPC method.
 */
export interface QueryDerivativeMarketsRequestAmino {
  /** Status of the market, for convenience it is set to string - not enum */
  status: string;
  /** Filter by market IDs */
  market_ids: string[];
  /**
   * Flag to return the markets mid price and top of the book buy and sell
   * orders.
   */
  with_mid_price_and_tob: boolean;
}
export interface QueryDerivativeMarketsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeMarketsRequest";
  value: QueryDerivativeMarketsRequestAmino;
}
export interface PriceLevel {
  price: string;
  /** quantity */
  quantity: string;
}
export interface PriceLevelProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.PriceLevel";
  value: Uint8Array;
}
export interface PriceLevelAmino {
  price: string;
  /** quantity */
  quantity: string;
}
export interface PriceLevelAminoMsg {
  type: "/injective.exchange.v1beta1.PriceLevel";
  value: PriceLevelAmino;
}
export interface PerpetualMarketState {
  marketInfo?: PerpetualMarketInfo;
  fundingInfo?: PerpetualMarketFunding;
}
export interface PerpetualMarketStateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.PerpetualMarketState";
  value: Uint8Array;
}
export interface PerpetualMarketStateAmino {
  market_info?: PerpetualMarketInfoAmino;
  funding_info?: PerpetualMarketFundingAmino;
}
export interface PerpetualMarketStateAminoMsg {
  type: "/injective.exchange.v1beta1.PerpetualMarketState";
  value: PerpetualMarketStateAmino;
}
export interface FullDerivativeMarket {
  market?: DerivativeMarket;
  perpetualInfo?: PerpetualMarketState;
  futuresInfo?: ExpiryFuturesMarketInfo;
  markPrice: string;
  /**
   * mid_price_and_tob defines the mid price for this market and the best ask
   * and bid orders
   */
  midPriceAndTob?: MidPriceAndTOB;
}
export interface FullDerivativeMarketProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.FullDerivativeMarket";
  value: Uint8Array;
}
export interface FullDerivativeMarketAmino {
  market?: DerivativeMarketAmino;
  perpetual_info?: PerpetualMarketStateAmino;
  futures_info?: ExpiryFuturesMarketInfoAmino;
  mark_price: string;
  /**
   * mid_price_and_tob defines the mid price for this market and the best ask
   * and bid orders
   */
  mid_price_and_tob?: MidPriceAndTOBAmino;
}
export interface FullDerivativeMarketAminoMsg {
  type: "/injective.exchange.v1beta1.FullDerivativeMarket";
  value: FullDerivativeMarketAmino;
}
/**
 * QueryDerivativeMarketsResponse is the response type for the
 * Query/DerivativeMarkets RPC method.
 */
export interface QueryDerivativeMarketsResponse {
  markets: FullDerivativeMarket[];
}
export interface QueryDerivativeMarketsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsResponse";
  value: Uint8Array;
}
/**
 * QueryDerivativeMarketsResponse is the response type for the
 * Query/DerivativeMarkets RPC method.
 */
export interface QueryDerivativeMarketsResponseAmino {
  markets: FullDerivativeMarketAmino[];
}
export interface QueryDerivativeMarketsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeMarketsResponse";
  value: QueryDerivativeMarketsResponseAmino;
}
/**
 * QueryDerivativeMarketRequest is the request type for the
 * Query/DerivativeMarket RPC method.
 */
export interface QueryDerivativeMarketRequest {
  /** Market ID for the market */
  marketId: string;
}
export interface QueryDerivativeMarketRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketRequest";
  value: Uint8Array;
}
/**
 * QueryDerivativeMarketRequest is the request type for the
 * Query/DerivativeMarket RPC method.
 */
export interface QueryDerivativeMarketRequestAmino {
  /** Market ID for the market */
  market_id: string;
}
export interface QueryDerivativeMarketRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeMarketRequest";
  value: QueryDerivativeMarketRequestAmino;
}
/**
 * QueryDerivativeMarketResponse is the response type for the
 * Query/DerivativeMarket RPC method.
 */
export interface QueryDerivativeMarketResponse {
  market?: FullDerivativeMarket;
}
export interface QueryDerivativeMarketResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketResponse";
  value: Uint8Array;
}
/**
 * QueryDerivativeMarketResponse is the response type for the
 * Query/DerivativeMarket RPC method.
 */
export interface QueryDerivativeMarketResponseAmino {
  market?: FullDerivativeMarketAmino;
}
export interface QueryDerivativeMarketResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeMarketResponse";
  value: QueryDerivativeMarketResponseAmino;
}
/**
 * QueryDerivativeMarketAddressRequest is the request type for the
 * Query/DerivativeMarketAddress RPC method.
 */
export interface QueryDerivativeMarketAddressRequest {
  /** Market ID for the market */
  marketId: string;
}
export interface QueryDerivativeMarketAddressRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressRequest";
  value: Uint8Array;
}
/**
 * QueryDerivativeMarketAddressRequest is the request type for the
 * Query/DerivativeMarketAddress RPC method.
 */
export interface QueryDerivativeMarketAddressRequestAmino {
  /** Market ID for the market */
  market_id: string;
}
export interface QueryDerivativeMarketAddressRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressRequest";
  value: QueryDerivativeMarketAddressRequestAmino;
}
/**
 * QueryDerivativeMarketAddressResponse is the response type for the
 * Query/DerivativeMarketAddress RPC method.
 */
export interface QueryDerivativeMarketAddressResponse {
  /** address for the market */
  address: string;
  /** subaccountID for the market */
  subaccountId: string;
}
export interface QueryDerivativeMarketAddressResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressResponse";
  value: Uint8Array;
}
/**
 * QueryDerivativeMarketAddressResponse is the response type for the
 * Query/DerivativeMarketAddress RPC method.
 */
export interface QueryDerivativeMarketAddressResponseAmino {
  /** address for the market */
  address: string;
  /** subaccountID for the market */
  subaccount_id: string;
}
export interface QueryDerivativeMarketAddressResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressResponse";
  value: QueryDerivativeMarketAddressResponseAmino;
}
/**
 * QuerySubaccountTradeNonceRequest is the request type for the
 * Query/SubaccountTradeNonce RPC method.
 */
export interface QuerySubaccountTradeNonceRequest {
  subaccountId: string;
}
export interface QuerySubaccountTradeNonceRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceRequest";
  value: Uint8Array;
}
/**
 * QuerySubaccountTradeNonceRequest is the request type for the
 * Query/SubaccountTradeNonce RPC method.
 */
export interface QuerySubaccountTradeNonceRequestAmino {
  subaccount_id: string;
}
export interface QuerySubaccountTradeNonceRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceRequest";
  value: QuerySubaccountTradeNonceRequestAmino;
}
/**
 * QuerySubaccountPositionsRequest is the request type for the
 * Query/SubaccountPositions RPC method.
 */
export interface QuerySubaccountPositionsRequest {
  subaccountId: string;
}
export interface QuerySubaccountPositionsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsRequest";
  value: Uint8Array;
}
/**
 * QuerySubaccountPositionsRequest is the request type for the
 * Query/SubaccountPositions RPC method.
 */
export interface QuerySubaccountPositionsRequestAmino {
  subaccount_id: string;
}
export interface QuerySubaccountPositionsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountPositionsRequest";
  value: QuerySubaccountPositionsRequestAmino;
}
/**
 * QuerySubaccountPositionInMarketRequest is the request type for the
 * Query/SubaccountPositionInMarket RPC method.
 */
export interface QuerySubaccountPositionInMarketRequest {
  subaccountId: string;
  marketId: string;
}
export interface QuerySubaccountPositionInMarketRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketRequest";
  value: Uint8Array;
}
/**
 * QuerySubaccountPositionInMarketRequest is the request type for the
 * Query/SubaccountPositionInMarket RPC method.
 */
export interface QuerySubaccountPositionInMarketRequestAmino {
  subaccount_id: string;
  market_id: string;
}
export interface QuerySubaccountPositionInMarketRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketRequest";
  value: QuerySubaccountPositionInMarketRequestAmino;
}
/**
 * QuerySubaccountEffectivePositionInMarketRequest is the request type for the
 * Query/SubaccountEffectivePositionInMarket RPC method.
 */
export interface QuerySubaccountEffectivePositionInMarketRequest {
  subaccountId: string;
  marketId: string;
}
export interface QuerySubaccountEffectivePositionInMarketRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketRequest";
  value: Uint8Array;
}
/**
 * QuerySubaccountEffectivePositionInMarketRequest is the request type for the
 * Query/SubaccountEffectivePositionInMarket RPC method.
 */
export interface QuerySubaccountEffectivePositionInMarketRequestAmino {
  subaccount_id: string;
  market_id: string;
}
export interface QuerySubaccountEffectivePositionInMarketRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketRequest";
  value: QuerySubaccountEffectivePositionInMarketRequestAmino;
}
/**
 * QuerySubaccountOrderMetadataRequest is the request type for the
 * Query/SubaccountOrderMetadata RPC method.
 */
export interface QuerySubaccountOrderMetadataRequest {
  subaccountId: string;
}
export interface QuerySubaccountOrderMetadataRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataRequest";
  value: Uint8Array;
}
/**
 * QuerySubaccountOrderMetadataRequest is the request type for the
 * Query/SubaccountOrderMetadata RPC method.
 */
export interface QuerySubaccountOrderMetadataRequestAmino {
  subaccount_id: string;
}
export interface QuerySubaccountOrderMetadataRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataRequest";
  value: QuerySubaccountOrderMetadataRequestAmino;
}
/**
 * QuerySubaccountPositionsResponse is the response type for the
 * Query/SubaccountPositions RPC method.
 */
export interface QuerySubaccountPositionsResponse {
  state: DerivativePosition[];
}
export interface QuerySubaccountPositionsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsResponse";
  value: Uint8Array;
}
/**
 * QuerySubaccountPositionsResponse is the response type for the
 * Query/SubaccountPositions RPC method.
 */
export interface QuerySubaccountPositionsResponseAmino {
  state: DerivativePositionAmino[];
}
export interface QuerySubaccountPositionsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountPositionsResponse";
  value: QuerySubaccountPositionsResponseAmino;
}
/**
 * QuerySubaccountPositionInMarketResponse is the response type for the
 * Query/SubaccountPositionInMarket RPC method.
 */
export interface QuerySubaccountPositionInMarketResponse {
  state?: Position;
}
export interface QuerySubaccountPositionInMarketResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketResponse";
  value: Uint8Array;
}
/**
 * QuerySubaccountPositionInMarketResponse is the response type for the
 * Query/SubaccountPositionInMarket RPC method.
 */
export interface QuerySubaccountPositionInMarketResponseAmino {
  state?: PositionAmino;
}
export interface QuerySubaccountPositionInMarketResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketResponse";
  value: QuerySubaccountPositionInMarketResponseAmino;
}
export interface EffectivePosition {
  isLong: boolean;
  quantity: string;
  entryPrice: string;
  effectiveMargin: string;
}
export interface EffectivePositionProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EffectivePosition";
  value: Uint8Array;
}
export interface EffectivePositionAmino {
  is_long: boolean;
  quantity: string;
  entry_price: string;
  effective_margin: string;
}
export interface EffectivePositionAminoMsg {
  type: "/injective.exchange.v1beta1.EffectivePosition";
  value: EffectivePositionAmino;
}
/**
 * QuerySubaccountEffectivePositionInMarketResponse is the response type for the
 * Query/SubaccountEffectivePositionInMarket RPC method.
 */
export interface QuerySubaccountEffectivePositionInMarketResponse {
  state?: EffectivePosition;
}
export interface QuerySubaccountEffectivePositionInMarketResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketResponse";
  value: Uint8Array;
}
/**
 * QuerySubaccountEffectivePositionInMarketResponse is the response type for the
 * Query/SubaccountEffectivePositionInMarket RPC method.
 */
export interface QuerySubaccountEffectivePositionInMarketResponseAmino {
  state?: EffectivePositionAmino;
}
export interface QuerySubaccountEffectivePositionInMarketResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketResponse";
  value: QuerySubaccountEffectivePositionInMarketResponseAmino;
}
/**
 * QueryPerpetualMarketInfoRequest is the request type for the
 * Query/PerpetualMarketInfo RPC method.
 */
export interface QueryPerpetualMarketInfoRequest {
  marketId: string;
}
export interface QueryPerpetualMarketInfoRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoRequest";
  value: Uint8Array;
}
/**
 * QueryPerpetualMarketInfoRequest is the request type for the
 * Query/PerpetualMarketInfo RPC method.
 */
export interface QueryPerpetualMarketInfoRequestAmino {
  market_id: string;
}
export interface QueryPerpetualMarketInfoRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoRequest";
  value: QueryPerpetualMarketInfoRequestAmino;
}
/**
 * QueryPerpetualMarketInfoResponse is the response type for the
 * Query/PerpetualMarketInfo RPC method.
 */
export interface QueryPerpetualMarketInfoResponse {
  info: PerpetualMarketInfo;
}
export interface QueryPerpetualMarketInfoResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoResponse";
  value: Uint8Array;
}
/**
 * QueryPerpetualMarketInfoResponse is the response type for the
 * Query/PerpetualMarketInfo RPC method.
 */
export interface QueryPerpetualMarketInfoResponseAmino {
  info: PerpetualMarketInfoAmino;
}
export interface QueryPerpetualMarketInfoResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoResponse";
  value: QueryPerpetualMarketInfoResponseAmino;
}
/**
 * QueryExpiryFuturesMarketInfoRequest is the request type for the Query/
 * ExpiryFuturesMarketInfo RPC method.
 */
export interface QueryExpiryFuturesMarketInfoRequest {
  marketId: string;
}
export interface QueryExpiryFuturesMarketInfoRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoRequest";
  value: Uint8Array;
}
/**
 * QueryExpiryFuturesMarketInfoRequest is the request type for the Query/
 * ExpiryFuturesMarketInfo RPC method.
 */
export interface QueryExpiryFuturesMarketInfoRequestAmino {
  market_id: string;
}
export interface QueryExpiryFuturesMarketInfoRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoRequest";
  value: QueryExpiryFuturesMarketInfoRequestAmino;
}
/**
 * QueryExpiryFuturesMarketInfoResponse is the response type for the Query/
 * ExpiryFuturesMarketInfo RPC method.
 */
export interface QueryExpiryFuturesMarketInfoResponse {
  info: ExpiryFuturesMarketInfo;
}
export interface QueryExpiryFuturesMarketInfoResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoResponse";
  value: Uint8Array;
}
/**
 * QueryExpiryFuturesMarketInfoResponse is the response type for the Query/
 * ExpiryFuturesMarketInfo RPC method.
 */
export interface QueryExpiryFuturesMarketInfoResponseAmino {
  info: ExpiryFuturesMarketInfoAmino;
}
export interface QueryExpiryFuturesMarketInfoResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoResponse";
  value: QueryExpiryFuturesMarketInfoResponseAmino;
}
/**
 * QueryPerpetualMarketFundingRequest is the request type for the
 * Query/PerpetualMarketFunding RPC method.
 */
export interface QueryPerpetualMarketFundingRequest {
  marketId: string;
}
export interface QueryPerpetualMarketFundingRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingRequest";
  value: Uint8Array;
}
/**
 * QueryPerpetualMarketFundingRequest is the request type for the
 * Query/PerpetualMarketFunding RPC method.
 */
export interface QueryPerpetualMarketFundingRequestAmino {
  market_id: string;
}
export interface QueryPerpetualMarketFundingRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingRequest";
  value: QueryPerpetualMarketFundingRequestAmino;
}
/**
 * QueryPerpetualMarketFundingResponse is the response type for the
 * Query/PerpetualMarketFunding RPC method.
 */
export interface QueryPerpetualMarketFundingResponse {
  state: PerpetualMarketFunding;
}
export interface QueryPerpetualMarketFundingResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingResponse";
  value: Uint8Array;
}
/**
 * QueryPerpetualMarketFundingResponse is the response type for the
 * Query/PerpetualMarketFunding RPC method.
 */
export interface QueryPerpetualMarketFundingResponseAmino {
  state: PerpetualMarketFundingAmino;
}
export interface QueryPerpetualMarketFundingResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingResponse";
  value: QueryPerpetualMarketFundingResponseAmino;
}
/**
 * QuerySubaccountOrderMetadataResponse is the response type for the
 * Query/SubaccountOrderMetadata RPC method.
 */
export interface QuerySubaccountOrderMetadataResponse {
  metadata: SubaccountOrderbookMetadataWithMarket[];
}
export interface QuerySubaccountOrderMetadataResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataResponse";
  value: Uint8Array;
}
/**
 * QuerySubaccountOrderMetadataResponse is the response type for the
 * Query/SubaccountOrderMetadata RPC method.
 */
export interface QuerySubaccountOrderMetadataResponseAmino {
  metadata: SubaccountOrderbookMetadataWithMarketAmino[];
}
export interface QuerySubaccountOrderMetadataResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataResponse";
  value: QuerySubaccountOrderMetadataResponseAmino;
}
/**
 * QuerySubaccountTradeNonceResponse is the response type for the
 * Query/SubaccountTradeNonce RPC method.
 */
export interface QuerySubaccountTradeNonceResponse {
  nonce: number;
}
export interface QuerySubaccountTradeNonceResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceResponse";
  value: Uint8Array;
}
/**
 * QuerySubaccountTradeNonceResponse is the response type for the
 * Query/SubaccountTradeNonce RPC method.
 */
export interface QuerySubaccountTradeNonceResponseAmino {
  nonce: number;
}
export interface QuerySubaccountTradeNonceResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceResponse";
  value: QuerySubaccountTradeNonceResponseAmino;
}
/**
 * QueryModuleStateRequest is the request type for the Query/ExchangeModuleState
 * RPC method.
 */
export interface QueryModuleStateRequest {}
export interface QueryModuleStateRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryModuleStateRequest";
  value: Uint8Array;
}
/**
 * QueryModuleStateRequest is the request type for the Query/ExchangeModuleState
 * RPC method.
 */
export interface QueryModuleStateRequestAmino {}
export interface QueryModuleStateRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryModuleStateRequest";
  value: QueryModuleStateRequestAmino;
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/ExchangeModuleState RPC method.
 */
export interface QueryModuleStateResponse {
  state?: GenesisState;
}
export interface QueryModuleStateResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryModuleStateResponse";
  value: Uint8Array;
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/ExchangeModuleState RPC method.
 */
export interface QueryModuleStateResponseAmino {
  state?: GenesisStateAmino;
}
export interface QueryModuleStateResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryModuleStateResponse";
  value: QueryModuleStateResponseAmino;
}
/** QueryPositionsRequest is the request type for the Query/Positions RPC method. */
export interface QueryPositionsRequest {}
export interface QueryPositionsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryPositionsRequest";
  value: Uint8Array;
}
/** QueryPositionsRequest is the request type for the Query/Positions RPC method. */
export interface QueryPositionsRequestAmino {}
export interface QueryPositionsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryPositionsRequest";
  value: QueryPositionsRequestAmino;
}
/**
 * QueryPositionsResponse is the response type for the Query/Positions RPC
 * method.
 */
export interface QueryPositionsResponse {
  state: DerivativePosition[];
}
export interface QueryPositionsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryPositionsResponse";
  value: Uint8Array;
}
/**
 * QueryPositionsResponse is the response type for the Query/Positions RPC
 * method.
 */
export interface QueryPositionsResponseAmino {
  state: DerivativePositionAmino[];
}
export interface QueryPositionsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryPositionsResponse";
  value: QueryPositionsResponseAmino;
}
/**
 * QueryTradeRewardPointsRequest is the request type for the
 * Query/TradeRewardPoints RPC method.
 */
export interface QueryTradeRewardPointsRequest {
  accounts: string[];
  pendingPoolTimestamp: bigint;
}
export interface QueryTradeRewardPointsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsRequest";
  value: Uint8Array;
}
/**
 * QueryTradeRewardPointsRequest is the request type for the
 * Query/TradeRewardPoints RPC method.
 */
export interface QueryTradeRewardPointsRequestAmino {
  accounts: string[];
  pending_pool_timestamp: string;
}
export interface QueryTradeRewardPointsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTradeRewardPointsRequest";
  value: QueryTradeRewardPointsRequestAmino;
}
/**
 * QueryTradeRewardPointsResponse is the response type for the
 * Query/TradeRewardPoints RPC method.
 */
export interface QueryTradeRewardPointsResponse {
  accountTradeRewardPoints: string[];
}
export interface QueryTradeRewardPointsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsResponse";
  value: Uint8Array;
}
/**
 * QueryTradeRewardPointsResponse is the response type for the
 * Query/TradeRewardPoints RPC method.
 */
export interface QueryTradeRewardPointsResponseAmino {
  account_trade_reward_points: string[];
}
export interface QueryTradeRewardPointsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTradeRewardPointsResponse";
  value: QueryTradeRewardPointsResponseAmino;
}
/**
 * QueryTradeRewardCampaignRequest is the request type for the
 * Query/TradeRewardCampaign RPC method.
 */
export interface QueryTradeRewardCampaignRequest {}
export interface QueryTradeRewardCampaignRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignRequest";
  value: Uint8Array;
}
/**
 * QueryTradeRewardCampaignRequest is the request type for the
 * Query/TradeRewardCampaign RPC method.
 */
export interface QueryTradeRewardCampaignRequestAmino {}
export interface QueryTradeRewardCampaignRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTradeRewardCampaignRequest";
  value: QueryTradeRewardCampaignRequestAmino;
}
/**
 * QueryTradeRewardCampaignResponse is the response type for the
 * Query/TradeRewardCampaign RPC method.
 */
export interface QueryTradeRewardCampaignResponse {
  tradingRewardCampaignInfo?: TradingRewardCampaignInfo;
  tradingRewardPoolCampaignSchedule: CampaignRewardPool[];
  totalTradeRewardPoints: string;
  pendingTradingRewardPoolCampaignSchedule: CampaignRewardPool[];
  pendingTotalTradeRewardPoints: string[];
}
export interface QueryTradeRewardCampaignResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignResponse";
  value: Uint8Array;
}
/**
 * QueryTradeRewardCampaignResponse is the response type for the
 * Query/TradeRewardCampaign RPC method.
 */
export interface QueryTradeRewardCampaignResponseAmino {
  trading_reward_campaign_info?: TradingRewardCampaignInfoAmino;
  trading_reward_pool_campaign_schedule: CampaignRewardPoolAmino[];
  total_trade_reward_points: string;
  pending_trading_reward_pool_campaign_schedule: CampaignRewardPoolAmino[];
  pending_total_trade_reward_points: string[];
}
export interface QueryTradeRewardCampaignResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTradeRewardCampaignResponse";
  value: QueryTradeRewardCampaignResponseAmino;
}
/**
 * QueryIsRegisteredDMMRequest is the request type for the Query/IsRegisteredDMM
 * RPC method.
 */
export interface QueryIsOptedOutOfRewardsRequest {
  account: string;
}
export interface QueryIsOptedOutOfRewardsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsRequest";
  value: Uint8Array;
}
/**
 * QueryIsRegisteredDMMRequest is the request type for the Query/IsRegisteredDMM
 * RPC method.
 */
export interface QueryIsOptedOutOfRewardsRequestAmino {
  account: string;
}
export interface QueryIsOptedOutOfRewardsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsRequest";
  value: QueryIsOptedOutOfRewardsRequestAmino;
}
/**
 * QueryIsRegisteredDMMResponse is the response type for the
 * Query/IsRegisteredDMM RPC method.
 */
export interface QueryIsOptedOutOfRewardsResponse {
  isOptedOut: boolean;
}
export interface QueryIsOptedOutOfRewardsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsResponse";
  value: Uint8Array;
}
/**
 * QueryIsRegisteredDMMResponse is the response type for the
 * Query/IsRegisteredDMM RPC method.
 */
export interface QueryIsOptedOutOfRewardsResponseAmino {
  is_opted_out: boolean;
}
export interface QueryIsOptedOutOfRewardsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsResponse";
  value: QueryIsOptedOutOfRewardsResponseAmino;
}
/**
 * QueryRegisteredDMMsRequest is the request type for the Query/RegisteredDMMs
 * RPC method.
 */
export interface QueryOptedOutOfRewardsAccountsRequest {}
export interface QueryOptedOutOfRewardsAccountsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsRequest";
  value: Uint8Array;
}
/**
 * QueryRegisteredDMMsRequest is the request type for the Query/RegisteredDMMs
 * RPC method.
 */
export interface QueryOptedOutOfRewardsAccountsRequestAmino {}
export interface QueryOptedOutOfRewardsAccountsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsRequest";
  value: QueryOptedOutOfRewardsAccountsRequestAmino;
}
/**
 * QueryRegisteredDMMsResponse is the response type for the Query/RegisteredDMMs
 * RPC method.
 */
export interface QueryOptedOutOfRewardsAccountsResponse {
  accounts: string[];
}
export interface QueryOptedOutOfRewardsAccountsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsResponse";
  value: Uint8Array;
}
/**
 * QueryRegisteredDMMsResponse is the response type for the Query/RegisteredDMMs
 * RPC method.
 */
export interface QueryOptedOutOfRewardsAccountsResponseAmino {
  accounts: string[];
}
export interface QueryOptedOutOfRewardsAccountsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsResponse";
  value: QueryOptedOutOfRewardsAccountsResponseAmino;
}
/**
 * QueryFeeDiscountAccountInfoRequest is the request type for the
 * Query/FeeDiscountAccountInfo RPC method.
 */
export interface QueryFeeDiscountAccountInfoRequest {
  account: string;
}
export interface QueryFeeDiscountAccountInfoRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoRequest";
  value: Uint8Array;
}
/**
 * QueryFeeDiscountAccountInfoRequest is the request type for the
 * Query/FeeDiscountAccountInfo RPC method.
 */
export interface QueryFeeDiscountAccountInfoRequestAmino {
  account: string;
}
export interface QueryFeeDiscountAccountInfoRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoRequest";
  value: QueryFeeDiscountAccountInfoRequestAmino;
}
/**
 * QueryFeeDiscountAccountInfoResponse is the response type for the
 * Query/FeeDiscountAccountInfo RPC method.
 */
export interface QueryFeeDiscountAccountInfoResponse {
  tierLevel: bigint;
  accountInfo?: FeeDiscountTierInfo;
  accountTtl?: FeeDiscountTierTTL;
}
export interface QueryFeeDiscountAccountInfoResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoResponse";
  value: Uint8Array;
}
/**
 * QueryFeeDiscountAccountInfoResponse is the response type for the
 * Query/FeeDiscountAccountInfo RPC method.
 */
export interface QueryFeeDiscountAccountInfoResponseAmino {
  tier_level: string;
  account_info?: FeeDiscountTierInfoAmino;
  account_ttl?: FeeDiscountTierTTLAmino;
}
export interface QueryFeeDiscountAccountInfoResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoResponse";
  value: QueryFeeDiscountAccountInfoResponseAmino;
}
/**
 * QueryFeeDiscountScheduleRequest is the request type for the
 * Query/FeeDiscountSchedule RPC method.
 */
export interface QueryFeeDiscountScheduleRequest {}
export interface QueryFeeDiscountScheduleRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleRequest";
  value: Uint8Array;
}
/**
 * QueryFeeDiscountScheduleRequest is the request type for the
 * Query/FeeDiscountSchedule RPC method.
 */
export interface QueryFeeDiscountScheduleRequestAmino {}
export interface QueryFeeDiscountScheduleRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleRequest";
  value: QueryFeeDiscountScheduleRequestAmino;
}
/**
 * QueryFeeDiscountScheduleResponse is the response type for the
 * Query/FeeDiscountSchedule RPC method.
 */
export interface QueryFeeDiscountScheduleResponse {
  feeDiscountSchedule?: FeeDiscountSchedule;
}
export interface QueryFeeDiscountScheduleResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleResponse";
  value: Uint8Array;
}
/**
 * QueryFeeDiscountScheduleResponse is the response type for the
 * Query/FeeDiscountSchedule RPC method.
 */
export interface QueryFeeDiscountScheduleResponseAmino {
  fee_discount_schedule?: FeeDiscountScheduleAmino;
}
export interface QueryFeeDiscountScheduleResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleResponse";
  value: QueryFeeDiscountScheduleResponseAmino;
}
/**
 * QueryBalanceMismatchesRequest is the request type for the
 * Query/QueryBalanceMismatches RPC method.
 */
export interface QueryBalanceMismatchesRequest {
  dustFactor: bigint;
}
export interface QueryBalanceMismatchesRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesRequest";
  value: Uint8Array;
}
/**
 * QueryBalanceMismatchesRequest is the request type for the
 * Query/QueryBalanceMismatches RPC method.
 */
export interface QueryBalanceMismatchesRequestAmino {
  dust_factor: string;
}
export interface QueryBalanceMismatchesRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryBalanceMismatchesRequest";
  value: QueryBalanceMismatchesRequestAmino;
}
export interface BalanceMismatch {
  subaccountId: string;
  denom: string;
  available: string;
  total: string;
  balanceHold: string;
  expectedTotal: string;
  difference: string;
}
export interface BalanceMismatchProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.BalanceMismatch";
  value: Uint8Array;
}
export interface BalanceMismatchAmino {
  subaccountId: string;
  denom: string;
  available: string;
  total: string;
  balance_hold: string;
  expected_total: string;
  difference: string;
}
export interface BalanceMismatchAminoMsg {
  type: "/injective.exchange.v1beta1.BalanceMismatch";
  value: BalanceMismatchAmino;
}
/**
 * QueryBalanceMismatchesResponse is the response type for the
 * Query/QueryBalanceMismatches RPC method.
 */
export interface QueryBalanceMismatchesResponse {
  balanceMismatches: BalanceMismatch[];
}
export interface QueryBalanceMismatchesResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesResponse";
  value: Uint8Array;
}
/**
 * QueryBalanceMismatchesResponse is the response type for the
 * Query/QueryBalanceMismatches RPC method.
 */
export interface QueryBalanceMismatchesResponseAmino {
  balance_mismatches: BalanceMismatchAmino[];
}
export interface QueryBalanceMismatchesResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryBalanceMismatchesResponse";
  value: QueryBalanceMismatchesResponseAmino;
}
/**
 * QueryBalanceWithBalanceHoldsRequest is the request type for the
 * Query/QueryBalanceWithBalanceHolds RPC method.
 */
export interface QueryBalanceWithBalanceHoldsRequest {}
export interface QueryBalanceWithBalanceHoldsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsRequest";
  value: Uint8Array;
}
/**
 * QueryBalanceWithBalanceHoldsRequest is the request type for the
 * Query/QueryBalanceWithBalanceHolds RPC method.
 */
export interface QueryBalanceWithBalanceHoldsRequestAmino {}
export interface QueryBalanceWithBalanceHoldsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsRequest";
  value: QueryBalanceWithBalanceHoldsRequestAmino;
}
export interface BalanceWithMarginHold {
  subaccountId: string;
  denom: string;
  available: string;
  total: string;
  balanceHold: string;
}
export interface BalanceWithMarginHoldProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.BalanceWithMarginHold";
  value: Uint8Array;
}
export interface BalanceWithMarginHoldAmino {
  subaccountId: string;
  denom: string;
  available: string;
  total: string;
  balance_hold: string;
}
export interface BalanceWithMarginHoldAminoMsg {
  type: "/injective.exchange.v1beta1.BalanceWithMarginHold";
  value: BalanceWithMarginHoldAmino;
}
/**
 * QueryBalanceWithBalanceHoldsResponse is the response type for the
 * Query/QueryBalanceWithBalanceHolds RPC method.
 */
export interface QueryBalanceWithBalanceHoldsResponse {
  balanceWithBalanceHolds: BalanceWithMarginHold[];
}
export interface QueryBalanceWithBalanceHoldsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsResponse";
  value: Uint8Array;
}
/**
 * QueryBalanceWithBalanceHoldsResponse is the response type for the
 * Query/QueryBalanceWithBalanceHolds RPC method.
 */
export interface QueryBalanceWithBalanceHoldsResponseAmino {
  balance_with_balance_holds: BalanceWithMarginHoldAmino[];
}
export interface QueryBalanceWithBalanceHoldsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsResponse";
  value: QueryBalanceWithBalanceHoldsResponseAmino;
}
/**
 * QueryFeeDiscountTierStatisticsRequest is the request type for the
 * Query/QueryFeeDiscountTierStatistics RPC method.
 */
export interface QueryFeeDiscountTierStatisticsRequest {}
export interface QueryFeeDiscountTierStatisticsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsRequest";
  value: Uint8Array;
}
/**
 * QueryFeeDiscountTierStatisticsRequest is the request type for the
 * Query/QueryFeeDiscountTierStatistics RPC method.
 */
export interface QueryFeeDiscountTierStatisticsRequestAmino {}
export interface QueryFeeDiscountTierStatisticsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsRequest";
  value: QueryFeeDiscountTierStatisticsRequestAmino;
}
export interface TierStatistic {
  tier: bigint;
  count: bigint;
}
export interface TierStatisticProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TierStatistic";
  value: Uint8Array;
}
export interface TierStatisticAmino {
  tier: string;
  count: string;
}
export interface TierStatisticAminoMsg {
  type: "/injective.exchange.v1beta1.TierStatistic";
  value: TierStatisticAmino;
}
/**
 * QueryFeeDiscountTierStatisticsResponse is the response type for the
 * Query/QueryFeeDiscountTierStatistics RPC method.
 */
export interface QueryFeeDiscountTierStatisticsResponse {
  statistics: TierStatistic[];
}
export interface QueryFeeDiscountTierStatisticsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsResponse";
  value: Uint8Array;
}
/**
 * QueryFeeDiscountTierStatisticsResponse is the response type for the
 * Query/QueryFeeDiscountTierStatistics RPC method.
 */
export interface QueryFeeDiscountTierStatisticsResponseAmino {
  statistics: TierStatisticAmino[];
}
export interface QueryFeeDiscountTierStatisticsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsResponse";
  value: QueryFeeDiscountTierStatisticsResponseAmino;
}
/**
 * MitoVaultInfosRequest is the request type for the Query/MitoVaultInfos RPC
 * method.
 */
export interface MitoVaultInfosRequest {}
export interface MitoVaultInfosRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MitoVaultInfosRequest";
  value: Uint8Array;
}
/**
 * MitoVaultInfosRequest is the request type for the Query/MitoVaultInfos RPC
 * method.
 */
export interface MitoVaultInfosRequestAmino {}
export interface MitoVaultInfosRequestAminoMsg {
  type: "/injective.exchange.v1beta1.MitoVaultInfosRequest";
  value: MitoVaultInfosRequestAmino;
}
/**
 * MitoVaultInfosResponse is the response type for the Query/MitoVaultInfos RPC
 * method.
 */
export interface MitoVaultInfosResponse {
  masterAddresses: string[];
  derivativeAddresses: string[];
  spotAddresses: string[];
  cw20Addresses: string[];
}
export interface MitoVaultInfosResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MitoVaultInfosResponse";
  value: Uint8Array;
}
/**
 * MitoVaultInfosResponse is the response type for the Query/MitoVaultInfos RPC
 * method.
 */
export interface MitoVaultInfosResponseAmino {
  master_addresses: string[];
  derivative_addresses: string[];
  spot_addresses: string[];
  cw20_addresses: string[];
}
export interface MitoVaultInfosResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MitoVaultInfosResponse";
  value: MitoVaultInfosResponseAmino;
}
/**
 * QueryMarketIDFromVaultRequest is the request type for the
 * Query/QueryMarketIDFromVault RPC method.
 */
export interface QueryMarketIDFromVaultRequest {
  vaultAddress: string;
}
export interface QueryMarketIDFromVaultRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultRequest";
  value: Uint8Array;
}
/**
 * QueryMarketIDFromVaultRequest is the request type for the
 * Query/QueryMarketIDFromVault RPC method.
 */
export interface QueryMarketIDFromVaultRequestAmino {
  vault_address: string;
}
export interface QueryMarketIDFromVaultRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryMarketIDFromVaultRequest";
  value: QueryMarketIDFromVaultRequestAmino;
}
/**
 * QueryMarketIDFromVaultResponse is the response type for the
 * Query/QueryMarketIDFromVault RPC method.
 */
export interface QueryMarketIDFromVaultResponse {
  marketId: string;
}
export interface QueryMarketIDFromVaultResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultResponse";
  value: Uint8Array;
}
/**
 * QueryMarketIDFromVaultResponse is the response type for the
 * Query/QueryMarketIDFromVault RPC method.
 */
export interface QueryMarketIDFromVaultResponseAmino {
  market_id: string;
}
export interface QueryMarketIDFromVaultResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryMarketIDFromVaultResponse";
  value: QueryMarketIDFromVaultResponseAmino;
}
export interface QueryHistoricalTradeRecordsRequest {
  marketId: string;
}
export interface QueryHistoricalTradeRecordsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsRequest";
  value: Uint8Array;
}
export interface QueryHistoricalTradeRecordsRequestAmino {
  market_id: string;
}
export interface QueryHistoricalTradeRecordsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsRequest";
  value: QueryHistoricalTradeRecordsRequestAmino;
}
export interface QueryHistoricalTradeRecordsResponse {
  tradeRecords: TradeRecords[];
}
export interface QueryHistoricalTradeRecordsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsResponse";
  value: Uint8Array;
}
export interface QueryHistoricalTradeRecordsResponseAmino {
  trade_records: TradeRecordsAmino[];
}
export interface QueryHistoricalTradeRecordsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsResponse";
  value: QueryHistoricalTradeRecordsResponseAmino;
}
/**
 * TradeHistoryOptions are the optional params for Query/MarketVolatility RPC
 * method.
 */
export interface TradeHistoryOptions {
  /** TradeGroupingSec of 0 means use the chain's default grouping */
  tradeGroupingSec: bigint;
  /**
   * MaxAge restricts the trade records oldest age in seconds from the current
   * block time to consider. A value of 0 means use all the records present on
   * the chain.
   */
  maxAge: bigint;
  /**
   * If IncludeRawHistory is true, the raw underlying data used for the
   * computation is included in the response
   */
  includeRawHistory: boolean;
  /**
   * If IncludeMetadata is true, metadata on the computation is included in the
   * response
   */
  includeMetadata: boolean;
}
export interface TradeHistoryOptionsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TradeHistoryOptions";
  value: Uint8Array;
}
/**
 * TradeHistoryOptions are the optional params for Query/MarketVolatility RPC
 * method.
 */
export interface TradeHistoryOptionsAmino {
  /** TradeGroupingSec of 0 means use the chain's default grouping */
  trade_grouping_sec: string;
  /**
   * MaxAge restricts the trade records oldest age in seconds from the current
   * block time to consider. A value of 0 means use all the records present on
   * the chain.
   */
  max_age: string;
  /**
   * If IncludeRawHistory is true, the raw underlying data used for the
   * computation is included in the response
   */
  include_raw_history: boolean;
  /**
   * If IncludeMetadata is true, metadata on the computation is included in the
   * response
   */
  include_metadata: boolean;
}
export interface TradeHistoryOptionsAminoMsg {
  type: "/injective.exchange.v1beta1.TradeHistoryOptions";
  value: TradeHistoryOptionsAmino;
}
/**
 * QueryMarketVolatilityRequest are the request params for the
 * Query/MarketVolatility RPC method.
 */
export interface QueryMarketVolatilityRequest {
  marketId: string;
  tradeHistoryOptions?: TradeHistoryOptions;
}
export interface QueryMarketVolatilityRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityRequest";
  value: Uint8Array;
}
/**
 * QueryMarketVolatilityRequest are the request params for the
 * Query/MarketVolatility RPC method.
 */
export interface QueryMarketVolatilityRequestAmino {
  market_id: string;
  trade_history_options?: TradeHistoryOptionsAmino;
}
export interface QueryMarketVolatilityRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryMarketVolatilityRequest";
  value: QueryMarketVolatilityRequestAmino;
}
/**
 * QueryMarketVolatilityResponse is the response type for the
 * Query/MarketVolatility RPC method.
 */
export interface QueryMarketVolatilityResponse {
  volatility: string;
  historyMetadata?: MetadataStatistics;
  rawHistory: TradeRecord[];
}
export interface QueryMarketVolatilityResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityResponse";
  value: Uint8Array;
}
/**
 * QueryMarketVolatilityResponse is the response type for the
 * Query/MarketVolatility RPC method.
 */
export interface QueryMarketVolatilityResponseAmino {
  volatility: string;
  history_metadata?: MetadataStatisticsAmino;
  raw_history: TradeRecordAmino[];
}
export interface QueryMarketVolatilityResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryMarketVolatilityResponse";
  value: QueryMarketVolatilityResponseAmino;
}
/**
 * QuerBinaryMarketsRequest is the request type for the Query/BinaryMarkets RPC
 * method.
 */
export interface QueryBinaryMarketsRequest {
  /** Status of the market, for convenience it is set to string - not enum */
  status: string;
}
export interface QueryBinaryMarketsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsRequest";
  value: Uint8Array;
}
/**
 * QuerBinaryMarketsRequest is the request type for the Query/BinaryMarkets RPC
 * method.
 */
export interface QueryBinaryMarketsRequestAmino {
  /** Status of the market, for convenience it is set to string - not enum */
  status: string;
}
export interface QueryBinaryMarketsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryBinaryMarketsRequest";
  value: QueryBinaryMarketsRequestAmino;
}
/**
 * QueryBinaryMarketsResponse is the response type for the Query/BinaryMarkets
 * RPC method.
 */
export interface QueryBinaryMarketsResponse {
  markets: BinaryOptionsMarket[];
}
export interface QueryBinaryMarketsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsResponse";
  value: Uint8Array;
}
/**
 * QueryBinaryMarketsResponse is the response type for the Query/BinaryMarkets
 * RPC method.
 */
export interface QueryBinaryMarketsResponseAmino {
  markets: BinaryOptionsMarketAmino[];
}
export interface QueryBinaryMarketsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryBinaryMarketsResponse";
  value: QueryBinaryMarketsResponseAmino;
}
/**
 * QueryConditionalOrdersRequest is the request type for the
 * Query/ConditionalOrders RPC method.
 */
export interface QueryTraderDerivativeConditionalOrdersRequest {
  subaccountId: string;
  marketId: string;
}
export interface QueryTraderDerivativeConditionalOrdersRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersRequest";
  value: Uint8Array;
}
/**
 * QueryConditionalOrdersRequest is the request type for the
 * Query/ConditionalOrders RPC method.
 */
export interface QueryTraderDerivativeConditionalOrdersRequestAmino {
  subaccount_id: string;
  market_id: string;
}
export interface QueryTraderDerivativeConditionalOrdersRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersRequest";
  value: QueryTraderDerivativeConditionalOrdersRequestAmino;
}
export interface TrimmedDerivativeConditionalOrder {
  /** price of the order */
  price: string;
  /** quantity of the order */
  quantity: string;
  /** margin of the order */
  margin: string;
  /** price to trigger the order */
  triggerPrice: string;
  /** true if the order is a buy */
  isBuy: boolean;
  isLimit: boolean;
  orderHash: string;
  cid: string;
}
export interface TrimmedDerivativeConditionalOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeConditionalOrder";
  value: Uint8Array;
}
export interface TrimmedDerivativeConditionalOrderAmino {
  /** price of the order */
  price: string;
  /** quantity of the order */
  quantity: string;
  /** margin of the order */
  margin: string;
  /** price to trigger the order */
  triggerPrice: string;
  /** true if the order is a buy */
  isBuy: boolean;
  isLimit: boolean;
  order_hash: string;
  cid: string;
}
export interface TrimmedDerivativeConditionalOrderAminoMsg {
  type: "/injective.exchange.v1beta1.TrimmedDerivativeConditionalOrder";
  value: TrimmedDerivativeConditionalOrderAmino;
}
/**
 * QueryTraderDerivativeOrdersResponse is the response type for the
 * Query/TraderDerivativeOrders RPC method.
 */
export interface QueryTraderDerivativeConditionalOrdersResponse {
  orders: TrimmedDerivativeConditionalOrder[];
}
export interface QueryTraderDerivativeConditionalOrdersResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersResponse";
  value: Uint8Array;
}
/**
 * QueryTraderDerivativeOrdersResponse is the response type for the
 * Query/TraderDerivativeOrders RPC method.
 */
export interface QueryTraderDerivativeConditionalOrdersResponseAmino {
  orders: TrimmedDerivativeConditionalOrderAmino[];
}
export interface QueryTraderDerivativeConditionalOrdersResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersResponse";
  value: QueryTraderDerivativeConditionalOrdersResponseAmino;
}
export interface QueryMarketAtomicExecutionFeeMultiplierRequest {
  marketId: string;
}
export interface QueryMarketAtomicExecutionFeeMultiplierRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketAtomicExecutionFeeMultiplierRequest";
  value: Uint8Array;
}
export interface QueryMarketAtomicExecutionFeeMultiplierRequestAmino {
  market_id: string;
}
export interface QueryMarketAtomicExecutionFeeMultiplierRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryMarketAtomicExecutionFeeMultiplierRequest";
  value: QueryMarketAtomicExecutionFeeMultiplierRequestAmino;
}
export interface QueryMarketAtomicExecutionFeeMultiplierResponse {
  multiplier: string;
}
export interface QueryMarketAtomicExecutionFeeMultiplierResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketAtomicExecutionFeeMultiplierResponse";
  value: Uint8Array;
}
export interface QueryMarketAtomicExecutionFeeMultiplierResponseAmino {
  multiplier: string;
}
export interface QueryMarketAtomicExecutionFeeMultiplierResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryMarketAtomicExecutionFeeMultiplierResponse";
  value: QueryMarketAtomicExecutionFeeMultiplierResponseAmino;
}
export interface QueryActiveStakeGrantRequest {
  grantee: string;
}
export interface QueryActiveStakeGrantRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryActiveStakeGrantRequest";
  value: Uint8Array;
}
export interface QueryActiveStakeGrantRequestAmino {
  grantee: string;
}
export interface QueryActiveStakeGrantRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryActiveStakeGrantRequest";
  value: QueryActiveStakeGrantRequestAmino;
}
export interface QueryActiveStakeGrantResponse {
  grant?: ActiveGrant;
  effectiveGrant?: EffectiveGrant;
}
export interface QueryActiveStakeGrantResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryActiveStakeGrantResponse";
  value: Uint8Array;
}
export interface QueryActiveStakeGrantResponseAmino {
  grant?: ActiveGrantAmino;
  effective_grant?: EffectiveGrantAmino;
}
export interface QueryActiveStakeGrantResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryActiveStakeGrantResponse";
  value: QueryActiveStakeGrantResponseAmino;
}
export interface QueryGrantAuthorizationRequest {
  granter: string;
  grantee: string;
}
export interface QueryGrantAuthorizationRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryGrantAuthorizationRequest";
  value: Uint8Array;
}
export interface QueryGrantAuthorizationRequestAmino {
  granter: string;
  grantee: string;
}
export interface QueryGrantAuthorizationRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryGrantAuthorizationRequest";
  value: QueryGrantAuthorizationRequestAmino;
}
export interface QueryGrantAuthorizationResponse {
  amount: string;
}
export interface QueryGrantAuthorizationResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryGrantAuthorizationResponse";
  value: Uint8Array;
}
export interface QueryGrantAuthorizationResponseAmino {
  amount: string;
}
export interface QueryGrantAuthorizationResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryGrantAuthorizationResponse";
  value: QueryGrantAuthorizationResponseAmino;
}
export interface QueryGrantAuthorizationsRequest {
  granter: string;
}
export interface QueryGrantAuthorizationsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryGrantAuthorizationsRequest";
  value: Uint8Array;
}
export interface QueryGrantAuthorizationsRequestAmino {
  granter: string;
}
export interface QueryGrantAuthorizationsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryGrantAuthorizationsRequest";
  value: QueryGrantAuthorizationsRequestAmino;
}
export interface QueryGrantAuthorizationsResponse {
  totalGrantAmount: string;
  grants: GrantAuthorization[];
}
export interface QueryGrantAuthorizationsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryGrantAuthorizationsResponse";
  value: Uint8Array;
}
export interface QueryGrantAuthorizationsResponseAmino {
  total_grant_amount: string;
  grants: GrantAuthorizationAmino[];
}
export interface QueryGrantAuthorizationsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryGrantAuthorizationsResponse";
  value: QueryGrantAuthorizationsResponseAmino;
}
function createBaseSubaccount(): Subaccount {
  return {
    trader: "",
    subaccountNonce: 0
  };
}
export const Subaccount = {
  typeUrl: "/injective.exchange.v1beta1.Subaccount",
  is(o: any): o is Subaccount {
    return o && (o.$typeUrl === Subaccount.typeUrl || typeof o.trader === "string" && typeof o.subaccountNonce === "number");
  },
  isAmino(o: any): o is SubaccountAmino {
    return o && (o.$typeUrl === Subaccount.typeUrl || typeof o.trader === "string" && typeof o.subaccount_nonce === "number");
  },
  encode(message: Subaccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.trader !== "") {
      writer.uint32(10).string(message.trader);
    }
    if (message.subaccountNonce !== 0) {
      writer.uint32(16).uint32(message.subaccountNonce);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Subaccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trader = reader.string();
          break;
        case 2:
          message.subaccountNonce = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Subaccount>): Subaccount {
    const message = createBaseSubaccount();
    message.trader = object.trader ?? "";
    message.subaccountNonce = object.subaccountNonce ?? 0;
    return message;
  },
  fromAmino(object: SubaccountAmino): Subaccount {
    const message = createBaseSubaccount();
    if (object.trader !== undefined && object.trader !== null) {
      message.trader = object.trader;
    }
    if (object.subaccount_nonce !== undefined && object.subaccount_nonce !== null) {
      message.subaccountNonce = object.subaccount_nonce;
    }
    return message;
  },
  toAmino(message: Subaccount): SubaccountAmino {
    const obj: any = {};
    obj.trader = message.trader === "" ? undefined : message.trader;
    obj.subaccount_nonce = message.subaccountNonce === 0 ? undefined : message.subaccountNonce;
    return obj;
  },
  fromAminoMsg(object: SubaccountAminoMsg): Subaccount {
    return Subaccount.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountProtoMsg): Subaccount {
    return Subaccount.decode(message.value);
  },
  toProto(message: Subaccount): Uint8Array {
    return Subaccount.encode(message).finish();
  },
  toProtoMsg(message: Subaccount): SubaccountProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.Subaccount",
      value: Subaccount.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySubaccountOrdersRequest(): QuerySubaccountOrdersRequest {
  return {
    subaccountId: "",
    marketId: ""
  };
}
export const QuerySubaccountOrdersRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersRequest",
  is(o: any): o is QuerySubaccountOrdersRequest {
    return o && (o.$typeUrl === QuerySubaccountOrdersRequest.typeUrl || typeof o.subaccountId === "string" && typeof o.marketId === "string");
  },
  isAmino(o: any): o is QuerySubaccountOrdersRequestAmino {
    return o && (o.$typeUrl === QuerySubaccountOrdersRequest.typeUrl || typeof o.subaccount_id === "string" && typeof o.market_id === "string");
  },
  encode(message: QuerySubaccountOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySubaccountOrdersRequest>): QuerySubaccountOrdersRequest {
    const message = createBaseQuerySubaccountOrdersRequest();
    message.subaccountId = object.subaccountId ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromAmino(object: QuerySubaccountOrdersRequestAmino): QuerySubaccountOrdersRequest {
    const message = createBaseQuerySubaccountOrdersRequest();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QuerySubaccountOrdersRequest): QuerySubaccountOrdersRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountOrdersRequestAminoMsg): QuerySubaccountOrdersRequest {
    return QuerySubaccountOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountOrdersRequestProtoMsg): QuerySubaccountOrdersRequest {
    return QuerySubaccountOrdersRequest.decode(message.value);
  },
  toProto(message: QuerySubaccountOrdersRequest): Uint8Array {
    return QuerySubaccountOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountOrdersRequest): QuerySubaccountOrdersRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersRequest",
      value: QuerySubaccountOrdersRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySubaccountOrdersResponse(): QuerySubaccountOrdersResponse {
  return {
    buyOrders: [],
    sellOrders: []
  };
}
export const QuerySubaccountOrdersResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersResponse",
  is(o: any): o is QuerySubaccountOrdersResponse {
    return o && (o.$typeUrl === QuerySubaccountOrdersResponse.typeUrl || Array.isArray(o.buyOrders) && (!o.buyOrders.length || SubaccountOrderData.is(o.buyOrders[0])) && Array.isArray(o.sellOrders) && (!o.sellOrders.length || SubaccountOrderData.is(o.sellOrders[0])));
  },
  isAmino(o: any): o is QuerySubaccountOrdersResponseAmino {
    return o && (o.$typeUrl === QuerySubaccountOrdersResponse.typeUrl || Array.isArray(o.buy_orders) && (!o.buy_orders.length || SubaccountOrderData.isAmino(o.buy_orders[0])) && Array.isArray(o.sell_orders) && (!o.sell_orders.length || SubaccountOrderData.isAmino(o.sell_orders[0])));
  },
  encode(message: QuerySubaccountOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.buyOrders) {
      SubaccountOrderData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.sellOrders) {
      SubaccountOrderData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyOrders.push(SubaccountOrderData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.sellOrders.push(SubaccountOrderData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySubaccountOrdersResponse>): QuerySubaccountOrdersResponse {
    const message = createBaseQuerySubaccountOrdersResponse();
    message.buyOrders = object.buyOrders?.map(e => SubaccountOrderData.fromPartial(e)) || [];
    message.sellOrders = object.sellOrders?.map(e => SubaccountOrderData.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySubaccountOrdersResponseAmino): QuerySubaccountOrdersResponse {
    const message = createBaseQuerySubaccountOrdersResponse();
    message.buyOrders = object.buy_orders?.map(e => SubaccountOrderData.fromAmino(e)) || [];
    message.sellOrders = object.sell_orders?.map(e => SubaccountOrderData.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySubaccountOrdersResponse): QuerySubaccountOrdersResponseAmino {
    const obj: any = {};
    if (message.buyOrders) {
      obj.buy_orders = message.buyOrders.map(e => e ? SubaccountOrderData.toAmino(e) : undefined);
    } else {
      obj.buy_orders = message.buyOrders;
    }
    if (message.sellOrders) {
      obj.sell_orders = message.sellOrders.map(e => e ? SubaccountOrderData.toAmino(e) : undefined);
    } else {
      obj.sell_orders = message.sellOrders;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountOrdersResponseAminoMsg): QuerySubaccountOrdersResponse {
    return QuerySubaccountOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountOrdersResponseProtoMsg): QuerySubaccountOrdersResponse {
    return QuerySubaccountOrdersResponse.decode(message.value);
  },
  toProto(message: QuerySubaccountOrdersResponse): Uint8Array {
    return QuerySubaccountOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountOrdersResponse): QuerySubaccountOrdersResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersResponse",
      value: QuerySubaccountOrdersResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    SubaccountOrderData.registerTypeUrl();
  }
};
function createBaseSubaccountOrderbookMetadataWithMarket(): SubaccountOrderbookMetadataWithMarket {
  return {
    metadata: undefined,
    marketId: "",
    isBuy: false
  };
}
export const SubaccountOrderbookMetadataWithMarket = {
  typeUrl: "/injective.exchange.v1beta1.SubaccountOrderbookMetadataWithMarket",
  is(o: any): o is SubaccountOrderbookMetadataWithMarket {
    return o && (o.$typeUrl === SubaccountOrderbookMetadataWithMarket.typeUrl || typeof o.marketId === "string" && typeof o.isBuy === "boolean");
  },
  isAmino(o: any): o is SubaccountOrderbookMetadataWithMarketAmino {
    return o && (o.$typeUrl === SubaccountOrderbookMetadataWithMarket.typeUrl || typeof o.market_id === "string" && typeof o.isBuy === "boolean");
  },
  encode(message: SubaccountOrderbookMetadataWithMarket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metadata !== undefined) {
      SubaccountOrderbookMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.isBuy === true) {
      writer.uint32(24).bool(message.isBuy);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SubaccountOrderbookMetadataWithMarket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccountOrderbookMetadataWithMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = SubaccountOrderbookMetadata.decode(reader, reader.uint32());
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.isBuy = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SubaccountOrderbookMetadataWithMarket>): SubaccountOrderbookMetadataWithMarket {
    const message = createBaseSubaccountOrderbookMetadataWithMarket();
    message.metadata = object.metadata !== undefined && object.metadata !== null ? SubaccountOrderbookMetadata.fromPartial(object.metadata) : undefined;
    message.marketId = object.marketId ?? "";
    message.isBuy = object.isBuy ?? false;
    return message;
  },
  fromAmino(object: SubaccountOrderbookMetadataWithMarketAmino): SubaccountOrderbookMetadataWithMarket {
    const message = createBaseSubaccountOrderbookMetadataWithMarket();
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = SubaccountOrderbookMetadata.fromAmino(object.metadata);
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.isBuy !== undefined && object.isBuy !== null) {
      message.isBuy = object.isBuy;
    }
    return message;
  },
  toAmino(message: SubaccountOrderbookMetadataWithMarket): SubaccountOrderbookMetadataWithMarketAmino {
    const obj: any = {};
    obj.metadata = message.metadata ? SubaccountOrderbookMetadata.toAmino(message.metadata) : undefined;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.isBuy = message.isBuy === false ? undefined : message.isBuy;
    return obj;
  },
  fromAminoMsg(object: SubaccountOrderbookMetadataWithMarketAminoMsg): SubaccountOrderbookMetadataWithMarket {
    return SubaccountOrderbookMetadataWithMarket.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountOrderbookMetadataWithMarketProtoMsg): SubaccountOrderbookMetadataWithMarket {
    return SubaccountOrderbookMetadataWithMarket.decode(message.value);
  },
  toProto(message: SubaccountOrderbookMetadataWithMarket): Uint8Array {
    return SubaccountOrderbookMetadataWithMarket.encode(message).finish();
  },
  toProtoMsg(message: SubaccountOrderbookMetadataWithMarket): SubaccountOrderbookMetadataWithMarketProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SubaccountOrderbookMetadataWithMarket",
      value: SubaccountOrderbookMetadataWithMarket.encode(message).finish()
    };
  },
  registerTypeUrl() {
    SubaccountOrderbookMetadata.registerTypeUrl();
  }
};
function createBaseQueryExchangeParamsRequest(): QueryExchangeParamsRequest {
  return {};
}
export const QueryExchangeParamsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsRequest",
  is(o: any): o is QueryExchangeParamsRequest {
    return o && o.$typeUrl === QueryExchangeParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryExchangeParamsRequestAmino {
    return o && o.$typeUrl === QueryExchangeParamsRequest.typeUrl;
  },
  encode(_: QueryExchangeParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryExchangeParamsRequest>): QueryExchangeParamsRequest {
    const message = createBaseQueryExchangeParamsRequest();
    return message;
  },
  fromAmino(_: QueryExchangeParamsRequestAmino): QueryExchangeParamsRequest {
    const message = createBaseQueryExchangeParamsRequest();
    return message;
  },
  toAmino(_: QueryExchangeParamsRequest): QueryExchangeParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryExchangeParamsRequestAminoMsg): QueryExchangeParamsRequest {
    return QueryExchangeParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeParamsRequestProtoMsg): QueryExchangeParamsRequest {
    return QueryExchangeParamsRequest.decode(message.value);
  },
  toProto(message: QueryExchangeParamsRequest): Uint8Array {
    return QueryExchangeParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeParamsRequest): QueryExchangeParamsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsRequest",
      value: QueryExchangeParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryExchangeParamsResponse(): QueryExchangeParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryExchangeParamsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsResponse",
  is(o: any): o is QueryExchangeParamsResponse {
    return o && (o.$typeUrl === QueryExchangeParamsResponse.typeUrl || Params.is(o.params));
  },
  isAmino(o: any): o is QueryExchangeParamsResponseAmino {
    return o && (o.$typeUrl === QueryExchangeParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryExchangeParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryExchangeParamsResponse>): QueryExchangeParamsResponse {
    const message = createBaseQueryExchangeParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryExchangeParamsResponseAmino): QueryExchangeParamsResponse {
    const message = createBaseQueryExchangeParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryExchangeParamsResponse): QueryExchangeParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryExchangeParamsResponseAminoMsg): QueryExchangeParamsResponse {
    return QueryExchangeParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeParamsResponseProtoMsg): QueryExchangeParamsResponse {
    return QueryExchangeParamsResponse.decode(message.value);
  },
  toProto(message: QueryExchangeParamsResponse): Uint8Array {
    return QueryExchangeParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeParamsResponse): QueryExchangeParamsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsResponse",
      value: QueryExchangeParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Params.registerTypeUrl();
  }
};
function createBaseQuerySubaccountDepositsRequest(): QuerySubaccountDepositsRequest {
  return {
    subaccountId: "",
    subaccount: undefined
  };
}
export const QuerySubaccountDepositsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsRequest",
  is(o: any): o is QuerySubaccountDepositsRequest {
    return o && (o.$typeUrl === QuerySubaccountDepositsRequest.typeUrl || typeof o.subaccountId === "string");
  },
  isAmino(o: any): o is QuerySubaccountDepositsRequestAmino {
    return o && (o.$typeUrl === QuerySubaccountDepositsRequest.typeUrl || typeof o.subaccount_id === "string");
  },
  encode(message: QuerySubaccountDepositsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.subaccount !== undefined) {
      Subaccount.encode(message.subaccount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountDepositsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.subaccount = Subaccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySubaccountDepositsRequest>): QuerySubaccountDepositsRequest {
    const message = createBaseQuerySubaccountDepositsRequest();
    message.subaccountId = object.subaccountId ?? "";
    message.subaccount = object.subaccount !== undefined && object.subaccount !== null ? Subaccount.fromPartial(object.subaccount) : undefined;
    return message;
  },
  fromAmino(object: QuerySubaccountDepositsRequestAmino): QuerySubaccountDepositsRequest {
    const message = createBaseQuerySubaccountDepositsRequest();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    if (object.subaccount !== undefined && object.subaccount !== null) {
      message.subaccount = Subaccount.fromAmino(object.subaccount);
    }
    return message;
  },
  toAmino(message: QuerySubaccountDepositsRequest): QuerySubaccountDepositsRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.subaccount = message.subaccount ? Subaccount.toAmino(message.subaccount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountDepositsRequestAminoMsg): QuerySubaccountDepositsRequest {
    return QuerySubaccountDepositsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountDepositsRequestProtoMsg): QuerySubaccountDepositsRequest {
    return QuerySubaccountDepositsRequest.decode(message.value);
  },
  toProto(message: QuerySubaccountDepositsRequest): Uint8Array {
    return QuerySubaccountDepositsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountDepositsRequest): QuerySubaccountDepositsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsRequest",
      value: QuerySubaccountDepositsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Subaccount.registerTypeUrl();
  }
};
function createBaseQuerySubaccountDepositsResponse_DepositsEntry(): QuerySubaccountDepositsResponse_DepositsEntry {
  return {
    key: "",
    value: undefined
  };
}
export const QuerySubaccountDepositsResponse_DepositsEntry = {
  encode(message: QuerySubaccountDepositsResponse_DepositsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Deposit.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountDepositsResponse_DepositsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountDepositsResponse_DepositsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Deposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySubaccountDepositsResponse_DepositsEntry>): QuerySubaccountDepositsResponse_DepositsEntry {
    const message = createBaseQuerySubaccountDepositsResponse_DepositsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Deposit.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: QuerySubaccountDepositsResponse_DepositsEntryAmino): QuerySubaccountDepositsResponse_DepositsEntry {
    const message = createBaseQuerySubaccountDepositsResponse_DepositsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Deposit.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: QuerySubaccountDepositsResponse_DepositsEntry): QuerySubaccountDepositsResponse_DepositsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value ? Deposit.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountDepositsResponse_DepositsEntryAminoMsg): QuerySubaccountDepositsResponse_DepositsEntry {
    return QuerySubaccountDepositsResponse_DepositsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountDepositsResponse_DepositsEntryProtoMsg): QuerySubaccountDepositsResponse_DepositsEntry {
    return QuerySubaccountDepositsResponse_DepositsEntry.decode(message.value);
  },
  toProto(message: QuerySubaccountDepositsResponse_DepositsEntry): Uint8Array {
    return QuerySubaccountDepositsResponse_DepositsEntry.encode(message).finish();
  },
  registerTypeUrl() {
    Deposit.registerTypeUrl();
  }
};
function createBaseQuerySubaccountDepositsResponse(): QuerySubaccountDepositsResponse {
  return {
    deposits: {}
  };
}
export const QuerySubaccountDepositsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsResponse",
  is(o: any): o is QuerySubaccountDepositsResponse {
    return o && (o.$typeUrl === QuerySubaccountDepositsResponse.typeUrl || isSet(o.deposits));
  },
  isAmino(o: any): o is QuerySubaccountDepositsResponseAmino {
    return o && (o.$typeUrl === QuerySubaccountDepositsResponse.typeUrl || isSet(o.deposits));
  },
  encode(message: QuerySubaccountDepositsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.deposits).forEach(([key, value]) => {
      QuerySubaccountDepositsResponse_DepositsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountDepositsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountDepositsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = QuerySubaccountDepositsResponse_DepositsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.deposits[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySubaccountDepositsResponse>): QuerySubaccountDepositsResponse {
    const message = createBaseQuerySubaccountDepositsResponse();
    message.deposits = Object.entries(object.deposits ?? {}).reduce<{
      [key: string]: Deposit;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Deposit.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: QuerySubaccountDepositsResponseAmino): QuerySubaccountDepositsResponse {
    const message = createBaseQuerySubaccountDepositsResponse();
    message.deposits = Object.entries(object.deposits ?? {}).reduce<{
      [key: string]: Deposit;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Deposit.fromAmino(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: QuerySubaccountDepositsResponse): QuerySubaccountDepositsResponseAmino {
    const obj: any = {};
    obj.deposits = {};
    if (message.deposits) {
      Object.entries(message.deposits).forEach(([k, v]) => {
        obj.deposits[k] = Deposit.toAmino(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountDepositsResponseAminoMsg): QuerySubaccountDepositsResponse {
    return QuerySubaccountDepositsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountDepositsResponseProtoMsg): QuerySubaccountDepositsResponse {
    return QuerySubaccountDepositsResponse.decode(message.value);
  },
  toProto(message: QuerySubaccountDepositsResponse): Uint8Array {
    return QuerySubaccountDepositsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountDepositsResponse): QuerySubaccountDepositsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsResponse",
      value: QuerySubaccountDepositsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Deposit.registerTypeUrl();
  }
};
function createBaseQueryExchangeBalancesRequest(): QueryExchangeBalancesRequest {
  return {};
}
export const QueryExchangeBalancesRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesRequest",
  is(o: any): o is QueryExchangeBalancesRequest {
    return o && o.$typeUrl === QueryExchangeBalancesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryExchangeBalancesRequestAmino {
    return o && o.$typeUrl === QueryExchangeBalancesRequest.typeUrl;
  },
  encode(_: QueryExchangeBalancesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeBalancesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeBalancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryExchangeBalancesRequest>): QueryExchangeBalancesRequest {
    const message = createBaseQueryExchangeBalancesRequest();
    return message;
  },
  fromAmino(_: QueryExchangeBalancesRequestAmino): QueryExchangeBalancesRequest {
    const message = createBaseQueryExchangeBalancesRequest();
    return message;
  },
  toAmino(_: QueryExchangeBalancesRequest): QueryExchangeBalancesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryExchangeBalancesRequestAminoMsg): QueryExchangeBalancesRequest {
    return QueryExchangeBalancesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeBalancesRequestProtoMsg): QueryExchangeBalancesRequest {
    return QueryExchangeBalancesRequest.decode(message.value);
  },
  toProto(message: QueryExchangeBalancesRequest): Uint8Array {
    return QueryExchangeBalancesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeBalancesRequest): QueryExchangeBalancesRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesRequest",
      value: QueryExchangeBalancesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryExchangeBalancesResponse(): QueryExchangeBalancesResponse {
  return {
    balances: []
  };
}
export const QueryExchangeBalancesResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesResponse",
  is(o: any): o is QueryExchangeBalancesResponse {
    return o && (o.$typeUrl === QueryExchangeBalancesResponse.typeUrl || Array.isArray(o.balances) && (!o.balances.length || Balance.is(o.balances[0])));
  },
  isAmino(o: any): o is QueryExchangeBalancesResponseAmino {
    return o && (o.$typeUrl === QueryExchangeBalancesResponse.typeUrl || Array.isArray(o.balances) && (!o.balances.length || Balance.isAmino(o.balances[0])));
  },
  encode(message: QueryExchangeBalancesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.balances) {
      Balance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeBalancesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(Balance.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryExchangeBalancesResponse>): QueryExchangeBalancesResponse {
    const message = createBaseQueryExchangeBalancesResponse();
    message.balances = object.balances?.map(e => Balance.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryExchangeBalancesResponseAmino): QueryExchangeBalancesResponse {
    const message = createBaseQueryExchangeBalancesResponse();
    message.balances = object.balances?.map(e => Balance.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryExchangeBalancesResponse): QueryExchangeBalancesResponseAmino {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? Balance.toAmino(e) : undefined);
    } else {
      obj.balances = message.balances;
    }
    return obj;
  },
  fromAminoMsg(object: QueryExchangeBalancesResponseAminoMsg): QueryExchangeBalancesResponse {
    return QueryExchangeBalancesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeBalancesResponseProtoMsg): QueryExchangeBalancesResponse {
    return QueryExchangeBalancesResponse.decode(message.value);
  },
  toProto(message: QueryExchangeBalancesResponse): Uint8Array {
    return QueryExchangeBalancesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeBalancesResponse): QueryExchangeBalancesResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesResponse",
      value: QueryExchangeBalancesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Balance.registerTypeUrl();
  }
};
function createBaseQueryAggregateVolumeRequest(): QueryAggregateVolumeRequest {
  return {
    account: ""
  };
}
export const QueryAggregateVolumeRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateVolumeRequest",
  is(o: any): o is QueryAggregateVolumeRequest {
    return o && (o.$typeUrl === QueryAggregateVolumeRequest.typeUrl || typeof o.account === "string");
  },
  isAmino(o: any): o is QueryAggregateVolumeRequestAmino {
    return o && (o.$typeUrl === QueryAggregateVolumeRequest.typeUrl || typeof o.account === "string");
  },
  encode(message: QueryAggregateVolumeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateVolumeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregateVolumeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAggregateVolumeRequest>): QueryAggregateVolumeRequest {
    const message = createBaseQueryAggregateVolumeRequest();
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: QueryAggregateVolumeRequestAmino): QueryAggregateVolumeRequest {
    const message = createBaseQueryAggregateVolumeRequest();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    return message;
  },
  toAmino(message: QueryAggregateVolumeRequest): QueryAggregateVolumeRequestAmino {
    const obj: any = {};
    obj.account = message.account === "" ? undefined : message.account;
    return obj;
  },
  fromAminoMsg(object: QueryAggregateVolumeRequestAminoMsg): QueryAggregateVolumeRequest {
    return QueryAggregateVolumeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateVolumeRequestProtoMsg): QueryAggregateVolumeRequest {
    return QueryAggregateVolumeRequest.decode(message.value);
  },
  toProto(message: QueryAggregateVolumeRequest): Uint8Array {
    return QueryAggregateVolumeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateVolumeRequest): QueryAggregateVolumeRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryAggregateVolumeRequest",
      value: QueryAggregateVolumeRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryAggregateVolumeResponse(): QueryAggregateVolumeResponse {
  return {
    aggregateVolumes: []
  };
}
export const QueryAggregateVolumeResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateVolumeResponse",
  is(o: any): o is QueryAggregateVolumeResponse {
    return o && (o.$typeUrl === QueryAggregateVolumeResponse.typeUrl || Array.isArray(o.aggregateVolumes) && (!o.aggregateVolumes.length || MarketVolume.is(o.aggregateVolumes[0])));
  },
  isAmino(o: any): o is QueryAggregateVolumeResponseAmino {
    return o && (o.$typeUrl === QueryAggregateVolumeResponse.typeUrl || Array.isArray(o.aggregate_volumes) && (!o.aggregate_volumes.length || MarketVolume.isAmino(o.aggregate_volumes[0])));
  },
  encode(message: QueryAggregateVolumeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.aggregateVolumes) {
      MarketVolume.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateVolumeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregateVolumeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregateVolumes.push(MarketVolume.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAggregateVolumeResponse>): QueryAggregateVolumeResponse {
    const message = createBaseQueryAggregateVolumeResponse();
    message.aggregateVolumes = object.aggregateVolumes?.map(e => MarketVolume.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAggregateVolumeResponseAmino): QueryAggregateVolumeResponse {
    const message = createBaseQueryAggregateVolumeResponse();
    message.aggregateVolumes = object.aggregate_volumes?.map(e => MarketVolume.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAggregateVolumeResponse): QueryAggregateVolumeResponseAmino {
    const obj: any = {};
    if (message.aggregateVolumes) {
      obj.aggregate_volumes = message.aggregateVolumes.map(e => e ? MarketVolume.toAmino(e) : undefined);
    } else {
      obj.aggregate_volumes = message.aggregateVolumes;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAggregateVolumeResponseAminoMsg): QueryAggregateVolumeResponse {
    return QueryAggregateVolumeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateVolumeResponseProtoMsg): QueryAggregateVolumeResponse {
    return QueryAggregateVolumeResponse.decode(message.value);
  },
  toProto(message: QueryAggregateVolumeResponse): Uint8Array {
    return QueryAggregateVolumeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateVolumeResponse): QueryAggregateVolumeResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryAggregateVolumeResponse",
      value: QueryAggregateVolumeResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    MarketVolume.registerTypeUrl();
  }
};
function createBaseQueryAggregateVolumesRequest(): QueryAggregateVolumesRequest {
  return {
    accounts: [],
    marketIds: []
  };
}
export const QueryAggregateVolumesRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateVolumesRequest",
  is(o: any): o is QueryAggregateVolumesRequest {
    return o && (o.$typeUrl === QueryAggregateVolumesRequest.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || typeof o.accounts[0] === "string") && Array.isArray(o.marketIds) && (!o.marketIds.length || typeof o.marketIds[0] === "string"));
  },
  isAmino(o: any): o is QueryAggregateVolumesRequestAmino {
    return o && (o.$typeUrl === QueryAggregateVolumesRequest.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || typeof o.accounts[0] === "string") && Array.isArray(o.market_ids) && (!o.market_ids.length || typeof o.market_ids[0] === "string"));
  },
  encode(message: QueryAggregateVolumesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateVolumesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregateVolumesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(reader.string());
          break;
        case 2:
          message.marketIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAggregateVolumesRequest>): QueryAggregateVolumesRequest {
    const message = createBaseQueryAggregateVolumesRequest();
    message.accounts = object.accounts?.map(e => e) || [];
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryAggregateVolumesRequestAmino): QueryAggregateVolumesRequest {
    const message = createBaseQueryAggregateVolumesRequest();
    message.accounts = object.accounts?.map(e => e) || [];
    message.marketIds = object.market_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryAggregateVolumesRequest): QueryAggregateVolumesRequestAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e);
    } else {
      obj.accounts = message.accounts;
    }
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = message.marketIds;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAggregateVolumesRequestAminoMsg): QueryAggregateVolumesRequest {
    return QueryAggregateVolumesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateVolumesRequestProtoMsg): QueryAggregateVolumesRequest {
    return QueryAggregateVolumesRequest.decode(message.value);
  },
  toProto(message: QueryAggregateVolumesRequest): Uint8Array {
    return QueryAggregateVolumesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateVolumesRequest): QueryAggregateVolumesRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryAggregateVolumesRequest",
      value: QueryAggregateVolumesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryAggregateVolumesResponse(): QueryAggregateVolumesResponse {
  return {
    aggregateAccountVolumes: [],
    aggregateMarketVolumes: []
  };
}
export const QueryAggregateVolumesResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateVolumesResponse",
  is(o: any): o is QueryAggregateVolumesResponse {
    return o && (o.$typeUrl === QueryAggregateVolumesResponse.typeUrl || Array.isArray(o.aggregateAccountVolumes) && (!o.aggregateAccountVolumes.length || AggregateAccountVolumeRecord.is(o.aggregateAccountVolumes[0])) && Array.isArray(o.aggregateMarketVolumes) && (!o.aggregateMarketVolumes.length || MarketVolume.is(o.aggregateMarketVolumes[0])));
  },
  isAmino(o: any): o is QueryAggregateVolumesResponseAmino {
    return o && (o.$typeUrl === QueryAggregateVolumesResponse.typeUrl || Array.isArray(o.aggregate_account_volumes) && (!o.aggregate_account_volumes.length || AggregateAccountVolumeRecord.isAmino(o.aggregate_account_volumes[0])) && Array.isArray(o.aggregate_market_volumes) && (!o.aggregate_market_volumes.length || MarketVolume.isAmino(o.aggregate_market_volumes[0])));
  },
  encode(message: QueryAggregateVolumesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.aggregateAccountVolumes) {
      AggregateAccountVolumeRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.aggregateMarketVolumes) {
      MarketVolume.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateVolumesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregateVolumesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregateAccountVolumes.push(AggregateAccountVolumeRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.aggregateMarketVolumes.push(MarketVolume.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAggregateVolumesResponse>): QueryAggregateVolumesResponse {
    const message = createBaseQueryAggregateVolumesResponse();
    message.aggregateAccountVolumes = object.aggregateAccountVolumes?.map(e => AggregateAccountVolumeRecord.fromPartial(e)) || [];
    message.aggregateMarketVolumes = object.aggregateMarketVolumes?.map(e => MarketVolume.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAggregateVolumesResponseAmino): QueryAggregateVolumesResponse {
    const message = createBaseQueryAggregateVolumesResponse();
    message.aggregateAccountVolumes = object.aggregate_account_volumes?.map(e => AggregateAccountVolumeRecord.fromAmino(e)) || [];
    message.aggregateMarketVolumes = object.aggregate_market_volumes?.map(e => MarketVolume.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAggregateVolumesResponse): QueryAggregateVolumesResponseAmino {
    const obj: any = {};
    if (message.aggregateAccountVolumes) {
      obj.aggregate_account_volumes = message.aggregateAccountVolumes.map(e => e ? AggregateAccountVolumeRecord.toAmino(e) : undefined);
    } else {
      obj.aggregate_account_volumes = message.aggregateAccountVolumes;
    }
    if (message.aggregateMarketVolumes) {
      obj.aggregate_market_volumes = message.aggregateMarketVolumes.map(e => e ? MarketVolume.toAmino(e) : undefined);
    } else {
      obj.aggregate_market_volumes = message.aggregateMarketVolumes;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAggregateVolumesResponseAminoMsg): QueryAggregateVolumesResponse {
    return QueryAggregateVolumesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateVolumesResponseProtoMsg): QueryAggregateVolumesResponse {
    return QueryAggregateVolumesResponse.decode(message.value);
  },
  toProto(message: QueryAggregateVolumesResponse): Uint8Array {
    return QueryAggregateVolumesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateVolumesResponse): QueryAggregateVolumesResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryAggregateVolumesResponse",
      value: QueryAggregateVolumesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    AggregateAccountVolumeRecord.registerTypeUrl();
    MarketVolume.registerTypeUrl();
  }
};
function createBaseQueryAggregateMarketVolumeRequest(): QueryAggregateMarketVolumeRequest {
  return {
    marketId: ""
  };
}
export const QueryAggregateMarketVolumeRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateMarketVolumeRequest",
  is(o: any): o is QueryAggregateMarketVolumeRequest {
    return o && (o.$typeUrl === QueryAggregateMarketVolumeRequest.typeUrl || typeof o.marketId === "string");
  },
  isAmino(o: any): o is QueryAggregateMarketVolumeRequestAmino {
    return o && (o.$typeUrl === QueryAggregateMarketVolumeRequest.typeUrl || typeof o.market_id === "string");
  },
  encode(message: QueryAggregateMarketVolumeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateMarketVolumeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregateMarketVolumeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAggregateMarketVolumeRequest>): QueryAggregateMarketVolumeRequest {
    const message = createBaseQueryAggregateMarketVolumeRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromAmino(object: QueryAggregateMarketVolumeRequestAmino): QueryAggregateMarketVolumeRequest {
    const message = createBaseQueryAggregateMarketVolumeRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryAggregateMarketVolumeRequest): QueryAggregateMarketVolumeRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryAggregateMarketVolumeRequestAminoMsg): QueryAggregateMarketVolumeRequest {
    return QueryAggregateMarketVolumeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateMarketVolumeRequestProtoMsg): QueryAggregateMarketVolumeRequest {
    return QueryAggregateMarketVolumeRequest.decode(message.value);
  },
  toProto(message: QueryAggregateMarketVolumeRequest): Uint8Array {
    return QueryAggregateMarketVolumeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateMarketVolumeRequest): QueryAggregateMarketVolumeRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryAggregateMarketVolumeRequest",
      value: QueryAggregateMarketVolumeRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryAggregateMarketVolumeResponse(): QueryAggregateMarketVolumeResponse {
  return {
    volume: VolumeRecord.fromPartial({})
  };
}
export const QueryAggregateMarketVolumeResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateMarketVolumeResponse",
  is(o: any): o is QueryAggregateMarketVolumeResponse {
    return o && (o.$typeUrl === QueryAggregateMarketVolumeResponse.typeUrl || VolumeRecord.is(o.volume));
  },
  isAmino(o: any): o is QueryAggregateMarketVolumeResponseAmino {
    return o && (o.$typeUrl === QueryAggregateMarketVolumeResponse.typeUrl || VolumeRecord.isAmino(o.volume));
  },
  encode(message: QueryAggregateMarketVolumeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.volume !== undefined) {
      VolumeRecord.encode(message.volume, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateMarketVolumeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregateMarketVolumeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volume = VolumeRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAggregateMarketVolumeResponse>): QueryAggregateMarketVolumeResponse {
    const message = createBaseQueryAggregateMarketVolumeResponse();
    message.volume = object.volume !== undefined && object.volume !== null ? VolumeRecord.fromPartial(object.volume) : undefined;
    return message;
  },
  fromAmino(object: QueryAggregateMarketVolumeResponseAmino): QueryAggregateMarketVolumeResponse {
    const message = createBaseQueryAggregateMarketVolumeResponse();
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = VolumeRecord.fromAmino(object.volume);
    }
    return message;
  },
  toAmino(message: QueryAggregateMarketVolumeResponse): QueryAggregateMarketVolumeResponseAmino {
    const obj: any = {};
    obj.volume = message.volume ? VolumeRecord.toAmino(message.volume) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAggregateMarketVolumeResponseAminoMsg): QueryAggregateMarketVolumeResponse {
    return QueryAggregateMarketVolumeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateMarketVolumeResponseProtoMsg): QueryAggregateMarketVolumeResponse {
    return QueryAggregateMarketVolumeResponse.decode(message.value);
  },
  toProto(message: QueryAggregateMarketVolumeResponse): Uint8Array {
    return QueryAggregateMarketVolumeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateMarketVolumeResponse): QueryAggregateMarketVolumeResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryAggregateMarketVolumeResponse",
      value: QueryAggregateMarketVolumeResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    VolumeRecord.registerTypeUrl();
  }
};
function createBaseQueryDenomDecimalRequest(): QueryDenomDecimalRequest {
  return {
    denom: ""
  };
}
export const QueryDenomDecimalRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryDenomDecimalRequest",
  is(o: any): o is QueryDenomDecimalRequest {
    return o && (o.$typeUrl === QueryDenomDecimalRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryDenomDecimalRequestAmino {
    return o && (o.$typeUrl === QueryDenomDecimalRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryDenomDecimalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomDecimalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomDecimalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomDecimalRequest>): QueryDenomDecimalRequest {
    const message = createBaseQueryDenomDecimalRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryDenomDecimalRequestAmino): QueryDenomDecimalRequest {
    const message = createBaseQueryDenomDecimalRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryDenomDecimalRequest): QueryDenomDecimalRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryDenomDecimalRequestAminoMsg): QueryDenomDecimalRequest {
    return QueryDenomDecimalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomDecimalRequestProtoMsg): QueryDenomDecimalRequest {
    return QueryDenomDecimalRequest.decode(message.value);
  },
  toProto(message: QueryDenomDecimalRequest): Uint8Array {
    return QueryDenomDecimalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomDecimalRequest): QueryDenomDecimalRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDenomDecimalRequest",
      value: QueryDenomDecimalRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDenomDecimalResponse(): QueryDenomDecimalResponse {
  return {
    decimal: BigInt(0)
  };
}
export const QueryDenomDecimalResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryDenomDecimalResponse",
  is(o: any): o is QueryDenomDecimalResponse {
    return o && (o.$typeUrl === QueryDenomDecimalResponse.typeUrl || typeof o.decimal === "bigint");
  },
  isAmino(o: any): o is QueryDenomDecimalResponseAmino {
    return o && (o.$typeUrl === QueryDenomDecimalResponse.typeUrl || typeof o.decimal === "bigint");
  },
  encode(message: QueryDenomDecimalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.decimal !== BigInt(0)) {
      writer.uint32(8).uint64(message.decimal);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomDecimalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomDecimalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.decimal = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomDecimalResponse>): QueryDenomDecimalResponse {
    const message = createBaseQueryDenomDecimalResponse();
    message.decimal = object.decimal !== undefined && object.decimal !== null ? BigInt(object.decimal.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryDenomDecimalResponseAmino): QueryDenomDecimalResponse {
    const message = createBaseQueryDenomDecimalResponse();
    if (object.decimal !== undefined && object.decimal !== null) {
      message.decimal = BigInt(object.decimal);
    }
    return message;
  },
  toAmino(message: QueryDenomDecimalResponse): QueryDenomDecimalResponseAmino {
    const obj: any = {};
    obj.decimal = message.decimal !== BigInt(0) ? message.decimal?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomDecimalResponseAminoMsg): QueryDenomDecimalResponse {
    return QueryDenomDecimalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomDecimalResponseProtoMsg): QueryDenomDecimalResponse {
    return QueryDenomDecimalResponse.decode(message.value);
  },
  toProto(message: QueryDenomDecimalResponse): Uint8Array {
    return QueryDenomDecimalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomDecimalResponse): QueryDenomDecimalResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDenomDecimalResponse",
      value: QueryDenomDecimalResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDenomDecimalsRequest(): QueryDenomDecimalsRequest {
  return {
    denoms: []
  };
}
export const QueryDenomDecimalsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryDenomDecimalsRequest",
  is(o: any): o is QueryDenomDecimalsRequest {
    return o && (o.$typeUrl === QueryDenomDecimalsRequest.typeUrl || Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
  },
  isAmino(o: any): o is QueryDenomDecimalsRequestAmino {
    return o && (o.$typeUrl === QueryDenomDecimalsRequest.typeUrl || Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
  },
  encode(message: QueryDenomDecimalsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomDecimalsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomDecimalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomDecimalsRequest>): QueryDenomDecimalsRequest {
    const message = createBaseQueryDenomDecimalsRequest();
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryDenomDecimalsRequestAmino): QueryDenomDecimalsRequest {
    const message = createBaseQueryDenomDecimalsRequest();
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryDenomDecimalsRequest): QueryDenomDecimalsRequestAmino {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map(e => e);
    } else {
      obj.denoms = message.denoms;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDenomDecimalsRequestAminoMsg): QueryDenomDecimalsRequest {
    return QueryDenomDecimalsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomDecimalsRequestProtoMsg): QueryDenomDecimalsRequest {
    return QueryDenomDecimalsRequest.decode(message.value);
  },
  toProto(message: QueryDenomDecimalsRequest): Uint8Array {
    return QueryDenomDecimalsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomDecimalsRequest): QueryDenomDecimalsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDenomDecimalsRequest",
      value: QueryDenomDecimalsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDenomDecimalsResponse(): QueryDenomDecimalsResponse {
  return {
    denomDecimals: []
  };
}
export const QueryDenomDecimalsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryDenomDecimalsResponse",
  is(o: any): o is QueryDenomDecimalsResponse {
    return o && (o.$typeUrl === QueryDenomDecimalsResponse.typeUrl || Array.isArray(o.denomDecimals) && (!o.denomDecimals.length || DenomDecimals.is(o.denomDecimals[0])));
  },
  isAmino(o: any): o is QueryDenomDecimalsResponseAmino {
    return o && (o.$typeUrl === QueryDenomDecimalsResponse.typeUrl || Array.isArray(o.denom_decimals) && (!o.denom_decimals.length || DenomDecimals.isAmino(o.denom_decimals[0])));
  },
  encode(message: QueryDenomDecimalsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denomDecimals) {
      DenomDecimals.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomDecimalsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomDecimalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomDecimals.push(DenomDecimals.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomDecimalsResponse>): QueryDenomDecimalsResponse {
    const message = createBaseQueryDenomDecimalsResponse();
    message.denomDecimals = object.denomDecimals?.map(e => DenomDecimals.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDenomDecimalsResponseAmino): QueryDenomDecimalsResponse {
    const message = createBaseQueryDenomDecimalsResponse();
    message.denomDecimals = object.denom_decimals?.map(e => DenomDecimals.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryDenomDecimalsResponse): QueryDenomDecimalsResponseAmino {
    const obj: any = {};
    if (message.denomDecimals) {
      obj.denom_decimals = message.denomDecimals.map(e => e ? DenomDecimals.toAmino(e) : undefined);
    } else {
      obj.denom_decimals = message.denomDecimals;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDenomDecimalsResponseAminoMsg): QueryDenomDecimalsResponse {
    return QueryDenomDecimalsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomDecimalsResponseProtoMsg): QueryDenomDecimalsResponse {
    return QueryDenomDecimalsResponse.decode(message.value);
  },
  toProto(message: QueryDenomDecimalsResponse): Uint8Array {
    return QueryDenomDecimalsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomDecimalsResponse): QueryDenomDecimalsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDenomDecimalsResponse",
      value: QueryDenomDecimalsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    DenomDecimals.registerTypeUrl();
  }
};
function createBaseQueryAggregateMarketVolumesRequest(): QueryAggregateMarketVolumesRequest {
  return {
    marketIds: []
  };
}
export const QueryAggregateMarketVolumesRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateMarketVolumesRequest",
  is(o: any): o is QueryAggregateMarketVolumesRequest {
    return o && (o.$typeUrl === QueryAggregateMarketVolumesRequest.typeUrl || Array.isArray(o.marketIds) && (!o.marketIds.length || typeof o.marketIds[0] === "string"));
  },
  isAmino(o: any): o is QueryAggregateMarketVolumesRequestAmino {
    return o && (o.$typeUrl === QueryAggregateMarketVolumesRequest.typeUrl || Array.isArray(o.market_ids) && (!o.market_ids.length || typeof o.market_ids[0] === "string"));
  },
  encode(message: QueryAggregateMarketVolumesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.marketIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateMarketVolumesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregateMarketVolumesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAggregateMarketVolumesRequest>): QueryAggregateMarketVolumesRequest {
    const message = createBaseQueryAggregateMarketVolumesRequest();
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryAggregateMarketVolumesRequestAmino): QueryAggregateMarketVolumesRequest {
    const message = createBaseQueryAggregateMarketVolumesRequest();
    message.marketIds = object.market_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryAggregateMarketVolumesRequest): QueryAggregateMarketVolumesRequestAmino {
    const obj: any = {};
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = message.marketIds;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAggregateMarketVolumesRequestAminoMsg): QueryAggregateMarketVolumesRequest {
    return QueryAggregateMarketVolumesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateMarketVolumesRequestProtoMsg): QueryAggregateMarketVolumesRequest {
    return QueryAggregateMarketVolumesRequest.decode(message.value);
  },
  toProto(message: QueryAggregateMarketVolumesRequest): Uint8Array {
    return QueryAggregateMarketVolumesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateMarketVolumesRequest): QueryAggregateMarketVolumesRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryAggregateMarketVolumesRequest",
      value: QueryAggregateMarketVolumesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryAggregateMarketVolumesResponse(): QueryAggregateMarketVolumesResponse {
  return {
    volumes: []
  };
}
export const QueryAggregateMarketVolumesResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateMarketVolumesResponse",
  is(o: any): o is QueryAggregateMarketVolumesResponse {
    return o && (o.$typeUrl === QueryAggregateMarketVolumesResponse.typeUrl || Array.isArray(o.volumes) && (!o.volumes.length || MarketVolume.is(o.volumes[0])));
  },
  isAmino(o: any): o is QueryAggregateMarketVolumesResponseAmino {
    return o && (o.$typeUrl === QueryAggregateMarketVolumesResponse.typeUrl || Array.isArray(o.volumes) && (!o.volumes.length || MarketVolume.isAmino(o.volumes[0])));
  },
  encode(message: QueryAggregateMarketVolumesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.volumes) {
      MarketVolume.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateMarketVolumesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregateMarketVolumesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volumes.push(MarketVolume.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAggregateMarketVolumesResponse>): QueryAggregateMarketVolumesResponse {
    const message = createBaseQueryAggregateMarketVolumesResponse();
    message.volumes = object.volumes?.map(e => MarketVolume.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAggregateMarketVolumesResponseAmino): QueryAggregateMarketVolumesResponse {
    const message = createBaseQueryAggregateMarketVolumesResponse();
    message.volumes = object.volumes?.map(e => MarketVolume.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAggregateMarketVolumesResponse): QueryAggregateMarketVolumesResponseAmino {
    const obj: any = {};
    if (message.volumes) {
      obj.volumes = message.volumes.map(e => e ? MarketVolume.toAmino(e) : undefined);
    } else {
      obj.volumes = message.volumes;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAggregateMarketVolumesResponseAminoMsg): QueryAggregateMarketVolumesResponse {
    return QueryAggregateMarketVolumesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateMarketVolumesResponseProtoMsg): QueryAggregateMarketVolumesResponse {
    return QueryAggregateMarketVolumesResponse.decode(message.value);
  },
  toProto(message: QueryAggregateMarketVolumesResponse): Uint8Array {
    return QueryAggregateMarketVolumesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateMarketVolumesResponse): QueryAggregateMarketVolumesResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryAggregateMarketVolumesResponse",
      value: QueryAggregateMarketVolumesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    MarketVolume.registerTypeUrl();
  }
};
function createBaseQuerySubaccountDepositRequest(): QuerySubaccountDepositRequest {
  return {
    subaccountId: "",
    denom: ""
  };
}
export const QuerySubaccountDepositRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositRequest",
  is(o: any): o is QuerySubaccountDepositRequest {
    return o && (o.$typeUrl === QuerySubaccountDepositRequest.typeUrl || typeof o.subaccountId === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is QuerySubaccountDepositRequestAmino {
    return o && (o.$typeUrl === QuerySubaccountDepositRequest.typeUrl || typeof o.subaccount_id === "string" && typeof o.denom === "string");
  },
  encode(message: QuerySubaccountDepositRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountDepositRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySubaccountDepositRequest>): QuerySubaccountDepositRequest {
    const message = createBaseQuerySubaccountDepositRequest();
    message.subaccountId = object.subaccountId ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QuerySubaccountDepositRequestAmino): QuerySubaccountDepositRequest {
    const message = createBaseQuerySubaccountDepositRequest();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QuerySubaccountDepositRequest): QuerySubaccountDepositRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountDepositRequestAminoMsg): QuerySubaccountDepositRequest {
    return QuerySubaccountDepositRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountDepositRequestProtoMsg): QuerySubaccountDepositRequest {
    return QuerySubaccountDepositRequest.decode(message.value);
  },
  toProto(message: QuerySubaccountDepositRequest): Uint8Array {
    return QuerySubaccountDepositRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountDepositRequest): QuerySubaccountDepositRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositRequest",
      value: QuerySubaccountDepositRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySubaccountDepositResponse(): QuerySubaccountDepositResponse {
  return {
    deposits: undefined
  };
}
export const QuerySubaccountDepositResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositResponse",
  is(o: any): o is QuerySubaccountDepositResponse {
    return o && o.$typeUrl === QuerySubaccountDepositResponse.typeUrl;
  },
  isAmino(o: any): o is QuerySubaccountDepositResponseAmino {
    return o && o.$typeUrl === QuerySubaccountDepositResponse.typeUrl;
  },
  encode(message: QuerySubaccountDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deposits !== undefined) {
      Deposit.encode(message.deposits, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits = Deposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySubaccountDepositResponse>): QuerySubaccountDepositResponse {
    const message = createBaseQuerySubaccountDepositResponse();
    message.deposits = object.deposits !== undefined && object.deposits !== null ? Deposit.fromPartial(object.deposits) : undefined;
    return message;
  },
  fromAmino(object: QuerySubaccountDepositResponseAmino): QuerySubaccountDepositResponse {
    const message = createBaseQuerySubaccountDepositResponse();
    if (object.deposits !== undefined && object.deposits !== null) {
      message.deposits = Deposit.fromAmino(object.deposits);
    }
    return message;
  },
  toAmino(message: QuerySubaccountDepositResponse): QuerySubaccountDepositResponseAmino {
    const obj: any = {};
    obj.deposits = message.deposits ? Deposit.toAmino(message.deposits) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountDepositResponseAminoMsg): QuerySubaccountDepositResponse {
    return QuerySubaccountDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountDepositResponseProtoMsg): QuerySubaccountDepositResponse {
    return QuerySubaccountDepositResponse.decode(message.value);
  },
  toProto(message: QuerySubaccountDepositResponse): Uint8Array {
    return QuerySubaccountDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountDepositResponse): QuerySubaccountDepositResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositResponse",
      value: QuerySubaccountDepositResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Deposit.registerTypeUrl();
  }
};
function createBaseQuerySpotMarketsRequest(): QuerySpotMarketsRequest {
  return {
    status: "",
    marketIds: []
  };
}
export const QuerySpotMarketsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsRequest",
  is(o: any): o is QuerySpotMarketsRequest {
    return o && (o.$typeUrl === QuerySpotMarketsRequest.typeUrl || typeof o.status === "string" && Array.isArray(o.marketIds) && (!o.marketIds.length || typeof o.marketIds[0] === "string"));
  },
  isAmino(o: any): o is QuerySpotMarketsRequestAmino {
    return o && (o.$typeUrl === QuerySpotMarketsRequest.typeUrl || typeof o.status === "string" && Array.isArray(o.market_ids) && (!o.market_ids.length || typeof o.market_ids[0] === "string"));
  },
  encode(message: QuerySpotMarketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotMarketsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotMarketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.marketIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySpotMarketsRequest>): QuerySpotMarketsRequest {
    const message = createBaseQuerySpotMarketsRequest();
    message.status = object.status ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QuerySpotMarketsRequestAmino): QuerySpotMarketsRequest {
    const message = createBaseQuerySpotMarketsRequest();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    message.marketIds = object.market_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: QuerySpotMarketsRequest): QuerySpotMarketsRequestAmino {
    const obj: any = {};
    obj.status = message.status === "" ? undefined : message.status;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = message.marketIds;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySpotMarketsRequestAminoMsg): QuerySpotMarketsRequest {
    return QuerySpotMarketsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotMarketsRequestProtoMsg): QuerySpotMarketsRequest {
    return QuerySpotMarketsRequest.decode(message.value);
  },
  toProto(message: QuerySpotMarketsRequest): Uint8Array {
    return QuerySpotMarketsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotMarketsRequest): QuerySpotMarketsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsRequest",
      value: QuerySpotMarketsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySpotMarketsResponse(): QuerySpotMarketsResponse {
  return {
    markets: []
  };
}
export const QuerySpotMarketsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsResponse",
  is(o: any): o is QuerySpotMarketsResponse {
    return o && (o.$typeUrl === QuerySpotMarketsResponse.typeUrl || Array.isArray(o.markets) && (!o.markets.length || SpotMarket.is(o.markets[0])));
  },
  isAmino(o: any): o is QuerySpotMarketsResponseAmino {
    return o && (o.$typeUrl === QuerySpotMarketsResponse.typeUrl || Array.isArray(o.markets) && (!o.markets.length || SpotMarket.isAmino(o.markets[0])));
  },
  encode(message: QuerySpotMarketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.markets) {
      SpotMarket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotMarketsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotMarketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.markets.push(SpotMarket.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySpotMarketsResponse>): QuerySpotMarketsResponse {
    const message = createBaseQuerySpotMarketsResponse();
    message.markets = object.markets?.map(e => SpotMarket.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySpotMarketsResponseAmino): QuerySpotMarketsResponse {
    const message = createBaseQuerySpotMarketsResponse();
    message.markets = object.markets?.map(e => SpotMarket.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySpotMarketsResponse): QuerySpotMarketsResponseAmino {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map(e => e ? SpotMarket.toAmino(e) : undefined);
    } else {
      obj.markets = message.markets;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySpotMarketsResponseAminoMsg): QuerySpotMarketsResponse {
    return QuerySpotMarketsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotMarketsResponseProtoMsg): QuerySpotMarketsResponse {
    return QuerySpotMarketsResponse.decode(message.value);
  },
  toProto(message: QuerySpotMarketsResponse): Uint8Array {
    return QuerySpotMarketsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotMarketsResponse): QuerySpotMarketsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsResponse",
      value: QuerySpotMarketsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    SpotMarket.registerTypeUrl();
  }
};
function createBaseQuerySpotMarketRequest(): QuerySpotMarketRequest {
  return {
    marketId: ""
  };
}
export const QuerySpotMarketRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketRequest",
  is(o: any): o is QuerySpotMarketRequest {
    return o && (o.$typeUrl === QuerySpotMarketRequest.typeUrl || typeof o.marketId === "string");
  },
  isAmino(o: any): o is QuerySpotMarketRequestAmino {
    return o && (o.$typeUrl === QuerySpotMarketRequest.typeUrl || typeof o.market_id === "string");
  },
  encode(message: QuerySpotMarketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotMarketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotMarketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySpotMarketRequest>): QuerySpotMarketRequest {
    const message = createBaseQuerySpotMarketRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromAmino(object: QuerySpotMarketRequestAmino): QuerySpotMarketRequest {
    const message = createBaseQuerySpotMarketRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QuerySpotMarketRequest): QuerySpotMarketRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QuerySpotMarketRequestAminoMsg): QuerySpotMarketRequest {
    return QuerySpotMarketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotMarketRequestProtoMsg): QuerySpotMarketRequest {
    return QuerySpotMarketRequest.decode(message.value);
  },
  toProto(message: QuerySpotMarketRequest): Uint8Array {
    return QuerySpotMarketRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotMarketRequest): QuerySpotMarketRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketRequest",
      value: QuerySpotMarketRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySpotMarketResponse(): QuerySpotMarketResponse {
  return {
    market: undefined
  };
}
export const QuerySpotMarketResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketResponse",
  is(o: any): o is QuerySpotMarketResponse {
    return o && o.$typeUrl === QuerySpotMarketResponse.typeUrl;
  },
  isAmino(o: any): o is QuerySpotMarketResponseAmino {
    return o && o.$typeUrl === QuerySpotMarketResponse.typeUrl;
  },
  encode(message: QuerySpotMarketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.market !== undefined) {
      SpotMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotMarketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = SpotMarket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySpotMarketResponse>): QuerySpotMarketResponse {
    const message = createBaseQuerySpotMarketResponse();
    message.market = object.market !== undefined && object.market !== null ? SpotMarket.fromPartial(object.market) : undefined;
    return message;
  },
  fromAmino(object: QuerySpotMarketResponseAmino): QuerySpotMarketResponse {
    const message = createBaseQuerySpotMarketResponse();
    if (object.market !== undefined && object.market !== null) {
      message.market = SpotMarket.fromAmino(object.market);
    }
    return message;
  },
  toAmino(message: QuerySpotMarketResponse): QuerySpotMarketResponseAmino {
    const obj: any = {};
    obj.market = message.market ? SpotMarket.toAmino(message.market) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySpotMarketResponseAminoMsg): QuerySpotMarketResponse {
    return QuerySpotMarketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotMarketResponseProtoMsg): QuerySpotMarketResponse {
    return QuerySpotMarketResponse.decode(message.value);
  },
  toProto(message: QuerySpotMarketResponse): Uint8Array {
    return QuerySpotMarketResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotMarketResponse): QuerySpotMarketResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketResponse",
      value: QuerySpotMarketResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    SpotMarket.registerTypeUrl();
  }
};
function createBaseQuerySpotOrderbookRequest(): QuerySpotOrderbookRequest {
  return {
    marketId: "",
    limit: BigInt(0),
    orderSide: 0,
    limitCumulativeNotional: undefined,
    limitCumulativeQuantity: undefined
  };
}
export const QuerySpotOrderbookRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookRequest",
  is(o: any): o is QuerySpotOrderbookRequest {
    return o && (o.$typeUrl === QuerySpotOrderbookRequest.typeUrl || typeof o.marketId === "string" && typeof o.limit === "bigint" && isSet(o.orderSide));
  },
  isAmino(o: any): o is QuerySpotOrderbookRequestAmino {
    return o && (o.$typeUrl === QuerySpotOrderbookRequest.typeUrl || typeof o.market_id === "string" && typeof o.limit === "bigint" && isSet(o.order_side));
  },
  encode(message: QuerySpotOrderbookRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(16).uint64(message.limit);
    }
    if (message.orderSide !== 0) {
      writer.uint32(24).int32(message.orderSide);
    }
    if (message.limitCumulativeNotional !== undefined) {
      writer.uint32(34).string(message.limitCumulativeNotional);
    }
    if (message.limitCumulativeQuantity !== undefined) {
      writer.uint32(42).string(message.limitCumulativeQuantity);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotOrderbookRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotOrderbookRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.limit = reader.uint64();
          break;
        case 3:
          message.orderSide = (reader.int32() as any);
          break;
        case 4:
          message.limitCumulativeNotional = reader.string();
          break;
        case 5:
          message.limitCumulativeQuantity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySpotOrderbookRequest>): QuerySpotOrderbookRequest {
    const message = createBaseQuerySpotOrderbookRequest();
    message.marketId = object.marketId ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
    message.orderSide = object.orderSide ?? 0;
    message.limitCumulativeNotional = object.limitCumulativeNotional ?? undefined;
    message.limitCumulativeQuantity = object.limitCumulativeQuantity ?? undefined;
    return message;
  },
  fromAmino(object: QuerySpotOrderbookRequestAmino): QuerySpotOrderbookRequest {
    const message = createBaseQuerySpotOrderbookRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = BigInt(object.limit);
    }
    if (object.order_side !== undefined && object.order_side !== null) {
      message.orderSide = object.order_side;
    }
    if (object.limit_cumulative_notional !== undefined && object.limit_cumulative_notional !== null) {
      message.limitCumulativeNotional = object.limit_cumulative_notional;
    }
    if (object.limit_cumulative_quantity !== undefined && object.limit_cumulative_quantity !== null) {
      message.limitCumulativeQuantity = object.limit_cumulative_quantity;
    }
    return message;
  },
  toAmino(message: QuerySpotOrderbookRequest): QuerySpotOrderbookRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.limit = message.limit !== BigInt(0) ? message.limit?.toString() : undefined;
    obj.order_side = message.orderSide === 0 ? undefined : message.orderSide;
    obj.limit_cumulative_notional = message.limitCumulativeNotional === null ? undefined : message.limitCumulativeNotional;
    obj.limit_cumulative_quantity = message.limitCumulativeQuantity === null ? undefined : message.limitCumulativeQuantity;
    return obj;
  },
  fromAminoMsg(object: QuerySpotOrderbookRequestAminoMsg): QuerySpotOrderbookRequest {
    return QuerySpotOrderbookRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotOrderbookRequestProtoMsg): QuerySpotOrderbookRequest {
    return QuerySpotOrderbookRequest.decode(message.value);
  },
  toProto(message: QuerySpotOrderbookRequest): Uint8Array {
    return QuerySpotOrderbookRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotOrderbookRequest): QuerySpotOrderbookRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookRequest",
      value: QuerySpotOrderbookRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySpotOrderbookResponse(): QuerySpotOrderbookResponse {
  return {
    buysPriceLevel: [],
    sellsPriceLevel: []
  };
}
export const QuerySpotOrderbookResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookResponse",
  is(o: any): o is QuerySpotOrderbookResponse {
    return o && (o.$typeUrl === QuerySpotOrderbookResponse.typeUrl || Array.isArray(o.buysPriceLevel) && (!o.buysPriceLevel.length || Level.is(o.buysPriceLevel[0])) && Array.isArray(o.sellsPriceLevel) && (!o.sellsPriceLevel.length || Level.is(o.sellsPriceLevel[0])));
  },
  isAmino(o: any): o is QuerySpotOrderbookResponseAmino {
    return o && (o.$typeUrl === QuerySpotOrderbookResponse.typeUrl || Array.isArray(o.buys_price_level) && (!o.buys_price_level.length || Level.isAmino(o.buys_price_level[0])) && Array.isArray(o.sells_price_level) && (!o.sells_price_level.length || Level.isAmino(o.sells_price_level[0])));
  },
  encode(message: QuerySpotOrderbookResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.buysPriceLevel) {
      Level.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.sellsPriceLevel) {
      Level.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotOrderbookResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotOrderbookResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buysPriceLevel.push(Level.decode(reader, reader.uint32()));
          break;
        case 2:
          message.sellsPriceLevel.push(Level.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySpotOrderbookResponse>): QuerySpotOrderbookResponse {
    const message = createBaseQuerySpotOrderbookResponse();
    message.buysPriceLevel = object.buysPriceLevel?.map(e => Level.fromPartial(e)) || [];
    message.sellsPriceLevel = object.sellsPriceLevel?.map(e => Level.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySpotOrderbookResponseAmino): QuerySpotOrderbookResponse {
    const message = createBaseQuerySpotOrderbookResponse();
    message.buysPriceLevel = object.buys_price_level?.map(e => Level.fromAmino(e)) || [];
    message.sellsPriceLevel = object.sells_price_level?.map(e => Level.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySpotOrderbookResponse): QuerySpotOrderbookResponseAmino {
    const obj: any = {};
    if (message.buysPriceLevel) {
      obj.buys_price_level = message.buysPriceLevel.map(e => e ? Level.toAmino(e) : undefined);
    } else {
      obj.buys_price_level = message.buysPriceLevel;
    }
    if (message.sellsPriceLevel) {
      obj.sells_price_level = message.sellsPriceLevel.map(e => e ? Level.toAmino(e) : undefined);
    } else {
      obj.sells_price_level = message.sellsPriceLevel;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySpotOrderbookResponseAminoMsg): QuerySpotOrderbookResponse {
    return QuerySpotOrderbookResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotOrderbookResponseProtoMsg): QuerySpotOrderbookResponse {
    return QuerySpotOrderbookResponse.decode(message.value);
  },
  toProto(message: QuerySpotOrderbookResponse): Uint8Array {
    return QuerySpotOrderbookResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotOrderbookResponse): QuerySpotOrderbookResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookResponse",
      value: QuerySpotOrderbookResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Level.registerTypeUrl();
  }
};
function createBaseFullSpotMarket(): FullSpotMarket {
  return {
    market: undefined,
    midPriceAndTob: undefined
  };
}
export const FullSpotMarket = {
  typeUrl: "/injective.exchange.v1beta1.FullSpotMarket",
  is(o: any): o is FullSpotMarket {
    return o && o.$typeUrl === FullSpotMarket.typeUrl;
  },
  isAmino(o: any): o is FullSpotMarketAmino {
    return o && o.$typeUrl === FullSpotMarket.typeUrl;
  },
  encode(message: FullSpotMarket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.market !== undefined) {
      SpotMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    if (message.midPriceAndTob !== undefined) {
      MidPriceAndTOB.encode(message.midPriceAndTob, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FullSpotMarket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFullSpotMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = SpotMarket.decode(reader, reader.uint32());
          break;
        case 2:
          message.midPriceAndTob = MidPriceAndTOB.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FullSpotMarket>): FullSpotMarket {
    const message = createBaseFullSpotMarket();
    message.market = object.market !== undefined && object.market !== null ? SpotMarket.fromPartial(object.market) : undefined;
    message.midPriceAndTob = object.midPriceAndTob !== undefined && object.midPriceAndTob !== null ? MidPriceAndTOB.fromPartial(object.midPriceAndTob) : undefined;
    return message;
  },
  fromAmino(object: FullSpotMarketAmino): FullSpotMarket {
    const message = createBaseFullSpotMarket();
    if (object.market !== undefined && object.market !== null) {
      message.market = SpotMarket.fromAmino(object.market);
    }
    if (object.mid_price_and_tob !== undefined && object.mid_price_and_tob !== null) {
      message.midPriceAndTob = MidPriceAndTOB.fromAmino(object.mid_price_and_tob);
    }
    return message;
  },
  toAmino(message: FullSpotMarket): FullSpotMarketAmino {
    const obj: any = {};
    obj.market = message.market ? SpotMarket.toAmino(message.market) : undefined;
    obj.mid_price_and_tob = message.midPriceAndTob ? MidPriceAndTOB.toAmino(message.midPriceAndTob) : undefined;
    return obj;
  },
  fromAminoMsg(object: FullSpotMarketAminoMsg): FullSpotMarket {
    return FullSpotMarket.fromAmino(object.value);
  },
  fromProtoMsg(message: FullSpotMarketProtoMsg): FullSpotMarket {
    return FullSpotMarket.decode(message.value);
  },
  toProto(message: FullSpotMarket): Uint8Array {
    return FullSpotMarket.encode(message).finish();
  },
  toProtoMsg(message: FullSpotMarket): FullSpotMarketProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.FullSpotMarket",
      value: FullSpotMarket.encode(message).finish()
    };
  },
  registerTypeUrl() {
    SpotMarket.registerTypeUrl();
    MidPriceAndTOB.registerTypeUrl();
  }
};
function createBaseQueryFullSpotMarketsRequest(): QueryFullSpotMarketsRequest {
  return {
    status: "",
    marketIds: [],
    withMidPriceAndTob: false
  };
}
export const QueryFullSpotMarketsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryFullSpotMarketsRequest",
  is(o: any): o is QueryFullSpotMarketsRequest {
    return o && (o.$typeUrl === QueryFullSpotMarketsRequest.typeUrl || typeof o.status === "string" && Array.isArray(o.marketIds) && (!o.marketIds.length || typeof o.marketIds[0] === "string") && typeof o.withMidPriceAndTob === "boolean");
  },
  isAmino(o: any): o is QueryFullSpotMarketsRequestAmino {
    return o && (o.$typeUrl === QueryFullSpotMarketsRequest.typeUrl || typeof o.status === "string" && Array.isArray(o.market_ids) && (!o.market_ids.length || typeof o.market_ids[0] === "string") && typeof o.with_mid_price_and_tob === "boolean");
  },
  encode(message: QueryFullSpotMarketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    if (message.withMidPriceAndTob === true) {
      writer.uint32(24).bool(message.withMidPriceAndTob);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFullSpotMarketsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFullSpotMarketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.marketIds.push(reader.string());
          break;
        case 3:
          message.withMidPriceAndTob = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFullSpotMarketsRequest>): QueryFullSpotMarketsRequest {
    const message = createBaseQueryFullSpotMarketsRequest();
    message.status = object.status ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    message.withMidPriceAndTob = object.withMidPriceAndTob ?? false;
    return message;
  },
  fromAmino(object: QueryFullSpotMarketsRequestAmino): QueryFullSpotMarketsRequest {
    const message = createBaseQueryFullSpotMarketsRequest();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    message.marketIds = object.market_ids?.map(e => e) || [];
    if (object.with_mid_price_and_tob !== undefined && object.with_mid_price_and_tob !== null) {
      message.withMidPriceAndTob = object.with_mid_price_and_tob;
    }
    return message;
  },
  toAmino(message: QueryFullSpotMarketsRequest): QueryFullSpotMarketsRequestAmino {
    const obj: any = {};
    obj.status = message.status === "" ? undefined : message.status;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = message.marketIds;
    }
    obj.with_mid_price_and_tob = message.withMidPriceAndTob === false ? undefined : message.withMidPriceAndTob;
    return obj;
  },
  fromAminoMsg(object: QueryFullSpotMarketsRequestAminoMsg): QueryFullSpotMarketsRequest {
    return QueryFullSpotMarketsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFullSpotMarketsRequestProtoMsg): QueryFullSpotMarketsRequest {
    return QueryFullSpotMarketsRequest.decode(message.value);
  },
  toProto(message: QueryFullSpotMarketsRequest): Uint8Array {
    return QueryFullSpotMarketsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFullSpotMarketsRequest): QueryFullSpotMarketsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFullSpotMarketsRequest",
      value: QueryFullSpotMarketsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryFullSpotMarketsResponse(): QueryFullSpotMarketsResponse {
  return {
    markets: []
  };
}
export const QueryFullSpotMarketsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryFullSpotMarketsResponse",
  is(o: any): o is QueryFullSpotMarketsResponse {
    return o && (o.$typeUrl === QueryFullSpotMarketsResponse.typeUrl || Array.isArray(o.markets) && (!o.markets.length || FullSpotMarket.is(o.markets[0])));
  },
  isAmino(o: any): o is QueryFullSpotMarketsResponseAmino {
    return o && (o.$typeUrl === QueryFullSpotMarketsResponse.typeUrl || Array.isArray(o.markets) && (!o.markets.length || FullSpotMarket.isAmino(o.markets[0])));
  },
  encode(message: QueryFullSpotMarketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.markets) {
      FullSpotMarket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFullSpotMarketsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFullSpotMarketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.markets.push(FullSpotMarket.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFullSpotMarketsResponse>): QueryFullSpotMarketsResponse {
    const message = createBaseQueryFullSpotMarketsResponse();
    message.markets = object.markets?.map(e => FullSpotMarket.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryFullSpotMarketsResponseAmino): QueryFullSpotMarketsResponse {
    const message = createBaseQueryFullSpotMarketsResponse();
    message.markets = object.markets?.map(e => FullSpotMarket.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryFullSpotMarketsResponse): QueryFullSpotMarketsResponseAmino {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map(e => e ? FullSpotMarket.toAmino(e) : undefined);
    } else {
      obj.markets = message.markets;
    }
    return obj;
  },
  fromAminoMsg(object: QueryFullSpotMarketsResponseAminoMsg): QueryFullSpotMarketsResponse {
    return QueryFullSpotMarketsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFullSpotMarketsResponseProtoMsg): QueryFullSpotMarketsResponse {
    return QueryFullSpotMarketsResponse.decode(message.value);
  },
  toProto(message: QueryFullSpotMarketsResponse): Uint8Array {
    return QueryFullSpotMarketsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFullSpotMarketsResponse): QueryFullSpotMarketsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFullSpotMarketsResponse",
      value: QueryFullSpotMarketsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    FullSpotMarket.registerTypeUrl();
  }
};
function createBaseQueryFullSpotMarketRequest(): QueryFullSpotMarketRequest {
  return {
    marketId: "",
    withMidPriceAndTob: false
  };
}
export const QueryFullSpotMarketRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryFullSpotMarketRequest",
  is(o: any): o is QueryFullSpotMarketRequest {
    return o && (o.$typeUrl === QueryFullSpotMarketRequest.typeUrl || typeof o.marketId === "string" && typeof o.withMidPriceAndTob === "boolean");
  },
  isAmino(o: any): o is QueryFullSpotMarketRequestAmino {
    return o && (o.$typeUrl === QueryFullSpotMarketRequest.typeUrl || typeof o.market_id === "string" && typeof o.with_mid_price_and_tob === "boolean");
  },
  encode(message: QueryFullSpotMarketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.withMidPriceAndTob === true) {
      writer.uint32(16).bool(message.withMidPriceAndTob);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFullSpotMarketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFullSpotMarketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.withMidPriceAndTob = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFullSpotMarketRequest>): QueryFullSpotMarketRequest {
    const message = createBaseQueryFullSpotMarketRequest();
    message.marketId = object.marketId ?? "";
    message.withMidPriceAndTob = object.withMidPriceAndTob ?? false;
    return message;
  },
  fromAmino(object: QueryFullSpotMarketRequestAmino): QueryFullSpotMarketRequest {
    const message = createBaseQueryFullSpotMarketRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.with_mid_price_and_tob !== undefined && object.with_mid_price_and_tob !== null) {
      message.withMidPriceAndTob = object.with_mid_price_and_tob;
    }
    return message;
  },
  toAmino(message: QueryFullSpotMarketRequest): QueryFullSpotMarketRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.with_mid_price_and_tob = message.withMidPriceAndTob === false ? undefined : message.withMidPriceAndTob;
    return obj;
  },
  fromAminoMsg(object: QueryFullSpotMarketRequestAminoMsg): QueryFullSpotMarketRequest {
    return QueryFullSpotMarketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFullSpotMarketRequestProtoMsg): QueryFullSpotMarketRequest {
    return QueryFullSpotMarketRequest.decode(message.value);
  },
  toProto(message: QueryFullSpotMarketRequest): Uint8Array {
    return QueryFullSpotMarketRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFullSpotMarketRequest): QueryFullSpotMarketRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFullSpotMarketRequest",
      value: QueryFullSpotMarketRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryFullSpotMarketResponse(): QueryFullSpotMarketResponse {
  return {
    market: undefined
  };
}
export const QueryFullSpotMarketResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryFullSpotMarketResponse",
  is(o: any): o is QueryFullSpotMarketResponse {
    return o && o.$typeUrl === QueryFullSpotMarketResponse.typeUrl;
  },
  isAmino(o: any): o is QueryFullSpotMarketResponseAmino {
    return o && o.$typeUrl === QueryFullSpotMarketResponse.typeUrl;
  },
  encode(message: QueryFullSpotMarketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.market !== undefined) {
      FullSpotMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFullSpotMarketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFullSpotMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = FullSpotMarket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFullSpotMarketResponse>): QueryFullSpotMarketResponse {
    const message = createBaseQueryFullSpotMarketResponse();
    message.market = object.market !== undefined && object.market !== null ? FullSpotMarket.fromPartial(object.market) : undefined;
    return message;
  },
  fromAmino(object: QueryFullSpotMarketResponseAmino): QueryFullSpotMarketResponse {
    const message = createBaseQueryFullSpotMarketResponse();
    if (object.market !== undefined && object.market !== null) {
      message.market = FullSpotMarket.fromAmino(object.market);
    }
    return message;
  },
  toAmino(message: QueryFullSpotMarketResponse): QueryFullSpotMarketResponseAmino {
    const obj: any = {};
    obj.market = message.market ? FullSpotMarket.toAmino(message.market) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFullSpotMarketResponseAminoMsg): QueryFullSpotMarketResponse {
    return QueryFullSpotMarketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFullSpotMarketResponseProtoMsg): QueryFullSpotMarketResponse {
    return QueryFullSpotMarketResponse.decode(message.value);
  },
  toProto(message: QueryFullSpotMarketResponse): Uint8Array {
    return QueryFullSpotMarketResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFullSpotMarketResponse): QueryFullSpotMarketResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFullSpotMarketResponse",
      value: QueryFullSpotMarketResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    FullSpotMarket.registerTypeUrl();
  }
};
function createBaseQuerySpotOrdersByHashesRequest(): QuerySpotOrdersByHashesRequest {
  return {
    marketId: "",
    subaccountId: "",
    orderHashes: []
  };
}
export const QuerySpotOrdersByHashesRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesRequest",
  is(o: any): o is QuerySpotOrdersByHashesRequest {
    return o && (o.$typeUrl === QuerySpotOrdersByHashesRequest.typeUrl || typeof o.marketId === "string" && typeof o.subaccountId === "string" && Array.isArray(o.orderHashes) && (!o.orderHashes.length || typeof o.orderHashes[0] === "string"));
  },
  isAmino(o: any): o is QuerySpotOrdersByHashesRequestAmino {
    return o && (o.$typeUrl === QuerySpotOrdersByHashesRequest.typeUrl || typeof o.market_id === "string" && typeof o.subaccount_id === "string" && Array.isArray(o.order_hashes) && (!o.order_hashes.length || typeof o.order_hashes[0] === "string"));
  },
  encode(message: QuerySpotOrdersByHashesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    for (const v of message.orderHashes) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotOrdersByHashesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotOrdersByHashesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.subaccountId = reader.string();
          break;
        case 3:
          message.orderHashes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySpotOrdersByHashesRequest>): QuerySpotOrdersByHashesRequest {
    const message = createBaseQuerySpotOrdersByHashesRequest();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.orderHashes = object.orderHashes?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QuerySpotOrdersByHashesRequestAmino): QuerySpotOrdersByHashesRequest {
    const message = createBaseQuerySpotOrdersByHashesRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    message.orderHashes = object.order_hashes?.map(e => e) || [];
    return message;
  },
  toAmino(message: QuerySpotOrdersByHashesRequest): QuerySpotOrdersByHashesRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    if (message.orderHashes) {
      obj.order_hashes = message.orderHashes.map(e => e);
    } else {
      obj.order_hashes = message.orderHashes;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySpotOrdersByHashesRequestAminoMsg): QuerySpotOrdersByHashesRequest {
    return QuerySpotOrdersByHashesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotOrdersByHashesRequestProtoMsg): QuerySpotOrdersByHashesRequest {
    return QuerySpotOrdersByHashesRequest.decode(message.value);
  },
  toProto(message: QuerySpotOrdersByHashesRequest): Uint8Array {
    return QuerySpotOrdersByHashesRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotOrdersByHashesRequest): QuerySpotOrdersByHashesRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesRequest",
      value: QuerySpotOrdersByHashesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySpotOrdersByHashesResponse(): QuerySpotOrdersByHashesResponse {
  return {
    orders: []
  };
}
export const QuerySpotOrdersByHashesResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesResponse",
  is(o: any): o is QuerySpotOrdersByHashesResponse {
    return o && (o.$typeUrl === QuerySpotOrdersByHashesResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || TrimmedSpotLimitOrder.is(o.orders[0])));
  },
  isAmino(o: any): o is QuerySpotOrdersByHashesResponseAmino {
    return o && (o.$typeUrl === QuerySpotOrdersByHashesResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || TrimmedSpotLimitOrder.isAmino(o.orders[0])));
  },
  encode(message: QuerySpotOrdersByHashesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.orders) {
      TrimmedSpotLimitOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotOrdersByHashesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotOrdersByHashesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(TrimmedSpotLimitOrder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySpotOrdersByHashesResponse>): QuerySpotOrdersByHashesResponse {
    const message = createBaseQuerySpotOrdersByHashesResponse();
    message.orders = object.orders?.map(e => TrimmedSpotLimitOrder.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySpotOrdersByHashesResponseAmino): QuerySpotOrdersByHashesResponse {
    const message = createBaseQuerySpotOrdersByHashesResponse();
    message.orders = object.orders?.map(e => TrimmedSpotLimitOrder.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySpotOrdersByHashesResponse): QuerySpotOrdersByHashesResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedSpotLimitOrder.toAmino(e) : undefined);
    } else {
      obj.orders = message.orders;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySpotOrdersByHashesResponseAminoMsg): QuerySpotOrdersByHashesResponse {
    return QuerySpotOrdersByHashesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotOrdersByHashesResponseProtoMsg): QuerySpotOrdersByHashesResponse {
    return QuerySpotOrdersByHashesResponse.decode(message.value);
  },
  toProto(message: QuerySpotOrdersByHashesResponse): Uint8Array {
    return QuerySpotOrdersByHashesResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotOrdersByHashesResponse): QuerySpotOrdersByHashesResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesResponse",
      value: QuerySpotOrdersByHashesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    TrimmedSpotLimitOrder.registerTypeUrl();
  }
};
function createBaseQueryTraderSpotOrdersRequest(): QueryTraderSpotOrdersRequest {
  return {
    marketId: "",
    subaccountId: ""
  };
}
export const QueryTraderSpotOrdersRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersRequest",
  is(o: any): o is QueryTraderSpotOrdersRequest {
    return o && (o.$typeUrl === QueryTraderSpotOrdersRequest.typeUrl || typeof o.marketId === "string" && typeof o.subaccountId === "string");
  },
  isAmino(o: any): o is QueryTraderSpotOrdersRequestAmino {
    return o && (o.$typeUrl === QueryTraderSpotOrdersRequest.typeUrl || typeof o.market_id === "string" && typeof o.subaccount_id === "string");
  },
  encode(message: QueryTraderSpotOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTraderSpotOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraderSpotOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.subaccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTraderSpotOrdersRequest>): QueryTraderSpotOrdersRequest {
    const message = createBaseQueryTraderSpotOrdersRequest();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    return message;
  },
  fromAmino(object: QueryTraderSpotOrdersRequestAmino): QueryTraderSpotOrdersRequest {
    const message = createBaseQueryTraderSpotOrdersRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    return message;
  },
  toAmino(message: QueryTraderSpotOrdersRequest): QueryTraderSpotOrdersRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    return obj;
  },
  fromAminoMsg(object: QueryTraderSpotOrdersRequestAminoMsg): QueryTraderSpotOrdersRequest {
    return QueryTraderSpotOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraderSpotOrdersRequestProtoMsg): QueryTraderSpotOrdersRequest {
    return QueryTraderSpotOrdersRequest.decode(message.value);
  },
  toProto(message: QueryTraderSpotOrdersRequest): Uint8Array {
    return QueryTraderSpotOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTraderSpotOrdersRequest): QueryTraderSpotOrdersRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersRequest",
      value: QueryTraderSpotOrdersRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryAccountAddressSpotOrdersRequest(): QueryAccountAddressSpotOrdersRequest {
  return {
    marketId: "",
    accountAddress: ""
  };
}
export const QueryAccountAddressSpotOrdersRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryAccountAddressSpotOrdersRequest",
  is(o: any): o is QueryAccountAddressSpotOrdersRequest {
    return o && (o.$typeUrl === QueryAccountAddressSpotOrdersRequest.typeUrl || typeof o.marketId === "string" && typeof o.accountAddress === "string");
  },
  isAmino(o: any): o is QueryAccountAddressSpotOrdersRequestAmino {
    return o && (o.$typeUrl === QueryAccountAddressSpotOrdersRequest.typeUrl || typeof o.market_id === "string" && typeof o.account_address === "string");
  },
  encode(message: QueryAccountAddressSpotOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.accountAddress !== "") {
      writer.uint32(18).string(message.accountAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountAddressSpotOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAddressSpotOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.accountAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAccountAddressSpotOrdersRequest>): QueryAccountAddressSpotOrdersRequest {
    const message = createBaseQueryAccountAddressSpotOrdersRequest();
    message.marketId = object.marketId ?? "";
    message.accountAddress = object.accountAddress ?? "";
    return message;
  },
  fromAmino(object: QueryAccountAddressSpotOrdersRequestAmino): QueryAccountAddressSpotOrdersRequest {
    const message = createBaseQueryAccountAddressSpotOrdersRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.account_address !== undefined && object.account_address !== null) {
      message.accountAddress = object.account_address;
    }
    return message;
  },
  toAmino(message: QueryAccountAddressSpotOrdersRequest): QueryAccountAddressSpotOrdersRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.account_address = message.accountAddress === "" ? undefined : message.accountAddress;
    return obj;
  },
  fromAminoMsg(object: QueryAccountAddressSpotOrdersRequestAminoMsg): QueryAccountAddressSpotOrdersRequest {
    return QueryAccountAddressSpotOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountAddressSpotOrdersRequestProtoMsg): QueryAccountAddressSpotOrdersRequest {
    return QueryAccountAddressSpotOrdersRequest.decode(message.value);
  },
  toProto(message: QueryAccountAddressSpotOrdersRequest): Uint8Array {
    return QueryAccountAddressSpotOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountAddressSpotOrdersRequest): QueryAccountAddressSpotOrdersRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryAccountAddressSpotOrdersRequest",
      value: QueryAccountAddressSpotOrdersRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTrimmedSpotLimitOrder(): TrimmedSpotLimitOrder {
  return {
    price: "",
    quantity: "",
    fillable: "",
    isBuy: false,
    orderHash: "",
    cid: ""
  };
}
export const TrimmedSpotLimitOrder = {
  typeUrl: "/injective.exchange.v1beta1.TrimmedSpotLimitOrder",
  is(o: any): o is TrimmedSpotLimitOrder {
    return o && (o.$typeUrl === TrimmedSpotLimitOrder.typeUrl || typeof o.price === "string" && typeof o.quantity === "string" && typeof o.fillable === "string" && typeof o.isBuy === "boolean" && typeof o.orderHash === "string" && typeof o.cid === "string");
  },
  isAmino(o: any): o is TrimmedSpotLimitOrderAmino {
    return o && (o.$typeUrl === TrimmedSpotLimitOrder.typeUrl || typeof o.price === "string" && typeof o.quantity === "string" && typeof o.fillable === "string" && typeof o.isBuy === "boolean" && typeof o.order_hash === "string" && typeof o.cid === "string");
  },
  encode(message: TrimmedSpotLimitOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(message.quantity);
    }
    if (message.fillable !== "") {
      writer.uint32(26).string(message.fillable);
    }
    if (message.isBuy === true) {
      writer.uint32(32).bool(message.isBuy);
    }
    if (message.orderHash !== "") {
      writer.uint32(42).string(message.orderHash);
    }
    if (message.cid !== "") {
      writer.uint32(50).string(message.cid);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TrimmedSpotLimitOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrimmedSpotLimitOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;
        case 2:
          message.quantity = reader.string();
          break;
        case 3:
          message.fillable = reader.string();
          break;
        case 4:
          message.isBuy = reader.bool();
          break;
        case 5:
          message.orderHash = reader.string();
          break;
        case 6:
          message.cid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TrimmedSpotLimitOrder>): TrimmedSpotLimitOrder {
    const message = createBaseTrimmedSpotLimitOrder();
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    message.fillable = object.fillable ?? "";
    message.isBuy = object.isBuy ?? false;
    message.orderHash = object.orderHash ?? "";
    message.cid = object.cid ?? "";
    return message;
  },
  fromAmino(object: TrimmedSpotLimitOrderAmino): TrimmedSpotLimitOrder {
    const message = createBaseTrimmedSpotLimitOrder();
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    }
    if (object.fillable !== undefined && object.fillable !== null) {
      message.fillable = object.fillable;
    }
    if (object.isBuy !== undefined && object.isBuy !== null) {
      message.isBuy = object.isBuy;
    }
    if (object.order_hash !== undefined && object.order_hash !== null) {
      message.orderHash = object.order_hash;
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    }
    return message;
  },
  toAmino(message: TrimmedSpotLimitOrder): TrimmedSpotLimitOrderAmino {
    const obj: any = {};
    obj.price = message.price === "" ? undefined : message.price;
    obj.quantity = message.quantity === "" ? undefined : message.quantity;
    obj.fillable = message.fillable === "" ? undefined : message.fillable;
    obj.isBuy = message.isBuy === false ? undefined : message.isBuy;
    obj.order_hash = message.orderHash === "" ? undefined : message.orderHash;
    obj.cid = message.cid === "" ? undefined : message.cid;
    return obj;
  },
  fromAminoMsg(object: TrimmedSpotLimitOrderAminoMsg): TrimmedSpotLimitOrder {
    return TrimmedSpotLimitOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: TrimmedSpotLimitOrderProtoMsg): TrimmedSpotLimitOrder {
    return TrimmedSpotLimitOrder.decode(message.value);
  },
  toProto(message: TrimmedSpotLimitOrder): Uint8Array {
    return TrimmedSpotLimitOrder.encode(message).finish();
  },
  toProtoMsg(message: TrimmedSpotLimitOrder): TrimmedSpotLimitOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TrimmedSpotLimitOrder",
      value: TrimmedSpotLimitOrder.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryTraderSpotOrdersResponse(): QueryTraderSpotOrdersResponse {
  return {
    orders: []
  };
}
export const QueryTraderSpotOrdersResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersResponse",
  is(o: any): o is QueryTraderSpotOrdersResponse {
    return o && (o.$typeUrl === QueryTraderSpotOrdersResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || TrimmedSpotLimitOrder.is(o.orders[0])));
  },
  isAmino(o: any): o is QueryTraderSpotOrdersResponseAmino {
    return o && (o.$typeUrl === QueryTraderSpotOrdersResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || TrimmedSpotLimitOrder.isAmino(o.orders[0])));
  },
  encode(message: QueryTraderSpotOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.orders) {
      TrimmedSpotLimitOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTraderSpotOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraderSpotOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(TrimmedSpotLimitOrder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTraderSpotOrdersResponse>): QueryTraderSpotOrdersResponse {
    const message = createBaseQueryTraderSpotOrdersResponse();
    message.orders = object.orders?.map(e => TrimmedSpotLimitOrder.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTraderSpotOrdersResponseAmino): QueryTraderSpotOrdersResponse {
    const message = createBaseQueryTraderSpotOrdersResponse();
    message.orders = object.orders?.map(e => TrimmedSpotLimitOrder.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTraderSpotOrdersResponse): QueryTraderSpotOrdersResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedSpotLimitOrder.toAmino(e) : undefined);
    } else {
      obj.orders = message.orders;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTraderSpotOrdersResponseAminoMsg): QueryTraderSpotOrdersResponse {
    return QueryTraderSpotOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraderSpotOrdersResponseProtoMsg): QueryTraderSpotOrdersResponse {
    return QueryTraderSpotOrdersResponse.decode(message.value);
  },
  toProto(message: QueryTraderSpotOrdersResponse): Uint8Array {
    return QueryTraderSpotOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTraderSpotOrdersResponse): QueryTraderSpotOrdersResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersResponse",
      value: QueryTraderSpotOrdersResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    TrimmedSpotLimitOrder.registerTypeUrl();
  }
};
function createBaseQueryAccountAddressSpotOrdersResponse(): QueryAccountAddressSpotOrdersResponse {
  return {
    orders: []
  };
}
export const QueryAccountAddressSpotOrdersResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryAccountAddressSpotOrdersResponse",
  is(o: any): o is QueryAccountAddressSpotOrdersResponse {
    return o && (o.$typeUrl === QueryAccountAddressSpotOrdersResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || TrimmedSpotLimitOrder.is(o.orders[0])));
  },
  isAmino(o: any): o is QueryAccountAddressSpotOrdersResponseAmino {
    return o && (o.$typeUrl === QueryAccountAddressSpotOrdersResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || TrimmedSpotLimitOrder.isAmino(o.orders[0])));
  },
  encode(message: QueryAccountAddressSpotOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.orders) {
      TrimmedSpotLimitOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountAddressSpotOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAddressSpotOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(TrimmedSpotLimitOrder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAccountAddressSpotOrdersResponse>): QueryAccountAddressSpotOrdersResponse {
    const message = createBaseQueryAccountAddressSpotOrdersResponse();
    message.orders = object.orders?.map(e => TrimmedSpotLimitOrder.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAccountAddressSpotOrdersResponseAmino): QueryAccountAddressSpotOrdersResponse {
    const message = createBaseQueryAccountAddressSpotOrdersResponse();
    message.orders = object.orders?.map(e => TrimmedSpotLimitOrder.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAccountAddressSpotOrdersResponse): QueryAccountAddressSpotOrdersResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedSpotLimitOrder.toAmino(e) : undefined);
    } else {
      obj.orders = message.orders;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAccountAddressSpotOrdersResponseAminoMsg): QueryAccountAddressSpotOrdersResponse {
    return QueryAccountAddressSpotOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountAddressSpotOrdersResponseProtoMsg): QueryAccountAddressSpotOrdersResponse {
    return QueryAccountAddressSpotOrdersResponse.decode(message.value);
  },
  toProto(message: QueryAccountAddressSpotOrdersResponse): Uint8Array {
    return QueryAccountAddressSpotOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountAddressSpotOrdersResponse): QueryAccountAddressSpotOrdersResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryAccountAddressSpotOrdersResponse",
      value: QueryAccountAddressSpotOrdersResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    TrimmedSpotLimitOrder.registerTypeUrl();
  }
};
function createBaseQuerySpotMidPriceAndTOBRequest(): QuerySpotMidPriceAndTOBRequest {
  return {
    marketId: ""
  };
}
export const QuerySpotMidPriceAndTOBRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBRequest",
  is(o: any): o is QuerySpotMidPriceAndTOBRequest {
    return o && (o.$typeUrl === QuerySpotMidPriceAndTOBRequest.typeUrl || typeof o.marketId === "string");
  },
  isAmino(o: any): o is QuerySpotMidPriceAndTOBRequestAmino {
    return o && (o.$typeUrl === QuerySpotMidPriceAndTOBRequest.typeUrl || typeof o.market_id === "string");
  },
  encode(message: QuerySpotMidPriceAndTOBRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotMidPriceAndTOBRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotMidPriceAndTOBRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySpotMidPriceAndTOBRequest>): QuerySpotMidPriceAndTOBRequest {
    const message = createBaseQuerySpotMidPriceAndTOBRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromAmino(object: QuerySpotMidPriceAndTOBRequestAmino): QuerySpotMidPriceAndTOBRequest {
    const message = createBaseQuerySpotMidPriceAndTOBRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QuerySpotMidPriceAndTOBRequest): QuerySpotMidPriceAndTOBRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QuerySpotMidPriceAndTOBRequestAminoMsg): QuerySpotMidPriceAndTOBRequest {
    return QuerySpotMidPriceAndTOBRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotMidPriceAndTOBRequestProtoMsg): QuerySpotMidPriceAndTOBRequest {
    return QuerySpotMidPriceAndTOBRequest.decode(message.value);
  },
  toProto(message: QuerySpotMidPriceAndTOBRequest): Uint8Array {
    return QuerySpotMidPriceAndTOBRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotMidPriceAndTOBRequest): QuerySpotMidPriceAndTOBRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBRequest",
      value: QuerySpotMidPriceAndTOBRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySpotMidPriceAndTOBResponse(): QuerySpotMidPriceAndTOBResponse {
  return {
    midPrice: undefined,
    bestBuyPrice: undefined,
    bestSellPrice: undefined
  };
}
export const QuerySpotMidPriceAndTOBResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBResponse",
  is(o: any): o is QuerySpotMidPriceAndTOBResponse {
    return o && o.$typeUrl === QuerySpotMidPriceAndTOBResponse.typeUrl;
  },
  isAmino(o: any): o is QuerySpotMidPriceAndTOBResponseAmino {
    return o && o.$typeUrl === QuerySpotMidPriceAndTOBResponse.typeUrl;
  },
  encode(message: QuerySpotMidPriceAndTOBResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.midPrice !== undefined) {
      writer.uint32(10).string(message.midPrice);
    }
    if (message.bestBuyPrice !== undefined) {
      writer.uint32(18).string(message.bestBuyPrice);
    }
    if (message.bestSellPrice !== undefined) {
      writer.uint32(26).string(message.bestSellPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotMidPriceAndTOBResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotMidPriceAndTOBResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.midPrice = reader.string();
          break;
        case 2:
          message.bestBuyPrice = reader.string();
          break;
        case 3:
          message.bestSellPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySpotMidPriceAndTOBResponse>): QuerySpotMidPriceAndTOBResponse {
    const message = createBaseQuerySpotMidPriceAndTOBResponse();
    message.midPrice = object.midPrice ?? undefined;
    message.bestBuyPrice = object.bestBuyPrice ?? undefined;
    message.bestSellPrice = object.bestSellPrice ?? undefined;
    return message;
  },
  fromAmino(object: QuerySpotMidPriceAndTOBResponseAmino): QuerySpotMidPriceAndTOBResponse {
    const message = createBaseQuerySpotMidPriceAndTOBResponse();
    if (object.mid_price !== undefined && object.mid_price !== null) {
      message.midPrice = object.mid_price;
    }
    if (object.best_buy_price !== undefined && object.best_buy_price !== null) {
      message.bestBuyPrice = object.best_buy_price;
    }
    if (object.best_sell_price !== undefined && object.best_sell_price !== null) {
      message.bestSellPrice = object.best_sell_price;
    }
    return message;
  },
  toAmino(message: QuerySpotMidPriceAndTOBResponse): QuerySpotMidPriceAndTOBResponseAmino {
    const obj: any = {};
    obj.mid_price = message.midPrice === null ? undefined : message.midPrice;
    obj.best_buy_price = message.bestBuyPrice === null ? undefined : message.bestBuyPrice;
    obj.best_sell_price = message.bestSellPrice === null ? undefined : message.bestSellPrice;
    return obj;
  },
  fromAminoMsg(object: QuerySpotMidPriceAndTOBResponseAminoMsg): QuerySpotMidPriceAndTOBResponse {
    return QuerySpotMidPriceAndTOBResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotMidPriceAndTOBResponseProtoMsg): QuerySpotMidPriceAndTOBResponse {
    return QuerySpotMidPriceAndTOBResponse.decode(message.value);
  },
  toProto(message: QuerySpotMidPriceAndTOBResponse): Uint8Array {
    return QuerySpotMidPriceAndTOBResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotMidPriceAndTOBResponse): QuerySpotMidPriceAndTOBResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBResponse",
      value: QuerySpotMidPriceAndTOBResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDerivativeMidPriceAndTOBRequest(): QueryDerivativeMidPriceAndTOBRequest {
  return {
    marketId: ""
  };
}
export const QueryDerivativeMidPriceAndTOBRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBRequest",
  is(o: any): o is QueryDerivativeMidPriceAndTOBRequest {
    return o && (o.$typeUrl === QueryDerivativeMidPriceAndTOBRequest.typeUrl || typeof o.marketId === "string");
  },
  isAmino(o: any): o is QueryDerivativeMidPriceAndTOBRequestAmino {
    return o && (o.$typeUrl === QueryDerivativeMidPriceAndTOBRequest.typeUrl || typeof o.market_id === "string");
  },
  encode(message: QueryDerivativeMidPriceAndTOBRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeMidPriceAndTOBRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeMidPriceAndTOBRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDerivativeMidPriceAndTOBRequest>): QueryDerivativeMidPriceAndTOBRequest {
    const message = createBaseQueryDerivativeMidPriceAndTOBRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromAmino(object: QueryDerivativeMidPriceAndTOBRequestAmino): QueryDerivativeMidPriceAndTOBRequest {
    const message = createBaseQueryDerivativeMidPriceAndTOBRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryDerivativeMidPriceAndTOBRequest): QueryDerivativeMidPriceAndTOBRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeMidPriceAndTOBRequestAminoMsg): QueryDerivativeMidPriceAndTOBRequest {
    return QueryDerivativeMidPriceAndTOBRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeMidPriceAndTOBRequestProtoMsg): QueryDerivativeMidPriceAndTOBRequest {
    return QueryDerivativeMidPriceAndTOBRequest.decode(message.value);
  },
  toProto(message: QueryDerivativeMidPriceAndTOBRequest): Uint8Array {
    return QueryDerivativeMidPriceAndTOBRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeMidPriceAndTOBRequest): QueryDerivativeMidPriceAndTOBRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBRequest",
      value: QueryDerivativeMidPriceAndTOBRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDerivativeMidPriceAndTOBResponse(): QueryDerivativeMidPriceAndTOBResponse {
  return {
    midPrice: undefined,
    bestBuyPrice: undefined,
    bestSellPrice: undefined
  };
}
export const QueryDerivativeMidPriceAndTOBResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBResponse",
  is(o: any): o is QueryDerivativeMidPriceAndTOBResponse {
    return o && o.$typeUrl === QueryDerivativeMidPriceAndTOBResponse.typeUrl;
  },
  isAmino(o: any): o is QueryDerivativeMidPriceAndTOBResponseAmino {
    return o && o.$typeUrl === QueryDerivativeMidPriceAndTOBResponse.typeUrl;
  },
  encode(message: QueryDerivativeMidPriceAndTOBResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.midPrice !== undefined) {
      writer.uint32(10).string(message.midPrice);
    }
    if (message.bestBuyPrice !== undefined) {
      writer.uint32(18).string(message.bestBuyPrice);
    }
    if (message.bestSellPrice !== undefined) {
      writer.uint32(26).string(message.bestSellPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeMidPriceAndTOBResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeMidPriceAndTOBResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.midPrice = reader.string();
          break;
        case 2:
          message.bestBuyPrice = reader.string();
          break;
        case 3:
          message.bestSellPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDerivativeMidPriceAndTOBResponse>): QueryDerivativeMidPriceAndTOBResponse {
    const message = createBaseQueryDerivativeMidPriceAndTOBResponse();
    message.midPrice = object.midPrice ?? undefined;
    message.bestBuyPrice = object.bestBuyPrice ?? undefined;
    message.bestSellPrice = object.bestSellPrice ?? undefined;
    return message;
  },
  fromAmino(object: QueryDerivativeMidPriceAndTOBResponseAmino): QueryDerivativeMidPriceAndTOBResponse {
    const message = createBaseQueryDerivativeMidPriceAndTOBResponse();
    if (object.mid_price !== undefined && object.mid_price !== null) {
      message.midPrice = object.mid_price;
    }
    if (object.best_buy_price !== undefined && object.best_buy_price !== null) {
      message.bestBuyPrice = object.best_buy_price;
    }
    if (object.best_sell_price !== undefined && object.best_sell_price !== null) {
      message.bestSellPrice = object.best_sell_price;
    }
    return message;
  },
  toAmino(message: QueryDerivativeMidPriceAndTOBResponse): QueryDerivativeMidPriceAndTOBResponseAmino {
    const obj: any = {};
    obj.mid_price = message.midPrice === null ? undefined : message.midPrice;
    obj.best_buy_price = message.bestBuyPrice === null ? undefined : message.bestBuyPrice;
    obj.best_sell_price = message.bestSellPrice === null ? undefined : message.bestSellPrice;
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeMidPriceAndTOBResponseAminoMsg): QueryDerivativeMidPriceAndTOBResponse {
    return QueryDerivativeMidPriceAndTOBResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeMidPriceAndTOBResponseProtoMsg): QueryDerivativeMidPriceAndTOBResponse {
    return QueryDerivativeMidPriceAndTOBResponse.decode(message.value);
  },
  toProto(message: QueryDerivativeMidPriceAndTOBResponse): Uint8Array {
    return QueryDerivativeMidPriceAndTOBResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeMidPriceAndTOBResponse): QueryDerivativeMidPriceAndTOBResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBResponse",
      value: QueryDerivativeMidPriceAndTOBResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDerivativeOrderbookRequest(): QueryDerivativeOrderbookRequest {
  return {
    marketId: "",
    limit: BigInt(0),
    limitCumulativeNotional: undefined
  };
}
export const QueryDerivativeOrderbookRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookRequest",
  is(o: any): o is QueryDerivativeOrderbookRequest {
    return o && (o.$typeUrl === QueryDerivativeOrderbookRequest.typeUrl || typeof o.marketId === "string" && typeof o.limit === "bigint");
  },
  isAmino(o: any): o is QueryDerivativeOrderbookRequestAmino {
    return o && (o.$typeUrl === QueryDerivativeOrderbookRequest.typeUrl || typeof o.market_id === "string" && typeof o.limit === "bigint");
  },
  encode(message: QueryDerivativeOrderbookRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(16).uint64(message.limit);
    }
    if (message.limitCumulativeNotional !== undefined) {
      writer.uint32(26).string(message.limitCumulativeNotional);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeOrderbookRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeOrderbookRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.limit = reader.uint64();
          break;
        case 3:
          message.limitCumulativeNotional = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDerivativeOrderbookRequest>): QueryDerivativeOrderbookRequest {
    const message = createBaseQueryDerivativeOrderbookRequest();
    message.marketId = object.marketId ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
    message.limitCumulativeNotional = object.limitCumulativeNotional ?? undefined;
    return message;
  },
  fromAmino(object: QueryDerivativeOrderbookRequestAmino): QueryDerivativeOrderbookRequest {
    const message = createBaseQueryDerivativeOrderbookRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = BigInt(object.limit);
    }
    if (object.limit_cumulative_notional !== undefined && object.limit_cumulative_notional !== null) {
      message.limitCumulativeNotional = object.limit_cumulative_notional;
    }
    return message;
  },
  toAmino(message: QueryDerivativeOrderbookRequest): QueryDerivativeOrderbookRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.limit = message.limit !== BigInt(0) ? message.limit?.toString() : undefined;
    obj.limit_cumulative_notional = message.limitCumulativeNotional === null ? undefined : message.limitCumulativeNotional;
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeOrderbookRequestAminoMsg): QueryDerivativeOrderbookRequest {
    return QueryDerivativeOrderbookRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeOrderbookRequestProtoMsg): QueryDerivativeOrderbookRequest {
    return QueryDerivativeOrderbookRequest.decode(message.value);
  },
  toProto(message: QueryDerivativeOrderbookRequest): Uint8Array {
    return QueryDerivativeOrderbookRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeOrderbookRequest): QueryDerivativeOrderbookRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookRequest",
      value: QueryDerivativeOrderbookRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDerivativeOrderbookResponse(): QueryDerivativeOrderbookResponse {
  return {
    buysPriceLevel: [],
    sellsPriceLevel: []
  };
}
export const QueryDerivativeOrderbookResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookResponse",
  is(o: any): o is QueryDerivativeOrderbookResponse {
    return o && (o.$typeUrl === QueryDerivativeOrderbookResponse.typeUrl || Array.isArray(o.buysPriceLevel) && (!o.buysPriceLevel.length || Level.is(o.buysPriceLevel[0])) && Array.isArray(o.sellsPriceLevel) && (!o.sellsPriceLevel.length || Level.is(o.sellsPriceLevel[0])));
  },
  isAmino(o: any): o is QueryDerivativeOrderbookResponseAmino {
    return o && (o.$typeUrl === QueryDerivativeOrderbookResponse.typeUrl || Array.isArray(o.buys_price_level) && (!o.buys_price_level.length || Level.isAmino(o.buys_price_level[0])) && Array.isArray(o.sells_price_level) && (!o.sells_price_level.length || Level.isAmino(o.sells_price_level[0])));
  },
  encode(message: QueryDerivativeOrderbookResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.buysPriceLevel) {
      Level.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.sellsPriceLevel) {
      Level.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeOrderbookResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeOrderbookResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buysPriceLevel.push(Level.decode(reader, reader.uint32()));
          break;
        case 2:
          message.sellsPriceLevel.push(Level.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDerivativeOrderbookResponse>): QueryDerivativeOrderbookResponse {
    const message = createBaseQueryDerivativeOrderbookResponse();
    message.buysPriceLevel = object.buysPriceLevel?.map(e => Level.fromPartial(e)) || [];
    message.sellsPriceLevel = object.sellsPriceLevel?.map(e => Level.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDerivativeOrderbookResponseAmino): QueryDerivativeOrderbookResponse {
    const message = createBaseQueryDerivativeOrderbookResponse();
    message.buysPriceLevel = object.buys_price_level?.map(e => Level.fromAmino(e)) || [];
    message.sellsPriceLevel = object.sells_price_level?.map(e => Level.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryDerivativeOrderbookResponse): QueryDerivativeOrderbookResponseAmino {
    const obj: any = {};
    if (message.buysPriceLevel) {
      obj.buys_price_level = message.buysPriceLevel.map(e => e ? Level.toAmino(e) : undefined);
    } else {
      obj.buys_price_level = message.buysPriceLevel;
    }
    if (message.sellsPriceLevel) {
      obj.sells_price_level = message.sellsPriceLevel.map(e => e ? Level.toAmino(e) : undefined);
    } else {
      obj.sells_price_level = message.sellsPriceLevel;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeOrderbookResponseAminoMsg): QueryDerivativeOrderbookResponse {
    return QueryDerivativeOrderbookResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeOrderbookResponseProtoMsg): QueryDerivativeOrderbookResponse {
    return QueryDerivativeOrderbookResponse.decode(message.value);
  },
  toProto(message: QueryDerivativeOrderbookResponse): Uint8Array {
    return QueryDerivativeOrderbookResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeOrderbookResponse): QueryDerivativeOrderbookResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookResponse",
      value: QueryDerivativeOrderbookResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Level.registerTypeUrl();
  }
};
function createBaseQueryTraderSpotOrdersToCancelUpToAmountRequest(): QueryTraderSpotOrdersToCancelUpToAmountRequest {
  return {
    marketId: "",
    subaccountId: "",
    baseAmount: "",
    quoteAmount: "",
    strategy: 0,
    referencePrice: undefined
  };
}
export const QueryTraderSpotOrdersToCancelUpToAmountRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersToCancelUpToAmountRequest",
  is(o: any): o is QueryTraderSpotOrdersToCancelUpToAmountRequest {
    return o && (o.$typeUrl === QueryTraderSpotOrdersToCancelUpToAmountRequest.typeUrl || typeof o.marketId === "string" && typeof o.subaccountId === "string" && typeof o.baseAmount === "string" && typeof o.quoteAmount === "string" && isSet(o.strategy));
  },
  isAmino(o: any): o is QueryTraderSpotOrdersToCancelUpToAmountRequestAmino {
    return o && (o.$typeUrl === QueryTraderSpotOrdersToCancelUpToAmountRequest.typeUrl || typeof o.market_id === "string" && typeof o.subaccount_id === "string" && typeof o.base_amount === "string" && typeof o.quote_amount === "string" && isSet(o.strategy));
  },
  encode(message: QueryTraderSpotOrdersToCancelUpToAmountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    if (message.baseAmount !== "") {
      writer.uint32(26).string(message.baseAmount);
    }
    if (message.quoteAmount !== "") {
      writer.uint32(34).string(message.quoteAmount);
    }
    if (message.strategy !== 0) {
      writer.uint32(40).int32(message.strategy);
    }
    if (message.referencePrice !== undefined) {
      writer.uint32(50).string(message.referencePrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTraderSpotOrdersToCancelUpToAmountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraderSpotOrdersToCancelUpToAmountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.subaccountId = reader.string();
          break;
        case 3:
          message.baseAmount = reader.string();
          break;
        case 4:
          message.quoteAmount = reader.string();
          break;
        case 5:
          message.strategy = (reader.int32() as any);
          break;
        case 6:
          message.referencePrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTraderSpotOrdersToCancelUpToAmountRequest>): QueryTraderSpotOrdersToCancelUpToAmountRequest {
    const message = createBaseQueryTraderSpotOrdersToCancelUpToAmountRequest();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.baseAmount = object.baseAmount ?? "";
    message.quoteAmount = object.quoteAmount ?? "";
    message.strategy = object.strategy ?? 0;
    message.referencePrice = object.referencePrice ?? undefined;
    return message;
  },
  fromAmino(object: QueryTraderSpotOrdersToCancelUpToAmountRequestAmino): QueryTraderSpotOrdersToCancelUpToAmountRequest {
    const message = createBaseQueryTraderSpotOrdersToCancelUpToAmountRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    if (object.base_amount !== undefined && object.base_amount !== null) {
      message.baseAmount = object.base_amount;
    }
    if (object.quote_amount !== undefined && object.quote_amount !== null) {
      message.quoteAmount = object.quote_amount;
    }
    if (object.strategy !== undefined && object.strategy !== null) {
      message.strategy = object.strategy;
    }
    if (object.reference_price !== undefined && object.reference_price !== null) {
      message.referencePrice = object.reference_price;
    }
    return message;
  },
  toAmino(message: QueryTraderSpotOrdersToCancelUpToAmountRequest): QueryTraderSpotOrdersToCancelUpToAmountRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.base_amount = message.baseAmount === "" ? undefined : message.baseAmount;
    obj.quote_amount = message.quoteAmount === "" ? undefined : message.quoteAmount;
    obj.strategy = message.strategy === 0 ? undefined : message.strategy;
    obj.reference_price = message.referencePrice === null ? undefined : message.referencePrice;
    return obj;
  },
  fromAminoMsg(object: QueryTraderSpotOrdersToCancelUpToAmountRequestAminoMsg): QueryTraderSpotOrdersToCancelUpToAmountRequest {
    return QueryTraderSpotOrdersToCancelUpToAmountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraderSpotOrdersToCancelUpToAmountRequestProtoMsg): QueryTraderSpotOrdersToCancelUpToAmountRequest {
    return QueryTraderSpotOrdersToCancelUpToAmountRequest.decode(message.value);
  },
  toProto(message: QueryTraderSpotOrdersToCancelUpToAmountRequest): Uint8Array {
    return QueryTraderSpotOrdersToCancelUpToAmountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTraderSpotOrdersToCancelUpToAmountRequest): QueryTraderSpotOrdersToCancelUpToAmountRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersToCancelUpToAmountRequest",
      value: QueryTraderSpotOrdersToCancelUpToAmountRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryTraderDerivativeOrdersToCancelUpToAmountRequest(): QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
  return {
    marketId: "",
    subaccountId: "",
    quoteAmount: "",
    strategy: 0,
    referencePrice: undefined
  };
}
export const QueryTraderDerivativeOrdersToCancelUpToAmountRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersToCancelUpToAmountRequest",
  is(o: any): o is QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
    return o && (o.$typeUrl === QueryTraderDerivativeOrdersToCancelUpToAmountRequest.typeUrl || typeof o.marketId === "string" && typeof o.subaccountId === "string" && typeof o.quoteAmount === "string" && isSet(o.strategy));
  },
  isAmino(o: any): o is QueryTraderDerivativeOrdersToCancelUpToAmountRequestAmino {
    return o && (o.$typeUrl === QueryTraderDerivativeOrdersToCancelUpToAmountRequest.typeUrl || typeof o.market_id === "string" && typeof o.subaccount_id === "string" && typeof o.quote_amount === "string" && isSet(o.strategy));
  },
  encode(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    if (message.quoteAmount !== "") {
      writer.uint32(26).string(message.quoteAmount);
    }
    if (message.strategy !== 0) {
      writer.uint32(32).int32(message.strategy);
    }
    if (message.referencePrice !== undefined) {
      writer.uint32(42).string(message.referencePrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraderDerivativeOrdersToCancelUpToAmountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.subaccountId = reader.string();
          break;
        case 3:
          message.quoteAmount = reader.string();
          break;
        case 4:
          message.strategy = (reader.int32() as any);
          break;
        case 5:
          message.referencePrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTraderDerivativeOrdersToCancelUpToAmountRequest>): QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
    const message = createBaseQueryTraderDerivativeOrdersToCancelUpToAmountRequest();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.quoteAmount = object.quoteAmount ?? "";
    message.strategy = object.strategy ?? 0;
    message.referencePrice = object.referencePrice ?? undefined;
    return message;
  },
  fromAmino(object: QueryTraderDerivativeOrdersToCancelUpToAmountRequestAmino): QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
    const message = createBaseQueryTraderDerivativeOrdersToCancelUpToAmountRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    if (object.quote_amount !== undefined && object.quote_amount !== null) {
      message.quoteAmount = object.quote_amount;
    }
    if (object.strategy !== undefined && object.strategy !== null) {
      message.strategy = object.strategy;
    }
    if (object.reference_price !== undefined && object.reference_price !== null) {
      message.referencePrice = object.reference_price;
    }
    return message;
  },
  toAmino(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest): QueryTraderDerivativeOrdersToCancelUpToAmountRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.quote_amount = message.quoteAmount === "" ? undefined : message.quoteAmount;
    obj.strategy = message.strategy === 0 ? undefined : message.strategy;
    obj.reference_price = message.referencePrice === null ? undefined : message.referencePrice;
    return obj;
  },
  fromAminoMsg(object: QueryTraderDerivativeOrdersToCancelUpToAmountRequestAminoMsg): QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
    return QueryTraderDerivativeOrdersToCancelUpToAmountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequestProtoMsg): QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
    return QueryTraderDerivativeOrdersToCancelUpToAmountRequest.decode(message.value);
  },
  toProto(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest): Uint8Array {
    return QueryTraderDerivativeOrdersToCancelUpToAmountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest): QueryTraderDerivativeOrdersToCancelUpToAmountRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersToCancelUpToAmountRequest",
      value: QueryTraderDerivativeOrdersToCancelUpToAmountRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryTraderDerivativeOrdersRequest(): QueryTraderDerivativeOrdersRequest {
  return {
    marketId: "",
    subaccountId: ""
  };
}
export const QueryTraderDerivativeOrdersRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersRequest",
  is(o: any): o is QueryTraderDerivativeOrdersRequest {
    return o && (o.$typeUrl === QueryTraderDerivativeOrdersRequest.typeUrl || typeof o.marketId === "string" && typeof o.subaccountId === "string");
  },
  isAmino(o: any): o is QueryTraderDerivativeOrdersRequestAmino {
    return o && (o.$typeUrl === QueryTraderDerivativeOrdersRequest.typeUrl || typeof o.market_id === "string" && typeof o.subaccount_id === "string");
  },
  encode(message: QueryTraderDerivativeOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTraderDerivativeOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraderDerivativeOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.subaccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTraderDerivativeOrdersRequest>): QueryTraderDerivativeOrdersRequest {
    const message = createBaseQueryTraderDerivativeOrdersRequest();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    return message;
  },
  fromAmino(object: QueryTraderDerivativeOrdersRequestAmino): QueryTraderDerivativeOrdersRequest {
    const message = createBaseQueryTraderDerivativeOrdersRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    return message;
  },
  toAmino(message: QueryTraderDerivativeOrdersRequest): QueryTraderDerivativeOrdersRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    return obj;
  },
  fromAminoMsg(object: QueryTraderDerivativeOrdersRequestAminoMsg): QueryTraderDerivativeOrdersRequest {
    return QueryTraderDerivativeOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraderDerivativeOrdersRequestProtoMsg): QueryTraderDerivativeOrdersRequest {
    return QueryTraderDerivativeOrdersRequest.decode(message.value);
  },
  toProto(message: QueryTraderDerivativeOrdersRequest): Uint8Array {
    return QueryTraderDerivativeOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTraderDerivativeOrdersRequest): QueryTraderDerivativeOrdersRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersRequest",
      value: QueryTraderDerivativeOrdersRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryAccountAddressDerivativeOrdersRequest(): QueryAccountAddressDerivativeOrdersRequest {
  return {
    marketId: "",
    accountAddress: ""
  };
}
export const QueryAccountAddressDerivativeOrdersRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryAccountAddressDerivativeOrdersRequest",
  is(o: any): o is QueryAccountAddressDerivativeOrdersRequest {
    return o && (o.$typeUrl === QueryAccountAddressDerivativeOrdersRequest.typeUrl || typeof o.marketId === "string" && typeof o.accountAddress === "string");
  },
  isAmino(o: any): o is QueryAccountAddressDerivativeOrdersRequestAmino {
    return o && (o.$typeUrl === QueryAccountAddressDerivativeOrdersRequest.typeUrl || typeof o.market_id === "string" && typeof o.account_address === "string");
  },
  encode(message: QueryAccountAddressDerivativeOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.accountAddress !== "") {
      writer.uint32(18).string(message.accountAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountAddressDerivativeOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAddressDerivativeOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.accountAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAccountAddressDerivativeOrdersRequest>): QueryAccountAddressDerivativeOrdersRequest {
    const message = createBaseQueryAccountAddressDerivativeOrdersRequest();
    message.marketId = object.marketId ?? "";
    message.accountAddress = object.accountAddress ?? "";
    return message;
  },
  fromAmino(object: QueryAccountAddressDerivativeOrdersRequestAmino): QueryAccountAddressDerivativeOrdersRequest {
    const message = createBaseQueryAccountAddressDerivativeOrdersRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.account_address !== undefined && object.account_address !== null) {
      message.accountAddress = object.account_address;
    }
    return message;
  },
  toAmino(message: QueryAccountAddressDerivativeOrdersRequest): QueryAccountAddressDerivativeOrdersRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.account_address = message.accountAddress === "" ? undefined : message.accountAddress;
    return obj;
  },
  fromAminoMsg(object: QueryAccountAddressDerivativeOrdersRequestAminoMsg): QueryAccountAddressDerivativeOrdersRequest {
    return QueryAccountAddressDerivativeOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountAddressDerivativeOrdersRequestProtoMsg): QueryAccountAddressDerivativeOrdersRequest {
    return QueryAccountAddressDerivativeOrdersRequest.decode(message.value);
  },
  toProto(message: QueryAccountAddressDerivativeOrdersRequest): Uint8Array {
    return QueryAccountAddressDerivativeOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountAddressDerivativeOrdersRequest): QueryAccountAddressDerivativeOrdersRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryAccountAddressDerivativeOrdersRequest",
      value: QueryAccountAddressDerivativeOrdersRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTrimmedDerivativeLimitOrder(): TrimmedDerivativeLimitOrder {
  return {
    price: "",
    quantity: "",
    margin: "",
    fillable: "",
    isBuy: false,
    orderHash: "",
    cid: ""
  };
}
export const TrimmedDerivativeLimitOrder = {
  typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeLimitOrder",
  is(o: any): o is TrimmedDerivativeLimitOrder {
    return o && (o.$typeUrl === TrimmedDerivativeLimitOrder.typeUrl || typeof o.price === "string" && typeof o.quantity === "string" && typeof o.margin === "string" && typeof o.fillable === "string" && typeof o.isBuy === "boolean" && typeof o.orderHash === "string" && typeof o.cid === "string");
  },
  isAmino(o: any): o is TrimmedDerivativeLimitOrderAmino {
    return o && (o.$typeUrl === TrimmedDerivativeLimitOrder.typeUrl || typeof o.price === "string" && typeof o.quantity === "string" && typeof o.margin === "string" && typeof o.fillable === "string" && typeof o.isBuy === "boolean" && typeof o.order_hash === "string" && typeof o.cid === "string");
  },
  encode(message: TrimmedDerivativeLimitOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(message.quantity);
    }
    if (message.margin !== "") {
      writer.uint32(26).string(message.margin);
    }
    if (message.fillable !== "") {
      writer.uint32(34).string(message.fillable);
    }
    if (message.isBuy === true) {
      writer.uint32(40).bool(message.isBuy);
    }
    if (message.orderHash !== "") {
      writer.uint32(50).string(message.orderHash);
    }
    if (message.cid !== "") {
      writer.uint32(58).string(message.cid);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TrimmedDerivativeLimitOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrimmedDerivativeLimitOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;
        case 2:
          message.quantity = reader.string();
          break;
        case 3:
          message.margin = reader.string();
          break;
        case 4:
          message.fillable = reader.string();
          break;
        case 5:
          message.isBuy = reader.bool();
          break;
        case 6:
          message.orderHash = reader.string();
          break;
        case 7:
          message.cid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TrimmedDerivativeLimitOrder>): TrimmedDerivativeLimitOrder {
    const message = createBaseTrimmedDerivativeLimitOrder();
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    message.margin = object.margin ?? "";
    message.fillable = object.fillable ?? "";
    message.isBuy = object.isBuy ?? false;
    message.orderHash = object.orderHash ?? "";
    message.cid = object.cid ?? "";
    return message;
  },
  fromAmino(object: TrimmedDerivativeLimitOrderAmino): TrimmedDerivativeLimitOrder {
    const message = createBaseTrimmedDerivativeLimitOrder();
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    }
    if (object.margin !== undefined && object.margin !== null) {
      message.margin = object.margin;
    }
    if (object.fillable !== undefined && object.fillable !== null) {
      message.fillable = object.fillable;
    }
    if (object.isBuy !== undefined && object.isBuy !== null) {
      message.isBuy = object.isBuy;
    }
    if (object.order_hash !== undefined && object.order_hash !== null) {
      message.orderHash = object.order_hash;
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    }
    return message;
  },
  toAmino(message: TrimmedDerivativeLimitOrder): TrimmedDerivativeLimitOrderAmino {
    const obj: any = {};
    obj.price = message.price === "" ? undefined : message.price;
    obj.quantity = message.quantity === "" ? undefined : message.quantity;
    obj.margin = message.margin === "" ? undefined : message.margin;
    obj.fillable = message.fillable === "" ? undefined : message.fillable;
    obj.isBuy = message.isBuy ?? false;
    obj.order_hash = message.orderHash === "" ? undefined : message.orderHash;
    obj.cid = message.cid === "" ? undefined : message.cid;
    return obj;
  },
  fromAminoMsg(object: TrimmedDerivativeLimitOrderAminoMsg): TrimmedDerivativeLimitOrder {
    return TrimmedDerivativeLimitOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: TrimmedDerivativeLimitOrderProtoMsg): TrimmedDerivativeLimitOrder {
    return TrimmedDerivativeLimitOrder.decode(message.value);
  },
  toProto(message: TrimmedDerivativeLimitOrder): Uint8Array {
    return TrimmedDerivativeLimitOrder.encode(message).finish();
  },
  toProtoMsg(message: TrimmedDerivativeLimitOrder): TrimmedDerivativeLimitOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeLimitOrder",
      value: TrimmedDerivativeLimitOrder.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryTraderDerivativeOrdersResponse(): QueryTraderDerivativeOrdersResponse {
  return {
    orders: []
  };
}
export const QueryTraderDerivativeOrdersResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersResponse",
  is(o: any): o is QueryTraderDerivativeOrdersResponse {
    return o && (o.$typeUrl === QueryTraderDerivativeOrdersResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || TrimmedDerivativeLimitOrder.is(o.orders[0])));
  },
  isAmino(o: any): o is QueryTraderDerivativeOrdersResponseAmino {
    return o && (o.$typeUrl === QueryTraderDerivativeOrdersResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || TrimmedDerivativeLimitOrder.isAmino(o.orders[0])));
  },
  encode(message: QueryTraderDerivativeOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.orders) {
      TrimmedDerivativeLimitOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTraderDerivativeOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraderDerivativeOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(TrimmedDerivativeLimitOrder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTraderDerivativeOrdersResponse>): QueryTraderDerivativeOrdersResponse {
    const message = createBaseQueryTraderDerivativeOrdersResponse();
    message.orders = object.orders?.map(e => TrimmedDerivativeLimitOrder.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTraderDerivativeOrdersResponseAmino): QueryTraderDerivativeOrdersResponse {
    const message = createBaseQueryTraderDerivativeOrdersResponse();
    message.orders = object.orders?.map(e => TrimmedDerivativeLimitOrder.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTraderDerivativeOrdersResponse): QueryTraderDerivativeOrdersResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedDerivativeLimitOrder.toAmino(e) : undefined);
    } else {
      obj.orders = message.orders;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTraderDerivativeOrdersResponseAminoMsg): QueryTraderDerivativeOrdersResponse {
    return QueryTraderDerivativeOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraderDerivativeOrdersResponseProtoMsg): QueryTraderDerivativeOrdersResponse {
    return QueryTraderDerivativeOrdersResponse.decode(message.value);
  },
  toProto(message: QueryTraderDerivativeOrdersResponse): Uint8Array {
    return QueryTraderDerivativeOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTraderDerivativeOrdersResponse): QueryTraderDerivativeOrdersResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersResponse",
      value: QueryTraderDerivativeOrdersResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    TrimmedDerivativeLimitOrder.registerTypeUrl();
  }
};
function createBaseQueryAccountAddressDerivativeOrdersResponse(): QueryAccountAddressDerivativeOrdersResponse {
  return {
    orders: []
  };
}
export const QueryAccountAddressDerivativeOrdersResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryAccountAddressDerivativeOrdersResponse",
  is(o: any): o is QueryAccountAddressDerivativeOrdersResponse {
    return o && (o.$typeUrl === QueryAccountAddressDerivativeOrdersResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || TrimmedDerivativeLimitOrder.is(o.orders[0])));
  },
  isAmino(o: any): o is QueryAccountAddressDerivativeOrdersResponseAmino {
    return o && (o.$typeUrl === QueryAccountAddressDerivativeOrdersResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || TrimmedDerivativeLimitOrder.isAmino(o.orders[0])));
  },
  encode(message: QueryAccountAddressDerivativeOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.orders) {
      TrimmedDerivativeLimitOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountAddressDerivativeOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAddressDerivativeOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(TrimmedDerivativeLimitOrder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAccountAddressDerivativeOrdersResponse>): QueryAccountAddressDerivativeOrdersResponse {
    const message = createBaseQueryAccountAddressDerivativeOrdersResponse();
    message.orders = object.orders?.map(e => TrimmedDerivativeLimitOrder.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAccountAddressDerivativeOrdersResponseAmino): QueryAccountAddressDerivativeOrdersResponse {
    const message = createBaseQueryAccountAddressDerivativeOrdersResponse();
    message.orders = object.orders?.map(e => TrimmedDerivativeLimitOrder.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAccountAddressDerivativeOrdersResponse): QueryAccountAddressDerivativeOrdersResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedDerivativeLimitOrder.toAmino(e) : undefined);
    } else {
      obj.orders = message.orders;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAccountAddressDerivativeOrdersResponseAminoMsg): QueryAccountAddressDerivativeOrdersResponse {
    return QueryAccountAddressDerivativeOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountAddressDerivativeOrdersResponseProtoMsg): QueryAccountAddressDerivativeOrdersResponse {
    return QueryAccountAddressDerivativeOrdersResponse.decode(message.value);
  },
  toProto(message: QueryAccountAddressDerivativeOrdersResponse): Uint8Array {
    return QueryAccountAddressDerivativeOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountAddressDerivativeOrdersResponse): QueryAccountAddressDerivativeOrdersResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryAccountAddressDerivativeOrdersResponse",
      value: QueryAccountAddressDerivativeOrdersResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    TrimmedDerivativeLimitOrder.registerTypeUrl();
  }
};
function createBaseQueryDerivativeOrdersByHashesRequest(): QueryDerivativeOrdersByHashesRequest {
  return {
    marketId: "",
    subaccountId: "",
    orderHashes: []
  };
}
export const QueryDerivativeOrdersByHashesRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesRequest",
  is(o: any): o is QueryDerivativeOrdersByHashesRequest {
    return o && (o.$typeUrl === QueryDerivativeOrdersByHashesRequest.typeUrl || typeof o.marketId === "string" && typeof o.subaccountId === "string" && Array.isArray(o.orderHashes) && (!o.orderHashes.length || typeof o.orderHashes[0] === "string"));
  },
  isAmino(o: any): o is QueryDerivativeOrdersByHashesRequestAmino {
    return o && (o.$typeUrl === QueryDerivativeOrdersByHashesRequest.typeUrl || typeof o.market_id === "string" && typeof o.subaccount_id === "string" && Array.isArray(o.order_hashes) && (!o.order_hashes.length || typeof o.order_hashes[0] === "string"));
  },
  encode(message: QueryDerivativeOrdersByHashesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    for (const v of message.orderHashes) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeOrdersByHashesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeOrdersByHashesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.subaccountId = reader.string();
          break;
        case 3:
          message.orderHashes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDerivativeOrdersByHashesRequest>): QueryDerivativeOrdersByHashesRequest {
    const message = createBaseQueryDerivativeOrdersByHashesRequest();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.orderHashes = object.orderHashes?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryDerivativeOrdersByHashesRequestAmino): QueryDerivativeOrdersByHashesRequest {
    const message = createBaseQueryDerivativeOrdersByHashesRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    message.orderHashes = object.order_hashes?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryDerivativeOrdersByHashesRequest): QueryDerivativeOrdersByHashesRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    if (message.orderHashes) {
      obj.order_hashes = message.orderHashes.map(e => e);
    } else {
      obj.order_hashes = message.orderHashes;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeOrdersByHashesRequestAminoMsg): QueryDerivativeOrdersByHashesRequest {
    return QueryDerivativeOrdersByHashesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeOrdersByHashesRequestProtoMsg): QueryDerivativeOrdersByHashesRequest {
    return QueryDerivativeOrdersByHashesRequest.decode(message.value);
  },
  toProto(message: QueryDerivativeOrdersByHashesRequest): Uint8Array {
    return QueryDerivativeOrdersByHashesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeOrdersByHashesRequest): QueryDerivativeOrdersByHashesRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesRequest",
      value: QueryDerivativeOrdersByHashesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDerivativeOrdersByHashesResponse(): QueryDerivativeOrdersByHashesResponse {
  return {
    orders: []
  };
}
export const QueryDerivativeOrdersByHashesResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesResponse",
  is(o: any): o is QueryDerivativeOrdersByHashesResponse {
    return o && (o.$typeUrl === QueryDerivativeOrdersByHashesResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || TrimmedDerivativeLimitOrder.is(o.orders[0])));
  },
  isAmino(o: any): o is QueryDerivativeOrdersByHashesResponseAmino {
    return o && (o.$typeUrl === QueryDerivativeOrdersByHashesResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || TrimmedDerivativeLimitOrder.isAmino(o.orders[0])));
  },
  encode(message: QueryDerivativeOrdersByHashesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.orders) {
      TrimmedDerivativeLimitOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeOrdersByHashesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeOrdersByHashesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(TrimmedDerivativeLimitOrder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDerivativeOrdersByHashesResponse>): QueryDerivativeOrdersByHashesResponse {
    const message = createBaseQueryDerivativeOrdersByHashesResponse();
    message.orders = object.orders?.map(e => TrimmedDerivativeLimitOrder.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDerivativeOrdersByHashesResponseAmino): QueryDerivativeOrdersByHashesResponse {
    const message = createBaseQueryDerivativeOrdersByHashesResponse();
    message.orders = object.orders?.map(e => TrimmedDerivativeLimitOrder.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryDerivativeOrdersByHashesResponse): QueryDerivativeOrdersByHashesResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedDerivativeLimitOrder.toAmino(e) : undefined);
    } else {
      obj.orders = message.orders;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeOrdersByHashesResponseAminoMsg): QueryDerivativeOrdersByHashesResponse {
    return QueryDerivativeOrdersByHashesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeOrdersByHashesResponseProtoMsg): QueryDerivativeOrdersByHashesResponse {
    return QueryDerivativeOrdersByHashesResponse.decode(message.value);
  },
  toProto(message: QueryDerivativeOrdersByHashesResponse): Uint8Array {
    return QueryDerivativeOrdersByHashesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeOrdersByHashesResponse): QueryDerivativeOrdersByHashesResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesResponse",
      value: QueryDerivativeOrdersByHashesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    TrimmedDerivativeLimitOrder.registerTypeUrl();
  }
};
function createBaseQueryDerivativeMarketsRequest(): QueryDerivativeMarketsRequest {
  return {
    status: "",
    marketIds: [],
    withMidPriceAndTob: false
  };
}
export const QueryDerivativeMarketsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsRequest",
  is(o: any): o is QueryDerivativeMarketsRequest {
    return o && (o.$typeUrl === QueryDerivativeMarketsRequest.typeUrl || typeof o.status === "string" && Array.isArray(o.marketIds) && (!o.marketIds.length || typeof o.marketIds[0] === "string") && typeof o.withMidPriceAndTob === "boolean");
  },
  isAmino(o: any): o is QueryDerivativeMarketsRequestAmino {
    return o && (o.$typeUrl === QueryDerivativeMarketsRequest.typeUrl || typeof o.status === "string" && Array.isArray(o.market_ids) && (!o.market_ids.length || typeof o.market_ids[0] === "string") && typeof o.with_mid_price_and_tob === "boolean");
  },
  encode(message: QueryDerivativeMarketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    if (message.withMidPriceAndTob === true) {
      writer.uint32(24).bool(message.withMidPriceAndTob);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeMarketsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeMarketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.marketIds.push(reader.string());
          break;
        case 3:
          message.withMidPriceAndTob = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDerivativeMarketsRequest>): QueryDerivativeMarketsRequest {
    const message = createBaseQueryDerivativeMarketsRequest();
    message.status = object.status ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    message.withMidPriceAndTob = object.withMidPriceAndTob ?? false;
    return message;
  },
  fromAmino(object: QueryDerivativeMarketsRequestAmino): QueryDerivativeMarketsRequest {
    const message = createBaseQueryDerivativeMarketsRequest();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    message.marketIds = object.market_ids?.map(e => e) || [];
    if (object.with_mid_price_and_tob !== undefined && object.with_mid_price_and_tob !== null) {
      message.withMidPriceAndTob = object.with_mid_price_and_tob;
    }
    return message;
  },
  toAmino(message: QueryDerivativeMarketsRequest): QueryDerivativeMarketsRequestAmino {
    const obj: any = {};
    obj.status = message.status === "" ? undefined : message.status;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = message.marketIds;
    }
    obj.with_mid_price_and_tob = message.withMidPriceAndTob === false ? undefined : message.withMidPriceAndTob;
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeMarketsRequestAminoMsg): QueryDerivativeMarketsRequest {
    return QueryDerivativeMarketsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeMarketsRequestProtoMsg): QueryDerivativeMarketsRequest {
    return QueryDerivativeMarketsRequest.decode(message.value);
  },
  toProto(message: QueryDerivativeMarketsRequest): Uint8Array {
    return QueryDerivativeMarketsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeMarketsRequest): QueryDerivativeMarketsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsRequest",
      value: QueryDerivativeMarketsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBasePriceLevel(): PriceLevel {
  return {
    price: "",
    quantity: ""
  };
}
export const PriceLevel = {
  typeUrl: "/injective.exchange.v1beta1.PriceLevel",
  is(o: any): o is PriceLevel {
    return o && (o.$typeUrl === PriceLevel.typeUrl || typeof o.price === "string" && typeof o.quantity === "string");
  },
  isAmino(o: any): o is PriceLevelAmino {
    return o && (o.$typeUrl === PriceLevel.typeUrl || typeof o.price === "string" && typeof o.quantity === "string");
  },
  encode(message: PriceLevel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(message.quantity);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PriceLevel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceLevel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;
        case 2:
          message.quantity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PriceLevel>): PriceLevel {
    const message = createBasePriceLevel();
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    return message;
  },
  fromAmino(object: PriceLevelAmino): PriceLevel {
    const message = createBasePriceLevel();
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    }
    return message;
  },
  toAmino(message: PriceLevel): PriceLevelAmino {
    const obj: any = {};
    obj.price = message.price === "" ? undefined : message.price;
    obj.quantity = message.quantity === "" ? undefined : message.quantity;
    return obj;
  },
  fromAminoMsg(object: PriceLevelAminoMsg): PriceLevel {
    return PriceLevel.fromAmino(object.value);
  },
  fromProtoMsg(message: PriceLevelProtoMsg): PriceLevel {
    return PriceLevel.decode(message.value);
  },
  toProto(message: PriceLevel): Uint8Array {
    return PriceLevel.encode(message).finish();
  },
  toProtoMsg(message: PriceLevel): PriceLevelProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.PriceLevel",
      value: PriceLevel.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBasePerpetualMarketState(): PerpetualMarketState {
  return {
    marketInfo: undefined,
    fundingInfo: undefined
  };
}
export const PerpetualMarketState = {
  typeUrl: "/injective.exchange.v1beta1.PerpetualMarketState",
  is(o: any): o is PerpetualMarketState {
    return o && o.$typeUrl === PerpetualMarketState.typeUrl;
  },
  isAmino(o: any): o is PerpetualMarketStateAmino {
    return o && o.$typeUrl === PerpetualMarketState.typeUrl;
  },
  encode(message: PerpetualMarketState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketInfo !== undefined) {
      PerpetualMarketInfo.encode(message.marketInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.fundingInfo !== undefined) {
      PerpetualMarketFunding.encode(message.fundingInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PerpetualMarketState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerpetualMarketState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketInfo = PerpetualMarketInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.fundingInfo = PerpetualMarketFunding.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PerpetualMarketState>): PerpetualMarketState {
    const message = createBasePerpetualMarketState();
    message.marketInfo = object.marketInfo !== undefined && object.marketInfo !== null ? PerpetualMarketInfo.fromPartial(object.marketInfo) : undefined;
    message.fundingInfo = object.fundingInfo !== undefined && object.fundingInfo !== null ? PerpetualMarketFunding.fromPartial(object.fundingInfo) : undefined;
    return message;
  },
  fromAmino(object: PerpetualMarketStateAmino): PerpetualMarketState {
    const message = createBasePerpetualMarketState();
    if (object.market_info !== undefined && object.market_info !== null) {
      message.marketInfo = PerpetualMarketInfo.fromAmino(object.market_info);
    }
    if (object.funding_info !== undefined && object.funding_info !== null) {
      message.fundingInfo = PerpetualMarketFunding.fromAmino(object.funding_info);
    }
    return message;
  },
  toAmino(message: PerpetualMarketState): PerpetualMarketStateAmino {
    const obj: any = {};
    obj.market_info = message.marketInfo ? PerpetualMarketInfo.toAmino(message.marketInfo) : undefined;
    obj.funding_info = message.fundingInfo ? PerpetualMarketFunding.toAmino(message.fundingInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: PerpetualMarketStateAminoMsg): PerpetualMarketState {
    return PerpetualMarketState.fromAmino(object.value);
  },
  fromProtoMsg(message: PerpetualMarketStateProtoMsg): PerpetualMarketState {
    return PerpetualMarketState.decode(message.value);
  },
  toProto(message: PerpetualMarketState): Uint8Array {
    return PerpetualMarketState.encode(message).finish();
  },
  toProtoMsg(message: PerpetualMarketState): PerpetualMarketStateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.PerpetualMarketState",
      value: PerpetualMarketState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PerpetualMarketInfo.registerTypeUrl();
    PerpetualMarketFunding.registerTypeUrl();
  }
};
function createBaseFullDerivativeMarket(): FullDerivativeMarket {
  return {
    market: undefined,
    perpetualInfo: undefined,
    futuresInfo: undefined,
    markPrice: "",
    midPriceAndTob: undefined
  };
}
export const FullDerivativeMarket = {
  typeUrl: "/injective.exchange.v1beta1.FullDerivativeMarket",
  is(o: any): o is FullDerivativeMarket {
    return o && (o.$typeUrl === FullDerivativeMarket.typeUrl || typeof o.markPrice === "string");
  },
  isAmino(o: any): o is FullDerivativeMarketAmino {
    return o && (o.$typeUrl === FullDerivativeMarket.typeUrl || typeof o.mark_price === "string");
  },
  encode(message: FullDerivativeMarket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.market !== undefined) {
      DerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    if (message.perpetualInfo !== undefined) {
      PerpetualMarketState.encode(message.perpetualInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.futuresInfo !== undefined) {
      ExpiryFuturesMarketInfo.encode(message.futuresInfo, writer.uint32(26).fork()).ldelim();
    }
    if (message.markPrice !== "") {
      writer.uint32(34).string(message.markPrice);
    }
    if (message.midPriceAndTob !== undefined) {
      MidPriceAndTOB.encode(message.midPriceAndTob, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FullDerivativeMarket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFullDerivativeMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = DerivativeMarket.decode(reader, reader.uint32());
          break;
        case 2:
          message.perpetualInfo = PerpetualMarketState.decode(reader, reader.uint32());
          break;
        case 3:
          message.futuresInfo = ExpiryFuturesMarketInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.markPrice = reader.string();
          break;
        case 5:
          message.midPriceAndTob = MidPriceAndTOB.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FullDerivativeMarket>): FullDerivativeMarket {
    const message = createBaseFullDerivativeMarket();
    message.market = object.market !== undefined && object.market !== null ? DerivativeMarket.fromPartial(object.market) : undefined;
    message.perpetualInfo = object.perpetualInfo !== undefined && object.perpetualInfo !== null ? PerpetualMarketState.fromPartial(object.perpetualInfo) : undefined;
    message.futuresInfo = object.futuresInfo !== undefined && object.futuresInfo !== null ? ExpiryFuturesMarketInfo.fromPartial(object.futuresInfo) : undefined;
    message.markPrice = object.markPrice ?? "";
    message.midPriceAndTob = object.midPriceAndTob !== undefined && object.midPriceAndTob !== null ? MidPriceAndTOB.fromPartial(object.midPriceAndTob) : undefined;
    return message;
  },
  fromAmino(object: FullDerivativeMarketAmino): FullDerivativeMarket {
    const message = createBaseFullDerivativeMarket();
    if (object.market !== undefined && object.market !== null) {
      message.market = DerivativeMarket.fromAmino(object.market);
    }
    if (object.perpetual_info !== undefined && object.perpetual_info !== null) {
      message.perpetualInfo = PerpetualMarketState.fromAmino(object.perpetual_info);
    }
    if (object.futures_info !== undefined && object.futures_info !== null) {
      message.futuresInfo = ExpiryFuturesMarketInfo.fromAmino(object.futures_info);
    }
    if (object.mark_price !== undefined && object.mark_price !== null) {
      message.markPrice = object.mark_price;
    }
    if (object.mid_price_and_tob !== undefined && object.mid_price_and_tob !== null) {
      message.midPriceAndTob = MidPriceAndTOB.fromAmino(object.mid_price_and_tob);
    }
    return message;
  },
  toAmino(message: FullDerivativeMarket): FullDerivativeMarketAmino {
    const obj: any = {};
    obj.market = message.market ? DerivativeMarket.toAmino(message.market) : undefined;
    obj.perpetual_info = message.perpetualInfo ? PerpetualMarketState.toAmino(message.perpetualInfo) : undefined;
    obj.futures_info = message.futuresInfo ? ExpiryFuturesMarketInfo.toAmino(message.futuresInfo) : undefined;
    obj.mark_price = message.markPrice === "" ? undefined : message.markPrice;
    obj.mid_price_and_tob = message.midPriceAndTob ? MidPriceAndTOB.toAmino(message.midPriceAndTob) : undefined;
    return obj;
  },
  fromAminoMsg(object: FullDerivativeMarketAminoMsg): FullDerivativeMarket {
    return FullDerivativeMarket.fromAmino(object.value);
  },
  fromProtoMsg(message: FullDerivativeMarketProtoMsg): FullDerivativeMarket {
    return FullDerivativeMarket.decode(message.value);
  },
  toProto(message: FullDerivativeMarket): Uint8Array {
    return FullDerivativeMarket.encode(message).finish();
  },
  toProtoMsg(message: FullDerivativeMarket): FullDerivativeMarketProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.FullDerivativeMarket",
      value: FullDerivativeMarket.encode(message).finish()
    };
  },
  registerTypeUrl() {
    DerivativeMarket.registerTypeUrl();
    PerpetualMarketState.registerTypeUrl();
    ExpiryFuturesMarketInfo.registerTypeUrl();
    MidPriceAndTOB.registerTypeUrl();
  }
};
function createBaseQueryDerivativeMarketsResponse(): QueryDerivativeMarketsResponse {
  return {
    markets: []
  };
}
export const QueryDerivativeMarketsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsResponse",
  is(o: any): o is QueryDerivativeMarketsResponse {
    return o && (o.$typeUrl === QueryDerivativeMarketsResponse.typeUrl || Array.isArray(o.markets) && (!o.markets.length || FullDerivativeMarket.is(o.markets[0])));
  },
  isAmino(o: any): o is QueryDerivativeMarketsResponseAmino {
    return o && (o.$typeUrl === QueryDerivativeMarketsResponse.typeUrl || Array.isArray(o.markets) && (!o.markets.length || FullDerivativeMarket.isAmino(o.markets[0])));
  },
  encode(message: QueryDerivativeMarketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.markets) {
      FullDerivativeMarket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeMarketsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeMarketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.markets.push(FullDerivativeMarket.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDerivativeMarketsResponse>): QueryDerivativeMarketsResponse {
    const message = createBaseQueryDerivativeMarketsResponse();
    message.markets = object.markets?.map(e => FullDerivativeMarket.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDerivativeMarketsResponseAmino): QueryDerivativeMarketsResponse {
    const message = createBaseQueryDerivativeMarketsResponse();
    message.markets = object.markets?.map(e => FullDerivativeMarket.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryDerivativeMarketsResponse): QueryDerivativeMarketsResponseAmino {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map(e => e ? FullDerivativeMarket.toAmino(e) : undefined);
    } else {
      obj.markets = message.markets;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeMarketsResponseAminoMsg): QueryDerivativeMarketsResponse {
    return QueryDerivativeMarketsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeMarketsResponseProtoMsg): QueryDerivativeMarketsResponse {
    return QueryDerivativeMarketsResponse.decode(message.value);
  },
  toProto(message: QueryDerivativeMarketsResponse): Uint8Array {
    return QueryDerivativeMarketsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeMarketsResponse): QueryDerivativeMarketsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsResponse",
      value: QueryDerivativeMarketsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    FullDerivativeMarket.registerTypeUrl();
  }
};
function createBaseQueryDerivativeMarketRequest(): QueryDerivativeMarketRequest {
  return {
    marketId: ""
  };
}
export const QueryDerivativeMarketRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketRequest",
  is(o: any): o is QueryDerivativeMarketRequest {
    return o && (o.$typeUrl === QueryDerivativeMarketRequest.typeUrl || typeof o.marketId === "string");
  },
  isAmino(o: any): o is QueryDerivativeMarketRequestAmino {
    return o && (o.$typeUrl === QueryDerivativeMarketRequest.typeUrl || typeof o.market_id === "string");
  },
  encode(message: QueryDerivativeMarketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeMarketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeMarketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDerivativeMarketRequest>): QueryDerivativeMarketRequest {
    const message = createBaseQueryDerivativeMarketRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromAmino(object: QueryDerivativeMarketRequestAmino): QueryDerivativeMarketRequest {
    const message = createBaseQueryDerivativeMarketRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryDerivativeMarketRequest): QueryDerivativeMarketRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeMarketRequestAminoMsg): QueryDerivativeMarketRequest {
    return QueryDerivativeMarketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeMarketRequestProtoMsg): QueryDerivativeMarketRequest {
    return QueryDerivativeMarketRequest.decode(message.value);
  },
  toProto(message: QueryDerivativeMarketRequest): Uint8Array {
    return QueryDerivativeMarketRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeMarketRequest): QueryDerivativeMarketRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketRequest",
      value: QueryDerivativeMarketRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDerivativeMarketResponse(): QueryDerivativeMarketResponse {
  return {
    market: undefined
  };
}
export const QueryDerivativeMarketResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketResponse",
  is(o: any): o is QueryDerivativeMarketResponse {
    return o && o.$typeUrl === QueryDerivativeMarketResponse.typeUrl;
  },
  isAmino(o: any): o is QueryDerivativeMarketResponseAmino {
    return o && o.$typeUrl === QueryDerivativeMarketResponse.typeUrl;
  },
  encode(message: QueryDerivativeMarketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.market !== undefined) {
      FullDerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeMarketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = FullDerivativeMarket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDerivativeMarketResponse>): QueryDerivativeMarketResponse {
    const message = createBaseQueryDerivativeMarketResponse();
    message.market = object.market !== undefined && object.market !== null ? FullDerivativeMarket.fromPartial(object.market) : undefined;
    return message;
  },
  fromAmino(object: QueryDerivativeMarketResponseAmino): QueryDerivativeMarketResponse {
    const message = createBaseQueryDerivativeMarketResponse();
    if (object.market !== undefined && object.market !== null) {
      message.market = FullDerivativeMarket.fromAmino(object.market);
    }
    return message;
  },
  toAmino(message: QueryDerivativeMarketResponse): QueryDerivativeMarketResponseAmino {
    const obj: any = {};
    obj.market = message.market ? FullDerivativeMarket.toAmino(message.market) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeMarketResponseAminoMsg): QueryDerivativeMarketResponse {
    return QueryDerivativeMarketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeMarketResponseProtoMsg): QueryDerivativeMarketResponse {
    return QueryDerivativeMarketResponse.decode(message.value);
  },
  toProto(message: QueryDerivativeMarketResponse): Uint8Array {
    return QueryDerivativeMarketResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeMarketResponse): QueryDerivativeMarketResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketResponse",
      value: QueryDerivativeMarketResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    FullDerivativeMarket.registerTypeUrl();
  }
};
function createBaseQueryDerivativeMarketAddressRequest(): QueryDerivativeMarketAddressRequest {
  return {
    marketId: ""
  };
}
export const QueryDerivativeMarketAddressRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressRequest",
  is(o: any): o is QueryDerivativeMarketAddressRequest {
    return o && (o.$typeUrl === QueryDerivativeMarketAddressRequest.typeUrl || typeof o.marketId === "string");
  },
  isAmino(o: any): o is QueryDerivativeMarketAddressRequestAmino {
    return o && (o.$typeUrl === QueryDerivativeMarketAddressRequest.typeUrl || typeof o.market_id === "string");
  },
  encode(message: QueryDerivativeMarketAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeMarketAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeMarketAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDerivativeMarketAddressRequest>): QueryDerivativeMarketAddressRequest {
    const message = createBaseQueryDerivativeMarketAddressRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromAmino(object: QueryDerivativeMarketAddressRequestAmino): QueryDerivativeMarketAddressRequest {
    const message = createBaseQueryDerivativeMarketAddressRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryDerivativeMarketAddressRequest): QueryDerivativeMarketAddressRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeMarketAddressRequestAminoMsg): QueryDerivativeMarketAddressRequest {
    return QueryDerivativeMarketAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeMarketAddressRequestProtoMsg): QueryDerivativeMarketAddressRequest {
    return QueryDerivativeMarketAddressRequest.decode(message.value);
  },
  toProto(message: QueryDerivativeMarketAddressRequest): Uint8Array {
    return QueryDerivativeMarketAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeMarketAddressRequest): QueryDerivativeMarketAddressRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressRequest",
      value: QueryDerivativeMarketAddressRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDerivativeMarketAddressResponse(): QueryDerivativeMarketAddressResponse {
  return {
    address: "",
    subaccountId: ""
  };
}
export const QueryDerivativeMarketAddressResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressResponse",
  is(o: any): o is QueryDerivativeMarketAddressResponse {
    return o && (o.$typeUrl === QueryDerivativeMarketAddressResponse.typeUrl || typeof o.address === "string" && typeof o.subaccountId === "string");
  },
  isAmino(o: any): o is QueryDerivativeMarketAddressResponseAmino {
    return o && (o.$typeUrl === QueryDerivativeMarketAddressResponse.typeUrl || typeof o.address === "string" && typeof o.subaccount_id === "string");
  },
  encode(message: QueryDerivativeMarketAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDerivativeMarketAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDerivativeMarketAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.subaccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDerivativeMarketAddressResponse>): QueryDerivativeMarketAddressResponse {
    const message = createBaseQueryDerivativeMarketAddressResponse();
    message.address = object.address ?? "";
    message.subaccountId = object.subaccountId ?? "";
    return message;
  },
  fromAmino(object: QueryDerivativeMarketAddressResponseAmino): QueryDerivativeMarketAddressResponse {
    const message = createBaseQueryDerivativeMarketAddressResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    return message;
  },
  toAmino(message: QueryDerivativeMarketAddressResponse): QueryDerivativeMarketAddressResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeMarketAddressResponseAminoMsg): QueryDerivativeMarketAddressResponse {
    return QueryDerivativeMarketAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeMarketAddressResponseProtoMsg): QueryDerivativeMarketAddressResponse {
    return QueryDerivativeMarketAddressResponse.decode(message.value);
  },
  toProto(message: QueryDerivativeMarketAddressResponse): Uint8Array {
    return QueryDerivativeMarketAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeMarketAddressResponse): QueryDerivativeMarketAddressResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressResponse",
      value: QueryDerivativeMarketAddressResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySubaccountTradeNonceRequest(): QuerySubaccountTradeNonceRequest {
  return {
    subaccountId: ""
  };
}
export const QuerySubaccountTradeNonceRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceRequest",
  is(o: any): o is QuerySubaccountTradeNonceRequest {
    return o && (o.$typeUrl === QuerySubaccountTradeNonceRequest.typeUrl || typeof o.subaccountId === "string");
  },
  isAmino(o: any): o is QuerySubaccountTradeNonceRequestAmino {
    return o && (o.$typeUrl === QuerySubaccountTradeNonceRequest.typeUrl || typeof o.subaccount_id === "string");
  },
  encode(message: QuerySubaccountTradeNonceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountTradeNonceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountTradeNonceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySubaccountTradeNonceRequest>): QuerySubaccountTradeNonceRequest {
    const message = createBaseQuerySubaccountTradeNonceRequest();
    message.subaccountId = object.subaccountId ?? "";
    return message;
  },
  fromAmino(object: QuerySubaccountTradeNonceRequestAmino): QuerySubaccountTradeNonceRequest {
    const message = createBaseQuerySubaccountTradeNonceRequest();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    return message;
  },
  toAmino(message: QuerySubaccountTradeNonceRequest): QuerySubaccountTradeNonceRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountTradeNonceRequestAminoMsg): QuerySubaccountTradeNonceRequest {
    return QuerySubaccountTradeNonceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountTradeNonceRequestProtoMsg): QuerySubaccountTradeNonceRequest {
    return QuerySubaccountTradeNonceRequest.decode(message.value);
  },
  toProto(message: QuerySubaccountTradeNonceRequest): Uint8Array {
    return QuerySubaccountTradeNonceRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountTradeNonceRequest): QuerySubaccountTradeNonceRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceRequest",
      value: QuerySubaccountTradeNonceRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySubaccountPositionsRequest(): QuerySubaccountPositionsRequest {
  return {
    subaccountId: ""
  };
}
export const QuerySubaccountPositionsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsRequest",
  is(o: any): o is QuerySubaccountPositionsRequest {
    return o && (o.$typeUrl === QuerySubaccountPositionsRequest.typeUrl || typeof o.subaccountId === "string");
  },
  isAmino(o: any): o is QuerySubaccountPositionsRequestAmino {
    return o && (o.$typeUrl === QuerySubaccountPositionsRequest.typeUrl || typeof o.subaccount_id === "string");
  },
  encode(message: QuerySubaccountPositionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountPositionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountPositionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySubaccountPositionsRequest>): QuerySubaccountPositionsRequest {
    const message = createBaseQuerySubaccountPositionsRequest();
    message.subaccountId = object.subaccountId ?? "";
    return message;
  },
  fromAmino(object: QuerySubaccountPositionsRequestAmino): QuerySubaccountPositionsRequest {
    const message = createBaseQuerySubaccountPositionsRequest();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    return message;
  },
  toAmino(message: QuerySubaccountPositionsRequest): QuerySubaccountPositionsRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountPositionsRequestAminoMsg): QuerySubaccountPositionsRequest {
    return QuerySubaccountPositionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountPositionsRequestProtoMsg): QuerySubaccountPositionsRequest {
    return QuerySubaccountPositionsRequest.decode(message.value);
  },
  toProto(message: QuerySubaccountPositionsRequest): Uint8Array {
    return QuerySubaccountPositionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountPositionsRequest): QuerySubaccountPositionsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsRequest",
      value: QuerySubaccountPositionsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySubaccountPositionInMarketRequest(): QuerySubaccountPositionInMarketRequest {
  return {
    subaccountId: "",
    marketId: ""
  };
}
export const QuerySubaccountPositionInMarketRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketRequest",
  is(o: any): o is QuerySubaccountPositionInMarketRequest {
    return o && (o.$typeUrl === QuerySubaccountPositionInMarketRequest.typeUrl || typeof o.subaccountId === "string" && typeof o.marketId === "string");
  },
  isAmino(o: any): o is QuerySubaccountPositionInMarketRequestAmino {
    return o && (o.$typeUrl === QuerySubaccountPositionInMarketRequest.typeUrl || typeof o.subaccount_id === "string" && typeof o.market_id === "string");
  },
  encode(message: QuerySubaccountPositionInMarketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountPositionInMarketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountPositionInMarketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySubaccountPositionInMarketRequest>): QuerySubaccountPositionInMarketRequest {
    const message = createBaseQuerySubaccountPositionInMarketRequest();
    message.subaccountId = object.subaccountId ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromAmino(object: QuerySubaccountPositionInMarketRequestAmino): QuerySubaccountPositionInMarketRequest {
    const message = createBaseQuerySubaccountPositionInMarketRequest();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QuerySubaccountPositionInMarketRequest): QuerySubaccountPositionInMarketRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountPositionInMarketRequestAminoMsg): QuerySubaccountPositionInMarketRequest {
    return QuerySubaccountPositionInMarketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountPositionInMarketRequestProtoMsg): QuerySubaccountPositionInMarketRequest {
    return QuerySubaccountPositionInMarketRequest.decode(message.value);
  },
  toProto(message: QuerySubaccountPositionInMarketRequest): Uint8Array {
    return QuerySubaccountPositionInMarketRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountPositionInMarketRequest): QuerySubaccountPositionInMarketRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketRequest",
      value: QuerySubaccountPositionInMarketRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySubaccountEffectivePositionInMarketRequest(): QuerySubaccountEffectivePositionInMarketRequest {
  return {
    subaccountId: "",
    marketId: ""
  };
}
export const QuerySubaccountEffectivePositionInMarketRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketRequest",
  is(o: any): o is QuerySubaccountEffectivePositionInMarketRequest {
    return o && (o.$typeUrl === QuerySubaccountEffectivePositionInMarketRequest.typeUrl || typeof o.subaccountId === "string" && typeof o.marketId === "string");
  },
  isAmino(o: any): o is QuerySubaccountEffectivePositionInMarketRequestAmino {
    return o && (o.$typeUrl === QuerySubaccountEffectivePositionInMarketRequest.typeUrl || typeof o.subaccount_id === "string" && typeof o.market_id === "string");
  },
  encode(message: QuerySubaccountEffectivePositionInMarketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountEffectivePositionInMarketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountEffectivePositionInMarketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySubaccountEffectivePositionInMarketRequest>): QuerySubaccountEffectivePositionInMarketRequest {
    const message = createBaseQuerySubaccountEffectivePositionInMarketRequest();
    message.subaccountId = object.subaccountId ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromAmino(object: QuerySubaccountEffectivePositionInMarketRequestAmino): QuerySubaccountEffectivePositionInMarketRequest {
    const message = createBaseQuerySubaccountEffectivePositionInMarketRequest();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QuerySubaccountEffectivePositionInMarketRequest): QuerySubaccountEffectivePositionInMarketRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountEffectivePositionInMarketRequestAminoMsg): QuerySubaccountEffectivePositionInMarketRequest {
    return QuerySubaccountEffectivePositionInMarketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountEffectivePositionInMarketRequestProtoMsg): QuerySubaccountEffectivePositionInMarketRequest {
    return QuerySubaccountEffectivePositionInMarketRequest.decode(message.value);
  },
  toProto(message: QuerySubaccountEffectivePositionInMarketRequest): Uint8Array {
    return QuerySubaccountEffectivePositionInMarketRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountEffectivePositionInMarketRequest): QuerySubaccountEffectivePositionInMarketRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketRequest",
      value: QuerySubaccountEffectivePositionInMarketRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySubaccountOrderMetadataRequest(): QuerySubaccountOrderMetadataRequest {
  return {
    subaccountId: ""
  };
}
export const QuerySubaccountOrderMetadataRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataRequest",
  is(o: any): o is QuerySubaccountOrderMetadataRequest {
    return o && (o.$typeUrl === QuerySubaccountOrderMetadataRequest.typeUrl || typeof o.subaccountId === "string");
  },
  isAmino(o: any): o is QuerySubaccountOrderMetadataRequestAmino {
    return o && (o.$typeUrl === QuerySubaccountOrderMetadataRequest.typeUrl || typeof o.subaccount_id === "string");
  },
  encode(message: QuerySubaccountOrderMetadataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountOrderMetadataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountOrderMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySubaccountOrderMetadataRequest>): QuerySubaccountOrderMetadataRequest {
    const message = createBaseQuerySubaccountOrderMetadataRequest();
    message.subaccountId = object.subaccountId ?? "";
    return message;
  },
  fromAmino(object: QuerySubaccountOrderMetadataRequestAmino): QuerySubaccountOrderMetadataRequest {
    const message = createBaseQuerySubaccountOrderMetadataRequest();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    return message;
  },
  toAmino(message: QuerySubaccountOrderMetadataRequest): QuerySubaccountOrderMetadataRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountOrderMetadataRequestAminoMsg): QuerySubaccountOrderMetadataRequest {
    return QuerySubaccountOrderMetadataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountOrderMetadataRequestProtoMsg): QuerySubaccountOrderMetadataRequest {
    return QuerySubaccountOrderMetadataRequest.decode(message.value);
  },
  toProto(message: QuerySubaccountOrderMetadataRequest): Uint8Array {
    return QuerySubaccountOrderMetadataRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountOrderMetadataRequest): QuerySubaccountOrderMetadataRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataRequest",
      value: QuerySubaccountOrderMetadataRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySubaccountPositionsResponse(): QuerySubaccountPositionsResponse {
  return {
    state: []
  };
}
export const QuerySubaccountPositionsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsResponse",
  is(o: any): o is QuerySubaccountPositionsResponse {
    return o && (o.$typeUrl === QuerySubaccountPositionsResponse.typeUrl || Array.isArray(o.state) && (!o.state.length || DerivativePosition.is(o.state[0])));
  },
  isAmino(o: any): o is QuerySubaccountPositionsResponseAmino {
    return o && (o.$typeUrl === QuerySubaccountPositionsResponse.typeUrl || Array.isArray(o.state) && (!o.state.length || DerivativePosition.isAmino(o.state[0])));
  },
  encode(message: QuerySubaccountPositionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.state) {
      DerivativePosition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountPositionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountPositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state.push(DerivativePosition.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySubaccountPositionsResponse>): QuerySubaccountPositionsResponse {
    const message = createBaseQuerySubaccountPositionsResponse();
    message.state = object.state?.map(e => DerivativePosition.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySubaccountPositionsResponseAmino): QuerySubaccountPositionsResponse {
    const message = createBaseQuerySubaccountPositionsResponse();
    message.state = object.state?.map(e => DerivativePosition.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySubaccountPositionsResponse): QuerySubaccountPositionsResponseAmino {
    const obj: any = {};
    if (message.state) {
      obj.state = message.state.map(e => e ? DerivativePosition.toAmino(e) : undefined);
    } else {
      obj.state = message.state;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountPositionsResponseAminoMsg): QuerySubaccountPositionsResponse {
    return QuerySubaccountPositionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountPositionsResponseProtoMsg): QuerySubaccountPositionsResponse {
    return QuerySubaccountPositionsResponse.decode(message.value);
  },
  toProto(message: QuerySubaccountPositionsResponse): Uint8Array {
    return QuerySubaccountPositionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountPositionsResponse): QuerySubaccountPositionsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsResponse",
      value: QuerySubaccountPositionsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    DerivativePosition.registerTypeUrl();
  }
};
function createBaseQuerySubaccountPositionInMarketResponse(): QuerySubaccountPositionInMarketResponse {
  return {
    state: undefined
  };
}
export const QuerySubaccountPositionInMarketResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketResponse",
  is(o: any): o is QuerySubaccountPositionInMarketResponse {
    return o && o.$typeUrl === QuerySubaccountPositionInMarketResponse.typeUrl;
  },
  isAmino(o: any): o is QuerySubaccountPositionInMarketResponseAmino {
    return o && o.$typeUrl === QuerySubaccountPositionInMarketResponse.typeUrl;
  },
  encode(message: QuerySubaccountPositionInMarketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== undefined) {
      Position.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountPositionInMarketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountPositionInMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = Position.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySubaccountPositionInMarketResponse>): QuerySubaccountPositionInMarketResponse {
    const message = createBaseQuerySubaccountPositionInMarketResponse();
    message.state = object.state !== undefined && object.state !== null ? Position.fromPartial(object.state) : undefined;
    return message;
  },
  fromAmino(object: QuerySubaccountPositionInMarketResponseAmino): QuerySubaccountPositionInMarketResponse {
    const message = createBaseQuerySubaccountPositionInMarketResponse();
    if (object.state !== undefined && object.state !== null) {
      message.state = Position.fromAmino(object.state);
    }
    return message;
  },
  toAmino(message: QuerySubaccountPositionInMarketResponse): QuerySubaccountPositionInMarketResponseAmino {
    const obj: any = {};
    obj.state = message.state ? Position.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountPositionInMarketResponseAminoMsg): QuerySubaccountPositionInMarketResponse {
    return QuerySubaccountPositionInMarketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountPositionInMarketResponseProtoMsg): QuerySubaccountPositionInMarketResponse {
    return QuerySubaccountPositionInMarketResponse.decode(message.value);
  },
  toProto(message: QuerySubaccountPositionInMarketResponse): Uint8Array {
    return QuerySubaccountPositionInMarketResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountPositionInMarketResponse): QuerySubaccountPositionInMarketResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketResponse",
      value: QuerySubaccountPositionInMarketResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Position.registerTypeUrl();
  }
};
function createBaseEffectivePosition(): EffectivePosition {
  return {
    isLong: false,
    quantity: "",
    entryPrice: "",
    effectiveMargin: ""
  };
}
export const EffectivePosition = {
  typeUrl: "/injective.exchange.v1beta1.EffectivePosition",
  is(o: any): o is EffectivePosition {
    return o && (o.$typeUrl === EffectivePosition.typeUrl || typeof o.isLong === "boolean" && typeof o.quantity === "string" && typeof o.entryPrice === "string" && typeof o.effectiveMargin === "string");
  },
  isAmino(o: any): o is EffectivePositionAmino {
    return o && (o.$typeUrl === EffectivePosition.typeUrl || typeof o.is_long === "boolean" && typeof o.quantity === "string" && typeof o.entry_price === "string" && typeof o.effective_margin === "string");
  },
  encode(message: EffectivePosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isLong === true) {
      writer.uint32(8).bool(message.isLong);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(message.quantity);
    }
    if (message.entryPrice !== "") {
      writer.uint32(26).string(message.entryPrice);
    }
    if (message.effectiveMargin !== "") {
      writer.uint32(34).string(message.effectiveMargin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EffectivePosition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEffectivePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isLong = reader.bool();
          break;
        case 2:
          message.quantity = reader.string();
          break;
        case 3:
          message.entryPrice = reader.string();
          break;
        case 4:
          message.effectiveMargin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EffectivePosition>): EffectivePosition {
    const message = createBaseEffectivePosition();
    message.isLong = object.isLong ?? false;
    message.quantity = object.quantity ?? "";
    message.entryPrice = object.entryPrice ?? "";
    message.effectiveMargin = object.effectiveMargin ?? "";
    return message;
  },
  fromAmino(object: EffectivePositionAmino): EffectivePosition {
    const message = createBaseEffectivePosition();
    if (object.is_long !== undefined && object.is_long !== null) {
      message.isLong = object.is_long;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    }
    if (object.entry_price !== undefined && object.entry_price !== null) {
      message.entryPrice = object.entry_price;
    }
    if (object.effective_margin !== undefined && object.effective_margin !== null) {
      message.effectiveMargin = object.effective_margin;
    }
    return message;
  },
  toAmino(message: EffectivePosition): EffectivePositionAmino {
    const obj: any = {};
    obj.is_long = message.isLong === false ? undefined : message.isLong;
    obj.quantity = message.quantity === "" ? undefined : message.quantity;
    obj.entry_price = message.entryPrice === "" ? undefined : message.entryPrice;
    obj.effective_margin = message.effectiveMargin === "" ? undefined : message.effectiveMargin;
    return obj;
  },
  fromAminoMsg(object: EffectivePositionAminoMsg): EffectivePosition {
    return EffectivePosition.fromAmino(object.value);
  },
  fromProtoMsg(message: EffectivePositionProtoMsg): EffectivePosition {
    return EffectivePosition.decode(message.value);
  },
  toProto(message: EffectivePosition): Uint8Array {
    return EffectivePosition.encode(message).finish();
  },
  toProtoMsg(message: EffectivePosition): EffectivePositionProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EffectivePosition",
      value: EffectivePosition.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySubaccountEffectivePositionInMarketResponse(): QuerySubaccountEffectivePositionInMarketResponse {
  return {
    state: undefined
  };
}
export const QuerySubaccountEffectivePositionInMarketResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketResponse",
  is(o: any): o is QuerySubaccountEffectivePositionInMarketResponse {
    return o && o.$typeUrl === QuerySubaccountEffectivePositionInMarketResponse.typeUrl;
  },
  isAmino(o: any): o is QuerySubaccountEffectivePositionInMarketResponseAmino {
    return o && o.$typeUrl === QuerySubaccountEffectivePositionInMarketResponse.typeUrl;
  },
  encode(message: QuerySubaccountEffectivePositionInMarketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== undefined) {
      EffectivePosition.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountEffectivePositionInMarketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountEffectivePositionInMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = EffectivePosition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySubaccountEffectivePositionInMarketResponse>): QuerySubaccountEffectivePositionInMarketResponse {
    const message = createBaseQuerySubaccountEffectivePositionInMarketResponse();
    message.state = object.state !== undefined && object.state !== null ? EffectivePosition.fromPartial(object.state) : undefined;
    return message;
  },
  fromAmino(object: QuerySubaccountEffectivePositionInMarketResponseAmino): QuerySubaccountEffectivePositionInMarketResponse {
    const message = createBaseQuerySubaccountEffectivePositionInMarketResponse();
    if (object.state !== undefined && object.state !== null) {
      message.state = EffectivePosition.fromAmino(object.state);
    }
    return message;
  },
  toAmino(message: QuerySubaccountEffectivePositionInMarketResponse): QuerySubaccountEffectivePositionInMarketResponseAmino {
    const obj: any = {};
    obj.state = message.state ? EffectivePosition.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountEffectivePositionInMarketResponseAminoMsg): QuerySubaccountEffectivePositionInMarketResponse {
    return QuerySubaccountEffectivePositionInMarketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountEffectivePositionInMarketResponseProtoMsg): QuerySubaccountEffectivePositionInMarketResponse {
    return QuerySubaccountEffectivePositionInMarketResponse.decode(message.value);
  },
  toProto(message: QuerySubaccountEffectivePositionInMarketResponse): Uint8Array {
    return QuerySubaccountEffectivePositionInMarketResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountEffectivePositionInMarketResponse): QuerySubaccountEffectivePositionInMarketResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketResponse",
      value: QuerySubaccountEffectivePositionInMarketResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    EffectivePosition.registerTypeUrl();
  }
};
function createBaseQueryPerpetualMarketInfoRequest(): QueryPerpetualMarketInfoRequest {
  return {
    marketId: ""
  };
}
export const QueryPerpetualMarketInfoRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoRequest",
  is(o: any): o is QueryPerpetualMarketInfoRequest {
    return o && (o.$typeUrl === QueryPerpetualMarketInfoRequest.typeUrl || typeof o.marketId === "string");
  },
  isAmino(o: any): o is QueryPerpetualMarketInfoRequestAmino {
    return o && (o.$typeUrl === QueryPerpetualMarketInfoRequest.typeUrl || typeof o.market_id === "string");
  },
  encode(message: QueryPerpetualMarketInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPerpetualMarketInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPerpetualMarketInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPerpetualMarketInfoRequest>): QueryPerpetualMarketInfoRequest {
    const message = createBaseQueryPerpetualMarketInfoRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromAmino(object: QueryPerpetualMarketInfoRequestAmino): QueryPerpetualMarketInfoRequest {
    const message = createBaseQueryPerpetualMarketInfoRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryPerpetualMarketInfoRequest): QueryPerpetualMarketInfoRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryPerpetualMarketInfoRequestAminoMsg): QueryPerpetualMarketInfoRequest {
    return QueryPerpetualMarketInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPerpetualMarketInfoRequestProtoMsg): QueryPerpetualMarketInfoRequest {
    return QueryPerpetualMarketInfoRequest.decode(message.value);
  },
  toProto(message: QueryPerpetualMarketInfoRequest): Uint8Array {
    return QueryPerpetualMarketInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPerpetualMarketInfoRequest): QueryPerpetualMarketInfoRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoRequest",
      value: QueryPerpetualMarketInfoRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryPerpetualMarketInfoResponse(): QueryPerpetualMarketInfoResponse {
  return {
    info: PerpetualMarketInfo.fromPartial({})
  };
}
export const QueryPerpetualMarketInfoResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoResponse",
  is(o: any): o is QueryPerpetualMarketInfoResponse {
    return o && (o.$typeUrl === QueryPerpetualMarketInfoResponse.typeUrl || PerpetualMarketInfo.is(o.info));
  },
  isAmino(o: any): o is QueryPerpetualMarketInfoResponseAmino {
    return o && (o.$typeUrl === QueryPerpetualMarketInfoResponse.typeUrl || PerpetualMarketInfo.isAmino(o.info));
  },
  encode(message: QueryPerpetualMarketInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.info !== undefined) {
      PerpetualMarketInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPerpetualMarketInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPerpetualMarketInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = PerpetualMarketInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPerpetualMarketInfoResponse>): QueryPerpetualMarketInfoResponse {
    const message = createBaseQueryPerpetualMarketInfoResponse();
    message.info = object.info !== undefined && object.info !== null ? PerpetualMarketInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromAmino(object: QueryPerpetualMarketInfoResponseAmino): QueryPerpetualMarketInfoResponse {
    const message = createBaseQueryPerpetualMarketInfoResponse();
    if (object.info !== undefined && object.info !== null) {
      message.info = PerpetualMarketInfo.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: QueryPerpetualMarketInfoResponse): QueryPerpetualMarketInfoResponseAmino {
    const obj: any = {};
    obj.info = message.info ? PerpetualMarketInfo.toAmino(message.info) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPerpetualMarketInfoResponseAminoMsg): QueryPerpetualMarketInfoResponse {
    return QueryPerpetualMarketInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPerpetualMarketInfoResponseProtoMsg): QueryPerpetualMarketInfoResponse {
    return QueryPerpetualMarketInfoResponse.decode(message.value);
  },
  toProto(message: QueryPerpetualMarketInfoResponse): Uint8Array {
    return QueryPerpetualMarketInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPerpetualMarketInfoResponse): QueryPerpetualMarketInfoResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoResponse",
      value: QueryPerpetualMarketInfoResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PerpetualMarketInfo.registerTypeUrl();
  }
};
function createBaseQueryExpiryFuturesMarketInfoRequest(): QueryExpiryFuturesMarketInfoRequest {
  return {
    marketId: ""
  };
}
export const QueryExpiryFuturesMarketInfoRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoRequest",
  is(o: any): o is QueryExpiryFuturesMarketInfoRequest {
    return o && (o.$typeUrl === QueryExpiryFuturesMarketInfoRequest.typeUrl || typeof o.marketId === "string");
  },
  isAmino(o: any): o is QueryExpiryFuturesMarketInfoRequestAmino {
    return o && (o.$typeUrl === QueryExpiryFuturesMarketInfoRequest.typeUrl || typeof o.market_id === "string");
  },
  encode(message: QueryExpiryFuturesMarketInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExpiryFuturesMarketInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExpiryFuturesMarketInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryExpiryFuturesMarketInfoRequest>): QueryExpiryFuturesMarketInfoRequest {
    const message = createBaseQueryExpiryFuturesMarketInfoRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromAmino(object: QueryExpiryFuturesMarketInfoRequestAmino): QueryExpiryFuturesMarketInfoRequest {
    const message = createBaseQueryExpiryFuturesMarketInfoRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryExpiryFuturesMarketInfoRequest): QueryExpiryFuturesMarketInfoRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryExpiryFuturesMarketInfoRequestAminoMsg): QueryExpiryFuturesMarketInfoRequest {
    return QueryExpiryFuturesMarketInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExpiryFuturesMarketInfoRequestProtoMsg): QueryExpiryFuturesMarketInfoRequest {
    return QueryExpiryFuturesMarketInfoRequest.decode(message.value);
  },
  toProto(message: QueryExpiryFuturesMarketInfoRequest): Uint8Array {
    return QueryExpiryFuturesMarketInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryExpiryFuturesMarketInfoRequest): QueryExpiryFuturesMarketInfoRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoRequest",
      value: QueryExpiryFuturesMarketInfoRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryExpiryFuturesMarketInfoResponse(): QueryExpiryFuturesMarketInfoResponse {
  return {
    info: ExpiryFuturesMarketInfo.fromPartial({})
  };
}
export const QueryExpiryFuturesMarketInfoResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoResponse",
  is(o: any): o is QueryExpiryFuturesMarketInfoResponse {
    return o && (o.$typeUrl === QueryExpiryFuturesMarketInfoResponse.typeUrl || ExpiryFuturesMarketInfo.is(o.info));
  },
  isAmino(o: any): o is QueryExpiryFuturesMarketInfoResponseAmino {
    return o && (o.$typeUrl === QueryExpiryFuturesMarketInfoResponse.typeUrl || ExpiryFuturesMarketInfo.isAmino(o.info));
  },
  encode(message: QueryExpiryFuturesMarketInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.info !== undefined) {
      ExpiryFuturesMarketInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExpiryFuturesMarketInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExpiryFuturesMarketInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = ExpiryFuturesMarketInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryExpiryFuturesMarketInfoResponse>): QueryExpiryFuturesMarketInfoResponse {
    const message = createBaseQueryExpiryFuturesMarketInfoResponse();
    message.info = object.info !== undefined && object.info !== null ? ExpiryFuturesMarketInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromAmino(object: QueryExpiryFuturesMarketInfoResponseAmino): QueryExpiryFuturesMarketInfoResponse {
    const message = createBaseQueryExpiryFuturesMarketInfoResponse();
    if (object.info !== undefined && object.info !== null) {
      message.info = ExpiryFuturesMarketInfo.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: QueryExpiryFuturesMarketInfoResponse): QueryExpiryFuturesMarketInfoResponseAmino {
    const obj: any = {};
    obj.info = message.info ? ExpiryFuturesMarketInfo.toAmino(message.info) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryExpiryFuturesMarketInfoResponseAminoMsg): QueryExpiryFuturesMarketInfoResponse {
    return QueryExpiryFuturesMarketInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExpiryFuturesMarketInfoResponseProtoMsg): QueryExpiryFuturesMarketInfoResponse {
    return QueryExpiryFuturesMarketInfoResponse.decode(message.value);
  },
  toProto(message: QueryExpiryFuturesMarketInfoResponse): Uint8Array {
    return QueryExpiryFuturesMarketInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExpiryFuturesMarketInfoResponse): QueryExpiryFuturesMarketInfoResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoResponse",
      value: QueryExpiryFuturesMarketInfoResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ExpiryFuturesMarketInfo.registerTypeUrl();
  }
};
function createBaseQueryPerpetualMarketFundingRequest(): QueryPerpetualMarketFundingRequest {
  return {
    marketId: ""
  };
}
export const QueryPerpetualMarketFundingRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingRequest",
  is(o: any): o is QueryPerpetualMarketFundingRequest {
    return o && (o.$typeUrl === QueryPerpetualMarketFundingRequest.typeUrl || typeof o.marketId === "string");
  },
  isAmino(o: any): o is QueryPerpetualMarketFundingRequestAmino {
    return o && (o.$typeUrl === QueryPerpetualMarketFundingRequest.typeUrl || typeof o.market_id === "string");
  },
  encode(message: QueryPerpetualMarketFundingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPerpetualMarketFundingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPerpetualMarketFundingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPerpetualMarketFundingRequest>): QueryPerpetualMarketFundingRequest {
    const message = createBaseQueryPerpetualMarketFundingRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromAmino(object: QueryPerpetualMarketFundingRequestAmino): QueryPerpetualMarketFundingRequest {
    const message = createBaseQueryPerpetualMarketFundingRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryPerpetualMarketFundingRequest): QueryPerpetualMarketFundingRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryPerpetualMarketFundingRequestAminoMsg): QueryPerpetualMarketFundingRequest {
    return QueryPerpetualMarketFundingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPerpetualMarketFundingRequestProtoMsg): QueryPerpetualMarketFundingRequest {
    return QueryPerpetualMarketFundingRequest.decode(message.value);
  },
  toProto(message: QueryPerpetualMarketFundingRequest): Uint8Array {
    return QueryPerpetualMarketFundingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPerpetualMarketFundingRequest): QueryPerpetualMarketFundingRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingRequest",
      value: QueryPerpetualMarketFundingRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryPerpetualMarketFundingResponse(): QueryPerpetualMarketFundingResponse {
  return {
    state: PerpetualMarketFunding.fromPartial({})
  };
}
export const QueryPerpetualMarketFundingResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingResponse",
  is(o: any): o is QueryPerpetualMarketFundingResponse {
    return o && (o.$typeUrl === QueryPerpetualMarketFundingResponse.typeUrl || PerpetualMarketFunding.is(o.state));
  },
  isAmino(o: any): o is QueryPerpetualMarketFundingResponseAmino {
    return o && (o.$typeUrl === QueryPerpetualMarketFundingResponse.typeUrl || PerpetualMarketFunding.isAmino(o.state));
  },
  encode(message: QueryPerpetualMarketFundingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== undefined) {
      PerpetualMarketFunding.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPerpetualMarketFundingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPerpetualMarketFundingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = PerpetualMarketFunding.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPerpetualMarketFundingResponse>): QueryPerpetualMarketFundingResponse {
    const message = createBaseQueryPerpetualMarketFundingResponse();
    message.state = object.state !== undefined && object.state !== null ? PerpetualMarketFunding.fromPartial(object.state) : undefined;
    return message;
  },
  fromAmino(object: QueryPerpetualMarketFundingResponseAmino): QueryPerpetualMarketFundingResponse {
    const message = createBaseQueryPerpetualMarketFundingResponse();
    if (object.state !== undefined && object.state !== null) {
      message.state = PerpetualMarketFunding.fromAmino(object.state);
    }
    return message;
  },
  toAmino(message: QueryPerpetualMarketFundingResponse): QueryPerpetualMarketFundingResponseAmino {
    const obj: any = {};
    obj.state = message.state ? PerpetualMarketFunding.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPerpetualMarketFundingResponseAminoMsg): QueryPerpetualMarketFundingResponse {
    return QueryPerpetualMarketFundingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPerpetualMarketFundingResponseProtoMsg): QueryPerpetualMarketFundingResponse {
    return QueryPerpetualMarketFundingResponse.decode(message.value);
  },
  toProto(message: QueryPerpetualMarketFundingResponse): Uint8Array {
    return QueryPerpetualMarketFundingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPerpetualMarketFundingResponse): QueryPerpetualMarketFundingResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingResponse",
      value: QueryPerpetualMarketFundingResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PerpetualMarketFunding.registerTypeUrl();
  }
};
function createBaseQuerySubaccountOrderMetadataResponse(): QuerySubaccountOrderMetadataResponse {
  return {
    metadata: []
  };
}
export const QuerySubaccountOrderMetadataResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataResponse",
  is(o: any): o is QuerySubaccountOrderMetadataResponse {
    return o && (o.$typeUrl === QuerySubaccountOrderMetadataResponse.typeUrl || Array.isArray(o.metadata) && (!o.metadata.length || SubaccountOrderbookMetadataWithMarket.is(o.metadata[0])));
  },
  isAmino(o: any): o is QuerySubaccountOrderMetadataResponseAmino {
    return o && (o.$typeUrl === QuerySubaccountOrderMetadataResponse.typeUrl || Array.isArray(o.metadata) && (!o.metadata.length || SubaccountOrderbookMetadataWithMarket.isAmino(o.metadata[0])));
  },
  encode(message: QuerySubaccountOrderMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.metadata) {
      SubaccountOrderbookMetadataWithMarket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountOrderMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountOrderMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata.push(SubaccountOrderbookMetadataWithMarket.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySubaccountOrderMetadataResponse>): QuerySubaccountOrderMetadataResponse {
    const message = createBaseQuerySubaccountOrderMetadataResponse();
    message.metadata = object.metadata?.map(e => SubaccountOrderbookMetadataWithMarket.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySubaccountOrderMetadataResponseAmino): QuerySubaccountOrderMetadataResponse {
    const message = createBaseQuerySubaccountOrderMetadataResponse();
    message.metadata = object.metadata?.map(e => SubaccountOrderbookMetadataWithMarket.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySubaccountOrderMetadataResponse): QuerySubaccountOrderMetadataResponseAmino {
    const obj: any = {};
    if (message.metadata) {
      obj.metadata = message.metadata.map(e => e ? SubaccountOrderbookMetadataWithMarket.toAmino(e) : undefined);
    } else {
      obj.metadata = message.metadata;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountOrderMetadataResponseAminoMsg): QuerySubaccountOrderMetadataResponse {
    return QuerySubaccountOrderMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountOrderMetadataResponseProtoMsg): QuerySubaccountOrderMetadataResponse {
    return QuerySubaccountOrderMetadataResponse.decode(message.value);
  },
  toProto(message: QuerySubaccountOrderMetadataResponse): Uint8Array {
    return QuerySubaccountOrderMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountOrderMetadataResponse): QuerySubaccountOrderMetadataResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataResponse",
      value: QuerySubaccountOrderMetadataResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    SubaccountOrderbookMetadataWithMarket.registerTypeUrl();
  }
};
function createBaseQuerySubaccountTradeNonceResponse(): QuerySubaccountTradeNonceResponse {
  return {
    nonce: 0
  };
}
export const QuerySubaccountTradeNonceResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceResponse",
  is(o: any): o is QuerySubaccountTradeNonceResponse {
    return o && (o.$typeUrl === QuerySubaccountTradeNonceResponse.typeUrl || typeof o.nonce === "number");
  },
  isAmino(o: any): o is QuerySubaccountTradeNonceResponseAmino {
    return o && (o.$typeUrl === QuerySubaccountTradeNonceResponse.typeUrl || typeof o.nonce === "number");
  },
  encode(message: QuerySubaccountTradeNonceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== 0) {
      writer.uint32(8).uint32(message.nonce);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubaccountTradeNonceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubaccountTradeNonceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySubaccountTradeNonceResponse>): QuerySubaccountTradeNonceResponse {
    const message = createBaseQuerySubaccountTradeNonceResponse();
    message.nonce = object.nonce ?? 0;
    return message;
  },
  fromAmino(object: QuerySubaccountTradeNonceResponseAmino): QuerySubaccountTradeNonceResponse {
    const message = createBaseQuerySubaccountTradeNonceResponse();
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    }
    return message;
  },
  toAmino(message: QuerySubaccountTradeNonceResponse): QuerySubaccountTradeNonceResponseAmino {
    const obj: any = {};
    obj.nonce = message.nonce === 0 ? undefined : message.nonce;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountTradeNonceResponseAminoMsg): QuerySubaccountTradeNonceResponse {
    return QuerySubaccountTradeNonceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountTradeNonceResponseProtoMsg): QuerySubaccountTradeNonceResponse {
    return QuerySubaccountTradeNonceResponse.decode(message.value);
  },
  toProto(message: QuerySubaccountTradeNonceResponse): Uint8Array {
    return QuerySubaccountTradeNonceResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountTradeNonceResponse): QuerySubaccountTradeNonceResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceResponse",
      value: QuerySubaccountTradeNonceResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}
export const QueryModuleStateRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryModuleStateRequest",
  is(o: any): o is QueryModuleStateRequest {
    return o && o.$typeUrl === QueryModuleStateRequest.typeUrl;
  },
  isAmino(o: any): o is QueryModuleStateRequestAmino {
    return o && o.$typeUrl === QueryModuleStateRequest.typeUrl;
  },
  encode(_: QueryModuleStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryModuleStateRequest>): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  },
  fromAmino(_: QueryModuleStateRequestAmino): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  },
  toAmino(_: QueryModuleStateRequest): QueryModuleStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryModuleStateRequestAminoMsg): QueryModuleStateRequest {
    return QueryModuleStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleStateRequestProtoMsg): QueryModuleStateRequest {
    return QueryModuleStateRequest.decode(message.value);
  },
  toProto(message: QueryModuleStateRequest): Uint8Array {
    return QueryModuleStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleStateRequest): QueryModuleStateRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryModuleStateRequest",
      value: QueryModuleStateRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryModuleStateResponse(): QueryModuleStateResponse {
  return {
    state: undefined
  };
}
export const QueryModuleStateResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryModuleStateResponse",
  is(o: any): o is QueryModuleStateResponse {
    return o && o.$typeUrl === QueryModuleStateResponse.typeUrl;
  },
  isAmino(o: any): o is QueryModuleStateResponseAmino {
    return o && o.$typeUrl === QueryModuleStateResponse.typeUrl;
  },
  encode(message: QueryModuleStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== undefined) {
      GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = GenesisState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryModuleStateResponse>): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    message.state = object.state !== undefined && object.state !== null ? GenesisState.fromPartial(object.state) : undefined;
    return message;
  },
  fromAmino(object: QueryModuleStateResponseAmino): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    if (object.state !== undefined && object.state !== null) {
      message.state = GenesisState.fromAmino(object.state);
    }
    return message;
  },
  toAmino(message: QueryModuleStateResponse): QueryModuleStateResponseAmino {
    const obj: any = {};
    obj.state = message.state ? GenesisState.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryModuleStateResponseAminoMsg): QueryModuleStateResponse {
    return QueryModuleStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleStateResponseProtoMsg): QueryModuleStateResponse {
    return QueryModuleStateResponse.decode(message.value);
  },
  toProto(message: QueryModuleStateResponse): Uint8Array {
    return QueryModuleStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleStateResponse): QueryModuleStateResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryModuleStateResponse",
      value: QueryModuleStateResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    GenesisState.registerTypeUrl();
  }
};
function createBaseQueryPositionsRequest(): QueryPositionsRequest {
  return {};
}
export const QueryPositionsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryPositionsRequest",
  is(o: any): o is QueryPositionsRequest {
    return o && o.$typeUrl === QueryPositionsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryPositionsRequestAmino {
    return o && o.$typeUrl === QueryPositionsRequest.typeUrl;
  },
  encode(_: QueryPositionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPositionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPositionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryPositionsRequest>): QueryPositionsRequest {
    const message = createBaseQueryPositionsRequest();
    return message;
  },
  fromAmino(_: QueryPositionsRequestAmino): QueryPositionsRequest {
    const message = createBaseQueryPositionsRequest();
    return message;
  },
  toAmino(_: QueryPositionsRequest): QueryPositionsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPositionsRequestAminoMsg): QueryPositionsRequest {
    return QueryPositionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPositionsRequestProtoMsg): QueryPositionsRequest {
    return QueryPositionsRequest.decode(message.value);
  },
  toProto(message: QueryPositionsRequest): Uint8Array {
    return QueryPositionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPositionsRequest): QueryPositionsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryPositionsRequest",
      value: QueryPositionsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryPositionsResponse(): QueryPositionsResponse {
  return {
    state: []
  };
}
export const QueryPositionsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryPositionsResponse",
  is(o: any): o is QueryPositionsResponse {
    return o && (o.$typeUrl === QueryPositionsResponse.typeUrl || Array.isArray(o.state) && (!o.state.length || DerivativePosition.is(o.state[0])));
  },
  isAmino(o: any): o is QueryPositionsResponseAmino {
    return o && (o.$typeUrl === QueryPositionsResponse.typeUrl || Array.isArray(o.state) && (!o.state.length || DerivativePosition.isAmino(o.state[0])));
  },
  encode(message: QueryPositionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.state) {
      DerivativePosition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPositionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state.push(DerivativePosition.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPositionsResponse>): QueryPositionsResponse {
    const message = createBaseQueryPositionsResponse();
    message.state = object.state?.map(e => DerivativePosition.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPositionsResponseAmino): QueryPositionsResponse {
    const message = createBaseQueryPositionsResponse();
    message.state = object.state?.map(e => DerivativePosition.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPositionsResponse): QueryPositionsResponseAmino {
    const obj: any = {};
    if (message.state) {
      obj.state = message.state.map(e => e ? DerivativePosition.toAmino(e) : undefined);
    } else {
      obj.state = message.state;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPositionsResponseAminoMsg): QueryPositionsResponse {
    return QueryPositionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPositionsResponseProtoMsg): QueryPositionsResponse {
    return QueryPositionsResponse.decode(message.value);
  },
  toProto(message: QueryPositionsResponse): Uint8Array {
    return QueryPositionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPositionsResponse): QueryPositionsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryPositionsResponse",
      value: QueryPositionsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    DerivativePosition.registerTypeUrl();
  }
};
function createBaseQueryTradeRewardPointsRequest(): QueryTradeRewardPointsRequest {
  return {
    accounts: [],
    pendingPoolTimestamp: BigInt(0)
  };
}
export const QueryTradeRewardPointsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsRequest",
  is(o: any): o is QueryTradeRewardPointsRequest {
    return o && (o.$typeUrl === QueryTradeRewardPointsRequest.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || typeof o.accounts[0] === "string") && typeof o.pendingPoolTimestamp === "bigint");
  },
  isAmino(o: any): o is QueryTradeRewardPointsRequestAmino {
    return o && (o.$typeUrl === QueryTradeRewardPointsRequest.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || typeof o.accounts[0] === "string") && typeof o.pending_pool_timestamp === "bigint");
  },
  encode(message: QueryTradeRewardPointsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      writer.uint32(10).string(v!);
    }
    if (message.pendingPoolTimestamp !== BigInt(0)) {
      writer.uint32(16).int64(message.pendingPoolTimestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTradeRewardPointsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradeRewardPointsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(reader.string());
          break;
        case 2:
          message.pendingPoolTimestamp = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTradeRewardPointsRequest>): QueryTradeRewardPointsRequest {
    const message = createBaseQueryTradeRewardPointsRequest();
    message.accounts = object.accounts?.map(e => e) || [];
    message.pendingPoolTimestamp = object.pendingPoolTimestamp !== undefined && object.pendingPoolTimestamp !== null ? BigInt(object.pendingPoolTimestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTradeRewardPointsRequestAmino): QueryTradeRewardPointsRequest {
    const message = createBaseQueryTradeRewardPointsRequest();
    message.accounts = object.accounts?.map(e => e) || [];
    if (object.pending_pool_timestamp !== undefined && object.pending_pool_timestamp !== null) {
      message.pendingPoolTimestamp = BigInt(object.pending_pool_timestamp);
    }
    return message;
  },
  toAmino(message: QueryTradeRewardPointsRequest): QueryTradeRewardPointsRequestAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e);
    } else {
      obj.accounts = message.accounts;
    }
    obj.pending_pool_timestamp = message.pendingPoolTimestamp !== BigInt(0) ? message.pendingPoolTimestamp?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTradeRewardPointsRequestAminoMsg): QueryTradeRewardPointsRequest {
    return QueryTradeRewardPointsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTradeRewardPointsRequestProtoMsg): QueryTradeRewardPointsRequest {
    return QueryTradeRewardPointsRequest.decode(message.value);
  },
  toProto(message: QueryTradeRewardPointsRequest): Uint8Array {
    return QueryTradeRewardPointsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTradeRewardPointsRequest): QueryTradeRewardPointsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsRequest",
      value: QueryTradeRewardPointsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryTradeRewardPointsResponse(): QueryTradeRewardPointsResponse {
  return {
    accountTradeRewardPoints: []
  };
}
export const QueryTradeRewardPointsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsResponse",
  is(o: any): o is QueryTradeRewardPointsResponse {
    return o && (o.$typeUrl === QueryTradeRewardPointsResponse.typeUrl || Array.isArray(o.accountTradeRewardPoints) && (!o.accountTradeRewardPoints.length || typeof o.accountTradeRewardPoints[0] === "string"));
  },
  isAmino(o: any): o is QueryTradeRewardPointsResponseAmino {
    return o && (o.$typeUrl === QueryTradeRewardPointsResponse.typeUrl || Array.isArray(o.account_trade_reward_points) && (!o.account_trade_reward_points.length || typeof o.account_trade_reward_points[0] === "string"));
  },
  encode(message: QueryTradeRewardPointsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accountTradeRewardPoints) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTradeRewardPointsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradeRewardPointsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountTradeRewardPoints.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTradeRewardPointsResponse>): QueryTradeRewardPointsResponse {
    const message = createBaseQueryTradeRewardPointsResponse();
    message.accountTradeRewardPoints = object.accountTradeRewardPoints?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryTradeRewardPointsResponseAmino): QueryTradeRewardPointsResponse {
    const message = createBaseQueryTradeRewardPointsResponse();
    message.accountTradeRewardPoints = object.account_trade_reward_points?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryTradeRewardPointsResponse): QueryTradeRewardPointsResponseAmino {
    const obj: any = {};
    if (message.accountTradeRewardPoints) {
      obj.account_trade_reward_points = message.accountTradeRewardPoints.map(e => e);
    } else {
      obj.account_trade_reward_points = message.accountTradeRewardPoints;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTradeRewardPointsResponseAminoMsg): QueryTradeRewardPointsResponse {
    return QueryTradeRewardPointsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTradeRewardPointsResponseProtoMsg): QueryTradeRewardPointsResponse {
    return QueryTradeRewardPointsResponse.decode(message.value);
  },
  toProto(message: QueryTradeRewardPointsResponse): Uint8Array {
    return QueryTradeRewardPointsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTradeRewardPointsResponse): QueryTradeRewardPointsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsResponse",
      value: QueryTradeRewardPointsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryTradeRewardCampaignRequest(): QueryTradeRewardCampaignRequest {
  return {};
}
export const QueryTradeRewardCampaignRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignRequest",
  is(o: any): o is QueryTradeRewardCampaignRequest {
    return o && o.$typeUrl === QueryTradeRewardCampaignRequest.typeUrl;
  },
  isAmino(o: any): o is QueryTradeRewardCampaignRequestAmino {
    return o && o.$typeUrl === QueryTradeRewardCampaignRequest.typeUrl;
  },
  encode(_: QueryTradeRewardCampaignRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTradeRewardCampaignRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradeRewardCampaignRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryTradeRewardCampaignRequest>): QueryTradeRewardCampaignRequest {
    const message = createBaseQueryTradeRewardCampaignRequest();
    return message;
  },
  fromAmino(_: QueryTradeRewardCampaignRequestAmino): QueryTradeRewardCampaignRequest {
    const message = createBaseQueryTradeRewardCampaignRequest();
    return message;
  },
  toAmino(_: QueryTradeRewardCampaignRequest): QueryTradeRewardCampaignRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTradeRewardCampaignRequestAminoMsg): QueryTradeRewardCampaignRequest {
    return QueryTradeRewardCampaignRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTradeRewardCampaignRequestProtoMsg): QueryTradeRewardCampaignRequest {
    return QueryTradeRewardCampaignRequest.decode(message.value);
  },
  toProto(message: QueryTradeRewardCampaignRequest): Uint8Array {
    return QueryTradeRewardCampaignRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTradeRewardCampaignRequest): QueryTradeRewardCampaignRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignRequest",
      value: QueryTradeRewardCampaignRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryTradeRewardCampaignResponse(): QueryTradeRewardCampaignResponse {
  return {
    tradingRewardCampaignInfo: undefined,
    tradingRewardPoolCampaignSchedule: [],
    totalTradeRewardPoints: "",
    pendingTradingRewardPoolCampaignSchedule: [],
    pendingTotalTradeRewardPoints: []
  };
}
export const QueryTradeRewardCampaignResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignResponse",
  is(o: any): o is QueryTradeRewardCampaignResponse {
    return o && (o.$typeUrl === QueryTradeRewardCampaignResponse.typeUrl || Array.isArray(o.tradingRewardPoolCampaignSchedule) && (!o.tradingRewardPoolCampaignSchedule.length || CampaignRewardPool.is(o.tradingRewardPoolCampaignSchedule[0])) && typeof o.totalTradeRewardPoints === "string" && Array.isArray(o.pendingTradingRewardPoolCampaignSchedule) && (!o.pendingTradingRewardPoolCampaignSchedule.length || CampaignRewardPool.is(o.pendingTradingRewardPoolCampaignSchedule[0])) && Array.isArray(o.pendingTotalTradeRewardPoints) && (!o.pendingTotalTradeRewardPoints.length || typeof o.pendingTotalTradeRewardPoints[0] === "string"));
  },
  isAmino(o: any): o is QueryTradeRewardCampaignResponseAmino {
    return o && (o.$typeUrl === QueryTradeRewardCampaignResponse.typeUrl || Array.isArray(o.trading_reward_pool_campaign_schedule) && (!o.trading_reward_pool_campaign_schedule.length || CampaignRewardPool.isAmino(o.trading_reward_pool_campaign_schedule[0])) && typeof o.total_trade_reward_points === "string" && Array.isArray(o.pending_trading_reward_pool_campaign_schedule) && (!o.pending_trading_reward_pool_campaign_schedule.length || CampaignRewardPool.isAmino(o.pending_trading_reward_pool_campaign_schedule[0])) && Array.isArray(o.pending_total_trade_reward_points) && (!o.pending_total_trade_reward_points.length || typeof o.pending_total_trade_reward_points[0] === "string"));
  },
  encode(message: QueryTradeRewardCampaignResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradingRewardCampaignInfo !== undefined) {
      TradingRewardCampaignInfo.encode(message.tradingRewardCampaignInfo, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tradingRewardPoolCampaignSchedule) {
      CampaignRewardPool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalTradeRewardPoints !== "") {
      writer.uint32(26).string(message.totalTradeRewardPoints);
    }
    for (const v of message.pendingTradingRewardPoolCampaignSchedule) {
      CampaignRewardPool.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.pendingTotalTradeRewardPoints) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTradeRewardCampaignResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradeRewardCampaignResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradingRewardCampaignInfo = TradingRewardCampaignInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.tradingRewardPoolCampaignSchedule.push(CampaignRewardPool.decode(reader, reader.uint32()));
          break;
        case 3:
          message.totalTradeRewardPoints = reader.string();
          break;
        case 4:
          message.pendingTradingRewardPoolCampaignSchedule.push(CampaignRewardPool.decode(reader, reader.uint32()));
          break;
        case 5:
          message.pendingTotalTradeRewardPoints.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTradeRewardCampaignResponse>): QueryTradeRewardCampaignResponse {
    const message = createBaseQueryTradeRewardCampaignResponse();
    message.tradingRewardCampaignInfo = object.tradingRewardCampaignInfo !== undefined && object.tradingRewardCampaignInfo !== null ? TradingRewardCampaignInfo.fromPartial(object.tradingRewardCampaignInfo) : undefined;
    message.tradingRewardPoolCampaignSchedule = object.tradingRewardPoolCampaignSchedule?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    message.totalTradeRewardPoints = object.totalTradeRewardPoints ?? "";
    message.pendingTradingRewardPoolCampaignSchedule = object.pendingTradingRewardPoolCampaignSchedule?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    message.pendingTotalTradeRewardPoints = object.pendingTotalTradeRewardPoints?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryTradeRewardCampaignResponseAmino): QueryTradeRewardCampaignResponse {
    const message = createBaseQueryTradeRewardCampaignResponse();
    if (object.trading_reward_campaign_info !== undefined && object.trading_reward_campaign_info !== null) {
      message.tradingRewardCampaignInfo = TradingRewardCampaignInfo.fromAmino(object.trading_reward_campaign_info);
    }
    message.tradingRewardPoolCampaignSchedule = object.trading_reward_pool_campaign_schedule?.map(e => CampaignRewardPool.fromAmino(e)) || [];
    if (object.total_trade_reward_points !== undefined && object.total_trade_reward_points !== null) {
      message.totalTradeRewardPoints = object.total_trade_reward_points;
    }
    message.pendingTradingRewardPoolCampaignSchedule = object.pending_trading_reward_pool_campaign_schedule?.map(e => CampaignRewardPool.fromAmino(e)) || [];
    message.pendingTotalTradeRewardPoints = object.pending_total_trade_reward_points?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryTradeRewardCampaignResponse): QueryTradeRewardCampaignResponseAmino {
    const obj: any = {};
    obj.trading_reward_campaign_info = message.tradingRewardCampaignInfo ? TradingRewardCampaignInfo.toAmino(message.tradingRewardCampaignInfo) : undefined;
    if (message.tradingRewardPoolCampaignSchedule) {
      obj.trading_reward_pool_campaign_schedule = message.tradingRewardPoolCampaignSchedule.map(e => e ? CampaignRewardPool.toAmino(e) : undefined);
    } else {
      obj.trading_reward_pool_campaign_schedule = message.tradingRewardPoolCampaignSchedule;
    }
    obj.total_trade_reward_points = message.totalTradeRewardPoints === "" ? undefined : message.totalTradeRewardPoints;
    if (message.pendingTradingRewardPoolCampaignSchedule) {
      obj.pending_trading_reward_pool_campaign_schedule = message.pendingTradingRewardPoolCampaignSchedule.map(e => e ? CampaignRewardPool.toAmino(e) : undefined);
    } else {
      obj.pending_trading_reward_pool_campaign_schedule = message.pendingTradingRewardPoolCampaignSchedule;
    }
    if (message.pendingTotalTradeRewardPoints) {
      obj.pending_total_trade_reward_points = message.pendingTotalTradeRewardPoints.map(e => e);
    } else {
      obj.pending_total_trade_reward_points = message.pendingTotalTradeRewardPoints;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTradeRewardCampaignResponseAminoMsg): QueryTradeRewardCampaignResponse {
    return QueryTradeRewardCampaignResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTradeRewardCampaignResponseProtoMsg): QueryTradeRewardCampaignResponse {
    return QueryTradeRewardCampaignResponse.decode(message.value);
  },
  toProto(message: QueryTradeRewardCampaignResponse): Uint8Array {
    return QueryTradeRewardCampaignResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTradeRewardCampaignResponse): QueryTradeRewardCampaignResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignResponse",
      value: QueryTradeRewardCampaignResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    TradingRewardCampaignInfo.registerTypeUrl();
    CampaignRewardPool.registerTypeUrl();
  }
};
function createBaseQueryIsOptedOutOfRewardsRequest(): QueryIsOptedOutOfRewardsRequest {
  return {
    account: ""
  };
}
export const QueryIsOptedOutOfRewardsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsRequest",
  is(o: any): o is QueryIsOptedOutOfRewardsRequest {
    return o && (o.$typeUrl === QueryIsOptedOutOfRewardsRequest.typeUrl || typeof o.account === "string");
  },
  isAmino(o: any): o is QueryIsOptedOutOfRewardsRequestAmino {
    return o && (o.$typeUrl === QueryIsOptedOutOfRewardsRequest.typeUrl || typeof o.account === "string");
  },
  encode(message: QueryIsOptedOutOfRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIsOptedOutOfRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsOptedOutOfRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryIsOptedOutOfRewardsRequest>): QueryIsOptedOutOfRewardsRequest {
    const message = createBaseQueryIsOptedOutOfRewardsRequest();
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: QueryIsOptedOutOfRewardsRequestAmino): QueryIsOptedOutOfRewardsRequest {
    const message = createBaseQueryIsOptedOutOfRewardsRequest();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    return message;
  },
  toAmino(message: QueryIsOptedOutOfRewardsRequest): QueryIsOptedOutOfRewardsRequestAmino {
    const obj: any = {};
    obj.account = message.account === "" ? undefined : message.account;
    return obj;
  },
  fromAminoMsg(object: QueryIsOptedOutOfRewardsRequestAminoMsg): QueryIsOptedOutOfRewardsRequest {
    return QueryIsOptedOutOfRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsOptedOutOfRewardsRequestProtoMsg): QueryIsOptedOutOfRewardsRequest {
    return QueryIsOptedOutOfRewardsRequest.decode(message.value);
  },
  toProto(message: QueryIsOptedOutOfRewardsRequest): Uint8Array {
    return QueryIsOptedOutOfRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIsOptedOutOfRewardsRequest): QueryIsOptedOutOfRewardsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsRequest",
      value: QueryIsOptedOutOfRewardsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryIsOptedOutOfRewardsResponse(): QueryIsOptedOutOfRewardsResponse {
  return {
    isOptedOut: false
  };
}
export const QueryIsOptedOutOfRewardsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsResponse",
  is(o: any): o is QueryIsOptedOutOfRewardsResponse {
    return o && (o.$typeUrl === QueryIsOptedOutOfRewardsResponse.typeUrl || typeof o.isOptedOut === "boolean");
  },
  isAmino(o: any): o is QueryIsOptedOutOfRewardsResponseAmino {
    return o && (o.$typeUrl === QueryIsOptedOutOfRewardsResponse.typeUrl || typeof o.is_opted_out === "boolean");
  },
  encode(message: QueryIsOptedOutOfRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isOptedOut === true) {
      writer.uint32(8).bool(message.isOptedOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIsOptedOutOfRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsOptedOutOfRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isOptedOut = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryIsOptedOutOfRewardsResponse>): QueryIsOptedOutOfRewardsResponse {
    const message = createBaseQueryIsOptedOutOfRewardsResponse();
    message.isOptedOut = object.isOptedOut ?? false;
    return message;
  },
  fromAmino(object: QueryIsOptedOutOfRewardsResponseAmino): QueryIsOptedOutOfRewardsResponse {
    const message = createBaseQueryIsOptedOutOfRewardsResponse();
    if (object.is_opted_out !== undefined && object.is_opted_out !== null) {
      message.isOptedOut = object.is_opted_out;
    }
    return message;
  },
  toAmino(message: QueryIsOptedOutOfRewardsResponse): QueryIsOptedOutOfRewardsResponseAmino {
    const obj: any = {};
    obj.is_opted_out = message.isOptedOut === false ? undefined : message.isOptedOut;
    return obj;
  },
  fromAminoMsg(object: QueryIsOptedOutOfRewardsResponseAminoMsg): QueryIsOptedOutOfRewardsResponse {
    return QueryIsOptedOutOfRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsOptedOutOfRewardsResponseProtoMsg): QueryIsOptedOutOfRewardsResponse {
    return QueryIsOptedOutOfRewardsResponse.decode(message.value);
  },
  toProto(message: QueryIsOptedOutOfRewardsResponse): Uint8Array {
    return QueryIsOptedOutOfRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIsOptedOutOfRewardsResponse): QueryIsOptedOutOfRewardsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsResponse",
      value: QueryIsOptedOutOfRewardsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryOptedOutOfRewardsAccountsRequest(): QueryOptedOutOfRewardsAccountsRequest {
  return {};
}
export const QueryOptedOutOfRewardsAccountsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsRequest",
  is(o: any): o is QueryOptedOutOfRewardsAccountsRequest {
    return o && o.$typeUrl === QueryOptedOutOfRewardsAccountsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryOptedOutOfRewardsAccountsRequestAmino {
    return o && o.$typeUrl === QueryOptedOutOfRewardsAccountsRequest.typeUrl;
  },
  encode(_: QueryOptedOutOfRewardsAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOptedOutOfRewardsAccountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOptedOutOfRewardsAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryOptedOutOfRewardsAccountsRequest>): QueryOptedOutOfRewardsAccountsRequest {
    const message = createBaseQueryOptedOutOfRewardsAccountsRequest();
    return message;
  },
  fromAmino(_: QueryOptedOutOfRewardsAccountsRequestAmino): QueryOptedOutOfRewardsAccountsRequest {
    const message = createBaseQueryOptedOutOfRewardsAccountsRequest();
    return message;
  },
  toAmino(_: QueryOptedOutOfRewardsAccountsRequest): QueryOptedOutOfRewardsAccountsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryOptedOutOfRewardsAccountsRequestAminoMsg): QueryOptedOutOfRewardsAccountsRequest {
    return QueryOptedOutOfRewardsAccountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOptedOutOfRewardsAccountsRequestProtoMsg): QueryOptedOutOfRewardsAccountsRequest {
    return QueryOptedOutOfRewardsAccountsRequest.decode(message.value);
  },
  toProto(message: QueryOptedOutOfRewardsAccountsRequest): Uint8Array {
    return QueryOptedOutOfRewardsAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOptedOutOfRewardsAccountsRequest): QueryOptedOutOfRewardsAccountsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsRequest",
      value: QueryOptedOutOfRewardsAccountsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryOptedOutOfRewardsAccountsResponse(): QueryOptedOutOfRewardsAccountsResponse {
  return {
    accounts: []
  };
}
export const QueryOptedOutOfRewardsAccountsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsResponse",
  is(o: any): o is QueryOptedOutOfRewardsAccountsResponse {
    return o && (o.$typeUrl === QueryOptedOutOfRewardsAccountsResponse.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || typeof o.accounts[0] === "string"));
  },
  isAmino(o: any): o is QueryOptedOutOfRewardsAccountsResponseAmino {
    return o && (o.$typeUrl === QueryOptedOutOfRewardsAccountsResponse.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || typeof o.accounts[0] === "string"));
  },
  encode(message: QueryOptedOutOfRewardsAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOptedOutOfRewardsAccountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOptedOutOfRewardsAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOptedOutOfRewardsAccountsResponse>): QueryOptedOutOfRewardsAccountsResponse {
    const message = createBaseQueryOptedOutOfRewardsAccountsResponse();
    message.accounts = object.accounts?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryOptedOutOfRewardsAccountsResponseAmino): QueryOptedOutOfRewardsAccountsResponse {
    const message = createBaseQueryOptedOutOfRewardsAccountsResponse();
    message.accounts = object.accounts?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryOptedOutOfRewardsAccountsResponse): QueryOptedOutOfRewardsAccountsResponseAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e);
    } else {
      obj.accounts = message.accounts;
    }
    return obj;
  },
  fromAminoMsg(object: QueryOptedOutOfRewardsAccountsResponseAminoMsg): QueryOptedOutOfRewardsAccountsResponse {
    return QueryOptedOutOfRewardsAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOptedOutOfRewardsAccountsResponseProtoMsg): QueryOptedOutOfRewardsAccountsResponse {
    return QueryOptedOutOfRewardsAccountsResponse.decode(message.value);
  },
  toProto(message: QueryOptedOutOfRewardsAccountsResponse): Uint8Array {
    return QueryOptedOutOfRewardsAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOptedOutOfRewardsAccountsResponse): QueryOptedOutOfRewardsAccountsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsResponse",
      value: QueryOptedOutOfRewardsAccountsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryFeeDiscountAccountInfoRequest(): QueryFeeDiscountAccountInfoRequest {
  return {
    account: ""
  };
}
export const QueryFeeDiscountAccountInfoRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoRequest",
  is(o: any): o is QueryFeeDiscountAccountInfoRequest {
    return o && (o.$typeUrl === QueryFeeDiscountAccountInfoRequest.typeUrl || typeof o.account === "string");
  },
  isAmino(o: any): o is QueryFeeDiscountAccountInfoRequestAmino {
    return o && (o.$typeUrl === QueryFeeDiscountAccountInfoRequest.typeUrl || typeof o.account === "string");
  },
  encode(message: QueryFeeDiscountAccountInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeDiscountAccountInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeDiscountAccountInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFeeDiscountAccountInfoRequest>): QueryFeeDiscountAccountInfoRequest {
    const message = createBaseQueryFeeDiscountAccountInfoRequest();
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: QueryFeeDiscountAccountInfoRequestAmino): QueryFeeDiscountAccountInfoRequest {
    const message = createBaseQueryFeeDiscountAccountInfoRequest();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    return message;
  },
  toAmino(message: QueryFeeDiscountAccountInfoRequest): QueryFeeDiscountAccountInfoRequestAmino {
    const obj: any = {};
    obj.account = message.account === "" ? undefined : message.account;
    return obj;
  },
  fromAminoMsg(object: QueryFeeDiscountAccountInfoRequestAminoMsg): QueryFeeDiscountAccountInfoRequest {
    return QueryFeeDiscountAccountInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeDiscountAccountInfoRequestProtoMsg): QueryFeeDiscountAccountInfoRequest {
    return QueryFeeDiscountAccountInfoRequest.decode(message.value);
  },
  toProto(message: QueryFeeDiscountAccountInfoRequest): Uint8Array {
    return QueryFeeDiscountAccountInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeDiscountAccountInfoRequest): QueryFeeDiscountAccountInfoRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoRequest",
      value: QueryFeeDiscountAccountInfoRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryFeeDiscountAccountInfoResponse(): QueryFeeDiscountAccountInfoResponse {
  return {
    tierLevel: BigInt(0),
    accountInfo: undefined,
    accountTtl: undefined
  };
}
export const QueryFeeDiscountAccountInfoResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoResponse",
  is(o: any): o is QueryFeeDiscountAccountInfoResponse {
    return o && (o.$typeUrl === QueryFeeDiscountAccountInfoResponse.typeUrl || typeof o.tierLevel === "bigint");
  },
  isAmino(o: any): o is QueryFeeDiscountAccountInfoResponseAmino {
    return o && (o.$typeUrl === QueryFeeDiscountAccountInfoResponse.typeUrl || typeof o.tier_level === "bigint");
  },
  encode(message: QueryFeeDiscountAccountInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tierLevel !== BigInt(0)) {
      writer.uint32(8).uint64(message.tierLevel);
    }
    if (message.accountInfo !== undefined) {
      FeeDiscountTierInfo.encode(message.accountInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.accountTtl !== undefined) {
      FeeDiscountTierTTL.encode(message.accountTtl, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeDiscountAccountInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeDiscountAccountInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tierLevel = reader.uint64();
          break;
        case 2:
          message.accountInfo = FeeDiscountTierInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.accountTtl = FeeDiscountTierTTL.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFeeDiscountAccountInfoResponse>): QueryFeeDiscountAccountInfoResponse {
    const message = createBaseQueryFeeDiscountAccountInfoResponse();
    message.tierLevel = object.tierLevel !== undefined && object.tierLevel !== null ? BigInt(object.tierLevel.toString()) : BigInt(0);
    message.accountInfo = object.accountInfo !== undefined && object.accountInfo !== null ? FeeDiscountTierInfo.fromPartial(object.accountInfo) : undefined;
    message.accountTtl = object.accountTtl !== undefined && object.accountTtl !== null ? FeeDiscountTierTTL.fromPartial(object.accountTtl) : undefined;
    return message;
  },
  fromAmino(object: QueryFeeDiscountAccountInfoResponseAmino): QueryFeeDiscountAccountInfoResponse {
    const message = createBaseQueryFeeDiscountAccountInfoResponse();
    if (object.tier_level !== undefined && object.tier_level !== null) {
      message.tierLevel = BigInt(object.tier_level);
    }
    if (object.account_info !== undefined && object.account_info !== null) {
      message.accountInfo = FeeDiscountTierInfo.fromAmino(object.account_info);
    }
    if (object.account_ttl !== undefined && object.account_ttl !== null) {
      message.accountTtl = FeeDiscountTierTTL.fromAmino(object.account_ttl);
    }
    return message;
  },
  toAmino(message: QueryFeeDiscountAccountInfoResponse): QueryFeeDiscountAccountInfoResponseAmino {
    const obj: any = {};
    obj.tier_level = message.tierLevel !== BigInt(0) ? message.tierLevel?.toString() : undefined;
    obj.account_info = message.accountInfo ? FeeDiscountTierInfo.toAmino(message.accountInfo) : undefined;
    obj.account_ttl = message.accountTtl ? FeeDiscountTierTTL.toAmino(message.accountTtl) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeeDiscountAccountInfoResponseAminoMsg): QueryFeeDiscountAccountInfoResponse {
    return QueryFeeDiscountAccountInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeDiscountAccountInfoResponseProtoMsg): QueryFeeDiscountAccountInfoResponse {
    return QueryFeeDiscountAccountInfoResponse.decode(message.value);
  },
  toProto(message: QueryFeeDiscountAccountInfoResponse): Uint8Array {
    return QueryFeeDiscountAccountInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeDiscountAccountInfoResponse): QueryFeeDiscountAccountInfoResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoResponse",
      value: QueryFeeDiscountAccountInfoResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    FeeDiscountTierInfo.registerTypeUrl();
    FeeDiscountTierTTL.registerTypeUrl();
  }
};
function createBaseQueryFeeDiscountScheduleRequest(): QueryFeeDiscountScheduleRequest {
  return {};
}
export const QueryFeeDiscountScheduleRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleRequest",
  is(o: any): o is QueryFeeDiscountScheduleRequest {
    return o && o.$typeUrl === QueryFeeDiscountScheduleRequest.typeUrl;
  },
  isAmino(o: any): o is QueryFeeDiscountScheduleRequestAmino {
    return o && o.$typeUrl === QueryFeeDiscountScheduleRequest.typeUrl;
  },
  encode(_: QueryFeeDiscountScheduleRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeDiscountScheduleRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeDiscountScheduleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryFeeDiscountScheduleRequest>): QueryFeeDiscountScheduleRequest {
    const message = createBaseQueryFeeDiscountScheduleRequest();
    return message;
  },
  fromAmino(_: QueryFeeDiscountScheduleRequestAmino): QueryFeeDiscountScheduleRequest {
    const message = createBaseQueryFeeDiscountScheduleRequest();
    return message;
  },
  toAmino(_: QueryFeeDiscountScheduleRequest): QueryFeeDiscountScheduleRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryFeeDiscountScheduleRequestAminoMsg): QueryFeeDiscountScheduleRequest {
    return QueryFeeDiscountScheduleRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeDiscountScheduleRequestProtoMsg): QueryFeeDiscountScheduleRequest {
    return QueryFeeDiscountScheduleRequest.decode(message.value);
  },
  toProto(message: QueryFeeDiscountScheduleRequest): Uint8Array {
    return QueryFeeDiscountScheduleRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeDiscountScheduleRequest): QueryFeeDiscountScheduleRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleRequest",
      value: QueryFeeDiscountScheduleRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryFeeDiscountScheduleResponse(): QueryFeeDiscountScheduleResponse {
  return {
    feeDiscountSchedule: undefined
  };
}
export const QueryFeeDiscountScheduleResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleResponse",
  is(o: any): o is QueryFeeDiscountScheduleResponse {
    return o && o.$typeUrl === QueryFeeDiscountScheduleResponse.typeUrl;
  },
  isAmino(o: any): o is QueryFeeDiscountScheduleResponseAmino {
    return o && o.$typeUrl === QueryFeeDiscountScheduleResponse.typeUrl;
  },
  encode(message: QueryFeeDiscountScheduleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeDiscountSchedule !== undefined) {
      FeeDiscountSchedule.encode(message.feeDiscountSchedule, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeDiscountScheduleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeDiscountScheduleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeDiscountSchedule = FeeDiscountSchedule.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFeeDiscountScheduleResponse>): QueryFeeDiscountScheduleResponse {
    const message = createBaseQueryFeeDiscountScheduleResponse();
    message.feeDiscountSchedule = object.feeDiscountSchedule !== undefined && object.feeDiscountSchedule !== null ? FeeDiscountSchedule.fromPartial(object.feeDiscountSchedule) : undefined;
    return message;
  },
  fromAmino(object: QueryFeeDiscountScheduleResponseAmino): QueryFeeDiscountScheduleResponse {
    const message = createBaseQueryFeeDiscountScheduleResponse();
    if (object.fee_discount_schedule !== undefined && object.fee_discount_schedule !== null) {
      message.feeDiscountSchedule = FeeDiscountSchedule.fromAmino(object.fee_discount_schedule);
    }
    return message;
  },
  toAmino(message: QueryFeeDiscountScheduleResponse): QueryFeeDiscountScheduleResponseAmino {
    const obj: any = {};
    obj.fee_discount_schedule = message.feeDiscountSchedule ? FeeDiscountSchedule.toAmino(message.feeDiscountSchedule) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeeDiscountScheduleResponseAminoMsg): QueryFeeDiscountScheduleResponse {
    return QueryFeeDiscountScheduleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeDiscountScheduleResponseProtoMsg): QueryFeeDiscountScheduleResponse {
    return QueryFeeDiscountScheduleResponse.decode(message.value);
  },
  toProto(message: QueryFeeDiscountScheduleResponse): Uint8Array {
    return QueryFeeDiscountScheduleResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeDiscountScheduleResponse): QueryFeeDiscountScheduleResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleResponse",
      value: QueryFeeDiscountScheduleResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    FeeDiscountSchedule.registerTypeUrl();
  }
};
function createBaseQueryBalanceMismatchesRequest(): QueryBalanceMismatchesRequest {
  return {
    dustFactor: BigInt(0)
  };
}
export const QueryBalanceMismatchesRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesRequest",
  is(o: any): o is QueryBalanceMismatchesRequest {
    return o && (o.$typeUrl === QueryBalanceMismatchesRequest.typeUrl || typeof o.dustFactor === "bigint");
  },
  isAmino(o: any): o is QueryBalanceMismatchesRequestAmino {
    return o && (o.$typeUrl === QueryBalanceMismatchesRequest.typeUrl || typeof o.dust_factor === "bigint");
  },
  encode(message: QueryBalanceMismatchesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dustFactor !== BigInt(0)) {
      writer.uint32(8).int64(message.dustFactor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceMismatchesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceMismatchesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dustFactor = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBalanceMismatchesRequest>): QueryBalanceMismatchesRequest {
    const message = createBaseQueryBalanceMismatchesRequest();
    message.dustFactor = object.dustFactor !== undefined && object.dustFactor !== null ? BigInt(object.dustFactor.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryBalanceMismatchesRequestAmino): QueryBalanceMismatchesRequest {
    const message = createBaseQueryBalanceMismatchesRequest();
    if (object.dust_factor !== undefined && object.dust_factor !== null) {
      message.dustFactor = BigInt(object.dust_factor);
    }
    return message;
  },
  toAmino(message: QueryBalanceMismatchesRequest): QueryBalanceMismatchesRequestAmino {
    const obj: any = {};
    obj.dust_factor = message.dustFactor !== BigInt(0) ? message.dustFactor?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceMismatchesRequestAminoMsg): QueryBalanceMismatchesRequest {
    return QueryBalanceMismatchesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceMismatchesRequestProtoMsg): QueryBalanceMismatchesRequest {
    return QueryBalanceMismatchesRequest.decode(message.value);
  },
  toProto(message: QueryBalanceMismatchesRequest): Uint8Array {
    return QueryBalanceMismatchesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceMismatchesRequest): QueryBalanceMismatchesRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesRequest",
      value: QueryBalanceMismatchesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseBalanceMismatch(): BalanceMismatch {
  return {
    subaccountId: "",
    denom: "",
    available: "",
    total: "",
    balanceHold: "",
    expectedTotal: "",
    difference: ""
  };
}
export const BalanceMismatch = {
  typeUrl: "/injective.exchange.v1beta1.BalanceMismatch",
  is(o: any): o is BalanceMismatch {
    return o && (o.$typeUrl === BalanceMismatch.typeUrl || typeof o.subaccountId === "string" && typeof o.denom === "string" && typeof o.available === "string" && typeof o.total === "string" && typeof o.balanceHold === "string" && typeof o.expectedTotal === "string" && typeof o.difference === "string");
  },
  isAmino(o: any): o is BalanceMismatchAmino {
    return o && (o.$typeUrl === BalanceMismatch.typeUrl || typeof o.subaccountId === "string" && typeof o.denom === "string" && typeof o.available === "string" && typeof o.total === "string" && typeof o.balance_hold === "string" && typeof o.expected_total === "string" && typeof o.difference === "string");
  },
  encode(message: BalanceMismatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.available !== "") {
      writer.uint32(26).string(message.available);
    }
    if (message.total !== "") {
      writer.uint32(34).string(message.total);
    }
    if (message.balanceHold !== "") {
      writer.uint32(42).string(message.balanceHold);
    }
    if (message.expectedTotal !== "") {
      writer.uint32(50).string(message.expectedTotal);
    }
    if (message.difference !== "") {
      writer.uint32(58).string(message.difference);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BalanceMismatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalanceMismatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.available = reader.string();
          break;
        case 4:
          message.total = reader.string();
          break;
        case 5:
          message.balanceHold = reader.string();
          break;
        case 6:
          message.expectedTotal = reader.string();
          break;
        case 7:
          message.difference = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BalanceMismatch>): BalanceMismatch {
    const message = createBaseBalanceMismatch();
    message.subaccountId = object.subaccountId ?? "";
    message.denom = object.denom ?? "";
    message.available = object.available ?? "";
    message.total = object.total ?? "";
    message.balanceHold = object.balanceHold ?? "";
    message.expectedTotal = object.expectedTotal ?? "";
    message.difference = object.difference ?? "";
    return message;
  },
  fromAmino(object: BalanceMismatchAmino): BalanceMismatch {
    const message = createBaseBalanceMismatch();
    if (object.subaccountId !== undefined && object.subaccountId !== null) {
      message.subaccountId = object.subaccountId;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.available !== undefined && object.available !== null) {
      message.available = object.available;
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    }
    if (object.balance_hold !== undefined && object.balance_hold !== null) {
      message.balanceHold = object.balance_hold;
    }
    if (object.expected_total !== undefined && object.expected_total !== null) {
      message.expectedTotal = object.expected_total;
    }
    if (object.difference !== undefined && object.difference !== null) {
      message.difference = object.difference;
    }
    return message;
  },
  toAmino(message: BalanceMismatch): BalanceMismatchAmino {
    const obj: any = {};
    obj.subaccountId = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.available = message.available === "" ? undefined : message.available;
    obj.total = message.total === "" ? undefined : message.total;
    obj.balance_hold = message.balanceHold === "" ? undefined : message.balanceHold;
    obj.expected_total = message.expectedTotal === "" ? undefined : message.expectedTotal;
    obj.difference = message.difference === "" ? undefined : message.difference;
    return obj;
  },
  fromAminoMsg(object: BalanceMismatchAminoMsg): BalanceMismatch {
    return BalanceMismatch.fromAmino(object.value);
  },
  fromProtoMsg(message: BalanceMismatchProtoMsg): BalanceMismatch {
    return BalanceMismatch.decode(message.value);
  },
  toProto(message: BalanceMismatch): Uint8Array {
    return BalanceMismatch.encode(message).finish();
  },
  toProtoMsg(message: BalanceMismatch): BalanceMismatchProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BalanceMismatch",
      value: BalanceMismatch.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryBalanceMismatchesResponse(): QueryBalanceMismatchesResponse {
  return {
    balanceMismatches: []
  };
}
export const QueryBalanceMismatchesResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesResponse",
  is(o: any): o is QueryBalanceMismatchesResponse {
    return o && (o.$typeUrl === QueryBalanceMismatchesResponse.typeUrl || Array.isArray(o.balanceMismatches) && (!o.balanceMismatches.length || BalanceMismatch.is(o.balanceMismatches[0])));
  },
  isAmino(o: any): o is QueryBalanceMismatchesResponseAmino {
    return o && (o.$typeUrl === QueryBalanceMismatchesResponse.typeUrl || Array.isArray(o.balance_mismatches) && (!o.balance_mismatches.length || BalanceMismatch.isAmino(o.balance_mismatches[0])));
  },
  encode(message: QueryBalanceMismatchesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.balanceMismatches) {
      BalanceMismatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceMismatchesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceMismatchesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balanceMismatches.push(BalanceMismatch.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBalanceMismatchesResponse>): QueryBalanceMismatchesResponse {
    const message = createBaseQueryBalanceMismatchesResponse();
    message.balanceMismatches = object.balanceMismatches?.map(e => BalanceMismatch.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryBalanceMismatchesResponseAmino): QueryBalanceMismatchesResponse {
    const message = createBaseQueryBalanceMismatchesResponse();
    message.balanceMismatches = object.balance_mismatches?.map(e => BalanceMismatch.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryBalanceMismatchesResponse): QueryBalanceMismatchesResponseAmino {
    const obj: any = {};
    if (message.balanceMismatches) {
      obj.balance_mismatches = message.balanceMismatches.map(e => e ? BalanceMismatch.toAmino(e) : undefined);
    } else {
      obj.balance_mismatches = message.balanceMismatches;
    }
    return obj;
  },
  fromAminoMsg(object: QueryBalanceMismatchesResponseAminoMsg): QueryBalanceMismatchesResponse {
    return QueryBalanceMismatchesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceMismatchesResponseProtoMsg): QueryBalanceMismatchesResponse {
    return QueryBalanceMismatchesResponse.decode(message.value);
  },
  toProto(message: QueryBalanceMismatchesResponse): Uint8Array {
    return QueryBalanceMismatchesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceMismatchesResponse): QueryBalanceMismatchesResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesResponse",
      value: QueryBalanceMismatchesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    BalanceMismatch.registerTypeUrl();
  }
};
function createBaseQueryBalanceWithBalanceHoldsRequest(): QueryBalanceWithBalanceHoldsRequest {
  return {};
}
export const QueryBalanceWithBalanceHoldsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsRequest",
  is(o: any): o is QueryBalanceWithBalanceHoldsRequest {
    return o && o.$typeUrl === QueryBalanceWithBalanceHoldsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryBalanceWithBalanceHoldsRequestAmino {
    return o && o.$typeUrl === QueryBalanceWithBalanceHoldsRequest.typeUrl;
  },
  encode(_: QueryBalanceWithBalanceHoldsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceWithBalanceHoldsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceWithBalanceHoldsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryBalanceWithBalanceHoldsRequest>): QueryBalanceWithBalanceHoldsRequest {
    const message = createBaseQueryBalanceWithBalanceHoldsRequest();
    return message;
  },
  fromAmino(_: QueryBalanceWithBalanceHoldsRequestAmino): QueryBalanceWithBalanceHoldsRequest {
    const message = createBaseQueryBalanceWithBalanceHoldsRequest();
    return message;
  },
  toAmino(_: QueryBalanceWithBalanceHoldsRequest): QueryBalanceWithBalanceHoldsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBalanceWithBalanceHoldsRequestAminoMsg): QueryBalanceWithBalanceHoldsRequest {
    return QueryBalanceWithBalanceHoldsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceWithBalanceHoldsRequestProtoMsg): QueryBalanceWithBalanceHoldsRequest {
    return QueryBalanceWithBalanceHoldsRequest.decode(message.value);
  },
  toProto(message: QueryBalanceWithBalanceHoldsRequest): Uint8Array {
    return QueryBalanceWithBalanceHoldsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceWithBalanceHoldsRequest): QueryBalanceWithBalanceHoldsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsRequest",
      value: QueryBalanceWithBalanceHoldsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseBalanceWithMarginHold(): BalanceWithMarginHold {
  return {
    subaccountId: "",
    denom: "",
    available: "",
    total: "",
    balanceHold: ""
  };
}
export const BalanceWithMarginHold = {
  typeUrl: "/injective.exchange.v1beta1.BalanceWithMarginHold",
  is(o: any): o is BalanceWithMarginHold {
    return o && (o.$typeUrl === BalanceWithMarginHold.typeUrl || typeof o.subaccountId === "string" && typeof o.denom === "string" && typeof o.available === "string" && typeof o.total === "string" && typeof o.balanceHold === "string");
  },
  isAmino(o: any): o is BalanceWithMarginHoldAmino {
    return o && (o.$typeUrl === BalanceWithMarginHold.typeUrl || typeof o.subaccountId === "string" && typeof o.denom === "string" && typeof o.available === "string" && typeof o.total === "string" && typeof o.balance_hold === "string");
  },
  encode(message: BalanceWithMarginHold, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.available !== "") {
      writer.uint32(26).string(message.available);
    }
    if (message.total !== "") {
      writer.uint32(34).string(message.total);
    }
    if (message.balanceHold !== "") {
      writer.uint32(42).string(message.balanceHold);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BalanceWithMarginHold {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalanceWithMarginHold();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.available = reader.string();
          break;
        case 4:
          message.total = reader.string();
          break;
        case 5:
          message.balanceHold = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BalanceWithMarginHold>): BalanceWithMarginHold {
    const message = createBaseBalanceWithMarginHold();
    message.subaccountId = object.subaccountId ?? "";
    message.denom = object.denom ?? "";
    message.available = object.available ?? "";
    message.total = object.total ?? "";
    message.balanceHold = object.balanceHold ?? "";
    return message;
  },
  fromAmino(object: BalanceWithMarginHoldAmino): BalanceWithMarginHold {
    const message = createBaseBalanceWithMarginHold();
    if (object.subaccountId !== undefined && object.subaccountId !== null) {
      message.subaccountId = object.subaccountId;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.available !== undefined && object.available !== null) {
      message.available = object.available;
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    }
    if (object.balance_hold !== undefined && object.balance_hold !== null) {
      message.balanceHold = object.balance_hold;
    }
    return message;
  },
  toAmino(message: BalanceWithMarginHold): BalanceWithMarginHoldAmino {
    const obj: any = {};
    obj.subaccountId = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.available = message.available === "" ? undefined : message.available;
    obj.total = message.total === "" ? undefined : message.total;
    obj.balance_hold = message.balanceHold === "" ? undefined : message.balanceHold;
    return obj;
  },
  fromAminoMsg(object: BalanceWithMarginHoldAminoMsg): BalanceWithMarginHold {
    return BalanceWithMarginHold.fromAmino(object.value);
  },
  fromProtoMsg(message: BalanceWithMarginHoldProtoMsg): BalanceWithMarginHold {
    return BalanceWithMarginHold.decode(message.value);
  },
  toProto(message: BalanceWithMarginHold): Uint8Array {
    return BalanceWithMarginHold.encode(message).finish();
  },
  toProtoMsg(message: BalanceWithMarginHold): BalanceWithMarginHoldProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BalanceWithMarginHold",
      value: BalanceWithMarginHold.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryBalanceWithBalanceHoldsResponse(): QueryBalanceWithBalanceHoldsResponse {
  return {
    balanceWithBalanceHolds: []
  };
}
export const QueryBalanceWithBalanceHoldsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsResponse",
  is(o: any): o is QueryBalanceWithBalanceHoldsResponse {
    return o && (o.$typeUrl === QueryBalanceWithBalanceHoldsResponse.typeUrl || Array.isArray(o.balanceWithBalanceHolds) && (!o.balanceWithBalanceHolds.length || BalanceWithMarginHold.is(o.balanceWithBalanceHolds[0])));
  },
  isAmino(o: any): o is QueryBalanceWithBalanceHoldsResponseAmino {
    return o && (o.$typeUrl === QueryBalanceWithBalanceHoldsResponse.typeUrl || Array.isArray(o.balance_with_balance_holds) && (!o.balance_with_balance_holds.length || BalanceWithMarginHold.isAmino(o.balance_with_balance_holds[0])));
  },
  encode(message: QueryBalanceWithBalanceHoldsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.balanceWithBalanceHolds) {
      BalanceWithMarginHold.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceWithBalanceHoldsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceWithBalanceHoldsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balanceWithBalanceHolds.push(BalanceWithMarginHold.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBalanceWithBalanceHoldsResponse>): QueryBalanceWithBalanceHoldsResponse {
    const message = createBaseQueryBalanceWithBalanceHoldsResponse();
    message.balanceWithBalanceHolds = object.balanceWithBalanceHolds?.map(e => BalanceWithMarginHold.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryBalanceWithBalanceHoldsResponseAmino): QueryBalanceWithBalanceHoldsResponse {
    const message = createBaseQueryBalanceWithBalanceHoldsResponse();
    message.balanceWithBalanceHolds = object.balance_with_balance_holds?.map(e => BalanceWithMarginHold.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryBalanceWithBalanceHoldsResponse): QueryBalanceWithBalanceHoldsResponseAmino {
    const obj: any = {};
    if (message.balanceWithBalanceHolds) {
      obj.balance_with_balance_holds = message.balanceWithBalanceHolds.map(e => e ? BalanceWithMarginHold.toAmino(e) : undefined);
    } else {
      obj.balance_with_balance_holds = message.balanceWithBalanceHolds;
    }
    return obj;
  },
  fromAminoMsg(object: QueryBalanceWithBalanceHoldsResponseAminoMsg): QueryBalanceWithBalanceHoldsResponse {
    return QueryBalanceWithBalanceHoldsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceWithBalanceHoldsResponseProtoMsg): QueryBalanceWithBalanceHoldsResponse {
    return QueryBalanceWithBalanceHoldsResponse.decode(message.value);
  },
  toProto(message: QueryBalanceWithBalanceHoldsResponse): Uint8Array {
    return QueryBalanceWithBalanceHoldsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceWithBalanceHoldsResponse): QueryBalanceWithBalanceHoldsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsResponse",
      value: QueryBalanceWithBalanceHoldsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    BalanceWithMarginHold.registerTypeUrl();
  }
};
function createBaseQueryFeeDiscountTierStatisticsRequest(): QueryFeeDiscountTierStatisticsRequest {
  return {};
}
export const QueryFeeDiscountTierStatisticsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsRequest",
  is(o: any): o is QueryFeeDiscountTierStatisticsRequest {
    return o && o.$typeUrl === QueryFeeDiscountTierStatisticsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryFeeDiscountTierStatisticsRequestAmino {
    return o && o.$typeUrl === QueryFeeDiscountTierStatisticsRequest.typeUrl;
  },
  encode(_: QueryFeeDiscountTierStatisticsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeDiscountTierStatisticsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeDiscountTierStatisticsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryFeeDiscountTierStatisticsRequest>): QueryFeeDiscountTierStatisticsRequest {
    const message = createBaseQueryFeeDiscountTierStatisticsRequest();
    return message;
  },
  fromAmino(_: QueryFeeDiscountTierStatisticsRequestAmino): QueryFeeDiscountTierStatisticsRequest {
    const message = createBaseQueryFeeDiscountTierStatisticsRequest();
    return message;
  },
  toAmino(_: QueryFeeDiscountTierStatisticsRequest): QueryFeeDiscountTierStatisticsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryFeeDiscountTierStatisticsRequestAminoMsg): QueryFeeDiscountTierStatisticsRequest {
    return QueryFeeDiscountTierStatisticsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeDiscountTierStatisticsRequestProtoMsg): QueryFeeDiscountTierStatisticsRequest {
    return QueryFeeDiscountTierStatisticsRequest.decode(message.value);
  },
  toProto(message: QueryFeeDiscountTierStatisticsRequest): Uint8Array {
    return QueryFeeDiscountTierStatisticsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeDiscountTierStatisticsRequest): QueryFeeDiscountTierStatisticsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsRequest",
      value: QueryFeeDiscountTierStatisticsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTierStatistic(): TierStatistic {
  return {
    tier: BigInt(0),
    count: BigInt(0)
  };
}
export const TierStatistic = {
  typeUrl: "/injective.exchange.v1beta1.TierStatistic",
  is(o: any): o is TierStatistic {
    return o && (o.$typeUrl === TierStatistic.typeUrl || typeof o.tier === "bigint" && typeof o.count === "bigint");
  },
  isAmino(o: any): o is TierStatisticAmino {
    return o && (o.$typeUrl === TierStatistic.typeUrl || typeof o.tier === "bigint" && typeof o.count === "bigint");
  },
  encode(message: TierStatistic, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tier !== BigInt(0)) {
      writer.uint32(8).uint64(message.tier);
    }
    if (message.count !== BigInt(0)) {
      writer.uint32(16).uint64(message.count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TierStatistic {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTierStatistic();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tier = reader.uint64();
          break;
        case 2:
          message.count = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TierStatistic>): TierStatistic {
    const message = createBaseTierStatistic();
    message.tier = object.tier !== undefined && object.tier !== null ? BigInt(object.tier.toString()) : BigInt(0);
    message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TierStatisticAmino): TierStatistic {
    const message = createBaseTierStatistic();
    if (object.tier !== undefined && object.tier !== null) {
      message.tier = BigInt(object.tier);
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = BigInt(object.count);
    }
    return message;
  },
  toAmino(message: TierStatistic): TierStatisticAmino {
    const obj: any = {};
    obj.tier = message.tier !== BigInt(0) ? message.tier?.toString() : undefined;
    obj.count = message.count !== BigInt(0) ? message.count?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TierStatisticAminoMsg): TierStatistic {
    return TierStatistic.fromAmino(object.value);
  },
  fromProtoMsg(message: TierStatisticProtoMsg): TierStatistic {
    return TierStatistic.decode(message.value);
  },
  toProto(message: TierStatistic): Uint8Array {
    return TierStatistic.encode(message).finish();
  },
  toProtoMsg(message: TierStatistic): TierStatisticProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TierStatistic",
      value: TierStatistic.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryFeeDiscountTierStatisticsResponse(): QueryFeeDiscountTierStatisticsResponse {
  return {
    statistics: []
  };
}
export const QueryFeeDiscountTierStatisticsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsResponse",
  is(o: any): o is QueryFeeDiscountTierStatisticsResponse {
    return o && (o.$typeUrl === QueryFeeDiscountTierStatisticsResponse.typeUrl || Array.isArray(o.statistics) && (!o.statistics.length || TierStatistic.is(o.statistics[0])));
  },
  isAmino(o: any): o is QueryFeeDiscountTierStatisticsResponseAmino {
    return o && (o.$typeUrl === QueryFeeDiscountTierStatisticsResponse.typeUrl || Array.isArray(o.statistics) && (!o.statistics.length || TierStatistic.isAmino(o.statistics[0])));
  },
  encode(message: QueryFeeDiscountTierStatisticsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.statistics) {
      TierStatistic.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeDiscountTierStatisticsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeDiscountTierStatisticsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statistics.push(TierStatistic.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFeeDiscountTierStatisticsResponse>): QueryFeeDiscountTierStatisticsResponse {
    const message = createBaseQueryFeeDiscountTierStatisticsResponse();
    message.statistics = object.statistics?.map(e => TierStatistic.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryFeeDiscountTierStatisticsResponseAmino): QueryFeeDiscountTierStatisticsResponse {
    const message = createBaseQueryFeeDiscountTierStatisticsResponse();
    message.statistics = object.statistics?.map(e => TierStatistic.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryFeeDiscountTierStatisticsResponse): QueryFeeDiscountTierStatisticsResponseAmino {
    const obj: any = {};
    if (message.statistics) {
      obj.statistics = message.statistics.map(e => e ? TierStatistic.toAmino(e) : undefined);
    } else {
      obj.statistics = message.statistics;
    }
    return obj;
  },
  fromAminoMsg(object: QueryFeeDiscountTierStatisticsResponseAminoMsg): QueryFeeDiscountTierStatisticsResponse {
    return QueryFeeDiscountTierStatisticsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeDiscountTierStatisticsResponseProtoMsg): QueryFeeDiscountTierStatisticsResponse {
    return QueryFeeDiscountTierStatisticsResponse.decode(message.value);
  },
  toProto(message: QueryFeeDiscountTierStatisticsResponse): Uint8Array {
    return QueryFeeDiscountTierStatisticsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeDiscountTierStatisticsResponse): QueryFeeDiscountTierStatisticsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsResponse",
      value: QueryFeeDiscountTierStatisticsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    TierStatistic.registerTypeUrl();
  }
};
function createBaseMitoVaultInfosRequest(): MitoVaultInfosRequest {
  return {};
}
export const MitoVaultInfosRequest = {
  typeUrl: "/injective.exchange.v1beta1.MitoVaultInfosRequest",
  is(o: any): o is MitoVaultInfosRequest {
    return o && o.$typeUrl === MitoVaultInfosRequest.typeUrl;
  },
  isAmino(o: any): o is MitoVaultInfosRequestAmino {
    return o && o.$typeUrl === MitoVaultInfosRequest.typeUrl;
  },
  encode(_: MitoVaultInfosRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MitoVaultInfosRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMitoVaultInfosRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MitoVaultInfosRequest>): MitoVaultInfosRequest {
    const message = createBaseMitoVaultInfosRequest();
    return message;
  },
  fromAmino(_: MitoVaultInfosRequestAmino): MitoVaultInfosRequest {
    const message = createBaseMitoVaultInfosRequest();
    return message;
  },
  toAmino(_: MitoVaultInfosRequest): MitoVaultInfosRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MitoVaultInfosRequestAminoMsg): MitoVaultInfosRequest {
    return MitoVaultInfosRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MitoVaultInfosRequestProtoMsg): MitoVaultInfosRequest {
    return MitoVaultInfosRequest.decode(message.value);
  },
  toProto(message: MitoVaultInfosRequest): Uint8Array {
    return MitoVaultInfosRequest.encode(message).finish();
  },
  toProtoMsg(message: MitoVaultInfosRequest): MitoVaultInfosRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MitoVaultInfosRequest",
      value: MitoVaultInfosRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMitoVaultInfosResponse(): MitoVaultInfosResponse {
  return {
    masterAddresses: [],
    derivativeAddresses: [],
    spotAddresses: [],
    cw20Addresses: []
  };
}
export const MitoVaultInfosResponse = {
  typeUrl: "/injective.exchange.v1beta1.MitoVaultInfosResponse",
  is(o: any): o is MitoVaultInfosResponse {
    return o && (o.$typeUrl === MitoVaultInfosResponse.typeUrl || Array.isArray(o.masterAddresses) && (!o.masterAddresses.length || typeof o.masterAddresses[0] === "string") && Array.isArray(o.derivativeAddresses) && (!o.derivativeAddresses.length || typeof o.derivativeAddresses[0] === "string") && Array.isArray(o.spotAddresses) && (!o.spotAddresses.length || typeof o.spotAddresses[0] === "string") && Array.isArray(o.cw20Addresses) && (!o.cw20Addresses.length || typeof o.cw20Addresses[0] === "string"));
  },
  isAmino(o: any): o is MitoVaultInfosResponseAmino {
    return o && (o.$typeUrl === MitoVaultInfosResponse.typeUrl || Array.isArray(o.master_addresses) && (!o.master_addresses.length || typeof o.master_addresses[0] === "string") && Array.isArray(o.derivative_addresses) && (!o.derivative_addresses.length || typeof o.derivative_addresses[0] === "string") && Array.isArray(o.spot_addresses) && (!o.spot_addresses.length || typeof o.spot_addresses[0] === "string") && Array.isArray(o.cw20_addresses) && (!o.cw20_addresses.length || typeof o.cw20_addresses[0] === "string"));
  },
  encode(message: MitoVaultInfosResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.masterAddresses) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.derivativeAddresses) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.spotAddresses) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.cw20Addresses) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MitoVaultInfosResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMitoVaultInfosResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.masterAddresses.push(reader.string());
          break;
        case 2:
          message.derivativeAddresses.push(reader.string());
          break;
        case 3:
          message.spotAddresses.push(reader.string());
          break;
        case 4:
          message.cw20Addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MitoVaultInfosResponse>): MitoVaultInfosResponse {
    const message = createBaseMitoVaultInfosResponse();
    message.masterAddresses = object.masterAddresses?.map(e => e) || [];
    message.derivativeAddresses = object.derivativeAddresses?.map(e => e) || [];
    message.spotAddresses = object.spotAddresses?.map(e => e) || [];
    message.cw20Addresses = object.cw20Addresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MitoVaultInfosResponseAmino): MitoVaultInfosResponse {
    const message = createBaseMitoVaultInfosResponse();
    message.masterAddresses = object.master_addresses?.map(e => e) || [];
    message.derivativeAddresses = object.derivative_addresses?.map(e => e) || [];
    message.spotAddresses = object.spot_addresses?.map(e => e) || [];
    message.cw20Addresses = object.cw20_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: MitoVaultInfosResponse): MitoVaultInfosResponseAmino {
    const obj: any = {};
    if (message.masterAddresses) {
      obj.master_addresses = message.masterAddresses.map(e => e);
    } else {
      obj.master_addresses = message.masterAddresses;
    }
    if (message.derivativeAddresses) {
      obj.derivative_addresses = message.derivativeAddresses.map(e => e);
    } else {
      obj.derivative_addresses = message.derivativeAddresses;
    }
    if (message.spotAddresses) {
      obj.spot_addresses = message.spotAddresses.map(e => e);
    } else {
      obj.spot_addresses = message.spotAddresses;
    }
    if (message.cw20Addresses) {
      obj.cw20_addresses = message.cw20Addresses.map(e => e);
    } else {
      obj.cw20_addresses = message.cw20Addresses;
    }
    return obj;
  },
  fromAminoMsg(object: MitoVaultInfosResponseAminoMsg): MitoVaultInfosResponse {
    return MitoVaultInfosResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MitoVaultInfosResponseProtoMsg): MitoVaultInfosResponse {
    return MitoVaultInfosResponse.decode(message.value);
  },
  toProto(message: MitoVaultInfosResponse): Uint8Array {
    return MitoVaultInfosResponse.encode(message).finish();
  },
  toProtoMsg(message: MitoVaultInfosResponse): MitoVaultInfosResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MitoVaultInfosResponse",
      value: MitoVaultInfosResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryMarketIDFromVaultRequest(): QueryMarketIDFromVaultRequest {
  return {
    vaultAddress: ""
  };
}
export const QueryMarketIDFromVaultRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultRequest",
  is(o: any): o is QueryMarketIDFromVaultRequest {
    return o && (o.$typeUrl === QueryMarketIDFromVaultRequest.typeUrl || typeof o.vaultAddress === "string");
  },
  isAmino(o: any): o is QueryMarketIDFromVaultRequestAmino {
    return o && (o.$typeUrl === QueryMarketIDFromVaultRequest.typeUrl || typeof o.vault_address === "string");
  },
  encode(message: QueryMarketIDFromVaultRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vaultAddress !== "") {
      writer.uint32(10).string(message.vaultAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketIDFromVaultRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketIDFromVaultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMarketIDFromVaultRequest>): QueryMarketIDFromVaultRequest {
    const message = createBaseQueryMarketIDFromVaultRequest();
    message.vaultAddress = object.vaultAddress ?? "";
    return message;
  },
  fromAmino(object: QueryMarketIDFromVaultRequestAmino): QueryMarketIDFromVaultRequest {
    const message = createBaseQueryMarketIDFromVaultRequest();
    if (object.vault_address !== undefined && object.vault_address !== null) {
      message.vaultAddress = object.vault_address;
    }
    return message;
  },
  toAmino(message: QueryMarketIDFromVaultRequest): QueryMarketIDFromVaultRequestAmino {
    const obj: any = {};
    obj.vault_address = message.vaultAddress === "" ? undefined : message.vaultAddress;
    return obj;
  },
  fromAminoMsg(object: QueryMarketIDFromVaultRequestAminoMsg): QueryMarketIDFromVaultRequest {
    return QueryMarketIDFromVaultRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketIDFromVaultRequestProtoMsg): QueryMarketIDFromVaultRequest {
    return QueryMarketIDFromVaultRequest.decode(message.value);
  },
  toProto(message: QueryMarketIDFromVaultRequest): Uint8Array {
    return QueryMarketIDFromVaultRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketIDFromVaultRequest): QueryMarketIDFromVaultRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultRequest",
      value: QueryMarketIDFromVaultRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryMarketIDFromVaultResponse(): QueryMarketIDFromVaultResponse {
  return {
    marketId: ""
  };
}
export const QueryMarketIDFromVaultResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultResponse",
  is(o: any): o is QueryMarketIDFromVaultResponse {
    return o && (o.$typeUrl === QueryMarketIDFromVaultResponse.typeUrl || typeof o.marketId === "string");
  },
  isAmino(o: any): o is QueryMarketIDFromVaultResponseAmino {
    return o && (o.$typeUrl === QueryMarketIDFromVaultResponse.typeUrl || typeof o.market_id === "string");
  },
  encode(message: QueryMarketIDFromVaultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketIDFromVaultResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketIDFromVaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMarketIDFromVaultResponse>): QueryMarketIDFromVaultResponse {
    const message = createBaseQueryMarketIDFromVaultResponse();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromAmino(object: QueryMarketIDFromVaultResponseAmino): QueryMarketIDFromVaultResponse {
    const message = createBaseQueryMarketIDFromVaultResponse();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryMarketIDFromVaultResponse): QueryMarketIDFromVaultResponseAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryMarketIDFromVaultResponseAminoMsg): QueryMarketIDFromVaultResponse {
    return QueryMarketIDFromVaultResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketIDFromVaultResponseProtoMsg): QueryMarketIDFromVaultResponse {
    return QueryMarketIDFromVaultResponse.decode(message.value);
  },
  toProto(message: QueryMarketIDFromVaultResponse): Uint8Array {
    return QueryMarketIDFromVaultResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketIDFromVaultResponse): QueryMarketIDFromVaultResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultResponse",
      value: QueryMarketIDFromVaultResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryHistoricalTradeRecordsRequest(): QueryHistoricalTradeRecordsRequest {
  return {
    marketId: ""
  };
}
export const QueryHistoricalTradeRecordsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsRequest",
  is(o: any): o is QueryHistoricalTradeRecordsRequest {
    return o && (o.$typeUrl === QueryHistoricalTradeRecordsRequest.typeUrl || typeof o.marketId === "string");
  },
  isAmino(o: any): o is QueryHistoricalTradeRecordsRequestAmino {
    return o && (o.$typeUrl === QueryHistoricalTradeRecordsRequest.typeUrl || typeof o.market_id === "string");
  },
  encode(message: QueryHistoricalTradeRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalTradeRecordsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalTradeRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryHistoricalTradeRecordsRequest>): QueryHistoricalTradeRecordsRequest {
    const message = createBaseQueryHistoricalTradeRecordsRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromAmino(object: QueryHistoricalTradeRecordsRequestAmino): QueryHistoricalTradeRecordsRequest {
    const message = createBaseQueryHistoricalTradeRecordsRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryHistoricalTradeRecordsRequest): QueryHistoricalTradeRecordsRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalTradeRecordsRequestAminoMsg): QueryHistoricalTradeRecordsRequest {
    return QueryHistoricalTradeRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHistoricalTradeRecordsRequestProtoMsg): QueryHistoricalTradeRecordsRequest {
    return QueryHistoricalTradeRecordsRequest.decode(message.value);
  },
  toProto(message: QueryHistoricalTradeRecordsRequest): Uint8Array {
    return QueryHistoricalTradeRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalTradeRecordsRequest): QueryHistoricalTradeRecordsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsRequest",
      value: QueryHistoricalTradeRecordsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryHistoricalTradeRecordsResponse(): QueryHistoricalTradeRecordsResponse {
  return {
    tradeRecords: []
  };
}
export const QueryHistoricalTradeRecordsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsResponse",
  is(o: any): o is QueryHistoricalTradeRecordsResponse {
    return o && (o.$typeUrl === QueryHistoricalTradeRecordsResponse.typeUrl || Array.isArray(o.tradeRecords) && (!o.tradeRecords.length || TradeRecords.is(o.tradeRecords[0])));
  },
  isAmino(o: any): o is QueryHistoricalTradeRecordsResponseAmino {
    return o && (o.$typeUrl === QueryHistoricalTradeRecordsResponse.typeUrl || Array.isArray(o.trade_records) && (!o.trade_records.length || TradeRecords.isAmino(o.trade_records[0])));
  },
  encode(message: QueryHistoricalTradeRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tradeRecords) {
      TradeRecords.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalTradeRecordsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalTradeRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradeRecords.push(TradeRecords.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryHistoricalTradeRecordsResponse>): QueryHistoricalTradeRecordsResponse {
    const message = createBaseQueryHistoricalTradeRecordsResponse();
    message.tradeRecords = object.tradeRecords?.map(e => TradeRecords.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryHistoricalTradeRecordsResponseAmino): QueryHistoricalTradeRecordsResponse {
    const message = createBaseQueryHistoricalTradeRecordsResponse();
    message.tradeRecords = object.trade_records?.map(e => TradeRecords.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryHistoricalTradeRecordsResponse): QueryHistoricalTradeRecordsResponseAmino {
    const obj: any = {};
    if (message.tradeRecords) {
      obj.trade_records = message.tradeRecords.map(e => e ? TradeRecords.toAmino(e) : undefined);
    } else {
      obj.trade_records = message.tradeRecords;
    }
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalTradeRecordsResponseAminoMsg): QueryHistoricalTradeRecordsResponse {
    return QueryHistoricalTradeRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHistoricalTradeRecordsResponseProtoMsg): QueryHistoricalTradeRecordsResponse {
    return QueryHistoricalTradeRecordsResponse.decode(message.value);
  },
  toProto(message: QueryHistoricalTradeRecordsResponse): Uint8Array {
    return QueryHistoricalTradeRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalTradeRecordsResponse): QueryHistoricalTradeRecordsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsResponse",
      value: QueryHistoricalTradeRecordsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    TradeRecords.registerTypeUrl();
  }
};
function createBaseTradeHistoryOptions(): TradeHistoryOptions {
  return {
    tradeGroupingSec: BigInt(0),
    maxAge: BigInt(0),
    includeRawHistory: false,
    includeMetadata: false
  };
}
export const TradeHistoryOptions = {
  typeUrl: "/injective.exchange.v1beta1.TradeHistoryOptions",
  is(o: any): o is TradeHistoryOptions {
    return o && (o.$typeUrl === TradeHistoryOptions.typeUrl || typeof o.tradeGroupingSec === "bigint" && typeof o.maxAge === "bigint" && typeof o.includeRawHistory === "boolean" && typeof o.includeMetadata === "boolean");
  },
  isAmino(o: any): o is TradeHistoryOptionsAmino {
    return o && (o.$typeUrl === TradeHistoryOptions.typeUrl || typeof o.trade_grouping_sec === "bigint" && typeof o.max_age === "bigint" && typeof o.include_raw_history === "boolean" && typeof o.include_metadata === "boolean");
  },
  encode(message: TradeHistoryOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradeGroupingSec !== BigInt(0)) {
      writer.uint32(8).uint64(message.tradeGroupingSec);
    }
    if (message.maxAge !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxAge);
    }
    if (message.includeRawHistory === true) {
      writer.uint32(32).bool(message.includeRawHistory);
    }
    if (message.includeMetadata === true) {
      writer.uint32(40).bool(message.includeMetadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradeHistoryOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradeHistoryOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradeGroupingSec = reader.uint64();
          break;
        case 2:
          message.maxAge = reader.uint64();
          break;
        case 4:
          message.includeRawHistory = reader.bool();
          break;
        case 5:
          message.includeMetadata = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TradeHistoryOptions>): TradeHistoryOptions {
    const message = createBaseTradeHistoryOptions();
    message.tradeGroupingSec = object.tradeGroupingSec !== undefined && object.tradeGroupingSec !== null ? BigInt(object.tradeGroupingSec.toString()) : BigInt(0);
    message.maxAge = object.maxAge !== undefined && object.maxAge !== null ? BigInt(object.maxAge.toString()) : BigInt(0);
    message.includeRawHistory = object.includeRawHistory ?? false;
    message.includeMetadata = object.includeMetadata ?? false;
    return message;
  },
  fromAmino(object: TradeHistoryOptionsAmino): TradeHistoryOptions {
    const message = createBaseTradeHistoryOptions();
    if (object.trade_grouping_sec !== undefined && object.trade_grouping_sec !== null) {
      message.tradeGroupingSec = BigInt(object.trade_grouping_sec);
    }
    if (object.max_age !== undefined && object.max_age !== null) {
      message.maxAge = BigInt(object.max_age);
    }
    if (object.include_raw_history !== undefined && object.include_raw_history !== null) {
      message.includeRawHistory = object.include_raw_history;
    }
    if (object.include_metadata !== undefined && object.include_metadata !== null) {
      message.includeMetadata = object.include_metadata;
    }
    return message;
  },
  toAmino(message: TradeHistoryOptions): TradeHistoryOptionsAmino {
    const obj: any = {};
    obj.trade_grouping_sec = message.tradeGroupingSec !== BigInt(0) ? message.tradeGroupingSec?.toString() : undefined;
    obj.max_age = message.maxAge !== BigInt(0) ? message.maxAge?.toString() : undefined;
    obj.include_raw_history = message.includeRawHistory === false ? undefined : message.includeRawHistory;
    obj.include_metadata = message.includeMetadata === false ? undefined : message.includeMetadata;
    return obj;
  },
  fromAminoMsg(object: TradeHistoryOptionsAminoMsg): TradeHistoryOptions {
    return TradeHistoryOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: TradeHistoryOptionsProtoMsg): TradeHistoryOptions {
    return TradeHistoryOptions.decode(message.value);
  },
  toProto(message: TradeHistoryOptions): Uint8Array {
    return TradeHistoryOptions.encode(message).finish();
  },
  toProtoMsg(message: TradeHistoryOptions): TradeHistoryOptionsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TradeHistoryOptions",
      value: TradeHistoryOptions.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryMarketVolatilityRequest(): QueryMarketVolatilityRequest {
  return {
    marketId: "",
    tradeHistoryOptions: undefined
  };
}
export const QueryMarketVolatilityRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityRequest",
  is(o: any): o is QueryMarketVolatilityRequest {
    return o && (o.$typeUrl === QueryMarketVolatilityRequest.typeUrl || typeof o.marketId === "string");
  },
  isAmino(o: any): o is QueryMarketVolatilityRequestAmino {
    return o && (o.$typeUrl === QueryMarketVolatilityRequest.typeUrl || typeof o.market_id === "string");
  },
  encode(message: QueryMarketVolatilityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.tradeHistoryOptions !== undefined) {
      TradeHistoryOptions.encode(message.tradeHistoryOptions, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketVolatilityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketVolatilityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.tradeHistoryOptions = TradeHistoryOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMarketVolatilityRequest>): QueryMarketVolatilityRequest {
    const message = createBaseQueryMarketVolatilityRequest();
    message.marketId = object.marketId ?? "";
    message.tradeHistoryOptions = object.tradeHistoryOptions !== undefined && object.tradeHistoryOptions !== null ? TradeHistoryOptions.fromPartial(object.tradeHistoryOptions) : undefined;
    return message;
  },
  fromAmino(object: QueryMarketVolatilityRequestAmino): QueryMarketVolatilityRequest {
    const message = createBaseQueryMarketVolatilityRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.trade_history_options !== undefined && object.trade_history_options !== null) {
      message.tradeHistoryOptions = TradeHistoryOptions.fromAmino(object.trade_history_options);
    }
    return message;
  },
  toAmino(message: QueryMarketVolatilityRequest): QueryMarketVolatilityRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.trade_history_options = message.tradeHistoryOptions ? TradeHistoryOptions.toAmino(message.tradeHistoryOptions) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMarketVolatilityRequestAminoMsg): QueryMarketVolatilityRequest {
    return QueryMarketVolatilityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketVolatilityRequestProtoMsg): QueryMarketVolatilityRequest {
    return QueryMarketVolatilityRequest.decode(message.value);
  },
  toProto(message: QueryMarketVolatilityRequest): Uint8Array {
    return QueryMarketVolatilityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketVolatilityRequest): QueryMarketVolatilityRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityRequest",
      value: QueryMarketVolatilityRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    TradeHistoryOptions.registerTypeUrl();
  }
};
function createBaseQueryMarketVolatilityResponse(): QueryMarketVolatilityResponse {
  return {
    volatility: "",
    historyMetadata: undefined,
    rawHistory: []
  };
}
export const QueryMarketVolatilityResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityResponse",
  is(o: any): o is QueryMarketVolatilityResponse {
    return o && (o.$typeUrl === QueryMarketVolatilityResponse.typeUrl || typeof o.volatility === "string" && Array.isArray(o.rawHistory) && (!o.rawHistory.length || TradeRecord.is(o.rawHistory[0])));
  },
  isAmino(o: any): o is QueryMarketVolatilityResponseAmino {
    return o && (o.$typeUrl === QueryMarketVolatilityResponse.typeUrl || typeof o.volatility === "string" && Array.isArray(o.raw_history) && (!o.raw_history.length || TradeRecord.isAmino(o.raw_history[0])));
  },
  encode(message: QueryMarketVolatilityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.volatility !== "") {
      writer.uint32(10).string(message.volatility);
    }
    if (message.historyMetadata !== undefined) {
      MetadataStatistics.encode(message.historyMetadata, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.rawHistory) {
      TradeRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketVolatilityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketVolatilityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volatility = reader.string();
          break;
        case 2:
          message.historyMetadata = MetadataStatistics.decode(reader, reader.uint32());
          break;
        case 3:
          message.rawHistory.push(TradeRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMarketVolatilityResponse>): QueryMarketVolatilityResponse {
    const message = createBaseQueryMarketVolatilityResponse();
    message.volatility = object.volatility ?? "";
    message.historyMetadata = object.historyMetadata !== undefined && object.historyMetadata !== null ? MetadataStatistics.fromPartial(object.historyMetadata) : undefined;
    message.rawHistory = object.rawHistory?.map(e => TradeRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryMarketVolatilityResponseAmino): QueryMarketVolatilityResponse {
    const message = createBaseQueryMarketVolatilityResponse();
    if (object.volatility !== undefined && object.volatility !== null) {
      message.volatility = object.volatility;
    }
    if (object.history_metadata !== undefined && object.history_metadata !== null) {
      message.historyMetadata = MetadataStatistics.fromAmino(object.history_metadata);
    }
    message.rawHistory = object.raw_history?.map(e => TradeRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryMarketVolatilityResponse): QueryMarketVolatilityResponseAmino {
    const obj: any = {};
    obj.volatility = message.volatility === "" ? undefined : message.volatility;
    obj.history_metadata = message.historyMetadata ? MetadataStatistics.toAmino(message.historyMetadata) : undefined;
    if (message.rawHistory) {
      obj.raw_history = message.rawHistory.map(e => e ? TradeRecord.toAmino(e) : undefined);
    } else {
      obj.raw_history = message.rawHistory;
    }
    return obj;
  },
  fromAminoMsg(object: QueryMarketVolatilityResponseAminoMsg): QueryMarketVolatilityResponse {
    return QueryMarketVolatilityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketVolatilityResponseProtoMsg): QueryMarketVolatilityResponse {
    return QueryMarketVolatilityResponse.decode(message.value);
  },
  toProto(message: QueryMarketVolatilityResponse): Uint8Array {
    return QueryMarketVolatilityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketVolatilityResponse): QueryMarketVolatilityResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityResponse",
      value: QueryMarketVolatilityResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    MetadataStatistics.registerTypeUrl();
    TradeRecord.registerTypeUrl();
  }
};
function createBaseQueryBinaryMarketsRequest(): QueryBinaryMarketsRequest {
  return {
    status: ""
  };
}
export const QueryBinaryMarketsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsRequest",
  is(o: any): o is QueryBinaryMarketsRequest {
    return o && (o.$typeUrl === QueryBinaryMarketsRequest.typeUrl || typeof o.status === "string");
  },
  isAmino(o: any): o is QueryBinaryMarketsRequestAmino {
    return o && (o.$typeUrl === QueryBinaryMarketsRequest.typeUrl || typeof o.status === "string");
  },
  encode(message: QueryBinaryMarketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBinaryMarketsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBinaryMarketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBinaryMarketsRequest>): QueryBinaryMarketsRequest {
    const message = createBaseQueryBinaryMarketsRequest();
    message.status = object.status ?? "";
    return message;
  },
  fromAmino(object: QueryBinaryMarketsRequestAmino): QueryBinaryMarketsRequest {
    const message = createBaseQueryBinaryMarketsRequest();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: QueryBinaryMarketsRequest): QueryBinaryMarketsRequestAmino {
    const obj: any = {};
    obj.status = message.status === "" ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: QueryBinaryMarketsRequestAminoMsg): QueryBinaryMarketsRequest {
    return QueryBinaryMarketsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBinaryMarketsRequestProtoMsg): QueryBinaryMarketsRequest {
    return QueryBinaryMarketsRequest.decode(message.value);
  },
  toProto(message: QueryBinaryMarketsRequest): Uint8Array {
    return QueryBinaryMarketsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBinaryMarketsRequest): QueryBinaryMarketsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsRequest",
      value: QueryBinaryMarketsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryBinaryMarketsResponse(): QueryBinaryMarketsResponse {
  return {
    markets: []
  };
}
export const QueryBinaryMarketsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsResponse",
  is(o: any): o is QueryBinaryMarketsResponse {
    return o && (o.$typeUrl === QueryBinaryMarketsResponse.typeUrl || Array.isArray(o.markets) && (!o.markets.length || BinaryOptionsMarket.is(o.markets[0])));
  },
  isAmino(o: any): o is QueryBinaryMarketsResponseAmino {
    return o && (o.$typeUrl === QueryBinaryMarketsResponse.typeUrl || Array.isArray(o.markets) && (!o.markets.length || BinaryOptionsMarket.isAmino(o.markets[0])));
  },
  encode(message: QueryBinaryMarketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.markets) {
      BinaryOptionsMarket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBinaryMarketsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBinaryMarketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.markets.push(BinaryOptionsMarket.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBinaryMarketsResponse>): QueryBinaryMarketsResponse {
    const message = createBaseQueryBinaryMarketsResponse();
    message.markets = object.markets?.map(e => BinaryOptionsMarket.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryBinaryMarketsResponseAmino): QueryBinaryMarketsResponse {
    const message = createBaseQueryBinaryMarketsResponse();
    message.markets = object.markets?.map(e => BinaryOptionsMarket.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryBinaryMarketsResponse): QueryBinaryMarketsResponseAmino {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map(e => e ? BinaryOptionsMarket.toAmino(e) : undefined);
    } else {
      obj.markets = message.markets;
    }
    return obj;
  },
  fromAminoMsg(object: QueryBinaryMarketsResponseAminoMsg): QueryBinaryMarketsResponse {
    return QueryBinaryMarketsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBinaryMarketsResponseProtoMsg): QueryBinaryMarketsResponse {
    return QueryBinaryMarketsResponse.decode(message.value);
  },
  toProto(message: QueryBinaryMarketsResponse): Uint8Array {
    return QueryBinaryMarketsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBinaryMarketsResponse): QueryBinaryMarketsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsResponse",
      value: QueryBinaryMarketsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    BinaryOptionsMarket.registerTypeUrl();
  }
};
function createBaseQueryTraderDerivativeConditionalOrdersRequest(): QueryTraderDerivativeConditionalOrdersRequest {
  return {
    subaccountId: "",
    marketId: ""
  };
}
export const QueryTraderDerivativeConditionalOrdersRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersRequest",
  is(o: any): o is QueryTraderDerivativeConditionalOrdersRequest {
    return o && (o.$typeUrl === QueryTraderDerivativeConditionalOrdersRequest.typeUrl || typeof o.subaccountId === "string" && typeof o.marketId === "string");
  },
  isAmino(o: any): o is QueryTraderDerivativeConditionalOrdersRequestAmino {
    return o && (o.$typeUrl === QueryTraderDerivativeConditionalOrdersRequest.typeUrl || typeof o.subaccount_id === "string" && typeof o.market_id === "string");
  },
  encode(message: QueryTraderDerivativeConditionalOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTraderDerivativeConditionalOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraderDerivativeConditionalOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTraderDerivativeConditionalOrdersRequest>): QueryTraderDerivativeConditionalOrdersRequest {
    const message = createBaseQueryTraderDerivativeConditionalOrdersRequest();
    message.subaccountId = object.subaccountId ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromAmino(object: QueryTraderDerivativeConditionalOrdersRequestAmino): QueryTraderDerivativeConditionalOrdersRequest {
    const message = createBaseQueryTraderDerivativeConditionalOrdersRequest();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryTraderDerivativeConditionalOrdersRequest): QueryTraderDerivativeConditionalOrdersRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryTraderDerivativeConditionalOrdersRequestAminoMsg): QueryTraderDerivativeConditionalOrdersRequest {
    return QueryTraderDerivativeConditionalOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraderDerivativeConditionalOrdersRequestProtoMsg): QueryTraderDerivativeConditionalOrdersRequest {
    return QueryTraderDerivativeConditionalOrdersRequest.decode(message.value);
  },
  toProto(message: QueryTraderDerivativeConditionalOrdersRequest): Uint8Array {
    return QueryTraderDerivativeConditionalOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTraderDerivativeConditionalOrdersRequest): QueryTraderDerivativeConditionalOrdersRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersRequest",
      value: QueryTraderDerivativeConditionalOrdersRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTrimmedDerivativeConditionalOrder(): TrimmedDerivativeConditionalOrder {
  return {
    price: "",
    quantity: "",
    margin: "",
    triggerPrice: "",
    isBuy: false,
    isLimit: false,
    orderHash: "",
    cid: ""
  };
}
export const TrimmedDerivativeConditionalOrder = {
  typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeConditionalOrder",
  is(o: any): o is TrimmedDerivativeConditionalOrder {
    return o && (o.$typeUrl === TrimmedDerivativeConditionalOrder.typeUrl || typeof o.price === "string" && typeof o.quantity === "string" && typeof o.margin === "string" && typeof o.triggerPrice === "string" && typeof o.isBuy === "boolean" && typeof o.isLimit === "boolean" && typeof o.orderHash === "string" && typeof o.cid === "string");
  },
  isAmino(o: any): o is TrimmedDerivativeConditionalOrderAmino {
    return o && (o.$typeUrl === TrimmedDerivativeConditionalOrder.typeUrl || typeof o.price === "string" && typeof o.quantity === "string" && typeof o.margin === "string" && typeof o.triggerPrice === "string" && typeof o.isBuy === "boolean" && typeof o.isLimit === "boolean" && typeof o.order_hash === "string" && typeof o.cid === "string");
  },
  encode(message: TrimmedDerivativeConditionalOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(message.quantity);
    }
    if (message.margin !== "") {
      writer.uint32(26).string(message.margin);
    }
    if (message.triggerPrice !== "") {
      writer.uint32(34).string(message.triggerPrice);
    }
    if (message.isBuy === true) {
      writer.uint32(40).bool(message.isBuy);
    }
    if (message.isLimit === true) {
      writer.uint32(48).bool(message.isLimit);
    }
    if (message.orderHash !== "") {
      writer.uint32(58).string(message.orderHash);
    }
    if (message.cid !== "") {
      writer.uint32(66).string(message.cid);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TrimmedDerivativeConditionalOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrimmedDerivativeConditionalOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;
        case 2:
          message.quantity = reader.string();
          break;
        case 3:
          message.margin = reader.string();
          break;
        case 4:
          message.triggerPrice = reader.string();
          break;
        case 5:
          message.isBuy = reader.bool();
          break;
        case 6:
          message.isLimit = reader.bool();
          break;
        case 7:
          message.orderHash = reader.string();
          break;
        case 8:
          message.cid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TrimmedDerivativeConditionalOrder>): TrimmedDerivativeConditionalOrder {
    const message = createBaseTrimmedDerivativeConditionalOrder();
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    message.margin = object.margin ?? "";
    message.triggerPrice = object.triggerPrice ?? "";
    message.isBuy = object.isBuy ?? false;
    message.isLimit = object.isLimit ?? false;
    message.orderHash = object.orderHash ?? "";
    message.cid = object.cid ?? "";
    return message;
  },
  fromAmino(object: TrimmedDerivativeConditionalOrderAmino): TrimmedDerivativeConditionalOrder {
    const message = createBaseTrimmedDerivativeConditionalOrder();
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    }
    if (object.margin !== undefined && object.margin !== null) {
      message.margin = object.margin;
    }
    if (object.triggerPrice !== undefined && object.triggerPrice !== null) {
      message.triggerPrice = object.triggerPrice;
    }
    if (object.isBuy !== undefined && object.isBuy !== null) {
      message.isBuy = object.isBuy;
    }
    if (object.isLimit !== undefined && object.isLimit !== null) {
      message.isLimit = object.isLimit;
    }
    if (object.order_hash !== undefined && object.order_hash !== null) {
      message.orderHash = object.order_hash;
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    }
    return message;
  },
  toAmino(message: TrimmedDerivativeConditionalOrder): TrimmedDerivativeConditionalOrderAmino {
    const obj: any = {};
    obj.price = message.price === "" ? undefined : message.price;
    obj.quantity = message.quantity === "" ? undefined : message.quantity;
    obj.margin = message.margin === "" ? undefined : message.margin;
    obj.triggerPrice = message.triggerPrice === "" ? undefined : message.triggerPrice;
    obj.isBuy = message.isBuy ?? false;
    obj.isLimit = message.isLimit ?? false;
    obj.order_hash = message.orderHash === "" ? undefined : message.orderHash;
    obj.cid = message.cid === "" ? undefined : message.cid;
    return obj;
  },
  fromAminoMsg(object: TrimmedDerivativeConditionalOrderAminoMsg): TrimmedDerivativeConditionalOrder {
    return TrimmedDerivativeConditionalOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: TrimmedDerivativeConditionalOrderProtoMsg): TrimmedDerivativeConditionalOrder {
    return TrimmedDerivativeConditionalOrder.decode(message.value);
  },
  toProto(message: TrimmedDerivativeConditionalOrder): Uint8Array {
    return TrimmedDerivativeConditionalOrder.encode(message).finish();
  },
  toProtoMsg(message: TrimmedDerivativeConditionalOrder): TrimmedDerivativeConditionalOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeConditionalOrder",
      value: TrimmedDerivativeConditionalOrder.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryTraderDerivativeConditionalOrdersResponse(): QueryTraderDerivativeConditionalOrdersResponse {
  return {
    orders: []
  };
}
export const QueryTraderDerivativeConditionalOrdersResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersResponse",
  is(o: any): o is QueryTraderDerivativeConditionalOrdersResponse {
    return o && (o.$typeUrl === QueryTraderDerivativeConditionalOrdersResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || TrimmedDerivativeConditionalOrder.is(o.orders[0])));
  },
  isAmino(o: any): o is QueryTraderDerivativeConditionalOrdersResponseAmino {
    return o && (o.$typeUrl === QueryTraderDerivativeConditionalOrdersResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || TrimmedDerivativeConditionalOrder.isAmino(o.orders[0])));
  },
  encode(message: QueryTraderDerivativeConditionalOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.orders) {
      TrimmedDerivativeConditionalOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTraderDerivativeConditionalOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraderDerivativeConditionalOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(TrimmedDerivativeConditionalOrder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTraderDerivativeConditionalOrdersResponse>): QueryTraderDerivativeConditionalOrdersResponse {
    const message = createBaseQueryTraderDerivativeConditionalOrdersResponse();
    message.orders = object.orders?.map(e => TrimmedDerivativeConditionalOrder.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTraderDerivativeConditionalOrdersResponseAmino): QueryTraderDerivativeConditionalOrdersResponse {
    const message = createBaseQueryTraderDerivativeConditionalOrdersResponse();
    message.orders = object.orders?.map(e => TrimmedDerivativeConditionalOrder.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTraderDerivativeConditionalOrdersResponse): QueryTraderDerivativeConditionalOrdersResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedDerivativeConditionalOrder.toAmino(e) : undefined);
    } else {
      obj.orders = message.orders;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTraderDerivativeConditionalOrdersResponseAminoMsg): QueryTraderDerivativeConditionalOrdersResponse {
    return QueryTraderDerivativeConditionalOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraderDerivativeConditionalOrdersResponseProtoMsg): QueryTraderDerivativeConditionalOrdersResponse {
    return QueryTraderDerivativeConditionalOrdersResponse.decode(message.value);
  },
  toProto(message: QueryTraderDerivativeConditionalOrdersResponse): Uint8Array {
    return QueryTraderDerivativeConditionalOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTraderDerivativeConditionalOrdersResponse): QueryTraderDerivativeConditionalOrdersResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersResponse",
      value: QueryTraderDerivativeConditionalOrdersResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    TrimmedDerivativeConditionalOrder.registerTypeUrl();
  }
};
function createBaseQueryMarketAtomicExecutionFeeMultiplierRequest(): QueryMarketAtomicExecutionFeeMultiplierRequest {
  return {
    marketId: ""
  };
}
export const QueryMarketAtomicExecutionFeeMultiplierRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketAtomicExecutionFeeMultiplierRequest",
  is(o: any): o is QueryMarketAtomicExecutionFeeMultiplierRequest {
    return o && (o.$typeUrl === QueryMarketAtomicExecutionFeeMultiplierRequest.typeUrl || typeof o.marketId === "string");
  },
  isAmino(o: any): o is QueryMarketAtomicExecutionFeeMultiplierRequestAmino {
    return o && (o.$typeUrl === QueryMarketAtomicExecutionFeeMultiplierRequest.typeUrl || typeof o.market_id === "string");
  },
  encode(message: QueryMarketAtomicExecutionFeeMultiplierRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketAtomicExecutionFeeMultiplierRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketAtomicExecutionFeeMultiplierRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMarketAtomicExecutionFeeMultiplierRequest>): QueryMarketAtomicExecutionFeeMultiplierRequest {
    const message = createBaseQueryMarketAtomicExecutionFeeMultiplierRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromAmino(object: QueryMarketAtomicExecutionFeeMultiplierRequestAmino): QueryMarketAtomicExecutionFeeMultiplierRequest {
    const message = createBaseQueryMarketAtomicExecutionFeeMultiplierRequest();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: QueryMarketAtomicExecutionFeeMultiplierRequest): QueryMarketAtomicExecutionFeeMultiplierRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryMarketAtomicExecutionFeeMultiplierRequestAminoMsg): QueryMarketAtomicExecutionFeeMultiplierRequest {
    return QueryMarketAtomicExecutionFeeMultiplierRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketAtomicExecutionFeeMultiplierRequestProtoMsg): QueryMarketAtomicExecutionFeeMultiplierRequest {
    return QueryMarketAtomicExecutionFeeMultiplierRequest.decode(message.value);
  },
  toProto(message: QueryMarketAtomicExecutionFeeMultiplierRequest): Uint8Array {
    return QueryMarketAtomicExecutionFeeMultiplierRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketAtomicExecutionFeeMultiplierRequest): QueryMarketAtomicExecutionFeeMultiplierRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryMarketAtomicExecutionFeeMultiplierRequest",
      value: QueryMarketAtomicExecutionFeeMultiplierRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryMarketAtomicExecutionFeeMultiplierResponse(): QueryMarketAtomicExecutionFeeMultiplierResponse {
  return {
    multiplier: ""
  };
}
export const QueryMarketAtomicExecutionFeeMultiplierResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketAtomicExecutionFeeMultiplierResponse",
  is(o: any): o is QueryMarketAtomicExecutionFeeMultiplierResponse {
    return o && (o.$typeUrl === QueryMarketAtomicExecutionFeeMultiplierResponse.typeUrl || typeof o.multiplier === "string");
  },
  isAmino(o: any): o is QueryMarketAtomicExecutionFeeMultiplierResponseAmino {
    return o && (o.$typeUrl === QueryMarketAtomicExecutionFeeMultiplierResponse.typeUrl || typeof o.multiplier === "string");
  },
  encode(message: QueryMarketAtomicExecutionFeeMultiplierResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.multiplier !== "") {
      writer.uint32(10).string(message.multiplier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketAtomicExecutionFeeMultiplierResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketAtomicExecutionFeeMultiplierResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.multiplier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMarketAtomicExecutionFeeMultiplierResponse>): QueryMarketAtomicExecutionFeeMultiplierResponse {
    const message = createBaseQueryMarketAtomicExecutionFeeMultiplierResponse();
    message.multiplier = object.multiplier ?? "";
    return message;
  },
  fromAmino(object: QueryMarketAtomicExecutionFeeMultiplierResponseAmino): QueryMarketAtomicExecutionFeeMultiplierResponse {
    const message = createBaseQueryMarketAtomicExecutionFeeMultiplierResponse();
    if (object.multiplier !== undefined && object.multiplier !== null) {
      message.multiplier = object.multiplier;
    }
    return message;
  },
  toAmino(message: QueryMarketAtomicExecutionFeeMultiplierResponse): QueryMarketAtomicExecutionFeeMultiplierResponseAmino {
    const obj: any = {};
    obj.multiplier = message.multiplier === "" ? undefined : message.multiplier;
    return obj;
  },
  fromAminoMsg(object: QueryMarketAtomicExecutionFeeMultiplierResponseAminoMsg): QueryMarketAtomicExecutionFeeMultiplierResponse {
    return QueryMarketAtomicExecutionFeeMultiplierResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketAtomicExecutionFeeMultiplierResponseProtoMsg): QueryMarketAtomicExecutionFeeMultiplierResponse {
    return QueryMarketAtomicExecutionFeeMultiplierResponse.decode(message.value);
  },
  toProto(message: QueryMarketAtomicExecutionFeeMultiplierResponse): Uint8Array {
    return QueryMarketAtomicExecutionFeeMultiplierResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketAtomicExecutionFeeMultiplierResponse): QueryMarketAtomicExecutionFeeMultiplierResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryMarketAtomicExecutionFeeMultiplierResponse",
      value: QueryMarketAtomicExecutionFeeMultiplierResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryActiveStakeGrantRequest(): QueryActiveStakeGrantRequest {
  return {
    grantee: ""
  };
}
export const QueryActiveStakeGrantRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryActiveStakeGrantRequest",
  is(o: any): o is QueryActiveStakeGrantRequest {
    return o && (o.$typeUrl === QueryActiveStakeGrantRequest.typeUrl || typeof o.grantee === "string");
  },
  isAmino(o: any): o is QueryActiveStakeGrantRequestAmino {
    return o && (o.$typeUrl === QueryActiveStakeGrantRequest.typeUrl || typeof o.grantee === "string");
  },
  encode(message: QueryActiveStakeGrantRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActiveStakeGrantRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActiveStakeGrantRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryActiveStakeGrantRequest>): QueryActiveStakeGrantRequest {
    const message = createBaseQueryActiveStakeGrantRequest();
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromAmino(object: QueryActiveStakeGrantRequestAmino): QueryActiveStakeGrantRequest {
    const message = createBaseQueryActiveStakeGrantRequest();
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    return message;
  },
  toAmino(message: QueryActiveStakeGrantRequest): QueryActiveStakeGrantRequestAmino {
    const obj: any = {};
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    return obj;
  },
  fromAminoMsg(object: QueryActiveStakeGrantRequestAminoMsg): QueryActiveStakeGrantRequest {
    return QueryActiveStakeGrantRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActiveStakeGrantRequestProtoMsg): QueryActiveStakeGrantRequest {
    return QueryActiveStakeGrantRequest.decode(message.value);
  },
  toProto(message: QueryActiveStakeGrantRequest): Uint8Array {
    return QueryActiveStakeGrantRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryActiveStakeGrantRequest): QueryActiveStakeGrantRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryActiveStakeGrantRequest",
      value: QueryActiveStakeGrantRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryActiveStakeGrantResponse(): QueryActiveStakeGrantResponse {
  return {
    grant: undefined,
    effectiveGrant: undefined
  };
}
export const QueryActiveStakeGrantResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryActiveStakeGrantResponse",
  is(o: any): o is QueryActiveStakeGrantResponse {
    return o && o.$typeUrl === QueryActiveStakeGrantResponse.typeUrl;
  },
  isAmino(o: any): o is QueryActiveStakeGrantResponseAmino {
    return o && o.$typeUrl === QueryActiveStakeGrantResponse.typeUrl;
  },
  encode(message: QueryActiveStakeGrantResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grant !== undefined) {
      ActiveGrant.encode(message.grant, writer.uint32(10).fork()).ldelim();
    }
    if (message.effectiveGrant !== undefined) {
      EffectiveGrant.encode(message.effectiveGrant, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActiveStakeGrantResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActiveStakeGrantResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grant = ActiveGrant.decode(reader, reader.uint32());
          break;
        case 2:
          message.effectiveGrant = EffectiveGrant.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryActiveStakeGrantResponse>): QueryActiveStakeGrantResponse {
    const message = createBaseQueryActiveStakeGrantResponse();
    message.grant = object.grant !== undefined && object.grant !== null ? ActiveGrant.fromPartial(object.grant) : undefined;
    message.effectiveGrant = object.effectiveGrant !== undefined && object.effectiveGrant !== null ? EffectiveGrant.fromPartial(object.effectiveGrant) : undefined;
    return message;
  },
  fromAmino(object: QueryActiveStakeGrantResponseAmino): QueryActiveStakeGrantResponse {
    const message = createBaseQueryActiveStakeGrantResponse();
    if (object.grant !== undefined && object.grant !== null) {
      message.grant = ActiveGrant.fromAmino(object.grant);
    }
    if (object.effective_grant !== undefined && object.effective_grant !== null) {
      message.effectiveGrant = EffectiveGrant.fromAmino(object.effective_grant);
    }
    return message;
  },
  toAmino(message: QueryActiveStakeGrantResponse): QueryActiveStakeGrantResponseAmino {
    const obj: any = {};
    obj.grant = message.grant ? ActiveGrant.toAmino(message.grant) : undefined;
    obj.effective_grant = message.effectiveGrant ? EffectiveGrant.toAmino(message.effectiveGrant) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryActiveStakeGrantResponseAminoMsg): QueryActiveStakeGrantResponse {
    return QueryActiveStakeGrantResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActiveStakeGrantResponseProtoMsg): QueryActiveStakeGrantResponse {
    return QueryActiveStakeGrantResponse.decode(message.value);
  },
  toProto(message: QueryActiveStakeGrantResponse): Uint8Array {
    return QueryActiveStakeGrantResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryActiveStakeGrantResponse): QueryActiveStakeGrantResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryActiveStakeGrantResponse",
      value: QueryActiveStakeGrantResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ActiveGrant.registerTypeUrl();
    EffectiveGrant.registerTypeUrl();
  }
};
function createBaseQueryGrantAuthorizationRequest(): QueryGrantAuthorizationRequest {
  return {
    granter: "",
    grantee: ""
  };
}
export const QueryGrantAuthorizationRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryGrantAuthorizationRequest",
  is(o: any): o is QueryGrantAuthorizationRequest {
    return o && (o.$typeUrl === QueryGrantAuthorizationRequest.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  isAmino(o: any): o is QueryGrantAuthorizationRequestAmino {
    return o && (o.$typeUrl === QueryGrantAuthorizationRequest.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  encode(message: QueryGrantAuthorizationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGrantAuthorizationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantAuthorizationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGrantAuthorizationRequest>): QueryGrantAuthorizationRequest {
    const message = createBaseQueryGrantAuthorizationRequest();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromAmino(object: QueryGrantAuthorizationRequestAmino): QueryGrantAuthorizationRequest {
    const message = createBaseQueryGrantAuthorizationRequest();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    return message;
  },
  toAmino(message: QueryGrantAuthorizationRequest): QueryGrantAuthorizationRequestAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    return obj;
  },
  fromAminoMsg(object: QueryGrantAuthorizationRequestAminoMsg): QueryGrantAuthorizationRequest {
    return QueryGrantAuthorizationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGrantAuthorizationRequestProtoMsg): QueryGrantAuthorizationRequest {
    return QueryGrantAuthorizationRequest.decode(message.value);
  },
  toProto(message: QueryGrantAuthorizationRequest): Uint8Array {
    return QueryGrantAuthorizationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGrantAuthorizationRequest): QueryGrantAuthorizationRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryGrantAuthorizationRequest",
      value: QueryGrantAuthorizationRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryGrantAuthorizationResponse(): QueryGrantAuthorizationResponse {
  return {
    amount: ""
  };
}
export const QueryGrantAuthorizationResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryGrantAuthorizationResponse",
  is(o: any): o is QueryGrantAuthorizationResponse {
    return o && (o.$typeUrl === QueryGrantAuthorizationResponse.typeUrl || typeof o.amount === "string");
  },
  isAmino(o: any): o is QueryGrantAuthorizationResponseAmino {
    return o && (o.$typeUrl === QueryGrantAuthorizationResponse.typeUrl || typeof o.amount === "string");
  },
  encode(message: QueryGrantAuthorizationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGrantAuthorizationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantAuthorizationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGrantAuthorizationResponse>): QueryGrantAuthorizationResponse {
    const message = createBaseQueryGrantAuthorizationResponse();
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: QueryGrantAuthorizationResponseAmino): QueryGrantAuthorizationResponse {
    const message = createBaseQueryGrantAuthorizationResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: QueryGrantAuthorizationResponse): QueryGrantAuthorizationResponseAmino {
    const obj: any = {};
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: QueryGrantAuthorizationResponseAminoMsg): QueryGrantAuthorizationResponse {
    return QueryGrantAuthorizationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGrantAuthorizationResponseProtoMsg): QueryGrantAuthorizationResponse {
    return QueryGrantAuthorizationResponse.decode(message.value);
  },
  toProto(message: QueryGrantAuthorizationResponse): Uint8Array {
    return QueryGrantAuthorizationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGrantAuthorizationResponse): QueryGrantAuthorizationResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryGrantAuthorizationResponse",
      value: QueryGrantAuthorizationResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryGrantAuthorizationsRequest(): QueryGrantAuthorizationsRequest {
  return {
    granter: ""
  };
}
export const QueryGrantAuthorizationsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryGrantAuthorizationsRequest",
  is(o: any): o is QueryGrantAuthorizationsRequest {
    return o && (o.$typeUrl === QueryGrantAuthorizationsRequest.typeUrl || typeof o.granter === "string");
  },
  isAmino(o: any): o is QueryGrantAuthorizationsRequestAmino {
    return o && (o.$typeUrl === QueryGrantAuthorizationsRequest.typeUrl || typeof o.granter === "string");
  },
  encode(message: QueryGrantAuthorizationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGrantAuthorizationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantAuthorizationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGrantAuthorizationsRequest>): QueryGrantAuthorizationsRequest {
    const message = createBaseQueryGrantAuthorizationsRequest();
    message.granter = object.granter ?? "";
    return message;
  },
  fromAmino(object: QueryGrantAuthorizationsRequestAmino): QueryGrantAuthorizationsRequest {
    const message = createBaseQueryGrantAuthorizationsRequest();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    return message;
  },
  toAmino(message: QueryGrantAuthorizationsRequest): QueryGrantAuthorizationsRequestAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    return obj;
  },
  fromAminoMsg(object: QueryGrantAuthorizationsRequestAminoMsg): QueryGrantAuthorizationsRequest {
    return QueryGrantAuthorizationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGrantAuthorizationsRequestProtoMsg): QueryGrantAuthorizationsRequest {
    return QueryGrantAuthorizationsRequest.decode(message.value);
  },
  toProto(message: QueryGrantAuthorizationsRequest): Uint8Array {
    return QueryGrantAuthorizationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGrantAuthorizationsRequest): QueryGrantAuthorizationsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryGrantAuthorizationsRequest",
      value: QueryGrantAuthorizationsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryGrantAuthorizationsResponse(): QueryGrantAuthorizationsResponse {
  return {
    totalGrantAmount: "",
    grants: []
  };
}
export const QueryGrantAuthorizationsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryGrantAuthorizationsResponse",
  is(o: any): o is QueryGrantAuthorizationsResponse {
    return o && (o.$typeUrl === QueryGrantAuthorizationsResponse.typeUrl || typeof o.totalGrantAmount === "string" && Array.isArray(o.grants) && (!o.grants.length || GrantAuthorization.is(o.grants[0])));
  },
  isAmino(o: any): o is QueryGrantAuthorizationsResponseAmino {
    return o && (o.$typeUrl === QueryGrantAuthorizationsResponse.typeUrl || typeof o.total_grant_amount === "string" && Array.isArray(o.grants) && (!o.grants.length || GrantAuthorization.isAmino(o.grants[0])));
  },
  encode(message: QueryGrantAuthorizationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalGrantAmount !== "") {
      writer.uint32(10).string(message.totalGrantAmount);
    }
    for (const v of message.grants) {
      GrantAuthorization.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGrantAuthorizationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantAuthorizationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalGrantAmount = reader.string();
          break;
        case 2:
          message.grants.push(GrantAuthorization.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGrantAuthorizationsResponse>): QueryGrantAuthorizationsResponse {
    const message = createBaseQueryGrantAuthorizationsResponse();
    message.totalGrantAmount = object.totalGrantAmount ?? "";
    message.grants = object.grants?.map(e => GrantAuthorization.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryGrantAuthorizationsResponseAmino): QueryGrantAuthorizationsResponse {
    const message = createBaseQueryGrantAuthorizationsResponse();
    if (object.total_grant_amount !== undefined && object.total_grant_amount !== null) {
      message.totalGrantAmount = object.total_grant_amount;
    }
    message.grants = object.grants?.map(e => GrantAuthorization.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryGrantAuthorizationsResponse): QueryGrantAuthorizationsResponseAmino {
    const obj: any = {};
    obj.total_grant_amount = message.totalGrantAmount === "" ? undefined : message.totalGrantAmount;
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? GrantAuthorization.toAmino(e) : undefined);
    } else {
      obj.grants = message.grants;
    }
    return obj;
  },
  fromAminoMsg(object: QueryGrantAuthorizationsResponseAminoMsg): QueryGrantAuthorizationsResponse {
    return QueryGrantAuthorizationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGrantAuthorizationsResponseProtoMsg): QueryGrantAuthorizationsResponse {
    return QueryGrantAuthorizationsResponse.decode(message.value);
  },
  toProto(message: QueryGrantAuthorizationsResponse): Uint8Array {
    return QueryGrantAuthorizationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGrantAuthorizationsResponse): QueryGrantAuthorizationsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryGrantAuthorizationsResponse",
      value: QueryGrantAuthorizationsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    GrantAuthorization.registerTypeUrl();
  }
};