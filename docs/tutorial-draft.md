# Tutorial

## Implement Signers

### Cosmos Signers

A tutorial for creating cosmos signers:

For cosmos signers, several base classes are provided make it easier to build the signing process.

Here's steps:

1. extend the signer type based on UniSigner.
   1.1. figuring out the types of the following in the signing process:

   - @template SignArgs - arguments for sign method
   - @template Tx - transaction type
   - @template Doc - sign doc type
   - @template AddressResponse - address type
   - @template BroadcastResponse - response type after broadcasting a transaction
   - @template BroadcastOpts - options for broadcasting a transaction
   - @template SignDocResp - response type after signing a document

   e.g. In cosmos amino signing process:

   ```ts
   SignArgs = CosmosSignArgs = {
     messages: Message[];
     fee?: StdFee;
     memo?: string;
     options?: Option;
   }

   Tx = TxRaw //cosmos.tx.v1beta1.TxRaw

   Doc = StdSignDoc

   AddressResponse = string

   BroadcastResponse = { hash: string }
   ```

   1.2. Then we have a CosmosAminoSigner interface:

   ```ts
   export type CosmosAminoSigner = UniSigner<
     CosmosSignArgs,
     TxRaw,
     StdSignDoc,
     string,
     BroadcastResponse
   >;
   ```

2. Before implementing the CosmosAminoSigner, it's important to decide between using ByteAuth or DocAuth or both for handling signatures.

   #### ByteAuth

   ByteAuth offers flexibility by allowing the signing of arbitrary byte arrays using algorithms like secp256k1 or eth_secp256k1, making it suitable for low-level or protocol-agnostic use cases.

   Implement the ByteAuth interface:

   ```ts
   export class Secp256k1Auth implements ByteAuth<RecoveredSignatureType> {
   ```

   #### DocAuth

   DocAuth is tailored for signing structured documents like AminoSignDoc, providing a streamlined workflow for blockchain transactions with offline signers, while also ensuring compatibility with the Cosmos SDK's predefined document formats.

   ##### generic offline signer

   A generic offline signer is needed for wrapping an offline signer up to make a standard interface for offline signers:

   ```ts
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

   For details of ByteAuth and DocAuth, please see [here](/docs/auth.md#ByteAuth).

3. For building signed docs or signed transactions, we also need to implement the tx builder:

   3.1. Extends the BaseCosmosTxBuilder and set the sign mode.
   3.2. Implement the way building docs
   3.3. Implement the way serializing docs
   3.4. Implement the way syncing info from signed docs

   ```ts
   export class AminoTxBuilder extends BaseCosmosTxBuilder<CosmosAminoDoc> {
     constructor(
       protected ctx: BaseCosmosTxBuilderContext<
         AminoSignerBase<CosmosAminoDoc>
       >
     ) {
       // Extends the BaseCosmosTxBuilder and set the sign mode.
       super(SignMode.SIGN_MODE_LEGACY_AMINO_JSON, ctx);
     }

     // Implement the way building docs
     async buildDoc({
       messages,
       fee,
       memo,
       options,
     }: CosmosSignArgs): Promise<CosmosAminoDoc> {}

     // Implement the way serializing docs
     async buildDocBytes(doc: CosmosAminoDoc): Promise<Uint8Array> {}

     // Implement the way syncing info from signed docs
     async syncSignedDoc(
       txRaw: TxRaw,
       signResp: SignDocResponse<CosmosAminoDoc>
     ): Promise<TxRaw> {}
   }
   ```

4. Then we implement the AminoSigner. A signer's initiated by an Auth or offline signer. If an offlin signer is supported, a static method of fromWallet should be implemented to convert an offline signer to a DocAuth.

   ```ts
   export class AminoSigner
     extends AminoSignerBase<CosmosAminoDoc>
     implements CosmosAminoSigner
   {
     // a signer will be initiated by an Auth, ByteAuth or DocAuth
     constructor(
       auth: Auth,
       encoders: Encoder[],
       converters: AminoConverter[],
       endpoint?: string | HttpEndpoint,
       options?: SignerOptions
     ) {
       super(auth, encoders, converters, endpoint, options);
     }

     // Implement the way a signer getting tx builder to build signing process.
     getTxBuilder(): BaseCosmosTxBuilder<CosmosAminoDoc> {
       return new AminoTxBuilder(new BaseCosmosTxBuilderContext(this));
     }

     /**
      * get account
      */
     async getAccount() {}

     /**
      * create AminoSigner from wallet.
      * if there're multiple accounts in the wallet, it will return the first one by default.
      */
     static async fromWallet(
       signer: OfflineAminoSigner | IAminoGenericOfflineSigner,
       encoders: Encoder[],
       converters: AminoConverter[],
       endpoint?: string | HttpEndpoint,
       options?: SignerOptions
     ) {}

     /**
      * create AminoSigners from wallet.
      * if there're multiple accounts in the wallet, it will return all of the signers.
      */
     static async fromWalletToSigners(
       signer: OfflineAminoSigner | IAminoGenericOfflineSigner,
       encoders: Encoder[],
       converters: AminoConverter[],
       endpoint?: string | HttpEndpoint,
       options?: SignerOptions
     ) {}
   }
   ```

### Non-cosmos Signers

For non-cosmos signers, there won't be many base classes for the signing process. Developers have to implement the interfaces on themselves.
