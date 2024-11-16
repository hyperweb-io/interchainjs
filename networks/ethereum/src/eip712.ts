import { IKey, SignDocResponse, SignResponse, BroadcastOptions } from "@interchainjs/types";
import { TransactionRequest, TransactionResponse } from "ethers";
import { UniEip712Signer } from "./types";

export class Eip712Signer implements UniEip712Signer {
  publicKey: IKey;
  getAddress(): Promise<string> {
    throw new Error("Method not implemented.");
  }
  signArbitrary(data: Uint8Array): IKey | Promise<IKey> {
    throw new Error("Method not implemented.");
  }
  signDoc(doc: TransactionRequest): SignDocResponse<TransactionRequest, IKey> | Promise<SignDocResponse<TransactionRequest, IKey>> {
    throw new Error("Method not implemented.");
  }
  broadcastArbitrary(data: Uint8Array, options?: unknown): Promise<TransactionResponse> {
    throw new Error("Method not implemented.");
  }
  sign(args: TransactionRequest): Promise<SignResponse<string, TransactionRequest, TransactionResponse, BroadcastOptions>> {
    throw new Error("Method not implemented.");
  }
  signAndBroadcast(args: TransactionRequest, options?: unknown): Promise<TransactionResponse> {
    throw new Error("Method not implemented.");
  }
  broadcast: (tx: string, options?: unknown) => Promise<TransactionResponse>;

}

// export class Eip712Signer<BroadcastResponse extends { hash: string }>
//   extends BaseSigner
//   implements UniEip712Signer<BroadcastResponse>
// {
//   constructor(
//     auth: Auth,
//     endpoint?: string | HttpEndpoint,
//     config?: SignerConfig
//   ) {
//     super(auth, config ?? defaultSignerConfig);
//   }

//   static async fromWallet(
//     _wallet: any,
//     endpoint?: string | HttpEndpoint,
//     config?: SignerConfig
//   ) {
//     throw new Error('Not implemented yet');
//   }

//   static async fromWalletToSigners(
//     _wallet: any,
//     endpoint?: string | HttpEndpoint,
//     config?: SignerConfig
//   ) {
//     throw new Error('Not implemented yet');
//   }

//   async getAddress(): Promise<string> {
//     throw new Error('Not implemented yet');
//   }

//   async signDoc(doc: Eip712Doc): Promise<SignDocResponse<Eip712Doc>> {
//     throw new Error('Not implemented yet');
//   }

//   async sign(
//     _: Eip712SignArgs
//   ): Promise<SignResponse<Eip712Tx, Eip712Doc, BroadcastResponse>> {
//     throw new Error('Not implemented yet');
//   }

//   async signAndBroadcast(_: Eip712SignArgs): Promise<BroadcastResponse> {
//     throw new Error('Not implemented yet');
//   }

//   async broadcast(_: Eip712Tx): Promise<BroadcastResponse> {
//     throw new Error('Not implemented yet');
//   }

//   async broadcastArbitrary(_: Uint8Array): Promise<BroadcastResponse> {
//     throw new Error('Not implemented yet');
//   }
// }
