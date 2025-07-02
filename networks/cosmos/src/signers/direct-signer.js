import { SignMode } from '@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing';
import { TxRaw } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { DirectWorkflow } from '../src/workflows/direct-workflow';
import { BaseCosmosSignerImpl } from './base-signer';
/**
 * Direct (protobuf) signer for Cosmos transactions
 * Uses SIGN_MODE_DIRECT for protobuf-based signing
 */
export class DirectSigner extends BaseCosmosSignerImpl {
    _encodedPublicKey;
    constructor(wallet, config) {
        super(wallet, config);
    }
    /**
     * Sign transaction using direct (protobuf) workflow
     */
    async sign(args) {
        // Ensure we have the encoded public key
        if (!this._encodedPublicKey) {
            const pubKey = await this.wallet.getPublicKey();
            this._encodedPublicKey = pubKey;
        }
        // Get account information
        const account = await this.getAccount();
        const address = account.address;
        // Prepare signing options with chain-specific information
        const signingOptions = {
            chainId: this.config.chainId,
            accountNumber: await this.getAccountNumber(address),
            sequence: await this.getSequence(address),
            signMode: SignMode.SIGN_MODE_DIRECT,
            gasPrice: this.config.gasPrice,
            multiplier: this.config.gasMultiplier,
            ...args.options
        };
        // Create the direct workflow
        const workflow = new DirectWorkflow(this, {
            messages: args.messages,
            fee: args.fee,
            memo: args.memo || '',
            options: signingOptions
        });
        // Build and sign the transaction
        const txRaw = await workflow.build();
        // Serialize the transaction
        const txBytes = TxRaw.encode(txRaw).finish();
        // Extract signature from the transaction
        const signature = {
            data: txRaw.signatures[0],
            algorithm: 'secp256k1' // Default algorithm, could be configurable
        };
        // Create the signed transaction result
        const signedTx = {
            signature,
            txBytes,
            broadcast: this.createBroadcastFunction(txBytes)
        };
        return signedTx;
    }
    /**
     * Get the encoded public key
     */
    get encodedPublicKey() {
        if (!this._encodedPublicKey) {
            throw new Error('Public key not initialized. Call sign() first or initialize manually.');
        }
        return this._encodedPublicKey;
    }
    /**
     * Initialize the public key (optional, will be done automatically on first sign)
     */
    async initializePublicKey() {
        if (!this._encodedPublicKey) {
            const pubKey = await this.wallet.getPublicKey();
            this._encodedPublicKey = pubKey;
        }
    }
    /**
     * Static factory method for convenience
     */
    static create(wallet, config) {
        return new DirectSigner(wallet, config);
    }
    /**
     * Static method to sign a transaction directly
     */
    static async signTransaction(wallet, config, args) {
        const signer = new DirectSigner(wallet, config);
        return signer.sign(args);
    }
}
