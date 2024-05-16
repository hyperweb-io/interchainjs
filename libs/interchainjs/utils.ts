import { defaultSignerConfig } from "@interchainjs/cosmos/defaults";
import { EncodedMessage, Encoder, Message, SignMode,TxOptions } from "@interchainjs/cosmos/types";
import {
  AuthInfo,
  Fee,
  SignerInfo,
  TxBody,
} from "@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx";
import { Auth, ISignDoc, IWallet } from "@interchainjs/types";
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
): IWallet.CosmosAminoWallet {
  const wallet: IWallet.CosmosAminoWallet = {
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
    sign: async (doc: ISignDoc.CosmosAminoDoc) => {
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
): IWallet.CosmosDirectWallet {
  const wallet: IWallet.CosmosDirectWallet = {
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
    sign: async (doc: ISignDoc.CosmosDirectDoc) => {
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

export function constructTxBody(
  messages: Message[],
  getEncoder: (typeUrl: string) => Encoder,
  memo?: string,
  options?: TxOptions
) {
  if (options?.timeoutHeight?.type === "relative") {
    throw new Error(
      "timeoutHeight type in function `constructTxBody` shouldn't be `relative`. Please update it to `absolute` value before calling this function."
    );
  }
  const encoded = messages.map(({ typeUrl, value }) => {
    return {
      typeUrl,
      value: getEncoder(typeUrl).encode(value),
    };
  });
  const txBody = TxBody.fromPartial({
    messages: encoded,
    memo,
    timeoutHeight: options?.timeoutHeight?.value,
    extensionOptions: options?.extensionOptions,
    nonCriticalExtensionOptions: options?.nonCriticalExtensionOptions,
  });
  return {
    txBody,
    encode: () => TxBody.encode(txBody).finish(),
  };
}

export function constructSignerInfo(
  publicKey: EncodedMessage,
  sequence: bigint,
  signMode: SignMode
) {
  const signerInfo = SignerInfo.fromPartial({
    publicKey,
    sequence,
    modeInfo: { single: { mode: signMode } },
  });

  return {
    signerInfo,
    encode: () => SignerInfo.encode(signerInfo).finish(),
  };
}

export function constructAuthInfo(signerInfos: SignerInfo[], fee: Fee) {
  const authInfo = AuthInfo.fromPartial({ signerInfos, fee });
  return {
    authInfo,
    encode: () => AuthInfo.encode(authInfo).finish(),
  };
}