import { Auth, StdSignDoc } from "@interchainjs/types";
import { Secp256k1Auth } from "@interchainjs/auth/secp256k1";
import { SignDoc } from "@interchainjs/cosmos/types";
import { encodeStdSignDoc } from "@interchainjs/cosmos/utils";

import {
  AccountData,
  AminoSignResponse,
  DirectSignResponse,
  OfflineAminoSigner,
  OfflineDirectSigner,
  Wallet,
  WalletOptions,
  Bech32Address,
  Algo,
} from "../types/wallet";
import { defaultSignerConfig } from "@interchainjs/cosmos/defaults";
import { defaultHdPaths } from "@interchainjs/auth/defaults";

const isPublicKeyCompressed = defaultSignerConfig.publicKey.isCompressed;
const toAddress = defaultSignerConfig.publicKey.hash;
const messageHash = defaultSignerConfig.message.hash;
const defaultHdPath = defaultHdPaths.find(
  ({ network, algo }) => network === "cosmos" && algo === "secp256k1"
)!.path;

export class Secp256k1Wallet implements Wallet {
  readonly auths: Auth[] = [];
  readonly addrs: Bech32Address[] = [];

  constructor(auths: Auth[], prefix: string = "cosmos") {
    this.auths = auths;
    this.auths.forEach((auth) => {
      this.addrs.push(
        toAddress(auth.getPublicKey(isPublicKeyCompressed)).toBech32(prefix)
      );
    });
  }

  static fromMnemonic(mnemonic: string, options?: WalletOptions) {
    const hdPaths = options?.hdPaths || [defaultHdPath];
    const auths: Auth[] = [];
    hdPaths.forEach((hdPath) => {
      auths.push(
        Secp256k1Auth.fromMnemonic(mnemonic, hdPath, {
          bip39Password: options?.bip39Password,
        })
      );
    });
    return new Secp256k1Wallet(auths, options?.prefix);
  }

  getAccounts(): AccountData[] {
    const accounts: AccountData[] = [];
    this.auths.forEach((auth, i) => {
      accounts.push({
        address: this.addrs[i],
        algo: auth.algo as Algo,
        pubkey: auth.getPublicKey(isPublicKeyCompressed).value,
      });
    });
    return accounts;
  }

  private getAuthFromBech32Addr(address: string) {
    const id = this.addrs.findIndex((addr) => addr === address);
    if (id === -1) {
      throw new Error("No such signerAddress been authed.");
    }
    return this.auths[id];
  }

  signDirect(signerAddress: string, signDoc: SignDoc): DirectSignResponse {
    const auth = this.getAuthFromBech32Addr(signerAddress);
    const doc = SignDoc.fromPartial(signDoc);
    const signature = defaultSignerConfig.signature.toCompact(
      auth.sign(messageHash(SignDoc.encode(doc).finish())),
      auth.algo
    );
    return {
      signed: doc,
      signature: {
        pub_key: {
          type: "tendermint/PubKeySecp256k1",
          value: {
            key: auth.getPublicKey(isPublicKeyCompressed),
          },
        },
        signature: signature.toBase64(),
      },
    };
  }

  signAmino(signerAddress: string, signDoc: StdSignDoc): AminoSignResponse {
    const auth = this.getAuthFromBech32Addr(signerAddress);
    const signature = defaultSignerConfig.signature.toCompact(
      auth.sign(messageHash(encodeStdSignDoc(signDoc))),
      auth.algo
    );
    return {
      signed: signDoc,
      signature: {
        pub_key: {
          type: "tendermint/PubKeySecp256k1",
          value: {
            key: auth.getPublicKey(isPublicKeyCompressed),
          },
        },
        signature: signature.toBase64(),
      },
    };
  }

  toOfflineDirectSigner(): OfflineDirectSigner {
    return {
      getAccounts: async () => this.getAccounts(),
      signDirect: async (signerAddress: string, signDoc: SignDoc) =>
        this.signDirect(signerAddress, signDoc),
    };
  }

  toOfflineAminoSigner(): OfflineAminoSigner {
    return {
      getAccounts: async () => this.getAccounts(),
      signAmino: async (signerAddress: string, signDoc: StdSignDoc) =>
        this.signAmino(signerAddress, signDoc),
    };
  }
}
