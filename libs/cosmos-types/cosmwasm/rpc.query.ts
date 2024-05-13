import { Rpc } from "../helpers";
export const createRPCQueryClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => {
  return {
    cosmos: {
      auth: {
        v1beta1: (await import("../cosmos/auth/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      bank: {
        v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      gov: {
        v1beta1: (await import("../cosmos/gov/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      staking: {
        v1beta1: (await import("../cosmos/staking/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      }
    },
    cosmwasm: {
      wasm: {
        v1: (await import("./wasm/v1/query.rpc.Query")).createClientImpl(rpc)
      }
    }
  };
};