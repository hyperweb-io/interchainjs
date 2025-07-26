import { TxBody } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { EncodedMessage, CosmosMessage, DocOptions } from '../../signers/types';
import { CosmosWorkflowBuilderContext } from '../context';
import { INPUT_VALIDATION_STAGING_KEYS } from './input-validation';

/**
 * Staging keys created by MessageEncodingPlugin
 */
export const MESSAGE_ENCODING_STAGING_KEYS = {
  TX_BODY: 'tx_body',
  TX_BODY_BYTES: 'tx_body_bytes'
} as const;

/**
 * Input parameters for MessageEncodingPlugin
 */
export interface MessageEncodingParams {
  messages: readonly CosmosMessage[];
  memo?: string;
  options?: DocOptions;
}

/**
 * Plugin to encode messages into TxBody
 */
export class MessageEncodingPlugin extends BaseWorkflowBuilderPlugin<
  MessageEncodingParams,
  CosmosWorkflowBuilderContext
> {
  constructor() {
    super([
      INPUT_VALIDATION_STAGING_KEYS.MESSAGES,
      { dependency: INPUT_VALIDATION_STAGING_KEYS.MEMO, optional: true },
      { dependency: INPUT_VALIDATION_STAGING_KEYS.OPTIONS, optional: true }
    ]);
  }

  protected async onBuild(
    ctx: CosmosWorkflowBuilderContext,
    params: MessageEncodingParams
  ): Promise<void> {
    const { messages, memo, options } = params;



    // Validate timeout height
    if (options?.timeoutHeight?.type === 'relative') {
      throw new Error(
        "timeoutHeight type shouldn't be 'relative'. Please update it to 'absolute' value."
      );
    }

    // Encode messages
    const encodedMessages: EncodedMessage[] = messages.map(({ typeUrl, value }) => {
      // Get encoder for this type
      const encoder = ctx.getSigner().getEncoder(typeUrl);
      if (!encoder) {
        throw new Error(`No encoder found for type: ${typeUrl}`);
      }

      // Ensure value is properly encoded
      const encodedWriter = encoder.encode(value);

      // Call finish() to get the actual Uint8Array
      const encodedValue = encodedWriter.finish();

      return {
        typeUrl,
        value: encodedValue,
      };
    });

    // Create TxBody
    const txBody = TxBody.fromPartial({
      messages: encodedMessages,
      memo: memo || '',
      timeoutHeight: options?.timeoutHeight?.value,
      extensionOptions: options?.extensionOptions,
      nonCriticalExtensionOptions: options?.nonCriticalExtensionOptions,
      timeoutTimestamp: options?.timeoutTimestamp?.value,
      unordered: options?.unordered ?? false,
    });

    // Encode TxBody to bytes
    const txBodyBytes = TxBody.encode(txBody).finish();

    // Store in staging
    ctx.setStagingData(MESSAGE_ENCODING_STAGING_KEYS.TX_BODY, txBody);
    ctx.setStagingData(MESSAGE_ENCODING_STAGING_KEYS.TX_BODY_BYTES, txBodyBytes);
  }
}