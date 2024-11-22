import {
  BaseDocAuth,
  IKey,
  SignDocResponse,
} from '@interchainjs/types';
import { IEthereumGenericOfflineSigner } from './wallet';
import { TransactionRequest } from 'ethers';

export class Eip712DocAuth extends BaseDocAuth<IEthereumGenericOfflineSigner, TransactionRequest, unknown, string, string, string> {

  constructor(
    offlineSigner: IEthereumGenericOfflineSigner,
    address: string,
  ) {
    super(offlineSigner, address);
  }

  static async fromOfflineSigner(offlineSigner: IEthereumGenericOfflineSigner) {
    const [account] = await offlineSigner.getAccounts();

    return new Eip712DocAuth(
      offlineSigner,
      account,
    );
  }

  getPublicKey(): IKey {
    throw new Error('For EIP712, public key is not needed');
  }

  signDoc(doc: TransactionRequest): Promise<string> {
    return this.offlineSigner.sign(doc);
  }

}