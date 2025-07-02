import { ICryptoBytes } from '@interchainjs/types';
import { CosmosAccount } from '../src/workflows/types';
import { CosmosWallet } from './types';
/**
 * Simple wallet implementation for testing and development
 * Uses secp256k1 private key for signing
 */
export declare class SimpleWallet implements CosmosWallet {
    private privateKey;
    private publicKey;
    private addressPrefix;
    private _account?;
    constructor(privateKeyHex: string, addressPrefix?: string);
    /**
     * Get account information
     */
    getAccount(): Promise<CosmosAccount>;
    /**
     * Sign arbitrary data
     */
    signArbitrary(data: Uint8Array): Promise<ICryptoBytes>;
    /**
     * Get the public key in encoded format
     */
    getPublicKey(): Promise<{
        typeUrl: string;
        value: Uint8Array;
    }>;
    /**
     * Get the bech32 address
     */
    getAddress(): string;
    /**
     * Create wallet from mnemonic (simplified implementation)
     */
    static fromMnemonic(mnemonic: string, addressPrefix?: string, derivationPath?: string): SimpleWallet;
    /**
     * Create wallet from private key
     */
    static fromPrivateKey(privateKeyHex: string, addressPrefix?: string): SimpleWallet;
    /**
     * Generate a random wallet
     */
    static random(addressPrefix?: string): SimpleWallet;
    /**
     * Get the private key (for testing purposes only)
     */
    getPrivateKeyHex(): string;
    /**
     * Get the public key hex
     */
    getPublicKeyHex(): string;
}
