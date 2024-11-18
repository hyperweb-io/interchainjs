import { IKey, SignDocResponse, SignResponse, BroadcastOptions, Auth, isDocAuth } from "@interchainjs/types";
import { JsonRpcProvider, Provider, TransactionRequest, TransactionResponse } from "ethers";
import { UniEip712Signer } from "../types";
import { Eip712DocAuth } from "../types/docAuth";

export class Eip712Signer implements UniEip712Signer {
  provider: Provider;
  docAuth: Eip712DocAuth;

  constructor(auth: Auth, public endpoint: string) {
    this.provider = new JsonRpcProvider(endpoint);
    this.docAuth = auth as Eip712DocAuth;
  }

  async getAddress(): Promise<string> {
    return this.docAuth.address;
  }

  signArbitrary(data: Uint8Array): IKey | Promise<IKey> {
    throw new Error("Method not supported.");
  }

  async signDoc(doc: TransactionRequest): Promise<string> {
    return this.docAuth.signDoc(doc);
  }

  broadcastArbitrary(data: Uint8Array, options?: unknown): Promise<TransactionResponse> {
    throw new Error("Method not supported.");
  }

  async sign(args: TransactionRequest): Promise<SignResponse<string, TransactionRequest, TransactionResponse, BroadcastOptions>> {
    const result = await this.signDoc(args);

    return {
      tx: result,
      doc: args,
      broadcast: async () => {
        return this.provider.broadcastTransaction(result);
      }
    }
  }

  async signAndBroadcast(args: TransactionRequest): Promise<TransactionResponse> {
    const result = await this.signDoc(args);

    return this.provider.broadcastTransaction(result);
  }

  broadcast(tx: string): Promise<TransactionResponse> {
    return this.provider.broadcastTransaction(tx);
  }
}