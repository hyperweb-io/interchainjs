import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { EthereumWorkflowBuilderContext } from '../context';
import { EthereumSignedTransaction } from '../../signers/types';
import { EthereumSecp256k1Signature } from '../../crypto';
import { keccak256 } from 'ethereum-cryptography/keccak';
import { bytesToHex } from 'ethereum-cryptography/utils';
import * as rlp from 'rlp';
import { TRANSACTION_BUILDING_STAGING_KEYS } from './transaction-building';
import { SIGNATURE_STAGING_KEYS } from './signature';

export interface Eip1559TxAssemblyParams {
  unsignedTxArray: any[];
  v: Uint8Array; // y-parity for EIP-1559
  signature: EthereumSecp256k1Signature;
}

export class Eip1559TxAssemblyPlugin extends BaseWorkflowBuilderPlugin<
  Eip1559TxAssemblyParams,
  EthereumWorkflowBuilderContext
> {
  constructor() {
    super([
      TRANSACTION_BUILDING_STAGING_KEYS.UNSIGNED_TX_ARRAY,
      SIGNATURE_STAGING_KEYS.V,
      SIGNATURE_STAGING_KEYS.SIGNATURE,
    ]);
  }

  protected afterRetrieveParams(params: Record<string, unknown>): Eip1559TxAssemblyParams {
    return params as unknown as Eip1559TxAssemblyParams;
  }

  protected async onBuild(
    ctx: EthereumWorkflowBuilderContext,
    params: Eip1559TxAssemblyParams
  ): Promise<void> {
    const signer = ctx.getSigner();
    const { unsignedTxArray, v, signature } = params;

    // Extract r and s from signature object
    const r = signature.r(32);
    const s = signature.s(32);

    // EIP-1559 transaction assembly
    const signedTxArray = [
      ...unsignedTxArray,
      v, // y-parity as bytes
      r,
      s
    ];

    const encodedTxSigned = rlp.encode(signedTxArray);
    const serializedTx = new Uint8Array([0x02, ...encodedTxSigned]);
    const rawTx = '0x02' + bytesToHex(encodedTxSigned);

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
}

