import { DeliverTxResponse } from '@interchainjs/types';

export function isDeliverTxFailure(resp: DeliverTxResponse) {
  return resp.code !== 0;
}

export function isDeliverTxSuccess(resp: DeliverTxResponse) {
  return !isDeliverTxFailure(resp);
}

export function assertIsDeliverTxSuccess(resp: DeliverTxResponse) {
  if (isDeliverTxFailure(resp)) {
    throw new Error(
      `Error when broadcasting tx ${resp.transactionHash} at height ${resp.height}. Code: ${resp.code}; Raw log: ${resp.rawLog}`
    );
  }
}

export function assertIsDeliverTxFailure(resp: DeliverTxResponse) {
  if (isDeliverTxSuccess(resp)) {
    throw new Error(
      `Transaction ${resp.transactionHash} did not fail at height ${resp.height}. Code: ${resp.code}; Raw log: ${resp.rawLog}`
    );
  }
}