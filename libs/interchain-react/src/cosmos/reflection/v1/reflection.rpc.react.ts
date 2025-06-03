import { buildUseQuery } from "../../../react-query";
import { FileDescriptorsRequest, FileDescriptorsResponse } from "./reflection";
import { getFileDescriptors } from "./reflection.rpc.func";
/* FileDescriptors queries all the file descriptors in the app in order
 to enable easier generation of dynamic clients. */
export const useGetFileDescriptors = buildUseQuery<FileDescriptorsRequest, FileDescriptorsResponse>({
  builderQueryFn: getFileDescriptors,
  queryKeyPrefix: "FileDescriptorsQuery"
});