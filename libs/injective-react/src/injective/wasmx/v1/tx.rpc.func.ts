import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgUpdateContract, MsgActivateContract, MsgDeactivateContract, MsgExecuteContractCompat, MsgUpdateParams, MsgRegisterContract } from "./tx";
export const createUpdateRegistryContractParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateContract>({
  clientResolver,
  typeUrl: MsgUpdateContract.typeUrl,
  encoders: toEncoders(MsgUpdateContract),
  converters: toConverters(MsgUpdateContract)
});
export const useUpdateRegistryContractParams = buildUseMutation<MsgUpdateContract, Error>({
  builderMutationFn: createUpdateRegistryContractParams
});
export const createActivateRegistryContract = (clientResolver?: SigningClientResolver) => buildTx<MsgActivateContract>({
  clientResolver,
  typeUrl: MsgActivateContract.typeUrl,
  encoders: toEncoders(MsgActivateContract),
  converters: toConverters(MsgActivateContract)
});
export const useActivateRegistryContract = buildUseMutation<MsgActivateContract, Error>({
  builderMutationFn: createActivateRegistryContract
});
export const createDeactivateRegistryContract = (clientResolver?: SigningClientResolver) => buildTx<MsgDeactivateContract>({
  clientResolver,
  typeUrl: MsgDeactivateContract.typeUrl,
  encoders: toEncoders(MsgDeactivateContract),
  converters: toConverters(MsgDeactivateContract)
});
export const useDeactivateRegistryContract = buildUseMutation<MsgDeactivateContract, Error>({
  builderMutationFn: createDeactivateRegistryContract
});
export const createExecuteContractCompat = (clientResolver?: SigningClientResolver) => buildTx<MsgExecuteContractCompat>({
  clientResolver,
  typeUrl: MsgExecuteContractCompat.typeUrl,
  encoders: toEncoders(MsgExecuteContractCompat),
  converters: toConverters(MsgExecuteContractCompat)
});
export const useExecuteContractCompat = buildUseMutation<MsgExecuteContractCompat, Error>({
  builderMutationFn: createExecuteContractCompat
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams)
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});
export const createRegisterContract = (clientResolver?: SigningClientResolver) => buildTx<MsgRegisterContract>({
  clientResolver,
  typeUrl: MsgRegisterContract.typeUrl,
  encoders: toEncoders(MsgRegisterContract),
  converters: toConverters(MsgRegisterContract)
});
export const useRegisterContract = buildUseMutation<MsgRegisterContract, Error>({
  builderMutationFn: createRegisterContract
});