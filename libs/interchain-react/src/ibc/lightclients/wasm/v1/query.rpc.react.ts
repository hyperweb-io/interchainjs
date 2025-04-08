import { buildUseQuery } from "../../../../react-query";
import { QueryChecksumsRequest, QueryChecksumsResponse, QueryCodeRequest, QueryCodeResponse } from "./query";
import { getChecksums, getCode } from "./query.rpc.func";
export const useGetChecksums = buildUseQuery<QueryChecksumsRequest, QueryChecksumsResponse>({
  builderQueryFn: getChecksums,
  queryKeyPrefix: "ChecksumsQuery"
});
export const useGetCode = buildUseQuery<QueryCodeRequest, QueryCodeResponse>({
  builderQueryFn: getCode,
  queryKeyPrefix: "CodeQuery"
});