import { Auth, IDoc, IWallet } from "@uni-sign/types";
import { OfflineAminoSigner, OfflineDirectSigner } from "./types/wallet";
import { Key } from "@uni-sign/utils";

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
  chainId: string
): IWallet.CosmosAminoWallet {
  const wallet: IWallet.CosmosAminoWallet = {
    getAccount: async () => {
      const [account, ..._] = await offlineSigner.getAccounts();
      return {
        algo: account.algo,
        publicKey: Key.from(account.pubkey),
        getAddress(_chainId?: string) {
          if (_chainId === chainId) {
            return account.address;
          }
          throw new Error(`Cannot get address of chain ${_chainId}`);
        },
      };
    },
    sign: async (doc: IDoc.CosmosAminoSignDoc) => {
      const [account, ..._] = await offlineSigner.getAccounts();
      const { signature, signDoc } = await offlineSigner.signAmino(
        account.address,
        doc
      );
      return {
        signature: Key.fromBase64(signature.signature),
        signDoc: signDoc as any,
      };
    },
  };
  return wallet;
}

export function toDirectWallet(
  offlineSigner: OfflineDirectSigner,
  chainId: string
): IWallet.CosmosDirectWallet {
  const wallet: IWallet.CosmosDirectWallet = {
    getAccount: async () => {
      const [account, ..._] = await offlineSigner.getAccounts();
      return {
        algo: account.algo,
        publicKey: Key.from(account.pubkey),
        getAddress(_chainId?: string) {
          if (_chainId === chainId) {
            return account.address;
          }
          throw new Error(`Cannot get address of chain ${_chainId}`);
        },
      };
    },
    sign: async (doc: IDoc.CosmosDirectSignDoc) => {
      const [account, ..._] = await offlineSigner.getAccounts();
      const { signature, signDoc } = await offlineSigner.signDirect(
        account.address,
        doc
      );
      return {
        signature: Key.fromBase64(signature.signature),
        signDoc: signDoc as any,
      };
    },
  };
  return wallet;
}
