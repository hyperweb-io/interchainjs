import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { FileDescriptorsRequest, FileDescriptorsResponse } from "./reflection";
export const createGetFileDescriptors = (clientResolver?: RpcResolver) => buildQuery<FileDescriptorsRequest, FileDescriptorsResponse>({
  encode: FileDescriptorsRequest.encode,
  decode: FileDescriptorsResponse.decode,
  service: "cosmos.reflection.v1.ReflectionService",
  method: "FileDescriptors",
  clientResolver,
  deps: [FileDescriptorsRequest, FileDescriptorsResponse]
});
export const useGetFileDescriptors = buildUseQuery<FileDescriptorsRequest, FileDescriptorsResponse>({
  builderQueryFn: createGetFileDescriptors,
  queryKeyPrefix: "FileDescriptorsQuery"
});