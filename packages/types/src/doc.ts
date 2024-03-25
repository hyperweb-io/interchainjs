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

export interface Property {
  name: string;
  type: string;
}

export type Bytes = ArrayLike<number>;
export type BigNumberish = Bytes | bigint | string | number;
export type BytesLike = Bytes | string;

export interface Domain {
  name: string;
  version: string;
  chainId: BigNumberish;
  verifyingContract: string;
  salt: BytesLike;
}

export interface InjectiveDomain {
  name: string;
  version: string;
  chainId: string;
  salt: string;
  verifyingContract: string;
}

export interface InjectiveEip712Message {
  msgs: {
    type: string;
    value: Record<string, unknown>;
  }[];
  fee: {
    amount: {
      amount: string;
      denom: string;
    }[];
    gas: string;
    feePayer?: string;
  };
  account_number: string;
  chain_id: string;
  sequence: string;
  timeout_height: string;
  memo: string;
}

export type Eip712Types = Record<TypeName, Property[]>;

export interface Eip712Data<Domain, Message> {
  types: Eip712Types;
  primaryType: TypeName;
  domain: Domain;
  message: Message;
}
