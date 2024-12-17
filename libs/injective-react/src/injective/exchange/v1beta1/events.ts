import { ExecutionType, TradeLog, TradeLogAmino, DerivativeTradeLog, DerivativeTradeLogAmino, SubaccountPosition, SubaccountPositionAmino, BinaryOptionsMarket, BinaryOptionsMarketAmino, SpotLimitOrder, SpotLimitOrderAmino, DerivativeLimitOrder, DerivativeLimitOrderAmino, SpotMarket, SpotMarketAmino, DerivativeMarket, DerivativeMarketAmino, PerpetualMarketInfo, PerpetualMarketInfoAmino, PerpetualMarketFunding, PerpetualMarketFundingAmino, ExpiryFuturesMarketInfo, ExpiryFuturesMarketInfoAmino, DepositUpdate, DepositUpdateAmino, DerivativeMarketOrder, DerivativeMarketOrderAmino, FeeDiscountSchedule, FeeDiscountScheduleAmino, TradingRewardCampaignInfo, TradingRewardCampaignInfoAmino, CampaignRewardPool, CampaignRewardPoolAmino, AccountRewards, AccountRewardsAmino, DerivativeOrder, DerivativeOrderAmino, MarketFeeMultiplier, MarketFeeMultiplierAmino, Level, LevelAmino, GrantAuthorization, GrantAuthorizationAmino } from "./exchange";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export interface EventBatchSpotExecution {
  marketId: string;
  isBuy: boolean;
  executionType: ExecutionType;
  trades: TradeLog[];
}
export interface EventBatchSpotExecutionProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventBatchSpotExecution";
  value: Uint8Array;
}
export interface EventBatchSpotExecutionAmino {
  market_id: string;
  is_buy: boolean;
  executionType: ExecutionType;
  trades: TradeLogAmino[];
}
export interface EventBatchSpotExecutionAminoMsg {
  type: "/injective.exchange.v1beta1.EventBatchSpotExecution";
  value: EventBatchSpotExecutionAmino;
}
export interface EventBatchDerivativeExecution {
  marketId: string;
  isBuy: boolean;
  isLiquidation: boolean;
  /** nil for time expiry futures */
  cumulativeFunding?: string;
  executionType: ExecutionType;
  trades: DerivativeTradeLog[];
}
export interface EventBatchDerivativeExecutionProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventBatchDerivativeExecution";
  value: Uint8Array;
}
export interface EventBatchDerivativeExecutionAmino {
  market_id: string;
  is_buy: boolean;
  is_liquidation: boolean;
  /** nil for time expiry futures */
  cumulative_funding?: string;
  executionType: ExecutionType;
  trades: DerivativeTradeLogAmino[];
}
export interface EventBatchDerivativeExecutionAminoMsg {
  type: "/injective.exchange.v1beta1.EventBatchDerivativeExecution";
  value: EventBatchDerivativeExecutionAmino;
}
export interface EventLostFundsFromLiquidation {
  marketId: string;
  subaccountId: Uint8Array;
  lostFundsFromAvailableDuringPayout: string;
  lostFundsFromOrderCancels: string;
}
export interface EventLostFundsFromLiquidationProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventLostFundsFromLiquidation";
  value: Uint8Array;
}
export interface EventLostFundsFromLiquidationAmino {
  market_id: string;
  subaccount_id: string;
  lost_funds_from_available_during_payout: string;
  lost_funds_from_order_cancels: string;
}
export interface EventLostFundsFromLiquidationAminoMsg {
  type: "/injective.exchange.v1beta1.EventLostFundsFromLiquidation";
  value: EventLostFundsFromLiquidationAmino;
}
export interface EventBatchDerivativePosition {
  marketId: string;
  positions: SubaccountPosition[];
}
export interface EventBatchDerivativePositionProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventBatchDerivativePosition";
  value: Uint8Array;
}
export interface EventBatchDerivativePositionAmino {
  market_id: string;
  positions: SubaccountPositionAmino[];
}
export interface EventBatchDerivativePositionAminoMsg {
  type: "/injective.exchange.v1beta1.EventBatchDerivativePosition";
  value: EventBatchDerivativePositionAmino;
}
export interface EventDerivativeMarketPaused {
  marketId: string;
  settlePrice: string;
  totalMissingFunds: string;
  missingFundsRate: string;
}
export interface EventDerivativeMarketPausedProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventDerivativeMarketPaused";
  value: Uint8Array;
}
export interface EventDerivativeMarketPausedAmino {
  market_id: string;
  settle_price: string;
  total_missing_funds: string;
  missing_funds_rate: string;
}
export interface EventDerivativeMarketPausedAminoMsg {
  type: "/injective.exchange.v1beta1.EventDerivativeMarketPaused";
  value: EventDerivativeMarketPausedAmino;
}
export interface EventMarketBeyondBankruptcy {
  marketId: string;
  settlePrice: string;
  missingMarketFunds: string;
}
export interface EventMarketBeyondBankruptcyProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventMarketBeyondBankruptcy";
  value: Uint8Array;
}
export interface EventMarketBeyondBankruptcyAmino {
  market_id: string;
  settle_price: string;
  missing_market_funds: string;
}
export interface EventMarketBeyondBankruptcyAminoMsg {
  type: "/injective.exchange.v1beta1.EventMarketBeyondBankruptcy";
  value: EventMarketBeyondBankruptcyAmino;
}
export interface EventAllPositionsHaircut {
  marketId: string;
  settlePrice: string;
  missingFundsRate: string;
}
export interface EventAllPositionsHaircutProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventAllPositionsHaircut";
  value: Uint8Array;
}
export interface EventAllPositionsHaircutAmino {
  market_id: string;
  settle_price: string;
  missing_funds_rate: string;
}
export interface EventAllPositionsHaircutAminoMsg {
  type: "/injective.exchange.v1beta1.EventAllPositionsHaircut";
  value: EventAllPositionsHaircutAmino;
}
export interface EventBinaryOptionsMarketUpdate {
  market: BinaryOptionsMarket;
}
export interface EventBinaryOptionsMarketUpdateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventBinaryOptionsMarketUpdate";
  value: Uint8Array;
}
export interface EventBinaryOptionsMarketUpdateAmino {
  market: BinaryOptionsMarketAmino;
}
export interface EventBinaryOptionsMarketUpdateAminoMsg {
  type: "/injective.exchange.v1beta1.EventBinaryOptionsMarketUpdate";
  value: EventBinaryOptionsMarketUpdateAmino;
}
export interface EventNewSpotOrders {
  marketId: string;
  buyOrders: SpotLimitOrder[];
  sellOrders: SpotLimitOrder[];
}
export interface EventNewSpotOrdersProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventNewSpotOrders";
  value: Uint8Array;
}
export interface EventNewSpotOrdersAmino {
  market_id: string;
  buy_orders: SpotLimitOrderAmino[];
  sell_orders: SpotLimitOrderAmino[];
}
export interface EventNewSpotOrdersAminoMsg {
  type: "/injective.exchange.v1beta1.EventNewSpotOrders";
  value: EventNewSpotOrdersAmino;
}
export interface EventNewDerivativeOrders {
  marketId: string;
  buyOrders: DerivativeLimitOrder[];
  sellOrders: DerivativeLimitOrder[];
}
export interface EventNewDerivativeOrdersProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventNewDerivativeOrders";
  value: Uint8Array;
}
export interface EventNewDerivativeOrdersAmino {
  market_id: string;
  buy_orders: DerivativeLimitOrderAmino[];
  sell_orders: DerivativeLimitOrderAmino[];
}
export interface EventNewDerivativeOrdersAminoMsg {
  type: "/injective.exchange.v1beta1.EventNewDerivativeOrders";
  value: EventNewDerivativeOrdersAmino;
}
export interface EventCancelSpotOrder {
  marketId: string;
  order: SpotLimitOrder;
}
export interface EventCancelSpotOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventCancelSpotOrder";
  value: Uint8Array;
}
export interface EventCancelSpotOrderAmino {
  market_id: string;
  order: SpotLimitOrderAmino;
}
export interface EventCancelSpotOrderAminoMsg {
  type: "/injective.exchange.v1beta1.EventCancelSpotOrder";
  value: EventCancelSpotOrderAmino;
}
export interface EventSpotMarketUpdate {
  market: SpotMarket;
}
export interface EventSpotMarketUpdateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventSpotMarketUpdate";
  value: Uint8Array;
}
export interface EventSpotMarketUpdateAmino {
  market: SpotMarketAmino;
}
export interface EventSpotMarketUpdateAminoMsg {
  type: "/injective.exchange.v1beta1.EventSpotMarketUpdate";
  value: EventSpotMarketUpdateAmino;
}
export interface EventPerpetualMarketUpdate {
  market: DerivativeMarket;
  perpetualMarketInfo?: PerpetualMarketInfo;
  funding?: PerpetualMarketFunding;
}
export interface EventPerpetualMarketUpdateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventPerpetualMarketUpdate";
  value: Uint8Array;
}
export interface EventPerpetualMarketUpdateAmino {
  market: DerivativeMarketAmino;
  perpetual_market_info?: PerpetualMarketInfoAmino;
  funding?: PerpetualMarketFundingAmino;
}
export interface EventPerpetualMarketUpdateAminoMsg {
  type: "/injective.exchange.v1beta1.EventPerpetualMarketUpdate";
  value: EventPerpetualMarketUpdateAmino;
}
export interface EventExpiryFuturesMarketUpdate {
  market: DerivativeMarket;
  expiryFuturesMarketInfo?: ExpiryFuturesMarketInfo;
}
export interface EventExpiryFuturesMarketUpdateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate";
  value: Uint8Array;
}
export interface EventExpiryFuturesMarketUpdateAmino {
  market: DerivativeMarketAmino;
  expiry_futures_market_info?: ExpiryFuturesMarketInfoAmino;
}
export interface EventExpiryFuturesMarketUpdateAminoMsg {
  type: "/injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate";
  value: EventExpiryFuturesMarketUpdateAmino;
}
export interface EventPerpetualMarketFundingUpdate {
  marketId: string;
  funding: PerpetualMarketFunding;
  isHourlyFunding: boolean;
  fundingRate?: string;
  markPrice?: string;
}
export interface EventPerpetualMarketFundingUpdateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate";
  value: Uint8Array;
}
export interface EventPerpetualMarketFundingUpdateAmino {
  market_id: string;
  funding: PerpetualMarketFundingAmino;
  is_hourly_funding: boolean;
  funding_rate?: string;
  mark_price?: string;
}
export interface EventPerpetualMarketFundingUpdateAminoMsg {
  type: "/injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate";
  value: EventPerpetualMarketFundingUpdateAmino;
}
export interface EventSubaccountDeposit {
  srcAddress: string;
  subaccountId: Uint8Array;
  amount: Coin;
}
export interface EventSubaccountDepositProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventSubaccountDeposit";
  value: Uint8Array;
}
export interface EventSubaccountDepositAmino {
  src_address: string;
  subaccount_id: string;
  amount: CoinAmino;
}
export interface EventSubaccountDepositAminoMsg {
  type: "/injective.exchange.v1beta1.EventSubaccountDeposit";
  value: EventSubaccountDepositAmino;
}
export interface EventSubaccountWithdraw {
  subaccountId: Uint8Array;
  dstAddress: string;
  amount: Coin;
}
export interface EventSubaccountWithdrawProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventSubaccountWithdraw";
  value: Uint8Array;
}
export interface EventSubaccountWithdrawAmino {
  subaccount_id: string;
  dst_address: string;
  amount: CoinAmino;
}
export interface EventSubaccountWithdrawAminoMsg {
  type: "/injective.exchange.v1beta1.EventSubaccountWithdraw";
  value: EventSubaccountWithdrawAmino;
}
export interface EventSubaccountBalanceTransfer {
  srcSubaccountId: string;
  dstSubaccountId: string;
  amount: Coin;
}
export interface EventSubaccountBalanceTransferProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventSubaccountBalanceTransfer";
  value: Uint8Array;
}
export interface EventSubaccountBalanceTransferAmino {
  src_subaccount_id: string;
  dst_subaccount_id: string;
  amount: CoinAmino;
}
export interface EventSubaccountBalanceTransferAminoMsg {
  type: "/injective.exchange.v1beta1.EventSubaccountBalanceTransfer";
  value: EventSubaccountBalanceTransferAmino;
}
export interface EventBatchDepositUpdate {
  depositUpdates: DepositUpdate[];
}
export interface EventBatchDepositUpdateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventBatchDepositUpdate";
  value: Uint8Array;
}
export interface EventBatchDepositUpdateAmino {
  deposit_updates: DepositUpdateAmino[];
}
export interface EventBatchDepositUpdateAminoMsg {
  type: "/injective.exchange.v1beta1.EventBatchDepositUpdate";
  value: EventBatchDepositUpdateAmino;
}
export interface DerivativeMarketOrderCancel {
  marketOrder?: DerivativeMarketOrder;
  cancelQuantity: string;
}
export interface DerivativeMarketOrderCancelProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DerivativeMarketOrderCancel";
  value: Uint8Array;
}
export interface DerivativeMarketOrderCancelAmino {
  market_order?: DerivativeMarketOrderAmino;
  cancel_quantity: string;
}
export interface DerivativeMarketOrderCancelAminoMsg {
  type: "/injective.exchange.v1beta1.DerivativeMarketOrderCancel";
  value: DerivativeMarketOrderCancelAmino;
}
export interface EventCancelDerivativeOrder {
  marketId: string;
  isLimitCancel: boolean;
  limitOrder?: DerivativeLimitOrder;
  marketOrderCancel?: DerivativeMarketOrderCancel;
}
export interface EventCancelDerivativeOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventCancelDerivativeOrder";
  value: Uint8Array;
}
export interface EventCancelDerivativeOrderAmino {
  market_id: string;
  isLimitCancel: boolean;
  limit_order?: DerivativeLimitOrderAmino;
  market_order_cancel?: DerivativeMarketOrderCancelAmino;
}
export interface EventCancelDerivativeOrderAminoMsg {
  type: "/injective.exchange.v1beta1.EventCancelDerivativeOrder";
  value: EventCancelDerivativeOrderAmino;
}
export interface EventFeeDiscountSchedule {
  schedule?: FeeDiscountSchedule;
}
export interface EventFeeDiscountScheduleProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventFeeDiscountSchedule";
  value: Uint8Array;
}
export interface EventFeeDiscountScheduleAmino {
  schedule?: FeeDiscountScheduleAmino;
}
export interface EventFeeDiscountScheduleAminoMsg {
  type: "/injective.exchange.v1beta1.EventFeeDiscountSchedule";
  value: EventFeeDiscountScheduleAmino;
}
export interface EventTradingRewardCampaignUpdate {
  campaignInfo?: TradingRewardCampaignInfo;
  campaignRewardPools: CampaignRewardPool[];
}
export interface EventTradingRewardCampaignUpdateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventTradingRewardCampaignUpdate";
  value: Uint8Array;
}
export interface EventTradingRewardCampaignUpdateAmino {
  campaign_info?: TradingRewardCampaignInfoAmino;
  campaign_reward_pools: CampaignRewardPoolAmino[];
}
export interface EventTradingRewardCampaignUpdateAminoMsg {
  type: "/injective.exchange.v1beta1.EventTradingRewardCampaignUpdate";
  value: EventTradingRewardCampaignUpdateAmino;
}
export interface EventTradingRewardDistribution {
  accountRewards: AccountRewards[];
}
export interface EventTradingRewardDistributionProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventTradingRewardDistribution";
  value: Uint8Array;
}
export interface EventTradingRewardDistributionAmino {
  account_rewards: AccountRewardsAmino[];
}
export interface EventTradingRewardDistributionAminoMsg {
  type: "/injective.exchange.v1beta1.EventTradingRewardDistribution";
  value: EventTradingRewardDistributionAmino;
}
export interface EventNewConditionalDerivativeOrder {
  marketId: string;
  order?: DerivativeOrder;
  hash: Uint8Array;
  isMarket: boolean;
}
export interface EventNewConditionalDerivativeOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventNewConditionalDerivativeOrder";
  value: Uint8Array;
}
export interface EventNewConditionalDerivativeOrderAmino {
  market_id: string;
  order?: DerivativeOrderAmino;
  hash: string;
  is_market: boolean;
}
export interface EventNewConditionalDerivativeOrderAminoMsg {
  type: "/injective.exchange.v1beta1.EventNewConditionalDerivativeOrder";
  value: EventNewConditionalDerivativeOrderAmino;
}
export interface EventCancelConditionalDerivativeOrder {
  marketId: string;
  isLimitCancel: boolean;
  limitOrder?: DerivativeLimitOrder;
  marketOrder?: DerivativeMarketOrder;
}
export interface EventCancelConditionalDerivativeOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventCancelConditionalDerivativeOrder";
  value: Uint8Array;
}
export interface EventCancelConditionalDerivativeOrderAmino {
  market_id: string;
  isLimitCancel: boolean;
  limit_order?: DerivativeLimitOrderAmino;
  market_order?: DerivativeMarketOrderAmino;
}
export interface EventCancelConditionalDerivativeOrderAminoMsg {
  type: "/injective.exchange.v1beta1.EventCancelConditionalDerivativeOrder";
  value: EventCancelConditionalDerivativeOrderAmino;
}
export interface EventConditionalDerivativeOrderTrigger {
  marketId: Uint8Array;
  isLimitTrigger: boolean;
  triggeredOrderHash: Uint8Array;
  placedOrderHash: Uint8Array;
  triggeredOrderCid: string;
}
export interface EventConditionalDerivativeOrderTriggerProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventConditionalDerivativeOrderTrigger";
  value: Uint8Array;
}
export interface EventConditionalDerivativeOrderTriggerAmino {
  market_id: string;
  isLimitTrigger: boolean;
  triggered_order_hash: string;
  placed_order_hash: string;
  triggered_order_cid: string;
}
export interface EventConditionalDerivativeOrderTriggerAminoMsg {
  type: "/injective.exchange.v1beta1.EventConditionalDerivativeOrderTrigger";
  value: EventConditionalDerivativeOrderTriggerAmino;
}
export interface EventOrderFail {
  account: Uint8Array;
  hashes: Uint8Array[];
  flags: number[];
  cids: string[];
}
export interface EventOrderFailProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventOrderFail";
  value: Uint8Array;
}
export interface EventOrderFailAmino {
  account: string;
  hashes: string[];
  flags: number[];
  cids: string[];
}
export interface EventOrderFailAminoMsg {
  type: "/injective.exchange.v1beta1.EventOrderFail";
  value: EventOrderFailAmino;
}
export interface EventAtomicMarketOrderFeeMultipliersUpdated {
  marketFeeMultipliers: MarketFeeMultiplier[];
}
export interface EventAtomicMarketOrderFeeMultipliersUpdatedProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventAtomicMarketOrderFeeMultipliersUpdated";
  value: Uint8Array;
}
export interface EventAtomicMarketOrderFeeMultipliersUpdatedAmino {
  market_fee_multipliers: MarketFeeMultiplierAmino[];
}
export interface EventAtomicMarketOrderFeeMultipliersUpdatedAminoMsg {
  type: "/injective.exchange.v1beta1.EventAtomicMarketOrderFeeMultipliersUpdated";
  value: EventAtomicMarketOrderFeeMultipliersUpdatedAmino;
}
export interface EventOrderbookUpdate {
  spotUpdates: OrderbookUpdate[];
  derivativeUpdates: OrderbookUpdate[];
}
export interface EventOrderbookUpdateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventOrderbookUpdate";
  value: Uint8Array;
}
export interface EventOrderbookUpdateAmino {
  spot_updates: OrderbookUpdateAmino[];
  derivative_updates: OrderbookUpdateAmino[];
}
export interface EventOrderbookUpdateAminoMsg {
  type: "/injective.exchange.v1beta1.EventOrderbookUpdate";
  value: EventOrderbookUpdateAmino;
}
export interface OrderbookUpdate {
  seq: bigint;
  orderbook?: Orderbook;
}
export interface OrderbookUpdateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.OrderbookUpdate";
  value: Uint8Array;
}
export interface OrderbookUpdateAmino {
  seq: string;
  orderbook?: OrderbookAmino;
}
export interface OrderbookUpdateAminoMsg {
  type: "/injective.exchange.v1beta1.OrderbookUpdate";
  value: OrderbookUpdateAmino;
}
export interface Orderbook {
  marketId: Uint8Array;
  buyLevels: Level[];
  sellLevels: Level[];
}
export interface OrderbookProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.Orderbook";
  value: Uint8Array;
}
export interface OrderbookAmino {
  market_id: string;
  buy_levels: LevelAmino[];
  sell_levels: LevelAmino[];
}
export interface OrderbookAminoMsg {
  type: "/injective.exchange.v1beta1.Orderbook";
  value: OrderbookAmino;
}
export interface EventGrantAuthorizations {
  granter: string;
  grants: GrantAuthorization[];
}
export interface EventGrantAuthorizationsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventGrantAuthorizations";
  value: Uint8Array;
}
export interface EventGrantAuthorizationsAmino {
  granter: string;
  grants: GrantAuthorizationAmino[];
}
export interface EventGrantAuthorizationsAminoMsg {
  type: "/injective.exchange.v1beta1.EventGrantAuthorizations";
  value: EventGrantAuthorizationsAmino;
}
export interface EventGrantActivation {
  grantee: string;
  granter: string;
  amount: string;
}
export interface EventGrantActivationProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventGrantActivation";
  value: Uint8Array;
}
export interface EventGrantActivationAmino {
  grantee: string;
  granter: string;
  amount: string;
}
export interface EventGrantActivationAminoMsg {
  type: "/injective.exchange.v1beta1.EventGrantActivation";
  value: EventGrantActivationAmino;
}
export interface EventInvalidGrant {
  grantee: string;
  granter: string;
}
export interface EventInvalidGrantProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventInvalidGrant";
  value: Uint8Array;
}
export interface EventInvalidGrantAmino {
  grantee: string;
  granter: string;
}
export interface EventInvalidGrantAminoMsg {
  type: "/injective.exchange.v1beta1.EventInvalidGrant";
  value: EventInvalidGrantAmino;
}
export interface EventOrderCancelFail {
  marketId: string;
  subaccountId: string;
  orderHash: string;
  cid: string;
  description: string;
}
export interface EventOrderCancelFailProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventOrderCancelFail";
  value: Uint8Array;
}
export interface EventOrderCancelFailAmino {
  market_id: string;
  subaccount_id: string;
  order_hash: string;
  cid: string;
  description: string;
}
export interface EventOrderCancelFailAminoMsg {
  type: "/injective.exchange.v1beta1.EventOrderCancelFail";
  value: EventOrderCancelFailAmino;
}
function createBaseEventBatchSpotExecution(): EventBatchSpotExecution {
  return {
    marketId: "",
    isBuy: false,
    executionType: 0,
    trades: []
  };
}
export const EventBatchSpotExecution = {
  typeUrl: "/injective.exchange.v1beta1.EventBatchSpotExecution",
  is(o: any): o is EventBatchSpotExecution {
    return o && (o.$typeUrl === EventBatchSpotExecution.typeUrl || typeof o.marketId === "string" && typeof o.isBuy === "boolean" && isSet(o.executionType) && Array.isArray(o.trades) && (!o.trades.length || TradeLog.is(o.trades[0])));
  },
  isAmino(o: any): o is EventBatchSpotExecutionAmino {
    return o && (o.$typeUrl === EventBatchSpotExecution.typeUrl || typeof o.market_id === "string" && typeof o.is_buy === "boolean" && isSet(o.executionType) && Array.isArray(o.trades) && (!o.trades.length || TradeLog.isAmino(o.trades[0])));
  },
  encode(message: EventBatchSpotExecution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.isBuy === true) {
      writer.uint32(16).bool(message.isBuy);
    }
    if (message.executionType !== 0) {
      writer.uint32(24).int32(message.executionType);
    }
    for (const v of message.trades) {
      TradeLog.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBatchSpotExecution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBatchSpotExecution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.isBuy = reader.bool();
          break;
        case 3:
          message.executionType = (reader.int32() as any);
          break;
        case 4:
          message.trades.push(TradeLog.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventBatchSpotExecution>): EventBatchSpotExecution {
    const message = createBaseEventBatchSpotExecution();
    message.marketId = object.marketId ?? "";
    message.isBuy = object.isBuy ?? false;
    message.executionType = object.executionType ?? 0;
    message.trades = object.trades?.map(e => TradeLog.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventBatchSpotExecutionAmino): EventBatchSpotExecution {
    const message = createBaseEventBatchSpotExecution();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.is_buy !== undefined && object.is_buy !== null) {
      message.isBuy = object.is_buy;
    }
    if (object.executionType !== undefined && object.executionType !== null) {
      message.executionType = object.executionType;
    }
    message.trades = object.trades?.map(e => TradeLog.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EventBatchSpotExecution): EventBatchSpotExecutionAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.is_buy = message.isBuy === false ? undefined : message.isBuy;
    obj.executionType = message.executionType === 0 ? undefined : message.executionType;
    if (message.trades) {
      obj.trades = message.trades.map(e => e ? TradeLog.toAmino(e) : undefined);
    } else {
      obj.trades = message.trades;
    }
    return obj;
  },
  fromAminoMsg(object: EventBatchSpotExecutionAminoMsg): EventBatchSpotExecution {
    return EventBatchSpotExecution.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBatchSpotExecutionProtoMsg): EventBatchSpotExecution {
    return EventBatchSpotExecution.decode(message.value);
  },
  toProto(message: EventBatchSpotExecution): Uint8Array {
    return EventBatchSpotExecution.encode(message).finish();
  },
  toProtoMsg(message: EventBatchSpotExecution): EventBatchSpotExecutionProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventBatchSpotExecution",
      value: EventBatchSpotExecution.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventBatchSpotExecution.typeUrl, EventBatchSpotExecution);
function createBaseEventBatchDerivativeExecution(): EventBatchDerivativeExecution {
  return {
    marketId: "",
    isBuy: false,
    isLiquidation: false,
    cumulativeFunding: undefined,
    executionType: 0,
    trades: []
  };
}
export const EventBatchDerivativeExecution = {
  typeUrl: "/injective.exchange.v1beta1.EventBatchDerivativeExecution",
  is(o: any): o is EventBatchDerivativeExecution {
    return o && (o.$typeUrl === EventBatchDerivativeExecution.typeUrl || typeof o.marketId === "string" && typeof o.isBuy === "boolean" && typeof o.isLiquidation === "boolean" && isSet(o.executionType) && Array.isArray(o.trades) && (!o.trades.length || DerivativeTradeLog.is(o.trades[0])));
  },
  isAmino(o: any): o is EventBatchDerivativeExecutionAmino {
    return o && (o.$typeUrl === EventBatchDerivativeExecution.typeUrl || typeof o.market_id === "string" && typeof o.is_buy === "boolean" && typeof o.is_liquidation === "boolean" && isSet(o.executionType) && Array.isArray(o.trades) && (!o.trades.length || DerivativeTradeLog.isAmino(o.trades[0])));
  },
  encode(message: EventBatchDerivativeExecution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.isBuy === true) {
      writer.uint32(16).bool(message.isBuy);
    }
    if (message.isLiquidation === true) {
      writer.uint32(24).bool(message.isLiquidation);
    }
    if (message.cumulativeFunding !== undefined) {
      writer.uint32(34).string(message.cumulativeFunding);
    }
    if (message.executionType !== 0) {
      writer.uint32(40).int32(message.executionType);
    }
    for (const v of message.trades) {
      DerivativeTradeLog.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBatchDerivativeExecution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBatchDerivativeExecution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.isBuy = reader.bool();
          break;
        case 3:
          message.isLiquidation = reader.bool();
          break;
        case 4:
          message.cumulativeFunding = reader.string();
          break;
        case 5:
          message.executionType = (reader.int32() as any);
          break;
        case 6:
          message.trades.push(DerivativeTradeLog.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventBatchDerivativeExecution>): EventBatchDerivativeExecution {
    const message = createBaseEventBatchDerivativeExecution();
    message.marketId = object.marketId ?? "";
    message.isBuy = object.isBuy ?? false;
    message.isLiquidation = object.isLiquidation ?? false;
    message.cumulativeFunding = object.cumulativeFunding ?? undefined;
    message.executionType = object.executionType ?? 0;
    message.trades = object.trades?.map(e => DerivativeTradeLog.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventBatchDerivativeExecutionAmino): EventBatchDerivativeExecution {
    const message = createBaseEventBatchDerivativeExecution();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.is_buy !== undefined && object.is_buy !== null) {
      message.isBuy = object.is_buy;
    }
    if (object.is_liquidation !== undefined && object.is_liquidation !== null) {
      message.isLiquidation = object.is_liquidation;
    }
    if (object.cumulative_funding !== undefined && object.cumulative_funding !== null) {
      message.cumulativeFunding = object.cumulative_funding;
    }
    if (object.executionType !== undefined && object.executionType !== null) {
      message.executionType = object.executionType;
    }
    message.trades = object.trades?.map(e => DerivativeTradeLog.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EventBatchDerivativeExecution): EventBatchDerivativeExecutionAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.is_buy = message.isBuy === false ? undefined : message.isBuy;
    obj.is_liquidation = message.isLiquidation === false ? undefined : message.isLiquidation;
    obj.cumulative_funding = message.cumulativeFunding === null ? undefined : message.cumulativeFunding;
    obj.executionType = message.executionType === 0 ? undefined : message.executionType;
    if (message.trades) {
      obj.trades = message.trades.map(e => e ? DerivativeTradeLog.toAmino(e) : undefined);
    } else {
      obj.trades = message.trades;
    }
    return obj;
  },
  fromAminoMsg(object: EventBatchDerivativeExecutionAminoMsg): EventBatchDerivativeExecution {
    return EventBatchDerivativeExecution.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBatchDerivativeExecutionProtoMsg): EventBatchDerivativeExecution {
    return EventBatchDerivativeExecution.decode(message.value);
  },
  toProto(message: EventBatchDerivativeExecution): Uint8Array {
    return EventBatchDerivativeExecution.encode(message).finish();
  },
  toProtoMsg(message: EventBatchDerivativeExecution): EventBatchDerivativeExecutionProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventBatchDerivativeExecution",
      value: EventBatchDerivativeExecution.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventBatchDerivativeExecution.typeUrl, EventBatchDerivativeExecution);
function createBaseEventLostFundsFromLiquidation(): EventLostFundsFromLiquidation {
  return {
    marketId: "",
    subaccountId: new Uint8Array(),
    lostFundsFromAvailableDuringPayout: "",
    lostFundsFromOrderCancels: ""
  };
}
export const EventLostFundsFromLiquidation = {
  typeUrl: "/injective.exchange.v1beta1.EventLostFundsFromLiquidation",
  is(o: any): o is EventLostFundsFromLiquidation {
    return o && (o.$typeUrl === EventLostFundsFromLiquidation.typeUrl || typeof o.marketId === "string" && (o.subaccountId instanceof Uint8Array || typeof o.subaccountId === "string") && typeof o.lostFundsFromAvailableDuringPayout === "string" && typeof o.lostFundsFromOrderCancels === "string");
  },
  isAmino(o: any): o is EventLostFundsFromLiquidationAmino {
    return o && (o.$typeUrl === EventLostFundsFromLiquidation.typeUrl || typeof o.market_id === "string" && (o.subaccount_id instanceof Uint8Array || typeof o.subaccount_id === "string") && typeof o.lost_funds_from_available_during_payout === "string" && typeof o.lost_funds_from_order_cancels === "string");
  },
  encode(message: EventLostFundsFromLiquidation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId.length !== 0) {
      writer.uint32(18).bytes(message.subaccountId);
    }
    if (message.lostFundsFromAvailableDuringPayout !== "") {
      writer.uint32(26).string(message.lostFundsFromAvailableDuringPayout);
    }
    if (message.lostFundsFromOrderCancels !== "") {
      writer.uint32(34).string(message.lostFundsFromOrderCancels);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventLostFundsFromLiquidation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLostFundsFromLiquidation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.subaccountId = reader.bytes();
          break;
        case 3:
          message.lostFundsFromAvailableDuringPayout = reader.string();
          break;
        case 4:
          message.lostFundsFromOrderCancels = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventLostFundsFromLiquidation>): EventLostFundsFromLiquidation {
    const message = createBaseEventLostFundsFromLiquidation();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? new Uint8Array();
    message.lostFundsFromAvailableDuringPayout = object.lostFundsFromAvailableDuringPayout ?? "";
    message.lostFundsFromOrderCancels = object.lostFundsFromOrderCancels ?? "";
    return message;
  },
  fromAmino(object: EventLostFundsFromLiquidationAmino): EventLostFundsFromLiquidation {
    const message = createBaseEventLostFundsFromLiquidation();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = bytesFromBase64(object.subaccount_id);
    }
    if (object.lost_funds_from_available_during_payout !== undefined && object.lost_funds_from_available_during_payout !== null) {
      message.lostFundsFromAvailableDuringPayout = object.lost_funds_from_available_during_payout;
    }
    if (object.lost_funds_from_order_cancels !== undefined && object.lost_funds_from_order_cancels !== null) {
      message.lostFundsFromOrderCancels = object.lost_funds_from_order_cancels;
    }
    return message;
  },
  toAmino(message: EventLostFundsFromLiquidation): EventLostFundsFromLiquidationAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.subaccount_id = message.subaccountId ? base64FromBytes(message.subaccountId) : undefined;
    obj.lost_funds_from_available_during_payout = message.lostFundsFromAvailableDuringPayout === "" ? undefined : message.lostFundsFromAvailableDuringPayout;
    obj.lost_funds_from_order_cancels = message.lostFundsFromOrderCancels === "" ? undefined : message.lostFundsFromOrderCancels;
    return obj;
  },
  fromAminoMsg(object: EventLostFundsFromLiquidationAminoMsg): EventLostFundsFromLiquidation {
    return EventLostFundsFromLiquidation.fromAmino(object.value);
  },
  fromProtoMsg(message: EventLostFundsFromLiquidationProtoMsg): EventLostFundsFromLiquidation {
    return EventLostFundsFromLiquidation.decode(message.value);
  },
  toProto(message: EventLostFundsFromLiquidation): Uint8Array {
    return EventLostFundsFromLiquidation.encode(message).finish();
  },
  toProtoMsg(message: EventLostFundsFromLiquidation): EventLostFundsFromLiquidationProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventLostFundsFromLiquidation",
      value: EventLostFundsFromLiquidation.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventLostFundsFromLiquidation.typeUrl, EventLostFundsFromLiquidation);
function createBaseEventBatchDerivativePosition(): EventBatchDerivativePosition {
  return {
    marketId: "",
    positions: []
  };
}
export const EventBatchDerivativePosition = {
  typeUrl: "/injective.exchange.v1beta1.EventBatchDerivativePosition",
  is(o: any): o is EventBatchDerivativePosition {
    return o && (o.$typeUrl === EventBatchDerivativePosition.typeUrl || typeof o.marketId === "string" && Array.isArray(o.positions) && (!o.positions.length || SubaccountPosition.is(o.positions[0])));
  },
  isAmino(o: any): o is EventBatchDerivativePositionAmino {
    return o && (o.$typeUrl === EventBatchDerivativePosition.typeUrl || typeof o.market_id === "string" && Array.isArray(o.positions) && (!o.positions.length || SubaccountPosition.isAmino(o.positions[0])));
  },
  encode(message: EventBatchDerivativePosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    for (const v of message.positions) {
      SubaccountPosition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBatchDerivativePosition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBatchDerivativePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.positions.push(SubaccountPosition.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventBatchDerivativePosition>): EventBatchDerivativePosition {
    const message = createBaseEventBatchDerivativePosition();
    message.marketId = object.marketId ?? "";
    message.positions = object.positions?.map(e => SubaccountPosition.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventBatchDerivativePositionAmino): EventBatchDerivativePosition {
    const message = createBaseEventBatchDerivativePosition();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    message.positions = object.positions?.map(e => SubaccountPosition.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EventBatchDerivativePosition): EventBatchDerivativePositionAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    if (message.positions) {
      obj.positions = message.positions.map(e => e ? SubaccountPosition.toAmino(e) : undefined);
    } else {
      obj.positions = message.positions;
    }
    return obj;
  },
  fromAminoMsg(object: EventBatchDerivativePositionAminoMsg): EventBatchDerivativePosition {
    return EventBatchDerivativePosition.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBatchDerivativePositionProtoMsg): EventBatchDerivativePosition {
    return EventBatchDerivativePosition.decode(message.value);
  },
  toProto(message: EventBatchDerivativePosition): Uint8Array {
    return EventBatchDerivativePosition.encode(message).finish();
  },
  toProtoMsg(message: EventBatchDerivativePosition): EventBatchDerivativePositionProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventBatchDerivativePosition",
      value: EventBatchDerivativePosition.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventBatchDerivativePosition.typeUrl, EventBatchDerivativePosition);
function createBaseEventDerivativeMarketPaused(): EventDerivativeMarketPaused {
  return {
    marketId: "",
    settlePrice: "",
    totalMissingFunds: "",
    missingFundsRate: ""
  };
}
export const EventDerivativeMarketPaused = {
  typeUrl: "/injective.exchange.v1beta1.EventDerivativeMarketPaused",
  is(o: any): o is EventDerivativeMarketPaused {
    return o && (o.$typeUrl === EventDerivativeMarketPaused.typeUrl || typeof o.marketId === "string" && typeof o.settlePrice === "string" && typeof o.totalMissingFunds === "string" && typeof o.missingFundsRate === "string");
  },
  isAmino(o: any): o is EventDerivativeMarketPausedAmino {
    return o && (o.$typeUrl === EventDerivativeMarketPaused.typeUrl || typeof o.market_id === "string" && typeof o.settle_price === "string" && typeof o.total_missing_funds === "string" && typeof o.missing_funds_rate === "string");
  },
  encode(message: EventDerivativeMarketPaused, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.settlePrice !== "") {
      writer.uint32(18).string(message.settlePrice);
    }
    if (message.totalMissingFunds !== "") {
      writer.uint32(26).string(message.totalMissingFunds);
    }
    if (message.missingFundsRate !== "") {
      writer.uint32(34).string(message.missingFundsRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDerivativeMarketPaused {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDerivativeMarketPaused();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.settlePrice = reader.string();
          break;
        case 3:
          message.totalMissingFunds = reader.string();
          break;
        case 4:
          message.missingFundsRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventDerivativeMarketPaused>): EventDerivativeMarketPaused {
    const message = createBaseEventDerivativeMarketPaused();
    message.marketId = object.marketId ?? "";
    message.settlePrice = object.settlePrice ?? "";
    message.totalMissingFunds = object.totalMissingFunds ?? "";
    message.missingFundsRate = object.missingFundsRate ?? "";
    return message;
  },
  fromAmino(object: EventDerivativeMarketPausedAmino): EventDerivativeMarketPaused {
    const message = createBaseEventDerivativeMarketPaused();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.settle_price !== undefined && object.settle_price !== null) {
      message.settlePrice = object.settle_price;
    }
    if (object.total_missing_funds !== undefined && object.total_missing_funds !== null) {
      message.totalMissingFunds = object.total_missing_funds;
    }
    if (object.missing_funds_rate !== undefined && object.missing_funds_rate !== null) {
      message.missingFundsRate = object.missing_funds_rate;
    }
    return message;
  },
  toAmino(message: EventDerivativeMarketPaused): EventDerivativeMarketPausedAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.settle_price = message.settlePrice === "" ? undefined : message.settlePrice;
    obj.total_missing_funds = message.totalMissingFunds === "" ? undefined : message.totalMissingFunds;
    obj.missing_funds_rate = message.missingFundsRate === "" ? undefined : message.missingFundsRate;
    return obj;
  },
  fromAminoMsg(object: EventDerivativeMarketPausedAminoMsg): EventDerivativeMarketPaused {
    return EventDerivativeMarketPaused.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDerivativeMarketPausedProtoMsg): EventDerivativeMarketPaused {
    return EventDerivativeMarketPaused.decode(message.value);
  },
  toProto(message: EventDerivativeMarketPaused): Uint8Array {
    return EventDerivativeMarketPaused.encode(message).finish();
  },
  toProtoMsg(message: EventDerivativeMarketPaused): EventDerivativeMarketPausedProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventDerivativeMarketPaused",
      value: EventDerivativeMarketPaused.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventDerivativeMarketPaused.typeUrl, EventDerivativeMarketPaused);
function createBaseEventMarketBeyondBankruptcy(): EventMarketBeyondBankruptcy {
  return {
    marketId: "",
    settlePrice: "",
    missingMarketFunds: ""
  };
}
export const EventMarketBeyondBankruptcy = {
  typeUrl: "/injective.exchange.v1beta1.EventMarketBeyondBankruptcy",
  is(o: any): o is EventMarketBeyondBankruptcy {
    return o && (o.$typeUrl === EventMarketBeyondBankruptcy.typeUrl || typeof o.marketId === "string" && typeof o.settlePrice === "string" && typeof o.missingMarketFunds === "string");
  },
  isAmino(o: any): o is EventMarketBeyondBankruptcyAmino {
    return o && (o.$typeUrl === EventMarketBeyondBankruptcy.typeUrl || typeof o.market_id === "string" && typeof o.settle_price === "string" && typeof o.missing_market_funds === "string");
  },
  encode(message: EventMarketBeyondBankruptcy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.settlePrice !== "") {
      writer.uint32(18).string(message.settlePrice);
    }
    if (message.missingMarketFunds !== "") {
      writer.uint32(26).string(message.missingMarketFunds);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventMarketBeyondBankruptcy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMarketBeyondBankruptcy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.settlePrice = reader.string();
          break;
        case 3:
          message.missingMarketFunds = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventMarketBeyondBankruptcy>): EventMarketBeyondBankruptcy {
    const message = createBaseEventMarketBeyondBankruptcy();
    message.marketId = object.marketId ?? "";
    message.settlePrice = object.settlePrice ?? "";
    message.missingMarketFunds = object.missingMarketFunds ?? "";
    return message;
  },
  fromAmino(object: EventMarketBeyondBankruptcyAmino): EventMarketBeyondBankruptcy {
    const message = createBaseEventMarketBeyondBankruptcy();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.settle_price !== undefined && object.settle_price !== null) {
      message.settlePrice = object.settle_price;
    }
    if (object.missing_market_funds !== undefined && object.missing_market_funds !== null) {
      message.missingMarketFunds = object.missing_market_funds;
    }
    return message;
  },
  toAmino(message: EventMarketBeyondBankruptcy): EventMarketBeyondBankruptcyAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.settle_price = message.settlePrice === "" ? undefined : message.settlePrice;
    obj.missing_market_funds = message.missingMarketFunds === "" ? undefined : message.missingMarketFunds;
    return obj;
  },
  fromAminoMsg(object: EventMarketBeyondBankruptcyAminoMsg): EventMarketBeyondBankruptcy {
    return EventMarketBeyondBankruptcy.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMarketBeyondBankruptcyProtoMsg): EventMarketBeyondBankruptcy {
    return EventMarketBeyondBankruptcy.decode(message.value);
  },
  toProto(message: EventMarketBeyondBankruptcy): Uint8Array {
    return EventMarketBeyondBankruptcy.encode(message).finish();
  },
  toProtoMsg(message: EventMarketBeyondBankruptcy): EventMarketBeyondBankruptcyProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventMarketBeyondBankruptcy",
      value: EventMarketBeyondBankruptcy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventMarketBeyondBankruptcy.typeUrl, EventMarketBeyondBankruptcy);
function createBaseEventAllPositionsHaircut(): EventAllPositionsHaircut {
  return {
    marketId: "",
    settlePrice: "",
    missingFundsRate: ""
  };
}
export const EventAllPositionsHaircut = {
  typeUrl: "/injective.exchange.v1beta1.EventAllPositionsHaircut",
  is(o: any): o is EventAllPositionsHaircut {
    return o && (o.$typeUrl === EventAllPositionsHaircut.typeUrl || typeof o.marketId === "string" && typeof o.settlePrice === "string" && typeof o.missingFundsRate === "string");
  },
  isAmino(o: any): o is EventAllPositionsHaircutAmino {
    return o && (o.$typeUrl === EventAllPositionsHaircut.typeUrl || typeof o.market_id === "string" && typeof o.settle_price === "string" && typeof o.missing_funds_rate === "string");
  },
  encode(message: EventAllPositionsHaircut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.settlePrice !== "") {
      writer.uint32(18).string(message.settlePrice);
    }
    if (message.missingFundsRate !== "") {
      writer.uint32(26).string(message.missingFundsRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAllPositionsHaircut {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAllPositionsHaircut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.settlePrice = reader.string();
          break;
        case 3:
          message.missingFundsRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventAllPositionsHaircut>): EventAllPositionsHaircut {
    const message = createBaseEventAllPositionsHaircut();
    message.marketId = object.marketId ?? "";
    message.settlePrice = object.settlePrice ?? "";
    message.missingFundsRate = object.missingFundsRate ?? "";
    return message;
  },
  fromAmino(object: EventAllPositionsHaircutAmino): EventAllPositionsHaircut {
    const message = createBaseEventAllPositionsHaircut();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.settle_price !== undefined && object.settle_price !== null) {
      message.settlePrice = object.settle_price;
    }
    if (object.missing_funds_rate !== undefined && object.missing_funds_rate !== null) {
      message.missingFundsRate = object.missing_funds_rate;
    }
    return message;
  },
  toAmino(message: EventAllPositionsHaircut): EventAllPositionsHaircutAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.settle_price = message.settlePrice === "" ? undefined : message.settlePrice;
    obj.missing_funds_rate = message.missingFundsRate === "" ? undefined : message.missingFundsRate;
    return obj;
  },
  fromAminoMsg(object: EventAllPositionsHaircutAminoMsg): EventAllPositionsHaircut {
    return EventAllPositionsHaircut.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAllPositionsHaircutProtoMsg): EventAllPositionsHaircut {
    return EventAllPositionsHaircut.decode(message.value);
  },
  toProto(message: EventAllPositionsHaircut): Uint8Array {
    return EventAllPositionsHaircut.encode(message).finish();
  },
  toProtoMsg(message: EventAllPositionsHaircut): EventAllPositionsHaircutProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventAllPositionsHaircut",
      value: EventAllPositionsHaircut.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventAllPositionsHaircut.typeUrl, EventAllPositionsHaircut);
function createBaseEventBinaryOptionsMarketUpdate(): EventBinaryOptionsMarketUpdate {
  return {
    market: BinaryOptionsMarket.fromPartial({})
  };
}
export const EventBinaryOptionsMarketUpdate = {
  typeUrl: "/injective.exchange.v1beta1.EventBinaryOptionsMarketUpdate",
  is(o: any): o is EventBinaryOptionsMarketUpdate {
    return o && (o.$typeUrl === EventBinaryOptionsMarketUpdate.typeUrl || BinaryOptionsMarket.is(o.market));
  },
  isAmino(o: any): o is EventBinaryOptionsMarketUpdateAmino {
    return o && (o.$typeUrl === EventBinaryOptionsMarketUpdate.typeUrl || BinaryOptionsMarket.isAmino(o.market));
  },
  encode(message: EventBinaryOptionsMarketUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.market !== undefined) {
      BinaryOptionsMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBinaryOptionsMarketUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBinaryOptionsMarketUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = BinaryOptionsMarket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventBinaryOptionsMarketUpdate>): EventBinaryOptionsMarketUpdate {
    const message = createBaseEventBinaryOptionsMarketUpdate();
    message.market = object.market !== undefined && object.market !== null ? BinaryOptionsMarket.fromPartial(object.market) : undefined;
    return message;
  },
  fromAmino(object: EventBinaryOptionsMarketUpdateAmino): EventBinaryOptionsMarketUpdate {
    const message = createBaseEventBinaryOptionsMarketUpdate();
    if (object.market !== undefined && object.market !== null) {
      message.market = BinaryOptionsMarket.fromAmino(object.market);
    }
    return message;
  },
  toAmino(message: EventBinaryOptionsMarketUpdate): EventBinaryOptionsMarketUpdateAmino {
    const obj: any = {};
    obj.market = message.market ? BinaryOptionsMarket.toAmino(message.market) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBinaryOptionsMarketUpdateAminoMsg): EventBinaryOptionsMarketUpdate {
    return EventBinaryOptionsMarketUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBinaryOptionsMarketUpdateProtoMsg): EventBinaryOptionsMarketUpdate {
    return EventBinaryOptionsMarketUpdate.decode(message.value);
  },
  toProto(message: EventBinaryOptionsMarketUpdate): Uint8Array {
    return EventBinaryOptionsMarketUpdate.encode(message).finish();
  },
  toProtoMsg(message: EventBinaryOptionsMarketUpdate): EventBinaryOptionsMarketUpdateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventBinaryOptionsMarketUpdate",
      value: EventBinaryOptionsMarketUpdate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventBinaryOptionsMarketUpdate.typeUrl, EventBinaryOptionsMarketUpdate);
function createBaseEventNewSpotOrders(): EventNewSpotOrders {
  return {
    marketId: "",
    buyOrders: [],
    sellOrders: []
  };
}
export const EventNewSpotOrders = {
  typeUrl: "/injective.exchange.v1beta1.EventNewSpotOrders",
  is(o: any): o is EventNewSpotOrders {
    return o && (o.$typeUrl === EventNewSpotOrders.typeUrl || typeof o.marketId === "string" && Array.isArray(o.buyOrders) && (!o.buyOrders.length || SpotLimitOrder.is(o.buyOrders[0])) && Array.isArray(o.sellOrders) && (!o.sellOrders.length || SpotLimitOrder.is(o.sellOrders[0])));
  },
  isAmino(o: any): o is EventNewSpotOrdersAmino {
    return o && (o.$typeUrl === EventNewSpotOrders.typeUrl || typeof o.market_id === "string" && Array.isArray(o.buy_orders) && (!o.buy_orders.length || SpotLimitOrder.isAmino(o.buy_orders[0])) && Array.isArray(o.sell_orders) && (!o.sell_orders.length || SpotLimitOrder.isAmino(o.sell_orders[0])));
  },
  encode(message: EventNewSpotOrders, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    for (const v of message.buyOrders) {
      SpotLimitOrder.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.sellOrders) {
      SpotLimitOrder.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventNewSpotOrders {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNewSpotOrders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.buyOrders.push(SpotLimitOrder.decode(reader, reader.uint32()));
          break;
        case 3:
          message.sellOrders.push(SpotLimitOrder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventNewSpotOrders>): EventNewSpotOrders {
    const message = createBaseEventNewSpotOrders();
    message.marketId = object.marketId ?? "";
    message.buyOrders = object.buyOrders?.map(e => SpotLimitOrder.fromPartial(e)) || [];
    message.sellOrders = object.sellOrders?.map(e => SpotLimitOrder.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventNewSpotOrdersAmino): EventNewSpotOrders {
    const message = createBaseEventNewSpotOrders();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    message.buyOrders = object.buy_orders?.map(e => SpotLimitOrder.fromAmino(e)) || [];
    message.sellOrders = object.sell_orders?.map(e => SpotLimitOrder.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EventNewSpotOrders): EventNewSpotOrdersAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    if (message.buyOrders) {
      obj.buy_orders = message.buyOrders.map(e => e ? SpotLimitOrder.toAmino(e) : undefined);
    } else {
      obj.buy_orders = message.buyOrders;
    }
    if (message.sellOrders) {
      obj.sell_orders = message.sellOrders.map(e => e ? SpotLimitOrder.toAmino(e) : undefined);
    } else {
      obj.sell_orders = message.sellOrders;
    }
    return obj;
  },
  fromAminoMsg(object: EventNewSpotOrdersAminoMsg): EventNewSpotOrders {
    return EventNewSpotOrders.fromAmino(object.value);
  },
  fromProtoMsg(message: EventNewSpotOrdersProtoMsg): EventNewSpotOrders {
    return EventNewSpotOrders.decode(message.value);
  },
  toProto(message: EventNewSpotOrders): Uint8Array {
    return EventNewSpotOrders.encode(message).finish();
  },
  toProtoMsg(message: EventNewSpotOrders): EventNewSpotOrdersProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventNewSpotOrders",
      value: EventNewSpotOrders.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventNewSpotOrders.typeUrl, EventNewSpotOrders);
function createBaseEventNewDerivativeOrders(): EventNewDerivativeOrders {
  return {
    marketId: "",
    buyOrders: [],
    sellOrders: []
  };
}
export const EventNewDerivativeOrders = {
  typeUrl: "/injective.exchange.v1beta1.EventNewDerivativeOrders",
  is(o: any): o is EventNewDerivativeOrders {
    return o && (o.$typeUrl === EventNewDerivativeOrders.typeUrl || typeof o.marketId === "string" && Array.isArray(o.buyOrders) && (!o.buyOrders.length || DerivativeLimitOrder.is(o.buyOrders[0])) && Array.isArray(o.sellOrders) && (!o.sellOrders.length || DerivativeLimitOrder.is(o.sellOrders[0])));
  },
  isAmino(o: any): o is EventNewDerivativeOrdersAmino {
    return o && (o.$typeUrl === EventNewDerivativeOrders.typeUrl || typeof o.market_id === "string" && Array.isArray(o.buy_orders) && (!o.buy_orders.length || DerivativeLimitOrder.isAmino(o.buy_orders[0])) && Array.isArray(o.sell_orders) && (!o.sell_orders.length || DerivativeLimitOrder.isAmino(o.sell_orders[0])));
  },
  encode(message: EventNewDerivativeOrders, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    for (const v of message.buyOrders) {
      DerivativeLimitOrder.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.sellOrders) {
      DerivativeLimitOrder.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventNewDerivativeOrders {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNewDerivativeOrders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.buyOrders.push(DerivativeLimitOrder.decode(reader, reader.uint32()));
          break;
        case 3:
          message.sellOrders.push(DerivativeLimitOrder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventNewDerivativeOrders>): EventNewDerivativeOrders {
    const message = createBaseEventNewDerivativeOrders();
    message.marketId = object.marketId ?? "";
    message.buyOrders = object.buyOrders?.map(e => DerivativeLimitOrder.fromPartial(e)) || [];
    message.sellOrders = object.sellOrders?.map(e => DerivativeLimitOrder.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventNewDerivativeOrdersAmino): EventNewDerivativeOrders {
    const message = createBaseEventNewDerivativeOrders();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    message.buyOrders = object.buy_orders?.map(e => DerivativeLimitOrder.fromAmino(e)) || [];
    message.sellOrders = object.sell_orders?.map(e => DerivativeLimitOrder.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EventNewDerivativeOrders): EventNewDerivativeOrdersAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    if (message.buyOrders) {
      obj.buy_orders = message.buyOrders.map(e => e ? DerivativeLimitOrder.toAmino(e) : undefined);
    } else {
      obj.buy_orders = message.buyOrders;
    }
    if (message.sellOrders) {
      obj.sell_orders = message.sellOrders.map(e => e ? DerivativeLimitOrder.toAmino(e) : undefined);
    } else {
      obj.sell_orders = message.sellOrders;
    }
    return obj;
  },
  fromAminoMsg(object: EventNewDerivativeOrdersAminoMsg): EventNewDerivativeOrders {
    return EventNewDerivativeOrders.fromAmino(object.value);
  },
  fromProtoMsg(message: EventNewDerivativeOrdersProtoMsg): EventNewDerivativeOrders {
    return EventNewDerivativeOrders.decode(message.value);
  },
  toProto(message: EventNewDerivativeOrders): Uint8Array {
    return EventNewDerivativeOrders.encode(message).finish();
  },
  toProtoMsg(message: EventNewDerivativeOrders): EventNewDerivativeOrdersProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventNewDerivativeOrders",
      value: EventNewDerivativeOrders.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventNewDerivativeOrders.typeUrl, EventNewDerivativeOrders);
function createBaseEventCancelSpotOrder(): EventCancelSpotOrder {
  return {
    marketId: "",
    order: SpotLimitOrder.fromPartial({})
  };
}
export const EventCancelSpotOrder = {
  typeUrl: "/injective.exchange.v1beta1.EventCancelSpotOrder",
  is(o: any): o is EventCancelSpotOrder {
    return o && (o.$typeUrl === EventCancelSpotOrder.typeUrl || typeof o.marketId === "string" && SpotLimitOrder.is(o.order));
  },
  isAmino(o: any): o is EventCancelSpotOrderAmino {
    return o && (o.$typeUrl === EventCancelSpotOrder.typeUrl || typeof o.market_id === "string" && SpotLimitOrder.isAmino(o.order));
  },
  encode(message: EventCancelSpotOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.order !== undefined) {
      SpotLimitOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCancelSpotOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelSpotOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.order = SpotLimitOrder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventCancelSpotOrder>): EventCancelSpotOrder {
    const message = createBaseEventCancelSpotOrder();
    message.marketId = object.marketId ?? "";
    message.order = object.order !== undefined && object.order !== null ? SpotLimitOrder.fromPartial(object.order) : undefined;
    return message;
  },
  fromAmino(object: EventCancelSpotOrderAmino): EventCancelSpotOrder {
    const message = createBaseEventCancelSpotOrder();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = SpotLimitOrder.fromAmino(object.order);
    }
    return message;
  },
  toAmino(message: EventCancelSpotOrder): EventCancelSpotOrderAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.order = message.order ? SpotLimitOrder.toAmino(message.order) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCancelSpotOrderAminoMsg): EventCancelSpotOrder {
    return EventCancelSpotOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCancelSpotOrderProtoMsg): EventCancelSpotOrder {
    return EventCancelSpotOrder.decode(message.value);
  },
  toProto(message: EventCancelSpotOrder): Uint8Array {
    return EventCancelSpotOrder.encode(message).finish();
  },
  toProtoMsg(message: EventCancelSpotOrder): EventCancelSpotOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventCancelSpotOrder",
      value: EventCancelSpotOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventCancelSpotOrder.typeUrl, EventCancelSpotOrder);
function createBaseEventSpotMarketUpdate(): EventSpotMarketUpdate {
  return {
    market: SpotMarket.fromPartial({})
  };
}
export const EventSpotMarketUpdate = {
  typeUrl: "/injective.exchange.v1beta1.EventSpotMarketUpdate",
  is(o: any): o is EventSpotMarketUpdate {
    return o && (o.$typeUrl === EventSpotMarketUpdate.typeUrl || SpotMarket.is(o.market));
  },
  isAmino(o: any): o is EventSpotMarketUpdateAmino {
    return o && (o.$typeUrl === EventSpotMarketUpdate.typeUrl || SpotMarket.isAmino(o.market));
  },
  encode(message: EventSpotMarketUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.market !== undefined) {
      SpotMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSpotMarketUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSpotMarketUpdate();
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
  fromPartial(object: DeepPartial<EventSpotMarketUpdate>): EventSpotMarketUpdate {
    const message = createBaseEventSpotMarketUpdate();
    message.market = object.market !== undefined && object.market !== null ? SpotMarket.fromPartial(object.market) : undefined;
    return message;
  },
  fromAmino(object: EventSpotMarketUpdateAmino): EventSpotMarketUpdate {
    const message = createBaseEventSpotMarketUpdate();
    if (object.market !== undefined && object.market !== null) {
      message.market = SpotMarket.fromAmino(object.market);
    }
    return message;
  },
  toAmino(message: EventSpotMarketUpdate): EventSpotMarketUpdateAmino {
    const obj: any = {};
    obj.market = message.market ? SpotMarket.toAmino(message.market) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSpotMarketUpdateAminoMsg): EventSpotMarketUpdate {
    return EventSpotMarketUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSpotMarketUpdateProtoMsg): EventSpotMarketUpdate {
    return EventSpotMarketUpdate.decode(message.value);
  },
  toProto(message: EventSpotMarketUpdate): Uint8Array {
    return EventSpotMarketUpdate.encode(message).finish();
  },
  toProtoMsg(message: EventSpotMarketUpdate): EventSpotMarketUpdateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventSpotMarketUpdate",
      value: EventSpotMarketUpdate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSpotMarketUpdate.typeUrl, EventSpotMarketUpdate);
function createBaseEventPerpetualMarketUpdate(): EventPerpetualMarketUpdate {
  return {
    market: DerivativeMarket.fromPartial({}),
    perpetualMarketInfo: undefined,
    funding: undefined
  };
}
export const EventPerpetualMarketUpdate = {
  typeUrl: "/injective.exchange.v1beta1.EventPerpetualMarketUpdate",
  is(o: any): o is EventPerpetualMarketUpdate {
    return o && (o.$typeUrl === EventPerpetualMarketUpdate.typeUrl || DerivativeMarket.is(o.market));
  },
  isAmino(o: any): o is EventPerpetualMarketUpdateAmino {
    return o && (o.$typeUrl === EventPerpetualMarketUpdate.typeUrl || DerivativeMarket.isAmino(o.market));
  },
  encode(message: EventPerpetualMarketUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.market !== undefined) {
      DerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    if (message.perpetualMarketInfo !== undefined) {
      PerpetualMarketInfo.encode(message.perpetualMarketInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.funding !== undefined) {
      PerpetualMarketFunding.encode(message.funding, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventPerpetualMarketUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPerpetualMarketUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = DerivativeMarket.decode(reader, reader.uint32());
          break;
        case 2:
          message.perpetualMarketInfo = PerpetualMarketInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.funding = PerpetualMarketFunding.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventPerpetualMarketUpdate>): EventPerpetualMarketUpdate {
    const message = createBaseEventPerpetualMarketUpdate();
    message.market = object.market !== undefined && object.market !== null ? DerivativeMarket.fromPartial(object.market) : undefined;
    message.perpetualMarketInfo = object.perpetualMarketInfo !== undefined && object.perpetualMarketInfo !== null ? PerpetualMarketInfo.fromPartial(object.perpetualMarketInfo) : undefined;
    message.funding = object.funding !== undefined && object.funding !== null ? PerpetualMarketFunding.fromPartial(object.funding) : undefined;
    return message;
  },
  fromAmino(object: EventPerpetualMarketUpdateAmino): EventPerpetualMarketUpdate {
    const message = createBaseEventPerpetualMarketUpdate();
    if (object.market !== undefined && object.market !== null) {
      message.market = DerivativeMarket.fromAmino(object.market);
    }
    if (object.perpetual_market_info !== undefined && object.perpetual_market_info !== null) {
      message.perpetualMarketInfo = PerpetualMarketInfo.fromAmino(object.perpetual_market_info);
    }
    if (object.funding !== undefined && object.funding !== null) {
      message.funding = PerpetualMarketFunding.fromAmino(object.funding);
    }
    return message;
  },
  toAmino(message: EventPerpetualMarketUpdate): EventPerpetualMarketUpdateAmino {
    const obj: any = {};
    obj.market = message.market ? DerivativeMarket.toAmino(message.market) : undefined;
    obj.perpetual_market_info = message.perpetualMarketInfo ? PerpetualMarketInfo.toAmino(message.perpetualMarketInfo) : undefined;
    obj.funding = message.funding ? PerpetualMarketFunding.toAmino(message.funding) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventPerpetualMarketUpdateAminoMsg): EventPerpetualMarketUpdate {
    return EventPerpetualMarketUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPerpetualMarketUpdateProtoMsg): EventPerpetualMarketUpdate {
    return EventPerpetualMarketUpdate.decode(message.value);
  },
  toProto(message: EventPerpetualMarketUpdate): Uint8Array {
    return EventPerpetualMarketUpdate.encode(message).finish();
  },
  toProtoMsg(message: EventPerpetualMarketUpdate): EventPerpetualMarketUpdateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventPerpetualMarketUpdate",
      value: EventPerpetualMarketUpdate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventPerpetualMarketUpdate.typeUrl, EventPerpetualMarketUpdate);
function createBaseEventExpiryFuturesMarketUpdate(): EventExpiryFuturesMarketUpdate {
  return {
    market: DerivativeMarket.fromPartial({}),
    expiryFuturesMarketInfo: undefined
  };
}
export const EventExpiryFuturesMarketUpdate = {
  typeUrl: "/injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate",
  is(o: any): o is EventExpiryFuturesMarketUpdate {
    return o && (o.$typeUrl === EventExpiryFuturesMarketUpdate.typeUrl || DerivativeMarket.is(o.market));
  },
  isAmino(o: any): o is EventExpiryFuturesMarketUpdateAmino {
    return o && (o.$typeUrl === EventExpiryFuturesMarketUpdate.typeUrl || DerivativeMarket.isAmino(o.market));
  },
  encode(message: EventExpiryFuturesMarketUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.market !== undefined) {
      DerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    if (message.expiryFuturesMarketInfo !== undefined) {
      ExpiryFuturesMarketInfo.encode(message.expiryFuturesMarketInfo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventExpiryFuturesMarketUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExpiryFuturesMarketUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = DerivativeMarket.decode(reader, reader.uint32());
          break;
        case 3:
          message.expiryFuturesMarketInfo = ExpiryFuturesMarketInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventExpiryFuturesMarketUpdate>): EventExpiryFuturesMarketUpdate {
    const message = createBaseEventExpiryFuturesMarketUpdate();
    message.market = object.market !== undefined && object.market !== null ? DerivativeMarket.fromPartial(object.market) : undefined;
    message.expiryFuturesMarketInfo = object.expiryFuturesMarketInfo !== undefined && object.expiryFuturesMarketInfo !== null ? ExpiryFuturesMarketInfo.fromPartial(object.expiryFuturesMarketInfo) : undefined;
    return message;
  },
  fromAmino(object: EventExpiryFuturesMarketUpdateAmino): EventExpiryFuturesMarketUpdate {
    const message = createBaseEventExpiryFuturesMarketUpdate();
    if (object.market !== undefined && object.market !== null) {
      message.market = DerivativeMarket.fromAmino(object.market);
    }
    if (object.expiry_futures_market_info !== undefined && object.expiry_futures_market_info !== null) {
      message.expiryFuturesMarketInfo = ExpiryFuturesMarketInfo.fromAmino(object.expiry_futures_market_info);
    }
    return message;
  },
  toAmino(message: EventExpiryFuturesMarketUpdate): EventExpiryFuturesMarketUpdateAmino {
    const obj: any = {};
    obj.market = message.market ? DerivativeMarket.toAmino(message.market) : undefined;
    obj.expiry_futures_market_info = message.expiryFuturesMarketInfo ? ExpiryFuturesMarketInfo.toAmino(message.expiryFuturesMarketInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventExpiryFuturesMarketUpdateAminoMsg): EventExpiryFuturesMarketUpdate {
    return EventExpiryFuturesMarketUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventExpiryFuturesMarketUpdateProtoMsg): EventExpiryFuturesMarketUpdate {
    return EventExpiryFuturesMarketUpdate.decode(message.value);
  },
  toProto(message: EventExpiryFuturesMarketUpdate): Uint8Array {
    return EventExpiryFuturesMarketUpdate.encode(message).finish();
  },
  toProtoMsg(message: EventExpiryFuturesMarketUpdate): EventExpiryFuturesMarketUpdateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate",
      value: EventExpiryFuturesMarketUpdate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventExpiryFuturesMarketUpdate.typeUrl, EventExpiryFuturesMarketUpdate);
function createBaseEventPerpetualMarketFundingUpdate(): EventPerpetualMarketFundingUpdate {
  return {
    marketId: "",
    funding: PerpetualMarketFunding.fromPartial({}),
    isHourlyFunding: false,
    fundingRate: undefined,
    markPrice: undefined
  };
}
export const EventPerpetualMarketFundingUpdate = {
  typeUrl: "/injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate",
  is(o: any): o is EventPerpetualMarketFundingUpdate {
    return o && (o.$typeUrl === EventPerpetualMarketFundingUpdate.typeUrl || typeof o.marketId === "string" && PerpetualMarketFunding.is(o.funding) && typeof o.isHourlyFunding === "boolean");
  },
  isAmino(o: any): o is EventPerpetualMarketFundingUpdateAmino {
    return o && (o.$typeUrl === EventPerpetualMarketFundingUpdate.typeUrl || typeof o.market_id === "string" && PerpetualMarketFunding.isAmino(o.funding) && typeof o.is_hourly_funding === "boolean");
  },
  encode(message: EventPerpetualMarketFundingUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.funding !== undefined) {
      PerpetualMarketFunding.encode(message.funding, writer.uint32(18).fork()).ldelim();
    }
    if (message.isHourlyFunding === true) {
      writer.uint32(24).bool(message.isHourlyFunding);
    }
    if (message.fundingRate !== undefined) {
      writer.uint32(34).string(message.fundingRate);
    }
    if (message.markPrice !== undefined) {
      writer.uint32(42).string(message.markPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventPerpetualMarketFundingUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPerpetualMarketFundingUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.funding = PerpetualMarketFunding.decode(reader, reader.uint32());
          break;
        case 3:
          message.isHourlyFunding = reader.bool();
          break;
        case 4:
          message.fundingRate = reader.string();
          break;
        case 5:
          message.markPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventPerpetualMarketFundingUpdate>): EventPerpetualMarketFundingUpdate {
    const message = createBaseEventPerpetualMarketFundingUpdate();
    message.marketId = object.marketId ?? "";
    message.funding = object.funding !== undefined && object.funding !== null ? PerpetualMarketFunding.fromPartial(object.funding) : undefined;
    message.isHourlyFunding = object.isHourlyFunding ?? false;
    message.fundingRate = object.fundingRate ?? undefined;
    message.markPrice = object.markPrice ?? undefined;
    return message;
  },
  fromAmino(object: EventPerpetualMarketFundingUpdateAmino): EventPerpetualMarketFundingUpdate {
    const message = createBaseEventPerpetualMarketFundingUpdate();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.funding !== undefined && object.funding !== null) {
      message.funding = PerpetualMarketFunding.fromAmino(object.funding);
    }
    if (object.is_hourly_funding !== undefined && object.is_hourly_funding !== null) {
      message.isHourlyFunding = object.is_hourly_funding;
    }
    if (object.funding_rate !== undefined && object.funding_rate !== null) {
      message.fundingRate = object.funding_rate;
    }
    if (object.mark_price !== undefined && object.mark_price !== null) {
      message.markPrice = object.mark_price;
    }
    return message;
  },
  toAmino(message: EventPerpetualMarketFundingUpdate): EventPerpetualMarketFundingUpdateAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.funding = message.funding ? PerpetualMarketFunding.toAmino(message.funding) : undefined;
    obj.is_hourly_funding = message.isHourlyFunding === false ? undefined : message.isHourlyFunding;
    obj.funding_rate = message.fundingRate === null ? undefined : message.fundingRate;
    obj.mark_price = message.markPrice === null ? undefined : message.markPrice;
    return obj;
  },
  fromAminoMsg(object: EventPerpetualMarketFundingUpdateAminoMsg): EventPerpetualMarketFundingUpdate {
    return EventPerpetualMarketFundingUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPerpetualMarketFundingUpdateProtoMsg): EventPerpetualMarketFundingUpdate {
    return EventPerpetualMarketFundingUpdate.decode(message.value);
  },
  toProto(message: EventPerpetualMarketFundingUpdate): Uint8Array {
    return EventPerpetualMarketFundingUpdate.encode(message).finish();
  },
  toProtoMsg(message: EventPerpetualMarketFundingUpdate): EventPerpetualMarketFundingUpdateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate",
      value: EventPerpetualMarketFundingUpdate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventPerpetualMarketFundingUpdate.typeUrl, EventPerpetualMarketFundingUpdate);
function createBaseEventSubaccountDeposit(): EventSubaccountDeposit {
  return {
    srcAddress: "",
    subaccountId: new Uint8Array(),
    amount: Coin.fromPartial({})
  };
}
export const EventSubaccountDeposit = {
  typeUrl: "/injective.exchange.v1beta1.EventSubaccountDeposit",
  is(o: any): o is EventSubaccountDeposit {
    return o && (o.$typeUrl === EventSubaccountDeposit.typeUrl || typeof o.srcAddress === "string" && (o.subaccountId instanceof Uint8Array || typeof o.subaccountId === "string") && Coin.is(o.amount));
  },
  isAmino(o: any): o is EventSubaccountDepositAmino {
    return o && (o.$typeUrl === EventSubaccountDeposit.typeUrl || typeof o.src_address === "string" && (o.subaccount_id instanceof Uint8Array || typeof o.subaccount_id === "string") && Coin.isAmino(o.amount));
  },
  encode(message: EventSubaccountDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.srcAddress !== "") {
      writer.uint32(10).string(message.srcAddress);
    }
    if (message.subaccountId.length !== 0) {
      writer.uint32(18).bytes(message.subaccountId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSubaccountDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubaccountDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.srcAddress = reader.string();
          break;
        case 2:
          message.subaccountId = reader.bytes();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventSubaccountDeposit>): EventSubaccountDeposit {
    const message = createBaseEventSubaccountDeposit();
    message.srcAddress = object.srcAddress ?? "";
    message.subaccountId = object.subaccountId ?? new Uint8Array();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: EventSubaccountDepositAmino): EventSubaccountDeposit {
    const message = createBaseEventSubaccountDeposit();
    if (object.src_address !== undefined && object.src_address !== null) {
      message.srcAddress = object.src_address;
    }
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = bytesFromBase64(object.subaccount_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: EventSubaccountDeposit): EventSubaccountDepositAmino {
    const obj: any = {};
    obj.src_address = message.srcAddress === "" ? undefined : message.srcAddress;
    obj.subaccount_id = message.subaccountId ? base64FromBytes(message.subaccountId) : undefined;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSubaccountDepositAminoMsg): EventSubaccountDeposit {
    return EventSubaccountDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSubaccountDepositProtoMsg): EventSubaccountDeposit {
    return EventSubaccountDeposit.decode(message.value);
  },
  toProto(message: EventSubaccountDeposit): Uint8Array {
    return EventSubaccountDeposit.encode(message).finish();
  },
  toProtoMsg(message: EventSubaccountDeposit): EventSubaccountDepositProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventSubaccountDeposit",
      value: EventSubaccountDeposit.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSubaccountDeposit.typeUrl, EventSubaccountDeposit);
function createBaseEventSubaccountWithdraw(): EventSubaccountWithdraw {
  return {
    subaccountId: new Uint8Array(),
    dstAddress: "",
    amount: Coin.fromPartial({})
  };
}
export const EventSubaccountWithdraw = {
  typeUrl: "/injective.exchange.v1beta1.EventSubaccountWithdraw",
  is(o: any): o is EventSubaccountWithdraw {
    return o && (o.$typeUrl === EventSubaccountWithdraw.typeUrl || (o.subaccountId instanceof Uint8Array || typeof o.subaccountId === "string") && typeof o.dstAddress === "string" && Coin.is(o.amount));
  },
  isAmino(o: any): o is EventSubaccountWithdrawAmino {
    return o && (o.$typeUrl === EventSubaccountWithdraw.typeUrl || (o.subaccount_id instanceof Uint8Array || typeof o.subaccount_id === "string") && typeof o.dst_address === "string" && Coin.isAmino(o.amount));
  },
  encode(message: EventSubaccountWithdraw, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId.length !== 0) {
      writer.uint32(10).bytes(message.subaccountId);
    }
    if (message.dstAddress !== "") {
      writer.uint32(18).string(message.dstAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSubaccountWithdraw {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubaccountWithdraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.bytes();
          break;
        case 2:
          message.dstAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventSubaccountWithdraw>): EventSubaccountWithdraw {
    const message = createBaseEventSubaccountWithdraw();
    message.subaccountId = object.subaccountId ?? new Uint8Array();
    message.dstAddress = object.dstAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: EventSubaccountWithdrawAmino): EventSubaccountWithdraw {
    const message = createBaseEventSubaccountWithdraw();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = bytesFromBase64(object.subaccount_id);
    }
    if (object.dst_address !== undefined && object.dst_address !== null) {
      message.dstAddress = object.dst_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: EventSubaccountWithdraw): EventSubaccountWithdrawAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId ? base64FromBytes(message.subaccountId) : undefined;
    obj.dst_address = message.dstAddress === "" ? undefined : message.dstAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSubaccountWithdrawAminoMsg): EventSubaccountWithdraw {
    return EventSubaccountWithdraw.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSubaccountWithdrawProtoMsg): EventSubaccountWithdraw {
    return EventSubaccountWithdraw.decode(message.value);
  },
  toProto(message: EventSubaccountWithdraw): Uint8Array {
    return EventSubaccountWithdraw.encode(message).finish();
  },
  toProtoMsg(message: EventSubaccountWithdraw): EventSubaccountWithdrawProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventSubaccountWithdraw",
      value: EventSubaccountWithdraw.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSubaccountWithdraw.typeUrl, EventSubaccountWithdraw);
function createBaseEventSubaccountBalanceTransfer(): EventSubaccountBalanceTransfer {
  return {
    srcSubaccountId: "",
    dstSubaccountId: "",
    amount: Coin.fromPartial({})
  };
}
export const EventSubaccountBalanceTransfer = {
  typeUrl: "/injective.exchange.v1beta1.EventSubaccountBalanceTransfer",
  is(o: any): o is EventSubaccountBalanceTransfer {
    return o && (o.$typeUrl === EventSubaccountBalanceTransfer.typeUrl || typeof o.srcSubaccountId === "string" && typeof o.dstSubaccountId === "string" && Coin.is(o.amount));
  },
  isAmino(o: any): o is EventSubaccountBalanceTransferAmino {
    return o && (o.$typeUrl === EventSubaccountBalanceTransfer.typeUrl || typeof o.src_subaccount_id === "string" && typeof o.dst_subaccount_id === "string" && Coin.isAmino(o.amount));
  },
  encode(message: EventSubaccountBalanceTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.srcSubaccountId !== "") {
      writer.uint32(10).string(message.srcSubaccountId);
    }
    if (message.dstSubaccountId !== "") {
      writer.uint32(18).string(message.dstSubaccountId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSubaccountBalanceTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubaccountBalanceTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.srcSubaccountId = reader.string();
          break;
        case 2:
          message.dstSubaccountId = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventSubaccountBalanceTransfer>): EventSubaccountBalanceTransfer {
    const message = createBaseEventSubaccountBalanceTransfer();
    message.srcSubaccountId = object.srcSubaccountId ?? "";
    message.dstSubaccountId = object.dstSubaccountId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: EventSubaccountBalanceTransferAmino): EventSubaccountBalanceTransfer {
    const message = createBaseEventSubaccountBalanceTransfer();
    if (object.src_subaccount_id !== undefined && object.src_subaccount_id !== null) {
      message.srcSubaccountId = object.src_subaccount_id;
    }
    if (object.dst_subaccount_id !== undefined && object.dst_subaccount_id !== null) {
      message.dstSubaccountId = object.dst_subaccount_id;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: EventSubaccountBalanceTransfer): EventSubaccountBalanceTransferAmino {
    const obj: any = {};
    obj.src_subaccount_id = message.srcSubaccountId === "" ? undefined : message.srcSubaccountId;
    obj.dst_subaccount_id = message.dstSubaccountId === "" ? undefined : message.dstSubaccountId;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSubaccountBalanceTransferAminoMsg): EventSubaccountBalanceTransfer {
    return EventSubaccountBalanceTransfer.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSubaccountBalanceTransferProtoMsg): EventSubaccountBalanceTransfer {
    return EventSubaccountBalanceTransfer.decode(message.value);
  },
  toProto(message: EventSubaccountBalanceTransfer): Uint8Array {
    return EventSubaccountBalanceTransfer.encode(message).finish();
  },
  toProtoMsg(message: EventSubaccountBalanceTransfer): EventSubaccountBalanceTransferProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventSubaccountBalanceTransfer",
      value: EventSubaccountBalanceTransfer.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSubaccountBalanceTransfer.typeUrl, EventSubaccountBalanceTransfer);
function createBaseEventBatchDepositUpdate(): EventBatchDepositUpdate {
  return {
    depositUpdates: []
  };
}
export const EventBatchDepositUpdate = {
  typeUrl: "/injective.exchange.v1beta1.EventBatchDepositUpdate",
  is(o: any): o is EventBatchDepositUpdate {
    return o && (o.$typeUrl === EventBatchDepositUpdate.typeUrl || Array.isArray(o.depositUpdates) && (!o.depositUpdates.length || DepositUpdate.is(o.depositUpdates[0])));
  },
  isAmino(o: any): o is EventBatchDepositUpdateAmino {
    return o && (o.$typeUrl === EventBatchDepositUpdate.typeUrl || Array.isArray(o.deposit_updates) && (!o.deposit_updates.length || DepositUpdate.isAmino(o.deposit_updates[0])));
  },
  encode(message: EventBatchDepositUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.depositUpdates) {
      DepositUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBatchDepositUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBatchDepositUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositUpdates.push(DepositUpdate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventBatchDepositUpdate>): EventBatchDepositUpdate {
    const message = createBaseEventBatchDepositUpdate();
    message.depositUpdates = object.depositUpdates?.map(e => DepositUpdate.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventBatchDepositUpdateAmino): EventBatchDepositUpdate {
    const message = createBaseEventBatchDepositUpdate();
    message.depositUpdates = object.deposit_updates?.map(e => DepositUpdate.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EventBatchDepositUpdate): EventBatchDepositUpdateAmino {
    const obj: any = {};
    if (message.depositUpdates) {
      obj.deposit_updates = message.depositUpdates.map(e => e ? DepositUpdate.toAmino(e) : undefined);
    } else {
      obj.deposit_updates = message.depositUpdates;
    }
    return obj;
  },
  fromAminoMsg(object: EventBatchDepositUpdateAminoMsg): EventBatchDepositUpdate {
    return EventBatchDepositUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBatchDepositUpdateProtoMsg): EventBatchDepositUpdate {
    return EventBatchDepositUpdate.decode(message.value);
  },
  toProto(message: EventBatchDepositUpdate): Uint8Array {
    return EventBatchDepositUpdate.encode(message).finish();
  },
  toProtoMsg(message: EventBatchDepositUpdate): EventBatchDepositUpdateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventBatchDepositUpdate",
      value: EventBatchDepositUpdate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventBatchDepositUpdate.typeUrl, EventBatchDepositUpdate);
function createBaseDerivativeMarketOrderCancel(): DerivativeMarketOrderCancel {
  return {
    marketOrder: undefined,
    cancelQuantity: ""
  };
}
export const DerivativeMarketOrderCancel = {
  typeUrl: "/injective.exchange.v1beta1.DerivativeMarketOrderCancel",
  is(o: any): o is DerivativeMarketOrderCancel {
    return o && (o.$typeUrl === DerivativeMarketOrderCancel.typeUrl || typeof o.cancelQuantity === "string");
  },
  isAmino(o: any): o is DerivativeMarketOrderCancelAmino {
    return o && (o.$typeUrl === DerivativeMarketOrderCancel.typeUrl || typeof o.cancel_quantity === "string");
  },
  encode(message: DerivativeMarketOrderCancel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketOrder !== undefined) {
      DerivativeMarketOrder.encode(message.marketOrder, writer.uint32(10).fork()).ldelim();
    }
    if (message.cancelQuantity !== "") {
      writer.uint32(18).string(message.cancelQuantity);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DerivativeMarketOrderCancel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDerivativeMarketOrderCancel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketOrder = DerivativeMarketOrder.decode(reader, reader.uint32());
          break;
        case 2:
          message.cancelQuantity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DerivativeMarketOrderCancel>): DerivativeMarketOrderCancel {
    const message = createBaseDerivativeMarketOrderCancel();
    message.marketOrder = object.marketOrder !== undefined && object.marketOrder !== null ? DerivativeMarketOrder.fromPartial(object.marketOrder) : undefined;
    message.cancelQuantity = object.cancelQuantity ?? "";
    return message;
  },
  fromAmino(object: DerivativeMarketOrderCancelAmino): DerivativeMarketOrderCancel {
    const message = createBaseDerivativeMarketOrderCancel();
    if (object.market_order !== undefined && object.market_order !== null) {
      message.marketOrder = DerivativeMarketOrder.fromAmino(object.market_order);
    }
    if (object.cancel_quantity !== undefined && object.cancel_quantity !== null) {
      message.cancelQuantity = object.cancel_quantity;
    }
    return message;
  },
  toAmino(message: DerivativeMarketOrderCancel): DerivativeMarketOrderCancelAmino {
    const obj: any = {};
    obj.market_order = message.marketOrder ? DerivativeMarketOrder.toAmino(message.marketOrder) : undefined;
    obj.cancel_quantity = message.cancelQuantity === "" ? undefined : message.cancelQuantity;
    return obj;
  },
  fromAminoMsg(object: DerivativeMarketOrderCancelAminoMsg): DerivativeMarketOrderCancel {
    return DerivativeMarketOrderCancel.fromAmino(object.value);
  },
  fromProtoMsg(message: DerivativeMarketOrderCancelProtoMsg): DerivativeMarketOrderCancel {
    return DerivativeMarketOrderCancel.decode(message.value);
  },
  toProto(message: DerivativeMarketOrderCancel): Uint8Array {
    return DerivativeMarketOrderCancel.encode(message).finish();
  },
  toProtoMsg(message: DerivativeMarketOrderCancel): DerivativeMarketOrderCancelProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DerivativeMarketOrderCancel",
      value: DerivativeMarketOrderCancel.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DerivativeMarketOrderCancel.typeUrl, DerivativeMarketOrderCancel);
function createBaseEventCancelDerivativeOrder(): EventCancelDerivativeOrder {
  return {
    marketId: "",
    isLimitCancel: false,
    limitOrder: undefined,
    marketOrderCancel: undefined
  };
}
export const EventCancelDerivativeOrder = {
  typeUrl: "/injective.exchange.v1beta1.EventCancelDerivativeOrder",
  is(o: any): o is EventCancelDerivativeOrder {
    return o && (o.$typeUrl === EventCancelDerivativeOrder.typeUrl || typeof o.marketId === "string" && typeof o.isLimitCancel === "boolean");
  },
  isAmino(o: any): o is EventCancelDerivativeOrderAmino {
    return o && (o.$typeUrl === EventCancelDerivativeOrder.typeUrl || typeof o.market_id === "string" && typeof o.isLimitCancel === "boolean");
  },
  encode(message: EventCancelDerivativeOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.isLimitCancel === true) {
      writer.uint32(16).bool(message.isLimitCancel);
    }
    if (message.limitOrder !== undefined) {
      DerivativeLimitOrder.encode(message.limitOrder, writer.uint32(26).fork()).ldelim();
    }
    if (message.marketOrderCancel !== undefined) {
      DerivativeMarketOrderCancel.encode(message.marketOrderCancel, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCancelDerivativeOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelDerivativeOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.isLimitCancel = reader.bool();
          break;
        case 3:
          message.limitOrder = DerivativeLimitOrder.decode(reader, reader.uint32());
          break;
        case 4:
          message.marketOrderCancel = DerivativeMarketOrderCancel.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventCancelDerivativeOrder>): EventCancelDerivativeOrder {
    const message = createBaseEventCancelDerivativeOrder();
    message.marketId = object.marketId ?? "";
    message.isLimitCancel = object.isLimitCancel ?? false;
    message.limitOrder = object.limitOrder !== undefined && object.limitOrder !== null ? DerivativeLimitOrder.fromPartial(object.limitOrder) : undefined;
    message.marketOrderCancel = object.marketOrderCancel !== undefined && object.marketOrderCancel !== null ? DerivativeMarketOrderCancel.fromPartial(object.marketOrderCancel) : undefined;
    return message;
  },
  fromAmino(object: EventCancelDerivativeOrderAmino): EventCancelDerivativeOrder {
    const message = createBaseEventCancelDerivativeOrder();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.isLimitCancel !== undefined && object.isLimitCancel !== null) {
      message.isLimitCancel = object.isLimitCancel;
    }
    if (object.limit_order !== undefined && object.limit_order !== null) {
      message.limitOrder = DerivativeLimitOrder.fromAmino(object.limit_order);
    }
    if (object.market_order_cancel !== undefined && object.market_order_cancel !== null) {
      message.marketOrderCancel = DerivativeMarketOrderCancel.fromAmino(object.market_order_cancel);
    }
    return message;
  },
  toAmino(message: EventCancelDerivativeOrder): EventCancelDerivativeOrderAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.isLimitCancel = message.isLimitCancel === false ? undefined : message.isLimitCancel;
    obj.limit_order = message.limitOrder ? DerivativeLimitOrder.toAmino(message.limitOrder) : undefined;
    obj.market_order_cancel = message.marketOrderCancel ? DerivativeMarketOrderCancel.toAmino(message.marketOrderCancel) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCancelDerivativeOrderAminoMsg): EventCancelDerivativeOrder {
    return EventCancelDerivativeOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCancelDerivativeOrderProtoMsg): EventCancelDerivativeOrder {
    return EventCancelDerivativeOrder.decode(message.value);
  },
  toProto(message: EventCancelDerivativeOrder): Uint8Array {
    return EventCancelDerivativeOrder.encode(message).finish();
  },
  toProtoMsg(message: EventCancelDerivativeOrder): EventCancelDerivativeOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventCancelDerivativeOrder",
      value: EventCancelDerivativeOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventCancelDerivativeOrder.typeUrl, EventCancelDerivativeOrder);
function createBaseEventFeeDiscountSchedule(): EventFeeDiscountSchedule {
  return {
    schedule: undefined
  };
}
export const EventFeeDiscountSchedule = {
  typeUrl: "/injective.exchange.v1beta1.EventFeeDiscountSchedule",
  is(o: any): o is EventFeeDiscountSchedule {
    return o && o.$typeUrl === EventFeeDiscountSchedule.typeUrl;
  },
  isAmino(o: any): o is EventFeeDiscountScheduleAmino {
    return o && o.$typeUrl === EventFeeDiscountSchedule.typeUrl;
  },
  encode(message: EventFeeDiscountSchedule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.schedule !== undefined) {
      FeeDiscountSchedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventFeeDiscountSchedule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFeeDiscountSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schedule = FeeDiscountSchedule.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventFeeDiscountSchedule>): EventFeeDiscountSchedule {
    const message = createBaseEventFeeDiscountSchedule();
    message.schedule = object.schedule !== undefined && object.schedule !== null ? FeeDiscountSchedule.fromPartial(object.schedule) : undefined;
    return message;
  },
  fromAmino(object: EventFeeDiscountScheduleAmino): EventFeeDiscountSchedule {
    const message = createBaseEventFeeDiscountSchedule();
    if (object.schedule !== undefined && object.schedule !== null) {
      message.schedule = FeeDiscountSchedule.fromAmino(object.schedule);
    }
    return message;
  },
  toAmino(message: EventFeeDiscountSchedule): EventFeeDiscountScheduleAmino {
    const obj: any = {};
    obj.schedule = message.schedule ? FeeDiscountSchedule.toAmino(message.schedule) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventFeeDiscountScheduleAminoMsg): EventFeeDiscountSchedule {
    return EventFeeDiscountSchedule.fromAmino(object.value);
  },
  fromProtoMsg(message: EventFeeDiscountScheduleProtoMsg): EventFeeDiscountSchedule {
    return EventFeeDiscountSchedule.decode(message.value);
  },
  toProto(message: EventFeeDiscountSchedule): Uint8Array {
    return EventFeeDiscountSchedule.encode(message).finish();
  },
  toProtoMsg(message: EventFeeDiscountSchedule): EventFeeDiscountScheduleProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventFeeDiscountSchedule",
      value: EventFeeDiscountSchedule.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventFeeDiscountSchedule.typeUrl, EventFeeDiscountSchedule);
function createBaseEventTradingRewardCampaignUpdate(): EventTradingRewardCampaignUpdate {
  return {
    campaignInfo: undefined,
    campaignRewardPools: []
  };
}
export const EventTradingRewardCampaignUpdate = {
  typeUrl: "/injective.exchange.v1beta1.EventTradingRewardCampaignUpdate",
  is(o: any): o is EventTradingRewardCampaignUpdate {
    return o && (o.$typeUrl === EventTradingRewardCampaignUpdate.typeUrl || Array.isArray(o.campaignRewardPools) && (!o.campaignRewardPools.length || CampaignRewardPool.is(o.campaignRewardPools[0])));
  },
  isAmino(o: any): o is EventTradingRewardCampaignUpdateAmino {
    return o && (o.$typeUrl === EventTradingRewardCampaignUpdate.typeUrl || Array.isArray(o.campaign_reward_pools) && (!o.campaign_reward_pools.length || CampaignRewardPool.isAmino(o.campaign_reward_pools[0])));
  },
  encode(message: EventTradingRewardCampaignUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.campaignInfo !== undefined) {
      TradingRewardCampaignInfo.encode(message.campaignInfo, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.campaignRewardPools) {
      CampaignRewardPool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventTradingRewardCampaignUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTradingRewardCampaignUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaignInfo = TradingRewardCampaignInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.campaignRewardPools.push(CampaignRewardPool.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventTradingRewardCampaignUpdate>): EventTradingRewardCampaignUpdate {
    const message = createBaseEventTradingRewardCampaignUpdate();
    message.campaignInfo = object.campaignInfo !== undefined && object.campaignInfo !== null ? TradingRewardCampaignInfo.fromPartial(object.campaignInfo) : undefined;
    message.campaignRewardPools = object.campaignRewardPools?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventTradingRewardCampaignUpdateAmino): EventTradingRewardCampaignUpdate {
    const message = createBaseEventTradingRewardCampaignUpdate();
    if (object.campaign_info !== undefined && object.campaign_info !== null) {
      message.campaignInfo = TradingRewardCampaignInfo.fromAmino(object.campaign_info);
    }
    message.campaignRewardPools = object.campaign_reward_pools?.map(e => CampaignRewardPool.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EventTradingRewardCampaignUpdate): EventTradingRewardCampaignUpdateAmino {
    const obj: any = {};
    obj.campaign_info = message.campaignInfo ? TradingRewardCampaignInfo.toAmino(message.campaignInfo) : undefined;
    if (message.campaignRewardPools) {
      obj.campaign_reward_pools = message.campaignRewardPools.map(e => e ? CampaignRewardPool.toAmino(e) : undefined);
    } else {
      obj.campaign_reward_pools = message.campaignRewardPools;
    }
    return obj;
  },
  fromAminoMsg(object: EventTradingRewardCampaignUpdateAminoMsg): EventTradingRewardCampaignUpdate {
    return EventTradingRewardCampaignUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventTradingRewardCampaignUpdateProtoMsg): EventTradingRewardCampaignUpdate {
    return EventTradingRewardCampaignUpdate.decode(message.value);
  },
  toProto(message: EventTradingRewardCampaignUpdate): Uint8Array {
    return EventTradingRewardCampaignUpdate.encode(message).finish();
  },
  toProtoMsg(message: EventTradingRewardCampaignUpdate): EventTradingRewardCampaignUpdateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventTradingRewardCampaignUpdate",
      value: EventTradingRewardCampaignUpdate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventTradingRewardCampaignUpdate.typeUrl, EventTradingRewardCampaignUpdate);
function createBaseEventTradingRewardDistribution(): EventTradingRewardDistribution {
  return {
    accountRewards: []
  };
}
export const EventTradingRewardDistribution = {
  typeUrl: "/injective.exchange.v1beta1.EventTradingRewardDistribution",
  is(o: any): o is EventTradingRewardDistribution {
    return o && (o.$typeUrl === EventTradingRewardDistribution.typeUrl || Array.isArray(o.accountRewards) && (!o.accountRewards.length || AccountRewards.is(o.accountRewards[0])));
  },
  isAmino(o: any): o is EventTradingRewardDistributionAmino {
    return o && (o.$typeUrl === EventTradingRewardDistribution.typeUrl || Array.isArray(o.account_rewards) && (!o.account_rewards.length || AccountRewards.isAmino(o.account_rewards[0])));
  },
  encode(message: EventTradingRewardDistribution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accountRewards) {
      AccountRewards.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventTradingRewardDistribution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTradingRewardDistribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountRewards.push(AccountRewards.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventTradingRewardDistribution>): EventTradingRewardDistribution {
    const message = createBaseEventTradingRewardDistribution();
    message.accountRewards = object.accountRewards?.map(e => AccountRewards.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventTradingRewardDistributionAmino): EventTradingRewardDistribution {
    const message = createBaseEventTradingRewardDistribution();
    message.accountRewards = object.account_rewards?.map(e => AccountRewards.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EventTradingRewardDistribution): EventTradingRewardDistributionAmino {
    const obj: any = {};
    if (message.accountRewards) {
      obj.account_rewards = message.accountRewards.map(e => e ? AccountRewards.toAmino(e) : undefined);
    } else {
      obj.account_rewards = message.accountRewards;
    }
    return obj;
  },
  fromAminoMsg(object: EventTradingRewardDistributionAminoMsg): EventTradingRewardDistribution {
    return EventTradingRewardDistribution.fromAmino(object.value);
  },
  fromProtoMsg(message: EventTradingRewardDistributionProtoMsg): EventTradingRewardDistribution {
    return EventTradingRewardDistribution.decode(message.value);
  },
  toProto(message: EventTradingRewardDistribution): Uint8Array {
    return EventTradingRewardDistribution.encode(message).finish();
  },
  toProtoMsg(message: EventTradingRewardDistribution): EventTradingRewardDistributionProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventTradingRewardDistribution",
      value: EventTradingRewardDistribution.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventTradingRewardDistribution.typeUrl, EventTradingRewardDistribution);
function createBaseEventNewConditionalDerivativeOrder(): EventNewConditionalDerivativeOrder {
  return {
    marketId: "",
    order: undefined,
    hash: new Uint8Array(),
    isMarket: false
  };
}
export const EventNewConditionalDerivativeOrder = {
  typeUrl: "/injective.exchange.v1beta1.EventNewConditionalDerivativeOrder",
  is(o: any): o is EventNewConditionalDerivativeOrder {
    return o && (o.$typeUrl === EventNewConditionalDerivativeOrder.typeUrl || typeof o.marketId === "string" && (o.hash instanceof Uint8Array || typeof o.hash === "string") && typeof o.isMarket === "boolean");
  },
  isAmino(o: any): o is EventNewConditionalDerivativeOrderAmino {
    return o && (o.$typeUrl === EventNewConditionalDerivativeOrder.typeUrl || typeof o.market_id === "string" && (o.hash instanceof Uint8Array || typeof o.hash === "string") && typeof o.is_market === "boolean");
  },
  encode(message: EventNewConditionalDerivativeOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.order !== undefined) {
      DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(26).bytes(message.hash);
    }
    if (message.isMarket === true) {
      writer.uint32(32).bool(message.isMarket);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventNewConditionalDerivativeOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNewConditionalDerivativeOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.order = DerivativeOrder.decode(reader, reader.uint32());
          break;
        case 3:
          message.hash = reader.bytes();
          break;
        case 4:
          message.isMarket = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventNewConditionalDerivativeOrder>): EventNewConditionalDerivativeOrder {
    const message = createBaseEventNewConditionalDerivativeOrder();
    message.marketId = object.marketId ?? "";
    message.order = object.order !== undefined && object.order !== null ? DerivativeOrder.fromPartial(object.order) : undefined;
    message.hash = object.hash ?? new Uint8Array();
    message.isMarket = object.isMarket ?? false;
    return message;
  },
  fromAmino(object: EventNewConditionalDerivativeOrderAmino): EventNewConditionalDerivativeOrder {
    const message = createBaseEventNewConditionalDerivativeOrder();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = DerivativeOrder.fromAmino(object.order);
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.is_market !== undefined && object.is_market !== null) {
      message.isMarket = object.is_market;
    }
    return message;
  },
  toAmino(message: EventNewConditionalDerivativeOrder): EventNewConditionalDerivativeOrderAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.order = message.order ? DerivativeOrder.toAmino(message.order) : undefined;
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    obj.is_market = message.isMarket === false ? undefined : message.isMarket;
    return obj;
  },
  fromAminoMsg(object: EventNewConditionalDerivativeOrderAminoMsg): EventNewConditionalDerivativeOrder {
    return EventNewConditionalDerivativeOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: EventNewConditionalDerivativeOrderProtoMsg): EventNewConditionalDerivativeOrder {
    return EventNewConditionalDerivativeOrder.decode(message.value);
  },
  toProto(message: EventNewConditionalDerivativeOrder): Uint8Array {
    return EventNewConditionalDerivativeOrder.encode(message).finish();
  },
  toProtoMsg(message: EventNewConditionalDerivativeOrder): EventNewConditionalDerivativeOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventNewConditionalDerivativeOrder",
      value: EventNewConditionalDerivativeOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventNewConditionalDerivativeOrder.typeUrl, EventNewConditionalDerivativeOrder);
function createBaseEventCancelConditionalDerivativeOrder(): EventCancelConditionalDerivativeOrder {
  return {
    marketId: "",
    isLimitCancel: false,
    limitOrder: undefined,
    marketOrder: undefined
  };
}
export const EventCancelConditionalDerivativeOrder = {
  typeUrl: "/injective.exchange.v1beta1.EventCancelConditionalDerivativeOrder",
  is(o: any): o is EventCancelConditionalDerivativeOrder {
    return o && (o.$typeUrl === EventCancelConditionalDerivativeOrder.typeUrl || typeof o.marketId === "string" && typeof o.isLimitCancel === "boolean");
  },
  isAmino(o: any): o is EventCancelConditionalDerivativeOrderAmino {
    return o && (o.$typeUrl === EventCancelConditionalDerivativeOrder.typeUrl || typeof o.market_id === "string" && typeof o.isLimitCancel === "boolean");
  },
  encode(message: EventCancelConditionalDerivativeOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.isLimitCancel === true) {
      writer.uint32(16).bool(message.isLimitCancel);
    }
    if (message.limitOrder !== undefined) {
      DerivativeLimitOrder.encode(message.limitOrder, writer.uint32(26).fork()).ldelim();
    }
    if (message.marketOrder !== undefined) {
      DerivativeMarketOrder.encode(message.marketOrder, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCancelConditionalDerivativeOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelConditionalDerivativeOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.isLimitCancel = reader.bool();
          break;
        case 3:
          message.limitOrder = DerivativeLimitOrder.decode(reader, reader.uint32());
          break;
        case 4:
          message.marketOrder = DerivativeMarketOrder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventCancelConditionalDerivativeOrder>): EventCancelConditionalDerivativeOrder {
    const message = createBaseEventCancelConditionalDerivativeOrder();
    message.marketId = object.marketId ?? "";
    message.isLimitCancel = object.isLimitCancel ?? false;
    message.limitOrder = object.limitOrder !== undefined && object.limitOrder !== null ? DerivativeLimitOrder.fromPartial(object.limitOrder) : undefined;
    message.marketOrder = object.marketOrder !== undefined && object.marketOrder !== null ? DerivativeMarketOrder.fromPartial(object.marketOrder) : undefined;
    return message;
  },
  fromAmino(object: EventCancelConditionalDerivativeOrderAmino): EventCancelConditionalDerivativeOrder {
    const message = createBaseEventCancelConditionalDerivativeOrder();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.isLimitCancel !== undefined && object.isLimitCancel !== null) {
      message.isLimitCancel = object.isLimitCancel;
    }
    if (object.limit_order !== undefined && object.limit_order !== null) {
      message.limitOrder = DerivativeLimitOrder.fromAmino(object.limit_order);
    }
    if (object.market_order !== undefined && object.market_order !== null) {
      message.marketOrder = DerivativeMarketOrder.fromAmino(object.market_order);
    }
    return message;
  },
  toAmino(message: EventCancelConditionalDerivativeOrder): EventCancelConditionalDerivativeOrderAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.isLimitCancel = message.isLimitCancel === false ? undefined : message.isLimitCancel;
    obj.limit_order = message.limitOrder ? DerivativeLimitOrder.toAmino(message.limitOrder) : undefined;
    obj.market_order = message.marketOrder ? DerivativeMarketOrder.toAmino(message.marketOrder) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCancelConditionalDerivativeOrderAminoMsg): EventCancelConditionalDerivativeOrder {
    return EventCancelConditionalDerivativeOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCancelConditionalDerivativeOrderProtoMsg): EventCancelConditionalDerivativeOrder {
    return EventCancelConditionalDerivativeOrder.decode(message.value);
  },
  toProto(message: EventCancelConditionalDerivativeOrder): Uint8Array {
    return EventCancelConditionalDerivativeOrder.encode(message).finish();
  },
  toProtoMsg(message: EventCancelConditionalDerivativeOrder): EventCancelConditionalDerivativeOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventCancelConditionalDerivativeOrder",
      value: EventCancelConditionalDerivativeOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventCancelConditionalDerivativeOrder.typeUrl, EventCancelConditionalDerivativeOrder);
function createBaseEventConditionalDerivativeOrderTrigger(): EventConditionalDerivativeOrderTrigger {
  return {
    marketId: new Uint8Array(),
    isLimitTrigger: false,
    triggeredOrderHash: new Uint8Array(),
    placedOrderHash: new Uint8Array(),
    triggeredOrderCid: ""
  };
}
export const EventConditionalDerivativeOrderTrigger = {
  typeUrl: "/injective.exchange.v1beta1.EventConditionalDerivativeOrderTrigger",
  is(o: any): o is EventConditionalDerivativeOrderTrigger {
    return o && (o.$typeUrl === EventConditionalDerivativeOrderTrigger.typeUrl || (o.marketId instanceof Uint8Array || typeof o.marketId === "string") && typeof o.isLimitTrigger === "boolean" && (o.triggeredOrderHash instanceof Uint8Array || typeof o.triggeredOrderHash === "string") && (o.placedOrderHash instanceof Uint8Array || typeof o.placedOrderHash === "string") && typeof o.triggeredOrderCid === "string");
  },
  isAmino(o: any): o is EventConditionalDerivativeOrderTriggerAmino {
    return o && (o.$typeUrl === EventConditionalDerivativeOrderTrigger.typeUrl || (o.market_id instanceof Uint8Array || typeof o.market_id === "string") && typeof o.isLimitTrigger === "boolean" && (o.triggered_order_hash instanceof Uint8Array || typeof o.triggered_order_hash === "string") && (o.placed_order_hash instanceof Uint8Array || typeof o.placed_order_hash === "string") && typeof o.triggered_order_cid === "string");
  },
  encode(message: EventConditionalDerivativeOrderTrigger, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId.length !== 0) {
      writer.uint32(10).bytes(message.marketId);
    }
    if (message.isLimitTrigger === true) {
      writer.uint32(16).bool(message.isLimitTrigger);
    }
    if (message.triggeredOrderHash.length !== 0) {
      writer.uint32(26).bytes(message.triggeredOrderHash);
    }
    if (message.placedOrderHash.length !== 0) {
      writer.uint32(34).bytes(message.placedOrderHash);
    }
    if (message.triggeredOrderCid !== "") {
      writer.uint32(42).string(message.triggeredOrderCid);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventConditionalDerivativeOrderTrigger {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventConditionalDerivativeOrderTrigger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.bytes();
          break;
        case 2:
          message.isLimitTrigger = reader.bool();
          break;
        case 3:
          message.triggeredOrderHash = reader.bytes();
          break;
        case 4:
          message.placedOrderHash = reader.bytes();
          break;
        case 5:
          message.triggeredOrderCid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventConditionalDerivativeOrderTrigger>): EventConditionalDerivativeOrderTrigger {
    const message = createBaseEventConditionalDerivativeOrderTrigger();
    message.marketId = object.marketId ?? new Uint8Array();
    message.isLimitTrigger = object.isLimitTrigger ?? false;
    message.triggeredOrderHash = object.triggeredOrderHash ?? new Uint8Array();
    message.placedOrderHash = object.placedOrderHash ?? new Uint8Array();
    message.triggeredOrderCid = object.triggeredOrderCid ?? "";
    return message;
  },
  fromAmino(object: EventConditionalDerivativeOrderTriggerAmino): EventConditionalDerivativeOrderTrigger {
    const message = createBaseEventConditionalDerivativeOrderTrigger();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = bytesFromBase64(object.market_id);
    }
    if (object.isLimitTrigger !== undefined && object.isLimitTrigger !== null) {
      message.isLimitTrigger = object.isLimitTrigger;
    }
    if (object.triggered_order_hash !== undefined && object.triggered_order_hash !== null) {
      message.triggeredOrderHash = bytesFromBase64(object.triggered_order_hash);
    }
    if (object.placed_order_hash !== undefined && object.placed_order_hash !== null) {
      message.placedOrderHash = bytesFromBase64(object.placed_order_hash);
    }
    if (object.triggered_order_cid !== undefined && object.triggered_order_cid !== null) {
      message.triggeredOrderCid = object.triggered_order_cid;
    }
    return message;
  },
  toAmino(message: EventConditionalDerivativeOrderTrigger): EventConditionalDerivativeOrderTriggerAmino {
    const obj: any = {};
    obj.market_id = message.marketId ? base64FromBytes(message.marketId) : undefined;
    obj.isLimitTrigger = message.isLimitTrigger === false ? undefined : message.isLimitTrigger;
    obj.triggered_order_hash = message.triggeredOrderHash ? base64FromBytes(message.triggeredOrderHash) : undefined;
    obj.placed_order_hash = message.placedOrderHash ? base64FromBytes(message.placedOrderHash) : undefined;
    obj.triggered_order_cid = message.triggeredOrderCid === "" ? undefined : message.triggeredOrderCid;
    return obj;
  },
  fromAminoMsg(object: EventConditionalDerivativeOrderTriggerAminoMsg): EventConditionalDerivativeOrderTrigger {
    return EventConditionalDerivativeOrderTrigger.fromAmino(object.value);
  },
  fromProtoMsg(message: EventConditionalDerivativeOrderTriggerProtoMsg): EventConditionalDerivativeOrderTrigger {
    return EventConditionalDerivativeOrderTrigger.decode(message.value);
  },
  toProto(message: EventConditionalDerivativeOrderTrigger): Uint8Array {
    return EventConditionalDerivativeOrderTrigger.encode(message).finish();
  },
  toProtoMsg(message: EventConditionalDerivativeOrderTrigger): EventConditionalDerivativeOrderTriggerProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventConditionalDerivativeOrderTrigger",
      value: EventConditionalDerivativeOrderTrigger.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventConditionalDerivativeOrderTrigger.typeUrl, EventConditionalDerivativeOrderTrigger);
function createBaseEventOrderFail(): EventOrderFail {
  return {
    account: new Uint8Array(),
    hashes: [],
    flags: [],
    cids: []
  };
}
export const EventOrderFail = {
  typeUrl: "/injective.exchange.v1beta1.EventOrderFail",
  is(o: any): o is EventOrderFail {
    return o && (o.$typeUrl === EventOrderFail.typeUrl || (o.account instanceof Uint8Array || typeof o.account === "string") && Array.isArray(o.hashes) && (!o.hashes.length || o.hashes[0] instanceof Uint8Array || typeof o.hashes[0] === "string") && Array.isArray(o.flags) && (!o.flags.length || typeof o.flags[0] === "number") && Array.isArray(o.cids) && (!o.cids.length || typeof o.cids[0] === "string"));
  },
  isAmino(o: any): o is EventOrderFailAmino {
    return o && (o.$typeUrl === EventOrderFail.typeUrl || (o.account instanceof Uint8Array || typeof o.account === "string") && Array.isArray(o.hashes) && (!o.hashes.length || o.hashes[0] instanceof Uint8Array || typeof o.hashes[0] === "string") && Array.isArray(o.flags) && (!o.flags.length || typeof o.flags[0] === "number") && Array.isArray(o.cids) && (!o.cids.length || typeof o.cids[0] === "string"));
  },
  encode(message: EventOrderFail, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account.length !== 0) {
      writer.uint32(10).bytes(message.account);
    }
    for (const v of message.hashes) {
      writer.uint32(18).bytes(v!);
    }
    writer.uint32(26).fork();
    for (const v of message.flags) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.cids) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventOrderFail {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOrderFail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.bytes();
          break;
        case 2:
          message.hashes.push(reader.bytes());
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.flags.push(reader.uint32());
            }
          } else {
            message.flags.push(reader.uint32());
          }
          break;
        case 4:
          message.cids.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventOrderFail>): EventOrderFail {
    const message = createBaseEventOrderFail();
    message.account = object.account ?? new Uint8Array();
    message.hashes = object.hashes?.map(e => e) || [];
    message.flags = object.flags?.map(e => e) || [];
    message.cids = object.cids?.map(e => e) || [];
    return message;
  },
  fromAmino(object: EventOrderFailAmino): EventOrderFail {
    const message = createBaseEventOrderFail();
    if (object.account !== undefined && object.account !== null) {
      message.account = bytesFromBase64(object.account);
    }
    message.hashes = object.hashes?.map(e => bytesFromBase64(e)) || [];
    message.flags = object.flags?.map(e => e) || [];
    message.cids = object.cids?.map(e => e) || [];
    return message;
  },
  toAmino(message: EventOrderFail): EventOrderFailAmino {
    const obj: any = {};
    obj.account = message.account ? base64FromBytes(message.account) : undefined;
    if (message.hashes) {
      obj.hashes = message.hashes.map(e => base64FromBytes(e));
    } else {
      obj.hashes = message.hashes;
    }
    if (message.flags) {
      obj.flags = message.flags.map(e => e);
    } else {
      obj.flags = message.flags;
    }
    if (message.cids) {
      obj.cids = message.cids.map(e => e);
    } else {
      obj.cids = message.cids;
    }
    return obj;
  },
  fromAminoMsg(object: EventOrderFailAminoMsg): EventOrderFail {
    return EventOrderFail.fromAmino(object.value);
  },
  fromProtoMsg(message: EventOrderFailProtoMsg): EventOrderFail {
    return EventOrderFail.decode(message.value);
  },
  toProto(message: EventOrderFail): Uint8Array {
    return EventOrderFail.encode(message).finish();
  },
  toProtoMsg(message: EventOrderFail): EventOrderFailProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventOrderFail",
      value: EventOrderFail.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventOrderFail.typeUrl, EventOrderFail);
function createBaseEventAtomicMarketOrderFeeMultipliersUpdated(): EventAtomicMarketOrderFeeMultipliersUpdated {
  return {
    marketFeeMultipliers: []
  };
}
export const EventAtomicMarketOrderFeeMultipliersUpdated = {
  typeUrl: "/injective.exchange.v1beta1.EventAtomicMarketOrderFeeMultipliersUpdated",
  is(o: any): o is EventAtomicMarketOrderFeeMultipliersUpdated {
    return o && (o.$typeUrl === EventAtomicMarketOrderFeeMultipliersUpdated.typeUrl || Array.isArray(o.marketFeeMultipliers) && (!o.marketFeeMultipliers.length || MarketFeeMultiplier.is(o.marketFeeMultipliers[0])));
  },
  isAmino(o: any): o is EventAtomicMarketOrderFeeMultipliersUpdatedAmino {
    return o && (o.$typeUrl === EventAtomicMarketOrderFeeMultipliersUpdated.typeUrl || Array.isArray(o.market_fee_multipliers) && (!o.market_fee_multipliers.length || MarketFeeMultiplier.isAmino(o.market_fee_multipliers[0])));
  },
  encode(message: EventAtomicMarketOrderFeeMultipliersUpdated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.marketFeeMultipliers) {
      MarketFeeMultiplier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAtomicMarketOrderFeeMultipliersUpdated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAtomicMarketOrderFeeMultipliersUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketFeeMultipliers.push(MarketFeeMultiplier.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventAtomicMarketOrderFeeMultipliersUpdated>): EventAtomicMarketOrderFeeMultipliersUpdated {
    const message = createBaseEventAtomicMarketOrderFeeMultipliersUpdated();
    message.marketFeeMultipliers = object.marketFeeMultipliers?.map(e => MarketFeeMultiplier.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventAtomicMarketOrderFeeMultipliersUpdatedAmino): EventAtomicMarketOrderFeeMultipliersUpdated {
    const message = createBaseEventAtomicMarketOrderFeeMultipliersUpdated();
    message.marketFeeMultipliers = object.market_fee_multipliers?.map(e => MarketFeeMultiplier.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EventAtomicMarketOrderFeeMultipliersUpdated): EventAtomicMarketOrderFeeMultipliersUpdatedAmino {
    const obj: any = {};
    if (message.marketFeeMultipliers) {
      obj.market_fee_multipliers = message.marketFeeMultipliers.map(e => e ? MarketFeeMultiplier.toAmino(e) : undefined);
    } else {
      obj.market_fee_multipliers = message.marketFeeMultipliers;
    }
    return obj;
  },
  fromAminoMsg(object: EventAtomicMarketOrderFeeMultipliersUpdatedAminoMsg): EventAtomicMarketOrderFeeMultipliersUpdated {
    return EventAtomicMarketOrderFeeMultipliersUpdated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAtomicMarketOrderFeeMultipliersUpdatedProtoMsg): EventAtomicMarketOrderFeeMultipliersUpdated {
    return EventAtomicMarketOrderFeeMultipliersUpdated.decode(message.value);
  },
  toProto(message: EventAtomicMarketOrderFeeMultipliersUpdated): Uint8Array {
    return EventAtomicMarketOrderFeeMultipliersUpdated.encode(message).finish();
  },
  toProtoMsg(message: EventAtomicMarketOrderFeeMultipliersUpdated): EventAtomicMarketOrderFeeMultipliersUpdatedProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventAtomicMarketOrderFeeMultipliersUpdated",
      value: EventAtomicMarketOrderFeeMultipliersUpdated.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventAtomicMarketOrderFeeMultipliersUpdated.typeUrl, EventAtomicMarketOrderFeeMultipliersUpdated);
function createBaseEventOrderbookUpdate(): EventOrderbookUpdate {
  return {
    spotUpdates: [],
    derivativeUpdates: []
  };
}
export const EventOrderbookUpdate = {
  typeUrl: "/injective.exchange.v1beta1.EventOrderbookUpdate",
  is(o: any): o is EventOrderbookUpdate {
    return o && (o.$typeUrl === EventOrderbookUpdate.typeUrl || Array.isArray(o.spotUpdates) && (!o.spotUpdates.length || OrderbookUpdate.is(o.spotUpdates[0])) && Array.isArray(o.derivativeUpdates) && (!o.derivativeUpdates.length || OrderbookUpdate.is(o.derivativeUpdates[0])));
  },
  isAmino(o: any): o is EventOrderbookUpdateAmino {
    return o && (o.$typeUrl === EventOrderbookUpdate.typeUrl || Array.isArray(o.spot_updates) && (!o.spot_updates.length || OrderbookUpdate.isAmino(o.spot_updates[0])) && Array.isArray(o.derivative_updates) && (!o.derivative_updates.length || OrderbookUpdate.isAmino(o.derivative_updates[0])));
  },
  encode(message: EventOrderbookUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.spotUpdates) {
      OrderbookUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.derivativeUpdates) {
      OrderbookUpdate.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventOrderbookUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOrderbookUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotUpdates.push(OrderbookUpdate.decode(reader, reader.uint32()));
          break;
        case 2:
          message.derivativeUpdates.push(OrderbookUpdate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventOrderbookUpdate>): EventOrderbookUpdate {
    const message = createBaseEventOrderbookUpdate();
    message.spotUpdates = object.spotUpdates?.map(e => OrderbookUpdate.fromPartial(e)) || [];
    message.derivativeUpdates = object.derivativeUpdates?.map(e => OrderbookUpdate.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventOrderbookUpdateAmino): EventOrderbookUpdate {
    const message = createBaseEventOrderbookUpdate();
    message.spotUpdates = object.spot_updates?.map(e => OrderbookUpdate.fromAmino(e)) || [];
    message.derivativeUpdates = object.derivative_updates?.map(e => OrderbookUpdate.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EventOrderbookUpdate): EventOrderbookUpdateAmino {
    const obj: any = {};
    if (message.spotUpdates) {
      obj.spot_updates = message.spotUpdates.map(e => e ? OrderbookUpdate.toAmino(e) : undefined);
    } else {
      obj.spot_updates = message.spotUpdates;
    }
    if (message.derivativeUpdates) {
      obj.derivative_updates = message.derivativeUpdates.map(e => e ? OrderbookUpdate.toAmino(e) : undefined);
    } else {
      obj.derivative_updates = message.derivativeUpdates;
    }
    return obj;
  },
  fromAminoMsg(object: EventOrderbookUpdateAminoMsg): EventOrderbookUpdate {
    return EventOrderbookUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventOrderbookUpdateProtoMsg): EventOrderbookUpdate {
    return EventOrderbookUpdate.decode(message.value);
  },
  toProto(message: EventOrderbookUpdate): Uint8Array {
    return EventOrderbookUpdate.encode(message).finish();
  },
  toProtoMsg(message: EventOrderbookUpdate): EventOrderbookUpdateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventOrderbookUpdate",
      value: EventOrderbookUpdate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventOrderbookUpdate.typeUrl, EventOrderbookUpdate);
function createBaseOrderbookUpdate(): OrderbookUpdate {
  return {
    seq: BigInt(0),
    orderbook: undefined
  };
}
export const OrderbookUpdate = {
  typeUrl: "/injective.exchange.v1beta1.OrderbookUpdate",
  is(o: any): o is OrderbookUpdate {
    return o && (o.$typeUrl === OrderbookUpdate.typeUrl || typeof o.seq === "bigint");
  },
  isAmino(o: any): o is OrderbookUpdateAmino {
    return o && (o.$typeUrl === OrderbookUpdate.typeUrl || typeof o.seq === "bigint");
  },
  encode(message: OrderbookUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seq !== BigInt(0)) {
      writer.uint32(8).uint64(message.seq);
    }
    if (message.orderbook !== undefined) {
      Orderbook.encode(message.orderbook, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OrderbookUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderbookUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seq = reader.uint64();
          break;
        case 2:
          message.orderbook = Orderbook.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OrderbookUpdate>): OrderbookUpdate {
    const message = createBaseOrderbookUpdate();
    message.seq = object.seq !== undefined && object.seq !== null ? BigInt(object.seq.toString()) : BigInt(0);
    message.orderbook = object.orderbook !== undefined && object.orderbook !== null ? Orderbook.fromPartial(object.orderbook) : undefined;
    return message;
  },
  fromAmino(object: OrderbookUpdateAmino): OrderbookUpdate {
    const message = createBaseOrderbookUpdate();
    if (object.seq !== undefined && object.seq !== null) {
      message.seq = BigInt(object.seq);
    }
    if (object.orderbook !== undefined && object.orderbook !== null) {
      message.orderbook = Orderbook.fromAmino(object.orderbook);
    }
    return message;
  },
  toAmino(message: OrderbookUpdate): OrderbookUpdateAmino {
    const obj: any = {};
    obj.seq = message.seq !== BigInt(0) ? message.seq?.toString() : undefined;
    obj.orderbook = message.orderbook ? Orderbook.toAmino(message.orderbook) : undefined;
    return obj;
  },
  fromAminoMsg(object: OrderbookUpdateAminoMsg): OrderbookUpdate {
    return OrderbookUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderbookUpdateProtoMsg): OrderbookUpdate {
    return OrderbookUpdate.decode(message.value);
  },
  toProto(message: OrderbookUpdate): Uint8Array {
    return OrderbookUpdate.encode(message).finish();
  },
  toProtoMsg(message: OrderbookUpdate): OrderbookUpdateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.OrderbookUpdate",
      value: OrderbookUpdate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderbookUpdate.typeUrl, OrderbookUpdate);
function createBaseOrderbook(): Orderbook {
  return {
    marketId: new Uint8Array(),
    buyLevels: [],
    sellLevels: []
  };
}
export const Orderbook = {
  typeUrl: "/injective.exchange.v1beta1.Orderbook",
  is(o: any): o is Orderbook {
    return o && (o.$typeUrl === Orderbook.typeUrl || (o.marketId instanceof Uint8Array || typeof o.marketId === "string") && Array.isArray(o.buyLevels) && (!o.buyLevels.length || Level.is(o.buyLevels[0])) && Array.isArray(o.sellLevels) && (!o.sellLevels.length || Level.is(o.sellLevels[0])));
  },
  isAmino(o: any): o is OrderbookAmino {
    return o && (o.$typeUrl === Orderbook.typeUrl || (o.market_id instanceof Uint8Array || typeof o.market_id === "string") && Array.isArray(o.buy_levels) && (!o.buy_levels.length || Level.isAmino(o.buy_levels[0])) && Array.isArray(o.sell_levels) && (!o.sell_levels.length || Level.isAmino(o.sell_levels[0])));
  },
  encode(message: Orderbook, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId.length !== 0) {
      writer.uint32(10).bytes(message.marketId);
    }
    for (const v of message.buyLevels) {
      Level.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.sellLevels) {
      Level.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Orderbook {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderbook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.bytes();
          break;
        case 2:
          message.buyLevels.push(Level.decode(reader, reader.uint32()));
          break;
        case 3:
          message.sellLevels.push(Level.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Orderbook>): Orderbook {
    const message = createBaseOrderbook();
    message.marketId = object.marketId ?? new Uint8Array();
    message.buyLevels = object.buyLevels?.map(e => Level.fromPartial(e)) || [];
    message.sellLevels = object.sellLevels?.map(e => Level.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: OrderbookAmino): Orderbook {
    const message = createBaseOrderbook();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = bytesFromBase64(object.market_id);
    }
    message.buyLevels = object.buy_levels?.map(e => Level.fromAmino(e)) || [];
    message.sellLevels = object.sell_levels?.map(e => Level.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Orderbook): OrderbookAmino {
    const obj: any = {};
    obj.market_id = message.marketId ? base64FromBytes(message.marketId) : undefined;
    if (message.buyLevels) {
      obj.buy_levels = message.buyLevels.map(e => e ? Level.toAmino(e) : undefined);
    } else {
      obj.buy_levels = message.buyLevels;
    }
    if (message.sellLevels) {
      obj.sell_levels = message.sellLevels.map(e => e ? Level.toAmino(e) : undefined);
    } else {
      obj.sell_levels = message.sellLevels;
    }
    return obj;
  },
  fromAminoMsg(object: OrderbookAminoMsg): Orderbook {
    return Orderbook.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderbookProtoMsg): Orderbook {
    return Orderbook.decode(message.value);
  },
  toProto(message: Orderbook): Uint8Array {
    return Orderbook.encode(message).finish();
  },
  toProtoMsg(message: Orderbook): OrderbookProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.Orderbook",
      value: Orderbook.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Orderbook.typeUrl, Orderbook);
function createBaseEventGrantAuthorizations(): EventGrantAuthorizations {
  return {
    granter: "",
    grants: []
  };
}
export const EventGrantAuthorizations = {
  typeUrl: "/injective.exchange.v1beta1.EventGrantAuthorizations",
  is(o: any): o is EventGrantAuthorizations {
    return o && (o.$typeUrl === EventGrantAuthorizations.typeUrl || typeof o.granter === "string" && Array.isArray(o.grants) && (!o.grants.length || GrantAuthorization.is(o.grants[0])));
  },
  isAmino(o: any): o is EventGrantAuthorizationsAmino {
    return o && (o.$typeUrl === EventGrantAuthorizations.typeUrl || typeof o.granter === "string" && Array.isArray(o.grants) && (!o.grants.length || GrantAuthorization.isAmino(o.grants[0])));
  },
  encode(message: EventGrantAuthorizations, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    for (const v of message.grants) {
      GrantAuthorization.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventGrantAuthorizations {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGrantAuthorizations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
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
  fromPartial(object: DeepPartial<EventGrantAuthorizations>): EventGrantAuthorizations {
    const message = createBaseEventGrantAuthorizations();
    message.granter = object.granter ?? "";
    message.grants = object.grants?.map(e => GrantAuthorization.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventGrantAuthorizationsAmino): EventGrantAuthorizations {
    const message = createBaseEventGrantAuthorizations();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    message.grants = object.grants?.map(e => GrantAuthorization.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EventGrantAuthorizations): EventGrantAuthorizationsAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? GrantAuthorization.toAmino(e) : undefined);
    } else {
      obj.grants = message.grants;
    }
    return obj;
  },
  fromAminoMsg(object: EventGrantAuthorizationsAminoMsg): EventGrantAuthorizations {
    return EventGrantAuthorizations.fromAmino(object.value);
  },
  fromProtoMsg(message: EventGrantAuthorizationsProtoMsg): EventGrantAuthorizations {
    return EventGrantAuthorizations.decode(message.value);
  },
  toProto(message: EventGrantAuthorizations): Uint8Array {
    return EventGrantAuthorizations.encode(message).finish();
  },
  toProtoMsg(message: EventGrantAuthorizations): EventGrantAuthorizationsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventGrantAuthorizations",
      value: EventGrantAuthorizations.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventGrantAuthorizations.typeUrl, EventGrantAuthorizations);
function createBaseEventGrantActivation(): EventGrantActivation {
  return {
    grantee: "",
    granter: "",
    amount: ""
  };
}
export const EventGrantActivation = {
  typeUrl: "/injective.exchange.v1beta1.EventGrantActivation",
  is(o: any): o is EventGrantActivation {
    return o && (o.$typeUrl === EventGrantActivation.typeUrl || typeof o.grantee === "string" && typeof o.granter === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is EventGrantActivationAmino {
    return o && (o.$typeUrl === EventGrantActivation.typeUrl || typeof o.grantee === "string" && typeof o.granter === "string" && typeof o.amount === "string");
  },
  encode(message: EventGrantActivation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.granter !== "") {
      writer.uint32(18).string(message.granter);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventGrantActivation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGrantActivation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.granter = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventGrantActivation>): EventGrantActivation {
    const message = createBaseEventGrantActivation();
    message.grantee = object.grantee ?? "";
    message.granter = object.granter ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: EventGrantActivationAmino): EventGrantActivation {
    const message = createBaseEventGrantActivation();
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: EventGrantActivation): EventGrantActivationAmino {
    const obj: any = {};
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: EventGrantActivationAminoMsg): EventGrantActivation {
    return EventGrantActivation.fromAmino(object.value);
  },
  fromProtoMsg(message: EventGrantActivationProtoMsg): EventGrantActivation {
    return EventGrantActivation.decode(message.value);
  },
  toProto(message: EventGrantActivation): Uint8Array {
    return EventGrantActivation.encode(message).finish();
  },
  toProtoMsg(message: EventGrantActivation): EventGrantActivationProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventGrantActivation",
      value: EventGrantActivation.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventGrantActivation.typeUrl, EventGrantActivation);
function createBaseEventInvalidGrant(): EventInvalidGrant {
  return {
    grantee: "",
    granter: ""
  };
}
export const EventInvalidGrant = {
  typeUrl: "/injective.exchange.v1beta1.EventInvalidGrant",
  is(o: any): o is EventInvalidGrant {
    return o && (o.$typeUrl === EventInvalidGrant.typeUrl || typeof o.grantee === "string" && typeof o.granter === "string");
  },
  isAmino(o: any): o is EventInvalidGrantAmino {
    return o && (o.$typeUrl === EventInvalidGrant.typeUrl || typeof o.grantee === "string" && typeof o.granter === "string");
  },
  encode(message: EventInvalidGrant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.granter !== "") {
      writer.uint32(18).string(message.granter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventInvalidGrant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventInvalidGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.granter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventInvalidGrant>): EventInvalidGrant {
    const message = createBaseEventInvalidGrant();
    message.grantee = object.grantee ?? "";
    message.granter = object.granter ?? "";
    return message;
  },
  fromAmino(object: EventInvalidGrantAmino): EventInvalidGrant {
    const message = createBaseEventInvalidGrant();
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    return message;
  },
  toAmino(message: EventInvalidGrant): EventInvalidGrantAmino {
    const obj: any = {};
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.granter = message.granter === "" ? undefined : message.granter;
    return obj;
  },
  fromAminoMsg(object: EventInvalidGrantAminoMsg): EventInvalidGrant {
    return EventInvalidGrant.fromAmino(object.value);
  },
  fromProtoMsg(message: EventInvalidGrantProtoMsg): EventInvalidGrant {
    return EventInvalidGrant.decode(message.value);
  },
  toProto(message: EventInvalidGrant): Uint8Array {
    return EventInvalidGrant.encode(message).finish();
  },
  toProtoMsg(message: EventInvalidGrant): EventInvalidGrantProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventInvalidGrant",
      value: EventInvalidGrant.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventInvalidGrant.typeUrl, EventInvalidGrant);
function createBaseEventOrderCancelFail(): EventOrderCancelFail {
  return {
    marketId: "",
    subaccountId: "",
    orderHash: "",
    cid: "",
    description: ""
  };
}
export const EventOrderCancelFail = {
  typeUrl: "/injective.exchange.v1beta1.EventOrderCancelFail",
  is(o: any): o is EventOrderCancelFail {
    return o && (o.$typeUrl === EventOrderCancelFail.typeUrl || typeof o.marketId === "string" && typeof o.subaccountId === "string" && typeof o.orderHash === "string" && typeof o.cid === "string" && typeof o.description === "string");
  },
  isAmino(o: any): o is EventOrderCancelFailAmino {
    return o && (o.$typeUrl === EventOrderCancelFail.typeUrl || typeof o.market_id === "string" && typeof o.subaccount_id === "string" && typeof o.order_hash === "string" && typeof o.cid === "string" && typeof o.description === "string");
  },
  encode(message: EventOrderCancelFail, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    if (message.orderHash !== "") {
      writer.uint32(26).string(message.orderHash);
    }
    if (message.cid !== "") {
      writer.uint32(34).string(message.cid);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventOrderCancelFail {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOrderCancelFail();
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
          message.orderHash = reader.string();
          break;
        case 4:
          message.cid = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventOrderCancelFail>): EventOrderCancelFail {
    const message = createBaseEventOrderCancelFail();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.orderHash = object.orderHash ?? "";
    message.cid = object.cid ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: EventOrderCancelFailAmino): EventOrderCancelFail {
    const message = createBaseEventOrderCancelFail();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    if (object.order_hash !== undefined && object.order_hash !== null) {
      message.orderHash = object.order_hash;
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: EventOrderCancelFail): EventOrderCancelFailAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.order_hash = message.orderHash === "" ? undefined : message.orderHash;
    obj.cid = message.cid === "" ? undefined : message.cid;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: EventOrderCancelFailAminoMsg): EventOrderCancelFail {
    return EventOrderCancelFail.fromAmino(object.value);
  },
  fromProtoMsg(message: EventOrderCancelFailProtoMsg): EventOrderCancelFail {
    return EventOrderCancelFail.decode(message.value);
  },
  toProto(message: EventOrderCancelFail): Uint8Array {
    return EventOrderCancelFail.encode(message).finish();
  },
  toProtoMsg(message: EventOrderCancelFail): EventOrderCancelFailProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventOrderCancelFail",
      value: EventOrderCancelFail.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventOrderCancelFail.typeUrl, EventOrderCancelFail);