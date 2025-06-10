import { TelescopeGeneratedType } from "../../../types";
import { MsgLoadTest } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/cosmos.benchmark.v1.MsgLoadTest", MsgLoadTest]];
export const MessageComposer = {
  encoded: {
    loadTest(value: MsgLoadTest) {
      return {
        typeUrl: "/cosmos.benchmark.v1.MsgLoadTest",
        value: MsgLoadTest.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    loadTest(value: MsgLoadTest) {
      return {
        typeUrl: "/cosmos.benchmark.v1.MsgLoadTest",
        value
      };
    }
  },
  fromPartial: {
    loadTest(value: MsgLoadTest) {
      return {
        typeUrl: "/cosmos.benchmark.v1.MsgLoadTest",
        value: MsgLoadTest.fromPartial(value)
      };
    }
  }
};