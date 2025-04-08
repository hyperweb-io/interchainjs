import { buildUseVueQuery } from "../../../vue-query";
import { QueryEvidenceRequest, QueryEvidenceResponse, QueryAllEvidenceRequest, QueryAllEvidenceResponse } from "./query";
import { getEvidence, getAllEvidence } from "./query.rpc.func";
export const useGetEvidence = buildUseVueQuery<QueryEvidenceRequest, QueryEvidenceResponse>({
  builderQueryFn: getEvidence,
  queryKeyPrefix: "EvidenceQuery"
});
export const useGetAllEvidence = buildUseVueQuery<QueryAllEvidenceRequest, QueryAllEvidenceResponse>({
  builderQueryFn: getAllEvidence,
  queryKeyPrefix: "AllEvidenceQuery"
});