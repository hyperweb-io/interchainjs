import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig, MsgUpdateParams, MsgSudoContract, MsgPinCodes, MsgUnpinCodes, MsgStoreAndInstantiateContract, MsgRemoveCodeUploadParamsAddresses, MsgAddCodeUploadParamsAddresses, MsgStoreAndMigrateContract, MsgUpdateContractLabel } from "./tx";
export const createStoreCode = (clientResolver?: SigningClientResolver) => buildTx<MsgStoreCode>({
  clientResolver,
  typeUrl: MsgStoreCode.typeUrl,
  encoders: toEncoders(MsgStoreCode),
  converters: toConverters(MsgStoreCode)
});
export const useStoreCode = buildUseMutation<MsgStoreCode, Error>({
  builderMutationFn: createStoreCode
});
export const createInstantiateContract = (clientResolver?: SigningClientResolver) => buildTx<MsgInstantiateContract>({
  clientResolver,
  typeUrl: MsgInstantiateContract.typeUrl,
  encoders: toEncoders(MsgInstantiateContract),
  converters: toConverters(MsgInstantiateContract)
});
export const useInstantiateContract = buildUseMutation<MsgInstantiateContract, Error>({
  builderMutationFn: createInstantiateContract
});
export const createInstantiateContract2 = (clientResolver?: SigningClientResolver) => buildTx<MsgInstantiateContract2>({
  clientResolver,
  typeUrl: MsgInstantiateContract2.typeUrl,
  encoders: toEncoders(MsgInstantiateContract2),
  converters: toConverters(MsgInstantiateContract2)
});
export const useInstantiateContract2 = buildUseMutation<MsgInstantiateContract2, Error>({
  builderMutationFn: createInstantiateContract2
});
export const createExecuteContract = (clientResolver?: SigningClientResolver) => buildTx<MsgExecuteContract>({
  clientResolver,
  typeUrl: MsgExecuteContract.typeUrl,
  encoders: toEncoders(MsgExecuteContract),
  converters: toConverters(MsgExecuteContract)
});
export const useExecuteContract = buildUseMutation<MsgExecuteContract, Error>({
  builderMutationFn: createExecuteContract
});
export const createMigrateContract = (clientResolver?: SigningClientResolver) => buildTx<MsgMigrateContract>({
  clientResolver,
  typeUrl: MsgMigrateContract.typeUrl,
  encoders: toEncoders(MsgMigrateContract),
  converters: toConverters(MsgMigrateContract)
});
export const useMigrateContract = buildUseMutation<MsgMigrateContract, Error>({
  builderMutationFn: createMigrateContract
});
export const createUpdateAdmin = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateAdmin>({
  clientResolver,
  typeUrl: MsgUpdateAdmin.typeUrl,
  encoders: toEncoders(MsgUpdateAdmin),
  converters: toConverters(MsgUpdateAdmin)
});
export const useUpdateAdmin = buildUseMutation<MsgUpdateAdmin, Error>({
  builderMutationFn: createUpdateAdmin
});
export const createClearAdmin = (clientResolver?: SigningClientResolver) => buildTx<MsgClearAdmin>({
  clientResolver,
  typeUrl: MsgClearAdmin.typeUrl,
  encoders: toEncoders(MsgClearAdmin),
  converters: toConverters(MsgClearAdmin)
});
export const useClearAdmin = buildUseMutation<MsgClearAdmin, Error>({
  builderMutationFn: createClearAdmin
});
export const createUpdateInstantiateConfig = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateInstantiateConfig>({
  clientResolver,
  typeUrl: MsgUpdateInstantiateConfig.typeUrl,
  encoders: toEncoders(MsgUpdateInstantiateConfig),
  converters: toConverters(MsgUpdateInstantiateConfig)
});
export const useUpdateInstantiateConfig = buildUseMutation<MsgUpdateInstantiateConfig, Error>({
  builderMutationFn: createUpdateInstantiateConfig
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
export const createSudoContract = (clientResolver?: SigningClientResolver) => buildTx<MsgSudoContract>({
  clientResolver,
  typeUrl: MsgSudoContract.typeUrl,
  encoders: toEncoders(MsgSudoContract),
  converters: toConverters(MsgSudoContract)
});
export const useSudoContract = buildUseMutation<MsgSudoContract, Error>({
  builderMutationFn: createSudoContract
});
export const createPinCodes = (clientResolver?: SigningClientResolver) => buildTx<MsgPinCodes>({
  clientResolver,
  typeUrl: MsgPinCodes.typeUrl,
  encoders: toEncoders(MsgPinCodes),
  converters: toConverters(MsgPinCodes)
});
export const usePinCodes = buildUseMutation<MsgPinCodes, Error>({
  builderMutationFn: createPinCodes
});
export const createUnpinCodes = (clientResolver?: SigningClientResolver) => buildTx<MsgUnpinCodes>({
  clientResolver,
  typeUrl: MsgUnpinCodes.typeUrl,
  encoders: toEncoders(MsgUnpinCodes),
  converters: toConverters(MsgUnpinCodes)
});
export const useUnpinCodes = buildUseMutation<MsgUnpinCodes, Error>({
  builderMutationFn: createUnpinCodes
});
export const createStoreAndInstantiateContract = (clientResolver?: SigningClientResolver) => buildTx<MsgStoreAndInstantiateContract>({
  clientResolver,
  typeUrl: MsgStoreAndInstantiateContract.typeUrl,
  encoders: toEncoders(MsgStoreAndInstantiateContract),
  converters: toConverters(MsgStoreAndInstantiateContract)
});
export const useStoreAndInstantiateContract = buildUseMutation<MsgStoreAndInstantiateContract, Error>({
  builderMutationFn: createStoreAndInstantiateContract
});
export const createRemoveCodeUploadParamsAddresses = (clientResolver?: SigningClientResolver) => buildTx<MsgRemoveCodeUploadParamsAddresses>({
  clientResolver,
  typeUrl: MsgRemoveCodeUploadParamsAddresses.typeUrl,
  encoders: toEncoders(MsgRemoveCodeUploadParamsAddresses),
  converters: toConverters(MsgRemoveCodeUploadParamsAddresses)
});
export const useRemoveCodeUploadParamsAddresses = buildUseMutation<MsgRemoveCodeUploadParamsAddresses, Error>({
  builderMutationFn: createRemoveCodeUploadParamsAddresses
});
export const createAddCodeUploadParamsAddresses = (clientResolver?: SigningClientResolver) => buildTx<MsgAddCodeUploadParamsAddresses>({
  clientResolver,
  typeUrl: MsgAddCodeUploadParamsAddresses.typeUrl,
  encoders: toEncoders(MsgAddCodeUploadParamsAddresses),
  converters: toConverters(MsgAddCodeUploadParamsAddresses)
});
export const useAddCodeUploadParamsAddresses = buildUseMutation<MsgAddCodeUploadParamsAddresses, Error>({
  builderMutationFn: createAddCodeUploadParamsAddresses
});
export const createStoreAndMigrateContract = (clientResolver?: SigningClientResolver) => buildTx<MsgStoreAndMigrateContract>({
  clientResolver,
  typeUrl: MsgStoreAndMigrateContract.typeUrl,
  encoders: toEncoders(MsgStoreAndMigrateContract),
  converters: toConverters(MsgStoreAndMigrateContract)
});
export const useStoreAndMigrateContract = buildUseMutation<MsgStoreAndMigrateContract, Error>({
  builderMutationFn: createStoreAndMigrateContract
});
export const createUpdateContractLabel = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateContractLabel>({
  clientResolver,
  typeUrl: MsgUpdateContractLabel.typeUrl,
  encoders: toEncoders(MsgUpdateContractLabel),
  converters: toConverters(MsgUpdateContractLabel)
});
export const useUpdateContractLabel = buildUseMutation<MsgUpdateContractLabel, Error>({
  builderMutationFn: createUpdateContractLabel
});