import { Params, ParamsAmino, SpotMarket, SpotMarketAmino, DerivativeMarket, DerivativeMarketAmino, PerpetualMarketInfo, PerpetualMarketInfoAmino, DerivativeMarketSettlementInfo, DerivativeMarketSettlementInfoAmino, TradingRewardCampaignInfo, TradingRewardCampaignInfoAmino, CampaignRewardPool, CampaignRewardPoolAmino, FeeDiscountSchedule, FeeDiscountScheduleAmino, TradeRecords, TradeRecordsAmino, BinaryOptionsMarket, BinaryOptionsMarketAmino, DenomDecimals, DenomDecimalsAmino, MarketFeeMultiplier, MarketFeeMultiplierAmino, AggregateSubaccountVolumeRecord, AggregateSubaccountVolumeRecordAmino, MarketVolume, MarketVolumeAmino, FeeDiscountTierTTL, FeeDiscountTierTTLAmino, SpotLimitOrder, SpotLimitOrderAmino, DerivativeLimitOrder, DerivativeLimitOrderAmino, DerivativeMarketOrder, DerivativeMarketOrderAmino, Deposit, DepositAmino, Position, PositionAmino, SubaccountTradeNonce, SubaccountTradeNonceAmino, ExpiryFuturesMarketInfo, ExpiryFuturesMarketInfoAmino, PerpetualMarketFunding, PerpetualMarketFundingAmino, GrantAuthorization, GrantAuthorizationAmino, ActiveGrant, ActiveGrantAmino } from "./exchange";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial } from "../../../helpers";
import { Decimal } from "../../../decimals";
/** GenesisState defines the exchange module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of related to exchange. */
  params: Params;
  /** spot_markets is an array containing the genesis trade pairs */
  spotMarkets: SpotMarket[];
  /** derivative_markets is an array containing the genesis derivative markets */
  derivativeMarkets: DerivativeMarket[];
  /** spot_orderbook defines the spot exchange limit orderbook active at genesis. */
  spotOrderbook: SpotOrderBook[];
  /**
   * derivative_orderbook defines the derivative exchange limit orderbook active
   * at genesis.
   */
  derivativeOrderbook: DerivativeOrderBook[];
  /** balances defines the exchange users balances active at genesis. */
  balances: Balance[];
  /** positions defines the exchange derivative positions at genesis */
  positions: DerivativePosition[];
  /**
   * subaccount_trade_nonces defines the subaccount trade nonces for the
   * subaccounts at genesis
   */
  subaccountTradeNonces: SubaccountNonce[];
  /**
   * expiry_futures_market_info defines the market info for the expiry futures
   * markets at genesis
   */
  expiryFuturesMarketInfoState: ExpiryFuturesMarketInfoState[];
  /**
   * perpetual_market_info defines the market info for the perpetual derivative
   * markets at genesis
   */
  perpetualMarketInfo: PerpetualMarketInfo[];
  /**
   * perpetual_market_funding_state defines the funding state for the perpetual
   * derivative markets at genesis
   */
  perpetualMarketFundingState: PerpetualMarketFundingState[];
  derivativeMarketSettlementScheduled: DerivativeMarketSettlementInfo[];
  /** sets spot markets as enabled */
  isSpotExchangeEnabled: boolean;
  /** sets derivative markets as enabled */
  isDerivativesExchangeEnabled: boolean;
  /** the current trading reward campaign info */
  tradingRewardCampaignInfo?: TradingRewardCampaignInfo;
  /** the current and upcoming trading reward campaign pools */
  tradingRewardPoolCampaignSchedule: CampaignRewardPool[];
  tradingRewardCampaignAccountPoints: TradingRewardCampaignAccountPoints[];
  /** the fee discount schedule */
  feeDiscountSchedule?: FeeDiscountSchedule;
  /** the cached fee discount account tiers with TTL */
  feeDiscountAccountTierTtl: FeeDiscountAccountTierTTL[];
  feeDiscountBucketVolumeAccounts: FeeDiscountBucketVolumeAccounts[];
  /** sets the first fee cycle as finished */
  isFirstFeeCycleFinished: boolean;
  pendingTradingRewardPoolCampaignSchedule: CampaignRewardPool[];
  pendingTradingRewardCampaignAccountPoints: TradingRewardCampaignAccountPendingPoints[];
  /** the addresses opting out of trading rewards */
  rewardsOptOutAddresses: string[];
  historicalTradeRecords: TradeRecords[];
  /**
   * binary_options_markets is an array containing the genesis binary options
   * markets
   */
  binaryOptionsMarkets: BinaryOptionsMarket[];
  /**
   * binary_options_markets_scheduled_for_settlement contains the marketIDs of
   * binary options markets scheduled for next-block settlement
   */
  binaryOptionsMarketIdsScheduledForSettlement: string[];
  /**
   * spot_market_ids_scheduled_to_force_close defines the scheduled markets for
   * forced closings at genesis
   */
  spotMarketIdsScheduledToForceClose: string[];
  /** denom_decimals defines the denom decimals for the exchange. */
  denomDecimals: DenomDecimals[];
  conditionalDerivativeOrderbooks: ConditionalDerivativeOrderBook[];
  /**
   * market_fee_multipliers contains any non-default atomic order fee
   * multipliers
   */
  marketFeeMultipliers: MarketFeeMultiplier[];
  orderbookSequences: OrderbookSequence[];
  subaccountVolumes: AggregateSubaccountVolumeRecord[];
  marketVolumes: MarketVolume[];
  grantAuthorizations: FullGrantAuthorizations[];
  activeGrants: FullActiveGrant[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the exchange module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of related to exchange. */
  params: ParamsAmino;
  /** spot_markets is an array containing the genesis trade pairs */
  spot_markets: SpotMarketAmino[];
  /** derivative_markets is an array containing the genesis derivative markets */
  derivative_markets: DerivativeMarketAmino[];
  /** spot_orderbook defines the spot exchange limit orderbook active at genesis. */
  spot_orderbook: SpotOrderBookAmino[];
  /**
   * derivative_orderbook defines the derivative exchange limit orderbook active
   * at genesis.
   */
  derivative_orderbook: DerivativeOrderBookAmino[];
  /** balances defines the exchange users balances active at genesis. */
  balances: BalanceAmino[];
  /** positions defines the exchange derivative positions at genesis */
  positions: DerivativePositionAmino[];
  /**
   * subaccount_trade_nonces defines the subaccount trade nonces for the
   * subaccounts at genesis
   */
  subaccount_trade_nonces: SubaccountNonceAmino[];
  /**
   * expiry_futures_market_info defines the market info for the expiry futures
   * markets at genesis
   */
  expiry_futures_market_info_state: ExpiryFuturesMarketInfoStateAmino[];
  /**
   * perpetual_market_info defines the market info for the perpetual derivative
   * markets at genesis
   */
  perpetual_market_info: PerpetualMarketInfoAmino[];
  /**
   * perpetual_market_funding_state defines the funding state for the perpetual
   * derivative markets at genesis
   */
  perpetual_market_funding_state: PerpetualMarketFundingStateAmino[];
  derivative_market_settlement_scheduled: DerivativeMarketSettlementInfoAmino[];
  /** sets spot markets as enabled */
  is_spot_exchange_enabled: boolean;
  /** sets derivative markets as enabled */
  is_derivatives_exchange_enabled: boolean;
  /** the current trading reward campaign info */
  trading_reward_campaign_info?: TradingRewardCampaignInfoAmino;
  /** the current and upcoming trading reward campaign pools */
  trading_reward_pool_campaign_schedule: CampaignRewardPoolAmino[];
  trading_reward_campaign_account_points: TradingRewardCampaignAccountPointsAmino[];
  /** the fee discount schedule */
  fee_discount_schedule?: FeeDiscountScheduleAmino;
  /** the cached fee discount account tiers with TTL */
  fee_discount_account_tier_ttl: FeeDiscountAccountTierTTLAmino[];
  fee_discount_bucket_volume_accounts: FeeDiscountBucketVolumeAccountsAmino[];
  /** sets the first fee cycle as finished */
  is_first_fee_cycle_finished: boolean;
  pending_trading_reward_pool_campaign_schedule: CampaignRewardPoolAmino[];
  pending_trading_reward_campaign_account_points: TradingRewardCampaignAccountPendingPointsAmino[];
  /** the addresses opting out of trading rewards */
  rewards_opt_out_addresses: string[];
  historical_trade_records: TradeRecordsAmino[];
  /**
   * binary_options_markets is an array containing the genesis binary options
   * markets
   */
  binary_options_markets: BinaryOptionsMarketAmino[];
  /**
   * binary_options_markets_scheduled_for_settlement contains the marketIDs of
   * binary options markets scheduled for next-block settlement
   */
  binary_options_market_ids_scheduled_for_settlement: string[];
  /**
   * spot_market_ids_scheduled_to_force_close defines the scheduled markets for
   * forced closings at genesis
   */
  spot_market_ids_scheduled_to_force_close: string[];
  /** denom_decimals defines the denom decimals for the exchange. */
  denom_decimals: DenomDecimalsAmino[];
  conditional_derivative_orderbooks: ConditionalDerivativeOrderBookAmino[];
  /**
   * market_fee_multipliers contains any non-default atomic order fee
   * multipliers
   */
  market_fee_multipliers: MarketFeeMultiplierAmino[];
  orderbook_sequences: OrderbookSequenceAmino[];
  subaccount_volumes: AggregateSubaccountVolumeRecordAmino[];
  market_volumes: MarketVolumeAmino[];
  grant_authorizations: FullGrantAuthorizationsAmino[];
  active_grants: FullActiveGrantAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/injective.exchange.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
export interface OrderbookSequence {
  sequence: bigint;
  marketId: string;
}
export interface OrderbookSequenceProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.OrderbookSequence";
  value: Uint8Array;
}
export interface OrderbookSequenceAmino {
  sequence: string;
  market_id: string;
}
export interface OrderbookSequenceAminoMsg {
  type: "/injective.exchange.v1beta1.OrderbookSequence";
  value: OrderbookSequenceAmino;
}
export interface FeeDiscountAccountTierTTL {
  account: string;
  tierTtl?: FeeDiscountTierTTL;
}
export interface FeeDiscountAccountTierTTLProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.FeeDiscountAccountTierTTL";
  value: Uint8Array;
}
export interface FeeDiscountAccountTierTTLAmino {
  account: string;
  tier_ttl?: FeeDiscountTierTTLAmino;
}
export interface FeeDiscountAccountTierTTLAminoMsg {
  type: "/injective.exchange.v1beta1.FeeDiscountAccountTierTTL";
  value: FeeDiscountAccountTierTTLAmino;
}
export interface FeeDiscountBucketVolumeAccounts {
  bucketStartTimestamp: bigint;
  accountVolume: AccountVolume[];
}
export interface FeeDiscountBucketVolumeAccountsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.FeeDiscountBucketVolumeAccounts";
  value: Uint8Array;
}
export interface FeeDiscountBucketVolumeAccountsAmino {
  bucket_start_timestamp: string;
  account_volume: AccountVolumeAmino[];
}
export interface FeeDiscountBucketVolumeAccountsAminoMsg {
  type: "/injective.exchange.v1beta1.FeeDiscountBucketVolumeAccounts";
  value: FeeDiscountBucketVolumeAccountsAmino;
}
export interface AccountVolume {
  account: string;
  volume: string;
}
export interface AccountVolumeProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.AccountVolume";
  value: Uint8Array;
}
export interface AccountVolumeAmino {
  account: string;
  volume: string;
}
export interface AccountVolumeAminoMsg {
  type: "/injective.exchange.v1beta1.AccountVolume";
  value: AccountVolumeAmino;
}
export interface TradingRewardCampaignAccountPoints {
  account: string;
  points: string;
}
export interface TradingRewardCampaignAccountPointsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPoints";
  value: Uint8Array;
}
export interface TradingRewardCampaignAccountPointsAmino {
  account: string;
  points: string;
}
export interface TradingRewardCampaignAccountPointsAminoMsg {
  type: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPoints";
  value: TradingRewardCampaignAccountPointsAmino;
}
export interface TradingRewardCampaignAccountPendingPoints {
  rewardPoolStartTimestamp: bigint;
  accountPoints: TradingRewardCampaignAccountPoints[];
}
export interface TradingRewardCampaignAccountPendingPointsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPendingPoints";
  value: Uint8Array;
}
export interface TradingRewardCampaignAccountPendingPointsAmino {
  reward_pool_start_timestamp: string;
  account_points: TradingRewardCampaignAccountPointsAmino[];
}
export interface TradingRewardCampaignAccountPendingPointsAminoMsg {
  type: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPendingPoints";
  value: TradingRewardCampaignAccountPendingPointsAmino;
}
/** Spot Exchange Limit Orderbook */
export interface SpotOrderBook {
  marketId: string;
  isBuySide: boolean;
  orders: SpotLimitOrder[];
}
export interface SpotOrderBookProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SpotOrderBook";
  value: Uint8Array;
}
/** Spot Exchange Limit Orderbook */
export interface SpotOrderBookAmino {
  market_id: string;
  isBuySide: boolean;
  orders: SpotLimitOrderAmino[];
}
export interface SpotOrderBookAminoMsg {
  type: "/injective.exchange.v1beta1.SpotOrderBook";
  value: SpotOrderBookAmino;
}
/** Derivative Exchange Limit Orderbook */
export interface DerivativeOrderBook {
  marketId: string;
  isBuySide: boolean;
  orders: DerivativeLimitOrder[];
}
export interface DerivativeOrderBookProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DerivativeOrderBook";
  value: Uint8Array;
}
/** Derivative Exchange Limit Orderbook */
export interface DerivativeOrderBookAmino {
  market_id: string;
  isBuySide: boolean;
  orders: DerivativeLimitOrderAmino[];
}
export interface DerivativeOrderBookAminoMsg {
  type: "/injective.exchange.v1beta1.DerivativeOrderBook";
  value: DerivativeOrderBookAmino;
}
/** Orderbook containing limit & market conditional orders */
export interface ConditionalDerivativeOrderBook {
  marketId: string;
  limitBuyOrders: DerivativeLimitOrder[];
  marketBuyOrders: DerivativeMarketOrder[];
  limitSellOrders: DerivativeLimitOrder[];
  marketSellOrders: DerivativeMarketOrder[];
}
export interface ConditionalDerivativeOrderBookProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.ConditionalDerivativeOrderBook";
  value: Uint8Array;
}
/** Orderbook containing limit & market conditional orders */
export interface ConditionalDerivativeOrderBookAmino {
  market_id: string;
  limit_buy_orders: DerivativeLimitOrderAmino[];
  market_buy_orders: DerivativeMarketOrderAmino[];
  limit_sell_orders: DerivativeLimitOrderAmino[];
  market_sell_orders: DerivativeMarketOrderAmino[];
}
export interface ConditionalDerivativeOrderBookAminoMsg {
  type: "/injective.exchange.v1beta1.ConditionalDerivativeOrderBook";
  value: ConditionalDerivativeOrderBookAmino;
}
export interface Balance {
  subaccountId: string;
  denom: string;
  deposits?: Deposit;
}
export interface BalanceProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.Balance";
  value: Uint8Array;
}
export interface BalanceAmino {
  subaccount_id: string;
  denom: string;
  deposits?: DepositAmino;
}
export interface BalanceAminoMsg {
  type: "/injective.exchange.v1beta1.Balance";
  value: BalanceAmino;
}
export interface DerivativePosition {
  subaccountId: string;
  marketId: string;
  position?: Position;
}
export interface DerivativePositionProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DerivativePosition";
  value: Uint8Array;
}
export interface DerivativePositionAmino {
  subaccount_id: string;
  market_id: string;
  position?: PositionAmino;
}
export interface DerivativePositionAminoMsg {
  type: "/injective.exchange.v1beta1.DerivativePosition";
  value: DerivativePositionAmino;
}
export interface SubaccountNonce {
  subaccountId: string;
  subaccountTradeNonce: SubaccountTradeNonce;
}
export interface SubaccountNonceProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SubaccountNonce";
  value: Uint8Array;
}
export interface SubaccountNonceAmino {
  subaccount_id: string;
  subaccount_trade_nonce: SubaccountTradeNonceAmino;
}
export interface SubaccountNonceAminoMsg {
  type: "/injective.exchange.v1beta1.SubaccountNonce";
  value: SubaccountNonceAmino;
}
export interface ExpiryFuturesMarketInfoState {
  marketId: string;
  marketInfo?: ExpiryFuturesMarketInfo;
}
export interface ExpiryFuturesMarketInfoStateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketInfoState";
  value: Uint8Array;
}
export interface ExpiryFuturesMarketInfoStateAmino {
  market_id: string;
  market_info?: ExpiryFuturesMarketInfoAmino;
}
export interface ExpiryFuturesMarketInfoStateAminoMsg {
  type: "/injective.exchange.v1beta1.ExpiryFuturesMarketInfoState";
  value: ExpiryFuturesMarketInfoStateAmino;
}
export interface PerpetualMarketFundingState {
  marketId: string;
  funding?: PerpetualMarketFunding;
}
export interface PerpetualMarketFundingStateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.PerpetualMarketFundingState";
  value: Uint8Array;
}
export interface PerpetualMarketFundingStateAmino {
  market_id: string;
  funding?: PerpetualMarketFundingAmino;
}
export interface PerpetualMarketFundingStateAminoMsg {
  type: "/injective.exchange.v1beta1.PerpetualMarketFundingState";
  value: PerpetualMarketFundingStateAmino;
}
export interface FullGrantAuthorizations {
  granter: string;
  totalGrantAmount: string;
  lastDelegationsCheckedTime: bigint;
  grants: GrantAuthorization[];
}
export interface FullGrantAuthorizationsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.FullGrantAuthorizations";
  value: Uint8Array;
}
export interface FullGrantAuthorizationsAmino {
  granter: string;
  total_grant_amount: string;
  last_delegations_checked_time: string;
  grants: GrantAuthorizationAmino[];
}
export interface FullGrantAuthorizationsAminoMsg {
  type: "/injective.exchange.v1beta1.FullGrantAuthorizations";
  value: FullGrantAuthorizationsAmino;
}
export interface FullActiveGrant {
  grantee: string;
  activeGrant?: ActiveGrant;
}
export interface FullActiveGrantProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.FullActiveGrant";
  value: Uint8Array;
}
export interface FullActiveGrantAmino {
  grantee: string;
  active_grant?: ActiveGrantAmino;
}
export interface FullActiveGrantAminoMsg {
  type: "/injective.exchange.v1beta1.FullActiveGrant";
  value: FullActiveGrantAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    spotMarkets: [],
    derivativeMarkets: [],
    spotOrderbook: [],
    derivativeOrderbook: [],
    balances: [],
    positions: [],
    subaccountTradeNonces: [],
    expiryFuturesMarketInfoState: [],
    perpetualMarketInfo: [],
    perpetualMarketFundingState: [],
    derivativeMarketSettlementScheduled: [],
    isSpotExchangeEnabled: false,
    isDerivativesExchangeEnabled: false,
    tradingRewardCampaignInfo: undefined,
    tradingRewardPoolCampaignSchedule: [],
    tradingRewardCampaignAccountPoints: [],
    feeDiscountSchedule: undefined,
    feeDiscountAccountTierTtl: [],
    feeDiscountBucketVolumeAccounts: [],
    isFirstFeeCycleFinished: false,
    pendingTradingRewardPoolCampaignSchedule: [],
    pendingTradingRewardCampaignAccountPoints: [],
    rewardsOptOutAddresses: [],
    historicalTradeRecords: [],
    binaryOptionsMarkets: [],
    binaryOptionsMarketIdsScheduledForSettlement: [],
    spotMarketIdsScheduledToForceClose: [],
    denomDecimals: [],
    conditionalDerivativeOrderbooks: [],
    marketFeeMultipliers: [],
    orderbookSequences: [],
    subaccountVolumes: [],
    marketVolumes: [],
    grantAuthorizations: [],
    activeGrants: []
  };
}
export const GenesisState = {
  typeUrl: "/injective.exchange.v1beta1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.spotMarkets) && (!o.spotMarkets.length || SpotMarket.is(o.spotMarkets[0])) && Array.isArray(o.derivativeMarkets) && (!o.derivativeMarkets.length || DerivativeMarket.is(o.derivativeMarkets[0])) && Array.isArray(o.spotOrderbook) && (!o.spotOrderbook.length || SpotOrderBook.is(o.spotOrderbook[0])) && Array.isArray(o.derivativeOrderbook) && (!o.derivativeOrderbook.length || DerivativeOrderBook.is(o.derivativeOrderbook[0])) && Array.isArray(o.balances) && (!o.balances.length || Balance.is(o.balances[0])) && Array.isArray(o.positions) && (!o.positions.length || DerivativePosition.is(o.positions[0])) && Array.isArray(o.subaccountTradeNonces) && (!o.subaccountTradeNonces.length || SubaccountNonce.is(o.subaccountTradeNonces[0])) && Array.isArray(o.expiryFuturesMarketInfoState) && (!o.expiryFuturesMarketInfoState.length || ExpiryFuturesMarketInfoState.is(o.expiryFuturesMarketInfoState[0])) && Array.isArray(o.perpetualMarketInfo) && (!o.perpetualMarketInfo.length || PerpetualMarketInfo.is(o.perpetualMarketInfo[0])) && Array.isArray(o.perpetualMarketFundingState) && (!o.perpetualMarketFundingState.length || PerpetualMarketFundingState.is(o.perpetualMarketFundingState[0])) && Array.isArray(o.derivativeMarketSettlementScheduled) && (!o.derivativeMarketSettlementScheduled.length || DerivativeMarketSettlementInfo.is(o.derivativeMarketSettlementScheduled[0])) && typeof o.isSpotExchangeEnabled === "boolean" && typeof o.isDerivativesExchangeEnabled === "boolean" && Array.isArray(o.tradingRewardPoolCampaignSchedule) && (!o.tradingRewardPoolCampaignSchedule.length || CampaignRewardPool.is(o.tradingRewardPoolCampaignSchedule[0])) && Array.isArray(o.tradingRewardCampaignAccountPoints) && (!o.tradingRewardCampaignAccountPoints.length || TradingRewardCampaignAccountPoints.is(o.tradingRewardCampaignAccountPoints[0])) && Array.isArray(o.feeDiscountAccountTierTtl) && (!o.feeDiscountAccountTierTtl.length || FeeDiscountAccountTierTTL.is(o.feeDiscountAccountTierTtl[0])) && Array.isArray(o.feeDiscountBucketVolumeAccounts) && (!o.feeDiscountBucketVolumeAccounts.length || FeeDiscountBucketVolumeAccounts.is(o.feeDiscountBucketVolumeAccounts[0])) && typeof o.isFirstFeeCycleFinished === "boolean" && Array.isArray(o.pendingTradingRewardPoolCampaignSchedule) && (!o.pendingTradingRewardPoolCampaignSchedule.length || CampaignRewardPool.is(o.pendingTradingRewardPoolCampaignSchedule[0])) && Array.isArray(o.pendingTradingRewardCampaignAccountPoints) && (!o.pendingTradingRewardCampaignAccountPoints.length || TradingRewardCampaignAccountPendingPoints.is(o.pendingTradingRewardCampaignAccountPoints[0])) && Array.isArray(o.rewardsOptOutAddresses) && (!o.rewardsOptOutAddresses.length || typeof o.rewardsOptOutAddresses[0] === "string") && Array.isArray(o.historicalTradeRecords) && (!o.historicalTradeRecords.length || TradeRecords.is(o.historicalTradeRecords[0])) && Array.isArray(o.binaryOptionsMarkets) && (!o.binaryOptionsMarkets.length || BinaryOptionsMarket.is(o.binaryOptionsMarkets[0])) && Array.isArray(o.binaryOptionsMarketIdsScheduledForSettlement) && (!o.binaryOptionsMarketIdsScheduledForSettlement.length || typeof o.binaryOptionsMarketIdsScheduledForSettlement[0] === "string") && Array.isArray(o.spotMarketIdsScheduledToForceClose) && (!o.spotMarketIdsScheduledToForceClose.length || typeof o.spotMarketIdsScheduledToForceClose[0] === "string") && Array.isArray(o.denomDecimals) && (!o.denomDecimals.length || DenomDecimals.is(o.denomDecimals[0])) && Array.isArray(o.conditionalDerivativeOrderbooks) && (!o.conditionalDerivativeOrderbooks.length || ConditionalDerivativeOrderBook.is(o.conditionalDerivativeOrderbooks[0])) && Array.isArray(o.marketFeeMultipliers) && (!o.marketFeeMultipliers.length || MarketFeeMultiplier.is(o.marketFeeMultipliers[0])) && Array.isArray(o.orderbookSequences) && (!o.orderbookSequences.length || OrderbookSequence.is(o.orderbookSequences[0])) && Array.isArray(o.subaccountVolumes) && (!o.subaccountVolumes.length || AggregateSubaccountVolumeRecord.is(o.subaccountVolumes[0])) && Array.isArray(o.marketVolumes) && (!o.marketVolumes.length || MarketVolume.is(o.marketVolumes[0])) && Array.isArray(o.grantAuthorizations) && (!o.grantAuthorizations.length || FullGrantAuthorizations.is(o.grantAuthorizations[0])) && Array.isArray(o.activeGrants) && (!o.activeGrants.length || FullActiveGrant.is(o.activeGrants[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.spot_markets) && (!o.spot_markets.length || SpotMarket.isAmino(o.spot_markets[0])) && Array.isArray(o.derivative_markets) && (!o.derivative_markets.length || DerivativeMarket.isAmino(o.derivative_markets[0])) && Array.isArray(o.spot_orderbook) && (!o.spot_orderbook.length || SpotOrderBook.isAmino(o.spot_orderbook[0])) && Array.isArray(o.derivative_orderbook) && (!o.derivative_orderbook.length || DerivativeOrderBook.isAmino(o.derivative_orderbook[0])) && Array.isArray(o.balances) && (!o.balances.length || Balance.isAmino(o.balances[0])) && Array.isArray(o.positions) && (!o.positions.length || DerivativePosition.isAmino(o.positions[0])) && Array.isArray(o.subaccount_trade_nonces) && (!o.subaccount_trade_nonces.length || SubaccountNonce.isAmino(o.subaccount_trade_nonces[0])) && Array.isArray(o.expiry_futures_market_info_state) && (!o.expiry_futures_market_info_state.length || ExpiryFuturesMarketInfoState.isAmino(o.expiry_futures_market_info_state[0])) && Array.isArray(o.perpetual_market_info) && (!o.perpetual_market_info.length || PerpetualMarketInfo.isAmino(o.perpetual_market_info[0])) && Array.isArray(o.perpetual_market_funding_state) && (!o.perpetual_market_funding_state.length || PerpetualMarketFundingState.isAmino(o.perpetual_market_funding_state[0])) && Array.isArray(o.derivative_market_settlement_scheduled) && (!o.derivative_market_settlement_scheduled.length || DerivativeMarketSettlementInfo.isAmino(o.derivative_market_settlement_scheduled[0])) && typeof o.is_spot_exchange_enabled === "boolean" && typeof o.is_derivatives_exchange_enabled === "boolean" && Array.isArray(o.trading_reward_pool_campaign_schedule) && (!o.trading_reward_pool_campaign_schedule.length || CampaignRewardPool.isAmino(o.trading_reward_pool_campaign_schedule[0])) && Array.isArray(o.trading_reward_campaign_account_points) && (!o.trading_reward_campaign_account_points.length || TradingRewardCampaignAccountPoints.isAmino(o.trading_reward_campaign_account_points[0])) && Array.isArray(o.fee_discount_account_tier_ttl) && (!o.fee_discount_account_tier_ttl.length || FeeDiscountAccountTierTTL.isAmino(o.fee_discount_account_tier_ttl[0])) && Array.isArray(o.fee_discount_bucket_volume_accounts) && (!o.fee_discount_bucket_volume_accounts.length || FeeDiscountBucketVolumeAccounts.isAmino(o.fee_discount_bucket_volume_accounts[0])) && typeof o.is_first_fee_cycle_finished === "boolean" && Array.isArray(o.pending_trading_reward_pool_campaign_schedule) && (!o.pending_trading_reward_pool_campaign_schedule.length || CampaignRewardPool.isAmino(o.pending_trading_reward_pool_campaign_schedule[0])) && Array.isArray(o.pending_trading_reward_campaign_account_points) && (!o.pending_trading_reward_campaign_account_points.length || TradingRewardCampaignAccountPendingPoints.isAmino(o.pending_trading_reward_campaign_account_points[0])) && Array.isArray(o.rewards_opt_out_addresses) && (!o.rewards_opt_out_addresses.length || typeof o.rewards_opt_out_addresses[0] === "string") && Array.isArray(o.historical_trade_records) && (!o.historical_trade_records.length || TradeRecords.isAmino(o.historical_trade_records[0])) && Array.isArray(o.binary_options_markets) && (!o.binary_options_markets.length || BinaryOptionsMarket.isAmino(o.binary_options_markets[0])) && Array.isArray(o.binary_options_market_ids_scheduled_for_settlement) && (!o.binary_options_market_ids_scheduled_for_settlement.length || typeof o.binary_options_market_ids_scheduled_for_settlement[0] === "string") && Array.isArray(o.spot_market_ids_scheduled_to_force_close) && (!o.spot_market_ids_scheduled_to_force_close.length || typeof o.spot_market_ids_scheduled_to_force_close[0] === "string") && Array.isArray(o.denom_decimals) && (!o.denom_decimals.length || DenomDecimals.isAmino(o.denom_decimals[0])) && Array.isArray(o.conditional_derivative_orderbooks) && (!o.conditional_derivative_orderbooks.length || ConditionalDerivativeOrderBook.isAmino(o.conditional_derivative_orderbooks[0])) && Array.isArray(o.market_fee_multipliers) && (!o.market_fee_multipliers.length || MarketFeeMultiplier.isAmino(o.market_fee_multipliers[0])) && Array.isArray(o.orderbook_sequences) && (!o.orderbook_sequences.length || OrderbookSequence.isAmino(o.orderbook_sequences[0])) && Array.isArray(o.subaccount_volumes) && (!o.subaccount_volumes.length || AggregateSubaccountVolumeRecord.isAmino(o.subaccount_volumes[0])) && Array.isArray(o.market_volumes) && (!o.market_volumes.length || MarketVolume.isAmino(o.market_volumes[0])) && Array.isArray(o.grant_authorizations) && (!o.grant_authorizations.length || FullGrantAuthorizations.isAmino(o.grant_authorizations[0])) && Array.isArray(o.active_grants) && (!o.active_grants.length || FullActiveGrant.isAmino(o.active_grants[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.spotMarkets) {
      SpotMarket.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.derivativeMarkets) {
      DerivativeMarket.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.spotOrderbook) {
      SpotOrderBook.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.derivativeOrderbook) {
      DerivativeOrderBook.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.balances) {
      Balance.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.positions) {
      DerivativePosition.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.subaccountTradeNonces) {
      SubaccountNonce.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.expiryFuturesMarketInfoState) {
      ExpiryFuturesMarketInfoState.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.perpetualMarketInfo) {
      PerpetualMarketInfo.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.perpetualMarketFundingState) {
      PerpetualMarketFundingState.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.derivativeMarketSettlementScheduled) {
      DerivativeMarketSettlementInfo.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.isSpotExchangeEnabled === true) {
      writer.uint32(104).bool(message.isSpotExchangeEnabled);
    }
    if (message.isDerivativesExchangeEnabled === true) {
      writer.uint32(112).bool(message.isDerivativesExchangeEnabled);
    }
    if (message.tradingRewardCampaignInfo !== undefined) {
      TradingRewardCampaignInfo.encode(message.tradingRewardCampaignInfo, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.tradingRewardPoolCampaignSchedule) {
      CampaignRewardPool.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.tradingRewardCampaignAccountPoints) {
      TradingRewardCampaignAccountPoints.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    if (message.feeDiscountSchedule !== undefined) {
      FeeDiscountSchedule.encode(message.feeDiscountSchedule, writer.uint32(146).fork()).ldelim();
    }
    for (const v of message.feeDiscountAccountTierTtl) {
      FeeDiscountAccountTierTTL.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    for (const v of message.feeDiscountBucketVolumeAccounts) {
      FeeDiscountBucketVolumeAccounts.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    if (message.isFirstFeeCycleFinished === true) {
      writer.uint32(168).bool(message.isFirstFeeCycleFinished);
    }
    for (const v of message.pendingTradingRewardPoolCampaignSchedule) {
      CampaignRewardPool.encode(v!, writer.uint32(178).fork()).ldelim();
    }
    for (const v of message.pendingTradingRewardCampaignAccountPoints) {
      TradingRewardCampaignAccountPendingPoints.encode(v!, writer.uint32(186).fork()).ldelim();
    }
    for (const v of message.rewardsOptOutAddresses) {
      writer.uint32(194).string(v!);
    }
    for (const v of message.historicalTradeRecords) {
      TradeRecords.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    for (const v of message.binaryOptionsMarkets) {
      BinaryOptionsMarket.encode(v!, writer.uint32(210).fork()).ldelim();
    }
    for (const v of message.binaryOptionsMarketIdsScheduledForSettlement) {
      writer.uint32(218).string(v!);
    }
    for (const v of message.spotMarketIdsScheduledToForceClose) {
      writer.uint32(226).string(v!);
    }
    for (const v of message.denomDecimals) {
      DenomDecimals.encode(v!, writer.uint32(234).fork()).ldelim();
    }
    for (const v of message.conditionalDerivativeOrderbooks) {
      ConditionalDerivativeOrderBook.encode(v!, writer.uint32(242).fork()).ldelim();
    }
    for (const v of message.marketFeeMultipliers) {
      MarketFeeMultiplier.encode(v!, writer.uint32(250).fork()).ldelim();
    }
    for (const v of message.orderbookSequences) {
      OrderbookSequence.encode(v!, writer.uint32(258).fork()).ldelim();
    }
    for (const v of message.subaccountVolumes) {
      AggregateSubaccountVolumeRecord.encode(v!, writer.uint32(266).fork()).ldelim();
    }
    for (const v of message.marketVolumes) {
      MarketVolume.encode(v!, writer.uint32(274).fork()).ldelim();
    }
    for (const v of message.grantAuthorizations) {
      FullGrantAuthorizations.encode(v!, writer.uint32(282).fork()).ldelim();
    }
    for (const v of message.activeGrants) {
      FullActiveGrant.encode(v!, writer.uint32(290).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.spotMarkets.push(SpotMarket.decode(reader, reader.uint32()));
          break;
        case 3:
          message.derivativeMarkets.push(DerivativeMarket.decode(reader, reader.uint32()));
          break;
        case 4:
          message.spotOrderbook.push(SpotOrderBook.decode(reader, reader.uint32()));
          break;
        case 5:
          message.derivativeOrderbook.push(DerivativeOrderBook.decode(reader, reader.uint32()));
          break;
        case 6:
          message.balances.push(Balance.decode(reader, reader.uint32()));
          break;
        case 7:
          message.positions.push(DerivativePosition.decode(reader, reader.uint32()));
          break;
        case 8:
          message.subaccountTradeNonces.push(SubaccountNonce.decode(reader, reader.uint32()));
          break;
        case 9:
          message.expiryFuturesMarketInfoState.push(ExpiryFuturesMarketInfoState.decode(reader, reader.uint32()));
          break;
        case 10:
          message.perpetualMarketInfo.push(PerpetualMarketInfo.decode(reader, reader.uint32()));
          break;
        case 11:
          message.perpetualMarketFundingState.push(PerpetualMarketFundingState.decode(reader, reader.uint32()));
          break;
        case 12:
          message.derivativeMarketSettlementScheduled.push(DerivativeMarketSettlementInfo.decode(reader, reader.uint32()));
          break;
        case 13:
          message.isSpotExchangeEnabled = reader.bool();
          break;
        case 14:
          message.isDerivativesExchangeEnabled = reader.bool();
          break;
        case 15:
          message.tradingRewardCampaignInfo = TradingRewardCampaignInfo.decode(reader, reader.uint32());
          break;
        case 16:
          message.tradingRewardPoolCampaignSchedule.push(CampaignRewardPool.decode(reader, reader.uint32()));
          break;
        case 17:
          message.tradingRewardCampaignAccountPoints.push(TradingRewardCampaignAccountPoints.decode(reader, reader.uint32()));
          break;
        case 18:
          message.feeDiscountSchedule = FeeDiscountSchedule.decode(reader, reader.uint32());
          break;
        case 19:
          message.feeDiscountAccountTierTtl.push(FeeDiscountAccountTierTTL.decode(reader, reader.uint32()));
          break;
        case 20:
          message.feeDiscountBucketVolumeAccounts.push(FeeDiscountBucketVolumeAccounts.decode(reader, reader.uint32()));
          break;
        case 21:
          message.isFirstFeeCycleFinished = reader.bool();
          break;
        case 22:
          message.pendingTradingRewardPoolCampaignSchedule.push(CampaignRewardPool.decode(reader, reader.uint32()));
          break;
        case 23:
          message.pendingTradingRewardCampaignAccountPoints.push(TradingRewardCampaignAccountPendingPoints.decode(reader, reader.uint32()));
          break;
        case 24:
          message.rewardsOptOutAddresses.push(reader.string());
          break;
        case 25:
          message.historicalTradeRecords.push(TradeRecords.decode(reader, reader.uint32()));
          break;
        case 26:
          message.binaryOptionsMarkets.push(BinaryOptionsMarket.decode(reader, reader.uint32()));
          break;
        case 27:
          message.binaryOptionsMarketIdsScheduledForSettlement.push(reader.string());
          break;
        case 28:
          message.spotMarketIdsScheduledToForceClose.push(reader.string());
          break;
        case 29:
          message.denomDecimals.push(DenomDecimals.decode(reader, reader.uint32()));
          break;
        case 30:
          message.conditionalDerivativeOrderbooks.push(ConditionalDerivativeOrderBook.decode(reader, reader.uint32()));
          break;
        case 31:
          message.marketFeeMultipliers.push(MarketFeeMultiplier.decode(reader, reader.uint32()));
          break;
        case 32:
          message.orderbookSequences.push(OrderbookSequence.decode(reader, reader.uint32()));
          break;
        case 33:
          message.subaccountVolumes.push(AggregateSubaccountVolumeRecord.decode(reader, reader.uint32()));
          break;
        case 34:
          message.marketVolumes.push(MarketVolume.decode(reader, reader.uint32()));
          break;
        case 35:
          message.grantAuthorizations.push(FullGrantAuthorizations.decode(reader, reader.uint32()));
          break;
        case 36:
          message.activeGrants.push(FullActiveGrant.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.spotMarkets = object.spotMarkets?.map(e => SpotMarket.fromPartial(e)) || [];
    message.derivativeMarkets = object.derivativeMarkets?.map(e => DerivativeMarket.fromPartial(e)) || [];
    message.spotOrderbook = object.spotOrderbook?.map(e => SpotOrderBook.fromPartial(e)) || [];
    message.derivativeOrderbook = object.derivativeOrderbook?.map(e => DerivativeOrderBook.fromPartial(e)) || [];
    message.balances = object.balances?.map(e => Balance.fromPartial(e)) || [];
    message.positions = object.positions?.map(e => DerivativePosition.fromPartial(e)) || [];
    message.subaccountTradeNonces = object.subaccountTradeNonces?.map(e => SubaccountNonce.fromPartial(e)) || [];
    message.expiryFuturesMarketInfoState = object.expiryFuturesMarketInfoState?.map(e => ExpiryFuturesMarketInfoState.fromPartial(e)) || [];
    message.perpetualMarketInfo = object.perpetualMarketInfo?.map(e => PerpetualMarketInfo.fromPartial(e)) || [];
    message.perpetualMarketFundingState = object.perpetualMarketFundingState?.map(e => PerpetualMarketFundingState.fromPartial(e)) || [];
    message.derivativeMarketSettlementScheduled = object.derivativeMarketSettlementScheduled?.map(e => DerivativeMarketSettlementInfo.fromPartial(e)) || [];
    message.isSpotExchangeEnabled = object.isSpotExchangeEnabled ?? false;
    message.isDerivativesExchangeEnabled = object.isDerivativesExchangeEnabled ?? false;
    message.tradingRewardCampaignInfo = object.tradingRewardCampaignInfo !== undefined && object.tradingRewardCampaignInfo !== null ? TradingRewardCampaignInfo.fromPartial(object.tradingRewardCampaignInfo) : undefined;
    message.tradingRewardPoolCampaignSchedule = object.tradingRewardPoolCampaignSchedule?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    message.tradingRewardCampaignAccountPoints = object.tradingRewardCampaignAccountPoints?.map(e => TradingRewardCampaignAccountPoints.fromPartial(e)) || [];
    message.feeDiscountSchedule = object.feeDiscountSchedule !== undefined && object.feeDiscountSchedule !== null ? FeeDiscountSchedule.fromPartial(object.feeDiscountSchedule) : undefined;
    message.feeDiscountAccountTierTtl = object.feeDiscountAccountTierTtl?.map(e => FeeDiscountAccountTierTTL.fromPartial(e)) || [];
    message.feeDiscountBucketVolumeAccounts = object.feeDiscountBucketVolumeAccounts?.map(e => FeeDiscountBucketVolumeAccounts.fromPartial(e)) || [];
    message.isFirstFeeCycleFinished = object.isFirstFeeCycleFinished ?? false;
    message.pendingTradingRewardPoolCampaignSchedule = object.pendingTradingRewardPoolCampaignSchedule?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    message.pendingTradingRewardCampaignAccountPoints = object.pendingTradingRewardCampaignAccountPoints?.map(e => TradingRewardCampaignAccountPendingPoints.fromPartial(e)) || [];
    message.rewardsOptOutAddresses = object.rewardsOptOutAddresses?.map(e => e) || [];
    message.historicalTradeRecords = object.historicalTradeRecords?.map(e => TradeRecords.fromPartial(e)) || [];
    message.binaryOptionsMarkets = object.binaryOptionsMarkets?.map(e => BinaryOptionsMarket.fromPartial(e)) || [];
    message.binaryOptionsMarketIdsScheduledForSettlement = object.binaryOptionsMarketIdsScheduledForSettlement?.map(e => e) || [];
    message.spotMarketIdsScheduledToForceClose = object.spotMarketIdsScheduledToForceClose?.map(e => e) || [];
    message.denomDecimals = object.denomDecimals?.map(e => DenomDecimals.fromPartial(e)) || [];
    message.conditionalDerivativeOrderbooks = object.conditionalDerivativeOrderbooks?.map(e => ConditionalDerivativeOrderBook.fromPartial(e)) || [];
    message.marketFeeMultipliers = object.marketFeeMultipliers?.map(e => MarketFeeMultiplier.fromPartial(e)) || [];
    message.orderbookSequences = object.orderbookSequences?.map(e => OrderbookSequence.fromPartial(e)) || [];
    message.subaccountVolumes = object.subaccountVolumes?.map(e => AggregateSubaccountVolumeRecord.fromPartial(e)) || [];
    message.marketVolumes = object.marketVolumes?.map(e => MarketVolume.fromPartial(e)) || [];
    message.grantAuthorizations = object.grantAuthorizations?.map(e => FullGrantAuthorizations.fromPartial(e)) || [];
    message.activeGrants = object.activeGrants?.map(e => FullActiveGrant.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.spotMarkets = object.spot_markets?.map(e => SpotMarket.fromAmino(e)) || [];
    message.derivativeMarkets = object.derivative_markets?.map(e => DerivativeMarket.fromAmino(e)) || [];
    message.spotOrderbook = object.spot_orderbook?.map(e => SpotOrderBook.fromAmino(e)) || [];
    message.derivativeOrderbook = object.derivative_orderbook?.map(e => DerivativeOrderBook.fromAmino(e)) || [];
    message.balances = object.balances?.map(e => Balance.fromAmino(e)) || [];
    message.positions = object.positions?.map(e => DerivativePosition.fromAmino(e)) || [];
    message.subaccountTradeNonces = object.subaccount_trade_nonces?.map(e => SubaccountNonce.fromAmino(e)) || [];
    message.expiryFuturesMarketInfoState = object.expiry_futures_market_info_state?.map(e => ExpiryFuturesMarketInfoState.fromAmino(e)) || [];
    message.perpetualMarketInfo = object.perpetual_market_info?.map(e => PerpetualMarketInfo.fromAmino(e)) || [];
    message.perpetualMarketFundingState = object.perpetual_market_funding_state?.map(e => PerpetualMarketFundingState.fromAmino(e)) || [];
    message.derivativeMarketSettlementScheduled = object.derivative_market_settlement_scheduled?.map(e => DerivativeMarketSettlementInfo.fromAmino(e)) || [];
    if (object.is_spot_exchange_enabled !== undefined && object.is_spot_exchange_enabled !== null) {
      message.isSpotExchangeEnabled = object.is_spot_exchange_enabled;
    }
    if (object.is_derivatives_exchange_enabled !== undefined && object.is_derivatives_exchange_enabled !== null) {
      message.isDerivativesExchangeEnabled = object.is_derivatives_exchange_enabled;
    }
    if (object.trading_reward_campaign_info !== undefined && object.trading_reward_campaign_info !== null) {
      message.tradingRewardCampaignInfo = TradingRewardCampaignInfo.fromAmino(object.trading_reward_campaign_info);
    }
    message.tradingRewardPoolCampaignSchedule = object.trading_reward_pool_campaign_schedule?.map(e => CampaignRewardPool.fromAmino(e)) || [];
    message.tradingRewardCampaignAccountPoints = object.trading_reward_campaign_account_points?.map(e => TradingRewardCampaignAccountPoints.fromAmino(e)) || [];
    if (object.fee_discount_schedule !== undefined && object.fee_discount_schedule !== null) {
      message.feeDiscountSchedule = FeeDiscountSchedule.fromAmino(object.fee_discount_schedule);
    }
    message.feeDiscountAccountTierTtl = object.fee_discount_account_tier_ttl?.map(e => FeeDiscountAccountTierTTL.fromAmino(e)) || [];
    message.feeDiscountBucketVolumeAccounts = object.fee_discount_bucket_volume_accounts?.map(e => FeeDiscountBucketVolumeAccounts.fromAmino(e)) || [];
    if (object.is_first_fee_cycle_finished !== undefined && object.is_first_fee_cycle_finished !== null) {
      message.isFirstFeeCycleFinished = object.is_first_fee_cycle_finished;
    }
    message.pendingTradingRewardPoolCampaignSchedule = object.pending_trading_reward_pool_campaign_schedule?.map(e => CampaignRewardPool.fromAmino(e)) || [];
    message.pendingTradingRewardCampaignAccountPoints = object.pending_trading_reward_campaign_account_points?.map(e => TradingRewardCampaignAccountPendingPoints.fromAmino(e)) || [];
    message.rewardsOptOutAddresses = object.rewards_opt_out_addresses?.map(e => e) || [];
    message.historicalTradeRecords = object.historical_trade_records?.map(e => TradeRecords.fromAmino(e)) || [];
    message.binaryOptionsMarkets = object.binary_options_markets?.map(e => BinaryOptionsMarket.fromAmino(e)) || [];
    message.binaryOptionsMarketIdsScheduledForSettlement = object.binary_options_market_ids_scheduled_for_settlement?.map(e => e) || [];
    message.spotMarketIdsScheduledToForceClose = object.spot_market_ids_scheduled_to_force_close?.map(e => e) || [];
    message.denomDecimals = object.denom_decimals?.map(e => DenomDecimals.fromAmino(e)) || [];
    message.conditionalDerivativeOrderbooks = object.conditional_derivative_orderbooks?.map(e => ConditionalDerivativeOrderBook.fromAmino(e)) || [];
    message.marketFeeMultipliers = object.market_fee_multipliers?.map(e => MarketFeeMultiplier.fromAmino(e)) || [];
    message.orderbookSequences = object.orderbook_sequences?.map(e => OrderbookSequence.fromAmino(e)) || [];
    message.subaccountVolumes = object.subaccount_volumes?.map(e => AggregateSubaccountVolumeRecord.fromAmino(e)) || [];
    message.marketVolumes = object.market_volumes?.map(e => MarketVolume.fromAmino(e)) || [];
    message.grantAuthorizations = object.grant_authorizations?.map(e => FullGrantAuthorizations.fromAmino(e)) || [];
    message.activeGrants = object.active_grants?.map(e => FullActiveGrant.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.spotMarkets) {
      obj.spot_markets = message.spotMarkets.map(e => e ? SpotMarket.toAmino(e) : undefined);
    } else {
      obj.spot_markets = message.spotMarkets;
    }
    if (message.derivativeMarkets) {
      obj.derivative_markets = message.derivativeMarkets.map(e => e ? DerivativeMarket.toAmino(e) : undefined);
    } else {
      obj.derivative_markets = message.derivativeMarkets;
    }
    if (message.spotOrderbook) {
      obj.spot_orderbook = message.spotOrderbook.map(e => e ? SpotOrderBook.toAmino(e) : undefined);
    } else {
      obj.spot_orderbook = message.spotOrderbook;
    }
    if (message.derivativeOrderbook) {
      obj.derivative_orderbook = message.derivativeOrderbook.map(e => e ? DerivativeOrderBook.toAmino(e) : undefined);
    } else {
      obj.derivative_orderbook = message.derivativeOrderbook;
    }
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? Balance.toAmino(e) : undefined);
    } else {
      obj.balances = message.balances;
    }
    if (message.positions) {
      obj.positions = message.positions.map(e => e ? DerivativePosition.toAmino(e) : undefined);
    } else {
      obj.positions = message.positions;
    }
    if (message.subaccountTradeNonces) {
      obj.subaccount_trade_nonces = message.subaccountTradeNonces.map(e => e ? SubaccountNonce.toAmino(e) : undefined);
    } else {
      obj.subaccount_trade_nonces = message.subaccountTradeNonces;
    }
    if (message.expiryFuturesMarketInfoState) {
      obj.expiry_futures_market_info_state = message.expiryFuturesMarketInfoState.map(e => e ? ExpiryFuturesMarketInfoState.toAmino(e) : undefined);
    } else {
      obj.expiry_futures_market_info_state = message.expiryFuturesMarketInfoState;
    }
    if (message.perpetualMarketInfo) {
      obj.perpetual_market_info = message.perpetualMarketInfo.map(e => e ? PerpetualMarketInfo.toAmino(e) : undefined);
    } else {
      obj.perpetual_market_info = message.perpetualMarketInfo;
    }
    if (message.perpetualMarketFundingState) {
      obj.perpetual_market_funding_state = message.perpetualMarketFundingState.map(e => e ? PerpetualMarketFundingState.toAmino(e) : undefined);
    } else {
      obj.perpetual_market_funding_state = message.perpetualMarketFundingState;
    }
    if (message.derivativeMarketSettlementScheduled) {
      obj.derivative_market_settlement_scheduled = message.derivativeMarketSettlementScheduled.map(e => e ? DerivativeMarketSettlementInfo.toAmino(e) : undefined);
    } else {
      obj.derivative_market_settlement_scheduled = message.derivativeMarketSettlementScheduled;
    }
    obj.is_spot_exchange_enabled = message.isSpotExchangeEnabled === false ? undefined : message.isSpotExchangeEnabled;
    obj.is_derivatives_exchange_enabled = message.isDerivativesExchangeEnabled === false ? undefined : message.isDerivativesExchangeEnabled;
    obj.trading_reward_campaign_info = message.tradingRewardCampaignInfo ? TradingRewardCampaignInfo.toAmino(message.tradingRewardCampaignInfo) : undefined;
    if (message.tradingRewardPoolCampaignSchedule) {
      obj.trading_reward_pool_campaign_schedule = message.tradingRewardPoolCampaignSchedule.map(e => e ? CampaignRewardPool.toAmino(e) : undefined);
    } else {
      obj.trading_reward_pool_campaign_schedule = message.tradingRewardPoolCampaignSchedule;
    }
    if (message.tradingRewardCampaignAccountPoints) {
      obj.trading_reward_campaign_account_points = message.tradingRewardCampaignAccountPoints.map(e => e ? TradingRewardCampaignAccountPoints.toAmino(e) : undefined);
    } else {
      obj.trading_reward_campaign_account_points = message.tradingRewardCampaignAccountPoints;
    }
    obj.fee_discount_schedule = message.feeDiscountSchedule ? FeeDiscountSchedule.toAmino(message.feeDiscountSchedule) : undefined;
    if (message.feeDiscountAccountTierTtl) {
      obj.fee_discount_account_tier_ttl = message.feeDiscountAccountTierTtl.map(e => e ? FeeDiscountAccountTierTTL.toAmino(e) : undefined);
    } else {
      obj.fee_discount_account_tier_ttl = message.feeDiscountAccountTierTtl;
    }
    if (message.feeDiscountBucketVolumeAccounts) {
      obj.fee_discount_bucket_volume_accounts = message.feeDiscountBucketVolumeAccounts.map(e => e ? FeeDiscountBucketVolumeAccounts.toAmino(e) : undefined);
    } else {
      obj.fee_discount_bucket_volume_accounts = message.feeDiscountBucketVolumeAccounts;
    }
    obj.is_first_fee_cycle_finished = message.isFirstFeeCycleFinished === false ? undefined : message.isFirstFeeCycleFinished;
    if (message.pendingTradingRewardPoolCampaignSchedule) {
      obj.pending_trading_reward_pool_campaign_schedule = message.pendingTradingRewardPoolCampaignSchedule.map(e => e ? CampaignRewardPool.toAmino(e) : undefined);
    } else {
      obj.pending_trading_reward_pool_campaign_schedule = message.pendingTradingRewardPoolCampaignSchedule;
    }
    if (message.pendingTradingRewardCampaignAccountPoints) {
      obj.pending_trading_reward_campaign_account_points = message.pendingTradingRewardCampaignAccountPoints.map(e => e ? TradingRewardCampaignAccountPendingPoints.toAmino(e) : undefined);
    } else {
      obj.pending_trading_reward_campaign_account_points = message.pendingTradingRewardCampaignAccountPoints;
    }
    if (message.rewardsOptOutAddresses) {
      obj.rewards_opt_out_addresses = message.rewardsOptOutAddresses.map(e => e);
    } else {
      obj.rewards_opt_out_addresses = message.rewardsOptOutAddresses;
    }
    if (message.historicalTradeRecords) {
      obj.historical_trade_records = message.historicalTradeRecords.map(e => e ? TradeRecords.toAmino(e) : undefined);
    } else {
      obj.historical_trade_records = message.historicalTradeRecords;
    }
    if (message.binaryOptionsMarkets) {
      obj.binary_options_markets = message.binaryOptionsMarkets.map(e => e ? BinaryOptionsMarket.toAmino(e) : undefined);
    } else {
      obj.binary_options_markets = message.binaryOptionsMarkets;
    }
    if (message.binaryOptionsMarketIdsScheduledForSettlement) {
      obj.binary_options_market_ids_scheduled_for_settlement = message.binaryOptionsMarketIdsScheduledForSettlement.map(e => e);
    } else {
      obj.binary_options_market_ids_scheduled_for_settlement = message.binaryOptionsMarketIdsScheduledForSettlement;
    }
    if (message.spotMarketIdsScheduledToForceClose) {
      obj.spot_market_ids_scheduled_to_force_close = message.spotMarketIdsScheduledToForceClose.map(e => e);
    } else {
      obj.spot_market_ids_scheduled_to_force_close = message.spotMarketIdsScheduledToForceClose;
    }
    if (message.denomDecimals) {
      obj.denom_decimals = message.denomDecimals.map(e => e ? DenomDecimals.toAmino(e) : undefined);
    } else {
      obj.denom_decimals = message.denomDecimals;
    }
    if (message.conditionalDerivativeOrderbooks) {
      obj.conditional_derivative_orderbooks = message.conditionalDerivativeOrderbooks.map(e => e ? ConditionalDerivativeOrderBook.toAmino(e) : undefined);
    } else {
      obj.conditional_derivative_orderbooks = message.conditionalDerivativeOrderbooks;
    }
    if (message.marketFeeMultipliers) {
      obj.market_fee_multipliers = message.marketFeeMultipliers.map(e => e ? MarketFeeMultiplier.toAmino(e) : undefined);
    } else {
      obj.market_fee_multipliers = message.marketFeeMultipliers;
    }
    if (message.orderbookSequences) {
      obj.orderbook_sequences = message.orderbookSequences.map(e => e ? OrderbookSequence.toAmino(e) : undefined);
    } else {
      obj.orderbook_sequences = message.orderbookSequences;
    }
    if (message.subaccountVolumes) {
      obj.subaccount_volumes = message.subaccountVolumes.map(e => e ? AggregateSubaccountVolumeRecord.toAmino(e) : undefined);
    } else {
      obj.subaccount_volumes = message.subaccountVolumes;
    }
    if (message.marketVolumes) {
      obj.market_volumes = message.marketVolumes.map(e => e ? MarketVolume.toAmino(e) : undefined);
    } else {
      obj.market_volumes = message.marketVolumes;
    }
    if (message.grantAuthorizations) {
      obj.grant_authorizations = message.grantAuthorizations.map(e => e ? FullGrantAuthorizations.toAmino(e) : undefined);
    } else {
      obj.grant_authorizations = message.grantAuthorizations;
    }
    if (message.activeGrants) {
      obj.active_grants = message.activeGrants.map(e => e ? FullActiveGrant.toAmino(e) : undefined);
    } else {
      obj.active_grants = message.activeGrants;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
function createBaseOrderbookSequence(): OrderbookSequence {
  return {
    sequence: BigInt(0),
    marketId: ""
  };
}
export const OrderbookSequence = {
  typeUrl: "/injective.exchange.v1beta1.OrderbookSequence",
  is(o: any): o is OrderbookSequence {
    return o && (o.$typeUrl === OrderbookSequence.typeUrl || typeof o.sequence === "bigint" && typeof o.marketId === "string");
  },
  isAmino(o: any): o is OrderbookSequenceAmino {
    return o && (o.$typeUrl === OrderbookSequence.typeUrl || typeof o.sequence === "bigint" && typeof o.market_id === "string");
  },
  encode(message: OrderbookSequence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OrderbookSequence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderbookSequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
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
  fromPartial(object: DeepPartial<OrderbookSequence>): OrderbookSequence {
    const message = createBaseOrderbookSequence();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.marketId = object.marketId ?? "";
    return message;
  },
  fromAmino(object: OrderbookSequenceAmino): OrderbookSequence {
    const message = createBaseOrderbookSequence();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    return message;
  },
  toAmino(message: OrderbookSequence): OrderbookSequenceAmino {
    const obj: any = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    return obj;
  },
  fromAminoMsg(object: OrderbookSequenceAminoMsg): OrderbookSequence {
    return OrderbookSequence.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderbookSequenceProtoMsg): OrderbookSequence {
    return OrderbookSequence.decode(message.value);
  },
  toProto(message: OrderbookSequence): Uint8Array {
    return OrderbookSequence.encode(message).finish();
  },
  toProtoMsg(message: OrderbookSequence): OrderbookSequenceProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.OrderbookSequence",
      value: OrderbookSequence.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderbookSequence.typeUrl, OrderbookSequence);
function createBaseFeeDiscountAccountTierTTL(): FeeDiscountAccountTierTTL {
  return {
    account: "",
    tierTtl: undefined
  };
}
export const FeeDiscountAccountTierTTL = {
  typeUrl: "/injective.exchange.v1beta1.FeeDiscountAccountTierTTL",
  is(o: any): o is FeeDiscountAccountTierTTL {
    return o && (o.$typeUrl === FeeDiscountAccountTierTTL.typeUrl || typeof o.account === "string");
  },
  isAmino(o: any): o is FeeDiscountAccountTierTTLAmino {
    return o && (o.$typeUrl === FeeDiscountAccountTierTTL.typeUrl || typeof o.account === "string");
  },
  encode(message: FeeDiscountAccountTierTTL, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.tierTtl !== undefined) {
      FeeDiscountTierTTL.encode(message.tierTtl, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeeDiscountAccountTierTTL {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeDiscountAccountTierTTL();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.tierTtl = FeeDiscountTierTTL.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FeeDiscountAccountTierTTL>): FeeDiscountAccountTierTTL {
    const message = createBaseFeeDiscountAccountTierTTL();
    message.account = object.account ?? "";
    message.tierTtl = object.tierTtl !== undefined && object.tierTtl !== null ? FeeDiscountTierTTL.fromPartial(object.tierTtl) : undefined;
    return message;
  },
  fromAmino(object: FeeDiscountAccountTierTTLAmino): FeeDiscountAccountTierTTL {
    const message = createBaseFeeDiscountAccountTierTTL();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.tier_ttl !== undefined && object.tier_ttl !== null) {
      message.tierTtl = FeeDiscountTierTTL.fromAmino(object.tier_ttl);
    }
    return message;
  },
  toAmino(message: FeeDiscountAccountTierTTL): FeeDiscountAccountTierTTLAmino {
    const obj: any = {};
    obj.account = message.account === "" ? undefined : message.account;
    obj.tier_ttl = message.tierTtl ? FeeDiscountTierTTL.toAmino(message.tierTtl) : undefined;
    return obj;
  },
  fromAminoMsg(object: FeeDiscountAccountTierTTLAminoMsg): FeeDiscountAccountTierTTL {
    return FeeDiscountAccountTierTTL.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeDiscountAccountTierTTLProtoMsg): FeeDiscountAccountTierTTL {
    return FeeDiscountAccountTierTTL.decode(message.value);
  },
  toProto(message: FeeDiscountAccountTierTTL): Uint8Array {
    return FeeDiscountAccountTierTTL.encode(message).finish();
  },
  toProtoMsg(message: FeeDiscountAccountTierTTL): FeeDiscountAccountTierTTLProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.FeeDiscountAccountTierTTL",
      value: FeeDiscountAccountTierTTL.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FeeDiscountAccountTierTTL.typeUrl, FeeDiscountAccountTierTTL);
function createBaseFeeDiscountBucketVolumeAccounts(): FeeDiscountBucketVolumeAccounts {
  return {
    bucketStartTimestamp: BigInt(0),
    accountVolume: []
  };
}
export const FeeDiscountBucketVolumeAccounts = {
  typeUrl: "/injective.exchange.v1beta1.FeeDiscountBucketVolumeAccounts",
  is(o: any): o is FeeDiscountBucketVolumeAccounts {
    return o && (o.$typeUrl === FeeDiscountBucketVolumeAccounts.typeUrl || typeof o.bucketStartTimestamp === "bigint" && Array.isArray(o.accountVolume) && (!o.accountVolume.length || AccountVolume.is(o.accountVolume[0])));
  },
  isAmino(o: any): o is FeeDiscountBucketVolumeAccountsAmino {
    return o && (o.$typeUrl === FeeDiscountBucketVolumeAccounts.typeUrl || typeof o.bucket_start_timestamp === "bigint" && Array.isArray(o.account_volume) && (!o.account_volume.length || AccountVolume.isAmino(o.account_volume[0])));
  },
  encode(message: FeeDiscountBucketVolumeAccounts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bucketStartTimestamp !== BigInt(0)) {
      writer.uint32(8).int64(message.bucketStartTimestamp);
    }
    for (const v of message.accountVolume) {
      AccountVolume.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeeDiscountBucketVolumeAccounts {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeDiscountBucketVolumeAccounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucketStartTimestamp = reader.int64();
          break;
        case 2:
          message.accountVolume.push(AccountVolume.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FeeDiscountBucketVolumeAccounts>): FeeDiscountBucketVolumeAccounts {
    const message = createBaseFeeDiscountBucketVolumeAccounts();
    message.bucketStartTimestamp = object.bucketStartTimestamp !== undefined && object.bucketStartTimestamp !== null ? BigInt(object.bucketStartTimestamp.toString()) : BigInt(0);
    message.accountVolume = object.accountVolume?.map(e => AccountVolume.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: FeeDiscountBucketVolumeAccountsAmino): FeeDiscountBucketVolumeAccounts {
    const message = createBaseFeeDiscountBucketVolumeAccounts();
    if (object.bucket_start_timestamp !== undefined && object.bucket_start_timestamp !== null) {
      message.bucketStartTimestamp = BigInt(object.bucket_start_timestamp);
    }
    message.accountVolume = object.account_volume?.map(e => AccountVolume.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: FeeDiscountBucketVolumeAccounts): FeeDiscountBucketVolumeAccountsAmino {
    const obj: any = {};
    obj.bucket_start_timestamp = message.bucketStartTimestamp !== BigInt(0) ? message.bucketStartTimestamp?.toString() : undefined;
    if (message.accountVolume) {
      obj.account_volume = message.accountVolume.map(e => e ? AccountVolume.toAmino(e) : undefined);
    } else {
      obj.account_volume = message.accountVolume;
    }
    return obj;
  },
  fromAminoMsg(object: FeeDiscountBucketVolumeAccountsAminoMsg): FeeDiscountBucketVolumeAccounts {
    return FeeDiscountBucketVolumeAccounts.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeDiscountBucketVolumeAccountsProtoMsg): FeeDiscountBucketVolumeAccounts {
    return FeeDiscountBucketVolumeAccounts.decode(message.value);
  },
  toProto(message: FeeDiscountBucketVolumeAccounts): Uint8Array {
    return FeeDiscountBucketVolumeAccounts.encode(message).finish();
  },
  toProtoMsg(message: FeeDiscountBucketVolumeAccounts): FeeDiscountBucketVolumeAccountsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.FeeDiscountBucketVolumeAccounts",
      value: FeeDiscountBucketVolumeAccounts.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FeeDiscountBucketVolumeAccounts.typeUrl, FeeDiscountBucketVolumeAccounts);
function createBaseAccountVolume(): AccountVolume {
  return {
    account: "",
    volume: ""
  };
}
export const AccountVolume = {
  typeUrl: "/injective.exchange.v1beta1.AccountVolume",
  is(o: any): o is AccountVolume {
    return o && (o.$typeUrl === AccountVolume.typeUrl || typeof o.account === "string" && typeof o.volume === "string");
  },
  isAmino(o: any): o is AccountVolumeAmino {
    return o && (o.$typeUrl === AccountVolume.typeUrl || typeof o.account === "string" && typeof o.volume === "string");
  },
  encode(message: AccountVolume, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.volume !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.volume, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountVolume {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountVolume();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.volume = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AccountVolume>): AccountVolume {
    const message = createBaseAccountVolume();
    message.account = object.account ?? "";
    message.volume = object.volume ?? "";
    return message;
  },
  fromAmino(object: AccountVolumeAmino): AccountVolume {
    const message = createBaseAccountVolume();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = object.volume;
    }
    return message;
  },
  toAmino(message: AccountVolume): AccountVolumeAmino {
    const obj: any = {};
    obj.account = message.account === "" ? undefined : message.account;
    obj.volume = message.volume === "" ? undefined : message.volume;
    return obj;
  },
  fromAminoMsg(object: AccountVolumeAminoMsg): AccountVolume {
    return AccountVolume.fromAmino(object.value);
  },
  fromProtoMsg(message: AccountVolumeProtoMsg): AccountVolume {
    return AccountVolume.decode(message.value);
  },
  toProto(message: AccountVolume): Uint8Array {
    return AccountVolume.encode(message).finish();
  },
  toProtoMsg(message: AccountVolume): AccountVolumeProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.AccountVolume",
      value: AccountVolume.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccountVolume.typeUrl, AccountVolume);
function createBaseTradingRewardCampaignAccountPoints(): TradingRewardCampaignAccountPoints {
  return {
    account: "",
    points: ""
  };
}
export const TradingRewardCampaignAccountPoints = {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPoints",
  is(o: any): o is TradingRewardCampaignAccountPoints {
    return o && (o.$typeUrl === TradingRewardCampaignAccountPoints.typeUrl || typeof o.account === "string" && typeof o.points === "string");
  },
  isAmino(o: any): o is TradingRewardCampaignAccountPointsAmino {
    return o && (o.$typeUrl === TradingRewardCampaignAccountPoints.typeUrl || typeof o.account === "string" && typeof o.points === "string");
  },
  encode(message: TradingRewardCampaignAccountPoints, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.points !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.points, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingRewardCampaignAccountPoints {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardCampaignAccountPoints();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.points = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TradingRewardCampaignAccountPoints>): TradingRewardCampaignAccountPoints {
    const message = createBaseTradingRewardCampaignAccountPoints();
    message.account = object.account ?? "";
    message.points = object.points ?? "";
    return message;
  },
  fromAmino(object: TradingRewardCampaignAccountPointsAmino): TradingRewardCampaignAccountPoints {
    const message = createBaseTradingRewardCampaignAccountPoints();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.points !== undefined && object.points !== null) {
      message.points = object.points;
    }
    return message;
  },
  toAmino(message: TradingRewardCampaignAccountPoints): TradingRewardCampaignAccountPointsAmino {
    const obj: any = {};
    obj.account = message.account === "" ? undefined : message.account;
    obj.points = message.points === "" ? undefined : message.points;
    return obj;
  },
  fromAminoMsg(object: TradingRewardCampaignAccountPointsAminoMsg): TradingRewardCampaignAccountPoints {
    return TradingRewardCampaignAccountPoints.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardCampaignAccountPointsProtoMsg): TradingRewardCampaignAccountPoints {
    return TradingRewardCampaignAccountPoints.decode(message.value);
  },
  toProto(message: TradingRewardCampaignAccountPoints): Uint8Array {
    return TradingRewardCampaignAccountPoints.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardCampaignAccountPoints): TradingRewardCampaignAccountPointsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPoints",
      value: TradingRewardCampaignAccountPoints.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TradingRewardCampaignAccountPoints.typeUrl, TradingRewardCampaignAccountPoints);
function createBaseTradingRewardCampaignAccountPendingPoints(): TradingRewardCampaignAccountPendingPoints {
  return {
    rewardPoolStartTimestamp: BigInt(0),
    accountPoints: []
  };
}
export const TradingRewardCampaignAccountPendingPoints = {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPendingPoints",
  is(o: any): o is TradingRewardCampaignAccountPendingPoints {
    return o && (o.$typeUrl === TradingRewardCampaignAccountPendingPoints.typeUrl || typeof o.rewardPoolStartTimestamp === "bigint" && Array.isArray(o.accountPoints) && (!o.accountPoints.length || TradingRewardCampaignAccountPoints.is(o.accountPoints[0])));
  },
  isAmino(o: any): o is TradingRewardCampaignAccountPendingPointsAmino {
    return o && (o.$typeUrl === TradingRewardCampaignAccountPendingPoints.typeUrl || typeof o.reward_pool_start_timestamp === "bigint" && Array.isArray(o.account_points) && (!o.account_points.length || TradingRewardCampaignAccountPoints.isAmino(o.account_points[0])));
  },
  encode(message: TradingRewardCampaignAccountPendingPoints, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardPoolStartTimestamp !== BigInt(0)) {
      writer.uint32(8).int64(message.rewardPoolStartTimestamp);
    }
    for (const v of message.accountPoints) {
      TradingRewardCampaignAccountPoints.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingRewardCampaignAccountPendingPoints {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardCampaignAccountPendingPoints();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardPoolStartTimestamp = reader.int64();
          break;
        case 2:
          message.accountPoints.push(TradingRewardCampaignAccountPoints.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TradingRewardCampaignAccountPendingPoints>): TradingRewardCampaignAccountPendingPoints {
    const message = createBaseTradingRewardCampaignAccountPendingPoints();
    message.rewardPoolStartTimestamp = object.rewardPoolStartTimestamp !== undefined && object.rewardPoolStartTimestamp !== null ? BigInt(object.rewardPoolStartTimestamp.toString()) : BigInt(0);
    message.accountPoints = object.accountPoints?.map(e => TradingRewardCampaignAccountPoints.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TradingRewardCampaignAccountPendingPointsAmino): TradingRewardCampaignAccountPendingPoints {
    const message = createBaseTradingRewardCampaignAccountPendingPoints();
    if (object.reward_pool_start_timestamp !== undefined && object.reward_pool_start_timestamp !== null) {
      message.rewardPoolStartTimestamp = BigInt(object.reward_pool_start_timestamp);
    }
    message.accountPoints = object.account_points?.map(e => TradingRewardCampaignAccountPoints.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TradingRewardCampaignAccountPendingPoints): TradingRewardCampaignAccountPendingPointsAmino {
    const obj: any = {};
    obj.reward_pool_start_timestamp = message.rewardPoolStartTimestamp !== BigInt(0) ? message.rewardPoolStartTimestamp?.toString() : undefined;
    if (message.accountPoints) {
      obj.account_points = message.accountPoints.map(e => e ? TradingRewardCampaignAccountPoints.toAmino(e) : undefined);
    } else {
      obj.account_points = message.accountPoints;
    }
    return obj;
  },
  fromAminoMsg(object: TradingRewardCampaignAccountPendingPointsAminoMsg): TradingRewardCampaignAccountPendingPoints {
    return TradingRewardCampaignAccountPendingPoints.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardCampaignAccountPendingPointsProtoMsg): TradingRewardCampaignAccountPendingPoints {
    return TradingRewardCampaignAccountPendingPoints.decode(message.value);
  },
  toProto(message: TradingRewardCampaignAccountPendingPoints): Uint8Array {
    return TradingRewardCampaignAccountPendingPoints.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardCampaignAccountPendingPoints): TradingRewardCampaignAccountPendingPointsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignAccountPendingPoints",
      value: TradingRewardCampaignAccountPendingPoints.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TradingRewardCampaignAccountPendingPoints.typeUrl, TradingRewardCampaignAccountPendingPoints);
function createBaseSpotOrderBook(): SpotOrderBook {
  return {
    marketId: "",
    isBuySide: false,
    orders: []
  };
}
export const SpotOrderBook = {
  typeUrl: "/injective.exchange.v1beta1.SpotOrderBook",
  is(o: any): o is SpotOrderBook {
    return o && (o.$typeUrl === SpotOrderBook.typeUrl || typeof o.marketId === "string" && typeof o.isBuySide === "boolean" && Array.isArray(o.orders) && (!o.orders.length || SpotLimitOrder.is(o.orders[0])));
  },
  isAmino(o: any): o is SpotOrderBookAmino {
    return o && (o.$typeUrl === SpotOrderBook.typeUrl || typeof o.market_id === "string" && typeof o.isBuySide === "boolean" && Array.isArray(o.orders) && (!o.orders.length || SpotLimitOrder.isAmino(o.orders[0])));
  },
  encode(message: SpotOrderBook, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.isBuySide === true) {
      writer.uint32(16).bool(message.isBuySide);
    }
    for (const v of message.orders) {
      SpotLimitOrder.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpotOrderBook {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotOrderBook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.isBuySide = reader.bool();
          break;
        case 3:
          message.orders.push(SpotLimitOrder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SpotOrderBook>): SpotOrderBook {
    const message = createBaseSpotOrderBook();
    message.marketId = object.marketId ?? "";
    message.isBuySide = object.isBuySide ?? false;
    message.orders = object.orders?.map(e => SpotLimitOrder.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SpotOrderBookAmino): SpotOrderBook {
    const message = createBaseSpotOrderBook();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.isBuySide !== undefined && object.isBuySide !== null) {
      message.isBuySide = object.isBuySide;
    }
    message.orders = object.orders?.map(e => SpotLimitOrder.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SpotOrderBook): SpotOrderBookAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.isBuySide = message.isBuySide === false ? undefined : message.isBuySide;
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? SpotLimitOrder.toAmino(e) : undefined);
    } else {
      obj.orders = message.orders;
    }
    return obj;
  },
  fromAminoMsg(object: SpotOrderBookAminoMsg): SpotOrderBook {
    return SpotOrderBook.fromAmino(object.value);
  },
  fromProtoMsg(message: SpotOrderBookProtoMsg): SpotOrderBook {
    return SpotOrderBook.decode(message.value);
  },
  toProto(message: SpotOrderBook): Uint8Array {
    return SpotOrderBook.encode(message).finish();
  },
  toProtoMsg(message: SpotOrderBook): SpotOrderBookProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SpotOrderBook",
      value: SpotOrderBook.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SpotOrderBook.typeUrl, SpotOrderBook);
function createBaseDerivativeOrderBook(): DerivativeOrderBook {
  return {
    marketId: "",
    isBuySide: false,
    orders: []
  };
}
export const DerivativeOrderBook = {
  typeUrl: "/injective.exchange.v1beta1.DerivativeOrderBook",
  is(o: any): o is DerivativeOrderBook {
    return o && (o.$typeUrl === DerivativeOrderBook.typeUrl || typeof o.marketId === "string" && typeof o.isBuySide === "boolean" && Array.isArray(o.orders) && (!o.orders.length || DerivativeLimitOrder.is(o.orders[0])));
  },
  isAmino(o: any): o is DerivativeOrderBookAmino {
    return o && (o.$typeUrl === DerivativeOrderBook.typeUrl || typeof o.market_id === "string" && typeof o.isBuySide === "boolean" && Array.isArray(o.orders) && (!o.orders.length || DerivativeLimitOrder.isAmino(o.orders[0])));
  },
  encode(message: DerivativeOrderBook, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.isBuySide === true) {
      writer.uint32(16).bool(message.isBuySide);
    }
    for (const v of message.orders) {
      DerivativeLimitOrder.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DerivativeOrderBook {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDerivativeOrderBook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.isBuySide = reader.bool();
          break;
        case 3:
          message.orders.push(DerivativeLimitOrder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DerivativeOrderBook>): DerivativeOrderBook {
    const message = createBaseDerivativeOrderBook();
    message.marketId = object.marketId ?? "";
    message.isBuySide = object.isBuySide ?? false;
    message.orders = object.orders?.map(e => DerivativeLimitOrder.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DerivativeOrderBookAmino): DerivativeOrderBook {
    const message = createBaseDerivativeOrderBook();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.isBuySide !== undefined && object.isBuySide !== null) {
      message.isBuySide = object.isBuySide;
    }
    message.orders = object.orders?.map(e => DerivativeLimitOrder.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DerivativeOrderBook): DerivativeOrderBookAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.isBuySide = message.isBuySide === false ? undefined : message.isBuySide;
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? DerivativeLimitOrder.toAmino(e) : undefined);
    } else {
      obj.orders = message.orders;
    }
    return obj;
  },
  fromAminoMsg(object: DerivativeOrderBookAminoMsg): DerivativeOrderBook {
    return DerivativeOrderBook.fromAmino(object.value);
  },
  fromProtoMsg(message: DerivativeOrderBookProtoMsg): DerivativeOrderBook {
    return DerivativeOrderBook.decode(message.value);
  },
  toProto(message: DerivativeOrderBook): Uint8Array {
    return DerivativeOrderBook.encode(message).finish();
  },
  toProtoMsg(message: DerivativeOrderBook): DerivativeOrderBookProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DerivativeOrderBook",
      value: DerivativeOrderBook.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DerivativeOrderBook.typeUrl, DerivativeOrderBook);
function createBaseConditionalDerivativeOrderBook(): ConditionalDerivativeOrderBook {
  return {
    marketId: "",
    limitBuyOrders: [],
    marketBuyOrders: [],
    limitSellOrders: [],
    marketSellOrders: []
  };
}
export const ConditionalDerivativeOrderBook = {
  typeUrl: "/injective.exchange.v1beta1.ConditionalDerivativeOrderBook",
  is(o: any): o is ConditionalDerivativeOrderBook {
    return o && (o.$typeUrl === ConditionalDerivativeOrderBook.typeUrl || typeof o.marketId === "string" && Array.isArray(o.limitBuyOrders) && (!o.limitBuyOrders.length || DerivativeLimitOrder.is(o.limitBuyOrders[0])) && Array.isArray(o.marketBuyOrders) && (!o.marketBuyOrders.length || DerivativeMarketOrder.is(o.marketBuyOrders[0])) && Array.isArray(o.limitSellOrders) && (!o.limitSellOrders.length || DerivativeLimitOrder.is(o.limitSellOrders[0])) && Array.isArray(o.marketSellOrders) && (!o.marketSellOrders.length || DerivativeMarketOrder.is(o.marketSellOrders[0])));
  },
  isAmino(o: any): o is ConditionalDerivativeOrderBookAmino {
    return o && (o.$typeUrl === ConditionalDerivativeOrderBook.typeUrl || typeof o.market_id === "string" && Array.isArray(o.limit_buy_orders) && (!o.limit_buy_orders.length || DerivativeLimitOrder.isAmino(o.limit_buy_orders[0])) && Array.isArray(o.market_buy_orders) && (!o.market_buy_orders.length || DerivativeMarketOrder.isAmino(o.market_buy_orders[0])) && Array.isArray(o.limit_sell_orders) && (!o.limit_sell_orders.length || DerivativeLimitOrder.isAmino(o.limit_sell_orders[0])) && Array.isArray(o.market_sell_orders) && (!o.market_sell_orders.length || DerivativeMarketOrder.isAmino(o.market_sell_orders[0])));
  },
  encode(message: ConditionalDerivativeOrderBook, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    for (const v of message.limitBuyOrders) {
      DerivativeLimitOrder.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.marketBuyOrders) {
      DerivativeMarketOrder.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.limitSellOrders) {
      DerivativeLimitOrder.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.marketSellOrders) {
      DerivativeMarketOrder.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConditionalDerivativeOrderBook {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConditionalDerivativeOrderBook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.limitBuyOrders.push(DerivativeLimitOrder.decode(reader, reader.uint32()));
          break;
        case 3:
          message.marketBuyOrders.push(DerivativeMarketOrder.decode(reader, reader.uint32()));
          break;
        case 4:
          message.limitSellOrders.push(DerivativeLimitOrder.decode(reader, reader.uint32()));
          break;
        case 5:
          message.marketSellOrders.push(DerivativeMarketOrder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ConditionalDerivativeOrderBook>): ConditionalDerivativeOrderBook {
    const message = createBaseConditionalDerivativeOrderBook();
    message.marketId = object.marketId ?? "";
    message.limitBuyOrders = object.limitBuyOrders?.map(e => DerivativeLimitOrder.fromPartial(e)) || [];
    message.marketBuyOrders = object.marketBuyOrders?.map(e => DerivativeMarketOrder.fromPartial(e)) || [];
    message.limitSellOrders = object.limitSellOrders?.map(e => DerivativeLimitOrder.fromPartial(e)) || [];
    message.marketSellOrders = object.marketSellOrders?.map(e => DerivativeMarketOrder.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ConditionalDerivativeOrderBookAmino): ConditionalDerivativeOrderBook {
    const message = createBaseConditionalDerivativeOrderBook();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    message.limitBuyOrders = object.limit_buy_orders?.map(e => DerivativeLimitOrder.fromAmino(e)) || [];
    message.marketBuyOrders = object.market_buy_orders?.map(e => DerivativeMarketOrder.fromAmino(e)) || [];
    message.limitSellOrders = object.limit_sell_orders?.map(e => DerivativeLimitOrder.fromAmino(e)) || [];
    message.marketSellOrders = object.market_sell_orders?.map(e => DerivativeMarketOrder.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ConditionalDerivativeOrderBook): ConditionalDerivativeOrderBookAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    if (message.limitBuyOrders) {
      obj.limit_buy_orders = message.limitBuyOrders.map(e => e ? DerivativeLimitOrder.toAmino(e) : undefined);
    } else {
      obj.limit_buy_orders = message.limitBuyOrders;
    }
    if (message.marketBuyOrders) {
      obj.market_buy_orders = message.marketBuyOrders.map(e => e ? DerivativeMarketOrder.toAmino(e) : undefined);
    } else {
      obj.market_buy_orders = message.marketBuyOrders;
    }
    if (message.limitSellOrders) {
      obj.limit_sell_orders = message.limitSellOrders.map(e => e ? DerivativeLimitOrder.toAmino(e) : undefined);
    } else {
      obj.limit_sell_orders = message.limitSellOrders;
    }
    if (message.marketSellOrders) {
      obj.market_sell_orders = message.marketSellOrders.map(e => e ? DerivativeMarketOrder.toAmino(e) : undefined);
    } else {
      obj.market_sell_orders = message.marketSellOrders;
    }
    return obj;
  },
  fromAminoMsg(object: ConditionalDerivativeOrderBookAminoMsg): ConditionalDerivativeOrderBook {
    return ConditionalDerivativeOrderBook.fromAmino(object.value);
  },
  fromProtoMsg(message: ConditionalDerivativeOrderBookProtoMsg): ConditionalDerivativeOrderBook {
    return ConditionalDerivativeOrderBook.decode(message.value);
  },
  toProto(message: ConditionalDerivativeOrderBook): Uint8Array {
    return ConditionalDerivativeOrderBook.encode(message).finish();
  },
  toProtoMsg(message: ConditionalDerivativeOrderBook): ConditionalDerivativeOrderBookProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.ConditionalDerivativeOrderBook",
      value: ConditionalDerivativeOrderBook.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ConditionalDerivativeOrderBook.typeUrl, ConditionalDerivativeOrderBook);
function createBaseBalance(): Balance {
  return {
    subaccountId: "",
    denom: "",
    deposits: undefined
  };
}
export const Balance = {
  typeUrl: "/injective.exchange.v1beta1.Balance",
  is(o: any): o is Balance {
    return o && (o.$typeUrl === Balance.typeUrl || typeof o.subaccountId === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is BalanceAmino {
    return o && (o.$typeUrl === Balance.typeUrl || typeof o.subaccount_id === "string" && typeof o.denom === "string");
  },
  encode(message: Balance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.deposits !== undefined) {
      Deposit.encode(message.deposits, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Balance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalance();
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
          message.deposits = Deposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Balance>): Balance {
    const message = createBaseBalance();
    message.subaccountId = object.subaccountId ?? "";
    message.denom = object.denom ?? "";
    message.deposits = object.deposits !== undefined && object.deposits !== null ? Deposit.fromPartial(object.deposits) : undefined;
    return message;
  },
  fromAmino(object: BalanceAmino): Balance {
    const message = createBaseBalance();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.deposits !== undefined && object.deposits !== null) {
      message.deposits = Deposit.fromAmino(object.deposits);
    }
    return message;
  },
  toAmino(message: Balance): BalanceAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.deposits = message.deposits ? Deposit.toAmino(message.deposits) : undefined;
    return obj;
  },
  fromAminoMsg(object: BalanceAminoMsg): Balance {
    return Balance.fromAmino(object.value);
  },
  fromProtoMsg(message: BalanceProtoMsg): Balance {
    return Balance.decode(message.value);
  },
  toProto(message: Balance): Uint8Array {
    return Balance.encode(message).finish();
  },
  toProtoMsg(message: Balance): BalanceProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.Balance",
      value: Balance.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Balance.typeUrl, Balance);
function createBaseDerivativePosition(): DerivativePosition {
  return {
    subaccountId: "",
    marketId: "",
    position: undefined
  };
}
export const DerivativePosition = {
  typeUrl: "/injective.exchange.v1beta1.DerivativePosition",
  is(o: any): o is DerivativePosition {
    return o && (o.$typeUrl === DerivativePosition.typeUrl || typeof o.subaccountId === "string" && typeof o.marketId === "string");
  },
  isAmino(o: any): o is DerivativePositionAmino {
    return o && (o.$typeUrl === DerivativePosition.typeUrl || typeof o.subaccount_id === "string" && typeof o.market_id === "string");
  },
  encode(message: DerivativePosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DerivativePosition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDerivativePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.position = Position.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DerivativePosition>): DerivativePosition {
    const message = createBaseDerivativePosition();
    message.subaccountId = object.subaccountId ?? "";
    message.marketId = object.marketId ?? "";
    message.position = object.position !== undefined && object.position !== null ? Position.fromPartial(object.position) : undefined;
    return message;
  },
  fromAmino(object: DerivativePositionAmino): DerivativePosition {
    const message = createBaseDerivativePosition();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = Position.fromAmino(object.position);
    }
    return message;
  },
  toAmino(message: DerivativePosition): DerivativePositionAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.position = message.position ? Position.toAmino(message.position) : undefined;
    return obj;
  },
  fromAminoMsg(object: DerivativePositionAminoMsg): DerivativePosition {
    return DerivativePosition.fromAmino(object.value);
  },
  fromProtoMsg(message: DerivativePositionProtoMsg): DerivativePosition {
    return DerivativePosition.decode(message.value);
  },
  toProto(message: DerivativePosition): Uint8Array {
    return DerivativePosition.encode(message).finish();
  },
  toProtoMsg(message: DerivativePosition): DerivativePositionProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DerivativePosition",
      value: DerivativePosition.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DerivativePosition.typeUrl, DerivativePosition);
function createBaseSubaccountNonce(): SubaccountNonce {
  return {
    subaccountId: "",
    subaccountTradeNonce: SubaccountTradeNonce.fromPartial({})
  };
}
export const SubaccountNonce = {
  typeUrl: "/injective.exchange.v1beta1.SubaccountNonce",
  is(o: any): o is SubaccountNonce {
    return o && (o.$typeUrl === SubaccountNonce.typeUrl || typeof o.subaccountId === "string" && SubaccountTradeNonce.is(o.subaccountTradeNonce));
  },
  isAmino(o: any): o is SubaccountNonceAmino {
    return o && (o.$typeUrl === SubaccountNonce.typeUrl || typeof o.subaccount_id === "string" && SubaccountTradeNonce.isAmino(o.subaccount_trade_nonce));
  },
  encode(message: SubaccountNonce, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.subaccountTradeNonce !== undefined) {
      SubaccountTradeNonce.encode(message.subaccountTradeNonce, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SubaccountNonce {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccountNonce();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.subaccountTradeNonce = SubaccountTradeNonce.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SubaccountNonce>): SubaccountNonce {
    const message = createBaseSubaccountNonce();
    message.subaccountId = object.subaccountId ?? "";
    message.subaccountTradeNonce = object.subaccountTradeNonce !== undefined && object.subaccountTradeNonce !== null ? SubaccountTradeNonce.fromPartial(object.subaccountTradeNonce) : undefined;
    return message;
  },
  fromAmino(object: SubaccountNonceAmino): SubaccountNonce {
    const message = createBaseSubaccountNonce();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    if (object.subaccount_trade_nonce !== undefined && object.subaccount_trade_nonce !== null) {
      message.subaccountTradeNonce = SubaccountTradeNonce.fromAmino(object.subaccount_trade_nonce);
    }
    return message;
  },
  toAmino(message: SubaccountNonce): SubaccountNonceAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.subaccount_trade_nonce = message.subaccountTradeNonce ? SubaccountTradeNonce.toAmino(message.subaccountTradeNonce) : undefined;
    return obj;
  },
  fromAminoMsg(object: SubaccountNonceAminoMsg): SubaccountNonce {
    return SubaccountNonce.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountNonceProtoMsg): SubaccountNonce {
    return SubaccountNonce.decode(message.value);
  },
  toProto(message: SubaccountNonce): Uint8Array {
    return SubaccountNonce.encode(message).finish();
  },
  toProtoMsg(message: SubaccountNonce): SubaccountNonceProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SubaccountNonce",
      value: SubaccountNonce.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SubaccountNonce.typeUrl, SubaccountNonce);
function createBaseExpiryFuturesMarketInfoState(): ExpiryFuturesMarketInfoState {
  return {
    marketId: "",
    marketInfo: undefined
  };
}
export const ExpiryFuturesMarketInfoState = {
  typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketInfoState",
  is(o: any): o is ExpiryFuturesMarketInfoState {
    return o && (o.$typeUrl === ExpiryFuturesMarketInfoState.typeUrl || typeof o.marketId === "string");
  },
  isAmino(o: any): o is ExpiryFuturesMarketInfoStateAmino {
    return o && (o.$typeUrl === ExpiryFuturesMarketInfoState.typeUrl || typeof o.market_id === "string");
  },
  encode(message: ExpiryFuturesMarketInfoState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.marketInfo !== undefined) {
      ExpiryFuturesMarketInfo.encode(message.marketInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExpiryFuturesMarketInfoState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpiryFuturesMarketInfoState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.marketInfo = ExpiryFuturesMarketInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExpiryFuturesMarketInfoState>): ExpiryFuturesMarketInfoState {
    const message = createBaseExpiryFuturesMarketInfoState();
    message.marketId = object.marketId ?? "";
    message.marketInfo = object.marketInfo !== undefined && object.marketInfo !== null ? ExpiryFuturesMarketInfo.fromPartial(object.marketInfo) : undefined;
    return message;
  },
  fromAmino(object: ExpiryFuturesMarketInfoStateAmino): ExpiryFuturesMarketInfoState {
    const message = createBaseExpiryFuturesMarketInfoState();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.market_info !== undefined && object.market_info !== null) {
      message.marketInfo = ExpiryFuturesMarketInfo.fromAmino(object.market_info);
    }
    return message;
  },
  toAmino(message: ExpiryFuturesMarketInfoState): ExpiryFuturesMarketInfoStateAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.market_info = message.marketInfo ? ExpiryFuturesMarketInfo.toAmino(message.marketInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: ExpiryFuturesMarketInfoStateAminoMsg): ExpiryFuturesMarketInfoState {
    return ExpiryFuturesMarketInfoState.fromAmino(object.value);
  },
  fromProtoMsg(message: ExpiryFuturesMarketInfoStateProtoMsg): ExpiryFuturesMarketInfoState {
    return ExpiryFuturesMarketInfoState.decode(message.value);
  },
  toProto(message: ExpiryFuturesMarketInfoState): Uint8Array {
    return ExpiryFuturesMarketInfoState.encode(message).finish();
  },
  toProtoMsg(message: ExpiryFuturesMarketInfoState): ExpiryFuturesMarketInfoStateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketInfoState",
      value: ExpiryFuturesMarketInfoState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExpiryFuturesMarketInfoState.typeUrl, ExpiryFuturesMarketInfoState);
function createBasePerpetualMarketFundingState(): PerpetualMarketFundingState {
  return {
    marketId: "",
    funding: undefined
  };
}
export const PerpetualMarketFundingState = {
  typeUrl: "/injective.exchange.v1beta1.PerpetualMarketFundingState",
  is(o: any): o is PerpetualMarketFundingState {
    return o && (o.$typeUrl === PerpetualMarketFundingState.typeUrl || typeof o.marketId === "string");
  },
  isAmino(o: any): o is PerpetualMarketFundingStateAmino {
    return o && (o.$typeUrl === PerpetualMarketFundingState.typeUrl || typeof o.market_id === "string");
  },
  encode(message: PerpetualMarketFundingState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.funding !== undefined) {
      PerpetualMarketFunding.encode(message.funding, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PerpetualMarketFundingState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerpetualMarketFundingState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.funding = PerpetualMarketFunding.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PerpetualMarketFundingState>): PerpetualMarketFundingState {
    const message = createBasePerpetualMarketFundingState();
    message.marketId = object.marketId ?? "";
    message.funding = object.funding !== undefined && object.funding !== null ? PerpetualMarketFunding.fromPartial(object.funding) : undefined;
    return message;
  },
  fromAmino(object: PerpetualMarketFundingStateAmino): PerpetualMarketFundingState {
    const message = createBasePerpetualMarketFundingState();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.funding !== undefined && object.funding !== null) {
      message.funding = PerpetualMarketFunding.fromAmino(object.funding);
    }
    return message;
  },
  toAmino(message: PerpetualMarketFundingState): PerpetualMarketFundingStateAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.funding = message.funding ? PerpetualMarketFunding.toAmino(message.funding) : undefined;
    return obj;
  },
  fromAminoMsg(object: PerpetualMarketFundingStateAminoMsg): PerpetualMarketFundingState {
    return PerpetualMarketFundingState.fromAmino(object.value);
  },
  fromProtoMsg(message: PerpetualMarketFundingStateProtoMsg): PerpetualMarketFundingState {
    return PerpetualMarketFundingState.decode(message.value);
  },
  toProto(message: PerpetualMarketFundingState): Uint8Array {
    return PerpetualMarketFundingState.encode(message).finish();
  },
  toProtoMsg(message: PerpetualMarketFundingState): PerpetualMarketFundingStateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.PerpetualMarketFundingState",
      value: PerpetualMarketFundingState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PerpetualMarketFundingState.typeUrl, PerpetualMarketFundingState);
function createBaseFullGrantAuthorizations(): FullGrantAuthorizations {
  return {
    granter: "",
    totalGrantAmount: "",
    lastDelegationsCheckedTime: BigInt(0),
    grants: []
  };
}
export const FullGrantAuthorizations = {
  typeUrl: "/injective.exchange.v1beta1.FullGrantAuthorizations",
  is(o: any): o is FullGrantAuthorizations {
    return o && (o.$typeUrl === FullGrantAuthorizations.typeUrl || typeof o.granter === "string" && typeof o.totalGrantAmount === "string" && typeof o.lastDelegationsCheckedTime === "bigint" && Array.isArray(o.grants) && (!o.grants.length || GrantAuthorization.is(o.grants[0])));
  },
  isAmino(o: any): o is FullGrantAuthorizationsAmino {
    return o && (o.$typeUrl === FullGrantAuthorizations.typeUrl || typeof o.granter === "string" && typeof o.total_grant_amount === "string" && typeof o.last_delegations_checked_time === "bigint" && Array.isArray(o.grants) && (!o.grants.length || GrantAuthorization.isAmino(o.grants[0])));
  },
  encode(message: FullGrantAuthorizations, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.totalGrantAmount !== "") {
      writer.uint32(18).string(message.totalGrantAmount);
    }
    if (message.lastDelegationsCheckedTime !== BigInt(0)) {
      writer.uint32(24).int64(message.lastDelegationsCheckedTime);
    }
    for (const v of message.grants) {
      GrantAuthorization.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FullGrantAuthorizations {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFullGrantAuthorizations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.totalGrantAmount = reader.string();
          break;
        case 3:
          message.lastDelegationsCheckedTime = reader.int64();
          break;
        case 4:
          message.grants.push(GrantAuthorization.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FullGrantAuthorizations>): FullGrantAuthorizations {
    const message = createBaseFullGrantAuthorizations();
    message.granter = object.granter ?? "";
    message.totalGrantAmount = object.totalGrantAmount ?? "";
    message.lastDelegationsCheckedTime = object.lastDelegationsCheckedTime !== undefined && object.lastDelegationsCheckedTime !== null ? BigInt(object.lastDelegationsCheckedTime.toString()) : BigInt(0);
    message.grants = object.grants?.map(e => GrantAuthorization.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: FullGrantAuthorizationsAmino): FullGrantAuthorizations {
    const message = createBaseFullGrantAuthorizations();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.total_grant_amount !== undefined && object.total_grant_amount !== null) {
      message.totalGrantAmount = object.total_grant_amount;
    }
    if (object.last_delegations_checked_time !== undefined && object.last_delegations_checked_time !== null) {
      message.lastDelegationsCheckedTime = BigInt(object.last_delegations_checked_time);
    }
    message.grants = object.grants?.map(e => GrantAuthorization.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: FullGrantAuthorizations): FullGrantAuthorizationsAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.total_grant_amount = message.totalGrantAmount === "" ? undefined : message.totalGrantAmount;
    obj.last_delegations_checked_time = message.lastDelegationsCheckedTime !== BigInt(0) ? message.lastDelegationsCheckedTime?.toString() : undefined;
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? GrantAuthorization.toAmino(e) : undefined);
    } else {
      obj.grants = message.grants;
    }
    return obj;
  },
  fromAminoMsg(object: FullGrantAuthorizationsAminoMsg): FullGrantAuthorizations {
    return FullGrantAuthorizations.fromAmino(object.value);
  },
  fromProtoMsg(message: FullGrantAuthorizationsProtoMsg): FullGrantAuthorizations {
    return FullGrantAuthorizations.decode(message.value);
  },
  toProto(message: FullGrantAuthorizations): Uint8Array {
    return FullGrantAuthorizations.encode(message).finish();
  },
  toProtoMsg(message: FullGrantAuthorizations): FullGrantAuthorizationsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.FullGrantAuthorizations",
      value: FullGrantAuthorizations.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FullGrantAuthorizations.typeUrl, FullGrantAuthorizations);
function createBaseFullActiveGrant(): FullActiveGrant {
  return {
    grantee: "",
    activeGrant: undefined
  };
}
export const FullActiveGrant = {
  typeUrl: "/injective.exchange.v1beta1.FullActiveGrant",
  is(o: any): o is FullActiveGrant {
    return o && (o.$typeUrl === FullActiveGrant.typeUrl || typeof o.grantee === "string");
  },
  isAmino(o: any): o is FullActiveGrantAmino {
    return o && (o.$typeUrl === FullActiveGrant.typeUrl || typeof o.grantee === "string");
  },
  encode(message: FullActiveGrant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.activeGrant !== undefined) {
      ActiveGrant.encode(message.activeGrant, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FullActiveGrant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFullActiveGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.activeGrant = ActiveGrant.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FullActiveGrant>): FullActiveGrant {
    const message = createBaseFullActiveGrant();
    message.grantee = object.grantee ?? "";
    message.activeGrant = object.activeGrant !== undefined && object.activeGrant !== null ? ActiveGrant.fromPartial(object.activeGrant) : undefined;
    return message;
  },
  fromAmino(object: FullActiveGrantAmino): FullActiveGrant {
    const message = createBaseFullActiveGrant();
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.active_grant !== undefined && object.active_grant !== null) {
      message.activeGrant = ActiveGrant.fromAmino(object.active_grant);
    }
    return message;
  },
  toAmino(message: FullActiveGrant): FullActiveGrantAmino {
    const obj: any = {};
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.active_grant = message.activeGrant ? ActiveGrant.toAmino(message.activeGrant) : undefined;
    return obj;
  },
  fromAminoMsg(object: FullActiveGrantAminoMsg): FullActiveGrant {
    return FullActiveGrant.fromAmino(object.value);
  },
  fromProtoMsg(message: FullActiveGrantProtoMsg): FullActiveGrant {
    return FullActiveGrant.decode(message.value);
  },
  toProto(message: FullActiveGrant): Uint8Array {
    return FullActiveGrant.encode(message).finish();
  },
  toProtoMsg(message: FullActiveGrant): FullActiveGrantProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.FullActiveGrant",
      value: FullActiveGrant.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FullActiveGrant.typeUrl, FullActiveGrant);