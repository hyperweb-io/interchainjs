import { buildUseVueQuery } from "../../../vue-query";
import { FileDescriptorsRequest, FileDescriptorsResponse } from "./reflection";
import { getFileDescriptors } from "./reflection.rpc.func";
export const useGetFileDescriptors = buildUseVueQuery<FileDescriptorsRequest, FileDescriptorsResponse>({
  builderQueryFn: getFileDescriptors,
  queryKeyPrefix: "FileDescriptorsQuery"
});