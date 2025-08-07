import { IWallet } from '@interchainjs/types';
import {
  EthereumSignerConfig,
  EthereumSignedTransaction,
  ILegacyEthereumSigner,
  LegacyTransactionSignArgs,
  EthereumSignArgs
} from './types';
import { BaseEthereumSigner } from './base-signer';
import { TransactionParams } from '../types/requests';
import { LegacyWorkflow } from '../workflows/legacy-workflow';
import { mergeEthereumSignerOptions } from './config';

/**
 * Legacy Ethereum signer for pre-EIP-1559 transactions
 * Uses gasPrice instead of maxFeePerGas/maxPriorityFeePerGas
 */
export class LegacyEthereumSigner extends BaseEthereumSigner implements ILegacyEthereumSigner {
  constructor(auth: IWallet, config: EthereumSignerConfig) {
    super(auth, config);
  }

  /**
   * Sign a legacy transaction using gasPrice
   */
  async sign(args: LegacyTransactionSignArgs): Promise<EthereumSignedTransaction> {
    // Merge signer config with operation-specific options
    const mergedOptions = mergeEthereumSignerOptions(this.config, args.options || {});

    // Convert to generic EthereumSignArgs for workflow
    const signArgs: EthereumSignArgs = {
      transaction: args.transaction,
      signerAddress: args.signerAddress,
      options: mergedOptions
    };

    // Use the legacy workflow to build and sign the transaction
    const workflow = new LegacyWorkflow(this, signArgs);
    return workflow.build();
  }

  /**
   * Helper method to create a legacy transaction with auto gas price
   */
  async signWithAutoGasPrice(
    transaction: Omit<TransactionParams, 'gasPrice'>,
    signerAddress?: string,
    options?: { gasMultiplier?: number }
  ): Promise<EthereumSignedTransaction> {
    const gasPrice = await this.getGasPrice();
    const gas = transaction.gas ? BigInt(transaction.gas) : await this.estimateGas(transaction);

    const legacyTransaction: TransactionParams & { gasPrice: string; gas: string } = {
      ...transaction,
      gasPrice: '0x' + gasPrice.toString(16),
      gas: '0x' + gas.toString(16)
    };

    const signArgs: LegacyTransactionSignArgs = {
      transaction: legacyTransaction,
      signerAddress,
      options
    };

    return this.sign(signArgs);
  }

  /**
   * Helper method to create a legacy transaction with auto gas estimation
   */
  async signWithAutoGas(
    transaction: Omit<TransactionParams, 'gasPrice' | 'gas'>,
    signerAddress?: string,
    options?: { gasMultiplier?: number; gasPrice?: bigint }
  ): Promise<EthereumSignedTransaction> {
    const gasPrice = options?.gasPrice || await this.getGasPrice();

    // Get the signer address if not provided
    const fromAddress = signerAddress || (await this.getAddresses())[0];

    // Add the from field for gas estimation
    const transactionWithFrom = {
      ...transaction,
      from: fromAddress
    };

    const estimatedGas = await this.estimateGas(transactionWithFrom);

    const legacyTransaction: TransactionParams & { gasPrice: string; gas: string } = {
      ...transaction,
      gasPrice: '0x' + gasPrice.toString(16),
      gas: '0x' + estimatedGas.toString(16)
    };

    const signArgs: LegacyTransactionSignArgs = {
      transaction: legacyTransaction,
      signerAddress,
      options
    };

    return this.sign(signArgs);
  }

  /**
   * Send a simple transfer transaction
   */
  async sendTransfer(
    to: string,
    value: bigint,
    signerAddress?: string,
    options?: { gasPrice?: bigint; gasLimit?: bigint }
  ): Promise<EthereumSignedTransaction> {
    const transaction: Omit<TransactionParams, 'gasPrice' | 'gas'> = {
      to,
      value: '0x' + value.toString(16),
      data: '0x'
    };

    if (options?.gasPrice && options?.gasLimit) {
      const legacyTransaction: TransactionParams & { gasPrice: string; gas: string } = {
        ...transaction,
        gasPrice: '0x' + options.gasPrice.toString(16),
        gas: '0x' + options.gasLimit.toString(16)
      };

      const signArgs: LegacyTransactionSignArgs = {
        transaction: legacyTransaction,
        signerAddress
      };

      return this.sign(signArgs);
    } else {
      return this.signWithAutoGas(transaction, signerAddress, { gasPrice: options?.gasPrice });
    }
  }

  /**
   * Send a contract interaction transaction
   */
  async sendContractTransaction(
    to: string,
    data: string,
    value: bigint = 0n,
    signerAddress?: string,
    options?: { gasPrice?: bigint; gasLimit?: bigint }
  ): Promise<EthereumSignedTransaction> {
    const transaction: Omit<TransactionParams, 'gasPrice' | 'gas'> = {
      to,
      value: value > 0n ? '0x' + value.toString(16) : '0x0',
      data
    };

    if (options?.gasPrice && options?.gasLimit) {
      const legacyTransaction: TransactionParams & { gasPrice: string; gas: string } = {
        ...transaction,
        gasPrice: '0x' + options.gasPrice.toString(16),
        gas: '0x' + options.gasLimit.toString(16)
      };

      const signArgs: LegacyTransactionSignArgs = {
        transaction: legacyTransaction,
        signerAddress
      };

      return this.sign(signArgs);
    } else {
      return this.signWithAutoGas(transaction, signerAddress, { gasPrice: options?.gasPrice });
    }
  }
}
