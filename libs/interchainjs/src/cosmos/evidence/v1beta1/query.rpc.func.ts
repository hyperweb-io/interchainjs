import { buildQuery } from "../../../helper-func-types";
import { QueryEvidenceRequest, QueryEvidenceResponse, QueryAllEvidenceRequest, QueryAllEvidenceResponse } from "./query";
/* Evidence queries evidence based on evidence hash. */
export const getEvidence = buildQuery<QueryEvidenceRequest, QueryEvidenceResponse>({
  encode: QueryEvidenceRequest.encode,
  decode: QueryEvidenceResponse.decode,
  service: "cosmos.evidence.v1beta1.Query",
  method: "Evidence",
  deps: [QueryEvidenceRequest, QueryEvidenceResponse]
});
/* AllEvidence queries all evidence. */
export const getAllEvidence = buildQuery<QueryAllEvidenceRequest, QueryAllEvidenceResponse>({
  encode: QueryAllEvidenceRequest.encode,
  decode: QueryAllEvidenceResponse.decode,
  service: "cosmos.evidence.v1beta1.Query",
  method: "AllEvidence",
  deps: [QueryAllEvidenceRequest, QueryAllEvidenceResponse]
});