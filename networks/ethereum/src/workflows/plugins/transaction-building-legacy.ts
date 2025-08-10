import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { EthereumWorkflowBuilderContext } from '../context';
import { TransactionParams } from '../../types/requests';
import { hexToBytes } from 'ethereum-cryptography/utils';
import { INPUT_VALIDATION_STAGING_KEYS } from './input-validation';
import { SIGNER_INFO_STAGING_KEYS } from './signer-info';
import { TRANSACTION_BUILDING_STAGING_KEYS } from './transaction-building';

export interface LegacyTransactionBuildingParams {
  transaction: TransactionParams;
  chainId: number;
  nonce: number;
  accountAddress: string;
}

export class LegacyTransactionBuildingPlugin extends BaseWorkflowBuilderPlugin<
  LegacyTransactionBuildingParams,
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

  protected afterRetrieveParams(params: Record<string, unknown>): LegacyTransactionBuildingParams {
    return params as unknown as LegacyTransactionBuildingParams;
  }

  protected async onBuild(
    ctx: EthereumWorkflowBuilderContext,
    params: LegacyTransactionBuildingParams
  ): Promise<void> {
    const { transaction, chainId, nonce } = params;

    // Parse transaction values
    const gasLimit = BigInt(transaction.gas);
    const value = transaction.value ? BigInt(transaction.value) : 0n;
    const to = transaction.to || '';
    const data = transaction.data || '0x';

    const gasPrice = BigInt(transaction.gasPrice!);

    // Convert to bytes for RLP encoding
    const nonceBytes = nonce === 0 ? new Uint8Array([]) : hexToBytes(this.toHexPadded(nonce));
    const gasPriceBytes = hexToBytes(this.toHexPadded(gasPrice));
    const gasLimitBytes = hexToBytes(this.toHexPadded(gasLimit));
    const toBytes = to ? hexToBytes(to) : new Uint8Array([]);
    const valueBytes = value === 0n ? new Uint8Array([]) : hexToBytes(this.toHexPadded(value));
    const dataBytes = hexToBytes(data);

    const unsignedTxArray = [
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

    ctx.setStagingData(TRANSACTION_BUILDING_STAGING_KEYS.UNSIGNED_TX_ARRAY, unsignedTxArray);
  }

  private toHexPadded(value: number | bigint): string {
    const hex = value.toString(16);
    return hex.length % 2 === 0 ? hex : '0' + hex;
  }
}

