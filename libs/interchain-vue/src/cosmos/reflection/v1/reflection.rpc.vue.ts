import { buildUseVueQuery } from "../../../vue-query";
import { FileDescriptorsRequest, FileDescriptorsResponse } from "./reflection";
import { createGetFileDescriptors } from "./reflection.rpc.func";
export const useGetFileDescriptors = buildUseVueQuery<FileDescriptorsRequest, FileDescriptorsResponse>({
  builderQueryFn: createGetFileDescriptors,
  queryKeyPrefix: "FileDescriptorsQuery"
});