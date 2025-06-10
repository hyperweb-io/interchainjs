import { TelescopeGeneratedType } from "../../../types";
import { MsgIncreaseCounter } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/cosmos.counter.v1.MsgIncreaseCounter", MsgIncreaseCounter]];
export const MessageComposer = {
  encoded: {
    increaseCount(value: MsgIncreaseCounter) {
      return {
        typeUrl: "/cosmos.counter.v1.MsgIncreaseCounter",
        value: MsgIncreaseCounter.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    increaseCount(value: MsgIncreaseCounter) {
      return {
        typeUrl: "/cosmos.counter.v1.MsgIncreaseCounter",
        value
      };
    }
  },
  fromPartial: {
    increaseCount(value: MsgIncreaseCounter) {
      return {
        typeUrl: "/cosmos.counter.v1.MsgIncreaseCounter",
        value: MsgIncreaseCounter.fromPartial(value)
      };
    }
  }
};