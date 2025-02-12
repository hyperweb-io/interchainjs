import { TelescopeGeneratedType } from "../../../../types";
import { MsgStoreCode, MsgRemoveChecksum, MsgMigrateContract } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/ibc.lightclients.wasm.v1.MsgStoreCode", MsgStoreCode], ["/ibc.lightclients.wasm.v1.MsgRemoveChecksum", MsgRemoveChecksum], ["/ibc.lightclients.wasm.v1.MsgMigrateContract", MsgMigrateContract]];
export const MessageComposer = {
  encoded: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode",
        value: MsgStoreCode.encode(value).finish()
      };
    },
    removeChecksum(value: MsgRemoveChecksum) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum",
        value: MsgRemoveChecksum.encode(value).finish()
      };
    },
    migrateContract(value: MsgMigrateContract) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract",
        value: MsgMigrateContract.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode",
        value
      };
    },
    removeChecksum(value: MsgRemoveChecksum) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum",
        value
      };
    },
    migrateContract(value: MsgMigrateContract) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract",
        value
      };
    }
  },
  fromPartial: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode",
        value: MsgStoreCode.fromPartial(value)
      };
    },
    removeChecksum(value: MsgRemoveChecksum) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum",
        value: MsgRemoveChecksum.fromPartial(value)
      };
    },
    migrateContract(value: MsgMigrateContract) {
      return {
        typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract",
        value: MsgMigrateContract.fromPartial(value)
      };
    }
  }
};