import { Rpc } from "../helpers";
export const createRPCQueryClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => {
  return {
    cosmos: {
      auth: {
        v1beta1: (await import("./auth/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      tx: {
        v1beta1: (await import("./tx/v1beta1/service.rpc.Service")).createClientImpl(rpc)
      }
    }
  };
};