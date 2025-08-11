import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { EthereumWorkflowBuilderContext } from '../context';
import { TransactionParams } from '../../types/requests';
import { INPUT_VALIDATION_STAGING_KEYS } from './input-validation';

/**
 * Staging keys created by SignerInfoPlugin
 */
export const SIGNER_INFO_STAGING_KEYS = {
  CHAIN_ID: 'chain_id',
  NONCE: 'nonce',
  ACCOUNT_ADDRESS: 'account_address',
} as const;

interface SignerInfoParams {
  transaction: TransactionParams;
  signerAddress?: string;
  options?: { chainId?: number };
}

/**
 * Plugin to fetch/derive network and signer info (chainId, nonce, account address)
 */
export class SignerInfoPlugin extends BaseWorkflowBuilderPlugin<
  SignerInfoParams,
  EthereumWorkflowBuilderContext
> {
  constructor() {
    super([
      INPUT_VALIDATION_STAGING_KEYS.TRANSACTION,
      { dependency: INPUT_VALIDATION_STAGING_KEYS.SIGNER_ADDRESS, optional: true },
      { dependency: INPUT_VALIDATION_STAGING_KEYS.OPTIONS, optional: true },
    ]);
  }

  protected afterRetrieveParams(params: Record<string, unknown>): SignerInfoParams {
    return params as unknown as SignerInfoParams;
  }

  protected async onBuild(
    ctx: EthereumWorkflowBuilderContext,
    params: SignerInfoParams
  ): Promise<void> {
    const signer = ctx.getSigner();
    const { transaction, signerAddress, options } = params;

    // Select account
    const accounts = await signer.getAccounts();
    const account = signerAddress
      ? accounts.find(acc => acc.address.toLowerCase() === signerAddress.toLowerCase())
      : accounts[0];

    if (!account) {
      throw new Error(signerAddress ? `Account with address ${signerAddress} not found` : 'No accounts available');
    }

    // Resolve chainId and nonce
    const chainId = options?.chainId ?? await signer.getChainId();
    const nonce = transaction.nonce ? parseInt(transaction.nonce, 16) : await signer.getNonce(account.address);

    // Stage results
    ctx.setStagingData(SIGNER_INFO_STAGING_KEYS.CHAIN_ID, chainId);
    ctx.setStagingData(SIGNER_INFO_STAGING_KEYS.NONCE, nonce);
    ctx.setStagingData(SIGNER_INFO_STAGING_KEYS.ACCOUNT_ADDRESS, account.address);
  }
}

