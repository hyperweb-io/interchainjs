import { buildUseQuery } from "../../../react-query";
import { FileDescriptorsRequest, FileDescriptorsResponse } from "./reflection";
import { getFileDescriptors } from "./reflection.rpc.func";
export const useGetFileDescriptors = buildUseQuery<FileDescriptorsRequest, FileDescriptorsResponse>({
  builderQueryFn: getFileDescriptors,
  queryKeyPrefix: "FileDescriptorsQuery"
});