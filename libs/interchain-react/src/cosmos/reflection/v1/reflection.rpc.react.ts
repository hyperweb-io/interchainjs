import { buildUseQuery } from "../../../react-query";
import { FileDescriptorsRequest, FileDescriptorsResponse } from "./reflection";
import { createGetFileDescriptors } from "./reflection.rpc.func";
export const useGetFileDescriptors = buildUseQuery<FileDescriptorsRequest, FileDescriptorsResponse>({
  builderQueryFn: createGetFileDescriptors,
  queryKeyPrefix: "FileDescriptorsQuery"
});