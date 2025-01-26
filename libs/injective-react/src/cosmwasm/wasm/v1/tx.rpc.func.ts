import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig, MsgUpdateParams, MsgSudoContract, MsgPinCodes, MsgUnpinCodes, MsgStoreAndInstantiateContract, MsgRemoveCodeUploadParamsAddresses, MsgAddCodeUploadParamsAddresses, MsgStoreAndMigrateContract, MsgUpdateContractLabel } from "./tx";
export const createStoreCode = (clientResolver?: SigningClientResolver) => buildTx<MsgStoreCode>({
  clientResolver,
  typeUrl: MsgStoreCode.typeUrl,
  encoders: toEncoders(MsgStoreCode),
  converters: toConverters(MsgStoreCode),
  deps: [MsgStoreCode]
});
export const createInstantiateContract = (clientResolver?: SigningClientResolver) => buildTx<MsgInstantiateContract>({
  clientResolver,
  typeUrl: MsgInstantiateContract.typeUrl,
  encoders: toEncoders(MsgInstantiateContract),
  converters: toConverters(MsgInstantiateContract),
  deps: [MsgInstantiateContract]
});
export const createInstantiateContract2 = (clientResolver?: SigningClientResolver) => buildTx<MsgInstantiateContract2>({
  clientResolver,
  typeUrl: MsgInstantiateContract2.typeUrl,
  encoders: toEncoders(MsgInstantiateContract2),
  converters: toConverters(MsgInstantiateContract2),
  deps: [MsgInstantiateContract2]
});
export const createExecuteContract = (clientResolver?: SigningClientResolver) => buildTx<MsgExecuteContract>({
  clientResolver,
  typeUrl: MsgExecuteContract.typeUrl,
  encoders: toEncoders(MsgExecuteContract),
  converters: toConverters(MsgExecuteContract),
  deps: [MsgExecuteContract]
});
export const createMigrateContract = (clientResolver?: SigningClientResolver) => buildTx<MsgMigrateContract>({
  clientResolver,
  typeUrl: MsgMigrateContract.typeUrl,
  encoders: toEncoders(MsgMigrateContract),
  converters: toConverters(MsgMigrateContract),
  deps: [MsgMigrateContract]
});
export const createUpdateAdmin = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateAdmin>({
  clientResolver,
  typeUrl: MsgUpdateAdmin.typeUrl,
  encoders: toEncoders(MsgUpdateAdmin),
  converters: toConverters(MsgUpdateAdmin),
  deps: [MsgUpdateAdmin]
});
export const createClearAdmin = (clientResolver?: SigningClientResolver) => buildTx<MsgClearAdmin>({
  clientResolver,
  typeUrl: MsgClearAdmin.typeUrl,
  encoders: toEncoders(MsgClearAdmin),
  converters: toConverters(MsgClearAdmin),
  deps: [MsgClearAdmin]
});
export const createUpdateInstantiateConfig = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateInstantiateConfig>({
  clientResolver,
  typeUrl: MsgUpdateInstantiateConfig.typeUrl,
  encoders: toEncoders(MsgUpdateInstantiateConfig),
  converters: toConverters(MsgUpdateInstantiateConfig),
  deps: [MsgUpdateInstantiateConfig]
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams),
  deps: [MsgUpdateParams]
});
export const createSudoContract = (clientResolver?: SigningClientResolver) => buildTx<MsgSudoContract>({
  clientResolver,
  typeUrl: MsgSudoContract.typeUrl,
  encoders: toEncoders(MsgSudoContract),
  converters: toConverters(MsgSudoContract),
  deps: [MsgSudoContract]
});
export const createPinCodes = (clientResolver?: SigningClientResolver) => buildTx<MsgPinCodes>({
  clientResolver,
  typeUrl: MsgPinCodes.typeUrl,
  encoders: toEncoders(MsgPinCodes),
  converters: toConverters(MsgPinCodes),
  deps: [MsgPinCodes]
});
export const createUnpinCodes = (clientResolver?: SigningClientResolver) => buildTx<MsgUnpinCodes>({
  clientResolver,
  typeUrl: MsgUnpinCodes.typeUrl,
  encoders: toEncoders(MsgUnpinCodes),
  converters: toConverters(MsgUnpinCodes),
  deps: [MsgUnpinCodes]
});
export const createStoreAndInstantiateContract = (clientResolver?: SigningClientResolver) => buildTx<MsgStoreAndInstantiateContract>({
  clientResolver,
  typeUrl: MsgStoreAndInstantiateContract.typeUrl,
  encoders: toEncoders(MsgStoreAndInstantiateContract),
  converters: toConverters(MsgStoreAndInstantiateContract),
  deps: [MsgStoreAndInstantiateContract]
});
export const createRemoveCodeUploadParamsAddresses = (clientResolver?: SigningClientResolver) => buildTx<MsgRemoveCodeUploadParamsAddresses>({
  clientResolver,
  typeUrl: MsgRemoveCodeUploadParamsAddresses.typeUrl,
  encoders: toEncoders(MsgRemoveCodeUploadParamsAddresses),
  converters: toConverters(MsgRemoveCodeUploadParamsAddresses),
  deps: [MsgRemoveCodeUploadParamsAddresses]
});
export const createAddCodeUploadParamsAddresses = (clientResolver?: SigningClientResolver) => buildTx<MsgAddCodeUploadParamsAddresses>({
  clientResolver,
  typeUrl: MsgAddCodeUploadParamsAddresses.typeUrl,
  encoders: toEncoders(MsgAddCodeUploadParamsAddresses),
  converters: toConverters(MsgAddCodeUploadParamsAddresses),
  deps: [MsgAddCodeUploadParamsAddresses]
});
export const createStoreAndMigrateContract = (clientResolver?: SigningClientResolver) => buildTx<MsgStoreAndMigrateContract>({
  clientResolver,
  typeUrl: MsgStoreAndMigrateContract.typeUrl,
  encoders: toEncoders(MsgStoreAndMigrateContract),
  converters: toConverters(MsgStoreAndMigrateContract),
  deps: [MsgStoreAndMigrateContract]
});
export const createUpdateContractLabel = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateContractLabel>({
  clientResolver,
  typeUrl: MsgUpdateContractLabel.typeUrl,
  encoders: toEncoders(MsgUpdateContractLabel),
  converters: toConverters(MsgUpdateContractLabel),
  deps: [MsgUpdateContractLabel]
});