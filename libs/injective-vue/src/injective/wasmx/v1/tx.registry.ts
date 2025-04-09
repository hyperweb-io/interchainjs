import { TelescopeGeneratedType } from "../../../types";
import { MsgUpdateContract, MsgActivateContract, MsgDeactivateContract, MsgExecuteContractCompat, MsgUpdateParams, MsgRegisterContract } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/injective.wasmx.v1.MsgUpdateContract", MsgUpdateContract], ["/injective.wasmx.v1.MsgActivateContract", MsgActivateContract], ["/injective.wasmx.v1.MsgDeactivateContract", MsgDeactivateContract], ["/injective.wasmx.v1.MsgExecuteContractCompat", MsgExecuteContractCompat], ["/injective.wasmx.v1.MsgUpdateParams", MsgUpdateParams], ["/injective.wasmx.v1.MsgRegisterContract", MsgRegisterContract]];
export const MessageComposer = {
  encoded: {
    updateRegistryContractParams(value: MsgUpdateContract) {
      return {
        typeUrl: "/injective.wasmx.v1.MsgUpdateContract",
        value: MsgUpdateContract.encode(value).finish()
      };
    },
    activateRegistryContract(value: MsgActivateContract) {
      return {
        typeUrl: "/injective.wasmx.v1.MsgActivateContract",
        value: MsgActivateContract.encode(value).finish()
      };
    },
    deactivateRegistryContract(value: MsgDeactivateContract) {
      return {
        typeUrl: "/injective.wasmx.v1.MsgDeactivateContract",
        value: MsgDeactivateContract.encode(value).finish()
      };
    },
    executeContractCompat(value: MsgExecuteContractCompat) {
      return {
        typeUrl: "/injective.wasmx.v1.MsgExecuteContractCompat",
        value: MsgExecuteContractCompat.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.wasmx.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    registerContract(value: MsgRegisterContract) {
      return {
        typeUrl: "/injective.wasmx.v1.MsgRegisterContract",
        value: MsgRegisterContract.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateRegistryContractParams(value: MsgUpdateContract) {
      return {
        typeUrl: "/injective.wasmx.v1.MsgUpdateContract",
        value
      };
    },
    activateRegistryContract(value: MsgActivateContract) {
      return {
        typeUrl: "/injective.wasmx.v1.MsgActivateContract",
        value
      };
    },
    deactivateRegistryContract(value: MsgDeactivateContract) {
      return {
        typeUrl: "/injective.wasmx.v1.MsgDeactivateContract",
        value
      };
    },
    executeContractCompat(value: MsgExecuteContractCompat) {
      return {
        typeUrl: "/injective.wasmx.v1.MsgExecuteContractCompat",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.wasmx.v1.MsgUpdateParams",
        value
      };
    },
    registerContract(value: MsgRegisterContract) {
      return {
        typeUrl: "/injective.wasmx.v1.MsgRegisterContract",
        value
      };
    }
  },
  fromPartial: {
    updateRegistryContractParams(value: MsgUpdateContract) {
      return {
        typeUrl: "/injective.wasmx.v1.MsgUpdateContract",
        value: MsgUpdateContract.fromPartial(value)
      };
    },
    activateRegistryContract(value: MsgActivateContract) {
      return {
        typeUrl: "/injective.wasmx.v1.MsgActivateContract",
        value: MsgActivateContract.fromPartial(value)
      };
    },
    deactivateRegistryContract(value: MsgDeactivateContract) {
      return {
        typeUrl: "/injective.wasmx.v1.MsgDeactivateContract",
        value: MsgDeactivateContract.fromPartial(value)
      };
    },
    executeContractCompat(value: MsgExecuteContractCompat) {
      return {
        typeUrl: "/injective.wasmx.v1.MsgExecuteContractCompat",
        value: MsgExecuteContractCompat.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.wasmx.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    registerContract(value: MsgRegisterContract) {
      return {
        typeUrl: "/injective.wasmx.v1.MsgRegisterContract",
        value: MsgRegisterContract.fromPartial(value)
      };
    }
  }
};