import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { EthereumWorkflowBuilderContext } from '../context';
import { EthereumTransactionType, TransactionOptions } from '../../signers/types';
import { resolveEthereumSignatureFormat } from '../../config';
import { createEthereumSignature } from '../../crypto';
import { keccak256 } from 'ethereum-cryptography/keccak';
import * as rlp from 'rlp';
import { TRANSACTION_BUILDING_STAGING_KEYS } from './transaction-building';
import { INPUT_VALIDATION_STAGING_KEYS } from './input-validation';
import { SIGNER_INFO_STAGING_KEYS } from './signer-info';

/**
 * Staging keys created by SignaturePlugin
 */
export const SIGNATURE_STAGING_KEYS = {
  SIGNATURE: 'signature',
  MESSAGE_HASH: 'message_hash',
  V: 'v'
} as const;

/**
 * Input parameters for SignaturePlugin
 */
export interface SignatureParams {
  unsignedTxArray: any[];
  transactionType: EthereumTransactionType;
  chainId: number;
}

/**
 * Plugin to create signature for Ethereum transactions
 */
export class SignaturePlugin extends BaseWorkflowBuilderPlugin<
  SignatureParams,
  EthereumWorkflowBuilderContext
> {
  constructor() {
    super([
      TRANSACTION_BUILDING_STAGING_KEYS.UNSIGNED_TX_ARRAY,
      INPUT_VALIDATION_STAGING_KEYS.TRANSACTION_TYPE,
      SIGNER_INFO_STAGING_KEYS.CHAIN_ID,
      INPUT_VALIDATION_STAGING_KEYS.OPTIONS
    ]);
  }

  protected async onBuild(
    ctx: EthereumWorkflowBuilderContext,
    params: SignatureParams
  ): Promise<void> {
    const signer = ctx.getSigner();
    const unsignedTxArray = ctx.getStagingData<any[]>(TRANSACTION_BUILDING_STAGING_KEYS.UNSIGNED_TX_ARRAY);
    const transactionType = ctx.getStagingData<EthereumTransactionType>(INPUT_VALIDATION_STAGING_KEYS.TRANSACTION_TYPE);
    const chainId = ctx.getStagingData<number>(SIGNER_INFO_STAGING_KEYS.CHAIN_ID);
    const options = ctx.getStagingData<TransactionOptions>(INPUT_VALIDATION_STAGING_KEYS.OPTIONS);

    let msgHash: Uint8Array;

    if (transactionType === EthereumTransactionType.EIP1559) {
      // EIP-1559 transaction hash
      const unsignedTx = rlp.encode(unsignedTxArray);
      msgHash = keccak256(new Uint8Array([0x02, ...unsignedTx]));
    } else {
      // Legacy transaction hash
      const unsignedTx = rlp.encode(unsignedTxArray);
      msgHash = keccak256(unsignedTx);
    }

    // Sign the message hash
    const rawSignature = await signer.signArbitrary(msgHash);

    // Convert to Ethereum-specific signature type
    const signature = createEthereumSignature(rawSignature);

    // Determine signature format - use configured format or default based on transaction type
    const defaultFormat = transactionType === EthereumTransactionType.EIP1559 ? 'simple' : 'eip155';
    const formatFn = resolveEthereumSignatureFormat(options?.signature?.format, defaultFormat);

    let v: number | Uint8Array;
    if (formatFn) {
      v = formatFn(signature, chainId);
    } else {
      // Fallback to default behavior
      v = signature.toEthereumFormat(chainId).v;
    }

    // Store signature and calculated v value in staging
    ctx.setStagingData(SIGNATURE_STAGING_KEYS.SIGNATURE, signature);
    ctx.setStagingData(SIGNATURE_STAGING_KEYS.MESSAGE_HASH, msgHash);
    ctx.setStagingData(SIGNATURE_STAGING_KEYS.V, v);
  }
}
