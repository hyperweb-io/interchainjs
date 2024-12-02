import { Secp256k1Auth } from '@interchainjs/auth/secp256k1';
import { AccountData, AddrDerivation, Auth, SignerConfig, SIGN_MODE, IGenericOfflineSignArgs, IDocSigner } from '@interchainjs/types';

import { AminoDocSigner } from '../signers/amino';
import { defaultSignerConfig } from '../defaults';
import { DirectDocSigner } from '../signers/direct';
import {
  CosmosAccount,
  CosmosAminoDoc,
  CosmosDirectDoc,
  ICosmosAccount,
  ICosmosWallet,
} from '../types';
import {
  AminoSignResponse,
  DirectSignResponse,
  ICosmosGenericOfflineSigner,
  OfflineAminoSigner,
  OfflineDirectSigner,
  WalletOptions,
} from '../types/wallet';
import { CosmosDocSigner } from './base-signer';

/**
 * Cosmos HD Wallet for secp256k1
 */
export abstract class BaseCosmosWallet<TDirectDocSigner extends CosmosDocSigner<CosmosDirectDoc>, TAminoDocSigner extends CosmosDocSigner<CosmosAminoDoc>>
implements ICosmosWallet, OfflineAminoSigner, OfflineDirectSigner
{
  public accounts: ICosmosAccount[];
  public options: SignerConfig;

  constructor(
    accounts: ICosmosAccount[],
    options: SignerConfig,
  ) {
    this.options = { ...defaultSignerConfig, ...options };
    this.accounts = accounts;
  }

  abstract getDirectDocSigner(auth: Auth, config: SignerConfig): TDirectDocSigner;
  abstract getAminoDocSigner(auth: Auth, config: SignerConfig): TAminoDocSigner;

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
  getAcctFromBech32Addr(address: string) {
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

    const docSigner = this.getDirectDocSigner(account.auth, this.options);

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

    const docSigner = this.getAminoDocSigner(account.auth, this.options);

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
  toGenericOfflineSigner(signMode: string): ICosmosGenericOfflineSigner {
    switch (signMode) {
      case SIGN_MODE.DIRECT:
        return {
          signMode: signMode,
          getAccounts: async () => this.getAccounts(),
          sign: async ({ signerAddress, signDoc }: IGenericOfflineSignArgs<string, CosmosDirectDoc>) =>
            this.signDirect(signerAddress, signDoc),
        };
      case SIGN_MODE.AMINO:
        return {
          signMode: signMode,
          getAccounts: async () => this.getAccounts(),
          sign: async ({ signerAddress, signDoc }: IGenericOfflineSignArgs<string, CosmosAminoDoc>) =>
            this.signAmino(signerAddress, signDoc),
        }

      default:
        throw new Error('Invalid sign mode');
    }
  }
}
