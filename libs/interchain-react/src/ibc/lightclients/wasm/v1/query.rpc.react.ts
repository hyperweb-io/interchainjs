import { buildUseQuery } from "../../../../react-query";
import { QueryChecksumsRequest, QueryChecksumsResponse, QueryCodeRequest, QueryCodeResponse } from "./query";
import { createGetChecksums, createGetCode } from "./query.rpc.func";
export const useGetChecksums = buildUseQuery<QueryChecksumsRequest, QueryChecksumsResponse>({
  builderQueryFn: createGetChecksums,
  queryKeyPrefix: "ChecksumsQuery"
});
export const useGetCode = buildUseQuery<QueryCodeRequest, QueryCodeResponse>({
  builderQueryFn: createGetCode,
  queryKeyPrefix: "CodeQuery"
});