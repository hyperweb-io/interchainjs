import { EthSecp256k1Auth } from '@interchainjs/auth/ethSecp256k1';
import { AccountData, AddrDerivation, Auth, IGeneralOfflineSignArgs, SIGN_MODE, SignerConfig } from '@interchainjs/types';

import { AminoDocSigner } from '../signers/amino';
import { defaultSignerOptions } from '../defaults';
import { DirectDocSigner } from '../signers/direct';
import {
  CosmosAccount,
  CosmosAminoDoc,
  CosmosDirectDoc,
  ICosmosAccount,
  ICosmosGeneralOfflineSigner,
  ICosmosWallet,
} from '@interchainjs/cosmos/types';
import {
  AminoSignResponse,
  DirectSignResponse,
  OfflineAminoSigner,
  OfflineDirectSigner,
  WalletOptions,
} from '@interchainjs/cosmos/types/wallet';
import { InjAccount } from '../accounts/inj-account';

/**
 * Cosmos HD Wallet for secp256k1
 */
export class EthSecp256k1HDWallet
implements ICosmosWallet, OfflineAminoSigner, OfflineDirectSigner
{
  constructor(
    public accounts: ICosmosAccount[],
    public options: SignerConfig
  ) {
    this.options = { ...defaultSignerOptions.Cosmos, ...options };
  }

  /**
   * Create a new HD wallet from mnemonic
   * @param mnemonic
   * @param derivations infos for derivate addresses
   * @param options wallet options
   * @returns HD wallet
   */
  static fromMnemonic(
    mnemonic: string,
    derivations: AddrDerivation[],
    options?: WalletOptions
  ) {
    const hdPaths = derivations.map((derivation) => derivation.hdPath);

    const auths: Auth[] = EthSecp256k1Auth.fromMnemonic(mnemonic, hdPaths, {
      bip39Password: options?.bip39Password,
    });

    const accounts = auths.map((auth, i) => {
      const derivation = derivations[i];
      return new InjAccount(derivation.prefix, auth);
    });

    return new EthSecp256k1HDWallet(accounts, options?.signerConfig);
  }

  /**
   * Get account data
   * @returns account data
   */
  async getAccounts(): Promise<readonly AccountData[]> {
    return this.accounts.map((acct) => {
      return acct.toAccountData();
    });
  }

  /**
   * Get one of the accounts using the address.
   * @param address
   * @returns
   */
  private getAcctFromBech32Addr(address: string) {
    const id = this.accounts.findIndex((acct) => acct.address === address);
    if (id === -1) {
      throw new Error('No such signerAddress been authed.');
    }
    return this.accounts[id];
  }

  /**
   * Sign direct doc for signerAddress
   */
  async signDirect(
    signerAddress: string,
    signDoc: CosmosDirectDoc
  ): Promise<DirectSignResponse> {
    const account = this.getAcctFromBech32Addr(signerAddress);

    const docSigner = new DirectDocSigner(account.auth, this.options);

    const resp = await docSigner.signDoc(signDoc);

    return {
      signed: resp.signDoc,
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

  /**
   * sign amino doc for signerAddress
   */
  async signAmino(
    signerAddress: string,
    signDoc: CosmosAminoDoc
  ): Promise<AminoSignResponse> {
    const account = this.getAcctFromBech32Addr(signerAddress);

    const docSigner = new AminoDocSigner(account.auth, this.options);

    const resp = await docSigner.signDoc(signDoc);

    return {
      signed: resp.signDoc,
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

  /**
   * Convert this to offline direct signer for hiding the private key.
   */
  toOfflineDirectSigner(): OfflineDirectSigner {
    return {
      getAccounts: async () => this.getAccounts(),
      signDirect: async (signerAddress: string, signDoc: CosmosDirectDoc) =>
        this.signDirect(signerAddress, signDoc),
    };
  }

  /**
   * Convert this to offline amino signer for hiding the private key.
   */
  toOfflineAminoSigner(): OfflineAminoSigner {
    return {
      getAccounts: async () => this.getAccounts(),
      signAmino: async (signerAddress: string, signDoc: CosmosAminoDoc) =>
        this.signAmino(signerAddress, signDoc),
    };
  }

  /**
   * Convert this to general offline signer for hiding the private key.
   * @param signMode sign mode. (direct or amino)
   * @returns general offline signer for direct or amino
   */
  toGeneralOfflineSigner(signMode: string): ICosmosGeneralOfflineSigner {
    return {
      signMode: signMode,
      getAccounts: async () => this.getAccounts(),
      sign: async ({ signerAddress, signDoc }: IGeneralOfflineSignArgs<string, CosmosDirectDoc | CosmosAminoDoc>) =>
        signMode === SIGN_MODE.SIGN_MODE_DIRECT ? this.signDirect(signerAddress, signDoc as CosmosDirectDoc) : this.signAmino(signerAddress, signDoc as CosmosAminoDoc),
    }
  }
}
