import { CosmosSignArgs, EncodedMessage } from '../src/workflows/types';
import { BaseCosmosSignerImpl } from './base-signer';
import { CosmosSignerConfig, CosmosWallet, CosmosSignedTransaction } from './types';
/**
 * Direct (protobuf) signer for Cosmos transactions
 * Uses SIGN_MODE_DIRECT for protobuf-based signing
 */
export declare class DirectSigner extends BaseCosmosSignerImpl {
    private _encodedPublicKey?;
    constructor(wallet: CosmosWallet, config: CosmosSignerConfig);
    /**
     * Sign transaction using direct (protobuf) workflow
     */
    sign(args: CosmosSignArgs): Promise<CosmosSignedTransaction>;
    /**
     * Get the encoded public key
     */
    get encodedPublicKey(): EncodedMessage;
    /**
     * Initialize the public key (optional, will be done automatically on first sign)
     */
    initializePublicKey(): Promise<void>;
    /**
     * Static factory method for convenience
     */
    static create(wallet: CosmosWallet, config: CosmosSignerConfig): DirectSigner;
    /**
     * Static method to sign a transaction directly
     */
    static signTransaction(wallet: CosmosWallet, config: CosmosSignerConfig, args: CosmosSignArgs): Promise<CosmosSignedTransaction>;
}
