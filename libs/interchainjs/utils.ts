import { defaultSignerConfig } from "@interchainjs/cosmos/defaults";
import {
  CosmosAminoDoc,
  CosmosAminoWallet,
  CosmosDirectDoc,
  CosmosDirectWallet,
} from "@interchainjs/cosmos/types";
import { Auth } from "@interchainjs/types";
import { Key } from "@interchainjs/utils";

import { OfflineAminoSigner, OfflineDirectSigner } from "./types/wallet";

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

export function toAminoWallet(
  offlineSigner: OfflineAminoSigner,
  prefix: string
): CosmosAminoWallet {
  const wallet: CosmosAminoWallet = {
    getAccount: async () => {
      const accounts = await offlineSigner.getAccounts();
      const account = accounts.find((account) =>
        account.address.startsWith(prefix)
      );
      const publicKey = Key.from(account.pubkey);
      const address = defaultSignerConfig.publicKey.hash(publicKey);
      return {
        algo: account.algo,
        publicKey,
        getAddress(_prefix?: string) {
          return _prefix ? address.toBech32(_prefix) : address;
        },
      };
    },
    sign: async (doc: CosmosAminoDoc) => {
      const [account, ..._] = await offlineSigner.getAccounts();
      const { signature, signed } = await offlineSigner.signAmino(
        account.address,
        doc
      );
      return {
        signature: Key.fromBase64(signature.signature),
        signDoc: signed as any,
      };
    },
  };
  return wallet;
}

export function toDirectWallet(
  offlineSigner: OfflineDirectSigner,
  prefix: string
): CosmosDirectWallet {
  const wallet: CosmosDirectWallet = {
    getAccount: async () => {
      const accounts = await offlineSigner.getAccounts();
      const account = accounts.find((account) =>
        account.address.startsWith(prefix)
      );
      const publicKey = Key.from(account.pubkey);
      const address = defaultSignerConfig.publicKey.hash(publicKey);
      return {
        algo: account.algo,
        publicKey,
        getAddress(_prefix?: string) {
          return _prefix ? address.toBech32(_prefix) : address;
        },
      };
    },
    sign: async (doc: CosmosDirectDoc) => {
      const [account, ..._] = await offlineSigner.getAccounts();
      const { signature, signed } = await offlineSigner.signDirect(
        account.address,
        doc
      );
      return {
        signature: Key.fromBase64(signature.signature),
        signDoc: signed as any,
      };
    },
  };
  return wallet;
}
