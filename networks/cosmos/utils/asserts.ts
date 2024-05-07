import { BroadcastResponse } from "../types";

export function isDeliverTxFailure(resp: BroadcastResponse) {
  return resp.deliver_tx?.code !== 0;
}

export function isDeliverTxSuccess(resp: BroadcastResponse) {
  return !isDeliverTxFailure(resp);
}

export function assertIsDeliverTxSuccess(resp: BroadcastResponse) {
  if (isDeliverTxFailure(resp)) {
    throw new Error(
      `Error when broadcasting tx ${resp.hash} at height ${resp.deliver_tx?.height}. Code: ${resp.deliver_tx?.code}; Raw log: ${resp.deliver_tx?.log}`
    );
  }
}

export function assertIsDeliverTxFailure(resp: BroadcastResponse) {
  if (isDeliverTxSuccess(resp)) {
    throw new Error(
      `Transaction ${resp.hash} did not fail at height ${resp.deliver_tx?.height}. Code: ${resp.deliver_tx?.code}; Raw log: ${resp.deliver_tx?.log}`
    );
  }
}
