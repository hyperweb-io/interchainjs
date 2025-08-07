import { IWallet } from '@interchainjs/types';
import {
  EthereumSignerConfig,
  EthereumSignedTransaction,
  IEIP1559EthereumSigner,
  EIP1559TransactionSignArgs,
  EthereumSignArgs
} from './types';
import { BaseEthereumSigner } from './base-signer';
import { TransactionParams } from '../types/requests';
import { EIP1559Workflow } from '../workflows/eip1559-workflow';
import { mergeEthereumSignerOptions } from './config';

/**
 * EIP-1559 Ethereum signer for modern transactions
 * Uses maxFeePerGas and maxPriorityFeePerGas instead of gasPrice
 */
export class EIP1559EthereumSigner extends BaseEthereumSigner implements IEIP1559EthereumSigner {
  constructor(auth: IWallet, config: EthereumSignerConfig) {
    super(auth, config);
  }

  /**
   * Sign an EIP-1559 transaction using maxFeePerGas and maxPriorityFeePerGas
   */
  async sign(args: EIP1559TransactionSignArgs): Promise<EthereumSignedTransaction> {
    // Merge signer config with operation-specific options
    const mergedOptions = mergeEthereumSignerOptions(this.config, args.options || {});

    // Convert to generic EthereumSignArgs for workflow
    const signArgs: EthereumSignArgs = {
      transaction: args.transaction,
      signerAddress: args.signerAddress,
      options: mergedOptions
    };

    // Use the EIP-1559 workflow to build and sign the transaction
    const workflow = new EIP1559Workflow(this, signArgs);
    return workflow.build();
  }

  /**
   * Helper method to create an EIP-1559 transaction with auto fee estimation
   */
  async signWithAutoFees(
    transaction: Omit<TransactionParams, 'maxFeePerGas' | 'maxPriorityFeePerGas' | 'type'>,
    signerAddress?: string,
    options?: { feeMultiplier?: number; priorityFeeMultiplier?: number }
  ): Promise<EthereumSignedTransaction> {
    const maxPriorityFeePerGas = await this.getMaxPriorityFeePerGas();
    const gasPrice = await this.getGasPrice();

    // Apply multipliers
    const priorityMultiplier = options?.priorityFeeMultiplier || 1.1;
    const feeMultiplier = options?.feeMultiplier || 1.2;

    const adjustedPriorityFee = BigInt(Math.ceil(Number(maxPriorityFeePerGas) * priorityMultiplier));
    const maxFeePerGas = BigInt(Math.ceil(Number(gasPrice) * feeMultiplier)) + adjustedPriorityFee;

    // Get the signer address if not provided
    const fromAddress = signerAddress || (await this.getAddresses())[0];

    // Add the from field for gas estimation
    const transactionWithFrom = {
      ...transaction,
      from: fromAddress
    };

    const gas = transaction.gas ? BigInt(transaction.gas) : await this.estimateGas(transactionWithFrom);

    const eip1559Transaction: TransactionParams & {
      maxFeePerGas: string;
      maxPriorityFeePerGas: string;
      gas: string;
      type: '0x2'
    } = {
      ...transaction,
      maxFeePerGas: '0x' + maxFeePerGas.toString(16),
      maxPriorityFeePerGas: '0x' + adjustedPriorityFee.toString(16),
      gas: '0x' + gas.toString(16),
      type: '0x2'
    };

    const signArgs: EIP1559TransactionSignArgs = {
      transaction: eip1559Transaction,
      signerAddress
    };

    return this.sign(signArgs);
  }

  /**
   * Helper method to create an EIP-1559 transaction with auto gas estimation
   */
  async signWithAutoGas(
    transaction: TransactionParams & { maxFeePerGas: string; maxPriorityFeePerGas: string },
    signerAddress?: string,
    options?: { gasMultiplier?: number }
  ): Promise<EthereumSignedTransaction> {
    const estimatedGas = await this.estimateGas(transaction);

    const eip1559Transaction: TransactionParams & {
      maxFeePerGas: string;
      maxPriorityFeePerGas: string;
      gas: string;
      type: '0x2'
    } = {
      ...transaction,
      gas: '0x' + estimatedGas.toString(16),
      type: '0x2'
    };

    const signArgs: EIP1559TransactionSignArgs = {
      transaction: eip1559Transaction,
      signerAddress
    };

    return this.sign(signArgs);
  }

  /**
   * Send a simple transfer transaction using EIP-1559
   */
  async sendTransfer(
    to: string,
    value: bigint,
    signerAddress?: string,
    options?: {
      maxFeePerGas?: bigint;
      maxPriorityFeePerGas?: bigint;
      gasLimit?: bigint;
      feeMultiplier?: number;
      priorityFeeMultiplier?: number;
    }
  ): Promise<EthereumSignedTransaction> {
    const transaction: Omit<TransactionParams, 'maxFeePerGas' | 'maxPriorityFeePerGas' | 'gas' | 'type'> = {
      to,
      value: '0x' + value.toString(16),
      data: '0x'
    };

    if (options?.maxFeePerGas && options?.maxPriorityFeePerGas) {
      const gasLimit = options?.gasLimit || await this.estimateGas(transaction);

      const eip1559Transaction: TransactionParams & {
        maxFeePerGas: string;
        maxPriorityFeePerGas: string;
        gas: string;
        type: '0x2'
      } = {
        ...transaction,
        maxFeePerGas: '0x' + options.maxFeePerGas.toString(16),
        maxPriorityFeePerGas: '0x' + options.maxPriorityFeePerGas.toString(16),
        gas: '0x' + gasLimit.toString(16),
        type: '0x2'
      };

      const signArgs: EIP1559TransactionSignArgs = {
        transaction: eip1559Transaction,
        signerAddress
      };

      return this.sign(signArgs);
    } else {
      return this.signWithAutoFees(transaction, signerAddress, options);
    }
  }

  /**
   * Send a contract interaction transaction using EIP-1559
   */
  async sendContractTransaction(
    to: string,
    data: string,
    value: bigint = 0n,
    signerAddress?: string,
    options?: {
      maxFeePerGas?: bigint;
      maxPriorityFeePerGas?: bigint;
      gasLimit?: bigint;
      feeMultiplier?: number;
      priorityFeeMultiplier?: number;
    }
  ): Promise<EthereumSignedTransaction> {
    const transaction: Omit<TransactionParams, 'maxFeePerGas' | 'maxPriorityFeePerGas' | 'gas' | 'type'> = {
      to,
      value: value > 0n ? '0x' + value.toString(16) : '0x0',
      data
    };

    if (options?.maxFeePerGas && options?.maxPriorityFeePerGas) {
      const gasLimit = options?.gasLimit || await this.estimateGas(transaction);

      const eip1559Transaction: TransactionParams & {
        maxFeePerGas: string;
        maxPriorityFeePerGas: string;
        gas: string;
        type: '0x2'
      } = {
        ...transaction,
        maxFeePerGas: '0x' + options.maxFeePerGas.toString(16),
        maxPriorityFeePerGas: '0x' + options.maxPriorityFeePerGas.toString(16),
        gas: '0x' + gasLimit.toString(16),
        type: '0x2'
      };

      const signArgs: EIP1559TransactionSignArgs = {
        transaction: eip1559Transaction,
        signerAddress
      };

      return this.sign(signArgs);
    } else {
      return this.signWithAutoFees(transaction, signerAddress, options);
    }
  }
}
