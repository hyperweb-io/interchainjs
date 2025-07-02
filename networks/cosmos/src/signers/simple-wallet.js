import { secp256k1 } from '@noble/curves/secp256k1';
import { sha256 } from '@noble/hashes/sha256';
import { ripemd160 } from '@noble/hashes/ripemd160';
import { toBech32, fromHex, toHex } from '@interchainjs/utils';
/**
 * Simple wallet implementation for testing and development
 * Uses secp256k1 private key for signing
 */
export class SimpleWallet {
    privateKey;
    publicKey;
    addressPrefix;
    _account;
    constructor(privateKeyHex, addressPrefix = 'cosmos') {
        this.privateKey = fromHex(privateKeyHex);
        this.publicKey = secp256k1.getPublicKey(this.privateKey, true); // compressed
        this.addressPrefix = addressPrefix;
    }
    /**
     * Get account information
     */
    async getAccount() {
        if (!this._account) {
            const address = this.getAddress();
            this._account = {
                address,
                pubkey: {
                    typeUrl: '/cosmos.crypto.secp256k1.PubKey',
                    value: this.publicKey
                }
            };
        }
        return this._account;
    }
    /**
     * Sign arbitrary data
     */
    async signArbitrary(data) {
        const hash = sha256(data);
        const signature = secp256k1.sign(hash, this.privateKey);
        return {
            data: signature.toCompactRawBytes(),
            algorithm: 'secp256k1'
        };
    }
    /**
     * Get the public key in encoded format
     */
    async getPublicKey() {
        return {
            typeUrl: '/cosmos.crypto.secp256k1.PubKey',
            value: this.publicKey
        };
    }
    /**
     * Get the bech32 address
     */
    getAddress() {
        // Create address from public key using standard Cosmos method
        const hash1 = sha256(this.publicKey);
        const hash2 = ripemd160(hash1);
        return toBech32(this.addressPrefix, hash2);
    }
    /**
     * Create wallet from mnemonic (simplified implementation)
     */
    static fromMnemonic(mnemonic, addressPrefix = 'cosmos', derivationPath = "m/44'/118'/0'/0/0") {
        // This is a simplified implementation
        // In a real implementation, you would use BIP39 and BIP32 for proper key derivation
        const hash = sha256(new TextEncoder().encode(mnemonic + derivationPath));
        const privateKeyHex = toHex(hash);
        return new SimpleWallet(privateKeyHex, addressPrefix);
    }
    /**
     * Create wallet from private key
     */
    static fromPrivateKey(privateKeyHex, addressPrefix = 'cosmos') {
        return new SimpleWallet(privateKeyHex, addressPrefix);
    }
    /**
     * Generate a random wallet
     */
    static random(addressPrefix = 'cosmos') {
        const privateKey = secp256k1.utils.randomPrivateKey();
        const privateKeyHex = toHex(privateKey);
        return new SimpleWallet(privateKeyHex, addressPrefix);
    }
    /**
     * Get the private key (for testing purposes only)
     */
    getPrivateKeyHex() {
        return toHex(this.privateKey);
    }
    /**
     * Get the public key hex
     */
    getPublicKeyHex() {
        return toHex(this.publicKey);
    }
}
