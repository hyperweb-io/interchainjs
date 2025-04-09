import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgUpdateParams } from "./tx";
import { createDenom, mint, burn, changeAdmin, setDenomMetadata, updateParams } from "./tx.rpc.func";
export const useCreateDenom = buildUseVueMutation<MsgCreateDenom, Error>({
  builderMutationFn: createDenom
});
export const useMint = buildUseVueMutation<MsgMint, Error>({
  builderMutationFn: mint
});
export const useBurn = buildUseVueMutation<MsgBurn, Error>({
  builderMutationFn: burn
});
export const useChangeAdmin = buildUseVueMutation<MsgChangeAdmin, Error>({
  builderMutationFn: changeAdmin
});
export const useSetDenomMetadata = buildUseVueMutation<MsgSetDenomMetadata, Error>({
  builderMutationFn: setDenomMetadata
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});