import { ICryptoBytes } from '@interchainjs/types';
import { CosmosAccount } from '../src/workflows/types';
import { CosmosQueryClient } from '../src/query/cosmos-query-client';
/**
 * Base configuration for Cosmos signers
 */
export interface CosmosSignerConfig {
    /** Chain ID for the network */
    chainId: string;
    /** Query client for chain interactions */
    queryClient: CosmosQueryClient;
    /** Address prefix (e.g., 'cosmos', 'osmo') */
    addressPrefix?: string;
    /** Gas price for fee calculation */
    gasPrice?: string | number;
    /** Gas multiplier for fee calculation */
    gasMultiplier?: number;
}
/**
 * Wallet interface for key management
 */
export interface CosmosWallet {
    /** Get the account information */
    getAccount(): Promise<CosmosAccount>;
    /** Sign arbitrary data */
    signArbitrary(data: Uint8Array): Promise<ICryptoBytes>;
    /** Get the public key in encoded format */
    getPublicKey(): Promise<{
        typeUrl: string;
        value: Uint8Array;
    }>;
}
/**
 * Broadcast options for transactions
 */
export interface CosmosBroadcastOptions {
    /** Broadcast mode: sync, async, or commit */
    mode?: 'sync' | 'async' | 'commit';
    /** Whether to check transaction result */
    checkTx?: boolean;
    /** Timeout for transaction confirmation (in ms) */
    timeout?: number;
}
/**
 * Broadcast response
 */
export interface CosmosBroadcastResponse {
    /** Transaction hash */
    transactionHash: string;
    /** Block height where transaction was included */
    height?: number;
    /** Gas used by the transaction */
    gasUsed?: bigint;
    /** Gas wanted by the transaction */
    gasWanted?: bigint;
    /** Transaction result code (0 = success) */
    code?: number;
    /** Raw response from the chain */
    rawResponse: unknown;
    /** Transaction events */
    events?: Array<{
        type: string;
        attributes: Array<{
            key: string;
            value: string;
        }>;
    }>;
}
/**
 * Signed transaction result
 */
export interface CosmosSignedTransaction {
    /** Transaction signature */
    signature: ICryptoBytes;
    /** Serialized transaction bytes */
    txBytes: Uint8Array;
    /** Broadcast function */
    broadcast(options?: CosmosBroadcastOptions): Promise<CosmosBroadcastResponse>;
}
