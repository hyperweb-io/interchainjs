import { AccountInfoRpcResponse, createAccountInfoResponse } from '../account/account-info-response';

export type AccountNotification = AccountInfoRpcResponse;

export function createAccountNotification(data: unknown): AccountNotification {
  return createAccountInfoResponse(data);
}
