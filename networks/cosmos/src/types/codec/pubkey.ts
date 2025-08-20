import { fromBase64 } from '@interchainjs/encoding';

export interface DecodedPubkey {
  readonly type: string;
  readonly value: Uint8Array;
}

export function decodePubkey(data: any): DecodedPubkey | null {
  if (!data) return null;

  return {
    type: data.type || '',
    value: fromBase64(data.value || '')
  };
}