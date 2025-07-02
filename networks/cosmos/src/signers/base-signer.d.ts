import { ICryptoBytes } from '@interchainjs/types';
import { TxBody, SignerInfo } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { ICosmosSigner, CosmosSignArgs, CosmosAccount, EncodedMessage } from '../src/workflows/types';
import { CosmosSignerConfig, CosmosWallet, CosmosBroadcastOptions, CosmosBroadcastResponse, CosmosSignedTransaction } from './types';
/**
 * Base implementation for Cosmos signers
 * Provides common functionality for both Amino and Direct signers
 */
export declare abstract class BaseCosmosSignerImpl implements ICosmosSigner {
    protected wallet: CosmosWallet;
    protected config: CosmosSignerConfig;
    constructor(wallet: CosmosWallet, config: CosmosSignerConfig);
    getAccount(): Promise<CosmosAccount>;
    signArbitrary(data: Uint8Array): Promise<ICryptoBytes>;
    abstract sign(args: CosmosSignArgs): Promise<CosmosSignedTransaction>;
    broadcast(signed: CosmosSignedTransaction, options?: CosmosBroadcastOptions): Promise<CosmosBroadcastResponse>;
    signAndBroadcast(args: CosmosSignArgs, options?: CosmosBroadcastOptions): Promise<CosmosBroadcastResponse>;
    broadcastArbitrary(data: Uint8Array, options?: CosmosBroadcastOptions): Promise<CosmosBroadcastResponse>;
    getAddress(): Promise<string>;
    getChainId(): Promise<string>;
    getAccountNumber(address: string): Promise<bigint>;
    getSequence(address: string): Promise<bigint>;
    getEncoder(typeUrl: string): {
        encode: (value: any) => Uint8Array;
    };
    getConverterFromTypeUrl(typeUrl: string): {
        aminoType: string;
        toAmino: (value: any) => any;
        fromAmino: (value: any) => any;
    };
    simulateByTxBody(txBody: TxBody, signerInfos: SignerInfo[]): Promise<{
        gasInfo: {
            gasUsed: bigint;
        };
    }>;
    get encodedPublicKey(): EncodedMessage;
    protected waitForTransaction(hash: string, timeout?: number): Promise<any>;
    protected createBroadcastFunction(txBytes: Uint8Array): (options?: CosmosBroadcastOptions) => Promise<CosmosBroadcastResponse>;
}
