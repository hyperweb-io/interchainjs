import { toBase64 } from '@interchainjs/utils';
/**
 * Base implementation for Cosmos signers
 * Provides common functionality for both Amino and Direct signers
 */
export class BaseCosmosSignerImpl {
    wallet;
    config;
    constructor(wallet, config) {
        this.wallet = wallet;
        this.config = config;
    }
    // IUniSigner interface methods
    async getAccount() {
        return this.wallet.getAccount();
    }
    async signArbitrary(data) {
        return this.wallet.signArbitrary(data);
    }
    async broadcast(signed, options = {}) {
        const { mode = 'sync', checkTx = true, timeout = 30000 } = options;
        const txBase64 = toBase64(signed.txBytes);
        let response;
        switch (mode) {
            case 'sync':
                response = await this.config.queryClient.broadcastTxSync({ tx: txBase64 });
                break;
            case 'async':
                response = await this.config.queryClient.broadcastTxAsync({ tx: txBase64 });
                break;
            case 'commit':
                response = await this.config.queryClient.broadcastTxCommit({ tx: txBase64 });
                break;
            default:
                throw new Error(`Unsupported broadcast mode: ${mode}`);
        }
        const result = {
            transactionHash: response.hash,
            rawResponse: response
        };
        // For sync and async modes, optionally check transaction result
        if (checkTx && (mode === 'sync' || mode === 'async')) {
            try {
                // Wait for transaction to be included in a block
                const txResult = await this.waitForTransaction(response.hash, timeout);
                result.height = txResult.height;
                result.gasUsed = BigInt(txResult.gasUsed || 0);
                result.gasWanted = BigInt(txResult.gasWanted || 0);
                result.code = txResult.code;
                result.events = txResult.events;
            }
            catch (error) {
                // If we can't get the transaction result, still return the hash
                console.warn('Failed to get transaction result:', error);
            }
        }
        // For commit mode, extract additional information
        if (mode === 'commit' && 'deliverTx' in response) {
            const deliverTx = response.deliverTx;
            result.height = response.height;
            result.gasUsed = BigInt(deliverTx.gasUsed || 0);
            result.gasWanted = BigInt(deliverTx.gasWanted || 0);
            result.code = deliverTx.code;
            result.events = deliverTx.events;
        }
        return result;
    }
    async signAndBroadcast(args, options = {}) {
        const signed = await this.sign(args);
        return this.broadcast(signed, options);
    }
    async broadcastArbitrary(data, options = {}) {
        const { mode = 'sync' } = options;
        const txBase64 = toBase64(data);
        let response;
        switch (mode) {
            case 'sync':
                response = await this.config.queryClient.broadcastTxSync({ tx: txBase64 });
                break;
            case 'async':
                response = await this.config.queryClient.broadcastTxAsync({ tx: txBase64 });
                break;
            case 'commit':
                response = await this.config.queryClient.broadcastTxCommit({ tx: txBase64 });
                break;
            default:
                throw new Error(`Unsupported broadcast mode: ${mode}`);
        }
        return {
            transactionHash: response.hash,
            rawResponse: response
        };
    }
    // ICosmosSigner specific methods
    async getAddress() {
        const account = await this.getAccount();
        return account.address;
    }
    async getChainId() {
        return this.config.chainId;
    }
    async getAccountNumber(address) {
        // Query account information from the chain
        try {
            const accountQuery = await this.config.queryClient.queryAbci({
                path: `/cosmos/auth/v1beta1/accounts/${address}`,
                data: new Uint8Array(),
                prove: false
            });
            // Parse the account response (this would need proper protobuf decoding)
            // For now, return a default value
            // TODO: Implement proper account querying with protobuf decoding
            return BigInt(0);
        }
        catch (error) {
            console.warn('Failed to get account number, using default:', error);
            return BigInt(0);
        }
    }
    async getSequence(address) {
        // Query account information from the chain
        try {
            const accountQuery = await this.config.queryClient.queryAbci({
                path: `/cosmos/auth/v1beta1/accounts/${address}`,
                data: new Uint8Array(),
                prove: false
            });
            // Parse the account response (this would need proper protobuf decoding)
            // For now, return a default value
            // TODO: Implement proper account querying with protobuf decoding
            return BigInt(0);
        }
        catch (error) {
            console.warn('Failed to get sequence, using default:', error);
            return BigInt(0);
        }
    }
    getEncoder(typeUrl) {
        // This would typically use a registry of encoders
        // For now, return a basic implementation
        return {
            encode: (value) => {
                // TODO: Implement proper message encoding based on typeUrl
                return new Uint8Array();
            }
        };
    }
    getConverterFromTypeUrl(typeUrl) {
        // This would typically use a registry of converters
        // For now, return a basic implementation
        return {
            aminoType: typeUrl.replace(/^\//, ''),
            toAmino: (value) => value,
            fromAmino: (value) => value
        };
    }
    async simulateByTxBody(txBody, signerInfos) {
        // TODO: Implement transaction simulation
        // This would typically involve creating a simulation transaction and querying the chain
        return {
            gasInfo: {
                gasUsed: BigInt(200000) // Default gas estimate
            }
        };
    }
    get encodedPublicKey() {
        // This should be implemented by subclasses or cached from wallet
        throw new Error('encodedPublicKey must be implemented by subclass');
    }
    // Helper methods
    async waitForTransaction(hash, timeout = 30000) {
        const startTime = Date.now();
        while (Date.now() - startTime < timeout) {
            try {
                const txResult = await this.config.queryClient.getTx(hash);
                if (txResult) {
                    return txResult;
                }
            }
            catch (error) {
                // Transaction not found yet, continue waiting
            }
            // Wait 1 second before trying again
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        throw new Error(`Transaction ${hash} not found within timeout`);
    }
    createBroadcastFunction(txBytes) {
        return async (options = {}) => {
            return this.broadcastArbitrary(txBytes, options);
        };
    }
}
