import { Secp256k1Auth } from '@interchainjs/auth/secp256k1';
import { AddrDerivation, Auth, SignerConfig } from '@interchainjs/types';

import { AminoDocSigner } from '../amino';
import { defaultSignerConfig } from '../defaults';
import { DirectDocSigner } from '../direct';
import {
  AccountData,
  CosmosAccount,
  CosmosAminoDoc,
  CosmosDirectDoc,
  ICosmosAccount,
  ICosmosWallet,
} from '../types';
import {
  AminoSignResponse,
  DirectSignResponse,
  OfflineAminoSigner,
  OfflineDirectSigner,
  WalletOptions,
} from '../types/wallet';

export class Secp256k1HDWallet
implements ICosmosWallet, OfflineAminoSigner, OfflineDirectSigner
{
  constructor(
    public accounts: ICosmosAccount[],
    public options: SignerConfig
  ) {
    this.options = { ...defaultSignerConfig, ...options };
  }

  static fromMnemonic(
    mnemonic: string,
    derivations: AddrDerivation[],
    options?: WalletOptions
  ) {
    const hdPaths = derivations.map((derivation) => derivation.hdPath);

    const auths: Auth[] = Secp256k1Auth.fromMnemonic(mnemonic, hdPaths, {
      bip39Password: options?.bip39Password,
    });

    const accounts = auths.map((auth, i) => {
      const derivation = derivations[i];
      return new CosmosAccount(derivation.prefix, auth);
    });

    return new Secp256k1HDWallet(accounts, options?.signerConfig);
  }

  async getAccounts(): Promise<AccountData[]> {
    return this.accounts.map((acct) => {
      return acct.toAccountData();
    });
  }

  private getAcctFromBech32Addr(address: string) {
    const id = this.accounts.findIndex((acct) => acct.address === address);
    if (id === -1) {
      throw new Error('No such signerAddress been authed.');
    }
    return this.accounts[id];
  }

  async signDirect(
    signerAddress: string,
    signDoc: CosmosDirectDoc
  ): Promise<DirectSignResponse> {
    const account = this.getAcctFromBech32Addr(signerAddress);

    const docSigner = new DirectDocSigner(account.auth, this.options);

    const resp = await docSigner.signDoc(signDoc);

    return {
      signed: signDoc,
      signature: {
        pub_key: {
          type: 'tendermint/PubKeySecp256k1',
          value: {
            key: account.publicKey.toBase64(),
          },
        },
        signature: resp.signature.toBase64(),
      },
    };
  }

  async signAmino(
    signerAddress: string,
    signDoc: CosmosAminoDoc
  ): Promise<AminoSignResponse> {
    const account = this.getAcctFromBech32Addr(signerAddress);

    const docSigner = new AminoDocSigner(account.auth, this.options);

    const resp = await docSigner.signDoc(signDoc);

    return {
      signed: signDoc,
      signature: {
        pub_key: {
          type: 'tendermint/PubKeySecp256k1',
          value: {
            key: account.publicKey.toBase64(),
          },
        },
        signature: resp.signature.toBase64(),
      },
    };
  }

  toOfflineDirectSigner(): OfflineDirectSigner {
    return {
      getAccounts: async () => this.getAccounts(),
      signDirect: async (signerAddress: string, signDoc: CosmosDirectDoc) =>
        this.signDirect(signerAddress, signDoc),
    };
  }

  toOfflineAminoSigner(): OfflineAminoSigner {
    return {
      getAccounts: async () => this.getAccounts(),
      signAmino: async (signerAddress: string, signDoc: CosmosAminoDoc) =>
        this.signAmino(signerAddress, signDoc),
    };
  }
}
