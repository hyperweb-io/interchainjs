import { buildUseMutation } from "../../../react-query";
import { MsgLoadTest } from "./tx";
import { loadTest } from "./tx.rpc.func";
/**
 * LoadTest defines a method for executing a sequence of load test operations.
 * @name useLoadTest
 * @package cosmos.benchmark.v1
 * @see proto service: cosmos.benchmark.v1.LoadTest
 */
export const useLoadTest = buildUseMutation<MsgLoadTest, Error>({
  builderMutationFn: loadTest
});