import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { EthereumWorkflowBuilderContext } from '../context';
import { EthereumSignArgs, EthereumTransactionType } from '../../signers/types';
import { TransactionParams } from '../../types/requests';

/**
 * Staging keys created by InputValidationPlugin
 */
export const INPUT_VALIDATION_STAGING_KEYS = {
  TRANSACTION: 'transaction',
  SIGNER_ADDRESS: 'signer_address',
  OPTIONS: 'options',
  TRANSACTION_TYPE: 'transaction_type'
} as const;

/**
 * Input parameters for InputValidationPlugin
 */
export interface InputValidationParams {
  transaction: TransactionParams;
  signerAddress?: string;
  options?: any;
}

/**
 * Plugin to validate and normalize input parameters for Ethereum transactions
 */
export class InputValidationPlugin extends BaseWorkflowBuilderPlugin<
  InputValidationParams,
  EthereumWorkflowBuilderContext
> {
  private signArgs: EthereumSignArgs;

  constructor(signArgs: EthereumSignArgs) {
    super([]); // No dependencies
    this.signArgs = signArgs;
  }

  protected async onBuild(
    ctx: EthereumWorkflowBuilderContext,
    params: InputValidationParams
  ): Promise<void> {
    const { transaction, signerAddress, options } = this.signArgs;

    // Validate required fields
    if (!transaction) {
      throw new Error('Transaction is required');
    }

    if (!transaction.to && !transaction.data) {
      throw new Error('Either "to" address or "data" must be provided');
    }

    // Determine transaction type
    let transactionType: EthereumTransactionType;
    if (transaction.type === '0x2') {
      transactionType = EthereumTransactionType.EIP1559;
      // Validate EIP-1559 specific fields
      if (!transaction.maxFeePerGas) {
        throw new Error('maxFeePerGas is required for EIP-1559 transactions');
      }
      if (!transaction.maxPriorityFeePerGas) {
        throw new Error('maxPriorityFeePerGas is required for EIP-1559 transactions');
      }
    } else if (transaction.type === '0x1') {
      transactionType = EthereumTransactionType.EIP2930;
      // Validate EIP-2930 specific fields
      if (!transaction.gasPrice) {
        throw new Error('gasPrice is required for EIP-2930 transactions');
      }
    } else {
      transactionType = EthereumTransactionType.LEGACY;
      // Validate legacy transaction fields
      if (!transaction.gasPrice) {
        throw new Error('gasPrice is required for legacy transactions');
      }
    }

    // Validate gas limit
    if (!transaction.gas) {
      throw new Error('gas limit is required');
    }

    // Normalize addresses to lowercase
    const normalizedTransaction = {
      ...transaction,
      to: transaction.to?.toLowerCase(),
      from: transaction.from?.toLowerCase()
    };

    // Store validated data in staging
    ctx.setStagingData(INPUT_VALIDATION_STAGING_KEYS.TRANSACTION, normalizedTransaction);
    ctx.setStagingData(INPUT_VALIDATION_STAGING_KEYS.SIGNER_ADDRESS, signerAddress);
    ctx.setStagingData(INPUT_VALIDATION_STAGING_KEYS.OPTIONS, options);
    ctx.setStagingData(INPUT_VALIDATION_STAGING_KEYS.TRANSACTION_TYPE, transactionType);
  }
}
