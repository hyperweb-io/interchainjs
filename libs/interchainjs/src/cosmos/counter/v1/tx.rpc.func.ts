import { buildTx } from "../../../helper-func-types";
import { MsgIncreaseCounter } from "./tx";
/**
 * IncreaseCount increments the counter by the specified amount.
 * @name increaseCount
 * @package cosmos.counter.v1
 * @see proto service: cosmos.counter.v1.IncreaseCount
 */
export const increaseCount = buildTx<MsgIncreaseCounter>({
  msg: MsgIncreaseCounter
});