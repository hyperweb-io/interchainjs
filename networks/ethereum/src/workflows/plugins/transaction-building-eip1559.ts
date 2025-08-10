import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { EthereumWorkflowBuilderContext } from '../context';
import { TransactionParams } from '../../types/requests';
import { hexToBytes } from 'ethereum-cryptography/utils';
import { INPUT_VALIDATION_STAGING_KEYS } from './input-validation';
import { SIGNER_INFO_STAGING_KEYS } from './signer-info';
import { TRANSACTION_BUILDING_STAGING_KEYS } from './transaction-building';

export interface Eip1559TransactionBuildingParams {
  transaction: TransactionParams;
  chainId: number;
  nonce: number;
  accountAddress: string;
}

export class Eip1559TransactionBuildingPlugin extends BaseWorkflowBuilderPlugin<
  Eip1559TransactionBuildingParams,
  EthereumWorkflowBuilderContext
> {
  constructor() {
    super([
      INPUT_VALIDATION_STAGING_KEYS.TRANSACTION,
      SIGNER_INFO_STAGING_KEYS.CHAIN_ID,
      SIGNER_INFO_STAGING_KEYS.NONCE,
      SIGNER_INFO_STAGING_KEYS.ACCOUNT_ADDRESS,
    ]);
  }

  protected afterRetrieveParams(params: Record<string, unknown>): Eip1559TransactionBuildingParams {
    return params as unknown as Eip1559TransactionBuildingParams;
  }

  protected async onBuild(
    ctx: EthereumWorkflowBuilderContext,
    params: Eip1559TransactionBuildingParams
  ): Promise<void> {
    const { transaction, chainId, nonce } = params;

    // Parse transaction values
    const gasLimit = BigInt(transaction.gas);
    const value = transaction.value ? BigInt(transaction.value) : 0n;
    const to = transaction.to || '';
    const data = transaction.data || '0x';

    const maxPriorityFeePerGas = BigInt(transaction.maxPriorityFeePerGas!);
    const maxFeePerGas = BigInt(transaction.maxFeePerGas!);
    const accessList: any[] = [];

    // Convert to bytes for RLP encoding
    const nonceBytes = nonce === 0 ? new Uint8Array([]) : hexToBytes(this.toHexPadded(nonce));
    const chainIdBytes = hexToBytes(this.toHexPadded(chainId));
    const maxPriorityBytes = hexToBytes(this.toHexPadded(maxPriorityFeePerGas));
    const maxFeeBytes = hexToBytes(this.toHexPadded(maxFeePerGas));
    const gasLimitBytes = hexToBytes(this.toHexPadded(gasLimit));
    const toBytes = to ? hexToBytes(to) : new Uint8Array([]);
    const valueBytes = value === 0n ? new Uint8Array([]) : hexToBytes(this.toHexPadded(value));
    const dataBytes = hexToBytes(data);

    const unsignedTxArray = [
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

    ctx.setStagingData(TRANSACTION_BUILDING_STAGING_KEYS.UNSIGNED_TX_ARRAY, unsignedTxArray);
  }

  private toHexPadded(value: number | bigint): string {
    const hex = value.toString(16);
    return hex.length % 2 === 0 ? hex : '0' + hex;
  }
}

