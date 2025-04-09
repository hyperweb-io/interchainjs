import { buildUseVueQuery } from "../../../../vue-query";
import { GetAuthnDescriptorRequest, GetAuthnDescriptorResponse, GetChainDescriptorRequest, GetChainDescriptorResponse, GetCodecDescriptorRequest, GetCodecDescriptorResponse, GetConfigurationDescriptorRequest, GetConfigurationDescriptorResponse, GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorResponse, GetTxDescriptorRequest, GetTxDescriptorResponse } from "./reflection";
import { getGetAuthnDescriptor, getGetChainDescriptor, getGetCodecDescriptor, getGetConfigurationDescriptor, getGetQueryServicesDescriptor, getGetTxDescriptor } from "./reflection.rpc.func";
export const useGetGetAuthnDescriptor = buildUseVueQuery<GetAuthnDescriptorRequest, GetAuthnDescriptorResponse>({
  builderQueryFn: getGetAuthnDescriptor,
  queryKeyPrefix: "GetAuthnDescriptorQuery"
});
export const useGetGetChainDescriptor = buildUseVueQuery<GetChainDescriptorRequest, GetChainDescriptorResponse>({
  builderQueryFn: getGetChainDescriptor,
  queryKeyPrefix: "GetChainDescriptorQuery"
});
export const useGetGetCodecDescriptor = buildUseVueQuery<GetCodecDescriptorRequest, GetCodecDescriptorResponse>({
  builderQueryFn: getGetCodecDescriptor,
  queryKeyPrefix: "GetCodecDescriptorQuery"
});
export const useGetGetConfigurationDescriptor = buildUseVueQuery<GetConfigurationDescriptorRequest, GetConfigurationDescriptorResponse>({
  builderQueryFn: getGetConfigurationDescriptor,
  queryKeyPrefix: "GetConfigurationDescriptorQuery"
});
export const useGetGetQueryServicesDescriptor = buildUseVueQuery<GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorResponse>({
  builderQueryFn: getGetQueryServicesDescriptor,
  queryKeyPrefix: "GetQueryServicesDescriptorQuery"
});
export const useGetGetTxDescriptor = buildUseVueQuery<GetTxDescriptorRequest, GetTxDescriptorResponse>({
  builderQueryFn: getGetTxDescriptor,
  queryKeyPrefix: "GetTxDescriptorQuery"
});