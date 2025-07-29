import { BaseWorkflowBuilderPlugin, ICryptoBytes } from '@interchainjs/types';
import { EthereumWorkflowBuilderContext } from '../context';
import { EthereumTransactionType, EthereumSignedTransaction } from '../../signers/types';
import { EthereumSecp256k1Signature, createEthereumSignature } from '../../crypto';
import { keccak256 } from 'ethereum-cryptography/keccak';
import { hexToBytes, bytesToHex } from 'ethereum-cryptography/utils';
import * as rlp from 'rlp';
import { TRANSACTION_BUILDING_STAGING_KEYS } from './transaction-building';
import { INPUT_VALIDATION_STAGING_KEYS } from './input-validation';
import { SIGNATURE_STAGING_KEYS } from './signature';

/**
 * Staging keys created by TxAssemblyPlugin
 */
export const TX_ASSEMBLY_STAGING_KEYS = {
  SIGNED_TX: 'signed_tx',
  TX_BYTES: 'tx_bytes',
  RAW_TX: 'raw_tx',
  TX_HASH: 'tx_hash'
} as const;

/**
 * Input parameters for TxAssemblyPlugin
 */
export interface TxAssemblyParams {
  unsignedTxArray: any[];
  transactionType: EthereumTransactionType;
  chainId: number;
  r: Uint8Array;
  s: Uint8Array;
  v: number | Uint8Array;
  signature: ICryptoBytes;
}

/**
 * Plugin to assemble final signed transaction from components
 */
export class TxAssemblyPlugin extends BaseWorkflowBuilderPlugin<
  TxAssemblyParams,
  EthereumWorkflowBuilderContext
> {
  constructor() {
    super([
      TRANSACTION_BUILDING_STAGING_KEYS.UNSIGNED_TX_ARRAY,
      INPUT_VALIDATION_STAGING_KEYS.TRANSACTION_TYPE,
      TRANSACTION_BUILDING_STAGING_KEYS.CHAIN_ID,
      SIGNATURE_STAGING_KEYS.R,
      SIGNATURE_STAGING_KEYS.S,
      SIGNATURE_STAGING_KEYS.V,
      SIGNATURE_STAGING_KEYS.SIGNATURE
    ]);
  }

  protected async onBuild(
    ctx: EthereumWorkflowBuilderContext,
    params: TxAssemblyParams
  ): Promise<void> {
    const signer = ctx.getSigner();
    const unsignedTxArray = ctx.getStagingData<any[]>(TRANSACTION_BUILDING_STAGING_KEYS.UNSIGNED_TX_ARRAY);
    const transactionType = ctx.getStagingData<EthereumTransactionType>(INPUT_VALIDATION_STAGING_KEYS.TRANSACTION_TYPE);
    const chainId = ctx.getStagingData<number>(TRANSACTION_BUILDING_STAGING_KEYS.CHAIN_ID);
    const r = ctx.getStagingData<Uint8Array>(SIGNATURE_STAGING_KEYS.R);
    const s = ctx.getStagingData<Uint8Array>(SIGNATURE_STAGING_KEYS.S);
    const v = ctx.getStagingData<number | Uint8Array>(SIGNATURE_STAGING_KEYS.V);
    const signature = ctx.getStagingData<ICryptoBytes>(SIGNATURE_STAGING_KEYS.SIGNATURE);

    let signedTxArray: any[];
    let serializedTx: Uint8Array;
    let rawTx: string;

    if (transactionType === EthereumTransactionType.EIP1559) {
      // EIP-1559 transaction assembly
      signedTxArray = [
        ...unsignedTxArray,
        v, // v is Uint8Array for EIP-1559
        r,
        s
      ];

      const encodedTxSigned = rlp.encode(signedTxArray);
      serializedTx = new Uint8Array([0x02, ...encodedTxSigned]);
      rawTx = '0x02' + bytesToHex(encodedTxSigned);
    } else {
      // Legacy transaction assembly
      const vBytes = typeof v === 'number' ? hexToBytes(this.toHexPadded(v)) : v;

      // Replace the last 3 elements (chainId, empty r, empty s) with actual signature
      signedTxArray = [
        ...unsignedTxArray.slice(0, -3), // Remove chainId, empty r, empty s
        vBytes,
        r,
        s
      ];

      serializedTx = rlp.encode(signedTxArray);
      rawTx = '0x' + bytesToHex(serializedTx);
    }

    // Calculate transaction hash
    const txHash = '0x' + bytesToHex(keccak256(serializedTx));

    // Create Ethereum-specific signature object
    const ethSignature = createEthereumSignature(signature);

    // Create the signed transaction result
    const signedTx: EthereumSignedTransaction = {
      signature: ethSignature,
      txBytes: serializedTx,
      rawTx,
      txHash,
      broadcast: (options?) => signer.broadcast(signedTx, options)
    };

    // Store results in staging
    ctx.setStagingData(TX_ASSEMBLY_STAGING_KEYS.SIGNED_TX, signedTx);
    ctx.setStagingData(TX_ASSEMBLY_STAGING_KEYS.TX_BYTES, serializedTx);
    ctx.setStagingData(TX_ASSEMBLY_STAGING_KEYS.RAW_TX, rawTx);
    ctx.setStagingData(TX_ASSEMBLY_STAGING_KEYS.TX_HASH, txHash);

    // Set as final result
    ctx.setFinalResult(signedTx);
  }

  /**
   * Helper method to convert values to padded hex strings
   */
  private toHexPadded(value: number | bigint): string {
    const hex = value.toString(16);
    return hex.length % 2 === 0 ? hex : '0' + hex;
  }
}
