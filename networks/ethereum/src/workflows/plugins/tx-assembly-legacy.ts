import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { EthereumWorkflowBuilderContext } from '../context';
import { EthereumSignedTransaction } from '../../signers/types';
import { EthereumSecp256k1Signature } from '../../crypto';
import { keccak256 } from 'ethereum-cryptography/keccak';
import { hexToBytes, bytesToHex } from 'ethereum-cryptography/utils';
import * as rlp from 'rlp';
import { TRANSACTION_BUILDING_STAGING_KEYS } from './transaction-building';
import { SIGNATURE_STAGING_KEYS } from './signature';

export interface LegacyTxAssemblyParams {
  unsignedTxArray: any[];
  v: number | Uint8Array;
  signature: EthereumSecp256k1Signature;
}

export class LegacyTxAssemblyPlugin extends BaseWorkflowBuilderPlugin<
  LegacyTxAssemblyParams,
  EthereumWorkflowBuilderContext
> {
  constructor() {
    super([
      TRANSACTION_BUILDING_STAGING_KEYS.UNSIGNED_TX_ARRAY,
      SIGNATURE_STAGING_KEYS.V,
      SIGNATURE_STAGING_KEYS.SIGNATURE,
    ]);
  }

  protected afterRetrieveParams(params: Record<string, unknown>): LegacyTxAssemblyParams {
    return params as unknown as LegacyTxAssemblyParams;
  }

  protected async onBuild(
    ctx: EthereumWorkflowBuilderContext,
    params: LegacyTxAssemblyParams
  ): Promise<void> {
    const signer = ctx.getSigner();
    const { unsignedTxArray, v, signature } = params;

    // Extract r and s from signature object
    const r = signature.r(32);
    const s = signature.s(32);

    // Legacy transaction assembly
    const vBytes = typeof v === 'number' ? hexToBytes(this.toHexPadded(v)) : v;

    // Replace the last 3 elements (chainId, empty r, empty s) with actual signature
    const signedTxArray = [
      ...unsignedTxArray.slice(0, -3), // Remove chainId, empty r, empty s
      vBytes,
      r,
      s
    ];

    const serializedTx = rlp.encode(signedTxArray);
    const rawTx = '0x' + bytesToHex(serializedTx);

    // Calculate transaction hash
    const txHash = '0x' + bytesToHex(keccak256(serializedTx));

    // Create the signed transaction result
    const signedTx: EthereumSignedTransaction = {
      signature: signature,
      txBytes: serializedTx,
      rawTx,
      txHash,
      broadcast: (options?) => signer.broadcast(signedTx, options)
    };

    // Store as final result
    ctx.setFinalResult(signedTx);
  }

  private toHexPadded(value: number | bigint): string {
    const hex = value.toString(16);
    return hex.length % 2 === 0 ? hex : '0' + hex;
  }
}

