import { buildTx } from "../../../helper-func-types";
import { MsgLoadTest } from "./tx";
/**
 * LoadTest defines a method for executing a sequence of load test operations.
 * @name loadTest
 * @package cosmos.benchmark.v1
 * @see proto service: cosmos.benchmark.v1.LoadTest
 */
export const loadTest = buildTx<MsgLoadTest>({
  msg: MsgLoadTest
});