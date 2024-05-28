import { defaultHdPaths } from "@interchainjs/auth/defaults";
import { Secp256k1Auth } from "@interchainjs/auth/secp256k1";
import { defaultSignerConfig } from "@interchainjs/cosmos/defaults";
import { CosmosAccount, CosmosBaseWallet } from "@interchainjs/cosmos/types";
import { encodeStdSignDoc } from "@interchainjs/cosmos/utils";
import { SignDoc } from "@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx";
import { Auth, StdSignDoc } from "@interchainjs/types";

import {
  Algo,
  AminoSignResponse,
  Bech32Address,
  DirectSignResponse,
  OfflineAminoSigner,
  OfflineDirectSigner,
  WalletOptions,
} from "../types/wallet";

const isPublicKeyCompressed = defaultSignerConfig.publicKey.isCompressed;
const toAddress = defaultSignerConfig.publicKey.hash;
const messageHash = defaultSignerConfig.message.hash;
const defaultHdPath = defaultHdPaths.find(
  ({ network, algo }) => network === "cosmos" && algo === "secp256k1"
)!.path;

export class Secp256k1Wallet
  implements CosmosBaseWallet, OfflineAminoSigner, OfflineDirectSigner
{
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

  async getAccountAuths(): Promise<
    {
      auth: Auth;
      account: CosmosAccount;
    }[]
  > {
    const accounts = await this.getAccounts();

    return accounts.map((account, i) => {
      const auth = this.auths[i];
      return { auth, account };
    });
  }

  async getAccounts(): Promise<CosmosAccount[]> {
    const accounts: CosmosAccount[] = [];
    this.auths.forEach((auth, i) => {
      const address = this.addrs[i];
      const account = {
        toAccountData() {
          return {
            address: address,
            algo: auth.algo as Algo,
            pubkey: auth.getPublicKey(isPublicKeyCompressed).value,
          };
        },
        getAddress() {
          return address;
        },
        algo: auth.algo as Algo,
        publicKey: auth.getPublicKey(isPublicKeyCompressed),
      };

      accounts.push(account);
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

  async signDirect(
    signerAddress: string,
    signDoc: SignDoc
  ): Promise<DirectSignResponse> {
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

  async signAmino(
    signerAddress: string,
    signDoc: StdSignDoc
  ): Promise<AminoSignResponse> {
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
