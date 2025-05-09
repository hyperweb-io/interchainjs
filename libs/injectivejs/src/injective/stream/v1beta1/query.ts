import { Level, LevelAmino, Deposit, DepositAmino, SpotLimitOrder, SpotLimitOrderAmino, DerivativeLimitOrder, DerivativeLimitOrderAmino, PositionDelta, PositionDeltaAmino } from "../../exchange/v1beta1/exchange";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { Decimal } from "@interchainjs/math";
export enum OrderUpdateStatus {
  Unspecified = 0,
  Booked = 1,
  Matched = 2,
  Cancelled = 3,
  UNRECOGNIZED = -1,
}
export const OrderUpdateStatusAmino = OrderUpdateStatus;
export function orderUpdateStatusFromJSON(object: any): OrderUpdateStatus {
  switch (object) {
    case 0:
    case "Unspecified":
      return OrderUpdateStatus.Unspecified;
    case 1:
    case "Booked":
      return OrderUpdateStatus.Booked;
    case 2:
    case "Matched":
      return OrderUpdateStatus.Matched;
    case 3:
    case "Cancelled":
      return OrderUpdateStatus.Cancelled;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderUpdateStatus.UNRECOGNIZED;
  }
}
export function orderUpdateStatusToJSON(object: OrderUpdateStatus): string {
  switch (object) {
    case OrderUpdateStatus.Unspecified:
      return "Unspecified";
    case OrderUpdateStatus.Booked:
      return "Booked";
    case OrderUpdateStatus.Matched:
      return "Matched";
    case OrderUpdateStatus.Cancelled:
      return "Cancelled";
    case OrderUpdateStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface StreamRequest {
  bankBalancesFilter?: BankBalancesFilter;
  subaccountDepositsFilter?: SubaccountDepositsFilter;
  spotTradesFilter?: TradesFilter;
  derivativeTradesFilter?: TradesFilter;
  spotOrdersFilter?: OrdersFilter;
  derivativeOrdersFilter?: OrdersFilter;
  spotOrderbooksFilter?: OrderbookFilter;
  derivativeOrderbooksFilter?: OrderbookFilter;
  positionsFilter?: PositionsFilter;
  oraclePriceFilter?: OraclePriceFilter;
}
export interface StreamRequestProtoMsg {
  typeUrl: "/injective.stream.v1beta1.StreamRequest";
  value: Uint8Array;
}
export interface StreamRequestAmino {
  bank_balances_filter?: BankBalancesFilterAmino;
  subaccount_deposits_filter?: SubaccountDepositsFilterAmino;
  spot_trades_filter?: TradesFilterAmino;
  derivative_trades_filter?: TradesFilterAmino;
  spot_orders_filter?: OrdersFilterAmino;
  derivative_orders_filter?: OrdersFilterAmino;
  spot_orderbooks_filter?: OrderbookFilterAmino;
  derivative_orderbooks_filter?: OrderbookFilterAmino;
  positions_filter?: PositionsFilterAmino;
  oracle_price_filter?: OraclePriceFilterAmino;
}
export interface StreamRequestAminoMsg {
  type: "/injective.stream.v1beta1.StreamRequest";
  value: StreamRequestAmino;
}
export interface StreamResponse {
  blockHeight: bigint;
  blockTime: bigint;
  bankBalances: BankBalance[];
  subaccountDeposits: SubaccountDeposits[];
  spotTrades: SpotTrade[];
  derivativeTrades: DerivativeTrade[];
  spotOrders: SpotOrderUpdate[];
  derivativeOrders: DerivativeOrderUpdate[];
  spotOrderbookUpdates: OrderbookUpdate[];
  derivativeOrderbookUpdates: OrderbookUpdate[];
  positions: Position[];
  oraclePrices: OraclePrice[];
}
export interface StreamResponseProtoMsg {
  typeUrl: "/injective.stream.v1beta1.StreamResponse";
  value: Uint8Array;
}
export interface StreamResponseAmino {
  block_height: string;
  block_time: string;
  bank_balances: BankBalanceAmino[];
  subaccount_deposits: SubaccountDepositsAmino[];
  spot_trades: SpotTradeAmino[];
  derivative_trades: DerivativeTradeAmino[];
  spot_orders: SpotOrderUpdateAmino[];
  derivative_orders: DerivativeOrderUpdateAmino[];
  spot_orderbook_updates: OrderbookUpdateAmino[];
  derivative_orderbook_updates: OrderbookUpdateAmino[];
  positions: PositionAmino[];
  oracle_prices: OraclePriceAmino[];
}
export interface StreamResponseAminoMsg {
  type: "/injective.stream.v1beta1.StreamResponse";
  value: StreamResponseAmino;
}
export interface OrderbookUpdate {
  seq: bigint;
  orderbook?: Orderbook;
}
export interface OrderbookUpdateProtoMsg {
  typeUrl: "/injective.stream.v1beta1.OrderbookUpdate";
  value: Uint8Array;
}
export interface OrderbookUpdateAmino {
  seq: string;
  orderbook?: OrderbookAmino;
}
export interface OrderbookUpdateAminoMsg {
  type: "/injective.stream.v1beta1.OrderbookUpdate";
  value: OrderbookUpdateAmino;
}
export interface Orderbook {
  marketId: string;
  buyLevels: Level[];
  sellLevels: Level[];
}
export interface OrderbookProtoMsg {
  typeUrl: "/injective.stream.v1beta1.Orderbook";
  value: Uint8Array;
}
export interface OrderbookAmino {
  market_id: string;
  buy_levels: LevelAmino[];
  sell_levels: LevelAmino[];
}
export interface OrderbookAminoMsg {
  type: "/injective.stream.v1beta1.Orderbook";
  value: OrderbookAmino;
}
export interface BankBalance {
  account: string;
  balances: Coin[];
}
export interface BankBalanceProtoMsg {
  typeUrl: "/injective.stream.v1beta1.BankBalance";
  value: Uint8Array;
}
export interface BankBalanceAmino {
  account: string;
  balances: CoinAmino[];
}
export interface BankBalanceAminoMsg {
  type: "/injective.stream.v1beta1.BankBalance";
  value: BankBalanceAmino;
}
export interface SubaccountDeposits {
  subaccountId: string;
  deposits: SubaccountDeposit[];
}
export interface SubaccountDepositsProtoMsg {
  typeUrl: "/injective.stream.v1beta1.SubaccountDeposits";
  value: Uint8Array;
}
export interface SubaccountDepositsAmino {
  subaccount_id: string;
  deposits: SubaccountDepositAmino[];
}
export interface SubaccountDepositsAminoMsg {
  type: "/injective.stream.v1beta1.SubaccountDeposits";
  value: SubaccountDepositsAmino;
}
export interface SubaccountDeposit {
  denom: string;
  deposit: Deposit;
}
export interface SubaccountDepositProtoMsg {
  typeUrl: "/injective.stream.v1beta1.SubaccountDeposit";
  value: Uint8Array;
}
export interface SubaccountDepositAmino {
  denom: string;
  deposit: DepositAmino;
}
export interface SubaccountDepositAminoMsg {
  type: "/injective.stream.v1beta1.SubaccountDeposit";
  value: SubaccountDepositAmino;
}
export interface SpotOrderUpdate {
  status: OrderUpdateStatus;
  orderHash: Uint8Array;
  cid: string;
  order?: SpotOrder;
}
export interface SpotOrderUpdateProtoMsg {
  typeUrl: "/injective.stream.v1beta1.SpotOrderUpdate";
  value: Uint8Array;
}
export interface SpotOrderUpdateAmino {
  status: OrderUpdateStatus;
  order_hash: string;
  cid: string;
  order?: SpotOrderAmino;
}
export interface SpotOrderUpdateAminoMsg {
  type: "/injective.stream.v1beta1.SpotOrderUpdate";
  value: SpotOrderUpdateAmino;
}
export interface SpotOrder {
  marketId: string;
  order: SpotLimitOrder;
}
export interface SpotOrderProtoMsg {
  typeUrl: "/injective.stream.v1beta1.SpotOrder";
  value: Uint8Array;
}
export interface SpotOrderAmino {
  market_id: string;
  order: SpotLimitOrderAmino;
}
export interface SpotOrderAminoMsg {
  type: "/injective.stream.v1beta1.SpotOrder";
  value: SpotOrderAmino;
}
export interface DerivativeOrderUpdate {
  status: OrderUpdateStatus;
  orderHash: Uint8Array;
  cid: string;
  order?: DerivativeOrder;
}
export interface DerivativeOrderUpdateProtoMsg {
  typeUrl: "/injective.stream.v1beta1.DerivativeOrderUpdate";
  value: Uint8Array;
}
export interface DerivativeOrderUpdateAmino {
  status: OrderUpdateStatus;
  order_hash: string;
  cid: string;
  order?: DerivativeOrderAmino;
}
export interface DerivativeOrderUpdateAminoMsg {
  type: "/injective.stream.v1beta1.DerivativeOrderUpdate";
  value: DerivativeOrderUpdateAmino;
}
export interface DerivativeOrder {
  marketId: string;
  order: DerivativeLimitOrder;
  isMarket: boolean;
}
export interface DerivativeOrderProtoMsg {
  typeUrl: "/injective.stream.v1beta1.DerivativeOrder";
  value: Uint8Array;
}
export interface DerivativeOrderAmino {
  market_id: string;
  order: DerivativeLimitOrderAmino;
  is_market: boolean;
}
export interface DerivativeOrderAminoMsg {
  type: "/injective.stream.v1beta1.DerivativeOrder";
  value: DerivativeOrderAmino;
}
export interface Position {
  marketId: string;
  subaccountId: string;
  isLong: boolean;
  quantity: string;
  entryPrice: string;
  margin: string;
  cumulativeFundingEntry: string;
}
export interface PositionProtoMsg {
  typeUrl: "/injective.stream.v1beta1.Position";
  value: Uint8Array;
}
export interface PositionAmino {
  market_id: string;
  subaccount_id: string;
  isLong: boolean;
  quantity: string;
  entry_price: string;
  margin: string;
  cumulative_funding_entry: string;
}
export interface PositionAminoMsg {
  type: "/injective.stream.v1beta1.Position";
  value: PositionAmino;
}
export interface OraclePrice {
  symbol: string;
  price: string;
  type: string;
}
export interface OraclePriceProtoMsg {
  typeUrl: "/injective.stream.v1beta1.OraclePrice";
  value: Uint8Array;
}
export interface OraclePriceAmino {
  symbol: string;
  price: string;
  type: string;
}
export interface OraclePriceAminoMsg {
  type: "/injective.stream.v1beta1.OraclePrice";
  value: OraclePriceAmino;
}
export interface SpotTrade {
  marketId: string;
  isBuy: boolean;
  executionType: string;
  quantity: string;
  price: string;
  /** bytes32 subaccount ID that executed the trade */
  subaccountId: string;
  fee: string;
  orderHash: Uint8Array;
  feeRecipientAddress?: string;
  cid: string;
  tradeId: string;
}
export interface SpotTradeProtoMsg {
  typeUrl: "/injective.stream.v1beta1.SpotTrade";
  value: Uint8Array;
}
export interface SpotTradeAmino {
  market_id: string;
  is_buy: boolean;
  executionType: string;
  quantity: string;
  price: string;
  /** bytes32 subaccount ID that executed the trade */
  subaccount_id: string;
  fee: string;
  order_hash: string;
  fee_recipient_address?: string;
  cid: string;
  trade_id: string;
}
export interface SpotTradeAminoMsg {
  type: "/injective.stream.v1beta1.SpotTrade";
  value: SpotTradeAmino;
}
export interface DerivativeTrade {
  marketId: string;
  isBuy: boolean;
  executionType: string;
  subaccountId: string;
  positionDelta?: PositionDelta;
  payout: string;
  fee: string;
  orderHash: string;
  feeRecipientAddress?: string;
  cid: string;
  tradeId: string;
}
export interface DerivativeTradeProtoMsg {
  typeUrl: "/injective.stream.v1beta1.DerivativeTrade";
  value: Uint8Array;
}
export interface DerivativeTradeAmino {
  market_id: string;
  is_buy: boolean;
  executionType: string;
  subaccount_id: string;
  position_delta?: PositionDeltaAmino;
  payout: string;
  fee: string;
  order_hash: string;
  fee_recipient_address?: string;
  cid: string;
  trade_id: string;
}
export interface DerivativeTradeAminoMsg {
  type: "/injective.stream.v1beta1.DerivativeTrade";
  value: DerivativeTradeAmino;
}
export interface TradesFilter {
  subaccountIds: string[];
  marketIds: string[];
}
export interface TradesFilterProtoMsg {
  typeUrl: "/injective.stream.v1beta1.TradesFilter";
  value: Uint8Array;
}
export interface TradesFilterAmino {
  subaccount_ids: string[];
  market_ids: string[];
}
export interface TradesFilterAminoMsg {
  type: "/injective.stream.v1beta1.TradesFilter";
  value: TradesFilterAmino;
}
export interface PositionsFilter {
  subaccountIds: string[];
  marketIds: string[];
}
export interface PositionsFilterProtoMsg {
  typeUrl: "/injective.stream.v1beta1.PositionsFilter";
  value: Uint8Array;
}
export interface PositionsFilterAmino {
  subaccount_ids: string[];
  market_ids: string[];
}
export interface PositionsFilterAminoMsg {
  type: "/injective.stream.v1beta1.PositionsFilter";
  value: PositionsFilterAmino;
}
export interface OrdersFilter {
  subaccountIds: string[];
  marketIds: string[];
}
export interface OrdersFilterProtoMsg {
  typeUrl: "/injective.stream.v1beta1.OrdersFilter";
  value: Uint8Array;
}
export interface OrdersFilterAmino {
  subaccount_ids: string[];
  market_ids: string[];
}
export interface OrdersFilterAminoMsg {
  type: "/injective.stream.v1beta1.OrdersFilter";
  value: OrdersFilterAmino;
}
export interface OrderbookFilter {
  marketIds: string[];
}
export interface OrderbookFilterProtoMsg {
  typeUrl: "/injective.stream.v1beta1.OrderbookFilter";
  value: Uint8Array;
}
export interface OrderbookFilterAmino {
  market_ids: string[];
}
export interface OrderbookFilterAminoMsg {
  type: "/injective.stream.v1beta1.OrderbookFilter";
  value: OrderbookFilterAmino;
}
export interface BankBalancesFilter {
  accounts: string[];
}
export interface BankBalancesFilterProtoMsg {
  typeUrl: "/injective.stream.v1beta1.BankBalancesFilter";
  value: Uint8Array;
}
export interface BankBalancesFilterAmino {
  accounts: string[];
}
export interface BankBalancesFilterAminoMsg {
  type: "/injective.stream.v1beta1.BankBalancesFilter";
  value: BankBalancesFilterAmino;
}
export interface SubaccountDepositsFilter {
  subaccountIds: string[];
}
export interface SubaccountDepositsFilterProtoMsg {
  typeUrl: "/injective.stream.v1beta1.SubaccountDepositsFilter";
  value: Uint8Array;
}
export interface SubaccountDepositsFilterAmino {
  subaccount_ids: string[];
}
export interface SubaccountDepositsFilterAminoMsg {
  type: "/injective.stream.v1beta1.SubaccountDepositsFilter";
  value: SubaccountDepositsFilterAmino;
}
export interface OraclePriceFilter {
  symbol: string[];
}
export interface OraclePriceFilterProtoMsg {
  typeUrl: "/injective.stream.v1beta1.OraclePriceFilter";
  value: Uint8Array;
}
export interface OraclePriceFilterAmino {
  symbol: string[];
}
export interface OraclePriceFilterAminoMsg {
  type: "/injective.stream.v1beta1.OraclePriceFilter";
  value: OraclePriceFilterAmino;
}
function createBaseStreamRequest(): StreamRequest {
  return {
    bankBalancesFilter: undefined,
    subaccountDepositsFilter: undefined,
    spotTradesFilter: undefined,
    derivativeTradesFilter: undefined,
    spotOrdersFilter: undefined,
    derivativeOrdersFilter: undefined,
    spotOrderbooksFilter: undefined,
    derivativeOrderbooksFilter: undefined,
    positionsFilter: undefined,
    oraclePriceFilter: undefined
  };
}
export const StreamRequest = {
  typeUrl: "/injective.stream.v1beta1.StreamRequest",
  is(o: any): o is StreamRequest {
    return o && o.$typeUrl === StreamRequest.typeUrl;
  },
  isAmino(o: any): o is StreamRequestAmino {
    return o && o.$typeUrl === StreamRequest.typeUrl;
  },
  encode(message: StreamRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bankBalancesFilter !== undefined) {
      BankBalancesFilter.encode(message.bankBalancesFilter, writer.uint32(10).fork()).ldelim();
    }
    if (message.subaccountDepositsFilter !== undefined) {
      SubaccountDepositsFilter.encode(message.subaccountDepositsFilter, writer.uint32(18).fork()).ldelim();
    }
    if (message.spotTradesFilter !== undefined) {
      TradesFilter.encode(message.spotTradesFilter, writer.uint32(26).fork()).ldelim();
    }
    if (message.derivativeTradesFilter !== undefined) {
      TradesFilter.encode(message.derivativeTradesFilter, writer.uint32(34).fork()).ldelim();
    }
    if (message.spotOrdersFilter !== undefined) {
      OrdersFilter.encode(message.spotOrdersFilter, writer.uint32(42).fork()).ldelim();
    }
    if (message.derivativeOrdersFilter !== undefined) {
      OrdersFilter.encode(message.derivativeOrdersFilter, writer.uint32(50).fork()).ldelim();
    }
    if (message.spotOrderbooksFilter !== undefined) {
      OrderbookFilter.encode(message.spotOrderbooksFilter, writer.uint32(58).fork()).ldelim();
    }
    if (message.derivativeOrderbooksFilter !== undefined) {
      OrderbookFilter.encode(message.derivativeOrderbooksFilter, writer.uint32(66).fork()).ldelim();
    }
    if (message.positionsFilter !== undefined) {
      PositionsFilter.encode(message.positionsFilter, writer.uint32(74).fork()).ldelim();
    }
    if (message.oraclePriceFilter !== undefined) {
      OraclePriceFilter.encode(message.oraclePriceFilter, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StreamRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bankBalancesFilter = BankBalancesFilter.decode(reader, reader.uint32());
          break;
        case 2:
          message.subaccountDepositsFilter = SubaccountDepositsFilter.decode(reader, reader.uint32());
          break;
        case 3:
          message.spotTradesFilter = TradesFilter.decode(reader, reader.uint32());
          break;
        case 4:
          message.derivativeTradesFilter = TradesFilter.decode(reader, reader.uint32());
          break;
        case 5:
          message.spotOrdersFilter = OrdersFilter.decode(reader, reader.uint32());
          break;
        case 6:
          message.derivativeOrdersFilter = OrdersFilter.decode(reader, reader.uint32());
          break;
        case 7:
          message.spotOrderbooksFilter = OrderbookFilter.decode(reader, reader.uint32());
          break;
        case 8:
          message.derivativeOrderbooksFilter = OrderbookFilter.decode(reader, reader.uint32());
          break;
        case 9:
          message.positionsFilter = PositionsFilter.decode(reader, reader.uint32());
          break;
        case 10:
          message.oraclePriceFilter = OraclePriceFilter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<StreamRequest>): StreamRequest {
    const message = createBaseStreamRequest();
    message.bankBalancesFilter = object.bankBalancesFilter !== undefined && object.bankBalancesFilter !== null ? BankBalancesFilter.fromPartial(object.bankBalancesFilter) : undefined;
    message.subaccountDepositsFilter = object.subaccountDepositsFilter !== undefined && object.subaccountDepositsFilter !== null ? SubaccountDepositsFilter.fromPartial(object.subaccountDepositsFilter) : undefined;
    message.spotTradesFilter = object.spotTradesFilter !== undefined && object.spotTradesFilter !== null ? TradesFilter.fromPartial(object.spotTradesFilter) : undefined;
    message.derivativeTradesFilter = object.derivativeTradesFilter !== undefined && object.derivativeTradesFilter !== null ? TradesFilter.fromPartial(object.derivativeTradesFilter) : undefined;
    message.spotOrdersFilter = object.spotOrdersFilter !== undefined && object.spotOrdersFilter !== null ? OrdersFilter.fromPartial(object.spotOrdersFilter) : undefined;
    message.derivativeOrdersFilter = object.derivativeOrdersFilter !== undefined && object.derivativeOrdersFilter !== null ? OrdersFilter.fromPartial(object.derivativeOrdersFilter) : undefined;
    message.spotOrderbooksFilter = object.spotOrderbooksFilter !== undefined && object.spotOrderbooksFilter !== null ? OrderbookFilter.fromPartial(object.spotOrderbooksFilter) : undefined;
    message.derivativeOrderbooksFilter = object.derivativeOrderbooksFilter !== undefined && object.derivativeOrderbooksFilter !== null ? OrderbookFilter.fromPartial(object.derivativeOrderbooksFilter) : undefined;
    message.positionsFilter = object.positionsFilter !== undefined && object.positionsFilter !== null ? PositionsFilter.fromPartial(object.positionsFilter) : undefined;
    message.oraclePriceFilter = object.oraclePriceFilter !== undefined && object.oraclePriceFilter !== null ? OraclePriceFilter.fromPartial(object.oraclePriceFilter) : undefined;
    return message;
  },
  fromAmino(object: StreamRequestAmino): StreamRequest {
    const message = createBaseStreamRequest();
    if (object.bank_balances_filter !== undefined && object.bank_balances_filter !== null) {
      message.bankBalancesFilter = BankBalancesFilter.fromAmino(object.bank_balances_filter);
    }
    if (object.subaccount_deposits_filter !== undefined && object.subaccount_deposits_filter !== null) {
      message.subaccountDepositsFilter = SubaccountDepositsFilter.fromAmino(object.subaccount_deposits_filter);
    }
    if (object.spot_trades_filter !== undefined && object.spot_trades_filter !== null) {
      message.spotTradesFilter = TradesFilter.fromAmino(object.spot_trades_filter);
    }
    if (object.derivative_trades_filter !== undefined && object.derivative_trades_filter !== null) {
      message.derivativeTradesFilter = TradesFilter.fromAmino(object.derivative_trades_filter);
    }
    if (object.spot_orders_filter !== undefined && object.spot_orders_filter !== null) {
      message.spotOrdersFilter = OrdersFilter.fromAmino(object.spot_orders_filter);
    }
    if (object.derivative_orders_filter !== undefined && object.derivative_orders_filter !== null) {
      message.derivativeOrdersFilter = OrdersFilter.fromAmino(object.derivative_orders_filter);
    }
    if (object.spot_orderbooks_filter !== undefined && object.spot_orderbooks_filter !== null) {
      message.spotOrderbooksFilter = OrderbookFilter.fromAmino(object.spot_orderbooks_filter);
    }
    if (object.derivative_orderbooks_filter !== undefined && object.derivative_orderbooks_filter !== null) {
      message.derivativeOrderbooksFilter = OrderbookFilter.fromAmino(object.derivative_orderbooks_filter);
    }
    if (object.positions_filter !== undefined && object.positions_filter !== null) {
      message.positionsFilter = PositionsFilter.fromAmino(object.positions_filter);
    }
    if (object.oracle_price_filter !== undefined && object.oracle_price_filter !== null) {
      message.oraclePriceFilter = OraclePriceFilter.fromAmino(object.oracle_price_filter);
    }
    return message;
  },
  toAmino(message: StreamRequest): StreamRequestAmino {
    const obj: any = {};
    obj.bank_balances_filter = message.bankBalancesFilter ? BankBalancesFilter.toAmino(message.bankBalancesFilter) : undefined;
    obj.subaccount_deposits_filter = message.subaccountDepositsFilter ? SubaccountDepositsFilter.toAmino(message.subaccountDepositsFilter) : undefined;
    obj.spot_trades_filter = message.spotTradesFilter ? TradesFilter.toAmino(message.spotTradesFilter) : undefined;
    obj.derivative_trades_filter = message.derivativeTradesFilter ? TradesFilter.toAmino(message.derivativeTradesFilter) : undefined;
    obj.spot_orders_filter = message.spotOrdersFilter ? OrdersFilter.toAmino(message.spotOrdersFilter) : undefined;
    obj.derivative_orders_filter = message.derivativeOrdersFilter ? OrdersFilter.toAmino(message.derivativeOrdersFilter) : undefined;
    obj.spot_orderbooks_filter = message.spotOrderbooksFilter ? OrderbookFilter.toAmino(message.spotOrderbooksFilter) : undefined;
    obj.derivative_orderbooks_filter = message.derivativeOrderbooksFilter ? OrderbookFilter.toAmino(message.derivativeOrderbooksFilter) : undefined;
    obj.positions_filter = message.positionsFilter ? PositionsFilter.toAmino(message.positionsFilter) : undefined;
    obj.oracle_price_filter = message.oraclePriceFilter ? OraclePriceFilter.toAmino(message.oraclePriceFilter) : undefined;
    return obj;
  },
  fromAminoMsg(object: StreamRequestAminoMsg): StreamRequest {
    return StreamRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: StreamRequestProtoMsg): StreamRequest {
    return StreamRequest.decode(message.value);
  },
  toProto(message: StreamRequest): Uint8Array {
    return StreamRequest.encode(message).finish();
  },
  toProtoMsg(message: StreamRequest): StreamRequestProtoMsg {
    return {
      typeUrl: "/injective.stream.v1beta1.StreamRequest",
      value: StreamRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(StreamRequest.typeUrl)) {
      return;
    }
    BankBalancesFilter.registerTypeUrl();
    SubaccountDepositsFilter.registerTypeUrl();
    TradesFilter.registerTypeUrl();
    OrdersFilter.registerTypeUrl();
    OrderbookFilter.registerTypeUrl();
    PositionsFilter.registerTypeUrl();
    OraclePriceFilter.registerTypeUrl();
  }
};
function createBaseStreamResponse(): StreamResponse {
  return {
    blockHeight: BigInt(0),
    blockTime: BigInt(0),
    bankBalances: [],
    subaccountDeposits: [],
    spotTrades: [],
    derivativeTrades: [],
    spotOrders: [],
    derivativeOrders: [],
    spotOrderbookUpdates: [],
    derivativeOrderbookUpdates: [],
    positions: [],
    oraclePrices: []
  };
}
export const StreamResponse = {
  typeUrl: "/injective.stream.v1beta1.StreamResponse",
  is(o: any): o is StreamResponse {
    return o && (o.$typeUrl === StreamResponse.typeUrl || typeof o.blockHeight === "bigint" && typeof o.blockTime === "bigint" && Array.isArray(o.bankBalances) && (!o.bankBalances.length || BankBalance.is(o.bankBalances[0])) && Array.isArray(o.subaccountDeposits) && (!o.subaccountDeposits.length || SubaccountDeposits.is(o.subaccountDeposits[0])) && Array.isArray(o.spotTrades) && (!o.spotTrades.length || SpotTrade.is(o.spotTrades[0])) && Array.isArray(o.derivativeTrades) && (!o.derivativeTrades.length || DerivativeTrade.is(o.derivativeTrades[0])) && Array.isArray(o.spotOrders) && (!o.spotOrders.length || SpotOrderUpdate.is(o.spotOrders[0])) && Array.isArray(o.derivativeOrders) && (!o.derivativeOrders.length || DerivativeOrderUpdate.is(o.derivativeOrders[0])) && Array.isArray(o.spotOrderbookUpdates) && (!o.spotOrderbookUpdates.length || OrderbookUpdate.is(o.spotOrderbookUpdates[0])) && Array.isArray(o.derivativeOrderbookUpdates) && (!o.derivativeOrderbookUpdates.length || OrderbookUpdate.is(o.derivativeOrderbookUpdates[0])) && Array.isArray(o.positions) && (!o.positions.length || Position.is(o.positions[0])) && Array.isArray(o.oraclePrices) && (!o.oraclePrices.length || OraclePrice.is(o.oraclePrices[0])));
  },
  isAmino(o: any): o is StreamResponseAmino {
    return o && (o.$typeUrl === StreamResponse.typeUrl || typeof o.block_height === "bigint" && typeof o.block_time === "bigint" && Array.isArray(o.bank_balances) && (!o.bank_balances.length || BankBalance.isAmino(o.bank_balances[0])) && Array.isArray(o.subaccount_deposits) && (!o.subaccount_deposits.length || SubaccountDeposits.isAmino(o.subaccount_deposits[0])) && Array.isArray(o.spot_trades) && (!o.spot_trades.length || SpotTrade.isAmino(o.spot_trades[0])) && Array.isArray(o.derivative_trades) && (!o.derivative_trades.length || DerivativeTrade.isAmino(o.derivative_trades[0])) && Array.isArray(o.spot_orders) && (!o.spot_orders.length || SpotOrderUpdate.isAmino(o.spot_orders[0])) && Array.isArray(o.derivative_orders) && (!o.derivative_orders.length || DerivativeOrderUpdate.isAmino(o.derivative_orders[0])) && Array.isArray(o.spot_orderbook_updates) && (!o.spot_orderbook_updates.length || OrderbookUpdate.isAmino(o.spot_orderbook_updates[0])) && Array.isArray(o.derivative_orderbook_updates) && (!o.derivative_orderbook_updates.length || OrderbookUpdate.isAmino(o.derivative_orderbook_updates[0])) && Array.isArray(o.positions) && (!o.positions.length || Position.isAmino(o.positions[0])) && Array.isArray(o.oracle_prices) && (!o.oracle_prices.length || OraclePrice.isAmino(o.oracle_prices[0])));
  },
  encode(message: StreamResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.blockHeight);
    }
    if (message.blockTime !== BigInt(0)) {
      writer.uint32(16).int64(message.blockTime);
    }
    for (const v of message.bankBalances) {
      BankBalance.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.subaccountDeposits) {
      SubaccountDeposits.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.spotTrades) {
      SpotTrade.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.derivativeTrades) {
      DerivativeTrade.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.spotOrders) {
      SpotOrderUpdate.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.derivativeOrders) {
      DerivativeOrderUpdate.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.spotOrderbookUpdates) {
      OrderbookUpdate.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.derivativeOrderbookUpdates) {
      OrderbookUpdate.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.positions) {
      Position.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.oraclePrices) {
      OraclePrice.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StreamResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.uint64();
          break;
        case 2:
          message.blockTime = reader.int64();
          break;
        case 3:
          message.bankBalances.push(BankBalance.decode(reader, reader.uint32()));
          break;
        case 4:
          message.subaccountDeposits.push(SubaccountDeposits.decode(reader, reader.uint32()));
          break;
        case 5:
          message.spotTrades.push(SpotTrade.decode(reader, reader.uint32()));
          break;
        case 6:
          message.derivativeTrades.push(DerivativeTrade.decode(reader, reader.uint32()));
          break;
        case 7:
          message.spotOrders.push(SpotOrderUpdate.decode(reader, reader.uint32()));
          break;
        case 8:
          message.derivativeOrders.push(DerivativeOrderUpdate.decode(reader, reader.uint32()));
          break;
        case 9:
          message.spotOrderbookUpdates.push(OrderbookUpdate.decode(reader, reader.uint32()));
          break;
        case 10:
          message.derivativeOrderbookUpdates.push(OrderbookUpdate.decode(reader, reader.uint32()));
          break;
        case 11:
          message.positions.push(Position.decode(reader, reader.uint32()));
          break;
        case 12:
          message.oraclePrices.push(OraclePrice.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<StreamResponse>): StreamResponse {
    const message = createBaseStreamResponse();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? BigInt(object.blockTime.toString()) : BigInt(0);
    message.bankBalances = object.bankBalances?.map(e => BankBalance.fromPartial(e)) || [];
    message.subaccountDeposits = object.subaccountDeposits?.map(e => SubaccountDeposits.fromPartial(e)) || [];
    message.spotTrades = object.spotTrades?.map(e => SpotTrade.fromPartial(e)) || [];
    message.derivativeTrades = object.derivativeTrades?.map(e => DerivativeTrade.fromPartial(e)) || [];
    message.spotOrders = object.spotOrders?.map(e => SpotOrderUpdate.fromPartial(e)) || [];
    message.derivativeOrders = object.derivativeOrders?.map(e => DerivativeOrderUpdate.fromPartial(e)) || [];
    message.spotOrderbookUpdates = object.spotOrderbookUpdates?.map(e => OrderbookUpdate.fromPartial(e)) || [];
    message.derivativeOrderbookUpdates = object.derivativeOrderbookUpdates?.map(e => OrderbookUpdate.fromPartial(e)) || [];
    message.positions = object.positions?.map(e => Position.fromPartial(e)) || [];
    message.oraclePrices = object.oraclePrices?.map(e => OraclePrice.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: StreamResponseAmino): StreamResponse {
    const message = createBaseStreamResponse();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = BigInt(object.block_time);
    }
    message.bankBalances = object.bank_balances?.map(e => BankBalance.fromAmino(e)) || [];
    message.subaccountDeposits = object.subaccount_deposits?.map(e => SubaccountDeposits.fromAmino(e)) || [];
    message.spotTrades = object.spot_trades?.map(e => SpotTrade.fromAmino(e)) || [];
    message.derivativeTrades = object.derivative_trades?.map(e => DerivativeTrade.fromAmino(e)) || [];
    message.spotOrders = object.spot_orders?.map(e => SpotOrderUpdate.fromAmino(e)) || [];
    message.derivativeOrders = object.derivative_orders?.map(e => DerivativeOrderUpdate.fromAmino(e)) || [];
    message.spotOrderbookUpdates = object.spot_orderbook_updates?.map(e => OrderbookUpdate.fromAmino(e)) || [];
    message.derivativeOrderbookUpdates = object.derivative_orderbook_updates?.map(e => OrderbookUpdate.fromAmino(e)) || [];
    message.positions = object.positions?.map(e => Position.fromAmino(e)) || [];
    message.oraclePrices = object.oracle_prices?.map(e => OraclePrice.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: StreamResponse): StreamResponseAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    obj.block_time = message.blockTime !== BigInt(0) ? message.blockTime?.toString() : undefined;
    if (message.bankBalances) {
      obj.bank_balances = message.bankBalances.map(e => e ? BankBalance.toAmino(e) : undefined);
    } else {
      obj.bank_balances = message.bankBalances;
    }
    if (message.subaccountDeposits) {
      obj.subaccount_deposits = message.subaccountDeposits.map(e => e ? SubaccountDeposits.toAmino(e) : undefined);
    } else {
      obj.subaccount_deposits = message.subaccountDeposits;
    }
    if (message.spotTrades) {
      obj.spot_trades = message.spotTrades.map(e => e ? SpotTrade.toAmino(e) : undefined);
    } else {
      obj.spot_trades = message.spotTrades;
    }
    if (message.derivativeTrades) {
      obj.derivative_trades = message.derivativeTrades.map(e => e ? DerivativeTrade.toAmino(e) : undefined);
    } else {
      obj.derivative_trades = message.derivativeTrades;
    }
    if (message.spotOrders) {
      obj.spot_orders = message.spotOrders.map(e => e ? SpotOrderUpdate.toAmino(e) : undefined);
    } else {
      obj.spot_orders = message.spotOrders;
    }
    if (message.derivativeOrders) {
      obj.derivative_orders = message.derivativeOrders.map(e => e ? DerivativeOrderUpdate.toAmino(e) : undefined);
    } else {
      obj.derivative_orders = message.derivativeOrders;
    }
    if (message.spotOrderbookUpdates) {
      obj.spot_orderbook_updates = message.spotOrderbookUpdates.map(e => e ? OrderbookUpdate.toAmino(e) : undefined);
    } else {
      obj.spot_orderbook_updates = message.spotOrderbookUpdates;
    }
    if (message.derivativeOrderbookUpdates) {
      obj.derivative_orderbook_updates = message.derivativeOrderbookUpdates.map(e => e ? OrderbookUpdate.toAmino(e) : undefined);
    } else {
      obj.derivative_orderbook_updates = message.derivativeOrderbookUpdates;
    }
    if (message.positions) {
      obj.positions = message.positions.map(e => e ? Position.toAmino(e) : undefined);
    } else {
      obj.positions = message.positions;
    }
    if (message.oraclePrices) {
      obj.oracle_prices = message.oraclePrices.map(e => e ? OraclePrice.toAmino(e) : undefined);
    } else {
      obj.oracle_prices = message.oraclePrices;
    }
    return obj;
  },
  fromAminoMsg(object: StreamResponseAminoMsg): StreamResponse {
    return StreamResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: StreamResponseProtoMsg): StreamResponse {
    return StreamResponse.decode(message.value);
  },
  toProto(message: StreamResponse): Uint8Array {
    return StreamResponse.encode(message).finish();
  },
  toProtoMsg(message: StreamResponse): StreamResponseProtoMsg {
    return {
      typeUrl: "/injective.stream.v1beta1.StreamResponse",
      value: StreamResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(StreamResponse.typeUrl)) {
      return;
    }
    BankBalance.registerTypeUrl();
    SubaccountDeposits.registerTypeUrl();
    SpotTrade.registerTypeUrl();
    DerivativeTrade.registerTypeUrl();
    SpotOrderUpdate.registerTypeUrl();
    DerivativeOrderUpdate.registerTypeUrl();
    OrderbookUpdate.registerTypeUrl();
    Position.registerTypeUrl();
    OraclePrice.registerTypeUrl();
  }
};
function createBaseOrderbookUpdate(): OrderbookUpdate {
  return {
    seq: BigInt(0),
    orderbook: undefined
  };
}
export const OrderbookUpdate = {
  typeUrl: "/injective.stream.v1beta1.OrderbookUpdate",
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
      typeUrl: "/injective.stream.v1beta1.OrderbookUpdate",
      value: OrderbookUpdate.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(OrderbookUpdate.typeUrl)) {
      return;
    }
    Orderbook.registerTypeUrl();
  }
};
function createBaseOrderbook(): Orderbook {
  return {
    marketId: "",
    buyLevels: [],
    sellLevels: []
  };
}
export const Orderbook = {
  typeUrl: "/injective.stream.v1beta1.Orderbook",
  is(o: any): o is Orderbook {
    return o && (o.$typeUrl === Orderbook.typeUrl || typeof o.marketId === "string" && Array.isArray(o.buyLevels) && (!o.buyLevels.length || Level.is(o.buyLevels[0])) && Array.isArray(o.sellLevels) && (!o.sellLevels.length || Level.is(o.sellLevels[0])));
  },
  isAmino(o: any): o is OrderbookAmino {
    return o && (o.$typeUrl === Orderbook.typeUrl || typeof o.market_id === "string" && Array.isArray(o.buy_levels) && (!o.buy_levels.length || Level.isAmino(o.buy_levels[0])) && Array.isArray(o.sell_levels) && (!o.sell_levels.length || Level.isAmino(o.sell_levels[0])));
  },
  encode(message: Orderbook, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
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
          message.marketId = reader.string();
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
    message.marketId = object.marketId ?? "";
    message.buyLevels = object.buyLevels?.map(e => Level.fromPartial(e)) || [];
    message.sellLevels = object.sellLevels?.map(e => Level.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: OrderbookAmino): Orderbook {
    const message = createBaseOrderbook();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    message.buyLevels = object.buy_levels?.map(e => Level.fromAmino(e)) || [];
    message.sellLevels = object.sell_levels?.map(e => Level.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Orderbook): OrderbookAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
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
      typeUrl: "/injective.stream.v1beta1.Orderbook",
      value: Orderbook.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Orderbook.typeUrl)) {
      return;
    }
    Level.registerTypeUrl();
  }
};
function createBaseBankBalance(): BankBalance {
  return {
    account: "",
    balances: []
  };
}
export const BankBalance = {
  typeUrl: "/injective.stream.v1beta1.BankBalance",
  is(o: any): o is BankBalance {
    return o && (o.$typeUrl === BankBalance.typeUrl || typeof o.account === "string" && Array.isArray(o.balances) && (!o.balances.length || Coin.is(o.balances[0])));
  },
  isAmino(o: any): o is BankBalanceAmino {
    return o && (o.$typeUrl === BankBalance.typeUrl || typeof o.account === "string" && Array.isArray(o.balances) && (!o.balances.length || Coin.isAmino(o.balances[0])));
  },
  encode(message: BankBalance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BankBalance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBankBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.balances.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BankBalance>): BankBalance {
    const message = createBaseBankBalance();
    message.account = object.account ?? "";
    message.balances = object.balances?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BankBalanceAmino): BankBalance {
    const message = createBaseBankBalance();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    message.balances = object.balances?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BankBalance): BankBalanceAmino {
    const obj: any = {};
    obj.account = message.account === "" ? undefined : message.account;
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.balances = message.balances;
    }
    return obj;
  },
  fromAminoMsg(object: BankBalanceAminoMsg): BankBalance {
    return BankBalance.fromAmino(object.value);
  },
  fromProtoMsg(message: BankBalanceProtoMsg): BankBalance {
    return BankBalance.decode(message.value);
  },
  toProto(message: BankBalance): Uint8Array {
    return BankBalance.encode(message).finish();
  },
  toProtoMsg(message: BankBalance): BankBalanceProtoMsg {
    return {
      typeUrl: "/injective.stream.v1beta1.BankBalance",
      value: BankBalance.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(BankBalance.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseSubaccountDeposits(): SubaccountDeposits {
  return {
    subaccountId: "",
    deposits: []
  };
}
export const SubaccountDeposits = {
  typeUrl: "/injective.stream.v1beta1.SubaccountDeposits",
  is(o: any): o is SubaccountDeposits {
    return o && (o.$typeUrl === SubaccountDeposits.typeUrl || typeof o.subaccountId === "string" && Array.isArray(o.deposits) && (!o.deposits.length || SubaccountDeposit.is(o.deposits[0])));
  },
  isAmino(o: any): o is SubaccountDepositsAmino {
    return o && (o.$typeUrl === SubaccountDeposits.typeUrl || typeof o.subaccount_id === "string" && Array.isArray(o.deposits) && (!o.deposits.length || SubaccountDeposit.isAmino(o.deposits[0])));
  },
  encode(message: SubaccountDeposits, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    for (const v of message.deposits) {
      SubaccountDeposit.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SubaccountDeposits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccountDeposits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.deposits.push(SubaccountDeposit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SubaccountDeposits>): SubaccountDeposits {
    const message = createBaseSubaccountDeposits();
    message.subaccountId = object.subaccountId ?? "";
    message.deposits = object.deposits?.map(e => SubaccountDeposit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SubaccountDepositsAmino): SubaccountDeposits {
    const message = createBaseSubaccountDeposits();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    message.deposits = object.deposits?.map(e => SubaccountDeposit.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SubaccountDeposits): SubaccountDepositsAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? SubaccountDeposit.toAmino(e) : undefined);
    } else {
      obj.deposits = message.deposits;
    }
    return obj;
  },
  fromAminoMsg(object: SubaccountDepositsAminoMsg): SubaccountDeposits {
    return SubaccountDeposits.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountDepositsProtoMsg): SubaccountDeposits {
    return SubaccountDeposits.decode(message.value);
  },
  toProto(message: SubaccountDeposits): Uint8Array {
    return SubaccountDeposits.encode(message).finish();
  },
  toProtoMsg(message: SubaccountDeposits): SubaccountDepositsProtoMsg {
    return {
      typeUrl: "/injective.stream.v1beta1.SubaccountDeposits",
      value: SubaccountDeposits.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(SubaccountDeposits.typeUrl)) {
      return;
    }
    SubaccountDeposit.registerTypeUrl();
  }
};
function createBaseSubaccountDeposit(): SubaccountDeposit {
  return {
    denom: "",
    deposit: Deposit.fromPartial({})
  };
}
export const SubaccountDeposit = {
  typeUrl: "/injective.stream.v1beta1.SubaccountDeposit",
  is(o: any): o is SubaccountDeposit {
    return o && (o.$typeUrl === SubaccountDeposit.typeUrl || typeof o.denom === "string" && Deposit.is(o.deposit));
  },
  isAmino(o: any): o is SubaccountDepositAmino {
    return o && (o.$typeUrl === SubaccountDeposit.typeUrl || typeof o.denom === "string" && Deposit.isAmino(o.deposit));
  },
  encode(message: SubaccountDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.deposit !== undefined) {
      Deposit.encode(message.deposit, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SubaccountDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccountDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.deposit = Deposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SubaccountDeposit>): SubaccountDeposit {
    const message = createBaseSubaccountDeposit();
    message.denom = object.denom ?? "";
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Deposit.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromAmino(object: SubaccountDepositAmino): SubaccountDeposit {
    const message = createBaseSubaccountDeposit();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Deposit.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message: SubaccountDeposit): SubaccountDepositAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.deposit = message.deposit ? Deposit.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: SubaccountDepositAminoMsg): SubaccountDeposit {
    return SubaccountDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountDepositProtoMsg): SubaccountDeposit {
    return SubaccountDeposit.decode(message.value);
  },
  toProto(message: SubaccountDeposit): Uint8Array {
    return SubaccountDeposit.encode(message).finish();
  },
  toProtoMsg(message: SubaccountDeposit): SubaccountDepositProtoMsg {
    return {
      typeUrl: "/injective.stream.v1beta1.SubaccountDeposit",
      value: SubaccountDeposit.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(SubaccountDeposit.typeUrl)) {
      return;
    }
    Deposit.registerTypeUrl();
  }
};
function createBaseSpotOrderUpdate(): SpotOrderUpdate {
  return {
    status: 0,
    orderHash: new Uint8Array(),
    cid: "",
    order: undefined
  };
}
export const SpotOrderUpdate = {
  typeUrl: "/injective.stream.v1beta1.SpotOrderUpdate",
  is(o: any): o is SpotOrderUpdate {
    return o && (o.$typeUrl === SpotOrderUpdate.typeUrl || isSet(o.status) && (o.orderHash instanceof Uint8Array || typeof o.orderHash === "string") && typeof o.cid === "string");
  },
  isAmino(o: any): o is SpotOrderUpdateAmino {
    return o && (o.$typeUrl === SpotOrderUpdate.typeUrl || isSet(o.status) && (o.order_hash instanceof Uint8Array || typeof o.order_hash === "string") && typeof o.cid === "string");
  },
  encode(message: SpotOrderUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.orderHash.length !== 0) {
      writer.uint32(18).bytes(message.orderHash);
    }
    if (message.cid !== "") {
      writer.uint32(26).string(message.cid);
    }
    if (message.order !== undefined) {
      SpotOrder.encode(message.order, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpotOrderUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotOrderUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.orderHash = reader.bytes();
          break;
        case 3:
          message.cid = reader.string();
          break;
        case 4:
          message.order = SpotOrder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SpotOrderUpdate>): SpotOrderUpdate {
    const message = createBaseSpotOrderUpdate();
    message.status = object.status ?? 0;
    message.orderHash = object.orderHash ?? new Uint8Array();
    message.cid = object.cid ?? "";
    message.order = object.order !== undefined && object.order !== null ? SpotOrder.fromPartial(object.order) : undefined;
    return message;
  },
  fromAmino(object: SpotOrderUpdateAmino): SpotOrderUpdate {
    const message = createBaseSpotOrderUpdate();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.order_hash !== undefined && object.order_hash !== null) {
      message.orderHash = bytesFromBase64(object.order_hash);
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = SpotOrder.fromAmino(object.order);
    }
    return message;
  },
  toAmino(message: SpotOrderUpdate): SpotOrderUpdateAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    obj.order_hash = message.orderHash ? base64FromBytes(message.orderHash) : undefined;
    obj.cid = message.cid === "" ? undefined : message.cid;
    obj.order = message.order ? SpotOrder.toAmino(message.order) : undefined;
    return obj;
  },
  fromAminoMsg(object: SpotOrderUpdateAminoMsg): SpotOrderUpdate {
    return SpotOrderUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: SpotOrderUpdateProtoMsg): SpotOrderUpdate {
    return SpotOrderUpdate.decode(message.value);
  },
  toProto(message: SpotOrderUpdate): Uint8Array {
    return SpotOrderUpdate.encode(message).finish();
  },
  toProtoMsg(message: SpotOrderUpdate): SpotOrderUpdateProtoMsg {
    return {
      typeUrl: "/injective.stream.v1beta1.SpotOrderUpdate",
      value: SpotOrderUpdate.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(SpotOrderUpdate.typeUrl)) {
      return;
    }
    SpotOrder.registerTypeUrl();
  }
};
function createBaseSpotOrder(): SpotOrder {
  return {
    marketId: "",
    order: SpotLimitOrder.fromPartial({})
  };
}
export const SpotOrder = {
  typeUrl: "/injective.stream.v1beta1.SpotOrder",
  is(o: any): o is SpotOrder {
    return o && (o.$typeUrl === SpotOrder.typeUrl || typeof o.marketId === "string" && SpotLimitOrder.is(o.order));
  },
  isAmino(o: any): o is SpotOrderAmino {
    return o && (o.$typeUrl === SpotOrder.typeUrl || typeof o.market_id === "string" && SpotLimitOrder.isAmino(o.order));
  },
  encode(message: SpotOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.order !== undefined) {
      SpotLimitOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpotOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotOrder();
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
  fromPartial(object: DeepPartial<SpotOrder>): SpotOrder {
    const message = createBaseSpotOrder();
    message.marketId = object.marketId ?? "";
    message.order = object.order !== undefined && object.order !== null ? SpotLimitOrder.fromPartial(object.order) : undefined;
    return message;
  },
  fromAmino(object: SpotOrderAmino): SpotOrder {
    const message = createBaseSpotOrder();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = SpotLimitOrder.fromAmino(object.order);
    }
    return message;
  },
  toAmino(message: SpotOrder): SpotOrderAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.order = message.order ? SpotLimitOrder.toAmino(message.order) : undefined;
    return obj;
  },
  fromAminoMsg(object: SpotOrderAminoMsg): SpotOrder {
    return SpotOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: SpotOrderProtoMsg): SpotOrder {
    return SpotOrder.decode(message.value);
  },
  toProto(message: SpotOrder): Uint8Array {
    return SpotOrder.encode(message).finish();
  },
  toProtoMsg(message: SpotOrder): SpotOrderProtoMsg {
    return {
      typeUrl: "/injective.stream.v1beta1.SpotOrder",
      value: SpotOrder.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(SpotOrder.typeUrl)) {
      return;
    }
    SpotLimitOrder.registerTypeUrl();
  }
};
function createBaseDerivativeOrderUpdate(): DerivativeOrderUpdate {
  return {
    status: 0,
    orderHash: new Uint8Array(),
    cid: "",
    order: undefined
  };
}
export const DerivativeOrderUpdate = {
  typeUrl: "/injective.stream.v1beta1.DerivativeOrderUpdate",
  is(o: any): o is DerivativeOrderUpdate {
    return o && (o.$typeUrl === DerivativeOrderUpdate.typeUrl || isSet(o.status) && (o.orderHash instanceof Uint8Array || typeof o.orderHash === "string") && typeof o.cid === "string");
  },
  isAmino(o: any): o is DerivativeOrderUpdateAmino {
    return o && (o.$typeUrl === DerivativeOrderUpdate.typeUrl || isSet(o.status) && (o.order_hash instanceof Uint8Array || typeof o.order_hash === "string") && typeof o.cid === "string");
  },
  encode(message: DerivativeOrderUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.orderHash.length !== 0) {
      writer.uint32(18).bytes(message.orderHash);
    }
    if (message.cid !== "") {
      writer.uint32(26).string(message.cid);
    }
    if (message.order !== undefined) {
      DerivativeOrder.encode(message.order, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DerivativeOrderUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDerivativeOrderUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.orderHash = reader.bytes();
          break;
        case 3:
          message.cid = reader.string();
          break;
        case 4:
          message.order = DerivativeOrder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DerivativeOrderUpdate>): DerivativeOrderUpdate {
    const message = createBaseDerivativeOrderUpdate();
    message.status = object.status ?? 0;
    message.orderHash = object.orderHash ?? new Uint8Array();
    message.cid = object.cid ?? "";
    message.order = object.order !== undefined && object.order !== null ? DerivativeOrder.fromPartial(object.order) : undefined;
    return message;
  },
  fromAmino(object: DerivativeOrderUpdateAmino): DerivativeOrderUpdate {
    const message = createBaseDerivativeOrderUpdate();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.order_hash !== undefined && object.order_hash !== null) {
      message.orderHash = bytesFromBase64(object.order_hash);
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = DerivativeOrder.fromAmino(object.order);
    }
    return message;
  },
  toAmino(message: DerivativeOrderUpdate): DerivativeOrderUpdateAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    obj.order_hash = message.orderHash ? base64FromBytes(message.orderHash) : undefined;
    obj.cid = message.cid === "" ? undefined : message.cid;
    obj.order = message.order ? DerivativeOrder.toAmino(message.order) : undefined;
    return obj;
  },
  fromAminoMsg(object: DerivativeOrderUpdateAminoMsg): DerivativeOrderUpdate {
    return DerivativeOrderUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: DerivativeOrderUpdateProtoMsg): DerivativeOrderUpdate {
    return DerivativeOrderUpdate.decode(message.value);
  },
  toProto(message: DerivativeOrderUpdate): Uint8Array {
    return DerivativeOrderUpdate.encode(message).finish();
  },
  toProtoMsg(message: DerivativeOrderUpdate): DerivativeOrderUpdateProtoMsg {
    return {
      typeUrl: "/injective.stream.v1beta1.DerivativeOrderUpdate",
      value: DerivativeOrderUpdate.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(DerivativeOrderUpdate.typeUrl)) {
      return;
    }
    DerivativeOrder.registerTypeUrl();
  }
};
function createBaseDerivativeOrder(): DerivativeOrder {
  return {
    marketId: "",
    order: DerivativeLimitOrder.fromPartial({}),
    isMarket: false
  };
}
export const DerivativeOrder = {
  typeUrl: "/injective.stream.v1beta1.DerivativeOrder",
  is(o: any): o is DerivativeOrder {
    return o && (o.$typeUrl === DerivativeOrder.typeUrl || typeof o.marketId === "string" && DerivativeLimitOrder.is(o.order) && typeof o.isMarket === "boolean");
  },
  isAmino(o: any): o is DerivativeOrderAmino {
    return o && (o.$typeUrl === DerivativeOrder.typeUrl || typeof o.market_id === "string" && DerivativeLimitOrder.isAmino(o.order) && typeof o.is_market === "boolean");
  },
  encode(message: DerivativeOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.order !== undefined) {
      DerivativeLimitOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }
    if (message.isMarket === true) {
      writer.uint32(24).bool(message.isMarket);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DerivativeOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDerivativeOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.order = DerivativeLimitOrder.decode(reader, reader.uint32());
          break;
        case 3:
          message.isMarket = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DerivativeOrder>): DerivativeOrder {
    const message = createBaseDerivativeOrder();
    message.marketId = object.marketId ?? "";
    message.order = object.order !== undefined && object.order !== null ? DerivativeLimitOrder.fromPartial(object.order) : undefined;
    message.isMarket = object.isMarket ?? false;
    return message;
  },
  fromAmino(object: DerivativeOrderAmino): DerivativeOrder {
    const message = createBaseDerivativeOrder();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = DerivativeLimitOrder.fromAmino(object.order);
    }
    if (object.is_market !== undefined && object.is_market !== null) {
      message.isMarket = object.is_market;
    }
    return message;
  },
  toAmino(message: DerivativeOrder): DerivativeOrderAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.order = message.order ? DerivativeLimitOrder.toAmino(message.order) : undefined;
    obj.is_market = message.isMarket === false ? undefined : message.isMarket;
    return obj;
  },
  fromAminoMsg(object: DerivativeOrderAminoMsg): DerivativeOrder {
    return DerivativeOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: DerivativeOrderProtoMsg): DerivativeOrder {
    return DerivativeOrder.decode(message.value);
  },
  toProto(message: DerivativeOrder): Uint8Array {
    return DerivativeOrder.encode(message).finish();
  },
  toProtoMsg(message: DerivativeOrder): DerivativeOrderProtoMsg {
    return {
      typeUrl: "/injective.stream.v1beta1.DerivativeOrder",
      value: DerivativeOrder.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(DerivativeOrder.typeUrl)) {
      return;
    }
    DerivativeLimitOrder.registerTypeUrl();
  }
};
function createBasePosition(): Position {
  return {
    marketId: "",
    subaccountId: "",
    isLong: false,
    quantity: "",
    entryPrice: "",
    margin: "",
    cumulativeFundingEntry: ""
  };
}
export const Position = {
  typeUrl: "/injective.stream.v1beta1.Position",
  is(o: any): o is Position {
    return o && (o.$typeUrl === Position.typeUrl || typeof o.marketId === "string" && typeof o.subaccountId === "string" && typeof o.isLong === "boolean" && typeof o.quantity === "string" && typeof o.entryPrice === "string" && typeof o.margin === "string" && typeof o.cumulativeFundingEntry === "string");
  },
  isAmino(o: any): o is PositionAmino {
    return o && (o.$typeUrl === Position.typeUrl || typeof o.market_id === "string" && typeof o.subaccount_id === "string" && typeof o.isLong === "boolean" && typeof o.quantity === "string" && typeof o.entry_price === "string" && typeof o.margin === "string" && typeof o.cumulative_funding_entry === "string");
  },
  encode(message: Position, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    if (message.isLong === true) {
      writer.uint32(24).bool(message.isLong);
    }
    if (message.quantity !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.quantity, 18).atomics);
    }
    if (message.entryPrice !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.entryPrice, 18).atomics);
    }
    if (message.margin !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.margin, 18).atomics);
    }
    if (message.cumulativeFundingEntry !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.cumulativeFundingEntry, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Position {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePosition();
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
          message.isLong = reader.bool();
          break;
        case 4:
          message.quantity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.entryPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.margin = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.cumulativeFundingEntry = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Position>): Position {
    const message = createBasePosition();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.isLong = object.isLong ?? false;
    message.quantity = object.quantity ?? "";
    message.entryPrice = object.entryPrice ?? "";
    message.margin = object.margin ?? "";
    message.cumulativeFundingEntry = object.cumulativeFundingEntry ?? "";
    return message;
  },
  fromAmino(object: PositionAmino): Position {
    const message = createBasePosition();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    if (object.isLong !== undefined && object.isLong !== null) {
      message.isLong = object.isLong;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    }
    if (object.entry_price !== undefined && object.entry_price !== null) {
      message.entryPrice = object.entry_price;
    }
    if (object.margin !== undefined && object.margin !== null) {
      message.margin = object.margin;
    }
    if (object.cumulative_funding_entry !== undefined && object.cumulative_funding_entry !== null) {
      message.cumulativeFundingEntry = object.cumulative_funding_entry;
    }
    return message;
  },
  toAmino(message: Position): PositionAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.isLong = message.isLong === false ? undefined : message.isLong;
    obj.quantity = message.quantity === "" ? undefined : Decimal.fromUserInput(message.quantity, 18).atomics;
    obj.entry_price = message.entryPrice === "" ? undefined : Decimal.fromUserInput(message.entryPrice, 18).atomics;
    obj.margin = message.margin === "" ? undefined : Decimal.fromUserInput(message.margin, 18).atomics;
    obj.cumulative_funding_entry = message.cumulativeFundingEntry === "" ? undefined : Decimal.fromUserInput(message.cumulativeFundingEntry, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: PositionAminoMsg): Position {
    return Position.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionProtoMsg): Position {
    return Position.decode(message.value);
  },
  toProto(message: Position): Uint8Array {
    return Position.encode(message).finish();
  },
  toProtoMsg(message: Position): PositionProtoMsg {
    return {
      typeUrl: "/injective.stream.v1beta1.Position",
      value: Position.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseOraclePrice(): OraclePrice {
  return {
    symbol: "",
    price: "",
    type: ""
  };
}
export const OraclePrice = {
  typeUrl: "/injective.stream.v1beta1.OraclePrice",
  is(o: any): o is OraclePrice {
    return o && (o.$typeUrl === OraclePrice.typeUrl || typeof o.symbol === "string" && typeof o.price === "string" && typeof o.type === "string");
  },
  isAmino(o: any): o is OraclePriceAmino {
    return o && (o.$typeUrl === OraclePrice.typeUrl || typeof o.symbol === "string" && typeof o.price === "string" && typeof o.type === "string");
  },
  encode(message: OraclePrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.price !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OraclePrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOraclePrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;
        case 2:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OraclePrice>): OraclePrice {
    const message = createBaseOraclePrice();
    message.symbol = object.symbol ?? "";
    message.price = object.price ?? "";
    message.type = object.type ?? "";
    return message;
  },
  fromAmino(object: OraclePriceAmino): OraclePrice {
    const message = createBaseOraclePrice();
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    return message;
  },
  toAmino(message: OraclePrice): OraclePriceAmino {
    const obj: any = {};
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.price = message.price === "" ? undefined : Decimal.fromUserInput(message.price, 18).atomics;
    obj.type = message.type === "" ? undefined : message.type;
    return obj;
  },
  fromAminoMsg(object: OraclePriceAminoMsg): OraclePrice {
    return OraclePrice.fromAmino(object.value);
  },
  fromProtoMsg(message: OraclePriceProtoMsg): OraclePrice {
    return OraclePrice.decode(message.value);
  },
  toProto(message: OraclePrice): Uint8Array {
    return OraclePrice.encode(message).finish();
  },
  toProtoMsg(message: OraclePrice): OraclePriceProtoMsg {
    return {
      typeUrl: "/injective.stream.v1beta1.OraclePrice",
      value: OraclePrice.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseSpotTrade(): SpotTrade {
  return {
    marketId: "",
    isBuy: false,
    executionType: "",
    quantity: "",
    price: "",
    subaccountId: "",
    fee: "",
    orderHash: new Uint8Array(),
    feeRecipientAddress: undefined,
    cid: "",
    tradeId: ""
  };
}
export const SpotTrade = {
  typeUrl: "/injective.stream.v1beta1.SpotTrade",
  is(o: any): o is SpotTrade {
    return o && (o.$typeUrl === SpotTrade.typeUrl || typeof o.marketId === "string" && typeof o.isBuy === "boolean" && typeof o.executionType === "string" && typeof o.quantity === "string" && typeof o.price === "string" && typeof o.subaccountId === "string" && typeof o.fee === "string" && (o.orderHash instanceof Uint8Array || typeof o.orderHash === "string") && typeof o.cid === "string" && typeof o.tradeId === "string");
  },
  isAmino(o: any): o is SpotTradeAmino {
    return o && (o.$typeUrl === SpotTrade.typeUrl || typeof o.market_id === "string" && typeof o.is_buy === "boolean" && typeof o.executionType === "string" && typeof o.quantity === "string" && typeof o.price === "string" && typeof o.subaccount_id === "string" && typeof o.fee === "string" && (o.order_hash instanceof Uint8Array || typeof o.order_hash === "string") && typeof o.cid === "string" && typeof o.trade_id === "string");
  },
  encode(message: SpotTrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.isBuy === true) {
      writer.uint32(16).bool(message.isBuy);
    }
    if (message.executionType !== "") {
      writer.uint32(26).string(message.executionType);
    }
    if (message.quantity !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.quantity, 18).atomics);
    }
    if (message.price !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.subaccountId !== "") {
      writer.uint32(50).string(message.subaccountId);
    }
    if (message.fee !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.fee, 18).atomics);
    }
    if (message.orderHash.length !== 0) {
      writer.uint32(66).bytes(message.orderHash);
    }
    if (message.feeRecipientAddress !== undefined) {
      writer.uint32(74).string(message.feeRecipientAddress);
    }
    if (message.cid !== "") {
      writer.uint32(82).string(message.cid);
    }
    if (message.tradeId !== "") {
      writer.uint32(90).string(message.tradeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpotTrade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotTrade();
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
          message.executionType = reader.string();
          break;
        case 4:
          message.quantity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.subaccountId = reader.string();
          break;
        case 7:
          message.fee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.orderHash = reader.bytes();
          break;
        case 9:
          message.feeRecipientAddress = reader.string();
          break;
        case 10:
          message.cid = reader.string();
          break;
        case 11:
          message.tradeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SpotTrade>): SpotTrade {
    const message = createBaseSpotTrade();
    message.marketId = object.marketId ?? "";
    message.isBuy = object.isBuy ?? false;
    message.executionType = object.executionType ?? "";
    message.quantity = object.quantity ?? "";
    message.price = object.price ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.fee = object.fee ?? "";
    message.orderHash = object.orderHash ?? new Uint8Array();
    message.feeRecipientAddress = object.feeRecipientAddress ?? undefined;
    message.cid = object.cid ?? "";
    message.tradeId = object.tradeId ?? "";
    return message;
  },
  fromAmino(object: SpotTradeAmino): SpotTrade {
    const message = createBaseSpotTrade();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.is_buy !== undefined && object.is_buy !== null) {
      message.isBuy = object.is_buy;
    }
    if (object.executionType !== undefined && object.executionType !== null) {
      message.executionType = object.executionType;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee;
    }
    if (object.order_hash !== undefined && object.order_hash !== null) {
      message.orderHash = bytesFromBase64(object.order_hash);
    }
    if (object.fee_recipient_address !== undefined && object.fee_recipient_address !== null) {
      message.feeRecipientAddress = object.fee_recipient_address;
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    }
    if (object.trade_id !== undefined && object.trade_id !== null) {
      message.tradeId = object.trade_id;
    }
    return message;
  },
  toAmino(message: SpotTrade): SpotTradeAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.is_buy = message.isBuy === false ? undefined : message.isBuy;
    obj.executionType = message.executionType === "" ? undefined : message.executionType;
    obj.quantity = message.quantity === "" ? undefined : Decimal.fromUserInput(message.quantity, 18).atomics;
    obj.price = message.price === "" ? undefined : Decimal.fromUserInput(message.price, 18).atomics;
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.fee = message.fee === "" ? undefined : Decimal.fromUserInput(message.fee, 18).atomics;
    obj.order_hash = message.orderHash ? base64FromBytes(message.orderHash) : undefined;
    obj.fee_recipient_address = message.feeRecipientAddress === null ? undefined : message.feeRecipientAddress;
    obj.cid = message.cid === "" ? undefined : message.cid;
    obj.trade_id = message.tradeId === "" ? undefined : message.tradeId;
    return obj;
  },
  fromAminoMsg(object: SpotTradeAminoMsg): SpotTrade {
    return SpotTrade.fromAmino(object.value);
  },
  fromProtoMsg(message: SpotTradeProtoMsg): SpotTrade {
    return SpotTrade.decode(message.value);
  },
  toProto(message: SpotTrade): Uint8Array {
    return SpotTrade.encode(message).finish();
  },
  toProtoMsg(message: SpotTrade): SpotTradeProtoMsg {
    return {
      typeUrl: "/injective.stream.v1beta1.SpotTrade",
      value: SpotTrade.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDerivativeTrade(): DerivativeTrade {
  return {
    marketId: "",
    isBuy: false,
    executionType: "",
    subaccountId: "",
    positionDelta: undefined,
    payout: "",
    fee: "",
    orderHash: "",
    feeRecipientAddress: undefined,
    cid: "",
    tradeId: ""
  };
}
export const DerivativeTrade = {
  typeUrl: "/injective.stream.v1beta1.DerivativeTrade",
  is(o: any): o is DerivativeTrade {
    return o && (o.$typeUrl === DerivativeTrade.typeUrl || typeof o.marketId === "string" && typeof o.isBuy === "boolean" && typeof o.executionType === "string" && typeof o.subaccountId === "string" && typeof o.payout === "string" && typeof o.fee === "string" && typeof o.orderHash === "string" && typeof o.cid === "string" && typeof o.tradeId === "string");
  },
  isAmino(o: any): o is DerivativeTradeAmino {
    return o && (o.$typeUrl === DerivativeTrade.typeUrl || typeof o.market_id === "string" && typeof o.is_buy === "boolean" && typeof o.executionType === "string" && typeof o.subaccount_id === "string" && typeof o.payout === "string" && typeof o.fee === "string" && typeof o.order_hash === "string" && typeof o.cid === "string" && typeof o.trade_id === "string");
  },
  encode(message: DerivativeTrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.isBuy === true) {
      writer.uint32(16).bool(message.isBuy);
    }
    if (message.executionType !== "") {
      writer.uint32(26).string(message.executionType);
    }
    if (message.subaccountId !== "") {
      writer.uint32(34).string(message.subaccountId);
    }
    if (message.positionDelta !== undefined) {
      PositionDelta.encode(message.positionDelta, writer.uint32(42).fork()).ldelim();
    }
    if (message.payout !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.payout, 18).atomics);
    }
    if (message.fee !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.fee, 18).atomics);
    }
    if (message.orderHash !== "") {
      writer.uint32(66).string(message.orderHash);
    }
    if (message.feeRecipientAddress !== undefined) {
      writer.uint32(74).string(message.feeRecipientAddress);
    }
    if (message.cid !== "") {
      writer.uint32(82).string(message.cid);
    }
    if (message.tradeId !== "") {
      writer.uint32(90).string(message.tradeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DerivativeTrade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDerivativeTrade();
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
          message.executionType = reader.string();
          break;
        case 4:
          message.subaccountId = reader.string();
          break;
        case 5:
          message.positionDelta = PositionDelta.decode(reader, reader.uint32());
          break;
        case 6:
          message.payout = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.fee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.orderHash = reader.string();
          break;
        case 9:
          message.feeRecipientAddress = reader.string();
          break;
        case 10:
          message.cid = reader.string();
          break;
        case 11:
          message.tradeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DerivativeTrade>): DerivativeTrade {
    const message = createBaseDerivativeTrade();
    message.marketId = object.marketId ?? "";
    message.isBuy = object.isBuy ?? false;
    message.executionType = object.executionType ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.positionDelta = object.positionDelta !== undefined && object.positionDelta !== null ? PositionDelta.fromPartial(object.positionDelta) : undefined;
    message.payout = object.payout ?? "";
    message.fee = object.fee ?? "";
    message.orderHash = object.orderHash ?? "";
    message.feeRecipientAddress = object.feeRecipientAddress ?? undefined;
    message.cid = object.cid ?? "";
    message.tradeId = object.tradeId ?? "";
    return message;
  },
  fromAmino(object: DerivativeTradeAmino): DerivativeTrade {
    const message = createBaseDerivativeTrade();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.is_buy !== undefined && object.is_buy !== null) {
      message.isBuy = object.is_buy;
    }
    if (object.executionType !== undefined && object.executionType !== null) {
      message.executionType = object.executionType;
    }
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    if (object.position_delta !== undefined && object.position_delta !== null) {
      message.positionDelta = PositionDelta.fromAmino(object.position_delta);
    }
    if (object.payout !== undefined && object.payout !== null) {
      message.payout = object.payout;
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee;
    }
    if (object.order_hash !== undefined && object.order_hash !== null) {
      message.orderHash = object.order_hash;
    }
    if (object.fee_recipient_address !== undefined && object.fee_recipient_address !== null) {
      message.feeRecipientAddress = object.fee_recipient_address;
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    }
    if (object.trade_id !== undefined && object.trade_id !== null) {
      message.tradeId = object.trade_id;
    }
    return message;
  },
  toAmino(message: DerivativeTrade): DerivativeTradeAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.is_buy = message.isBuy === false ? undefined : message.isBuy;
    obj.executionType = message.executionType === "" ? undefined : message.executionType;
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.position_delta = message.positionDelta ? PositionDelta.toAmino(message.positionDelta) : undefined;
    obj.payout = message.payout === "" ? undefined : Decimal.fromUserInput(message.payout, 18).atomics;
    obj.fee = message.fee === "" ? undefined : Decimal.fromUserInput(message.fee, 18).atomics;
    obj.order_hash = message.orderHash === "" ? undefined : message.orderHash;
    obj.fee_recipient_address = message.feeRecipientAddress === null ? undefined : message.feeRecipientAddress;
    obj.cid = message.cid === "" ? undefined : message.cid;
    obj.trade_id = message.tradeId === "" ? undefined : message.tradeId;
    return obj;
  },
  fromAminoMsg(object: DerivativeTradeAminoMsg): DerivativeTrade {
    return DerivativeTrade.fromAmino(object.value);
  },
  fromProtoMsg(message: DerivativeTradeProtoMsg): DerivativeTrade {
    return DerivativeTrade.decode(message.value);
  },
  toProto(message: DerivativeTrade): Uint8Array {
    return DerivativeTrade.encode(message).finish();
  },
  toProtoMsg(message: DerivativeTrade): DerivativeTradeProtoMsg {
    return {
      typeUrl: "/injective.stream.v1beta1.DerivativeTrade",
      value: DerivativeTrade.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(DerivativeTrade.typeUrl)) {
      return;
    }
    PositionDelta.registerTypeUrl();
  }
};
function createBaseTradesFilter(): TradesFilter {
  return {
    subaccountIds: [],
    marketIds: []
  };
}
export const TradesFilter = {
  typeUrl: "/injective.stream.v1beta1.TradesFilter",
  is(o: any): o is TradesFilter {
    return o && (o.$typeUrl === TradesFilter.typeUrl || Array.isArray(o.subaccountIds) && (!o.subaccountIds.length || typeof o.subaccountIds[0] === "string") && Array.isArray(o.marketIds) && (!o.marketIds.length || typeof o.marketIds[0] === "string"));
  },
  isAmino(o: any): o is TradesFilterAmino {
    return o && (o.$typeUrl === TradesFilter.typeUrl || Array.isArray(o.subaccount_ids) && (!o.subaccount_ids.length || typeof o.subaccount_ids[0] === "string") && Array.isArray(o.market_ids) && (!o.market_ids.length || typeof o.market_ids[0] === "string"));
  },
  encode(message: TradesFilter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subaccountIds) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradesFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradesFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountIds.push(reader.string());
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
  fromPartial(object: DeepPartial<TradesFilter>): TradesFilter {
    const message = createBaseTradesFilter();
    message.subaccountIds = object.subaccountIds?.map(e => e) || [];
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: TradesFilterAmino): TradesFilter {
    const message = createBaseTradesFilter();
    message.subaccountIds = object.subaccount_ids?.map(e => e) || [];
    message.marketIds = object.market_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: TradesFilter): TradesFilterAmino {
    const obj: any = {};
    if (message.subaccountIds) {
      obj.subaccount_ids = message.subaccountIds.map(e => e);
    } else {
      obj.subaccount_ids = message.subaccountIds;
    }
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = message.marketIds;
    }
    return obj;
  },
  fromAminoMsg(object: TradesFilterAminoMsg): TradesFilter {
    return TradesFilter.fromAmino(object.value);
  },
  fromProtoMsg(message: TradesFilterProtoMsg): TradesFilter {
    return TradesFilter.decode(message.value);
  },
  toProto(message: TradesFilter): Uint8Array {
    return TradesFilter.encode(message).finish();
  },
  toProtoMsg(message: TradesFilter): TradesFilterProtoMsg {
    return {
      typeUrl: "/injective.stream.v1beta1.TradesFilter",
      value: TradesFilter.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBasePositionsFilter(): PositionsFilter {
  return {
    subaccountIds: [],
    marketIds: []
  };
}
export const PositionsFilter = {
  typeUrl: "/injective.stream.v1beta1.PositionsFilter",
  is(o: any): o is PositionsFilter {
    return o && (o.$typeUrl === PositionsFilter.typeUrl || Array.isArray(o.subaccountIds) && (!o.subaccountIds.length || typeof o.subaccountIds[0] === "string") && Array.isArray(o.marketIds) && (!o.marketIds.length || typeof o.marketIds[0] === "string"));
  },
  isAmino(o: any): o is PositionsFilterAmino {
    return o && (o.$typeUrl === PositionsFilter.typeUrl || Array.isArray(o.subaccount_ids) && (!o.subaccount_ids.length || typeof o.subaccount_ids[0] === "string") && Array.isArray(o.market_ids) && (!o.market_ids.length || typeof o.market_ids[0] === "string"));
  },
  encode(message: PositionsFilter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subaccountIds) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionsFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountIds.push(reader.string());
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
  fromPartial(object: DeepPartial<PositionsFilter>): PositionsFilter {
    const message = createBasePositionsFilter();
    message.subaccountIds = object.subaccountIds?.map(e => e) || [];
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: PositionsFilterAmino): PositionsFilter {
    const message = createBasePositionsFilter();
    message.subaccountIds = object.subaccount_ids?.map(e => e) || [];
    message.marketIds = object.market_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: PositionsFilter): PositionsFilterAmino {
    const obj: any = {};
    if (message.subaccountIds) {
      obj.subaccount_ids = message.subaccountIds.map(e => e);
    } else {
      obj.subaccount_ids = message.subaccountIds;
    }
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = message.marketIds;
    }
    return obj;
  },
  fromAminoMsg(object: PositionsFilterAminoMsg): PositionsFilter {
    return PositionsFilter.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsFilterProtoMsg): PositionsFilter {
    return PositionsFilter.decode(message.value);
  },
  toProto(message: PositionsFilter): Uint8Array {
    return PositionsFilter.encode(message).finish();
  },
  toProtoMsg(message: PositionsFilter): PositionsFilterProtoMsg {
    return {
      typeUrl: "/injective.stream.v1beta1.PositionsFilter",
      value: PositionsFilter.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseOrdersFilter(): OrdersFilter {
  return {
    subaccountIds: [],
    marketIds: []
  };
}
export const OrdersFilter = {
  typeUrl: "/injective.stream.v1beta1.OrdersFilter",
  is(o: any): o is OrdersFilter {
    return o && (o.$typeUrl === OrdersFilter.typeUrl || Array.isArray(o.subaccountIds) && (!o.subaccountIds.length || typeof o.subaccountIds[0] === "string") && Array.isArray(o.marketIds) && (!o.marketIds.length || typeof o.marketIds[0] === "string"));
  },
  isAmino(o: any): o is OrdersFilterAmino {
    return o && (o.$typeUrl === OrdersFilter.typeUrl || Array.isArray(o.subaccount_ids) && (!o.subaccount_ids.length || typeof o.subaccount_ids[0] === "string") && Array.isArray(o.market_ids) && (!o.market_ids.length || typeof o.market_ids[0] === "string"));
  },
  encode(message: OrdersFilter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subaccountIds) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OrdersFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrdersFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountIds.push(reader.string());
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
  fromPartial(object: DeepPartial<OrdersFilter>): OrdersFilter {
    const message = createBaseOrdersFilter();
    message.subaccountIds = object.subaccountIds?.map(e => e) || [];
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: OrdersFilterAmino): OrdersFilter {
    const message = createBaseOrdersFilter();
    message.subaccountIds = object.subaccount_ids?.map(e => e) || [];
    message.marketIds = object.market_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: OrdersFilter): OrdersFilterAmino {
    const obj: any = {};
    if (message.subaccountIds) {
      obj.subaccount_ids = message.subaccountIds.map(e => e);
    } else {
      obj.subaccount_ids = message.subaccountIds;
    }
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = message.marketIds;
    }
    return obj;
  },
  fromAminoMsg(object: OrdersFilterAminoMsg): OrdersFilter {
    return OrdersFilter.fromAmino(object.value);
  },
  fromProtoMsg(message: OrdersFilterProtoMsg): OrdersFilter {
    return OrdersFilter.decode(message.value);
  },
  toProto(message: OrdersFilter): Uint8Array {
    return OrdersFilter.encode(message).finish();
  },
  toProtoMsg(message: OrdersFilter): OrdersFilterProtoMsg {
    return {
      typeUrl: "/injective.stream.v1beta1.OrdersFilter",
      value: OrdersFilter.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseOrderbookFilter(): OrderbookFilter {
  return {
    marketIds: []
  };
}
export const OrderbookFilter = {
  typeUrl: "/injective.stream.v1beta1.OrderbookFilter",
  is(o: any): o is OrderbookFilter {
    return o && (o.$typeUrl === OrderbookFilter.typeUrl || Array.isArray(o.marketIds) && (!o.marketIds.length || typeof o.marketIds[0] === "string"));
  },
  isAmino(o: any): o is OrderbookFilterAmino {
    return o && (o.$typeUrl === OrderbookFilter.typeUrl || Array.isArray(o.market_ids) && (!o.market_ids.length || typeof o.market_ids[0] === "string"));
  },
  encode(message: OrderbookFilter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.marketIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OrderbookFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderbookFilter();
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
  fromPartial(object: DeepPartial<OrderbookFilter>): OrderbookFilter {
    const message = createBaseOrderbookFilter();
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: OrderbookFilterAmino): OrderbookFilter {
    const message = createBaseOrderbookFilter();
    message.marketIds = object.market_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: OrderbookFilter): OrderbookFilterAmino {
    const obj: any = {};
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = message.marketIds;
    }
    return obj;
  },
  fromAminoMsg(object: OrderbookFilterAminoMsg): OrderbookFilter {
    return OrderbookFilter.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderbookFilterProtoMsg): OrderbookFilter {
    return OrderbookFilter.decode(message.value);
  },
  toProto(message: OrderbookFilter): Uint8Array {
    return OrderbookFilter.encode(message).finish();
  },
  toProtoMsg(message: OrderbookFilter): OrderbookFilterProtoMsg {
    return {
      typeUrl: "/injective.stream.v1beta1.OrderbookFilter",
      value: OrderbookFilter.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseBankBalancesFilter(): BankBalancesFilter {
  return {
    accounts: []
  };
}
export const BankBalancesFilter = {
  typeUrl: "/injective.stream.v1beta1.BankBalancesFilter",
  is(o: any): o is BankBalancesFilter {
    return o && (o.$typeUrl === BankBalancesFilter.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || typeof o.accounts[0] === "string"));
  },
  isAmino(o: any): o is BankBalancesFilterAmino {
    return o && (o.$typeUrl === BankBalancesFilter.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || typeof o.accounts[0] === "string"));
  },
  encode(message: BankBalancesFilter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BankBalancesFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBankBalancesFilter();
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
  fromPartial(object: DeepPartial<BankBalancesFilter>): BankBalancesFilter {
    const message = createBaseBankBalancesFilter();
    message.accounts = object.accounts?.map(e => e) || [];
    return message;
  },
  fromAmino(object: BankBalancesFilterAmino): BankBalancesFilter {
    const message = createBaseBankBalancesFilter();
    message.accounts = object.accounts?.map(e => e) || [];
    return message;
  },
  toAmino(message: BankBalancesFilter): BankBalancesFilterAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e);
    } else {
      obj.accounts = message.accounts;
    }
    return obj;
  },
  fromAminoMsg(object: BankBalancesFilterAminoMsg): BankBalancesFilter {
    return BankBalancesFilter.fromAmino(object.value);
  },
  fromProtoMsg(message: BankBalancesFilterProtoMsg): BankBalancesFilter {
    return BankBalancesFilter.decode(message.value);
  },
  toProto(message: BankBalancesFilter): Uint8Array {
    return BankBalancesFilter.encode(message).finish();
  },
  toProtoMsg(message: BankBalancesFilter): BankBalancesFilterProtoMsg {
    return {
      typeUrl: "/injective.stream.v1beta1.BankBalancesFilter",
      value: BankBalancesFilter.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseSubaccountDepositsFilter(): SubaccountDepositsFilter {
  return {
    subaccountIds: []
  };
}
export const SubaccountDepositsFilter = {
  typeUrl: "/injective.stream.v1beta1.SubaccountDepositsFilter",
  is(o: any): o is SubaccountDepositsFilter {
    return o && (o.$typeUrl === SubaccountDepositsFilter.typeUrl || Array.isArray(o.subaccountIds) && (!o.subaccountIds.length || typeof o.subaccountIds[0] === "string"));
  },
  isAmino(o: any): o is SubaccountDepositsFilterAmino {
    return o && (o.$typeUrl === SubaccountDepositsFilter.typeUrl || Array.isArray(o.subaccount_ids) && (!o.subaccount_ids.length || typeof o.subaccount_ids[0] === "string"));
  },
  encode(message: SubaccountDepositsFilter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subaccountIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SubaccountDepositsFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccountDepositsFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SubaccountDepositsFilter>): SubaccountDepositsFilter {
    const message = createBaseSubaccountDepositsFilter();
    message.subaccountIds = object.subaccountIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: SubaccountDepositsFilterAmino): SubaccountDepositsFilter {
    const message = createBaseSubaccountDepositsFilter();
    message.subaccountIds = object.subaccount_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: SubaccountDepositsFilter): SubaccountDepositsFilterAmino {
    const obj: any = {};
    if (message.subaccountIds) {
      obj.subaccount_ids = message.subaccountIds.map(e => e);
    } else {
      obj.subaccount_ids = message.subaccountIds;
    }
    return obj;
  },
  fromAminoMsg(object: SubaccountDepositsFilterAminoMsg): SubaccountDepositsFilter {
    return SubaccountDepositsFilter.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountDepositsFilterProtoMsg): SubaccountDepositsFilter {
    return SubaccountDepositsFilter.decode(message.value);
  },
  toProto(message: SubaccountDepositsFilter): Uint8Array {
    return SubaccountDepositsFilter.encode(message).finish();
  },
  toProtoMsg(message: SubaccountDepositsFilter): SubaccountDepositsFilterProtoMsg {
    return {
      typeUrl: "/injective.stream.v1beta1.SubaccountDepositsFilter",
      value: SubaccountDepositsFilter.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseOraclePriceFilter(): OraclePriceFilter {
  return {
    symbol: []
  };
}
export const OraclePriceFilter = {
  typeUrl: "/injective.stream.v1beta1.OraclePriceFilter",
  is(o: any): o is OraclePriceFilter {
    return o && (o.$typeUrl === OraclePriceFilter.typeUrl || Array.isArray(o.symbol) && (!o.symbol.length || typeof o.symbol[0] === "string"));
  },
  isAmino(o: any): o is OraclePriceFilterAmino {
    return o && (o.$typeUrl === OraclePriceFilter.typeUrl || Array.isArray(o.symbol) && (!o.symbol.length || typeof o.symbol[0] === "string"));
  },
  encode(message: OraclePriceFilter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.symbol) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OraclePriceFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOraclePriceFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbol.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OraclePriceFilter>): OraclePriceFilter {
    const message = createBaseOraclePriceFilter();
    message.symbol = object.symbol?.map(e => e) || [];
    return message;
  },
  fromAmino(object: OraclePriceFilterAmino): OraclePriceFilter {
    const message = createBaseOraclePriceFilter();
    message.symbol = object.symbol?.map(e => e) || [];
    return message;
  },
  toAmino(message: OraclePriceFilter): OraclePriceFilterAmino {
    const obj: any = {};
    if (message.symbol) {
      obj.symbol = message.symbol.map(e => e);
    } else {
      obj.symbol = message.symbol;
    }
    return obj;
  },
  fromAminoMsg(object: OraclePriceFilterAminoMsg): OraclePriceFilter {
    return OraclePriceFilter.fromAmino(object.value);
  },
  fromProtoMsg(message: OraclePriceFilterProtoMsg): OraclePriceFilter {
    return OraclePriceFilter.decode(message.value);
  },
  toProto(message: OraclePriceFilter): Uint8Array {
    return OraclePriceFilter.encode(message).finish();
  },
  toProtoMsg(message: OraclePriceFilter): OraclePriceFilterProtoMsg {
    return {
      typeUrl: "/injective.stream.v1beta1.OraclePriceFilter",
      value: OraclePriceFilter.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};