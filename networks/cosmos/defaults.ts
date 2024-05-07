import { bytes as assertBytes } from "@noble/hashes/_assert";
import { sha256 } from "@noble/hashes/sha256";
import {
  EncodedMessage,
  FeeOptions,
  Secp256k1PubKey,
  SignerOptions,
} from "./types";
import {
  SignerConfig,
  Signature,
  BroadcastOptions,
  IKey,
} from "@interchainjs/types";
import { ripemd160 } from "@noble/hashes/ripemd160";
import { Key } from "@interchainjs/utils";
import { secp256k1 } from "@noble/curves/secp256k1";
import { BaseAccount, ModuleAccount } from "./codegen/cosmos/auth/v1beta1/auth";
import {
  BaseVestingAccount,
  ContinuousVestingAccount,
  DelayedVestingAccount,
  PeriodicVestingAccount,
} from "./codegen/cosmos/vesting/v1beta1/vesting";
import { toDecoder } from "./utils";

export const defaultBroadcastOptions: BroadcastOptions = {
  checkTx: true,
  deliverTx: false,
};

export const defaultFeeOptions: FeeOptions = {
  multiplier: 1.6,
  gasPrice: "average",
};

export const defaultSignerConfig: SignerConfig = {
  publicKey: {
    isCompressed: true,
    hash: (publicKey: Key) => Key.from(ripemd160(sha256(publicKey.value))),
  },
  message: {
    hash: (message: Uint8Array) => {
      const hashed = sha256(message);
      assertBytes(hashed);
      return hashed;
    },
  },
  signature: {
    toCompact: (signature: Signature, algo: string) => {
      switch (algo) {
        case "secp256k1":
          const sig = new secp256k1.Signature(
            signature.r.toBigInt(),
            signature.s.toBigInt(),
            // @ts-ignore
            signature.recovery
          );
          return Key.from(sig.toCompactRawBytes());
        case "ed25519":
          throw new Error("Not implemented yet");
        default:
          throw new Error(`Unidentified algorithm: ${algo}`);
      }
    },
    fromCompact: (key: Key, algo: string) => {
      switch (algo) {
        case "secp256k1":
          const sig = secp256k1.Signature.fromCompact(key.toHex());
          return {
            r: Key.fromBigInt(sig.r),
            s: Key.fromBigInt(sig.s),
            recovery: sig.recovery,
          };
        case "ed25519":
          throw new Error("Not implemented yet");
        default:
          throw new Error(`Unidentified algorithm: ${algo}`);
      }
    },
  },
};

export const defaultPublicKeyEncoder = (key: IKey): EncodedMessage => {
  return {
    typeUrl: Secp256k1PubKey.typeUrl,
    value: Secp256k1PubKey.encode(
      Secp256k1PubKey.fromPartial({ key: key.value })
    ).finish(),
  };
};

const accountCodecs = [
  BaseAccount,
  ModuleAccount,
  BaseVestingAccount,
  ContinuousVestingAccount,
  DelayedVestingAccount,
  PeriodicVestingAccount,
];

export const defaultAccountParser = (
  encodedAccount: EncodedMessage
): BaseAccount => {
  const codec = accountCodecs.find(
    (codec) => codec.typeUrl === encodedAccount.typeUrl
  );

  if (!codec) {
    throw new Error(
      `No corresponding account found for account type ${encodedAccount.typeUrl}.`
    );
  }
  const decoder = toDecoder(codec);
  const account = decoder.fromPartial(decoder.decode(encodedAccount.value));
  const baseAccount =
    (account as any).baseVestingAccount?.baseAccount ||
    (account as any).baseAccount ||
    account;
  return baseAccount;
};

export const defaultSignerOptions: Required<SignerOptions> = {
  ...defaultSignerConfig,
  parseAccount: defaultAccountParser,
  encodePublicKey: defaultPublicKeyEncoder,
  prefix: undefined,
};
