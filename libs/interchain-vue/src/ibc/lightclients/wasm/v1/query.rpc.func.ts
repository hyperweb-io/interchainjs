import { buildQuery } from "../../../../helper-func-types";
import { QueryChecksumsRequest, QueryChecksumsResponse, QueryCodeRequest, QueryCodeResponse } from "./query";
export const getChecksums = buildQuery<QueryChecksumsRequest, QueryChecksumsResponse>({
  encode: QueryChecksumsRequest.encode,
  decode: QueryChecksumsResponse.decode,
  service: "ibc.lightclients.wasm.v1.Query",
  method: "Checksums"
});
export const getCode = buildQuery<QueryCodeRequest, QueryCodeResponse>({
  encode: QueryCodeRequest.encode,
  decode: QueryCodeResponse.decode,
  service: "ibc.lightclients.wasm.v1.Query",
  method: "Code"
});