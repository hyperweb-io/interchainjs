import { buildQuery } from "../../../helper-func-types";
import { FileDescriptorsRequest, FileDescriptorsResponse } from "./reflection";
export const getFileDescriptors = buildQuery<FileDescriptorsRequest, FileDescriptorsResponse>({
  encode: FileDescriptorsRequest.encode,
  decode: FileDescriptorsResponse.decode,
  service: "cosmos.reflection.v1.ReflectionService",
  method: "FileDescriptors",
  deps: [FileDescriptorsRequest, FileDescriptorsResponse]
});