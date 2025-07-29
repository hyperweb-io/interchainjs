import { BaseWorkflowBuilderPlugin, ICryptoBytes } from '@interchainjs/types';
import { EthereumWorkflowBuilderContext } from '../context';
import { EthereumTransactionType } from '../../signers/types';
import { keccak256 } from 'ethereum-cryptography/keccak';
import { hexToBytes } from 'ethereum-cryptography/utils';
import * as rlp from 'rlp';
import { TRANSACTION_BUILDING_STAGING_KEYS } from './transaction-building';
import { INPUT_VALIDATION_STAGING_KEYS } from './input-validation';

/**
 * Staging keys created by SignaturePlugin
 */
export const SIGNATURE_STAGING_KEYS = {
  SIGNATURE: 'signature',
  MESSAGE_HASH: 'message_hash',
  R: 'r',
  S: 's',
  RECOVERY: 'recovery',
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
      TRANSACTION_BUILDING_STAGING_KEYS.CHAIN_ID
    ]);
  }

  protected async onBuild(
    ctx: EthereumWorkflowBuilderContext,
    params: SignatureParams
  ): Promise<void> {
    const signer = ctx.getSigner();
    const unsignedTxArray = ctx.getStagingData<any[]>(TRANSACTION_BUILDING_STAGING_KEYS.UNSIGNED_TX_ARRAY);
    const transactionType = ctx.getStagingData<EthereumTransactionType>(INPUT_VALIDATION_STAGING_KEYS.TRANSACTION_TYPE);
    const chainId = ctx.getStagingData<number>(TRANSACTION_BUILDING_STAGING_KEYS.CHAIN_ID);

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
    const signature = await signer.signArbitrary(msgHash);
    const sigBytes = signature.value;

    if (sigBytes.length !== 65) {
      throw new Error('Invalid signature length');
    }

    const r = sigBytes.slice(0, 32);
    const s = sigBytes.slice(32, 64);
    const recovery = sigBytes[64];

    let v: number | Uint8Array;

    if (transactionType === EthereumTransactionType.EIP1559) {
      // For EIP-1559, v is just the recovery bit (0 or 1)
      v = recovery === 0 ? new Uint8Array([]) : new Uint8Array([1]);
    } else {
      // For legacy transactions, v = chainId * 2 + 35 + recovery (EIP-155)
      v = chainId * 2 + 35 + recovery;
    }

    // Store signature components in staging
    ctx.setStagingData(SIGNATURE_STAGING_KEYS.SIGNATURE, signature);
    ctx.setStagingData(SIGNATURE_STAGING_KEYS.MESSAGE_HASH, msgHash);
    ctx.setStagingData(SIGNATURE_STAGING_KEYS.R, r);
    ctx.setStagingData(SIGNATURE_STAGING_KEYS.S, s);
    ctx.setStagingData(SIGNATURE_STAGING_KEYS.RECOVERY, recovery);
    ctx.setStagingData(SIGNATURE_STAGING_KEYS.V, v);
  }
}
