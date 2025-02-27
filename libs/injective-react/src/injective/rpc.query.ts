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
      },
      tx: {
        v1beta1: (await import("../cosmos/tx/v1beta1/service.rpc.Service")).createClientImpl(rpc)
      }
    },
    injective: {
      auction: {
        v1beta1: (await import("./auction/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      exchange: {
        v1beta1: (await import("./exchange/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      insurance: {
        v1beta1: (await import("./insurance/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      ocr: {
        v1beta1: (await import("./ocr/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      oracle: {
        v1beta1: (await import("./oracle/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      peggy: {
        v1: (await import("./peggy/v1/query.rpc.Query")).createClientImpl(rpc)
      },
      permissions: {
        v1beta1: (await import("./permissions/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      tokenfactory: {
        v1beta1: (await import("./tokenfactory/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      wasmx: {
        v1: (await import("./wasmx/v1/query.rpc.Query")).createClientImpl(rpc)
      }
    }
  };
};