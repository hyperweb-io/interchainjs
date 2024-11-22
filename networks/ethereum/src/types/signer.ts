import {
  BaseWalletAccount,
  Domain,
  Eip712Data,
  UniSigner,
} from '@interchainjs/types';
import { TransactionRequest, TransactionResponse } from 'ethers';

export type UniEip712Signer
 = UniSigner<
  TransactionRequest,
  string,
  TransactionRequest,
  string,
  TransactionResponse,
  unknown,
  string
>;

export type Eip712Doc = Eip712Data<Domain, any>;