import { buildQuery } from "../../../helper-func-types";
import { FileDescriptorsRequest, FileDescriptorsResponse } from "./reflection";
/* FileDescriptors queries all the file descriptors in the app in order
 to enable easier generation of dynamic clients. */
export const getFileDescriptors = buildQuery<FileDescriptorsRequest, FileDescriptorsResponse>({
  encode: FileDescriptorsRequest.encode,
  decode: FileDescriptorsResponse.decode,
  service: "cosmos.reflection.v1.ReflectionService",
  method: "FileDescriptors",
  deps: [FileDescriptorsRequest, FileDescriptorsResponse]
});