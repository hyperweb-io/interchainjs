import { MsgUpdateContract, MsgActivateContract, MsgDeactivateContract, MsgExecuteContractCompat, MsgUpdateParams, MsgRegisterContract } from "./tx";
export const AminoConverter = {
  "/injective.wasmx.v1.MsgUpdateContract": {
    aminoType: "/injective.wasmx.v1.MsgUpdateContract",
    toAmino: MsgUpdateContract.toAmino,
    fromAmino: MsgUpdateContract.fromAmino
  },
  "/injective.wasmx.v1.MsgActivateContract": {
    aminoType: "/injective.wasmx.v1.MsgActivateContract",
    toAmino: MsgActivateContract.toAmino,
    fromAmino: MsgActivateContract.fromAmino
  },
  "/injective.wasmx.v1.MsgDeactivateContract": {
    aminoType: "/injective.wasmx.v1.MsgDeactivateContract",
    toAmino: MsgDeactivateContract.toAmino,
    fromAmino: MsgDeactivateContract.fromAmino
  },
  "/injective.wasmx.v1.MsgExecuteContractCompat": {
    aminoType: "/injective.wasmx.v1.MsgExecuteContractCompat",
    toAmino: MsgExecuteContractCompat.toAmino,
    fromAmino: MsgExecuteContractCompat.fromAmino
  },
  "/injective.wasmx.v1.MsgUpdateParams": {
    aminoType: "/injective.wasmx.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/injective.wasmx.v1.MsgRegisterContract": {
    aminoType: "/injective.wasmx.v1.MsgRegisterContract",
    toAmino: MsgRegisterContract.toAmino,
    fromAmino: MsgRegisterContract.fromAmino
  }
};