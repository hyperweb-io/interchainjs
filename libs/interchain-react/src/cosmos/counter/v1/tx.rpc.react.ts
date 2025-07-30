import { buildUseMutation } from "../../../react-query";
import { MsgIncreaseCounter } from "./tx";
import { increaseCount } from "./tx.rpc.func";
/**
 * IncreaseCount increments the counter by the specified amount.
 * @name useIncreaseCount
 * @package cosmos.counter.v1
 * @see proto service: cosmos.counter.v1.IncreaseCount
 */
export const useIncreaseCount = buildUseMutation<MsgIncreaseCounter, Error>({
  builderMutationFn: increaseCount
});