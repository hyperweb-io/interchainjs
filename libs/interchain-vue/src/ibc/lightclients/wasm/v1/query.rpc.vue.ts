import { buildUseVueQuery } from "../../../../vue-query";
import { QueryChecksumsRequest, QueryChecksumsResponse, QueryCodeRequest, QueryCodeResponse } from "./query";
import { getChecksums, getCode } from "./query.rpc.func";
export const useGetChecksums = buildUseVueQuery<QueryChecksumsRequest, QueryChecksumsResponse>({
  builderQueryFn: getChecksums,
  queryKeyPrefix: "ChecksumsQuery"
});
export const useGetCode = buildUseVueQuery<QueryCodeRequest, QueryCodeResponse>({
  builderQueryFn: getCode,
  queryKeyPrefix: "CodeQuery"
});