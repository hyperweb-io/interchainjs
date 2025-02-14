import { MarketStatus, DenomDecimals, DenomDecimalsAmino, TradingRewardCampaignInfo, TradingRewardCampaignInfoAmino, CampaignRewardPool, CampaignRewardPoolAmino, FeeDiscountSchedule, FeeDiscountScheduleAmino, MarketFeeMultiplier, MarketFeeMultiplierAmino } from "./exchange";
import { OracleType } from "../../oracle/v1beta1/oracle";
import { CommunityPoolSpendProposal, CommunityPoolSpendProposalAmino } from "../../../cosmos/distribution/v1beta1/distribution";
import { isSet, DeepPartial } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export enum ExchangeType {
  EXCHANGE_UNSPECIFIED = 0,
  SPOT = 1,
  DERIVATIVES = 2,
  UNRECOGNIZED = -1,
}
export const ExchangeTypeAmino = ExchangeType;
export function exchangeTypeFromJSON(object: any): ExchangeType {
  switch (object) {
    case 0:
    case "EXCHANGE_UNSPECIFIED":
      return ExchangeType.EXCHANGE_UNSPECIFIED;
    case 1:
    case "SPOT":
      return ExchangeType.SPOT;
    case 2:
    case "DERIVATIVES":
      return ExchangeType.DERIVATIVES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ExchangeType.UNRECOGNIZED;
  }
}
export function exchangeTypeToJSON(object: ExchangeType): string {
  switch (object) {
    case ExchangeType.EXCHANGE_UNSPECIFIED:
      return "EXCHANGE_UNSPECIFIED";
    case ExchangeType.SPOT:
      return "SPOT";
    case ExchangeType.DERIVATIVES:
      return "DERIVATIVES";
    case ExchangeType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface SpotMarketParamUpdateProposal {
  title: string;
  description: string;
  marketId: string;
  /** maker_fee_rate defines the trade fee rate for makers on the spot market */
  makerFeeRate?: string;
  /** taker_fee_rate defines the trade fee rate for takers on the spot market */
  takerFeeRate?: string;
  /**
   * relayer_fee_share_rate defines the relayer fee share rate for the spot
   * market
   */
  relayerFeeShareRate?: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  minPriceTickSize?: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  minQuantityTickSize?: string;
  status: MarketStatus;
  ticker?: string;
  /**
   * min_notional defines the minimum notional (in quote asset) required for
   * orders in the market
   */
  minNotional?: string;
  adminInfo?: AdminInfo;
}
export interface SpotMarketParamUpdateProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SpotMarketParamUpdateProposal";
  value: Uint8Array;
}
export interface SpotMarketParamUpdateProposalAmino {
  title: string;
  description: string;
  market_id: string;
  /** maker_fee_rate defines the trade fee rate for makers on the spot market */
  maker_fee_rate?: string;
  /** taker_fee_rate defines the trade fee rate for takers on the spot market */
  taker_fee_rate?: string;
  /**
   * relayer_fee_share_rate defines the relayer fee share rate for the spot
   * market
   */
  relayer_fee_share_rate?: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  min_price_tick_size?: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  min_quantity_tick_size?: string;
  status: MarketStatus;
  ticker?: string;
  /**
   * min_notional defines the minimum notional (in quote asset) required for
   * orders in the market
   */
  min_notional?: string;
  admin_info?: AdminInfoAmino;
}
export interface SpotMarketParamUpdateProposalAminoMsg {
  type: "exchange/SpotMarketParamUpdateProposal";
  value: SpotMarketParamUpdateProposalAmino;
}
export interface ExchangeEnableProposal {
  title: string;
  description: string;
  exchangeType: ExchangeType;
}
export interface ExchangeEnableProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.ExchangeEnableProposal";
  value: Uint8Array;
}
export interface ExchangeEnableProposalAmino {
  title: string;
  description: string;
  exchangeType: ExchangeType;
}
export interface ExchangeEnableProposalAminoMsg {
  type: "exchange/ExchangeEnableProposal";
  value: ExchangeEnableProposalAmino;
}
export interface BatchExchangeModificationProposal {
  title: string;
  description: string;
  spotMarketParamUpdateProposals: SpotMarketParamUpdateProposal[];
  derivativeMarketParamUpdateProposals: DerivativeMarketParamUpdateProposal[];
  spotMarketLaunchProposals: SpotMarketLaunchProposal[];
  perpetualMarketLaunchProposals: PerpetualMarketLaunchProposal[];
  expiryFuturesMarketLaunchProposals: ExpiryFuturesMarketLaunchProposal[];
  tradingRewardCampaignUpdateProposal?: TradingRewardCampaignUpdateProposal;
  binaryOptionsMarketLaunchProposals: BinaryOptionsMarketLaunchProposal[];
  binaryOptionsParamUpdateProposals: BinaryOptionsMarketParamUpdateProposal[];
  denomDecimalsUpdateProposal?: UpdateDenomDecimalsProposal;
  feeDiscountProposal?: FeeDiscountProposal;
  marketForcedSettlementProposals: MarketForcedSettlementProposal[];
}
export interface BatchExchangeModificationProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.BatchExchangeModificationProposal";
  value: Uint8Array;
}
export interface BatchExchangeModificationProposalAmino {
  title: string;
  description: string;
  spot_market_param_update_proposals: SpotMarketParamUpdateProposalAmino[];
  derivative_market_param_update_proposals: DerivativeMarketParamUpdateProposalAmino[];
  spot_market_launch_proposals: SpotMarketLaunchProposalAmino[];
  perpetual_market_launch_proposals: PerpetualMarketLaunchProposalAmino[];
  expiry_futures_market_launch_proposals: ExpiryFuturesMarketLaunchProposalAmino[];
  trading_reward_campaign_update_proposal?: TradingRewardCampaignUpdateProposalAmino;
  binary_options_market_launch_proposals: BinaryOptionsMarketLaunchProposalAmino[];
  binary_options_param_update_proposals: BinaryOptionsMarketParamUpdateProposalAmino[];
  denom_decimals_update_proposal?: UpdateDenomDecimalsProposalAmino;
  fee_discount_proposal?: FeeDiscountProposalAmino;
  market_forced_settlement_proposals: MarketForcedSettlementProposalAmino[];
}
export interface BatchExchangeModificationProposalAminoMsg {
  type: "exchange/BatchExchangeModificationProposal";
  value: BatchExchangeModificationProposalAmino;
}
/**
 * SpotMarketLaunchProposal defines a SDK message for proposing a new spot
 * market through governance
 */
export interface SpotMarketLaunchProposal {
  title: string;
  description: string;
  /** Ticker for the spot market. */
  ticker: string;
  /** type of coin to use as the base currency */
  baseDenom: string;
  /** type of coin to use as the quote currency */
  quoteDenom: string;
  /** min_price_tick_size defines the minimum tick size of the order's price */
  minPriceTickSize: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  minQuantityTickSize: string;
  /** maker_fee_rate defines the fee percentage makers pay when trading */
  makerFeeRate?: string;
  /** taker_fee_rate defines the fee percentage takers pay when trading */
  takerFeeRate?: string;
  /** min_notional defines the minimum notional for orders in the market */
  minNotional: string;
  adminInfo?: AdminInfo;
}
export interface SpotMarketLaunchProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SpotMarketLaunchProposal";
  value: Uint8Array;
}
/**
 * SpotMarketLaunchProposal defines a SDK message for proposing a new spot
 * market through governance
 */
export interface SpotMarketLaunchProposalAmino {
  title: string;
  description: string;
  /** Ticker for the spot market. */
  ticker: string;
  /** type of coin to use as the base currency */
  base_denom: string;
  /** type of coin to use as the quote currency */
  quote_denom: string;
  /** min_price_tick_size defines the minimum tick size of the order's price */
  min_price_tick_size: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  min_quantity_tick_size: string;
  /** maker_fee_rate defines the fee percentage makers pay when trading */
  maker_fee_rate?: string;
  /** taker_fee_rate defines the fee percentage takers pay when trading */
  taker_fee_rate?: string;
  /** min_notional defines the minimum notional for orders in the market */
  min_notional: string;
  admin_info?: AdminInfoAmino;
}
export interface SpotMarketLaunchProposalAminoMsg {
  type: "exchange/SpotMarketLaunchProposal";
  value: SpotMarketLaunchProposalAmino;
}
/**
 * PerpetualMarketLaunchProposal defines a SDK message for proposing a new
 * perpetual futures market through governance
 */
export interface PerpetualMarketLaunchProposal {
  title: string;
  description: string;
  /** Ticker for the derivative market. */
  ticker: string;
  /** type of coin to use as the base currency */
  quoteDenom: string;
  /** Oracle base currency */
  oracleBase: string;
  /** Oracle quote currency */
  oracleQuote: string;
  /** Scale factor for oracle prices. */
  oracleScaleFactor: number;
  /** Oracle type */
  oracleType: OracleType;
  /**
   * initial_margin_ratio defines the initial margin ratio for the derivative
   * market
   */
  initialMarginRatio: string;
  /**
   * maintenance_margin_ratio defines the maintenance margin ratio for the
   * derivative market
   */
  maintenanceMarginRatio: string;
  /**
   * maker_fee_rate defines the exchange trade fee for makers for the derivative
   * market
   */
  makerFeeRate: string;
  /**
   * taker_fee_rate defines the exchange trade fee for takers for the derivative
   * market
   */
  takerFeeRate: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  minPriceTickSize: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  minQuantityTickSize: string;
  /**
   * min_notional defines the minimum notional (in quote asset) required for
   * orders in the market
   */
  minNotional: string;
  adminInfo?: AdminInfo;
}
export interface PerpetualMarketLaunchProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.PerpetualMarketLaunchProposal";
  value: Uint8Array;
}
/**
 * PerpetualMarketLaunchProposal defines a SDK message for proposing a new
 * perpetual futures market through governance
 */
export interface PerpetualMarketLaunchProposalAmino {
  title: string;
  description: string;
  /** Ticker for the derivative market. */
  ticker: string;
  /** type of coin to use as the base currency */
  quote_denom: string;
  /** Oracle base currency */
  oracle_base: string;
  /** Oracle quote currency */
  oracle_quote: string;
  /** Scale factor for oracle prices. */
  oracle_scale_factor: number;
  /** Oracle type */
  oracle_type: OracleType;
  /**
   * initial_margin_ratio defines the initial margin ratio for the derivative
   * market
   */
  initial_margin_ratio: string;
  /**
   * maintenance_margin_ratio defines the maintenance margin ratio for the
   * derivative market
   */
  maintenance_margin_ratio: string;
  /**
   * maker_fee_rate defines the exchange trade fee for makers for the derivative
   * market
   */
  maker_fee_rate: string;
  /**
   * taker_fee_rate defines the exchange trade fee for takers for the derivative
   * market
   */
  taker_fee_rate: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  min_price_tick_size: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  min_quantity_tick_size: string;
  /**
   * min_notional defines the minimum notional (in quote asset) required for
   * orders in the market
   */
  min_notional: string;
  admin_info?: AdminInfoAmino;
}
export interface PerpetualMarketLaunchProposalAminoMsg {
  type: "exchange/PerpetualMarketLaunchProposal";
  value: PerpetualMarketLaunchProposalAmino;
}
export interface BinaryOptionsMarketLaunchProposal {
  title: string;
  description: string;
  /** Ticker for the derivative contract. */
  ticker: string;
  /** Oracle symbol */
  oracleSymbol: string;
  /** Oracle Provider */
  oracleProvider: string;
  /** Oracle type */
  oracleType: OracleType;
  /** Scale factor for oracle prices. */
  oracleScaleFactor: number;
  /** expiration timestamp */
  expirationTimestamp: bigint;
  /** expiration timestamp */
  settlementTimestamp: bigint;
  /** admin of the market */
  admin: string;
  /** Address of the quote currency denomination for the binary options contract */
  quoteDenom: string;
  /** maker_fee_rate defines the maker fee rate of a binary options market */
  makerFeeRate: string;
  /** taker_fee_rate defines the taker fee rate of a derivative market */
  takerFeeRate: string;
  /**
   * min_price_tick_size defines the minimum tick size that the price and margin
   * required for orders in the market
   */
  minPriceTickSize: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the quantity
   * required for orders in the market
   */
  minQuantityTickSize: string;
  /**
   * min_notional defines the minimum notional (in quote asset) required for
   * orders in the market
   */
  minNotional: string;
  adminPermissions: number;
}
export interface BinaryOptionsMarketLaunchProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarketLaunchProposal";
  value: Uint8Array;
}
export interface BinaryOptionsMarketLaunchProposalAmino {
  title: string;
  description: string;
  /** Ticker for the derivative contract. */
  ticker: string;
  /** Oracle symbol */
  oracle_symbol: string;
  /** Oracle Provider */
  oracle_provider: string;
  /** Oracle type */
  oracle_type: OracleType;
  /** Scale factor for oracle prices. */
  oracle_scale_factor: number;
  /** expiration timestamp */
  expiration_timestamp: string;
  /** expiration timestamp */
  settlement_timestamp: string;
  /** admin of the market */
  admin: string;
  /** Address of the quote currency denomination for the binary options contract */
  quote_denom: string;
  /** maker_fee_rate defines the maker fee rate of a binary options market */
  maker_fee_rate: string;
  /** taker_fee_rate defines the taker fee rate of a derivative market */
  taker_fee_rate: string;
  /**
   * min_price_tick_size defines the minimum tick size that the price and margin
   * required for orders in the market
   */
  min_price_tick_size: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the quantity
   * required for orders in the market
   */
  min_quantity_tick_size: string;
  /**
   * min_notional defines the minimum notional (in quote asset) required for
   * orders in the market
   */
  min_notional: string;
  admin_permissions: number;
}
export interface BinaryOptionsMarketLaunchProposalAminoMsg {
  type: "exchange/BinaryOptionsMarketLaunchProposal";
  value: BinaryOptionsMarketLaunchProposalAmino;
}
/**
 * ExpiryFuturesMarketLaunchProposal defines a SDK message for proposing a new
 * expiry futures market through governance
 */
export interface ExpiryFuturesMarketLaunchProposal {
  title: string;
  description: string;
  /** Ticker for the derivative market. */
  ticker: string;
  /** type of coin to use as the quote currency */
  quoteDenom: string;
  /** Oracle base currency */
  oracleBase: string;
  /** Oracle quote currency */
  oracleQuote: string;
  /** Scale factor for oracle prices. */
  oracleScaleFactor: number;
  /** Oracle type */
  oracleType: OracleType;
  /** Expiration time of the market */
  expiry: bigint;
  /**
   * initial_margin_ratio defines the initial margin ratio for the derivative
   * market
   */
  initialMarginRatio: string;
  /**
   * maintenance_margin_ratio defines the maintenance margin ratio for the
   * derivative market
   */
  maintenanceMarginRatio: string;
  /**
   * maker_fee_rate defines the exchange trade fee for makers for the derivative
   * market
   */
  makerFeeRate: string;
  /**
   * taker_fee_rate defines the exchange trade fee for takers for the derivative
   * market
   */
  takerFeeRate: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  minPriceTickSize: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  minQuantityTickSize: string;
  /**
   * min_notional defines the minimum notional (in quote asset) required for
   * orders in the market
   */
  minNotional: string;
  adminInfo?: AdminInfo;
}
export interface ExpiryFuturesMarketLaunchProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal";
  value: Uint8Array;
}
/**
 * ExpiryFuturesMarketLaunchProposal defines a SDK message for proposing a new
 * expiry futures market through governance
 */
export interface ExpiryFuturesMarketLaunchProposalAmino {
  title: string;
  description: string;
  /** Ticker for the derivative market. */
  ticker: string;
  /** type of coin to use as the quote currency */
  quote_denom: string;
  /** Oracle base currency */
  oracle_base: string;
  /** Oracle quote currency */
  oracle_quote: string;
  /** Scale factor for oracle prices. */
  oracle_scale_factor: number;
  /** Oracle type */
  oracle_type: OracleType;
  /** Expiration time of the market */
  expiry: string;
  /**
   * initial_margin_ratio defines the initial margin ratio for the derivative
   * market
   */
  initial_margin_ratio: string;
  /**
   * maintenance_margin_ratio defines the maintenance margin ratio for the
   * derivative market
   */
  maintenance_margin_ratio: string;
  /**
   * maker_fee_rate defines the exchange trade fee for makers for the derivative
   * market
   */
  maker_fee_rate: string;
  /**
   * taker_fee_rate defines the exchange trade fee for takers for the derivative
   * market
   */
  taker_fee_rate: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  min_price_tick_size: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  min_quantity_tick_size: string;
  /**
   * min_notional defines the minimum notional (in quote asset) required for
   * orders in the market
   */
  min_notional: string;
  admin_info?: AdminInfoAmino;
}
export interface ExpiryFuturesMarketLaunchProposalAminoMsg {
  type: "exchange/ExpiryFuturesMarketLaunchProposal";
  value: ExpiryFuturesMarketLaunchProposalAmino;
}
export interface DerivativeMarketParamUpdateProposal {
  title: string;
  description: string;
  marketId: string;
  /**
   * initial_margin_ratio defines the initial margin ratio for the derivative
   * market
   */
  initialMarginRatio?: string;
  /**
   * maintenance_margin_ratio defines the maintenance margin ratio for the
   * derivative market
   */
  maintenanceMarginRatio?: string;
  /**
   * maker_fee_rate defines the exchange trade fee for makers for the derivative
   * market
   */
  makerFeeRate?: string;
  /**
   * taker_fee_rate defines the exchange trade fee for takers for the derivative
   * market
   */
  takerFeeRate?: string;
  /**
   * relayer_fee_share_rate defines the relayer fee share rate for the
   * derivative market
   */
  relayerFeeShareRate?: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  minPriceTickSize?: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  minQuantityTickSize?: string;
  /** hourly_interest_rate defines the hourly interest rate */
  hourlyInterestRate?: string;
  /**
   * hourly_funding_rate_cap defines the maximum absolute value of the hourly
   * funding rate
   */
  hourlyFundingRateCap?: string;
  status: MarketStatus;
  oracleParams?: OracleParams;
  ticker?: string;
  /**
   * min_notional defines the minimum notional (in quote asset) required for
   * orders in the market
   */
  minNotional?: string;
  adminInfo?: AdminInfo;
}
export interface DerivativeMarketParamUpdateProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal";
  value: Uint8Array;
}
export interface DerivativeMarketParamUpdateProposalAmino {
  title: string;
  description: string;
  market_id: string;
  /**
   * initial_margin_ratio defines the initial margin ratio for the derivative
   * market
   */
  initial_margin_ratio?: string;
  /**
   * maintenance_margin_ratio defines the maintenance margin ratio for the
   * derivative market
   */
  maintenance_margin_ratio?: string;
  /**
   * maker_fee_rate defines the exchange trade fee for makers for the derivative
   * market
   */
  maker_fee_rate?: string;
  /**
   * taker_fee_rate defines the exchange trade fee for takers for the derivative
   * market
   */
  taker_fee_rate?: string;
  /**
   * relayer_fee_share_rate defines the relayer fee share rate for the
   * derivative market
   */
  relayer_fee_share_rate?: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  min_price_tick_size?: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  min_quantity_tick_size?: string;
  /** hourly_interest_rate defines the hourly interest rate */
  HourlyInterestRate?: string;
  /**
   * hourly_funding_rate_cap defines the maximum absolute value of the hourly
   * funding rate
   */
  HourlyFundingRateCap?: string;
  status: MarketStatus;
  oracle_params?: OracleParamsAmino;
  ticker?: string;
  /**
   * min_notional defines the minimum notional (in quote asset) required for
   * orders in the market
   */
  min_notional?: string;
  admin_info?: AdminInfoAmino;
}
export interface DerivativeMarketParamUpdateProposalAminoMsg {
  type: "exchange/DerivativeMarketParamUpdateProposal";
  value: DerivativeMarketParamUpdateProposalAmino;
}
export interface AdminInfo {
  admin: string;
  adminPermissions: number;
}
export interface AdminInfoProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.AdminInfo";
  value: Uint8Array;
}
export interface AdminInfoAmino {
  admin: string;
  admin_permissions: number;
}
export interface AdminInfoAminoMsg {
  type: "/injective.exchange.v1beta1.AdminInfo";
  value: AdminInfoAmino;
}
export interface MarketForcedSettlementProposal {
  title: string;
  description: string;
  marketId: string;
  settlementPrice?: string;
}
export interface MarketForcedSettlementProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MarketForcedSettlementProposal";
  value: Uint8Array;
}
export interface MarketForcedSettlementProposalAmino {
  title: string;
  description: string;
  market_id: string;
  settlement_price?: string;
}
export interface MarketForcedSettlementProposalAminoMsg {
  type: "exchange/MarketForcedSettlementProposal";
  value: MarketForcedSettlementProposalAmino;
}
export interface UpdateDenomDecimalsProposal {
  title: string;
  description: string;
  denomDecimals: DenomDecimals[];
}
export interface UpdateDenomDecimalsProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.UpdateDenomDecimalsProposal";
  value: Uint8Array;
}
export interface UpdateDenomDecimalsProposalAmino {
  title: string;
  description: string;
  denom_decimals: DenomDecimalsAmino[];
}
export interface UpdateDenomDecimalsProposalAminoMsg {
  type: "exchange/UpdateDenomDecimalsProposal";
  value: UpdateDenomDecimalsProposalAmino;
}
export interface BinaryOptionsMarketParamUpdateProposal {
  title: string;
  description: string;
  marketId: string;
  /**
   * maker_fee_rate defines the exchange trade fee for makers for the derivative
   * market
   */
  makerFeeRate?: string;
  /**
   * taker_fee_rate defines the exchange trade fee for takers for the derivative
   * market
   */
  takerFeeRate?: string;
  /**
   * relayer_fee_share_rate defines the relayer fee share rate for the
   * derivative market
   */
  relayerFeeShareRate?: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  minPriceTickSize?: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  minQuantityTickSize?: string;
  /** expiration timestamp */
  expirationTimestamp: bigint;
  /** expiration timestamp */
  settlementTimestamp: bigint;
  /** new price at which market will be settled */
  settlementPrice?: string;
  /** admin of the market */
  admin: string;
  status: MarketStatus;
  oracleParams?: ProviderOracleParams;
  ticker?: string;
  /**
   * min_notional defines the minimum notional (in quote asset) required for
   * orders in the market
   */
  minNotional?: string;
}
export interface BinaryOptionsMarketParamUpdateProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarketParamUpdateProposal";
  value: Uint8Array;
}
export interface BinaryOptionsMarketParamUpdateProposalAmino {
  title: string;
  description: string;
  market_id: string;
  /**
   * maker_fee_rate defines the exchange trade fee for makers for the derivative
   * market
   */
  maker_fee_rate?: string;
  /**
   * taker_fee_rate defines the exchange trade fee for takers for the derivative
   * market
   */
  taker_fee_rate?: string;
  /**
   * relayer_fee_share_rate defines the relayer fee share rate for the
   * derivative market
   */
  relayer_fee_share_rate?: string;
  /**
   * min_price_tick_size defines the minimum tick size of the order's price and
   * margin
   */
  min_price_tick_size?: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the order's
   * quantity
   */
  min_quantity_tick_size?: string;
  /** expiration timestamp */
  expiration_timestamp: string;
  /** expiration timestamp */
  settlement_timestamp: string;
  /** new price at which market will be settled */
  settlement_price?: string;
  /** admin of the market */
  admin: string;
  status: MarketStatus;
  oracle_params?: ProviderOracleParamsAmino;
  ticker?: string;
  /**
   * min_notional defines the minimum notional (in quote asset) required for
   * orders in the market
   */
  min_notional?: string;
}
export interface BinaryOptionsMarketParamUpdateProposalAminoMsg {
  type: "exchange/BinaryOptionsMarketParamUpdateProposal";
  value: BinaryOptionsMarketParamUpdateProposalAmino;
}
export interface ProviderOracleParams {
  /** Oracle base currency */
  symbol: string;
  /** Oracle quote currency */
  provider: string;
  /** Scale factor for oracle prices. */
  oracleScaleFactor: number;
  /** Oracle type */
  oracleType: OracleType;
}
export interface ProviderOracleParamsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.ProviderOracleParams";
  value: Uint8Array;
}
export interface ProviderOracleParamsAmino {
  /** Oracle base currency */
  symbol: string;
  /** Oracle quote currency */
  provider: string;
  /** Scale factor for oracle prices. */
  oracle_scale_factor: number;
  /** Oracle type */
  oracle_type: OracleType;
}
export interface ProviderOracleParamsAminoMsg {
  type: "/injective.exchange.v1beta1.ProviderOracleParams";
  value: ProviderOracleParamsAmino;
}
export interface OracleParams {
  /** Oracle base currency */
  oracleBase: string;
  /** Oracle quote currency */
  oracleQuote: string;
  /** Scale factor for oracle prices. */
  oracleScaleFactor: number;
  /** Oracle type */
  oracleType: OracleType;
}
export interface OracleParamsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.OracleParams";
  value: Uint8Array;
}
export interface OracleParamsAmino {
  /** Oracle base currency */
  oracle_base: string;
  /** Oracle quote currency */
  oracle_quote: string;
  /** Scale factor for oracle prices. */
  oracle_scale_factor: number;
  /** Oracle type */
  oracle_type: OracleType;
}
export interface OracleParamsAminoMsg {
  type: "/injective.exchange.v1beta1.OracleParams";
  value: OracleParamsAmino;
}
export interface TradingRewardCampaignLaunchProposal {
  title: string;
  description: string;
  campaignInfo?: TradingRewardCampaignInfo;
  campaignRewardPools: CampaignRewardPool[];
}
export interface TradingRewardCampaignLaunchProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignLaunchProposal";
  value: Uint8Array;
}
export interface TradingRewardCampaignLaunchProposalAmino {
  title: string;
  description: string;
  campaign_info?: TradingRewardCampaignInfoAmino;
  campaign_reward_pools: CampaignRewardPoolAmino[];
}
export interface TradingRewardCampaignLaunchProposalAminoMsg {
  type: "exchange/TradingRewardCampaignLaunchProposal";
  value: TradingRewardCampaignLaunchProposalAmino;
}
export interface TradingRewardCampaignUpdateProposal {
  title: string;
  description: string;
  campaignInfo?: TradingRewardCampaignInfo;
  campaignRewardPoolsAdditions: CampaignRewardPool[];
  campaignRewardPoolsUpdates: CampaignRewardPool[];
}
export interface TradingRewardCampaignUpdateProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignUpdateProposal";
  value: Uint8Array;
}
export interface TradingRewardCampaignUpdateProposalAmino {
  title: string;
  description: string;
  campaign_info?: TradingRewardCampaignInfoAmino;
  campaign_reward_pools_additions: CampaignRewardPoolAmino[];
  campaign_reward_pools_updates: CampaignRewardPoolAmino[];
}
export interface TradingRewardCampaignUpdateProposalAminoMsg {
  type: "exchange/TradingRewardCampaignUpdateProposal";
  value: TradingRewardCampaignUpdateProposalAmino;
}
export interface RewardPointUpdate {
  accountAddress: string;
  /** new_points overwrites the current trading reward points for the account */
  newPoints: string;
}
export interface RewardPointUpdateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.RewardPointUpdate";
  value: Uint8Array;
}
export interface RewardPointUpdateAmino {
  account_address: string;
  /** new_points overwrites the current trading reward points for the account */
  new_points: string;
}
export interface RewardPointUpdateAminoMsg {
  type: "/injective.exchange.v1beta1.RewardPointUpdate";
  value: RewardPointUpdateAmino;
}
export interface TradingRewardPendingPointsUpdateProposal {
  title: string;
  description: string;
  pendingPoolTimestamp: bigint;
  rewardPointUpdates: RewardPointUpdate[];
}
export interface TradingRewardPendingPointsUpdateProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardPendingPointsUpdateProposal";
  value: Uint8Array;
}
export interface TradingRewardPendingPointsUpdateProposalAmino {
  title: string;
  description: string;
  pending_pool_timestamp: string;
  reward_point_updates: RewardPointUpdateAmino[];
}
export interface TradingRewardPendingPointsUpdateProposalAminoMsg {
  type: "exchange/TradingRewardPendingPointsUpdateProposal";
  value: TradingRewardPendingPointsUpdateProposalAmino;
}
export interface FeeDiscountProposal {
  title: string;
  description: string;
  schedule?: FeeDiscountSchedule;
}
export interface FeeDiscountProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.FeeDiscountProposal";
  value: Uint8Array;
}
export interface FeeDiscountProposalAmino {
  title: string;
  description: string;
  schedule?: FeeDiscountScheduleAmino;
}
export interface FeeDiscountProposalAminoMsg {
  type: "exchange/FeeDiscountProposal";
  value: FeeDiscountProposalAmino;
}
export interface BatchCommunityPoolSpendProposal {
  title: string;
  description: string;
  proposals: CommunityPoolSpendProposal[];
}
export interface BatchCommunityPoolSpendProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.BatchCommunityPoolSpendProposal";
  value: Uint8Array;
}
export interface BatchCommunityPoolSpendProposalAmino {
  title: string;
  description: string;
  proposals: CommunityPoolSpendProposalAmino[];
}
export interface BatchCommunityPoolSpendProposalAminoMsg {
  type: "exchange/BatchCommunityPoolSpendProposal";
  value: BatchCommunityPoolSpendProposalAmino;
}
/**
 * AtomicMarketOrderFeeMultiplierScheduleProposal defines a SDK message for
 * proposing new atomic take fee multipliers for specified markets
 */
export interface AtomicMarketOrderFeeMultiplierScheduleProposal {
  title: string;
  description: string;
  marketFeeMultipliers: MarketFeeMultiplier[];
}
export interface AtomicMarketOrderFeeMultiplierScheduleProposalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.AtomicMarketOrderFeeMultiplierScheduleProposal";
  value: Uint8Array;
}
/**
 * AtomicMarketOrderFeeMultiplierScheduleProposal defines a SDK message for
 * proposing new atomic take fee multipliers for specified markets
 */
export interface AtomicMarketOrderFeeMultiplierScheduleProposalAmino {
  title: string;
  description: string;
  market_fee_multipliers: MarketFeeMultiplierAmino[];
}
export interface AtomicMarketOrderFeeMultiplierScheduleProposalAminoMsg {
  type: "exchange/AtomicMarketOrderFeeMultiplierScheduleProposal";
  value: AtomicMarketOrderFeeMultiplierScheduleProposalAmino;
}
function createBaseSpotMarketParamUpdateProposal(): SpotMarketParamUpdateProposal {
  return {
    title: "",
    description: "",
    marketId: "",
    makerFeeRate: undefined,
    takerFeeRate: undefined,
    relayerFeeShareRate: undefined,
    minPriceTickSize: undefined,
    minQuantityTickSize: undefined,
    status: 0,
    ticker: undefined,
    minNotional: undefined,
    adminInfo: undefined
  };
}
export const SpotMarketParamUpdateProposal = {
  typeUrl: "/injective.exchange.v1beta1.SpotMarketParamUpdateProposal",
  aminoType: "exchange/SpotMarketParamUpdateProposal",
  is(o: any): o is SpotMarketParamUpdateProposal {
    return o && (o.$typeUrl === SpotMarketParamUpdateProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.marketId === "string" && isSet(o.status));
  },
  isAmino(o: any): o is SpotMarketParamUpdateProposalAmino {
    return o && (o.$typeUrl === SpotMarketParamUpdateProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.market_id === "string" && isSet(o.status));
  },
  encode(message: SpotMarketParamUpdateProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.marketId !== "") {
      writer.uint32(26).string(message.marketId);
    }
    if (message.makerFeeRate !== undefined) {
      writer.uint32(34).string(message.makerFeeRate);
    }
    if (message.takerFeeRate !== undefined) {
      writer.uint32(42).string(message.takerFeeRate);
    }
    if (message.relayerFeeShareRate !== undefined) {
      writer.uint32(50).string(message.relayerFeeShareRate);
    }
    if (message.minPriceTickSize !== undefined) {
      writer.uint32(58).string(message.minPriceTickSize);
    }
    if (message.minQuantityTickSize !== undefined) {
      writer.uint32(66).string(message.minQuantityTickSize);
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    if (message.ticker !== undefined) {
      writer.uint32(82).string(message.ticker);
    }
    if (message.minNotional !== undefined) {
      writer.uint32(90).string(message.minNotional);
    }
    if (message.adminInfo !== undefined) {
      AdminInfo.encode(message.adminInfo, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpotMarketParamUpdateProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotMarketParamUpdateProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.marketId = reader.string();
          break;
        case 4:
          message.makerFeeRate = reader.string();
          break;
        case 5:
          message.takerFeeRate = reader.string();
          break;
        case 6:
          message.relayerFeeShareRate = reader.string();
          break;
        case 7:
          message.minPriceTickSize = reader.string();
          break;
        case 8:
          message.minQuantityTickSize = reader.string();
          break;
        case 9:
          message.status = reader.int32() as any;
          break;
        case 10:
          message.ticker = reader.string();
          break;
        case 11:
          message.minNotional = reader.string();
          break;
        case 12:
          message.adminInfo = AdminInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SpotMarketParamUpdateProposal>): SpotMarketParamUpdateProposal {
    const message = createBaseSpotMarketParamUpdateProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.marketId = object.marketId ?? "";
    message.makerFeeRate = object.makerFeeRate ?? undefined;
    message.takerFeeRate = object.takerFeeRate ?? undefined;
    message.relayerFeeShareRate = object.relayerFeeShareRate ?? undefined;
    message.minPriceTickSize = object.minPriceTickSize ?? undefined;
    message.minQuantityTickSize = object.minQuantityTickSize ?? undefined;
    message.status = object.status ?? 0;
    message.ticker = object.ticker ?? undefined;
    message.minNotional = object.minNotional ?? undefined;
    message.adminInfo = object.adminInfo !== undefined && object.adminInfo !== null ? AdminInfo.fromPartial(object.adminInfo) : undefined;
    return message;
  },
  fromAmino(object: SpotMarketParamUpdateProposalAmino): SpotMarketParamUpdateProposal {
    const message = createBaseSpotMarketParamUpdateProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.maker_fee_rate !== undefined && object.maker_fee_rate !== null) {
      message.makerFeeRate = object.maker_fee_rate;
    }
    if (object.taker_fee_rate !== undefined && object.taker_fee_rate !== null) {
      message.takerFeeRate = object.taker_fee_rate;
    }
    if (object.relayer_fee_share_rate !== undefined && object.relayer_fee_share_rate !== null) {
      message.relayerFeeShareRate = object.relayer_fee_share_rate;
    }
    if (object.min_price_tick_size !== undefined && object.min_price_tick_size !== null) {
      message.minPriceTickSize = object.min_price_tick_size;
    }
    if (object.min_quantity_tick_size !== undefined && object.min_quantity_tick_size !== null) {
      message.minQuantityTickSize = object.min_quantity_tick_size;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker;
    }
    if (object.min_notional !== undefined && object.min_notional !== null) {
      message.minNotional = object.min_notional;
    }
    if (object.admin_info !== undefined && object.admin_info !== null) {
      message.adminInfo = AdminInfo.fromAmino(object.admin_info);
    }
    return message;
  },
  toAmino(message: SpotMarketParamUpdateProposal): SpotMarketParamUpdateProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.maker_fee_rate = message.makerFeeRate === null ? undefined : message.makerFeeRate;
    obj.taker_fee_rate = message.takerFeeRate === null ? undefined : message.takerFeeRate;
    obj.relayer_fee_share_rate = message.relayerFeeShareRate === null ? undefined : message.relayerFeeShareRate;
    obj.min_price_tick_size = message.minPriceTickSize === null ? undefined : message.minPriceTickSize;
    obj.min_quantity_tick_size = message.minQuantityTickSize === null ? undefined : message.minQuantityTickSize;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.ticker = message.ticker === null ? undefined : message.ticker;
    obj.min_notional = message.minNotional === null ? undefined : message.minNotional;
    obj.admin_info = message.adminInfo ? AdminInfo.toAmino(message.adminInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: SpotMarketParamUpdateProposalAminoMsg): SpotMarketParamUpdateProposal {
    return SpotMarketParamUpdateProposal.fromAmino(object.value);
  },
  toAminoMsg(message: SpotMarketParamUpdateProposal): SpotMarketParamUpdateProposalAminoMsg {
    return {
      type: "exchange/SpotMarketParamUpdateProposal",
      value: SpotMarketParamUpdateProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: SpotMarketParamUpdateProposalProtoMsg): SpotMarketParamUpdateProposal {
    return SpotMarketParamUpdateProposal.decode(message.value);
  },
  toProto(message: SpotMarketParamUpdateProposal): Uint8Array {
    return SpotMarketParamUpdateProposal.encode(message).finish();
  },
  toProtoMsg(message: SpotMarketParamUpdateProposal): SpotMarketParamUpdateProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SpotMarketParamUpdateProposal",
      value: SpotMarketParamUpdateProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SpotMarketParamUpdateProposal.typeUrl, SpotMarketParamUpdateProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(SpotMarketParamUpdateProposal.aminoType, SpotMarketParamUpdateProposal.typeUrl);
function createBaseExchangeEnableProposal(): ExchangeEnableProposal {
  return {
    title: "",
    description: "",
    exchangeType: 0
  };
}
export const ExchangeEnableProposal = {
  typeUrl: "/injective.exchange.v1beta1.ExchangeEnableProposal",
  aminoType: "exchange/ExchangeEnableProposal",
  is(o: any): o is ExchangeEnableProposal {
    return o && (o.$typeUrl === ExchangeEnableProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && isSet(o.exchangeType));
  },
  isAmino(o: any): o is ExchangeEnableProposalAmino {
    return o && (o.$typeUrl === ExchangeEnableProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && isSet(o.exchangeType));
  },
  encode(message: ExchangeEnableProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.exchangeType !== 0) {
      writer.uint32(24).int32(message.exchangeType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExchangeEnableProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeEnableProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.exchangeType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExchangeEnableProposal>): ExchangeEnableProposal {
    const message = createBaseExchangeEnableProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.exchangeType = object.exchangeType ?? 0;
    return message;
  },
  fromAmino(object: ExchangeEnableProposalAmino): ExchangeEnableProposal {
    const message = createBaseExchangeEnableProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.exchangeType !== undefined && object.exchangeType !== null) {
      message.exchangeType = object.exchangeType;
    }
    return message;
  },
  toAmino(message: ExchangeEnableProposal): ExchangeEnableProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.exchangeType = message.exchangeType === 0 ? undefined : message.exchangeType;
    return obj;
  },
  fromAminoMsg(object: ExchangeEnableProposalAminoMsg): ExchangeEnableProposal {
    return ExchangeEnableProposal.fromAmino(object.value);
  },
  toAminoMsg(message: ExchangeEnableProposal): ExchangeEnableProposalAminoMsg {
    return {
      type: "exchange/ExchangeEnableProposal",
      value: ExchangeEnableProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: ExchangeEnableProposalProtoMsg): ExchangeEnableProposal {
    return ExchangeEnableProposal.decode(message.value);
  },
  toProto(message: ExchangeEnableProposal): Uint8Array {
    return ExchangeEnableProposal.encode(message).finish();
  },
  toProtoMsg(message: ExchangeEnableProposal): ExchangeEnableProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.ExchangeEnableProposal",
      value: ExchangeEnableProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExchangeEnableProposal.typeUrl, ExchangeEnableProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(ExchangeEnableProposal.aminoType, ExchangeEnableProposal.typeUrl);
function createBaseBatchExchangeModificationProposal(): BatchExchangeModificationProposal {
  return {
    title: "",
    description: "",
    spotMarketParamUpdateProposals: [],
    derivativeMarketParamUpdateProposals: [],
    spotMarketLaunchProposals: [],
    perpetualMarketLaunchProposals: [],
    expiryFuturesMarketLaunchProposals: [],
    tradingRewardCampaignUpdateProposal: undefined,
    binaryOptionsMarketLaunchProposals: [],
    binaryOptionsParamUpdateProposals: [],
    denomDecimalsUpdateProposal: undefined,
    feeDiscountProposal: undefined,
    marketForcedSettlementProposals: []
  };
}
export const BatchExchangeModificationProposal = {
  typeUrl: "/injective.exchange.v1beta1.BatchExchangeModificationProposal",
  aminoType: "exchange/BatchExchangeModificationProposal",
  is(o: any): o is BatchExchangeModificationProposal {
    return o && (o.$typeUrl === BatchExchangeModificationProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.spotMarketParamUpdateProposals) && (!o.spotMarketParamUpdateProposals.length || SpotMarketParamUpdateProposal.is(o.spotMarketParamUpdateProposals[0])) && Array.isArray(o.derivativeMarketParamUpdateProposals) && (!o.derivativeMarketParamUpdateProposals.length || DerivativeMarketParamUpdateProposal.is(o.derivativeMarketParamUpdateProposals[0])) && Array.isArray(o.spotMarketLaunchProposals) && (!o.spotMarketLaunchProposals.length || SpotMarketLaunchProposal.is(o.spotMarketLaunchProposals[0])) && Array.isArray(o.perpetualMarketLaunchProposals) && (!o.perpetualMarketLaunchProposals.length || PerpetualMarketLaunchProposal.is(o.perpetualMarketLaunchProposals[0])) && Array.isArray(o.expiryFuturesMarketLaunchProposals) && (!o.expiryFuturesMarketLaunchProposals.length || ExpiryFuturesMarketLaunchProposal.is(o.expiryFuturesMarketLaunchProposals[0])) && Array.isArray(o.binaryOptionsMarketLaunchProposals) && (!o.binaryOptionsMarketLaunchProposals.length || BinaryOptionsMarketLaunchProposal.is(o.binaryOptionsMarketLaunchProposals[0])) && Array.isArray(o.binaryOptionsParamUpdateProposals) && (!o.binaryOptionsParamUpdateProposals.length || BinaryOptionsMarketParamUpdateProposal.is(o.binaryOptionsParamUpdateProposals[0])) && Array.isArray(o.marketForcedSettlementProposals) && (!o.marketForcedSettlementProposals.length || MarketForcedSettlementProposal.is(o.marketForcedSettlementProposals[0])));
  },
  isAmino(o: any): o is BatchExchangeModificationProposalAmino {
    return o && (o.$typeUrl === BatchExchangeModificationProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.spot_market_param_update_proposals) && (!o.spot_market_param_update_proposals.length || SpotMarketParamUpdateProposal.isAmino(o.spot_market_param_update_proposals[0])) && Array.isArray(o.derivative_market_param_update_proposals) && (!o.derivative_market_param_update_proposals.length || DerivativeMarketParamUpdateProposal.isAmino(o.derivative_market_param_update_proposals[0])) && Array.isArray(o.spot_market_launch_proposals) && (!o.spot_market_launch_proposals.length || SpotMarketLaunchProposal.isAmino(o.spot_market_launch_proposals[0])) && Array.isArray(o.perpetual_market_launch_proposals) && (!o.perpetual_market_launch_proposals.length || PerpetualMarketLaunchProposal.isAmino(o.perpetual_market_launch_proposals[0])) && Array.isArray(o.expiry_futures_market_launch_proposals) && (!o.expiry_futures_market_launch_proposals.length || ExpiryFuturesMarketLaunchProposal.isAmino(o.expiry_futures_market_launch_proposals[0])) && Array.isArray(o.binary_options_market_launch_proposals) && (!o.binary_options_market_launch_proposals.length || BinaryOptionsMarketLaunchProposal.isAmino(o.binary_options_market_launch_proposals[0])) && Array.isArray(o.binary_options_param_update_proposals) && (!o.binary_options_param_update_proposals.length || BinaryOptionsMarketParamUpdateProposal.isAmino(o.binary_options_param_update_proposals[0])) && Array.isArray(o.market_forced_settlement_proposals) && (!o.market_forced_settlement_proposals.length || MarketForcedSettlementProposal.isAmino(o.market_forced_settlement_proposals[0])));
  },
  encode(message: BatchExchangeModificationProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.spotMarketParamUpdateProposals) {
      SpotMarketParamUpdateProposal.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.derivativeMarketParamUpdateProposals) {
      DerivativeMarketParamUpdateProposal.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.spotMarketLaunchProposals) {
      SpotMarketLaunchProposal.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.perpetualMarketLaunchProposals) {
      PerpetualMarketLaunchProposal.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.expiryFuturesMarketLaunchProposals) {
      ExpiryFuturesMarketLaunchProposal.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.tradingRewardCampaignUpdateProposal !== undefined) {
      TradingRewardCampaignUpdateProposal.encode(message.tradingRewardCampaignUpdateProposal, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.binaryOptionsMarketLaunchProposals) {
      BinaryOptionsMarketLaunchProposal.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.binaryOptionsParamUpdateProposals) {
      BinaryOptionsMarketParamUpdateProposal.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.denomDecimalsUpdateProposal !== undefined) {
      UpdateDenomDecimalsProposal.encode(message.denomDecimalsUpdateProposal, writer.uint32(90).fork()).ldelim();
    }
    if (message.feeDiscountProposal !== undefined) {
      FeeDiscountProposal.encode(message.feeDiscountProposal, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.marketForcedSettlementProposals) {
      MarketForcedSettlementProposal.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BatchExchangeModificationProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchExchangeModificationProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.spotMarketParamUpdateProposals.push(SpotMarketParamUpdateProposal.decode(reader, reader.uint32()));
          break;
        case 4:
          message.derivativeMarketParamUpdateProposals.push(DerivativeMarketParamUpdateProposal.decode(reader, reader.uint32()));
          break;
        case 5:
          message.spotMarketLaunchProposals.push(SpotMarketLaunchProposal.decode(reader, reader.uint32()));
          break;
        case 6:
          message.perpetualMarketLaunchProposals.push(PerpetualMarketLaunchProposal.decode(reader, reader.uint32()));
          break;
        case 7:
          message.expiryFuturesMarketLaunchProposals.push(ExpiryFuturesMarketLaunchProposal.decode(reader, reader.uint32()));
          break;
        case 8:
          message.tradingRewardCampaignUpdateProposal = TradingRewardCampaignUpdateProposal.decode(reader, reader.uint32());
          break;
        case 9:
          message.binaryOptionsMarketLaunchProposals.push(BinaryOptionsMarketLaunchProposal.decode(reader, reader.uint32()));
          break;
        case 10:
          message.binaryOptionsParamUpdateProposals.push(BinaryOptionsMarketParamUpdateProposal.decode(reader, reader.uint32()));
          break;
        case 11:
          message.denomDecimalsUpdateProposal = UpdateDenomDecimalsProposal.decode(reader, reader.uint32());
          break;
        case 12:
          message.feeDiscountProposal = FeeDiscountProposal.decode(reader, reader.uint32());
          break;
        case 13:
          message.marketForcedSettlementProposals.push(MarketForcedSettlementProposal.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BatchExchangeModificationProposal>): BatchExchangeModificationProposal {
    const message = createBaseBatchExchangeModificationProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.spotMarketParamUpdateProposals = object.spotMarketParamUpdateProposals?.map(e => SpotMarketParamUpdateProposal.fromPartial(e)) || [];
    message.derivativeMarketParamUpdateProposals = object.derivativeMarketParamUpdateProposals?.map(e => DerivativeMarketParamUpdateProposal.fromPartial(e)) || [];
    message.spotMarketLaunchProposals = object.spotMarketLaunchProposals?.map(e => SpotMarketLaunchProposal.fromPartial(e)) || [];
    message.perpetualMarketLaunchProposals = object.perpetualMarketLaunchProposals?.map(e => PerpetualMarketLaunchProposal.fromPartial(e)) || [];
    message.expiryFuturesMarketLaunchProposals = object.expiryFuturesMarketLaunchProposals?.map(e => ExpiryFuturesMarketLaunchProposal.fromPartial(e)) || [];
    message.tradingRewardCampaignUpdateProposal = object.tradingRewardCampaignUpdateProposal !== undefined && object.tradingRewardCampaignUpdateProposal !== null ? TradingRewardCampaignUpdateProposal.fromPartial(object.tradingRewardCampaignUpdateProposal) : undefined;
    message.binaryOptionsMarketLaunchProposals = object.binaryOptionsMarketLaunchProposals?.map(e => BinaryOptionsMarketLaunchProposal.fromPartial(e)) || [];
    message.binaryOptionsParamUpdateProposals = object.binaryOptionsParamUpdateProposals?.map(e => BinaryOptionsMarketParamUpdateProposal.fromPartial(e)) || [];
    message.denomDecimalsUpdateProposal = object.denomDecimalsUpdateProposal !== undefined && object.denomDecimalsUpdateProposal !== null ? UpdateDenomDecimalsProposal.fromPartial(object.denomDecimalsUpdateProposal) : undefined;
    message.feeDiscountProposal = object.feeDiscountProposal !== undefined && object.feeDiscountProposal !== null ? FeeDiscountProposal.fromPartial(object.feeDiscountProposal) : undefined;
    message.marketForcedSettlementProposals = object.marketForcedSettlementProposals?.map(e => MarketForcedSettlementProposal.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BatchExchangeModificationProposalAmino): BatchExchangeModificationProposal {
    const message = createBaseBatchExchangeModificationProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.spotMarketParamUpdateProposals = object.spot_market_param_update_proposals?.map(e => SpotMarketParamUpdateProposal.fromAmino(e)) || [];
    message.derivativeMarketParamUpdateProposals = object.derivative_market_param_update_proposals?.map(e => DerivativeMarketParamUpdateProposal.fromAmino(e)) || [];
    message.spotMarketLaunchProposals = object.spot_market_launch_proposals?.map(e => SpotMarketLaunchProposal.fromAmino(e)) || [];
    message.perpetualMarketLaunchProposals = object.perpetual_market_launch_proposals?.map(e => PerpetualMarketLaunchProposal.fromAmino(e)) || [];
    message.expiryFuturesMarketLaunchProposals = object.expiry_futures_market_launch_proposals?.map(e => ExpiryFuturesMarketLaunchProposal.fromAmino(e)) || [];
    if (object.trading_reward_campaign_update_proposal !== undefined && object.trading_reward_campaign_update_proposal !== null) {
      message.tradingRewardCampaignUpdateProposal = TradingRewardCampaignUpdateProposal.fromAmino(object.trading_reward_campaign_update_proposal);
    }
    message.binaryOptionsMarketLaunchProposals = object.binary_options_market_launch_proposals?.map(e => BinaryOptionsMarketLaunchProposal.fromAmino(e)) || [];
    message.binaryOptionsParamUpdateProposals = object.binary_options_param_update_proposals?.map(e => BinaryOptionsMarketParamUpdateProposal.fromAmino(e)) || [];
    if (object.denom_decimals_update_proposal !== undefined && object.denom_decimals_update_proposal !== null) {
      message.denomDecimalsUpdateProposal = UpdateDenomDecimalsProposal.fromAmino(object.denom_decimals_update_proposal);
    }
    if (object.fee_discount_proposal !== undefined && object.fee_discount_proposal !== null) {
      message.feeDiscountProposal = FeeDiscountProposal.fromAmino(object.fee_discount_proposal);
    }
    message.marketForcedSettlementProposals = object.market_forced_settlement_proposals?.map(e => MarketForcedSettlementProposal.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BatchExchangeModificationProposal): BatchExchangeModificationProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.spotMarketParamUpdateProposals) {
      obj.spot_market_param_update_proposals = message.spotMarketParamUpdateProposals.map(e => e ? SpotMarketParamUpdateProposal.toAmino(e) : undefined);
    } else {
      obj.spot_market_param_update_proposals = message.spotMarketParamUpdateProposals;
    }
    if (message.derivativeMarketParamUpdateProposals) {
      obj.derivative_market_param_update_proposals = message.derivativeMarketParamUpdateProposals.map(e => e ? DerivativeMarketParamUpdateProposal.toAmino(e) : undefined);
    } else {
      obj.derivative_market_param_update_proposals = message.derivativeMarketParamUpdateProposals;
    }
    if (message.spotMarketLaunchProposals) {
      obj.spot_market_launch_proposals = message.spotMarketLaunchProposals.map(e => e ? SpotMarketLaunchProposal.toAmino(e) : undefined);
    } else {
      obj.spot_market_launch_proposals = message.spotMarketLaunchProposals;
    }
    if (message.perpetualMarketLaunchProposals) {
      obj.perpetual_market_launch_proposals = message.perpetualMarketLaunchProposals.map(e => e ? PerpetualMarketLaunchProposal.toAmino(e) : undefined);
    } else {
      obj.perpetual_market_launch_proposals = message.perpetualMarketLaunchProposals;
    }
    if (message.expiryFuturesMarketLaunchProposals) {
      obj.expiry_futures_market_launch_proposals = message.expiryFuturesMarketLaunchProposals.map(e => e ? ExpiryFuturesMarketLaunchProposal.toAmino(e) : undefined);
    } else {
      obj.expiry_futures_market_launch_proposals = message.expiryFuturesMarketLaunchProposals;
    }
    obj.trading_reward_campaign_update_proposal = message.tradingRewardCampaignUpdateProposal ? TradingRewardCampaignUpdateProposal.toAmino(message.tradingRewardCampaignUpdateProposal) : undefined;
    if (message.binaryOptionsMarketLaunchProposals) {
      obj.binary_options_market_launch_proposals = message.binaryOptionsMarketLaunchProposals.map(e => e ? BinaryOptionsMarketLaunchProposal.toAmino(e) : undefined);
    } else {
      obj.binary_options_market_launch_proposals = message.binaryOptionsMarketLaunchProposals;
    }
    if (message.binaryOptionsParamUpdateProposals) {
      obj.binary_options_param_update_proposals = message.binaryOptionsParamUpdateProposals.map(e => e ? BinaryOptionsMarketParamUpdateProposal.toAmino(e) : undefined);
    } else {
      obj.binary_options_param_update_proposals = message.binaryOptionsParamUpdateProposals;
    }
    obj.denom_decimals_update_proposal = message.denomDecimalsUpdateProposal ? UpdateDenomDecimalsProposal.toAmino(message.denomDecimalsUpdateProposal) : undefined;
    obj.fee_discount_proposal = message.feeDiscountProposal ? FeeDiscountProposal.toAmino(message.feeDiscountProposal) : undefined;
    if (message.marketForcedSettlementProposals) {
      obj.market_forced_settlement_proposals = message.marketForcedSettlementProposals.map(e => e ? MarketForcedSettlementProposal.toAmino(e) : undefined);
    } else {
      obj.market_forced_settlement_proposals = message.marketForcedSettlementProposals;
    }
    return obj;
  },
  fromAminoMsg(object: BatchExchangeModificationProposalAminoMsg): BatchExchangeModificationProposal {
    return BatchExchangeModificationProposal.fromAmino(object.value);
  },
  toAminoMsg(message: BatchExchangeModificationProposal): BatchExchangeModificationProposalAminoMsg {
    return {
      type: "exchange/BatchExchangeModificationProposal",
      value: BatchExchangeModificationProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: BatchExchangeModificationProposalProtoMsg): BatchExchangeModificationProposal {
    return BatchExchangeModificationProposal.decode(message.value);
  },
  toProto(message: BatchExchangeModificationProposal): Uint8Array {
    return BatchExchangeModificationProposal.encode(message).finish();
  },
  toProtoMsg(message: BatchExchangeModificationProposal): BatchExchangeModificationProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BatchExchangeModificationProposal",
      value: BatchExchangeModificationProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BatchExchangeModificationProposal.typeUrl, BatchExchangeModificationProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(BatchExchangeModificationProposal.aminoType, BatchExchangeModificationProposal.typeUrl);
function createBaseSpotMarketLaunchProposal(): SpotMarketLaunchProposal {
  return {
    title: "",
    description: "",
    ticker: "",
    baseDenom: "",
    quoteDenom: "",
    minPriceTickSize: "",
    minQuantityTickSize: "",
    makerFeeRate: undefined,
    takerFeeRate: undefined,
    minNotional: "",
    adminInfo: undefined
  };
}
export const SpotMarketLaunchProposal = {
  typeUrl: "/injective.exchange.v1beta1.SpotMarketLaunchProposal",
  aminoType: "exchange/SpotMarketLaunchProposal",
  is(o: any): o is SpotMarketLaunchProposal {
    return o && (o.$typeUrl === SpotMarketLaunchProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.ticker === "string" && typeof o.baseDenom === "string" && typeof o.quoteDenom === "string" && typeof o.minPriceTickSize === "string" && typeof o.minQuantityTickSize === "string" && typeof o.minNotional === "string");
  },
  isAmino(o: any): o is SpotMarketLaunchProposalAmino {
    return o && (o.$typeUrl === SpotMarketLaunchProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.ticker === "string" && typeof o.base_denom === "string" && typeof o.quote_denom === "string" && typeof o.min_price_tick_size === "string" && typeof o.min_quantity_tick_size === "string" && typeof o.min_notional === "string");
  },
  encode(message: SpotMarketLaunchProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.ticker !== "") {
      writer.uint32(26).string(message.ticker);
    }
    if (message.baseDenom !== "") {
      writer.uint32(34).string(message.baseDenom);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(42).string(message.quoteDenom);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(50).string(message.minPriceTickSize);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(58).string(message.minQuantityTickSize);
    }
    if (message.makerFeeRate !== undefined) {
      writer.uint32(66).string(message.makerFeeRate);
    }
    if (message.takerFeeRate !== undefined) {
      writer.uint32(74).string(message.takerFeeRate);
    }
    if (message.minNotional !== "") {
      writer.uint32(82).string(message.minNotional);
    }
    if (message.adminInfo !== undefined) {
      AdminInfo.encode(message.adminInfo, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpotMarketLaunchProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotMarketLaunchProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.ticker = reader.string();
          break;
        case 4:
          message.baseDenom = reader.string();
          break;
        case 5:
          message.quoteDenom = reader.string();
          break;
        case 6:
          message.minPriceTickSize = reader.string();
          break;
        case 7:
          message.minQuantityTickSize = reader.string();
          break;
        case 8:
          message.makerFeeRate = reader.string();
          break;
        case 9:
          message.takerFeeRate = reader.string();
          break;
        case 10:
          message.minNotional = reader.string();
          break;
        case 11:
          message.adminInfo = AdminInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SpotMarketLaunchProposal>): SpotMarketLaunchProposal {
    const message = createBaseSpotMarketLaunchProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.ticker = object.ticker ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    message.makerFeeRate = object.makerFeeRate ?? undefined;
    message.takerFeeRate = object.takerFeeRate ?? undefined;
    message.minNotional = object.minNotional ?? "";
    message.adminInfo = object.adminInfo !== undefined && object.adminInfo !== null ? AdminInfo.fromPartial(object.adminInfo) : undefined;
    return message;
  },
  fromAmino(object: SpotMarketLaunchProposalAmino): SpotMarketLaunchProposal {
    const message = createBaseSpotMarketLaunchProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker;
    }
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.quote_denom !== undefined && object.quote_denom !== null) {
      message.quoteDenom = object.quote_denom;
    }
    if (object.min_price_tick_size !== undefined && object.min_price_tick_size !== null) {
      message.minPriceTickSize = object.min_price_tick_size;
    }
    if (object.min_quantity_tick_size !== undefined && object.min_quantity_tick_size !== null) {
      message.minQuantityTickSize = object.min_quantity_tick_size;
    }
    if (object.maker_fee_rate !== undefined && object.maker_fee_rate !== null) {
      message.makerFeeRate = object.maker_fee_rate;
    }
    if (object.taker_fee_rate !== undefined && object.taker_fee_rate !== null) {
      message.takerFeeRate = object.taker_fee_rate;
    }
    if (object.min_notional !== undefined && object.min_notional !== null) {
      message.minNotional = object.min_notional;
    }
    if (object.admin_info !== undefined && object.admin_info !== null) {
      message.adminInfo = AdminInfo.fromAmino(object.admin_info);
    }
    return message;
  },
  toAmino(message: SpotMarketLaunchProposal): SpotMarketLaunchProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.ticker = message.ticker === "" ? undefined : message.ticker;
    obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
    obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
    obj.min_price_tick_size = message.minPriceTickSize === "" ? undefined : message.minPriceTickSize;
    obj.min_quantity_tick_size = message.minQuantityTickSize === "" ? undefined : message.minQuantityTickSize;
    obj.maker_fee_rate = message.makerFeeRate === null ? undefined : message.makerFeeRate;
    obj.taker_fee_rate = message.takerFeeRate === null ? undefined : message.takerFeeRate;
    obj.min_notional = message.minNotional === "" ? undefined : message.minNotional;
    obj.admin_info = message.adminInfo ? AdminInfo.toAmino(message.adminInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: SpotMarketLaunchProposalAminoMsg): SpotMarketLaunchProposal {
    return SpotMarketLaunchProposal.fromAmino(object.value);
  },
  toAminoMsg(message: SpotMarketLaunchProposal): SpotMarketLaunchProposalAminoMsg {
    return {
      type: "exchange/SpotMarketLaunchProposal",
      value: SpotMarketLaunchProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: SpotMarketLaunchProposalProtoMsg): SpotMarketLaunchProposal {
    return SpotMarketLaunchProposal.decode(message.value);
  },
  toProto(message: SpotMarketLaunchProposal): Uint8Array {
    return SpotMarketLaunchProposal.encode(message).finish();
  },
  toProtoMsg(message: SpotMarketLaunchProposal): SpotMarketLaunchProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SpotMarketLaunchProposal",
      value: SpotMarketLaunchProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SpotMarketLaunchProposal.typeUrl, SpotMarketLaunchProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(SpotMarketLaunchProposal.aminoType, SpotMarketLaunchProposal.typeUrl);
function createBasePerpetualMarketLaunchProposal(): PerpetualMarketLaunchProposal {
  return {
    title: "",
    description: "",
    ticker: "",
    quoteDenom: "",
    oracleBase: "",
    oracleQuote: "",
    oracleScaleFactor: 0,
    oracleType: 0,
    initialMarginRatio: "",
    maintenanceMarginRatio: "",
    makerFeeRate: "",
    takerFeeRate: "",
    minPriceTickSize: "",
    minQuantityTickSize: "",
    minNotional: "",
    adminInfo: undefined
  };
}
export const PerpetualMarketLaunchProposal = {
  typeUrl: "/injective.exchange.v1beta1.PerpetualMarketLaunchProposal",
  aminoType: "exchange/PerpetualMarketLaunchProposal",
  is(o: any): o is PerpetualMarketLaunchProposal {
    return o && (o.$typeUrl === PerpetualMarketLaunchProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.ticker === "string" && typeof o.quoteDenom === "string" && typeof o.oracleBase === "string" && typeof o.oracleQuote === "string" && typeof o.oracleScaleFactor === "number" && isSet(o.oracleType) && typeof o.initialMarginRatio === "string" && typeof o.maintenanceMarginRatio === "string" && typeof o.makerFeeRate === "string" && typeof o.takerFeeRate === "string" && typeof o.minPriceTickSize === "string" && typeof o.minQuantityTickSize === "string" && typeof o.minNotional === "string");
  },
  isAmino(o: any): o is PerpetualMarketLaunchProposalAmino {
    return o && (o.$typeUrl === PerpetualMarketLaunchProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.ticker === "string" && typeof o.quote_denom === "string" && typeof o.oracle_base === "string" && typeof o.oracle_quote === "string" && typeof o.oracle_scale_factor === "number" && isSet(o.oracle_type) && typeof o.initial_margin_ratio === "string" && typeof o.maintenance_margin_ratio === "string" && typeof o.maker_fee_rate === "string" && typeof o.taker_fee_rate === "string" && typeof o.min_price_tick_size === "string" && typeof o.min_quantity_tick_size === "string" && typeof o.min_notional === "string");
  },
  encode(message: PerpetualMarketLaunchProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.ticker !== "") {
      writer.uint32(26).string(message.ticker);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(34).string(message.quoteDenom);
    }
    if (message.oracleBase !== "") {
      writer.uint32(42).string(message.oracleBase);
    }
    if (message.oracleQuote !== "") {
      writer.uint32(50).string(message.oracleQuote);
    }
    if (message.oracleScaleFactor !== 0) {
      writer.uint32(56).uint32(message.oracleScaleFactor);
    }
    if (message.oracleType !== 0) {
      writer.uint32(64).int32(message.oracleType);
    }
    if (message.initialMarginRatio !== "") {
      writer.uint32(74).string(message.initialMarginRatio);
    }
    if (message.maintenanceMarginRatio !== "") {
      writer.uint32(82).string(message.maintenanceMarginRatio);
    }
    if (message.makerFeeRate !== "") {
      writer.uint32(90).string(message.makerFeeRate);
    }
    if (message.takerFeeRate !== "") {
      writer.uint32(98).string(message.takerFeeRate);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(106).string(message.minPriceTickSize);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(114).string(message.minQuantityTickSize);
    }
    if (message.minNotional !== "") {
      writer.uint32(122).string(message.minNotional);
    }
    if (message.adminInfo !== undefined) {
      AdminInfo.encode(message.adminInfo, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PerpetualMarketLaunchProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerpetualMarketLaunchProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.ticker = reader.string();
          break;
        case 4:
          message.quoteDenom = reader.string();
          break;
        case 5:
          message.oracleBase = reader.string();
          break;
        case 6:
          message.oracleQuote = reader.string();
          break;
        case 7:
          message.oracleScaleFactor = reader.uint32();
          break;
        case 8:
          message.oracleType = reader.int32() as any;
          break;
        case 9:
          message.initialMarginRatio = reader.string();
          break;
        case 10:
          message.maintenanceMarginRatio = reader.string();
          break;
        case 11:
          message.makerFeeRate = reader.string();
          break;
        case 12:
          message.takerFeeRate = reader.string();
          break;
        case 13:
          message.minPriceTickSize = reader.string();
          break;
        case 14:
          message.minQuantityTickSize = reader.string();
          break;
        case 15:
          message.minNotional = reader.string();
          break;
        case 16:
          message.adminInfo = AdminInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PerpetualMarketLaunchProposal>): PerpetualMarketLaunchProposal {
    const message = createBasePerpetualMarketLaunchProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.ticker = object.ticker ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.oracleType = object.oracleType ?? 0;
    message.initialMarginRatio = object.initialMarginRatio ?? "";
    message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? "";
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    message.minNotional = object.minNotional ?? "";
    message.adminInfo = object.adminInfo !== undefined && object.adminInfo !== null ? AdminInfo.fromPartial(object.adminInfo) : undefined;
    return message;
  },
  fromAmino(object: PerpetualMarketLaunchProposalAmino): PerpetualMarketLaunchProposal {
    const message = createBasePerpetualMarketLaunchProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker;
    }
    if (object.quote_denom !== undefined && object.quote_denom !== null) {
      message.quoteDenom = object.quote_denom;
    }
    if (object.oracle_base !== undefined && object.oracle_base !== null) {
      message.oracleBase = object.oracle_base;
    }
    if (object.oracle_quote !== undefined && object.oracle_quote !== null) {
      message.oracleQuote = object.oracle_quote;
    }
    if (object.oracle_scale_factor !== undefined && object.oracle_scale_factor !== null) {
      message.oracleScaleFactor = object.oracle_scale_factor;
    }
    if (object.oracle_type !== undefined && object.oracle_type !== null) {
      message.oracleType = object.oracle_type;
    }
    if (object.initial_margin_ratio !== undefined && object.initial_margin_ratio !== null) {
      message.initialMarginRatio = object.initial_margin_ratio;
    }
    if (object.maintenance_margin_ratio !== undefined && object.maintenance_margin_ratio !== null) {
      message.maintenanceMarginRatio = object.maintenance_margin_ratio;
    }
    if (object.maker_fee_rate !== undefined && object.maker_fee_rate !== null) {
      message.makerFeeRate = object.maker_fee_rate;
    }
    if (object.taker_fee_rate !== undefined && object.taker_fee_rate !== null) {
      message.takerFeeRate = object.taker_fee_rate;
    }
    if (object.min_price_tick_size !== undefined && object.min_price_tick_size !== null) {
      message.minPriceTickSize = object.min_price_tick_size;
    }
    if (object.min_quantity_tick_size !== undefined && object.min_quantity_tick_size !== null) {
      message.minQuantityTickSize = object.min_quantity_tick_size;
    }
    if (object.min_notional !== undefined && object.min_notional !== null) {
      message.minNotional = object.min_notional;
    }
    if (object.admin_info !== undefined && object.admin_info !== null) {
      message.adminInfo = AdminInfo.fromAmino(object.admin_info);
    }
    return message;
  },
  toAmino(message: PerpetualMarketLaunchProposal): PerpetualMarketLaunchProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.ticker = message.ticker === "" ? undefined : message.ticker;
    obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
    obj.oracle_base = message.oracleBase === "" ? undefined : message.oracleBase;
    obj.oracle_quote = message.oracleQuote === "" ? undefined : message.oracleQuote;
    obj.oracle_scale_factor = message.oracleScaleFactor === 0 ? undefined : message.oracleScaleFactor;
    obj.oracle_type = message.oracleType === 0 ? undefined : message.oracleType;
    obj.initial_margin_ratio = message.initialMarginRatio === "" ? undefined : message.initialMarginRatio;
    obj.maintenance_margin_ratio = message.maintenanceMarginRatio === "" ? undefined : message.maintenanceMarginRatio;
    obj.maker_fee_rate = message.makerFeeRate === "" ? undefined : message.makerFeeRate;
    obj.taker_fee_rate = message.takerFeeRate === "" ? undefined : message.takerFeeRate;
    obj.min_price_tick_size = message.minPriceTickSize === "" ? undefined : message.minPriceTickSize;
    obj.min_quantity_tick_size = message.minQuantityTickSize === "" ? undefined : message.minQuantityTickSize;
    obj.min_notional = message.minNotional === "" ? undefined : message.minNotional;
    obj.admin_info = message.adminInfo ? AdminInfo.toAmino(message.adminInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: PerpetualMarketLaunchProposalAminoMsg): PerpetualMarketLaunchProposal {
    return PerpetualMarketLaunchProposal.fromAmino(object.value);
  },
  toAminoMsg(message: PerpetualMarketLaunchProposal): PerpetualMarketLaunchProposalAminoMsg {
    return {
      type: "exchange/PerpetualMarketLaunchProposal",
      value: PerpetualMarketLaunchProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: PerpetualMarketLaunchProposalProtoMsg): PerpetualMarketLaunchProposal {
    return PerpetualMarketLaunchProposal.decode(message.value);
  },
  toProto(message: PerpetualMarketLaunchProposal): Uint8Array {
    return PerpetualMarketLaunchProposal.encode(message).finish();
  },
  toProtoMsg(message: PerpetualMarketLaunchProposal): PerpetualMarketLaunchProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.PerpetualMarketLaunchProposal",
      value: PerpetualMarketLaunchProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PerpetualMarketLaunchProposal.typeUrl, PerpetualMarketLaunchProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(PerpetualMarketLaunchProposal.aminoType, PerpetualMarketLaunchProposal.typeUrl);
function createBaseBinaryOptionsMarketLaunchProposal(): BinaryOptionsMarketLaunchProposal {
  return {
    title: "",
    description: "",
    ticker: "",
    oracleSymbol: "",
    oracleProvider: "",
    oracleType: 0,
    oracleScaleFactor: 0,
    expirationTimestamp: BigInt(0),
    settlementTimestamp: BigInt(0),
    admin: "",
    quoteDenom: "",
    makerFeeRate: "",
    takerFeeRate: "",
    minPriceTickSize: "",
    minQuantityTickSize: "",
    minNotional: "",
    adminPermissions: 0
  };
}
export const BinaryOptionsMarketLaunchProposal = {
  typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarketLaunchProposal",
  aminoType: "exchange/BinaryOptionsMarketLaunchProposal",
  is(o: any): o is BinaryOptionsMarketLaunchProposal {
    return o && (o.$typeUrl === BinaryOptionsMarketLaunchProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.ticker === "string" && typeof o.oracleSymbol === "string" && typeof o.oracleProvider === "string" && isSet(o.oracleType) && typeof o.oracleScaleFactor === "number" && typeof o.expirationTimestamp === "bigint" && typeof o.settlementTimestamp === "bigint" && typeof o.admin === "string" && typeof o.quoteDenom === "string" && typeof o.makerFeeRate === "string" && typeof o.takerFeeRate === "string" && typeof o.minPriceTickSize === "string" && typeof o.minQuantityTickSize === "string" && typeof o.minNotional === "string" && typeof o.adminPermissions === "number");
  },
  isAmino(o: any): o is BinaryOptionsMarketLaunchProposalAmino {
    return o && (o.$typeUrl === BinaryOptionsMarketLaunchProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.ticker === "string" && typeof o.oracle_symbol === "string" && typeof o.oracle_provider === "string" && isSet(o.oracle_type) && typeof o.oracle_scale_factor === "number" && typeof o.expiration_timestamp === "bigint" && typeof o.settlement_timestamp === "bigint" && typeof o.admin === "string" && typeof o.quote_denom === "string" && typeof o.maker_fee_rate === "string" && typeof o.taker_fee_rate === "string" && typeof o.min_price_tick_size === "string" && typeof o.min_quantity_tick_size === "string" && typeof o.min_notional === "string" && typeof o.admin_permissions === "number");
  },
  encode(message: BinaryOptionsMarketLaunchProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.ticker !== "") {
      writer.uint32(26).string(message.ticker);
    }
    if (message.oracleSymbol !== "") {
      writer.uint32(34).string(message.oracleSymbol);
    }
    if (message.oracleProvider !== "") {
      writer.uint32(42).string(message.oracleProvider);
    }
    if (message.oracleType !== 0) {
      writer.uint32(48).int32(message.oracleType);
    }
    if (message.oracleScaleFactor !== 0) {
      writer.uint32(56).uint32(message.oracleScaleFactor);
    }
    if (message.expirationTimestamp !== BigInt(0)) {
      writer.uint32(64).int64(message.expirationTimestamp);
    }
    if (message.settlementTimestamp !== BigInt(0)) {
      writer.uint32(72).int64(message.settlementTimestamp);
    }
    if (message.admin !== "") {
      writer.uint32(82).string(message.admin);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(90).string(message.quoteDenom);
    }
    if (message.makerFeeRate !== "") {
      writer.uint32(98).string(message.makerFeeRate);
    }
    if (message.takerFeeRate !== "") {
      writer.uint32(106).string(message.takerFeeRate);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(114).string(message.minPriceTickSize);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(122).string(message.minQuantityTickSize);
    }
    if (message.minNotional !== "") {
      writer.uint32(130).string(message.minNotional);
    }
    if (message.adminPermissions !== 0) {
      writer.uint32(136).uint32(message.adminPermissions);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BinaryOptionsMarketLaunchProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBinaryOptionsMarketLaunchProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.ticker = reader.string();
          break;
        case 4:
          message.oracleSymbol = reader.string();
          break;
        case 5:
          message.oracleProvider = reader.string();
          break;
        case 6:
          message.oracleType = reader.int32() as any;
          break;
        case 7:
          message.oracleScaleFactor = reader.uint32();
          break;
        case 8:
          message.expirationTimestamp = reader.int64();
          break;
        case 9:
          message.settlementTimestamp = reader.int64();
          break;
        case 10:
          message.admin = reader.string();
          break;
        case 11:
          message.quoteDenom = reader.string();
          break;
        case 12:
          message.makerFeeRate = reader.string();
          break;
        case 13:
          message.takerFeeRate = reader.string();
          break;
        case 14:
          message.minPriceTickSize = reader.string();
          break;
        case 15:
          message.minQuantityTickSize = reader.string();
          break;
        case 16:
          message.minNotional = reader.string();
          break;
        case 17:
          message.adminPermissions = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BinaryOptionsMarketLaunchProposal>): BinaryOptionsMarketLaunchProposal {
    const message = createBaseBinaryOptionsMarketLaunchProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.ticker = object.ticker ?? "";
    message.oracleSymbol = object.oracleSymbol ?? "";
    message.oracleProvider = object.oracleProvider ?? "";
    message.oracleType = object.oracleType ?? 0;
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? BigInt(object.expirationTimestamp.toString()) : BigInt(0);
    message.settlementTimestamp = object.settlementTimestamp !== undefined && object.settlementTimestamp !== null ? BigInt(object.settlementTimestamp.toString()) : BigInt(0);
    message.admin = object.admin ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    message.minNotional = object.minNotional ?? "";
    message.adminPermissions = object.adminPermissions ?? 0;
    return message;
  },
  fromAmino(object: BinaryOptionsMarketLaunchProposalAmino): BinaryOptionsMarketLaunchProposal {
    const message = createBaseBinaryOptionsMarketLaunchProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker;
    }
    if (object.oracle_symbol !== undefined && object.oracle_symbol !== null) {
      message.oracleSymbol = object.oracle_symbol;
    }
    if (object.oracle_provider !== undefined && object.oracle_provider !== null) {
      message.oracleProvider = object.oracle_provider;
    }
    if (object.oracle_type !== undefined && object.oracle_type !== null) {
      message.oracleType = object.oracle_type;
    }
    if (object.oracle_scale_factor !== undefined && object.oracle_scale_factor !== null) {
      message.oracleScaleFactor = object.oracle_scale_factor;
    }
    if (object.expiration_timestamp !== undefined && object.expiration_timestamp !== null) {
      message.expirationTimestamp = BigInt(object.expiration_timestamp);
    }
    if (object.settlement_timestamp !== undefined && object.settlement_timestamp !== null) {
      message.settlementTimestamp = BigInt(object.settlement_timestamp);
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.quote_denom !== undefined && object.quote_denom !== null) {
      message.quoteDenom = object.quote_denom;
    }
    if (object.maker_fee_rate !== undefined && object.maker_fee_rate !== null) {
      message.makerFeeRate = object.maker_fee_rate;
    }
    if (object.taker_fee_rate !== undefined && object.taker_fee_rate !== null) {
      message.takerFeeRate = object.taker_fee_rate;
    }
    if (object.min_price_tick_size !== undefined && object.min_price_tick_size !== null) {
      message.minPriceTickSize = object.min_price_tick_size;
    }
    if (object.min_quantity_tick_size !== undefined && object.min_quantity_tick_size !== null) {
      message.minQuantityTickSize = object.min_quantity_tick_size;
    }
    if (object.min_notional !== undefined && object.min_notional !== null) {
      message.minNotional = object.min_notional;
    }
    if (object.admin_permissions !== undefined && object.admin_permissions !== null) {
      message.adminPermissions = object.admin_permissions;
    }
    return message;
  },
  toAmino(message: BinaryOptionsMarketLaunchProposal): BinaryOptionsMarketLaunchProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.ticker = message.ticker === "" ? undefined : message.ticker;
    obj.oracle_symbol = message.oracleSymbol === "" ? undefined : message.oracleSymbol;
    obj.oracle_provider = message.oracleProvider === "" ? undefined : message.oracleProvider;
    obj.oracle_type = message.oracleType === 0 ? undefined : message.oracleType;
    obj.oracle_scale_factor = message.oracleScaleFactor === 0 ? undefined : message.oracleScaleFactor;
    obj.expiration_timestamp = message.expirationTimestamp !== BigInt(0) ? message.expirationTimestamp?.toString() : undefined;
    obj.settlement_timestamp = message.settlementTimestamp !== BigInt(0) ? message.settlementTimestamp?.toString() : undefined;
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
    obj.maker_fee_rate = message.makerFeeRate === "" ? undefined : message.makerFeeRate;
    obj.taker_fee_rate = message.takerFeeRate === "" ? undefined : message.takerFeeRate;
    obj.min_price_tick_size = message.minPriceTickSize === "" ? undefined : message.minPriceTickSize;
    obj.min_quantity_tick_size = message.minQuantityTickSize === "" ? undefined : message.minQuantityTickSize;
    obj.min_notional = message.minNotional === "" ? undefined : message.minNotional;
    obj.admin_permissions = message.adminPermissions === 0 ? undefined : message.adminPermissions;
    return obj;
  },
  fromAminoMsg(object: BinaryOptionsMarketLaunchProposalAminoMsg): BinaryOptionsMarketLaunchProposal {
    return BinaryOptionsMarketLaunchProposal.fromAmino(object.value);
  },
  toAminoMsg(message: BinaryOptionsMarketLaunchProposal): BinaryOptionsMarketLaunchProposalAminoMsg {
    return {
      type: "exchange/BinaryOptionsMarketLaunchProposal",
      value: BinaryOptionsMarketLaunchProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: BinaryOptionsMarketLaunchProposalProtoMsg): BinaryOptionsMarketLaunchProposal {
    return BinaryOptionsMarketLaunchProposal.decode(message.value);
  },
  toProto(message: BinaryOptionsMarketLaunchProposal): Uint8Array {
    return BinaryOptionsMarketLaunchProposal.encode(message).finish();
  },
  toProtoMsg(message: BinaryOptionsMarketLaunchProposal): BinaryOptionsMarketLaunchProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarketLaunchProposal",
      value: BinaryOptionsMarketLaunchProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BinaryOptionsMarketLaunchProposal.typeUrl, BinaryOptionsMarketLaunchProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(BinaryOptionsMarketLaunchProposal.aminoType, BinaryOptionsMarketLaunchProposal.typeUrl);
function createBaseExpiryFuturesMarketLaunchProposal(): ExpiryFuturesMarketLaunchProposal {
  return {
    title: "",
    description: "",
    ticker: "",
    quoteDenom: "",
    oracleBase: "",
    oracleQuote: "",
    oracleScaleFactor: 0,
    oracleType: 0,
    expiry: BigInt(0),
    initialMarginRatio: "",
    maintenanceMarginRatio: "",
    makerFeeRate: "",
    takerFeeRate: "",
    minPriceTickSize: "",
    minQuantityTickSize: "",
    minNotional: "",
    adminInfo: undefined
  };
}
export const ExpiryFuturesMarketLaunchProposal = {
  typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal",
  aminoType: "exchange/ExpiryFuturesMarketLaunchProposal",
  is(o: any): o is ExpiryFuturesMarketLaunchProposal {
    return o && (o.$typeUrl === ExpiryFuturesMarketLaunchProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.ticker === "string" && typeof o.quoteDenom === "string" && typeof o.oracleBase === "string" && typeof o.oracleQuote === "string" && typeof o.oracleScaleFactor === "number" && isSet(o.oracleType) && typeof o.expiry === "bigint" && typeof o.initialMarginRatio === "string" && typeof o.maintenanceMarginRatio === "string" && typeof o.makerFeeRate === "string" && typeof o.takerFeeRate === "string" && typeof o.minPriceTickSize === "string" && typeof o.minQuantityTickSize === "string" && typeof o.minNotional === "string");
  },
  isAmino(o: any): o is ExpiryFuturesMarketLaunchProposalAmino {
    return o && (o.$typeUrl === ExpiryFuturesMarketLaunchProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.ticker === "string" && typeof o.quote_denom === "string" && typeof o.oracle_base === "string" && typeof o.oracle_quote === "string" && typeof o.oracle_scale_factor === "number" && isSet(o.oracle_type) && typeof o.expiry === "bigint" && typeof o.initial_margin_ratio === "string" && typeof o.maintenance_margin_ratio === "string" && typeof o.maker_fee_rate === "string" && typeof o.taker_fee_rate === "string" && typeof o.min_price_tick_size === "string" && typeof o.min_quantity_tick_size === "string" && typeof o.min_notional === "string");
  },
  encode(message: ExpiryFuturesMarketLaunchProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.ticker !== "") {
      writer.uint32(26).string(message.ticker);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(34).string(message.quoteDenom);
    }
    if (message.oracleBase !== "") {
      writer.uint32(42).string(message.oracleBase);
    }
    if (message.oracleQuote !== "") {
      writer.uint32(50).string(message.oracleQuote);
    }
    if (message.oracleScaleFactor !== 0) {
      writer.uint32(56).uint32(message.oracleScaleFactor);
    }
    if (message.oracleType !== 0) {
      writer.uint32(64).int32(message.oracleType);
    }
    if (message.expiry !== BigInt(0)) {
      writer.uint32(72).int64(message.expiry);
    }
    if (message.initialMarginRatio !== "") {
      writer.uint32(82).string(message.initialMarginRatio);
    }
    if (message.maintenanceMarginRatio !== "") {
      writer.uint32(90).string(message.maintenanceMarginRatio);
    }
    if (message.makerFeeRate !== "") {
      writer.uint32(98).string(message.makerFeeRate);
    }
    if (message.takerFeeRate !== "") {
      writer.uint32(106).string(message.takerFeeRate);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(114).string(message.minPriceTickSize);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(122).string(message.minQuantityTickSize);
    }
    if (message.minNotional !== "") {
      writer.uint32(130).string(message.minNotional);
    }
    if (message.adminInfo !== undefined) {
      AdminInfo.encode(message.adminInfo, writer.uint32(138).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExpiryFuturesMarketLaunchProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpiryFuturesMarketLaunchProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.ticker = reader.string();
          break;
        case 4:
          message.quoteDenom = reader.string();
          break;
        case 5:
          message.oracleBase = reader.string();
          break;
        case 6:
          message.oracleQuote = reader.string();
          break;
        case 7:
          message.oracleScaleFactor = reader.uint32();
          break;
        case 8:
          message.oracleType = reader.int32() as any;
          break;
        case 9:
          message.expiry = reader.int64();
          break;
        case 10:
          message.initialMarginRatio = reader.string();
          break;
        case 11:
          message.maintenanceMarginRatio = reader.string();
          break;
        case 12:
          message.makerFeeRate = reader.string();
          break;
        case 13:
          message.takerFeeRate = reader.string();
          break;
        case 14:
          message.minPriceTickSize = reader.string();
          break;
        case 15:
          message.minQuantityTickSize = reader.string();
          break;
        case 16:
          message.minNotional = reader.string();
          break;
        case 17:
          message.adminInfo = AdminInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExpiryFuturesMarketLaunchProposal>): ExpiryFuturesMarketLaunchProposal {
    const message = createBaseExpiryFuturesMarketLaunchProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.ticker = object.ticker ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.oracleType = object.oracleType ?? 0;
    message.expiry = object.expiry !== undefined && object.expiry !== null ? BigInt(object.expiry.toString()) : BigInt(0);
    message.initialMarginRatio = object.initialMarginRatio ?? "";
    message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? "";
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    message.minNotional = object.minNotional ?? "";
    message.adminInfo = object.adminInfo !== undefined && object.adminInfo !== null ? AdminInfo.fromPartial(object.adminInfo) : undefined;
    return message;
  },
  fromAmino(object: ExpiryFuturesMarketLaunchProposalAmino): ExpiryFuturesMarketLaunchProposal {
    const message = createBaseExpiryFuturesMarketLaunchProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker;
    }
    if (object.quote_denom !== undefined && object.quote_denom !== null) {
      message.quoteDenom = object.quote_denom;
    }
    if (object.oracle_base !== undefined && object.oracle_base !== null) {
      message.oracleBase = object.oracle_base;
    }
    if (object.oracle_quote !== undefined && object.oracle_quote !== null) {
      message.oracleQuote = object.oracle_quote;
    }
    if (object.oracle_scale_factor !== undefined && object.oracle_scale_factor !== null) {
      message.oracleScaleFactor = object.oracle_scale_factor;
    }
    if (object.oracle_type !== undefined && object.oracle_type !== null) {
      message.oracleType = object.oracle_type;
    }
    if (object.expiry !== undefined && object.expiry !== null) {
      message.expiry = BigInt(object.expiry);
    }
    if (object.initial_margin_ratio !== undefined && object.initial_margin_ratio !== null) {
      message.initialMarginRatio = object.initial_margin_ratio;
    }
    if (object.maintenance_margin_ratio !== undefined && object.maintenance_margin_ratio !== null) {
      message.maintenanceMarginRatio = object.maintenance_margin_ratio;
    }
    if (object.maker_fee_rate !== undefined && object.maker_fee_rate !== null) {
      message.makerFeeRate = object.maker_fee_rate;
    }
    if (object.taker_fee_rate !== undefined && object.taker_fee_rate !== null) {
      message.takerFeeRate = object.taker_fee_rate;
    }
    if (object.min_price_tick_size !== undefined && object.min_price_tick_size !== null) {
      message.minPriceTickSize = object.min_price_tick_size;
    }
    if (object.min_quantity_tick_size !== undefined && object.min_quantity_tick_size !== null) {
      message.minQuantityTickSize = object.min_quantity_tick_size;
    }
    if (object.min_notional !== undefined && object.min_notional !== null) {
      message.minNotional = object.min_notional;
    }
    if (object.admin_info !== undefined && object.admin_info !== null) {
      message.adminInfo = AdminInfo.fromAmino(object.admin_info);
    }
    return message;
  },
  toAmino(message: ExpiryFuturesMarketLaunchProposal): ExpiryFuturesMarketLaunchProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.ticker = message.ticker === "" ? undefined : message.ticker;
    obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
    obj.oracle_base = message.oracleBase === "" ? undefined : message.oracleBase;
    obj.oracle_quote = message.oracleQuote === "" ? undefined : message.oracleQuote;
    obj.oracle_scale_factor = message.oracleScaleFactor === 0 ? undefined : message.oracleScaleFactor;
    obj.oracle_type = message.oracleType === 0 ? undefined : message.oracleType;
    obj.expiry = message.expiry !== BigInt(0) ? message.expiry?.toString() : undefined;
    obj.initial_margin_ratio = message.initialMarginRatio === "" ? undefined : message.initialMarginRatio;
    obj.maintenance_margin_ratio = message.maintenanceMarginRatio === "" ? undefined : message.maintenanceMarginRatio;
    obj.maker_fee_rate = message.makerFeeRate === "" ? undefined : message.makerFeeRate;
    obj.taker_fee_rate = message.takerFeeRate === "" ? undefined : message.takerFeeRate;
    obj.min_price_tick_size = message.minPriceTickSize === "" ? undefined : message.minPriceTickSize;
    obj.min_quantity_tick_size = message.minQuantityTickSize === "" ? undefined : message.minQuantityTickSize;
    obj.min_notional = message.minNotional === "" ? undefined : message.minNotional;
    obj.admin_info = message.adminInfo ? AdminInfo.toAmino(message.adminInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: ExpiryFuturesMarketLaunchProposalAminoMsg): ExpiryFuturesMarketLaunchProposal {
    return ExpiryFuturesMarketLaunchProposal.fromAmino(object.value);
  },
  toAminoMsg(message: ExpiryFuturesMarketLaunchProposal): ExpiryFuturesMarketLaunchProposalAminoMsg {
    return {
      type: "exchange/ExpiryFuturesMarketLaunchProposal",
      value: ExpiryFuturesMarketLaunchProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: ExpiryFuturesMarketLaunchProposalProtoMsg): ExpiryFuturesMarketLaunchProposal {
    return ExpiryFuturesMarketLaunchProposal.decode(message.value);
  },
  toProto(message: ExpiryFuturesMarketLaunchProposal): Uint8Array {
    return ExpiryFuturesMarketLaunchProposal.encode(message).finish();
  },
  toProtoMsg(message: ExpiryFuturesMarketLaunchProposal): ExpiryFuturesMarketLaunchProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal",
      value: ExpiryFuturesMarketLaunchProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExpiryFuturesMarketLaunchProposal.typeUrl, ExpiryFuturesMarketLaunchProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(ExpiryFuturesMarketLaunchProposal.aminoType, ExpiryFuturesMarketLaunchProposal.typeUrl);
function createBaseDerivativeMarketParamUpdateProposal(): DerivativeMarketParamUpdateProposal {
  return {
    title: "",
    description: "",
    marketId: "",
    initialMarginRatio: undefined,
    maintenanceMarginRatio: undefined,
    makerFeeRate: undefined,
    takerFeeRate: undefined,
    relayerFeeShareRate: undefined,
    minPriceTickSize: undefined,
    minQuantityTickSize: undefined,
    hourlyInterestRate: undefined,
    hourlyFundingRateCap: undefined,
    status: 0,
    oracleParams: undefined,
    ticker: undefined,
    minNotional: undefined,
    adminInfo: undefined
  };
}
export const DerivativeMarketParamUpdateProposal = {
  typeUrl: "/injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal",
  aminoType: "exchange/DerivativeMarketParamUpdateProposal",
  is(o: any): o is DerivativeMarketParamUpdateProposal {
    return o && (o.$typeUrl === DerivativeMarketParamUpdateProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.marketId === "string" && isSet(o.status));
  },
  isAmino(o: any): o is DerivativeMarketParamUpdateProposalAmino {
    return o && (o.$typeUrl === DerivativeMarketParamUpdateProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.market_id === "string" && isSet(o.status));
  },
  encode(message: DerivativeMarketParamUpdateProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.marketId !== "") {
      writer.uint32(26).string(message.marketId);
    }
    if (message.initialMarginRatio !== undefined) {
      writer.uint32(34).string(message.initialMarginRatio);
    }
    if (message.maintenanceMarginRatio !== undefined) {
      writer.uint32(42).string(message.maintenanceMarginRatio);
    }
    if (message.makerFeeRate !== undefined) {
      writer.uint32(50).string(message.makerFeeRate);
    }
    if (message.takerFeeRate !== undefined) {
      writer.uint32(58).string(message.takerFeeRate);
    }
    if (message.relayerFeeShareRate !== undefined) {
      writer.uint32(66).string(message.relayerFeeShareRate);
    }
    if (message.minPriceTickSize !== undefined) {
      writer.uint32(74).string(message.minPriceTickSize);
    }
    if (message.minQuantityTickSize !== undefined) {
      writer.uint32(82).string(message.minQuantityTickSize);
    }
    if (message.hourlyInterestRate !== undefined) {
      writer.uint32(90).string(message.hourlyInterestRate);
    }
    if (message.hourlyFundingRateCap !== undefined) {
      writer.uint32(98).string(message.hourlyFundingRateCap);
    }
    if (message.status !== 0) {
      writer.uint32(104).int32(message.status);
    }
    if (message.oracleParams !== undefined) {
      OracleParams.encode(message.oracleParams, writer.uint32(114).fork()).ldelim();
    }
    if (message.ticker !== undefined) {
      writer.uint32(122).string(message.ticker);
    }
    if (message.minNotional !== undefined) {
      writer.uint32(130).string(message.minNotional);
    }
    if (message.adminInfo !== undefined) {
      AdminInfo.encode(message.adminInfo, writer.uint32(138).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DerivativeMarketParamUpdateProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDerivativeMarketParamUpdateProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.marketId = reader.string();
          break;
        case 4:
          message.initialMarginRatio = reader.string();
          break;
        case 5:
          message.maintenanceMarginRatio = reader.string();
          break;
        case 6:
          message.makerFeeRate = reader.string();
          break;
        case 7:
          message.takerFeeRate = reader.string();
          break;
        case 8:
          message.relayerFeeShareRate = reader.string();
          break;
        case 9:
          message.minPriceTickSize = reader.string();
          break;
        case 10:
          message.minQuantityTickSize = reader.string();
          break;
        case 11:
          message.hourlyInterestRate = reader.string();
          break;
        case 12:
          message.hourlyFundingRateCap = reader.string();
          break;
        case 13:
          message.status = reader.int32() as any;
          break;
        case 14:
          message.oracleParams = OracleParams.decode(reader, reader.uint32());
          break;
        case 15:
          message.ticker = reader.string();
          break;
        case 16:
          message.minNotional = reader.string();
          break;
        case 17:
          message.adminInfo = AdminInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DerivativeMarketParamUpdateProposal>): DerivativeMarketParamUpdateProposal {
    const message = createBaseDerivativeMarketParamUpdateProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.marketId = object.marketId ?? "";
    message.initialMarginRatio = object.initialMarginRatio ?? undefined;
    message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? undefined;
    message.makerFeeRate = object.makerFeeRate ?? undefined;
    message.takerFeeRate = object.takerFeeRate ?? undefined;
    message.relayerFeeShareRate = object.relayerFeeShareRate ?? undefined;
    message.minPriceTickSize = object.minPriceTickSize ?? undefined;
    message.minQuantityTickSize = object.minQuantityTickSize ?? undefined;
    message.hourlyInterestRate = object.hourlyInterestRate ?? undefined;
    message.hourlyFundingRateCap = object.hourlyFundingRateCap ?? undefined;
    message.status = object.status ?? 0;
    message.oracleParams = object.oracleParams !== undefined && object.oracleParams !== null ? OracleParams.fromPartial(object.oracleParams) : undefined;
    message.ticker = object.ticker ?? undefined;
    message.minNotional = object.minNotional ?? undefined;
    message.adminInfo = object.adminInfo !== undefined && object.adminInfo !== null ? AdminInfo.fromPartial(object.adminInfo) : undefined;
    return message;
  },
  fromAmino(object: DerivativeMarketParamUpdateProposalAmino): DerivativeMarketParamUpdateProposal {
    const message = createBaseDerivativeMarketParamUpdateProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.initial_margin_ratio !== undefined && object.initial_margin_ratio !== null) {
      message.initialMarginRatio = object.initial_margin_ratio;
    }
    if (object.maintenance_margin_ratio !== undefined && object.maintenance_margin_ratio !== null) {
      message.maintenanceMarginRatio = object.maintenance_margin_ratio;
    }
    if (object.maker_fee_rate !== undefined && object.maker_fee_rate !== null) {
      message.makerFeeRate = object.maker_fee_rate;
    }
    if (object.taker_fee_rate !== undefined && object.taker_fee_rate !== null) {
      message.takerFeeRate = object.taker_fee_rate;
    }
    if (object.relayer_fee_share_rate !== undefined && object.relayer_fee_share_rate !== null) {
      message.relayerFeeShareRate = object.relayer_fee_share_rate;
    }
    if (object.min_price_tick_size !== undefined && object.min_price_tick_size !== null) {
      message.minPriceTickSize = object.min_price_tick_size;
    }
    if (object.min_quantity_tick_size !== undefined && object.min_quantity_tick_size !== null) {
      message.minQuantityTickSize = object.min_quantity_tick_size;
    }
    if (object.HourlyInterestRate !== undefined && object.HourlyInterestRate !== null) {
      message.hourlyInterestRate = object.HourlyInterestRate;
    }
    if (object.HourlyFundingRateCap !== undefined && object.HourlyFundingRateCap !== null) {
      message.hourlyFundingRateCap = object.HourlyFundingRateCap;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.oracle_params !== undefined && object.oracle_params !== null) {
      message.oracleParams = OracleParams.fromAmino(object.oracle_params);
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker;
    }
    if (object.min_notional !== undefined && object.min_notional !== null) {
      message.minNotional = object.min_notional;
    }
    if (object.admin_info !== undefined && object.admin_info !== null) {
      message.adminInfo = AdminInfo.fromAmino(object.admin_info);
    }
    return message;
  },
  toAmino(message: DerivativeMarketParamUpdateProposal): DerivativeMarketParamUpdateProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.initial_margin_ratio = message.initialMarginRatio === null ? undefined : message.initialMarginRatio;
    obj.maintenance_margin_ratio = message.maintenanceMarginRatio === null ? undefined : message.maintenanceMarginRatio;
    obj.maker_fee_rate = message.makerFeeRate === null ? undefined : message.makerFeeRate;
    obj.taker_fee_rate = message.takerFeeRate === null ? undefined : message.takerFeeRate;
    obj.relayer_fee_share_rate = message.relayerFeeShareRate === null ? undefined : message.relayerFeeShareRate;
    obj.min_price_tick_size = message.minPriceTickSize === null ? undefined : message.minPriceTickSize;
    obj.min_quantity_tick_size = message.minQuantityTickSize === null ? undefined : message.minQuantityTickSize;
    obj.HourlyInterestRate = message.hourlyInterestRate === null ? undefined : message.hourlyInterestRate;
    obj.HourlyFundingRateCap = message.hourlyFundingRateCap === null ? undefined : message.hourlyFundingRateCap;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.oracle_params = message.oracleParams ? OracleParams.toAmino(message.oracleParams) : undefined;
    obj.ticker = message.ticker === null ? undefined : message.ticker;
    obj.min_notional = message.minNotional === null ? undefined : message.minNotional;
    obj.admin_info = message.adminInfo ? AdminInfo.toAmino(message.adminInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: DerivativeMarketParamUpdateProposalAminoMsg): DerivativeMarketParamUpdateProposal {
    return DerivativeMarketParamUpdateProposal.fromAmino(object.value);
  },
  toAminoMsg(message: DerivativeMarketParamUpdateProposal): DerivativeMarketParamUpdateProposalAminoMsg {
    return {
      type: "exchange/DerivativeMarketParamUpdateProposal",
      value: DerivativeMarketParamUpdateProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: DerivativeMarketParamUpdateProposalProtoMsg): DerivativeMarketParamUpdateProposal {
    return DerivativeMarketParamUpdateProposal.decode(message.value);
  },
  toProto(message: DerivativeMarketParamUpdateProposal): Uint8Array {
    return DerivativeMarketParamUpdateProposal.encode(message).finish();
  },
  toProtoMsg(message: DerivativeMarketParamUpdateProposal): DerivativeMarketParamUpdateProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal",
      value: DerivativeMarketParamUpdateProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DerivativeMarketParamUpdateProposal.typeUrl, DerivativeMarketParamUpdateProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(DerivativeMarketParamUpdateProposal.aminoType, DerivativeMarketParamUpdateProposal.typeUrl);
function createBaseAdminInfo(): AdminInfo {
  return {
    admin: "",
    adminPermissions: 0
  };
}
export const AdminInfo = {
  typeUrl: "/injective.exchange.v1beta1.AdminInfo",
  is(o: any): o is AdminInfo {
    return o && (o.$typeUrl === AdminInfo.typeUrl || typeof o.admin === "string" && typeof o.adminPermissions === "number");
  },
  isAmino(o: any): o is AdminInfoAmino {
    return o && (o.$typeUrl === AdminInfo.typeUrl || typeof o.admin === "string" && typeof o.admin_permissions === "number");
  },
  encode(message: AdminInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.adminPermissions !== 0) {
      writer.uint32(16).uint32(message.adminPermissions);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AdminInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.adminPermissions = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AdminInfo>): AdminInfo {
    const message = createBaseAdminInfo();
    message.admin = object.admin ?? "";
    message.adminPermissions = object.adminPermissions ?? 0;
    return message;
  },
  fromAmino(object: AdminInfoAmino): AdminInfo {
    const message = createBaseAdminInfo();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.admin_permissions !== undefined && object.admin_permissions !== null) {
      message.adminPermissions = object.admin_permissions;
    }
    return message;
  },
  toAmino(message: AdminInfo): AdminInfoAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.admin_permissions = message.adminPermissions === 0 ? undefined : message.adminPermissions;
    return obj;
  },
  fromAminoMsg(object: AdminInfoAminoMsg): AdminInfo {
    return AdminInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: AdminInfoProtoMsg): AdminInfo {
    return AdminInfo.decode(message.value);
  },
  toProto(message: AdminInfo): Uint8Array {
    return AdminInfo.encode(message).finish();
  },
  toProtoMsg(message: AdminInfo): AdminInfoProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.AdminInfo",
      value: AdminInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AdminInfo.typeUrl, AdminInfo);
function createBaseMarketForcedSettlementProposal(): MarketForcedSettlementProposal {
  return {
    title: "",
    description: "",
    marketId: "",
    settlementPrice: undefined
  };
}
export const MarketForcedSettlementProposal = {
  typeUrl: "/injective.exchange.v1beta1.MarketForcedSettlementProposal",
  aminoType: "exchange/MarketForcedSettlementProposal",
  is(o: any): o is MarketForcedSettlementProposal {
    return o && (o.$typeUrl === MarketForcedSettlementProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.marketId === "string");
  },
  isAmino(o: any): o is MarketForcedSettlementProposalAmino {
    return o && (o.$typeUrl === MarketForcedSettlementProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.market_id === "string");
  },
  encode(message: MarketForcedSettlementProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.marketId !== "") {
      writer.uint32(26).string(message.marketId);
    }
    if (message.settlementPrice !== undefined) {
      writer.uint32(34).string(message.settlementPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MarketForcedSettlementProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketForcedSettlementProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.marketId = reader.string();
          break;
        case 4:
          message.settlementPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MarketForcedSettlementProposal>): MarketForcedSettlementProposal {
    const message = createBaseMarketForcedSettlementProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.marketId = object.marketId ?? "";
    message.settlementPrice = object.settlementPrice ?? undefined;
    return message;
  },
  fromAmino(object: MarketForcedSettlementProposalAmino): MarketForcedSettlementProposal {
    const message = createBaseMarketForcedSettlementProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.settlement_price !== undefined && object.settlement_price !== null) {
      message.settlementPrice = object.settlement_price;
    }
    return message;
  },
  toAmino(message: MarketForcedSettlementProposal): MarketForcedSettlementProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.settlement_price = message.settlementPrice === null ? undefined : message.settlementPrice;
    return obj;
  },
  fromAminoMsg(object: MarketForcedSettlementProposalAminoMsg): MarketForcedSettlementProposal {
    return MarketForcedSettlementProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MarketForcedSettlementProposal): MarketForcedSettlementProposalAminoMsg {
    return {
      type: "exchange/MarketForcedSettlementProposal",
      value: MarketForcedSettlementProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: MarketForcedSettlementProposalProtoMsg): MarketForcedSettlementProposal {
    return MarketForcedSettlementProposal.decode(message.value);
  },
  toProto(message: MarketForcedSettlementProposal): Uint8Array {
    return MarketForcedSettlementProposal.encode(message).finish();
  },
  toProtoMsg(message: MarketForcedSettlementProposal): MarketForcedSettlementProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MarketForcedSettlementProposal",
      value: MarketForcedSettlementProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MarketForcedSettlementProposal.typeUrl, MarketForcedSettlementProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(MarketForcedSettlementProposal.aminoType, MarketForcedSettlementProposal.typeUrl);
function createBaseUpdateDenomDecimalsProposal(): UpdateDenomDecimalsProposal {
  return {
    title: "",
    description: "",
    denomDecimals: []
  };
}
export const UpdateDenomDecimalsProposal = {
  typeUrl: "/injective.exchange.v1beta1.UpdateDenomDecimalsProposal",
  aminoType: "exchange/UpdateDenomDecimalsProposal",
  is(o: any): o is UpdateDenomDecimalsProposal {
    return o && (o.$typeUrl === UpdateDenomDecimalsProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.denomDecimals) && (!o.denomDecimals.length || DenomDecimals.is(o.denomDecimals[0])));
  },
  isAmino(o: any): o is UpdateDenomDecimalsProposalAmino {
    return o && (o.$typeUrl === UpdateDenomDecimalsProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.denom_decimals) && (!o.denom_decimals.length || DenomDecimals.isAmino(o.denom_decimals[0])));
  },
  encode(message: UpdateDenomDecimalsProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.denomDecimals) {
      DenomDecimals.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateDenomDecimalsProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDenomDecimalsProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.denomDecimals.push(DenomDecimals.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UpdateDenomDecimalsProposal>): UpdateDenomDecimalsProposal {
    const message = createBaseUpdateDenomDecimalsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denomDecimals = object.denomDecimals?.map(e => DenomDecimals.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: UpdateDenomDecimalsProposalAmino): UpdateDenomDecimalsProposal {
    const message = createBaseUpdateDenomDecimalsProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.denomDecimals = object.denom_decimals?.map(e => DenomDecimals.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: UpdateDenomDecimalsProposal): UpdateDenomDecimalsProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.denomDecimals) {
      obj.denom_decimals = message.denomDecimals.map(e => e ? DenomDecimals.toAmino(e) : undefined);
    } else {
      obj.denom_decimals = message.denomDecimals;
    }
    return obj;
  },
  fromAminoMsg(object: UpdateDenomDecimalsProposalAminoMsg): UpdateDenomDecimalsProposal {
    return UpdateDenomDecimalsProposal.fromAmino(object.value);
  },
  toAminoMsg(message: UpdateDenomDecimalsProposal): UpdateDenomDecimalsProposalAminoMsg {
    return {
      type: "exchange/UpdateDenomDecimalsProposal",
      value: UpdateDenomDecimalsProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: UpdateDenomDecimalsProposalProtoMsg): UpdateDenomDecimalsProposal {
    return UpdateDenomDecimalsProposal.decode(message.value);
  },
  toProto(message: UpdateDenomDecimalsProposal): Uint8Array {
    return UpdateDenomDecimalsProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdateDenomDecimalsProposal): UpdateDenomDecimalsProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.UpdateDenomDecimalsProposal",
      value: UpdateDenomDecimalsProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UpdateDenomDecimalsProposal.typeUrl, UpdateDenomDecimalsProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(UpdateDenomDecimalsProposal.aminoType, UpdateDenomDecimalsProposal.typeUrl);
function createBaseBinaryOptionsMarketParamUpdateProposal(): BinaryOptionsMarketParamUpdateProposal {
  return {
    title: "",
    description: "",
    marketId: "",
    makerFeeRate: undefined,
    takerFeeRate: undefined,
    relayerFeeShareRate: undefined,
    minPriceTickSize: undefined,
    minQuantityTickSize: undefined,
    expirationTimestamp: BigInt(0),
    settlementTimestamp: BigInt(0),
    settlementPrice: undefined,
    admin: "",
    status: 0,
    oracleParams: undefined,
    ticker: undefined,
    minNotional: undefined
  };
}
export const BinaryOptionsMarketParamUpdateProposal = {
  typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarketParamUpdateProposal",
  aminoType: "exchange/BinaryOptionsMarketParamUpdateProposal",
  is(o: any): o is BinaryOptionsMarketParamUpdateProposal {
    return o && (o.$typeUrl === BinaryOptionsMarketParamUpdateProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.marketId === "string" && typeof o.expirationTimestamp === "bigint" && typeof o.settlementTimestamp === "bigint" && typeof o.admin === "string" && isSet(o.status));
  },
  isAmino(o: any): o is BinaryOptionsMarketParamUpdateProposalAmino {
    return o && (o.$typeUrl === BinaryOptionsMarketParamUpdateProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.market_id === "string" && typeof o.expiration_timestamp === "bigint" && typeof o.settlement_timestamp === "bigint" && typeof o.admin === "string" && isSet(o.status));
  },
  encode(message: BinaryOptionsMarketParamUpdateProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.marketId !== "") {
      writer.uint32(26).string(message.marketId);
    }
    if (message.makerFeeRate !== undefined) {
      writer.uint32(34).string(message.makerFeeRate);
    }
    if (message.takerFeeRate !== undefined) {
      writer.uint32(42).string(message.takerFeeRate);
    }
    if (message.relayerFeeShareRate !== undefined) {
      writer.uint32(50).string(message.relayerFeeShareRate);
    }
    if (message.minPriceTickSize !== undefined) {
      writer.uint32(58).string(message.minPriceTickSize);
    }
    if (message.minQuantityTickSize !== undefined) {
      writer.uint32(66).string(message.minQuantityTickSize);
    }
    if (message.expirationTimestamp !== BigInt(0)) {
      writer.uint32(72).int64(message.expirationTimestamp);
    }
    if (message.settlementTimestamp !== BigInt(0)) {
      writer.uint32(80).int64(message.settlementTimestamp);
    }
    if (message.settlementPrice !== undefined) {
      writer.uint32(90).string(message.settlementPrice);
    }
    if (message.admin !== "") {
      writer.uint32(98).string(message.admin);
    }
    if (message.status !== 0) {
      writer.uint32(104).int32(message.status);
    }
    if (message.oracleParams !== undefined) {
      ProviderOracleParams.encode(message.oracleParams, writer.uint32(114).fork()).ldelim();
    }
    if (message.ticker !== undefined) {
      writer.uint32(122).string(message.ticker);
    }
    if (message.minNotional !== undefined) {
      writer.uint32(130).string(message.minNotional);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BinaryOptionsMarketParamUpdateProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBinaryOptionsMarketParamUpdateProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.marketId = reader.string();
          break;
        case 4:
          message.makerFeeRate = reader.string();
          break;
        case 5:
          message.takerFeeRate = reader.string();
          break;
        case 6:
          message.relayerFeeShareRate = reader.string();
          break;
        case 7:
          message.minPriceTickSize = reader.string();
          break;
        case 8:
          message.minQuantityTickSize = reader.string();
          break;
        case 9:
          message.expirationTimestamp = reader.int64();
          break;
        case 10:
          message.settlementTimestamp = reader.int64();
          break;
        case 11:
          message.settlementPrice = reader.string();
          break;
        case 12:
          message.admin = reader.string();
          break;
        case 13:
          message.status = reader.int32() as any;
          break;
        case 14:
          message.oracleParams = ProviderOracleParams.decode(reader, reader.uint32());
          break;
        case 15:
          message.ticker = reader.string();
          break;
        case 16:
          message.minNotional = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BinaryOptionsMarketParamUpdateProposal>): BinaryOptionsMarketParamUpdateProposal {
    const message = createBaseBinaryOptionsMarketParamUpdateProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.marketId = object.marketId ?? "";
    message.makerFeeRate = object.makerFeeRate ?? undefined;
    message.takerFeeRate = object.takerFeeRate ?? undefined;
    message.relayerFeeShareRate = object.relayerFeeShareRate ?? undefined;
    message.minPriceTickSize = object.minPriceTickSize ?? undefined;
    message.minQuantityTickSize = object.minQuantityTickSize ?? undefined;
    message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? BigInt(object.expirationTimestamp.toString()) : BigInt(0);
    message.settlementTimestamp = object.settlementTimestamp !== undefined && object.settlementTimestamp !== null ? BigInt(object.settlementTimestamp.toString()) : BigInt(0);
    message.settlementPrice = object.settlementPrice ?? undefined;
    message.admin = object.admin ?? "";
    message.status = object.status ?? 0;
    message.oracleParams = object.oracleParams !== undefined && object.oracleParams !== null ? ProviderOracleParams.fromPartial(object.oracleParams) : undefined;
    message.ticker = object.ticker ?? undefined;
    message.minNotional = object.minNotional ?? undefined;
    return message;
  },
  fromAmino(object: BinaryOptionsMarketParamUpdateProposalAmino): BinaryOptionsMarketParamUpdateProposal {
    const message = createBaseBinaryOptionsMarketParamUpdateProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.maker_fee_rate !== undefined && object.maker_fee_rate !== null) {
      message.makerFeeRate = object.maker_fee_rate;
    }
    if (object.taker_fee_rate !== undefined && object.taker_fee_rate !== null) {
      message.takerFeeRate = object.taker_fee_rate;
    }
    if (object.relayer_fee_share_rate !== undefined && object.relayer_fee_share_rate !== null) {
      message.relayerFeeShareRate = object.relayer_fee_share_rate;
    }
    if (object.min_price_tick_size !== undefined && object.min_price_tick_size !== null) {
      message.minPriceTickSize = object.min_price_tick_size;
    }
    if (object.min_quantity_tick_size !== undefined && object.min_quantity_tick_size !== null) {
      message.minQuantityTickSize = object.min_quantity_tick_size;
    }
    if (object.expiration_timestamp !== undefined && object.expiration_timestamp !== null) {
      message.expirationTimestamp = BigInt(object.expiration_timestamp);
    }
    if (object.settlement_timestamp !== undefined && object.settlement_timestamp !== null) {
      message.settlementTimestamp = BigInt(object.settlement_timestamp);
    }
    if (object.settlement_price !== undefined && object.settlement_price !== null) {
      message.settlementPrice = object.settlement_price;
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.oracle_params !== undefined && object.oracle_params !== null) {
      message.oracleParams = ProviderOracleParams.fromAmino(object.oracle_params);
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker;
    }
    if (object.min_notional !== undefined && object.min_notional !== null) {
      message.minNotional = object.min_notional;
    }
    return message;
  },
  toAmino(message: BinaryOptionsMarketParamUpdateProposal): BinaryOptionsMarketParamUpdateProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.maker_fee_rate = message.makerFeeRate === null ? undefined : message.makerFeeRate;
    obj.taker_fee_rate = message.takerFeeRate === null ? undefined : message.takerFeeRate;
    obj.relayer_fee_share_rate = message.relayerFeeShareRate === null ? undefined : message.relayerFeeShareRate;
    obj.min_price_tick_size = message.minPriceTickSize === null ? undefined : message.minPriceTickSize;
    obj.min_quantity_tick_size = message.minQuantityTickSize === null ? undefined : message.minQuantityTickSize;
    obj.expiration_timestamp = message.expirationTimestamp !== BigInt(0) ? message.expirationTimestamp?.toString() : undefined;
    obj.settlement_timestamp = message.settlementTimestamp !== BigInt(0) ? message.settlementTimestamp?.toString() : undefined;
    obj.settlement_price = message.settlementPrice === null ? undefined : message.settlementPrice;
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.oracle_params = message.oracleParams ? ProviderOracleParams.toAmino(message.oracleParams) : undefined;
    obj.ticker = message.ticker === null ? undefined : message.ticker;
    obj.min_notional = message.minNotional === null ? undefined : message.minNotional;
    return obj;
  },
  fromAminoMsg(object: BinaryOptionsMarketParamUpdateProposalAminoMsg): BinaryOptionsMarketParamUpdateProposal {
    return BinaryOptionsMarketParamUpdateProposal.fromAmino(object.value);
  },
  toAminoMsg(message: BinaryOptionsMarketParamUpdateProposal): BinaryOptionsMarketParamUpdateProposalAminoMsg {
    return {
      type: "exchange/BinaryOptionsMarketParamUpdateProposal",
      value: BinaryOptionsMarketParamUpdateProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: BinaryOptionsMarketParamUpdateProposalProtoMsg): BinaryOptionsMarketParamUpdateProposal {
    return BinaryOptionsMarketParamUpdateProposal.decode(message.value);
  },
  toProto(message: BinaryOptionsMarketParamUpdateProposal): Uint8Array {
    return BinaryOptionsMarketParamUpdateProposal.encode(message).finish();
  },
  toProtoMsg(message: BinaryOptionsMarketParamUpdateProposal): BinaryOptionsMarketParamUpdateProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarketParamUpdateProposal",
      value: BinaryOptionsMarketParamUpdateProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BinaryOptionsMarketParamUpdateProposal.typeUrl, BinaryOptionsMarketParamUpdateProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(BinaryOptionsMarketParamUpdateProposal.aminoType, BinaryOptionsMarketParamUpdateProposal.typeUrl);
function createBaseProviderOracleParams(): ProviderOracleParams {
  return {
    symbol: "",
    provider: "",
    oracleScaleFactor: 0,
    oracleType: 0
  };
}
export const ProviderOracleParams = {
  typeUrl: "/injective.exchange.v1beta1.ProviderOracleParams",
  is(o: any): o is ProviderOracleParams {
    return o && (o.$typeUrl === ProviderOracleParams.typeUrl || typeof o.symbol === "string" && typeof o.provider === "string" && typeof o.oracleScaleFactor === "number" && isSet(o.oracleType));
  },
  isAmino(o: any): o is ProviderOracleParamsAmino {
    return o && (o.$typeUrl === ProviderOracleParams.typeUrl || typeof o.symbol === "string" && typeof o.provider === "string" && typeof o.oracle_scale_factor === "number" && isSet(o.oracle_type));
  },
  encode(message: ProviderOracleParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    if (message.oracleScaleFactor !== 0) {
      writer.uint32(24).uint32(message.oracleScaleFactor);
    }
    if (message.oracleType !== 0) {
      writer.uint32(32).int32(message.oracleType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProviderOracleParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderOracleParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;
        case 2:
          message.provider = reader.string();
          break;
        case 3:
          message.oracleScaleFactor = reader.uint32();
          break;
        case 4:
          message.oracleType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ProviderOracleParams>): ProviderOracleParams {
    const message = createBaseProviderOracleParams();
    message.symbol = object.symbol ?? "";
    message.provider = object.provider ?? "";
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.oracleType = object.oracleType ?? 0;
    return message;
  },
  fromAmino(object: ProviderOracleParamsAmino): ProviderOracleParams {
    const message = createBaseProviderOracleParams();
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.oracle_scale_factor !== undefined && object.oracle_scale_factor !== null) {
      message.oracleScaleFactor = object.oracle_scale_factor;
    }
    if (object.oracle_type !== undefined && object.oracle_type !== null) {
      message.oracleType = object.oracle_type;
    }
    return message;
  },
  toAmino(message: ProviderOracleParams): ProviderOracleParamsAmino {
    const obj: any = {};
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.oracle_scale_factor = message.oracleScaleFactor === 0 ? undefined : message.oracleScaleFactor;
    obj.oracle_type = message.oracleType === 0 ? undefined : message.oracleType;
    return obj;
  },
  fromAminoMsg(object: ProviderOracleParamsAminoMsg): ProviderOracleParams {
    return ProviderOracleParams.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderOracleParamsProtoMsg): ProviderOracleParams {
    return ProviderOracleParams.decode(message.value);
  },
  toProto(message: ProviderOracleParams): Uint8Array {
    return ProviderOracleParams.encode(message).finish();
  },
  toProtoMsg(message: ProviderOracleParams): ProviderOracleParamsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.ProviderOracleParams",
      value: ProviderOracleParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProviderOracleParams.typeUrl, ProviderOracleParams);
function createBaseOracleParams(): OracleParams {
  return {
    oracleBase: "",
    oracleQuote: "",
    oracleScaleFactor: 0,
    oracleType: 0
  };
}
export const OracleParams = {
  typeUrl: "/injective.exchange.v1beta1.OracleParams",
  is(o: any): o is OracleParams {
    return o && (o.$typeUrl === OracleParams.typeUrl || typeof o.oracleBase === "string" && typeof o.oracleQuote === "string" && typeof o.oracleScaleFactor === "number" && isSet(o.oracleType));
  },
  isAmino(o: any): o is OracleParamsAmino {
    return o && (o.$typeUrl === OracleParams.typeUrl || typeof o.oracle_base === "string" && typeof o.oracle_quote === "string" && typeof o.oracle_scale_factor === "number" && isSet(o.oracle_type));
  },
  encode(message: OracleParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oracleBase !== "") {
      writer.uint32(10).string(message.oracleBase);
    }
    if (message.oracleQuote !== "") {
      writer.uint32(18).string(message.oracleQuote);
    }
    if (message.oracleScaleFactor !== 0) {
      writer.uint32(24).uint32(message.oracleScaleFactor);
    }
    if (message.oracleType !== 0) {
      writer.uint32(32).int32(message.oracleType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OracleParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleBase = reader.string();
          break;
        case 2:
          message.oracleQuote = reader.string();
          break;
        case 3:
          message.oracleScaleFactor = reader.uint32();
          break;
        case 4:
          message.oracleType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OracleParams>): OracleParams {
    const message = createBaseOracleParams();
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.oracleType = object.oracleType ?? 0;
    return message;
  },
  fromAmino(object: OracleParamsAmino): OracleParams {
    const message = createBaseOracleParams();
    if (object.oracle_base !== undefined && object.oracle_base !== null) {
      message.oracleBase = object.oracle_base;
    }
    if (object.oracle_quote !== undefined && object.oracle_quote !== null) {
      message.oracleQuote = object.oracle_quote;
    }
    if (object.oracle_scale_factor !== undefined && object.oracle_scale_factor !== null) {
      message.oracleScaleFactor = object.oracle_scale_factor;
    }
    if (object.oracle_type !== undefined && object.oracle_type !== null) {
      message.oracleType = object.oracle_type;
    }
    return message;
  },
  toAmino(message: OracleParams): OracleParamsAmino {
    const obj: any = {};
    obj.oracle_base = message.oracleBase === "" ? undefined : message.oracleBase;
    obj.oracle_quote = message.oracleQuote === "" ? undefined : message.oracleQuote;
    obj.oracle_scale_factor = message.oracleScaleFactor === 0 ? undefined : message.oracleScaleFactor;
    obj.oracle_type = message.oracleType === 0 ? undefined : message.oracleType;
    return obj;
  },
  fromAminoMsg(object: OracleParamsAminoMsg): OracleParams {
    return OracleParams.fromAmino(object.value);
  },
  fromProtoMsg(message: OracleParamsProtoMsg): OracleParams {
    return OracleParams.decode(message.value);
  },
  toProto(message: OracleParams): Uint8Array {
    return OracleParams.encode(message).finish();
  },
  toProtoMsg(message: OracleParams): OracleParamsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.OracleParams",
      value: OracleParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OracleParams.typeUrl, OracleParams);
function createBaseTradingRewardCampaignLaunchProposal(): TradingRewardCampaignLaunchProposal {
  return {
    title: "",
    description: "",
    campaignInfo: undefined,
    campaignRewardPools: []
  };
}
export const TradingRewardCampaignLaunchProposal = {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignLaunchProposal",
  aminoType: "exchange/TradingRewardCampaignLaunchProposal",
  is(o: any): o is TradingRewardCampaignLaunchProposal {
    return o && (o.$typeUrl === TradingRewardCampaignLaunchProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.campaignRewardPools) && (!o.campaignRewardPools.length || CampaignRewardPool.is(o.campaignRewardPools[0])));
  },
  isAmino(o: any): o is TradingRewardCampaignLaunchProposalAmino {
    return o && (o.$typeUrl === TradingRewardCampaignLaunchProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.campaign_reward_pools) && (!o.campaign_reward_pools.length || CampaignRewardPool.isAmino(o.campaign_reward_pools[0])));
  },
  encode(message: TradingRewardCampaignLaunchProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.campaignInfo !== undefined) {
      TradingRewardCampaignInfo.encode(message.campaignInfo, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.campaignRewardPools) {
      CampaignRewardPool.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingRewardCampaignLaunchProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardCampaignLaunchProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.campaignInfo = TradingRewardCampaignInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.campaignRewardPools.push(CampaignRewardPool.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TradingRewardCampaignLaunchProposal>): TradingRewardCampaignLaunchProposal {
    const message = createBaseTradingRewardCampaignLaunchProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.campaignInfo = object.campaignInfo !== undefined && object.campaignInfo !== null ? TradingRewardCampaignInfo.fromPartial(object.campaignInfo) : undefined;
    message.campaignRewardPools = object.campaignRewardPools?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TradingRewardCampaignLaunchProposalAmino): TradingRewardCampaignLaunchProposal {
    const message = createBaseTradingRewardCampaignLaunchProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.campaign_info !== undefined && object.campaign_info !== null) {
      message.campaignInfo = TradingRewardCampaignInfo.fromAmino(object.campaign_info);
    }
    message.campaignRewardPools = object.campaign_reward_pools?.map(e => CampaignRewardPool.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TradingRewardCampaignLaunchProposal): TradingRewardCampaignLaunchProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.campaign_info = message.campaignInfo ? TradingRewardCampaignInfo.toAmino(message.campaignInfo) : undefined;
    if (message.campaignRewardPools) {
      obj.campaign_reward_pools = message.campaignRewardPools.map(e => e ? CampaignRewardPool.toAmino(e) : undefined);
    } else {
      obj.campaign_reward_pools = message.campaignRewardPools;
    }
    return obj;
  },
  fromAminoMsg(object: TradingRewardCampaignLaunchProposalAminoMsg): TradingRewardCampaignLaunchProposal {
    return TradingRewardCampaignLaunchProposal.fromAmino(object.value);
  },
  toAminoMsg(message: TradingRewardCampaignLaunchProposal): TradingRewardCampaignLaunchProposalAminoMsg {
    return {
      type: "exchange/TradingRewardCampaignLaunchProposal",
      value: TradingRewardCampaignLaunchProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: TradingRewardCampaignLaunchProposalProtoMsg): TradingRewardCampaignLaunchProposal {
    return TradingRewardCampaignLaunchProposal.decode(message.value);
  },
  toProto(message: TradingRewardCampaignLaunchProposal): Uint8Array {
    return TradingRewardCampaignLaunchProposal.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardCampaignLaunchProposal): TradingRewardCampaignLaunchProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignLaunchProposal",
      value: TradingRewardCampaignLaunchProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TradingRewardCampaignLaunchProposal.typeUrl, TradingRewardCampaignLaunchProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(TradingRewardCampaignLaunchProposal.aminoType, TradingRewardCampaignLaunchProposal.typeUrl);
function createBaseTradingRewardCampaignUpdateProposal(): TradingRewardCampaignUpdateProposal {
  return {
    title: "",
    description: "",
    campaignInfo: undefined,
    campaignRewardPoolsAdditions: [],
    campaignRewardPoolsUpdates: []
  };
}
export const TradingRewardCampaignUpdateProposal = {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignUpdateProposal",
  aminoType: "exchange/TradingRewardCampaignUpdateProposal",
  is(o: any): o is TradingRewardCampaignUpdateProposal {
    return o && (o.$typeUrl === TradingRewardCampaignUpdateProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.campaignRewardPoolsAdditions) && (!o.campaignRewardPoolsAdditions.length || CampaignRewardPool.is(o.campaignRewardPoolsAdditions[0])) && Array.isArray(o.campaignRewardPoolsUpdates) && (!o.campaignRewardPoolsUpdates.length || CampaignRewardPool.is(o.campaignRewardPoolsUpdates[0])));
  },
  isAmino(o: any): o is TradingRewardCampaignUpdateProposalAmino {
    return o && (o.$typeUrl === TradingRewardCampaignUpdateProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.campaign_reward_pools_additions) && (!o.campaign_reward_pools_additions.length || CampaignRewardPool.isAmino(o.campaign_reward_pools_additions[0])) && Array.isArray(o.campaign_reward_pools_updates) && (!o.campaign_reward_pools_updates.length || CampaignRewardPool.isAmino(o.campaign_reward_pools_updates[0])));
  },
  encode(message: TradingRewardCampaignUpdateProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.campaignInfo !== undefined) {
      TradingRewardCampaignInfo.encode(message.campaignInfo, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.campaignRewardPoolsAdditions) {
      CampaignRewardPool.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.campaignRewardPoolsUpdates) {
      CampaignRewardPool.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingRewardCampaignUpdateProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardCampaignUpdateProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.campaignInfo = TradingRewardCampaignInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.campaignRewardPoolsAdditions.push(CampaignRewardPool.decode(reader, reader.uint32()));
          break;
        case 5:
          message.campaignRewardPoolsUpdates.push(CampaignRewardPool.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TradingRewardCampaignUpdateProposal>): TradingRewardCampaignUpdateProposal {
    const message = createBaseTradingRewardCampaignUpdateProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.campaignInfo = object.campaignInfo !== undefined && object.campaignInfo !== null ? TradingRewardCampaignInfo.fromPartial(object.campaignInfo) : undefined;
    message.campaignRewardPoolsAdditions = object.campaignRewardPoolsAdditions?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    message.campaignRewardPoolsUpdates = object.campaignRewardPoolsUpdates?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TradingRewardCampaignUpdateProposalAmino): TradingRewardCampaignUpdateProposal {
    const message = createBaseTradingRewardCampaignUpdateProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.campaign_info !== undefined && object.campaign_info !== null) {
      message.campaignInfo = TradingRewardCampaignInfo.fromAmino(object.campaign_info);
    }
    message.campaignRewardPoolsAdditions = object.campaign_reward_pools_additions?.map(e => CampaignRewardPool.fromAmino(e)) || [];
    message.campaignRewardPoolsUpdates = object.campaign_reward_pools_updates?.map(e => CampaignRewardPool.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TradingRewardCampaignUpdateProposal): TradingRewardCampaignUpdateProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.campaign_info = message.campaignInfo ? TradingRewardCampaignInfo.toAmino(message.campaignInfo) : undefined;
    if (message.campaignRewardPoolsAdditions) {
      obj.campaign_reward_pools_additions = message.campaignRewardPoolsAdditions.map(e => e ? CampaignRewardPool.toAmino(e) : undefined);
    } else {
      obj.campaign_reward_pools_additions = message.campaignRewardPoolsAdditions;
    }
    if (message.campaignRewardPoolsUpdates) {
      obj.campaign_reward_pools_updates = message.campaignRewardPoolsUpdates.map(e => e ? CampaignRewardPool.toAmino(e) : undefined);
    } else {
      obj.campaign_reward_pools_updates = message.campaignRewardPoolsUpdates;
    }
    return obj;
  },
  fromAminoMsg(object: TradingRewardCampaignUpdateProposalAminoMsg): TradingRewardCampaignUpdateProposal {
    return TradingRewardCampaignUpdateProposal.fromAmino(object.value);
  },
  toAminoMsg(message: TradingRewardCampaignUpdateProposal): TradingRewardCampaignUpdateProposalAminoMsg {
    return {
      type: "exchange/TradingRewardCampaignUpdateProposal",
      value: TradingRewardCampaignUpdateProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: TradingRewardCampaignUpdateProposalProtoMsg): TradingRewardCampaignUpdateProposal {
    return TradingRewardCampaignUpdateProposal.decode(message.value);
  },
  toProto(message: TradingRewardCampaignUpdateProposal): Uint8Array {
    return TradingRewardCampaignUpdateProposal.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardCampaignUpdateProposal): TradingRewardCampaignUpdateProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignUpdateProposal",
      value: TradingRewardCampaignUpdateProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TradingRewardCampaignUpdateProposal.typeUrl, TradingRewardCampaignUpdateProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(TradingRewardCampaignUpdateProposal.aminoType, TradingRewardCampaignUpdateProposal.typeUrl);
function createBaseRewardPointUpdate(): RewardPointUpdate {
  return {
    accountAddress: "",
    newPoints: ""
  };
}
export const RewardPointUpdate = {
  typeUrl: "/injective.exchange.v1beta1.RewardPointUpdate",
  is(o: any): o is RewardPointUpdate {
    return o && (o.$typeUrl === RewardPointUpdate.typeUrl || typeof o.accountAddress === "string" && typeof o.newPoints === "string");
  },
  isAmino(o: any): o is RewardPointUpdateAmino {
    return o && (o.$typeUrl === RewardPointUpdate.typeUrl || typeof o.account_address === "string" && typeof o.new_points === "string");
  },
  encode(message: RewardPointUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.newPoints !== "") {
      writer.uint32(98).string(message.newPoints);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardPointUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardPointUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;
        case 12:
          message.newPoints = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RewardPointUpdate>): RewardPointUpdate {
    const message = createBaseRewardPointUpdate();
    message.accountAddress = object.accountAddress ?? "";
    message.newPoints = object.newPoints ?? "";
    return message;
  },
  fromAmino(object: RewardPointUpdateAmino): RewardPointUpdate {
    const message = createBaseRewardPointUpdate();
    if (object.account_address !== undefined && object.account_address !== null) {
      message.accountAddress = object.account_address;
    }
    if (object.new_points !== undefined && object.new_points !== null) {
      message.newPoints = object.new_points;
    }
    return message;
  },
  toAmino(message: RewardPointUpdate): RewardPointUpdateAmino {
    const obj: any = {};
    obj.account_address = message.accountAddress === "" ? undefined : message.accountAddress;
    obj.new_points = message.newPoints === "" ? undefined : message.newPoints;
    return obj;
  },
  fromAminoMsg(object: RewardPointUpdateAminoMsg): RewardPointUpdate {
    return RewardPointUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardPointUpdateProtoMsg): RewardPointUpdate {
    return RewardPointUpdate.decode(message.value);
  },
  toProto(message: RewardPointUpdate): Uint8Array {
    return RewardPointUpdate.encode(message).finish();
  },
  toProtoMsg(message: RewardPointUpdate): RewardPointUpdateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.RewardPointUpdate",
      value: RewardPointUpdate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RewardPointUpdate.typeUrl, RewardPointUpdate);
function createBaseTradingRewardPendingPointsUpdateProposal(): TradingRewardPendingPointsUpdateProposal {
  return {
    title: "",
    description: "",
    pendingPoolTimestamp: BigInt(0),
    rewardPointUpdates: []
  };
}
export const TradingRewardPendingPointsUpdateProposal = {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardPendingPointsUpdateProposal",
  aminoType: "exchange/TradingRewardPendingPointsUpdateProposal",
  is(o: any): o is TradingRewardPendingPointsUpdateProposal {
    return o && (o.$typeUrl === TradingRewardPendingPointsUpdateProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.pendingPoolTimestamp === "bigint" && Array.isArray(o.rewardPointUpdates) && (!o.rewardPointUpdates.length || RewardPointUpdate.is(o.rewardPointUpdates[0])));
  },
  isAmino(o: any): o is TradingRewardPendingPointsUpdateProposalAmino {
    return o && (o.$typeUrl === TradingRewardPendingPointsUpdateProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.pending_pool_timestamp === "bigint" && Array.isArray(o.reward_point_updates) && (!o.reward_point_updates.length || RewardPointUpdate.isAmino(o.reward_point_updates[0])));
  },
  encode(message: TradingRewardPendingPointsUpdateProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.pendingPoolTimestamp !== BigInt(0)) {
      writer.uint32(24).int64(message.pendingPoolTimestamp);
    }
    for (const v of message.rewardPointUpdates) {
      RewardPointUpdate.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingRewardPendingPointsUpdateProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardPendingPointsUpdateProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.pendingPoolTimestamp = reader.int64();
          break;
        case 4:
          message.rewardPointUpdates.push(RewardPointUpdate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TradingRewardPendingPointsUpdateProposal>): TradingRewardPendingPointsUpdateProposal {
    const message = createBaseTradingRewardPendingPointsUpdateProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.pendingPoolTimestamp = object.pendingPoolTimestamp !== undefined && object.pendingPoolTimestamp !== null ? BigInt(object.pendingPoolTimestamp.toString()) : BigInt(0);
    message.rewardPointUpdates = object.rewardPointUpdates?.map(e => RewardPointUpdate.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TradingRewardPendingPointsUpdateProposalAmino): TradingRewardPendingPointsUpdateProposal {
    const message = createBaseTradingRewardPendingPointsUpdateProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.pending_pool_timestamp !== undefined && object.pending_pool_timestamp !== null) {
      message.pendingPoolTimestamp = BigInt(object.pending_pool_timestamp);
    }
    message.rewardPointUpdates = object.reward_point_updates?.map(e => RewardPointUpdate.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TradingRewardPendingPointsUpdateProposal): TradingRewardPendingPointsUpdateProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.pending_pool_timestamp = message.pendingPoolTimestamp !== BigInt(0) ? message.pendingPoolTimestamp?.toString() : undefined;
    if (message.rewardPointUpdates) {
      obj.reward_point_updates = message.rewardPointUpdates.map(e => e ? RewardPointUpdate.toAmino(e) : undefined);
    } else {
      obj.reward_point_updates = message.rewardPointUpdates;
    }
    return obj;
  },
  fromAminoMsg(object: TradingRewardPendingPointsUpdateProposalAminoMsg): TradingRewardPendingPointsUpdateProposal {
    return TradingRewardPendingPointsUpdateProposal.fromAmino(object.value);
  },
  toAminoMsg(message: TradingRewardPendingPointsUpdateProposal): TradingRewardPendingPointsUpdateProposalAminoMsg {
    return {
      type: "exchange/TradingRewardPendingPointsUpdateProposal",
      value: TradingRewardPendingPointsUpdateProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: TradingRewardPendingPointsUpdateProposalProtoMsg): TradingRewardPendingPointsUpdateProposal {
    return TradingRewardPendingPointsUpdateProposal.decode(message.value);
  },
  toProto(message: TradingRewardPendingPointsUpdateProposal): Uint8Array {
    return TradingRewardPendingPointsUpdateProposal.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardPendingPointsUpdateProposal): TradingRewardPendingPointsUpdateProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TradingRewardPendingPointsUpdateProposal",
      value: TradingRewardPendingPointsUpdateProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TradingRewardPendingPointsUpdateProposal.typeUrl, TradingRewardPendingPointsUpdateProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(TradingRewardPendingPointsUpdateProposal.aminoType, TradingRewardPendingPointsUpdateProposal.typeUrl);
function createBaseFeeDiscountProposal(): FeeDiscountProposal {
  return {
    title: "",
    description: "",
    schedule: undefined
  };
}
export const FeeDiscountProposal = {
  typeUrl: "/injective.exchange.v1beta1.FeeDiscountProposal",
  aminoType: "exchange/FeeDiscountProposal",
  is(o: any): o is FeeDiscountProposal {
    return o && (o.$typeUrl === FeeDiscountProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string");
  },
  isAmino(o: any): o is FeeDiscountProposalAmino {
    return o && (o.$typeUrl === FeeDiscountProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string");
  },
  encode(message: FeeDiscountProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.schedule !== undefined) {
      FeeDiscountSchedule.encode(message.schedule, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeeDiscountProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeDiscountProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.schedule = FeeDiscountSchedule.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FeeDiscountProposal>): FeeDiscountProposal {
    const message = createBaseFeeDiscountProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.schedule = object.schedule !== undefined && object.schedule !== null ? FeeDiscountSchedule.fromPartial(object.schedule) : undefined;
    return message;
  },
  fromAmino(object: FeeDiscountProposalAmino): FeeDiscountProposal {
    const message = createBaseFeeDiscountProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.schedule !== undefined && object.schedule !== null) {
      message.schedule = FeeDiscountSchedule.fromAmino(object.schedule);
    }
    return message;
  },
  toAmino(message: FeeDiscountProposal): FeeDiscountProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.schedule = message.schedule ? FeeDiscountSchedule.toAmino(message.schedule) : undefined;
    return obj;
  },
  fromAminoMsg(object: FeeDiscountProposalAminoMsg): FeeDiscountProposal {
    return FeeDiscountProposal.fromAmino(object.value);
  },
  toAminoMsg(message: FeeDiscountProposal): FeeDiscountProposalAminoMsg {
    return {
      type: "exchange/FeeDiscountProposal",
      value: FeeDiscountProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: FeeDiscountProposalProtoMsg): FeeDiscountProposal {
    return FeeDiscountProposal.decode(message.value);
  },
  toProto(message: FeeDiscountProposal): Uint8Array {
    return FeeDiscountProposal.encode(message).finish();
  },
  toProtoMsg(message: FeeDiscountProposal): FeeDiscountProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.FeeDiscountProposal",
      value: FeeDiscountProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FeeDiscountProposal.typeUrl, FeeDiscountProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(FeeDiscountProposal.aminoType, FeeDiscountProposal.typeUrl);
function createBaseBatchCommunityPoolSpendProposal(): BatchCommunityPoolSpendProposal {
  return {
    title: "",
    description: "",
    proposals: []
  };
}
export const BatchCommunityPoolSpendProposal = {
  typeUrl: "/injective.exchange.v1beta1.BatchCommunityPoolSpendProposal",
  aminoType: "exchange/BatchCommunityPoolSpendProposal",
  is(o: any): o is BatchCommunityPoolSpendProposal {
    return o && (o.$typeUrl === BatchCommunityPoolSpendProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.proposals) && (!o.proposals.length || CommunityPoolSpendProposal.is(o.proposals[0])));
  },
  isAmino(o: any): o is BatchCommunityPoolSpendProposalAmino {
    return o && (o.$typeUrl === BatchCommunityPoolSpendProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.proposals) && (!o.proposals.length || CommunityPoolSpendProposal.isAmino(o.proposals[0])));
  },
  encode(message: BatchCommunityPoolSpendProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.proposals) {
      CommunityPoolSpendProposal.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BatchCommunityPoolSpendProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchCommunityPoolSpendProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.proposals.push(CommunityPoolSpendProposal.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BatchCommunityPoolSpendProposal>): BatchCommunityPoolSpendProposal {
    const message = createBaseBatchCommunityPoolSpendProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.proposals = object.proposals?.map(e => CommunityPoolSpendProposal.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BatchCommunityPoolSpendProposalAmino): BatchCommunityPoolSpendProposal {
    const message = createBaseBatchCommunityPoolSpendProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.proposals = object.proposals?.map(e => CommunityPoolSpendProposal.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BatchCommunityPoolSpendProposal): BatchCommunityPoolSpendProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? CommunityPoolSpendProposal.toAmino(e) : undefined);
    } else {
      obj.proposals = message.proposals;
    }
    return obj;
  },
  fromAminoMsg(object: BatchCommunityPoolSpendProposalAminoMsg): BatchCommunityPoolSpendProposal {
    return BatchCommunityPoolSpendProposal.fromAmino(object.value);
  },
  toAminoMsg(message: BatchCommunityPoolSpendProposal): BatchCommunityPoolSpendProposalAminoMsg {
    return {
      type: "exchange/BatchCommunityPoolSpendProposal",
      value: BatchCommunityPoolSpendProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: BatchCommunityPoolSpendProposalProtoMsg): BatchCommunityPoolSpendProposal {
    return BatchCommunityPoolSpendProposal.decode(message.value);
  },
  toProto(message: BatchCommunityPoolSpendProposal): Uint8Array {
    return BatchCommunityPoolSpendProposal.encode(message).finish();
  },
  toProtoMsg(message: BatchCommunityPoolSpendProposal): BatchCommunityPoolSpendProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BatchCommunityPoolSpendProposal",
      value: BatchCommunityPoolSpendProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BatchCommunityPoolSpendProposal.typeUrl, BatchCommunityPoolSpendProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(BatchCommunityPoolSpendProposal.aminoType, BatchCommunityPoolSpendProposal.typeUrl);
function createBaseAtomicMarketOrderFeeMultiplierScheduleProposal(): AtomicMarketOrderFeeMultiplierScheduleProposal {
  return {
    title: "",
    description: "",
    marketFeeMultipliers: []
  };
}
export const AtomicMarketOrderFeeMultiplierScheduleProposal = {
  typeUrl: "/injective.exchange.v1beta1.AtomicMarketOrderFeeMultiplierScheduleProposal",
  aminoType: "exchange/AtomicMarketOrderFeeMultiplierScheduleProposal",
  is(o: any): o is AtomicMarketOrderFeeMultiplierScheduleProposal {
    return o && (o.$typeUrl === AtomicMarketOrderFeeMultiplierScheduleProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.marketFeeMultipliers) && (!o.marketFeeMultipliers.length || MarketFeeMultiplier.is(o.marketFeeMultipliers[0])));
  },
  isAmino(o: any): o is AtomicMarketOrderFeeMultiplierScheduleProposalAmino {
    return o && (o.$typeUrl === AtomicMarketOrderFeeMultiplierScheduleProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.market_fee_multipliers) && (!o.market_fee_multipliers.length || MarketFeeMultiplier.isAmino(o.market_fee_multipliers[0])));
  },
  encode(message: AtomicMarketOrderFeeMultiplierScheduleProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.marketFeeMultipliers) {
      MarketFeeMultiplier.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AtomicMarketOrderFeeMultiplierScheduleProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAtomicMarketOrderFeeMultiplierScheduleProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.marketFeeMultipliers.push(MarketFeeMultiplier.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AtomicMarketOrderFeeMultiplierScheduleProposal>): AtomicMarketOrderFeeMultiplierScheduleProposal {
    const message = createBaseAtomicMarketOrderFeeMultiplierScheduleProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.marketFeeMultipliers = object.marketFeeMultipliers?.map(e => MarketFeeMultiplier.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AtomicMarketOrderFeeMultiplierScheduleProposalAmino): AtomicMarketOrderFeeMultiplierScheduleProposal {
    const message = createBaseAtomicMarketOrderFeeMultiplierScheduleProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.marketFeeMultipliers = object.market_fee_multipliers?.map(e => MarketFeeMultiplier.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AtomicMarketOrderFeeMultiplierScheduleProposal): AtomicMarketOrderFeeMultiplierScheduleProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.marketFeeMultipliers) {
      obj.market_fee_multipliers = message.marketFeeMultipliers.map(e => e ? MarketFeeMultiplier.toAmino(e) : undefined);
    } else {
      obj.market_fee_multipliers = message.marketFeeMultipliers;
    }
    return obj;
  },
  fromAminoMsg(object: AtomicMarketOrderFeeMultiplierScheduleProposalAminoMsg): AtomicMarketOrderFeeMultiplierScheduleProposal {
    return AtomicMarketOrderFeeMultiplierScheduleProposal.fromAmino(object.value);
  },
  toAminoMsg(message: AtomicMarketOrderFeeMultiplierScheduleProposal): AtomicMarketOrderFeeMultiplierScheduleProposalAminoMsg {
    return {
      type: "exchange/AtomicMarketOrderFeeMultiplierScheduleProposal",
      value: AtomicMarketOrderFeeMultiplierScheduleProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: AtomicMarketOrderFeeMultiplierScheduleProposalProtoMsg): AtomicMarketOrderFeeMultiplierScheduleProposal {
    return AtomicMarketOrderFeeMultiplierScheduleProposal.decode(message.value);
  },
  toProto(message: AtomicMarketOrderFeeMultiplierScheduleProposal): Uint8Array {
    return AtomicMarketOrderFeeMultiplierScheduleProposal.encode(message).finish();
  },
  toProtoMsg(message: AtomicMarketOrderFeeMultiplierScheduleProposal): AtomicMarketOrderFeeMultiplierScheduleProposalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.AtomicMarketOrderFeeMultiplierScheduleProposal",
      value: AtomicMarketOrderFeeMultiplierScheduleProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AtomicMarketOrderFeeMultiplierScheduleProposal.typeUrl, AtomicMarketOrderFeeMultiplierScheduleProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(AtomicMarketOrderFeeMultiplierScheduleProposal.aminoType, AtomicMarketOrderFeeMultiplierScheduleProposal.typeUrl);