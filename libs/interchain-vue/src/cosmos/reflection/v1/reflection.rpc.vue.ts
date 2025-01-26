import { buildUseVueQuery } from "../../../vue-query";
import { FileDescriptorsRequest, FileDescriptorsResponse } from "./reflection";
import { createGetFileDescriptors } from "./reflection.rpc.func.ts";
export const useGetFileDescriptors = buildUseVueQuery<FileDescriptorsRequest, FileDescriptorsResponse>({
  builderQueryFn: createGetFileDescriptors,
  queryKeyPrefix: "FileDescriptorsQuery"
});