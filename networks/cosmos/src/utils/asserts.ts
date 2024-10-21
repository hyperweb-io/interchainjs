import { DeliverTxResponse } from '@interchainjs/types';
import { BroadcastResponse } from '../types';

export function isDeliverTxFailure(resp: BroadcastResponse | DeliverTxResponse) {
  if ('code' in resp) {
    return resp.code !== 0;
  } else {
    return resp.deliver_tx?.code !== 0;
  }
}

export function isDeliverTxSuccess(resp: BroadcastResponse | DeliverTxResponse) {
  return !isDeliverTxFailure(resp);
}

export function assertIsDeliverTxSuccess(resp: BroadcastResponse | DeliverTxResponse) {
  if (isDeliverTxFailure(resp)) {
    throw new Error(
      `Error when broadcasting tx ${'code' in resp ? resp.transactionHash : resp.hash} at height ${'code' in resp ? resp.height : resp.deliver_tx?.height}. Code: ${'code' in resp ? resp.code : resp.deliver_tx?.code}; Raw log: ${'code' in resp ? resp.rawLog : resp.deliver_tx?.rawLog}`
    );
  }
}

export function assertIsDeliverTxFailure(resp: BroadcastResponse | DeliverTxResponse) {
  if (isDeliverTxSuccess(resp)) {
    throw new Error(
      `Transaction ${'code' in resp ? resp.transactionHash : resp.hash} did not fail at height ${'code' in resp ? resp.height : resp.deliver_tx?.height}. Code: ${'code' in resp ? resp.code : resp.deliver_tx?.code}; Raw log: ${'code' in resp ? resp.rawLog : resp.deliver_tx?.rawLog}`
    );
  }
}