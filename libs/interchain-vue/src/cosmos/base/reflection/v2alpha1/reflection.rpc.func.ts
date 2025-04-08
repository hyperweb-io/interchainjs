import { buildQuery } from "../../../../helper-func-types";
import { GetAuthnDescriptorRequest, GetAuthnDescriptorResponse, GetChainDescriptorRequest, GetChainDescriptorResponse, GetCodecDescriptorRequest, GetCodecDescriptorResponse, GetConfigurationDescriptorRequest, GetConfigurationDescriptorResponse, GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorResponse, GetTxDescriptorRequest, GetTxDescriptorResponse } from "./reflection";
export const getGetAuthnDescriptor = buildQuery<GetAuthnDescriptorRequest, GetAuthnDescriptorResponse>({
  encode: GetAuthnDescriptorRequest.encode,
  decode: GetAuthnDescriptorResponse.decode,
  service: "cosmos.base.reflection.v2alpha1.ReflectionService",
  method: "GetAuthnDescriptor"
});
export const getGetChainDescriptor = buildQuery<GetChainDescriptorRequest, GetChainDescriptorResponse>({
  encode: GetChainDescriptorRequest.encode,
  decode: GetChainDescriptorResponse.decode,
  service: "cosmos.base.reflection.v2alpha1.ReflectionService",
  method: "GetChainDescriptor"
});
export const getGetCodecDescriptor = buildQuery<GetCodecDescriptorRequest, GetCodecDescriptorResponse>({
  encode: GetCodecDescriptorRequest.encode,
  decode: GetCodecDescriptorResponse.decode,
  service: "cosmos.base.reflection.v2alpha1.ReflectionService",
  method: "GetCodecDescriptor"
});
export const getGetConfigurationDescriptor = buildQuery<GetConfigurationDescriptorRequest, GetConfigurationDescriptorResponse>({
  encode: GetConfigurationDescriptorRequest.encode,
  decode: GetConfigurationDescriptorResponse.decode,
  service: "cosmos.base.reflection.v2alpha1.ReflectionService",
  method: "GetConfigurationDescriptor"
});
export const getGetQueryServicesDescriptor = buildQuery<GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorResponse>({
  encode: GetQueryServicesDescriptorRequest.encode,
  decode: GetQueryServicesDescriptorResponse.decode,
  service: "cosmos.base.reflection.v2alpha1.ReflectionService",
  method: "GetQueryServicesDescriptor"
});
export const getGetTxDescriptor = buildQuery<GetTxDescriptorRequest, GetTxDescriptorResponse>({
  encode: GetTxDescriptorRequest.encode,
  decode: GetTxDescriptorResponse.decode,
  service: "cosmos.base.reflection.v2alpha1.ReflectionService",
  method: "GetTxDescriptor"
});