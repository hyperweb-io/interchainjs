export interface VoteNotification {
  readonly hash: string;
  readonly slots: readonly number[];
  readonly timestamp: number | null;
  readonly signature: string;
  readonly votePubkey: string;
}

export function createVoteNotification(data: unknown): VoteNotification {
  const raw = data as Record<string, any> | null;

  if (!raw || typeof raw !== 'object') {
    throw new Error('Invalid vote notification payload');
  }

  const hash = raw.hash ? String(raw.hash) : '';
  if (!hash) {
    throw new Error('Vote notification missing hash');
  }

  const signature = raw.signature ? String(raw.signature) : '';
  if (!signature) {
    throw new Error('Vote notification missing signature');
  }

  const votePubkey = raw.votePubkey ? String(raw.votePubkey) : '';
  if (!votePubkey) {
    throw new Error('Vote notification missing votePubkey');
  }

  const slotsArray = Array.isArray(raw.slots) ? raw.slots.map((slot) => Number(slot)).filter(Number.isFinite) : [];

  const timestampValue = raw.timestamp;
  const timestampRaw = timestampValue === null || timestampValue === undefined ? null : Number(timestampValue);
  const timestamp = timestampRaw === null || Number.isFinite(timestampRaw) ? timestampRaw : null;

  return {
    hash,
    signature,
    votePubkey,
    slots: slotsArray,
    timestamp
  };
}
