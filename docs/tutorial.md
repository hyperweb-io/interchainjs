# Tutorial

In this tutorial, we'll explore how to implement signers using the InterchainJS library. We'll focus on both Cosmos signers and non-Cosmos signers, covering the necessary steps to create, configure, and use them effectively.

## Implementing Signers

Implementing signers involves creating classes that adhere to specific interfaces provided by InterchainJS. This ensures that your signers are compatible with the rest of the library and can handle transactions appropriately.

### Overview

Signers are responsible for authorizing transactions by providing cryptographic signatures. They can be categorized into two main types:

- **Cosmos Signers**: Utilize standard interfaces and base classes tailored for the Cosmos ecosystem.
- **Non-Cosmos Signers**: Require custom implementation of interfaces due to the lack of predefined base classes.

### General Steps to Implement Signers

1. **Define Signer Interfaces**: Outline the methods and properties your signer needs based on the transaction types it will handle.
2. **Choose Authentication Method**: Decide whether to use `ByteAuth`, `DocAuth`, or both, depending on the signing requirements.
3. **Implement Auth Classes**: Create classes for authentication that implement the necessary interfaces.
4. **Extend Base Signer Classes** (if available): For Cosmos signers, extend the provided base classes to streamline development.
5. **Build Transaction Builders**: Implement methods to construct transaction documents and serialize them for signing.
6. **Instantiate Signers**: Create instances of your signer classes with the appropriate authentication mechanisms.
7. **Test Your Signer**: Ensure your signer correctly signs transactions and interacts with the network as expected.

Proceed to the next sections for detailed guidance on implementing Cosmos and non-Cosmos signers.

### Cosmos Signers

When working with Cosmos signers, InterchainJS offers a suite of base classes that significantly streamline the development process. These classes provide foundational implementations of common functionalities required for signing transactions on the Cosmos network. By extending these base classes, you can inherit methods for message encoding, transaction building, and signature handling without rewriting boilerplate code.

Utilizing these base classes not only accelerates development but also ensures that your signer adheres to the standard practices and interfaces expected within the Cosmos ecosystem. This leads to better compatibility and easier integration with other tools and services that interact with Cosmos-based blockchains.

#### Steps to Implement Cosmos Signers

1. **Extend the Signer Type Based on `UniSigner`**:

   1.1 **Determine the Types Used in the Signing Process**:

   - `@template SignArgs`: Arguments for the `sign` method.
   - `@template Tx`: Transaction type.
   - `@template Doc`: Sign document type.
   - `@template AddressResponse`: Address type.
   - `@template BroadcastResponse`: Response type after broadcasting a transaction.
   - `@template BroadcastOpts`: Options for broadcasting a transaction.
   - `@template SignDocResp`: Response type after signing a document.

   For example, in the Cosmos Amino signing process:

   ```typescript
   SignArgs = CosmosSignArgs = {
     messages: Message[];
     fee?: StdFee;
     memo?: string;
     options?: Option;
   };

   Tx = TxRaw; // cosmos.tx.v1beta1.TxRaw

   Doc = StdSignDoc;

   AddressResponse = string;

   BroadcastResponse = { hash: string };
   ```

   1.2 **Define the `CosmosAminoSigner` Interface**:

   ```typescript
   export type CosmosAminoSigner = UniSigner<
     CosmosSignArgs,
     TxRaw,
     StdSignDoc,
     string,
     BroadcastResponse
   >;
   ```

2. **Choose Between `ByteAuth` or `DocAuth` for Handling Signatures**:

   #### ByteAuth

   `ByteAuth` offers flexibility by allowing the signing of arbitrary byte arrays using algorithms like `secp256k1` or `eth_secp256k1`, making it suitable for low-level or protocol-agnostic use cases.

   Implement the `ByteAuth` interface:

   ```typescript
   export class Secp256k1Auth implements ByteAuth<RecoveredSignatureType> {
     // Implementation details...
   }
   ```

   #### DocAuth

   `DocAuth` is tailored for signing structured documents like `AminoSignDoc`, providing a streamlined workflow for blockchain transactions with offline signers, while also ensuring compatibility with the Cosmos SDK's predefined document formats.

   ##### Generic Offline Signer

   A generic offline signer is needed to wrap an offline signer and create a standard interface:

   ```typescript
   export interface IAminoGenericOfflineSigner
     extends IGenericOfflineSigner<
       string,
       CosmosAminoDoc,
       AminoSignResponse,
       IAminoGenericOfflineSignArgs,
       AccountData
     > {}

   export class AminoGenericOfflineSigner
     implements IAminoGenericOfflineSigner
   {
     constructor(public offlineSigner: OfflineAminoSigner) {}

     readonly signMode: string = SIGN_MODE.AMINO;

     getAccounts(): Promise<readonly AccountData[]> {
       return this.offlineSigner.getAccounts();
     }

     sign({ signerAddress, signDoc }: IAminoGenericOfflineSignArgs) {
       return this.offlineSigner.signAmino(signerAddress, signDoc);
     }
   }
   ```

   For details of `ByteAuth` and `DocAuth`, please see [the authentication documentation](/docs/auth.md#ByteAuth).

3. **Implement the Transaction Builder**:

   3.1 **Extend `BaseCosmosTxBuilder` and Set the Sign Mode**:

   ```typescript
   export class AminoTxBuilder extends BaseCosmosTxBuilder<CosmosAminoDoc> {
     constructor(
       protected ctx: BaseCosmosTxBuilderContext<
         AminoSignerBase<CosmosAminoDoc>
       >
     ) {
       // Set the sign mode
       super(SignMode.SIGN_MODE_LEGACY_AMINO_JSON, ctx);
     }
   }
   ```

   3.2 **Implement Methods to Build and Serialize Documents**:

   ```typescript
   // Build the signing document
   async buildDoc({
     messages,
     fee,
     memo,
     options,
   }: CosmosSignArgs): Promise<CosmosAminoDoc> {
     // Implementation details...
   }

   // Serialize the signing document
   async buildDocBytes(doc: CosmosAminoDoc): Promise<Uint8Array> {
     // Implementation details...
   }
   ```

   3.3 **Sync Information from Signed Documents**:

   ```typescript
   async syncSignedDoc(
     txRaw: TxRaw,
     signResp: SignDocResponse<CosmosAminoDoc>
   ): Promise<TxRaw> {
     // Implementation details...
   }
   ```

4. **Implement the `AminoSigner`**:

   The signer is initiated by an `Auth` or offline signer. If an offline signer is supported, a static method `fromWallet` should be implemented to convert it to a `DocAuth`.

   ```typescript
   export class AminoSigner
     extends AminoSignerBase<CosmosAminoDoc>
     implements CosmosAminoSigner
   {
     // Initiated by an Auth, ByteAuth, or DocAuth
     constructor(
       auth: Auth,
       encoders: Encoder[],
       converters: AminoConverter[],
       endpoint?: string | HttpEndpoint,
       options?: SignerOptions
     ) {
       super(auth, encoders, converters, endpoint, options);
     }

     // Get the transaction builder
     getTxBuilder(): BaseCosmosTxBuilder<CosmosAminoDoc> {
       return new AminoTxBuilder(new BaseCosmosTxBuilderContext(this));
     }

     // Get account information
     async getAccount() {
       // Implementation details...
     }

     // Create AminoSigner from a wallet (returns the first account by default)
     static async fromWallet(
       signer: OfflineAminoSigner | IAminoGenericOfflineSigner,
       encoders: Encoder[],
       converters: AminoConverter[],
       endpoint?: string | HttpEndpoint,
       options?: SignerOptions
     ) {
       // Implementation details...
     }

     // Create AminoSigners from a wallet (returns all accounts)
     static async fromWalletToSigners(
       signer: OfflineAminoSigner | IAminoGenericOfflineSigner,
       encoders: Encoder[],
       converters: AminoConverter[],
       endpoint?: string | HttpEndpoint,
       options?: SignerOptions
     ) {
       // Implementation details...
     }
   }
   ```

### Non-Cosmos Signers

For non-Cosmos signers, there are fewer base classes available for the signing process. Developers need to implement the required interfaces themselves, ensuring compatibility with their specific blockchain or protocol.

#### Steps to Implement Non-Cosmos Signers

1. **Extend the Signer Type Based on `UniSigner`**:

   1.1 **Determine the Types Used in the Signing Process**:

   - `@template SignArgs`: Arguments for the `sign` method.
   - `@template Tx`: Transaction type.
   - `@template Doc`: Sign document type.
   - `@template AddressResponse`: Address type.
   - `@template BroadcastResponse`: Response type after broadcasting a transaction.
   - `@template BroadcastOpts`: Options for broadcasting a transaction.
   - `@template SignDocResp`: Response type after signing a document.

   For example, in the EIP-712 signing process:

   ```typescript
   SignArgs = TransactionRequest;

   Tx = string; // Serialized signed transaction as a hex string.

   Doc = TransactionRequest;

   AddressResponse = string;

   BroadcastResponse = TransactionResponse;

   BroadcastOpts = unknown;

   SignDocResp = string; // Signature string of the signed document.
   ```

   1.2 **Define the `UniEip712Signer` Interface**:

   ```typescript
   import { UniSigner } from "@interchainjs/types";
   import { TransactionRequest, TransactionResponse } from "ethers";

   export type UniEip712Signer = UniSigner<
     TransactionRequest,
     string,
     TransactionRequest,
     string,
     TransactionResponse,
     unknown,
     string
   >;
   ```

2. **Handle Authentication for Getting Signatures**

   2.1 **Implement the `Eip712DocAuth` Class**

   - **Purpose**: The `Eip712DocAuth` class extends `BaseDocAuth` to handle authentication and signing of documents using the EIP-712 standard in Ethereum.

   - **Constructor Parameters**:

     - `offlineSigner: IEthereumGenericOfflineSigner`: An interface for the Ethereum offline signer.
     - `address: string`: The Ethereum address associated with the signer.

   - **Static Method**:

     - `fromOfflineSigner(offlineSigner: IEthereumGenericOfflineSigner)`: Asynchronously creates an instance of `Eip712DocAuth` by retrieving the account address from the offline signer.

   - **Methods**:
     - `getPublicKey(): IKey`: Throws an error because, in EIP-712 signing, the public key is not typically required.
     - `signDoc(doc: TransactionRequest): Promise<string>`: Uses the `offlineSigner` to sign the transaction request document and returns the signature as a string.

   ```typescript
   import { BaseDocAuth, IKey, SignDocResponse } from "@interchainjs/types";
   import { IEthereumGenericOfflineSigner } from "./wallet";
   import { TransactionRequest } from "ethers";

   // Eip712DocAuth Class: Extends BaseDocAuth to provide authentication and document signing capabilities specific to EIP-712.
   export class Eip712DocAuth extends BaseDocAuth<
     IEthereumGenericOfflineSigner,
     TransactionRequest,
     unknown,
     string,
     string,
     string
   > {
     // Calls the parent BaseDocAuth constructor with the provided offlineSigner and address.
     constructor(
       offlineSigner: IEthereumGenericOfflineSigner,
       address: string
     ) {
       super(offlineSigner, address);
     }

     // Retrieves the accounts from the offlineSigner and creates a new instance of Eip712DocAuth with the first account's address.
     static async fromOfflineSigner(
       offlineSigner: IEthereumGenericOfflineSigner
     ) {
       const [account] = await offlineSigner.getAccounts();

       return new Eip712DocAuth(offlineSigner, account);
     }

     // Throws an error because EIP-712 does not require a public key for signing operations.
     getPublicKey(): IKey {
       throw new Error("For EIP712, public key is not needed");
     }

     // Calls the sign method of the offlineSigner to sign the TransactionRequest document and returns a promise that resolves to the signature string.
     signDoc(doc: TransactionRequest): Promise<string> {
       return this.offlineSigner.sign(doc);
     }
   }
   ```

   By implementing the `Eip712DocAuth` class as shown, you can handle authentication and document signing for Ethereum transactions using the EIP-712 standard.

3. **Implement the Signer**:

   Let's take Eip712Signer as an example:

   3.1 **Define the `Eip712Signer` Class**

   - **Purpose**: The `Eip712Signer` class implements the `UniEip712Signer` interface to provide signing and broadcasting capabilities for Ethereum transactions using the EIP-712 standard.

   - **Constructor Parameters**:

     - `auth: Auth`: An authentication object, expected to be an instance of `Eip712DocAuth`.
     - `endpoint: string`: The JSON-RPC endpoint URL of the Ethereum node.

   - **Properties**:

     - `provider: Provider`: An Ethereum provider connected to the specified endpoint.
     - `docAuth: Eip712DocAuth`: An instance of `Eip712DocAuth` for document authentication and signing.

   - **Static Methods**:

     - `static async fromWallet(signer: IEthereumGenericOfflineSigner, endpoint?: string)`: Creates an instance of `Eip712Signer` from an offline signer and an optional endpoint.

   ```typescript
   import {
     IKey,
     SignDocResponse,
     SignResponse,
     BroadcastOptions,
     Auth,
     isDocAuth,
     HttpEndpoint,
   } from "@interchainjs/types";
   import {
     JsonRpcProvider,
     Provider,
     TransactionRequest,
     TransactionResponse,
   } from "ethers";
   import { UniEip712Signer } from "../types";
   import { Eip712DocAuth } from "../types/docAuth";
   import { IEthereumGenericOfflineSigner } from "../types/wallet";

   // Eip712Signer Class: Implements the UniEip712Signer interface to handle signing and broadcasting Ethereum transactions using EIP-712.
   export class Eip712Signer implements UniEip712Signer {
     provider: Provider;
     docAuth: Eip712DocAuth;

     // Constructor: Initializes the provider and docAuth properties.
     constructor(auth: Auth, public endpoint: string) {
       this.provider = new JsonRpcProvider(endpoint);
       this.docAuth = auth as Eip712DocAuth;
     }

     // Creates an Eip712Signer from a wallet.
     // If there are multiple accounts in the wallet, it will return the first one by default.
     static async fromWallet(
       signer: IEthereumGenericOfflineSigner,
       endpoint?: string
     ) {
       const auth = await Eip712DocAuth.fromOfflineSigner(signer);

       return new Eip712Signer(auth, endpoint);
     }

     // Retrieves the Ethereum address from the docAuth instance.
     async getAddress(): Promise<string> {
       return this.docAuth.address;
     }

     // Not supported in this implementation; throws an error.
     signArbitrary(data: Uint8Array): IKey | Promise<IKey> {
       throw new Error("Method not supported.");
     }

     // Uses docAuth.signDoc to sign the TransactionRequest document.
     async signDoc(doc: TransactionRequest): Promise<string> {
       return this.docAuth.signDoc(doc);
     }

     // Not supported in this implementation; throws an error.
     broadcastArbitrary(
       data: Uint8Array,
       options?: unknown
     ): Promise<TransactionResponse> {
       throw new Error("Method not supported.");
     }

     // Calls signDoc to get the signed transaction (tx).
     // Returns a SignResponse object containing the signed transaction, original document, and a broadcast function.
     async sign(
       args: TransactionRequest
     ): Promise<
       SignResponse<
         string,
         TransactionRequest,
         TransactionResponse,
         BroadcastOptions
       >
     > {
       const result = await this.signDoc(args);

       return {
         tx: result,
         doc: args,
         broadcast: async () => {
           return this.provider.broadcastTransaction(result);
         },
       };
     }

     // Calls signDoc to sign the transaction and broadcasts it using provider.broadcastTransaction.
     async signAndBroadcast(
       args: TransactionRequest
     ): Promise<TransactionResponse> {
       const result = await this.signDoc(args);

       return this.provider.broadcastTransaction(result);
     }

     // Broadcasts a signed transaction (hex string) using provider.broadcastTransaction.
     broadcast(tx: string): Promise<TransactionResponse> {
       return this.provider.broadcastTransaction(tx);
     }
   }
   ```

   By implementing the `Eip712Signer` class as shown, you can facilitate Ethereum transaction signing and broadcasting in applications that require EIP-712 compliance.
