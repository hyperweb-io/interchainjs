

import { Auth } from "@interchainjs/types";


/**
 * An error when broadcasting the transaction. This contains the CheckTx errors
 * from the blockchain. Once a transaction is included in a block no BroadcastTxError
 * is thrown, even if the execution fails (DeliverTx errors).
 */
export class BroadcastTxError extends Error {
  public readonly code: number;
  public readonly codespace: string;
  public readonly log: string | undefined;

  public constructor(code: number, codespace: string, log: string | undefined) {
    super(
      `Broadcasting transaction failed with code ${code} (codespace: ${codespace}). Log: ${log}`
    );
    this.code = code;
    this.codespace = codespace;
    this.log = log;
  }
}

export class TimeoutError extends Error {
  public readonly txId: string;

  public constructor(message: string, txId: string) {
    super(message);
    this.txId = txId;
  }
}

export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const defaultAuth: Auth = {
  algo: "secp256k1",
  getPublicKey: (_isCompressed?: boolean) => {
    throw new Error("Not implemented yet");
  },
  sign: (_data: Uint8Array) => {
    throw new Error("Not implemented yet");
  },
};