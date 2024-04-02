import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmwasm: {
    wasm: {
      v1: new (await import("./wasm/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});