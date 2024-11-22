import { IApiClient } from "@interchainjs/types";
import { JsonRpcProvider, Provider, TransactionResponse } from "ethers";

export interface IEthereumApiClient extends IApiClient<string, TransactionResponse, unknown> {

}

export class ApiClient implements IEthereumApiClient {
  endpoint: string;
  provider: Provider;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
    this.provider = new JsonRpcProvider(endpoint);
  }

  async broadcast(txBytes: string): Promise<TransactionResponse> {
    return this.provider.broadcastTransaction(txBytes);
  }
}
