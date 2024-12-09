import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgUpdateContract, MsgActivateContract, MsgDeactivateContract, MsgExecuteContractCompat, MsgUpdateParams, MsgRegisterContract } from "./tx";
export const createUpdateRegistryContractParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateContract>({
  clientResolver,
  typeUrl: MsgUpdateContract.typeUrl,
  encoders: toEncoders(MsgUpdateContract),
  converters: toConverters(MsgUpdateContract)
});
export const createActivateRegistryContract = (clientResolver?: SigningClientResolver) => buildTx<MsgActivateContract>({
  clientResolver,
  typeUrl: MsgActivateContract.typeUrl,
  encoders: toEncoders(MsgActivateContract),
  converters: toConverters(MsgActivateContract)
});
export const createDeactivateRegistryContract = (clientResolver?: SigningClientResolver) => buildTx<MsgDeactivateContract>({
  clientResolver,
  typeUrl: MsgDeactivateContract.typeUrl,
  encoders: toEncoders(MsgDeactivateContract),
  converters: toConverters(MsgDeactivateContract)
});
export const createExecuteContractCompat = (clientResolver?: SigningClientResolver) => buildTx<MsgExecuteContractCompat>({
  clientResolver,
  typeUrl: MsgExecuteContractCompat.typeUrl,
  encoders: toEncoders(MsgExecuteContractCompat),
  converters: toConverters(MsgExecuteContractCompat)
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams)
});
export const createRegisterContract = (clientResolver?: SigningClientResolver) => buildTx<MsgRegisterContract>({
  clientResolver,
  typeUrl: MsgRegisterContract.typeUrl,
  encoders: toEncoders(MsgRegisterContract),
  converters: toConverters(MsgRegisterContract)
});