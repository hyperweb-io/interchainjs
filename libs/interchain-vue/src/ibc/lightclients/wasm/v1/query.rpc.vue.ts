import { buildUseVueQuery } from "../../../../vue-query";
import { QueryChecksumsRequest, QueryChecksumsResponse, QueryCodeRequest, QueryCodeResponse } from "./query";
import { getChecksums, getCode } from "./query.rpc.func";
/* Get all Wasm checksums */
export const useGetChecksums = buildUseVueQuery<QueryChecksumsRequest, QueryChecksumsResponse>({
  builderQueryFn: getChecksums,
  queryKeyPrefix: "ChecksumsQuery"
});
/* Get Wasm code for given checksum */
export const useGetCode = buildUseVueQuery<QueryCodeRequest, QueryCodeResponse>({
  builderQueryFn: getCode,
  queryKeyPrefix: "CodeQuery"
});