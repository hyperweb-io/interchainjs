import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig, MsgUpdateParams, MsgSudoContract, MsgPinCodes, MsgUnpinCodes, MsgStoreAndInstantiateContract, MsgRemoveCodeUploadParamsAddresses, MsgAddCodeUploadParamsAddresses, MsgStoreAndMigrateContract, MsgUpdateContractLabel } from "./tx";
export const createStoreCode = (getSigningClient: SigningClientResolver) => buildTx<MsgStoreCode>({
  getSigningClient: getSigningClient,
  typeUrl: MsgStoreCode.typeUrl,
  encoders: toEncoders(MsgStoreCode),
  converters: toConverters(MsgStoreCode)
});
export const useStoreCode = buildUseMutation<MsgStoreCode, Error>({
  builderMutationFn: createStoreCode
});
export const createInstantiateContract = (getSigningClient: SigningClientResolver) => buildTx<MsgInstantiateContract>({
  getSigningClient: getSigningClient,
  typeUrl: MsgInstantiateContract.typeUrl,
  encoders: toEncoders(MsgInstantiateContract),
  converters: toConverters(MsgInstantiateContract)
});
export const useInstantiateContract = buildUseMutation<MsgInstantiateContract, Error>({
  builderMutationFn: createInstantiateContract
});
export const createInstantiateContract2 = (getSigningClient: SigningClientResolver) => buildTx<MsgInstantiateContract2>({
  getSigningClient: getSigningClient,
  typeUrl: MsgInstantiateContract2.typeUrl,
  encoders: toEncoders(MsgInstantiateContract2),
  converters: toConverters(MsgInstantiateContract2)
});
export const useInstantiateContract2 = buildUseMutation<MsgInstantiateContract2, Error>({
  builderMutationFn: createInstantiateContract2
});
export const createExecuteContract = (getSigningClient: SigningClientResolver) => buildTx<MsgExecuteContract>({
  getSigningClient: getSigningClient,
  typeUrl: MsgExecuteContract.typeUrl,
  encoders: toEncoders(MsgExecuteContract),
  converters: toConverters(MsgExecuteContract)
});
export const useExecuteContract = buildUseMutation<MsgExecuteContract, Error>({
  builderMutationFn: createExecuteContract
});
export const createMigrateContract = (getSigningClient: SigningClientResolver) => buildTx<MsgMigrateContract>({
  getSigningClient: getSigningClient,
  typeUrl: MsgMigrateContract.typeUrl,
  encoders: toEncoders(MsgMigrateContract),
  converters: toConverters(MsgMigrateContract)
});
export const useMigrateContract = buildUseMutation<MsgMigrateContract, Error>({
  builderMutationFn: createMigrateContract
});
export const createUpdateAdmin = (getSigningClient: SigningClientResolver) => buildTx<MsgUpdateAdmin>({
  getSigningClient: getSigningClient,
  typeUrl: MsgUpdateAdmin.typeUrl,
  encoders: toEncoders(MsgUpdateAdmin),
  converters: toConverters(MsgUpdateAdmin)
});
export const useUpdateAdmin = buildUseMutation<MsgUpdateAdmin, Error>({
  builderMutationFn: createUpdateAdmin
});
export const createClearAdmin = (getSigningClient: SigningClientResolver) => buildTx<MsgClearAdmin>({
  getSigningClient: getSigningClient,
  typeUrl: MsgClearAdmin.typeUrl,
  encoders: toEncoders(MsgClearAdmin),
  converters: toConverters(MsgClearAdmin)
});
export const useClearAdmin = buildUseMutation<MsgClearAdmin, Error>({
  builderMutationFn: createClearAdmin
});
export const createUpdateInstantiateConfig = (getSigningClient: SigningClientResolver) => buildTx<MsgUpdateInstantiateConfig>({
  getSigningClient: getSigningClient,
  typeUrl: MsgUpdateInstantiateConfig.typeUrl,
  encoders: toEncoders(MsgUpdateInstantiateConfig),
  converters: toConverters(MsgUpdateInstantiateConfig)
});
export const useUpdateInstantiateConfig = buildUseMutation<MsgUpdateInstantiateConfig, Error>({
  builderMutationFn: createUpdateInstantiateConfig
});
export const createUpdateParams = (getSigningClient: SigningClientResolver) => buildTx<MsgUpdateParams>({
  getSigningClient: getSigningClient,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams)
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});
export const createSudoContract = (getSigningClient: SigningClientResolver) => buildTx<MsgSudoContract>({
  getSigningClient: getSigningClient,
  typeUrl: MsgSudoContract.typeUrl,
  encoders: toEncoders(MsgSudoContract),
  converters: toConverters(MsgSudoContract)
});
export const useSudoContract = buildUseMutation<MsgSudoContract, Error>({
  builderMutationFn: createSudoContract
});
export const createPinCodes = (getSigningClient: SigningClientResolver) => buildTx<MsgPinCodes>({
  getSigningClient: getSigningClient,
  typeUrl: MsgPinCodes.typeUrl,
  encoders: toEncoders(MsgPinCodes),
  converters: toConverters(MsgPinCodes)
});
export const usePinCodes = buildUseMutation<MsgPinCodes, Error>({
  builderMutationFn: createPinCodes
});
export const createUnpinCodes = (getSigningClient: SigningClientResolver) => buildTx<MsgUnpinCodes>({
  getSigningClient: getSigningClient,
  typeUrl: MsgUnpinCodes.typeUrl,
  encoders: toEncoders(MsgUnpinCodes),
  converters: toConverters(MsgUnpinCodes)
});
export const useUnpinCodes = buildUseMutation<MsgUnpinCodes, Error>({
  builderMutationFn: createUnpinCodes
});
export const createStoreAndInstantiateContract = (getSigningClient: SigningClientResolver) => buildTx<MsgStoreAndInstantiateContract>({
  getSigningClient: getSigningClient,
  typeUrl: MsgStoreAndInstantiateContract.typeUrl,
  encoders: toEncoders(MsgStoreAndInstantiateContract),
  converters: toConverters(MsgStoreAndInstantiateContract)
});
export const useStoreAndInstantiateContract = buildUseMutation<MsgStoreAndInstantiateContract, Error>({
  builderMutationFn: createStoreAndInstantiateContract
});
export const createRemoveCodeUploadParamsAddresses = (getSigningClient: SigningClientResolver) => buildTx<MsgRemoveCodeUploadParamsAddresses>({
  getSigningClient: getSigningClient,
  typeUrl: MsgRemoveCodeUploadParamsAddresses.typeUrl,
  encoders: toEncoders(MsgRemoveCodeUploadParamsAddresses),
  converters: toConverters(MsgRemoveCodeUploadParamsAddresses)
});
export const useRemoveCodeUploadParamsAddresses = buildUseMutation<MsgRemoveCodeUploadParamsAddresses, Error>({
  builderMutationFn: createRemoveCodeUploadParamsAddresses
});
export const createAddCodeUploadParamsAddresses = (getSigningClient: SigningClientResolver) => buildTx<MsgAddCodeUploadParamsAddresses>({
  getSigningClient: getSigningClient,
  typeUrl: MsgAddCodeUploadParamsAddresses.typeUrl,
  encoders: toEncoders(MsgAddCodeUploadParamsAddresses),
  converters: toConverters(MsgAddCodeUploadParamsAddresses)
});
export const useAddCodeUploadParamsAddresses = buildUseMutation<MsgAddCodeUploadParamsAddresses, Error>({
  builderMutationFn: createAddCodeUploadParamsAddresses
});
export const createStoreAndMigrateContract = (getSigningClient: SigningClientResolver) => buildTx<MsgStoreAndMigrateContract>({
  getSigningClient: getSigningClient,
  typeUrl: MsgStoreAndMigrateContract.typeUrl,
  encoders: toEncoders(MsgStoreAndMigrateContract),
  converters: toConverters(MsgStoreAndMigrateContract)
});
export const useStoreAndMigrateContract = buildUseMutation<MsgStoreAndMigrateContract, Error>({
  builderMutationFn: createStoreAndMigrateContract
});
export const createUpdateContractLabel = (getSigningClient: SigningClientResolver) => buildTx<MsgUpdateContractLabel>({
  getSigningClient: getSigningClient,
  typeUrl: MsgUpdateContractLabel.typeUrl,
  encoders: toEncoders(MsgUpdateContractLabel),
  converters: toConverters(MsgUpdateContractLabel)
});
export const useUpdateContractLabel = buildUseMutation<MsgUpdateContractLabel, Error>({
  builderMutationFn: createUpdateContractLabel
});