import { IGeneralOfflineSigner, SIGN_MODE } from "@interchainjs/types";
import { TransactionRequest, Signer as ethersOfflineSigner } from "ethers";

export interface IEthereumGeneralOfflineSigner extends IGeneralOfflineSigner<string, unknown, string, TransactionRequest, string> {
}

export class EthereumGeneralOfflineSigner implements IEthereumGeneralOfflineSigner {
  constructor(public offlineSigner: ethersOfflineSigner) {
  }

  readonly signMode: string = SIGN_MODE.ETHEREUM_TX;

  getAccounts():  Promise<readonly string[]> {
    return this.offlineSigner.getAddress().then((address) => [address]);
  }

  sign(args: TransactionRequest): Promise<string> {
    return this.offlineSigner.signTransaction(args);
  }
}