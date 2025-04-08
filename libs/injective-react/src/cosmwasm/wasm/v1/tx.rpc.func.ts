import { buildTx } from "../../../helper-func-types";
import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig, MsgUpdateParams, MsgSudoContract, MsgPinCodes, MsgUnpinCodes, MsgStoreAndInstantiateContract, MsgRemoveCodeUploadParamsAddresses, MsgAddCodeUploadParamsAddresses, MsgStoreAndMigrateContract, MsgUpdateContractLabel } from "./tx";
export const storeCode = buildTx<MsgStoreCode>({
  msg: MsgStoreCode
});
export const instantiateContract = buildTx<MsgInstantiateContract>({
  msg: MsgInstantiateContract
});
export const instantiateContract2 = buildTx<MsgInstantiateContract2>({
  msg: MsgInstantiateContract2
});
export const executeContract = buildTx<MsgExecuteContract>({
  msg: MsgExecuteContract
});
export const migrateContract = buildTx<MsgMigrateContract>({
  msg: MsgMigrateContract
});
export const updateAdmin = buildTx<MsgUpdateAdmin>({
  msg: MsgUpdateAdmin
});
export const clearAdmin = buildTx<MsgClearAdmin>({
  msg: MsgClearAdmin
});
export const updateInstantiateConfig = buildTx<MsgUpdateInstantiateConfig>({
  msg: MsgUpdateInstantiateConfig
});
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
export const sudoContract = buildTx<MsgSudoContract>({
  msg: MsgSudoContract
});
export const pinCodes = buildTx<MsgPinCodes>({
  msg: MsgPinCodes
});
export const unpinCodes = buildTx<MsgUnpinCodes>({
  msg: MsgUnpinCodes
});
export const storeAndInstantiateContract = buildTx<MsgStoreAndInstantiateContract>({
  msg: MsgStoreAndInstantiateContract
});
export const removeCodeUploadParamsAddresses = buildTx<MsgRemoveCodeUploadParamsAddresses>({
  msg: MsgRemoveCodeUploadParamsAddresses
});
export const addCodeUploadParamsAddresses = buildTx<MsgAddCodeUploadParamsAddresses>({
  msg: MsgAddCodeUploadParamsAddresses
});
export const storeAndMigrateContract = buildTx<MsgStoreAndMigrateContract>({
  msg: MsgStoreAndMigrateContract
});
export const updateContractLabel = buildTx<MsgUpdateContractLabel>({
  msg: MsgUpdateContractLabel
});