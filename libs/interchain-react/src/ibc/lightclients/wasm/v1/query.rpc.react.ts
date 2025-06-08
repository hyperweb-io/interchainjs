import { buildUseQuery } from "../../../../react-query";
import { QueryChecksumsRequest, QueryChecksumsResponse, QueryCodeRequest, QueryCodeResponse } from "./query";
import { getChecksums, getCode } from "./query.rpc.func";
/**
 * Get all Wasm checksums
 * @name useGetChecksums
 * @package ibc.lightclients.wasm.v1
 * @see proto service: ibc.lightclients.wasm.v1.Checksums
 */
export const useGetChecksums = buildUseQuery<QueryChecksumsRequest, QueryChecksumsResponse>({
  builderQueryFn: getChecksums,
  queryKeyPrefix: "ChecksumsQuery"
});
/**
 * Get Wasm code for given checksum
 * @name useGetCode
 * @package ibc.lightclients.wasm.v1
 * @see proto service: ibc.lightclients.wasm.v1.Code
 */
export const useGetCode = buildUseQuery<QueryCodeRequest, QueryCodeResponse>({
  builderQueryFn: getCode,
  queryKeyPrefix: "CodeQuery"
});