import { buildTx, SigningClientResolver } from "../../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgStoreCode, MsgRemoveChecksum, MsgMigrateContract } from "./tx";
export const createStoreCode = (clientResolver?: SigningClientResolver) => buildTx<MsgStoreCode>({
  clientResolver,
  typeUrl: MsgStoreCode.typeUrl,
  encoders: toEncoders(MsgStoreCode),
  converters: toConverters(MsgStoreCode)
});
export const createRemoveChecksum = (clientResolver?: SigningClientResolver) => buildTx<MsgRemoveChecksum>({
  clientResolver,
  typeUrl: MsgRemoveChecksum.typeUrl,
  encoders: toEncoders(MsgRemoveChecksum),
  converters: toConverters(MsgRemoveChecksum)
});
export const createMigrateContract = (clientResolver?: SigningClientResolver) => buildTx<MsgMigrateContract>({
  clientResolver,
  typeUrl: MsgMigrateContract.typeUrl,
  encoders: toEncoders(MsgMigrateContract),
  converters: toConverters(MsgMigrateContract)
});