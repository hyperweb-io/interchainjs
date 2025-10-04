import { AccountInfoResponse, AccountInfoCodec } from '../account/account-info-response';

export interface ProgramNotification {
  readonly context: {
    readonly slot: number;
  };
  readonly value: {
    readonly account: AccountInfoResponse;
    readonly pubkey: string;
  };
}

export function createProgramNotification(data: unknown): ProgramNotification {
  const raw = data as any;

  if (!raw || typeof raw !== 'object') {
    throw new Error('Invalid program notification payload');
  }

  const slot = Number(raw?.context?.slot ?? 0);
  if (Number.isNaN(slot)) {
    throw new Error('Program notification missing slot');
  }

  const account = AccountInfoCodec.create(raw?.value?.account);
  const pubkey = String(raw?.value?.pubkey ?? '');
  if (!pubkey) {
    throw new Error('Program notification missing pubkey');
  }

  return {
    context: { slot },
    value: {
      account,
      pubkey
    }
  };
}
