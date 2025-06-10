import { TelescopeGeneratedType } from "../../../../types";
import { MsgRegisterCounterparty, MsgUpdateClientConfig } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/ibc.core.client.v2.MsgRegisterCounterparty", MsgRegisterCounterparty], ["/ibc.core.client.v2.MsgUpdateClientConfig", MsgUpdateClientConfig]];
export const MessageComposer = {
  encoded: {
    registerCounterparty(value: MsgRegisterCounterparty) {
      return {
        typeUrl: "/ibc.core.client.v2.MsgRegisterCounterparty",
        value: MsgRegisterCounterparty.encode(value).finish()
      };
    },
    updateClientConfig(value: MsgUpdateClientConfig) {
      return {
        typeUrl: "/ibc.core.client.v2.MsgUpdateClientConfig",
        value: MsgUpdateClientConfig.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerCounterparty(value: MsgRegisterCounterparty) {
      return {
        typeUrl: "/ibc.core.client.v2.MsgRegisterCounterparty",
        value
      };
    },
    updateClientConfig(value: MsgUpdateClientConfig) {
      return {
        typeUrl: "/ibc.core.client.v2.MsgUpdateClientConfig",
        value
      };
    }
  },
  fromPartial: {
    registerCounterparty(value: MsgRegisterCounterparty) {
      return {
        typeUrl: "/ibc.core.client.v2.MsgRegisterCounterparty",
        value: MsgRegisterCounterparty.fromPartial(value)
      };
    },
    updateClientConfig(value: MsgUpdateClientConfig) {
      return {
        typeUrl: "/ibc.core.client.v2.MsgUpdateClientConfig",
        value: MsgUpdateClientConfig.fromPartial(value)
      };
    }
  }
};