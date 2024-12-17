import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/tx.rpc.msg")).MsgClientImpl(rpc),
      v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    group: {
      v1: new (await import("../cosmos/group/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    vesting: {
      v1beta1: new (await import("../cosmos/vesting/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  },
  injective: {
    auction: {
      v1beta1: new (await import("./auction/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    exchange: {
      v1beta1: new (await import("./exchange/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    insurance: {
      v1beta1: new (await import("./insurance/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    ocr: {
      v1beta1: new (await import("./ocr/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    oracle: {
      v1beta1: new (await import("./oracle/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    peggy: {
      v1: new (await import("./peggy/v1/msgs.rpc.msg")).MsgClientImpl(rpc)
    },
    permissions: {
      v1beta1: new (await import("./permissions/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    tokenfactory: {
      v1beta1: new (await import("./tokenfactory/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    wasmx: {
      v1: new (await import("./wasmx/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});