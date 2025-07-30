import { buildUseVueMutation } from "../../../vue-query";
import { MsgLoadTest } from "./tx";
import { loadTest } from "./tx.rpc.func";
/**
 * LoadTest defines a method for executing a sequence of load test operations.
 * @name useLoadTest
 * @package cosmos.benchmark.v1
 * @see proto service: cosmos.benchmark.v1.LoadTest
 */
export const useLoadTest = buildUseVueMutation<MsgLoadTest, Error>({
  builderMutationFn: loadTest
});