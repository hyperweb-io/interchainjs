import { buildTx } from "../../../helper-func-types";
import { MsgFundCommunityPool, MsgCommunityPoolSpend, MsgCreateContinuousFund, MsgCancelContinuousFund, MsgUpdateParams } from "./tx";
/**
 * FundCommunityPool defines a method to allow an account to directly
 * fund the community pool.
 * @name fundCommunityPool
 * @package cosmos.protocolpool.v1
 * @see proto service: cosmos.protocolpool.v1.FundCommunityPool
 */
export const fundCommunityPool = buildTx<MsgFundCommunityPool>({
  msg: MsgFundCommunityPool
});
/**
 * CommunityPoolSpend defines a governance operation for sending tokens from
 * the community pool in the x/protocolpool module to another account, which
 * could be the governance module itself. The authority is defined in the
 * keeper.
 * @name communityPoolSpend
 * @package cosmos.protocolpool.v1
 * @see proto service: cosmos.protocolpool.v1.CommunityPoolSpend
 */
export const communityPoolSpend = buildTx<MsgCommunityPoolSpend>({
  msg: MsgCommunityPoolSpend
});
/**
 * CreateContinuousFund defines a method to distribute a percentage of funds to an address continuously.
 * This ContinuousFund can be indefinite or run until a given expiry time.
 * Funds come from validator block rewards from x/distribution, but may also come from
 * any user who funds the ProtocolPoolEscrow module account directly through x/bank.
 * @name createContinuousFund
 * @package cosmos.protocolpool.v1
 * @see proto service: cosmos.protocolpool.v1.CreateContinuousFund
 */
export const createContinuousFund = buildTx<MsgCreateContinuousFund>({
  msg: MsgCreateContinuousFund
});
/**
 * CancelContinuousFund defines a method for cancelling continuous fund.
 * @name cancelContinuousFund
 * @package cosmos.protocolpool.v1
 * @see proto service: cosmos.protocolpool.v1.CancelContinuousFund
 */
export const cancelContinuousFund = buildTx<MsgCancelContinuousFund>({
  msg: MsgCancelContinuousFund
});
/**
 * UpdateParams defines a governance operation for updating the x/protocolpool module parameters.
 * The authority is defined in the keeper.
 * @name updateParams
 * @package cosmos.protocolpool.v1
 * @see proto service: cosmos.protocolpool.v1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});