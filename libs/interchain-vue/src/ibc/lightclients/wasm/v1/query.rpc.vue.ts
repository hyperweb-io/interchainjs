import { buildUseVueQuery } from "../../../../vue-query";
import { QueryChecksumsRequest, QueryChecksumsResponse, QueryCodeRequest, QueryCodeResponse } from "./query";
import { createGetChecksums, createGetCode } from "./query.rpc.func";
export const useGetChecksums = buildUseVueQuery<QueryChecksumsRequest, QueryChecksumsResponse>({
  builderQueryFn: createGetChecksums,
  queryKeyPrefix: "ChecksumsQuery"
});
export const useGetCode = buildUseVueQuery<QueryCodeRequest, QueryCodeResponse>({
  builderQueryFn: createGetCode,
  queryKeyPrefix: "CodeQuery"
});