import {
  BaseDocAuth,
  IKey,
  SignDocResponse,
} from '@interchainjs/types';
import { IEthereumGeneralOfflineSigner } from './wallet';
import { TransactionRequest } from 'ethers';

export class Eip712DocAuth extends BaseDocAuth<IEthereumGeneralOfflineSigner, TransactionRequest, unknown, string, string, string> {
  getPublicKey(): IKey {
    throw new Error('For EIP712, public key is not needed');
  }

  signDoc(doc: TransactionRequest): Promise<string> {
    return this.offlineSigner.sign(doc);
  }

}