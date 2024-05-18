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

/**
 * Fee includes the amount of coins paid in fees and the maximum
 * gas to be used by the transaction. The ratio yields an effective "gasprice",
 * which must be above some miminum to be accepted into the mempool.
 */
export interface Fee {
  /** amount is the amount of coins to be paid as a fee */
  amount: Coin[];
  /**
   * gas_limit is the maximum gas that can be used in transaction processing
   * before an out of gas error occurs
   */
  gasLimit: bigint;
  /**
   * if unset, the first signer is responsible for paying the fees. If set, the specified account must pay the fees.
   * the payer must be a tx signer (and thus have signed this field in AuthInfo).
   * setting this field does *not* change the ordering of required signers for the transaction.
   */
  payer: string;
  /**
   * if set, the fee payer (either the first signer or the value of the payer field) requests that a fee grant be used
   * to pay fees instead of the fee payer's own balance. If an appropriate fee grant does not exist or the chain does
   * not support fee grants, this will fail
   */
  granter: string;
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
