import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgUpdateParams } from "./tx";
import { createCreateDenom, createMint, createBurn, createChangeAdmin, createSetDenomMetadata, createUpdateParams } from "./tx.rpc.func.ts";
export const useCreateDenom = buildUseVueMutation<MsgCreateDenom, Error>({
  builderMutationFn: createCreateDenom
});
export const useMint = buildUseVueMutation<MsgMint, Error>({
  builderMutationFn: createMint
});
export const useBurn = buildUseVueMutation<MsgBurn, Error>({
  builderMutationFn: createBurn
});
export const useChangeAdmin = buildUseVueMutation<MsgChangeAdmin, Error>({
  builderMutationFn: createChangeAdmin
});
export const useSetDenomMetadata = buildUseVueMutation<MsgSetDenomMetadata, Error>({
  builderMutationFn: createSetDenomMetadata
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});