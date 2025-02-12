import { TelescopeGeneratedType } from "../../../../types";
import { MsgRegisterPayee, MsgRegisterCounterpartyPayee, MsgPayPacketFee, MsgPayPacketFeeAsync } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/ibc.applications.fee.v1.MsgRegisterPayee", MsgRegisterPayee], ["/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee", MsgRegisterCounterpartyPayee], ["/ibc.applications.fee.v1.MsgPayPacketFee", MsgPayPacketFee], ["/ibc.applications.fee.v1.MsgPayPacketFeeAsync", MsgPayPacketFeeAsync]];
export const MessageComposer = {
  encoded: {
    registerPayee(value: MsgRegisterPayee) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
        value: MsgRegisterPayee.encode(value).finish()
      };
    },
    registerCounterpartyPayee(value: MsgRegisterCounterpartyPayee) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
        value: MsgRegisterCounterpartyPayee.encode(value).finish()
      };
    },
    payPacketFee(value: MsgPayPacketFee) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
        value: MsgPayPacketFee.encode(value).finish()
      };
    },
    payPacketFeeAsync(value: MsgPayPacketFeeAsync) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
        value: MsgPayPacketFeeAsync.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerPayee(value: MsgRegisterPayee) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
        value
      };
    },
    registerCounterpartyPayee(value: MsgRegisterCounterpartyPayee) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
        value
      };
    },
    payPacketFee(value: MsgPayPacketFee) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
        value
      };
    },
    payPacketFeeAsync(value: MsgPayPacketFeeAsync) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
        value
      };
    }
  },
  fromPartial: {
    registerPayee(value: MsgRegisterPayee) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
        value: MsgRegisterPayee.fromPartial(value)
      };
    },
    registerCounterpartyPayee(value: MsgRegisterCounterpartyPayee) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
        value: MsgRegisterCounterpartyPayee.fromPartial(value)
      };
    },
    payPacketFee(value: MsgPayPacketFee) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
        value: MsgPayPacketFee.fromPartial(value)
      };
    },
    payPacketFeeAsync(value: MsgPayPacketFeeAsync) {
      return {
        typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
        value: MsgPayPacketFeeAsync.fromPartial(value)
      };
    }
  }
};