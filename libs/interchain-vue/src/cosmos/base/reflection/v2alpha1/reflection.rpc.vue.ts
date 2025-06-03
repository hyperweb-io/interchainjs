import { buildUseVueQuery } from "../../../../vue-query";
import { GetAuthnDescriptorRequest, GetAuthnDescriptorResponse, GetChainDescriptorRequest, GetChainDescriptorResponse, GetCodecDescriptorRequest, GetCodecDescriptorResponse, GetConfigurationDescriptorRequest, GetConfigurationDescriptorResponse, GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorResponse, GetTxDescriptorRequest, GetTxDescriptorResponse } from "./reflection";
import { getGetAuthnDescriptor, getGetChainDescriptor, getGetCodecDescriptor, getGetConfigurationDescriptor, getGetQueryServicesDescriptor, getGetTxDescriptor } from "./reflection.rpc.func";
/* GetAuthnDescriptor returns information on how to authenticate transactions in the application
 NOTE: this RPC is still experimental and might be subject to breaking changes or removal in
 future releases of the cosmos-sdk. */
export const useGetGetAuthnDescriptor = buildUseVueQuery<GetAuthnDescriptorRequest, GetAuthnDescriptorResponse>({
  builderQueryFn: getGetAuthnDescriptor,
  queryKeyPrefix: "GetAuthnDescriptorQuery"
});
/* GetChainDescriptor returns the description of the chain */
export const useGetGetChainDescriptor = buildUseVueQuery<GetChainDescriptorRequest, GetChainDescriptorResponse>({
  builderQueryFn: getGetChainDescriptor,
  queryKeyPrefix: "GetChainDescriptorQuery"
});
/* GetCodecDescriptor returns the descriptor of the codec of the application */
export const useGetGetCodecDescriptor = buildUseVueQuery<GetCodecDescriptorRequest, GetCodecDescriptorResponse>({
  builderQueryFn: getGetCodecDescriptor,
  queryKeyPrefix: "GetCodecDescriptorQuery"
});
/* GetConfigurationDescriptor returns the descriptor for the sdk.Config of the application */
export const useGetGetConfigurationDescriptor = buildUseVueQuery<GetConfigurationDescriptorRequest, GetConfigurationDescriptorResponse>({
  builderQueryFn: getGetConfigurationDescriptor,
  queryKeyPrefix: "GetConfigurationDescriptorQuery"
});
/* GetQueryServicesDescriptor returns the available gRPC queryable services of the application */
export const useGetGetQueryServicesDescriptor = buildUseVueQuery<GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorResponse>({
  builderQueryFn: getGetQueryServicesDescriptor,
  queryKeyPrefix: "GetQueryServicesDescriptorQuery"
});
/* GetTxDescriptor returns information on the used transaction object and available msgs that can be used */
export const useGetGetTxDescriptor = buildUseVueQuery<GetTxDescriptorRequest, GetTxDescriptorResponse>({
  builderQueryFn: getGetTxDescriptor,
  queryKeyPrefix: "GetTxDescriptorQuery"
});