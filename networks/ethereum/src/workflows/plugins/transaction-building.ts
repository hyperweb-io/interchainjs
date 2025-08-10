import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { EthereumWorkflowBuilderContext } from '../context';
import { EthereumTransactionType, TransactionOptions } from '../../signers/types';
import { TransactionParams } from '../../types/requests';
import { hexToBytes } from 'ethereum-cryptography/utils';
import { INPUT_VALIDATION_STAGING_KEYS } from './input-validation';
import { SIGNER_INFO_STAGING_KEYS } from './signer-info';

/**
 * Staging keys created by TransactionBuildingPlugin
 */
export const TRANSACTION_BUILDING_STAGING_KEYS = {
  UNSIGNED_TX_ARRAY: 'unsigned_tx_array',
} as const;

/**
 * Input parameters for TransactionBuildingPlugin
 */
export interface TransactionBuildingParams {
  transaction: TransactionParams;
  transactionType: EthereumTransactionType;
  signerAddress?: string;
  options?: any;
}

/**
 * Plugin to build unsigned transaction array for RLP encoding
 */
export class TransactionBuildingPlugin extends BaseWorkflowBuilderPlugin<
  TransactionBuildingParams,
  EthereumWorkflowBuilderContext
> {
  constructor() {
    super([
      INPUT_VALIDATION_STAGING_KEYS.TRANSACTION,
      INPUT_VALIDATION_STAGING_KEYS.TRANSACTION_TYPE,
      SIGNER_INFO_STAGING_KEYS.CHAIN_ID,
      SIGNER_INFO_STAGING_KEYS.NONCE,
      SIGNER_INFO_STAGING_KEYS.ACCOUNT_ADDRESS,
    ]);
  }

  protected afterRetrieveParams(params: Record<string, unknown>): TransactionBuildingParams {
    return {
      transaction: params.transaction as TransactionParams,
      transactionType: params.transactionType as EthereumTransactionType,
      signerAddress: params.signerAddress as string | undefined,
      options: params.options as Partial<TransactionOptions> | undefined,
    };
  }

  protected async onBuild(
    ctx: EthereumWorkflowBuilderContext,
    params: TransactionBuildingParams
  ): Promise<void> {
    const { transaction, transactionType } = params;

    // Fetch staged info
    const chainId = ctx.getStagingData<number>(SIGNER_INFO_STAGING_KEYS.CHAIN_ID);
    const nonce = ctx.getStagingData<number>(SIGNER_INFO_STAGING_KEYS.NONCE);
    // Note: account address is staged for downstream plugins that may need it
    // const accountAddress = ctx.getStagingData<string>(SIGNER_INFO_STAGING_KEYS.ACCOUNT_ADDRESS);

    // Parse transaction values
    const gasLimit = BigInt(transaction.gas);
    const value = transaction.value ? BigInt(transaction.value) : 0n;
    const to = transaction.to || '';
    const data = transaction.data || '0x';

    // Convert to bytes for RLP encoding
    const nonceBytes = nonce === 0 ? new Uint8Array([]) : hexToBytes(this.toHexPadded(nonce));
    const gasLimitBytes = hexToBytes(this.toHexPadded(gasLimit));
    const toBytes = to ? hexToBytes(to) : new Uint8Array([]);
    const valueBytes = value === 0n ? new Uint8Array([]) : hexToBytes(this.toHexPadded(value));
    const dataBytes = hexToBytes(data);

    let unsignedTxArray: any[];

    if (transactionType === EthereumTransactionType.EIP1559) {
      // EIP-1559 transaction
      const maxPriorityFeePerGas = BigInt(transaction.maxPriorityFeePerGas!);
      const maxFeePerGas = BigInt(transaction.maxFeePerGas!);
      const accessList: any[] = []; // Empty access list for now

      const chainIdBytes = hexToBytes(this.toHexPadded(chainId));
      const maxPriorityBytes = hexToBytes(this.toHexPadded(maxPriorityFeePerGas));
      const maxFeeBytes = hexToBytes(this.toHexPadded(maxFeePerGas));

      unsignedTxArray = [
        chainIdBytes,
        nonceBytes,
        maxPriorityBytes,
        maxFeeBytes,
        gasLimitBytes,
        toBytes,
        valueBytes,
        dataBytes,
        accessList
      ];
    } else {
      // Legacy transaction
      const gasPrice = BigInt(transaction.gasPrice!);
      const gasPriceBytes = hexToBytes(this.toHexPadded(gasPrice));

      unsignedTxArray = [
        nonceBytes,
        gasPriceBytes,
        gasLimitBytes,
        toBytes,
        valueBytes,
        dataBytes,
        hexToBytes(this.toHexPadded(chainId)), // chainId for EIP-155
        new Uint8Array([]), // empty r
        new Uint8Array([])  // empty s
      ];
    }

    // Store data in staging
    ctx.setStagingData(TRANSACTION_BUILDING_STAGING_KEYS.UNSIGNED_TX_ARRAY, unsignedTxArray);
  }

  /**
   * Helper method to convert values to padded hex strings
   */
  private toHexPadded(value: number | bigint): string {
    const hex = value.toString(16);
    return hex.length % 2 === 0 ? hex : '0' + hex;
  }
}
