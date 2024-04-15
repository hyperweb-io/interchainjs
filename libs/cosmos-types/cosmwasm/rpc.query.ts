import { Rpc } from "../helpers";
export const createRPCQueryClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => {
  return {
    cosmwasm: {
      wasm: {
        v1: (await import("./wasm/v1/query.rpc.Query")).createClientImpl(rpc)
      }
    }
  };
};