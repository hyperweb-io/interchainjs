import { buildUseQuery } from "../../../react-query";
import { QueryEvidenceRequest, QueryEvidenceResponse, QueryAllEvidenceRequest, QueryAllEvidenceResponse } from "./query";
import { getEvidence, getAllEvidence } from "./query.rpc.func";
/* Evidence queries evidence based on evidence hash. */
export const useGetEvidence = buildUseQuery<QueryEvidenceRequest, QueryEvidenceResponse>({
  builderQueryFn: getEvidence,
  queryKeyPrefix: "EvidenceQuery"
});
/* AllEvidence queries all evidence. */
export const useGetAllEvidence = buildUseQuery<QueryAllEvidenceRequest, QueryAllEvidenceResponse>({
  builderQueryFn: getAllEvidence,
  queryKeyPrefix: "AllEvidenceQuery"
});