export interface TxRaw {
  bodyBytes: Uint8Array;
  authInfoBytes: Uint8Array;
  signatures: Uint8Array[];
}

export interface SignDoc {
  bodyBytes: Uint8Array;
  authInfoBytes: Uint8Array;
  chainId: string;
  accountNumber: bigint;
}

export interface Coin {
  denom: string;
  amount: string;
}

export interface StdFee {
  amount: Coin[];
  gas: string;
  granter?: string;
  payer?: string;
}

export interface AminoMessage {
  type: string;
  value: any;
}

export interface StdSignDoc {
  chain_id: string;
  account_number: string;
  sequence: string;
  fee: StdFee;
  msgs: AminoMessage[];
  memo: string;
}

export type TypeName = string;