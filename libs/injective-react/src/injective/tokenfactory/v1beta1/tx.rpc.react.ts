import { buildUseMutation } from "../../../react-query";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgUpdateParams } from "./tx";
import { createDenom, mint, burn, changeAdmin, setDenomMetadata, updateParams } from "./tx.rpc.func";
export const useCreateDenom = buildUseMutation<MsgCreateDenom, Error>({
  builderMutationFn: createDenom
});
export const useMint = buildUseMutation<MsgMint, Error>({
  builderMutationFn: mint
});
export const useBurn = buildUseMutation<MsgBurn, Error>({
  builderMutationFn: burn
});
export const useChangeAdmin = buildUseMutation<MsgChangeAdmin, Error>({
  builderMutationFn: changeAdmin
});
export const useSetDenomMetadata = buildUseMutation<MsgSetDenomMetadata, Error>({
  builderMutationFn: setDenomMetadata
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});