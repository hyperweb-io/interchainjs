import { buildUseQuery } from "../../../react-query";
import { FileDescriptorsRequest, FileDescriptorsResponse } from "./reflection";
import { getFileDescriptors } from "./reflection.rpc.func";
/**
 * FileDescriptors queries all the file descriptors in the app in order
 * to enable easier generation of dynamic clients.
 * @name useGetFileDescriptors
 * @package cosmos.reflection.v1
 * @see proto service: cosmos.reflection.v1.FileDescriptors
 */
export const useGetFileDescriptors = buildUseQuery<FileDescriptorsRequest, FileDescriptorsResponse>({
  builderQueryFn: getFileDescriptors,
  queryKeyPrefix: "FileDescriptorsQuery"
});