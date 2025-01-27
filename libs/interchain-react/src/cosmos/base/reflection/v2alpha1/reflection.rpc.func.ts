import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { GetAuthnDescriptorRequest, GetAuthnDescriptorResponse, GetChainDescriptorRequest, GetChainDescriptorResponse, GetCodecDescriptorRequest, GetCodecDescriptorResponse, GetConfigurationDescriptorRequest, GetConfigurationDescriptorResponse, GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorResponse, GetTxDescriptorRequest, GetTxDescriptorResponse } from "./reflection";
export const createGetGetAuthnDescriptor = (clientResolver?: RpcResolver) => buildQuery<GetAuthnDescriptorRequest, GetAuthnDescriptorResponse>({
  encode: GetAuthnDescriptorRequest.encode,
  decode: GetAuthnDescriptorResponse.decode,
  service: "cosmos.base.reflection.v2alpha1.ReflectionService",
  method: "GetAuthnDescriptor",
  clientResolver,
  deps: [GetAuthnDescriptorRequest, GetAuthnDescriptorResponse]
});
export const createGetGetChainDescriptor = (clientResolver?: RpcResolver) => buildQuery<GetChainDescriptorRequest, GetChainDescriptorResponse>({
  encode: GetChainDescriptorRequest.encode,
  decode: GetChainDescriptorResponse.decode,
  service: "cosmos.base.reflection.v2alpha1.ReflectionService",
  method: "GetChainDescriptor",
  clientResolver,
  deps: [GetChainDescriptorRequest, GetChainDescriptorResponse]
});
export const createGetGetCodecDescriptor = (clientResolver?: RpcResolver) => buildQuery<GetCodecDescriptorRequest, GetCodecDescriptorResponse>({
  encode: GetCodecDescriptorRequest.encode,
  decode: GetCodecDescriptorResponse.decode,
  service: "cosmos.base.reflection.v2alpha1.ReflectionService",
  method: "GetCodecDescriptor",
  clientResolver,
  deps: [GetCodecDescriptorRequest, GetCodecDescriptorResponse]
});
export const createGetGetConfigurationDescriptor = (clientResolver?: RpcResolver) => buildQuery<GetConfigurationDescriptorRequest, GetConfigurationDescriptorResponse>({
  encode: GetConfigurationDescriptorRequest.encode,
  decode: GetConfigurationDescriptorResponse.decode,
  service: "cosmos.base.reflection.v2alpha1.ReflectionService",
  method: "GetConfigurationDescriptor",
  clientResolver,
  deps: [GetConfigurationDescriptorRequest, GetConfigurationDescriptorResponse]
});
export const createGetGetQueryServicesDescriptor = (clientResolver?: RpcResolver) => buildQuery<GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorResponse>({
  encode: GetQueryServicesDescriptorRequest.encode,
  decode: GetQueryServicesDescriptorResponse.decode,
  service: "cosmos.base.reflection.v2alpha1.ReflectionService",
  method: "GetQueryServicesDescriptor",
  clientResolver,
  deps: [GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorResponse]
});
export const createGetGetTxDescriptor = (clientResolver?: RpcResolver) => buildQuery<GetTxDescriptorRequest, GetTxDescriptorResponse>({
  encode: GetTxDescriptorRequest.encode,
  decode: GetTxDescriptorResponse.decode,
  service: "cosmos.base.reflection.v2alpha1.ReflectionService",
  method: "GetTxDescriptor",
  clientResolver,
  deps: [GetTxDescriptorRequest, GetTxDescriptorResponse]
});