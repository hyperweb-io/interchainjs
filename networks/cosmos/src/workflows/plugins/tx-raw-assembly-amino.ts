import { TxRaw, AuthInfo, Fee } from '@interchainjs/cosmos-types';
import { BaseWorkflowBuilderPlugin, StdSignDoc } from '@interchainjs/types';
import { CosmosTx } from '../../signers/types';
import { CosmosWorkflowBuilderContext } from '../context';
import { MESSAGE_ENCODING_STAGING_KEYS } from './message-encoding';
import { AMINO_SIGNATURE_STAGING_KEYS } from './amino-signature';
import { SIGNER_INFO_STAGING_KEYS } from './signer-info';

/**
 * Input parameters for TxRawAssemblyAminoPlugin
 */
export interface TxRawAssemblyAminoParams {
  bodyBytes: Uint8Array;
  authInfoBytes: Uint8Array;
  signatures: Uint8Array[];
}

/**
 * Plugin to assemble final TxRaw from components for amino (JSON) signatures
 * Uses the signed StdSignDoc data that was saved as staging data after the amino-signature.ts plugin execution
 */
export class TxRawAssemblyAminoPlugin extends BaseWorkflowBuilderPlugin<
  TxRawAssemblyAminoParams,
  CosmosWorkflowBuilderContext
> {
  constructor() {
    super([
      AMINO_SIGNATURE_STAGING_KEYS.SIGNATURE,
      AMINO_SIGNATURE_STAGING_KEYS.SIGNED_STD_DOC,
      MESSAGE_ENCODING_STAGING_KEYS.TX_BODY_BYTES,
      SIGNER_INFO_STAGING_KEYS.SIGNER_INFO
    ]);
  }

  protected async onBuild(
    ctx: CosmosWorkflowBuilderContext,
    params: TxRawAssemblyAminoParams
  ): Promise<void> {
    // Get the signed StdSignDoc from amino signature plugin
    const signedStdDoc = ctx.getStagingData<StdSignDoc>(AMINO_SIGNATURE_STAGING_KEYS.SIGNED_STD_DOC);
    if (!signedStdDoc) {
      throw new Error('No signed StdSignDoc found in staging data');
    }

    // Get bodyBytes from message encoding
    const bodyBytes = ctx.getStagingData<Uint8Array>(MESSAGE_ENCODING_STAGING_KEYS.TX_BODY_BYTES);
    if (!bodyBytes) {
      throw new Error('No bodyBytes found in staging data');
    }

    // Get signer info from staging
    const signerInfo = ctx.getStagingData<any>(SIGNER_INFO_STAGING_KEYS.SIGNER_INFO);
    if (!signerInfo) {
      throw new Error('No signer info found in staging data');
    }

    // Reconstruct Fee from StdSignDoc
    const protobufFee = Fee.fromPartial({
      amount: signedStdDoc.fee.amount.map(coin => ({
        denom: coin.denom,
        amount: coin.amount
      })),
      gasLimit: BigInt(signedStdDoc.fee.gas),
      payer: signedStdDoc.fee.payer || '',
      granter: signedStdDoc.fee.granter || ''
    });

    // Reconstruct AuthInfo from signer info and fee
    const authInfo = AuthInfo.fromPartial({
      signerInfos: [signerInfo],
      fee: protobufFee,
    });

    // Encode auth info to bytes
    const authInfoBytes = AuthInfo.encode(authInfo).finish();

    // Get signature from Amino signature plugin
    const signature = ctx.getStagingData<{ value: Uint8Array }>(AMINO_SIGNATURE_STAGING_KEYS.SIGNATURE);
    if (!signature) {
      throw new Error('No amino signature found in staging data');
    }

    // Create final TxRaw
    const txRaw: CosmosTx = TxRaw.fromPartial({
      bodyBytes,
      authInfoBytes,
      signatures: [signature.value],
    });

    // Store as final result
    ctx.setFinalResult(txRaw);
  }
}
